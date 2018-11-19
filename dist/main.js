(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/grid/grid.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/grid', pathMatch: 'full' },
    { path: 'grid', component: _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"outerContainer\">\n \n  <h1 class=\"display\" id=\"siteTitle\">\n    <span>angul</span>\n    <span id=\"siteTitle-2\">e</span>\n    <span id=\"siteTitle-3\">r</span>\n    <span id=\"siteTitle-4\">o</span>\n  </h1>\n  <nav>\n    <a routerLink=\"/grid\">Gridero</a>\n  </nav>\n  <app-messages></app-messages>\n  <div id=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Fredoka+One\");\nbody {\n  color: black;\n  font-family: Verdana, sans-serif; }\nnav {\n  display: none; }\n#outerContainer {\n  padding: 20px 0 0 0;\n  text-align: center;\n  width: 100%; }\n#content {\n  margin: 0 auto;\n  max-width: 1200px; }\n#siteTitle {\n  color: #1a379d;\n  font-size: 86px;\n  padding: 0 0 40px 0; }\n#siteTitle-2 {\n  color: #5990d1; }\n#siteTitle-3 {\n  color: #4e8cef; }\n#siteTitle-4 {\n  color: #6a8db7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9wcm9nL2FuZ3VsZXJvL3NyYy9hcHAvc2Nzcy9fdmFyaWFibGVzLnNjc3MiLCIvcHJvZy9hbmd1bGVyby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRUFBWTtBQ0VaO0VBQ0UsYURJZ0I7RUNIaEIsaUNESThCLEVDSC9CO0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7QUFFRDtFQUNFLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsWUFBVyxFQUNaO0FBRUQ7RUFDRSxlQUFjO0VBQ2Qsa0JEakJZLEVDa0JiO0FBRUQ7RUFDRSxlRFphO0VDYWIsZ0JBQWU7RUFDZixvQkFBbUIsRUFDcEI7QUFDRDtFQUNFLGVEaEJhLEVDaUJkO0FBQ0Q7RUFDRSxlRGxCYSxFQ21CZDtBQUNEO0VBQ0UsZURwQmEsRUNxQmQiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZyZWRva2ErT25lJyk7XG5cbiRsYXJnZTogMTIwMHB4O1xuJG1lZGl1bTogODAwcHg7XG4kc21hbGw6IDYwMHB4O1xuJGV4LXNtYWxsOiA0MDBweDtcblxuJGZvbnQtY29sb3I6IGJsYWNrO1xuJGZvbnQtc3RhY2s6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XG5cblxuJGJsdWUxOiAjMWEzNzlkO1xuJGJsdWUyOiAjNTk5MGQxO1xuJGJsdWUzOiAjNGU4Y2VmO1xuJGJsdWU0OiAjNmE4ZGI3O1xuXG4kZGFya2JsdWUxOiAjMGEyMTY1O1xuXG5cblxuXG4kdGJsdWUyOiAjM2Y1OTk2O1xuJHRibHVlMzogIzIxMTFmNTtcbiR0Ymx1ZTY6ICMzZjU5OTY7XG4kdGJsdWU3OiAjMjQ0NDhkO1xuXG4kdGRhcmtCbHVlMjogIzE4Mzg4NTtcbiR0ZGFya0JsdWUzOiAjMjA0Nzk0O1xuJHRkYXJrYmx1ZTQ6ICMyNTRlOWQ7XG5cbiR0ZGFya2JsdWU2OiAjMjgzYzgzO1xuJHRkYXJrYmx1ZTc6ICMyNzRlOWQ7XG5cbiR2ZXJ5ZGFya2JsdWU6ICMwZDFlNTY7XG5cbiRkYXJrZ3JheTogIzJhMmQzZTtcbiRsaWdodGdyYXk6ICNiMGIwYjI7XG5cbiRncmF5Ymx1ZTogIzM4NTI2ZDtcbiRncmF5Ymx1ZTI6ICMzNzQwNWQ7XG5cblxuJHRncmVlbjE6ICMxZjRkMDI7XG4kdGdyZWVuMjogIzMxNTgxNztcbiR0Z3JlZW4zOiAjNjI3ZDVhO1xuJHRncmVlbjQ6ICM0Yjg1MzE7XG4kdGdyZWVuNTogIzdkOTk1ZTtcbiR0Z3JlZW42OiAjMTIxZjBlO1xuJHRncmVlbjc6ICMyNDNhMjM7XG5cblxuQG1peGluIGZsZXhpZnkoKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuQG1peGluIGNhcmRPbigpIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTsgXG59XG5cbkBtaXhpbiBjYXJkT2ZmKCkge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgXG59IiwiQGltcG9ydCAnLi9zY3NzL3ZhcmlhYmxlcyc7XG5cbmJvZHkge1xuICBjb2xvcjokZm9udC1jb2xvcjtcbiAgZm9udC1mYW1pbHk6ICRmb250LXN0YWNrO1xufVxuXG5uYXYge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jb3V0ZXJDb250YWluZXIgeyBcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2NvbnRlbnQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAkbGFyZ2U7XG59XG5cbiNzaXRlVGl0bGUge1xuICBjb2xvcjogJGJsdWUxO1xuICBmb250LXNpemU6IDg2cHg7XG4gIHBhZGRpbmc6IDAgMCA0MHB4IDA7XG59XG4jc2l0ZVRpdGxlLTIge1xuICBjb2xvcjogJGJsdWUyO1xufVxuI3NpdGVUaXRsZS0zIHtcbiAgY29sb3I6ICRibHVlMztcbn1cbiNzaXRlVGl0bGUtNCB7XG4gIGNvbG9yOiAkYmx1ZTQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angulero';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/grid/grid.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./truncate.pipe */ "./src/app/truncate.pipe.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__["MessagesComponent"],
                _truncate_pipe__WEBPACK_IMPORTED_MODULE_8__["TruncatePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card.service.ts":
/*!*********************************!*\
  !*** ./src/app/card.service.ts ***!
  \*********************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardService = /** @class */ (function () {
    function CardService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.cardsUrl = 'http://streamero.tv/externals/api/cards/get.php';
    }
    /**
     * Retrieve cards from remote url
     */
    CardService.prototype.getCards = function () {
        return this.http.get(this.cardsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.cards; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getCards', [])));
    };
    /**
     *
     * @param operation gracefully handle errors and display to user
     * @param result optional Observable of generic type
     */
    CardService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.log(operation + " failed due to: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /**
     * log error to HTML (for user)
     * @param message the error text to display
     */
    CardService.prototype.log = function (message) {
        this.messageService.add("HeroService: " + message);
    };
    CardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], CardService);
    return CardService;
}());



/***/ }),

