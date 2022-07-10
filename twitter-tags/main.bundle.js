webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n  max-width: 1000px;\n  margin: auto;\n  padding-top: 20px;\n}\n\n.top-bar{\n  text-align: center;\n  font-size: 32px;\n}\n\nmd-form-field{\n  min-width: 300px;\n}\n\n.key-holder, .manage-tags{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: start;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.key-holder-key{\n  margin-right: 20px;\n}\n.key-holder-key-content{\n  background: #3f51b5;  \n  padding: 5px 10px 5px 10px;\n  color: white;\n  font-size: 24px;\n}\n.item-class{\n  cursor: pointer;\n}\n.key-holder-close{\n  text-align: right;\n}\n\n.key-holder-close .fa-times{\n  text-align: right;\n  font-size: 20px;\n  -webkit-text-stroke: 4px white;\n}\n\n.key-holder-close .fa-times:hover{\n  -webkit-text-stroke: 3px white;\n}\n\n.fa-tag{\n  color: brown;\n}\n\n.mat-ink-bar {\n  position: absolute;\n  bottom: 0;\n  height: 2px;\n  transition: .5s cubic-bezier(.35,0,.25,1);\n}\n\n.tweet-holder{\n   display: -webkit-box;\n   display: -ms-flexbox;\n   display: flex;\n   -webkit-box-pack: start;\n       -ms-flex-pack: start;\n           justify-content: start;\n   overflow-x: scroll;\n   padding: 10px 0px 10px 0px;\n}\n\n.tweet-holder-box{\n  padding: 10px;\n  background: white;\n  box-shadow: -1px 1px 4px 1px rgba(0,0,0,0.25);\n}\n\n.tweet-anchor-holder-box{\n  max-height: 500px;\n  overflow-y: scroll;\n}\n.timeline-Header-title {\n  font-size: 21px;\n  font-weight: 300;\n  line-height: 24px;\n  color: #292F33;\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\n}\n.customisable-highlight{\n  color: #3b94d9;\n  text-decoration: none;\n  outline: 0;\n}\n.timeline-Header-byline {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  color: #8899A6;\n} \n\ni{\n  cursor: pointer;\n}\n\n.twitter-timeline{\n  display: none;\n}\n.widget-available{\n  color: powderblue;\n}\n\na{\n  color: white;\n}\n\n.selected, .tag-selector-holder a:hover{\n  color: darkorange;\n}\n\n.hide{\n  display:none;\n}\n.tag-selector:not(.hide){\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n}\n\n.tag-selector-icon{\n  font-size: 14px;\n  text-align: center;\n}\n.tag-selector-holder{\n  margin-right: 20px;\n}\n.tag-selector .tag-selector-holder:last-child{\n  margin-right: 0px;\n}\n\n.label-icon-fa, .md-tab-label i, .md-tab-label .fa{\n  padding-right: 10px;\n  padding-top: 1px;\n}\n\n.tag-selector .tag-selector-holder:first-child{\ndisplay: none;\n}\n#user-msg{\n  position: absolute;\n  font-size: 12px;\n  margin-top: 20px;\n  text-align: center;\n  width: 100%;\n  color: #b30000;\n}\n\n.devider-line{\n  border-bottom: 1px solid #ccc;\n  max-width: 1200px;\n  margin: auto;\n  margin-bottom: 20px;\n  margin-top: -5px;\n}\n\n.mat-tab-label {\n  min-width: 75px;\n} \n\n.no-tweets-by{\n  padding-top: 20px;\n}\n\n.fa-eye-slash{\n  color: #626262;\n}\n@media screen and (max-width: 700px) {\n  .top-bar{\n    font-size: 22px;\n  }\n\n  .key-holder-key-content {\n    font-size: 18px;\n    padding: 5px;\n  }\n}\n\n.fa-plus-circle:hover{\n  color: #3f51b5;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n         <div class=\"top-bar\">\n                <md-form-field class=\"\">\n                        <input mdInput [(ngModel)]=\"key\" placeholder=\"Tweets by @\" value=\"{{key}}\">  \n                        <span id=\"user-msg\"></span>           \n                 </md-form-field>\n                <span>\n                <md-icon>\n                                <i (click)='addKey($event)' class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n                </md-icon>   \n                </span>\n         </div>\n\n        <br/><br/>\n\n        \n         <md-tab-group>\n                     <!-- //// --> \n                     <ng-container *ngFor=\"let label of labelList; let i = index\">\n\n                        <md-tab *ngIf=\"label.showLabel\">\n                                        <ng-template  md-tab-label>\n                                                        <i aria-hidden=\"true\" class=\"label-icon-fa\" [ngClass]=label.labelClass></i>                                                        \n                                                      {{label.labelName}}\n                                        </ng-template>\n\n                                        <div  class='key-holder'>\n                                        <div *ngFor=\"let item of keysListAt;\">\n                                          <div *ngIf=\"!label.isShown || item.type === label.labelKey\" class='key-holder-key'>\n                                           <div class='key-holder-close'>\n                                              <i class=\"fa fa-tag\" aria-hidden=\"true\" (click)=\"tagKeys($event,item)\"></i>                                \n                                              <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"deleteKeys($event,item)\"></i>\n                                           </div>     \n                                           <div  class='key-holder-key-content'>\n                                              <div class=\"hide tag-selector\">\n                                                      \n                                                <div class=\"tag-selector-holder\" *ngFor=\"let labelInner of labelList;\">\n                                                          <a *ngIf=\"labelInner.isShown\" href=\"#\" [ngClass]=\"item.type === labelInner.labelKey ? 'selected' : ''\" (click)=\"selectedTag($event,labelInner.labelKey,item.key)\">                                                                \n                                                                <div class=\"tag-selector-icon\">\n                                                                        <i aria-hidden=\"true\" class={{labelInner.labelClass}}></i></div>\n                                                              <div style=\"font-size: 12px;\">{{labelInner.labelName}}</div>\n                                                           </a>\n                                                </div>\n                                                                     \n                                              </div>        \n                                              <div (click)=\"showHideTwitterWidget($event,item.key)\" [ngClass]=\"(item.shown)? 'widget-available item-class':'item-class'\"\n                                                      >\n                                                                      {{item.key}}\n                                                      </div>  \n                                           </div>  \n                                           </div> \n                                      </div>\n                                      <span class=\"no-tweets-by\" *ngIf=\"(label.isShown && totalCountOfEachLabel(label.labelKey))\">\n                                              No content under this label tab, Go to <b>Tweets By @</b> tab to add any tweets by to this label.</span>                                      \n                                </div>    \n                      \n                                      </md-tab>\n                                </ng-container>\n                                      <!-- /**** -->\n\n\n                <md-tab>\n                       \n                        <ng-template md-tab-label>\n                                                Manage Label\n                       </ng-template>\n\n                       \n                       <div>\n                        <div>\n                                <br/>\n                                <md-form-field class=\"\">\n                                                <input mdInput [(ngModel)]=\"labelName\" placeholder=\"Label Name\" value=\"{{labelName}}\">  \n                                </md-form-field>\n                                <i  class=\"fa fa-plus\" (click)=\"addLabel()\" aria-hidden=\"true\"></i>   \n                                \n\n                        </div>\n                        <div class=\"manage-tags\">\n                                 <div *ngFor=\"let label of labelList; let i = index\">\n                                        <div class='key-holder-key' *ngIf=\"label.isShown\">\n                                                 <div class='key-holder-close'>\n                                                    <i *ngIf=\"label.showLabel\" class=\"fa fa-eye\" (click)=\"showHideLabels(label.labelKey)\" aria-hidden=\"true\"></i>   \n                                                    <i *ngIf=\"!label.showLabel\" class=\"fa fa-eye-slash\" (click)=\"showHideLabels(label.labelKey)\" aria-hidden=\"true\"></i>                                                   \n                                                    <i *ngIf=\"label.deleted\" class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"deleteLabels($event,label.labelKey)\"></i>\n                                                 </div>     \n                                                 <div  class='key-holder-key-content'>   \n                                                    <div>\n                                                                            {{label.labelName}}\n                                                    </div>  \n                                                 </div>  \n                                                 </div> </div>\n                          </div>      </div>  \n                          <br/>\n                          <span class=\"no-tweets-by\"> \n                                        <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>|<i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i>   \n                                        Show or hide <b>Label</b> tab from the list of tabs.\n                        </span>\n                        </md-tab> \n        </md-tab-group>\n  \n        <br/><br/>\n        <div class=\"mat-ink-bar\" style=\"visibility: visible; left: 0px; width: 0px;\"></div>\n</div>\n<div>        \n        <!-- <a class=\"twitter-timeline\" data-dnt=\"true\" href=\"https://twitter.com/hashtag/WIN\" data-widget-id=\"908724612095021056\">#WIN Tweets</a> -->\n       \n        <div class=\"devider-line\">\n        </div>\n\n        <div class=\"tweet-holder\">\n                        \n                <div class=\"tweet-holder-box\"  [class.hide]=\"!item.shown\" *ngFor=\"let item of keysListAt; let i = index\">\n                 <div><div class=\"timeline-Header\">\n                                        <h1 class=\"timeline-Header-title u-inlineBlock\" data-scribe=\"element:title\">Tweets <span class=\"timeline-Header-byline\" data-scribe=\"element:byline\">by \n                                         <a class=\"customisable-highlight\" href=\"https://twitter.com/{{item.key}}\" title=\"‎@{{item.key}}\">‎@{{item.key}}</a></span></h1>\n                               </div></div>\n                <div class=\"tweet-anchor-holder-box\" >\n\n                        <a class=\"twitter-timeline\" href=\"https://twitter.com/{{item.key}}\">Tweets by {{item.key}}</a>                                         \n                </div>\n        </div>\n       \n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__label__ = __webpack_require__("../../../../../src/app/label.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tweet__ = __webpack_require__("../../../../../src/app/tweet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tweet_service__ = __webpack_require__("../../../../../src/app/tweet.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let AppComponent = class AppComponent {
    constructor(tweetService) {
        this.tweetService = tweetService;
        this.key = '';
        this.labelName = '';
        this.newSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keysListAt = this.tweetService.getTweetsFromLocalStorage();
        this.labelList = this.tweetService.getLabelsFromLocalStorage();
        this.key = 'NASA';
        this.labelName = 'Tech';
    }
    ngOnInit() {
        const that = this;
        this.newSubject.subscribe(data => {
            this.tweetService.setTweetsToLocalStorage(this.keysListAt);
            window.twttr = (function (d, s, id) {
                let js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
                if (d.getElementById(id)) {
                    return t;
                }
                js = d.createElement(s);
                js.id = id;
                js.src = 'https://platform.twitter.com/widgets.js';
                fjs.parentNode.insertBefore(js, fjs);
                t._e = [];
                t.ready = function (f) {
                    t._e.push(f);
                };
                return t;
            }(document, 'script', 'twitter-wjs'));
            // if ((<any>window).twttr.ready())
            window.twttr.widgets.load();
            setTimeout(function () {
                that.cleariFrameElements();
            }, 1500);
        }, error => alert(error));
        setTimeout(function () {
            that.cleariFrameElements();
        }, 1000);
        setInterval(function () {
            that.cleariFrameElements();
        }, 1000);
        document.addEventListener('click', function () {
            if (document.querySelector('.fa-tag.hide')) {
                document.querySelector('.fa-tag.hide').classList.remove('hide');
            }
            if (document.querySelector('.item-class.hide')) {
                document.querySelector('.item-class.hide').classList.remove('hide');
            }
            if (document.querySelectorAll('.tag-selector:not(.hide)')[0]) {
                document.querySelectorAll('.tag-selector:not(.hide)')[0].classList.add('hide');
            }
        });
    }
    cleariFrameElements() {
        const iframes = document.querySelectorAll('iframe.twitter-timeline');
        [].forEach.call(iframes, function (iframe) {
            // do whatever
            if (iframe.contentWindow.document.querySelector('.timeline-Header')) {
                iframe.contentWindow.document.querySelector('.timeline-Header').remove();
            }
        });
    }
    tagKeys(event, key) {
        if (document.querySelector('.fa-tag.hide')) {
            document.querySelector('.fa-tag.hide').classList.remove('hide');
        }
        if (document.querySelector('.item-class.hide')) {
            document.querySelector('.item-class.hide').classList.remove('hide');
        }
        if (document.querySelectorAll('.tag-selector:not(.hide)')[0]) {
            document.querySelectorAll('.tag-selector:not(.hide)')[0].classList.add('hide');
        }
        event.target.classList.toggle('hide');
        event.target.parentNode.parentNode.querySelector('.item-class').classList.toggle('hide');
        event.target.parentNode.parentNode.querySelector('.tag-selector').classList.toggle('hide');
        event.stopPropagation();
    }
    selectedTag(event, type, key) {
        if (document.querySelector('.fa-tag.hide')) {
            document.querySelector('.fa-tag.hide').classList.remove('hide');
        }
        if (document.querySelector('.item-class.hide')) {
            document.querySelector('.item-class.hide').classList.remove('hide');
        }
        if (document.querySelectorAll('.tag-selector:not(.hide)')[0]) {
            document.querySelectorAll('.tag-selector:not(.hide)')[0].classList.add('hide');
        }
        for (const tweet of this.keysListAt) {
            if (key === tweet.key) {
                tweet.type = type;
            }
        }
        event.preventDefault();
        event.stopPropagation();
    }
    addKey($event) {
        const index = this.keysListAt.findIndex(i => i.key.toLowerCase() === this.key.toLowerCase());
        setTimeout(function () {
            document.getElementById('user-msg').innerText = '';
        }, 3000);
        if (index !== -1) {
            document.getElementById('user-msg').innerText = this.key + ' is already added, avilabel under \'Tweets by @\'  tab.';
            return;
        }
        if (!this.key || this.key.trim() === '') {
            return;
        }
        // this.keysListAt.push(this.key);
        const newTweet = new __WEBPACK_IMPORTED_MODULE_4__tweet__["a" /* Tweet */]();
        newTweet.key = this.key;
        newTweet.shown = true;
        newTweet.type = 'other';
        this.keysListAt.push(newTweet);
        this.key = '';
        this.newSubject.next(this.key);
        $event.stopPropagation();
    }
    addLabel() {
        const index = this.labelList.findIndex(i => i.labelName.toLowerCase() === this.labelName.toLowerCase());
        if (index !== -1) {
            return;
        }
        const localLable = new __WEBPACK_IMPORTED_MODULE_0__label__["a" /* Label */]();
        localLable.labelKey = this.labelName.toLowerCase();
        localLable.isShown = true;
        localLable.showLabel = true;
        localLable.labelClass = 'fa fa-star';
        localLable.labelName = this.labelName;
        localLable.deleted = true;
        this.labelList.push(localLable);
        this.tweetService.setLabelsToLocalStorage(this.labelList);
        this.labelName = '';
    }
    deleteKeys($event, key) {
        const index = this.keysListAt.findIndex(i => i.key === key.key);
        this.keysListAt.splice(index, 1);
        this.newSubject.next(this.key);
        $event.stopPropagation();
    }
    showHideLabels(labelType) {
        for (const label of this.labelList) {
            if (labelType === label.labelKey) {
                label.showLabel = !label.showLabel;
            }
        }
        this.tweetService.setLabelsToLocalStorage(this.labelList);
        event.preventDefault();
        event.stopPropagation();
    }
    deleteLabels($event, labelKey) {
        const index = this.labelList.findIndex(i => i.labelKey === labelKey);
        for (const tweet of this.keysListAt) {
            if (labelKey.toLowerCase() === tweet.type) {
                tweet.type = 'other';
            }
        }
        this.labelList.splice(index, 1);
        this.tweetService.setLabelsToLocalStorage(this.labelList);
        $event.stopPropagation();
    }
    showHideTwitterWidget(event, key) {
        for (const tweet of this.keysListAt) {
            if (key === tweet.key) {
                tweet.shown = !tweet.shown;
            }
        }
        this.newSubject.next(this.key);
    }
    totalCountOfEachLabel(key) {
        let count = 0;
        for (const tweet of this.keysListAt) {
            if (key === tweet.type) {
                count++;
            }
        }
        return count === 0 ? true : false;
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__tweet_service__["a" /* TweetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__tweet_service__["a" /* TweetService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tweet_service__ = __webpack_require__("../../../../../src/app/tweet.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__tweet_service__["a" /* TweetService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/label.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Label {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Label;

//# sourceMappingURL=label.js.map

/***/ }),

/***/ "../../../../../src/app/mock-label.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const LABELS = [
    { labelName: 'Tweets by @', labelKey: '', deleted: false, labelClass: '', isShown: false, showLabel: true },
    { labelName: 'People', labelKey: 'people', deleted: false, labelClass: 'fa fa-user-o', isShown: true, showLabel: true },
    { labelName: 'News', labelKey: 'news', deleted: false, labelClass: 'fa fa-newspaper-o', isShown: true, showLabel: true },
    { labelName: 'Sports', labelKey: 'sport', deleted: false, labelClass: 'fa fa-futbol-o', isShown: true, showLabel: true },
    // { labelName : 'Tech', labelKey : 'tech', deleted: false, labelClass: 'fa fa-microchip', isShown: true, showLabel: true},
    { labelName: 'Other', labelKey: 'other', deleted: false, labelClass: 'fa fa-th', isShown: true, showLabel: true },
];
/* harmony export (immutable) */ __webpack_exports__["a"] = LABELS;

//# sourceMappingURL=mock-label.js.map

/***/ }),

