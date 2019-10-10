import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { ModalIframeSmComponent } from './modal-iframe-sm/modal-iframe-sm';
@NgModule({
	declarations: [ProgressBarComponent,
    ModalIframeSmComponent],
	imports: [IonicModule],
	exports: [ProgressBarComponent,
    ModalIframeSmComponent]
})
export class ComponentsModule { }
