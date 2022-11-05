const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((e) => {
    e.onclick = () => {
        if (e.id == 'clear') {
            display.innerText = '';
        } else if (e.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != '' && e.id == 'equal') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == '' && e.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += e.id;
        }
    }
})
// Giải thích:
// Hàm forEach nhận vào là 1 element (e)
// Và thực hiện hành động click (nhấn):
// Nếu nhấn nút xóa (clear) đồng nghĩa với (e.id == 'clear'), thì giá trị tại ô display sẽ rỗng (không có gì)
// Nếu nhấn nút quay lại (backspace) đồng nghĩa với (e.id == 'backspoace'), 
//      thì giá trị tại ô display sẽ bị chuyển kiểu dữ kiệu thành chuỗi và độ dài của chuỗi này sẽ giảm đi 1
// Nếu ô display đã có dữ liệu và nhấn nút bằng (equal) đồng nghĩa với (e.id == 'equal'),
//      thì giá trị trong ô sẽ được gán vào hàm eval() để thực thi phép tính đó.
// Nếu ô display rỗng và nhấn nút bằng (equal), thì giá trị trong ô sẽ bị gán là 'Empty!' (lỗi) 
//      hiển thị trong vòng 2s rồi trở về ô display rỗng.
// Còn nếu ô display đã có dữ liệu nhấn những nút còn lại như 
//      gồm các nút number và operator thì sẽ bằng giá trị trên màn hình + với thao tác tiếp theo



const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}
