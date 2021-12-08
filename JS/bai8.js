function bai8() {
    document.getElementById("lesson__1").style.display = "none";
    document.getElementById("lesson__2").style.display = "none";
    document.getElementById("lesson__3").style.display = "none";
    document.getElementById("lesson__4").style.display = "none";
    document.getElementById("lesson__5").style.display = "none";
    document.getElementById("lesson__6").style.display = "none";
    document.getElementById("lesson__7").style.display = "none";
    document.getElementById("lesson__8").style.display = "block";
}

/**
 * Khối 1: input 
 * name1
 * name2
 * name3
 * x1, x2, x3, x4
 * y1, y2, y3, y4
 * 
 * 
 * Khối 2:
 * B1: lấy giá trị từ form
 * B2: xác định điều kiện và lập công thức
 * d = sqrt(Math.pow(x4-x, 2) + Math.pow(y4-y, 2))
 * 
 * Khối 3: output
 * xuất ra kết quả sinh viên xa trường nhất
 * 
 */
function timSinhVien() {
    var name1 = document.getElementById("student1__name").value;
    var name2 = document.getElementById("student2__name").value;
    var name3 = document.getElementById("student3__name").value;
    var x1 = document.getElementById("student1__x").value;
    var y1 = document.getElementById("student1__y").value;
    var x2 = document.getElementById("student2__x").value;
    var y2 = document.getElementById("student2__y").value;
    var x3 = document.getElementById("student3__x").value;
    var y3 = document.getElementById("student3__y").value;
    var x4 = document.getElementById("school__x").value;
    var y4 = document.getElementById("school__y").value;
    var d1 = Math.sqrt(Math.pow(x4-x1, 2) + Math.pow(y4-y1, 2));
    var d2 = Math.sqrt(Math.pow(x4-x2, 2) + Math.pow(y4-y2, 2));
    var d3 = Math.sqrt(Math.pow(x4-x3, 2) + Math.pow(y4-y3, 2));

    if(d1 > d2 && d1 > d3) {
        document.getElementById("txt__sinhVien").innerHTML = "Sinh viên xa trường nhất là: " + name1;
    } else if (d2 > d1 && d2 > d3) {
        document.getElementById("txt__sinhVien").innerHTML = "Sinh viên xa trường nhất là: " + name2;
    } else if (d3 > d1 && d3 > d2) {
        document.getElementById("txt__sinhVien").innerHTML = "Sinh viên xa trường nhất là: " + name3;
    } else {
        alert("Vui lòng nhập đầy đủ các trường dữ liệu");
    }
}

