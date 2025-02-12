def hello():
    message = input("Leave a message below: \n")
    return message.replace(" ", "...")

slower_message = hello()
print(slower_message)