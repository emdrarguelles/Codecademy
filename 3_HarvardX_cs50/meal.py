def main():
    time = input("What time is it? ")
    time = convert(time)

    bf_s = 7.0
    bf_e = 8.0
    l_s = 12.0
    l_e = 13.0
    d_s = 18.0
    d_e = 19.0

    if time >= bf_s and time <= bf_e:
        print("breakfast time")
    if time >= l_s and time <= l_e:
        print("lunch time")
    if time >= d_s and time <= d_e:
        print("dinner time")

def convert(time):
    am = "a.m."
    pm = "p.m."
    if len(time) <= 5:
        x, y = time.split(":")
        hour = int(x)
        minute = float(int(y) / 60)
        x_time = float(hour + minute)
    else:
        x, y = time.split(":")
        y, z = y.split(" ")
        if z == am:
            hour = int(x)
            minute = float(int(y) / 60)
            x_time = float(hour + minute)
            return x_time
        if z == pm:
            if int(x) != 12:
                hour = int(x) + 12
                minute = float(int(y) / 60)
                x_time = float(hour + minute)
                return x_time
            elif int(x) == 12:
                hour = int(x)
                minute = float(int(y) / 60)
                x_time = float(hour + minute)
                return x_time
    return x_time

if __name__ == "__main__":
    main()