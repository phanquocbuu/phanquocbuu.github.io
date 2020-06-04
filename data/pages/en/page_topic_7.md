[//]: # "Numbers"
## Numbers

Number data types store numeric values. There are 4 different numerical types: integer, long, float, and complex. In this course, we are focusing on integer and float.

Integer, as we have already seen in chapter 2, is a positive or negative whole number with no decimal point. ***float*** represents a positive or negative number containing one or more decimals. for example: float_number = 10.75

float can be created by assign a float number or convert an integer or string into a float with function `float()`. For example:
<s_c>
floatNumber1 = 10.75			# assign float number 10.75
floatNumber2 = float(10)		# convert integer 10 to float 10.0
floatNumber3 = float("10.75")	# convert string "10.75" to float number 10.75
</s_c>

### Modulus Operation

Besides the four operators: Addition, Subtraction, Multiplication, and Division we have learned in chapter 3,  one important operator is `%` which is a ***modulus*** operation. Modulus operation gives the remainder of divisions. For example:

<s_c>
reminder1 = 5 % 2			# reminder1 = 1
reminder2 = 4 % 2			# reminder2 = 0
</s_c>

### Exponent Operation

Python uses the `**` characters for exponents. For example, `3**2` is 9



### Practice

Can you write a program which prints all even numbers from 0 to 10? *Hint: the reminder of even number divides by 2 is zero*
<p_c>
<p_a_c>
<s_c>
for number in range(0,11):
    if (number % 2) == 0:
        print(number)
</s_c>    
</p_a_c>
</p_c>



