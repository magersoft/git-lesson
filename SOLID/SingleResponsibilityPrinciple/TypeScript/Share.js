"use strict";
exports.__esModule = true;
var Share = /** @class */ (function () {
    function Share(news) {
        this.news = news;
    }
    Share.prototype.magergram = function () {
        var url = 'https://magergram.herokuapp.com';
        return this.news.title + " shared " + url;
    };
    Share.prototype.vk = function () {
        var url = 'https://vk.com';
        return this.news.title + " shared " + url;
    };
    return Share;
}());
exports.Share = Share;
