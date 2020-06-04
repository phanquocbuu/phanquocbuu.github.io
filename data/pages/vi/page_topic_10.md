## Trò chơi đoán chữ

Bây giờ là thời gian để hoàn thành trò chơi của chúng ta. Đầu ra của chương trình nên như thế này:

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

<br>

chúng ta đã đạt được cho đến nay:

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
    #yêu cầu người chơi nhập một chữ cái để đoán
​    capNhat = input('Hãy nhập một chữ cái để đoán:')
    #giảm cơ hội đi 1 lần
​    coHoi = coHoi - 1
​    #If the guess is 'a' or 'u' or 'd' or 'h'
​    if inputLetter == 'a':
​        coA = True
​        print_progress(True)
​    elif inputLetter == 'u':
​        coU = True
​        print_progress(True)
​    elif inputLetter == 'h':
​        coH = True
​        print_progress(True)
​    elif inputLetter == 'd':
​        coD = True
​        print_progress(True)
​		else:
​        print_progress(False)
​    if (coA == True and coU == True and coD == True and coH == True):
​        doanThanhCong = True
​        print('Xin chúc mừng! Bạn đã thắng!')
if doanThanhCong == False and coHoi == 0:
​    print('Tôi thắng. Hãy thử lại')
</s_c>


Trong chương trước, chúng ta sử dụng mã giả để mô tả chương trình sẽ hoạt động như thế nào. Dưới đây là mã giả cho toàn bộ chương trình. Hãy bắt đầu!

<s_c>
#Đầu tiên nhập mô-đun ngẫu nhiên

#Tạo một biến tenCacTraiCay dưới dạng chuỗi tên trái cây

#Chuyển đổi chuỗi tenCacTraiCay thành một danh sách 

#Chọn ngẫu nhiên một từ bí mật từ danh sách "tenCacTraiCay" 

#Tạo biến coHoi để giữ số lượng dự đoán còn lại
#Nó bắt đầu với số lượng chữ cái trong từ tuBiAn + 2

#Tạo biến cacChuCaiDaCapNhat để giữ tất cả các chữ cái đã được cập nhật

#Số chữ đoán đúng - biến soChuCaiChinhXac
#Nếu số này bằng với số chữ cái trong từ bí mật, đoán đã thành công


#Biến doanThanhCong
#Khi bắt đầu doanThanhCong là False, được đặt thành True nếu đoán đúng

#Hàm in chữ

#Hàm in sự tiến triển                           

#Hàm kiểm tra từ cập nhật

#In giới thiệu trò chơi

#In tuBiAn với dấu '_'

#Vòng lập while
#Lặp lại khi co hội vẫn còn và tuBiAn chưa được đoán đúng

    # yêu cầu người chơi nhập một chữ cái để đoán
    
    # kết thúc trò chơi nếu người chơi nhập 'thoat'
    
    # kiểm tra nhập dữ liệu của người chơi. Nếu không hợp lệ, tiếp tục yêu cầu nhập lại
    
    # nếu dữ liệu hợp lệ, tiếp tục mà không trừ đi cơ hội
    # nếu dữ liệu hợp lệ
        # giảm cơ hội đi 1 lần
    
        # lưu trữ lại những chữ cái người chơi đã cập nhật
    
        # xác định bao nhiêu lần chữ đoán được tìm thấy trong từ bí mật. 0 có nghĩa là không tìm thấy    
    
        # cập nhật số lượng chữ tìm được tìm thấy
    
    #Đoán thành công nếu soChuCaiChinhXac bằng số lượng chữ cái trong từ bí mật
    
    #Nếu chưa đoán thành công, tiến trình cho lần kế tiếp
</s_c>

<br>

1. Dòng 1: Từ bí mật của chúng ta luôn là 'duahau' và vì thế trò chơi của chúng ta không phải là một trò chơi thú vị. Để làm cho trò chơi thú vị hơn, một từ bí mật nên được chọn bằng cách nào đó ngẫu nhiên. Chúng ta sẽ sử dụng mô-đun ngẫu nhiên bằng cách thêm câu lệnh nhập khẩu `import random` vào chương trình của chúng ta và để cho tuBiAn được chọn ngẫu nhiên từ danh sách các từ trái cây mà chúng ta cung cấp với chức năng `select`

