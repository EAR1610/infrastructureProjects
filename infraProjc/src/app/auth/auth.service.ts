import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Usuario } from '../usuario/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  // Provide username and password for authentication, and once authentication is successful, 
//store JWT token in session
  
  authenticate(usuario: Usuario) {
     
    return this.httpClient
      .post<any>("http://localhost:8080/authenticate", JSON.stringify(usuario))
      .pipe(
        map(userData => {
          console.log(usuario);
          let usuarioId=userData.usuarioId;
          let tokenStr = "Bearer " + userData.token;



          sessionStorage.setItem("userid", usuarioId);//usuario.id.toString()); // convertir to string
          sessionStorage.setItem("username", usuario.usuario);
          sessionStorage.setItem("token", tokenStr);
          return userData;
        })
      );
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("userid");
    sessionStorage.removeItem("username");

  }
}
