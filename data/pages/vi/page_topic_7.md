[//]: # "Numbers"
## Kiểu dữ liệu số (Numbers)

Kiểu dữ liệu số lưu trữ giá trị số. Có 4 loại số khác nhau: integer (số nguyên), long(số nguyên không giới hạn kích cỡ), float (số thực với dấu thập phân) và complex (phức tạp). Trong khóa học cơ bản này, chúng ta  tập trung vào số nguyên và float.

Số nguyên, như chúng ta đã thấy trong chương 2, là số nguyên dương hoặc âm không có dấu thập phân. ***float*** đại diện cho số dương hoặc âm có chứa một hoặc nhiều số thập phân. ví dụ: float_number = 10,75

float có thể được tạo bằng cách gán một số float hoặc chuyển đổi một số nguyên hoặc chuỗi thành một float với hàm `float()`. Ví dụ:

<s_c>
floatNumber1 = 10.75			# gán float number 10.75
floatNumber2 = float(10)		# chuyển từ số nguyên 10  sang float 10.0
floatNumber3 = float("10.75")	# chuyển từ string "10.75" sang float 10.75
</s_c>

### Chức năng modulus (Modulus Operation)

Bên cạnh bốn toán tử: Phép cộng, phép cộng, phép nhân và phép chia mà chúng ta đã học được trong chương 3, một toán tử quan trọng là `%` là phép toán mô đun. Mô-đun là số dư của phép chia . Ví dụ:

<s_c>
du1 = 5 % 2			#  du1= 1 vì số dư của phép chia 5/2
du2 = 4 % 2			# du2 = 0 vì không có số dư của phép chia 4/2
</s_c>

### Cấp số nhân (Exponent Operation)

Python sử dụng các ký tự `**` cho số mũ. Ví dụ `3 ** 2` là 9


### Practise

Bạn có thể viết một chương trình in tất cả các số chẵn từ 0 đến 10 không? *Gợi ý: số dư của một số chẵn chia cho 2 là 0*
<p_c>
<p_a_c>
<s_c>
for so in range(0,11):
    if (so % 2) == 0:
        print(so)
</s_c>    
</p_a_c>
</p_c>



