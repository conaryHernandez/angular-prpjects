import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEventType,
} from "@angular/common/http";
// import { map, tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("Request is on its way");
    const modifiedRequest = req.clone({
      headers: req.headers.append("Auth", "xyz"),
    });

    return next.handle(modifiedRequest);
    /*.pipe(
      tap((event) => {
        console.log("event", event);

        if (event.type === HttpEventType.Response) {
          console.log("Response Arriuved");
          console.log(event.body);
        }
      })
    );*/
  }
}
