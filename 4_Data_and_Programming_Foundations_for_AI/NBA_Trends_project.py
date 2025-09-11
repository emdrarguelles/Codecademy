import numpy as np
import pandas as pd
from scipy.stats import pearsonr, chi2_contingency
import matplotlib.pyplot as plt
import seaborn as sns

import codecademylib3
np.set_printoptions(suppress=True, precision = 2)

nba = pd.read_csv('./nba_games.csv')

# Subset Data to 2010 Season, 2014 Season
nba_2010 = nba[nba.year_id == 2010]
nba_2014 = nba[nba.year_id == 2014]

print(nba_2010.head())
print(nba_2014.head())

# Task 1: Comparing the knicks to the nets with respect to points earned per game using the pts column from the nba_2010.

knicks_pts_10 = nba_2010.pts[nba.fran_id=='Knicks']
print(knicks_pts_10)

nets_pts_10 = nba_2010.pts[nba.fran_id=='Nets']
print(nets_pts_10)

# Task 2: Calculate the difference between the two teams’ average points scored.
knicks_pts_10mean = knicks_pts_10.mean()
print(f'Knicks 2010 pts. mean: {knicks_pts_10mean:.2f}')
nets_pts_10mean = nets_pts_10.mean()
print(f'Nets 2010 pts. mean: {nets_pts_10mean:.2f}')
diff_means_2010 =  knicks_pts_10mean - nets_pts_10mean
print(f'Based only on the value {diff_means_2010:.2f} it would be hard for me to determine association.')

# Task 3: Create a set of overlapping histograms that can be used to compare the points scored for the Knicks compared  to the Nets.
plt.hist(knicks_pts_10, color='Red', label='Knicks', alpha=0.5,)
plt.hist(nets_pts_10, color='Blue', label='Nets', alpha=0.5,)
plt.title('2010 Points Distribution: Knicks vs Nets')
plt.xlabel('Points')
plt.ylabel('Frequency')
plt.legend()
plt.show()
plt.clf()

# Task 3 Question: Do the distributions appear to be the same? 
print('Looking at the distributions, while both show some overlap, there are notable differences with the Nets appearing more concentrated in the 85-95 range, while the Knicks show a wider spread extending to higher scores, with about a 10% difference in means.')

# Task 4: Now, let’s compare the 2010 games to 2014. Replicate the steps from the previous three exercises using nba_2014.

# Task 4.1: Comparing the knicks to the nets with respect to points earned per game using the pts column from the nba_2014.

knicks_pts_14 = nba_2014.pts[nba.fran_id=='Knicks']
print(knicks_pts_14)

nets_pts_14 = nba_2014.pts[nba.fran_id=='Nets']
print(nets_pts_14)

# Task 4.2: Calculate the difference between the two teams’ average points scored.
knicks_pts_14mean = knicks_pts_14.mean()
print(f'Knicks 2014 pts. mean: {knicks_pts_14mean:.2f}')
nets_pts_14mean = nets_pts_14.mean()
print(f'Nets 2014 pts. mean: {nets_pts_14mean:.2f}')
diff_means_2014 =  knicks_pts_14mean - nets_pts_14mean
print(f'The difference of {diff_means_2014:.2f} has become significantly smaller compared to {diff_means_2010:.2f} in 2010.')

# Task 4.3: Create a set of overlapping histograms that can be used to compare the points scored for the Knicks compared  to the Nets.
plt.hist(knicks_pts_14, color='Red', label='Knicks', alpha=0.5,)
plt.hist(nets_pts_14, color='Blue', label='Nets', alpha=0.5,)
plt.title('2014 Points Distribution: Knicks vs Nets')
plt.xlabel('Points')
plt.ylabel('Frequency')
plt.legend()
plt.show()
plt.clf()

# Task 4.3 Question: Does the mean difference you calculated make sense? 
print('Yes, the mean difference of 0.45 makes perfect sense when looking at the histogram. The distributions are nearly identical with both teams having similar shapes, centers, and spreads. The histograms overlap almost completely though the Nets have had scores of 105 more frequently.')

