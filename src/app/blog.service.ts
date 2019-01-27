import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public currentBlog;

  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2017-1020T12:20:47.854Z",
      "created": "2017-1020T12:20:47.854Z",
      "tags": ["humor", "comedy", "tags1", "tags2"],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is a blog body",
      "description": "this is a blog1 description",
      "title": "This is blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2017-1020T12:20:47.854Z",
      "created": "2017-1020T12:20:47.854Z",
      "tags": ["tags1", "tags2"],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>this is a big text</h1> <p>Small text</p>",
      "description": "this is a blog 2 description and this is an example blog",
      "title": "This is example blog"
    },
    {
      "blogId": "3",
      "lastModified": "2017-1020T12:20:47.854Z",
      "created": "2017-1020T12:20:47.854Z",
      "tags": ["tags", "tags"],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>this is a big text</h1> <p>Small text</p>",
      "description": "this is a blog 3 description",
      "title": "This is third blog"
    }
  ]
  public getAllBlogs():any {
    return this.allBlogs;
  }

  public getSingleBlogInformation(currentBlogId): any {
    for(let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
    return this.currentBlog;
  }//public fn ends

  constructor() { 
      console.log(" service component is called ")
    
  }
}
