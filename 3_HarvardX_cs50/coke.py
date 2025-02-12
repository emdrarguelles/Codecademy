amount_due = 50
paid = 0
coins = [25, 10, 5]

print("Amount Due: " + str(amount_due))
coin = int(input("Insert Coin: "))

if amount_due > 0:
    while amount_due > 0:
        if coin in coins:
            paid += coin
            amount_due -= coin
            if amount_due > 0:
                print("Amount Due: " + str(amount_due))
                coin = int(input("Insert Coin: "))
            elif amount_due == 0:
                print("Change Owed: " + str(amount_due))
            elif amount_due < 0:
                print("Change Owed: " + str(abs(amount_due)))
        else:
            print("Amount Due: " + str(amount_due))
            coin = int(input("Insert Coin: "))