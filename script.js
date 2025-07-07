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

var printerSave0 = null;
var printerSave1 = null;
var printerSave2 = null;
var printerSave3 = null;
var printerSave4 = null;
var printerSave5 = null;
var printerSave6 = null;
var printerSave7 = null;
var printerSave8 = null;
var printerSave9 = null;
var printerSave10 = null;
var printerSave11 = null;
var printerSave12 = null;
var printerSave13 = null;
var printerSave14 = null;

var currentOverlay = "null";

var balance = 150;
var cashPerSec = 0;

var updateBalance = window.setInterval(function(){
  balance += cashPerSec;
  document.getElementById("balance").innerText = balance;
}, 1000);

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
    printerId.forEach(reloadPrinter);
    currentOverlay = "null";
}

function closeSecondOverlay() {
    document.getElementById("warningOverlay").style.display = "none";
}

var basePrinterPrices = {
    A1mini: 150,
    prusaMini: 100,
    printer200: 200,
    printer400: 400,
    printer750: 750,
    printer1500: 1500,
    printer2800: 2800,
    printer6000: 6000
};
var currentPrinterPrices = Object.assign({}, basePrinterPrices);

var speedMultiplier = 1;
var incomeMultiplier = 1;
var filamentMultiplier = 1;
var cheaperPrintersMultiplier = 1;

function recalcCashPerSec() {
    var cps = 0;
    for (let i = 0; i < printerId.length; i++) {
        let printer = window["printerSave" + i];
        if (printer === "A1mini") cps += 15;
        else if (printer === "prusaMini") cps += 10;
        else if (printer === "printer200") cps += 20;
        else if (printer === "printer400") cps += 40;
        else if (printer === "printer750") cps += 75;
        else if (printer === "printer1500") cps += 150;
        else if (printer === "printer2800") cps += 300;
        else if (printer === "printer6000") cps += 600;
    }
    cps = cps * speedMultiplier * incomeMultiplier * filamentMultiplier;
    cashPerSec = Math.floor(cps);
    document.getElementById("cashPerSec").innerText = cashPerSec;
}

function updatePrinterPrices() {
    for (let key in basePrinterPrices) {
        currentPrinterPrices[key] = Math.floor(basePrinterPrices[key] * cheaperPrintersMultiplier);
    }
    var printers = [
        "A1mini","prusaMini","printer200","printer400","printer750","printer1500","printer2800","printer6000"
    ];
    printers.forEach(function(printer) {
        var el = document.querySelector('.buyPrinter[data-printer="'+printer+'"] .price');
        if (el) el.innerText = currentPrinterPrices[printer];
    });
}

function updateUpgradeUI() {
    var c1 = document.getElementById("upgradeCounter1");
    var c2 = document.getElementById("upgradeCounter2");
    var c3 = document.getElementById("upgradeCounter3");
    var c4 = document.getElementById("upgradeCounter4");
    if (c1) c1.innerText = "x" + upgradeLevels[0];
    if (c2) c2.innerText = "x" + upgradeLevels[1];
    if (c3) c3.innerText = "x" + upgradeLevels[2];
    if (c4) c4.innerText = "x" + upgradeLevels[3];
    var s = document.querySelector('#speed p:last-child');
    var i = document.querySelector('#income p:last-child');
    var cp = document.querySelector('#cheaperPrinters p:last-child');
    var cf = document.querySelector('#cheaperFilament p:last-child');
    if (s) s.innerText = upgradePrices[0] + "$";
    if (i) i.innerText = upgradePrices[1] + "$";
    if (cp) cp.innerText = upgradePrices[2] + "$";
    if (cf) cf.innerText = upgradePrices[3] + "$";
}

function buyUpgrade(index) {
    if (balance >= upgradePrices[index]) {
        balance -= upgradePrices[index];
        document.getElementById("balance").innerText = balance;
        upgradeLevels[index]++;
        upgradePrices[index] *= 2;
        if (index === 0) {
            speedMultiplier *= 1.05;
            recalcCashPerSec();
        } else if (index === 1) {
            incomeMultiplier *= 1.10;
            recalcCashPerSec();
        } else if (index === 2) {
            cheaperPrintersMultiplier *= 0.9;
            updatePrinterPrices();
        } else if (index === 3) {
            filamentMultiplier *= 1.2;
            recalcCashPerSec();
        }
        updateUpgradeUI();
    } else {
        document.getElementById("warningOverlay").style.display = "flex";
    }
}

