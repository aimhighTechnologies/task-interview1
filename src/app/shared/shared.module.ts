import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { modelModule } from './modal/model.module';
import { BlurBackgroundComponent } from './blur-background/blur-background.component';

@NgModule({
  declarations: [BlurBackgroundComponent],
  imports: [CommonModule, modelModule],
  exports: [modelModule, BlurBackgroundComponent],
})
export class SharedModule {}
