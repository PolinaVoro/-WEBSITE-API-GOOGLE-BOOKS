/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("\nconst sliderImages = document.querySelectorAll('.slider-image');\nconst sliderDots = document.querySelectorAll('.ellipse');\n\nlet currentIndex = 0;\nlet intervalId = null;\n\n\nfunction showSlide(index) {\n\n  if (index < 0 || index >= sliderImages.length) {\n    return;\n  }\n\n\n  sliderImages.forEach((image) => {\n    image.classList.remove('active');\n  });\n\n  sliderImages[index].classList.add('active');\n\n\n  sliderDots.forEach((dot) => {\n    dot.classList.remove('active');\n  });\n  sliderDots[index].classList.add('active');\n}\n\n\nfunction startSlider() {\n  intervalId = setInterval(() => {\n    currentIndex++;\n    if (currentIndex >= sliderImages.length) {\n      currentIndex = 0;\n    }\n    showSlide(currentIndex);\n  }, 3000);\n}\n\n\nsliderDots.forEach((dot, index) => {\n  dot.addEventListener('click', () => {\n    currentIndex = index;\n    showSlide(currentIndex);\n    clearInterval(intervalId);\n  });\n});\n\n\nshowSlide(currentIndex);\nstartSlider();\n\n\n\n\n\n\n\n\n// Функция для загрузки книг из API\nfunction loadBooks(subject) {\n  const url = `https://www.googleapis.com/books/v1/volumes?q=${subject}&key=AIzaSyCwP9Cnbo0ltKfdyV0WTkG-nSoU3oXThY4&printType=books&startIndex=0&maxResults=6&langRestrict=en`;\n\n  // Запрос к API\n $.getJSON(url, function(data) {\n    const books = data.items;\n    const booksHtml = books.map(book => `\n\n                <div class=\"book\">\n\n                    <div class=\"book-foto\">\n                        <img class=\"book-img\" src=\"${book.volumeInfo.imageLinks. thumbnail}\" alt=\"${book.volumeInfo.title}\">\n                    </div>\n\n                    <div class=\"books-info\">\n\n                        <div class=\"authors\">${book.volumeInfo.authors}</div>\n                        <div class=\"title\">${book.volumeInfo.title}</div>\n                        \n\n                        <button class=\"books-button\">buy now</button>\n\n                    </div>\n                </div>\n\n\n    `).join('');\n\n    // Вывод книг на страницу\n    $('.books').html(booksHtml);\n  });\n}\n\n// Обработчик события на клик по категории\n$('.category').on('click', function() {\n  const subject = $(this).data('subject');\n  loadBooks(subject);\n});\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://bookshopsf/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;