const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
// console.log(titleElement.value);
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");

eventListeners();

 function eventListeners() {
     form.addEventListener("submit",addFilm);
     document.addEventListener("DOMContentLoaded",function(){
         let films = Storage.getFilmsFromStorage();
         UI.LoadAllFilms(films);
     });
     cardBody.addEventListener("click",deleteFilm);
     clear.addEventListener("click",clearAllFilms);
 }
function addFilm(e) {
    const title= titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title=== "" || director===""|| url===""){
        UI.displayMessages("Tüm Alanları Doldurunuz","danger");
    }

    else{
        const newFilm = new Film(title, director, url);
        UI.addFilmToUI(newFilm);
        Storage.addFilmToStorage(newFilm);
        UI.displayMessages("Film Başarıyla Eklendi","success");
    }
    UI.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
 }
function deleteFilm(e){
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling);
    }
    
}
function clearAllFilms(e){
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
}