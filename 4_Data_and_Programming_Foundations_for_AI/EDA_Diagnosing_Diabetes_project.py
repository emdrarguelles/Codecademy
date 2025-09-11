import codecademylib3
import pandas as pd
import numpy as np

# code goes here
# Task 1: checking dataset and indicating expected data type
print("Expecting Pregnancies to be int")
print("Expecting Glucose to be int")
print("Expecting BloodPressure to be int")
print("Expecting SkinThickness to be int")
print("Expecting Insulin to be int")
print("Expecting BMI to be float")
print("Expecting DiabetesPedigreeFunction to be float")
print("Expecting Age to be int")
print("Expecting Outcome to be object")

# Task 2: load data and store in diabetes_data

diabetes_data = pd.read_csv('diabetes.csv')

# Task 3 and 4: how many columns and how many rows does the data contain? 
print(diabetes_data.info())
print('There are 9 columns in the data and 768 rows.')

# Task 5: do any of the columns in the data contain null (missing) values?
print(diabetes_data.isnull().sum())
print('There are no null or missing values based on .info()')

# Task 6: investigate further, calculate summary statistics on diabetes_data using the .describe() method.
print(diabetes_data.describe())

#Task 7 what is odd about columns Glucose, BloodPressure, SkinThickness, Insulin and BMI?
print('What is odd about these columns is that they all have a min of 0.0 which means there are some entries that 0 as a default which are outliers.')

# Task 8: do you spot any other outliers in the data?
print('Another outlier in this data would be the max Insulin of 846.0 which greatly exceed both the mean of 79.80 and median of 30.5')

# Task 9: seeing if we can get a more accurate view of the missing values in the data using .replace() and np.NaN
diabetes_data[['Glucose','BloodPressure','SkinThickness','Insulin','BMI']] = diabetes_data[['Glucose','BloodPressure','SkinThickness','Insulin','BMI']].replace(0,np.nan)

# Task 10: Checking for any null values:
print(diabetes_data.isnull().sum())
print(f'There are a total of {diabetes_data.isnull().sum().sum()} missing values across all columns.')

# Task 11: Print out all rows with missing values
print(diabetes_data[['Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI']])

# Task 12: Go through the rows with missing data. Do you notice any patterns or overlaps between the missing data?
print(diabetes_data[['Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI']].sort_values('Insulin'))
# Observation
print('After sorting the values across the different columns it can be seen that all rows with missing values have Insulin value missing followed by failing to check skin thickness as well. The other missing values Glucose, BloodPressure, and BM are outliers in this case.')

# Task 13: checking tyhe data type of each column
print(diabetes_data.dtypes)
print('No it did not match my expectations as indicated my on Task 1 answer since there are now more floats after .replace(0,np.nan).')

# Task 14: print out the unique values in the Outcome column
print(diabetes_data['Outcome'].unique())

# Task 15: how might you resolve this issue? Issue being there is a letter O mixed in with Outcomes
diabetes_data['Outcome'] = diabetes_data['Outcome'].replace('O', '0')

# checking for updated unique outcomes
print(diabetes_data['Outcome'].unique()) 

# Task 16A: Use .value_counts() to more fully explore the values in each column.
for column in diabetes_data.columns:
  print(f"\n{column}:")
  print(diabetes_data[column].value_counts().sort_values())

# Task 16B: Investigate other outliers in the data that may be easily overlooked.
print('The outliers are: Pregnancies: 14, 15, 16, Glucose: 199.0, SkinThickness: 99.0, Insulin: 600.0, 680.0, 846.0, and a lot more')

# Task 16C: Instead of changing the 0 values in the five columns to NaN, try replacing the values with the median or mean of each column
columns_to_update = ['Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI']

for column in columns_to_update:
    median = diabetes_data[column].median()
    diabetes_data[column] = diabetes_data[column].replace(0, median)

# Inspect updated NaN to median values
print(diabetes_data.describe())