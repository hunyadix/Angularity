import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import { ITip } from './../tip'

@Injectable()
export class GuideService 
{
	private _tipsUrl: string = " http://www.mocky.io/v2/5a3f936a2e0000550c44fe7a"

	constructor(private _http: HttpClient) {}

		getTips(): Observable<ITip[]> {
		return this._http.get<ITip[]>(this._tipsUrl)
			.do(data => console.log("All: " + JSON.stringify(data)))
			.catch(this.handleError)
	}	

	private handleError(err: HttpErrorResponse) {
		console.log(err.message)
		return Observable.throw(err.message)
	}
}