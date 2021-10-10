import { Component, OnInit } from '@angular/core';
import {RecipesService} from "../../services/recipes.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  recipes = [];


  constructor(
    public recipeService: RecipesService
  ) { }

  async ngOnInit() {
  const response = await this.recipeService.getRecipesList([]);
  this.recipes = response;

  }

  async searchRecipe(event){
    console.log(event)
    this.recipes = await this.recipeService.getRecipesList(event);
  }

}
