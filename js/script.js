'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll(".promo__adv img");
    const poster = document.querySelector(".promo__bg");
    const genre = poster.querySelector(".promo__genre"); 
    const movieList = document.querySelector(".promo__interactive-list");
    const listItem = movieList.querySelector(".promo__interactive-item");
    const addForm = document.querySelector("form.add");  
    const addInput = addForm.querySelector(".adding__input");
    const checkbox = addForm.querySelector('[type="checkbox"]');
    
    const deleteAdv = (arr) => {
        arr.forEach((item) => {
            item.remove();
        });
    };

    const makeChanges = () => {  
        genre.textContent = "Драма";
        poster.style.background = "url('../img/bg.jpg') center/cover no-repeat";
    };

    const sortArr = (arr) => {
        arr.sort();
    }; 

    function createMovieList(films, parent) {
        sortArr(films);
        parent.innerHTML = "";

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${++i}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll(".delete").forEach( (btn, i) => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }  
    
    addForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if(favorite) {
                console.log("Вы выбрали любимый фильм");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            // нужно снова перебрать базу данных, т.к. там новое значение
            createMovieList(movieDB.movies, movieList);

        }

        //очистка формы на элементе, на котором происходит событие
        event.target.reset();
    });

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});

