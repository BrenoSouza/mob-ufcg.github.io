webpackJsonp([9],{

/***/ "../../../../../src/app/allocation/allocation.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"allocation-stepper\">\n  <mat-horizontal-stepper [linear]=\"isLinear\" fxFlex>\n    <mat-step>\n      <ng-template matStepLabel>Formulário</ng-template>\n      <form fxLayout=\"column\">\n        <div fxFlex=\"80\" fxLayout=\"column\" fxFlexOffset=\"5\">\n          <div fxLayout=\"row\">\n            <mat-form-field fxFlex=\"50\" fxFlexOffset=\"15\">\n              <input matInput placeholder=\"Setor Requisitante\" name=\"requesterSector\" [(ngModel)]=\"model.requesterSector\">\n            </mat-form-field>\n            <mat-form-field fxFlex=\"15\" fxFlexOffset=\"5\">\n              <input matInput [matDatepicker]=\"data_atual\" placeholder=\"Data\" name=\"date\" [(ngModel)]=\"model.requestDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"data_atual\"></mat-datepicker-toggle>\n              <mat-datepicker #data_atual></mat-datepicker>\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\n              <input matInput placeholder=\"Destino\" name=\"destination\" [(ngModel)]=\"model.destination\">\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\n              <textarea matInput placeholder=\"Objetivo\" name=\"purpose\" [(ngModel)]=\"model.purpose\"></textarea>\n            </mat-form-field>\n          </div>\n          <div fxLayout=\"row\">\n            <mat-form-field fxFlex=\"50\" fxFlexOffset=\"15\">\n              <input matInput placeholder=\"Nome\" name=\"name\" [(ngModel)]=\"model.name\">\n            </mat-form-field>\n            <mat-form-field fxFlex=\"15\" fxFlexOffset=\"5\">\n              <input matInput placeholder=\"Telefone\" name=\"phone\" [(ngModel)]=\"model.phone\">\n            </mat-form-field>\n          </div>\n          <div fxLayout=\"row\">\n            <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\n              <input matInput [matDatepicker]=\"data_viagem\" placeholder=\"Data\" name=\"travelDate\" [(ngModel)]=\"model.travelDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"data_viagem\"></mat-datepicker-toggle>\n              <mat-datepicker #data_viagem></mat-datepicker>\n            </mat-form-field>\n            <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\n              <input matInput placeholder=\"Hora da Saída\"  name=\"departureHour\" [(ngModel)]=\"model.departureHour\">\n            </mat-form-field>\n          </div>\n          <div fxLayout=\"row\">\n            <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\n              <input matInput [matDatepicker]=\"data_regresso\" placeholder=\"Regresso Provável\" name=\"returnDate\" [(ngModel)]=\"model.returnDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"data_regresso\"></mat-datepicker-toggle>\n              <mat-datepicker #data_regresso></mat-datepicker>\n            </mat-form-field>\n            <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\n              <input matInput placeholder=\"Hora\" name=\"returnHour\" [(ngModel)]=\"model.returnHour\">\n            </mat-form-field>\n          </div>\n          <div fxLayout=\"row\">\n            <h3 fxFlex=\"20\" fxFlexOffset=\"15\">Local de Saída:</h3>\n            <mat-checkbox fxFlex=\"20\">Reitoria/UFCG</mat-checkbox>\n            <mat-checkbox fxFlex=\"20\">Residência</mat-checkbox>\n            <mat-checkbox fxFlex=\"20\">Outros*</mat-checkbox>\n          </div>\n          <div>\n            <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\n              <textarea matInput placeholder=\"\" name=\"travelOrigin\" [(ngModel)]=\"model.travelOrigin\"></textarea>\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field fxFlex=\"33\" fxFlexOffset=\"15\">\n              <input matInput placeholder=\"Horário de chegada do voo/ônibus\" name=\"arrivalTime\" [(ngModel)]=\"model.arrivalTime\">\n            </mat-form-field>\n          </div>\n          <div fxLayout=\"row\">\n            <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\n              <input matInput placeholder=\"Número do voo\" name=\"flightNumber\" [(ngModel)]=\"model.flightNumber\">\n            </mat-form-field>\n            <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\n              <input matInput placeholder=\"Empresa\" name=\"airCompany\" [(ngModel)]=\"model.airCompany\">\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field fxFlex=\"33\" fxFlexOffset=\"15\">\n              <input matInput placeholder=\"Origem da viagem\" name=\"travelOrigin\" [(ngModel)]=\"model.travelOrigin\">\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\n              <input matInput placeholder=\"Setor responsável pelas diárias do motorista\" name=\"driveSectorResponsability\" [(ngModel)]=\"model.driverSectorResponsibility\">\n            </mat-form-field>\n          </div>\n        </div>\n      </form>\n      <div>\n        <button mat-raised-button matStepperNext color=\"primary\">Próximo</button>\n      </div>\n    </mat-step>\n    <mat-step>\n      <ng-template matStepLabel>Selecionar Veículo</ng-template>\n      <div fxFlex>\n        <div *ngIf=\"vehicles\">\n          <div fxLayoutAlign=\"space-between\">\n            <div *ngFor=\"let col of vehiclesHeader\" fxFlex fxLayoutAlign=\"center\">\n              <h4>{{ col }}</h4>\n            </div>\n          </div>\n          <mat-card class=\"vehicle-choice\" *ngFor=\"let vehicle of vehicles\" >\n            <mat-card-content class=\"card-container\" fxLayout=\"column\" (click)=\"selectVehicle(vehicle.id)\">\n              <div fxLayoutAlign=\"space-between\">\n                <div fxFlex fxLayoutAlign=\"center space-between\" [ngClass]=\"{'selected-option':vehicle.id === selectedVehicle}\">\n                  <div fxFlex fxLayoutAlign=\"center center\">\n                    <p>{{ vehicle.vehicle }}</p>\n                  </div>\n                  <div fxFlex fxLayoutAlign=\"center center\">\n                    <p>{{ vehicle.plate }}</p>\n                  </div>\n                  <div fxFlex fxLayoutAlign=\"center center\">\n                    <p>{{ vehicle.brand }}</p>\n                  </div>\n                  <div fxFlex fxLayoutAlign=\"center center\">\n                    <p>{{ vehicle.capacity }}</p>\n                  </div>\n                </div>\n              </div>\n            </mat-card-content>\n          </mat-card>\n        </div>\n        <button mat-raised-button matStepperPrevious color=\"primary\">Voltar</button>\n        <button mat-raised-button matStepperNext color=\"primary\">Próximo</button>\n      </div>\n    </mat-step>\n    <mat-step>\n      <ng-template matStepLabel>Selecionar Motorista</ng-template>\n      <div>\n        <div fxLayoutAlign=\"space-between\">\n          <div *ngFor=\"let col of driversHeader\" fxFlex fxLayoutAlign=\"center\">\n            <h4>{{ col }}</h4>\n          </div>\n        </div>\n        <div *ngIf=\"drivers\">\n          <mat-card *ngFor=\"let driver of drivers\" class=\"vehicle-choice\">\n            <mat-card-content class=\"card-container\" fxLayout=\"column\" (click)=\"selectDriver(driver.id)\"  [ngClass]=\"{'selected-option':driver.id === selectedDriver}\">\n              <div fxLayoutAlign=\"space-between\" fxLayoutGap=\"30px\">\n                <div fxFlex fxLayoutAlign=\"center space-between\">\n                  <div fxFlex fxLayoutAlign=\"center center\">\n                    <p>{{ driver.name }}</p>\n                  </div>\n                  <div fxFlex fxLayoutAlign=\"center center\">\n                    <p>{{ driver.cpf }}</p>\n                  </div>\n                  <div fxFlex fxLayoutAlign=\"center center\">\n                    <p>{{ driver.cnh }}</p>\n                  </div>\n                  <div fxFlex fxLayoutAlign=\"center center\">\n                    <p>{{ driver.registration }}</p>\n                  </div>\n                </div>\n              </div>\n            </mat-card-content>\n          </mat-card>\n        </div>\n        <button mat-raised-button matStepperPrevious color=\"primary\">Voltar</button>\n        <button mat-raised-button color=\"primary\" class=\"signup-btn\" (click)=\"confirmTravel()\">Confirmar</button>\n      </div>\n    </mat-step>\n  </mat-horizontal-stepper>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/allocation/allocation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".allocation-stepper {\n  margin-top: 5%; }\n  .allocation-stepper button {\n    margin-top: 30px; }\n\n.selected-option {\n  background-color: #0080ff; }\n\n.vehicle-choice {\n  padding: 0;\n  border-style: ridge; }\n  .vehicle-choice:hover {\n    cursor: pointer; }\n  .vehicle-choice .img-container {\n    height: 50px;\n    padding: 7px 0; }\n    .vehicle-choice .img-container img {\n      border-radius: 50%;\n      height: 50px;\n      width: 50px; }\n  .vehicle-choice p {\n    margin: 0;\n    padding: 24px 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/allocation/allocation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_travel_service__ = __webpack_require__("../../../../../src/app/services/travel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_vehicle_service__ = __webpack_require__("../../../../../src/app/services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_driver_service__ = __webpack_require__("../../../../../src/app/services/driver.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllocationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AllocationComponent = (function () {
    function AllocationComponent(travelService, route, formService, vehicleService, driverService) {
        this.travelService = travelService;
        this.route = route;
        this.formService = formService;
        this.vehicleService = vehicleService;
        this.driverService = driverService;
        this.model = {};
        this.isLinear = false;
        this.checked = false;
        this.terminal = false;
        this.vehicles = [];
        this.vehiclesHeader = ['Veículo', 'Placa', 'Marca', 'Capacidade'];
        this.drivers = [];
        this.driversHeader = ['Nome', 'Cpf', 'Cnh', 'Registro'];
        this.id = this.route.snapshot.params['id'];
    }
    AllocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formService.getById(this.id).subscribe(function (data) {
            _this.model = data;
        }, function (error) {
            console.error(error);
        });
        this.vehicleService.vehiclesObs.subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var vehicleData = data_1[_i];
                _this.vehicles.push(vehicleData);
            }
        });
        this.driverService.driversObs.subscribe(function (data) {
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var driverData = data_2[_i];
                _this.drivers.push(driverData);
            }
        });
    };
    AllocationComponent.prototype.selectDriver = function (id) {
        this.selectedDriver = id;
    };
    AllocationComponent.prototype.selectVehicle = function (id) {
        this.selectedVehicle = id;
    };
    AllocationComponent.prototype.confirmTravel = function () {
        var form = {
            formId: this.id,
            vehicle: this.selectedVehicle
        };
        this.travelService.create(form).subscribe(function (data) {
            console.log('ok');
        });
    };
    return AllocationComponent;
}());
AllocationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-allocation',
        template: __webpack_require__("../../../../../src/app/allocation/allocation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/allocation/allocation.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_travel_service__["a" /* TravelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_travel_service__["a" /* TravelService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_form_service__["a" /* FormService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_vehicle_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_vehicle_service__["a" /* VehicleService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_driver_service__["a" /* DriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_driver_service__["a" /* DriverService */]) === "function" && _e || Object])
], AllocationComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=allocation.component.js.map

