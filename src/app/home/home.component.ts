import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
declare var $: any;
import 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts = [];
  comments = []
  photos = [];
  users = [];
  commentsNum = 0;
  imgPath = " ";



  constructor(private _api: ApiService) {
    
    _api.getPHOTOS().subscribe(data => {
      this.photos = data;
      console.log(data)

    });


    _api.getPOSTS().subscribe(data => this.posts = data);

    _api.getCOMMENTS().subscribe(data => { this.comments = data });
    _api.getUSERS().subscribe(data => this.users = data);


  }

  ngOnInit() {


    $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
        // autoWidth:true
        items: 10,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
      });
    });




   


  }
}

