import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/errors.interceptor';
import { HeadersInterceptor } from './interceptors/headers.interceptor';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers :[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    },
  ]
})
export class CoreModule { }
