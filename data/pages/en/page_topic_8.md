[//]: # "List"

## List

### Create List and Access Element
We have seen the [List](/topic/3#List) in our previous chapter. A recap of creating a list and access elements of a list:
<s_c>
fruits = ["apple", "orange", "banana"]	# create a list fruits with 3 elements
print(fruits[0])	# print element at index 0 from the list -- "apple"
fruit = fruits[1]	# assing element at index 1 from the list to fruit -- fruit is "orange"
</s_c>

### Negative Indexing

Negative indexing means beginning from the end, -1 refers to the last element, -2 refers to the second last element, and so on.

<s_c>
fruits = ["apple", "orange", "banana"]	# create a list fruits with 3 elements
print(fruits[-1])	# print "banana" -- last element of the list
print(fruits[-2])	# print "orange" -- second last element
</s_c>

### Range of Indexes

We can get a sublist from a list in Python using a slicing operator `:`. You can specify a range of indexes by specifying where to start and where to end the range `[<start>:<end>]`:

<s_c>
fruits = ["apple", "orange", "banana", "kiwi", "mango"]
print(fruits[1:4]) 	# print "orange banana kiwi"
</s_c>

*Note that index 0 starts at the first element.  [1:4] means start from index 1 (included) to index 4 (not included). Index 1 is "orange" and index 4 is "mango" but index 4 is not included, hence "mango" isn't printed*

If you leave out start e.g. `[:<end>]`, the range will start from the first element of the list
If you leave out end e.g. `[<start>:]`, the range will go on to the end of the list

Python also allows you to have a range of negative indexes. For example, the range `[-3:-1]` means to start from the third last element (included) to the last element (not included).

<p_c>
fruits = ["apple", "orange", "banana", "kiwi", "mango", "strawberry"]
print(fruits[3])
print(fruits[-2])
print(fruits[1:4])
print(fruits[-4:-1])
</p_c>
<br>

## Methods

List object has several methods. A method is similar to a function. The only difference between method and function is that method is only used with an object, in this case, the list object, whereas a function can be called without an object.

Syntax of method call: `<object>.<method_name>(<agruments>)


## Add to List

There are several ways you can add elements to the list.

You can add one item to a list using the `append()` method or add several items using the `extend()` method.

Furthermore, we can insert one item at the desired location (index) by using the method `insert()`. For example `insert(2,"abc")` is to insert "abc" to the list at index 2. 

<p_c>
fruits = ["apple", "orange", "banana"]
fruits.append("kiwi")
print("after append: ", fruits)
fruits.extend(["mango", "strawberry"])
print("after extend: ", fruits)
fruits.insert(1, "peach")
print("after insert:", fruits)
</p_c>
<br>

## Remove from List

We can delete one or more items from a list using the keyword `del`. It can even delete the list entirely.
We can use `remove()` method to remove the given element or `pop()` method to remove an element at the given index.

<p_c>
fruits = ["apple", "orange", "banana", "kiwi", "mango", "strawberry"]
del fruits[1]	# remove second element from the list
print("after del: ", fruits)
fruits.remove("banana")	# remove element "banana"
print("after remove: ", fruits)
fruits.pop(0)	# remove first element
print("after pop:", fruits)
</p_c>
<br>

## Function len()

Function `len()` returns the length of a list which is the number of elements in the list.

<s_c>
fruits = ["apple", "orange", "banana"]
print(len(fruits))	# print 3
</s_c>

## Join two lists

We have seen an example above to use the method `extend()` to add a list into another list. Another way to join or concatenate two or more lists is by using the `+` operator.

<p_c>
fruits = ["apple", "orange", "banana"]
drinks = ["milk", "water", "lemon"]
mix = fruits + drinks
print(mix)
</p_c>
