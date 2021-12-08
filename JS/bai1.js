/**
 * Khối 1: input 
 * num1
 * num2
 * num3
 * 
 * Khối 2:
 * B1: lấy giá trị từ form
 * B2: xác định điều kiện và lập công thức
 * 
 * Khối 3: output
 * xuất ra 3 số theo thứ tự tăng dần
 * 
 */

function sapXep3So() {
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);
    var c = Number(document.getElementById("num3").value);
    if(a>b && a>c && b>c) {
        document.getElementById("txt__result").innerHTML = "c < b < a";
    } else if(a>b && a>c && c>b) {
        document.getElementById("txt__result").innerHTML = "b < c < a";
    } else if(b>a && b>c && a>c) {
        document.getElementById("txt__result").innerHTML = "c < a < b";
    } else if(b>a && b>c && c>a) {
        document.getElementById("txt__result").innerHTML = "a < c < b";
    } else if(c>a && c>b && a>b) {
        document.getElementById("txt__result").innerHTML = "b < a < c";
    } else if(c>a && c>b && b>a) {
        document.getElementById("txt__result").innerHTML = "a < b < c";
    } else if(a>b && a>c && b == c) {
        document.getElementById("txt__result").innerHTML = "c = b < a";
    } else if(a<b && a<c && b == c) {
        document.getElementById("txt__result").innerHTML = "a < b = c";
    } else if(b>a && b>c && c == a) {
        document.getElementById("txt__result").innerHTML = "c = a < b";
    } else if(b<a && b<c && c == a) {
        document.getElementById("txt__result").innerHTML = "b < c = a";
    } else if(c>a && c>b && b == a) {
        document.getElementById("txt__result").innerHTML = "b = a < c";
    } else if(c<a && c<b && b == a) {
        document.getElementById("txt__result").innerHTML = "c < b = a";
    } else {
        document.getElementById("txt__result").innerHTML = "c = b = a";
    }
}

function bai1() {
    document.getElementById("lesson__1").style.display = "block";
    document.getElementById("lesson__2").style.display = "none";
    document.getElementById("lesson__3").style.display = "none";
    document.getElementById("lesson__4").style.display = "none";
    document.getElementById("lesson__5").style.display = "none";
    document.getElementById("lesson__6").style.display = "none";
    document.getElementById("lesson__7").style.display = "none";
    document.getElementById("lesson__8").style.display = "none";
}
