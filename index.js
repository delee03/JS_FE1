console.log("Tôi học javascript buổi đầu tiên");
var a = 10.3;
console.log(a);
console.log(typeof a);

var aLong = "Long đi học Javascript đầu tiên ";
console.log(b);
console.log(typeof b); //sting || number

// + , - * / % ++ --
//operator
//++
var a = 10;
var b = 5;

// const PI = 3.14;
// PI = 3.15;
// console.log(PI);
const PI = Math.PI;
console.log(PI);

console.error("Bị lỗi rồi ní ơi");
console.warn("Chỗ này không được thay đổi giá trị");

//a++; //a = a + 1;
// a += 1;
// console.log(a);

// ++a;
// console.log(a);

// // b--;
// b /= 2;
// console.log(b);

// 10 + 6  - 11 - 6
var tongSo = a++ + ++b - a - b; // 11 + 5 - 5 = 10
console.log(tongSo);

// assignment
var tuoiCuaPhat = 18;
var tuoiCuaBao = 19;
var tuoiCuaHuy = tuoiCuaPhat; //camel case

console.log(tuoiCuaPhat); //18
console.log(tuoiCuaBao); //19
console.log(tuoiCuaHuy); //18

tuoiCuaPhat = tuoiCuaBao; //19;
tuoiCuaBao = 15; //15

console.log("Tuổi của Phát", tuoiCuaPhat); //19
console.log("Tuổi của Bảo", tuoiCuaBao); //15
console.log("Tuổi của Huy", tuoiCuaHuy); //18
// a Long tuổi = Phat đi học lập trình website
console.log("a Long tuổi " + aLong + "Có tuổi là: " + tuoiCuaPhat);
//template string 1 phương thức es6;
console.log(`a Long tuổi ${aLong} có tuổi là ${tuoiCuaPhat}`);

//tổng kí số của 1 số nguyên 567;
//3 khối : input  = 567 |  |output tổng 5 + 6 + 7 = 18;
var soN = 567;
var soHangTram = Math.floor(soN / 100); //5
var soHangChuc = Math.floor((soN % 100) / 10);
var soHangDonVi = soN % 10;
console.log(soHangTram);
console.log(soHangChuc);
console.log(soHangDonVi);

console.log(soHangTram + soHangChuc + soHangDonVi);

// viết 1 chương trình tính lương nhân viên dựa trên 26 ngày và mỗi ngày lương là 150000 đồng

var ngayLam = 26;
var tienLuong = 150000;
var tongTien = ngayLam * tienLuong;
console.log(
    tongTien.toLocaleString("vi-VN", { style: "currency", currency: "VND" })
);

//so sánh 3 số tìm số lớn nhất a , b , c , d , e, f ;
var soLonNhat = Math.max(10, 3, 4, 100, -100, 30, 50);
console.log(soLonNhat);
