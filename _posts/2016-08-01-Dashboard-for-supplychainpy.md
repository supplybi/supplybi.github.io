---
layout: post
title: Reporting Feature For Supplychainpy
excerpt_separator: <!--more -->
tags: [reporting, release]
author_github: kevinfasusi

---

## What to Expect from the Reporting Feature in Release 0.0.4?

~~Release 0.0.4 is set officially for August 31, 2016~~ Release 0.0.4 is still in development ("the best-laid schemes of mice and men..." Please read the forum post on the [delay](https://groups.google.com/d/msg/supplychainpy/TwQG9IZgjvU/3au925dlBwAJ)). The likelihood is that that the sneak peek offered in the Gif below
will change. The reporting function is deployed using a web interface and built with Flask, jinja, jQuery, javascript and SQLalchemy and powered by the supplychainpy library (Python and Cython).<!--more -->
The Reports are launched using the command line, with the data source and database location supplied as arguments.
A GUI interface is launched offering the option to specify the port for the reports run on the local server.

The Gif below shows the current state of the reports (using [dummy data](https://github.com/KevinFasusi/supplychainpy/blob/master/data1.csv) to create the dynamic content):

<img src='{{site.baseurl}}/images/supp.gif' class='img-fluid img-responsive'>

There is still a lot to do, and subsequent versions will provide improvements. Importantly, the
reports are supposed to be smaller in scale than large sprawling enterprise packages. The reports are a supplement and not a replacement for more comprehensive solutions.

## Why Add a Reporting Feature to Supplychainpy?

There are three main reasons for adding a reporting feature to supplychainpy:

1. To provide the ability to visualise data and spot trends, allowing analysts to get a "feel" for their data.
2. To provide a set of generic default reports, to showcase some general uses cases and highlight the capabilities of the library.
3. To provide more choice.

Enterprise Resource Planning (ERP) tools often come with some reporting functionality. Unfortunately, teams are
rarely satisfied with the suite of reporting features provided. Sometimes adoption of a suite of reports fails
due to poor integration with existing practices, inadequate requirements analysis or simply a team's refusal to adopt the system.
Any one or even all of those previously mentioned can be reasons to abandon a suite of reports.
 
## Wider Discontent
Anecdotally the possibility for dissatisfaction with reports increases with significant changes in an organisation' structure. Mergers and acquisitions or the installation of new information technology infrastructure can
hinder the value of the incumbent reporting system. In environments like these the data warehouse and a spreadsheet, rightly or wrongly, becomes king.
Against this backdrop, supplychainpy offers more choice and flexibility for analysts to supplement their existing reporting.
Most reporting tools are mandated from the top down, and change requests or additional features are mired in bureaucracy.
The inflexibility of such systems can stifle the usefulness of analytical tools, making it a challenge to derive value.

In a recent report featured in MIT Sloan Management Review, exploring the work behind analytics success, the decline in competitive advantage derived from analytics is one of five key
findings. The review states:

>Competitive advantage with analytics is waning. The percentage of companies that report obtaining a competitive
>advantage with analytics has declined significantly over the past two years. Increased market adoption of analytics
>levels the playing field and makes it more difficult for companies to keep their edge.
>&mdash; Ransbotham *et al.* (2016)

Supplychainpy reports provide an alternative for an analyst from conventional tools and a springboard to increase competitive advantages.
In release 0.0.4 Supplychainpy will debut the reporting feature.

## Plans for Future Releases

Currently, the reporting feature is still under development. Planned development and modifications before debut release include currency conversion, inventory policy generator and general formatting and presentation. An Assistant application directly in Excel is also in development. A full list enhancements are listed on the issues page on [GitHub](https://github.com/KevinFasusi/supplychainpy/issues).

### Supplychainpy Excel Assistant

A brief word on the supplychainpy Excel Assistant, Excel is treated like an unloved child by reporting suites and ERP tools. In an attempt to make Excel a first class citizen in your workflow, a supplychainpy Assistant is also in development. This Assistant is an Excel add-in and allows an analyst quickly to transfer some of the default reporting analysis over to their Excel workbook. The Assistant reduces the immediate need to
know how to use a library such as openpyxl or xlwings, although the Assistant is not a panacea. For better control and analysis, learning to use a python library explicitly for interacting with Excel is best.


## References

Ransbotham, S., Kiron, D., Prentice, P. K., 2016. Beyond the hype: The hard work behind analytics success. *MIT Sloan Management Review* 57 (3).

