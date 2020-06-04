[//]: # "Flow Control"

## Flow Control
So far, if you run a program, it starts to execute all the instructions one after the next,  from the top to the bottom. You could say that its *control flow* is sequential or linear.  But the world is often more complicated than that. Computers can be programmed to make *decisions* to do different things under different circumstances. It's very common to have instructions in your code that are *repeated* or branching paths. There are statements that change the control flow of your program, they're called *control flow statements*.

The most common control flow statements are: *if-then*, *loops*.


## If statement

In many programming languages, decisions (also called conditionals) take the form of an if-then construct. They start with a condition, which is then evaluated as either True or False. 

An if statement has two parts: the condition and the action(s). Here's what if statements look like generally:
<s_c>
if expression:
    statement
</s_c>

*Note that the colon (:) after expression is required.*

Take a look at the following example:

<s_c>
answer = input("Is it raining?")
if answer == "yes":
	print("Take an umbrella")
</s_c>

This program starts asking the question "Is it raining?". The condition is the user's answer. The program checks ***if*** the answer is "yes". If the answer is "yes", the condition is ***True*** and the program will print "Take an umbrella"

If the answer is something else, the condition is ***False*** and the program does nothing.

<img src="/data/images/if_stmt.png" alt="editor" style="zoom:100%;" />

The diagram above is called a flow chart, it shows the control structure of a program.

Sometimes we want our programs to also do something when a condition is false. We can do it by adding an ***else*** clause to the ***if*** statement:

<p_c>
answer = input("Is it raining?")
if answer == "yes":
	print("Take an umbrella")
else:
	print("Put on a hat")
</p_c>
<br>
Try to run the example above and answer the question with "yes" or "no" and see the result.

## Blocks & Indentation

### Block
In all the examples shown above, there is only one single statement (action) after each if expression (condition). Let's take a look at an example that you want to do more than one activities (statements)  if a condition (expression) is True: 

    If the weather is nice, then I will:
        Go to the movie theater
        Go swimming
        Visit my friends

All these activities (statements) will be executed if the expression is true and if the expression is false, then none of them are executed. They are grouped into a ***block***. 

### Indentation

<p_c>
answer = input("Is it raining?")
if answer == "yes":
	print("Take an umbrella")
else:
	print("Put on a hat")
	print("Put on sun glasses")
print("Go out and play")	
</p_c>
<br>

You might probably recognize that lines 3, 5, and 6, there are whitespaces that appear to the left of statements. These whitespaces in Python are called ***indentation*** and used to determine the grouping of statements into a ***block*** we discussed above. 

Note that when you run the program above, the line 7 will be executed (print: "Go out and play") regardless if the answer to "Is it raining" is True or False because line 7 doesn't have any indentation, so it doesn't belong to the block of line 5 and 6 nor block of line 3.

## If, elif, else

The following example:

if it is raining:
    I will take an umbrella
else if  it is windy 
    I will put on a jacket
else 
		I will put on a hat

<img src="/data/images/if_elif.png" alt="editor" style="zoom:100%;" />


can be written in the following example program:
<p_c>
answer = input("How is the weather?")
if answer == "raining":
    print("Take an umbrella")
elif answer == "windy":
    print("Put on a jacket")
else:
    print("Put on a hat")
</p_c>

<br>

## If with Compound Conditionals 

Let's say we have a more complicated condition/statement like this: We can go swimming at the weekend when it is not raining. In this statement, the condition "on the weekend when it is not raining" is actually a combination of a few other conditions. In other words, the condition can be written like this: "if today is Sunday or today is Saturday and if it is not raining". We can also write this condition in a different form with the same meaning: "if today is Saturday and it is not raining or if today is Sunday and it is not raining". We use the bracket to group conditions which belong to each other:

<s_c>
#(today is sunday or saturday) and is not raining
if (today == "sunday" or today == "saturday") and isRaining == false
#(today is sunday and it is not raining) or (today is saturday and it is not raining)
if (today == "sunday" and isRaining == false) or (today == "saturday" and isRaining == false)
</s_c>



## Word Guessing Game

In the last chapter, we get the input from the user and store it in inputLetter but we haven't done anything with the input entered by the user. The next step is to validate the input.

If the secretWord 'banana' contains the letter the user entered, the program should print 'Good Job! '. If not it should print 'not found'.

*Note: to check if secretWord 'banana' contains the inputLetter, we can check if inputLetter is 'a', 'b' or 'n'*

<p_c>
secretWord = 'banana'
chances = 8
print('Guess the word as a name of a fruit! Enter "quite" to quit game ')
print('You have 8 guesses')
inputLetter = input('Enter a letter to guess: ')
<p_a_c>
<s_c>
secretWord = 'banana'
chances = 8
print('Guess the word as a name of a fruit! Enter "quite" to quit game ')
print('You have 8 guesses')
inputLetter = input('Enter a letter to guess: ')
if inputLetter == 'a' or inputLetter == 'b' or inputLetter == 'n':
    print('Good Job!')
else:
    print('Not found!')
</s_c>
</p_a_c>
</p_c>

















