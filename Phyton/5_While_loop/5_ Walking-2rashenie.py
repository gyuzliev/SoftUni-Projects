# 5. Walking

#Габи иска да започне здравословен начин на живот и си е поставила за цел да върви 10 000 стъпки всеки ден.
# Някои дни обаче е много уморена от работа и ще иска да се прибере преди да постигне целта си. Напишете програма,
# която чете от конзолата по колко стъпки изминава тя всеки път като излиза през деня и когато постигне целта си да
# се изписва "Goal reached! Good job!"
# Ако иска да се прибере преди това, тя ще въведе командата "Going home" и ще въведе стъпките, които е извървяла
# докато се прибира. След което, ако не е успяла да постигне целта си, на конзолата трябва да се изпише: "
# {разликата между стъпките} more steps to reach goal."

counter_steps = 0
goal = 10000

while counter_steps < goal:
    steps = input()
    if steps == 'Going home':
        steps = int(input())
        counter_steps += steps
        if counter_steps >= goal:
            print("Goal reached! Good job!")
        else:
            diff = goal - counter_steps
            print(f'{diff} more steps to reach goal.')
        break

    counter_steps += int(steps)

print("Goal reached! Good job!")

# НЕ РАБОТИ-ДА Я ПРЕРАБОТЯ



