---
layout: post
title: Using Analytic Hierarchy with Supplychainpy
excerpt_separator: <!--more -->
tags: [Analytic Hierarchy, Decision Support, features]
author_github: kevinfasusi
---

## Introduction

Thomas Saaty (Saaty, 1990) developed the Analytic Hierarchy Process (AHP). The AHP structures a decision problem by
comparing a set of similar alternative options (e.g. alternative haulage vehicles, suppliers, warehouse assets etc.) 
against different criterion (e.g. safety, reliability, maintainability and cost) to identify the superior choice in a logically consistent manner.<!--more -->

The criterion for evaluation can be qualitative or quantitative. Relative scales and pairwise comparisons as ratios are used to derive weights and priorities. 
The resulting weights are used to obtain a score for each option in regards to a criterion, combining the scores for a global for all the criteria. 

In summary, the AHP, therefore, requires the decision maker to:

- State clearly the objective.
    - e.g. Select a new haulage vehicle for addition to the fleet.
- Define the criteria.
    - e.g. style, reliability, comfort and fuel economy
- Shortlist the alternatives options.
    - e.g. Scania, Iveco, Navistar and Volvo

## Implementation

The AHP requires several steps which can be summarised as:

1. Computing the eigenvector for the criteria.
2. Computing the matrices for the alternative options
3. Computing the eigenvector for the alternative options
4. Ranking the alternative option.

### Computing the Eigenvector for the Criteria

Creating a pairwise comparison matrix allows for the expression of the relative importance of one criterion over another (Haas and Meixner, 2005).
The array is populated using relative scores measured on a scale from 1 to 9. The table below represents that 'fundamental scale' used in scoring the criterion
and is taken directly from Saaty (1990, pp15).

|--------------------+---------------------------------------------------------------+-------------------------------------------------------------------------|
|Importance          |  &nbsp; Definition &nbsp;                                     | Explanation &nbsp;                                                      | 
|--------------------+---------------------------------------------------------------+-------------------------------------------------------------------------|
|   1                | Equal importance &nbsp;                                       | Two activities contribute equally to the objective                      |
|--------------------+---------------------------------------------------------------+-------------------------------------------------------------------------|
|   3                | Moderate importance of one over another &nbsp;                |Experience and judgement strongly favor one activity over another        | 
|--------------------+---------------------------------------------------------------+-------------------------------------------------------------------------|
|   5                | Essential or strong importance Very strong importance &nbsp;  |Experience and judgement strongly favor one activity over another        |
|--------------------+---------------------------------------------------------------+-------------------------------------------------------------------------|
|   7                | Very strong importance &nbsp;                                 |An activity is strongly favored and dominance demonstrated in practice   |
|--------------------+---------------------------------------------------------------+-------------------------------------------------------------------------|
|   2,4,6,8          | Intermediary values between adjacent judgments &nbsp;         |when compromise is needed                                                |
|--------------------+---------------------------------------------------------------+-------------------------------------------------------------------------|
|   9                | Extreme importance &nbsp;                                     |highest possible order of affirmation                                    |
|--------------------+---------------------------------------------------------------+-------------------------------------------------------------------------|

### Pairwise Comparison Matrix

To compute the eigenvector for the criteria, the matrix $$A$$ of size $$ m \times m $$ is required where $$m$$ is the number of criteria.
Matrix $$A$$ is populated with values for $$ a_{ij}$$ where $$ a_{ij}$$ denotes the entry for the $$i$$th row and $$j$$th column:

$$
\therefore
  A_{m \times m}= \left( \begin{array} \\
        a_{11} & \cdots & a_{1j} \\
         \vdots & \ddots & \vdots \\
        a_{i1}  & \cdots & a_{ij} \\
        \end{array} \right )
$$

Let's walk through an illustrative example, continuing with the decision we proposed in the summary of the AHP in the second paragraph of the introduction. 

We are an international logistics company, and we are making the decision between several alternative options for a new vehicle for our fleet of vehicles responsible for trunking between national distribution centres (NDC), based on the criteria:

- style
- reliability 
- fuel economy
- comfort

