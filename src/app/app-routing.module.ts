import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublisherComponent } from './components/publisher/publisher.component';
import { AppComponent } from './app.component';
import { AuthorComponent } from './components/author/author.component';
import { BookComponent } from './components/book/book.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { DetailComponent } from './components/detail/detail.component';
import { CreateComponent } from './components/create/create.component';
const routes: Routes = [
  { path: '', component: BookComponent },
  { path: 'publisher', component: PublisherComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'book', component: BookComponent },
  { path: 'user', component: UserComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
