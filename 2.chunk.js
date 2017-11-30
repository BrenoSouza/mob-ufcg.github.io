webpackJsonp([2],{

/***/ "../../../../../src/app/drivers-form-dialog/drivers-form-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<app-drivers-form (onClose)=\"closeDialog()\"></app-drivers-form>"

/***/ }),

/***/ "../../../../../src/app/drivers-form-dialog/drivers-form-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/drivers-form-dialog/drivers-form-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriversFormDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DriversFormDialogComponent = (function () {
    function DriversFormDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DriversFormDialogComponent.prototype.ngOnInit = function () {
    };
    DriversFormDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    return DriversFormDialogComponent;
}());
DriversFormDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-drivers-form-dialog',
        template: __webpack_require__("../../../../../src/app/drivers-form-dialog/drivers-form-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/drivers-form-dialog/drivers-form-dialog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */]) === "function" && _a || Object])
], DriversFormDialogComponent);

var _a;
//# sourceMappingURL=drivers-form-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/drivers-form-dialog/drivers-form-dialog.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drivers_form_dialog_component__ = __webpack_require__("../../../../../src/app/drivers-form-dialog/drivers-form-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drivers_form_drivers_form_module__ = __webpack_require__("../../../../../src/app/drivers-form/drivers-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriversFormDialogModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DriversFormDialogModule = (function () {
    function DriversFormDialogModule() {
    }
    return DriversFormDialogModule;
}());
DriversFormDialogModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__drivers_form_drivers_form_module__["a" /* DriversFormModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialogModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__drivers_form_dialog_component__["a" /* DriversFormDialogComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__drivers_form_dialog_component__["a" /* DriversFormDialogComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__drivers_form_dialog_component__["a" /* DriversFormDialogComponent */]
        ]
    })
], DriversFormDialogModule);

//# sourceMappingURL=drivers-form-dialog.module.js.map

/***/ }),

/***/ "../../../../../src/app/drivers-form/drivers-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n  \n  <div class=\"form-header\" fxFlex=\"100\" fxLayout=\"column\" fxLayoutAlign=\" center\">\n    <h2>Registro de Motorista</h2>\n  </div>\n  \n  <form>\n    <div fxLayout=\"column\">\n      <mat-form-field fxFlex=\"100\">\n        <input fxFlex matInput placeholder=\"Nome\" name=\"name\" [(ngModel)]=\"model.name\"/>\n      </mat-form-field>\n      <mat-form-field fxFlex>\n        <input matInput placeholder=\"Endereço\" name=\"address\" [(ngModel)]=\"model.adderss\"/>\n      </mat-form-field>\n      \n      <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n        <mat-form-field fxFlex>\n          <input type=\"text\" matInput placeholder=\"Telefone\" name=\"phone\" [(ngModel)]=\"model.phone\"/>\n        </mat-form-field>\n        <mat-form-field fxFlex>\n          <input type=\"number\" matInput placeholder=\"Registro\" name=\"registration\" [(ngModel)]=\"model.registration\"/>\n        </mat-form-field>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n        <mat-form-field fxFlex>\n          <input matInput placeholder=\"Cpf\" name=\"cpf\" [(ngModel)]=\"model.cpf\"/>\n        </mat-form-field>\n\n        <mat-form-field fxFlex>\n          <input matInput placeholder=\"Cnh\" name=\"cnh\" [(ngModel)]=\"model.cnh\"/>\n        </mat-form-field>\n      </div>\n      \n    </div>\n    <div fxLayoutAlign=\"end\">\n      <button mat-button class=\"mat-raised-button\" color=\"primary\" (click)=\"addNewDriver()\"> Salvar </button>\n      <button mat-button class=\"mat-raised-button\" (click)=\"closeDialog()\"> Cancelar </button>\n    </div>\n    \n  </form>\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/drivers-form/drivers-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/drivers-form/drivers-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_driver_service__ = __webpack_require__("../../../../../src/app/services/driver.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriversFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DriversFormComponent = (function () {
    function DriversFormComponent(driverService) {
        this.driverService = driverService;
        this.model = {};
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
    }
    DriversFormComponent.prototype.ngOnInit = function () {
    };
    DriversFormComponent.prototype.addNewDriver = function () {
        var _this = this;
        this.driverService.create(this.model).subscribe(function (data) {
            console.log(data);
            _this.onClose.emit();
        });
    };
    DriversFormComponent.prototype.closeDialog = function () {
        this.onClose.emit();
    };
    return DriversFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Output */])(),
    __metadata("design:type", Object)
], DriversFormComponent.prototype, "onClose", void 0);
DriversFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-drivers-form',
        template: __webpack_require__("../../../../../src/app/drivers-form/drivers-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/drivers-form/drivers-form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_driver_service__["a" /* DriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_driver_service__["a" /* DriverService */]) === "function" && _a || Object])
], DriversFormComponent);

