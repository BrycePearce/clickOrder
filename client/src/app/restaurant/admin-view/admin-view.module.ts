import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { AdminViewComponent } from './../admin-view/admin-view.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

// Third Party
import { FileSelectDirective } from 'ng2-file-upload';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        AdminViewComponent,
        FileUploadComponent,
        FileSelectDirective
    ],
    exports: [
        AdminViewComponent
    ]
})
export class AdminViewModule { }
