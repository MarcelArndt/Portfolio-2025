import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  constructor(private router:Router){}
  scrollToTop(){
    if (this.router.url !== '/' && this.router.url !== ''){
              this.router.navigate(['/']).then(() => {
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 500);
          })
        }
         else {
             window.scroll(0, 0);
        }
    }
}
