file = input("File name: ")
clean_file = file.lower().strip()
gif = ".gif"
jpg = ".jpg"
jpeg = ".jpeg"
png = ".png"
pdf = ".pdf"
txt = ".txt"
zip = ".zip"

if gif in clean_file:
    print("image/gif")
elif jpg in clean_file:
    print("image/jpeg")
elif jpeg in clean_file:
    print("image/jpeg")
elif png in clean_file:
    print("image/png")
elif pdf in clean_file:
    print("application/pdf")
elif txt in clean_file:
    print("text/plain")
elif zip in clean_file:
    print("application/zip")
else:
    print("application/octet-stream")