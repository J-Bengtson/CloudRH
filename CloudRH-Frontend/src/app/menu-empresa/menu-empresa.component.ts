import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-empresa',
  templateUrl: './menu-empresa.component.html',
  styleUrls: ['./menu-empresa.component.scss']
})
export class MenuEmpresaComponent implements OnInit {

  @Input() ativaVagasDisponiveis;
  @Input() ativaConfiguracaoUsuario;

  constructor() { }

  ngOnInit() {
    console.log(this.ativaVagasDisponiveis);
    console.log(this.ativaConfiguracaoUsuario);
  }

}
