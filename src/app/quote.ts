export class Quote {
    datePosted: Date
    likes: number
    dislikes: number
    constructor(public proverb: string, public user: string, public author: string) {
        this.datePosted = new Date()
        this.likes = 0
        this.dislikes = 0
    }
}
