import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    form: FormGroup;

    constructor(private auth: AuthService, private fb: FormBuilder, private route: Router) {
        this.form = fb.group({
            'name': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        const { name, password } = this.form.value;
        this.auth.signup(name, password).subscribe(
            {
                next: (v) => {
                    console.log(v);
                    localStorage.setItem("auth", JSON.stringify(v));
                    localStorage.setItem("token", v.token);
                    console.log(v);
                    if (v.role === 0) {
                        this.route.navigateByUrl('/admin');
                    } else if (v.role === 1) {
                        this.route.navigateByUrl('/ordering');
                    } else if (v.role === 2) {
                        this.route.navigateByUrl('/restaurant');
                    } else if (v.role === 3) {
                        this.route.navigateByUrl('/deliver');
                    }
                },
                error: (e) => {
                    console.log(e);
                    if(e.error.message)
                    alert(e.error.message);
                    else {
                        if(e.error.code === 11000) alert("Ce nom d'utilisateur est déjà pris.");
                    }
                },
                complete: () => console.info('complete')
            }
        );
    }

}
