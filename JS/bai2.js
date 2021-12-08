/**
 * Khối 1: input 
 * bo
 * me
 * anhTrai
 * emGai
 * 
 * Khối 2:
 * B1: lấy giá trị từ form
 * B2: xác định điều kiện và lập công thức
 * 
 * Khối 3: output
 * gửi lời chào
 */

function sendTo() {
    var choose = document.getElementById("yourChoose").value;
    if(choose == "B") {
        document.getElementById("txt__sendTo").innerHTML = "Xin chào bố!";
    } else if(choose == "M") {
        document.getElementById("txt__sendTo").innerHTML = "Xin chào mẹ!";
    } else if(choose == "A") {
        document.getElementById("txt__sendTo").innerHTML = "Xin chào anh trai!";
    } else if(choose == "E") {
        document.getElementById("txt__sendTo").innerHTML = "Xin chào em gái!";
    } else {
        document.getElementById("txt__sendTo").innerHTML = "Bạn ăn cắp cái máy này phải không?";
    }
}

function bai2() {
    document.getElementById("lesson__1").style.display = "none";
    document.getElementById("lesson__2").style.display = "block";
    document.getElementById("lesson__3").style.display = "none";
    document.getElementById("lesson__4").style.display = "none";
    document.getElementById("lesson__5").style.display = "none";
    document.getElementById("lesson__6").style.display = "none";
    document.getElementById("lesson__7").style.display = "none";
    document.getElementById("lesson__8").style.display = "none";
}