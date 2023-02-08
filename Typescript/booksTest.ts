import { Book } from "./books";

let sirensOfTitan = new Book('Percy Jackson', 200, 'greg', 'Rick Riordan', 'Penguin');

sirensOfTitan.setTitle('Sirens of Titan');
sirensOfTitan.setNPages(220);
sirensOfTitan.setIsbn('2344433');
sirensOfTitan.setAuthor('Kurt Vonnegut');
sirensOfTitan.setEditorial('Pearson');

sirensOfTitan.getTitle();
sirensOfTitan.getNPages();
sirensOfTitan.getIsbn();
sirensOfTitan.getAuthor();
sirensOfTitan.getEditorial();

console.log(sirensOfTitan.toString());
