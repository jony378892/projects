import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent {
  formMode: string = 'submit'
  formData: any[] = []
  editIndex: null | number = null;

  simpleForm: any = new FormGroup({
    name: new FormControl('', Validators.required),
    profession: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    hobby: new FormControl('', Validators.required),
  })

  onSubmit() {
    this.formData.push(this.simpleForm.value)
    this.simpleForm.reset()
  }

  onEdit(i: number) {
    this.formMode = 'update';
    this.editIndex = i;
    this.simpleForm.patchValue(this.formData[i]);



  }

  onUpdateAfterEdit() {
    if (this.editIndex !== null && this.simpleForm.valid) {
      this.formData[this.editIndex] = this.simpleForm.value
      this.simpleForm.reset();
      this.formMode = 'submit';
      this.editIndex = null;
    }

  }

  onDelete(i: any) {
    this.formData.splice(this.formData.indexOf(i), 1)
  }
}
