---
layout: post
title: IASquare UX Consultation
excerpt_separator: <!--more -->
tags: [reporting, UX, UI, design]
author_github: kevinfasusi
---

First of all, Happy New Year! It's been a while. 

I recently met with the London-based UX agency IAsquare. The team, Anthony, George and Denia are UX professionals who have advised and conducted user testing for some big names in technology. I was very grateful when they offered their time to assist me in improving the UX/UI of supplychainpy. <!--more -->

I gave a presentation covering the following:

- Introduction
    - what is supplychainpy and what problems does it solve?
- Features
- Demonstration
    - library API
    - reporting suite
- Roadmap

## Feedback

After some time spent interacting with the application and asking questions, the team had some feedback:

### The Colour Theme 

Arguably, the elephant in the room. I thought this would be a contentious topic and I expected to be questioned furiously about my choice of a solarised theme. I live in the terminal, and during the demonstration, my terminal's solarised theme tipped everyone off that I am a fan.

The original motivation for using the solarised theme in the reporting suite was to provide an application that looked different to the typical analytics application. It was clear that the solarised colour palette would not be to everyone's liking but it would be distinct and may break up the visual monotony of an analysts day. However, there are rules in the UX/UI world, and I wanted to make sure I wasn’t breaking too many.

To my surprise, Anthony commented that it is okay and that dark themes are the most difficult to get right. He could not point to a specific area in which I have made a horrible mistake. While not high praise, it also was not a scathing criticism, so I will take the win. Although, I do plan to provide the ability to switch between this theme and a lighter one. I should probably shut up now, because "a promise is a debt" as my mum used to tell me. *(As I write this I have just realised that my mum probably got this quote from somewhere, sure enough, Google has shown me that my childhood was a lie. It is a quote from Robert W. Service, The Cremation of Sam McGee)*.

### The recommendation generator 

The recommendation generator for the SKU view was a big win for the Team. The natural language feedback offered as a summary to the analysis and charts presented on the screen made the:

>"... application communicate complex information in plain English. I can understand what to look for in the data and charts, based on the recommendations."
>&mdash; Anthony Ioannidis, *Managing Director, IASquare* 

Anthony pointed out that it would be beneficial to move the inventory profile recommendation to dashboard view.

#### The traffic light system

The traffic light system for the recommendation feed was also a hit. Although, the difficulty distinguishing between red and amber was raised. The suggestion was made to add traffic lights to the recommendation in the "SKU" view.

#### Tiling and Shadowing (the poor man's material design)

Apparently, while attempting to mimic the 'Material Design' aesthetic, I had gone retro (retro chic maybe?).  I was told it would be better to remove the harsh shadowing effect on the tiles (the poor man's Material Design) and go with a flat theme.

I may just employ the help of bootstrap to save me from myself and give me that sweet, sweet Material Design look. Failing that, I will accept defeat and go flat.

#### Hidden Sidebar Navigation

To reveal the sidebar navigation, a user is required to click the 'SUPPLYCHAINPY' logo at the top of the dashboard; this is not clear without prior knowledge (possibly from a gif in the docs).  I was told to change the logo to a hamburger button. The hamburger button is a universal UI element, and I should embrace it.

#### Updating the Charts

George and Denia pointed out that while the charts were helpful, the ability to drill down would enhance the UX. The graphs were initially created using the Flotr and d3.js charting library. I used d3.js at first because I was learning the library and did not know how difficult it was. Well, I soon discovered, and I opted to use Flotr to move faster. 

The DC.js library provides the drill down functionality, and I will be exploring this option.

#### Chatbot

Anthony pointed out that if I was not planning on going the full distance to make the chatbot a more competent bot (ouch!), with the ability to understand a much more expansive lexicon, then I should consider changing the chatbot to a natural language query builder instead. The builder would provide all the benefits of using natural language with none of the ambiguity and frustration of a rudimentary chatbot.


### Easy Download, Configuration and Deployment

To give the presentation, I set up a few cloud instances courtesy of Digital Ocean. I gave a demonstration of the dashboard using the cloud servers so that everyone could test from their laptops; I also gave a demo of the client-side application. It was unanimous, downloading, configuring and initialising across all platforms needs to be much more comfortable.

After meeting, I started working on the download configuration and deployment feedback point immediately. While the library is a long way from being feature complete, It doesn't hurt to make life easier for an early adopter, who may want to test the library or maybe even contribute (a man can dream).

Python is a bit tricky to package for cross-platform deployment. I am currently stuck trying to build an installable for Windows using 'Py2exe' after my initial success with 'Py2app' for macOS and Linux. In any case, when I finally succeed, this will be the main update in release 0.0.6.

In addition to being able to use a one-click install across all three leading operating systems, I have also introduced a simple GUI for configuring the application removing the reliance on the command-line. I love the CLI, but I understand it may be an unnecessary hindrance. 


### General Layout and Design

The team also gave general feedback points regarding the general layout and design. These included providing more space between widgets. 

The big font was praised, as it is currently a little trendy. The last feedback point was to make sure the sections are delineated with a significant gap. 


## Back to the Editor

I appreciated the feedback from the IAsquare team. Every one of the team's feedback points supported a clear UX/UI improvement and an actionable deliverable for the reporting suite. All that is left is for me is to get back to the editor and deliver. Thank you, IAsquare.