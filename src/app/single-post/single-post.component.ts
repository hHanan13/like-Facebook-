import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service'
import { Comment } from '@angular/compiler';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  postID;

  post;
  comments=[];
  photos;
  user ;
  commentsOfPost=[];



  constructor(private _api: ApiService, private _activeRoute: ActivatedRoute) {


    _api.getPHOTOS().subscribe(data => this.photos = data[this.postID-1]);
    _api.getPOSTS().subscribe(data => this.post = data[this.postID-1]);
    _api.getCOMMENTS().subscribe(data => { this.comments = data ;
    
      for(var i=0;i<this.comments.length;i++)
      {
        if(this.comments[i].postId==this.postID)
        {
          this.commentsOfPost.push(this.comments[i].body)
        }
      }
    });
    _api.getUSERS().subscribe(data => this.user = data[this.postID-1]);

  }




  getID() {
    this.postID = this._activeRoute.snapshot.params.id;
    console.log(this.postID);
  }



  ngOnInit() {
    this.getID();
  }

}
