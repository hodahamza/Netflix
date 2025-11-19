import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ConfirmplanComponent } from "./confirmplan.component";

describe("ConfirmplanComponent", () => {
  let component: ConfirmplanComponent;
  let fixture: ComponentFixture<ConfirmplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmplanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
