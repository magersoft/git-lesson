import moduleNews


class Share:
    news: moduleNews.News

    def __init__(self, news):
        self.news = news

    def magegram(self):
        url = 'https://magergram.herokuapp.com'
        return f"{self.news.title} shared {url}"

    def vk(self):
        url = 'https://vk.com'
        return f"{self.news.title} shared {url}"
