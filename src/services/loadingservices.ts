import { Injectable } from "@angular/core";
import { LoadingController } from "ionic-angular";

@Injectable()
export class LoadingServices {
    constructor(
        public loadingCtrl: LoadingController
    ) {
    }

    public presentLoading(message) {
        let loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: message
            /* duration: 3000 */
        });
        return loading;
    }
}
