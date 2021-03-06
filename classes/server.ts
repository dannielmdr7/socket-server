import express from 'express'
import { SERVER_PORT } from '../global/environments';
import socketIo from 'socket.io'
import http from 'http'
import * as socket from '../sockets/socket'

export default class Server{
  private static _instance:Server;


  public app : express.Application;
  public port:number;

  public io:socketIo.Server;
  private httpServer:http.Server;

  private constructor(){
    this.app = express();
    this.port = SERVER_PORT;
    this.httpServer = new http.Server(this.app);
    this.io = new socketIo.Server(this.httpServer);
    this.escucharSockets();
  }

  public static get instance(){
    return this._instance || (this._instance = new this());
  }

  private escucharSockets(){
    console.log('Escuchando clientes SOCKETS');
    this.io.on('connection',cliente =>{
      console.log('Nuevo cliente conectado');

      socket.mensaje(cliente,this.io);
      
      //Desconectar Cliente 
      socket.desconectar(cliente);
    });
    

  }

  start(callback:()=>void){
    this.httpServer.listen(this.port,callback)
  }

}