import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Output() isDownload = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  download(): void {
    this.isDownload.emit(true);
  }
}
