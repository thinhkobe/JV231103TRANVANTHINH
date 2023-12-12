/**
 * hàm đảo ngược chuỗi
 */
function reverseString() {
  let inputElement = document.getElementById("inputString");
  let inputValue = inputElement.value;

  // Sử dụng split để chia chuỗi thành mảng các từ
  let wordsArray = inputValue.split(" ");

  // Đảo ngược mảng từ
  let reversedWordsArray = wordsArray.map((word) =>
    word.split("").reverse().join("")
  );

  // Kết hợp các từ đã đảo ngược và giữ lại khoảng trắng
  let reversedString = reversedWordsArray.join(" ");
  console.log(reversedString);
  //trả về ô output hiển thị ra màn hình
  document.getElementById("output").innerText =
    "Chuỗi đã đảo ngược: " + reversedString;
}

const inputBtn = document.querySelector("#inputBtn");
//bắt sự kiện click inputbtn
inputBtn.addEventListener("click", (e) => {
  reverseString();
});
