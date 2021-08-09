/*js de la page produit, affichage un par un*/

/*définition des variables*/
let id = parametre.get(id);

/*définition des constantes*/
const produitImg = document.querySelector(".img");
const produitNom = document.querySelector(".produit__title");
const produitDescription = document.querySelector(".produit__description");
const produitPrix = document.querySelector(".produit__prix");
const camNumber = document.querySelector("#camNumber");

/*appel main*/
main();

/*fonctions récupère les infos et donne la possibilité de l'ajouter au panier*/
function main() {
  getArticles();
  ajoutPanier();
}

/*partie à rendre fonctionnelle*/
/* récupération d'un article seul == id
function getArticles() {
  fetch("http://localhost:3000/api/cameras") /*promesse fetch API*/
   /* .then(function (resultat) {
      return resultat.json();
    })
    .catch((error) => { /*si pas de réponse*/
  /*    let produitsContainer = document.querySelector(".container-produits");
      produitsContainer.innerHTML =
        "Aucun produit à afficher";
      produitsContainer.style.textAlign = "center";
      produitsContainer.style.padding = "10rem 0";
    })

    /* récupération des données des produits */
  /*  .then(function (resultatAPI) {
      const articles = resultatAPI; 
      console.log(articles);
      for (let article in articles) {
        /*création du produit*/
   /*     let produitCard = document.createElement("div"); 
        document.querySelector(".produits").appendChild(produitCard);
        produitCard.classList.add("produit");

        /*création d'un lien pour chaque produit (vers fiche produit)*/
    /*    let produitLink = document.createElement("a"); 
        produitCard.appendChild(produitLink);
        produitLink.href = `produit.html?id=${resultatAPI[article]._id}`;
        produitLink.classList.add("stretched-link");

        /*création de la div qui contiendra l'image*/
    /*    let produitImgDiv = document.createElement("div");
        produitLink.appendChild(produitImgDiv);
        produitImgDiv.classList.add("produit__img");

        /*récupération de l'image*/
     /*   let produitImg = document.createElement("img");
        produitImgDiv.appendChild(produitImg);
        produitImg.src = resultatAPI[article].imageUrl;

        /*création zone d'infos*/
     /*   let produitInfosDiv = document.createElement("div");
        produitLink.appendChild(produitInfosDiv);
        produitInfosDiv.classList.add("produit__infos");

        /*récup info nom*/
     /*   let produitInfoTitle = document.createElement("div");
        produitInfosDiv.appendChild(produitInfoTitle);
        produitInfoTitle.classList.add("produit__infos__title");
        produitInfoTitle.innerHTML = resultatAPI[article].name;

        /*récup info prix */
     /*   let produitInfoPrice = document.createElement("div");
        produitInfosDiv.appendChild(produitInfoPrice);
        produitInfoPrice.classList.add("produit__infos__price");

        /* affichage du prix en euros*/
      /*  resultatAPI[article].price = resultatAPI[article].price / 100; /*passage de centimes à euros*/
      /*  produitInfoPrice.innerHTML = new Intl.NumberFormat("fr-FR", {
          style: "currency",
          currency: "EUR",
        }).format(resultatAPI[article].price);
      }
    });
}*/
function ajoutPanier() {
  const ajoutPanierBtn = document.querySelector(".ajout-panier");
  const confirmation = document.querySelector(".confirmation-ajout");
  const textConfirmation = document.querySelector(".confirmation-text");
  
  ajoutPanierBtn.addEventListener("click", () => {
    if (camNumber.value > 0 && camNumber.value < 10) {
      /*variable qui défini les infos du produit ajouté au panier*/
      let produitAjouté = {
        name: produitNom.innerHTML,
        price: parseFloat(produitPrix.innerHTML),
        quantity: parseFloat(document.querySelector("#camNumber").value),
        _id: id,
      };

      /*variable qui contient les infos panier en local (localStorage)*/
      let arrayPanier = [];
      /* récupération contenu panier ou ajout si premier produit*/
      if (localStorage.getItem("produits") !== null) {
        arrayPanier = JSON.parse(localStorage.getItem("produits"));
      } 
        arrayPanier.push(produitAjouté);
        localStorage.setItem("produits", JSON.stringify(arrayPanier));
      

      // Effets visuels lors d'un ajout au panier
      confirmation.style.visibility = "visible";
      textConfirmation.innerHTML = ` ${camNumber.value} caméra(s) en plus dans votre panier !`;
      setTimeout("location.reload(true);", 4000);
    } 
  });
}