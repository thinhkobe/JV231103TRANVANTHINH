/**
 * hàm xóa số của chuỗi nhập vào
 */
function removeDigits() {
  let inputElement = document.getElementById("inputString");
  let inputValue = inputElement.value;

  // Sử dụng biểu thức chính quy để xóa ký tự số
  let newString = inputValue.replace(/\d/g, "");

  document.getElementById("output").innerText = "Chuỗi đã xóa số: " + newString;
}
//Lấy Element

const inputBtn = document.querySelector("#inputBtn");
//bắt sự kiện click button
inputBtn.addEventListener("click", (e) => {
  removeDigits();
});
