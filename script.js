
var printerId = [
"printer0",
"printer1",
"printer2",
"printer3",
"printer4",
"printer5",
"printer6",
"printer7",
"printer8",
"printer9",
"printer10",
"printer11",
"printer12",
"printer13",
"printer14"
];

var printerSave0 = "null";
var printerSave1 = "null";
var printerSave2 = "null";
var printerSave3 = "null";
var printerSave4 = "null";
var printerSave5 = "null";
var printerSave6 = "null";
var printerSave7 = "null";
var printerSave8 = "null";
var printerSave9 = "null";
var printerSave10 = "null";
var printerSave11 = "null";
var printerSave12 = "null";
var printerSave13 = "null";
var printerSave14 = "null";

var currentOverlay = "null";


function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
    printerId.forEach(reloadPrinter);
    currentOverlay = "null";
}

function A1mini() {
    placePrinter("A1mini")
    closeOverlay();
}

function prusaMini() {
    placePrinter("prusaMini")
    closeOverlay();
}

function placePrinter(name) {
    switch (currentOverlay) {
        case "0":
            printerSave0 = name;
            break;
        case "1":
            printerSave1 = name;
            break;
        case "2":
            printerSave2 = name;
            break;
        case "3":
            printerSave3 = name;
            break;
        case "4":
            printerSave4 = name;
            break;
        case "5":
            printerSave5 = name;
            break;
        case "6":
            printerSave6 = name;
            break;
        case "7":
            printerSave7 = name;
            break;
        case "8":
            printerSave8 = name;
            break;
        case "9":
            printerSave9 = name;
            break;
        case "10":
            printerSave10 = name;
            break;
        case "11":
            printerSave11 = name;
            break;
        case "12":
            printerSave12 = name;
            break;
        case "13":
            printerSave13 = name;
            break;
        case "14":
            printerSave14 = name;
            break;
    }
}