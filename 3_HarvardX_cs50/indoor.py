def message():
    message = input("What would you like to say? \n")
    return str(message.lower())

lower_message = message()
print(lower_message)