import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log("activeToInactiveCounter", this.activeToInactiveCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log("inactiveToActiveCounter", this.inactiveToActiveCounter);
  }
}
