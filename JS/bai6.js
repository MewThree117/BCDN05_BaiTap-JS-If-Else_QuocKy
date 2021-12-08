function bai6() {
    document.getElementById("lesson__1").style.display = "none";
    document.getElementById("lesson__2").style.display = "none";
    document.getElementById("lesson__3").style.display = "none";
    document.getElementById("lesson__4").style.display = "none";
    document.getElementById("lesson__5").style.display = "none";
    document.getElementById("lesson__6").style.display = "block";
    document.getElementById("lesson__7").style.display = "none";
    document.getElementById("lesson__8").style.display = "none";
}

/**
 * Khối 1: input 
 * month
 * year
 * 
 * Khối 2:
 * B1: lấy giá trị từ form
 * B2: xác định điều kiện và lập công thức
 * 
 * Khối 3: output
 * xuất ra kết quả tháng năm
 * 
 */

function tinhNgay() {
    var thang = Number(document.getElementById("month").value);
    var nam = Number(document.getElementById("year").value);

    if(thang == 1) {
        document.getElementById("txt__ThangNam").innerHTML = "Tháng 1 năm " + nam + " có 31 ngày."
    } else if(thang == 2 && nam%4 == 0 && nam%100 != 0 || thang == 2 && nam%400 == 0) {
        document.getElementById("txt__ThangNam").innerHTML = "Tháng " +thang+ " năm " + nam + " có 29 ngày."
    } else if(thang == 2) {
        document.getElementById("txt__ThangNam").innerHTML = "Tháng " +thang+ " năm " + nam + " có 28 ngày."
    } else if(thang == 3) {
        document.getElementById("txt__ThangNam").innerHTML = "Tháng " +thang+ " năm " + nam + " có 31 ngày."
    } else if(thang == 4) {
        document.getElementById("txt__ThangNam").innerHTML = "Tháng " +thang+ " năm " + nam + " có 30 ngày."
    } else if(thang == 5) {
        document.getElementById("txt__ThangNam").innerHTML = "Tháng " +thang+ " năm " + nam + " có 31 ngày."
    } else if(thang == 6) {
        document.getElementById("txt__ThangNam").innerHTML = "Tháng " +thang+ " năm " + nam + " có 30 ngày."
    } else if(thang == 7) {
        document.getElementById("txt__ThangNam").innerHTML = "Tháng " +thang+ " năm " + nam + " có 31 ngày."
    } else if(thang == 8) {
        document.getElementById("txt__ThangNam").innerHTML = "Tháng " +thang+ " năm " + nam + " có 31 ngày."
    } else if(thang == 9) {
        document.getElementById("txt__ThangNam").innerHTML = "Tháng " +thang+ " năm " + nam + " có 30 ngày."
    } else if(thang == 10) {
        document.getElementById("txt__ThangNam").innerHTML = "Tháng " +thang+ " năm " + nam + " có 31 ngày."
    } else if(thang == 11) {
        document.getElementById("txt__ThangNam").innerHTML = "Tháng " +thang+ " năm " + nam + " có 30 ngày."
    } else if(thang == 12) {
        document.getElementById("txt__ThangNam").innerHTML = "Tháng " +thang+ " năm " + nam + " có 31 ngày."
    } else {
        document.getElementById("txt__ThangNam").innerHTML = "Không có tháng này trong năm."
    }
}