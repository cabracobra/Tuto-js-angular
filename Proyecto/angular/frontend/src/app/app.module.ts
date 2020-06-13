import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { TaskComponent } from './components/task/task.component';
import { PrivateTaskComponent } from './components/private-task/private-task.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    TaskComponent,
    PrivateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //agregamos el modulo aqui tambien
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
