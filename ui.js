class UI{
    static addFilmToUI(newFilm){
        const filmList = document.querySelector("#films");
        filmList.innerHTML += `
        <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><button href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</button></td>
      </tr> 
        `;
    }
    static displayMessages(message,type){
        const cardBody = document.querySelector(".card-body");
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;
        cardBody.appendChild(div);

        setTimeout(function() {
            div.remove();
        },1000);
    }
    static clearInputs(title,director,url){
        title.value = "";
        director.value = "";
        url.value = "";
    }
    static LoadAllFilms(films){
        const filmList= document.querySelector("#films");
        films.forEach(function(film){
            filmList.innerHTML += `
            <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
          </tr> 
            `;
        });
    }
    static deleteFilmFromUI(element) {
        element.parentElement.parentElement.remove();
    }
    static clearAllFilmsFromUI(){
        const filmList = document.querySelector("#films");
        while(filmList.firstElementChild !== null){
            filmList.firstElementChild.remove();
        }
    }
}