[//]: # "Strings"

## Kiểu dữ liệu chuỗi (String)

Chúng ta đã làm quen với [chuỗi](/topic/3#string) trong chương trước.

Để tạo một chuỗi, chỉ cần đặt văn bản của bạn (từ, số, ký hiệu hoặc kết hợp cả ba) với dấu ngoặc đơn (') hoặc ngoặc kép ("). Để tạo một chuỗi đa dòng, sử dụng ba dấu ngoặc kép ("""). Xem ví dụ dưới đây.

Chuỗi là một danh sách các ký tự, vì vậy chuỗi thực sự là một danh sách. Tương tự như danh sách, bạn có thể truy cập vào phần tử chuỗi bằng cách sử dụng *chỉ mục, chỉ mục âm hoặc phạm vi chỉ mục*.

*Lưu ý: chỉ mục của chuỗi bắt đầu từ 0 cho phần tử đầu tiên*

<p_c size=M>
#Tạo chuỗi 
ngoac_don = 'chuỗi trong ngoặc đơn'
ngoac_kep = "chuỗi trong ngoặc kép"
da_dong = """Tôi là một chuỗi dài.
Với nhiều dòng.
"""
print(ngoac_don[2])	# in  "u" (chỉ mục 3 là phần tử thứ 4)
print(ngoac_don.index(2)) # giống như trên

#Truy cập chuỗi phần tử 
str = "abcdefghijklmnop"
print(str[3])	#in "d"
print(str[2:5])	# in"cde"
print(str[-2])	# in "o"
</p_c>

## Nối (Concatenation)

Ghép nối là nối hai hoặc nhiều chuỗi thành một chuỗi. Để ghép nối, bạn có thể dùng:
Toán tử `+`,  đơn giản chỉ cần viết hai chuỗi ký tự với nhau .
Toán tử  `*` để lặp lại chuỗi trong một số lần nhất định.

<s_c>
str1 = "Chào"
str2 = "Bạn"
str3 = str1 + str2;	# str3 là "ChàoBạn"
print(str3)	
str4 = str1 * 3		# str4 là "ChàoChàoChào"
print(str4)
</s_c>

*Lưu ý: Bạn không thể nối một chuỗi với một số. Bạn sẽ thấy báo lỗi*


## Phương thức chuỗi (String Methods)

Để trình bày một số phương thức chuỗi cơ bản, chúng tôi sử dụng hai chuỗi ví dụ sau:
`str ="Chào Bạn"` và `str_s = "  Chào Bạn   "`

|  Phương thức   | Giải thích                                         | Ví dụ | Kết quả |
| :-------: | --------------------------------------------------- | ------- | ------ |
| `strip()` | loại bỏ bất kỳ khoảng trắng nào từ đầu hoặc cuối |   str_s.strip()   | "Chào Bạn" |
| `lower()` | trả về một chuỗi với các chữ cái viết nhỏ | str.lower() | chào bạn |
| `upper()` | trả về một chuỗi với các chữ cái viết hoa | str.upper() | CHÀO, BẠN |
| `replace(old,new)` | thay thế một chuỗi bằng một chuỗi khác | str.replace("Bạn","Huy")  | Chào Huy        |
| `split()` | chia chuỗi thành danh sách các phần tử| str.split() | ["Chào", "Bạn"] |
| `index(sub)` | trả về chỉ mục của chuỗi con | str.index("hào") | 1 |

<br>

<p_c>
str_s = "  Chào Bạn  "
str = "Chào Bạn"
print("strip(): ", str_s.strip())
print("lower(): ", str.lower())
print("upper(): ", str.upper())
print("replace(): ", str.replace("Bạn", "Huy"))
print("split(): ", str.split())
print("index(): ", str.index("hào"))
</p_c>
<br>

## Chuỗi và Số nguyên (Strings and Integers)

Bạn có thể sử dụng hàm `int()` để chuyển đổi một chuỗi thành một số nguyên, ví dụ `int("1")` trả về `1`.
Bạn có thể sử dụng hàm `str()` để chuyển đổi một số nguyên thành một chuỗi. Ví dụ `str(1)` trả về `"1"`.

Thực hiện chương trình sau và quan sát kết quả:

<p_c>
print("1" + "2")
print(1 + 2)
print(1 + int("2"))
print(str(1) + str(2))
</p_c>
<br>

Dòng 1: nối hai chuỗi "1" và "2" trả về "12"  
Dòng 2: thêm hai số nguyên, 1 + 2 trả về 3  
Dòng 3: chuyển đổi chuỗi "2 'sang số nguyên 2 và thêm hai số nguyên, 1 + 2 trả về 3  
Dòng 4: chuyển đổi số nguyên 1 và 2 thành "1" và "2" và nối chúng trả về "12"  

## Định dạng chuỗi (String format)

Nếu bạn muốn in một văn bản giớ thiệu về một người, tên là một biến như thế này: "Tên tôi là <ten>, tôi <tuoi> tuổi", ví dụ: "Tên tôi là Duy, tôi được 11 tuổi. Giá trị của `<ten>`là Duy và`<tuoi>` là 11, bạn có thể nối các chuỗi nhỏ hơn như thế này:
```print("Tên tôi là " + ten + ", tôi được " + tuoi + "tuổi")```

Với phương pháp này, nếu bạn có nhiều biến số, sẽ rất khó để kết hợp tất cả chúng.

Một cách tiếp cận khác là sử dụng phương thức `format ()`.


Cú pháp: ```<string> .format (value1, value2 ...)```. Chuỗi được định dạng chứa các dấu ngoặc nhọn {} dưới dạng giữ chỗ và được thay thế bằng các đối số value1, value2 ... truyền đến phương thức format. Chúng ta có thể sử dụng đối số vị trí hoặc từ khóa để chỉ định thứ tự.

<p_c>
#Dùng đối số theo vị trí 
print("Tôi tên là {0}, tôi được {1} tuổi".format("Duy", 12))
#Dùng đối số bằng từ khoá
print("Tôi tên là {ten}, tôi được {tuoi} tuổi".format(ten = "Huy", tuoi = 14))
</p_c>





