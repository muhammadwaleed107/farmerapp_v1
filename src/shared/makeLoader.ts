import { Injectable } from "@angular/core";
import { LoadingController } from "ionic-angular/components/loading/loading-controller";

@Injectable()
export class MakeLoader {
  constructor(
    public loadingCtrl:LoadingController
  ) {

  }
  makeLoader(message){
    let loader = this.loadingCtrl.create({
      content:message,
    })
    return loader;
  }
}
