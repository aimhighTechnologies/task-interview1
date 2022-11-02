import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxrowComponent } from './boxrow.component';

@NgModule({
  declarations: [BoxrowComponent],
  imports: [CommonModule, FormsModule],
  exports: [BoxrowComponent],
})
export class BoxrowModule {}
