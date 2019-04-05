# 7. Water dispenser

# Всеки офис си има диспенсър за вода. Напишете програма, която отчита дали служител от офиса
# е успял да напълни чашата си успешно.
# Диспенсърът има три бутона :
# •	Easy - лесен (50 милилитра)
# •	Medium - среден (100 милилитра)
# •	Hard - силен (200 милилитра)
# Ще получите обемът на чашата и на всеки следващ ред кой бутон е бил натиснат. Ако чашата се напълни
#  или прелее програмата приключва.
# Ако чашата прелее отпечатайте колко вода е била излята. При успешно напълване отпечатайте
#  броят на натисканията на бутона.

# using System;
# using System.Collections.Generic;
# using System.Linq;
# using System.Text;
# using System.Threading.Tasks;
#
# namespace Water_dispenser
# {
#     class Program
#     {
#         static void Main(string[] args)
#         {
#
#             int cupVolume = int.Parse(Console.ReadLine());
#             int counter = 0;
#             double volume = 1;
#             double overallVolume = 1;
#
#             while (overallVolume <= cupVolume)
#             {
#                 string buttons = Console.ReadLine();
#                 if (buttons == "Easy") volume = 50;
#                 if (buttons == "Medium") volume = 100;
#                 if (buttons == "Hard") volume = 200;
#                 overallVolume = overallVolume + volume;
#
#                 if (overallVolume > cupVolume)
#                 {
#                     overallVolume = overallVolume - cupVolume;
#                     Console.WriteLine($"{overallVolume}ml has been spilled.");
#                 }
#                 counter++;
#             }
#             Console.WriteLine($"The dispenser has been tapped: {counter} times.");
#
#         }
#     }
# }

v_glass = int(input())
type_button = input()
v_counter = 0
counter = 0


while v_counter <= v_glass:
    type_button = input()
    if type_button == 'Easy':
        v_counter = 50
        v_counter += v_counter
        counter += counter + 1
        type_button = input()


    if type_button == 'Medium':
        v_counter = 100
        v_counter += v_counter
        counter += counter + 1
        type_button = input()


    if type_button == 'Hard':
        v_counter = v_counter + 200
        counter += counter + 1


if v_counter == v_glass:
    print(f"The dispenser has been tapped {counter} times.")

elif v_counter > v_glass:
    spilled_water = v_counter - v_glass
    print(f'{spilled_water}ml has been spilled.')
