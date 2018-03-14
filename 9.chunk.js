webpackJsonp([9],{

/***/ "../../../../../src/app/req-form/req-form.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card fxLayout=\"column\" style=\"width:100%\">\r\n  <div class=\"form-header\" fxFlex=\"100\" fxLayout=\"column\" fxLayoutAlign=\" center\">\r\n    <h2>REQUISIÇÃO DE TRANSPORTE</h2>\r\n  </div>\r\n\r\n  <mat-horizontal-stepper [linear]=\"isLinear\" fxFlex>\r\n    <mat-step>\r\n      <form>\r\n        <ng-template matStepLabel>Dados da Requisição</ng-template>\r\n        <div fxLayout=\"row\">\r\n          <mat-form-field fxFlex=\"70\">\r\n            <input matInput placeholder=\"Setor Requisitante\" name=\"requesterSector\" [(ngModel)]=\"model.requesterSector\">\r\n          </mat-form-field>\r\n          <mat-form-field fxFlex fxFlexOffset=\"5\">\r\n            <input matInput [matDatepicker]=\"data_atual10\" placeholder=\"Data\" name=\"date\" [(ngModel)]=\"model.date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"data_atual10\"></mat-datepicker-toggle>\r\n            <mat-datepicker #data_atual10></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n        <div>\r\n          <mat-form-field fxFlex>\r\n            <textarea matInput placeholder=\"Objetivo\" name=\"purpose\" [(ngModel)]=\"model.purpose\" #purpose=\"ngModel\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row\">\r\n          <mat-form-field fxFlex=\"45\">\r\n            <input matInput placeholder=\"Destino/Cidade\" name=\"name\" [(ngModel)]=\"model.destination\">\r\n          </mat-form-field>\r\n          <mat-form-field fxFlex=\"45\" fxFlexOffset=\"10\">\r\n            <input matInput placeholder=\"Local de saída\" name=\"phone\" [(ngModel)]=\"model.departurePoint\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row\">\r\n          <mat-form-field fxFlex=\"20\">\r\n            <input matInput [matDatepicker]=\"data_partida\" placeholder=\"Data de partida\" name=\"date\" [(ngModel)]=\"model.travelDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"data_partida\"></mat-datepicker-toggle>\r\n            <mat-datepicker #data_partida></mat-datepicker>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"20\" fxFlexOffset=\"5\">\r\n            <input matInput [matDatepicker]=\"data_chegada\" placeholder=\"Data de chegada\" name=\"date\" [(ngModel)]=\"model.returnDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"data_chegada\"></mat-datepicker-toggle>\r\n            <mat-datepicker #data_chegada></mat-datepicker>\r\n          </mat-form-field>\r\n\r\n\r\n          <mat-form-field fxFlex=\"20\" fxFlexOffset=\"10\">\r\n            <input matInput placeholder=\"Hora de chegada\" name=\"phone\" [(ngModel)]=\"model.departureHour\">\r\n          </mat-form-field>\r\n\r\n\r\n          <mat-form-field fxFlex=\"20\" fxFlexOffset=\"5\">\r\n            <input matInput placeholder=\"Hora de partida\" name=\"phone\" [(ngModel)]=\"model.returnHour\">\r\n          </mat-form-field>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"row\">\r\n          <mat-form-field fxFlex>\r\n            <input matInput placeholder=\"Setor responsável pela diária\" name=\"driverSectorResponsability\" [(ngModel)]=\"model.driverSectorResponsability\">\r\n          </mat-form-field>\r\n        </div> <br>\r\n\r\n        <div>\r\n          <button mat-raised-button matStepperNext color=\"primary\">Próximo</button>\r\n        </div>\r\n      </form>\r\n\r\n    </mat-step>\r\n    <mat-step>\r\n      <form fxLayout=\"column\">\r\n        <ng-template matStepLabel>Dados do Veículo</ng-template>\r\n\r\n\r\n        <!--SAIDA DO VEICULO-->\r\n        <div fxLayout=\"row\">\r\n          <h3 fxFlex> Saída do veículo:</h3>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\">\r\n          <mat-form-field fxFlex=\"30\">\r\n            <input matInput [matDatepicker]=\"data_partida_veiculo\" placeholder=\"Data\" name=\"vehicleExitDate\" [(ngModel)]=\"model.vehicleExitDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"data_partida_veiculo\"></mat-datepicker-toggle>\r\n            <mat-datepicker #data_partida_veiculo></mat-datepicker>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"30\" fxFlexOffset=\"5\">\r\n            <input fxFlex matInput placeholder=\"Hora\" name=\"vehicleExitHour\" [(ngModel)]=\"model.vehicleExitHour\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"30\" fxFlexOffset=\"5\">\r\n            <input fxFlex matInput placeholder=\"KM\" name=\"kilometer\" [(ngModel)]=\"model.vehicleKilometer\">\r\n          </mat-form-field>\r\n\r\n        </div>\r\n\r\n        <!--ABASTECIMENTO DO VEICULO 01-->\r\n        <div fxLayout=\"row\">\r\n          <h3 fxFlex> Abastecimento do veículo:</h3>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\">\r\n          <mat-form-field fxFlex=\"30\">\r\n            <input matInput [matDatepicker]=\"data_abastecimento_01\" placeholder=\"Data\" name=\"vehicleFuelDate01\" [(ngModel)]=\"model.vehicleFuelDate01\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"data_abastecimento_01\"></mat-datepicker-toggle>\r\n            <mat-datepicker #data_abastecimento_01></mat-datepicker>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"30\" fxFlexOffset=\"5\">\r\n            <input fxFlex matInput placeholder=\"Local\" name=\"vehicleFuelPlace01\" [(ngModel)]=\"model.vehicleFuelPlace01\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"30\" fxFlexOffset=\"5\">\r\n            <input fxFlex matInput placeholder=\"Quantidade\" name=\"vehicleFuelQuantity01\" [(ngModel)]=\"model.vehicleFuelQuantity01\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"30\" fxFlexOffset=\"5\">\r\n            <input fxFlex matInput placeholder=\"KM\" name=\"fuelKilometer01\" [(ngModel)]=\"model.vehicleFuelKilometer01\">\r\n          </mat-form-field>\r\n\r\n        </div>\r\n\r\n        <!--ABASTECIMENTO DO VEICULO 01-->\r\n        <div fxLayout=\"row\">\r\n          <mat-form-field fxFlex=\"30\">\r\n            <input matInput [matDatepicker]=\"data_abastecimento_02\" placeholder=\"Data\" name=\"vehicleFuelDate01\" [(ngModel)]=\"model.vehicleFuelDate02\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"data_abastecimento_02\"></mat-datepicker-toggle>\r\n            <mat-datepicker #data_abastecimento_02></mat-datepicker>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"30\" fxFlexOffset=\"5\">\r\n            <input fxFlex matInput placeholder=\"Local\" name=\"vehicleFuelPlace02\" [(ngModel)]=\"model.vehicleFuelPlace02\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"30\" fxFlexOffset=\"5\">\r\n            <input fxFlex matInput placeholder=\"Quantidade\" name=\"vehicleFuelQuantity02\" [(ngModel)]=\"model.vehicleFuelQuantity02\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"30\" fxFlexOffset=\"5\">\r\n            <input fxFlex matInput placeholder=\"KM\" name=\"fuelKilometer02\" [(ngModel)]=\"model.vehicleFuelKilometer02\">\r\n          </mat-form-field>\r\n\r\n        </div>\r\n\r\n\r\n        <!--Chegada DO VEICULO 01-->\r\n        <div fxLayout=\"row\">\r\n          <h3 fxFlex> Chegada do veículo:</h3>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\">\r\n          <mat-form-field fxFlex=\"30\">\r\n            <input matInput [matDatepicker]=\"data_vehicle_return\" placeholder=\"Data\" name=\"vehicleReturnDate\" [(ngModel)]=\"model.vehicleReturnDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"data_vehicle_return\"></mat-datepicker-toggle>\r\n            <mat-datepicker #data_vehicle_return></mat-datepicker>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"30\" fxFlexOffset=\"5\">\r\n            <input fxFlex matInput placeholder=\"Hora\" name=\"vehicleReturnHour\" [(ngModel)]=\"model.vehicleReturnHour\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"30\" fxFlexOffset=\"5\">\r\n            <input fxFlex matInput placeholder=\"KM\" name=\"vehicleReturnKM\" [(ngModel)]=\"model.vehicleReturnKM\">\r\n          </mat-form-field>\r\n\r\n        </div>\r\n\r\n\r\n        <!--RECOLHIMENTO DO VEICULO 01-->\r\n        <div fxLayout=\"row\">\r\n          <h3 fxFlex> Recolhimento do veículo:</h3>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\">\r\n          <mat-form-field fxFlex=\"30\">\r\n            <input matInput [matDatepicker]=\"data_vehicle_rendezvous\" placeholder=\"Data\" name=\"vehicleRendezvousDate\" [(ngModel)]=\"model.vehicleRendezvousDate\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"data_vehicle_rendezvous\"></mat-datepicker-toggle>\r\n            <mat-datepicker #data_vehicle_rendezvous></mat-datepicker>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"30\" fxFlexOffset=\"5\">\r\n            <input fxFlex matInput placeholder=\"Hora\" name=\"vehicleRendezvousHour\" [(ngModel)]=\"model.vehicleRendezvousHour\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"30\" fxFlexOffset=\"5\">\r\n            <input fxFlex matInput placeholder=\"KM\" name=\"vehicleRendezvousKM\" [(ngModel)]=\"model.vehicleRendezvousKM\">\r\n          </mat-form-field>\r\n\r\n        </div>\r\n\r\n\r\n        <!--RECOLHIMENTO DO VEICULO 01-->\r\n        <div fxLayout=\"row\">\r\n          <h3 fxFlex> Observações:</h3>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\">\r\n          <mat-form-field fxFlex>\r\n          <textarea matInput placeholder=\"Observações\" name=\"notes\" [(ngModel)]=\"model.notes\" #notes=\"ngModel\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n      </form>\r\n\r\n      <br>\r\n      <div fxFlex>\r\n        <button mat-raised-button matStepperPrevious color=\"primary\">Voltar</button>\r\n        <button mat-raised-button matStepperNext color=\"primary\">Próximo</button>\r\n      </div>\r\n\r\n    </mat-step>\r\n\r\n\r\n    <mat-step>\r\n      <ng-template matStepLabel>Motorista </ng-template>\r\n      <form>\r\n        <div fxLayout=\"row\">\r\n          <mat-form-field fxFlex=\"30\">\r\n            <input matInput placeholder=\"Motorista\" name=\"driver\" [(ngModel)]=\"model.driver\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"30\" fxFlexOffset=\"5\">\r\n            <input matInput placeholder=\"Veículo\" name=\"vehicle\" [(ngModel)]=\"model.vehicle\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"30\" fxFlexOffset=\"5\">\r\n            <input matInput placeholder=\"Placa\" name=\"vehiclePlate\" [(ngModel)]=\"model.vehiclePlate\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n        <div fxLayout=\"row\">\r\n          <mat-form-field fxFlex>\r\n            <textarea matInput placeholder=\"Observações\" name=\"notes2\" [(ngModel)]=\"model.notes2\" #notes2=\"ngModel\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n      </form>\r\n\r\n      <div>\r\n        <button mat-raised-button matStepperPrevious color=\"primary\">Voltar</button>\r\n      </div>\r\n\r\n    </mat-step>\r\n\r\n  </mat-horizontal-stepper>\r\n\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/req-form/req-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/req-form/req-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReqFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReqFormComponent = (function () {
    function ReqFormComponent(formService) {
        this.formService = formService;
        this.model = {};
        this.isLinear = false;
        this.checked = false;
        this.terminal = false;
    }
    ReqFormComponent.prototype.ngOnInit = function () {
    };
    ReqFormComponent.prototype.solicitation = function () {
        this.formService.create(this.model)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    return ReqFormComponent;
}());
ReqFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-req-form',
        template: __webpack_require__("../../../../../src/app/req-form/req-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/req-form/req-form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_form_service__["a" /* FormService */]) === "function" && _a || Object])
], ReqFormComponent);

var _a;
//# sourceMappingURL=req-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/req-form/req-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__req_form_component__ = __webpack_require__("../../../../../src/app/req-form/req-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__req_form_routing__ = __webpack_require__("../../../../../src/app/req-form/req-form.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqFormModule", function() { return ReqFormModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ReqFormModule = (function () {
    function ReqFormModule() {
    }
    return ReqFormModule;
}());
ReqFormModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__req_form_routing__["a" /* reqFormRouting */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatListModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__req_form_component__["a" /* ReqFormComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__req_form_component__["a" /* ReqFormComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services_form_service__["a" /* FormService */]
        ]
    })
], ReqFormModule);

//# sourceMappingURL=req-form.module.js.map

/***/ }),

/***/ "../../../../../src/app/req-form/req-form.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__req_form_component__ = __webpack_require__("../../../../../src/app/req-form/req-form.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reqFormRouting; });


var reqFormRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__req_form_component__["a" /* ReqFormComponent */]
    }
];
var reqFormRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(reqFormRoutes);
//# sourceMappingURL=req-form.routing.js.map

/***/ })

});
//# sourceMappingURL=9.chunk.js.map