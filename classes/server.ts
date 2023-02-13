import { SERVER_PORT } from '../global/environment';
import express from "express"

export default class Server {
  public app: express.Application;
  public port: number = SERVER_PORT;
  constructor() {
    this.app = express();
    this.port = SERVER_PORT;
  }


  start(cb: () => void) {
    this.app.listen(this.port, cb)
  }

}