import {News} from "./News";
import {IShare} from "./intefraces";

export class Share implements IShare {
    news: News;

    constructor(news) {
        this.news = news;
    }

    magergram(): string {
        const url = 'https://magergram.herokuapp.com';
        return `${this.news.title} shared ${url}`;
    }

    vk(): string {
        const url = 'https://vk.com';
        return `${this.news.title} shared ${url}`;
    }
}