def main():
    plate = input("Plate: ")
    if is_valid(plate):
        print("Valid")
    else:
        print("Invalid")


def is_valid(s):
    first_2 = first_two(s)
    zeroless = no_zero(s)
    no_let = nums_only(s)
    only_letnum = just_letnum(s)

    if first_2 and zeroless and no_let and only_letnum == True:
        return True
    else:
        return False



def first_two(s):
    let = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    two = s[0:2]
    for letter in two:
        if letter in let:
            return True


def no_zero(s):
    let = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    num = "0123456789"
    zero = "0"
    word = ""
    for letter in s:
        word += letter
    if zero not in word[0:3]:
        return True

def nums_only(s):
    let = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    num = "0123456789"
    if len(s) >= 2 and len(s) <= 6:
        last = s[-1]
        second = s[-2]
        for letter in second:
            if letter in num:
                for letter in last:
                    if last not in let:
                        return True
            elif letter in let:
                for letter in last:
                    if last in let:
                        return True

def just_letnum(s):
    allowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    word = 0
    for letter in s:
        if letter not in allowed:
            word += 1
        else:
            word += 0
    if word == 0:
        return True


main()