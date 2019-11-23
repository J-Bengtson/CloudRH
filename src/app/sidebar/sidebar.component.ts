import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/transporte',    title: 'Transporte',        icon:'nc-bus-front-12',       class: '' },
    { path: '/user',          title: 'Perfil',            icon:'nc-single-02',          class: '' },
    { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',              class: '' },
    { path: '/table',         title: 'Galeria',           icon:'nc-camera-compact',     class: '' },
    { path: '/gastos',        title: 'Gastos',            icon:'nc-money-coins',        class: '' },
  
];

@Component({
    moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
