import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChange = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Tomato', 5),
    new Ingredient('Apple', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    /*for (let ingredient of ingredients) {
      this.addIngredient(ingredient);
    }*/

    this.ingredients.push(...ingredients);
    this.ingredientsChange.next(this.ingredients.slice());
  }
}
