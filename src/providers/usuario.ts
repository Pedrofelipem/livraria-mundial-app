import firebase from "firebase";
import "firebase/database"
import { UsuarioScreen, UsuarioScreenProps } from "../screens/usuario/usuario";

export class UsuarioProvider{
    
    private userID;
    private db;
    
    public constructor(){
        this.userID = firebase.auth().currentUser?.uid;
        this.db = firebase.database().ref('usuarios')
    }

    public editar(usuario: UsuarioScreenProps){
        this.db.child(usuario.id).set(usuario);

    }
    public async listar(): Promise<UsuarioScreenProps[]>{
        const usuarios:any[] =[]

        const snapshots = await this.db.once('value');
        snapshots.forEach(snap =>{
            usuarios.push(snap.val())
        })

        return usuarios;
    }
}
export const useUsuariosProvider = () => new UsuarioProvider();