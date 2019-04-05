# 2. Old Books

searched_book = input()
library_capacity = int(input())
checked_books_counter = 0
book = None

while library_capacity != 0:
    book = input()

    if book == searched_book:
        print(f'You checked {checked_books_counter} books and found it.')
        break
    library_capacity -= 1
    checked_books_counter += 1

if book != searched_book:
    print(f'The book you search is not here!')
    print(f'You checked {checked_books_counter} books.')