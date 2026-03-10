from helper_functions import choose_statistic, population_distribution, sampling_distribution
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy import stats
import seaborn as sns
import codecademylib3

# task 1: load in the spotify dataset
spotify_data = pd.read_csv('spotify_data.csv')
# task 2: preview the dataset
print(spotify_data.head())
# task 3: select the relevant column
song_tempos = spotify_data.tempo
# task 5: plot the population distribution with the mean labeled
population_distribution(song_tempos)
print('This distribution shows a right-skewed, multimodal pattern with the primary mode around 150. The distribution exhibits several local peaks, suggesting the presence of multiple subpopulations, and has a long right tail extending beyond 200.')
# task 6: sampling distribution of the sample mean
sampling_distribution(song_tempos, 30, "Mean")
# task 7: Compare your sampling distribution of the sample means to the population mean. Is the sample mean an unbiased or biased estimator of the population?
print('The sample mean and population mean are nearly identical with only a small difference. This happens consistently across multiple runs, proving the sample mean is unbiased.')
# task 8: sampling distribution of the sample minimum
sampling_distribution(song_tempos, 30, "Minimum")
# task 9: Compare your sampling distribution of the sample minimums to the population minimum. Is the sample minimum an unbiased or biased estimator of the population?
print('The population minimum is 57.97 while the mean of the sample minumum is 104.26, almost double. The large, consistent difference shows sample minimum is a biased estimator of the population.')
# task 10: sampling distribution of the sample variance
sampling_distribution(song_tempos, 30, "Variance")
# task 11: Compare your sampling distribution of the sample variance to the population variance. Does the sample variance appear to be an unbiased or biased estimator of the population?
print('The population variance is 568.55 while the mean of the sample variance is 543.68. with such a small consistent difference, it shows that the sample variance is an unbiased estimator of the population.')
# task 12: After changing this line of code, run script.py. Does the sample variance appear to be an unbiased or biased estimator of the population?
print('After updating the script to add ddof=1, the population variance and the mean are now almost identical. This confirms sample variance is an unbiased estimator of the population')
# task 13: calculate the population mean and standard deviation
population_mean = song_tempos.mean()
population_std = song_tempos.std()
# task 14: calculate the standard error
standard_error = population_std / 30**.5
# task 15: calculate the probability of observing an average tempo of 140bpm or lower from a sample of 30 songs
print(f'{stats.norm.cdf(140, population_mean, standard_error):.2%}')
# task 16: calculate the probability of observing an average tempo of 150bpm or higher from a sample of 30 songs
print(f'{1 - (stats.norm.cdf(150, population_mean, standard_error)):.2%}')
# EXTRA
song_energy = spotify_data.energy
population_distribution(song_energy)
sampling_distribution(song_energy, 30, "Median")
sampling_distribution(song_energy, 30, "Mean")
sampling_distribution(song_energy, 30, "Minimum")
sampling_distribution(song_energy, 30, "Variance")
# Use the sampling distribution of the sample minimum to estimate the probability of observing a specific sample minimum. 
song_tempos_min, pop_stat, song_tempos_stats = sampling_distribution(song_tempos, 30, "Minimum")
min_standard_error = np.std(song_tempos_stats) / 30**.5
# calculate the probability of observing an average tempo of less than 130bpm from a sample of 30 songs
print(f'The chance of getting a sample minimum that is less than 130bpm is {stats.norm.cdf(130, song_tempos_min, min_standard_error):.2%}')
