function bai5() {
    document.getElementById("lesson__1").style.display = "none";
    document.getElementById("lesson__2").style.display = "none";
    document.getElementById("lesson__3").style.display = "none";
    document.getElementById("lesson__4").style.display = "none";
    document.getElementById("lesson__5").style.display = "block";
    document.getElementById("lesson__6").style.display = "none";
    document.getElementById("lesson__7").style.display = "none";
    document.getElementById("lesson__8").style.display = "none";
}

/**
 * Khối 1: input 
 * ngay
 * thang
 * nam
 * 
 * Khối 2:
 * B1: lấy giá trị từ form
 * B2: xác định điều kiện và lập công thức
 * 
 * Khối 3: output
 * xuất ra kết quả ngày tháng năm
 * 
 */

function ngayHomQua() {
    var ngay = Number(document.getElementById("ngay").value);
    var thang = Number(document.getElementById("thang").value);
    var nam = Number(document.getElementById("nam").value);

    if(ngay < 1) {
        document.getElementById("txt__ngayThangNam").innerHTML = "Ngày này không tồn tại";
    } else if(thang == 1 && ngay == 1) {
        ngay = 31;
        thang = 12;
        nam -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 1 && ngay > 1 && ngay <= 31) {
        ngay -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 2 && ngay == 1) {
        ngay = 31;
        thang -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 2 && ngay > 1 && ngay <= 28) {
        ngay -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 3 && ngay == 1) {
        ngay = 28;
        thang -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 3 && ngay > 1 && ngay <= 31) {
        ngay -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 4 && ngay == 1) {
        ngay = 31;
        thang -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 4 && ngay > 1 && ngay <= 30) {
        ngay -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 5 && ngay == 1) {
        ngay = 30;
        thang -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 5 && ngay > 1 && ngay <= 31) {
        ngay -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 6 && ngay == 1) {
        ngay = 31;
        thang -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 6 && ngay > 1 && ngay <= 30) {
        ngay -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 7 && ngay == 1) {
        ngay = 30;
        thang -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 7 && ngay > 1 && ngay <= 31) {
        ngay -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 8 && ngay == 1) {
        ngay = 31;
        thang -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 8 && ngay > 1 && ngay <= 31) {
        ngay -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 9 && ngay == 1) {
        ngay = 31;
        thang -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 9 && ngay > 1 && ngay <= 30) {
        ngay -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 10 && ngay == 1) {
        ngay = 30;
        thang -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 10 && ngay > 1 && ngay <= 31) {
        ngay -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 11 && ngay == 1) {
        ngay = 31;
        thang -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 11 && ngay > 1 && ngay <= 30) {
        ngay -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 12 && ngay == 1) {
        ngay = 30;
        thang -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 12 && ngay > 1 && ngay <= 31) {
        ngay -= 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else {
        document.getElementById("txt__ngayThangNam").innerHTML = "Ngày này không tồn tại";
    }
}

function ngayMai() {
    var ngay = Number(document.getElementById("ngay").value);
    var thang = Number(document.getElementById("thang").value);
    var nam = Number(document.getElementById("nam").value);

    if(ngay < 1) {
        document.getElementById("txt__ngayThangNam").innerHTML = "Ngày này không tồn tại";
    } else if(thang == 1 && ngay == 31) {
        ngay = 1;
        thang += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 1 && ngay >= 1 && ngay < 31) {
        ngay += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 2 && ngay == 28) {
        ngay = 1;
        thang += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 2 && ngay >= 1 && ngay < 28) {
        ngay += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 3 && ngay == 31) {
        ngay = 1;
        thang += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 3 && ngay >= 1 && ngay < 31) {
        ngay += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 4 && ngay == 30) {
        ngay = 1;
        thang += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 4 && ngay >= 1 && ngay < 30) {
        ngay += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 5 && ngay == 31) {
        ngay = 1;
        thang += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 5 && ngay >= 1 && ngay < 31) {
        ngay += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 6 && ngay == 30) {
        ngay = 1;
        thang += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 6 && ngay >= 1 && ngay < 30) {
        ngay += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 7 && ngay == 31) {
        ngay = 1;
        thang += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 7 && ngay >= 1 && ngay < 31) {
        ngay += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 8 && ngay == 31) {
        ngay = 1;
        thang += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 8 && ngay >= 1 && ngay < 31) {
        ngay += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 9 && ngay == 30) {
        ngay = 1;
        thang += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 9 && ngay >= 1 && ngay < 30) {
        ngay += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 10 && ngay == 31) {
        ngay = 1;
        thang += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 10 && ngay >= 1 && ngay < 31) {
        ngay += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 11 && ngay == 30) {
        ngay = 1;
        thang += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 11 && ngay >= 1 && ngay < 30) {
        ngay += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 12 && ngay == 31) {
        ngay = 1;
        thang = 1;
        nam += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else if(thang == 12 && ngay >= 1 && ngay < 31) {
        ngay += 1;
        document.getElementById("txt__ngayThangNam").innerHTML = ngay + "/" + thang + "/" + nam;
    } else {
        document.getElementById("txt__ngayThangNam").innerHTML = "Ngày này không tồn tại";
    }
}