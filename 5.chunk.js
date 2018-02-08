webpackJsonp([5],{

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-component-container\">\r\n  <mat-toolbar color=\"primary\">\r\n    <div class=\"header-container\" fxLayoutAlign=\"space-between center\" #toolbarEl>\r\n      <div class=\"img-container\" fxLayoutAlign=\"start center\" fxFlex=\"10\">\r\n        <div fxFlex fxLayoutAlign=\"center center\">\r\n          <img style=\"height: 50px\" src=\"assets/logo_ufcg.png\" alt=\"Logo\">\r\n        </div>\r\n      </div>    \r\n      <div class=\"menu-container\" fxLayoutAlign=\"center\" fxFlex>\r\n        <ul class=\"nav navbar-nav\" fxLayoutAlign=\"center\" fxFlex>\r\n          <li fxLayoutAlign=\"center\" fxFlex #solicitationsMenu (click)=\"onMenuClick('solicitations')\">\r\n            <a routerLink=\"solicitations\" fxLayoutAlign=\"center center\" class=\"target\">Solicitações</a>\r\n          </li>\r\n          <li fxLayoutAlign=\"center\" fxFlex #travelsMenu (click)=\"onMenuClick('travels')\">\r\n            <a routerLink=\"travels\" fxLayoutAlign=\"center center\">Viagens</a>\r\n          </li>\r\n          <li fxLayoutAlign=\"center\" fxFlex #driversMenu (click)=\"onMenuClick('drivers')\">\r\n            <a routerLink=\"drivers\" fxLayoutAlign=\"center center\">Motoristas</a>\r\n          </li>\r\n          <li fxLayoutAlign=\"center\" fxFlex #vehiclesMenu (click)=\"onMenuClick('vehicles')\">\r\n            <a routerLink=\"vehicles\" fxLayoutAlign=\"center center\">Veículos</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <button mat-button [matMenuTriggerFor]=\"menu\">\r\n      <mat-icon>notifications</mat-icon>\r\n    </button>\r\n    <button mat-button [matMenuTriggerFor]=\"menu\">\r\n      <mat-icon>settings</mat-icon>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\r\n      <button mat-menu-item (click)=\"onMenuOption('')\">Sair</button>\r\n    </mat-menu>\r\n  </mat-toolbar>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-component-container md-toolbar {\n  box-shadow: 2px 2px 2px #bbbbbb;\n  height: 64px !important;\n  overflow: hidden;\n  padding-left: 8px;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 10; }\n\n.header-component-container md-sidenav-container {\n  left: 0;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  width: 100vw; }\n  .header-component-container md-sidenav-container md-sidenav {\n    height: 100vh; }\n\n.header-component-container .navbar-nav {\n  float: left;\n  margin: 0; }\n  .header-component-container .navbar-nav li {\n    float: left; }\n    .header-component-container .navbar-nav li a {\n      color: white; }\n  .header-component-container .navbar-nav a {\n    font-size: 1.2rem;\n    line-height: 20px;\n    padding-top: 15px;\n    padding-bottom: 15px; }\n\n.header-component-container .nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n  .header-component-container .nav li {\n    position: relative;\n    display: block; }\n    .header-component-container .nav li a {\n      position: relative;\n      display: block;\n      padding: 10px 15px; }\n\n.header-component-container a {\n  text-decoration: none;\n  height: 100%;\n  width: 100%; }\n\n.header-component-container div {\n  height: 100%;\n  width: 100%; }\n\n.header-component-container ul li.active, .header-component-container ul li:hover {\n  border-bottom: solid 3px white;\n  padding: 3px 0 0; }\n  .header-component-container ul li.active:hover a, .header-component-container ul li:hover:hover a {\n    color: white;\n    cursor: pointer; }\n\n.header-component-container .btn-container {\n  background-color: white;\n  border-radius: 50%;\n  position: fixed; }\n  .header-component-container .btn-container img {\n    border-radius: 50%;\n    height: 40px;\n    width: 40px; }\n\n.header-component-container button {\n  padding: 0;\n  min-width: 60px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = HeaderComponent_1 = (function () {
    function HeaderComponent(router, renderer) {
        this.router = router;
        this.renderer = renderer;
        this.activeMenu = '';
        this.options = {};
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.inicializeOptions();
        this.menuActive();
    };
    HeaderComponent.prototype.onMenuClick = function (menuClicked) {
        if (menuClicked && menuClicked !== this.activeMenu && this.options[menuClicked]) {
            if (this.options[this.activeMenu]) {
                this.renderer.removeClass(this.options[this.activeMenu].nativeElement, HeaderComponent_1.ACTIVE_CLASS);
            }
            this.activeMenu = menuClicked;
            this.renderer.addClass(this.options[this.activeMenu].nativeElement, HeaderComponent_1.ACTIVE_CLASS);
            this.onMenuOption('/home/' + menuClicked);
        }
        else if (menuClicked === this.activeMenu) {
            this.onMenuOption('/home/' + menuClicked);
        }
    };
    HeaderComponent.prototype.inicializeOptions = function () {
        this.options[HeaderComponent_1.SOLICITATIONS] = this.solicitationsMenu;
        this.options[HeaderComponent_1.TRAVELS] = this.travelsMenu;
        this.options[HeaderComponent_1.DRIVERS] = this.driversMenu;
        this.options[HeaderComponent_1.VEHICLES] = this.vehiclesMenu;
    };
    HeaderComponent.prototype.onSubmit = function (navActive) {
        this.navActive = navActive;
    };
    HeaderComponent.prototype.menuActive = function () {
        if (this.router.url.includes('/home/solicitations')) {
            this.onMenuClick('solicitations');
        }
        else if (this.router.url.includes('/app/survey')) {
            this.onMenuClick('surveys');
        }
        else if (this.router.url.includes('/home/drivers')) {
            this.onMenuClick('drivers');
        }
        else if (this.router.url.includes('/home/vehicles')) {
            this.onMenuClick('vehicles');
        }
    };
    HeaderComponent.prototype.onMenuOption = function (path) {
        console.log(path);
        this.router.navigate([path]);
    };
    return HeaderComponent;
}());
HeaderComponent.ACTIVE_CLASS = 'active';
HeaderComponent.SOLICITATIONS = 'solicitations';
HeaderComponent.TRAVELS = 'travels';
HeaderComponent.DRIVERS = 'drivers';
HeaderComponent.VEHICLES = 'vehicles';
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('solicitationsMenu'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */]) === "function" && _a || Object)
], HeaderComponent.prototype, "solicitationsMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('travelsMenu'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */]) === "function" && _b || Object)
], HeaderComponent.prototype, "travelsMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('driversMenu'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */]) === "function" && _c || Object)
], HeaderComponent.prototype, "driversMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('vehiclesMenu'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */]) === "function" && _d || Object)
], HeaderComponent.prototype, "vehiclesMenu", void 0);
HeaderComponent = HeaderComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Renderer2 */]) === "function" && _f || Object])
], HeaderComponent);

