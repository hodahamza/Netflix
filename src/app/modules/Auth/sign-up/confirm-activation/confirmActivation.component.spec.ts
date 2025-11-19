import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ConfirmActivationComponent } from "./confirmActivation.component";

describe("ConfirmActivationComponent", () => {
  let component: ConfirmActivationComponent;
  let fixture: ComponentFixture<ConfirmActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmActivationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
