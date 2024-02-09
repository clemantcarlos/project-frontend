import { JsonPipe } from '@angular/common';
import { CanActivateFn } from '@angular/router';
export const loginHomeGuard: CanActivateFn = (route, state) => {

  if(localStorage.getItem('user')===null){
   location.assign(location.origin)
    return false
  }

  return true
};