/***/ "./src/app/card.ts":
/*!*************************!*\
  !*** ./src/app/card.ts ***!
  \*************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
var Card = /** @class */ (function () {
    function Card() {
    }
    return Card;
}());



/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div [className]=\"'card-outer'\">\n  <div [className]=\"'card card-front'\">\n    <img src=\"{{card.image}}\" [className]=\"'card-image'\" />\n    <div *ngIf=\"card.featured\" class=\"featuredBadge\">\n      FEATURED\n    </div>\n    <div [className]=\"'card-inner'\">\n      <h3>{{card.title}}</h3>\n      <div class=\"card-description\">\n        {{card.description | truncate : 400 : true}}\n      </div>\n    </div>\n  </div>\n  <div [className]=\"'card card-back'\">\n    <img src=\"{{card.image}}\" [className]=\"'card-image'\" />\n    <div [className]=\"'card-inner'\">\n      <h3>{{card.title}}</h3>\n      <div [className]=\"'card-tags'\">\n        <div *ngFor=\"let tag of card.tags\" [className]=\"'card-tag'\">\n          {{tag}}\n        </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/card/card.component.scss":
/*!******************************************!*\
  !*** ./src/app/card/card.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Fredoka+One\");\n.card {\n  border: 2px solid #0a2165;\n  border-radius: 8px;\n  box-sizing: border-box;\n  font-size: 12px;\n  height: 400px;\n  left: 0;\n  overflow: hidden;\n  padding: 0 0 6px 0;\n  position: absolute;\n  top: 0;\n  transition: opacity 1s, -webkit-transform 1s;\n  transition: opacity 1s, transform 1s;\n  transition: opacity 1s, transform 1s, -webkit-transform 1s;\n  width: 370px; }\n.card .featuredContainer {\n    height: 80px;\n    position: relative;\n    width: 100%; }\n.card .featuredBadge {\n    background: #315817;\n    color: white;\n    font-style: italic;\n    font-size: 14px;\n    font-weight: bold;\n    height: 20px;\n    padding-top: 2px;\n    position: absolute;\n    right: -30px;\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n    top: 30px;\n    width: 140px; }\n.card .card-image {\n    display: block;\n    height: auto;\n    width: 100%; }\n.card .card-inner {\n    padding: 10px; }\n.card .card-inner h3 {\n      font-size: 18px;\n      line-height: 1.5;\n      margin: 0;\n      padding: 0 0 6px 0; }\n.card .card-description {\n    text-align: left; }\n.card .card-tags {\n    text-align: left; }\n.card .card-tags .card-tag {\n      background: #315817;\n      color: white;\n      display: inline-block;\n      margin: 0 10px 8px 0;\n      padding: 2px 6px 3px 6px; }\n.card-back .card-image {\n  opacity: 0.5;\n  transform: scaleX(-1);\n  -webkit-transform: scaleX(-1); }\n.card-outer {\n  height: 400px;\n  margin: 0 12px 25px;\n  position: relative;\n  width: 370px; }\n.card-outer .card-front {\n    opacity: 1;\n    transform: rotateY(0deg);\n    -webkit-transform: rotateY(0deg); }\n.card-outer .card-back {\n    opacity: 0;\n    transform: rotateY(180deg);\n    -webkit-transform: rotateY(180deg); }\n.card-outer:active .card-front, .card-outer:hover .card-front {\n    opacity: 0;\n    transform: rotateY(180deg);\n    -webkit-transform: rotateY(180deg); }\n.card-outer:active .card-back, .card-outer:hover .card-back {\n    opacity: 1;\n    transform: rotateY(0deg);\n    -webkit-transform: rotateY(0deg); }\n@media only screen and (max-width: 800px) {\n  .card-outer {\n    height: 396px;\n    margin: 0 12px 25px;\n    width: 260px; }\n  .card {\n    border: 2px solid black;\n    font-size: 11px;\n    height: 396px;\n    padding: 0 0 4px 0;\n    width: 260px; }\n    .card .card-inner h3 {\n      font-size: 14px;\n      margin: 0;\n      padding: 0 0 6px 0; }\n    .card .card-tags {\n      padding-top: 5px; }\n      .card .card-tags .card-tag {\n        font-size: 12px;\n        margin: 0 8px 6px 0;\n        padding: 2px 4px; } }\n@media only screen and (max-width: 600px) {\n  .card-outer {\n    display: inline-block;\n    height: 400px;\n    margin: 0 6px 10px;\n    text-align: center;\n    width: 260px; }\n  .card {\n    border: 2px solid black;\n    font-size: 11px;\n    height: 400px;\n    padding: 0 0 4px 0;\n    width: 260px; }\n    .card .card-description {\n      padding-top: 10px; }\n    .card .featuredBadge {\n      font-size: 11px;\n      height: 16px;\n      padding-top: 2px;\n      position: absolute;\n      right: -24px;\n      top: 20px;\n      width: 100px; }\n    .card .card-inner {\n      padding: 10px 10px 10px 10px; }\n      .card .card-inner h3 {\n        font-size: 14px;\n        margin: 0;\n        padding: 0 0 4px 0; }\n    .card .card-tags {\n      font-size: 12px;\n      padding-top: 8px; }\n      .card .card-tags .card-tag {\n        margin: 0 8px 6px 0;\n        padding: 2px 4px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9wcm9nL2FuZ3VsZXJvL3NyYy9hcHAvc2Nzcy9fdmFyaWFibGVzLnNjc3MiLCIvcHJvZy9hbmd1bGVyby9zcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRUFBWTtBQ0VaO0VBQ0UsMEJEYWlCO0VDWmpCLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsZ0JBQWU7RUFDZixjQUFhO0VBQ2IsUUFBTztFQUNQLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQXBDLDJEQUFvQztFQUNwQyxhQUFZLEVBd0RiO0FBcEVEO0lBZUksYUFBWTtJQUNaLG1CQUFpQjtJQUNqQixZQUFXLEVBQ1o7QUFsQkg7SUFxQkksb0JEb0JhO0lDbkJiLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsZ0JBQWU7SUFDZixrQkFBaUI7SUFDakIsYUFBWTtJQUNaLGlCQUFnQjtJQUNoQixtQkFBaUI7SUFDakIsYUFBWTtJQUNaLHlCQUF3QjtJQUN4QixpQ0FBZ0M7SUFDaEMsVUFBUztJQUNULGFBQVksRUFDYjtBQWxDSDtJQXFDSSxlQUFjO0lBQ2QsYUFBWTtJQUNaLFlBQVcsRUFDWjtBQXhDSDtJQTJDSSxjQUFhLEVBUWQ7QUFuREg7TUE4Q00sZ0JBQWU7TUFDZixpQkFBZ0I7TUFDaEIsVUFBUztNQUNULG1CQUFrQixFQUNuQjtBQWxETDtJQXNESSxpQkFBZ0IsRUFDakI7QUF2REg7SUEwREksaUJBQWdCLEVBU2pCO0FBbkVIO01BNkRNLG9CRHBCVztNQ3FCWCxhQUFZO01BQ1osc0JBQXFCO01BQ3JCLHFCQUFvQjtNQUNwQix5QkFBd0IsRUFDekI7QUFJTDtFQUdJLGFBQWM7RUFDZCxzQkFBcUI7RUFDckIsOEJBQTZCLEVBQzlCO0FBR0g7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQixhQUFZLEVBaUJiO0FBckJEO0lEeEJFLFdBQVU7SUFDVix5QkFBd0I7SUFDeEIsaUNBQWdDLEVDOEIvQjtBQVJIO0lEbEJFLFdBQVU7SUFDViwyQkFBMEI7SUFDMUIsbUNBQWtDLEVDMkJqQztBQVhIO0lEbEJFLFdBQVU7SUFDViwyQkFBMEI7SUFDMUIsbUNBQWtDLEVDZ0MvQjtBQWhCTDtJRHhCRSxXQUFVO0lBQ1YseUJBQXdCO0lBQ3hCLGlDQUFnQyxFQ3lDN0I7QUFJTDtFQUNFO0lBQ0UsY0FBYTtJQUNiLG9CQUFtQjtJQUNuQixhQUFZLEVBQ2I7RUFDRDtJQUNFLHdCQUF1QjtJQUN2QixnQkFBZTtJQUNmLGNBQWE7SUFDYixtQkFBa0I7SUFDbEIsYUFBWSxFQXFCYjtJQTFCRDtNQVdNLGdCQUFlO01BQ2YsVUFBUztNQUNULG1CQUFrQixFQUNuQjtJQWRMO01Ba0JJLGlCQUFnQixFQU9qQjtNQXpCSDtRQXFCTSxnQkFBZTtRQUNmLG9CQUFtQjtRQUNuQixpQkFBZ0IsRUFDakIsRUFBQTtBQUtQO0VBQ0U7SUFDRSxzQkFBcUI7SUFDckIsY0FBYTtJQUNiLG1CQUFrQjtJQUNsQixtQkFBa0I7SUFDbEIsYUFBWSxFQUNiO0VBQ0Q7SUFDRSx3QkFBdUI7SUFDdkIsZ0JBQWU7SUFDZixjQUFhO0lBQ2IsbUJBQWtCO0lBQ2xCLGFBQVksRUFtQ2I7SUF4Q0Q7TUFRSSxrQkFBaUIsRUFDbEI7SUFUSDtNQVlJLGdCQUFlO01BQ2YsYUFBWTtNQUNaLGlCQUFnQjtNQUNoQixtQkFBaUI7TUFDakIsYUFBWTtNQUNaLFVBQVM7TUFDVCxhQUFZLEVBQ2I7SUFuQkg7TUFzQkksNkJBQTRCLEVBTzdCO01BN0JIO1FBeUJNLGdCQUFlO1FBQ2YsVUFBUztRQUNULG1CQUFrQixFQUNuQjtJQTVCTDtNQWdDSSxnQkFBZTtNQUNmLGlCQUFnQixFQU1qQjtNQXZDSDtRQW9DTSxvQkFBbUI7UUFDbkIsaUJBQWdCLEVBQ2pCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZyZWRva2ErT25lJyk7XG5cbiRsYXJnZTogMTIwMHB4O1xuJG1lZGl1bTogODAwcHg7XG4kc21hbGw6IDYwMHB4O1xuJGV4LXNtYWxsOiA0MDBweDtcblxuJGZvbnQtY29sb3I6IGJsYWNrO1xuJGZvbnQtc3RhY2s6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XG5cblxuJGJsdWUxOiAjMWEzNzlkO1xuJGJsdWUyOiAjNTk5MGQxO1xuJGJsdWUzOiAjNGU4Y2VmO1xuJGJsdWU0OiAjNmE4ZGI3O1xuXG4kZGFya2JsdWUxOiAjMGEyMTY1O1xuXG5cblxuXG4kdGJsdWUyOiAjM2Y1OTk2O1xuJHRibHVlMzogIzIxMTFmNTtcbiR0Ymx1ZTY6ICMzZjU5OTY7XG4kdGJsdWU3OiAjMjQ0NDhkO1xuXG4kdGRhcmtCbHVlMjogIzE4Mzg4NTtcbiR0ZGFya0JsdWUzOiAjMjA0Nzk0O1xuJHRkYXJrYmx1ZTQ6ICMyNTRlOWQ7XG5cbiR0ZGFya2JsdWU2OiAjMjgzYzgzO1xuJHRkYXJrYmx1ZTc6ICMyNzRlOWQ7XG5cbiR2ZXJ5ZGFya2JsdWU6ICMwZDFlNTY7XG5cbiRkYXJrZ3JheTogIzJhMmQzZTtcbiRsaWdodGdyYXk6ICNiMGIwYjI7XG5cbiRncmF5Ymx1ZTogIzM4NTI2ZDtcbiRncmF5Ymx1ZTI6ICMzNzQwNWQ7XG5cblxuJHRncmVlbjE6ICMxZjRkMDI7XG4kdGdyZWVuMjogIzMxNTgxNztcbiR0Z3JlZW4zOiAjNjI3ZDVhO1xuJHRncmVlbjQ6ICM0Yjg1MzE7XG4kdGdyZWVuNTogIzdkOTk1ZTtcbiR0Z3JlZW42OiAjMTIxZjBlO1xuJHRncmVlbjc6ICMyNDNhMjM7XG5cblxuQG1peGluIGZsZXhpZnkoKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuQG1peGluIGNhcmRPbigpIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTsgXG59XG5cbkBtaXhpbiBjYXJkT2ZmKCkge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgXG59IiwiQGltcG9ydCAnLi4vc2Nzcy92YXJpYWJsZXMnO1xuXG4uY2FyZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICRkYXJrYmx1ZTE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBsZWZ0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwIDAgNnB4IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzLCB0cmFuc2Zvcm0gMXM7XG4gIHdpZHRoOiAzNzBweDtcblxuICAuZmVhdHVyZWRDb250YWluZXIge1xuICAgIGhlaWdodDogODBweDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5mZWF0dXJlZEJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kOiAkdGdyZWVuMjtcbiAgICBjb2xvcjogd2hpdGU7IFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgcmlnaHQ6IC0zMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB0b3A6IDMwcHg7XG4gICAgd2lkdGg6IDE0MHB4O1xuICB9XG5cbiAgLmNhcmQtaW1hZ2Uge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jYXJkLWlubmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDAgMCA2cHggMDtcbiAgICB9XG4gIH1cblxuICAuY2FyZC1kZXNjcmlwdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5jYXJkLXRhZ3Mge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAuY2FyZC10YWcge1xuICAgICAgYmFja2dyb3VuZDogJHRncmVlbjI7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW46IDAgMTBweCA4cHggMDtcbiAgICAgIHBhZGRpbmc6IDJweCA2cHggM3B4IDZweDtcbiAgICB9XG4gIH1cbn1cblxuLmNhcmQtYmFjayB7XG5cbiAgLmNhcmQtaW1hZ2Uge1xuICAgIG9wYWNpdHk6ICgwLjUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgfVxufSBcblxuLmNhcmQtb3V0ZXIge1xuICBoZWlnaHQ6IDQwMHB4O1xuICBtYXJnaW46IDAgMTJweCAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzNzBweDtcblxuICAuY2FyZC1mcm9udCB7XG4gICAgQGluY2x1ZGUgY2FyZE9uKCk7XG4gIH1cbiAgLmNhcmQtYmFjayB7XG4gICAgQGluY2x1ZGUgY2FyZE9mZigpO1xuICB9XG5cbiAgJjphY3RpdmUsICY6aG92ZXIge1xuICAgIC5jYXJkLWZyb250IHtcbiAgICAgIEBpbmNsdWRlIGNhcmRPZmYoKTtcbiAgICB9XG4gICAgLmNhcmQtYmFjayB7XG4gICAgICBAaW5jbHVkZSBjYXJkT24oKTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaXVtKSB7XG4gIC5jYXJkLW91dGVyIHtcbiAgICBoZWlnaHQ6IDM5NnB4O1xuICAgIG1hcmdpbjogMCAxMnB4IDI1cHg7IC8vdW5jaGFuZ2VkXG4gICAgd2lkdGg6IDI2MHB4O1xuICB9XG4gIC5jYXJkIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgLy91bmNoYW5nZWRcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgaGVpZ2h0OiAzOTZweDtcbiAgICBwYWRkaW5nOiAwIDAgNHB4IDA7XG4gICAgd2lkdGg6IDI2MHB4O1xuXG4gICAgLmNhcmQtaW5uZXIge1xuXG5cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDAgMCA2cHggMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZC10YWdzIHtcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG5cbiAgICAgIC5jYXJkLXRhZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDsgXG4gICAgICAgIG1hcmdpbjogMCA4cHggNnB4IDA7IFxuICAgICAgICBwYWRkaW5nOiAycHggNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzbWFsbCkge1xuICAuY2FyZC1vdXRlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgbWFyZ2luOiAwIDZweCAxMHB4OyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDI2MHB4O1xuICB9XG4gIC5jYXJkIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgLy91bmNoYW5nZWRcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBwYWRkaW5nOiAwIDAgNHB4IDA7XG4gICAgd2lkdGg6IDI2MHB4O1xuXG4gICAgLmNhcmQtZGVzY3JpcHRpb24ge1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgLmZlYXR1cmVkQmFkZ2Uge1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgcmlnaHQ6IC0yNHB4O1xuICAgICAgdG9wOiAyMHB4O1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cblxuICAgIC5jYXJkLWlubmVyIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XG5cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDAgMCA0cHggMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZC10YWdzIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG5cbiAgICAgIC5jYXJkLXRhZyB7XG4gICAgICAgIG1hcmdpbjogMCA4cHggNnB4IDA7IFxuICAgICAgICBwYWRkaW5nOiAycHggNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card */ "./src/app/card.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _card__WEBPACK_IMPORTED_MODULE_1__["Card"])
    ], CardComponent.prototype, "card", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/grid/grid.component.html":
