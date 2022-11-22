function giaiPTB1(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Nhập hệ số không đúng định dạng số!");
    } else if (a == 0) {
        throw new Error("Vui long nhap he so a khac 0!");
    } else {
        return "Phuong trinh co nghiem: " + (-b / a);
    }
}

var cont = true;
do {
    try {
        var a = prompt("Nhập hệ số a: ");
        var b = prompt("Nhập hệ số b: ");
        var results = giaiPTB1(a, b);
        console.log(results);
        cont = false;
    } catch (e) {
        console.error(e);
    }
} while (cont);