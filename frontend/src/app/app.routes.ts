import {Routes} from '@angular/router';
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication/authentication.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AUTH_ROUTES} from "./auth/auth.routers";



export const routes: Routes = [
  {path: '', redirectTo: '/mensagens', pathMatch: 'full'},
  {path: 'mensagens', component: MessagesComponent, title: 'Mensagens'},
  {path: 'autenticacao', component: AuthenticationComponent, title: 'Autenticação',
    children: AUTH_ROUTES},
  {path: '**', component: PageNotFoundComponent, title: 'Página não encontrada'}
];
