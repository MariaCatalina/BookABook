import { Component } from '@angular/core';

@Component({
    selector: 'header-menu',
    templateUrl: './header-menu.component.html',
    styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {
    showSettingsPopup: boolean = false;
    settingEntries: string;
   
    onSettingsClicked(){
        this.showSettingsPopup = true;

    }
}
