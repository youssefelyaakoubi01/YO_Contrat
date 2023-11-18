import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyContractComponent } from './verify-contract.component';

describe('VerifyContractComponent', () => {
  let component: VerifyContractComponent;
  let fixture: ComponentFixture<VerifyContractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyContractComponent]
    });
    fixture = TestBed.createComponent(VerifyContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
