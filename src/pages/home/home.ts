import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private file: File,
    private fileTransfer: FileTransfer,
    private fileTransferObj: FileTransferObject
  ) {

  }

  write() {
    try {
      let that: this = this;
      that.file.writeFile(that.file.dataDirectory, "index.html", "<!DOCTYPE html> <html lang=\"en\" dir=\"ltr\"><body> 123 </body> </html> ")
        .then(function (result) {
          alert("result:" + result);
        }, function (error) {
          alert("error:" + error);
        })
    } catch (error) {
      alert(error);
    }
  }

  read() {
    try {
      let that: this = this;
      that.file.readAsText(that.file.dataDirectory, "index.html")
        .then(function (result) {
          alert("result:" + result);
        }, function (error) {
          alert("error:" + error);
        })
    } catch (error) {
      alert(error);
    }
  }

  turn() {
    try {
      let that: this = this;
      window.location.href = that.file.dataDirectory + 'index.html';
    } catch (error) {
      alert(error);
    }
  }

  download() {
    let that: this = this;
    const url = 'https://github.com/Aton5859/ionic3_steps/blob/master/src/index.html';
    this.fileTransferObj.download(url, this.file.dataDirectory + 'githubIndex.html')
      .then((entry) => {
        alert('download complete: ' + entry.toURL());
      }, (error) => {
        alert("Error:" + error);
      });
    that.fileTransferObj.onProgress = function (progressEvent: any) {
      if (progressEvent.lengthComputable) {
        console.log(progressEvent.loaded / progressEvent.total);
      } else {
      }
    };
  }

  readDownladData() {
    try {
      let that: this = this;
      that.file.readAsText(that.file.dataDirectory, "githubIndex.html")
        .then(function (result) {
          alert("result:" + result);
        }, function (error) {
          alert("error:" + error);
        })
    } catch (error) {
      alert(error);
    }
  }

  turnToDownloadPage() {
    try {
      let that: this = this;
      window.location.href = that.file.dataDirectory + 'githubIndex.html';
    } catch (error) {
      alert(error);
    }
  }
}
