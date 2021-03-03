import { Component, OnInit, Input } from '@angular/core';
import { Pokemodel } from '@myorg/data';
import axios from 'axios';

@Component({
  selector: 'myorg-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent {
  pokeModel : Pokemodel[] = []

  constructor() {
    this.fetchPokemon()
  }

  fetchPokemon() {
    ; (async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=640')
      this.pokeModel = response.data.results
      for (var i = 1; i< this.pokeModel.length+1; i++) {
          this.pokeModel[i-1].img = "https://rawgit.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png"
          this.pokeModel[i-1].id = i;
      }
    })()
  }


}
