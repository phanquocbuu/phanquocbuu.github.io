[//]: # "List"

## Kiểu dữ liệu List

### Tạo danh sách (List) và truy cập phần tử (Access Element)

Bạn đã làm quen với kiểu dữ liệu List trong chương trước [Danh sách](/topic/3#List): 

<s_c>
ds_traicay = ["táo", "cam", "chuối"]	# tạo một danh sách ds_traicay với 3 phần tử 
print(ds_traicay[0])	# in phần tử tại chỉ mục 0 -> táo
traicay = ds_traicay[1]	# gắn biến traicay với phần tử tại chỉ mục 1 -- giá trị của traicay là "cam"
</s_c>

### Chỉ mục âm (Negative Indexing)

Chỉ mục âm có nghĩa là bắt đầu từ cuối, -1 là chỉ mục của phần tử cuối cùng, -2 là chỉ mục của phần tử cuối cùng thứ hai, v.v.

<s_c>
ds_traicay = ["táo", "cam", "chuối"]	# tạo danh sách trái cay với 3 phần tử
print(ds_traicay[-1])	# in "chuối" --phần tử cuối của danh sách 
print(ds_traicay[-2])	# in "cam" -- phần tử cuối thứ 2 của danh sách 
</s_c>


### Phạm vi chỉ mục (Range of Indexes)

Chúng ta có thể lấy một danh sách con từ một danh sách trong Python bằng toán tử cắt `:`. Bạn có thể chỉ định một phạm vi chỉ mục bằng cách chỉ định nơi bắt đầu và nơi kết thúc phạm vi `[<bắt_đầu>:<kết_thúc>]`:

<s_c>
ds_traicay = ["táo", "cam", "chuối", "nho", "xoài"]
print(ds_traicay[1:4]) 	# in "cam chuối nho"
</s_c>

*Lưu ý rằng chỉ mục 0 bắt đầu ở phần tử đầu tiên. [1: 4] có nghĩa là bắt đầu từ chỉ mục 1 (bao gồm) đến chỉ mục 4 (không bao gồm). Chỉ mục 1 là "cam" và chỉ mục4 là "xoài" nhưng không bao gồm chỉ số 4, do đó "xoài" không được in* 

Nếu bạn bỏ qua bắt đầu, ví dụ `[:<kết_thúc>]`, phạm vi sẽ bắt đầu từ phần tử đầu tiên của danh sách
Nếu bạn bỏ qua cuối, ví dụ `[<bắt_đầu>:]`, phạm vi sẽ đi đến cuối danh sách

Python cũng cho phép bạn có một loạt các chỉ mục âm. Ví dụ, phạm vi `[-3: -1]` có nghĩa là bắt đầu từ phần tử cuối cùng thứ ba (bao gồm) đến phần tử cuối cùng (không bao gồm).


### Thực hành

<p_c>
ds_traicay = ["táo", "cam", "chuối", "nho", "xoài", "dâu"]
print(ds_traicay[3])
print(ds_traicay[-2])
print(ds_traicay[1:4])
print(ds_traicay[-4:-1])
</p_c>
<br>

## Phương thức (Methods)

Danh sách có một số phương thức. Phương thức tương tự như hàm. Sự khác biệt duy nhất giữa phương thức và hàm là phương thức chỉ được sử dụng với một đối tượng, trong trường hợp này là đối tượng danh sách (list object), trong khi một hàm có thể được gọi mà không có đối tượng.

Cú pháp của lệnh gọi phương thức: `<đối_tượng>.<tên_phương_thức>(<đối_số>)`

## Thêm phần tử vào danh sách (Add to List)

Có một số cách bạn có thể thêm các phần tử vào danh sách.

Bạn có thể thêm một phần tử vào danh sách bằng phương thức `append()` hoặc thêm một hoặc nhiều phần tử bằng phương thức`extend()`.

Hơn nữa, chúng ta có thể chèn một phần tử tại một vị trí (chỉ mục) mong muốn bằng cách sử dụng phương thức `insert()`. Ví dụ `insert (2,"abc")` là chèn "abc" vào danh sách ở chỉ mục thứ 2.

<p_c>
ds_traicay = ["táo", "cam", "chuối"]
ds_traicay.append("nho")
print("sau khi append: ", ds_traicay)
ds_traicay.extend(["xoài", "dâu"])
print("sau khi extend: ", ds_traicay)
ds_traicay.insert(1, "bơ")
print("sau khi insert:", ds_traicay)
</p_c>
<br>

## Xóa phần tử từ danh sách (Remove from List)

Chúng ta có thể xóa một hoặc nhiều phần tử khỏi danh sách bằng từ khóa `del`. Nó thậm chí có thể xóa danh sách hoàn toàn.
Chúng ta có thể sử dụng phương thức `remove()` để loại bỏ phần tử cụ thể nào đó hoặc phương thức `pop()` để loại bỏ một phần tử tại chỉ mục cụ thể.

<p_c>
ds_traicay = ["táo", "cam", "chuối", "nho", "xoài", "dâu"]
del ds_traicay[1]	# xoá phần tử thứ 2 
print("sau khi del: ", ds_traicay)
ds_traicay.remove("banana")	# xoá phần tử "chuối"
print("sau khi remove: ", ds_traicay)
ds_traicay.pop(0)	# xoá phần tử đầu 
print("sau khi pop:", ds_traicay)
</p_c>
<br>

## Hàm len()

Hàm `len()` trả về độ dài của danh sách là số phần tử trong danh sách.

<s_c>
ds_traicay = ["táo", "cam", "chuối"]
print(len(ds_traicay))	# hiển thị 3
</s_c>

## Nối 2 danh sách (Join two lists)

Chúng ta đã thấy một ví dụ ở trên để sử dụng phương thức `extend()` để thêm danh sách vào danh sách khác. Một cách khác để nối hoặc nối hai hoặc nhiều danh sách là sử dụng toán tử `+`.

<p_c>
ds_traicay = ["táo", "cam", "chuối"]
ds_nuoc = ["sữa", "nước", "nước chanh"]
tong_hop = ds_traicay + ds_nuoc
print(tong_hop)
</p_c>





