// import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
//
// const template: string = require('./do.component.html');
//
// @Component({
//   selector: 'app-do',
//   template
// })
//
// export class ModalComponent implements OnInit {
//   @Input('showModal') showModal: boolean;
//   @Input('title') title: string;
//   @Input('subTitle') subTitle: string;
//   @Input('cancelLabel') cancelLabel: string;
//   @Input('positiveLabel') positiveLabel: string;
//
//   @Output() open: EventEmitter<any> = new EventEmitter();
//
//   @Output(/*'closed'*/) closeEmitter: EventEmitter < ModalResult > = new EventEmitter< ModalResult > ();
//   @Output(/*'loaded'*/) loadedEmitter: EventEmitter < ModalComponent > = new EventEmitter < ModalComponent > ();
//   @Output() positiveLabelAction = new EventEmitter();
//
//   constructor() {}
//
//   ngOnInit() {
//     this.loadedEmitter.next(this);
//   }
//
//   show() {
//     this.showModal = true;
//   }
//
//   hide() {
//     this.showModal = false;
//     this.closeEmitter.next({
//       action: ModalAction.POSITIVE
//     });
//   }
//
//   positiveAction() {
//     this.positiveLabelAction.next(this);
//     return false;
//   }
//
//   cancelAction() {
//     this.showModal = false;
//     this.closeEmitter.next({
//       action: ModalAction.CANCEL
//     });
//     return false;
//   }
// }
//
// export enum ModalAction { POSITIVE, CANCEL }
//
// export interface ModalResult {
//   action: ModalAction;
// }
