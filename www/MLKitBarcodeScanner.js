var exec = require('cordova/exec');

var getBarcodeFormatFlags = function (barcodeFormats) {
  var barcodeFormatFlag = 0;

  var barcodeFormat = Object.freeze({
    Code128: 1,
    Code39: 2,
    Code93: 4,
    CodaBar: 8,
    DataMatrix: 16,
    EAN13: 32,
    EAN8: 64,
    ITF: 128,
    QRCode: 256,
    UPCA: 512,
    UPCE: 1024,
    PDF417: 2048,
    Aztec: 4096,
  });

  for (key in barcodeFormats) {
    if (barcodeFormat.hasOwnProperty(key) &&
      barcodeFormats.hasOwnProperty(key) &&
      barcodeFormats[key]) {
      barcodeFormatFlag += barcodeFormat[key];
    }
  }
  return barcodeFormatFlag;
};

var MLKitBarcodeScanner = {

  scan: function (options, successCallback, errorCallback) {

    options.barcodeFormats = getBarcodeFormatFlags(options.barcodeFormats);

    exec(successCallback, errorCallback,
      'cordova-plugin-mlkit-barcode-scanner',
      'startScan',
      [options],
    );
  }
};

module.exports = MLKitBarcodeScanner;
