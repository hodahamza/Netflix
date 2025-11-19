import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardpaymentComponent } from "./cardpayment.component";

describe("CardpaymentComponent", () => {
  let component: CardpaymentComponent;
  let fixture: ComponentFixture<CardpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardpaymentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