# Task 5: Using nba_2010, generate side-by-side boxplots with points scored (pts) on the y-axis and team (fran_id) on the x-axis.
sns.boxplot(x='fran_id', y='pts', data=nba_2010)
plt.xlabel('Teams')
plt.ylabel('Points')
plt.title('Points per Team in 2010')
plt.tight_layout()
plt.show()
plt.clf()

#  Task 5 Question 1: Is there any overlap between the boxes? 
print('Yes, the Knicks and Thunder both have similar average of 100 and spread of 95-110, while Spurs also share the same average of 100 with a tighter spread of 90-105.')

#  Task 5 Question 2: Does this chart suggest that fran_id and pts are associated?
print('Yes this chart suggest that fran_id and pts are associated with higher points being associated with performing teams like Knicks and Thunder, as noted by their higher mean, and lower points for less performing teams like the Nets with the lowest mean.')

#  Task 5 Question 3: Which pairs of teams, if any, earn different average scores per game?
print('Multiple pairs earn different average scores: Celtics (95) vs Nets (90), and both Celtics and Nets differ from the other three teams which average around 100 which would make any pairing with them have different average scores per game.')

# Task 6: Calculate a table of frequencies that shows the counts of game_result and game_location.
location_result_freq = pd.crosstab(nba_2010.game_result, nba_2010.game_location)
print(location_result_freq)

# Task 6 Question: Based on this table, do you think the variables are associated?
print('Yes based in the table it shows that there is are more H-W and A-L pairs which suggests an association between the 2 variables.')

# Task 7: Convert this table of frequencies to a table of proportions and save the result as location_result_proportions. Print your result.
location_result_proportions = location_result_freq / len(nba_2010)
print(location_result_proportions.applymap('{:.2%}'.format))

# Task 8: Using the contingency table we created in Task 6 (use the counts – NOT the proportions), calculate the expected contingency table (if there were no association) and the Chi-Square statistic and print your results.
from scipy.stats import chi2_contingency
chi2, pval, dof, expected = chi2_contingency(location_result_freq)
print(expected)
print(round(chi2, 2))

# Task 8 Question: Does the actual contingency table look similar to the expected table — or different? Based on this output, do you think there is an association between these variables?
print('Comparing both tables, there are notable differences of +/-14 between actual and expected frequencies. Most importantly, home games show more wins than expected (120 vs 106) and fewer losses (105 vs 119) suggesting teams perform better at home. This indicates an association between location and game result.')

# Task 9: Using nba_2010, calculate the covariance between forecast (538’s projected win probability) and point_diff (the margin of victory/defeat) in the dataset. Call this point_diff_forecast_cov. Save and print your result.
point_diff_forecast_cov = np.cov(nba_2010.forecast, nba_2010.point_diff)
print(point_diff_forecast_cov)

#Task 9 Question: Looking at the matrix, what is the covariance between these two variables?
print(f'Looking at the table the covariance is {point_diff_forecast_cov[0, 1]:.2e}.')

# Task 10: Using nba_2010, calculate the correlation between forecast and point_diff.
from scipy.stats import pearsonr
point_diff_forecast_corr, p = pearsonr(nba_2010.forecast, nba_2010.point_diff)
print(point_diff_forecast_corr)
print(p)

# Task 10 Question:Does this value suggest an association between the two variables?
print(f'With a corr value of {round(point_diff_forecast_corr, 2)} which is + meaning as the forecast increases the point diff positively increases as well. It is also between 0.3 - 0.7 indicating a moderate correlation. Lastly with a p value of {p:.2e} which is much less than 0.05 indicating the relationship is not due to random chance.')

# Task 11: Generate a scatter plot of forecast (on the x-axis) and point_diff (on the y-axis). 
plt.scatter(x='forecast', y='point_diff', data=nba_2010)
plt.xlabel('Forecasted Win')
plt.ylabel('Point Differential')
plt.show()

# Task 11 Question: Does the correlation value make sense?
print('Yes the correlation value makes sense as we can see that although the points are spaced out a lot, you will notice a reduced concentration of higher points with lower forecast probabilities while you see a greater concentration of higher points as the forecast increases. Overall upward trend is visible despite the scatter.')