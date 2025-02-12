greeting = input("Greeting: ")
hello = "hello"
h = "h"
clean_greeting = greeting.lower().strip()
f_letter = clean_greeting[0]

if hello in clean_greeting:
    print("$0")
elif hello not in clean_greeting and f_letter == h:
    print("$20")
else:
    print("$100")