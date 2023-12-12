/**
 * hàm kiểm tra số đó có phải số nguyên không
 * @param {*} number số
 * @returns  số nguyên
 */
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Hàm tổng các số nguyên
 * @param {*} inputString chuỗi số nguyên
 * @returns tổng số nguyên
 */
function calculatePrimeSum(inputString) {
  let numbers = inputString.split("").map(Number);
  let primeSum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      primeSum += numbers[i];
    }
  }

  return primeSum;
}

/**
 * hàm hiện thị số nguyên ra ô output
 */
function calculateAndDisplayResult() {
  let inputElement = document.getElementById("numberInput");
  let inputValue = inputElement.value;

  // Kiểm tra nếu chuỗi nhập vào chỉ chứa các chữ số
  if (inputValue) {
    let result = calculatePrimeSum(inputValue);
    document.getElementById("output").innerText =
      "Tổng số nguyên tố: " + result;
  } else {
    document.getElementById("output").innerText =
      "Vui lòng nhập một chuỗi số nguyên.";
  }
}
// bắt sự kiện click nút
const findBtn = document.querySelector("#findBtn");

findBtn.addEventListener("click", (e) => {
  calculateAndDisplayResult();
});
