import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css'],
})
export class ErrorModalComponent implements OnInit {
  @Input() heading: string;
  @Input() message: string;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  modalClose() {
    this.cartService.modalClose.next(false);
  }
}
