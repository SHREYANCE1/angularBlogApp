import { Component, OnInit, OnDestroy } from '@angular/core';

//importing route related code
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  //empty object
  public currentBlog;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];

  constructor(private _route: ActivatedRoute, private router: Router, public blogService: BlogService, private blogHttpService: BlogHttpService) {
    console.log("blog-edit component cosntructor called")
  }

  ngOnInit() {
    console.log("blog edit ngOnInit Called")
    //getting the blog id from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data => {
        console.log("logging data");
        console.log(data);
        this.currentBlog = data.data;
        console.log(this.currentBlog);
        console.log("heloo")
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
    
    console.log(this.currentBlog);
  }// end on init
  ngOnDestroy() {
    console.log("blog-view component destroyed")
  }

  public editThisBlog(): any {
    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(

      data => {
        console.log(data);
        alert("Blog edited successfully");
        setTimeout(() => {
          this.router.navigate(['/blog', this.currentBlog.blogId]);
        }, 1000)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        alert("some error occured");
      }
    )
  }//end delete this blogq\z
}


