import { Zip } from '@ionic-native/zip';
import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileTransferObject, FileTransfer } from '@ionic-native/file-transfer';
/* import { RoundProgressEase } from 'angular-svg-round-progressbar'; */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url: any;
  /* public progressbarPercent: string = '0%';
  public progress = 0; */

  // 圆形进度条相关
  /* current: number = 27;
  max: number = 50;
  stroke: number = 15;
  radius: number = 125;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = false;
  clockwise: boolean = true;
  color: string = '#45ccce';
  background: string = '#eaeaea';
  duration: number = 80;
  animation: string = 'easeOutCubic';
  animationDelay: number = 0;
  animations: string[] = [];
  gradient: boolean = false;
  realCurrent: number = 0; */

  constructor(
    public navCtrl: NavController,
    private file: File,
    private fileTransfer: FileTransfer,
    private zip: Zip,
    /* ease: RoundProgressEase,
    private zone: NgZone */
    // private platform: Platform
  ) {
    /* 平台read后执行调用 */
    /* this.platform.ready().then((readySource) => {
    }); */

    /*  圆形进度显示 */
    /* for (let prop in ease) {
      if (prop.toLowerCase().indexOf('ease') > -1) {
        this.animations.push(prop);
      };
    }; */
    /* this.zone.run(() => {
      this.current;
      this.max;
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
        /*  圆形进度显示 */
        /* that.max = Number(progress.total.toString());
        that.current = Number(progress.loaded.toString()); */
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

  /*  圆形进度显示 */
  /* increment(amount = 1) {
    this.current += amount;
  }

  getOverlayStyle() {
    let isSemi = this.semicircle;
    let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': isSemi ? 'auto' : '50%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '50%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': this.radius / 3.5 + 'px'
    };
  } */
}
