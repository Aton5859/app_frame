import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { File } from '@ionic-native/file';

/**
 * Generated class for the ModalIframeSmComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal-iframe-sm',
  templateUrl: 'modal-iframe-sm.html'
})
export class ModalIframeSmComponent {

  frameSrc: any;

  constructor(
    public domSanitizer: DomSanitizer,
    private file: File
  ) {
    // this.frameSrc = this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.baidu.com/");
    this.frameSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(this.file.dataDirectory + 'StockManagement/assets/www/index.html');
  }
}
