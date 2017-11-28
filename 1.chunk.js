webpackJsonp([1],{

/***/ "../../../../../src/app/cars/cars.component.html":
/***/ (function(module, exports) {

module.exports = "<app-vehicle-list></app-vehicle-list>\r\n"

/***/ }),

/***/ "../../../../../src/app/cars/cars.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cars/cars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarsComponent = (function () {
    function CarsComponent() {
    }
    CarsComponent.prototype.ngOnInit = function () {
    };
    return CarsComponent;
}());
CarsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-cars',
        template: __webpack_require__("../../../../../src/app/cars/cars.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cars/cars.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CarsComponent);

//# sourceMappingURL=cars.component.js.map

/***/ }),

/***/ "../../../../../src/app/cars/cars.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cars_component__ = __webpack_require__("../../../../../src/app/cars/cars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cars_routing__ = __webpack_require__("../../../../../src/app/cars/cars.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vehicle_list_vehicle_list_module__ = __webpack_require__("../../../../../src/app/vehicle-list/vehicle-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pdf_reader_pdf_reader_module__ = __webpack_require__("../../../../../src/app/pdf-reader/pdf-reader.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsModule", function() { return CarsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CarsModule = (function () {
    function CarsModule() {
    }
    return CarsModule;
}());
CarsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__cars_routing__["a" /* carsRouting */],
            __WEBPACK_IMPORTED_MODULE_4__vehicle_list_vehicle_list_module__["a" /* VehicleListModule */],
            __WEBPACK_IMPORTED_MODULE_5__pdf_reader_pdf_reader_module__["a" /* PdfReaderModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__cars_component__["a" /* CarsComponent */]]
    })
], CarsModule);

//# sourceMappingURL=cars.module.js.map

/***/ }),

/***/ "../../../../../src/app/cars/cars.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cars_component__ = __webpack_require__("../../../../../src/app/cars/cars.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return carsRouting; });


var carsRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__cars_component__["a" /* CarsComponent */]
    }
];
var carsRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(carsRoutes);
//# sourceMappingURL=cars.routing.js.map

/***/ }),

/***/ "../../../../../src/app/services/vehicle.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_service__ = __webpack_require__("../../../../../src/app/services/crud.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehicleService = (function () {
    function VehicleService(crudService) {
        this.crudService = crudService;
        this.vehiclesObs = crudService.get('https://mobilidade-ufcg.herokuapp.com/vehicle').map(function (response) {
            var vehicles = [];
            for (var _i = 0, _a = response.dataList; _i < _a.length; _i++) {
                var solicitationData = _a[_i];
                vehicles.push(solicitationData);
            }
            return vehicles;
        });
    }
    VehicleService.prototype.create = function (model) {
        return this.crudService.post('https://mobilidade-ufcg.herokuapp.com/vehicle', model);
    };
    VehicleService.prototype.getById = function (id) {
        return this.crudService.get('https://mobilidade-ufcg.herokuapp.com/vehicle/' + id).map(function (response) {
            var vehicle;
            vehicle = (response.data);
            return vehicle;
        });
    };
    return VehicleService;
}());
VehicleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__crud_service__["a" /* CrudService */]) === "function" && _a || Object])
], VehicleService);

var _a;
//# sourceMappingURL=vehicle.service.js.map

/***/ }),

/***/ "../../../../../src/app/vehicle-form-dialog/vehicle-form-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<app-vehicle-form></app-vehicle-form>"

/***/ }),

/***/ "../../../../../src/app/vehicle-form-dialog/vehicle-form-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vehicle-form-dialog/vehicle-form-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleFormDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehicleFormDialogComponent = (function () {
    function VehicleFormDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    VehicleFormDialogComponent.prototype.ngOnInit = function () {
    };
    VehicleFormDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    return VehicleFormDialogComponent;
}());
VehicleFormDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-vehicle-form-dialog',
        template: __webpack_require__("../../../../../src/app/vehicle-form-dialog/vehicle-form-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vehicle-form-dialog/vehicle-form-dialog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */]) === "function" && _a || Object])
], VehicleFormDialogComponent);

var _a;
//# sourceMappingURL=vehicle-form-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/vehicle-form-dialog/vehicle-form-dialog.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_form_dialog_component__ = __webpack_require__("../../../../../src/app/vehicle-form-dialog/vehicle-form-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vehicle_form_vehicle_form_module__ = __webpack_require__("../../../../../src/app/vehicle-form/vehicle-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleFormDialogModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var VehicleFormDialogModule = (function () {
    function VehicleFormDialogModule() {
    }
    return VehicleFormDialogModule;
}());
VehicleFormDialogModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__vehicle_form_vehicle_form_module__["a" /* VehicleFormModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material_dialog__["b" /* MatDialogModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__vehicle_form_dialog_component__["a" /* VehicleFormDialogComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__vehicle_form_dialog_component__["a" /* VehicleFormDialogComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__vehicle_form_dialog_component__["a" /* VehicleFormDialogComponent */]]
    })
], VehicleFormDialogModule);

