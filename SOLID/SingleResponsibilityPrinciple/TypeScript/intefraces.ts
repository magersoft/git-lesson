import {News} from "./News";

export interface INews {
    title: string
    text: string
    changed: boolean
    update(text): void
}

export interface INewsView {
    news: News
    html(): string
    json(): string
}

export interface IShare {
    news: News
    vk(): string
    magergram(): string
}