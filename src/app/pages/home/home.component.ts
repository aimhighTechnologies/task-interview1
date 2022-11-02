import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isDownload = false;
  openModal(event: any): void {
    this.isDownload = event;
  }

  closeModal(): void {
    this.isDownload = false;
  }
}
