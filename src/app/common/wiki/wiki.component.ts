import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css'],
})
export class WikiComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateToHeroesPage() {
    this.router.navigate(['heroes'], { relativeTo: this.route });
  }

  navigateToItemsPage() {
    this.router.navigate(['items'], { relativeTo: this.route });
  }
}
