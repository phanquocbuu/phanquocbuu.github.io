[//]: # "Strings"

## Strings

We have seen the [string](/topic/3#string) in our previous chapter. 
To create a string, just put your text (word, numbers, symbols, or a mix of all three) with either single (') or double (") quotes. To create a string with multiple lines, using three  quotes ("""). See the example below.

A string is a list of characters, so string is actually a list. Similar to the list, you can access the string element using *indexing, negative indexing, or range of indexes*.
*Note: index of a string starting from 0 for the first element*

<p_c size=M>
#Creating strings
singleString = 'string in single quote'
doubleString = "string in doubel quotes"
multilineString = """ I am a long string.
With multiple lines.
"""
print(singleString[3])	# print "g" (index 3 is forth letter)
print(singleString.index(3)) # same as before

#Accessing string elements
str = "abcdefghijklmnop"
print(str[3])	#print "d"
print(str[2:5])	# print "cde"
print(str[-2])	# print "o"
</p_c>

## Concatenation

Concatenation is joining of two or more strings into a single string.  
The **`+`** operator does this in Python. Simply writing two string literals together also concatenates them.  
The **`*`** operator can be used to repeat the string for a given number of times.  

<s_c>
str1 = "Hello"
str2 = "World"
str3 = str1 + str2;	# str3 is "HelloWorld"
print(str3)	
str4 = str1 * 3		# str4 is "HelloHelloHello"
print(str4)
</s_c>

*Note: You can't concatenate a string with a number. You will see an error*


## String Methods

To demonstrate some basic string methods, we use these two example strings: 

`str = "Hello World"`  and   `str_s = " Hello World "`

|  Method   | Description                                         | Example | Result |
| :-------: | --------------------------------------------------- | ------- | ------ |
| `strip()` | removes any whitespaces from the begining or the end |   str_s.strip()   | Hello World |
| `lower()` | returns a string with lower cases | str.lower() | hello world |
| `upper()` | returns a string with upper cases | str.upper() | HELLO WORLD |
| `replace(old,new)` | replaces a string with another string | str.replace("World","Nick")         | Hello Nick!        |
| `split()` | splits string into list of string elements | str.split() | ["Hello", "World"] |
| `index(sub)` | returns index ob substring | str.index("llo") | 2 |
|           |                                                     |         |        |

<br>


<p_c>
str_s = "  Hello World  "
str = "Hello World"
print("strip(): ", str_s.strip())
print("lower(): ", str.lower())
print("upper(): ", str.upper())
print("replace(): ", str.replace("World", "Nick"))
print("split(): ", str.split())
print("index(): ", str.index("llo"))
</p_c>

<br>


## Strings and Integers

You can use function `int()`  to convert a string to an integer, For example, `int("1")` returns `1`.
You can use function `str()` to convert an integer to a string. For example, `str(1)` returns `"1"`.

Execute the following program and observe the result:

<p_c>
print("1" + "2")
print(1 + 2)
print(1 + int("2"))
print(str(1) + str(2))
</p_c>

<br>

Line 1: concatenating two string "1" and "2" returns "12"   
Line 2: adding two integers, 1 + 2 returns 3  
Line 3: converting string "2' to integer 2 and adding two integers, 1 + 2 returns 3  
Line 4: converting integers 1 and 2 to "1" and "2" and concatenating them returns "12"


## String format

If you want to print a text greeting a person whose name is a variable like this: "My name is `<first_name>`, I am `<age>`", for example: "My name is Gina, I am 14" for `<first_name>` is Gina and `<age>` is 14, you could concatenate smaller strings like this:  
``` print("My name is " + first_name + ", I am " + age ) ```.   
With this approach, if you have many variables, it will be cumbersome to concatenate them all.  
Another approach is using the `format()` method.


Syntax: ```<string>.format(value1, value2...)``` . The string to be formatted contains curly braces {} as placeholders or replacement fields which get replaced by the arguments value1, value2... passing to the format method. We can use positional or keyword arguments to specify the order.

<p_c>
#using positional argruments
print("My name is {0}, I am {1}".format("Gina", 14))
#using keyword arguments
print("My name is {fname}, I am {age}".format(fname = "Nick", age = 13))
</p_c>
