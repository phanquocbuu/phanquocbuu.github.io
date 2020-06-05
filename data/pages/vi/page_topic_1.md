[//]: # "Getting started"

## Ngôn ngữ kịch bản Python là gì?

Một ngôn ngữ kịch bản là một ngôn ngữ mà không đòi hỏi một bước biên dịch. Lập trình là quá trình cung cấp cho máy tính của bạn một bộ hướng dẫn để thực hiện. Khi bạn tạo một chương trình python, bạn viết hướng dẫn bằng ngôn ngữ Python. Bạn có thể tự hỏi, "làm thế nào để máy tính của tôi hiểu hướng dẫn"? Vâng, có một trình thông dịch Python đọc các tập lệnh Python và thực hiện các hướng dẫn. Thông thường, bạn cần một trình soạn thảo để viết tập lệnh Python và trình thông dịch Python cần được cài đặt trên máy tính của bạn. Tuy nhiên, với Python Turtorial này, bạn không cần phải cài đặt bất cứ thứ gì. Trình chỉnh sửa và trình thông dịch đã được cài và sẵn sàng để bạn sử dụng. Bạn có thể viết tập lệnh Python trong *Trình chỉnh sửa*  (hộp bên trái - xem hình ảnh bên dưới), khi bạn nhấn nút *Chạy*, trình thông dịch sẽ đọc tập lệnh, thực thi và sau đó viết kết quả vào hộp *Kết quả* .

<img src="/data/images/editor_vi.png" alt="editor" style="zoom:60%;" />



## Tập lệnh Python đầu tiên

Theo truyền thống, chương trình đầu tiên được viết bằng một ngôn ngữ mới được gọi là "Hello, World!", có nghĩa là "Xin chào, Thế giới!" bởi vì tất cả những gì nó làm là hiển thị các từ "Hello, World! ". Một tập lệnh python có thể đơn giản như một hướng dẫn như dưới đây:

<p_c>
print("Hello, World!")
</p_c>

<br>

Đây là một ví dụ về việc sử dụng chức năng in *print*. Sau khi bạn nhấn nút *Chạy*, chương trình sẽ hiển thị dòng chữ "Hello, World!" trên hộp kết quả. Trong trường hợp này, giá trị là một văn bản *Hello, World!!* được tìm thấy giữa các dấu ngoặc kép.

Bây giờ bạn có thể thử in *Hello, tên của bạn* trên hộp kết quả bằng cách thay thế World bằng tên của bạn và nhấn nút chạy.

Một ví dụ đơn giản khác là hiển thị 2 + 3. Nếu bạn chạy tập lệnh này, nó sẽ hiển thị câu trả lời, 5, trên màn hình.

<s_c>
print(2 + 3)
</s_c>


## Hàm print() và input()

Python có nhiều hàm dựng sẵn luôn có sẵn để sử dụng trong chương trình. Chúng ta sẽ tìm hiểu thêm về điều đó trong các chương sau. Hãy làm quen với hai chức năng thiết yếu cho hướng dẫn này:


`input()` hàm được sử dụng để yêu cầu người dùng nhập vào dữ liệu    
`print()` hàm có tác dụng hiển thị dữ diệu ra màn hình khi chương trình thực thi  

Chương trình sau đây là yêu cầu người dùng nhập tên của họ và in tên người dùng trên màn hình:

<p_c>
print("Tôi sẽ tên bạn")
ten = input("Tên bạn là gì?")
print(ten)
</p_c>
<br>

Line 1: Hàm `input("Tên bạn là gì?")`  hiển thị một hộp thoại yêu cầu người dùng nhập tên  
Line 2: In tên mà người dùng cung cấp từ dòng 1    


## Trò chơi đoán chữ


Như đã đề cập trước đó, vào cuối hướng dẫn này, bạn sẽ có thể phát triển trò chơi đầu tiên của mình bằng Python, được gọi là "Trò chơi đoán chữ".
Đây là các bước để xây dựng trò chơi:

1. Chương trình chọn một từ ngẫu nhiên từ danh sách các từ chúng ta cung cấp trong mã. Tất cả các từ đều là tên của trái cây.
2. Chương trình cung cấp cho người chơi một số lần đoán hoặc lượt tùy thuộc vào độ dài của từ được chọn.
3. Chương trình hiển thị cho người chơi lúc ban đầu có bao nhiêu chữ cái mà từ bí mật chứa và bao nhiêu lần đoán người chơi có được. Ví dụ: nếu từ bí mật là "duahau" ( dưa hấu) có 6 chữ cái, chương trình sẽ hiển thị từ bí mật ở đầu như thế này `_ _ _ _ _ _`
4. Chương trình sẽ yêu cầu người chơi đoán một chữ cái. Sau khi người chơi đã nhập dữ liệu, chương trình sẽ:
   1. Nếu chữ cái đoán đúng, hiển thị một thông báo nói rằng chữ cái được tìm thấy trong từ bí mật và có bao nhiêu lần đoán còn lại, thay thế chữ cái đầu vào bằng `_` ở đúng vị trí. Ví dụ: `_ _ a _ a _`
   2. nếu chữ cái đoán không chính xác, sẽ hiển thị một thông báo nói rằng chữ cái không được tìm thấy và cho người chơi thấy còn lại bao nhiêu lần đoán
5. Trò chơi kết thúc khi người chơi đoán từ bí mật hoặc người chơi hết cơ hội đoán.
6. Nếu người chơi thắng, chương trình sẽ in một thông điệp chúc mừng


The output of the game could be like this:

```
Hãy đoán tên của một loại trái cây! Nhập "thoat" để thoát khỏi trò chơi
Bạn có 8 lần đoán
_ _ _ _ _ _ 
Nhập một chữ cái để đoán: a
Làm tốt lắm! Bạn còn 7 lần đoán còn lại
_ _ a _ a _ 

Nhập một chữ cái để đoán: x
Không tìm thấy chữ 'x'! Bạn có 6 lần đoán còn lại
_ _ a _ a _ 

Nhập một chữ cái để đoán: u
Làm tốt lắm! Bạn còn 5 lần đoán còn lại
_ u a _ a u 

Nhập một chữ cái để đoán: d
Làm tốt lắm! Bạn còn 4 lần đoán còn lại
d u a _ a u 

Nhập một chữ cái để đoán: h
d u a h a u 
Xin chúc mừng! Bạn đã thắng!
```


Bây giờ, hãy bắt đầu tạo trò chơi. Điều đầu tiên chúng ta phải làm là để chương trình in trên màn hình giới thiệu về trò chơi. Nó sẽ in ra hai dòng. Dòng đầu tiên là, 'Hãy đoán tên của một loại trái cây! Nhập "thoat" để thoát khỏi trò chơi'. Dòng thứ hai là để cho người chơi biết sẽ có bao nhiêu cơ hội để đoán được từ bí mật. Ví dụ: 'Bạn có 8 lần đoán'. Bây giờ, đến lượt bạn viết mã đầu tiên của bạn. Bạn có thể kiểm tra mã của mình bằng cách nhấn nút *Chạy.* Nếu bạn cần trợ giúp, bạn có thể chọn hộp kiểm *Hiển thị đáp án*.

<p_c>
<p_a_c>
<s_c>
print('Hãy đoán tên của một loại trái cây! Nhập "thoat" để thoát khỏi trò chơi ')
print('Bạn có 8 lần đoán')
</s_c>
</p_a_c>
</p_c>


<br>

Trước khi chúng ta tiến sâu hơn vào ngôn ngữ lập trình Python, hãy gặp gỡ **Chú Rùa** trong chương tiếp theo.