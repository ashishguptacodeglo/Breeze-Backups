import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyPropertyComponent } from './verify-property.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { TutorialComponent } from '../get-started/tutorial/tutorial.component';

const routes: Routes = [
  { path: '', component: TutorialComponent },
  { path: 'upload-document', component: UploadDocumentComponent },
  { path: 'thankyou', component: ThankyouComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifyPropertyRoutingModule { }
