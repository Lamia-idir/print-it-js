const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// --- Sélection des éléments du DOM ---
const bannerImg = document.querySelector("#banner .banner-img");
const tagLine = document.querySelector("#banner p");
const arrowLeft = document.querySelector("#banner .arrow_left");
const arrowRight = document.querySelector("#banner .arrow_right");
const dots = document.querySelectorAll("#banner .dot");

// index de l'image affichée
let currentIndex = 0;
function showSlide(index) {
    const slide = slides[index];

    // Met à jour l'image
    bannerImg.src = "./assets/images/slideshow/" + slide.image;

    // Met à jour le texte
    tagLine.innerHTML = slide.tagLine;

	for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("dot_selected");  // retirer à tous
    }

    dots[index].classList.add("dot_selected");      // ajouter au bon
}

// Afficher la première slide au chargement
showSlide(currentIndex);
arrowRight.addEventListener("click", () => {
    currentIndex++;                   // on avance d'une slide

    // si on dépasse la dernière slide → on revient à la première
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    showSlide(currentIndex);
});
arrowLeft.addEventListener("click", () => {
    currentIndex--;                   // on recule d'une slide

    // si on passe avant la première → on va à la dernière
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    showSlide(currentIndex);
});

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        currentIndex = i;
        showSlide(currentIndex);
    });
}