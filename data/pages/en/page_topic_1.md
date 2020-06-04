[//]: # "Getting started"

## What is Python script?

Coding or programming is the process of giving your computer a set of instructions to carry out. When you create a python program, you write the instructions in python language. You would ask yourself, "how my computer understands the instruction?". Well, there is a Python interpreter which reads the Python scripts and carry out their instructions. Usually, you need an editor to write the Python script and the Python interpreter needs to be installed on your computer. However, with this Python Turtorial you don't need to install anything, editor and interpreter are embedded and ready for you to use. You can write the Python script in our *Editor* (left box - see the image below), when you press the *Run* button, an interpreter will reads the script, execute and write the result in the *Result* box.

<img src="/data/images/editor.png" alt="editor" style="zoom:100%;" />



## First Python Script

Traditionally, the first program written in a new language is called "Hello, World!" because all it does is display the words "Hello, World!". A python script can have as simple as one instruction like below:

<p_c>
print("Hello, World!")
</p_c>

<br>

This is an example of using the **print function**. After you press the *Run* button, you will see that this program actually doesn't print anything on paper. It displays a value on the result box. In this case, the value is a text  *Hello, World!* found between the quotation marks.

Now, can you try to print *Hello, your name* on the result box by replacing 'World' with your name and press the run button?

Another simple example is to display, for example 2 + 3. If you run this script, it will display 5 on the screen.

<s_c>
print(2 + 3)
</s_c>



## Print and Input Function

Python has many built-in functions which are always available to use in our program. We will learn more in the later chapters. Let's get familiar with the two essential functions for our tutorial:

`input()` function is used to ask for user's input.  
`print()` function is to print something on the screen

The following program is to ask the user to enter his/her name and print the user's name on the screen:

<p_c>
print("I am printing your name")
name = input("What is your name?")
print(name)
</p_c>

<br>

Line 1: The function `input("What is your name?")` prompts a dialog asking user to enter a name      
Line 2: Print the name which the user provides from Line 1   

## Word guessing game

As mentioned before, at the end of this tutorial, you should be able to develop your first game in python, the guessing word game. 
These are the steps to build our game:

1. The program chooses a random word from a list of words we provide in the code. All words should be the name of fruits.  
2.  The program gives the player a number of guesses or turns depending on the length of the chosen word. 
3. The program shows to the player at the beginning how many letters the secret word contains and how many guesses he/she starts with. For example, if the secret word is "banana" with 6 letters,, the program will show the secret word at the beginning like this `_ _ _ _ _ _`  
4. The program will ask the player to guess a letter. The player enters the input and the program either:
   1. If the guessing letter is correct, shows a message saying that the letter is found in the secret word and how many guesses are left, replaces the input letter with the `_` in the right position. For example `_ a _ a _ a`  
   2. If the guessing letter is not correct, shows a message saying that the letter is not found and shows the player how many guesses are left. 
5. The game ends when either the player guesses the secret word, or the player runs out of guesses.  
6.  If the player wins, print a congratulatory message  



The output of the game could be like this:

```
Guess the word as name of a fruit! Enter "quit" to quit game
You have 8 guesses
_ _ _ _ _ _

Enter a letter to guess: a
Good Job! You have 7 guesses left
_ a _ a _ a 

Enter a letter to guess: x
Letter 'x' not found! You have 6 guesses left
_ a _ a _ a 

Enter a letter to guess: b
Good Job! You have 5 guesses left
b a _ a _ a 

Enter a letter to guess: n
b a n a n a 
Congratulations! You won!
```


Now, let's begin with step 1 to create the game. The first thing we have to do is to let the program print on the screen what is the game about. It should print out two line. The first line is  'Guess the word as a name of a fruit! Enter "quite" to quit game '. The second line to let the player know how many guesses he/she will have to guess the secret word, e.g. 'You have 8 guesses'. Now is your turn to write your first code. You can test your code by pressing the *Run* button. If you need help, you can select the *Show Answer* checkbox.

<p_c>
<p_a_c>
<s_c>
print('Guess the word as a name of a fruit! Enter "quite" to quit game ')
print('You have 8 guesses')
</s_c>
</p_a_c>
</p_c>


Before we move deeper into the Python pramming language, let have some fun with **Turtle** in the next chapter.