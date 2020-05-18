import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(
    public toasterService: ToastrService,
    private spinner: NgxSpinnerService
  ) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          try {
            this.toasterService.error(err.statusText || 'An Unknown Error occurred');
            this.spinner.hide();
          } catch (e) {
            this.toasterService.error('An error occurred', '');
          }
        }
        return of(err);
      }));

  }

}