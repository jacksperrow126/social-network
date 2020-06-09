import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
const Material = [
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatTabsModule,
  MatDialogModule,
  MatSnackBarModule,
  MatChipsModule
];
@NgModule({
  declarations: [],
  imports: [Material],
  exports: [Material]
})
export class MaterialModule {}
