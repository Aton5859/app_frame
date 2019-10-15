import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { Zip } from '@ionic-native/zip';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  url: any;

  constructor(
    public navCtrl: NavController,
    private file: File,
    private fileTransfer: FileTransfer,
    private zip: Zip,
  ) {

  }

  //#region 获取条码zip文件写入本地文件解压并跳转
  downStockAppZip() {
    try {
      let that: this = this;
      const url = 'https://github.com/Aton5859/app_frame/raw/master/StockManagement.zip';
      const fileTransferObj: FileTransferObject = that.fileTransfer.create();
      fileTransferObj.download(url, that.file.dataDirectory + 'StockManagement.zip', true)
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
    } catch (error) {
      alert(error);
    }
  }

  createStockAppDir() {
    try {
      let that: this = this;
      that.file.createDir(that.file.dataDirectory, "StockManagement", true)
        .then((result) => {
          alert(result);
        })
    } catch (error) {
      alert(error);
    }
  }

  unZipStockAppZip() {
    try {
      let that: this = this;
      that.zip.unzip(that.url, that.file.dataDirectory + "StockManagement/", (progress) => console.log('Unzipping, ' + Math.round((progress.loaded / progress.total) * 100) + '%'))
        .then((result) => {
          /*  if (result === 0) console.log('SUCCESS');
           if (result === -1) console.log('FAILED'); */
          alert("OK");
        });
    } catch (error) {
      alert(error);
    }
  }

  turnToStockAppPage() {
    try {
      let that: this = this;
      window.location.href = that.file.dataDirectory + 'StockManagement/assets/www/index.html';
    } catch (error) {
      alert(error);
    }
  }

  clearDownloadStockAppZip() {
    try {
      let that: this = this;
      that.file.removeFile(that.file.dataDirectory, "StockManagement.zip")
        .then(function (result) {
          alert("result:" + result);
        }, function (error) {
          alert("error:" + error);
        })
    } catch (error) {
      alert(error);
    }
  }
  //#endregion

}