var _a;
//# sourceMappingURL=drivers-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/drivers-form/drivers-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drivers_form_component__ = __webpack_require__("../../../../../src/app/drivers-form/drivers-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_driver_service__ = __webpack_require__("../../../../../src/app/services/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriversFormModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DriversFormModule = (function () {
    function DriversFormModule() {
    }
    return DriversFormModule;
}());
DriversFormModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__drivers_form_component__["a" /* DriversFormComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__drivers_form_component__["a" /* DriversFormComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__services_driver_service__["a" /* DriverService */]
        ]
    })
], DriversFormModule);

//# sourceMappingURL=drivers-form.module.js.map

/***/ }),

/***/ "../../../../../src/app/drivers-list/drivers-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div *ngIf=\"drivers\" fxLayoutAlign=\"space-between\">\n        <div *ngFor=\"let col of drivers.header\" fxFlex fxLayoutAlign=\"center\">\n            <h4>{{ col }}</h4>\n        </div>\n    </div>\n    \n    <div *ngIf=\"drivers\">\n        <mat-card *ngFor=\"let driver of drivers.itemsContent\">\n            <mat-card-content class=\"card-container\" fxLayout=\"column\">\n                <div fxLayoutAlign=\"space-between\" fxLayoutGap=\"30px\">\n                    <div fxFlex fxLayoutAlign=\"center space-between\">\n                        <div fxFlex fxLayoutAlign=\"center center\">\n                            <mat-icon>person</mat-icon>\n                        </div>\n                        <div fxFlex fxLayoutAlign=\"center center\">\n                            <p>{{ driver.name }}</p>\n                        </div>\n                        <div fxFlex fxLayoutAlign=\"center center\">\n                            <p>{{ driver.cpf }}</p>\n                        </div>\n                        <div fxFlex fxLayoutAlign=\"center center\">\n                            <p>{{ driver.cnh }}</p>\n                        </div>\n                        <div fxFlex fxLayoutAlign=\"center center\">\n                            <p>{{ driver.registration }}</p>\n                        </div>\n                    </div>\n                </div>\n            </mat-card-content>\n        </mat-card>\n        <button class=\"mat-button\" mat-fab color=\"primary\" (click)=\"addNewDriver()\"><mat-icon>add</mat-icon></button>    \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/drivers-list/drivers-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\n  padding: 5px 0px 5px 0px; }\n  .mat-card:hover {\n    cursor: pointer;\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.24);\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.mat-button {\n  position: fixed;\n  bottom: 50px;\n  right: 50px; }\n\n.md-content {\n  display: block;\n  max-height: calc(100% - 64px);\n  margin-top: 64px;\n  overflow: auto;\n  overflow-x: hidden;\n  width: 100%; }\n\n.card-container {\n  margin: 5px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/drivers-list/drivers-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driver_service__ = __webpack_require__("../../../../../src/app/services/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__drivers_form_dialog_drivers_form_dialog_component__ = __webpack_require__("../../../../../src/app/drivers-form-dialog/drivers-form-dialog.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriversListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DriversListComponent = (function () {
    function DriversListComponent(driverService, router, addDriverDialog) {
        this.driverService = driverService;
        this.router = router;
        this.addDriverDialog = addDriverDialog;
    }
    DriversListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.driverService.driversObs.subscribe(function (data) {
            _this.drivers = {
                header: ['Foto', 'Nome', 'Cpf', 'Cnh', 'Registro'],
                itemsContent: []
            };
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var driverData = data_1[_i];
                _this.drivers.itemsContent.push(driverData);
            }
        });
    };
    DriversListComponent.prototype.addNewDriver = function () {
        var loginRef = this.addDriverDialog.open(__WEBPACK_IMPORTED_MODULE_4__drivers_form_dialog_drivers_form_dialog_component__["a" /* DriversFormDialogComponent */]);
    };
    return DriversListComponent;
}());
DriversListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-drivers-list',
        template: __webpack_require__("../../../../../src/app/drivers-list/drivers-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/drivers-list/drivers-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_driver_service__["a" /* DriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_driver_service__["a" /* DriverService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatDialog */]) === "function" && _c || Object])
], DriversListComponent);

