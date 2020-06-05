[//]: # "Meet Turtle"

## Module Turtle

Có nhiều *module* trong Python cung cấp các tính năng rất hữu dụng. Trong chương này, chúng ta sẽ làm quen với mô đun *turtle* mà tiếng Việt gọi là *rùa*. Đây là một trong những thư viện để tạo ra những trò chơi giải trí. Điều đầu tiên bạn học được khi lập trình với thư viện rùa Python là làm thế nào để rùa di chuyển theo hướng bạn muốn. Trong bài học này, bạn có thể không hiểu tất cả các mã nhưng nó hoàn toàn là điều bình thường. Bạn sẽ học các kỹ năng lập trình cơ bản trong các bài học tiếp theo.


## Di Chuyển Rùa

Có bốn hướng con Rùa có thể di chuyển:

- Forward (đi thẳng về phía trước)
- Backward (đi lùi lại phía sau)
- Left (đi sang trái)
- Right (đi sang phải)

Con rùa di chuyển `.forward ()` hoặc `.backward ()` theo hướng mà nó đang hướng tới. Bạn có thể thay đổi hướng này bằng cách chuyển nó `.left ()` hoặc `.right ()` theo một góc độ nhất định.

Trước tiên chúng ta hãy xem chương trình đầu tiên để tạo ra một con rùa và cho rùa biết cách di chuyển:

<p_c size=M>
import turtle
turtle.shape("turtle")
turtle.color("white")

turtle.forward(100)
turtle.left(90)
turtle.forward(100)
</p_c>

(*Nhấn nút chạy để xem mã làm gì*)

Trước khi bạn có thể sử dụng rùa, bạn phải nhập nó (import) như hiển thị trong dòng 1 bên dưới
<s_c>
import turtle
turtle.shape("turtle")
turtle.color("white")
</s_c>

Hai dòng tiếp theo (2 và 3) là đặt hình rùa (hình mặc định chỉ là hình tam giác) và đặt màu thành màu trắng để chúng ta có thể nhìn thấy nó trên nền tối

> *Bạn nên thêm 3 dòng này vào tất cả các chương trình trong bài học này*

Dòng tiếp theo là làm cho rùa của chúng ta di chuyển 100 bước về phía trước. (Ban đầu, con rùa quay mặt sang phải)
<s_c>
turtle.forward(100)
</s_c>
<br>
Và 2 dòng cuối cùng là làm cho rùa quay trái 90 độ và tiến về phía trước 100 bước

<s_c>
turtle.left(90)
turtle.forward(100)
</sc>
<br>

Giờ đến lượt của bạn. Bạn có thể thử thêm mã của mình để làm cho rùa di chuyển trong một hình vuông bằng các bước sau không?

1. Tiến lên 100 bước.
2. Xoay 90 độ sang trái.
3. Tiến lên 100 bước.
4. Xoay 90 độ sang trái.
5. Tiến lên 100 bước.
6. Xoay 90 độ sang trái.
7. Tiến lên 100 bước.



<p_c size=M>
import turtle
turtle.shape("turtle")
turtle.color("white")
<p_a_c>
Dưới đây là một ví dụ mà bạn có thể dùng cho chương trình trên của bạn.
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


Một chức năng khác là lệnh `home()` (có nghĩa là về nhà) để di chuyển rùa đến vị trí ban đầu. Bạn có thể chạy chương trình dưới đây để cho chú rùa chạy theo hình tam giác:

<p_c size=M>
import turtle
turtle.shape("turtle")
turtle.color("white")

turtle.forward(100)
turtle.left(90)
turtle.forward(100)
turtle.home()
</p_c>




















