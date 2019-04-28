import React, { Component } from "react";
import './App.css';
import gameCard from "./components/gameCard"

var cardImages = [
    {
        "id": 0,
        "image": "./images/Aaron_Kimball.jpg",
        "clicked": false
    },
    {
        "id": 1,
        "image": "./images/Benny_FNV.jpg",
        "clicked": false
    },
    {
        "id": 2,
        "image": "./images/Big_Sal.jpg",
        "clicked": false
    },
    {
        "id": 3,
        "image": "./images/Caesar2.jpg",
        "clicked": false
    },
    {
        "id": 4,
        "image": "./images/Christine_DM.jpg",
        "clicked": false
    },
    {
        "id": 5,
        "image": "./images/Col_Cassandra_Moore.jpg",
        "clicked": false
    },
    {
        "id": 6,
        "image": "./images/Craig_Boone.jpg",
        "clicked": false
    },
    {
        "id": 7,
        "image": "./images/Dennis_Crocker.jpg",
        "clicked": false
    },
    {
        "id": 8,
        "image": "./images/DocMitchell.jpg",
        "clicked": false
    },
    {
        "id": 9,
        "image": "./images/Doctor_Mobius.jpg",
        "clicked": false
    },
    {
        "id": 10,
        "image": "./images/FNV_General_Lee_Oliver.jpg",
        "clicked": false
    },
    {
        "id": 11,
        "image": "./images/FNV_Lanius.jpg",
        "clicked": false
    },
    {
        "id": 12,
        "image": "./images/FNV_Mr_House_Screen.jpg",
        "clicked": false
    },
    {
        "id": 13,
        "image": "./images/Joshua_Graham.jpg",
        "clicked": false
    },
    {
        "id": 14,
        "image": "./images/Johnson_Nash.jpg",
        "clicked": false
    },
    {
        "id": 15,
        "image": "./images/Lily.jpg",
        "clicked": false
    },
    {
        "id": 16,
        "image": "./images/Major_Dhatri.jpg",
        "clicked": false
    },
    {
        "id": 17,
        "image": "./images/Marjorie.jpg",
        "clicked": false
    },
    {
        "id": 18,
        "image": "./images/Papa_Khan.jpg",
        "clicked": false
    },
    {
        "id": 19,
        "image": "./images/Pearl.jpg",
        "clicked": false
    },
    {
        "id": 20,
        "image": "./images/Rose_of_Sharon_Cassidy.jpg",
        "clicked": false
    },
    {
        "id": 21,
        "image": "./images/The_King.jpg",
        "clicked": false
    },
    {
        "id": 22,
        "image": "./images/Ulysses_profile.jpg",
        "clicked": false
    },
    {
        "id": 23,
        "image": "./images/VulpesInculta.jpg",
        "clicked": false
    },
]


class App extends Component {
    constructor(clickedCard) {
        this.clickedCard = clickedCard;
        this.topScore = 0;
        this.guessesCorrect = 0;
        this.desiredNumberOfRenderedImages = 12;
        this.i = 0
        this.randomizeImages(this.desiredNumberOfRenderedImages);
    }

    randomizeImages = totalRenderedImages => {
        var currentImagesID = [];
        for (this.i = 0; this.i < cardImages.length; this.i++) {
            currentImagesID.push(this.i);
        }
        for (this.j = 0; this.j < totalRenderedImages; this.j++) {
            var randomID = Math.floor(Math.random() * currentImagesID.length);
            this.render(randomID);
            randomID.splice((randomID -1), (randomID + 1));
        }
    }

    correctGuess = () => {
        this.guessesCorrect++;
        if (this.guessesCorrect > this.topScore) {
            this.topScore++;
        }
        this.randomizeImages();
    }

    cardClicked = clickedCard => {
        if (cardImages[clickedCard.clicked] === false) {
            cardImages[clickedCard.clicked] = true;
            this.correctGuess();
        }
        else {
            this.guessesCorrect = 0;
            for (this.i = 0; this.i < cardImages.length; this.i++) {
                cardImages[this.i.clicked] = false;
            }
        }
        this.randomizeImages();
    }

    render () {
        return (
            gameCard
            );
    }
};

export default App;
