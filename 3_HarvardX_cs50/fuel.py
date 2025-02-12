def main():
     try:
        fuel = input("Fraction: ")
        x, y = fuel.split("/")
        nums = "0123456789"
        count = 0

        while count < 1:
            if x[0] and y[0] in nums:
                x = int(x)
                y = int(y)
                if x <= y:
                    count += 1
                    convert(x, y)
                else:
                    main()
            else:
                main()
            break
     except (ValueError, ZeroDivisionError):
          main()

def convert(x, y):
        level = (x / y) * 100
        rounded = round(level)
        percent = int(rounded)
        if percent >= 99:
             print("F")
        elif percent <= 1:
             print("E")
        else:
             print(f"{percent}%")

main()