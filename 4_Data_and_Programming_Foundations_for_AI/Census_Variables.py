import codecademylib3

# Import pandas with alias
import pandas as pd

# Read in the census dataframe
census = pd.read_csv('census_data.csv', index_col=0)

#task 1 access first few rows of df
print(census.head())

#task 2 assess variable types based on .head() output
print('birth_year appears to be string, but should be int')

#task 3 compare the values and data types
print(census.dtypes)

#task 4 print the unique values of the variable using the .unique() method.
print(census.birth_year.unique())

#task 5 use the .replace() method to replace the missing value with 1967
census.birth_year = census.birth_year.replace(['missing'], 1967)

#task 5 rechecking birth years if all int
print(census.birth_year.unique())

#task 6 change the birth_year datatype from str to int
census.birth_year = census.birth_year.astype('int64')

#task 6 checking updated data types
print(census.dtypes)

#task7 print the average birth year
print(f'The average birth year among the resppondents is {census.birth_year.mean():.0f}.')

#task 8 convert the higher_tax variable to the category data type with the appropriate order
census.higher_tax = pd.Categorical(census.higher_tax, ['strongly disagree', 'disagree', 'neutral', 'agree', 'strongly agree'], ordered=True)

#task 8 print the new order using the .unique() method
print(census.higher_tax.unique())

#task 9 label encode the higher_tax variable
census.higher_tax = census.higher_tax.cat.codes
#task 9 print the median using the pandas .median() method.
print(f'The median of the higher_tax responses encoded is {census.higher_tax.median()}.')

#task 11A convert to categorical to be able to encode
census['marital_status'] = pd.Categorical(census['marital_status'])

#task 11A create a new variable called marital_codes by Label Encoding the marital_status variable. 
census['marital_codes'] = census.marital_status.cat.codes

#task 10 One-Hot Encode marital_status to create binary variables of each category. 
census = pd.get_dummies(census, columns=['marital_status'])

#task 10 print the first five rows of the OHE  dataframe with the .head() method.
print(census.head())

#task 11B create a new variable called age_group, which groups respondents based on their birth year. The groups should be in five-year increments, e.g., 25-30
#calculating age with lamba using 2025
census['age'] = census.birth_year.apply( lambda x: 2025 - x)

#checking for unique age
print(census.age.unique())

#creating bins into 5 year age-groups and using pd.cut() 
census['age_group'] = pd.cut(census['age'], bins=[19, 26, 31, 36, 41, 46, 51, 56, 61, 66, 71, 76, 81, 86], labels=['20-25', '26-30', '31-35', '36-40', '41-45', '46-50', '51-55', '56-60', '61-65', '66-70', '71-75', '76-80', '81-85'])

#turning age_group into ordinal category
census['age_group'] = pd.Categorical(census.age_group, ['20-25', '26-30', '31-35', '36-40', '41-45', '46-50', '51-55', '56-60', '61-65', '66-70', '71-75', '76-80', '81-85'], ordered=True)

#label encoding age_group
census['age_group_encoded'] = census.age_group.cat.codes

#final review
print(census.head())