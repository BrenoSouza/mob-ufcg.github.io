webpackJsonp([10],{

/***/ "../../../../../src/app/public-info/public-info.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" fxLayoutAlign=\"center center\">\r\n  <span>CRONOGRAMA DE VIAGENS</span>\r\n</mat-toolbar>\r\n\r\n<div fxLayout=\"column\" style=\"padding-top: 2.5%;\">\r\n  <!--<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n\r\n    <form name=\"searchForm\" fxFlex=\"90\">\r\n      <mat-card fxLayout=\"column\">\r\n        <div fxLayout=\"row\">\r\n          <mat-form-field name=\"carFormField\" fxFlex=\"30\">\r\n            <mat-select name=\"carSelect\" [(ngModel)]=\"model.car\" placeholder=\"Veículo\">\r\n              <mat-option *ngFor=\"let car of carList\" value=\"car.vehicle\">\r\n                {{ car.vehicle }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"30\" fxFlexOffset=\"5\">\r\n            <input matInput [matDatepicker]=\"data_ini\" placeholder=\"Saída\" name=\"date\" [(ngModel)]=\"model.dataIni\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"data_ini\"></mat-datepicker-toggle>\r\n            <mat-datepicker #data_ini></mat-datepicker>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"30\" fxFlexOffset=\"5\">\r\n            <input matInput [matDatepicker]=\"data_fim\" placeholder=\"Volta\" name=\"date\" [(ngModel)]=\"model.dataIni\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"data_fim\"></mat-datepicker-toggle>\r\n            <mat-datepicker #data_fim></mat-datepicker>\r\n          </mat-form-field>\r\n\r\n          <div fxFlexOffset=\"5\" fxLayoutAlign=\"end center\">\r\n            <button mat-raised-button class=\"md-raised\" (click)=\"search()\"> BUSCAR</button>\r\n          </div>\r\n        </div>\r\n\r\n      </mat-card>\r\n    </form>\r\n  </div>-->\r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"padding-top: 1%;\">\r\n    <div fxLayout=\"column\" fxFlex=\"90\">\r\n      <div fxLayout=\"row\">\r\n        <mat-toolbar color=\"primary\" fxLayoutAlign=\"center center\">\r\n          <span>Viagens em Curso</span>\r\n        </mat-toolbar>\r\n      </div>\r\n\r\n      <mat-card  class=\"mat-header\" fxLayout=\"row\">\r\n        <div fxFlex fxLayout=\"column\">\r\n          <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\"\r\n               style=\"padding-top: 1.5%; padding-bottom: 0.5%;\">\r\n               <span class=\"mat-subheader\"><h3>Setor Requisitante</h3></span>\r\n               <span class=\"mat-subheader\"><h3>Destino</h3></span>\r\n               <span class=\"mat-subheader\"><h3>Veículo</h3></span>\r\n               <span class=\"mat-subheader\"><h3>Motorista</h3></span>\r\n               <span class=\"mat-subheader\"><h3>Data Ida</h3></span>\r\n             </div>\r\n\r\n\r\n          <div style=\"overflow-y: visible;\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlex *ngFor=\"let travel of onGoingTravels\"\r\n                 style=\"padding-top: 0.5%;\">\r\n              <mat-card fxFlex fxLayoutAlign=\"space-between center\">\r\n                <span class=\"mat-body-2\">{{ travel.form[0].requesterSector }}</span>\r\n                <span class=\"mat-body-2\">{{ travel.form[0].departurePoint }}</span>\r\n                <span class=\"mat-body-2\">{{ travel.vehicle.vehicle }}</span>\r\n                <span class=\"mat-body-2\">{{ travel.driver.name }}</span>\r\n                <span class=\"mat-body-2\">{{ travel.travelDate }}</span>\r\n              </mat-card>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"padding-top: 1%;\">\r\n    <div fxLayout=\"column\" fxFlex=\"90\">\r\n      <div fxLayout=\"row\">\r\n        <mat-toolbar color=\"primary\" fxLayoutAlign=\"center center\">\r\n          <span>Viagens Planejadas</span>\r\n        </mat-toolbar>\r\n      </div>\r\n\r\n      <mat-card class=\"mat-header\" fxLayout=\"row\">\r\n        <div fxFlex fxLayout=\"column\">\r\n          <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\"\r\n               style=\"padding-top: 1.5%; padding-bottom: 0.5%;\">\r\n            <span class=\"mat-subheader\"><h3>Setor Requisitante</h3></span>\r\n            <span class=\"mat-subheader\"><h3>Destino</h3></span>\r\n            <span class=\"mat-subheader\"><h3>Veículo</h3></span>\r\n            <span class=\"mat-subheader\"><h3>Motorista</h3></span>\r\n            <span class=\"mat-subheader\"><h3>Data Ida</h3></span>\r\n          </div>\r\n\r\n\r\n          <div style=\"overflow-y: visible;\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlex *ngFor=\"let travel of plannedTravels\"\r\n                 style=\"padding-top: 0.5%;\">\r\n              <mat-card fxFlex fxLayoutAlign=\"space-between center\">\r\n                  <span class=\"mat-body-2\">{{ travel.form[0].requesterSector }}</span>\r\n                  <span class=\"mat-body-2\">{{ travel.form[0].departurePoint }}</span>\r\n                  <span class=\"mat-body-2\">{{ travel.vehicle.vehicle }}</span>\r\n                  <span class=\"mat-body-2\">{{travel.driver.name}}</span>\r\n                  <span class=\"mat-body-2\">{{travel.travelDate}}</span>\r\n                </mat-card>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n<!--<div style=\"overflow-y: scroll;\">-->\r\n<!--<div layout=\"row\" layout-wrap>-->\r\n<!--<div ng-repeat=\"review in reviewCtrl.reviews\" flex=\"33\">-->\r\n<!--<md-card layout=\"row\" layout-align=\"space-between center\">-->\r\n<!--<md-card-title>-->\r\n<!--<md-card-title-text>-->\r\n<!--{{review.fileName}}-->\r\n<!--</md-card-title-text>-->\r\n<!--</md-card-title>-->\r\n<!--<md-card-actions>-->\r\n<!--<md-button class=\"md-icon-button\" ng-click=\"reviewCtrl.selectReview(review)\">-->\r\n<!--<i class=\"material-icons\">check</i>-->\r\n<!--</md-button>-->\r\n<!--<md-button class=\"md-icon-button\" ng-click=\"reviewCtrl.deleteReview(review)\">-->\r\n<!--<i class=\"material-icons\">close</i>-->\r\n<!--</md-button>-->\r\n<!--</md-card-actions>-->\r\n<!--</md-card>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/public-info/public-info.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-header {\n  padding-top: 8px;\n  padding-bottom: 8px; }\n", ""]);

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
        this.model = { car: '', dataIni: '', dataFim: '' };
        this.carList = [];
        this.onGoingTravels = [];
        this.plannedTravels = [];
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
        this.travelService.travelsObs.subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var travelData = data_1[_i];
                if (travelData.status === 'PLANNED') {
                    _this.plannedTravels.push(travelData);
                }
                else if (travelData.status === 'HAPPENING') {
                    _this.onGoingTravels.push(travelData);
                }
            }
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
//# sourceMappingURL=10.chunk.js.map