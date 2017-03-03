import { Injectable } from "@angular/core";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Injectable()

export class AppService {
    lists: FirebaseListObservable<any>;
    constructor(private af: AngularFire) {
    }
    onSubmit(value) {
        console.log("valueeeeeeeee", value);
        this.af.database.list('user').push({
            value: value
        })
        return this.lists = this.af.database.list('user');
    }

}