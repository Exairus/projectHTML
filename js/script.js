'use strict';
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1. получаем рекламный элемент

const adv = document.querySelectorAll(".promo__adv img");

adv.forEach((item) => {
    item.remove();
});

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

const poster = document.querySelector(".promo__bg"),
      genre = poster.querySelector(".promo__genre");

genre.textContent = "Драма";

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg"

poster.style.background = "url('../img/bg.jpg') center/cover no-repeat";

//4) Список фильмов на странице сформировать на основании данных из этого JS файла.Отсортировать их по алфавиту 


const movieList = document.querySelector(".promo__interactive-list");
movieList.innerHTML = ""; //очищаем

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${++i}. ${film}
            <div class="delete"></div>
        </li>
    `;
});


