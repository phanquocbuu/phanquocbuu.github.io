## Word Guessing Game

Now is the time to complete our game. The program output should be like this:

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

<br>

We have achieved so far:

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


In previous chapter we use the **Pseudocode** to describe how the program will work. Below is the pseudocode for the entire program. Let's start!  

<s_c>
#First to import the random module

#Create a variable fruitWords as string of fruit names

#Convert fruitWords string into a list 

#Randomly choose a secret word from our "fruitWords" list. 

#Create variable chances to keep the Number of guesses remaining
#It starts with the number of secretWord letters + 2

#Variable inputLetters to keep all input letters 

#Variable  numberOfCorrectLetters
#If this number is equal to the number of letters in secret word, guess is success

#Variable isSuccess
#At the begining isSuccess is False, set to True if word is guessed

#Function print_word

#Function print_progress                            

#Function validate_input

#Print game introduction

#Print the secretWord with '_'

#While Loop
#While secretWord has not been guessed and user has remaining chances

    # request player to enter a letter to guess
    
    # quite game if user enter "quit"
    
    # validate player's input. If not valid, continue to ask for input again
    
    #If input is valid, continue
    #If input is valid:
        # reduce the chances by one
    
        # we keep track of all letters user already guessed
    
        # determine how many time the guessed letter found in the secret word. Zero means not found    
    
        # update the number of found guessed letters
    
    # Guess is success if numberOfCorrectLetters is equal number of letters in secret word
    
    #if not yet successfully guessed, print progress

#If no chances left and still not success guessed, print info and end game    
</s_c>

<br>


1. Line 1: Our secret word is always 'banana' and it is absolutely not an exciting game. To make the game more interesting, a secret word should be somehow random. For this, we will use the random module by adding the import statement `import random` to our program and let the secretWord be chosen randomly from the list of fruit words we provide with the `choice` function

2. Line 3: We create a variable fruitWords as a string of fruit names:     
fruitWords = 'apple avocado apricot banana cherry grape kiwi lemon lychee nectarine orange mango strawberry  pineapple  pear pomegranate  papaya  peach  tangerine watermelon'. This list is a string with all the fruit names seperated by space. 

3. Line 5: We need to convert the string of fruit names into a list of string using the `split()` function. For example `fruitWords = fruitWords.split(' ')`. The list of fruit names can be passed to the `choice()` function as argument.

4. Line 7: Use the `choice()` method from the ramdon module to select any word from the fruitWords list and assign to the variable secretWord

