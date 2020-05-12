import moduleNews
import moduleNewsView
import moduleShare

news = moduleNews.News('My first news', 'Hello fucking asshole!')
print(news.text, news.changed)

news.update('Changed from python')
print(news.text, news.changed)

view = moduleNewsView.NewsView(news)
print(view.html())
print(view.json())

share = moduleShare.Share(news)
print(share.magegram())
print(share.vk())
