webpackJsonp([6],{

/***/ "../../../../../src/app/vehicle-request/vehicle-request.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"full-form-container\" fxLayout=\"column\">\n  <div class=\"form-header\" fxLayout=\"column\" fxLayoutAlign=\" center\">\n    <h5>SERVIÇO PÚBLICO FEDERAL</h5>\n    <h5>UNIVERSIDADE FEDERAL DE CAMPINA GRANDE</h5>\n    <h5>PREFEITURA UNIVERSITÀRIA </h5>\n    <h5>Setor de Transporte</h5>\n    <h3>REQUISIÇÃO DE TRANSPORTE</h3>\n  </div>\n  <form fxLayout=\"column\">\n    <div fxFlex=\"80\" fxLayout=\"column\" fxFlexOffset=\"5\">\n      <div fxLayout=\"row\">\n        <mat-form-field f5Flex=\"50\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Setor Requisitante\" name=\"requesterSector\" [(ngModel)]=\"model.requesterSector\">\n        </mat-form-field>\n        <mat-form-field fxFlex=\"15\" fxFlexOffset=\"5\">\n          <input matInput [matDatepicker]=\"data_atual\" placeholder=\"Data\" name=\"date\" [(ngModel)]=\"model.requestDate\" readonly=\"true\">\n          <mat-datepicker-toggle matSuffix [for]=\"data_atual\"></mat-datepicker-toggle>\n          <mat-datepicker #data_atual></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Destino\" name=\"destination\" [(ngModel)]=\"model.destination\">\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\n          <textarea matInput placeholder=\"Objetivo\" name=\"purpose\" [(ngModel)]=\"model.purpose\"></textarea>\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\">\n        <mat-form-field fxFlex=\"50\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Nome\" name=\"name\" [(ngModel)]=\"model.name\">\n        </mat-form-field>\n        <mat-form-field fxFlex=\"15\" fxFlexOffset=\"5\">\n          <input matInput placeholder=\"Telefone\" name=\"phone\" [(ngModel)]=\"model.phone\">\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\">\n        <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\n          <input matInput [matDatepicker]=\"data_viagem\" placeholder=\"Data\" name=\"travelDate\" [(ngModel)]=\"model.travelDate\" readonly=\"true\">\n          <mat-datepicker-toggle matSuffix [for]=\"data_viagem\"></mat-datepicker-toggle>\n          <mat-datepicker #data_viagem></mat-datepicker>\n        </mat-form-field>\n        <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\n          <input matInput placeholder=\"Hora da Saída\"  name=\"departureHour\" [(ngModel)]=\"model.departureHour\">\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\">\n        <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\n          <input matInput [matDatepicker]=\"data_regresso\" placeholder=\"Regresso Provável\" name=\"returnDate\" [(ngModel)]=\"model.returnDate\" readonly=\"true\">\n          <mat-datepicker-toggle matSuffix [for]=\"data_regresso\"></mat-datepicker-toggle>\n          <mat-datepicker #data_regresso></mat-datepicker>\n        </mat-form-field>\n        <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\n          <input matInput placeholder=\"Hora\" name=\"returnHour\" [(ngModel)]=\"model.returnHour\">\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\">\n        <h3 fxFlex=\"20\" fxFlexOffset=\"15\">Local de Saída:</h3>\n        <mat-checkbox fxFlex=\"20\">Reitoria/UFCG</mat-checkbox>\n        <mat-checkbox fxFlex=\"20\">Residência</mat-checkbox>\n        <mat-checkbox fxFlex=\"20\">Outros*</mat-checkbox>\n      </div>\n      <div>\n        <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\n          <textarea matInput placeholder=\"\" name=\"Address\" [(ngModel)]=\"model.address\"></textarea>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field fxFlex=\"33\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Horário de chegada do voo/ônibus\" name=\"arrivalTime\" [(ngModel)]=\"model.arrivalTime\">\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\">\n        <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Número do voo\" name=\"flightNumber\" [(ngModel)]=\"model.flightNumber\">\n        </mat-form-field>\n        <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\n          <input matInput placeholder=\"Empresa\" name=\"airCompany\" [(ngModel)]=\"model.airCompany\">\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field fxFlex=\"33\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Origem da viagem\" name=\"travelOrigin\" [(ngModel)]=\"model.travelOrigin\">\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Setor responsável pelas diárias do motorista\" name=\"driveSectorResponsability\" [(ngModel)]=\"model.driverSectorResponsibility\">\n        </mat-form-field>\n      </div>\n    </div>\n    <div fxLayout=\"row\">\n\n      <button mat-raised-button matTooltip=\"By default, I delay\" color=\"warning\" fxFlex=\"20\" fxFlexOffset=\"15\" mat-button (click)=\"updateForm(model.id)\">Atualizar</button>\n\n      <button mat-raised-button color=\"primary\" fxFlex=\"20\" fxFlexOffset=\"30\" mat-button (click)=\"goBack()\">Voltar</button>\n\n    </div>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/vehicle-request/vehicle-request.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vehicle-request/vehicle-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleRequestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehicleRequestComponent = (function () {
    function VehicleRequestComponent(route) {
        this.route = route;
    }
    VehicleRequestComponent.prototype.ngOnInit = function () {
    };
    return VehicleRequestComponent;
}());
VehicleRequestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-vehicle-request',
        template: __webpack_require__("../../../../../src/app/vehicle-request/vehicle-request.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vehicle-request/vehicle-request.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], VehicleRequestComponent);

var _a;
//# sourceMappingURL=vehicle-request.component.js.map

/***/ }),

/***/ "../../../../../src/app/vehicle-request/vehicle-request.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_request_component__ = __webpack_require__("../../../../../src/app/vehicle-request/vehicle-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vehicle_request_routing__ = __webpack_require__("../../../../../src/app/vehicle-request/vehicle-request.routing.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleRequestModule", function() { return VehicleRequestModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VehicleRequestModule = (function () {
    function VehicleRequestModule() {
    }
    return VehicleRequestModule;
}());
VehicleRequestModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__vehicle_request_routing__["a" /* vehicleRequestRouting */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__vehicle_request_component__["a" /* VehicleRequestComponent */]],
        providers: []
    })
], VehicleRequestModule);

//# sourceMappingURL=vehicle-request.module.js.map

/***/ }),

/***/ "../../../../../src/app/vehicle-request/vehicle-request.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vehicle_request_component__ = __webpack_require__("../../../../../src/app/vehicle-request/vehicle-request.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vehicleRequestRouting; });


var vehicleRequestRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__vehicle_request_component__["a" /* VehicleRequestComponent */]
    }
];
var vehicleRequestRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(vehicleRequestRoutes);
//# sourceMappingURL=vehicle-request.routing.js.map

/***/ })

});
//# sourceMappingURL=6.chunk.js.map