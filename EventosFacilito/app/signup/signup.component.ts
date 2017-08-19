import { Component, OnInit } from "@angular/core";
import firebase = require('nativescript-plugin-firebase');

@Component({
    selector: "ns-signup",
    moduleId: module.id,
    templateUrl: "./signup.component.html",
})
export class SignupComponent implements OnInit {
    email: string = "davidj.garcastillo@gmail.com";
    password: string;
    passwordConfirmation: string;
    error: string;

    constructor() { }

    ngOnInit(): void {
    }

    signUp() {
        if (this.password !== this.passwordConfirmation) {
            return this.error = "No coinciden las contraseñas";
        }

        this.error = "";

        firebase.createUser({
            email: this.email,
            password: this.password
        }).then(result => {
            console.log("Resultado de la autenticación" + JSON.stringify(result));
        }).catch(err => {
            this.error = JSON.stringify(err);
            console.log(err);
        });
    }
}