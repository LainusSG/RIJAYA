import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

import { MatIconModule } from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-login2',
  imports: [
            MatIconModule,
            FormsModule,
            MatCheckboxModule,
            MatSlideToggleModule,
            MatRadioModule,
            MatCardModule
  ],
  standalone:true,
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.css'
})
export class Login2Component {
 
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
          this.color='black'
        }
      
    }
  
    constructor(private themeService: ThemeService) {
    }
    
    icono = 'brightness_7<'
    color='black'
  
  
  
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
          this.color='black'
        }
      
    }
}
