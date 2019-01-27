import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { error } from 'util';

//decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//simple class
export class HomeComponent implements OnInit,OnDestroy {

  //we will be fetching the lists and data of blogs from an api 
  //but for now we will be declaring a dummy blog variable here

  public allBlogs;

  constructor(public blogHttpService:BlogHttpService) { 
    console.log("home component cosntructor called")
  }

  ngOnInit() {
    console.log("home component initialised");
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(

      data =>{
        console.log("logging data");
        console.log(data);
        this.allBlogs = data.data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
    //this.allBlogs = this.blogHttpService.getAllBlogs();
    console.log(this.allBlogs)
  }

  ngOnDestroy() {
    console.log("home component destroyed")
  }

}
