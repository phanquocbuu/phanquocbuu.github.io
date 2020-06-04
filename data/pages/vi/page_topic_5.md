[//]: # "Loopsl"

## Vòng lặp (Loop)

Giả sử chúng ta có một chương trình in 10 số khác nhau từ 0 đến 9 theo thứ tự. Với cách chúng ta đã học cho đến nay, chúng ta sẽ viết 10 câu lệnh với hàm print (), như thế này
```
print(0)
print(1)
print(2)
...
print(9)
```


*Vòng lặp* vòng lặp cho phép chúng ta viết chương trình để làm điều tương tự lặp đi lặp lại chỉ với một vài dòng đơn giản, rõ ràng và dễ hiểu.
Một vòng lặp ***for*** sẽ lặp lại một khối mã. Lặp lại được tiếp tục cho đến khi điều kiện dừng được đáp ứng.



Có hai loại vòng lặp trong Python, ***for*** và ***while***.

## Vòng lặp For

Cú pháp cho vòng lặp *for*:
```
for <biến_vòng_lặp> in <dữ_liệu_kiểu_sequence>:
    <lệnh1>
    <lệnhN>
```
`<dữ_liệu_kiểu_sequence>` có thể là một kiểu dữ liệu *list* hoặc *string*, ví dụ  ["táo", "cam", "chuối"]
`<biến_vòng_lặp>` là biến vòng lặp được sử dụng để lặp qua `<dữ_liệu_kiểu_sequence>`.

Nó bắt đầu bằng việc kiểm tra xem chuỗi có còn các phần tử được lặp đi lặp lại hay không, nếu có, gán phần tử đầu tiên của chuỗi (đó là danh sách) cho biến vòng lặp. Tiếp theo, khối lệnh (statement1 ... statementN) được thực thi. Mỗi phần tử trong danh sách được gán cho biến vòng lặp và khối câu lệnh được thực thi cho đến khi tất cả các phần tử của danh sách được lặp lại.

<p_c>
ds_trai_cay = ["táo", "cam", "chuối"]	# Tạo ra một danh sách trái cây 
for trai_cay in ds_trai_cay:	# trai_cay là <biến_vòng_lập>, ds_trai_cay là <dữ_liệu_kiểu_sequence>	
    print(trai_cay)	# hiển thị mỗi trai_cay trong ds_trai_cay
</p_c>

<br>

Chương trình trên được thực hiện theo trình tự sau:
1. Dòng 1: Một danh sách `ds_trai_cay` được tạo với 3 yếu tố" táo "," cam "và" chuối "
2. Dòng 2: Vẫn còn phần tử được lặp lại? Đúng. phần tử đầu tiên của danh sách được gán cho `trai_cay`. Giá trị của biến vòng trai_cay là "táo"
3. Dòng 3: in ra "táo" trên màn hình
4. Dòng 2: Vẫn còn phần tử được lặp lại? Đúng. "cam" được gán cho `trai_cay`. Giá trị của biến vòng trai_cay là "cam"
5. Dòng 3: in ra "cam" trên màn hình
6. Dòng 2: Vẫn còn phần tử được lặp lại? Đúng. "chuối" được gán cho `trai_cay`. Giá trị của biến vòng trai_cay là "chuối"
7. Dòng 3: in ra "chuối" trên màn hình
8. Dòng 2: Vẫn còn phần tử được lặp lại? Không. Chương trình dừng lại.


### Vòng lặp For và hàm range() 

Hàm `range(<băt_đầu>, <kết_thúc>)` trả về một chuỗi số, bắt đầu từ số `<bắt_đầu>` và tăng thêm 1 và kết thúc bằng số `<kết_thúc>` trừ 1 (`số <kết_thúc>` không được bao gồm). Nếu `<bắt_đầu>` không được đưa ra, nó sẽ bắt đầu bằng 0.

Ví dụ:
`rang(3)` trả về một chuỗi 0, 1, 2 *Lưu ý: 3 không được bao gồm; nó bắt đầu từ 0 vì số `<bắt_đầu>` không được cung cấp*
`rang(2,6)` trả về 2, 3, 4, 5 *Lưu ý: 6 không bao gồm*

Chương trình sau đây để in 10 số từ 0 đến 9:

<p_c>
for so in range(0,10):
    print(so)
</p_c>


## Vòng lặp While (While loop)

Các câu lệnh trong vòng lặp *while* được lặp lại đến khi một biểu thức / điều kiện của vòng lặp không được đáp ứng.
Cú pháp:

```
while (<Đúng/Sai_biểu_thức>):
    <lênh1>
    <lệnhN>
```
Trong vòng lặp while, <Đúng/Sai_biểu_thức> được kiểm tra trước. Phần thân của vòng lặp chỉ được thực thi nếu <Đúng/Sai_biểu_thức> ước lượng thành Đúng. Sau một lần lặp, <Đúng/Sai_biểu_thức> được kiểm tra lại. Quá trình này tiếp tục cho đến khi <Đúng/Sai_biểu_thức> ước tính thành Sai.
<p_c>
so = 0
while (so < 3):
    print(so)
    so = so + 1
</p_c>

<br>

Chương trình trên được thực hiện theo trình tự sau:
1. Dòng 1: Biến `so` (số) được tạo với giá trị 0
2. Dòng 2: `so` là 0, vì vậy `so < 3` là Đúng. Nhập khối lệnh ở dòng 3 và 4
3. Dòng 3: in ra 0
4. Dòng 4: `so = so + 1` có nghĩa là tăng giá trị của biến`so` lên thêm 1. Giá trị mới của `so` là 0 + 1 = 1
5. Dòng 2: `so` là 1, vì vậy `so < 3` là Đúng. Nhập khối lệnh ở dòng 3 và 4
6. Dòng 3: in ra 1
7. Dòng 4: `so = so + 1` có nghĩa là tăng giá trị của biến `so` lên thêm 1. Giá trị mới của `so` là 1 + 1 = 2
8. Dòng 2: `so` là 2, vì vậy `so < 3` là Đúng. Nhập khối lệnh ở dòng 3 và 4
9. Dòng 3: in ra 2
10. Dòng 4: `so = so + 1` có nghĩa là tăng giá trị của biến `so` lên thêm 1. Giá trị mới của `so` là 2 + 1 = 3
11. Dòng 2: `so` là 3, vì vậy `so <3` là Sai. Khối câu lệnh ở dòng 3 và 4 được bỏ qua. Chương trình kết thúc



## Lệnh Break và lệnh Continue

Khối mã được lặp lại cho đến khi biểu thức là sai, nhưng đôi khi chúng tôi muốn chấm dứt vòng lặp hiện tại hoặc thậm chí toàn bộ vòng lặp mà không kiểm tra biểu thức vòng lặp.

`break` được sử dụng để thoát khỏi vòng lặp hiện tại , `continue` được sử dụng để bỏ qua khối hiện tại và trở về câu lệnh `for` hoặc `while`

ví dụ:

<p_c>
for chu_cai in "táo, cam":
    if chu_cai == ",":
        break;
    print(letter)
</p_c>
<br>
Chương trình trên lặp lại thông qua tất cả các chữ cái trong chuỗi "táo, cam". Nó gán từng chữ cái cho biến vòng lặp `chu_cai` và nó kiểm tra xem chữ đó có phải là", " hay không (dòng 2). Nếu chữ cái không phải là ",", chữ cái sẽ được in. Nếu chữ cái là ",", câu lệnh `break` được thực thi (dòng 3) và vòng lặp kết thúc. Chúng ta thấy trong kết quả chỉ có 3 chữ cái được in ra: t á o.


`continue` được sử dụng để bỏ qua khối lệnh hiện tại. Vòng lặp không kết thúc mà tiếp tục với lần lặp tiếp theo.
<p_c>
for letter in "táo, cam"
    if chu_cai == ",":
        continue;
    print(chu_cai)
</p_c>

Khi chữ cái là ",", câu lệnh `continue` được thực thi (dòng 3) và nó bỏ qua câu lệnh hiện tại `print(chu_cai)` ở dòng 4 và trở về dòng 1. Do đó, chúng ta thấy trong kết quả các chữ cái này: 'táo cam' (không có dấu phẩy)


## Trò chơi đoán chữ

Cho đến nay, chương trình của chúng ta chỉ có thể yêu cầu người dùng đoán một chữ cái mà thôi. Chúng ta sẽ sử dụng một vòng lặp `while` để  yêu cầu người chơi tiếp tục đoán nhiều chữ cái:

```
Trong khi từ bí mật chưa được đoán và người dùng vẫn có cơ hội còn lại {
		Hiển thị một hộp thoại, yêu cầu người dùng đoán một chữ cái
		Giảm cơ hội đi 1 lần
		Nếu đoán là 'a' hoặc 'u' hoặc 'd' hoặc 'h' {
				Lưu trữ các chữ cái đã đoán đúng
				In "Làm tốt lắm!"
		}
		Kiểm tra nếu từ đã được đoán. Nếu có, in 'Xin chúc mừng! Bạn đã thắng!'
}
nếu từ bí mật chưa được đoán và không còn cơ hội nào {
		in ('Tôi thắng. Hãy thử lại')
}

```

Những gì bạn thấy ở trên được gọi là  **Mã giả**, tiếng Anh là . Nó có nghĩa là *Pseudocode*. Mã giả được dùng đơn giản để mô tả cách thức hoạt động của một progam.

Trong mã giả ở trên, có một dòng ghi "Lưu trữ các chữ cái đã đoán đúng". Điều này có nghĩa là chúng ta cần có cách theo dõi các chữ cái mà người chơi đã đoán chính xác. Giả sử người chơi đã đoán đúng 3 chữ cái 'a', 'd' và 'u', chúng ta cần giữ thông tin này một cách nào đó để bất cứ khi nào người chơi đoán được chính xác chữ cái cuối cùng 'h' trước khi hết cơ hội, chúng ta biết rằng người chơi đã đoán đúng và đã thắng. Để theo dõi tiến trình của người chơi, chúng ta có thể tạo 4 biến: coA, coU, coD và coH. Lúc đầu, tất cả đều có giá trị Sai. Nếu người chơi đã đoán đúng một trong những chữ cái này, chúng ta sẽ đặt các biến này thành Đúng. Ví dụ: nếu người chơi đã đoán 'a', chúng ta đặt biến coA thành True.

Trong câu đầu:
"từ bí mật chưa được đoán" có nghĩa là hoặc coA, coU, coH hoặc coD còn có giá trị Sai.
"người dùng vẫn có cơ hội còn lại" có nghĩa là số lần đoán còn lại lớn hơn 0 (soLanDoan > 0)

*Lưu ý: đây là một ví dụ về "If với điều kiện hợp chất" chúng ta đã thảo luận trong chương trước*

Câu 3: "Giảm cơ hội đi 1 lần" có nghĩa là - khi bắt đầu cơ hội là 8, sau mỗi lần đoán, cơ hội sẽ giảm đi một. Điều này có thể được viết dưới dạng mã như thế này:
```
co_hoi = 8						# cơ hội lúc đầu là 8 
co_hoi = co_hoi - 1 # giảm cơ hội đi 1 lần, còn lại 7
```

Câu "Kiểm tra nếu từ đã được đoán": Để theo dõi xem từ bí mật đã được đoán hay chưa, chúng ta sử dụng một biến mới `doanThanhCong` và đặt giá trị của nó thành Sai lúc khởi đầu. Nếu tất cả coA, coU, coD và coH là True, thì từ bí mật đã được đoán, `doanThanhCong` sẽ có giá trị True. Chúng ta sẽ sử dụng biến này làm điều kiện trong dòng 1 của vòng lặp while.


Bây giờ đến lượt bạn dịch mã giả thành mã python.
*Lưu ý: Dòng 5 - 9 nên được đặt vào vòng lặp while*

<p_c size=M>
tuBiAn = 'duahau'
coHoi = 8
print('Hãy đoán tên của một loại trái cây! Nhập "thoat" để thoát khỏi trò chơi ')
print('Bạn có 8 lần đoán')
chuCaiCapNhat = input('Hãy nhập một chữ cái để đoán: ')
if chuCaiCapNhat == 'a' or chuCaiCapNhat == 'u' or chuCaiCapNhat == 'd' or chuCaiCapNhat == 'h':
    print('Làm tốt lắm!')
else:
    print('Không tìm thấy')
<p_a_c>
<s_c>
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

</s_c>
</p_a_c>
</p_c>









