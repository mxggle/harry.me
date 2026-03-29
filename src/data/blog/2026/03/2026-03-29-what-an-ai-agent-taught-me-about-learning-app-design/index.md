---
title: "What an AI Agent Taught Me About Learning App Design"
pubDatetime: 2026-03-29T13:15:00Z
description: "Insights on how collaborating with an AI agent transformed my approach to building language learning tools, from data structure to UI design."
tags: ["ai", "design", "learning"]
slug: what-an-ai-agent-taught-me-about-learning-app-design
draft: false
featured: true
---


I was building **Katakatana**, a web app for learning to decode Japanese katakana loanwords. The app teaches two core skills: recognizing what a katakana word *means* in English, and learning how to *read* it in romaji. Clean purpose, focused audience.

But somewhere between "this is a learning tool" and "let me build a homepage," I made the classic mistake.

I built a hero page.

---

## The Hero Page Trap

You know the pattern. Big headline. Subheadline. Visual teaser. Two CTAs. Then below the fold — the actual content.

It works great for SaaS landing pages. It communicates value propositions, establishes brand personality, converts strangers into signups. It is, objectively, a solid pattern for products where the user is *deciding whether to try something*.

But Katakatana isn't that kind of product. Users who open it already know what it does. They're there to practice. Every millisecond they spend reading "**Slash the Pattern**" in 8xl font is a millisecond they're not learning Japanese.

I knew something felt off, but I couldn't articulate it until I worked through the redesign with an AI agent.

---

## The First Useful Challenge

I described the problem: the homepage felt distracting. I wanted to give users direct access to practice modes. The agent's first move wasn't to start designing — it was to ask what I was actually trying to optimize for.

That question surfaced something I had been vague about. The app wasn't just a collection of practice modes. It had two specific learning pillars:

1. **Meaning** — katakana → English
2. **Reading** — katakana → romaji

These weren't equal items in a menu. They were the *reason the app existed*. The homepage should reflect that.

So we went through a few layout approaches — a dashboard grid, a minimal list, a today's-focus card. I gravitated toward showing both pillars as equal hero cards. Side by side, same visual weight, same prominence.

The agent pushed back.

---

## The Insight That Changed the Design

The pushback wasn't about aesthetics. It was about cognitive load.

> "Learning apps with the highest completion rates all converge on one principle: remove the daily decision. Every time a user opens the app and sees two equal options, they have a micro-decision to make — which one today? That friction compounds. Over weeks, it becomes a reason not to open the app."

This is the **paradox of choice** applied to habit formation. When a learning app presents two equally prominent options at the entry point, it forces users to self-assess their weaknesses before they've even started a session. That's the wrong moment for self-assessment. The right moment is inside the session, where the app can actually do something with that information.

The best learning apps — Duolingo, Anki, Lingodeer — don't ask you to pick a mode every time you open them. They give you one button: *continue*. The decision about what to practice has already been made, either by the system or by habit.

---

## The Three-Tier Solution

The redesign that emerged from this conversation has a structure I now think of as the correct default for focused learning tools:

**Tier 1 — One primary action, no decision required.**
A single large card: Daily Duel. It covers both learning pillars in one session. Users who open the app and just want to practice press one button and go. No thinking required.

**Tier 2 — Focused modes for intentional practice.**
Two equal cards below the hero: Decode (meaning only) and Romaji Read (reading only). These exist for users who know exactly what they want to work on — maybe they just failed a romaji quiz and want to drill that specific skill. They're prominent enough to find, secondary enough not to compete with the primary action.

**Tier 3 — Everything else in a compact list.**
Rapid Slash, Syllable Forge, Pattern Drill. All available, none competing for attention.

The structure encodes a learning philosophy directly into the UI: *start here, go deeper if you want to*.

---

## The Broader Lesson

The most useful thing the agent did in this process wasn't generate layout options or write the code. It was ask a question that forced me to be specific about what the product was for — and then reason from that specificity to a design conclusion I hadn't reached on my own.

A hero page isn't a bad component. It's a component with a specific job: convert unfamiliar visitors. If your users are already familiar, you've hired the wrong component for the job.

Every design pattern has a context where it's correct. Knowing which context you're in is the actual skill. Sometimes you figure that out yourself. Sometimes it takes an outside voice asking: *but what are your users actually here to do?*

That question is worth more than any mockup.

---

