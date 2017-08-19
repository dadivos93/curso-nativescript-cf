import { Component, OnInit } from "@angular/core";

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
        console.log("Password: " + this.password);
        console.log("Password confirmation: " + this.passwordConfirmation);
        console.log("Email: " + this.email);
    }
}