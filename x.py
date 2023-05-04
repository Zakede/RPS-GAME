import random

choices = ["rock", "paper", "scissors"]

user_choice = int(input("Enter choices:"))

if user_choice == 1:
    user_choice = choices[0]
elif user_choice == 2:
    user_choice == choices[1]
elif user_choice == 3:
    user_choice = choices[2]
else:
    print("Invalid user_choice")

comp = random.choice(choices)

print(comp, user_choice)