import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from "@angular/core";
import { FoodItem } from "../foodItem";

@Component({
  selector: "app-food-edit",
  templateUrl: "./food-edit.component.html",
  styleUrls: ["./food-edit.component.scss"],
})
export class FoodEditComponent implements OnInit {
  constructor() {}

  @Input() food: FoodItem;
  @Output() saveFood: EventEmitter<FoodItem> = new EventEmitter();

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("receiving data on input:", changes["food"]);
  }

  doSave() {
    this.saveFood.emit(this.food);
  }
}
