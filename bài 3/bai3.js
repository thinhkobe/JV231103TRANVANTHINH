function drawHollowHeart(rows, columns) {
  let heart = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns * 2 - 1; j++) {
      // Tính toán khoảng cách từ điểm hiện tại đến trục tâm
      let distance = Math.sqrt(
        Math.pow(i - rows + 1, 2) + Math.pow(j - columns + 1, 2)
      );

      // Kiểm tra nếu điểm đó thuộc biên của hình trái tim
      // hoặc thuộc nửa trên của hình trái tim
      if (distance < rows && (j <= columns || j >= columns * 2 - i - 2)) {
        // Nếu ở biên ngoài hoặc ở nửa trên, thì vẽ '*'
        if (
          i === rows - 1 ||
          j === 0 ||
          j === columns * 2 - 2 ||
          j === columns - i ||
          j === columns * 2 - 2 + i
        ) {
          heart += "*";
        } else {
          heart += " ";
        }
      } else {
        heart += " ";
      }
    }
    heart += "\n";
  }
  return heart;
}

// Số hàng và cột để vẽ hình trái tim
let numberOfRows = 6;
let numberOfColumns = 7;

// Lấy phần tử pre để hiển thị hình trái tim
let heartPatternElement = document.getElementById("heartPattern");

// Gán nội dung cho phần tử pre
heartPatternElement.textContent = drawHollowHeart(
  numberOfRows,
  numberOfColumns
);
