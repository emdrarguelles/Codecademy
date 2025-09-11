import pandas as pd
pd.set_option('display.max_colwidth', -1)
#req 1 load and print csv
df = pd.read_csv('jeopardy.csv')

print(df.columns)
#req2 create a function to filter questions based on words
def filtered_df(df, words):
  #req 3 modify question and word to handle capitalization issues 
  return df[df[' Question'].str.lower().apply(lambda question: all(word.lower() in question for word in words))]

new_df = filtered_df(df, ["King", "England"])

print(new_df)
#req 4 remove the $ and , with str.replace
df[' Value'] = df[' Value'].str.replace('$', "", regex=False).str.replace(",", "", regex=False)
#req 4 turn values into a float handling "no value" error
df[' Value'] = pd.to_numeric(df[' Value'], errors='coerce')

print(df[' Value'])
#req 4 calculate the mean for questions with "King
king_df = filtered_df(df, ["King"])
print(f"The average value of the questions that contain the word \"King\" is {king_df[' Value'].mean():.2f}.")

#req 5 Write a function that returns the count of the unique answers to all of the questions in a dataset.
def count_unique(filtered_df):
  return filtered_df[' Answer'].value_counts()

#req 5 To check if the answer “Henry VIII” appeared 3 times and was the most common answer is true.
print(count_unique(king_df))

#req 6A Investigate the ways in which questions change over time by filtering by the date. How many questions from the 90s use the word "Computer" compared to questions from the 2000s?
computer_df = filtered_df(df, ["Computer"])

#req 6A See what the dates look like
print(computer_df[' Air Date'].head())  
# See all unique dates
print(computer_df[' Air Date'].value_counts())  

#req 6A Filter for 90s (1990-1999)
nineties = computer_df[computer_df[' Air Date'].str.contains('199')]
print(f"90s questions with 'Computer': {len(nineties)}")

#req 6A Filter for 2000s (2000-2009) 
twothousands = computer_df[computer_df[' Air Date'].str.contains('200')]
print(f"2000s questions with 'Computer': {len(twothousands)}")

#req 6B Is there a connection between the round and the category? Are you more likely to find certain categories, like "Literature" in Single Jeopardy or Double Jeopardy?

#req 6B examine round column
print(df[' Round'].value_counts()) 

#req 6B separating each round 
jeopardy = df[df[' Round'] == 'Jeopardy!']
print(jeopardy[' Category'].value_counts())

doublejeopardy = df[df[' Round'] == 'Double Jeopardy!']
print(doublejeopardy[' Category'].value_counts()) 

finaljeopardy = df[df[' Round'] == 'Final Jeopardy!']
print(finaljeopardy[' Category'].value_counts()) 

#req 6B Count Literature in each round
lit_jeopardy = len(jeopardy[jeopardy[' Category'] == 'LITERATURE'])
lit_double = len(doublejeopardy[doublejeopardy[' Category'] == 'LITERATURE'])
lit_final = len(finaljeopardy[finaljeopardy[' Category'] == 'LITERATURE'])

print(f"Literature in Jeopardy!: {lit_jeopardy}")
print(f"Literature in Double Jeopardy!: {lit_double}")
print(f"Literature in Final Jeopardy!: {lit_final}")
print("Based on the above the answer to whether you more likely to find certain categories, like \"Literature\" in Single Jeopardy or Double Jeopardy, is yes you do find more in Double.")

#req 6C Build a system to quiz yourself. Grab random questions, and use the input function to get a response from the user. Check to see if that response was right or wrong. Note that you can’t do this on the Codecademy platform — to do this, download the data, and write and run the code on your own computer! This cannot be done on Codeacademy so I did not work on this.