2. Dòng 3: chúng ta tạo ra biến tenCacTraiCay, kiểu dữ liệu chuỗi và gán với một số trái cây:
tenCacTraiCay = '''buoi chanhday chuoi chomchom mangcau mangcut mittonu dautay duahau saurieng thanhlong vusua duale duaxiem '''. Danh sách này là một chuỗi với tất cả các tên trái cây được ngăn cách bởi khoảng trống.

3. Dòng 5: chúng ta cần chuyển đổi chuỗi tên trái cây thành một danh sách chuỗi bằng cách sử dụng hàm `split ()`. Ví dụ: `tenCacTraiCay = tenCacTraiCay.split(' ')`. Danh sách các tên trái cây có thể được truyền cho hàm `choice()` làm đối số.

4. Dòng 7: Sử dụng phương thức `select()` từ mô-đun ramdon để chọn bất kỳ từ nào trong danh sách tenCacTraiCay và gán cho biến tuBiAn

5. Dòng 8: `coHoi` (cớ hội) luôn là 8 (6 chữ cái của 'chuối' + 2). Chương trình sẽ cung cấp cho người chơi số cơ hội về số lượng chữ cái trong từ bí mật cộng với 2. Bạn có thể sử dụng hàm `len()` tại đây.  
6. Dòng 12: Trước đây, chương trình của chúng ta kiểm tra xem chữ cái đoán có phải là một trong 4 chữ cái này 'a', 'u', 'h' và 'd' hay không bởi vì tuBiAn của chúng ta luôn là 'duahau'. Bây giờ nó có thể là bất kỳ từ nào trong danh sách được mô tả ở trên, chúng ta sẽ loại bỏ các biến coA, coU, coD và coH. Thay vào đó, chúng ta sử dụng một biến mới cacChuCaiDaCapNhat để giữ tất cả các chữ cái được người chơi nhập vào. Vào đầu trò chơi, nó là một danh sách trống
7. Dòng 14 & 15: chúng ta sẽ tạo một biến số mới soChuCaiChinhXac để theo dõi số lượng chữ cái mà người chơi đã đoán chính xác. Nếu con số này bằng số lượng chữ cái trong tuBiAn, người dùng đã đoán thành công
8. Dòng 17 & 18: Không thay đổi biến doanThanhCong mà chúng ta đã định nghĩa trong chương trước
9. Dòng 20: Hàm in_chu hiện tại chỉ in trình giữ chỗ bằng cách sử dụng dấu gạch dưới `_` cho tất cả các chữ cái trong tuBiAn. Ví dụ: nếu từ bí mật là "duahau" có 6 chữ cái, thì chương trình sẽ hiển thị từ bí mật lúc bắt đầu như thế này `_ _ _ _ _ _`. Nếu chữ cái đoán đúng, thay thế chữ cái vào `_` ở đúng vị trí, ví dụ `_ _ a _ a _`. Bạn có thể sử dụng phương thức `count()` để xác định xem một chữ cái có trong một từ không. Ví dụ: người chơi đoán đúng chữ cái 'a', cacChuCaiDaCapNhat sẽ là `['a']`. `cacChuCaiDaCapNhat.count ('a') sẽ trả về 1 (tìm thấy một chữ cái 'a' trong danh sách). Nếu không tìm thấy, phương thức `count()` sẽ trả về 0.
10. Dòng 22: chúng ta sẽ mở rộng hàm in_tienTrien để cho người chơi biết còn bao nhiêu cơ hội. Ngoài ra, nếu người dùng nhập sai một chữ cái, ví dụ 'z', chương trình sẽ chỉ ra rằng "Không tìm thấy chữ 'z'. chúng ta thêm một tham số `chuCaiCapNhat` vào hàm. Nếu doanDung là Đúng, nó sẽ in "Làm tốt lắm! Bạn còn <coHoi> lần đoán còn lại" (thay thế <coHoi> bằng một số), nếu doanDung là Sai, thì nên in "Không tìm thấy chữ '<chuCaiCapNhat>'! Bạn có <coHoi> lần đoán còn lại "
11. Dòng 24: chúng ta tạo một hàm mới kiemTra_capNhat(). Chúng ta cần đảm bảo rằng người chơi chỉ nên nhập một chữ cái duy nhất và nó phải là một bảng xếp hạng chữ cái. Sử dụng phương thức `isalpha()` để kiểm tra xem dự đoán có phải là chữ cái không. Sử dụng hàm `len()` để kiểm tra xem dự đoán chỉ là một chữ cái. Nếu người chơi đã nhập một chữ cái mà là chữ cái đã được nhập trước đó, hãy báo cho người chơi biết.
12. Dòng 26 & 28: Từ Dòng 1 đến nay, chúng ta đã xác định tất cả các câu lệnh và hàm. Điều đầu tiên chúng ta muốn in trên màn hình là in một số thông tin về trò chơi, ví dụ:
"Hãy đoán tên của một loại trái cây! Nhập "thoat" để thoát khỏi trò chơi"
"Bạn có 8 lần đoán"
"_ _ _ _ _ _" 

13. Dòng 30 & 31: Vòng lặp while có điều kiện: tuBiAn chưa được đoán và người dùng vẫn còn cơ hội. tuBiAn chưa được đoán có nghĩa là doanThanhCong = False; người dùng có cơ hội còn lại có nghĩa là biến coHoi > 0
14. Dòng 33: Yêu cầu người chơi nhập một chữ cái để đoán, giống như chúng ta đã làm trước đây
15. Dòng 35: Nếu người chơi muốn thoát khỏi trò chơi, có thể nhập 'thoát' thay vì một chữ cái đoán, chương trình sẽ dừng lại. Để dừng chương trình có nghĩa là thoát khỏi vòng lặp while bằng cách đặt doanThanhCong thành True và sử dụng câu lệnh `continue ()`
16. Dòng 37: Gọi hàm `kiemTra_capNhat()` để xác thực dự đoán của người chơi. Nếu dự đoán không hợp lệ, chúng ta sẽ khởi động lại vòng lặp while mà không làm giảm cơ hội của người chơi. Nếu dự đoán là hợp lệ, có vài điều chúng ta cần thực hiện:
    1. Giảm cơ hội đi một (giống như chúng ta đã làm trước đây)
    2. Theo dõi tất cả các chữ cái đã nhập bằng cách 'nối thêm' chữ đoán vào danh sách `cacChuCaiDaCapNhat`
    3. Xác định bao nhiêu lần chữ cái đoán được tìm thấy trong từ bí mật. chúng ta có thể sử dụng phương thức `Count()`. 0 có nghĩa là không tìm thấy. Ví dụ: 'duahau' là từ bí mật, người chới đoán 'a', count() sẽ trả về số đếm là 2


1. Line 1: Our secret word is always 'banana' and it is absolutely not an exciting game. To make the game more interesting, a secret word should be somehow random. For this, we will use the random module by adding the import statement `import random` to our program and let the secretWord be chosen randomly from the list of fruit words we provide with the `choice` function

2. Line 3: We create a variable fruitWords as a string of fruit names:     
fruitWords = 'apple avocado apricot banana cherry grape kiwi lemon lychee nectarine orange mango strawberry  pineapple  pear pomegranate  papaya  peach  tangerine watermelon'. This list is a string with all the fruit names seperated by space. 

3. Line 5: We need to convert the string of fruit names into a list of string using the `split()` function. For example `fruitWords = fruitWords.split(' ')`. The list of fruit names can be passed to the `choice()` function as argument.

4. Line 7: Use the `choice()` method from the ramdon module to select any word from the fruitWords list and assign to the variable secretWord

5. Line 8: `chances` were always 8 (6 letters of 'banana' + 2). The program should give the player the number of chances about the number of letters in the secret word plus 2. You can use the `len()` function here. 
6. Line 12: Previously, our program checks if the guessed letter is one of these 3 letters 'a', 'b' and 'n' because our secretWord is always 'banana'. Now it can be any word from the list described above, we will get rid of hasA, hasB and hasN variables. Instead we use a new variable inputLetters to keep all the letters entered by the player. At the beginning of the game, it is an empty list
7. Line 14 & 15: We create a new variable numberOfCorrectLetters to keep track of number of letters which the player has guessed correctly. If this number is equal the number of letters in the secretWord, user has successful guessed the secretWord
8. Line 17 & 18: No change to the variable isSuccess we defined in previous chapter
9. Line 20: The current print_word function only prints the place holder using underscore `_` for all the letters in the secretWord. For example, if the secrete word is "banana" with 6 letters,, the program will show the secret word at the beginnig like this `_ _ _ _ _ _`. If the guessing letter is correct, replaces the input letter with the `_` in the right position, for example `_ a _ a _ a`. You can use the method `cont()` to determine if a letter is in a word. For example, player guessed correct letter 'a', inputLetters will be `['a']`. `inputLetters.count('a') will return 1 (found one letter 'e' in the list). If not found, the count() method will return 0.
10. Line 22: We will extend the print_progess function to let the player know how many chances still remaining. Also if users enter a wrong letter, let's say 'z', the program should point out that "Letter 'z' not found". We add another parameter `guessedLetter` to the function. If isFound is True, it should print "Good Job! You have <chances> guesses left" (replace <chances> with a number), if isFound is False, it should print "Letter '<guessedLetter>' not found! You have <chances> guesses left"
11. Line 24: We create a new function validate_input(). We need to make sure that the player should enter only one single letter and it must be an alphabet charater. Use the method `isalpha()` to check if the guess is alphabet letter. Use `len()` function to check if the guess is only a single letter. If the player has entered a letter he/she entered previously, let her/him know. 
12. Line 26 & 28: From Line 1 till now, we have defined all veriables and functions. The first thing we want to print on the screen is to print some informations about the game, for example:
"Guess the word as name of a fruit! Enter "quit" to quit game". 
"You have 8 guesses"  
"_ _ _ _ _ _"

