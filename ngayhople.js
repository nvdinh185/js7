function ngayHopLe(ngay, thang, nam) {
    switch (thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (0 < ngay && ngay <= 31)
                return true;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (0 < ngay && ngay <= 30)
                return true;
            break;
        case 2:
            if ((nam % 4 == 0 && nam % 100 != 0) || (nam % 400 == 0) && 0 < ngay && ngay <= 29)
                return true;
            else if (0 < ngay && ngay <= 28)
                return true;
            break;
    }
    return false;
}

var check = true;
do {
    try {
        var ngay = prompt("Nhap ngay sinh: ");
        var thang = prompt("Nhap thang sinh: ");
        var nam = prompt("Nhap nam sinh: ");
        ngay = Number(ngay);
        thang = Number(thang);
        nam = Number(nam);
        if (isNaN(ngay) || isNaN(thang) || isNaN(nam)) {
            throw new Error("Ngày tháng năm nhập vào không đúng định dạng!");
        }
        if (!ngayHopLe(ngay, thang, nam) || nam >= 2005) {
            throw new Error("Ngày tháng năm không hợp lệ!");
        } else {
            console.log("Ngày: " + ngay + "\nTháng: " + thang + "\nNăm: " + nam);
            check = false;
        }
    } catch (e) {
        console.error(e);
    }
} while (check);