/***/ }),

/***/ "../../../../../src/app/allocation/allocation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allocation_component__ = __webpack_require__("../../../../../src/app/allocation/allocation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__allocation_routing__ = __webpack_require__("../../../../../src/app/allocation/allocation.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_travel_service__ = __webpack_require__("../../../../../src/app/services/travel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_vehicle_service__ = __webpack_require__("../../../../../src/app/services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_driver_service__ = __webpack_require__("../../../../../src/app/services/driver.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllocationModule", function() { return AllocationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AllocationModule = (function () {
    function AllocationModule() {
    }
    return AllocationModule;
}());
AllocationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__allocation_routing__["a" /* allocationRouting */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__allocation_component__["a" /* AllocationComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_travel_service__["a" /* TravelService */],
            __WEBPACK_IMPORTED_MODULE_7__services_form_service__["a" /* FormService */],
            __WEBPACK_IMPORTED_MODULE_9__services_vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_10__services_driver_service__["a" /* DriverService */]
        ]
    })
], AllocationModule);

//# sourceMappingURL=allocation.module.js.map

/***/ }),

/***/ "../../../../../src/app/allocation/allocation.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__allocation_component__ = __webpack_require__("../../../../../src/app/allocation/allocation.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allocationRouting; });


var allocationRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__allocation_component__["a" /* AllocationComponent */]
    }
];
var allocationRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(allocationRoutes);
//# sourceMappingURL=allocation.routing.js.map

/***/ })

});
//# sourceMappingURL=9.chunk.js.map