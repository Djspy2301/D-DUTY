import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AdminService } from './service/admin.service';

export const authGuard: CanActivateFn = 
(route: ActivatedRouteSnapshot,  state: RouterStateSnapshot) => {
  
  return AdminService.isAdminLoggedIn
};
