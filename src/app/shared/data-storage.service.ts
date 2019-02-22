import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

  private readonly FIREBASE_URL = 'https://ng-recipe-book-79b3d.firebaseio.com/';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put<Recipe[]>(`${this.FIREBASE_URL}/recipes.json`, this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get<Recipe[]>(`${this.FIREBASE_URL}/recipes.json`)
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }

}
