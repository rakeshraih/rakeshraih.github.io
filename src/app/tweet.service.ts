import { LABELS } from './mock-label';
import { TWEETS } from './mock-tweets';
import { Injectable } from '@angular/core';

@Injectable()
export class TweetService {

  constructor() { }

  getTweets() {
    return TWEETS;
  }

  getLabels() {
    return LABELS;
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

  getLabelsFromLocalStorage() {
    
        const itemList = localStorage.getItem('my-label-list');
    
        if (itemList && itemList.trim().length > 2) {
          return JSON.parse(itemList);
        }
    
        return this.getLabels();
    
      }

}
