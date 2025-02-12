c_case = input("camelCase: ")
s_case = []

upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
lower = "abcdefghijklmnopqrstuvwxyz"


for letter in c_case:
    if letter in lower:
        s_case.append(letter)
    elif letter in upper:
        s_case.append("_")
        s_case.append(letter.lower())

print("snake_case: " + "".join(s_case))