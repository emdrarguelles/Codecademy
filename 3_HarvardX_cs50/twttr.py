word = input("Input: ")

vowels = "AaEeIiOoUu"
new_word = ""

for letter in word:
    if letter not in vowels:
        new_word += letter

print("Output: " + new_word)