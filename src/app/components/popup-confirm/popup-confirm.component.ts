import { Component, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-confirm',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Удаление задачи</h4>
    <button type="button" class="close" aria-describedby="modal-title" (click)="modal.close(false)">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <h5>Вы уверенны что хотите удалить задачу?</h5>
    <p>Задача удаляется навсегда.
    <span class="text-danger"> Эта операция не может быть отменена.</span>
    </p>
  </div>
  <div class="modal-footer">
  <button type="button" class="btn btn-success" (click)="modal.close(true)">Да</button>
  <button type="button" class="btn btn-secondary" (click)="modal.close(false)">Нет</button>
  </div>
  `
})

export class NgbdModalConfirm {
  constructor(public modal: NgbActiveModal) {}
}

const MODALS = {
  focusFirst: NgbdModalConfirm
};

@Component({
  selector: 'app-popup-confirm',
  templateUrl: './popup-confirm.component.html',
  styleUrls: ['./popup-confirm.component.css']
})
export class PopupConfirmComponent {
  withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
      (click)="modal.close('Ok click')">Ok</button>`;

  closeResult: string;

  @Output() confirmInfo: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private modalService: NgbModal) {}

  open(name: string) {
    this.modalService.open(MODALS[name]).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.confirmInfo.emit(result);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(this.closeResult);
      this.confirmInfo.emit(false);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