13. Line 30 & 31: While loop with condition: secretWord has not been guessed and user has remaining chances. secretWord has not been guessed means isSuccess = False; user has remaining chances means chances > 0 
14. Line 33: Request player to enter a letter to guess, like we did it previously
15. Line 35: If user wants to quit the game, he/she can enter 'quit' instead of a guess letter, the program should stop. To stop the program means to get out of the while loop by setting isSuccess to True and using `continue()` statement
16. Line 37: Call function `validate_input()` to validate the player's guess. If the guess is not valid, we restart the while loop without reducing the player's chances (user doesn't lose a life). If the guess is valid, there are few things we need to perform:
    1. Reduce the chances by one (same as we did previously)
    2. Keep track of all entered letters by `append` the guess into the `inputLetters` list
    3. Determine how many time the guessed letter found in the secret word. We can use the method `count()`. Zero means not found. For example, 'banana' is the secretWord, guess is 'a', then the count is 3
    4. Cập nhật số lượng chữ được đoán đúng. Ví dụ: 'duahau' là tuBiAn, người chơi đã đoán trước đó 'a', giá trị của biến soChuCaiChinhXac là 2 (2 chữ cái 'a' trong 'duahau'). Giả sử người dùng vừa đoán một chữ cái chính xác khác 'u', giá trị mới của biến soChuCaiChinhXac phải là 2 + 1 = 3.
17. Dòng 49: Nếu soChuCaiChinhXac bằng số lượng chữ cái trong tuBiAn, người dùng đã đoán thành công. Chương trình sẽ dừng bằng cách đặt doanThanhCong thành True và in chúc mừng trên màn hình


Bây giờ đến lượt bạn kết thúc trò chơi của bạn. Bạn có thể tìm giải pháp bằng cách nhấp vào "Hiển thị Câu trả lời".

<p_c size=L>


<p_a_c>
<s_c>
#Đầu tiên nhập mô-đun ngẫu nhiên
import random 

#Tạo một biến tenCacTraiCay dưới dạng chuỗi tên trái cây
tenCacTraiCay = '''buoi chanhday chuoi chomchom mangcau 
mangcut mittonu dautay duahau 
saurieng thanhlong vusua duale 
duaxiem '''

tenCacTraiCay = 'duahau'

#Chuyển đổi chuỗi tenCacTraiCay thành một danh sách
tenCacTraiCay = tenCacTraiCay.split(' ') 

#Chọn ngẫu nhiên một từ bí mật từ danh sách "tenCacTraiCay"
tuBiAn = random.choice(tenCacTraiCay)		
  
#Tạo biến coHoi để giữ số lượng dự đoán còn lại
#Nó bắt đầu với số lượng chữ cái trong từ tuBiAn + 2
coHoi = len(tuBiAn) + 2

#Giữ tất cả các chữ cái đã được cập nhật
cacChuCaiDaCapNhat = []

#Số chữ đoán đúng.
#Nếu số này bằng với số chữ cái trong từ bí mật, đoán đã thành công
soChuCaiChinhXac = 0

#Biến doanThanhCong
#Khi bắt đầu doanThanhCong là False, được đặt thành True nếu đoán đúng
doanThanhCong = False

#Hàm in chữ
def in_chu():
    for chuCai in tuBiAn:
        if cacChuCaiDaCapNhat.count(chuCai) > 0:
            print(chuCai, end = ' ')
        else:
            print('_', end = ' ')  
    print()  

#Hàm in sự tiến triển                            
def in_tienTrien(chuCaiCapNhat, doanDung):
    if doanDung:
        print('Làm tốt lắm! Bạn còn {0} lần đoán còn lại'.format(coHoi))
    else :
        print("Không tìm thấy chữ '{0}'! Bạn có {1} lần đoán còn lại".format(chuCaiCapNhat, coHoi))    

#Hàm kiểm tra từ cập nhật 
def kiemTra_capNhat(chuCaiCapNhat):
    isValid = True
    if not chuCaiCapNhat.isalpha(): 
        print('Chỉ nhập chữ cái')
        isValid = False
    elif len(chuCaiCapNhat) > 1: 
        print('Chỉ nhập một chư cái')
        isValid = False
    elif chuCaiCapNhat in cacChuCaiDaCapNhat:
        print('Bạn đã đoán chữ cái này rồi')
        isValid = False
    return isValid

#In giới thiệu trò chơi
print('Hãy đoán tên của một loại trái cây! Nhập "thoat" để thoát khỏi trò chơi')
print('Bạn có {0} lần đoán'.format(coHoi))

#In tuBiAn với dấu '_' 
in_chu()

#Vòng lập while
#Lặp lại khi co hội vẫn còn và tuBiAn chưa được đoán đúng
while (coHoi > 0 and not doanThanhCong):
    # yêu cầu người chơi nhập một chữ cái để đoán
    capNhat = input('Hãy nhập một chữ cái để đoán:')
    # kết thúc trò chơi nếu người chơi nhập 'thoat'
    if capNhat == 'thoat':
        print('Tạm biệt!')
        doanThanhCong = True
        continue
    # kiểm tra nhập dữ liệu của người chơi. Nếu không hợp lệ, tiếp tục yêu cầu nhập lại
    ketQuaKiemTra = kiemTra_capNhat(capNhat)
    # nếu dữ liệu hợp lệ, tiếp tục mà không trừ đi cơ hội
    if not ketQuaKiemTra:
        continue
    # nếu dữ liệu hợp lệ
    else:
        # giảm cơ hội đi 1 lần
        coHoi = coHoi - 1
        # lưu trữ lại những chữ cái người chơi đã cập nhật
        cacChuCaiDaCapNhat.append(capNhat)
        # xác định bao nhiêu lần chữ đoán được tìm thấy trong từ bí mật. 0 có nghĩa là không tìm thấy   
        soLanTimDuoc = tuBiAn.count(capNhat)
        # cập nhật số lượng chữ tìm được tìm thấy
        soChuCaiChinhXac = soChuCaiChinhXac + soLanTimDuoc
    
    # Đoán thành công nếu soChuCaiChinhXac bằng số lượng chữ cái trong từ bí mật
    if soChuCaiChinhXac == len(tuBiAn):
        doanThanhCong = True
        in_chu()
        print('Xin chúc mừng! Bạn đã thắng!')
        # trò chơi kết thúc
    else:
        #nếu chưa đoán thành công, tiến trình cho lần kế tiếp
        in_tienTrien(capNhat, soLanTimDuoc > 0)     
        in_chu()   
        print()  

#Nếu người chơi đã sử dụng tất cả các cơ hội của mình và chưa đoán thành công, in thông tin và kết thúc
if doanThanhCong == False and coHoi == 0:
    print('Tôi thắng. Hãy thử lại')        
	print('Từ bí ẩn là {0}'.format(tuBiAn)) 
</s_c>
</p_a_c>
</p_c>





