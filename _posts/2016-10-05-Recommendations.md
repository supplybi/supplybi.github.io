---
layout: post
title: Recommendations
excerpt_separator: <!--more -->
tags: [reporting, reporting features, recommendations]
author_github: kevinfasusi
---

The reporting suite provides charts and tables, while also calling out key metrics using slates in the HUD (please see: [HUD post]({% post_url 2016-09-21-Reporting-Suite:-The-HUD %})).
While data visualisations are a useful way to gain insight into data, in unfamiliar domains natural language annotation may also be of use.
The recommendations in the reporting suite provide some contextual analysis and in some cases make observations that may be counter-intuitive.
 <!--more -->
 
## Recommendation Panel
The recommendations generated as part of the detailed breakdown for a 
specific stock keeping unit (SKU), use KPI's and data from the analysis to provide a comparative understanding of the SKU in the context of the current inventory profile. The recommendation focuses on the main metrics that may point to specific issues to take into consideration.
The image below shows the recommendations as a panel within the 'SKU view':

![recommendation panel gif]({{site.baseurl}}/images/rec_panel.png)

## Recommendation Feed
Although each SKU in the inventory profile will have a recommendation 
auto-generated during the analysis, stepping through each SKU view would be tedious.
Navigating to the recommendation feed provides a searchable feed of all the recommendations as stacked panels, 
including a proposal for the entire inventory profile. The Gif 
below shows the recommendation feed and search functionality:

![recommendation feed gif]({{site.baseurl}}/images/rec_feed.gif)

## Traffic Lights
Each recommendation also contains a traffic light indicator. The traffic lights can be summarised as:

- Green - quantity-on-hand (QOH) is capable of satisfying demand based on historical analysis and service level set in analysis.
- Amber - QOH is below reorder level, expecting a purchase order to be raised.
- Red - QOH is below the quantity apportioned for safety (buffer stock) and future demand is consuming safety stock.
- White - QOH is below 50% of quantity apportioned for safety stock and the inability to meet demand from QOH is highly probable.
  
The traffic light indicates the probability of stockout and not necessarily the 'health' of the SKU in question. An SKU may, for instance, receive a green indicator when overstocked.  Although the excess stock is detrimental to the inventory profile, increasing the additional working capital tied up in the SKU, exposure to the risk of obsolescence and shrinkage, the SKU is not at any immediate risk of not meeting expected demand. The issues as mentioned earlier are more medium to long-term. The traffic light system provides an indicator for SKUs requiring immediate remedial action.

## Conclusion

The recommendations panels and feed provide supporting contextual information and insight using natural language.
The recommendations assist in understanding an SKU in the context of the inventory profile. The recommendation feed aggregates all recommendations, including a profile-wide recommendation, and provides a searchable list of stacked panels for retrieving recommendations quickly.
The panels in the feed also have a traffic light system indicating the ability of the SKU to satisfy demand from the current quantity on hand. While not indicating the whole health of the SKU, the traffic light system indicates which SKUs are in immediate need of attention.
