import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnsupportedBrowserComponent } from './unsupported-browser/unsupported-browser.component';
import { AppPreloadingStrategy } from './app-preloading';
import { getBaseUrl } from './app.utils';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren:
          './home/landing-page/landing-page.module#LandingPageModule',
          data: { preload: true }
      },
    ]
  },
  {
  path: 'error-page',
  component: ErrorPageComponent
  },
  {
  path: 'unsupported-browser',
  component: UnsupportedBrowserComponent
  },
  {
  path: '**',
  component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {useHash: false, preloadingStrategy: AppPreloadingStrategy, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}