*Katakatana is a Next.js 15 app built with App Router, Tailwind CSS, and Zustand. The full homepage redesign touched four files and took under an hour from first conversation to passing build.*

---

## Appendix: Layout Evolution

The three options considered during the design process, and the final approved structure.

---

**Option A — Dashboard First**
```
┌─────────────────────────────────────────────┐
│  KATAKATANA          [Daily] [Data] [Conf]   │  ← SiteNav
├─────────────────────────────────────────────┤
│                                             │
│  MODULES                              v1.0  │
│  ┌───────────┐  ┌───────────┐  ┌──────────┐│
│  │ 📅        │  │ 🔤        │  │ 🈳       ││
│  │ Daily     │  │ Syllable  │  │ Romaji   ││
│  │ Duel      │  │ Forge     │  │ Read     ││
│  └───────────┘  └───────────┘  └──────────┘│
│  ┌───────────┐  ┌───────────┐  ┌──────────┐│
│  │ 🎯        │  │ ⚡        │  │ 📖       ││
│  │ Strike    │  │ Rapid     │  │ Learn    ││
│  │ Challenge │  │ Slash     │  │ Rules    ││
│  └───────────┘  └───────────┘  └──────────┘│
└─────────────────────────────────────────────┘
```
Grid of all 6 modes. Familiar pattern, but no hierarchy — every mode competes equally for attention.

---

**Option B — Today's Focus**
```
┌─────────────────────────────────────────────┐
│  KATAKATANA               ⚡3  [nav links]   │  ← SiteNav
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  TODAY'S DUEL                        │    │  ← Primary CTA
│  │           コーヒー                   │    │
│  │       10 words remaining             │    │
│  │         [ START → ]                  │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  OTHER MODES                                │
│  ┌───────────┐  ┌───────────┐  ┌──────────┐│
│  │ 🎯 STRIKE │  │ ⚡ RAPID  │  │ 🔤 BUILD ││
│  └───────────┘  └───────────┘  └──────────┘│
└─────────────────────────────────────────────┘
```
One dominant CTA, secondary modes below. Strong hierarchy — but the Daily Duel card alone doesn't communicate both learning pillars.

---

**Option C — Minimal Launcher**
```
┌─────────────────────────────────────────────┐
│  KATAKATANA               ⚡3  ★47           │  ← SiteNav
├─────────────────────────────────────────────┤
│  ────────────────────────────────────────   │
│  📅  Daily Duel        10 words  [ GO → ]   │
│  ────────────────────────────────────────   │
│  🎯  Strike Challenge   decode   [ GO → ]   │
│  ────────────────────────────────────────   │
│  ⚡  Rapid Slash         60-sec  [ GO → ]   │
│  ────────────────────────────────────────   │
│  🔤  Syllable Forge     builder  [ GO → ]   │
│  ────────────────────────────────────────   │
│  🈳  Romaji Read           read  [ GO → ]   │
│  ────────────────────────────────────────   │
└─────────────────────────────────────────────┘
```
Maximum simplicity, lowest cognitive load. But all modes feel equal — no signal about where to start.

---

**Final Design — Three-Tier (Approved)**
```
┌─────────────────────────────────────────────┐
│  KATAKATANA       ⚡3  ★47  [nav links]      │  ← SiteNav + NavStats
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  DAILY DUEL        [MEANING][READING]│    │  ← Primary CTA (→ /daily)
│  │  Meaning + Reading                   │    │
│  │           コーヒー                   │    │
│  │       [ START PRACTICE → ]           │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  FOCUS ON ONE SKILL                         │
│  ┌───────────────┐   ┌───────────────┐      │  ← Two focused modes
│  │ MEANING       │   │ READING       │      │
│  │ Decode        │   │ Romaji Read   │      │
│  │ kata → EN     │   │ kata → Romaji │      │
│  │ [ DECODE → ]  │   │  [ READ → ]   │      │
│  └───────────────┘   └───────────────┘      │
│                                             │
│  OTHER MODES                                │
│  ⚡  Rapid Slash             60-sec →       │  ← Compact list
│  🔤  Syllable Forge          Builder →      │
│  🔍  Pattern Drill           Patterns →     │
│                                             │
│  📖 LEARN RULES      📊 DASHBOARD           │  ← Footer links
└─────────────────────────────────────────────┘
```
One frictionless default action. Two focused single-skill modes for intentional practice. Everything else secondary. The hierarchy encodes the learning philosophy directly into the UI.
