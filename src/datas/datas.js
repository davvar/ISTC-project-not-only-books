import book1 from "./imgs/book1.webp";
import book2 from "./imgs/book2.jpg";
import book3 from "./imgs/book3.png";
import book4 from "./imgs/book4.jpg";
import book5 from "./imgs/book5.jpg";
import book6 from "./imgs/book6.jpg";
import book7 from "./imgs/book7.jpg";
import book8 from "./imgs/book8.jpg";

class BookCreator {
  constructor(title, language, rating, price, img, author, genre) {
    this.title = title;
    this.language = language;
    this.rating = rating;
    this.price = price;
    this.img = img;
    this.author = author;
    this.genre = genre;
    this.inFavorite = false;
    this.inCart = false;
    this.quantity = 0
    this.id = Math.random() * Math.random();
  }
  
  calculatingTotalSumOfBook() {
    return this.price * this.quantity
  }
}

let books = [
  new BookCreator(
    "Leaders Eat Last",
    "Eng",
    9,
    19.99,
    book1,
    "Simon Sinek",
  ),
  new BookCreator("Games People Play", "Eng", 8.1, 14.99, book2, "Eric Berne"),
  new BookCreator("Homo Deus", "Eng", 10, 18.99, book3, "Yuval Noah Harari"),
  new BookCreator(
    "Homo Sapiens",
    "Eng",
    9.1,
    16.99,
    book4,
    "Yuval Noah Harari",
  ),
  new BookCreator(
    "Think and Grow Rich",
    "Eng",
    9.3,
    13.99,
    book5,
    "Napoleon Hill",
  ),
  new BookCreator(
    "12 Rules For Life",
    "Eng",
    10,
    19.99,
    book6,
    "Jordan B. Peterson",
  ),
  new BookCreator(
    "The Monk Who Sold His Ferrari",
    "Eng",
    8,
    18.99,
    book7,
    "Robin Sharma",
  ),
  new BookCreator(
    "The Subtle Art Of Not Giving A Fuck",
    "Eng",
    9.6,
    17.99,
    book8,
    "Mark Manson",
  )
];

export { books };
