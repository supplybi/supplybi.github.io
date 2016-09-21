---
layout: post
title: The HUD
excerpt_separator: <!--more -->
tags: [reporting, reporting features]
author_github: kevinfasusi
---

The critical role of the reporting feature in the supplychainpy library, is to call out important information quickly.
The reports use what we like to refer to as a "Heads up Display" (HUD) to highlight key values and KPIs. 
As seen below, the HUD is a row of boxes (Slates), that sits on top of the main charts, analysis and tabular breakdowns.

![supplychainpy reporting gif]({{site.baseurl}}/images/HUD.png)

The following image shows the HUD in situ:

![supplychainpy reporting gif]({{site.baseurl}}/images/shortage.jpg)

The content inside each slate is dynamic with hyperlinks for SKUs, classifications and warnings which lead to further analysis.
Clicking the SKU `KR202-225`, navigates to a page which presents facts and figures related only to this SKU. 
The page devoted to the SKU highlights metrics such as `inventory turns` and `safety stock`, as well as presenting different forecasts.

The HUD is an important feature for quickly indicating the state of the inventory profile or object it summarises. 
There are a few other quick indicators implemented, one of which is the icon to the right of the SKU title at the top of the page.
In the case of SKU `KR202-225`, the icon indicates a shortage of stock. A future post will provide more in-depth coverage of this feature. 
