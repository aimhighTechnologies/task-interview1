import { HomeComponent } from './home.component';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './homer-outing.module';

import { OfferModule } from './components/offer/offer.module';
import { BoxrowModule } from './components/boxrow/boxrow.module';
import { featuresModule } from './components/features/features.module';
import { ProfieModule } from './components/profile/profile.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderModule } from '../layout/header/header.module';
import { FooterModule } from '../layout/footer/footer.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    HeaderModule,
    FooterModule,
    OfferModule,
    BoxrowModule,
    featuresModule,
    ProfieModule,
    SharedModule,
  ],
})
export class HomeModule {}
