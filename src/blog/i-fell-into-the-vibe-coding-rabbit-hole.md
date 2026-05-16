---
layout: layouts/post.njk
title: I fell into the vibe coding rabbit hole. 7 days later I had a working app.
description: A week-long experiment with AI coding tools turned into a real product and a very different view of how software may be built.
excerpt: A week of vibe coding turned into a working app, a website, testers, and a much bigger shift in perspective than expected.
date: 2026-05-16
tags:
  - blog
---
A few months ago, if someone had told me they built a mobile app in a week mostly by talking to AI, I probably would have assumed there was a catch.

Either the app was not very real, or "built" meant changing a few colors in a template. Then I accidentally tested the idea myself.

Seven days later I had:

- a working mobile app
- AI-generated music powering it
- authentication and backend infrastructure
- a website and waitlist
- friends testing the product
- a completely different perspective on how software may be built in the future

I did not start with the intention of building a startup.

I mostly wanted to understand whether the current wave of AI coding tools was substance or hype, and how far I personally could get using vibe coding.

The result honestly blew my mind.

## Background: I've spent almost two decades around software, mostly without writing it

For over a decade I ran a software company called [vio:networks](https://www.vionetworks.de). I've seen the old world of building products:

Specifications. Backlogs. External agencies. Developer hiring. Long timelines. Unexpected invoices.

I also wrote code occasionally over the years. To be honest, I was never particularly good at it. I was usually the weakest developer around me, which became obvious because many of the people I worked with were excellent engineers. As soon as I could afford it, I mostly stopped coding myself and hired people who were much better than me.

That was rational. Software development was specialized and good developers were extremely valuable. For a long time, turning ideas into products remained expensive, not only financially, but also in coordination, time and access to the right people.

Having an idea was easy. Turning it into something people could actually use was hard. That gap felt enormous.

## I wanted to see how far I could get without coding

When I decided to test AI coding seriously, I intentionally avoided building something trivial.

I did not want:

- another landing page
- a chatbot wrapper
- an app showing static content
- a to-do list clone

I wanted something with enough complexity that failure seemed realistic. The experiment eventually became FlowShift, a focus music app. I picked the idea partly because music apps are deceptively complicated:

Playlists, streaming, playback controls, background audio, session logic, authentication, state management, mobile UX.

A music player feels much closer to a real product than a simple CRUD app. That made it interesting. But there was another rule:

I did not want to code. Not "less code". No code. I wanted to see how far I could get communicating purely in natural language. I never intentionally read a single line of code while building the first version. I described problems and features, copied error messages and simply explained what I wanted.

That was mostly it.

## The tools

I tried several AI coding tools.

### Cursor

Cursor is essentially an AI-powered IDE. A lot of developers love it. But it still felt too close to traditional programming for me. I did not want to become faster at coding, I wanted to avoid coding altogether.

So Cursor was not the right fit.

### Codex and Claude Code

I let both build an initial version of the app. Claude Code produced noticeably better results for what I was trying to do, so I continued with that.

The workflow looked absurdly simple:

Explain feature -> get implementation -> test -> complain -> repeat.

The surprising part was not only that AI generated code. That alone would already have impressed me. The surprising part was that a person with mediocre coding skills could coordinate entire stacks mostly through conversation.

That felt new.

![Claude Code helping build FlowShift.](/assets/blog/claude-code.jpg)

## Seven days later there was an actual app

The experiment became more serious than expected. Instead of proving that vibe coding was overhyped, I ended up with something I wanted to keep building.

The app became FlowShift. A focus music app designed around different mental states.

Examples:

- Deep Focus
- Flow Mode
- Creative Work
- Study Mode
- Task Batching

The idea came from my own frustration. Spotify playlists were not designed for what I was doing. Coding feels different from writing. Writing feels different from answering emails. Deep concentration feels different from creative work.

So instead of choosing genres, FlowShift focuses on choosing a work state. At some point I looked at the app and thought:

This is actually good enough that I want to publish it.

That surprised me more than anything. The original goal was experimentation. Somewhere along the way it became a product.

There's a realistic chance getting the app through Apple and Google approval processes will take longer than building version 1.0. I am not even saying that ironically.

![FlowShift mobile app screen.](/assets/blog/hero-flowshift-phone.jpg)

## Then I built the website

After deciding FlowShift might become real, I needed a website. Again I let Claude Code and Codex create initial versions. This time the opposite happened:

Codex produced the better result. So I kept iterating on that version and built the website around it. The entire process took roughly a day. That was another moment where I sat back thinking:

This should not feel this fast.

I've spent years around software projects. Building an app and a website that quickly would previously have required coordination across multiple people. Now large parts happened through conversations.

Again: mind blowing.

The result is here: [FlowShift](https://flowshift.fm)

![Codex helping build the FlowShift website.](/assets/blog/codex.jpg)

## The strangest realization

The biggest bottleneck increasingly does not feel like implementation. Implementation keeps getting cheaper. The harder questions remain:

What should exist?

What problem is worth solving?

How do people discover it?

Why would anyone care?

Taste may become more valuable. Distribution may become more valuable. Choosing the right thing to build may become more valuable.

I'm still thinking about that.

## A week changed my perspective more than I expected

Seven days of building obviously is not enough to predict the future of software. But it was enough to convince me something fundamental is changing. The friction between:

"I wish this existed"

and

"I built a first version"

feels dramatically smaller than before.

For someone who spent almost two decades around software, while mostly relying on people smarter than me to build things, that realization was strange.

The product is still pre-launch. But seven days earlier none of it existed.

That gap used to feel enormous. It does not anymore.

## Want to follow the experiment?

FlowShift is still in early testing and not publicly launched yet. If you're curious how the product evolves, or simply want to see where this AI building rabbit hole goes next, you can join the waitlist here:

[FlowShift Waitlist](https://www.flowshift.fm/#waitlist)

I suspect this will not be the last thing I build this way.
