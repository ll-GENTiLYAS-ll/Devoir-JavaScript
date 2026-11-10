//Récupère le bouton "Envoyer"
const submitButton = document.querySelector("button");

//Exécute la fonction lors du clic bouton "Envoyer" 
submitButton.addEventListener("click", function addNewcomment(event) {
    
    //Récupére les champs du formulaire
    let fieldFirstName = document.getElementById("first-name").value;
    let fieldLastName = document.getElementById("last-name").value;
    let fieldComment = document.getElementById("message").value;

    //Affiche une erreur si un champ est vide
    if (fieldComment.trim() === "" || fieldLastName.trim() === "" || fieldFirstName.trim() === "") {

        document.getElementById("error-message").style.display = "block";
    
    //Execute la fonction si tout les champs sont remplis
    } else {
        commentValid(fieldComment, fieldLastName, fieldFirstName);
    }

    //Empêche le rechargement de la page
    event.preventDefault();
});

//Affiche le contenu des champs
function commentValid(fieldComment, fieldLastName, fieldFirstName) {

    document.getElementById("error-message").style.display = "none";
    
    let listComment = document.querySelector("#comment-list");
    let div = document.querySelector("#lastComment");
    let copyComment = div.cloneNode(true);

    copyComment.querySelector("h3").textContent = fieldFirstName + " " + fieldLastName;
    copyComment.querySelector("p").textContent = fieldComment;

    //Affiche le nouveau commentaire dans la liste
    listComment.appendChild(copyComment);

    //Efface le contenu des champs
    document.querySelector("form").reset();
 
}