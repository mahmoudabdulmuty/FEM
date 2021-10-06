let favoriteBooks = [];

let addFavoriteBook = function (bookName) {
	if (!bookName.includes('Greet')) favoriteBooks.push(bookName);
};
addFavoriteBook('A Song of Ice and Fire');
addFavoriteBook(`The Greet Gatsby`);
addFavoriteBook(`Crime & Punishment`);
addFavoriteBook(`Greet Expectations`);
addFavoriteBook(`You Don't know JS`);

printFavoriteBooks();

function printFavoriteBooks() {
	console.log(`Favorite Books: ${favoriteBooks.length}`);
  for (const favorite of favoriteBooks) {
    console.log(favorite)
  }
}
