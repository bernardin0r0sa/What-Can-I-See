import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { LoginModalService, AccountService, Account } from 'app/core';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  account: Account;
  modalRef: NgbModalRef;

  constructor(
    private accountService: AccountService,
    private loginModalService: LoginModalService,
    private eventManager: JhiEventManager,
    private render: Renderer2
  ) {}

  ngOnInit() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
    });
    this.registerAuthenticationSuccess();
    this.render.addClass(document.body, 'home');
  }

  ngOnDestroy() {
    this.render.removeClass(document.body, 'home');
  }

  registerAuthenticationSuccess() {
    this.eventManager.subscribe('authenticationSuccess', message => {
      this.accountService.identity().then(account => {
        this.account = account;
      });
    });
  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

  login() {
    this.modalRef = this.loginModalService.open();
  }
}
