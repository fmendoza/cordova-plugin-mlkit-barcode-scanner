var exec = require('cordova/exec');

var getBarcodeFormatFlags = function (barcodeFormats) {
  var barcodeFormatFlag = 0;

  for (key in barcodeFormats) {
    if (barcodeFormats.hasOwnProperty(key) && barcodeFormats[key]) {
      barcodeFormatFlag += barcodeFormats[key];
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
