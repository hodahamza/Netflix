import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Choosepayment } from "./choosepayment.component";

describe("Choosepayment", () => {
  let component: Choosepayment;
  let fixture: ComponentFixture<Choosepayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Choosepayment],
    }).compileComponents();

    fixture = TestBed.createComponent(Choosepayment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
