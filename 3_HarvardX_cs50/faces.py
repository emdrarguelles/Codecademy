def convert(message):
    message = message.replace(":)", "🙂")
    message = message.replace(":(", "🙁")
    return message

def main():
    message = input()
    message = convert(message)
    return message

emoji_message = main()
print(emoji_message)