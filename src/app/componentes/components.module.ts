import { NgModule } from '@angular/core';
import { BuscadorComponent } from './buscador/buscador.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BuscadorComponent],
  exports: [BuscadorComponent], 
  imports: [FormsModule]
})
export class ComponentsModule {}