/*!******************************************!*\
  !*** ./src/app/grid/grid.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mobileTagContainer\">\n  <form #mobileTagForm=\"ngForm\">\n    <select \n      id=\"mobileTags\"\n      name=\"mobiletags\" \n      multiple\n      [(ngModel)]=\"activeTags\" \n      (ngModelChange)=\"onTagChange()\"\n      >\n      <option *ngFor=\"let tag of allTags\" [value]=\"tag\">  \n        {{tag}}\n      </option>\n    </select>\n  </form>\n</div>\n<div id=\"tagButtons\">\n    <div \n      *ngFor='let tag of allTags' \n      (click)=\"filterbyTag($event)\" \n      [className]=\"'tagButton'\"\n    >\n      {{tag}}\n    </div>\n</div>\n<div id=\"cardContainer\">\n  <app-card *ngFor=\"let card of displayCards\" [card]=\"card\"></app-card>\n</div>\n"

/***/ }),

/***/ "./src/app/grid/grid.component.scss":
/*!******************************************!*\
  !*** ./src/app/grid/grid.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Fredoka+One\");\n#tagButtons {\n  display: flex;\n  flex-wrap: wrap;\n  font-family: Verdana, sans-serif;\n  justify-content: center;\n  width: 1200px; }\n.tagButton {\n  border: 1px solid #0d1e56;\n  border-radius: 4px;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 14px;\n  margin: 0 6px 10px 6px;\n  padding: 3px 6px;\n  text-transform: uppercase; }\n.tagButton.activeTag {\n    background: #1f4d02;\n    color: white; }\n#cardContainer {\n  display: flex;\n  flex-wrap: wrap;\n  font-family: Verdana, sans-serif;\n  justify-content: flex-start;\n  padding: 20px 0 0 9px;\n  width: 1200px; }\n#mobileTagContainer {\n  display: none; }\n@media only screen and (max-width: 1200px) {\n  #cardContainer, #tagButtons {\n    margin-left: auto;\n    margin-right: auto;\n    width: 800px; } }\n@media only screen and (max-width: 800px) {\n  #cardContainer {\n    padding: 14px 0 0 0px;\n    width: 568px; }\n  #tagButtons {\n    width: 80%; } }\n@media only screen and (max-width: 600px) {\n  #cardContainer {\n    display: block;\n    text-align: center;\n    width: 304px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9wcm9nL2FuZ3VsZXJvL3NyYy9hcHAvc2Nzcy9fdmFyaWFibGVzLnNjc3MiLCIvcHJvZy9hbmd1bGVyby9zcmMvYXBwL2dyaWQvZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRUFBWTtBQ0VaO0VEa0RFLGNBQWE7RUFDYixnQkFBZTtFQ2pEZixpQ0RJOEI7RUNIOUIsd0JBQXVCO0VBQ3ZCLGNESlksRUNLYjtBQUVEO0VBQ0UsMEJEdUJvQjtFQ3RCcEIsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2Ysc0JBQXFCO0VBQ3JCLGdCQUFlO0VBQ2YsdUJBQXNCO0VBQ3RCLGlCQUFnQjtFQUNoQiwwQkFBeUIsRUFNMUI7QUFkRDtJQVdJLG9CRHNCYTtJQ3JCYixhQUFZLEVBQ2I7QUFHSDtFRDJCRSxjQUFhO0VBQ2IsZ0JBQWU7RUMxQmYsaUNEbkI4QjtFQ29COUIsNEJBQTJCO0VBQzNCLHNCQUFxQjtFQUNyQixjRDVCWSxFQzZCYjtBQUVEO0VBQ0UsY0FBYSxFQUNkO0FBRUQ7RUFDRTtJQUNFLGtCQUFpQjtJQUNqQixtQkFBa0I7SUFDbEIsYUR0Q1UsRUN1Q1gsRUFBQTtBQUdIO0VBQ0U7SUFDRSxzQkFBcUI7SUFDckIsYUFBWSxFQUNiO0VBQ0Q7SUFDRSxXQUFVLEVBQ1gsRUFBQTtBQUdIO0VBQ0U7SUFDRSxlQUFjO0lBQ2QsbUJBQWtCO0lBQ2xCLGFBQVksRUFDYixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GcmVkb2thK09uZScpO1xuXG4kbGFyZ2U6IDEyMDBweDtcbiRtZWRpdW06IDgwMHB4O1xuJHNtYWxsOiA2MDBweDtcbiRleC1zbWFsbDogNDAwcHg7XG5cbiRmb250LWNvbG9yOiBibGFjaztcbiRmb250LXN0YWNrOiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuXG5cbiRibHVlMTogIzFhMzc5ZDtcbiRibHVlMjogIzU5OTBkMTtcbiRibHVlMzogIzRlOGNlZjtcbiRibHVlNDogIzZhOGRiNztcblxuJGRhcmtibHVlMTogIzBhMjE2NTtcblxuXG5cblxuJHRibHVlMjogIzNmNTk5NjtcbiR0Ymx1ZTM6ICMyMTExZjU7XG4kdGJsdWU2OiAjM2Y1OTk2O1xuJHRibHVlNzogIzI0NDQ4ZDtcblxuJHRkYXJrQmx1ZTI6ICMxODM4ODU7XG4kdGRhcmtCbHVlMzogIzIwNDc5NDtcbiR0ZGFya2JsdWU0OiAjMjU0ZTlkO1xuXG4kdGRhcmtibHVlNjogIzI4M2M4MztcbiR0ZGFya2JsdWU3OiAjMjc0ZTlkO1xuXG4kdmVyeWRhcmtibHVlOiAjMGQxZTU2O1xuXG4kZGFya2dyYXk6ICMyYTJkM2U7XG4kbGlnaHRncmF5OiAjYjBiMGIyO1xuXG4kZ3JheWJsdWU6ICMzODUyNmQ7XG4kZ3JheWJsdWUyOiAjMzc0MDVkO1xuXG5cbiR0Z3JlZW4xOiAjMWY0ZDAyO1xuJHRncmVlbjI6ICMzMTU4MTc7XG4kdGdyZWVuMzogIzYyN2Q1YTtcbiR0Z3JlZW40OiAjNGI4NTMxO1xuJHRncmVlbjU6ICM3ZDk5NWU7XG4kdGdyZWVuNjogIzEyMWYwZTtcbiR0Z3JlZW43OiAjMjQzYTIzO1xuXG5cbkBtaXhpbiBmbGV4aWZ5KCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbkBtaXhpbiBjYXJkT24oKSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7IFxufVxuXG5AbWl4aW4gY2FyZE9mZigpIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IFxufSIsIkBpbXBvcnQgJy4uL3Njc3MvdmFyaWFibGVzJztcblxuI3RhZ0J1dHRvbnMge1xuICBAaW5jbHVkZSBmbGV4aWZ5KCk7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1zdGFjaztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAkbGFyZ2U7XG59XG5cbi50YWdCdXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAkdmVyeWRhcmtibHVlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMCA2cHggMTBweCA2cHg7XG4gIHBhZGRpbmc6IDNweCA2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgJi5hY3RpdmVUYWcge1xuICAgIGJhY2tncm91bmQ6ICR0Z3JlZW4xO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4jY2FyZENvbnRhaW5lciB7XG4gIEBpbmNsdWRlIGZsZXhpZnkoKTtcbiAgZm9udC1mYW1pbHk6ICRmb250LXN0YWNrO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDlweDtcbiAgd2lkdGg6ICRsYXJnZTtcbn1cblxuI21vYmlsZVRhZ0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGxhcmdlKSB7XG4gICNjYXJkQ29udGFpbmVyLCAjdGFnQnV0dG9ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAkbWVkaXVtO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGl1bSkge1xuICAjY2FyZENvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTRweCAwIDAgMHB4O1xuICAgIHdpZHRoOiA1NjhweDsgXG4gIH1cbiAgI3RhZ0J1dHRvbnMge1xuICAgIHdpZHRoOiA4MCU7IFxuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsKSB7XG4gICNjYXJkQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDMwNHB4O1xuICB9XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/grid/grid.component.ts":
/*!****************************************!*\
  !*** ./src/app/grid/grid.component.ts ***!
  \****************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card.service */ "./src/app/card.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GridComponent = /** @class */ (function () {
    function GridComponent(cardService, messageService, renderer) {
        this.cardService = cardService;
        this.messageService = messageService;
        this.renderer = renderer;
    }
    GridComponent.prototype.ngOnInit = function () {
        this.getCards();
        this.allTags = [];
        this.activeTags = [];
    };
    /**
     * retrieve cards from the card service
     */
    GridComponent.prototype.getCards = function () {
        var _this = this;
        this.cardService.getCards()
            .subscribe(function (data) { return _this.cards = data; }, function (error) { return _this.log("Grid component error: " + error); }, function () { return _this.processCards(); });
    };
    /**
     * Loop through the cards and populate allTags with unique tags
     * Then set the cards array to displayCards so they can be filtered non-destructively
     */
    GridComponent.prototype.processCards = function () {
        for (var _i = 0, _a = this.cards; _i < _a.length; _i++) {
            var card = _a[_i];
            for (var _b = 0, _c = card.tags; _b < _c.length; _b++) {
                var tag = _c[_b];
                //make sure we're not adding duplicate tags
                if (this.allTags.indexOf(tag) == -1) {
                    this.allTags.push(tag);
                }
            }
        }
        this.displayCards = this.cards;
    };
    /**
     * update the card grid upon user interaction with mobile selector
     * TODO: sync mobile and desktop tag selection
     */
    GridComponent.prototype.onTagChange = function () {
        this.displayCards = this.cards.filter(this.filterByActive, this);
    };
    /**
     * Actived by user when clicking on a tagButton
     * Toggle the button's class and update the card grid
     * @param event
     */
    GridComponent.prototype.filterbyTag = function (event) {
        var clickedTag = event.target.textContent;
        if (event.target.classList.contains('activeTag')) {
            //deactivate tag
            this.renderer.removeClass(event.target, "activeTag");
            this.activeTags = this.activeTags.filter(function (n) { return n != clickedTag; });
        }
        else {
            //activate tag
            this.renderer.addClass(event.target, "activeTag");
            this.activeTags.push(clickedTag);
        }
        this.displayCards = this.cards.filter(this.filterByActive, this);
    };
    /**
     * A filter callback for filterbyTag() (allows me to pass in a reference to GridComponent as "this")
     * @param currentElement - the array element to test against
     */
    GridComponent.prototype.filterByActive = function (currentElement) {
        if (this.activeTags.length == 0) {
            //if there are no active tags, all cards pass filter
            return true;
        }
        else {
            for (var _i = 0, _a = this.activeTags; _i < _a.length; _i++) {
                var tag = _a[_i];
                tag = tag.trim();
                if (currentElement.tags.indexOf(tag) < 0) {
                    return false;
                }
            }
            return true;
        }
    };
    /**
     * log errors to front end display
     * @param message - the error to display
     */
    GridComponent.prototype.log = function (message) {
        this.messageService.add("HeroService: " + message);
    };
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/grid/grid.component.scss")]
        }),
        __metadata("design:paramtypes", [_card_service__WEBPACK_IMPORTED_MODULE_1__["CardService"],
            _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"messageContainer\" *ngIf=\"messageService.messages.length\">\n  <div>\n    <div *ngFor='let message of messageService.messages'>{{message}}</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/messages/messages.component.scss":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#messageContainer {\n  background: MistyRose;\n  color: red;\n  margin: 20px auto;\n  padding: 20px;\n  max-width: 800px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9wcm9nL2FuZ3VsZXJvL3NyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVTtFQUNWLGtCQUFpQjtFQUNqQixjQUFhO0VBQ2IsaUJBQWdCLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWVzc2FnZUNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IE1pc3R5Um9zZSA7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/messages/messages.component.scss")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/truncate.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/truncate.pipe.ts ***!
  \**********************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, limit, completeWords, ellipsis) {
        if (limit === void 0) { limit = 25; }
        if (completeWords === void 0) { completeWords = false; }
        if (ellipsis === void 0) { ellipsis = '...'; }
        if (value.length <= limit) {
            return value;
        }
        if (completeWords) {
            limit = value.substr(0, limit).lastIndexOf(' ');
        }
        return "" + value.substr(0, limit) + ellipsis;
    };
    TruncatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /prog/angulero/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map