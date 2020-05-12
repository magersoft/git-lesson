class News:
    text: str
    title: str
    changed: bool

    def __init__(self, title, text):
        self.text = text
        self.title = title
        self.changed = False

    def update(self, text):
        self.text = text
        self.changed = True
