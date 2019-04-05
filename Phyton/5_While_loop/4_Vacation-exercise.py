# 4. Vacation

trip_price = int(input())
savings = float(input())

day_count = 0
spending_count = 0

while trip_price > savings:
    command = input()
    money = float(input())
    if command == 'spend':
        savings -= money
        spending_count += 1
        if savings < 0:
            savings = 0
    elif command == 'save':
        savings += money
        spending_count = 0
    day_count += 1
    if spending_count == 5:
        break

if trip_price <= savings:
    print(f'You saved the money for {day_count} days.')
else:
    print(f'You can\'t save the money.')
    print(f'{day_count}')

