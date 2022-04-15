import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/login.service';
import { HttpClient } from '@angular/common/http';
import { ExoplanetCards } from 'app/models/exoplanetCard';
import { ExoplanetCardComments } from 'app/models/exoplanetCardComments';
import { Observable } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ExoplanetLikes } from 'app/models/ExoplanetLikes';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

declare const window:any;
@Component({
  selector: 'app-exoplanet-cards',
  templateUrl: './exoplanet-cards.component.html',
  styleUrls: ['./exoplanet-cards.component.css']
})
export class ExoplanetCardsComponent implements OnInit {
  formModal:any;
  readonly BACKEND_URL = 'http://localhost:8080';
  exoCards!: Observable<ExoplanetCards[]>;
  exoCardComment: any;
  exoplanetLikeId: any;
  userId: any;
  exoplanetId: any;
  username: any;
  clicked = false;
  modalService: any;
  
  constructor(public activeModal: NgbActiveModal, private loginService: LoginService, private router: Router, private http: HttpClient) {
   }

  getPosts(){
    this.exoCards = this.http.get<ExoplanetCards[]>(this.BACKEND_URL + '/exoplanets');

  }
  likeBtn(exoId: number){
    exoId = exoId +1;
    console.log(exoId);
    this.http.post<ExoplanetLikes>('http://localhost:8080/like', {"exoplanetId" : exoId}).subscribe(data => {
      this.exoplanetLikeId = data.exoId;
  })
  window.location.reload();
  }

  
  open() {
    // const modalRef = this.modalService.open(ModalComponent);
    const modalRef = this.modalService.open(this.activeModal);
    modalRef.componentInstance.title = 'About';
  }

  ngOnInit(): void {
    
    
    this.getPosts();
    this.loginService.getUserInfoFromJwt().subscribe((res) => {

    this.username = res.body?.username;

    }, err => {
      if (err.status === 401) {
        this.router.navigate(['/login']);
      }
    })

  }

  
  openModal(){
    this.formModal.show();
    console.log("Hiii")
  }

  doSomething(){
    this.formModal.hide();
  }






  

}
