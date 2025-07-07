function reloadPrinter(value, index, array) {
    let slotNum = value.replace('printer', '');
    let printerSave = window["printerSave" + slotNum];
    let imgElem = document.getElementById(value);
    if (printerSave === null) {
        imgElem.src = "plus.jpg";
    } else {
        imgElem.src = printerSave + ".png";
    }
}
