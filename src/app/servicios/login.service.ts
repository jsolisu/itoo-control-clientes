import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
    constructor(private authService: AngularFireAuth) { }

    login(email: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.authService.signInWithEmailAndPassword(email, password)
                .then(datos => resolve(datos), error => reject(error));
        });
    }

    getAuth(): Observable<any> {
        return this.authService.authState.pipe(
            map(auth => auth)
        );
    }

    logout(): void {
        this.authService.signOut();
    }

    registrarse(email: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.authService.createUserWithEmailAndPassword(email, password)
                .then(datos => resolve(datos), error => reject(error));
        });
    }
}
