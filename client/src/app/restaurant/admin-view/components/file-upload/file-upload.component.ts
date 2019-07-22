// todo: add drop zones, etc, https://valor-software.com/ng2-file-upload/
// Multiple items, will need: https://scotch.io/tutorials/angular-file-uploads-with-an-express-backend#toc-creating-the-cors-middleware
// drag & drop: http://www.advancesharp.com/blog/1218/angular-4-upload-files-with-data-and-web-api-by-drag-drop
import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: 'http://localhost:3000/api/123/menu/uploadImage', itemAlias: 'image' });

  constructor() { }

  ngOnInit() {
    // prevents CORS issue
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

    this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
  }

  onFileSelected() {
    console.log('todo');
  }

  onSuccessItem(item: any, response: any, status: number, headers: any) {
    console.log('ImageUpload:uploaded:', item, status, response);
    alert('File uploaded successfully');
  }

  onErrorItem(item: any, response: any, status: number, headers: any) {
    alert('something went wrong');
  }
}
