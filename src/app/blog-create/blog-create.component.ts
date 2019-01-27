import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  public blogTitle : string;
  public blogBodyHtml : string;
  public blogDescription : string;
  public blogCategory : string;
  public possibleCategories = ["Comedy","Drama","Action","Technology"]
  constructor(private blogHttpService : BlogHttpService, public _route: ActivatedRoute, public router : Router) {
   
   }

  ngOnInit() {
  }

  public blogCreate() :any {
    let blogData = {
      title : this.blogTitle,
      description : this.blogDescription,
      category : this.blogCategory,
      blogBody : this.blogBodyHtml
    }//end blog data

    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(

      data => {
        console.log("blog created");
        console.log(data);
        alert('Blog Posted Successfully');
        setTimeout(() =>{
          this.router.navigate(['/blog',data.data.blogId])
        }, 1000)
        
      },

      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        alert('some error occured');
      }
    )
  }
}