Based on our judgement fuel economy is the most important for the Euro touring vehicles in our fleet, 
followed closely by reliability because maintenance costs are a b...bother and these bad boys will be putting in some mileage. Comfort is a concern because driving several hours between stops should feel comfortable.
We covet reliability over style and are not too fussed about what the other drivers think of the rig, so style is a distant consideration at fourth place (look we'll just get a bunch of flames or my little pony decals to pimp the ride). So based on these priorities we can make the following judgement:

1. Fuel economy is 7 times more important than style.
2. Reliability is 2 times less important than Fuel economy.
3. Fuel economy is 7 times more important than comfort (#harsh).
4. Fuel economy is 9 times more important than style.

Below the array matrix for the criteria scores the criteria in the following order top to bottom left to right: fuel economy, reliability, comfort and style.

$$
    {\bf A}=\left[ \begin{array} \\
        1/1 & 2/1 & 7/1 & 9/1 \\
        0 & 1/1 & 5/1 & 5/1 \\
        0 & 0 & 1/1 & 5/1\\
        0 & 0 & 0 & 1/1 \\
        \end{array}\right ]
$$

For each entry where we compare $$i$$ (row) to $$j$$ (column), if $$a_{ij} > 1$$ then the $$i$$th criterion is more important that $$j$$th criterion, while if $$a_{ij} <1$$ then the $$j$$the criterion is more important.
Now we add the reciprocal scores and complete our pairwise matrix.

$$
    {\bf A}=\left[ \begin{array} \\
        1/1 & 2/1 & 7/1 & 9/1 \\
        1/2 & 1/1 & 5/1 & 5/1 \\
        1/7 & 1/5 & 1/1 & 5/1\\
        1/9 & 1/5 & 1/5 & 1/1 \\
        \end{array}\right ]
$$

Any given entry $$ a_{ij} $$ should satisfy the following constraint $$ a_{ij} \cdot a_{ji} = 1$$. 
For example the score for $$fuel$$ $$economy$$ against $$reliability$$ or $$ a_{1,2} = \frac{2}{1} $$, 
implying as we stated above that fuel economy is more important than reliability. 
The reciprocal is reliability against fuel economy, scored at entry $$ a_{2,1} = \frac{1}{2} $$ the reciprocal of the previous rating. 
This scoring is consistent and meets the constraint as  $$ 2\times0.5=1 $$.

Also, notice how $$a_{jj}$$ always equal 1, this is because each criterion is as important as itself. 
Now we convert to decimals:


$$
    {\bf A}  =\left[ \begin{array} \\
        1/1 & 2/1 & 7/1 & 9/1 \\
        1/2 & 1/1 & 5/1 & 5/1 \\
        1/7 & 1/5 & 1/1 & 5/1\\
        1/9 & 1/5 & 1/5 & 1/1 \\
        \end{array}\right ] = \left[ \begin{array} \\
        1.0 & 2.0 & 7.0 & 9.0 \\
        0.5 & 1.0 & 5.0 & 5.0 \\
        0.1429 & 0.2 & 1.0 & 5.0\\
        0.1111 & 0.2 & 0.2 & 1.0 \\
        \end{array}\right ]
$$

Calculate the ranking by squaring the pairwise matrix:

$$

\left[ \begin{array} \\
        1.0 & 2.0 & 7.0 & 9.0 \\
        0.5 & 1.0 & 5.0 & 5.0 \\
        0.1429 & 0.2 & 1.0 & 5.0\\
        0.1111 & 0.2 & 0.2 & 1.0 \\
        \end{array}\right ] \cdot \left[ \begin{array} \\
        1.0 & 2.0 & 7.0 & 9.0 \\
        0.5 & 1.0 & 5.0 & 5.0 \\
        0.1429 & 0.2 & 1.0 & 5.0\\
        0.1111 & 0.2 & 0.2 & 1.0 \\
        \end{array}\right ] = \left[ \begin{array} \\
            1.0 & 4.0 & 49.0 & 81.0  \\
            0.25 & 1.0 & 25.0 & 25. \\
            0.02 & 0.04 &  1.0 & 25.0 \\
            0.012 & 0.04 & 0.04 & 1.0 \\
        \end{array}\right ]
        
$$

We now sum each row $$a_{1j} \cdot\cdot\cdot a_{mj}$$ and then sum the row totals. 

$$

  {\bf A}= \left[
    \begin{array}{cccc}
            1.0 & 4.0 & 49.0 & 81.0  \\
            0.25 & 1.0 & 25.0 & 25.0 \\
            0.02 & 0.04 &  1.0 & 25.0 \\
            0.012 & 0.04 & 0.04 & 1.0 \\
    \end{array}
  \right]
  \left[
    \begin{array}{c}
         135 \\
         51.25 \\
         26.06 \\
          1.092 
    \end{array}
  \right]


$$

The total for the sum of each row is 213.402.  We normalise by dividing the sum of each row by the total 213.402 and we get our eigenvector ($$w$$) for the criteria:

$$

  w = \left[
    \begin{array}{c}
         0.6326\\
         0.2402\\
         0.1221\\
         0.0051
    \end{array}
  \right]


$$

If you consider how we prioritised the criteria, it makes sense that `fuel economy` represented by the first value in the array scores higher than all the others and `style` (at the bottom) the least.
Several iterations of squaring the pairwise matrix and computing an eigenvector are necessary until the current solution no longer differs from the previous iteration.  

Now we move onto computing the matrices for the alternative options. 
You can begin to see why the AHP can become onerous when calculated by hand or in a spreadsheet.

### Computing the Matrices for the Alternative Options

For each criterion  (style, reliability, comfort and fuel-economy), we construct a pairwise comparison matrix scoring each alternative option (Scania, Iveco, Navistar, Volvo) against each other. These comparisons are for illustration and are not indicative of the manufacturer's product.

Reliability:

$$
    {\bf B^{(1)}}=\left[ \begin{array} \\
        1/1 & 1/3 & 3/1 & 1/7 \\
        3/1 & 1/1 & 5/1 & 1/5 \\
        1/3 & 1/5 & 1/1 & 1/5\\
        7/1 & 5/1 & 5/1 & 1/1 \\
        \end{array}\right ]
$$

Comfort:

$$
    {\bf B^{(2)}}=\left[ \begin{array} \\
        1/1 & 5/1 & 5/1 & 1/7 \\
        1/5 & 1/1 & 2/1 & 1/7 \\
        1/3 & 1/5 & 1/1 & 1/5 \\
        7/1 & 7/1 & 5/1 & 1/1 \\
        \end{array}\right ]
$$

Style:

$$
    {\bf B^{(3)}}=\left[ \begin{array} \\
        1/1 & 1/3 & 5/1 & 1/5 \\
        3/1 & 1/1 & 2/1 & 3/1 \\
        1/3 & 1/5 & 1/1 & 1/5 \\
        5/1 & 1/3 & 5/1 & 1/1 \\
        \end{array}\right ]
$$

We compute the eigenvector for each as we did before for the criteria $$B^{n}$$ is the pairwise matrix and $$S^{n}$$ the corresponding eigenvector:

$$  

{\bf B^{(1)}}=\left[\begin{array}\\
         1.0   &  25.0  &   25.0 &    0.02\\
         0.04  &  1.0   &   4.0  &   0.02 \\
         0.111 &  0.04  &  1.0   &  0.04 \\
         49.0   &  49.0  &   25.0 &    1.0 
         \end{array}\right]
         \;
         {\bf s^{(1)}}= \left[
    \begin{array}{c}
        0.0692 \\
        0.2394 \\
        0.0081 \\
        0.6832 
    \end{array}
  \right]


$$

$$
    {\bf B^{(2)}}=\left[\begin{array}\\
       1.0   &   0.111 &   9.0   &  0.02 \\
         9. 0   &  1.0    & 25.0   & 0.04 \\
         0.111 &  0.04  &  1.0    & 0.04 \\
        49. 0   & 25.0    & 25.0    & 1.0
          \end{array}\right]
          \;
          {\bf s^{(2)}}=\left[
    \begin{array}{c}
         0.2815\\
         0.0279\\
         0.0066\\
         0.6841
    \end{array}
  \right]

$$

$$
     {\bf B^{(3)}}=\left[\begin{array}\\
         1.0  &  0.111&  25.0  &  0.04 \\
         9.0    &  1.0    &  4.0    & 9.0 \\
         0.111 &  0.04  &  1.0    & 0.04 \\
        25.0    &  0.111 & 25.0    & 1.0
        \end{array}\right]
        \;
     {\bf s^{(3)}}=\left[
    \begin{array}{c}
         0.2578 \\
         0.2267 \\
         0.0117 \\
         0.5038
    \end{array}
  \right]

$$

Fuel-economy is treated slightly differently since the values are in mpg an objective value. 
If we accept that the following mpg for each vehicle: Scania 11 mpg, Iveco 9 mpg, Navistar 10 mpg, Volvo 12 mpg, we can normalise these values and create a ranking:

$$
     {\bf s^{(4)}}=\left[
    \begin{array}{c}
         11 \\
         9 \\
         10 \\
         12
    \end{array}
  \right]=\left[
    \begin{array}{c}
         0.3009 \\
         0.2389 \\
         0.2124 \\
         0.2478
    \end{array}
  \right]

$$

### Computing the eigenvector for the alternative options

Now we can compute the eigenvector for the alternatives by combining them into a matrix and multplying by the criteria weight $$w$$ computed earlier. So $$S = [s^{(1)},s^{(2)},s^{(3)},s^{(4)}]$$.

$$

{\bf S}= \left[
    \begin{array}{cccc}
        0.0692 & 0.2815 & 0.2578 & 0.3009 \\
        0.2394 & 0.0279 & 0.2267 & 0.2389 \\
        0.0081 & 0.0066 & 0.0117 & 0.2124 \\
        0.6832 & 0.6841 & 0.5038 & 0.2478
    \end{array}
  \right] 

$$

$$S$$ is multiplied by the previously calculated weights for the criteria $$ \therefore S\cdot w = v$$ where $$v=$$ the global vector for all scores.
 
$$

{\bf v}= \left[
    \begin{array}{cccc}
        0.0692 & 0.2815 & 0.2578 & 0.3009 \\
        0.2394 & 0.0279 & 0.2267 & 0.2389 \\
        0.0081 & 0.0066 & 0.0117 & 0.2124 \\
        0.6832 & 0.6841 & 0.5038 & 0.2478
    \end{array}
  \right] \cdot \left[
    \begin{array}{c}
         0.6326\\
         0.2402\\
         0.1221\\
         0.0051
    \end{array}
  \right]
  
$$

The resulting vector can be ranked and will indicate the best choice:

$$

{\bf \therefore v}= \left[
    \begin{array}{c}
         0.2154\\
         0.2054\\
         0.0114\\
         0.5679
    \end{array}
  \right]
  
$$

### Ranking the Alternative Options

The clear winner, when ranked, is the Volvo (nb: remember the initial order of the comparisons was Scania, Iveco, Navistar and Volvo).

The cost of each vehicle may also be taken into consideration using a cost-benefit ratio.


## AHP using Supplychainpy

As of release 0.0.4, Supplychainpy will have the facility for computing the AHP of a given set of criteria and alternative options. In the libraries implementation, the objective (quantitative) criteria are identified separately from the subjective scores. The differentiation allows the construct of normalised weights based on raw values as opposed to scores in keeping with Saaty (1990)
Only the scores for the comparison of $$i$$ to $$j$$ are required, the reciprocals are computed as part fo the function.

```python

lorry_cost = {'scania': 55000, 'iveco': 79000, 'volvo': 59000, 'navistar': 66000}
criteria = ('style', 'reliability', 'comfort', 'fuel_economy')
criteria_scores = [
                   (1 / 1, 2 / 1, 7 / 1, 9 / 1), 
                   (1 / 2, 1 / 1, 5 / 1, 5 / 1), 
                   (1 / 7, 1 / 5, 1 / 1, 5 / 1),
                   (1 / 9, 1 / 5, 1 / 5, 1 / 1)
                   ]
                   
options = ('scania', 'iveco', 'navistar', 'volvo' )
option_scores = {
    'style': [
              (1 / 1, 1 / 3, 5 / 1, 1 / 5), 
              (3 / 1, 1 / 1, 2 / 1, 3 / 1),
              (1 / 3, 1 / 5, 1 / 1, 1 / 5),
              (5 / 1, 1 / 3, 5 / 1, 1 / 1)
              ],
    'reliability': [
                    (1 / 1, 1 / 3, 3 / 1, 1 / 7), 
                    (3 / 1, 1 / 1, 5 / 1, 1 / 5), 
                    (1 / 3, 1 / 5, 1 / 1, 1 / 5),
                    (7 / 1, 5 / 1, 5 / 1, 1 / 1)
                    ],
    'comfort': [
                (1 / 1, 5 / 1, 5 / 1, 1 / 7), 
                (1 / 5, 1 / 1, 2 / 1, 1 / 7), 
                (1 / 3, 1 / 5, 1 / 1, 1 / 5),
                (7 / 1, 7 / 1, 5 / 1, 1 / 1)
                ],
    'fuel_economy': (11, 9, 10, 12)
    }
lorry_decision = analytical_hierarchy_process(criteria=criteria, 
                                              criteria_scores=criteria_scores,
                                              options=options,
                                              option_scores=option_scores,
                                              quantitative_criteria=('fuel_economy',),
                                              item_cost=lorry_cost)
```

generates the following results:

    {'analytical_hierarchy': {'iveco': 0.20541585500041709, 'scania': 0.21539971200341132, 'volvo': 0.5677817531137912, 'navistar': 0.011402679882380324}, 'cost_benefit_ratios': {'iveco': 0.67345198031782316, 'scania': 1.0143368256160643, 'volvo': 2.4924656619741006, 'navistar': 0.044746880144492483}

## Conclusion

The Analytic Hierarchy Process (AHP) provides a systematic way of structuring decisions using objective and subjective criterion using weights and priorities. Implementing the AHP can be summarised in four steps:

1. Computing the eigenvector for the criteria.
2. Computing the matrices for the alternative options
3. Computing the eigenvector for the alternative options
4. Ranking the alternative option.

The supplychainpy library (as of release 0.0.4) supports this computation. 

## References

Saaty, T.L., 1990. How to make a decision: the analytic hierarchy process. *European journal of operational research*, 48(1), pp.9-26.

Haas, R. and Meixner, O., 2005. An illustrated guide to the analytic hierarchy process. *Institute of Marketing & Innovation, University of Natural Resources and Applied Life Sciences*, Vienna, pp.10-13.
