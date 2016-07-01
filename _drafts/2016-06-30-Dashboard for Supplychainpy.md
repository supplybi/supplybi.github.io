---
layout: post
title: Dashboard For Supplychainpy
excerpt_separator: <!--more -->
tags: [Reporting, Toolchain]
author_github: kevinfasusi

---

Enterprise Resource Planning (ERP) tools often come with some reporting functionality. Unfortunately, companies are
rarely satisfied with the suite of reporting features provided. Sometimes adoption of the suite under review fails
due to poor implementation, inadequate requirements analysis or simply teams inability to adopt the system. <!--more -->
Any one, or even all, of those above, can be the reason to abandon a suite of reports. Significant changes in an organisations'
structure, due to mergers and acquisitions or the installation of new information technology infrastructure, can also
hinder the value of the incumbent reporting system. In environments like these the spreadsheet, rightly or wrongly, becomes king.

In a recent report featured in MIT Sloan Management Review, exploring the work behind analytics success, the decline in 
competitive advantage derived from analytics is one of five key
findings. The review states:

>Competitive advantage with analytics is waning. The percentage of companies that report obtaining a competitive 
>advantage with analytics has declined significantly over the past two years. Increased market adoption of analytics 
>levels the playing field and makes it more difficult for companies to keep their edge.
>&mdash; Ransbotham *et al.* (2016)

Reporting tools and platforms have become prolific, with many reporting platforms providing tools for analysts capable of
model and dashboard the business logic of their organisation to provide insight. The new crop of reporting tools, solve a pressing need to be more responsive to 
changes in business logic, metrics and the presentation requirements of the organisation. Also these tools place the 
power in the hands on those best place to utlise them and help derive a competitive advantage. 

Dashboards and data visualisation are an integral part of Reporting tools. In release 0.0.4 Supplychainpy
has moved further in this direction, providing a  for supply chain analysts.

At first, the focus was the development of a library that supported standard workflows, like inventory management
for example. In the standard extract, transform and load (ETL) cycle, the 'supplychainpy' library focuses on the
transformation of the data. After more development and some 'dogfooding' (the act of consuming your API),
it made sense to offer a way of extracting and visualising/ dashboarding the analysis before the final loading to
where it may be.

Various options for a database backend and the prospect of mixing different data sources, makes data extraction complicated.
Tools like SQL Server Integration Services for Microsoft SQL Server or writing raw SQL stored procedures represent
the extremes for approaching this problem. All the tools require the analyst to understand the data model and map the
tables in the data warehouse correctly, to maintain accurate business logic.

Supplychainpy currently allows the loading of CSV and text files. To implement a relatively simple way to extract data,
while being database agnostic we needed a way to use OLAP cubes. Enter Bubbles (add link) formerly Databrewery.
The addition of this library as a dependency allows supplychainpy to write the model and leaves the mapping to the
analysts. The supplychainpy library will then use the OLAP pip provided by Bubbles to load the data for analysis.
This feature is currently being explored and if successful will be implemented in planning release-0.0.5.

In the meantime, release-0.0.4 sees the introduction of an interactive web-based dashboard and further analytical
features in the library. Please consult the deep dive (link) for further technical details or the post on Visualising
the supplychainpy library or Inventory analysis.

## References

Ransbotham, S., Kiron, D., Prentice, P. K., 2016. Beyond the hype: The hard work behind analytics success. *MIT Sloan Management Review* 57 (3).
