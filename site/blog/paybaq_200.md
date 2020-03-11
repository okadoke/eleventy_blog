---
title: Building Paybaq.io, Part 2 - The Stack
date: 2020-03-05
excerpt: The tech stack behind Paybaq.io
featured_image: \images\blog\eli-francis-_M-DrbiNFa4-unsplash.jpg
image_caption: Photo by Eli Francis on Unsplash
tags:
  - blog
  - paybaq
---

*Check out part 1 if you missed it*

During my first foray into web apps, I chose to use VueJs as my framework of choice after much reading on the comparisons with Angular and React. Since then I've tried a number of other frameworks such as Svelte, Imba, and Marko, though I never bothered using Angular or React. Angular has always seemed a bit heavy for my uses, but I'm not sure why I have such an aversion to React, I think I may just like the underdogs. On a more rational level, I think it's more about templates vs JSX, and, from what I can tell, the more automatic reactivity that you get from VueJs. But you really shouldn't listen to me, because I haven't even used React, I've only read about it!

However, I can confidently give one bit of advice: **Just pick something and go with it**. And when you fail to adhere to that advice, don't beat yourself up, I find it nearly impossible not to second-guess and re-prioritize trade-offs that I've already made decisions about.
The other philosophical discussion I had with myself over and over was on the subject of SPA vs traditional html serving.

Paybaq consists of a VueJs web app and uses Firebase for data storage (Firestore), hosting, and authentication. The frontend VueJs web app communicates directly with Firestore, listening for updates when data changes, and writing data when the user makes changes. Firestore makes use of security rules that define under what circumstances data can be read from and written to. I won't go into detail about how Firestore works.

## Firestore
Data in Paybaq is pretty straight forward, and at least right now is minimally relational, and generally looks like this:

```
Ledger
- Person (many)
  - name
  - email
- Payment (many)
  - amount
  - description
  - paid_by (Person Id)
  - paid_for (Array of Person Ids)

User
- LedgerId (many)
``` 

People often run into problems with Firestore if their data requires joins or complex queries, but data access in Paybaq is simple because each ledger is self-contained, i.e. doesn't need to reference anything outside itself.

The one thing lacking in the above data structures is anything related to balances or repayments. I could have used something like Google's cloud functions to compute repayments when the ledger changed, but I didn't want to have to add in that extra complexity if it wasn't necessary. 

Instead, repayments are computed on the client whenever the ledger changes. I initially had the client write the repayment data to Firestore along with . Technically, someone could modify the javascript to fowl up the data for a Ledger, but they'd only be hurting themselves and their collaborators.

Some of the important security rules include not being able to get a listing of all Ledgers, both to prevent excessive data read charges, and to prevent someone from accessing Ledgers that they don't have explicit links to.