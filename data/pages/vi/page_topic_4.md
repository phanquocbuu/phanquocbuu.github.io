[//]: # "Flow Control"

## Câu Lệnh Điều Khiển (Flow Control)


Câu lệnh điều khiển dùng để kiểm soát luồng chạy của chương trình được viết ra. Cho đến nay, nếu bạn chạy một chương trình, nó sẽ bắt đầu thực hiện tất cả các hướng dẫn lần lượt từ trên xuống dưới. Bạn có thể nói rằng *câu lệnh điều khiển* của nó là tuần tự hoặc tuyến tính. Nhưng thực tế thường phức tạp hơn thế. Máy tính có thể được lập trình để đưa ra *quyết định* để làm những việc khác nhau trong những hoàn cảnh khác nhau. Rất phổ biến khi có các hướng dẫn trong mã của bạn là *lặp lại* hoặc các đường dẫn phân nhánh. Có những câu lệnh thay đổi luồng điều khiển của chương trình của bạn, chúng được gọi là *câu lệnh điều khiển*.

Các câu lệnh luồng điều khiển phổ biến nhất là: *if-then*, *loop*


## Lênh If (If Statement)

Trong nhiều ngôn ngữ lập trình, các quyết định (còn được gọi là điều kiện) có dạng cấu trúc if-then. Họ bắt đầu với một điều kiện, sau đó được đánh giá là Đúng hoặc Sai.  
Một câu lệnh if có hai phần: điều kiện và (các) hành động. Cú pháp:

```
if điều_kiện:
    khối_lệnh
```

Lưu ý rằng dấu hai chấm (:) sau khi biểu thức là bắt buộc.

Hãy xem ví dụ sau:

<s_c>
dieu_kien = input("Trời có mưa không?")
if dieu_kein == "có":
	print("Hãy mang theo chiếc ô")
</s_c>
<br>
Chương trình này bắt đầu đặt câu hỏi "Trời có mưa không?". Điều kiện là câu trả lời của người dùng. Chương trình kiểm tra câu trả lời. Nếu câu trả lời là "có", điều kiện là đúng và chương trình sẽ in "Hãy mang theo chiếc ô"

Nếu câu trả lời là một cái gì đó khác, điều kiện là và sai và chương trình không làm gì cả.

<img src="/data/images/if_stmt_vi.png" alt="editor" style="zoom:100%;" />

Sơ đồ trên được gọi là *flow chart* ( lưu đồ thuật toán) , nó cho thấy cấu trúc điều khiển của một chương trình.

Đôi khi chúng ta muốn các chương trình làm một cái gì đó khác khi điều kiện là sai (False) bằng cách  thêm mệnh đề ***else*** vào câu lệnh ***if***:

<p_c>
dieu_kien = input("Trời có mưa không?")
if dieu_kien == "có":
	print("Hãy mang theo chiếc ô")
else:
	print("Hãy đội mũ")
</p_c>
<br>

Hãy thử chạy ví dụ trên và trả lời câu hỏi bằng "yes" (có) hoặc "no" (không) và xem kết quả.

## Khối lệnh (Block) & Thụt dòng lệnh (Indentation)

khối lệnh của lệnh if được viết thụt lề vào trong. Khối lệnh của if bắt đầu với một khoảng thụt lề và dòng không thụt lề đầu tiên sẽ được hiểu là kết thúc lệnh if.

### Khối lệnh (Block)

Trong tất cả các ví dụ ở trên, chỉ có một câu lệnh (hành động) sau mỗi lệnh if (điều kiện). Chúng ta hãy xem một ví dụ khi bạn muốn thực hiện nhiều hơn một hoạt động (câu lệnh) nếu một câu lệnh điều kiện là Đúng:

    Nếu (if) thời tiết đẹp, tôi sẽ:
         đi xem phim
         đi bơi
         thăm bạn bè của tôi

All these activities (statements) will be executed if the expression is true and if the expression is false, then none of them are executed. They are grouped into a ***block***. 

Tất cả các hoạt động (câu lệnh) này sẽ được thực thi nếu biểu thức là đúng và nếu biểu thức là sai, thì không có hoạt động nào được thực thi. Những câu lệnh này được nhóm lại thành một *khối lệnh*.

### Thụt dòng lệnh (Indentation)

<p_c>
dieu_kien = input("Trời có mưa không?")
if dieu_kien == "có":
	print("Hãy mang theo chiếc ô")
else:
	print("Hãy đội mũ")
	print("Hãy đeo kính râm")
print("Hãy đi ra ngoài chơi")	
</p_c>
<br>

Bạn có thể nhận ra rằng các dòng 3, 5 và 6, có các khoảng thụt lề vào trong ở bên trái của các câu lệnh bằng những khoảng trắng. Các khoảng trắng này trong Python được sử dụng để xác định nhóm các câu lệnh thành một khối mà chúng ta đã thảo luận ở trên.

Lưu ý rằng khi bạn chạy chương trình trên, dòng 7 sẽ được thực thi (in: "Hãy đi ra ngoài chơi") bất kể câu trả lời cho "Trời có mưa không" là Đúng hay Sai vì dòng 7 không có bất kỳ sự cố ý nào, vì vậy nó không thuộc về khối 5 và 6 cũng không thuộc dòng 3.


## Lệnh If, elif, else

Ví dụ sau:

Nếu trời đang mưa:
     Tôi sẽ lấy một cái ô
khác nếu trời có gió
     Tôi sẽ mặc áo khoác
khác
     Tôi sẽ đội mũ


<img src="/data/images/if_elif_vi.png" alt="editor" style="zoom:100%;" />


có thể được viết trong chương trình ví dụ sau:

<p_c>
dieu_kien = input("Thời tiết thế nào?")
if dieu_kien == "mưa":
    print("Lấy một chiếc ô")
elif answer == "gió":
    print("Mặc áo khoác")
else:
    print("Đội mũ")
</p_c>
<br>
<br>

## Lệnh If với điều kiện hợp chất (Compound Conditionals)

Giả sử chúng ta có một điều kiện / tuyên bố phức tạp hơn như thế này: Chúng ta có thể đi bơi vào cuối tuần khi trời không mưa. Trong tuyên bố này, điều kiện "vào cuối tuần khi trời không mưa" thực sự là sự kết hợp của một vài điều kiện khác. Nói cách khác, điều kiện có thể được viết như sau: "nếu hôm nay là Chủ nhật hoặc hôm nay là thứ bảy và nếu trời không mưa". Chúng ta cũng có thể viết điều kiện này dưới dạng differnt với cùng một nghĩa: "nếu hôm nay là thứ bảy và trời không mưa hoặc nếu hôm nay là chủ nhật và trời không rách". Chúng ta sử dụng dấu ngoặc  để nhóm các điều kiện thuộc về nhau:

<s_c>
#(hôm nay là Chủ nhật hoặc hôm nay là Thứ 7 ) và trời đang không mưa 
if (hom_nay == "chunhat" or hom_nay == "thu7") and troi_mua == false
#(hôm nay là Chủ nhất và trời không mưa) or (hôm nay là thứ 7 và trời không mưa)
if (hom_nay == "chunhat" and troi_mua == false) or (hom_nay == "thu7" and troi_mua == false)
</s_c>

<br>

## Trò chơi đoán chữ

Trong chương trước, chúng ta lưu trữ những gì người chơi nhập vào trong biến chuCaiCapNhat, nhưng chúng ta chưa làm gì với dữ liệu này. Bước tiếp theo là kiểm tra dữ liệu nhập vào.

Nếu tuBiAn 'duahau' chứa chữ cái mà người dùng đã nhập, chương trình sẽ hiển thị "Làm tốt lắm!". Nếu không sẽ in ra 'Không tìm thấy'.

*Lưu ý: để kiểm tra xem tuBiAn 'duahau' có chứa chuCaiCapNhat hay không, chúng ta có thể kiểm tra xem chuCaiCapNhat có phải là 'a', 'u', 'd' hay 'h' không*

<p_c>
tuBiAn = 'duahau'
soLanDoan = 8
print('Hãy đoán tên của một loại trái cây! Nhập "thoat" để thoát khỏi trò chơi ')
print('Bạn có 8 lần đoán')
chuCaiCapNhat = input('Hãy nhập một chữ cái để đoán: ')

<p_a_c>
<s_c>
tuBiAn = 'duahau'
soLanDoan = 8
print('Hãy đoán tên của một loại trái cây! Nhập "thoat" để thoát khỏi trò chơi ')
print('Bạn có 8 lần đoán')
chuCaiCapNhat = input('Hãy nhập một chữ cái để đoán: ')
if chuCaiCapNhat == 'a' or chuCaiCapNhat == 'u' or chuCaiCapNhat == 'd' or chuCaiCapNhat == 'h':
    print('Làm tốt lắm!')
else:
    print('Không tìm thấy')
</s_c>
</p_a_c>
</p_c>

















