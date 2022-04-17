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
import { environment } from 'environments/environment';

declare const window:any;
@Component({
  selector: 'app-exoplanet-cards',
  templateUrl: './exoplanet-cards.component.html',
  styleUrls: ['./exoplanet-cards.component.css']
})
export class ExoplanetCardsComponent implements OnInit {
  formModal:any;
  exoCards!: Observable<ExoplanetCards[]>;
  exoCardComment: any;
  exoplanetLikeId: any;
  userId: any;
  exoplanetId: any;
  username: any;
  clicked = false;
  modalService: any;
  exoLikes!: Observable<ExoplanetCards[]>;
  loggedIn = false;
  
  constructor(public activeModal: NgbActiveModal, private loginService: LoginService, private router: Router, private http: HttpClient) {
    const userInfo = localStorage.getItem("user_info");
    if(userInfo){this.loggedIn=true};
   }

  getPosts(){
    this.exoCards = this.http.get<ExoplanetCards[]>(`${environment.BACKEND_URL}` + '/exoplanets');
  }

  disableBtn(num: number){
    document.getElementById('disable-' + num)!.style.display = "none";
    document.getElementById('enable-'+num)!.style.display = "block";

  }






  postComment(exoId: number, commentInput:string){
    exoId = exoId +1;
  this.http.post<ExoplanetCardComments>(`${environment.BACKEND_URL}` + '/1/' + exoId, {"comment" : commentInput}).subscribe(data => {}
   
  )
  alert("Posted Comment!"); 
  window.location.reload();
}

  getNewLike(likeCount: number){
    return likeCount + 1;
  }
  likeBtn(exoId: number){

    exoId = exoId +1;
    console.log(exoId);
    this.http.post<ExoplanetLikes>(`${environment.BACKEND_URL}` + '/like', {"exoplanetId" : exoId}).subscribe(data => {

  })
  
  //window.location.reload();
  }

  
  showModal(index: number){
    document.getElementById('change-modal-' +index)!.style.display = "block";
    document.getElementById('hideThis-' + index)!.style.display = "none";
  }

  closeModal(index: number){
    document.getElementById('change-modal-' +index)!.style.display = "none";
    document.getElementById('hideThis-' +index)!.style.display = "block";
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
