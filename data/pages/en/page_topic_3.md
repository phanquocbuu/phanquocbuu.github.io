[//]: # "Basic Terms and Definitions"

## Values and Data Types

We have seen in the first chapter the value "Hello, World!" and value 5 - from print(2 + 3).  A value is always of a certain type, for example, a string or a number. "Hello, World!" is a type of string (it is a string of letters) and 5 is an integer (an integer is a whole number; a number that is not a fraction). There are several data types in Python but for now, we are getting to know the 4 basic data types: `str`, `int` for integer, `Boolean` and `list`. We will learn about the data types in detail in the dedicate chapters later in the course.  

### String
String in python are surrounded by either single quotation marks, or double quotation marks: 'Hello,World!' or "Hello,World!".

Each element of a string has an index, starting from Zero. 

|  H   |  e   |  l   |  l   |  o   |  ,   |  W   |  o   |  r   |  l   |  d   |  !   |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
|  0   |  1   |  2   |  3   |  4   |  5   |  6   |  7   |  8   |  9   |  10  |  11  |

To access an element of a string, we use the index operator: **[ ]** with an index inside the square brackets. For example [0] to access the first element of "Hello, World!" which is H and [6] to access the 7th element which is W. 
*Note that index starts from 0. So index 0 means the first element, index 1 is the second element and index n for the (n+1) element*
<p_c>
print("Hello,World!"[0]) 		 # print: H
print("Hello,World!"[6])		# print: W
</p_c>

<br>

### Integer

Integer is a whole number which is not a fraction. 

### Boolean
Boolean represents one of two values: `True` or `False`.
<s_c>
print(5 < 7)   # -->  True
print(5 > 8)   # --> False
</s_c>

### List
A list is a data type that allows you to store various types of data in it. 
To create a list, all you have to do is to put all elements of a list into square brackets **[ ]** separated by a comma:
["apple", "orange", "banana"]

You can have different data types under a list, for example, string,  integer and boolean:
["apple", 3, "orange", True]

To access an element of a list, similar to a string, you can use the index operator: [ ] with an index inside the square brackets. For example 
[0] to access the first element "apple" and [2] to access the 3rd element "banana". 

<p_c>
fruits = ["apple", "orange", "banana"]
print(fruits[0])
print(fruits[2])
</p_c>
<br>

## Variables

A variable is a container for storing a value. Each variable has a name, a value, and a type. The value might change over time, and that’s why it is called “variable.” 


### Creating Variables

A variable is created the moment you first assign a value to it. 
<s_c>
first_name = "Nick" 
</s_c>
<br>
The variable first_name has the name "first_name", value  "Nick" and type string.  
Value of a variable can be changed:
<s_c>
first_name = "Nick"
first_name = "Jay" 	# first_name has value Jay 
print(first_name) 	# diplay Jay on screen
</s_c>

Assignments can be done on more than one variable on the same line as this:
<s_c>
x,y = "Orange", "Banana" 	# --> assign string Orange to variable x, and Banana to y
a = b = c = 1						# --> assign single value to several variables
</s_c>


<br>
After a variable is created, it can be used in the program to access its value. In the script below, the variable values are displayed via the print function:
<br>
<br>
<p_c>
first_name = "Nick"
print(first_name)
first_name = "Jay"
print(first_name)
x,y = "Orange", "Banana"
print(x)
print(y)
</p_c>
<br>
We have seen the first python program "Hello, World!". Let's create a program to ask for a name and print it. The function to ask for an input from a user is `input()`
<br>
<p_c>
print("Enter your name:")
x = input()
print(x)
</p_c>
<br>
At line 2: a variable x is created and holds the user input. 

### Naming
A variable name must begin with a letter (upper or lower case) or an underscore. Variables cannot start with a number and are case sensitive.
If you create two variables x and X, they are different variables.

## Other Terms and Definitions

Before we move on, let's get ourselves familiar with these terms and definitions we will use throughout the course


***Function***

We have seen the `print()` **function** before. There are many more and we will learn about functions in a later chapter

***Statement***

The way you tell a computer to do something is by giving it instructions or writing **statements** to explain the desired action. For example `first_name = "Nick"` is an assignment statement

***Expression***

An **expression** is a combination of values, variables, operators and calls to functions. For example  1 + 1,  x + y + 10 or print("Hello, World!") are expressions. 

***Comment***

When writing code, it is important that your code can be easily understood by others. An easy way to increase the readability of your code is by using **comments**

To write a comment in Python, simply put the hash mark # before your desired comment. Python ignores everything after the hash mark and up to the end of the line. You can insert them anywhere in your code, even inline with other codes. 
<s_c>
# This is a comment
print("Hello, World!")	# This is a inline comment
</s_c>

<br>

## Operators

Operators are used to performing operations on variables and values. In this basic tutorial, we will focus on the 2 types of operators: arithmetic,  comparison, and logical.


### Arithmetic operators

The basic arithmetic operators are addition, subtraction, multiplication, and division. We can use those to create mathematical expressions.


| Operator | Description                                              | Example         |
| :------: | -------------------------------------------------------- | --------------- |
|    +     | Addition                                                 | 1 + 2           |
|    -     | Subtraction                                              | 2 - 1           |
|    *     | Multiplication                                           | 2 * 3           |
|    /     | Division                                                 | 4 / 2           |

<br>
Here is  an example. You can change with your own number and press the run button to see the results.

<p_c>
x = 2
y = 4
z = x + y
print(z)				# will display 6
print (x * y)			# will display 8
print( z / 3 )			# will display 2
</p_c>

<br>

### Comparison operators

These operators compare the values on either sides of them
Assume variable x holds 4 and variable y holds 7
<br>

| Operator | Description                                              | Example         |
| :------: | -------------------------------------------------------- | --------------- |
|    ==    | Equal                                                    | x == y is not true           |
|    !=    | Not equal                                                | x != y is true |
|    >     | Greater than                                             | x > y is not true |
|    <     | Less than                                                | x < y is true |
|    >=    | Greater than or equal to                                 | x >= 4 is true |
|    <=    | Less than or equal to                                    | x <= 4 is true |

<br>

<p_c>
x = 4
y = 7
print(x == y)
print(x != y)
print(x > y)
print(x <y)
</p_c>
<br>

### Logical operators

Logical operators are **and**, **or** and **not**
Assume variable x holds true and variable y holds false
<br>

| Operator | Description                                              | Example         |
| :------: | -------------------------------------------------------- | --------------- |
|   and    | Return true if both statements are true                  | x and y is false |
|    or    | Return true if one of statement is true                  | x or y is true |
|   not    | Reverse the statement. Return true if statement is false | not x is false |

<br>

<p_c>
x = 7 > 4 		 # x is true because 7 is greater than 4 
y = 4 > 7			# y is false because 4 is not greater than 7
print(x and y)
print(x or y)
print(not y)
</p_c>

<br>

## Word Guessing Game

Next step in creating our game program is to define some new variables and add them to the program you created in the previous chapter:

- `secretWord`  to store the secretWord, for now, we set our secretWord to 'banana'  
- `chances` to store the number of guesses the play has to guess the secretWord. For now, we will give the player 8 chances  
- `inputLetter` to store the letter which the player enters

The program asks the player to guess one letter at a time. For this, we need a dialog to take the input from the player. We use the `input(<label>)` function for that. A label is a text showing in the dialog. For our example, the text could be 'Enter a letter to guess: '

<p_c>
print('Guess the word as a name of a fruit! Enter "quite" to quit game ')
print('You have 8 guesses')
<p_a_c>
<s_c>
secretWord = 'banana'
chances = 8
print('Guess the word as a name of a fruit! Enter "quite" to quit game ')
print('You have 8 guesses')
inputLetter = input('Enter a letter to guess: ')
</s_c>
</p_a_c>
</p_c>

