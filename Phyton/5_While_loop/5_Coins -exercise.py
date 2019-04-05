# 5. Coins

amount = float(input())
coins_counter = 0

while amount > 0:
    if amount >= 2:
        amount -= 2
    elif amount >= 1:
        amount -= 1
    elif amount >= 0.50:
        amount -= 0.50
    elif amount >= 0.20:
        amount -= 0.20
    elif amount >= 0.10:
        amount -= 0.10
    elif amount >= 0.05:
        amount -= 0.05
    elif amount >= 0.02:
        amount -= 0.02
    else:
        amount -= 0.01
    coins_counter += 1
    amount = float(f'{amount:.2f}')

print(coins_counter)