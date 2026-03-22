---
title: "🧠 How I Built the Perfect Prompt to Explain Japanese Grammar from First Principles"
pubDatetime: 2025-10-13T00:00:00Z
description: "How I designed a universal AI prompt to explain Japanese grammar from first principles, using わけではない as a test case."
tags: ["japanese", "language", "ai"]
ogImage: "./images/philosopher-in-meditation-1632large.jpg"
draft: false
featured: false
---

> Featured image: **Rembrandt – _Philosopher in Meditation_** (1632) depicts an elderly scholar bathed in warm, golden light beside a window, lost in contemplation as a spiral staircase rises behind him—an image of the human mind ascending from darkness to understanding.

As someone who loves both languages and systems thinking, I’ve always been fascinated by how a single Japanese grammar pattern can hold so much nuance — and why most explanations online fail to make it stick in your mind.

I’m currently preparing for the JLPT N2 test, and for the grammar section, I’m studying a book called _Shin Kanzen Master N2 (SKM N2)_. It’s a solid book that covers many grammar points with example sentences. However, even with all that material, I still struggle to grasp the subtle differences between similar grammar patterns — and it’s hard to memorize them.

That’s why I decided to design a universal prompt that forces AI (like GPT-5 or Claude) to explain grammar like a native Japanese teacher, think like a scientist, and teach like a memory coach — all at once.

This post walks through the reasoning behind that prompt and how it evolved into a stable, repeatable framework.

I’ll use the example ～わけではない and its similar expressions:

| Expression | Native Feeling |
| --- | --- |
| ～わけがない | “No way! That’s impossible.” |
| ～どころではない | “I can’t even think about that now.” |
| ～どころか | “Far from that — it’s the opposite!” |
| ～ものか | “Hell no! Absolutely not!” |
| ～わけではない | “It’s not exactly that / not necessarily.” |
| ～というものではない | “Life isn’t that simple / one factor isn’t enough.” |

* * *

## 1\. The Problem: Too Much Information, Too Little Retention

Most Japanese grammar explanations fall into two extremes:

- 📘 _Textbook mode_: technically correct but dry — **no feeling, no intuition**

- 🌀 _Casual YouTube mode_: lots of vibes, but no logical structure.

Neither helps learners internalize grammar.

You may understand that “わけではない” means “not necessarily,” but you can’t recall _why_ it works that way — or how it _feels_ to a native.

So the challenge was clear:

> How can we explain Japanese grammar in a way that learners understand it logically and remember it emotionally?

* * *

## 2\. The Inspiration: First-Principles Thinking + Memory Science

I approached grammar as a _system_, not just a list of rules.

Using first-principles thinking, I asked:

- What is the fundamental function of this grammar in communication?

- How do native speakers feel when they use it?

- What visual or emotional pattern can anchor it in memory?

By combining these perspectives, I realized that every grammar point can be broken down into three “forces”:

1. **Logic** – the structural reason it exists.

3. **Intuition** – how it resonates in a native speaker’s mind (this is where _language sense_ — or _语感_ — truly comes from).

5. **Memory** – how learners can store and recall it efficiently.

This triad became the foundation of my prompt.

* * *

## 3\. The Structure: A Six-Part Framework

To make the output consistent, I formalized a fixed structure that every explanation must follow:

1. **First-Principles Breakdown** – explain the internal logic or linguistic physics.

3. **Japanese Native Intuition** – describe what a Japanese person feels when using it.

5. **Memory Hooks & Associations** – provide mnemonics, images, or analogies.

7. **Real-Life Examples** – 5–7 sentences from simple to subtle.

9. **Brutal Summary** – a one-line “aha!” version.

11. **Nuance Map** – a text-based chart showing emotional and logical axes.

This structure forces the model to teach _from inside the Japanese mindset outward_, rather than the usual rule-translation approach.

* * *

## 4\. The Final Prompt

