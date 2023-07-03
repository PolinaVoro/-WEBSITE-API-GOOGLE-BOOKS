
const sliderImages = document.querySelectorAll('.slider-image');
const sliderDots = document.querySelectorAll('.ellipse');

let currentIndex = 0;
let intervalId = null;


function showSlide(index) {

  if (index < 0 || index >= sliderImages.length) {
    return;
  }


  sliderImages.forEach((image) => {
    image.classList.remove('active');
  });

  sliderImages[index].classList.add('active');


  sliderDots.forEach((dot) => {
    dot.classList.remove('active');
  });
  sliderDots[index].classList.add('active');
}


function startSlider() {
  intervalId = setInterval(() => {
    currentIndex++;
    if (currentIndex >= sliderImages.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }, 3000);
}


sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
    clearInterval(intervalId);
  });
});


showSlide(currentIndex);
startSlider();








// Функция для загрузки книг из API
function loadBooks(subject) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${subject}&key=AIzaSyCwP9Cnbo0ltKfdyV0WTkG-nSoU3oXThY4&printType=books&startIndex=0&maxResults=6&langRestrict=en`;

  // Запрос к API
 $.getJSON(url, function(data) {
    const books = data.items;
    const booksHtml = books.map(book => `

                <div class="book">

                    <div class="book-foto">
                        <img class="book-img" src="${book.volumeInfo.imageLinks. thumbnail}" alt="${book.volumeInfo.title}">
                    </div>

                    <div class="books-info">

                        <div class="authors">${book.volumeInfo.authors}</div>
                        <div class="title">${book.volumeInfo.title}</div>
                        

                        <button class="books-button">buy now</button>

                    </div>
                </div>


    `).join('');

    // Вывод книг на страницу
    $('.books').html(booksHtml);
  });
}

// Обработчик события на клик по категории
$('.category').on('click', function() {
  const subject = $(this).data('subject');
  loadBooks(subject);
});






