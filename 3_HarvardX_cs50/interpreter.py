expression = input("Expression: ")
x, y, z = expression.split(" ")
add = "+"
subtract = "-"
divide = "/"
multiply = "*"

if y == add:
    solution = float(int(x) + int(z))
    print(solution)
elif y == subtract:
    solution = float(int(x) - int(z))
    print(solution)
elif y == divide:
    solution = float(int(x) / int(z))
    print(solution)
elif y == multiply:
    solution = float(int(x) * int(z))
    print(solution)