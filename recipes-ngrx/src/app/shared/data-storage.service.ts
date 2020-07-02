import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DatStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    this.http
      .put(
        'https://catch-of-the-day-conary.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log('response', response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://catch-of-the-day-conary.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          if (recipes) {
            return recipes.map((recipe) => {
              return {
                ...recipe,
                ingredients: recipe.ingredients ? recipe.ingredients : [],
              };
            });
          }

          return [];
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
