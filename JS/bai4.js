function bai4() {
    document.getElementById("lesson__1").style.display = "none";
    document.getElementById("lesson__2").style.display = "none";
    document.getElementById("lesson__3").style.display = "none";
    document.getElementById("lesson__4").style.display = "block";
    document.getElementById("lesson__5").style.display = "none";
    document.getElementById("lesson__6").style.display = "none";
    document.getElementById("lesson__7").style.display = "none";
    document.getElementById("lesson__8").style.display = "none";
}

/**
 * Khối 1: input 
 * a
 * b
 * c
 * 
 * Khối 2:
 * B1: lấy giá trị từ form
 * B2: xác định điều kiện và lập công thức
 * 
 * Khối 3: output
 * Xuất ra đó tam giác gì?
 * 
 */

function doanHinh() {
    var a = Number(document.getElementById("canh1").value);
    var b = Number(document.getElementById("canh2").value);
    var c = Number(document.getElementById("canh3").value);

    if(a <= 0 || b <= 0 || c <= 0) {
        document.getElementById("txt__doanHinh").innerHTML = "Đây không phải là tam giác.";
    } else if(a == b && a != c || b == c && b != a || a == c && a != b) {
        document.getElementById("txt__doanHinh").innerHTML = "Đây là tam giác cân.";
    } else if(a == b && a == c) {
        document.getElementById("txt__doanHinh").innerHTML = "Đây là tam giác đều.";
    } else if(Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2) || 
    Math.pow(b, 2) == Math.pow(a, 2) + Math.pow(c, 2) || 
    Math.pow(c, 2) == Math.pow(b, 2) + Math.pow(a, 2)) {
        document.getElementById("txt__doanHinh").innerHTML = "Đây là tam giác vuông.";
    } else {
        document.getElementById("txt__doanHinh").innerHTML = "Đây là tam giác thường.";
    }
}