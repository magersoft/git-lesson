import json
import moduleNews


class NewsView:
    news: moduleNews.News

    def __init__(self, news):
        self.news = news

    def html(self):
        return f"<div><h1>{self.news.title}</h1><p>{self.news.text}</p></div>"

    def json(self):
        obj = {
            'title': self.news.title,
            'text': self.news.text,
            'changed': self.news.changed
        }
        return json.dumps(obj)
