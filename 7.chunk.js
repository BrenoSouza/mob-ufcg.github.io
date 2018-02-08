webpackJsonp([7],{

/***/ "../../../../../src/app/travels-list/travels-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div fxLayoutAlign=\"space-between\">\r\n        <div *ngFor=\"let col of travels.header\" fxFlex fxLayoutAlign=\"center\">\r\n            <h4>{{ col }}</h4>\r\n        </div>\r\n    </div>\r\n    \r\n    <div *ngIf=\"!isLoadingTravels; else Loading\">\r\n        <mat-card *ngFor=\"let travel of travels.itemsContent\" [ngClass]=\"{'PLANNED': travel.status === 'PLANNED', \r\n        'HAPPENING': travel.status === 'HAPPENING', 'COMPLETED': travel.status === 'COMPLETED'}\">\r\n            <mat-card-content class=\"card-container\" fxLayout=\"column\">\r\n                <div fxLayoutAlign=\"space-between\">\r\n                    <div fxFlex fxLayoutAlign=\"center space-between\">\r\n                        <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ travel.form.requesterSector }}</p>\r\n                        </div>\r\n                        <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ travel.form.destination }}</p>\r\n                        </div>\r\n                        <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ travel.vehicle.brand }}</p>\r\n                        </div>\r\n                        <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p> Joao</p>\r\n                        </div>\r\n                        <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ travel.travelDate }}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <ng-template #Loading>\r\n        <mat-spinner fxFlex color=\"primary\"></mat-spinner>\r\n    </ng-template>\r\n<!--     <button class=\"mat-button\" mat-fab color=\"primary\" (click)=\"addNewVehicle()\"><mat-icon>add</mat-icon></button>    \r\n --></div>"

/***/ }),

/***/ "../../../../../src/app/travels-list/travels-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\n  padding: 0; }\n  .mat-card:hover {\n    cursor: pointer;\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.24);\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .mat-card .img-container {\n    height: 50px;\n    padding: 7px 0; }\n    .mat-card .img-container img {\n      border-radius: 50%;\n      height: 50px;\n      width: 50px; }\n  .mat-card .is-link {\n    cursor: pointer; }\n  .mat-card p {\n    font-size: 12px;\n    margin: 0;\n    padding: 24px 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n\n.PLANNED {\n  background-color: #a0a0f7; }\n\n.HAPPENING {\n  background-color: #eeee8f; }\n\n.COMPLETED {\n  background-color: #7cc47c; }\n\n.card-container {\n  margin: 10px 10px 15px 10px !important; }\n\nmat-spinner {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/travels-list/travels-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_travel_service__ = __webpack_require__("../../../../../src/app/services/travel.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TravelsListComponent = (function () {
    function TravelsListComponent(travelService) {
        this.travelService = travelService;
        this.isLoadingTravels = true;
    }
    TravelsListComponent.prototype.ngOnInit = function () {
        this.travels = {
            header: ['Setor Requisitante', 'Destino', 'Veículo', 'Motorista', 'Data Ida'],
            itemsContent: []
        };
        this.showTravels();
    };
    TravelsListComponent.prototype.showTravels = function () {
        var _this = this;
        this.travelService.travelsObs.subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var travelData = data_1[_i];
                _this.travels.itemsContent.push(travelData);
            }
            _this.isLoadingTravels = false;
        });
    };
    return TravelsListComponent;
}());
TravelsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-travels-list',
        template: __webpack_require__("../../../../../src/app/travels-list/travels-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/travels-list/travels-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_travel_service__["a" /* TravelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_travel_service__["a" /* TravelService */]) === "function" && _a || Object])
], TravelsListComponent);

var _a;
//# sourceMappingURL=travels-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/travels-list/travels-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__travels_list_component__ = __webpack_require__("../../../../../src/app/travels-list/travels-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__travels_list_rounting__ = __webpack_require__("../../../../../src/app/travels-list/travels-list.rounting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_travel_service__ = __webpack_require__("../../../../../src/app/services/travel.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelsListModule", function() { return TravelsListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TravelsListModule = (function () {
    function TravelsListModule() {
    }
    return TravelsListModule;
}());
TravelsListModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__travels_list_rounting__["a" /* travelsRouting */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__travels_list_component__["a" /* TravelsListComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_travel_service__["a" /* TravelService */]
        ]
    })
], TravelsListModule);

//# sourceMappingURL=travels-list.module.js.map

/***/ }),

/***/ "../../../../../src/app/travels-list/travels-list.rounting.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__travels_list_component__ = __webpack_require__("../../../../../src/app/travels-list/travels-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return travelsRouting; });


var travelsRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__travels_list_component__["a" /* TravelsListComponent */]
    }
];
var travelsRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(travelsRoutes);
//# sourceMappingURL=travels-list.rounting.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map