5. Line 8: `chances` were always 8 (6 letters of 'banana' + 2). The program should give the player the number of chances about the number of letters in the secret word plus 2. You can use the `len()` function here. 
6. Line 12: Previously, our program checks if the guessed letter is one of these 3 letters 'a', 'b' and 'n' because our secretWord is always 'banana'. Now it can be any word from the list described above, we will get rid of hasA, hasB and hasN variables. Instead we use a new variable inputLetters to keep all the letters entered by the player. At the beginning of the game, it is an empty list
7. Line 14 & 15: We create a new variable numberOfCorrectLetters to keep track of number of letters which the player has guessed correctly. If this number is equal the number of letters in the secretWord, user has successful guessed the secretWord
8. Line 17 & 18: No change to the variable isSuccess we defined in previous chapter
9. Line 20: The current print_word function only prints the place holder using underscore `_` for all the letters in the secretWord. For example, if the secrete word is "banana" with 6 letters, the program will show the secret word at the beginnig like this `_ _ _ _ _ _`. If the guessing letter is correct, replaces the input letter with the `_` in the right position, for example `_ a _ a _ a`. You can use the method `count()` to determine if a letter is in a word. For example, player guessed correct letter 'a', inputLetters will be `['a']`. `inputLetters.count('a') will return 1 (found one letter 'a' in the list). If not found, the `count()` method will return 0.
10. Line 22: We will extend the print_progess function to let the player know how many chances still remaining. Also if users enter a wrong letter, let's say 'z', the program should point out that "Letter 'z' not found". We add another parameter `guessedLetter` to the function. If isFound is True, it should print "Good Job! You have <chances> guesses left" (replace <chances> with a number), if isFound is False, it should print "Letter '<guessedLetter>' not found! You have <chances> guesses left"
11. Line 24: We create a new function validate_input(). We need to make sure that the player should enter only one single letter and it must be an alphabet charater. Use the method `isalpha()` to check if the guess is alphabet letter. Use `len()` function to check if the guess is only a single letter. If the player has entered a letter he/she entered previously, let her/him know. 
12. Line 26 & 28: From Line 1 till now, we have defined all veriables and functions. The first thing we want to print on the screen is to print some informations about the game, for example:
"Guess the word as name of a fruit! Enter "quit" to quit game". 
"You have 8 guesses"  
"_ _ _ _ _ _"

13. Line 30 & 31: While loop with condition: secretWord has not been guessed and user has remaining chances. secretWord has not been guessed means isSuccess = False; user has remaining chances means chances > 0 
14. Line 33: Request player to enter a letter to guess, like we did it previously
15. Line 35: If user wants to quit the game, he/she can enter 'quit' instead of a guess letter, the program should stop. To stop the program means to get out of the while loop by setting isSuccess to True and using `continue()` statement
16. Line 37: Call function `validate_input()` to validate the player's guess. If the guess is not valid, we restart the while loop without reducing the player's chances (user doesn't lose a life). If the guess is valid, there are few things we need to perform:
    1. Reduce the chances by one (same as we did previously)
    2. Keep track of all entered letters by `append` the guess into the `inputLetters` list
    3. Determine how many times the guessed letter found in the secret word. We can use the method `count()`. Zero means not found. For example, 'banana' is the secretWord, guess is 'a', then the count is 3
    4. Update the number of found guessed letters. For example, 'banana' is secretWord, player guessed previously 'a', our variable numberOfCorrectLetters was 3 (3 'a' in 'banana'). Let's say user has just guessed another correct letter 'b', the numberOfCorrectLetters should be 3 + 1 = 4.
17. Line 49: If the numberOfCorrectionLetters is equal to the number of letters in secretWord, the user has successful guessed. The program should stop by setting isSuccess to True, and print the congratulation on the screen 


Now is your turn to finish up your game. You can find the solution by clicking on "Show Anser".

<p_c size=L>


<p_a_c>
<s_c>
import random 

fruitWords = '''apple avocado apricot banana cherry grape kiwi 
lemon lychee nectarine orange mango strawberry 
pineapple pear pomegranate papaya peach 
tangerine watermelon'''

fruitWords = fruitWords.split(' ') 
#Randomly choose a secret word from our "someWords" LIST. 
secretWord = random.choice(fruitWords)		

#Number of guesses remaining
chances = len(secretWord) + 2

#Keep all input letters 
inputLetters = []

#Number of correct guessed letters. 
#If this number is equal to the number of letters in secret word, guess is success
numberOfCorrectLetters = 0


#At the begining isSuccess is False, set to True if word is guessed
isSuccess = False

def print_word():
    for i in secretWord:
        if inputLetters.count(i) > 0:
            print(i, end = ' ')
        else:
            print('_', end = ' ')  
    print()                          
def print_progress(guessedLetter, isFound):
    if isFound:
        print('Good Job! You have {0} guesses left'.format(chances))
    else :
        print("Letter '{0}' not found! You have {1} guesses left".format(guessedLetter, chances))    

def validate_input(guessedLetter):
    isValid = True
    if not guessedLetter.isalpha(): 
        print('Enter only a LETTER')
        isValid = False
    elif len(guessedLetter) > 1: 
        print('Enter only a SINGLE letter')
        isValid = False
    elif guessedLetter in inputLetters:
        print('You have already guessed that letter')
        isValid = False
    return isValid


print('Guess the word as name of a fruit! Enter "quit" to quit game')
print('You have {0} guesses'.format(chances))
print_word()

while (chances > 0 and not isSuccess):
    # request player to enter a letter to guess
    inputLetter = input('Enter a letter to guess: ')
    # quite game if user enter "quit"
    if inputLetter == 'quit':
        print('Good bye!')
        isSuccess = True
        continue
    # validate player's input. If not valid, continue to ask for input again
    isInputValid = validate_input(inputLetter)
    if not isInputValid:
        continue
    else:
        chances = chances - 1
    # we keep track of all letters user already guessed
    inputLetters.append(inputLetter)
    # determine how many time the guessed letter found in the secret word. Zero means not found    
    numberFound = secretWord.count(inputLetter)
    # update the number of found guessed letters
    numberOfCorrectLetters = numberOfCorrectLetters + numberFound
    
    # Guess is success if numberOfCorrectLetters is equal number of letters in secret word
    if numberOfCorrectLetters == len(secretWord):
        isSuccess = True
        print_word()
        print('Congratulations! You won!')
        # end game
    else:
        print_progress(inputLetter, numberFound > 0)     
        print_word()   
        print()  
#If no chances left and still not success guessed, print info and end game        
if isSuccess == False and chances == 0:
    print('I win. Try again')
    print('The secret word was ',secretWord)
</s_c>
</p_a_c>
</p_c>