/***/ "../../../../../src/app/mock-tweets.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const TWEETS = [
    { key: 'CNN', type: 'news', shown: true },
    { key: 'FoxNews', type: 'news', shown: true },
    { key: 'ESPN', type: 'sport', shown: false },
    { key: 'Google', type: 'other', shown: true },
    { key: 'TeslaMotors', type: 'other', shown: false },
    { key: 'Visa', type: 'other', shown: false },
    { key: 'ABC', type: 'news', shown: false },
    { key: 'Microsoft', type: 'other', shown: false },
    { key: 'NBC', type: 'sport', shown: false },
    { key: 'F1', type: 'sport', shown: false },
    { key: 'FIFAcom', type: 'sport', shown: false },
    { key: 'ICC', type: 'sport', shown: false },
    { key: 'Apple', type: 'other', shown: false },
    { key: 'NatGeo', type: 'news', shown: false },
    { key: 'NYSE', type: 'news', shown: false },
    { key: 'BillGates', type: 'people', shown: true },
    { key: 'DalaiLama', type: 'people', shown: true },
    { key: 'narendramodi', type: 'people', shown: false },
    { key: 'elonmusk', type: 'people', shown: false }
];
/* harmony export (immutable) */ __webpack_exports__["a"] = TWEETS;

//# sourceMappingURL=mock-tweets.js.map

/***/ }),

/***/ "../../../../../src/app/tweet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TweetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mock_label__ = __webpack_require__("../../../../../src/app/mock-label.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_tweets__ = __webpack_require__("../../../../../src/app/mock-tweets.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let TweetService = class TweetService {
    constructor() { }
    getTweets() {
        return __WEBPACK_IMPORTED_MODULE_1__mock_tweets__["a" /* TWEETS */];
    }
    getLabels() {
        return __WEBPACK_IMPORTED_MODULE_0__mock_label__["a" /* LABELS */];
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
    setLabelsToLocalStorage(labellist) {
        localStorage.setItem('my-label-list', JSON.stringify(labellist));
    }
};
TweetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TweetService);

//# sourceMappingURL=tweet.service.js.map

/***/ }),

/***/ "../../../../../src/app/tweet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Tweet {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Tweet;

//# sourceMappingURL=tweet.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map