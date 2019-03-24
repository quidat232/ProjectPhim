import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransformDataService {
  private data = new BehaviorSubject(null);
  public asData = this.data.asObservable();

  public transformData( thamso:any ){
    this.data.next( thamso );
  }

  constructor() { }
}
