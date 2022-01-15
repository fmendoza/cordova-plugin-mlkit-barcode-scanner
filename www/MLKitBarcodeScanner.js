var exec = require('cordova/exec');

var MLKitBarcodeScanner = {

  scan: function (options, successCallback, errorCallback) {

    exec(successCallback, errorCallback,
      'cordova-plugin-mlkit-barcode-scanner',
      'startScan',
      [options],
    );
  }
};

module.exports = MLKitBarcodeScanner;
