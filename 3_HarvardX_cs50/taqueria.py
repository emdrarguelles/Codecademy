menu = {
    "Baja Taco": 4.25,
    "Burrito": 7.50,
    "Bowl": 8.50,
    "Nachos": 11.00,
    "Quesadilla": 8.50,
    "Super Burrito": 8.50,
    "Super Quesadilla": 9.50,
    "Taco": 3.00,
    "Tortilla Salad": 8.00
}

try:
    total = 0
    while total >= 0:
        item = input("Item: ")
        fixed = item.title().strip()

        if fixed in menu:
            total += float(menu[fixed])
            rounded = format(total, ".2f")
            print(f"Total: ${rounded}")


except (EOFError, KeyError):
    print("")