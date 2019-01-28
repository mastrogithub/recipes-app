import { Component, OnInit } from '@angular/core';

import { Recipe} from '../../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a simply test', 'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/nouilles-hokka-de-singapour-668df2e5.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