function A1mini() {
    if (currentOverlay !== "null") {
        var lastPrinter = window["printerSave" + currentOverlay];
        if (lastPrinter !== "A1mini") {
            if (balance >= currentPrinterPrices.A1mini) {
                placePrinter("A1mini");
                balance -= currentPrinterPrices.A1mini;
                document.getElementById("balance").innerText = balance;
                recalcCashPerSec();
            } else {
                document.getElementById("warningOverlay").style.display = "flex";
            }
        }
    }
    closeOverlay();
}
function prusaMini() {
    if (currentOverlay !== "null") {
        var lastPrinter = window["printerSave" + currentOverlay];
        if (lastPrinter !== "prusaMini") {
            if (balance >= currentPrinterPrices.prusaMini) {
                placePrinter("prusaMini");
                balance -= currentPrinterPrices.prusaMini;
                document.getElementById("balance").innerText = balance;
                recalcCashPerSec();
            } else {
                document.getElementById("warningOverlay").style.display = "flex";
            }
        }
    }
    closeOverlay();
}
function printer200() {
    if (currentOverlay !== "null") {
        var lastPrinter = window["printerSave" + currentOverlay];
        if (lastPrinter !== "printer200") {
            if (balance >= currentPrinterPrices.printer200) {
                placePrinter("printer200");
                balance -= currentPrinterPrices.printer200;
                document.getElementById("balance").innerText = balance;
                recalcCashPerSec();
            } else {
                document.getElementById("warningOverlay").style.display = "flex";
            }
        }
    }
    closeOverlay();
}
function printer400() {
    if (currentOverlay !== "null") {
        var lastPrinter = window["printerSave" + currentOverlay];
        if (lastPrinter !== "printer400") {
            if (balance >= currentPrinterPrices.printer400) {
                placePrinter("printer400");
                balance -= currentPrinterPrices.printer400;
                document.getElementById("balance").innerText = balance;
                recalcCashPerSec();
            } else {
                document.getElementById("warningOverlay").style.display = "flex";
            }
        }
    }
    closeOverlay();
}
function printer750() {
    if (currentOverlay !== "null") {
        var lastPrinter = window["printerSave" + currentOverlay];
        if (lastPrinter !== "printer750") {
            if (balance >= currentPrinterPrices.printer750) {
                placePrinter("printer750");
                balance -= currentPrinterPrices.printer750;
                document.getElementById("balance").innerText = balance;
                recalcCashPerSec();
            } else {
                document.getElementById("warningOverlay").style.display = "flex";
            }
        }
    }
    closeOverlay();
}
function printer1500() {
    if (currentOverlay !== "null") {
        var lastPrinter = window["printerSave" + currentOverlay];
        if (lastPrinter !== "printer1500") {
            if (balance >= currentPrinterPrices.printer1500) {
                placePrinter("printer1500");
                balance -= currentPrinterPrices.printer1500;
                document.getElementById("balance").innerText = balance;
                recalcCashPerSec();
            } else {
                document.getElementById("warningOverlay").style.display = "flex";
            }
        }
    }
    closeOverlay();
}
function printer2800() {
    if (currentOverlay !== "null") {
        var lastPrinter = window["printerSave" + currentOverlay];
        if (lastPrinter !== "printer2800") {
            if (balance >= currentPrinterPrices.printer2800) {
                placePrinter("printer2800");
                balance -= currentPrinterPrices.printer2800;
                document.getElementById("balance").innerText = balance;
                recalcCashPerSec();
            } else {
                document.getElementById("warningOverlay").style.display = "flex";
            }
        }
    }
    closeOverlay();
}
function printer6000() {
    if (currentOverlay !== "null") {
        var lastPrinter = window["printerSave" + currentOverlay];
        if (lastPrinter !== "printer6000") {
            if (balance >= currentPrinterPrices.printer6000) {
                placePrinter("printer6000");
                balance -= currentPrinterPrices.printer6000;
                document.getElementById("balance").innerText = balance;
                recalcCashPerSec();
            } else {
                document.getElementById("warningOverlay").style.display = "flex";
            }
        }
    }
    closeOverlay();
}

function placePrinter(name) {
    window["printerSave" + currentOverlay] = name;
}

function removePrinter(slotIndex) {
    window["printerSave" + slotIndex] = null;
    document.getElementById("printer" + slotIndex).src = "plus.jpg";
}

function openOverlay(slotIndex) {
    document.getElementById("overlay").style.display = "flex";
    currentOverlay = slotIndex;
    var current = window["printerSave" + slotIndex];
    document.querySelectorAll('.buyPrinter').forEach(btn => {
        btn.classList.remove('currentPrinter');
    });
    if (current === "A1mini") {
        let btn = document.querySelector('.buyPrinter[data-printer="A1mini"]');
        btn.classList.add('currentPrinter');
    } else if (current === "prusaMini") {
        let btn = document.querySelector('.buyPrinter[data-printer="prusaMini"]');
        btn.classList.add('currentPrinter');
    }
}

var upgradeLevels = [0, 0, 0, 0];
var upgradePrices = [50, 500, 250, 1000];

window.addEventListener('DOMContentLoaded', function() {
    var speedBtn = document.getElementById('speed');
    var incomeBtn = document.getElementById('income');
    var cheaperPrintersBtn = document.getElementById('cheaperPrinters');
    var cheaperFilamentBtn = document.getElementById('cheaperFilament');
    if (speedBtn) speedBtn.addEventListener('click', function() { buyUpgrade(0); });
    if (incomeBtn) incomeBtn.addEventListener('click', function() { buyUpgrade(1); });
    if (cheaperPrintersBtn) cheaperPrintersBtn.addEventListener('click', function() { buyUpgrade(2); });
    if (cheaperFilamentBtn) cheaperFilamentBtn.addEventListener('click', function() { buyUpgrade(3); });
    updateUpgradeUI();
    updatePrinterPrices();
    recalcCashPerSec();
});