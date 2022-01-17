import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form!: FormGroup
  aSub!: Subscription


  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  // Login form validators and ecees check
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)])
    })

    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {

      } else if (params['eccessDenied']) {

      }
    })
  }

  // Memory clean
  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe(),
        () => this.router.navigate(['/login'])
    }
  }

  // Send user login data
  onSubmit() {
    this.form.disable()
    this.aSub = this.auth.login(this.form.value).subscribe(   // This.form.valut = user data
      () => this.router.navigate(['/matrices']),
      error => {
        console.warn(error)
        this.form.enable()
      }
    )
  }

}
