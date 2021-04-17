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
  ],
  imports: [CommonModule, CommonRoutingModule],
})
export class AppCommonModule {}
