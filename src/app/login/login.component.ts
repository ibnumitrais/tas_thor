import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { NgForm } from '@angular/forms';

declare var $:any;
declare var swal: any;

// SERVICE
import { ModelUserService } from '../model-user.service';

// MODEL
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // private users: User[];
  constructor(private router: Router, private _userService: ModelUserService) {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {

    // this._userService.getUser().then(users => this.users = users);
  }

  login(form: NgForm) {
    $('.segment.login').addClass('loading');
    this._userService.login(form.value.username, form.value.password).subscribe(result => {
      if (result === true) {
          this.router.navigate(['/dashboard']);
      } else {
        swal({
            title: 'Opps!',
            text: "Username or password is not match in our Database!",
            type: 'error',
            width: 300,
        });
      }
      $('.segment.login').removeClass('loading');
  });

  }

}
