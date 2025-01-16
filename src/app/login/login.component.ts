import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-login',
  imports: [FormsModule, 
            MatFormFieldModule, 
            MatInputModule, 
            ReactiveFormsModule,
            MatIconModule,
            MatButtonModule, 
            MatDividerModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
}
