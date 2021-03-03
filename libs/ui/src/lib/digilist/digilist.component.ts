import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Digimodel } from '@myorg/data'

@Component({
  selector: 'myorg-digilist',
  templateUrl: './digilist.component.html',
  styleUrls: ['./digilist.component.css']
})
export class DigilistComponent {
  digiModel : Digimodel[] = []

  constructor() {
    this.fetchDigimon()
  }

  fetchDigimon() {
    ; (async () => {
      const response = await axios.get('https://digimon-api.vercel.app/api/digimon')
      this.digiModel = response.data
      // for (var i = 1; i< this.pokeModel.length+1; i++) {
      //     this.pokeModel[i-1].img = "https://rawgit.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png"
      //     this.pokeModel[i-1].id = i;
      // }
    })()
  }

}
