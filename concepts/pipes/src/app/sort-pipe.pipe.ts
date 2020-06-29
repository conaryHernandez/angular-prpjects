import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
  pure: false,
})
export class SortPipePipe implements PipeTransform {
  transform(value, propName: string) {
    return value.sort((a, b) => (a[propName] > b[propName] ? 1 : -1));
  }
}
