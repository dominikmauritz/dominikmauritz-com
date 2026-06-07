---
layout: layouts/post.njk
title: flowshift.fm scores 100 points in every PageSpeed category
description: How a modern stack, AI-assisted development, and one day of iteration took the FlowShift website to perfect PageSpeed Insights scores.
excerpt: A modern stack, AI-assisted development, and one day of iteration took the FlowShift website from zero to perfect PageSpeed Insights scores.
date: 2026-06-08
tags:
  - blog
---
<aside class="editor-note" aria-label="TLDR">
  <p>
    <strong>TLDR:</strong> The <a href="https://flowshift.fm">FlowShift</a> website now gets 100 points in every PageSpeed Insights category. The useful lesson for me was not only the score. It was how quickly a modern stack and AI-assisted iteration turned performance work into a normal part of the build process.
  </p>
</aside>

The FlowShift website gets 100 points in every PageSpeed Insights category.

Not "pretty good for a real website". Not "fast enough if you ignore one annoying metric". PageSpeed Insights shows 100 across the board:

![PageSpeed Insights report for flowshift.fm showing 100 points in Performance, Accessibility, Best Practices, and SEO.](/assets/blog/flowshift-pagespeed-insights-100.webp)

That is still not a common result for a website that actually looks decent.

It is easier to get there with a blank HTML page, a technical demo, or a site built mainly to win a benchmark.

But for a real product website, with design, images, copy, waitlist, analytics and all the small details that usually make websites slower, trade-offs are common. There is often one category where you settle for 92 and move on with your life.

flowshift.fm ended up being a useful counterexample.

## I used to spend weeks chasing these numbers

This is why the result stood out to me.

In the past, I spent weeks optimizing my former company's website for PageSpeed Insights. We cared about it because performance matters. It is better for users. It is better for conversion. And of course it matters for Google rankings and SEO.

That website was built with the classic tech stack of the 2010s:

- WordPress
- a MySQL backend
- plugins for almost everything
- a theme that did many things at once

It worked. It was not a bad website. But optimizing it felt like archaeology.

Every improvement touched five other things. A plugin loaded CSS where it was not needed. Another plugin added JavaScript globally. Images were generated in several sizes but not always the right ones. Caching helped, until it did not. A small visual change could add layout shift. A necessary marketing integration could hurt performance.

You could absolutely make a WordPress site fast. But it often felt like trying to remove weight from a suitcase that had been packed by twelve people over ten years.

So in my head, PageSpeed optimization belonged to the category of painful, slow, slightly obsessive work.

## Then I asked AI how to build this website differently

So I had a conversation with AI about the stack. I asked what I should use if the goal was a beautiful, simple, very fast website.

The recommendation was:

- Astro for the framework
- Vercel for hosting
- Cloudflare as a CDN

The website did not need a heavy application framework. It needed fast pages, good images, clean HTML, and only the JavaScript that was actually necessary. Astro is very good at that. Vercel makes deployment easy. Cloudflare adds another layer of speed and resilience in front of it.

So I went with the recommendation and asked Codex to create the website.

## Ten minutes later there was a first version

This is one of the parts of AI-assisted building I appreciate most.

I explained what the website should communicate, what the mood should be, and what pages or sections I wanted.

About ten minutes later, I had a strong first version.

Not perfect. Not final. But genuinely good. Good enough that I could react to it, refine it, and start making taste-based decisions instead of staring at an empty project.

The first PageSpeed Insights result, before any serious optimization, was already above 90 in every category.

That mattered almost as much as the final score.

In the old world, 90+ across the board often felt like the destination. Here it was the starting point.

## The optimization loop was straightforward

PageSpeed Insights does something very useful: it tells you what can be improved.

In the past, this meant opening dev tools, reading documentation, testing plugins, changing build settings, compressing assets, redeploying, measuring again, and hoping you did not break anything.

This time the loop was different.

I took screenshots of the PageSpeed Insights suggestions and gave them to Codex one by one.

![Codex responding to a PageSpeed Insights suggestion and changing the FlowShift website so audio files only load after user interaction.](/assets/blog/codex-pagespeed-suggestion.webp)

The workflow was basically:

1. Run PageSpeed Insights.
2. Screenshot the issue.
3. Give the screenshot to Codex.
4. Let Codex make the necessary change.
5. Deploy and measure again.

Some fixes were small. Some were about image handling. Some were about metadata, accessibility details or removing unnecessary work from the browser.

But the process felt calm. PageSpeed identified the remaining issues. Codex translated them into code changes. I tested the result.

After a few rounds, every category was green.

Then everything was 100.

## Modern defaults matter

I do not think the lesson is "AI magically makes websites fast".

The stack mattered.

Astro helped because it starts from a performance-friendly model. Vercel helped because deployment and hosting were straightforward. Cloudflare helped because delivery was fast and close to users. Codex helped because it could implement the changes quickly and keep the optimization loop moving.

The combination mattered more than any single tool.

With the old WordPress and MySQL setup, I probably could have improved the score too, but the architecture would have pushed back harder.

Good defaults compound.

Less JavaScript by default. Clean image handling. Easy deployment. And if AI can make code changes from plain-language instructions, the feedback loop gets shorter.

At some point, what used to take weeks fits into a day.

FlowShift is here: [flowshift.fm](https://flowshift.fm)

And yes, I still rerun PageSpeed Insights occasionally, because performance only matters if it stays part of the process.
