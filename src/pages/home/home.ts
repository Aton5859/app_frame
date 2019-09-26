import { Zip } from '@ionic-native/zip';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileTransferObject, FileTransfer } from '@ionic-native/file-transfer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url: any;
  /* public progressbarPercent: string = '0%';
  public progress = 0; */

  constructor(
    public navCtrl: NavController,
    private file: File,
    private fileTransfer: FileTransfer,
    private fileTransferObj: FileTransferObject,
    private zip: Zip,
    // private platform: Platform
  ) {
    /* this.platform.ready().then((readySource) => {
      this.zip.unzip(this.file.dataDirectory + "www.zip", this.file.dataDirectory, (progress) => console.log('Unzipping, ' + Math.round((progress.loaded / progress.total) * 100) + '%'))
        .then((result) => {
          if (result === 0) console.log('SUCCESS');
          if (result === -1) console.log('FAILED');
        });
    }); */
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

  clear() {
    try {
      let that: this = this;
      that.file.removeFile(that.file.dataDirectory, "index.html")
        .then(function (result) {
          if (result.success) {
            alert("删除成功");
          }
          alert("result:" + result);
        }, function (error) {
          if (error.code === 1) {
            alert("未找到该文件");
          } else {
            alert("error:" + error.message);
          }
        })
    } catch (error) {
      alert(error);
    }
  }

  download() {
    let that: this = this;
    const url = 'https://github.com/Aton5859/ionic3_steps/blob/master/src/index.html';
    const fileTransfer: FileTransferObject = that.fileTransfer.create();
    fileTransfer.download(url, that.file.dataDirectory + 'githubIndex.html')
      .then((entry) => {
        alert('下载完成' + '\n' + 'download complete: ' + entry.toURL());
      }, (error) => {
        alert("Error:" + error);
      });
    fileTransfer.onProgress(progressEvent => {
      if (progressEvent.lengthComputable) {
        console.log(progressEvent.loaded / progressEvent.total);
      } else {
      }
    });
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

  clearDownloadPage() {
    try {
      let that: this = this;
      that.file.removeFile(that.file.dataDirectory, "githubIndex.html")
        .then(function (result) {
          if (result.success) {
            alert("删除成功");
          }
          alert("result:" + result);
        }, function (error) {
          if (error.code === 1) {
            alert("未找到该文件");
          } else {
            alert("error:" + error.message);
          }
        })
    } catch (error) {
      alert(error);
    }
  }

  downloadZip() {
    let that: this = this;// https://github.com/Aton5859/ionic3_steps/blob/master/www.zip?raw=true
    /* const url = 'https://github.com/Aton5859/ionic3_steps/raw/master/www.zip'; */
    const url = 'https://github.com/Aton5859/ionic3_steps/raw/master/www.zip';
    const fileTransferObj: FileTransferObject = that.fileTransfer.create();
    fileTransferObj.download(url, that.file.dataDirectory + 'www.zip', true)
      .then((entry) => {
        alert('download complete: ' + entry.toURL());
        that.url = entry.toURL();
      }, (error) => {
        alert("Error:" + error);
      })
    fileTransferObj.onProgress(progress => {
      if (progress.lengthComputable) {
        console.log(progress.loaded / progress.total);
      }
    });
  }

  createDir() {
    try {
      let that: this = this;
      that.file.createDir(that.file.dataDirectory, "Steps", true)
        .then((result) => {
          alert(result);
        })
    } catch (error) {
      alert(error);
    }
  }

  unZip() {
    try {
      let that: this = this;
      that.zip.unzip(that.url, that.file.dataDirectory + "Steps/", (progress) => console.log('Unzipping, ' + Math.round((progress.loaded / progress.total) * 100) + '%'))
        .then((result) => {
          /*  if (result === 0) console.log('SUCCESS');
           if (result === -1) console.log('FAILED'); */
          alert("OK");
        });
    } catch (error) {
      alert(error);
    }
  }

  checkDir() {
    try {
      let that: this = this;
      that.file.checkDir(that.file.dataDirectory + "Steps/", "www/")
        .then(function (result) {
          alert("result:" + result);
        }, function (error) {
          alert("error:" + error);
        })
    } catch (error) {
      alert(error);
    }
  }

  turnToUnzipPage() {
    try {
      let that: this = this;
      window.location.href = that.file.dataDirectory + 'Steps/www/index.html';
    } catch (error) {
      alert(error);
    }
  }

  clearDownloadZip() {
    try {
      let that: this = this;
      that.file.removeFile(that.file.dataDirectory, "www.zip")
        .then(function (result) {
          alert("result:" + result);
        }, function (error) {
          alert("error:" + error);
        })
    } catch (error) {
      alert(error);
    }
  }
}
