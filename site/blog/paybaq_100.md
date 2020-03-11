---
title: Building Paybaq.io, Part 1 - The Beginning
date: 2020-03-03
excerpt: The origin of Paybaq.io
featured_image: \images\blog\glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg
image_caption: Photo by Glenn Carstens-Peters on Unsplash
tags:
  - blog
  - paybaq
  - programming
---

*Part 1 of many about building Paybaq.io*

This is my first foray into blogging, and this is the first installment of what I intend to be a series of posts about building [paybaq.io](https://paybaq.io), an app I am building for tracking shared expenses and computing who should pay who so that everyone gets paid back.

## First, some back story

My first need for such a tool was after a hiking trip with a group of friends. Over the course of a 10 day trip with 5 people, various expenses would be covered by one person or another, like hotel rooms, rental cars, dinners, etc. Some expenses were shared by everyone, other's by just two or three.

When we got home, we made a Google sheet with every shared expense and attempted to calculate everyone's balance and who owed who. It was far more complex than we expected, and thus the idea was born.

As with most ideas, someone has had the same one, so there are tools that do just such a thing, and on our next trips we used these. But, as a software developer, I had opinions on the existing tools, and I was also looking for a side project that could be built as a web app since I had painfully little web development experience. This seemed like a sufficiently doable task, and I had a few things that I thought that I could improve upon over existing solutions.

## Actually getting started
I spent a wildly long time (I mean years on and off) pondering how best to build this, which included reading way too much about javascript frameworks, the pros and cons of SPAs over traditional web apps, and creating test projects for various configurations, including…

* Vuejs SPA with a node backend
* Vuejs SPA with a Django backend
* React SPA using Clojurescript with an Elixir/Phoenix backend
* Svelte SPA with Firebase and no backend 

I really had a serious problem. I love trying out new languages, and have a hard time not trying to find the "best" solution, but I also have a hard time conceptualizing without something concrete to look at and play with.

Although I got very far with a version that used an Elixir/Phoenix/Postgres backend, I eventually settled on using Firebase (Firestore and Auth) and a Vuejs SPA. Although somewhat frivolous, I'm enamored with the idea of realtime updates whenever anyone edits the sheet which Firestore makes really easy. I'm still a little hesitant not having an intermediary between the client and Firestore and relying on Firestore's security rules, but I'm just going to roll with it for now.

At some point in the future maybe I'll discuss all those other versions, but in the interest of brevity, this series will focus on the Vuejs/Firebase version.

## The Goals

Among the features that I wanted my little app to have, some of the primary ones were…

* **No need to sign up (nor convince anyone else to sign up)**: I just wanted to create a new sheet and go
* **No importing my contacts**: I just wanted to write in everyone's name and get on with it
* **No excessive navigation**: I imagined this could all fit on one page with numbers updated automatically
* **Mobile friendly**: I'm still undecided about dedicated mobile apps, but I certainly want the web app to be usable on phone.

Off and on I've had ideas for monetization, but I'm trying to focus on just getting something out there and getting people to use it, then maybe I can figure out if people would pay for it.

In the next post I'll delve into the design and structure of the app itself. Thanks for reading.