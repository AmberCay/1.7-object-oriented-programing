import { Mobile } from "./mobile";

let myMobile = new Mobile('Iphone', 'Apple', '11', 'black', 400);

myMobile.setName('Bunnyphone');
myMobile.getName();
myMobile.setTrademark('Fairphone');
myMobile.getTrademark();
myMobile.setModel('Fairphone');
myMobile.getModel();
myMobile.setColor('Pink');
myMobile.getColor();
myMobile.setPrice(200);
myMobile.getPrice();

let phone2 = new Mobile('Iphone', 'Apple', '11', 'black', 400);
let phone3 = new Mobile('blablaphone', 'Apple', '11', 'black', 400);

let myMobiles:Mobile[] = [myMobile, phone2, phone3];

for (const phone of myMobiles) {
    phone.toString()
};