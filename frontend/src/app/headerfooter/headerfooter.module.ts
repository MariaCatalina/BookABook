import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderMenuComponent } from './header-menu.component';
import { AppMaterialModule } from '../app-material/app-material.module';

@NgModule({
    imports: [CommonModule, FormsModule, AppMaterialModule],
    declarations: [HeaderComponent, HeaderMenuComponent],
    providers: [
    ],

    exports: [
        HeaderComponent
    ],

})

export class HeaderFooterModule { }