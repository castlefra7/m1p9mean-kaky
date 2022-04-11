import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
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
        this.auth.login(name, password).subscribe(
            {
                next: (v) => {
                    localStorage.setItem("auth", JSON.stringify(v));
                    localStorage.setItem("token", v.token);
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
                error: (e) => console.error(e),
                complete: () => console.info('complete')
            }
        );
    }

}
