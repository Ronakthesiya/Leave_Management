import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';


export const logingaurdGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router)

  if(localStorage.getItem('user')){
    return true;
  }
  else{
    _router.navigate(['/firstpage']);
    return false;
  }
};
