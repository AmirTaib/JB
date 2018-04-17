import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetables-list',
  templateUrl: './vegetables-list.component.html',
  styleUrls: ['./vegetables-list.component.css']
})
export class VegetablesListComponent {


  selectedType: string;
  errorMsg: string = "";
  selectedVegetablesArray: string[] = [];


  vegetablesSelected() {

    this.selectedVegetablesArray = [];
    this.errorMsg = "";

    if (this.selectedType.length == 1) {
      for (let vegetable of this.vegetablesArray) {
        if (vegetable.charAt(0) == this.selectedType) {
          this.selectedVegetablesArray.push(vegetable);
        }
      }
    }
    else {
      this.errorMsg = "Plese enter only one type";
    }

  }


  vegetablesArray: string[] = [
    "artichoke",
    "aubergine",
    "amrud",
    "asparagus",
    "legumes",
    "alfalfa sprouts",
    "azuki beans",
    "bean sprouts",
    "black beans",
    "black - eyed peas",
    "borlotti bean",
    "broad beans",
    "chickpeas",
    "green beans",
    "kidney beans",
    "lentils",
    "lima beans",
    "mung beans",
    "navy beans",
    "pinto beans",
    "runner beans",
    "split peas",
    "soy beans",
    "peas",
    "mangetout",
    "broccoflower",
    "broccoli",
    "brussels",
    "cabbage",
    "kohlrabi",
    "cauliflower",
    "celery",
    "endive",
    "fiddleheads",
    "frisee",
    "fennel",
    "greens",
    "beet greens",
    "bok choy",
    "chard",
    "collard greens",
    "kale",
    "mustard greens",
    "spinach",
    "herbs",
    "anise",
    "basil",
    "caraway",
    "cilantro",
    "coriander",
    "chamomile",
    "dill",
    "fennel",
    "lavender",
    "lemon Grass",
    "marjoram",
    "oregano",
    "parsley",
    "rosemary",
    "sage",
    "thyme",
    "lettuce",
    "arugula",
    "mushrooms",
    "nettles",
    "spinach",
    "okra",
    "onions",
    "Chives",
    "Garlic",
    "Leek",
    "onion",
    "shallot",
    "scallion",
    "parsley",
    "bell pepper",
    "chili pepper",
    "Jalapeño",
    "Habanero",
    "Paprika",
    "Tabasco pepper",
    "pepper",
    "radicchio",
    "rhubarb",
    "root vegetables",
    "beetroot",
    "cattlefeed",
    "carrot",
    "celeriac",
    "daikon",
    "ginger",
    "parsnip",
    "rutabaga",
    "turnip",
    "radish",
    "wasabi",
    "horseradish",
    "white radish",
    "skirret",
    "sweetcorn",
    "topinambur",
    "squashes",
    "acorn squash",
    "bitter melon",
    "squash",
    "banana squash",
    "courgette",
    "cucumber",
    "delicata",
    "gem squash",
    "hubbard squash",
    "marrow",
    "patty pans",
    "pumpkin",
    "tat soi",
    "tomato",
    "tubers",
    "jicama",
    "artichoke",
    "potato",
    "quandong",
    "sunchokes",
    "sweet potato",
    "taro",
    "yam",
    "water chestnut",
    "watercress",
    "zucchini"
  ]

}