var _a, _b, _c;
//# sourceMappingURL=drivers-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/drivers-list/drivers-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drivers_list_component__ = __webpack_require__("../../../../../src/app/drivers-list/drivers-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_driver_service__ = __webpack_require__("../../../../../src/app/services/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__drivers_list_routing__ = __webpack_require__("../../../../../src/app/drivers-list/drivers-list.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__drivers_form_dialog_drivers_form_dialog_module__ = __webpack_require__("../../../../../src/app/drivers-form-dialog/drivers-form-dialog.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversListModule", function() { return DriversListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DriversListModule = (function () {
    function DriversListModule() {
    }
    return DriversListModule;
}());
DriversListModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__drivers_list_routing__["a" /* driversListRouting */],
            __WEBPACK_IMPORTED_MODULE_6__drivers_form_dialog_drivers_form_dialog_module__["a" /* DriversFormDialogModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__drivers_list_component__["a" /* DriversListComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_driver_service__["a" /* DriverService */]
        ]
    })
], DriversListModule);

//# sourceMappingURL=drivers-list.module.js.map

/***/ }),

/***/ "../../../../../src/app/drivers-list/drivers-list.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drivers_list_component__ = __webpack_require__("../../../../../src/app/drivers-list/drivers-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return driversListRouting; });


var driversListRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__drivers_list_component__["a" /* DriversListComponent */]
    }
];
var driversListRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(driversListRoutes);
//# sourceMappingURL=drivers-list.routing.js.map

/***/ }),

/***/ "../../../../../src/app/services/driver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_service__ = __webpack_require__("../../../../../src/app/services/crud.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DriverService = (function () {
    function DriverService(crudService) {
        this.crudService = crudService;
        this.driversObs = crudService.get('https://mobilidade-ufcg.herokuapp.com/driver').map(function (response) {
            var drivers = [];
            for (var _i = 0, _a = response.dataList; _i < _a.length; _i++) {
                var driverData = _a[_i];
                drivers.push(driverData);
            }
            return drivers;
        });
    }
    DriverService.prototype.create = function (model) {
        return this.crudService.post('https://mobilidade-ufcg.herokuapp.com/driver', model);
    };
    DriverService.prototype.getById = function (id) {
        return this.crudService.get('https://mobilidade-ufcg.herokuapp.com/driver/' + id).map(function (response) {
            var driver;
            driver = (response.data);
            return driver;
        });
    };
    return DriverService;
}());
DriverService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__crud_service__["a" /* CrudService */]) === "function" && _a || Object])
], DriverService);

var _a;
//# sourceMappingURL=driver.service.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map