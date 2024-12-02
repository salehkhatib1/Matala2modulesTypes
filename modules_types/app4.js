const arr = [
  "./text/file1.txt",
  "./text/file2.txt",
  "./text/file3.txt",
  "./text/file4.txt",
  "./text/file5.txt",
  "./text/file6.txt",
  "./text/file7.txt",
  "./text/file8.txt",
  "./text/file9.txt",
  "./text/file10.txt",
];
const fs = require("fs");

for (let i = 0; i < arr.length; i++) {
  try {
    const dataAll = fs.readFileSync(arr[i], "utf-8");
    const arrOfLines = [...dataAll.split("\n")];
    for (let j = 0; j < arrOfLines.length && j <= i; j++) {
      try {
        fs.appendFileSync("./text/example.txt", `${arrOfLines[j]}\n`);
      } catch (err) {
        console.error(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
}
