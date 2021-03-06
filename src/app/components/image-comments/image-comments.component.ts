import { Component, OnInit } from '@angular/core';
import { ImageComment } from 'app/models/imageComment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../../services/image.service';



@Component({
  selector: 'app-image-comments',
  templateUrl: './image-comments.component.html',
  styleUrls: ['./image-comments.component.css']
})


export class ImageCommentsComponent implements OnInit {
  imageComments!: Observable<ImageComment[]>;
  readonly BACKEND_URL = 'http://34.82.80.154:8065/';
  nasaId!: any;
  largeUrl!: string; 
  imageInfo: any;
  time: any;
  unit: any;
  userInfo: any;
  userName!: string;
  userId: any;
  userJson: any;
  comment: any;
  member!: boolean;

  getComments(){
    // this.nasaId = "nasaID"
    this.imageComments = this.http.get<any>(this.BACKEND_URL + 'images/' + this.nasaId + '/comments');
    console.log(this.imageComments);
  }

  constructor(private http: HttpClient, private route: ActivatedRoute, private imageService: ImageService) { 
    try {
      this.userInfo = localStorage.getItem('user_info');
      this.userJson = JSON.parse(this.userInfo);
      console.log(this.userJson);
      this.userName = this.userJson.username;
      this.userId = this.userJson.userId;
      this.member = true;
    } catch (e) {
      console.log('e: ' + e)
      this.member = false;
    }
    

    this.imageInfo = this.imageService.getImageInfo();

    this.nasaId = this.imageInfo.nasaId;
    console.log(this.imageInfo)
    console.log(this.imageInfo.nasaId)
    var title = this.imageInfo.title;
    // var desc = imageInfo.description;
    // var thumbUrl = imageInfo.thumbUrl;
    this.largeUrl = this.imageInfo.largeUrl;
    console.log(this.largeUrl);
    // var origUrl = imageInfo.origUrl;
    this.time = new Date().getTime() - new Date(this.imageInfo.uploadDate).getTime();

    

  }

  ngOnInit(): void {
   this.getComments();
   

  }
  getTimeDif(uploadTime: any) {
    const time = +(new Date().getTime() - new Date(uploadTime).getTime()) / (1000 * 60 * 60 * 24);
    return Math.round(time);
  }

  sendComment(com: any) {
    if (this.member) {
      this.comment = com.value;
      console.log(this.comment);
      this.http.post<ImageComment>('http://34.82.80.154:8065/images/'+this.nasaId +'/'+ this.userId,
    {
      author_id: this.userId,
      author_name: this.userName,
      comment: this.comment,
      nasa_id: this.nasaId,
      upload_date: new Date().getTime()
    }
      ).subscribe((res) => {
        this.getComments()
      }
        );
    
    } else {
      alert("Please login or sign up to add a comment. Thank you.")
    }
    
  }

  getOrigUrl(url: string) {
    window.open(url, "_blank");
  }
}
