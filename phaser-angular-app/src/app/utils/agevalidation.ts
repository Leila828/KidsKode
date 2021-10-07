import { AbstractControl, ValidatorFn } from "@angular/forms";

export function AgeValidator() {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value < 8) {
      return { age: true };
    }
    return null;
  };
}
export function ageRangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (
      control.value !== undefined &&
      (isNaN(control.value) || control.value < min || control.value > max)
    ) {
      return { ageRange: true };
    }
    return null;
  };
}
