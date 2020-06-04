[//]: # "Meet Turtle"

## Turtle Module

There are many *modules* in Python that provide very powerful features.  In this chapter, we will work with the *turtle* module. The first thing you’ll learn when it comes to programming with the Python turtle library is how to make the turtle move in the direction you want it to go. In this lesson, you might not understand all the code but it is totally fine. You will learn basic programming skills in the next lessons."


## Moving the Turtle

There are four directions that a turtle can move in:

- Forward
- Backward
- Left
- Right

The turtle moves `.forward()` or `.backward()` in the direction that it’s facing. You can change this direction by turning it `.left()` or `.right()` by a certain degree. 

First, let us look at the first program to create a new turtle and tell the turtle how to move, 

<p_c size=M>
import turtle
turtle.shape("turtle")
turtle.color("white")

turtle.forward(100)
turtle.left(90)
turtle.forward(100)
</p_c>

(*Press run button to see what the code doing*)

Before you can use turtle, you have to import it as shown in line 1 below:
<s_c>
import turtle
turtle.shape("turtle")
turtle.color("white")
</s_c>

The next two lines (2 and 3) are to set the turtle shape (the default shape is just a triangle) and set the color to white so we can see it on the dark background.

> *You should add these 3 lines to all the programs in this lesson.*

The next line is to make our turtle move 100 steps forwards. (In the beginning, the turtle is facing to the right)
<s_c>
turtle.forward(100)
</s_c>

And the last 2 lines are to make turtle turn left 90 degrees and move forward 100 steps
<s_c>
turtle.left(90)
turtle.forward(100)
</sc>

Now it is your turn. Can you try to add your code to make the turtle move in a square by the following these steps?

1. Move forward 100 steps.
2. Turn 90 degrees to the left.
3. Move forward 100 steps.
4. Turn 90 degrees to the left.
5. Move forward 100 steps.
6. Turn 90 degrees to the left.
7. Move forward 100 steps.



<p_c size=M>
import turtle
turtle.shape("turtle")
turtle.color("white")
<p_a_c>
There are many way to archive. One example is as below which you can copy and paste them into the editor above and run the program. 
<s_c>
turtle.forward(100)
turtle.right(90)
turtle.forward(100)
turtle.right(90)
turtle.forward(100)
turtle.right(90)
turtle.forward(100)
</s_c>
</p_a_c>
</p_c>



Another function is the home() which will move the turtle to its original position. You can run the below program to make our turtle run in a triangle:

<p_c size=M>
import turtle
turtle.shape("turtle")
turtle.color("white")

turtle.forward(100)
turtle.left(90)
turtle.forward(100)
turtle.home()
</p_c>
