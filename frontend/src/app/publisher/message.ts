
export class Message {

    Content: any;
    Owner: any;

    constructor(content: any, owner: any = null) {
        this.Content = content;
        this.Owner = owner;
    }
}