var HeaderComponent_1, _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__header_component__["a" /* HeaderComponent */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__header_component__["a" /* HeaderComponent */]
        ]
    })
], HeaderModule);

//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header class=\"header-container\"></app-header>\r\n<div class=\"md-content\" fxLayoutAlign=\"center center\">\r\n  <div fxFlex=\"90\" class=\"container-body\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
        this.activeLinkIndex = 0;
        this.routeLinks = [
            { label: 'Solicitações', link: 'solicitations' },
            { label: 'Motoristas', link: 'drivers' },
            { label: 'Veículos', link: 'vehicles' }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_routing__ = __webpack_require__("../../../../../src/app/home/home.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_module__ = __webpack_require__("../../../../../src/app/header/header.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__home_routing__["a" /* homeRouting */],
            __WEBPACK_IMPORTED_MODULE_6__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatTabsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return homeRouting; });


var homeRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */], children: [
            { path: '', redirectTo: 'solicitations', pathMatch: 'prefix' },
            { path: 'solicitations', loadChildren: 'app/solicitations-list/solicitations-list.module#SolicitationsListModule' },
            { path: 'drivers', loadChildren: 'app/drivers-list/drivers-list.module#DriversListModule' },
            { path: 'allocation', loadChildren: 'app/allocation/allocation.module#AllocationModule' },
            { path: 'solicitation', loadChildren: 'app/solicitation/solicitation.module#SolicitationModule' },
            { path: 'vehicles', loadChildren: 'app/vehicles/vehicles.module#VehiclesModule' },
            { path: 'travels', loadChildren: 'app/travels-list/travels-list.module#TravelsListModule' },
            { path: 'form', loadChildren: 'app/form/form.module#FormModule' },
            { path: 'vehicle-request', loadChildren: 'app/vehicle-request/vehicle-request.module#VehicleRequestModule' },
        ]
    }
];
var homeRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(homeRoutes);
//# sourceMappingURL=home.routing.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map