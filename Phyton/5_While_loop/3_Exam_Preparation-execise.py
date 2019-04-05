# 3. Exam Preparation

bad_grades_count = int(input())

grades_total = 0
problems_count = 0
bad_problems_count = 0
last_problem = None
problem_name = None
grade = None

while bad_problems_count != bad_grades_count:
    problem_name = input()
    if problem_name == 'Enought':
        break
    grade = int(input())
    if grade <= 4:
        bad_problems_count += 1
    grades_total += grade
    problems_count += 1
    last_problem = problem_name
if bad_problems_count == bad_grades_count:
    print(f'You need a break, {bad_problems_count} poor grades.')
else:
    print(f'Average score: {(grades_total/problems_count):.2f}')
    print(f'Number of problems: {problems_count}')
    print(f'Last problem: {last_problem}')