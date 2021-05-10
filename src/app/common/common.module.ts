import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonRoutingModule } from './common-routing.module';
import { SectionComponent } from './home/section/section.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ModeSectionComponent } from './home/mode-section/mode-section.component';
import { NewsComponent } from './news/news.component';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { AboutComponent } from './about/about.component';
import { WikiComponent } from './wiki/wiki.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { HeroCardComponent } from './heroes/hero-card/hero-card.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemCardComponent } from './items/item-card/item-card.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    SectionComponent,
    GalleryComponent,
    FeedbackComponent,
    ModeSectionComponent,
    NewsComponent,
    NewsItemComponent,
    AboutComponent,
    WikiComponent,
    HeroesComponent,
    HeroesListComponent,
    HeroCardComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemCardComponent,
  ],
    imports: [CommonModule, CommonRoutingModule, ReactiveFormsModule],
})
export class AppCommonModule {}