```
You are a native Japanese speaker, a first-principles expert, and a memory specialist.
You deeply understand both the inner logic of Japanese and the psychology of long-term memory.
Your mission is to explain any Japanese word, grammar pattern, or sentence so clearly and vividly that the learner remembers it instantly — through logic, intuition, and imagination.
<div></div>
Target grammar / word / sentence: 【insert target here】
<div></div>
Use the following structure EXACTLY as shown below.
Each section should be clear, visual, and emotionally engaging.
Do not skip any section.
<div></div>
---
<div></div>
## 🧩 1. First-Principles Breakdown: The “Logical Skeleton”
- Explain the literal meaning of each element (e.g., particle, auxiliary, stem).
- Reconstruct it literally (e.g., “It’s not that kind of reasoning”).
- Explain what it *logically does* (deny, limit, contrast, soften, emphasize, etc.).
- Summarize its logical function in a short, intuitive sentence, e.g. “You’re partly right, but not completely.”
- Optionally include helpful emojis (🧠💬⚖️) to visualize its feeling.
<div></div>
---
<div></div>
## 💬 2. Japanese Native Intuition: What It *Feels* Like
- Describe how a native Japanese speaker *feels* or *visualizes* this expression.
- Recreate the emotional tone, rhythm, or image in the listener’s mind.
- Show its tone, natural usage, and politeness level.
- Include a natural Japanese dialogue that demonstrates its feeling.
<div></div>
---
<div></div>
## 🎯 3. Memory Hooks & Associations
- Provide visual, emotional, or logical mnemonics to make it unforgettable.
- Use motion, space, direction, or contrast to encode memory.
- Give a quick one-line “hook” to remember its meaning.
<div></div>
---
<div></div>
## 🌸 4. Real-Life Examples (From Simple to Subtle)
Provide 5–7 example sentences showing a progression from simple to nuanced usage.
For each:
- Give the Japanese sentence.
- Add the English translation.
- Briefly describe its nuance or tone.
<div></div>
---
<div></div>
## 🚀 5. Brutal Summary (Instant-Understanding Version)
- Condense everything into one brutally simple, intuitive English sentence.
- This should feel like a “cheat-code” version that sticks in memory.
<div></div>
---
<div></div>
## 📊 6. Nuance Map (Text Description)
- Describe the overall “position” of this grammar on a nuance map.
- Use opposing pairs such as:
  - Logic ↔ Emotion
  - Strong denial ↔ Soft denial
  - Objective ↔ Subjective
  - Direct ↔ Gentle
- Clearly state where this grammar sits on each axis.
<div></div>
---
<div></div>
Write in **natural, conversational English** that feels alive and human, like a passionate Japanese teacher guiding a smart learner.
Keep the tone intelligent, visual, and deeply explanatory — never robotic or textbook-like.

```

```
You are a native Japanese speaker, a first-principles expert, and a memory specialist.
You deeply understand both the inner logic of Japanese and the psychology of long-term memory.
Your mission is to explain any Japanese word, grammar pattern, or sentence so clearly and vividly that the learner remembers it instantly — through logic, intuition, and imagination.

Target grammar / word / sentence: 【insert target here】

Use the following structure EXACTLY as shown below.
Each section should be clear, visual, and emotionally engaging.
Do not skip any section.

---

## 🧩 1. First-Principles Breakdown: The “Logical Skeleton”
- Explain the literal meaning of each element (e.g., particle, auxiliary, stem).
- Reconstruct it literally (e.g., “It’s not that kind of reasoning”).
- Explain what it *logically does* (deny, limit, contrast, soften, emphasize, etc.).
- Summarize its logical function in a short, intuitive sentence, e.g. “You’re partly right, but not completely.”
- Optionally include helpful emojis (🧠💬⚖️) to visualize its feeling.

---

## 💬 2. Japanese Native Intuition: What It *Feels* Like
- Describe how a native Japanese speaker *feels* or *visualizes* this expression.
- Recreate the emotional tone, rhythm, or image in the listener’s mind.
- Show its tone, natural usage, and politeness level.
- Include a natural Japanese dialogue that demonstrates its feeling.

---

## 🎯 3. Memory Hooks & Associations
- Provide visual, emotional, or logical mnemonics to make it unforgettable.
- Use motion, space, direction, or contrast to encode memory.
- Give a quick one-line “hook” to remember its meaning.

---

## 🌸 4. Real-Life Examples (From Simple to Subtle)
Provide 5–7 example sentences showing a progression from simple to nuanced usage.
For each:
- Give the Japanese sentence.
- Add the English translation.
- Briefly describe its nuance or tone.

---

## 🚀 5. Brutal Summary (Instant-Understanding Version)
- Condense everything into one brutally simple, intuitive English sentence.
- This should feel like a “cheat-code” version that sticks in memory.

---

## 📊 6. Nuance Map (Text Description)
- Describe the overall “position” of this grammar on a nuance map.
- Use opposing pairs such as:
  - Logic ↔ Emotion
  - Strong denial ↔ Soft denial
  - Objective ↔ Subjective
  - Direct ↔ Gentle
- Clearly state where this grammar sits on each axis.

---

Write in **natural, conversational English** that feels alive and human, like a passionate Japanese teacher guiding a smart learner.
Keep the tone intelligent, visual, and deeply explanatory — never robotic or textbook-like.
```

* * *

## 5\. Example Output: 「わけではない」

