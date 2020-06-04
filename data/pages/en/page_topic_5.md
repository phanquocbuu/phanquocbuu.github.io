[//]: # "Loopsl"

## Loops

Let's say we have a program that prints 10 different numbers from 0 to 9 in sequence. With the technique we have learned so far, we would write 10 statements with print() function, like this

```
print(0)
print(1)
print(2)
...
print(9)
```

***Loops*** allow us to tell our program to do the same thing over and over with just a few simple, clear, and easy to understand lines. 
A for loop will repeat a code block. Repetition is continued until the stop condition is met. 

There are two types of loops in Python, ***for*** and ***while***.

## For

The syntax for a For Loop:
```
for <loop_variable> in <sequence>:
    <statement1>
    <statementN>
```
`<sequence>` can be a list, for example, ["apple", "orange", "banana"]
`<loop_variable>` is a loop variable that is used for iterating over a `<sequence>`.

It starts with checking if the sequence still has elements to be iterated, if yes assigning the first element of the sequence (it is a list) to the loop variable. Next, the statement block (statement1 ... statementN) is executed. Each element in the list is assigned to the loop variable and the statements block is executed until all the elements of the list are iterated.  

<p_c>
fruits = ["apple", "orange", "banana"]	# create a list fruits
for fruit in fruits:	# fruit is <loop_variable>, fruits is <sequence>	
    print(fruit)	# print each fruit in fruits
</p_c>
<br>

The above program is executed in the following sequence:
1. Line 1: A list `fruits` is created with 3 elements "apple", "orange" and "banana"
2. Line 2: Is there still element to be iterated? Yes. The first element of the list is assigned to `fruit`. Value of loop variable fruit is "apple"
3. Line 3: print out "apple" on screen
4. Line 2: Is there still an element to be iterated? Yes. "orange" is assigned to `fruit`. Value of loop variable fruit is "orange"
5. Line 3: print out "orange" on screen
6. Line 2: Is there still an element to be iterated? Yes. "banana" is assigned to `fruit`. Value of loop variable fruit is "banana"
7. Line 3: print out "banana" on screen
8. Line 2: Is there still an element to be iterated? No. Program stops.

### For loop and range() function

The `range(<start>, <end>)` function returns a sequence of numbers, starting from `<start>` number,  and increments by 1 and ends with `<end>` number minus 1 (`<end>` number is not included). If `<start>` is not given, it will start with 0.
For example:
`rang(3)` returns a sequence of 0, 1, 2 *Note: 3 is not included; it starts from 0 because `<start>` number is not provided *
`rang(2,6)` returns 2, 3, 4, 5 *Note: 6 is not included* 

The following program to print 10 numbers from 0 to 9:

<p_c>
for number in range(0,10):
    print(number)
</p_c>

<br>

## While Loop

While loops repeat as long as a certain boolean expression/condition is met.
Syntax:
```
while (<True/False_expression>):
    <statement1>
    <statementN>
```
In the while loop, True/False_expression  is checked first. The body of the loop is executed only if the True/False_expression evaluates to True. After one iteration, the True/False_expression is checked again. This process continues until the True/False_expression evaluates to False.

<p_c>
number = 0
while (number < 3):
    print(number)
    number = number + 1
</p_c>

<br>

The program above is executed in the following sequences:
1. Line 1: Variable `number` is created with value 0 
2. Line 2: `number` is 0, so `number < 3` is True. Enter the statement block in line 3 and 4
3. Line 3: print out 0
4. Line 4: `number = number + 1` means increasing the value of variable `number` by 1. New value of `number` is 0 + 1 = 1
5. Line 2:`number` is 1, so `number < 3` is True. Enter the statement block in line 3 and 4
6. Line 3: print out 1
7. Line 4: `number = number + 1` means increasing the value of variable `number` by 1. New value of `number` is 1 + 1 = 2
8. Line 2:`number` is 2, so `number < 3` is True. Enter the statement block in line 3 and 4
9. Line 3: print out 2
10. Line 4: `number = number + 1` means increasing the value of variable `number` by 1. New value of `number` is 2 + 1 = 3
11. Line 2:`number` is 3, so `number < 3` is False. The statement block in lines 3 and 4 is skipped. Program ends


## Break and Continue

Loops iterate over a block of code until the expression is false, but sometimes we wish to terminate the current iteration or even the whole loop without checking test expression.

`break` is used to exit a loop, `continue` is used to skip the current block  and return to the `for` or `while` statement

Example:

<p_c>
for letter in "Hello, World!":
    if letter == ",":
        break;
    print(letter)
</p_c>

<br>

The program above iterates through all the letters in the string "Hello, World!". It assigns each letter to the loop variable `letter` and it checks if the letter is "," (line 2). If the letter is not ",", `letter` will be printed. If the letter is ",", the `break` statement is executed (line 3) and the loop is terminated. We see in the result only 4 letters: H e l l o.

`continue` is used to skip the current statement block for the current iteration only. Loop doesn't terminate but continues on with the next iteration.

<p_c>
for letter in "Hello, World!":
    if letter == ",":
        continue;
    print(letter)
</p_c>
<br>

When the letter is ",", the `continue` statement is executed (line 3) and it skips the current statement `print(letter)` at line 4 and returns to line 1. Hence, we see in the result these letters: H e l l o W o r l d ! -- (without comma) 


## Word Guessing Game

Up to now, our program can only request the user to guess a letter once.  We will use a `while loop` to keep asking the player to guess: 
```
While the secret word has not been guessed and the user still has chances remaining {
		Show a dialog, asking the user to guess a letter
		Reduce the chances by 1
		If the guess is 'a' or 'b' or 'n' { 
				Keep track of correct guessed letters
				Print "good job!"
		}
		Check if word has been guessed. If yes, print 'Congratulations! You won!'
}
if secret word has not been guessed and no chances remaining {
		print('I win. Try again')
}

```

We call the above block **Pseudocode**. It means *fake code* in plain English to describe how a program will work. 

In the pseudocode above, there is one line saying "keep track of correct guessed letters".  This means we need to have a way to keep track of the letters which the player has guessed correctly. Let's say the player has guessed 2 correct letters 'a' and 'n', we need to keep this information somewhere so whenever the player has guessed the last correct letter 'b' before ran out of chances, we know that he/she has won the game. To keep track of the player's progress, we can create 3 variables: hasA, hasB, and hasN. In the beginning, they all have the False values. If the player has guessed correctly, we set these variables to True. For example, if the player has guessed 'a', we set the variable hasA to True.


In the first line:   
"the secret word has not been guessed"  means either hasA or hasB or hasC is False.   
"user still has chances remaining" means that chances are greater than 0 (changes > 0)
*Note: this is an example of "If with Compound Conditionals" we discussed in the previous chapter*

Line 3: "Reduce the chances by 1" means - at the begining, the chances are 8, after each guesses the chances get reduced by one. This can be written as code like this:
```
chances = 8						# chances has value 8
chances = chances - 1 # chances has value 7 because 8 - 1
```

The last "Check if word has been guessed": To keep track whether the word has been guessed or not, we use a new variable `isSuccess` and set its value to False at the beginning. If hasA is True and hasB is True and hasN is True, then the secret word has been guessed. We will use this variable as a condition in line 1 of the while loop.


Now it is your turn to translate the pseudocode into python code. 
*Note: Line 5 - 9 should be put into the while loop*

<p_c size=M>
print('Guess the word as a name of a fruit! Enter "quite" to quit game ')
print('You have 8 guesses')
secretWord = 'banana'
chances = 8
inputLetter = input('Enter a letter to guess: ')
if inputLetter == 'a' or inputLetter == 'b' or inputLetter == 'n':
    print('Good Job!')
else:
    print('Not found')
<p_a_c>
<s_c>
isSuccess = False
secretWord = 'banana'
chances = 8
hasA = hasB = hasN = False	

print('Guess the word as a name of a fruit! Enter "quite" to quit game ')
print('You have 8 guesses')
while (isSuccess == False ) and ( chances > 0 ) :
		#Show a dialog, asking user to guess a letter
    inputLetter = input('Enter a letter to guess: ')
    #Reduce the chances by 1
    chances = chances - 1
    #If the guess is 'a' or 'b' or 'n'
    if inputLetter == 'a':
        hasA = True
        print('Good Job')
    elif inputLetter == 'b':
        hasB = True
        print('Good Job')
    elif inputLetter == 'n':
        hasN = True
        print('Good Job')
    else:
        print('Not found!')
    if (hasA == True and hasB == True and hasN == True):
        isSuccess = True
        print('Congratulations! You won!')
if isSuccess == False and chances == 0:
    print('I win. Try again')
</s_c>
</p_a_c>
</p_c>









