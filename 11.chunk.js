webpackJsonp([11],{

/***/ "../../../../../src/app/public-info/public-info.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" fxLayoutAlign=\"center center\">\r\n  <span>CRONOGRAMA DE VIAGENS</span>\r\n</mat-toolbar>\r\n\r\n<div fxLayout=\"column\">\r\n    <div fxLayoutAlign=\"space-between\">\r\n        <div><h4>Status</h4></div>\r\n        <div *ngFor=\"let col of header\" fxFlex fxLayoutAlign=\"center\">\r\n            <h4>{{ col }}</h4>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"public-card\" *ngIf=\"!isLoadingTravels; else Loading\">\r\n        <mat-card *ngFor=\"let travel of travels\">\r\n            <mat-card-content class=\"card-container\" fxLayout=\"column\" *ngIf=\"travel.status !== 'COMPLETED'\">\r\n                <div fxLayoutAlign=\"space-between\">\r\n                    <div fxFlex fxLayoutAlign=\"center space-between\">\r\n                        <div fxFlex=\"3\" fxLayoutAlign=\"center\"  [ngClass]=\"{'PLANNED': travel.status === 'PLANNED', \r\n                        'HAPPENING': travel.status === 'HAPPENING', 'COMPLETED': travel.status === 'COMPLETED'}\">\r\n                            <div fxFlexAlign=\"center\">\r\n                                <mat-icon class=\"icon-color\" *ngIf=\"travel.status === 'HAPPENING'\">alarm_on</mat-icon>\r\n                                <mat-icon class=\"icon-color\" *ngIf=\"travel.status === 'COMPLETED'\">done</mat-icon>\r\n                                <mat-icon class=\"icon-color\" *ngIf=\"travel.status === 'PLANNED'\">alarm</mat-icon>\r\n                            </div>\r\n                        </div>\r\n                        <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ travel.form[0].driverSectorResponsibility }}</p>\r\n                        </div>\r\n                        <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ travel.form[0].destination }}</p>\r\n                        </div>\r\n                        <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ travel.vehicle.vehicle }}</p>\r\n                        </div>\r\n                        <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ travel.travelDate.slice(0,16)}}h</p>\r\n                        </div>\r\n                        <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{travel.returnDate.slice(0,16)}}h</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <ng-template #Loading>\r\n        <mat-spinner fxFlex color=\"primary\"></mat-spinner>\r\n    </ng-template>\r\n<!--     <button class=\"mat-button\" mat-fab color=\"primary\" (click)=\"addNewVehicle()\"><mat-icon>add</mat-icon></button>    \r\n --></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/public-info/public-info.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-header {\n  padding-top: 8px;\n  padding-bottom: 8px; }\n\n.mat-card {\n  padding: 0; }\n  .mat-card:hover {\n    cursor: pointer;\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.24);\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .mat-card .img-container {\n    height: 50px;\n    padding: 7px 0; }\n    .mat-card .img-container img {\n      border-radius: 50%;\n      height: 50px;\n      width: 50px; }\n  .mat-card .is-link {\n    cursor: pointer; }\n  .mat-card p {\n    font-size: 12px;\n    margin: 0;\n    padding: 24px 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .mat-card .PLANNED {\n    background-color: #F4D03F; }\n  .mat-card .HAPPENING {\n    background-color: #a0a0f7; }\n  .mat-card .COMPLETED {\n    background-color: #87D37C; }\n  .mat-card .icon-color {\n    color: white; }\n  .mat-card .card-container {\n    margin: 10px 10px 15px 0 !important; }\n\nmat-spinner {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -50px; }\n\n.public-card {\n  margin-left: 10px;\n  margin-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/public-info/public-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__ = __webpack_require__("../../../../../src/app/services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_travel_service__ = __webpack_require__("../../../../../src/app/services/travel.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicInfoComponent = (function () {
    function PublicInfoComponent(vehicleService, travelService) {
        this.vehicleService = vehicleService;
        this.travelService = travelService;
        this.header = ['Setor Requisitante', 'Destino', 'Veículo', 'Data Ida', 'Data Volta'];
        this.model = { car: '', dataIni: '', dataFim: '' };
        this.carList = [];
        this.onGoingTravels = [];
        this.plannedTravels = [];
        this.travels = [];
    }
    PublicInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vehicleService.vehiclesObs.subscribe(function (data) {
            _this.carList = data;
        });
        this.showTravels();
    };
    PublicInfoComponent.prototype.showTravels = function () {
        var _this = this;
        this.travelService.getAllTravels().subscribe(function (data) {
            _this.travels = data;
        }, function (error) {
            console.error(error);
        });
    };
    return PublicInfoComponent;
}());
PublicInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-public-info',
        template: __webpack_require__("../../../../../src/app/public-info/public-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/public-info/public-info.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__["a" /* VehicleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_travel_service__["a" /* TravelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_travel_service__["a" /* TravelService */]) === "function" && _b || Object])
], PublicInfoComponent);

var _a, _b;
//# sourceMappingURL=public-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/public-info/public-info.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_info_component__ = __webpack_require__("../../../../../src/app/public-info/public-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_info_routing__ = __webpack_require__("../../../../../src/app/public-info/public-info.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_vehicle_service__ = __webpack_require__("../../../../../src/app/services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_travel_service__ = __webpack_require__("../../../../../src/app/services/travel.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicInfoModule", function() { return PublicInfoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PublicInfoModule = (function () {
    function PublicInfoModule() {
    }
    return PublicInfoModule;
}());
PublicInfoModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__public_info_routing__["a" /* publicInfoRouting */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatToolbarModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__public_info_component__["a" /* PublicInfoComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_8__services_travel_service__["a" /* TravelService */]
        ]
    })
], PublicInfoModule);

//# sourceMappingURL=public-info.module.js.map

/***/ }),

/***/ "../../../../../src/app/public-info/public-info.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_info_component__ = __webpack_require__("../../../../../src/app/public-info/public-info.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return publicInfoRouting; });


var publicInfoRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__public_info_component__["a" /* PublicInfoComponent */]
    }
];
var publicInfoRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(publicInfoRoutes);
//# sourceMappingURL=public-info.routing.js.map

/***/ })

});
//# sourceMappingURL=11.chunk.js.map