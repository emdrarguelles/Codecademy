# Load libraries
import pandas as pd
import numpy as np
import codecademylib3
import matplotlib.pyplot as plt
import seaborn as sns

# Import data
students = pd.read_csv('students.csv')

# Print first few rows of data
print(students.head())

# Print summary statistics for all columns
print(students.describe(include='all'))
print('Based on the Top value being U with a count of 307 out of 395, more students live in urban locations vs rural.')

# Calculate mean
print(f"The mean of students' math grades: {students.math_grade.mean():.2f}.")

# Calculate median
print(f"The median of students' math grades: {students.math_grade.median():.2f}.")
print('Comparing both the mean and median, the median is larger by .58.')

# Calculate mode
print(f"The mode of students' math grades: {students.math_grade.mode()[0]} is the most common grade earned by students. Compared to the mean and median, it is relatively close with only .42 less than the mean and 1.00 less than the median.")

# Calculate range
print(f"The range of students' math grades is: {students.math_grade.max() - students.math_grade.min()}.")

# Calculate standard deviation
print(f"The standard deviation of students' math grades is: {students.math_grade.std():.2f}. Given that two thirds of values fall within one standard deviation of the mean.This number tell us that math grades have very little variation with only few outliers.")

# Calculate MAD
print(f"The mean difference between each student's score and the average score for students' math grades is: {students.math_grade.mad():.2f}.")

# Create a histogram of math grades
sns.histplot(x='math_grade', data=students)
plt.tight_layout()
plt.show()
plt.clf()

# Create a box plot of math grades
sns.boxplot(x='math_grade', data=students)
plt.tight_layout()
plt.show()
plt.clf()

# Calculate number of students with mothers in each job category
print(students.Mjob.value_counts())
print('Based on the data those who tagged "other" was the most common.')

# Calculate proportion of students with mothers in each job category
mjob_props = students.Mjob.value_counts(normalize=True)
for mjob, prop in mjob_props.items():
  print(f'{mjob}: {prop:.2%}')
print(f'Based on the data above {mjob_props.health:.2%} of mothers worked in health.')

# Create bar chart of Mjob
sns.countplot(x='Mjob', data=students)
plt.tight_layout()
plt.show()
plt.clf()

# Create pie chart of Mjob
students.Mjob.value_counts().plot.pie()
plt.tight_layout()
plt.show()
plt.close()

# Further exploration
# Checking count of addresses 
print(students.address.value_counts())

# checking proportion of addresses
address_props = students.address.value_counts(normalize=True)
for address, prop in address_props.items():
  print(f'{address}: {prop:.2%}')
  
# Creating a bar chart for address
sns.countplot(x='address', data=students)
plt.tight_layout()
plt.show()
plt.close()

# Creating a pie chart for address
students.address.value_counts().plot.pie()
plt.tight_layout()
plt.show()
plt.close()

# Checking mean of absences 
print(f'{students.absences.mean():.2f}')

# checking median of absences
print(f'{students.absences.median():.2f}')

# checking mad of absences
print(f'{students.absences.mad():.2f}')

# Creating a histograph chart for absences
sns.histplot(x='absences', data=students)
plt.tight_layout()
plt.show()
plt.close()

# Creating a boxplot chart for absences
sns.boxplot(x='absences', data=students)
plt.tight_layout()
plt.show()
plt.close()

# Calculate number of students with fathers in each job category
print(students.Fjob.value_counts())
print('Based on the data those who tagged "other" was the most common.')

# Calculate proportion of students with fathers in each job category
fjob_props = students.Fjob.value_counts(normalize=True)
for fjob, prop in fjob_props.items():
  print(f'{fjob}: {prop:.2%}')
print(f'Based on the data above {fjob_props.health:.2%} of fathers worked in health.')

# Create bar chart of Fjob
sns.countplot(x='Fjob', data=students)
plt.tight_layout()
plt.show()
plt.clf()

# Create pie chart of Fjob
students.Fjob.value_counts().plot.pie()
plt.tight_layout()
plt.show()
plt.close()