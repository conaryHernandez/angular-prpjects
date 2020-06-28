import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse",
})
export class ReversePipePipe implements PipeTransform {
  transform(value: any): string {
    return value.split("").reverse().join("");
  }
}
