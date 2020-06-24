import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType,
} from "@angular/common/http";
import { Post } from "./post.model";
import { map, catchError, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };

    this.http
      .post<{ name: string }>(
        "https://catch-of-the-day-conary.firebaseio.com/posts.json",
        postData,
        {
          observe: "response",
        }
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    let searchParams = new HttpParams();

    searchParams = searchParams.append("print", "pretty");
    searchParams = searchParams.append("test", "test");

    return this.http
      .get<{ [key: string]: Post }>(
        "https://catch-of-the-day-conary.firebaseio.com/posts.json",
        {
          headers: new HttpHeaders({ "Custom-Header": "Hello" }),
          params: searchParams,
        }
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }

          return postsArray;
        }),
        catchError((errorRes) => {
          // send error to analytics
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete("https://catch-of-the-day-conary.firebaseio.com/posts.json", {
        observe: "events",
        responseType: "json",
      })
      .pipe(
        tap((event) => {
          console.log("event", event);
          if (event.type === HttpEventType.Sent) {
            console.log(event.type);
          }

          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
