[//]: # "Basic Terms and Definitions"

## Giá Trị (Value) và Kiểu Dữ Liệu (Data Type)


Chúng ta đã thấy trong chương đầu tiên giá trị "Hello, World!" và giá trị 5 - từ bản in (2 + 3). Một giá trị luôn thuộc một kiểu dữ liệu nhất định, ví dụ như kiểu dữ liệu *string* hoặc kiểu dữ liệu *integer (số)*. "Hello, Worldi!" là loại kiểu dữ liệu string (có nghĩa là chuỗi - một chuỗi các chữ cái) và 5 là một số nguyên hay còn gọi là kiểu dữ liệu integer (integer hay viết tắt là *int* có nghĩa là số nguyên). Còn một số kiểu dữ liệu khác trong Python nhưng hiện tại, chúng ta đang tìm hiểu 4 kiểu dữ liệu cơ bản: `string`, `integer`, `Boolean` và `list`. Chúng ta sẽ tìm hiểu về các loại dữ liệu chi tiết trong các chương dành riêng sau này trong khóa học.

### String
Chuỗi trong python được bao quanh bởi dấu ngoặc kép đơn hoặc dấu ngoặc kép:  `'Hello,World!'` hoặc `"Hello,World!"`.

Mỗi phần tử của một chuỗi có một chỉ mục, bắt đầu từ số Không 0.

|  H   |  e   |  l   |  l   |  o   |  ,   |  W   |  o   |  r   |  l   |  d   |  !   |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
|  0   |  1   |  2   |  3   |  4   |  5   |  6   |  7   |  8   |  9   |  10  |  11  |

Để truy cập một phần tử của chuỗi, chúng ta sử dụng toán tử chỉ mục: **[]** với một chỉ mục bên trong dấu ngoặc vuông. Ví dụ: [0] để truy cập phần tử đầu tiên của "Hello, World!" đó là H và [6] để truy cập phần tử thứ 7 là W.

*Lưu ý rằng chỉ mục bắt đầu từ 0. Vì vậy, chỉ số 0 có nghĩa là phần tử đầu tiên, chỉ mục 1 là phần tử thứ hai và chỉ mục n cho phần tử thứ (n + 1) *

<p_c>
print("Hello,World!"[0]) 		 # print: H
print("Hello,World!"[6])		# print: W
</p_c>

<br>



### Integer

Integer là số nguyên. 

### Boolean
Boolean đại diện cho một trong hai giá trị: `True` hoặc `False`. True có nghĩa là đúng và False có nghĩa là sai.
<s_c>
print(5 < 7)   # -->  True
print(5 > 8)   # --> False
</s_c>
<br>

### List

List trong tiếng Việt là Danh sách. Danh sách là kiểu dữ liệu cho phép bạn lưu trữ nhiều kiểu dữ liệu trong đó.
Để tạo danh sách, tất cả những gì bạn phải làm là đặt tất cả các thành phần của danh sách vào dấu ngoặc vuông **[]** được phân tách bằng dấu phẩy:
["táo", "cam", "chuối"]

Bạn có thể có các loại dữ liệu khác nhau trong một danh sách, ví dụ chuỗi, số nguyên và boolean:
["táo", 3, "cam", đúng]

Để truy cập một phần tử của danh sách, tương tự như chuỗi, bạn có thể sử dụng toán tử chỉ mục: [] với một chỉ mục bên trong dấu ngoặc vuông. Ví dụ
[0] để truy cập phần tử đầu tiên "táo" và [2] để truy cập phần tử thứ 3 "chuối".
<p_c>
traicay = ["táo", "cam", "chuối"]
print(traicay[0])
print(traicay[2])
</p_c>
<br>
## Biến (Variable)

Một biến là một phần trong bộ nhớ để lưu trữ một giá trị. Mỗi biến có một tên, một giá trị và một kiểu dữ liệu. Giá trị có thể thay đổi theo thời gian và đó là lý do tại sao nó được gọi là biến số.


### Cách tạo Biến

Một biến được tạo vào thời điểm đầu tiên bạn gán giá trị cho nó.
<s_c>
ten = "Huy" 
</s_c>
<br>
Biến `ten` có tên "ten", giá trị "Huy" và kiểu dữ liệu string.
Giá trị của một biến có thể được thay đổi:
<s_c>
ten = "Huy"
ten = "Duy" 	# ten có giá trị mới là Duy  
print(first_name) 	# hiển thị Duy trên màn hình
</s_c>

Gán có thể được thực hiện trên nhiều biến trên cùng một dòng như thế này
<s_c>
x,y = "cam", "chuối" 	# --> gán string "cam" cho biến x, và "chuối" cho y
a = b = c = 1						# --> gán giá trị đơn cho nhiều biến
</s_c>


<br>
Sau khi một biến được tạo, nó có thể được sử dụng trong chương trình để truy cập giá trị của nó. Trong tập lệnh bên dưới, các giá trị biến được hiển thị thông qua chức năng in
<br>
<br>
<p_c>
ten = "Huy"
print(ten)
ten = "Duy"
print(ten)
x,y = "cam", "chuối"
print(x)
print(y)
</p_c>
<br>
Chúng ta đã làm quen với chương trình đầu tiên "Hello, World!". Bây giờ bạn hãy tạo một chương trình khác để hỏi tên và hiễn thị thên trên màng hình. Hàm để yêu cầu cập nhật từ người dùng là `input ()`
<br>
<p_c>
print("Hãy cập nhật tên của bạn:")
x = input()
print(x)
</p_c>
<br>
Ở dòng 2:  biến x được tạo và giữ dữ liệu được cập nhật 



### Tên của Biến
Tên biến phải bắt đầu bằng một chữ cái (chữ hoa hoặc chữ thường) hoặc dấu gạch dưới. Các biến không thể bắt đầu bằng một số và phân biệt chữ hoa chữ thường.
Nếu bạn tạo hai biến x và X, chúng là các biến khác nhau.


## Các thuật ngữ và định nghĩa thường dùng

Trước khi chúng ta tiếp tục, hãy làm quen với các thuật ngữ và định nghĩa mà chúng ta sẽ sử dụng trong suốt khóa học


***Hàm (Function)***

Chúng ta đã thấy hàm `print ()`  trước đây. Còn nhiều nữa và chúng ta sẽ tìm hiểu về các chức năng trong một chương sau



***Câu Lệnh (Statement)***

Một chỉ dẫn lập trình đầy đủ để máy tính làm một điều gì đó cho bạn được gọi là câu lệnh. Chương trình bao gồm nhiều câu lệnh tuần tự với nhau.  Ví dụ: `ten ="Huy"` là một câu lệnh gán


***Biểu Thức (Expression)***

Biểu thức  là sự kết hợp của các giá trị, biến, toán tử và lệnh gọi hàm. Ví dụ `1 + 1`, `x + y + 10` hoặc `print("Xin chào, Thế giới!")` là các biểu thức.


***Chú Thích (Comment)***

Khi viết mã, điều quan trọng là mã của bạn có thể dễ dàng được người khác hiểu. Một cách dễ dàng để tăng khả năng đọc mã của bạn là sử dụng **chú thích**

Để viết bình luận bằng Python, chỉ cần đặt dấu băm `#` trước chú thích bạn muốn. Python bỏ qua mọi thứ sau dấu `#` và đến cuối dòng. Bạn có thể chèn chúng vào bất cứ đâu trong mã của bạn, thậm chí là nội tuyến với mã khác.

<s_c>
#Đây là một chú thích
print("Hello, World!")	# Đây là một chú thích nội tuyến
</s_c>

<br>



## Toán Tử (Operator)



Operators are used to perform operations on variables and values. In this basic turtorial, we will focus on the 2 types of operators: arithmetic,  comparison and logical.


### Toán tử số học (Arithmetic operator)

The basic arithmetic operators are addition, subtraction, multiplication, and division. We can use those to create mathematical expressions.


| Toán tử | Chú thích                                              | Ví dụ         |
| :------: | -------------------------------------------------------- | --------------- |
|    +     | Phép cộng                                                 | 1 + 2           |
|    -     | Phép trừ                                              | 2 - 1           |
|    *     | Phép nhân                                           | 2 * 3           |
|    /     | Phép chia                                                 | 4 / 2           |

<br>
Đây là một ví dụ. Bạn có thể thay đổi với số của riêng bạn và nhấn nút chạy để xem kết quả.

<p_c>
x = 2
y = 4
z = x + y
print(z)				# hiên thị  6
print (x * y)			# hiển thị 8
print( z / 3 )			# hiển thị 2
</p_c>

<br>

### Toán tử so sánh (Comparison operator)

Các toán tử này so sánh các giá trị ở hai bên của chúng
Giả sử giá trị của biến x là 4 và biến y là 7
<br>

| Toán tử | Chú thích                                              | Ví dụ         |
| :------: | -------------------------------------------------------- | --------------- |
|    ==    | bằng nhau                                                    | x == y là không đúng           |
|    !=    | không bằng nhau                                                | x != y là đúng |
|    >     | lớn hơn                                            | x > y là không đúng |
|    <     | nhỏ hơn                                                | x < y là đúng |
|    >=    | lớn hơn hoặc bằng                                 | x >= 4 là đúng |
|    <=    | nhỏ hơn hoặc bằng                                    | x <= 4 là đúng |

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

### Toán tử logic (Logical operator)

Toán tử logic gồm có **and**, **or** và **not**
Giả sử giá trị của biến  x là True (đúng) và của y là False (sai)
<br>

| Toán tử | Chú thích                                              | Ví dụ         |
| :------: | -------------------------------------------------------- | --------------- |
|   and    | Trả về giá trị True nếu cả hai x và y đều đúng                  | x and y là sai  |
|    or    | Trả về giá trị True nếu một trong hai x hoặc y là đúng                  | x or y là đúng |
|   not    | Đảo ngược câu lệnh. Trả về True nếu câu lệnh là sai và ngược lại | not x là sai |

<br>

<p_c>
x = 7 > 4 		 # x = True vì  7 lớn hơn 4 
y = 4 > 7			# y = False vì 4 không lớn hơn  7
print(x and y)
print(x or y)
print(not y)
</p_c>

<br>




## Trò chơi đoán chữ

Bước tiếp theo trong việc tạo chương trình trò chơi của chúng ta là xác định một số biến mới và thêm chúng vào chương trình bạn đã tạo trong chương trước:

- `tuBiAn`  để lưu trữ từ bí ẩn. Trong chương này, giá trị của từ bí ẩn là "duahau"   
- `soLanDoan` để lưu trữ số lần đoán. Hiện tại, chúng ta sẽ cung cấp cho người chơi 8 cơ hội   
- `chuCaiCapNhat` để lưu trữ chữ cái mà người chơi cập nhật   

Chương trình yêu cầu người chơi đoán từng chữ cái một. Chúng ta cần một hộp thoại để người chơi có thể cập nhật. Bạn có thể sử dụng hàm `input(<nhãn>)`. Nhãn là một văn bản hiển thị trong hộp thoại. Trong ví dụ của chúng tôi, văn bản có thể là 'Hãy nhập một chữ cái để đoán:'




<p_c>
print('Hãy đoán tên của một loại trái cây! Nhập "thoat" để thoát khỏi trò chơi')
print('Bạn có 8 lần đoán')
<p_a_c>
<s_c>
tuBiAn = 'duahau'
soLanDoan = 8
print('Hãy đoán tên của một loại trái cây! Nhập "thoat" để thoát khỏi trò chơi ')
print('Bạn có 8 lần đoán')
chuCaiCapNhat = input('Hãy nhập một chữ cái để đoán: ')
</s_c>
</p_a_c>
</p_c>

