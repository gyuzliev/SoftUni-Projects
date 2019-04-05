# 1. Number in Range [1...100]

# Напишете програма, която въвежда цяло положително число n в диапазона [1…100]. При въвеждане на число извън
# посочения диапазон, да се отпечата съобщение за грешка и потребителят да се подкани да въведе ново число.

number = int(input())

# nevalidno

while number < 1 or number > 100:
# става и така
# # while not number (number >= 1 and number <= 100):
    print("Invalid number!")
    number = int(input())

print(f'The number is : {number}')

