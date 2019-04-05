a = int(input())
b = int(input())
num_1 = 1

while b != 0:
    num_1 = b
    b = a % b
    a = num_1
print(a)
