import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { DigilistComponent } from './digilist/digilist.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TodosComponent, PokelistComponent, DigilistComponent, SidebarComponent, NavbarComponent],
  exports: [TodosComponent, PokelistComponent, DigilistComponent, SidebarComponent, NavbarComponent],
})
export class UiModule {}