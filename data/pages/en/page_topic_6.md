[//]: # "Functions"

## Define and Call a Function

In Python, a function is a group of related statements that take inputs and performs a specific task. Functions help break our program into smaller, commonly, or repeatedly done tasks. Instead of writing the same code again and again for different inputs, we can call the **function**.

Syntax to define a function:

```
def <function_name>(<parameters>):
    <statement(s)>
```

***Parameters***  are the names used when defining a function 




Syntax to call a function:

```
<function_name>(<arguments>)
```

There are 2 new terms ***parameter*** and ***argument***:

***Parameters***  are optional. It can contain one or more parameters separated by comma.  

***Arguments*** are optional. It can contain one or more arguments seperated by comma. Arguments are the values passed into the functions. They correspond to the ***parameters*** in the function definition.


Let's say we create a function to greet someone. First, we create a function with one parameter name
<s_c>
def greeting(name):
    print("Hello")
    print(name)
</s_c>
<br>


| Line  | Explanation                                               |
| ----- | --------------------------------------------------------- |
| 1     | We define a new function `greeting`, one parameter `name` |
| 2 & 3 | Print "Hello" and the value of parameter `name`           |

We create a program to greet "Jay" and "Nick":

<s_c>
def greeting(name):
    print("Hello")
    print(name)
greeting("Jay")
greeting("Nick")
</s_c>

<br>

The above program is executed in the following steps:

| Step | Line | Explanation                                                  |
| :--: | :--: | ------------------------------------------------------------ |
|  1   |  4   | Start of execution line 4. Function definition lines 1 - 3 are skipped.  It starts at line 4 by calling the function `greeting` with argument "Jay" |
|  2   |  1   | jumps to line 1. Value of  parameter `name` is "Jay"         |
|  3   |  2   | prints "Hello" on the screen                                   |
|  4   |  3   | prints "Jay" on the screen because the value of `name` is "Jay" |
|  5   |  4   | End of execution line 4. It jumps to line 5                  |
|  6   |  5   | Start of execution line 5. Calling function `greeting` with one argument "Nick" |
|  7   | 1-3  | Similar to step 2,3 and 4, this time the value of parameter `name` is Nick and Nick will be printed on the screen |


## Passing Arguments

Arguments can contain zero, one, or many argruments. 

If there is no argument, we can call the function with empty parentheses, for example `<function_name>()`.

We have seen how to pass one argument to a function call in our greeting function example above. For passing more than one arguments, you have a few options:

### Positional Arguments

Let's extend our greeting program. Instead of print Hello and *name* in 2 lines, our greeting function will print "Hello Gina, How are you doing?"

<s_c>
def greeting(name, message):
    print("Hello " + name + ", " + message)
</s_c>

There are 2 parameters `name` and `message`: `name` at the first position and `message` at second. When calling the greeting function: 

<p_c>
def greeting(name, message):
    print("Hello " + name + ", " + message)
greeting("Gina", "How are you doing?")	# print "Hello Gina, How are you doing?"
greeting("Nick", "Good morning?")	# print "Hello Nick, Good morning!"
</p_c>
<br>

When calling the greeting function, we have to pass 2 arguments in the right position, in correspondence  to the parameter position in the function definition. For example, "Gina", "Nick" correspond to the parameter `name` and therefore needs to be passed as the first position. "How are you doing?" or "Good morning!" correspond to the parameter `message` and need to be at second position.

You must specify the same number of arguments in the function call as there are parameters in the definition, and in exactly the same order.

### Default Arguments

Function arguments can have default values. We can provide a default value to an argument by using the assignment operator `=`.
For example: `def greeting(name, message="How are you?")`. Parameter *name* doesn't have a default value, so it is mandatory. Parameter `message` has a default value, it is an optional parameter. When calling the greeting function and we don't pass the argument for parameter message, the default value will be used.

<p_c>
def greeting(name, message = "How are you?"):
    print("Hello " + name + ", " + message)
greeting("Gina")	# print "Hello Gina, How are you?"
greeting("Nick", "Good morning?")	# print "Hello Nick, Good morning!"
</p_c>
<br>

### Keyword Arguments

When you’re calling a function, you can specify arguments in the form `<keyword>=<value>`. In that case, each `<keyword>` must match a parameter in the Python function definition. You can specify arguments in any order and Python will still know which argument goes with which parameter.

<p_c>
def greeting(name, message):
    print("Hello " + name + ", " + message)
greeting(name = "Gina", message =  "How are you doing?")	# print "Hello Gina, How are you doing?"
greeting(message = "Good morning!", name = "Nick")	# print "Hello Nick, Good morning!"
</p_c>
<br>

### Arbitrary Arguments

Python allows us to have an arbitrary number of arguments. This is especially useful when we are not sure in the advance that how many arguments, the function would require.
We define the arbitrary arguments while defining a function using the asterisk `*` sign.
<p_c>
def greeting(*names):
    for name in names:
        print(name)
greeting("Gina", "Nick", "Dana", "Jayden")        
</p_c>
<br>

# Built-in Functions

Python has several predefined functions that are always available for use. These functions are called built-in functions. In this tutorial, we will see some of those.


## Print function

One of the most used functions in this course is the `print()` function. `print()` function is to print a message on the screen. 

- `print()` function can take arbitrary arguments (one or many values) and `sep` and `end` keyword arguments. 
- `sep` stands for separator. `sep` can be a string which you would like to insert between values. sep is an optional parameter and has the default value space.
- `end` is an optional parameter and has the default value of `"\n"`. "\n" is a Python literal, which means a newline. 

<br>

<p_c>
print("Hello, World!")			# print one object "Hello, World!"
print("Hello", "Dana")			# print "Hello Nick" in same line.
print("Hello", "Jay", sep=" --- " )	# print "Hello --- Jay" 
print("Dana", "Jay", end="\n\n")	# print "Dana Jay" and add  2 empty lines to the end
print("Done!")
</p_c>
<br>

## Input function

`input()` function is used to ask for user's input.
<p_c>
name = input("What is your name?")
print(name)
</p_c>
<br>

## Module

Module is a python file with an extension `.py`  containing a set of functions you want to use in your program. To include a module in your program, you just need to use the `import` statement. In chapter 2 "Meet Turtle", you might have seen that at the beginning of every example program, we use this statement `import turtle` to include the `turtle` module in our program. Other important built-in modules are Random Module and Math Module

### Random Module

Random module is used to make a random number for a given range or select a random string from a list of strings.
Methods are:  
- `randint(min,max)`. For example `randint(2,7)` to make a random integer between 2 and 7
- `choice(list)`. For example `choice(["ab", "bc", "def"])` to choose randomly one of three strings "ab", "bc" or "def"

<br>

<p_c>
import random
print(random.randint(2,7)) 
fruits = ["orange", "banana", "apple"]
print(random.choice(fruits))
</p_c>

<br>

Everytime you run the program above, you might see a diffrent values in output

### Math Module

To use mathematical functions in your program, you can import the math module: `import math`

<p_c>
import math
print(math.sqrt(4))	#Square root of 4
print(math.pow(2,3)) # 2 power 3
</p_c>

<br>

## Word Guessing Game

A recap from chapter 1 when we introduce the game:

*The program shows to the player at the beginning how many letters the secret word contains and how many guesses he/she starts with. For example, if the secrete word is "banana" with 6 letters, the program will show the secret word at the beginning like this `_ _ _ _ _ _`. If the guessing letter is correct, it shows a message saying that the letter is found in the secret word and how many guesses are left, replaces the input letter with the `_` in the right position. For example `_ a _ a _ a`. if the guessing letter is not correct, shows a message saying that the letter is not found and shows the player how many guesses are left.*

In this chapter, we are going to create a new function  `print_word()` to just print `_ _ _ _ _ _` at the beginning of the game. We will complete this function in a later chapter.  
Please try to use the `for loop` to and the `print()` with parameter `end = ' '`  function for this. Our secretWord is 'banana' with 6 letters and the `print_word()` function should print 6 underscore `_` separated by a space.

Another new function is `print_progress` to print "Good Job! You have x guesses left" if the player has guessed correctly and to print "Not found" if the guess was not correct. This function should have one parameter `isFound` to indicate if the guessed letter is found in the secretWord

After defining these two functions, you can use them in your program.

The program out should look like this:

```
Guess the word as name of a fruit! Enter "quit" to quit game
You have 8 guesses
_ _ _ _ _ _

Enter a letter to guess: a
Good Job! 

Enter a letter to guess: x
Not found! 
```


<p_c size=L>
isSuccess = False
secretWord = 'banana'
chances = 8
hasA = hasB = hasN = False	
print('Guess the word as a name of a fruit! Enter "quite" to quit game ')
print('You have 8 guesses')

while (hasA == False or hasB == False or hasN == False ) and ( chances > 0 ) :
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
        print('Not found')
    if (hasA == True and hasB == True and hasN == True):
        isSuccess = True
        print('Congratulations! You won!')
if isSuccess == False and chances == 0:
    print('I win. Try again')
<p_a_c>
<s_c>

isSuccess = False
secretWord = 'banana'
chances = 8
hasA = hasB = hasN = False	
def print_word():
    for i in secretWord:
        print('_', end = ' ')  
    print()  # To print a new line                        

def print_progress(isFound):
    if isFound:
        print('Good Job!')
    else :
        print('Not found!')    


print('Guess the word as a name of a fruit! Enter "quite" to quit game ')
print('You have 8 guesses')
print_word()

while (hasA == False or hasB == False or hasN == False ) and ( chances > 0 ) :
		#Show a dialog, asking user to guess a letter
    inputLetter = input('Enter a letter to guess: ')
    #Reduce the chances by 1
    chances = chances - 1
    #If the guess is 'a' or 'b' or 'n'
    if inputLetter == 'a':
        hasA = True
        print_progress(True)
    elif inputLetter == 'b':
        hasB = True
        print_progress(True)
    elif inputLetter == 'n':
        hasN = True
        print_progress(True)
    else:
        print_progress(False)
    if (hasA == True and hasB == True and hasN == True):
        isSuccess = True
        print('Congratulations! You won!')
if isSuccess == False and chances == 0:
    print('I win. Try again')
</s_c>
</p_a_c>
</p_c>
