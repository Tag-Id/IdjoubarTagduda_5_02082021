main(); /*appel du contenu html main*/

/*définition d'une fonction pour modifier le contenu*/
function main() { 
  getArticles();
}

/*Récupérer les articles depuis l'API*/
function getArticles() {
  fetch("http://localhost:3000/api/cameras") /*promesse fetch API*/
    .then(function (resultat) {
      return resultat.json();
    })
    .catch((error) => { /*si pas de réponse*/
      let produitsContainer = document.querySelector(".container-produits");
      produitsContainer.innerHTML =
        "Aucun produit à afficher";
      produitsContainer.style.textAlign = "center";
      produitsContainer.style.padding = "10rem 0";
    })

    /* récupération des données des produits */
    .then(function (resultatAPI) {
      const articles = resultatAPI; 
      console.log(articles);
      for (let article in articles) {
        /*création du produit*/
        let produitCard = document.createElement("div"); 
        document.querySelector(".produits").appendChild(produitCard);
        produitCard.classList.add("produit");

        /*création d'un lien pour chaque produit (vers fiche produit)*/
        let produitLink = document.createElement("a"); 
        produitCard.appendChild(produitLink);
        produitLink.href = `produit.html?id=${resultatAPI[article]._id}`;
        produitLink.classList.add("stretched-link");

        /*création de la div qui contiendra l'image*/
        let produitImgDiv = document.createElement("div");
        produitLink.appendChild(produitImgDiv);
        produitImgDiv.classList.add("produit__img");

        /*récupération de l'image*/
        let produitImg = document.createElement("img");
        produitImgDiv.appendChild(produitImg);
        produitImg.src = resultatAPI[article].imageUrl;

        /*création zone d'infos*/
        let produitInfosDiv = document.createElement("div");
        produitLink.appendChild(produitInfosDiv);
        produitInfosDiv.classList.add("produit__infos");

        /*récup info nom*/
        let produitInfoTitle = document.createElement("div");
        produitInfosDiv.appendChild(produitInfoTitle);
        produitInfoTitle.classList.add("produit__infos__title");
        produitInfoTitle.innerHTML = resultatAPI[article].name;

        /*récup info prix */
        let produitInfoPrice = document.createElement("div");
        produitInfosDiv.appendChild(produitInfoPrice);
        produitInfoPrice.classList.add("produit__infos__price");

        /* affichage du prix en euros*/
        resultatAPI[article].price = resultatAPI[article].price / 100; /*passage de centimes à euros*/
        produitInfoPrice.innerHTML = new Intl.NumberFormat("fr-FR", {
          style: "currency",
          currency: "EUR",
        }).format(resultatAPI[article].price);
      }
    });
}