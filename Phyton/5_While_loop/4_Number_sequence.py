# 4. Number sequence

# Напишете програма, която чете цели числа, докато не получи командата "END".
# Принтирайте най-голямото и най-малкото число сред въведените.

number = input()  # тук е като стринг
max_number = int(number)
min_number = int(number)

if not number == "END":
    max_number = int(number)
    min_number = int(number)

while not number == 'END':
    number = int(number)  # превръщаме стринго в число

    if number >= max_number:
        max_number = number
    if number <= min_number:
        min_number = number

    number = input()

print(f'Max number: {max_number}')
print(f'Min number: {min_number}')