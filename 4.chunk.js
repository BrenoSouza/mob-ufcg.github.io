webpackJsonp([4],{

/***/ "../../../../../src/app/initial/initial.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxFlex=\"100\" fxLayoutAlign=\"center\">\r\n  <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\r\n    <app-login></app-login>\r\n  </div>\r\n</div>\r\n<button class=\"mat-button\" mat-fab color=\"primary\" (click)=\"gotToPublic()\"><mat-icon>list</mat-icon></button>    \r\n"

/***/ }),

/***/ "../../../../../src/app/initial/initial.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-button {\n  position: fixed;\n  bottom: 50px;\n  right: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/initial/initial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InitialComponent = (function () {
    function InitialComponent(router) {
        this.router = router;
    }
    InitialComponent.prototype.newSolicitation = function () {
        this.router.navigate(['form']);
    };
    InitialComponent.prototype.showSolicitations = function () {
        this.router.navigate(['solicitations']);
    };
    InitialComponent.prototype.ngOnInit = function () {
    };
    InitialComponent.prototype.gotToPublic = function () {
        this.router.navigate(['public-info']);
    };
    return InitialComponent;
}());
InitialComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-initial',
        template: __webpack_require__("../../../../../src/app/initial/initial.component.html"),
        styles: [__webpack_require__("../../../../../src/app/initial/initial.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], InitialComponent);

var _a;
//# sourceMappingURL=initial.component.js.map

/***/ }),

/***/ "../../../../../src/app/initial/initial.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initial_component__ = __webpack_require__("../../../../../src/app/initial/initial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_module__ = __webpack_require__("../../../../../src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__initial_routing__ = __webpack_require__("../../../../../src/app/initial/initial.routing.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialModule", function() { return InitialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var InitialModule = (function () {
    function InitialModule() {
    }
    return InitialModule;
}());
InitialModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_5__initial_routing__["a" /* initialRouting */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__initial_component__["a" /* InitialComponent */]]
    })
], InitialModule);

//# sourceMappingURL=initial.module.js.map

/***/ }),

/***/ "../../../../../src/app/initial/initial.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__initial_component__ = __webpack_require__("../../../../../src/app/initial/initial.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialRouting; });


var initialRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__initial_component__["a" /* InitialComponent */] }
];
var initialRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(initialRoutes);
//# sourceMappingURL=initial.routing.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-component-container\" fxLayoutAlign=\"center center\">\r\n  <div>\r\n    <mat-toolbar color=\"primary\" class=\"login-toolbar\">\r\n      <div md-dialog-title fxFlex>\r\n        <div>\r\n          <div fxFlex fxLayoutAlign=\"center center\">Entrar</div>\r\n        </div>\r\n      </div>\r\n    </mat-toolbar>\r\n    <mat-card>\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"space-around\" fxLayoutGap=\"5vh\" class=\"login-content\">\r\n        <form #element=\"ngForm\">\r\n          <div md-dialog-content class=\"input-container\">\r\n            <mat-form-field fxFlex>\r\n              <input matInput placeholder=\"Email\" name=\"email\" [(ngModel)]=\"user.email\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div md-dialog-content class=\"input-container\">\r\n            <mat-form-field fxFlex>\r\n              <input matInput placeholder=\"Senha\" name=\"password\" type=\"password\" [(ngModel)]=\"user.password\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div md-dialog-actions fxLayoutGap=\"10px\" fxLayoutAlign=\"space-around center\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"login()\">        \r\n              ENTRAR\r\n            </button>\r\n          </div>\r\n          <div class=\"sign-up-container\">\r\n            <span>Esqueceu a senha?</span>\r\n            <a href=\"#\">Recupere.</a>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-component-container {\n  height: 100vh; }\n  .login-component-container .login-content {\n    height: 100%;\n    padding: 24px; }\n  .login-component-container .login-btn {\n    box-shadow: none;\n    font-size: 1.0rem;\n    font-weight: 600;\n    padding: 0.5rem; }\n  .login-component-container a {\n    color: grey;\n    font-size: 1rem;\n    font-weight: 700;\n    text-decoration: none; }\n  .login-component-container .mat-dialog-title {\n    margin: 0; }\n  .login-component-container .login-invalid {\n    color: #B71C1C; }\n    .login-component-container .login-invalid p {\n      margin-left: 5px; }\n  .login-component-container .sign-up-container {\n    display: block !important;\n    text-align: center;\n    margin-top: 1em; }\n  @media screen and (max-width: 400px) {\n    .login-component-container .keep-connected-container {\n      margin-right: 0 !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
    function LoginComponent(router, authenticationService, snackBar) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.snackBar = snackBar;
        this.user = {
            email: '',
            password: ''
        };
        this.email = 'admin@ufcg.edu.br';
        this.password = 'transportesufcg';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        //this.authenticationService.login(this.user).subscribe(token => {
        //  console.log(token);
        //}, error => {
        //  console.log(error)
        //});
        if (this.password === this.user.password && this.email === this.user.email) {
            this.router.navigate(['home']);
        }
        else {
            var snackBarRef = this.snackBar.open('EMAIL OU SENHA NÃO CONFEREM!', 'OK', { duration: 5000 });
            this.user.password = '';
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatSnackBar */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material_toolbar__["a" /* MatToolbarModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */]
        ]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_service__ = __webpack_require__("../../../../../src/app/services/crud.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(crudService) {
        this.crudService = crudService;
    }
    AuthenticationService.prototype.login = function (user) {
        return this.crudService.post('https://mob-ufcg.herokuapp.com/admin/token', user);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__crud_service__["a" /* CrudService */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ })

});
//# sourceMappingURL=4.chunk.js.map