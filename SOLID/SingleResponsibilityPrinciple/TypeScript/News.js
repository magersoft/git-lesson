"use strict";
exports.__esModule = true;
var News = /** @class */ (function () {
    function News(title, text) {
        this.text = text;
        this.title = title;
        this.changed = false;
    }
    News.prototype.create = function () { };
    News.prototype.update = function (text) {
        this.text = text;
        this.changed = true;
    };
    News.prototype["delete"] = function () { };
    return News;
}());
exports.News = News;
