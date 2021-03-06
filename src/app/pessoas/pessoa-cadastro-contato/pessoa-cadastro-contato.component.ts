import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

import { Contato } from './../../core/model';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-pessoa-cadastro-contato',
  templateUrl: './pessoa-cadastro-contato.component.html',
  styleUrls: ['./pessoa-cadastro-contato.component.css']
})
export class PessoaCadastroContatoComponent implements OnInit {

  @Input() contatos: Array<Contato>;
  exbindoFormularioContato = false;
  contato: Contato;
  contatoIndex: number;

  constructor() { }

  ngOnInit() {
  }

  prepararNovoContato() {
    this.exbindoFormularioContato = true;
    this.contato = new Contato();
    this.contatoIndex = this.contatos.length;
  }

  confirmarContato(frm: FormControl) {
    this.contatos[this.contatoIndex] = this.clonarContato(this.contato);

    this.exbindoFormularioContato = false;

    this.resetForm(frm);
  }

  removerContato(index: number) {
    this.contatos.splice(index, 1);
  }

  prepararEdicaoContato(contato: Contato, index: number) {
    this.contato = this.clonarContato(contato);
    this.exbindoFormularioContato = true;
    this.contatoIndex = index;
  }

  clonarContato(contato: Contato): Contato {
    return new Contato(contato.codigo,
      contato.nome, contato.email, contato.telefone);
  }

  resetForm(frm: FormControl) {
    frm.reset();
  }

  get editando() {
    return this.contato && this.contato.codigo;
  }
}
