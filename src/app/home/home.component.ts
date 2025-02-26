import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { AppRoutingModule } from '../app.routes';

import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRippleModule} from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';


import { RouterModule, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
            MatSidenavModule, 
            MatButtonModule,
            MatIconModule,
            MatListModule,
            FormsModule,
            MatSlideToggleModule,
            CommonModule,
            CdkTableModule,
            MatButtonModule,
            MatInputModule,
            MatAutocompleteModule,
            MatDatepickerModule,
            MatFormFieldModule,
            MatRadioModule,
            MatSelectModule,
            MatSliderModule,
            MatSlideToggleModule,
            MatMenuModule,
            MatSidenavModule,
            MatToolbarModule,
            MatListModule,
            MatGridListModule,
            MatCardModule,
            MatStepperModule,
            MatTabsModule,
            MatExpansionModule,
            MatButtonToggleModule,
            MatChipsModule,
            MatIconModule,
            MatProgressSpinnerModule,
            MatProgressBarModule,
            MatDialogModule,
            MatTooltipModule,
            MatSnackBarModule,
            MatTableModule,
            MatSortModule,
            MatPaginatorModule,
            MatRippleModule,
            RouterModule, 
          ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    this.themeService.theme = localStorage.getItem('dark')!
    if (this.themeService.theme == 'dark')
      {
        this.icono = 'brightness_2'
         this.color='yellow'
      }
    else
      {
        this.icono = 'brightness_7<'
        this.color='white'
      }
    
  }

  constructor(private themeService: ThemeService, private router:Router) {
  }
  
  icono = 'brightness_7<'
  color='white'



  get dark() {
    return this.themeService.theme === 'dark';
    
  }

  set dark(enabled: boolean) {
    this.themeService.theme = enabled ? 'dark' : null!;

    localStorage.setItem('dark', this.themeService.theme)
    
    if (this.themeService.theme == 'dark')
      {
        this.icono = 'brightness_2'
         this.color='yellow'
      }
    else
      {
        this.icono = 'brightness_7<'
        this.color='white'
      }
  }

 


}
