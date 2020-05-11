"use strict";
exports.__esModule = true;
var NewsView = /** @class */ (function () {
    function NewsView(news) {
        this.news = news;
    }
    NewsView.prototype.html = function () {
        var _a = this.news, title = _a.title, text = _a.text;
        return "\n        <div>\n            <h1>" + title + "</h1>\n            <p>" + text + "</p>\n        </div>\n        ";
    };
    NewsView.prototype.json = function () {
        var _a = this.news, title = _a.title, text = _a.text, changed = _a.changed;
        return JSON.stringify({ title: title, text: text, changed: changed }, null, 2);
    };
    NewsView.prototype.xml = function () {
        var _a = this.news, title = _a.title, text = _a.text, changed = _a.changed;
        return "<news>" + text + "</news>";
    };
    return NewsView;
}());
exports.NewsView = NewsView;
