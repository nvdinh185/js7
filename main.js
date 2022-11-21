var a = prompt("Nhập hệ số a = ");
var b = prompt("Nhập hệ số b = ");
var c = prompt("Nhập hệ số c = ");

try {
    if (a == "" || b == "" || c == "") throw 'Không được bỏ trống';
    if (isNaN(a) || isNaN(b) || isNaN(c)) throw 'Vui lòng nhập số';
    var resultMessage = caculate(a, b, c);
    console.log("Kết quả: " + resultMessage);
} catch (error) {
    console.log(error);
}

function caculate(a, b, c) {
    if (a == 0) {
        return "phương trình có nghiệm là " + (-c / b)
    }
    var delta = Math.pow(b, 2) - (4 * a * c);
    if (delta < 0) {
        return "Phương trình vô nghiệm";
    }
    else if (delta == 0) {
        return "Phương trình có nghiệm kép x1=x2= " + (-b / (2 ^ a));
    }
    else {
        var x1 = (-b - Math.sqrt(delta)) / (2 * a);
        var x2 = (-b + Math.sqrt(delta)) / (2 * a);
        return "Phương trình có 2 nghiệm phân biệt x1= " + x1 + ", x2= " + x2;
    }
}