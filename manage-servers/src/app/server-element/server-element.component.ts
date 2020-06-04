import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input("srvElement")
  element: {
    type: string;
    name: string;
    content: string;
  };
  @Input() name: string;
  @ViewChild("heading", { static: true })
  heading: ElementRef;
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;

  constructor() {
    console.log("CONSTRUCTOR called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("NGONCHANGES called", changes);
  }

  ngOnInit(): void {
    console.log("NGINIT called");
    console.log("VIEW CHILD", this.heading.nativeElement.textContent);
    console.log("CONTENT CHILD", this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log("NGDOCHECK called");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called");

    console.log("VIEW CHILD", this.heading.nativeElement.textContent);
    console.log("CONTENT CHILD", this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called");
  }
}
