function bai3() {
    document.getElementById("lesson__1").style.display = "none";
    document.getElementById("lesson__2").style.display = "none";
    document.getElementById("lesson__3").style.display = "block";
    document.getElementById("lesson__4").style.display = "none";
    document.getElementById("lesson__5").style.display = "none";
    document.getElementById("lesson__6").style.display = "none";
    document.getElementById("lesson__7").style.display = "none";
    document.getElementById("lesson__8").style.display = "none";
}

/**
 * Khối 1: input 
 * soThu1
 * soThu2
 * soThu3
 * 
 * Khối 2: 
 * B1: lấy giá trị từ form
 * B2: xác định điều kiện và lập công thức
 * 
 * Khối 3: output
 * xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn
 * 
 */

function timChanLe() {
    var soThu1 = Number(document.getElementById("soThu1").value);
    var soThu2 = Number(document.getElementById("soThu2").value);
    var soThu3 = Number(document.getElementById("soThu3").value);
    var soChan = 0;
    if(soThu1%2 == 0 && soThu2%2 == 0 && soThu3%2 == 0) {
        soChan += 3;
    } else if(soThu1%2 != 0 && soThu2%2 == 0 && soThu3%2 == 0) {
        soChan += 2;
    } else if(soThu1%2 == 0 && soThu2%2 != 0 && soThu3%2 == 0) {
        soChan += 2;
    } else if(soThu1%2 == 0 && soThu2%2 == 0 && soThu3%2 != 0) {
        soChan += 2;
    } else if(soThu1%2 != 0 && soThu2%2 != 0 && soThu3%2 == 0) {
        soChan += 1;
    } else if(soThu1%2 == 0 && soThu2%2 != 0 && soThu3%2 != 0) {
        soChan += 1;
    } else if(soThu1%2 != 0 && soThu2%2 == 0 && soThu3%2 != 0) {
        soChan += 1;
    } else {
        soChan += 0;
    }

    var soLe = 3 - soChan;
    document.getElementById("txt__chanLe").innerHTML = "Có " + soChan + " số chẵn " + " và " + soLe + " số lẻ.";
}
