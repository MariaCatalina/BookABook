import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Message } from './message';

@Injectable()
export class PublisherService {
    private channelMap: Map<string, Subject<Message>>;
    constructor() {
        this.channelMap = new Map<string, Subject<Message>>();
    }

    createChannel(channelName: string): Subject<Message> {
        if (!this.channelMap.has(channelName)) {
            let newSubject: Subject<Message> = new Subject<Message>();
            this.channelMap.set(channelName, newSubject);
            newSubject.subscribe(null, null,
                () => {
                    /* when the channel is completed, remove it from the map */
                    this.channelMap.delete(channelName);
                }
            );
            return newSubject;
        } else {
            return this.channelMap.get(channelName);
        }
    }

    subscribeToChannel(channelName: string): Observable<Message> {
        /* subscribers sees only observables */
        if (!this.channelMap.has(channelName)) {
            this.createChannel(channelName);
        }
        return this.channelMap.get(channelName).asObservable();
    }

    sendToChannel(channelName: string, message: Message): boolean {
        /* maybe an issue that you can send to a channel even if your are not subscribed ? */
        if (!this.channelMap.has(channelName)) {
            throw new Error("Channel does not exist or it has been closed");
        }
        this.channelMap.get(channelName).next(message);
        return true;
    }

}