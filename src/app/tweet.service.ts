import { TWEETS } from './mock-tweets';
import { Injectable } from '@angular/core';

@Injectable()
export class TweetService {

  constructor() { }

  getTweets() {
    return TWEETS;
  }

  getTweetsFromLocalStorage() {

    const itemList = localStorage.getItem('my-tweet-list');

    if (itemList && itemList.trim().length > 2) {
      return JSON.parse(itemList);
    }

    return this.getTweets();

  }

  setTweetsToLocalStorage(tweetList) {
    localStorage.setItem('my-tweet-list', JSON.stringify(tweetList));
  }

}
