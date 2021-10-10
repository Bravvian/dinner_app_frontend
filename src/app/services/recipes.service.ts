import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(
    private apiService: ApiService
  ) { }

  async getRecipesList(ingredients: any){
    const params = new HttpParams().set('ingredients', ingredients)
    const url = this.getUrl()
    const response = await this.apiService.get(url, {params: params})

    return response.body;
  }

  async getRecipeDetails(id: number){
    const url = this.getUrl(`/${id}`);
    const response = await this.apiService.get(url);

    //TODO: add response handler for errors and notifications
    return response.body;
  }

  getUrl(extension = ''){
    return `api/v1/recipes${extension}`;
  }
}
