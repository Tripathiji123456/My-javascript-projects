// ==========================================
//       STUDENT MARKSHEET SYSTEM
// ==========================================

// Student Details

let studentName = "Tripathi Tejaswita";
let rollNumber = 16;
let course = "B.Tech CSE AI";

// Subject Marks

let math = 95;
let science = 90;
let english = 88;
let computer = 99;
let hindi = 92;

// Calculations

let total = math + science + english + computer + hindi;

let average = total / 5;

let percentage = (total / 500) * 100;

// Display Output

console.log("==========================================");
console.log("         STUDENT MARKSHEET");
console.log("==========================================");

console.log("Student Name :", studentName);
console.log("Roll Number  :", rollNumber);
console.log("Course       :", course);

console.log("------------------------------------------");

console.log("Math         :", math);
console.log("Science      :", science);
console.log("English      :", english);
console.log("Computer     :", computer);
console.log("Hindi        :", hindi);

console.log("------------------------------------------");

console.log("Total Marks  :", total);
console.log("Average      :", average);
console.log("Percentage   :", percentage + "%");

console.log("==========================================");

