webpackJsonp([1,4],{

/***/ 269:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 269;


/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(282);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(348),
        styles: [__webpack_require__(338)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auctions_auctions_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__new_new_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_edit_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__communicate_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__http_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_moment__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__round_pipe__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__note_note_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_order_pipe__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_order_pipe__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__auctions_auctions_component__["a" /* AuctionsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__new_new_component__["a" /* NewComponent */],
            __WEBPACK_IMPORTED_MODULE_8__edit_edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__round_pipe__["a" /* RoundPipe */],
            __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__note_note_component__["a" /* NoteComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_12_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_16_ng2_order_pipe__["Ng2OrderModule"],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__communicate_service__["a" /* CommunicateService */], __WEBPACK_IMPORTED_MODULE_11__http_service__["a" /* HttpService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auctions_auctions_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_edit_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_new_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });






var APP_ROUTES = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__auctions_auctions_component__["a" /* AuctionsComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_3__edit_edit_component__["a" /* EditComponent */] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_4__new_new_component__["a" /* NewComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoteComponent = (function () {
    function NoteComponent() {
    }
    NoteComponent.prototype.ngOnInit = function () {
    };
    return NoteComponent;
}());
NoteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-note',
        template: __webpack_require__(354),
        styles: [__webpack_require__(344)]
    }),
    __metadata("design:paramtypes", [])
], NoteComponent);

//# sourceMappingURL=note.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// round.pipe.ts

/**
 *
 */
var RoundPipe = (function () {
    function RoundPipe() {
    }
    /**
     *
     * @param value
     * @returns {number}
     */
    RoundPipe.prototype.transform = function (value) {
        return Math.round(value);
    };
    return RoundPipe;
}());
RoundPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'round' })
], RoundPipe);

//# sourceMappingURL=round.pipe.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Star; });
var Star = (function () {
    function Star() {
    }
    return Star;
}());

//# sourceMappingURL=starClass.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommunicateService = (function () {
    function CommunicateService() {
        this.observedUser = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    CommunicateService.prototype.updateUser = function (user) {
        this.observedUser.next(user);
    };
    return CommunicateService;
}());
CommunicateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], CommunicateService);

