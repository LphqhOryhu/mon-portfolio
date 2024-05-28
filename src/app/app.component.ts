import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StageComponent } from './stage/stage.component';
import { VeilleComponent } from './veille/veille.component';
import { CompetencesComponent } from './competences/competences.component';
import { Subscription } from 'rxjs';
import { SidebarService } from './sidebar.service';
import { ScrollToTopComponent } from './scrolltop/scrolltop.component';
import { DocumentComponent } from './document/document.component';
import { ParrallxComponent } from './parrallx/parrallx.component';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    DocumentComponent,
    RouterOutlet,
    HeaderComponent,
    MainContentComponent,
    SidebarComponent,
    StageComponent,
    VeilleComponent,
    CompetencesComponent,
    ScrollToTopComponent,
    ParrallxComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mon-portfolio';
  componentToShow: string = 'main';
  private subscription: Subscription = new Subscription();
  isPressed: boolean = false;

  constructor(private sidebarService: SidebarService, private globalService: GlobalService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.sidebarService.componentToShow$.subscribe(
        (component: string) => {
          this.componentToShow = component; // Met à jour le composant à afficher
        }
      )
    );

    this.subscription.add(
      this.globalService.isPressed$.subscribe(
        (isPressed: boolean) => {
          this.isPressed = isPressed;
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  firstClick() {
    this.isPressed = !this.isPressed;
  }
}
