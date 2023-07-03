const { createApp } = Vue;
const app = createApp({
data() {
return {
    // VARIABILE PER GESTIRE L'AUTOPLAY
    autoplay: null,
    // INDICE CORRENTE DELL'IMMAGINE
    currentIndex: 0,
    // ARRAY DI OGGETTI IMMAGINE
    images: [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'
    }
    ]
};
},
computed: {
// VERIFICA SE L'IMMAGINE CORRENTE È L'ULTIMA
isLastPicture() {
    return this.currentIndex === this.images.length - 1;
}
},
methods: {
// METODO PER PASSARE ALL'IMMAGINE SUCCESSIVA
goToNext() {
    if (this.isLastPicture) {
    // SE È L'ULTIMA IMMAGINE, TORNARE ALLA PRIMA
    this.currentIndex = 0;
    } else {
    // ALTRIMENTI PASSA ALL'IMMAGINE SUCCESSIVA
    this.currentIndex++;
    }
},
// METODO PER PASSARE ALL'IMMAGINE PRECEDENTE
goToPrevious() {
    if (this.currentIndex === 0) {
    // SE È LA PRIMA IMMAGINE, ANDARE ALL'ULTIMA
    this.currentIndex = this.images.length - 1;
    } else {
    // ALTRIMENTI PASSA ALL'IMMAGINE PRECEDENTE
    this.currentIndex--;
    }
},
// METODO PER IMPOSTARE L'INDICE CORRENTE
setCurrentIndex(targetIndex) {
    this.currentIndex = targetIndex;
},
// METODO PER FERMARE L'AUTOPLAY
stopAutoplay() {
    clearInterval(this.autoplay);
},
// METODO PER AVVIARE L'AUTOPLAY
startAutoplay() {
    this.autoplay = setInterval(this.goToNext, 3000);
}
},
// METODO MOUNTED CHE SI ATTIVA ALL'AVVIO DELLA PAGINA
mounted() {
// AVVIA L'AUTOPLAY
this.startAutoplay();
}
});

// MONTA L'APPLICAZIONE NELL'ELEMENTO CON ID 'app'
app.mount('#app');
