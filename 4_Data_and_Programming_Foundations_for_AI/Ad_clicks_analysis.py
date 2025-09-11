import codecademylib3
import pandas as pd

ad_clicks = pd.read_csv('ad_clicks.csv')

print(ad_clicks.head())

most_views = ad_clicks.groupby('utm_source').user_id.count().reset_index()

print(most_views)

ad_clicks['is_click'] = ad_clicks['ad_click_timestamp'].notna()

clicks_by_source = ad_clicks.groupby(['utm_source', 'is_click']).user_id.count().reset_index()

clicks_pivot = clicks_by_source.pivot(columns='is_click', index='utm_source', values='user_id').reset_index()

clicks_pivot['percent_clicked'] = (clicks_pivot[True] / (clicks_pivot[True] + clicks_pivot[False]) * 100).apply(lambda x: f"{x:.2f}%")

print(clicks_pivot)

print(ad_clicks.head())

counts = ad_clicks['experimental_group'].value_counts()
print(f"Ad A was shown {counts['A']} times while Ad B was shown {counts['B']}, so the answer to #7 is Yes.")

click_counts = ad_clicks[ad_clicks['is_click'] == True]['experimental_group'].value_counts()
A_percent = (click_counts['A'] / (click_counts['A'] + click_counts['B'])*100)
B_percent = (click_counts['B'] / (click_counts['A'] + click_counts['B'])*100)
print(f"Ad A was clicked {A_percent:.2f}% times while Ad B was clicked {B_percent:.2f}% times")

a_clicks = ad_clicks[ad_clicks['experimental_group'] == 'A']
b_clicks = ad_clicks[ad_clicks['experimental_group'] == 'B']

a_percentage = a_clicks.groupby(['is_click', 'day']).size().reset_index(name='count')

a_percentage_pivot = a_percentage.pivot(columns='is_click', index='day', values='count').reset_index()

a_percentage_pivot['percent_clicked'] = (a_percentage_pivot[True] / (a_percentage_pivot[True] + a_percentage_pivot[False]) * 100).apply(lambda x: f"{x:.2f}%")

print(a_percentage_pivot)

b_percentage = b_clicks.groupby(['is_click', 'day']).size().reset_index(name='count')

b_percentage_pivot = b_percentage.pivot(columns='is_click', index='day', values='count').reset_index()

b_percentage_pivot['percent_clicked'] = (b_percentage_pivot[True] / (b_percentage_pivot[True] + b_percentage_pivot[False]) * 100).apply(lambda x: f"{x:.2f}%")

print(b_percentage_pivot)

print("Comparing both A and B results I would recommend that the company use Ad A since they have a higher percentage of clicks.")