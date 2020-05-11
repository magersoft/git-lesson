import {News} from "./News";
import {NewsView} from "./NewsView";
import {Share} from "./Share";

const news = new News('new1', 'blabla');

news.update('Раз два три четыре пять - ПИЗДА!');

const view = new NewsView(news);

console.log(view.json());
console.log(view.html());
console.log(view.xml());

const shared = new Share(news);

console.log('===================================')

console.log(shared.magergram());
console.log(shared.vk());