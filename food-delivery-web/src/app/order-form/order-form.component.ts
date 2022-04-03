import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  form: FormGroup;
  @ViewChild('modalComponent') modal:
    | ModalComponent<OrderFormComponent>
    | undefined;

  constructor(private toastService: HotToastService) {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      quantity: new FormControl(1, [Validators.min(1)])
    });
  }

  ngOnInit(): void {

  }

  get firstName() {
    return this.form.controls.firstName;
  }

  get lastName() {
    return this.form.controls.lastName;
  }

  get quantity() {
    return this.form.controls.quantity;
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }

  async submit() {
    await this.modal?.close();
    this.toastService.success('Order sent successfully');
  }
}
