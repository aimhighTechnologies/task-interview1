import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { modelModule } from './modal/model.module';
import { BlurBackgroundComponent } from './blur-background/blur-background.component';
import { HeaderModule } from '../pages/layout/header/header.module';
import { FooterModule } from '../pages/layout/footer/footer.module';
import { OfferModule } from '../pages/home/components/offer/offer.module';
import { BoxrowModule } from '../pages/home/components/boxrow/boxrow.module';
import { featuresModule } from '../pages/home/components/features/features.module';
import { ProfieModule } from '../pages/home/components/profile/profile.module';

@NgModule({
  declarations: [BlurBackgroundComponent],
  imports: [
    CommonModule,
    modelModule,
    HeaderModule,
    FooterModule,
    OfferModule,
    BoxrowModule,
    featuresModule,
    ProfieModule,
  ],
  exports: [
    modelModule,
    BlurBackgroundComponent,
    HeaderModule,
    FooterModule,
    OfferModule,
    BoxrowModule,
    featuresModule,
    ProfieModule,
  ],
})
export class SharedModule {}
