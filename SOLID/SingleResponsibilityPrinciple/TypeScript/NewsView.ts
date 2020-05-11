import {News} from "./News";
import { INewsView } from "./intefraces";

export class NewsView implements INewsView {
    news: News;

    constructor(news) {
        this.news = news;
    }

    html(): string {
        const { title, text } = this.news;
        return `
        <div>
            <h1>${title}</h1>
            <p>${text}</p>
        </div>
        `
    }

    json(): string {
        const { title, text, changed } = this.news;
        return JSON.stringify({ title, text, changed }, null, 2)
    }

    xml(): string {
        const { title, text, changed } = this.news;
        return `<news>${text}</news>`
    }

}