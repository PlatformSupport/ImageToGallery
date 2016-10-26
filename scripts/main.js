"use strict";
var app;

(function () {
    app = {
        init: function () {
            navigator.splashscreen.hide();

            document.getElementById("downloadBtn").addEventListener("click", app.downloadImage);
        },
        downloadImage: function () {
            var fileTransfer = new FileTransfer();
            var url = 'https://s17.postimg.org/vgvwisq8f/64289.jpg';
            var fileURL = cordova.file.dataDirectory + "img.jpg";

            fileTransfer.download(url, fileURL, app.saveToGallery, app.error);
        },
        saveToGallery: function (entry) {
            cordova.plugins.imagesaver.saveImageToGallery(entry.toURL(), app.success, app.error);
        },
        success: function () {
            var label = document.getElementById("infoLbl");

            label.innerText = "Successfully added image to Gallery.";
        },
        error: function (message) {
            var label = document.getElementById("infoLbl");

            label.innerText = JSON.stringify(message);
        }
    };
    document.addEventListener("deviceready", app.init, false);
}());