function bai7() {
    document.getElementById("lesson__1").style.display = "none";
    document.getElementById("lesson__2").style.display = "none";
    document.getElementById("lesson__3").style.display = "none";
    document.getElementById("lesson__4").style.display = "none";
    document.getElementById("lesson__5").style.display = "none";
    document.getElementById("lesson__6").style.display = "none";
    document.getElementById("lesson__7").style.display = "block";
    document.getElementById("lesson__8").style.display = "none";
}

/**
 * Khối 1: input
 * number(số nguyên dương có 3 chữ số)
 * 
 * Khối 2:
 * B1: lấy giá trị từ form
 * hund (trăm)
 * ten (chục)
 * unit (đơn vị)
 * B2: lấy hàng trăm
 * lấy phần nguyên trong phép chia num/100
 * hund = Math.floor(num/100);
 * phanDu = num%100
 * B3: lấy hàng chục và đơn vị
 * ten = Math.floor(phanDu/10)
 * unit = phanDu%10
 * 
 * Khối 3: output
 * đọc số
 * 
 */

function docSo() {
    var num = Number(document.getElementById("soNhapVao").value);
    var hund = Math.floor(num/100);
    var phanDu = num%100;
    var ten = Math.floor(phanDu/10);
    var unit = phanDu%10;
    var docHangTram = 0;
    var docHangChuc = 0;
    var docHangDonVi = 0;
    console.log(num.toString().length);
    if(num.toString().length > 3 || num < 0) {
        alert("Vui lòng nhập vào một số nguyên dương có 3 chữ số.");
        return 0;
    } else {
        switch(hund) {
            case 0:
                docHangTram = "";
                break;
            case 1:
                docHangTram = "Một trăm";
                break;
            case 2:
                docHangTram = "Hai trăm";
                break;
            case 3:
                docHangTram = "Ba trăm";
                break;
            case 4:
                docHangTram = "Bốn trăm";
                break;
            case 5:
                docHangTram = "Năm trăm";
                break;
            case 6:
                docHangTram = "Sáu trăm";
                break;
            case 7:
                docHangTram = "Bảy trăm";
                break;
            case 8:
                docHangTram = "Tám trăm";
                break;
            case 9:
                docHangTram = "Chín trăm";
                break;
            default:
        }
        switch(ten) {
            case 0:
                if(hund == 0 || ten == 0 && unit == 0) {
                    docHangChuc = "";
                } else {
                    docHangChuc = "lẻ"
                }
                break;
            case 1:
                if(hund == 0) {
                    docHangChuc = "Mười";
                } else {
                    docHangChuc = "mười";
                }
                break;
            case 2:
                if(hund == 0) {
                    docHangChuc = "Hai mươi";
                } else {
                    docHangChuc = "hai mươi";
                }
                break;
            case 3:
                if(hund == 0) {
                    docHangChuc = "Ba mươi";
                } else {
                    docHangChuc = "ba mươi";
                }
                break;
            case 4:
                if(hund == 0) {
                    docHangChuc = "Bốn mươi";
                } else {
                    docHangChuc = "bốn mươi";
                }
                break;
            case 5:
                if(hund == 0) {
                    docHangChuc = "Năm mươi";
                } else {
                    docHangChuc = "năm mươi";
                }
                break;
            case 6:
                if(hund == 0) {
                    docHangChuc = "Sáu mươi";
                } else {
                    docHangChuc = "sáu mươi";
                }
                break;
            case 7:
                if(hund == 0) {
                    docHangChuc = "Bảy mươi";
                } else {
                    docHangChuc = "bảy mươi";
                }
                break;
            case 8:
                if(hund == 0) {
                    docHangChuc = "Tám mươi";
                } else {
                    docHangChuc = "tám mươi";
                }
                break;
            case 9:
                if(hund == 0) {
                    docHangChuc = "Chín mươi";
                } else {
                    docHangChuc = "chín mươi";
                }
                break;
            default:
        }
        switch(unit) {
            case 0:
                if(hund == 0 && ten == 0) {
                    docHangDonVi = "Không";
                } else {
                    docHangDonVi = "";
                }
                break;
            case 1:
                if(hund == 0 && ten == 0) {
                    docHangDonVi = "Một";
                } else if(ten == 0 || ten == 1) {
                    docHangDonVi = "một";
                } else {
                    docHangDonVi = "mốt";
                }
                break;
            case 2:
                if(hund == 0 && ten == 0) {
                    docHangDonVi = "Hai";
                } else {
                    docHangDonVi = "hai";
                }
                break;
            case 3:
                if(hund == 0 && ten == 0) {
                    docHangDonVi = "Ba";
                } else {
                    docHangDonVi = "ba";
                }
                break;
            case 4:
                if(hund == 0 && ten == 0) {
                    docHangDonVi = "Bốn";
                } else {
                    docHangDonVi = "bốn";
                }
                break;
            case 5:
                if(hund == 0 && ten == 0) {
                    docHangDonVi = "Năm";
                } else {
                    docHangDonVi = "lăm";
                }
                break;
            case 6:
                if(hund == 0 && ten == 0) {
                    docHangDonVi = "Sáu";
                } else {
                    docHangDonVi = "sáu";
                }
                break;
            case 7:
                if(hund == 0 && ten == 0) {
                    docHangDonVi = "Bảy";
                } else {
                    docHangDonVi = "bảy";
                }
                break;
            case 8:
                if(hund == 0 && ten == 0) {
                    docHangDonVi = "Tám";
                } else {
                    docHangDonVi = "tám";
                }
                break;
            case 9:
                if(hund == 0 && ten == 0) {
                    docHangDonVi = "Chín";
                } else {
                    docHangDonVi = "chín";
                }
                break;
            default:
        }
        document.getElementById("txt__docSo").innerHTML = docHangTram + " " + docHangChuc + " " + docHangDonVi;
    }
  }