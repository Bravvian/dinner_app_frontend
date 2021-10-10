import {Component, Input, OnInit} from '@angular/core';
import {RecipesService} from "../../services/recipes.service";
import {MatDialog} from "@angular/material/dialog";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {DetailsComponent} from "../details/details.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item: any;
  image: any;

  constructor(
    private recipesService: RecipesService,
    private _bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {
    this.image = this.item.image;
  }

  setDefaultPic(){
    this.image = 'assets/images/image-not-found.jpg';
  }

  handleTitle(title) {
    return title.slice(0, 27);
  }

  async openDetails(){
   const item_details =  await this.recipesService.getRecipeDetails(this.item.id);

  const dialogRef = this._bottomSheet.open(DetailsComponent, {
    data: item_details
   });

  }


}