//# sourceMappingURL=communicate.service.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.show_all = function () {
        return this._http.get('/starDashboard').map(function (response) { return response.json(); }).toPromise();
    };
    HttpService.prototype.show_five = function () {
        return this._http.get('/topStars').map(function (response) { return response.json(); }).toPromise();
    };
    HttpService.prototype.new = function (star) {
        //   console.log(user)
        return this._http.post('/createStar', star).map(function (response) { return response.json(); }).toPromise();
    };
    HttpService.prototype.getStar = function (id) {
        return this._http.get('/show/' + id).map(function (response) { return response.json(); }).toPromise();
    };
    HttpService.prototype.delete = function (id) {
        return this._http.delete('/delete/' + id).map(function (response) { return response.json(); }).toPromise();
    };
    HttpService.prototype.updateStar = function (id, star) {
        return this._http.patch('/update/' + id, star).map(function (response) { return response.json(); }).toPromise();
    };
    HttpService.prototype.addNotes = function (id, note) {
        return this._http.patch('/addNote/' + id, note).map(function (response) { return response.json(); }).toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, ".form-group{\r\n    width: 750px;\r\n}\r\ntextarea{\r\n    resize: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 115,
	"./af.js": 115,
	"./ar": 122,
	"./ar-dz": 116,
	"./ar-dz.js": 116,
	"./ar-kw": 117,
	"./ar-kw.js": 117,
	"./ar-ly": 118,
	"./ar-ly.js": 118,
	"./ar-ma": 119,
	"./ar-ma.js": 119,
	"./ar-sa": 120,
	"./ar-sa.js": 120,
	"./ar-tn": 121,
	"./ar-tn.js": 121,
	"./ar.js": 122,
	"./az": 123,
	"./az.js": 123,
	"./be": 124,
	"./be.js": 124,
	"./bg": 125,
	"./bg.js": 125,
	"./bn": 126,
	"./bn.js": 126,
	"./bo": 127,
	"./bo.js": 127,
	"./br": 128,
	"./br.js": 128,
	"./bs": 129,
	"./bs.js": 129,
	"./ca": 130,
	"./ca.js": 130,
	"./cs": 131,
	"./cs.js": 131,
	"./cv": 132,
	"./cv.js": 132,
	"./cy": 133,
	"./cy.js": 133,
	"./da": 134,
	"./da.js": 134,
	"./de": 137,
	"./de-at": 135,
	"./de-at.js": 135,
	"./de-ch": 136,
	"./de-ch.js": 136,
	"./de.js": 137,
	"./dv": 138,
	"./dv.js": 138,
	"./el": 139,
	"./el.js": 139,
	"./en-au": 140,
	"./en-au.js": 140,
	"./en-ca": 141,
	"./en-ca.js": 141,
	"./en-gb": 142,
	"./en-gb.js": 142,
	"./en-ie": 143,
	"./en-ie.js": 143,
	"./en-nz": 144,
	"./en-nz.js": 144,
	"./eo": 145,
	"./eo.js": 145,
	"./es": 147,
	"./es-do": 146,
	"./es-do.js": 146,
	"./es.js": 147,
	"./et": 148,
	"./et.js": 148,
	"./eu": 149,
	"./eu.js": 149,
	"./fa": 150,
	"./fa.js": 150,
	"./fi": 151,
	"./fi.js": 151,
	"./fo": 152,
	"./fo.js": 152,
	"./fr": 155,
	"./fr-ca": 153,
	"./fr-ca.js": 153,
	"./fr-ch": 154,
	"./fr-ch.js": 154,
	"./fr.js": 155,
	"./fy": 156,
	"./fy.js": 156,
	"./gd": 157,
	"./gd.js": 157,
	"./gl": 158,
	"./gl.js": 158,
	"./gom-latn": 159,
	"./gom-latn.js": 159,
	"./he": 160,
	"./he.js": 160,
	"./hi": 161,
	"./hi.js": 161,
	"./hr": 162,
	"./hr.js": 162,
	"./hu": 163,
	"./hu.js": 163,
	"./hy-am": 164,
	"./hy-am.js": 164,
	"./id": 165,
	"./id.js": 165,
	"./is": 166,
	"./is.js": 166,
	"./it": 167,
	"./it.js": 167,
	"./ja": 168,
	"./ja.js": 168,
	"./jv": 169,
	"./jv.js": 169,
	"./ka": 170,
	"./ka.js": 170,
	"./kk": 171,
	"./kk.js": 171,
	"./km": 172,
	"./km.js": 172,
	"./kn": 173,
	"./kn.js": 173,
	"./ko": 174,
	"./ko.js": 174,
	"./ky": 175,
	"./ky.js": 175,
	"./lb": 176,
	"./lb.js": 176,
	"./lo": 177,
	"./lo.js": 177,
	"./lt": 178,
	"./lt.js": 178,
	"./lv": 179,
	"./lv.js": 179,
	"./me": 180,
	"./me.js": 180,
	"./mi": 181,
	"./mi.js": 181,
	"./mk": 182,
	"./mk.js": 182,
	"./ml": 183,
	"./ml.js": 183,
	"./mr": 184,
	"./mr.js": 184,
	"./ms": 186,
	"./ms-my": 185,
	"./ms-my.js": 185,
	"./ms.js": 186,
	"./my": 187,
	"./my.js": 187,
	"./nb": 188,
	"./nb.js": 188,
	"./ne": 189,
	"./ne.js": 189,
	"./nl": 191,
	"./nl-be": 190,
	"./nl-be.js": 190,
	"./nl.js": 191,
	"./nn": 192,
	"./nn.js": 192,
	"./pa-in": 193,
	"./pa-in.js": 193,
	"./pl": 194,
	"./pl.js": 194,
	"./pt": 196,
	"./pt-br": 195,
	"./pt-br.js": 195,
	"./pt.js": 196,
	"./ro": 197,
	"./ro.js": 197,
	"./ru": 198,
	"./ru.js": 198,
	"./sd": 199,
	"./sd.js": 199,
	"./se": 200,
	"./se.js": 200,
	"./si": 201,
	"./si.js": 201,
	"./sk": 202,
	"./sk.js": 202,
	"./sl": 203,
	"./sl.js": 203,
	"./sq": 204,
	"./sq.js": 204,
	"./sr": 206,
	"./sr-cyrl": 205,
	"./sr-cyrl.js": 205,
	"./sr.js": 206,
	"./ss": 207,
	"./ss.js": 207,
	"./sv": 208,
	"./sv.js": 208,
	"./sw": 209,
	"./sw.js": 209,
	"./ta": 210,
	"./ta.js": 210,
	"./te": 211,
	"./te.js": 211,
	"./tet": 212,
	"./tet.js": 212,
	"./th": 213,
	"./th.js": 213,
	"./tl-ph": 214,
	"./tl-ph.js": 214,
	"./tlh": 215,
	"./tlh.js": 215,
	"./tr": 216,
	"./tr.js": 216,
	"./tzl": 217,
	"./tzl.js": 217,
	"./tzm": 219,
	"./tzm-latn": 218,
	"./tzm-latn.js": 218,
	"./tzm.js": 219,
	"./uk": 220,
	"./uk.js": 220,
	"./ur": 221,
	"./ur.js": 221,
	"./uz": 223,
	"./uz-latn": 222,
	"./uz-latn.js": 222,
	"./uz.js": 223,
	"./vi": 224,
	"./vi.js": 224,
	"./x-pseudo": 225,
	"./x-pseudo.js": 225,
	"./yo": 226,
	"./yo.js": 226,
	"./zh-cn": 227,
	"./zh-cn.js": 227,
	"./zh-hk": 228,
	"./zh-hk.js": 228,
	"./zh-tw": 229,
	"./zh-tw.js": 229
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 345;


/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"/bootstrap/dist/css/bootstrap.min.css\">\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div *ngIf=\"!userName\">\n        Please go back and login\n    </div>\n\n    <div *ngIf=\"userName\">\n        <h1>Stars Registry</h1>\n        <p>Hello {{ userName }}</p>\n        <nav class = \"navbar navbar-default\">\n            <div class=\"auctions-nav\">\n                <ul class=\"nav navbar-nav\">\n                    <li><a [routerLink]=\"['/login']\">Logout</a></li>\n                    <li><a [routerLink] = \"['/dashboard']\">Stars Dashboard</a></li>\n                    <li><a [routerLink]=\"['/new']\">Register a new star</a></li>\n                </ul>\n            </div>\n        </nav>\n        <div class=\"auctions-body\" *ngIf='data'>\n            <table class=\"table table-striped\">\n                <thead>\n                    <th>Star Name</th>\n                    <th>Notes</th>\n                </thead>\n                <tbody>\n                    <tr *ngFor='let star of data'>\n                        <!-- <td><a [routerLink]=\"['/edit', star._id]\">{{ star.title }}</a></td> -->\n                        <td><span (click)='clicked(star)' style=\"color: blue; text-decoration:underline\">{{ star.title }}</span></td>\n                        <td>{{star.noteCount}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n    <!-- used to display information about a specific star document without moving to another page. Includes all the notes added to the document and allows user to add more notes -->\n    <div *ngIf='note'>\n        <div class=\"panel panel-info\">\n            <div class=\"panel-heading\">\n                {{ note.title }}\n            </div>\n            <div class=\"panel-body\">\n                <table class=\"table table-bordered\">\n                    <tbody>\n                        <tr>\n                            <td><b>Description:</b> {{note.description}}</td>\n                            <td><b>Note:</b> {{note.noteCount}}</td>\n                        </tr>\n                        <tr>\n                            <td><b>Created At:</b> {{note.createdAt | date: 'MM/dd/yyyy'}}</td>\n                            <td><b>Created By:</b> {{note.author}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <table class=\"table\">\n                    <thead>\n                        <th>Note Description</th>\n                        <th>Note Author</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor='let data of note.note'>\n                            <td>Description: {{data.description}}</td>\n                            <td>Author: {{data.author}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <form (ngSubmit)='addNote()'>\n                    Your note: <input type=\"text\" name=\"description\" [(ngModel)]='updateNote.description' required minlength='3' #description='ngModel'>\n                    <p *ngIf='!description.valid && (description.dirty)'>Description needs to be at least 3 characters</p>\n                    <button type=\"submit\" name=\"button\" [disabled]=\"!description.valid\">Add note</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1>Stars Registry</h1>\r\n    <p>Hello {{ userName }}</p>\r\n    <nav class = \"navbar navbar-default\">\r\n        <div class=\"auctions-nav\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a [routerLink]=\"['/login']\">Logout</a></li>\r\n                <li><a [routerLink] = \"['/home']\">Home</a></li>\r\n                <li><a [routerLink]=\"['/new']\">Register a new star</a></li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n    <div class=\"auctions-body\" *ngIf='data'>\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <th>Star Name</th>\r\n                <th>Description</th>\r\n                <th>Notes</th>\r\n                <th>Actions</th>\r\n            </thead>\r\n            <!-- Goes through the queried data and separates the title, description, and number of notes. Also allows edit/delete if the current user created the document -->\r\n            <tbody>\r\n                <tr *ngFor='let star of data'>\r\n                    <td><span (click)='clicked(star)' style=\"color: blue; text-decoration:underline\">{{ star.title }}</span></td>\r\n                    <td>{{ star.description }}</td>\r\n                    <td>{{ star.noteCount }}</td>\r\n                    <td *ngIf='userName == star.author'><a [routerLink]=\"['/edit', star._id]\"><button class=\"btn btn-info\">Edit</button></a><button class=\"btn btn-danger\" (click)=\"deleteStar(star._id)\">Delete</button></td>\r\n                    <!-- To make sure the table looks uniform if the current user is not the creator-->\r\n                    <td *ngIf='userName != star.author'></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n<!-- used to display information about a specific star document without moving to another page. Includes all the notes added to the document and allows user to add more notes -->\r\n    <div *ngIf='note'>\r\n        <div class=\"panel panel-info\">\r\n            <div class=\"panel-heading\">\r\n                {{ note.title }}\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-bordered\">\r\n                    <tbody>\r\n                        <tr>\r\n                            <td><b>Description:</b> {{note.description}}</td>\r\n                            <td><b>Note:</b> {{note.noteCount}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td><b>Created At:</b> {{note.createdAt | date: 'MM/dd/yyyy'}}</td>\r\n                            <td><b>Created By:</b> {{note.author}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <th>Note Description</th>\r\n                        <th>Note Author</th>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor='let data of note.note'>\r\n                            <td>Description: {{data.description}}</td>\r\n                            <td>Author: {{data.author}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <form (ngSubmit)='addNote()'>\r\n                    Your note: <input type=\"text\" name=\"description\" [(ngModel)]='updateNote.description' required minlength='3' #description='ngModel'>\r\n                    <p *ngIf='!description.valid && (description.dirty)'>Description needs to be at least 3 characters</p>\r\n                    <button type=\"submit\" name=\"button\" [disabled]=\"!description.valid\">Add note</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div *ngIf='star'>\n        <h1>{{ title }}</h1>\n        <h3>Created by {{ star.author }}</h3>\n    </div>\n    <nav class = \"navbar navbar-default\">\n        <div class=\"auctions-nav\">\n            <ul class=\"nav navbar-nav\">\n                <li><a [routerLink]=\"['/login']\">Logout</a></li>\n                <li><a [routerLink]=\"['/home']\">Home</a></li>\n                <li><a [routerLink] = \"['/dashboard']\">Stars Dashboard</a></li>\n            </ul>\n        </div>\n    </nav>\n    <hr>\n    <div *ngIf='star'>\n        <br>\n        <form (ngSubmit)='updateStar()' #form='ngForm' class=\"form-horizontal\">\n            <div class=\"form-group\">\n                <label for=\"title\" class=\"control-label col-sm-2\">Star Name:</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" name=\"title\" [(ngModel)]=\"star.title\" #title='ngModel' required minlength='3' class=\"form-control\"><br>\n                    <p *ngIf='!title.valid && title.dirty'> Title is required with at least 3 characters</p>\n                </div>\n                <label for=\"description\" class=\"control-label col-sm-2\">Description: </label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" name=\"description\" [(ngModel)]=\"star.description\" required minlength=\"8\" #description='ngModel' class=\"form-control\"><br>\n                    <p *ngIf='!description.valid && (description.dirty)'>Description needs to be at least 8 characters</p>\n                </div>\n                <div class=\"col-sm-offset-2 col-sm-10\">\n                    <button type=\"submit\" name=\"button\" [disabled]='!form.valid' class=\"btn btn-basic\">Update!</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"login\">\n        <h1>Welcome to the Star Registry</h1>\n        <h3>Login</h3>\n        <form (ngSubmit)='onLogin(); login.reset()' #login=\"ngForm\" name=\"login\" class=\"form-horizontal\">\n            <div class=\"form-group\">\n                <label for=\"userName\" class=\"control-label col-sm-1\">Name: </label>\n                <div class=\"col-sm-6\">\n                    <input type=\"text\" name='userName' [(ngModel)]='userName' required minlength='4' class=\"form-control\"> <br>\n                </div>\n                <div class=\"col-sm-offset-1 col-sm-10\">\n                    <button type=\"submit\" name=\"button\" [disabled]=\"!login.valid\" class=\"btn btn-success\">Login</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ 353:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Register a new Star</h1>\n    <br>\n    <nav class = \"navbar navbar-default\">\n        <div class=\"auctions-nav\">\n            <ul class=\"nav navbar-nav\">\n                <li><a [routerLink]=\"['/login']\">Logout</a></li>\n                <li><a [routerLink]=\"['/home']\">Home</a></li>\n                <li><a [routerLink] = \"['/dashboard']\">Stars Dashboard</a></li>\n            </ul>\n        </div>\n    </nav>\n    <br>\n    <form (ngSubmit)=\"newStar()\" #form='ngForm' class=\"form-horizontal\">\n        <div class=\"form-group\">\n            <label for=\"title\" class=\"control-label col-sm-2\">Star Name:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" name=\"title\" [(ngModel)]=\"star.title\" #title='ngModel' required class='form-control'>\n                <br>\n                <p *ngIf='!title.valid && title.dirty'>Title is required</p>\n            </div>\n            <label for=\"description\" class=\"control-label col-sm-2\">Description:</label>\n            <div class=\"col-sm-10\">\n                <textarea type=\"text\" name=\"description\" [(ngModel)]=\"star.description\" required minlength='8' #description='ngModel' class='form-control'></textarea>\n                <br>\n                <p *ngIf='!description.valid && description.dirty'>Description must be at least 8 characters</p>\n            </div>\n            <div class=\"col-sm-offset-2 col-sm-10\">\n                <input type=\"submit\" value=\"Register Star\" [disabled]='!form.valid' class=\"btn btn-success\">\n            </div>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

module.exports = "<p>\n  note works!\n</p>\n"

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(270);


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__communicate_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuctionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuctionsComponent = (function () {
    function AuctionsComponent(_communicateService, _httpService, _router) {
        var _this = this;
        this._communicateService = _communicateService;
        this._httpService = _httpService;
        this._router = _router;
        this.updateNote = {
            description: '',
            author: '',
        };
        this.subscription = _communicateService.observedUser.subscribe(function (updateUser) { _this.userName = updateUser; }, function (err) { console.log('error', err); }, function () { });
    }
    AuctionsComponent.prototype.onDestroy = function () {
        this.subscription.unsubscribe();
    };
    AuctionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.show_five().then(function (results) { _this.data = results; }).catch(function (err) { return console.log(err); });
    };
    AuctionsComponent.prototype.deleteAuction = function (id) {
        var _this = this;
        this._httpService.delete(id).then(function (results) { _this.ngOnInit(); }).catch(function (err) { return console.log(err); });
    };
    AuctionsComponent.prototype.clicked = function (star) {
        console.log(star.note);
        this.note = star;
        this.id = star._id;
    };
    AuctionsComponent.prototype.addNote = function () {
        var _this = this;
        this.updateNote.author = this.userName;
        console.log(this.updateNote);
        this._httpService.addNotes(this.id, this.updateNote).then(function (results) { _this.note = '', _this.ngOnInit(); }).catch(function (err) { return console.log(err); });
    };
    return AuctionsComponent;
}());
AuctionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auctions',
        template: __webpack_require__(349),
        styles: [__webpack_require__(339)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__communicate_service__["a" /* CommunicateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__communicate_service__["a" /* CommunicateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AuctionsComponent);

var _a, _b, _c;
//# sourceMappingURL=auctions.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__communicate_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(_communicateService, _httpService, _router) {
        var _this = this;
        this._communicateService = _communicateService;
        this._httpService = _httpService;
        this._router = _router;
        this.updateNote = {
            description: '',
            author: '',
        };
        this.subscription = _communicateService.observedUser.subscribe(function (updateUser) { _this.userName = updateUser; }, function (err) { console.log('error', err); }, function () { });
    }
    DashboardComponent.prototype.onDestroy = function () {
        this.subscription.unsubscribe();
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.show_all().then(function (results) { _this.data = results; }).catch(function (err) { return console.log(err); });
    };
    DashboardComponent.prototype.deleteStar = function (id) {
        var _this = this;
        this._httpService.delete(id).then(function (results) { _this.ngOnInit(); }).catch(function (err) { return console.log(err); });
    };
    DashboardComponent.prototype.clicked = function (star) {
        console.log(star.note);
        this.note = star;
        this.id = star._id;
    };
    DashboardComponent.prototype.addNote = function () {
        var _this = this;
        this.updateNote.author = this.userName;
        console.log(this.updateNote);
        this._httpService.addNotes(this.id, this.updateNote).then(function (results) { _this.note = '', _this.ngOnInit(); }).catch(function (err) { return console.log(err); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(350),
        styles: [__webpack_require__(340)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__communicate_service__["a" /* CommunicateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__communicate_service__["a" /* CommunicateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__communicate_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = (function () {
    // Create a current date to store today's date. This is to see if user should be able to bid on the item
    function EditComponent(_communicateService, _httpService, _router, _route) {
        var _this = this;
        this._communicateService = _communicateService;
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.subscription = _communicateService.observedUser.subscribe(function (updateUser) { _this.userName = updateUser; }, function (err) { console.log('error', err); }, function () { });
        this.paramID = this._route.params.subscribe(function (param) {
            _this.id = param.id;
        });
    }
    EditComponent.prototype.onDestroy = function () {
        this.subscription.unsubscribe();
        this.paramID.unsubscribe();
    };
    EditComponent.prototype.updateStar = function () {
        var _this = this;
        this._httpService.updateStar(this.id, this.star).then(function (product) { _this._router.navigate(['/dashboard']); }).catch(function (err) { return console.log(err); });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // On initialization, get the information of the auction. Set variable product to the results then set variable endDate with a new Date using the end date
        this._httpService.getStar(this.id).then(function (product) { _this.star = product, _this.title = product.title; }).catch(function (err) { return console.log(err); });
    };
    return EditComponent;
}());
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__(351),
        styles: [__webpack_require__(341)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__communicate_service__["a" /* CommunicateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__communicate_service__["a" /* CommunicateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], EditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__communicate_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, _communicateService) {
        this.router = router;
        this._communicateService = _communicateService;
    }
    LoginComponent.prototype.onLogin = function () {
        this._communicateService.updateUser(this.userName);
        if (!this.userName) {
            alert("Enter an actual name");
        }
        else {
            this.router.navigate(['/home']);
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(352),
        styles: [__webpack_require__(342)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__communicate_service__["a" /* CommunicateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__communicate_service__["a" /* CommunicateService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__communicate_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__starClass__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewComponent = (function () {
    function NewComponent(_communicateService, _httpService, _router) {
        var _this = this;
        this._communicateService = _communicateService;
        this._httpService = _httpService;
        this._router = _router;
        this.star = new __WEBPACK_IMPORTED_MODULE_2__starClass__["a" /* Star */]();
        this.subscription = _communicateService.observedUser.subscribe(function (updateUser) { _this.userName = updateUser; }, function (err) { console.log('error', err); }, function () { });
    }
    NewComponent.prototype.onDestroy = function () {
        this.subscription.unsubscribe();
    };
    NewComponent.prototype.newStar = function () {
        var _this = this;
        this.star.author = this.userName;
        this.star.noteCount = 0;
        //   console.log("star Information", this.star);
        this._httpService.new(this.star).then(function (results) { _this.results = results, _this._router.navigate(['/home']); });
    };
    NewComponent.prototype.ngOnInit = function () {
    };
    return NewComponent;
}());
NewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new',
        template: __webpack_require__(353),
        styles: [__webpack_require__(343)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__communicate_service__["a" /* CommunicateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__communicate_service__["a" /* CommunicateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NewComponent);

var _a, _b, _c;
//# sourceMappingURL=new.component.js.map

/***/ })

},[624]);
//# sourceMappingURL=main.bundle.js.map