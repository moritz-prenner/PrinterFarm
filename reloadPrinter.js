
const printerImageMap = {
    A1mini: "A1mini.png",
    prusaMini: "prusaMini.png",
    printer200: "printer1.png",
    printer400: "printer2.png",
    printer750: "printer3.png",
    printer1500: "printer4.png",
    printer2800: "printer5.png",
    printer6000: "printer6.png"
};

function reloadPrinter(value, index, array) {
    let slotNum = value.replace('printer', '');
    let printerSave = window["printerSave" + slotNum];
    let imgElem = document.getElementById(value);
    if (printerSave === null) {
        imgElem.src = "plus.jpg";
    } else {
        imgElem.src = printerImageMap[printerSave] || "plus.jpg";
    }
}


