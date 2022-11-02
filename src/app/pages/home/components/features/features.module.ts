import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesComponent } from './features.component';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [CommonModule, FormsModule],
  exports: [FeaturesComponent],
})
export class featuresModule {}
