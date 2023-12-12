/**
 * Hàm tìm số lớn nhất
 * @param {*} inputString chuỗi số
 * @returns số lớn nhất
 */
function findLargestUniqueNumber(inputString) {
  // đổi chuỗi thành mảng
  let charArray = inputString.split("");
  // đảo ngược chuỗi
  charArray.sort((a, b) => b - a);
  console.log(charArray);
  let uniqueNumber = charArray[0];

  for (let i = 1; i < charArray.length; i++) {
    if (charArray[i] !== charArray[i - 1]) {
      uniqueNumber = charArray[i];
      break;
    }
  }
  return parseInt(uniqueNumber);
}
// bắt sự kiện click nut
const findBtn = document.querySelector("#findBtn");

findBtn.addEventListener("click", (e) => {
  findAndDisplayResult();
});

/**
 * hàm in ra số
 */
function findAndDisplayResult() {
  let inputElement = document.getElementById("numberInput");
  let inputValue = inputElement.value;
  // Kiểm tra nếu chuỗi nhập vào có 5 chữ số
  if (inputValue) {
    let result = findLargestUniqueNumber(inputValue);
    document.getElementById("output").innerText = "Kết quả: " + result;
  } else {
    document.getElementById("output").innerText =
      "Vui lòng nhập một chuỗi số có 5 chữ số.";
  }
}
