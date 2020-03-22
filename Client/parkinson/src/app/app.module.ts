import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Reactive Form
import { ReactiveFormsModule } from "@angular/forms";

// App routing modules
import { AppRoutingModule } from "./shared/routes/app-routing.module";

// App components
import { AppComponent } from "./app.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { NewPasswordComponent } from "./components/new-password/new-password.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { VerifyEmailComponent } from "./components/verify-email/verify-email.component";
import { Error404Component } from './components/error404/error404.component';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { MatDialogModule } from "@angular/material/dialog";

import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";

// Auth service
import { AuthService } from "./shared/services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    NewPasswordComponent,
    WelcomeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
