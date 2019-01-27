import { Component, OnInit, OnDestroy } from '@angular/core';

//importing route related code
import {ActivatedRoute, Router} from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

import { Location } from '@angular/common'; 

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit,OnDestroy {

  //empty object
  public currentBlog;
 
  constructor(private _route : ActivatedRoute, private router : Router,public blogService : BlogService,private blogHttpService :BlogHttpService, public location : Location) {
    console.log("blog-view component cosntructor called")
   }

  ngOnInit() {
    console.log("blog view ngOnInit Called")
    //getting the blog id from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data =>{
        console.log("logging data");
        console.log(data);
        this.currentBlog = data.data;
        console.log(this.currentBlog);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
    console.log("blog-view component initialised")
    
  }
  ngOnDestroy() {
    console.log("blog-view component destroyed")
  }

  public deleteThisBlog() : any {
    this.blogHttpService.deleteThisBlog(this.currentBlog.blogId).subscribe(

      data => {
        console.log(data);
        alert("Blog deleted successfully");
        setTimeout(() => {
          this.router.navigate(['/home']);
        },1000)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        alert("some error occured");
      }
    )
  }//end delete this blog

  ///method for go back functionality
  public goBackToThePreviousPage() : any {
    this.location.back();
  }

}
