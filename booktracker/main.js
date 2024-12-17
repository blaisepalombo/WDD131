// Book data array
const books = [
    {
        title: "The Great Gatsby",
        image: "images/gatsby.jpg",
        rating: 4.5,
        genre: "Fiction",
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        image: "images/sapiens.jpg",
        rating: 4.8,
        genre: "Non-Fiction",
    },
    {
        title: "The Hobbit",
        image: "images/hobbit.jpg",
        rating: 4.7,
        genre: "Fantasy",
    },
    {
        title: "The Da Vinci Code",
        image: "images/davinci.jpg",
        rating: 4.3,
        genre: "Mystery",
    },
    {
        title: "Pride and Prejudice",
        image: "images/pride.jpg",
        rating: 4.6,
        genre: "Fiction",
    },
    {
        title: "To Kill a Mockingbird",
        image: "images/mockingbird.jpg",
        rating: 4.9,
        genre: "Fiction",
    },
    {
        title: "1984",
        image: "images/1984.jpg",
        rating: 4.8,
        genre: "Dystopian",
    },
    {
        title: "The Catcher in the Rye",
        image: "images/catcher.jpg",
        rating: 4.2,
        genre: "Fiction",
    },
    {
        title: "The Alchemist",
        image: "images/alchemist.jpg",
        rating: 4.4,
        genre: "Philosophy",
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        image: "images/hp_sorcerer.jpg",
        rating: 4.9,
        genre: "Fantasy",
    },
    {
        title: "Brave New World",
        image: "images/bravenew.jpg",
        rating: 4.7,
        genre: "Dystopian",
    },
    {
        title: "The Art of War",
        image: "images/artofwar.jpg",
        rating: 4.3,
        genre: "Non-Fiction",
    },
    {
        title: "The Road",
        image: "images/road.jpg",
        rating: 4.6,
        genre: "Post-Apocalyptic",
    },
    {
        title: "Gone Girl",
        image: "images/gonegirl.jpg",
        rating: 4.5,
        genre: "Mystery",
    },
    {
        title: "Little Women",
        image: "images/littlewomen.jpg",
        rating: 4.7,
        genre: "Fiction",
    }    
];

// DOM Elements
const genreSelect = document.getElementById("genre");

// Function to shuffle the books array
function shuffleBooks(bookList) {
    for (let i = bookList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bookList[i], bookList[j]] = [bookList[j], bookList[i]];
    }
    return bookList;
}

// Function to display books with an optional genre filter
function displayBooks(bookList, limit, genre = "all") {
    const bookListContainer = document.getElementById("book-list");
    bookListContainer.innerHTML = ""; // Clear any existing books

    // Filter books based on genre
    const filteredBooks = genre === "all"
        ? bookList
        : bookList.filter((book) => book.genre.toLowerCase() === genre.toLowerCase());

    // Slice the array to get the desired number of books
    const booksToDisplay = filteredBooks.slice(0, limit);

    if (booksToDisplay.length === 0) {
        bookListContainer.innerHTML = "<li>No books found for this genre.</li>";
        return;
    }

    booksToDisplay.forEach((book) => {
        // Create a list item for each book
        const bookItem = document.createElement("li");
        bookItem.classList.add("book-item");

        // Add book image
        const bookImage = document.createElement("img");
        bookImage.src = book.image;
        bookImage.alt = book.title;
        bookImage.classList.add("book-image");

        // Add book title
        const bookTitle = document.createElement("h3");
        bookTitle.textContent = book.title;

        // Add book rating
        const bookRating = document.createElement("p");
        bookRating.textContent = `Rating: ${book.rating}`;

        // Append all elements to the list item
        bookItem.appendChild(bookImage);
        bookItem.appendChild(bookTitle);
        bookItem.appendChild(bookRating);

        // Append the list item to the container
        bookListContainer.appendChild(bookItem);
    });
}

// Event listener for genre filter
genreSelect.addEventListener("change", () => {
    const selectedGenre = genreSelect.value; // Get the selected genre
    displayBooks(shuffledBooks, 6, selectedGenre); // Display filtered books
});

// Shuffle books and display only 6 initially
const shuffledBooks = shuffleBooks(books);
displayBooks(shuffledBooks, 6);