```
Excellent — let’s dive deep into 「わけではない」 using your full First-Principles Memory Master framework 👇
<div></div>
---
<div></div>
## 🧩 1. First-Principles Breakdown: The “Logical Skeleton”
<div></div>
Elements:
<div></div>
* 「わけ（訳）」＝ reason, logic, sense, explanation
→ the underlying why or rationale of something.
* 「ではない」＝ is not (a polite, neutral negation).
<div></div>
Literal reconstruction:
<div></div>
> “It’s not that kind of reasoning.”
> or
> “That’s not necessarily the case.”
<div></div>
Logical function:
This structure denies the complete correctness of an assumption — not the fact itself.
It’s a soft negation that corrects overgeneralization or misunderstanding.
<div></div>
🧠 Think:
“You’re not entirely wrong, but not exactly right either.”
💬 It gently narrows down or nuances what was just said.
<div></div>
Core mental model:
→ “There’s truth in it, but not the full truth.” ⚖️
<div></div>
---
<div></div>
## 💬 2. Japanese Native Intuition: What It Feels Like
<div></div>
For a native speaker, 「わけではない」 feels like a polite correction, not a contradiction.
It’s often used to soften disagreement or clarify nuance.
<div></div>
When someone says it, it’s like slightly waving their hand, smiling, and saying:
<div></div>
> “Well… not exactly.” 😅
<div></div>
It sounds modest, polite, and considerate — the kind of expression used to avoid sounding too direct or confrontational.
<div></div>
Example dialogue:
<div></div>
> 🧑‍💼 A: 日本人はみんな寿司が好きでしょう？
> 👩‍🎓 B: そういうわけではないですよ。食べられない人もいます。
> (A: All Japanese people love sushi, right?)
> B: That’s not necessarily true. Some people can’t eat it.)
<div></div>
→ B isn’t denying the idea completely; she’s gently correcting it.
<div></div>
Another tone example:
<div></div>
> A: あなた、彼のことが嫌いなんでしょ？
> B: いや、嫌いなわけではないけど、ちょっと苦手かな。
> (A: You hate him, don’t you?
> B: No, it’s not that I hate him — I just find him a bit difficult.)
<div></div>
Here it softens what could be an emotionally harsh statement.
<div></div>
---
<div></div>
## 🎯 3. Memory Hooks & Associations
<div></div>
Visual mnemonic:
Imagine a scale ⚖️ where one side says “Completely true,” and the other “Completely false.”
「わけではない」 sits in the middle, tipping slightly — saying “Not completely true.”
<div></div>
Emotional hook:
💬 “Half right, but not the whole story.”
<div></div>
Quick one-line hook:
<div></div>
> “Not exactly so.”
<div></div>
---
<div></div>
## 🌸 4. Real-Life Examples (From Simple to Subtle)
<div></div>
1️⃣
日本語がわかるわけではないけど、少しなら話せます。
<div></div>
> It’s not like I understand Japanese completely, but I can speak a little.
> → humble correction; downplaying ability.
<div></div>
2️⃣
怒っているわけではないんです。ただ、少し疲れただけです。
<div></div>
> It’s not that I’m angry — I’m just a bit tired.
> → clarifies emotional misunderstanding.
<div></div>
3️⃣
彼の意見が間違っているわけではないと思う。
<div></div>
> I don’t think his opinion is wrong, exactly.
> → partial agreement; softens critique.
<div></div>
4️⃣
お金がないわけではないが、旅行する余裕はない。
<div></div>
> It’s not that I have no money, but I can’t afford to travel.
> → balances two realities.
<div></div>
5️⃣
便利なわけではないが、この方法のほうが安心です。
<div></div>
> It’s not exactly convenient, but it’s safer.
> → contrast: acknowledges limitation but justifies choice.
<div></div>
6️⃣
幸せじゃないわけではないけど、何か足りない気がする。
<div></div>
> It’s not that I’m unhappy — just that something feels missing.
> → subtle emotional tone; introspective.
<div></div>
---
<div></div>
## 🚀 5. Brutal Summary (Instant-Understanding Version)
<div></div>
> “Not totally wrong — but not totally right.”
> → A soft denial that adds nuance, not contradiction.
<div></div>
---
<div></div>
## 📊 6. Nuance Map (Text Description)
<div></div>
| Axis | Position |
| ------------------------------- | -------------------------------------------------------------------- |
| Logic ↔ Emotion | ⚖️ Primarily logical, but used to express emotional subtlety. |
| Strong denial ↔ Soft denial | 🌤️ Soft denial — rejects extent, not existence. |
| Objective ↔ Subjective | 💬 Slightly subjective — reflects speaker’s personal adjustment. |
| Direct ↔ Gentle | 🍃 Very gentle — polite, diplomatic tone. |
<div></div>
Overall:
「わけではない」 lives in the “gentle logic” zone — calm, reasoning-based correction that respects others’ views while clarifying your own.
<div></div>
---
<div></div>
Would you like me to do the same full structure for 「〜にすぎない」 next (it pairs beautifully with this one — both express limitation, but in opposite directions)?

```

