import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from 'express';

export const authenticationGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router)
  
  //code to check
  if(localStorage.getItem('user')){
    return true;
  }
  else{
    _router.navigate(['/firstpage']);
    return false;
  }
  
};
