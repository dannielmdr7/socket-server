
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';
import Server from './classes/server';
//guardar las instalaciones con --save-dev para que sea solo usado en el desarrollo

const server = Server.instance;

server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());//siemopre antes de las rutas
server.app.use(cors({ origin: '*', credentials: true }));//cors permite que personas externas al dominio accedan al servicio
server.app.use('/', router)

server.iniciar(() => {
  console.log(`Servidor corriendo en el puerto ${server.port}`);
})