import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
      'This is a simply test',
      'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/nouilles-hokka-de-singapour-668df2e5.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French fries', 20)
      ]),
    new Recipe('Big fat bueguer',
      'This is a simply test 2',
      'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/nouilles-hokka-de-singapour-668df2e5.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    //console.l
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    /*return this.http.get<Recipe[]>(`${this.FIREBASE_URL}/recipes.json`);*/
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    /*return this.http.get<Recipe>(`${this.FIREBASE_URL}/recipes.json/${index}`);*/
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    /*this.http.post<Recipe>(`${this.FIREBASE_URL}`, recipe);*/
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
