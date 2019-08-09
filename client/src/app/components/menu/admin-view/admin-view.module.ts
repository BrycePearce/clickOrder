import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { AdminViewComponent } from './admin-view.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

// Third Party
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';

@NgModule({
    imports: [
        CommonModule,
        FileUploadModule
    ],
    declarations: [
        AdminViewComponent,
        FileUploadComponent
    ],
    exports: [
        AdminViewComponent
    ]
})
export class AdminViewModule { }
