import { INews } from './intefraces';

export class News implements INews {
    text: string;
    title: string;
    changed: boolean;

    constructor(title, text) {
        this.text = text;
        this.title = title;
        this.changed = false
    }

    create() {}

    update(text): void {
        this.text = text;
        this.changed = true;
    }

    delete() {}
}