//# sourceMappingURL=vehicle-form-dialog.module.js.map

/***/ }),

/***/ "../../../../../src/app/vehicle-form/vehicle-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!--VEÍCULO\r\nANO\r\nPLACA\r\nMARCA-->\r\n<!--EST. DE-->\r\n\r\n<!--CONSERVAÇÃO-->\r\n\r\n<!--COMBÚSTIVEL\tCOR-->\r\n<!--CAPAC. DE-->\r\n\r\n<!--PASSAGEIROS-->\r\n\r\n<div fxLayout=\"column\">\r\n\r\n  <div class=\"form-header\" fxFlex=\"100\" fxLayout=\"column\" fxLayoutAlign=\" center\">\r\n    <h2>Registro de veículos</h2>\r\n  </div>\r\n\r\n  <form>\r\n    <div fxLayout=\"row\">\r\n      <mat-form-field fxFlex=\"25\">\r\n        <input matInput placeholder=\"Veículo\" name=\"vehicle\" [(ngModel)]=\"model.vehicle\"/>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex=\"25\" fxFlexOffset=\"5\">\r\n        <input matInput placeholder=\"Marca\" name=\"brand\" [(ngModel)]=\"model.brand\"/>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex=\"15\" fxFlexOffset=\"5\">\r\n        <input matInput placeholder=\"Placa\" name=\"plate\" [(ngModel)]=\"model.plate\"/>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex fxFlexOffset=\"5\">\r\n        <input type=\"number\" matInput placeholder=\"Ano\" name=\"year\" [(ngModel)]=\"model.year\"/>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\">\r\n      <mat-form-field fxFlex=\"25\">\r\n        <input matInput placeholder=\"Estado de conservação\" name=\"conservationState\" [(ngModel)]=\"model.conservationState\"/>\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-form-field fxFlex=\"25\" fxFlexOffset=\"5\">\r\n        <input matInput placeholder=\"Combustível\" name=\"fuel\" [(ngModel)]=\"model.fuel\"/>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex=\"15\" fxFlexOffset=\"5\">\r\n        <input matInput placeholder=\"Cor\" name=\"color\" [(ngModel)]=\"model.color\"/>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex fxFlexOffset=\"5\">\r\n        <input type=\"number\" matInput placeholder=\"Número de passageiros\" name=\"capacity\" [(ngModel)]=\"model.capacity\"/>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div fxLayoutAlign=\"end\">\r\n      <button mat-button class=\"mat-raised-button\" (click)=\"createNewVehicle()\"> Salvar </button>\r\n      <button mat-button class=\"mat-raised-button\"> Cancelar </button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/vehicle-form/vehicle-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vehicle-form/vehicle-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__ = __webpack_require__("../../../../../src/app/services/vehicle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehicleFormComponent = (function () {
    function VehicleFormComponent(vehicleService) {
        this.vehicleService = vehicleService;
        this.model = {};
        this.selectedVehicleStatus = 'BOM';
        this.vehicleStatus = ['BOM', 'REGULAR', 'RUIM'];
    }
    VehicleFormComponent.prototype.ngOnInit = function () {
    };
    VehicleFormComponent.prototype.changeVehicleStatus = function (status) {
        this.selectedVehicleStatus = status;
    };
    VehicleFormComponent.prototype.createNewVehicle = function () {
        this.vehicleService.create(this.model).subscribe(function (data) {
            console.log(data);
        });
    };
    return VehicleFormComponent;
}());
VehicleFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-vehicle-form',
        template: __webpack_require__("../../../../../src/app/vehicle-form/vehicle-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vehicle-form/vehicle-form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__["a" /* VehicleService */]) === "function" && _a || Object])
], VehicleFormComponent);

var _a;
//# sourceMappingURL=vehicle-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/vehicle-form/vehicle-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_form_component__ = __webpack_require__("../../../../../src/app/vehicle-form/vehicle-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_vehicle_service__ = __webpack_require__("../../../../../src/app/services/vehicle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleFormModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var VehicleFormModule = (function () {
    function VehicleFormModule() {
    }
    return VehicleFormModule;
}());
VehicleFormModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material_radio__["a" /* MatRadioModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__vehicle_form_component__["a" /* VehicleFormComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__vehicle_form_component__["a" /* VehicleFormComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_vehicle_service__["a" /* VehicleService */]
        ]
    })
], VehicleFormModule);

