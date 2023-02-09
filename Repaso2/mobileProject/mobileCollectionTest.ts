import { MobileCollection } from "./mobileCollection";
import { Mobile } from "./mobile";

let phone1 = new Mobile('Iphone', 'Apple', '11', 'black', 400);
let phone2 = new Mobile('Iphone', 'Apple', '11', 'black', 400);
let phone3 = new Mobile('blablaphone', 'Apple', '11', 'black', 400);
let phone4 = new Mobile('blablaphone', 'Apple', '11', 'black', 400);

let phoneAggregate:Mobile[] = [phone1, phone2, phone3, phone4];

let telephones = new MobileCollection(phoneAggregate);

telephones.setMobiles(phoneAggregate);
telephones.getMobiles();
telephones.setTotalPrice(900);
telephones.getTotalPrice();
telephones.getTotalPrice();