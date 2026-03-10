import scipy.stats as stats
import numpy as np

### Task Group 1 ###
## Task 1: 
lam = 7
## Task 2:
exact_lam = stats.poisson.pmf(7, lam)
print(exact_lam)
## Task 3:
good_day = stats.poisson.cdf(4, lam)
print(good_day)
## Task 4:
bad_day = 1 - (stats.poisson.cdf(9,lam))
print(bad_day)
### Task Group 2 ###
## Task 5:
year_defects = stats.poisson.rvs(lam, size = 365)
## Task 6:
print(year_defects[:20])
## Task 7:
annual_e = 7 * 365
print(annual_e)
## Task 8:
print(sum(year_defects))
print('Comparing the total number of defects we expected vs actual over 365 days, the actual is either more or less than expected.')
## Task 9:
print(year_defects.mean())
print('Compared to the expected average number of defects each day the average from our dataset is very close almost exactly the same.')
## Task 10:
max_def = max(year_defects)
print(max_def)

## Task 11:
max_prob = 1 - (stats.poisson.cdf((max_def - 1), lam))
print(max_prob)
### Extra Bonus ###
# Task 12
perc_90 = stats.poisson.ppf(0.90, lam) 
print(perc_90)
# Task 13
not_perc_90 = np.mean(year_defects >= perc_90)
print(not_perc_90)