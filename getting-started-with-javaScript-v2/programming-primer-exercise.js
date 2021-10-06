function addFavoriteBook(bookName) {
	if (!bookName.includes('Great')) {
		favoriteBooks.push(bookName);
	}
}

function printFavoriteBooks() {
	console.log(`Favorite Books: ${favoriteBooks.length}`);
	for (const bookName of favoriteBooks) {
		console.log(bookName);
	}
}

const favoriteBooks = [];

addFavoriteBook('A Song of Ice and Fire');
addFavoriteBook('The Great Gatsby');
addFavoriteBook('Crime & Punishment');
addFavoriteBook('Great Expectations');
addFavoriteBook("You Don't Know JS");

// print out favorite books
printFavoriteBooks();
