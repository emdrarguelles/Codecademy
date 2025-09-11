import codecademylib3
import pandas as pd

#checking for missing files before loading
try:
    visits = pd.read_csv('visits.csv', parse_dates=[1])
except FileNotFoundError:
    print('visits.csv not found!')

try:
    cart = pd.read_csv('cart.csv', parse_dates=[1])
except FileNotFoundError:
    print('cart.csv not found!')

try:
    checkout = pd.read_csv('checkout.csv', parse_dates=[1])
except FileNotFoundError:
    print('checkout.csv not found!')

try:
    purchase = pd.read_csv('purchase.csv', parse_dates=[1])
except FileNotFoundError:
    print('purchase.csv not found!')

#task1 inspecting dataframes
print(visits.head())
print(cart.head())
print(checkout.head())
print(purchase.head())

#task2 combining visits and cart
visits_cart = pd.merge(visits, cart, how='left')

#task3 asking how long merged df is
print(f"The combined DF is {len(visits_cart)} rows long.")

#task4 how many are null/nan under cart_time
print(f"There are {visits_cart.cart_time.isna().sum()} null timestamps in cart_time. These rows mean they did not add anything to cart.")

#task5 percentage of users who visited but did not add to cart
percentage1 = (float(visits_cart.cart_time.isna().sum()) / float(visits_cart.user_id.count()))*100
print(f"The percentage of users who visited Cool T-Shirts Inc. and ended up not placing a t-shirt in their cart was {percentage1:.2f}%.")

#task6 left merge for cart and checkout, count null, and get percentage who did not checkout
cart_checkout = pd.merge(cart, checkout, how='left')

print(f"There are {cart_checkout.checkout_time.isna().sum()} null values in checkout.")

percentage2 = (float(cart_checkout.checkout_time.isna().sum()) / float(cart_checkout.cart_time.notna().sum()))*100
print(f"The percentage of users who put items in their cart, but did not proceed to checkout was {percentage2:.2f}%.")

#task7 merge all 4 steps of the funnel IN ORDER user left merges. examine with print head
all_data = pd.merge(visits, cart, how='left').merge(checkout, how='left').merge(purchase, how='left')

print(all_data.head())

#task8 percentage of user who go to checkout but not purchase
percentage3 = ((float(all_data.checkout_time.notna().sum()) - float(all_data.purchase_time.notna().sum())) / float(all_data.checkout_time.notna().sum()))*100
print(f"The percentage of users who proceeded to checkout, but did not purchase a t-shirt was {percentage3:.2f}%.")

#task9 weakest funnel with the most number of nan
print(f"Based on the above data, the weakest step in the funnel is adding to Cart with {percentage1:.2f}% not completing this step out of {len(all_data)} visitors. To fix this problem Cool T-Shirts Inc. cound change their website to make adding to cart easier.")

#task10 add a column that is the difference between purchase_time and visit_time
all_data["avg_purchase_time"] = all_data.purchase_time - all_data.visit_time

#task11 examine new column with print
print(all_data.avg_purchase_time)

#task12 calculating the average time to purchase
avg_time = all_data.avg_purchase_time.mean()
print(f"The average time it takes for a visitor from initial visit to final purchase is approx. {avg_time.days} days, {avg_time.seconds // 3600} hours, and {(avg_time.seconds % 3600) // 60} minutes.")