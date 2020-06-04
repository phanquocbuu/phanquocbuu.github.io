[//]: # "Functions"

# Hàm (Function)
## Tạo hàm và cách gọi hàm 


Trong Python, một hàm là một nhóm các câu lệnh liên quan lấy đầu vào và thực hiện một tác vụ cụ thể. Hàm giúp chia chương trình  thành các nhiệm vụ nhỏ hơn, thông thường được tái sử dụng nhiều lần. Thay vì viết cùng một mã nhiều lần cho các đầu vào khác nhau, chúng ta có thể sử dụng hàm.


Cú pháp để xác tạo hàm:

```
def <tên_hàm>(<tham_số>):
    <khối_lệnh>
```

***Tham số***  là tên được sử dụng khi định nghĩa hàm



Cú pháp để gọi hàm:

```
<tên_hàm>(<đối_số>)
```

Có 2 thuật ngữ mới ***tham số*** và ***đối số***:

***<tham_số>***  là tùy chọn. Nó có thể chứa một hoặc nhiều tham số được phân tách bằng dấu phẩy.
***<đối_số>*** cũng là tùy chọn. Nó có thể chứa một hoặc nhiều đối số được phân tách bằng dấu phẩy. Đối số là các giá trị được truyền vào các hàm. Chúng tương ứng với các tham số trong định nghĩa hàm.

Giả sử chúng ta tạo một hàm để chào hỏi ai đó. Đầu tiên chúng ta tạo một hàm với một tham số ten (tên)

<s_c>
def chao(ten):
    print("Chào")
    print(ten)
</s_c>
<br>


| Line  | Explanation                                               |
| ----- | --------------------------------------------------------- |
| 1     | Tạo một hàm mới có tên `chao`, một tham số `ten` |
| 2 & 3 | Hiển thị "Chào" với giá trị của tham số `ten`           |

Chúng ta tạo ra một chương trình để chào "Huy" và "Duy":

<s_c>
def chao(ten):
    print("Chào")
    print(ten)
chao("Huy")
chao("Duy")
</s_c>

<br>

Chương trình trên được thực hiện theo các bước sau:

| Bước | Dòng | Giải thích                                                  |
| :--: | :--: | ------------------------------------------------------------ |
|  1   |  4   | Dòng định nghĩa chức năng 1 - 3 được bỏ qua. Nó bắt đầu ở dòng 4 bằng cách gọi hàm * chào * với đối số "Huy"|
|  2   |  1   | nhảy đến dòng 1. Giá trị của tham số `ten` là "Huy"        |
|  3   |  2   | in 'Chào' trên màn hình                                   |
|  4   |  3   | in "Huy" treen màn hình vì gía trị của `ten` là "Huy" |
|  5   |  4   | Kết thúc dòng thực thi 4. Tiếp tục ở dòng 5                  |
|  6   |  5   | Bắt đầu dòng thực thi 5, gọi hàm `chao` với một đối số "Duy" |
|  7   | 1-3  | Tương tự như bước 2,3 và 4, lần này giá trị của tham số `ten` là 'Duy' và 'Duy'sẽ được in trên màn hình |


## Truyền đối số (Passing Arguments)

Các đối số có thể chứa 0, một hoặc nhiều đối số.

Nếu không có đối số, chúng ta có thể gọi hàm với dấu ngoặc rỗng, ví dụ `<tên_hàm>()`.

Chúng ta đã thấy làm thế nào để chuyển một đối số cho một lệnh gọi hàm trong ví dụ về hàm chào của chúng ta ở trên. Để truyền nhiều hơn một đối số, bạn có một vài lựa chọn:


### Truyền đối số theo vị trí (Positional Arguments)

Bây giờ chúng tra sẽ mở rộng chương trình chào hỏi. Thay vì in 'Chào' với tên trên 2 dòng, hàm chào sẽ in "Chào <tên>, bạn khoẻ chứ?"

<s_c>
def chao(ten, loi_chao):
    print("Chào " + ten + ", " + loi_chao)
</s_c>

Có 2 tham số `ten` (tên)  và `loi_chao` (lời chào): `ten` ở vị trí đầu tiên và `lơi_chao` ở vị trí thứ hai. Khi gọi hàm chào hỏi:

<p_c>
def chao(ten, loi_chao):
    print("Chào " + ten + ", " + loi_chao)
greeting("Huy", "bạn khoẻ chứ?")	# in "Chào Huy, bạn khoẻ chứ?"
greeting("Duy", "chúc bạn một ngày tốt!")	# print "Chào Duy, chúc bạn một ngày tốt!"
</p_c>

<br>

Khi gọi hàm chào, chúng ta phải truyền 2 đối số vào đúng vị trí, tương ứng với vị trí tham số trong định nghĩa hàm. Ví dụ: "Huy", "Duy" tương ứng với tham số `ten` và do đó cần phải được chuyển qua làm vị trí đầu tiên. "bạn khoẻ chứ?" hoặc "chúc bạn một ngày tốt!" tương ứng với tham số `loi_chao` và cần ở vị trí thứ hai.

Bạn phải chỉ định cùng số lượng đối số trong lệnh gọi hàm vì có các tham số trong định nghĩa và theo cùng một thứ tự.


### Đối số mặc định (Default Arguments)

Các đối số chức năng có thể có các giá trị mặc định. Chúng ta có thể cung cấp một giá trị mặc định cho một đối số bằng cách sử dụng toán tử gán `=`.
Ví dụ: `def chao(ten, loi_chao ="Bạn khỏe chứ?")`. Tham số `ten` không có giá trị mặc định, vì vậy nó là bắt buộc. Thông số `loi_chao` có giá trị mặc định, nó là một tham số tùy chọn. Khi gọi hàm chào và chúng ta không truyền đối số cho thông báo tham số, giá trị mặc định sẽ được sử dụng.


<p_c>
def chao(ten, loi_chao = "bạn khoẻ chứ?"):
    print("Chào " + ten + ", " + loi_chao)
greeting("Huy")	# in "Chào Huy, bạn khoẻ chứ?"
greeting("Duy", "bạn đang làm gì?")	# in "Chào Duy, bạn đang làm gì?"
</p_c>
<br><br>

### Đối số từ khóa (Keyword Arguments)

Khi bạn gọi một hàm, bạn có thể chỉ định các đối số ở dạng `<từ_khoá> = <giá_trị>`. Trong trường hợp đó, mỗi `<từ_khoá>` phải khớp với một tham số trong định nghĩa hàm. Bạn có thể chỉ định các đối số theo bất kỳ thứ tự nào và Python vẫn sẽ biết đối số nào đi với tham số nào.


<p_c>
def chao(ten, loi_chao):
    print("Chào " + ten + ", " + loi_chao)
greeting(ten = "Huy", loi_chao =  "bạn khoẻ chứ")	# in "Chào Huy, bạn khoẻ chứ?"
greeting(loi_chao = "bạn đang làm gì?", ten = "Duy")	# in "Chào Duy, bạn đang làm gì?"
</p_c>
<br><br>
### Đối số tuỳ tiện (Arbitrary Arguments)

Python cho phép chúng ta có số lượng đối số tùy ý. Điều này đặc biệt hữu ích khi chúng tôi không chắc chắn trước rằng có bao nhiêu đối số, hàm yêu cầu.
Chúng ta định nghĩa các đối số tùy ý trong khi xác định hàm bằng dấu hoa thị `*`.

<p_c>
def chao(*ds_ten):
    for ten in ds_ten:
        print(ten)
chao("Huy", "Duy", "Hoa", "Hạnh")        
</p_c>
<br><br>


# Hàm tích hợp sẵn (Built-in Functions)

Python có một số hàm được xác định trước và có sẵn để sử dụng. Các hàm này được gọi là hàm tích hợp. Trong hướng dẫn này, chúng ta sẽ thấy một số trong số đó.


## Hàm print() 

Một trong những hàm được sử dụng nhiều nhất trong khóa học này là hàm `print ()`. Hàm `print ()` là in một thông báo trên màn hình.

Hàm `print ()` có thể lấy các đối số tùy ý (một hoặc nhiều giá trị) và các đối số từ khóa `sep` và` end`.

`sep` là viết tắt của seperator, có nghĩa là tách biệt. `sep` có thể là một chuỗi mà bạn muốn chèn giữa các giá trị. sep là một tham số tùy chọn và có không gian giá trị mặc định.

`end` (cuối) là một tham số tùy chọn và có giá trị mặc định là `"\n"`. "\ n" có nghĩa là một dòng mới.

<p_c>
print("Chào, bạn khoẻ không?")			# in 1 dòng "Chào, bạn khoẻ không?"
print("Chào", "Hoa")			# in "Chào Hoa" trên 1 dòng.
print("Hello", "Huy", sep=" --- " )	# in "Chào ---Huy" 
print("Hanh", "Duy", end="\n\n")	# in "Hanh Duy" và thêm 2 dòng trống vào phía cuối
print("Xong!")
</p_c>
<br><br>

## Hàm input() 

Hàm `input()` được sử dụng để yêu cầu người dùng cập nhật dữ liệu.
<p_c>
ten = input("Bạn tên gì?")
print(ten)
</p_c>
<br><br>

## Mô-đun (Module)

Mô-đun là một tệp python có phần mở rộng `.py` chứa một tập hợp các hàm bạn muốn sử dụng trong chương trình của mình. Để sử dụng một mô-đun trong chương trình của bạn, bạn chỉ cần dùng câu lệnh `import`. Trong chương 2 "Gặp rùa", bạn có thể đã thấy rằng ở đầu mỗi  ví dụ, chúng ta sử dụng câu lệnh  `import turtle` để đưa mô-đun `turtle` (rùa) vào chương trình. Các mô đun tích hợp quan trọng khác là Mô đun random (ngẫu nhiên) và Mô đun math (toán học)


### Random Module

Mô-đun ngẫu nhiên được sử dụng để tạo một số ngẫu nhiên cho một phạm vi nhất định hoặc chọn một chuỗi ngẫu nhiên từ danh sách các chuỗi.
Các phương pháp là:
- `randint(<tối_thiểu>, <tối_đa>)`. Ví dụ: `randint(2,7)` để tạo một số nguyên ngẫu nhiên trong khoảng từ 2 đến 7
- `choice(<danh_sách>)`. Ví dụ: `choice(["ab", "bc", "def"])` để chọn ngẫu nhiên một trong ba chuỗi "ab", "bc" hoặc "def"

<br>
<p_c>
import random
print(random.randint(2,7)) 
ds_trai_cay = ["cam", "chuối", "táo"]
print(random.choice(ds_trai_cay))
</p_c>
<br>

Mỗi khi bạn chạy chương trình trên, bạn có thể thấy một giá trị khác nhau ở đầu ra

### Math Module

Để sử dụng các hàm toán học trong chương trình của bạn, bạn có thể nhập mô-đun toán học: `import math`

<p_c>
import math
print(math.sqrt(4))	#Căn bậc hai của 4
print(math.pow(2,3)) # 2 power 3
</p_c>

<br><br>

## Trò chơi đoán chữ 


Một tóm tắt từ chương 1 khi giới thiệu trò chơi:

*Chương trình hiển thị cho người chơi lúc ban đầu có bao nhiêu chữ cái mà từ bí mật chứa và bao nhiêu lần đoán người chơi có được. Ví dụ: nếu từ bí mật là "duahau" ( dưa hấu) có 6 chữ cái, chương trình sẽ hiển thị từ bí mật ở đầu như thế này `_ _ _ _ _ _`.  Nếu chữ cái đoán đúng, hiển thị một thông báo nói rằng chữ cái được tìm thấy trong từ bí mật và có bao nhiêu lần đoán còn lại, thay thế chữ cái đầu vào bằng `_` ở đúng vị trí. Ví dụ: `_ _ a _ a _`. Nếu chữ cái đoán không chính xác, sẽ hiển thị một thông báo nói rằng chữ cái không được tìm thấy và cho người chơi thấy còn lại bao nhiêu lần đoán*


Trong chương này, chúng ta sẽ tạo ra một hàm mới `in_chu()` để chỉ in `_ _ _ _ _ _` khi bắt đầu trò chơi. Chúng ta sẽ hoàn thành hàm này trong một chương sau.

Bạn nên sử dụng vòng lặp `for` và hàm `print()` với tham số `end = ''` cho việc này. `tuBiAn` là duahau' với 6 chữ cái và hàm `in_chu()` sẽ in 6 dấu gạch dưới `_` được ngăn cách bởi một khoảng trắng.

Một chức năng mới khác là `in_tienTrien` để in "'Làm tốt lắm! Bạn còn x lần đoán còn lại' nếu người chơi đã đoán đúng và in" Không tìm thấy "nếu đoán không đúng. Hàm này sẽ có một tham số `doanDung` để cho biết nếu chữ cái đã đoán được tìm thấy trong `tuBiAn` hay không.

Sau khi xác định hai chức năng này, bạn có thể sử dụng chúng trong chương trình của bạn.

Chương trình ra sẽ như thế này:


```
Hãy đoán tên của một loại trái cây! Nhập "thoat" để thoát khỏi trò chơi
Bạn có 8 lần đoán
_ _ _ _ _ _ 

Nhập một chữ cái để đoán: a
Làm tốt lắm!

Nhập một chữ cái để đoán: x
Không tìm thấy
```




<p_c size=L>

doanThanhCong = False
coA = coU = coD = coH = False
tuBiAn = 'duahau'
coHoi = 8
print('Hãy đoán tên của một loại trái cây! Nhập "thoat" để thoát khỏi trò chơi ')
print('Bạn có 8 lần đoán')
while doanThanhCong == False and coHoi > 0:
    # yêu cầu người chơi nhập một chữ cái để đoán
    capNhat = input('Hãy nhập một chữ cái để đoán:')
    # giảm cơ hội đi 1 lần
    coHoi = coHoi - 1
    #If the guess is 'a' or 'u' or 'd' or 'h'
    if inputLetter == 'a':
        coA = True
        print('Làm tốt lắm!')
    elif inputLetter == 'u':
        coU = True
        print('Làm tốt lắm!')
    elif inputLetter == 'h':
        coH = True
        print('Làm tốt lắm!')
    elif inputLetter == 'd':
        coD = True
        print('Làm tốt lắm!')
		else:
        print('Không tìm thấy')
    if (coA == True and coU == True and coD == True and coH == True):
        doanThanhCong = True
        print('Xin chúc mừng! Bạn đã thắng!')
if doanThanhCong == False and coHoi == 0:
    print('Tôi thắng. Hãy thử lại')


<p_a_c>
<s_c>

doanThanhCong = False
coA = coU = coD = coH = False
tuBiAn = 'duahau'
coHoi = 8
def in_chu():
    for i in tuBiAn:
        print('_', end = ' ')  
    print()  # In ra một dòng trống                        

def in_tienTrien(đoanDung):
    if đoanDung:
        print('Làm tốt lắm!')
    else :
        print('Không tìm thấy!') 
        
print('Hãy đoán tên của một loại trái cây! Nhập "thoat" để thoát khỏi trò chơi ')
print('Bạn có 8 lần đoán')
print_word()
while doanThanhCong == False and coHoi > 0:
    # yêu cầu người chơi nhập một chữ cái để đoán
    capNhat = input('Hãy nhập một chữ cái để đoán:')
    # giảm cơ hội đi 1 lần
    coHoi = coHoi - 1
    #If the guess is 'a' or 'u' or 'd' or 'h'
    if inputLetter == 'a':
        coA = True
        print_progress(True)
    elif inputLetter == 'u':
        coU = True
        print_progress(True)
    elif inputLetter == 'h':
        coH = True
        print_progress(True)
    elif inputLetter == 'd':
        coD = True
        print_progress(True)
		else:
        print_progress(False)
    if (coA == True and coU == True and coD == True and coH == True):
        doanThanhCong = True
        print('Xin chúc mừng! Bạn đã thắng!')
if doanThanhCong == False and coHoi == 0:
    print('Tôi thắng. Hãy thử lại')

</s_c>
</p_a_c>
</p_c>









