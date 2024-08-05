const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee",l: "https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird"},
    { title: "1984", author: "George Orwell" ,l: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four"},
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" ,l: "https://en.wikipedia.org/wiki/The_Great_Gatsby"},
    { title: "The Catcher in the Rye", author: "J.D. Salinger" ,l: "https://en.wikipedia.org/wiki/The_Catcher_in_the_Rye"},
    { title: "The Hobbit", author: "J.R.R. Tolkien",l: "https://en.wikipedia.org/wiki/The_Hobbit" },
    { title: "Steve Jobs", author: "Walter Isaacson",l: "https://en.wikipedia.org/wiki/Steve_Jobs_(book)" },
    {title: "Beloved", author: "Toni Morrison" ,l: "https://en.wikipedia.org/wiki/Beloved_(novel)"},
    { title: "Never Let Me Go", author: "Kazuo Ishiguro" ,l: "https://en.wikipedia.org/wiki/Never_Let_Me_Go_(novel)"},
    { title: "One Hundred Years of Solitude", author: "Garcia Marquez",l: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude" },
    { title: "Great Expectations", author: "Charles Dickens",l: "https://en.wikipedia.org/wiki/Great_Expectations" },
    { title: "Dear Life", author: " Alice Munro",l: "https://en.wikipedia.org/wiki/Dear_Life_(book)" },
    { title: "Wuthering Heights", author: "Emily Brontë",l: "https://en.wikipedia.org/wiki/Wuthering_Heights" }
];
function displayBooks(bookArray) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    bookArray.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book');
        bookItem.innerHTML = `<strong><a href=${book.l}>${book.title}</a></strong><br><em>${book.author}<br><button>Add</button></em>`;
        bookList.appendChild(bookItem);
    });
}

function searchBooks() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchInput)  ||
        book.author.toLowerCase().includes(searchInput)
    );
    displayBooks(filteredBooks);
}

document.addEventListener('DOMContentLoaded', () => {
    displayBooks(books);
});
// function log()
// {
//     let email=document.getElementById("email");
//     let pass=document.getElementById("pass");
//     if(email.value!=""&&pass.value!="")
//     alert("Successfully Login!..");
// }
// function sign()
// {
//     alert("Successfully Sign Uped!...");
// }
function home()
{
    let home=document.getElementById('home').style.display = "block";
}
function cross()
{
    let home=document.getElementById('home').style.display = "none";
}