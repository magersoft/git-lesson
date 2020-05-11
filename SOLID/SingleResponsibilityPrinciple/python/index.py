from SOLID.SingleResponsibilityPrinciple.python.News import News
from SOLID.SingleResponsibilityPrinciple.python.NewsView import NewsView
from SOLID.SingleResponsibilityPrinciple.python.Share import Share

news = News('My first news', 'Hello fucking asshole!')
print(news.text, news.changed)

news.update('Changed from python')
print(news.text, news.changed)

view = NewsView(news)
print(view.html())
print(view.json())

share = Share(news)
print(share.magegram())
print(share.vk())