//# sourceMappingURL=vehicle-form.module.js.map

/***/ }),

/***/ "../../../../../src/app/vehicle-list/vehicle-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div *ngIf=\"vehicles\" fxLayoutAlign=\"space-between\">\r\n        <div *ngFor=\"let col of vehicles.header\" fxFlex fxLayoutAlign=\"center\">\r\n            <h4>{{ col }}</h4>\r\n        </div>\r\n    </div>\r\n    \r\n    <div *ngIf=\"vehicles\">\r\n        <mat-card *ngFor=\"let vehicle of vehicles.itemsContent\" >\r\n            <mat-card-content class=\"card-container\" fxLayout=\"column\" (click)=\"goToFull(vehicle)\">\r\n                <div fxLayoutAlign=\"space-between\">\r\n                    <div fxFlex fxLayoutAlign=\"center space-between\">\r\n                        <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <mat-icon>drive_eta</mat-icon>\r\n                        </div>\r\n                        <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ vehicle.vehicle }}</p>\r\n                        </div>\r\n                        <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ vehicle.plate }}</p>\r\n                        </div>\r\n                        <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ vehicle.brand }}</p>\r\n                        </div>\r\n                        <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ vehicle.capacity }}</p>\r\n                        </div>\r\n                        <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ vehicle.year }}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <button class=\"mat-button\" mat-fab color=\"primary\" (click)=\"addNewVehicle()\"><mat-icon>add</mat-icon></button>    \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vehicle-list/vehicle-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\n  padding: 0; }\n  .mat-card:hover {\n    cursor: pointer;\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .mat-card .img-container {\n    height: 50px;\n    padding: 7px 0; }\n    .mat-card .img-container img {\n      border-radius: 50%;\n      height: 50px;\n      width: 50px; }\n  .mat-card p {\n    margin: 0;\n    padding: 24px 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n\n.card-container {\n  margin: 10px !important; }\n\n.mat-button {\n  position: fixed;\n  bottom: 50px;\n  right: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vehicle-list/vehicle-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vehicle_service__ = __webpack_require__("../../../../../src/app/services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vehicle_form_dialog_vehicle_form_dialog_component__ = __webpack_require__("../../../../../src/app/vehicle-form-dialog/vehicle-form-dialog.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VehicleListComponent = (function () {
    function VehicleListComponent(vehicleService, router, addVehicleDialog) {
        this.vehicleService = vehicleService;
        this.router = router;
        this.addVehicleDialog = addVehicleDialog;
    }
    VehicleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vehicleService.vehiclesObs.subscribe(function (data) {
            _this.vehicles = {
                header: ['Categoria', 'Veículo', 'Placa', 'Marca', 'Capacidade', 'Ano'],
                itemsContent: []
            };
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var vehicleData = data_1[_i];
                _this.vehicles.itemsContent.push(vehicleData);
            }
        });
    };
    VehicleListComponent.prototype.addNewVehicle = function () {
        var loginRef = this.addVehicleDialog.open(__WEBPACK_IMPORTED_MODULE_4__vehicle_form_dialog_vehicle_form_dialog_component__["a" /* VehicleFormDialogComponent */]);
    };
    VehicleListComponent.prototype.goToFull = function (vehicle) {
    };
    return VehicleListComponent;
}());
VehicleListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-vehicle-list',
        template: __webpack_require__("../../../../../src/app/vehicle-list/vehicle-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vehicle-list/vehicle-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_vehicle_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_vehicle_service__["a" /* VehicleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["a" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["a" /* MatDialog */]) === "function" && _c || Object])
], VehicleListComponent);

var _a, _b, _c;
//# sourceMappingURL=vehicle-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/vehicle-list/vehicle-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_list_component__ = __webpack_require__("../../../../../src/app/vehicle-list/vehicle-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_vehicle_service__ = __webpack_require__("../../../../../src/app/services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vehicle_form_dialog_vehicle_form_dialog_module__ = __webpack_require__("../../../../../src/app/vehicle-form-dialog/vehicle-form-dialog.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var VehicleListModule = (function () {
    function VehicleListModule() {
    }
    return VehicleListModule;
}());
VehicleListModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__vehicle_form_dialog_vehicle_form_dialog_module__["a" /* VehicleFormDialogModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__vehicle_list_component__["a" /* VehicleListComponent */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__vehicle_list_component__["a" /* VehicleListComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_vehicle_service__["a" /* VehicleService */]
        ]
    })
], VehicleListModule);

//# sourceMappingURL=vehicle-list.module.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map