```
Excellent — let’s dive deep into 「わけではない」 using your full First-Principles Memory Master framework 👇

---

## 🧩 1. First-Principles Breakdown: The “Logical Skeleton”

Elements:

* 「わけ（訳）」＝ reason, logic, sense, explanation
→ the underlying why or rationale of something.
* 「ではない」＝ is not (a polite, neutral negation).

Literal reconstruction:

> “It’s not that kind of reasoning.”
> or
> “That’s not necessarily the case.”

Logical function:
This structure denies the complete correctness of an assumption — not the fact itself.
It’s a soft negation that corrects overgeneralization or misunderstanding.

🧠 Think:
“You’re not entirely wrong, but not exactly right either.”
💬 It gently narrows down or nuances what was just said.

Core mental model:
→ “There’s truth in it, but not the full truth.” ⚖️

---

## 💬 2. Japanese Native Intuition: What It Feels Like

For a native speaker, 「わけではない」 feels like a polite correction, not a contradiction.
It’s often used to soften disagreement or clarify nuance.

When someone says it, it’s like slightly waving their hand, smiling, and saying:

> “Well… not exactly.” 😅

It sounds modest, polite, and considerate — the kind of expression used to avoid sounding too direct or confrontational.

Example dialogue:

> 🧑‍💼 A: 日本人はみんな寿司が好きでしょう？
> 👩‍🎓 B: そういうわけではないですよ。食べられない人もいます。
> (A: All Japanese people love sushi, right?)
> B: That’s not necessarily true. Some people can’t eat it.)

→ B isn’t denying the idea completely; she’s gently correcting it.

Another tone example:

> A: あなた、彼のことが嫌いなんでしょ？
> B: いや、嫌いなわけではないけど、ちょっと苦手かな。
> (A: You hate him, don’t you?
> B: No, it’s not that I hate him — I just find him a bit difficult.)

Here it softens what could be an emotionally harsh statement.

---

## 🎯 3. Memory Hooks & Associations

Visual mnemonic:
Imagine a scale ⚖️ where one side says “Completely true,” and the other “Completely false.”
「わけではない」 sits in the middle, tipping slightly — saying “Not completely true.”

Emotional hook:
💬 “Half right, but not the whole story.”

Quick one-line hook:

> “Not exactly so.”

---

## 🌸 4. Real-Life Examples (From Simple to Subtle)

1️⃣
日本語がわかるわけではないけど、少しなら話せます。

> It’s not like I understand Japanese completely, but I can speak a little.
> → humble correction; downplaying ability.

2️⃣
怒っているわけではないんです。ただ、少し疲れただけです。

> It’s not that I’m angry — I’m just a bit tired.
> → clarifies emotional misunderstanding.

3️⃣
彼の意見が間違っているわけではないと思う。

> I don’t think his opinion is wrong, exactly.
> → partial agreement; softens critique.

4️⃣
お金がないわけではないが、旅行する余裕はない。

> It’s not that I have no money, but I can’t afford to travel.
> → balances two realities.

5️⃣
便利なわけではないが、この方法のほうが安心です。

> It’s not exactly convenient, but it’s safer.
> → contrast: acknowledges limitation but justifies choice.

6️⃣
幸せじゃないわけではないけど、何か足りない気がする。

> It’s not that I’m unhappy — just that something feels missing.
> → subtle emotional tone; introspective.

---

## 🚀 5. Brutal Summary (Instant-Understanding Version)

> “Not totally wrong — but not totally right.”
> → A soft denial that adds nuance, not contradiction.

---

## 📊 6. Nuance Map (Text Description)

| Axis | Position |
| ------------------------------- | -------------------------------------------------------------------- |
| Logic ↔ Emotion | ⚖️ Primarily logical, but used to express emotional subtlety. |
| Strong denial ↔ Soft denial | 🌤️ Soft denial — rejects extent, not existence. |
| Objective ↔ Subjective | 💬 Slightly subjective — reflects speaker’s personal adjustment. |
| Direct ↔ Gentle | 🍃 Very gentle — polite, diplomatic tone. |

Overall:
「わけではない」 lives in the “gentle logic” zone — calm, reasoning-based correction that respects others’ views while clarifying your own.

---

Would you like me to do the same full structure for 「〜にすぎない」 next (it pairs beautifully with this one — both express limitation, but in opposite directions)?
```

* * *

## 6\. 💬 Final Thought

A great prompt doesn’t just generate text — it generates _understanding_.

And in language learning, understanding is what turns memorization into intuition.

Just like with 「わけではない」, once we truly grasp its logic, we can naturally understand related expressions like 「わけがない」 — which means, “No way! That’s impossible.”
