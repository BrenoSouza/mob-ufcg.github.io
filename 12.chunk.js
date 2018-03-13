webpackJsonp([12],{

/***/ "../../../../../src/app/allocation/allocation.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"allocation-stepper\">\r\n  <mat-horizontal-stepper [linear]=\"isLinear\" fxFlex>\r\n    <mat-step>\r\n      <ng-template matStepLabel>Formulário</ng-template>\r\n      <form fxLayout=\"column\">\r\n        <div fxFlex=\"80\" fxLayout=\"column\" fxFlexOffset=\"5\">\r\n          <div fxLayout=\"row\">\r\n            <mat-form-field fxFlex=\"50\" fxFlexOffset=\"15\">\r\n              <input matInput placeholder=\"Setor Requisitante\" name=\"requesterSector\" [(ngModel)]=\"model.requesterSector\">\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"15\" fxFlexOffset=\"5\">\r\n              <input matInput placeholder=\"Data da Solicitação\" name=\"date\" [(ngModel)]=\"model.requestDate\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\r\n              <input matInput placeholder=\"Destino\" name=\"destination\" [(ngModel)]=\"model.destination\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\r\n              <textarea matInput placeholder=\"Objetivo\" name=\"purpose\" [(ngModel)]=\"model.purpose\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxLayout=\"row\">\r\n            <mat-form-field fxFlex=\"50\" fxFlexOffset=\"15\">\r\n              <input matInput placeholder=\"Nome\" name=\"name\" [(ngModel)]=\"model.name\">\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"15\" fxFlexOffset=\"5\">\r\n              <input matInput placeholder=\"Telefone\" name=\"phone\" [(ngModel)]=\"model.phone\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxLayout=\"row\">\r\n            <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\r\n              <input matInput placeholder=\"Data Ida\" name=\"travelDate\" [(ngModel)]=\"model.travelDate\">\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\r\n              <input matInput placeholder=\"Hora da Saída\"  name=\"departureHour\" [(ngModel)]=\"model.departureHour\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxLayout=\"row\">\r\n            <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\r\n              <input matInput placeholder=\"Regresso Provável\" name=\"returnDate\" [(ngModel)]=\"model.returnDate\">\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\r\n              <input matInput placeholder=\"Hora\" name=\"returnHour\" [(ngModel)]=\"model.returnHour\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxLayout=\"row\">\r\n            <h3 fxFlex=\"20\" fxFlexOffset=\"15\">Local de Saída:</h3>\r\n            <mat-checkbox [checked]=\"model.departurePoint === 'Reitoria UFCG'\" (change)=\"changeDeparturePoint('Reitoria UFCG')\" fxFlex=\"20\">Reitoria/UFCG</mat-checkbox>\r\n            <mat-checkbox [checked]=\"model.departurePoint === 'Residência'\" (change)=\"changeDeparturePoint('Residência')\" fxFlex=\"20\">Residência</mat-checkbox>\r\n            <mat-checkbox [checked]=\"model.departurePoint === 'Outros'\"(change)=\"changeDeparturePoint('Outros')\" fxFlex=\"20\">Outros*</mat-checkbox>\r\n          </div>\r\n          <div>\r\n            <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\r\n              <textarea matInput placeholder=\"\" name=\"travelOrigin\" [(ngModel)]=\"model.travelOrigin\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <mat-form-field fxFlex=\"33\" fxFlexOffset=\"15\">\r\n              <input matInput placeholder=\"Horário de chegada do voo/ônibus\" name=\"arrivalTime\" [(ngModel)]=\"model.arrivalTime\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxLayout=\"row\">\r\n            <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\r\n              <input matInput placeholder=\"Número do voo\" name=\"flightNumber\" [(ngModel)]=\"model.flightNumber\">\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\r\n              <input matInput placeholder=\"Empresa\" name=\"airCompany\" [(ngModel)]=\"model.airCompany\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <mat-form-field fxFlex=\"33\" fxFlexOffset=\"15\">\r\n              <input matInput placeholder=\"Origem da viagem\" name=\"travelOrigin\" [(ngModel)]=\"model.travelOrigin\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\r\n              <input matInput placeholder=\"Setor responsável pelas diárias do motorista\" name=\"driveSectorResponsability\" [(ngModel)]=\"model.driverSectorResponsibility\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <button mat-raised-button fxFlex=\"25\" fxFlexOffset=\"15\" color=\"primary\" (click)=\"updateForm(model.id)\">Atualizar</button>\r\n            <button mat-raised-button fxFlex=\"25\" fxFlexOffset=\"15\" color=\"primary\" (click)=\"removeForm(model.id)\">Deletar</button>\r\n            <button mat-raised-button fxFlex=\"30\" fxFlexOffset=\"15\" matStepperNext color=\"primary\">Próximo</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n    </mat-step>\r\n    <mat-step>\r\n      <ng-template matStepLabel>Selecionar Veículo</ng-template>\r\n      <div fxLayoutAlign=\"space-between\">\r\n        <div *ngFor=\"let col of vehiclesHeader\" fxFlex fxLayoutAlign=\"center\">\r\n          <h3>{{ col }}</h3>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"availableVehicles\">\r\n        <h4>Disponíveis</h4>\r\n        <mat-card class=\"vehicle-choice\" *ngFor=\"let vehicle of availableVehicles\" >\r\n          <mat-card-content class=\"card-container\" fxLayout=\"column\" (click)=\"selectVehicle(vehicle.id)\">\r\n            <div fxLayoutAlign=\"space-between\">\r\n              <div fxFlex fxLayoutAlign=\"center space-between\" [ngClass]=\"{'selected-option':vehicle.id === selectedVehicle}\">\r\n                <div fxFlex fxLayoutAlign=\"center center\">\r\n                  <p>{{ vehicle.vehicle }}</p>\r\n                </div>\r\n                <div fxFlex fxLayoutAlign=\"center center\">\r\n                  <p>{{ vehicle.plate }}</p>\r\n                </div>\r\n                <div fxFlex fxLayoutAlign=\"center center\">\r\n                  <p>{{ vehicle.brand }}</p>\r\n                </div>\r\n                <div fxFlex fxLayoutAlign=\"center center\">\r\n                  <p>{{ vehicle.capacity }}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex>\r\n        <div *ngIf=\"busyVehicles\">\r\n          <h4>Com viagens no dia</h4>\r\n          <mat-card class=\"vehicle-choice\">\r\n            <mat-card-content class=\"card-container\" fxLayout=\"column\">\r\n                <mat-accordion [multi]=\"false\">\r\n                    <mat-expansion-panel *ngFor=\"let vehicle of busyVehicles\" [ngClass]=\"{'selected-option':vehicle.id === selectedVehicle}\" (click)=\"selectVehicle(vehicle.id)\">\r\n                      <mat-expansion-panel-header (click)=\"showTravels(vehicle.id)\">\r\n                        <mat-panel-title>\r\n                            <div fxFlex=\"100\" fxLayoutAlign=\"space-between\">\r\n                                <div fxFlex fxLayoutAlign=\"center space-between\">\r\n                                  <div fxFlex fxLayoutAlign=\"center center\">\r\n                                    <p>{{ vehicle.vehicle }}</p>\r\n                                  </div>\r\n                                  <div fxFlex fxLayoutAlign=\"center center\">\r\n                                    <p>{{ vehicle.plate }}</p>\r\n                                  </div>\r\n                                  <div fxFlex fxLayoutAlign=\"center center\">\r\n                                    <p>{{ vehicle.brand }}</p>\r\n                                  </div>\r\n                                  <div fxFlex fxLayoutAlign=\"center center\">\r\n                                    <p>{{ vehicle.capacity }}</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </mat-panel-title>\r\n                      </mat-expansion-panel-header>\r\n                      \r\n                      Lista de Viagens\r\n                      <mat-card></mat-card>\r\n                    </mat-expansion-panel>\r\n                  </mat-accordion>\r\n              \r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n        <button mat-raised-button matStepperPrevious color=\"primary\">Voltar</button>\r\n        <button mat-raised-button matStepperNext color=\"primary\">Próximo</button>\r\n      </div>\r\n    </mat-step>\r\n    <mat-step>\r\n      <ng-template matStepLabel>Selecionar Motorista</ng-template>\r\n      <div>\r\n        <div fxLayoutAlign=\"space-between\">\r\n          <div *ngFor=\"let col of driversHeader\" fxFlex fxLayoutAlign=\"center\">\r\n            <h4>{{ col }}</h4>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"drivers\">\r\n          <mat-card *ngFor=\"let driver of drivers\" class=\"vehicle-choice\">\r\n            <mat-card-content class=\"card-container\" fxLayout=\"column\" (click)=\"selectDriver(driver.id)\"  [ngClass]=\"{'selected-option':driver.id === selectedDriver}\">\r\n              <div fxLayoutAlign=\"space-between\" fxLayoutGap=\"30px\">\r\n                <div fxFlex fxLayoutAlign=\"center space-between\">\r\n                  <div fxFlex fxLayoutAlign=\"center center\">\r\n                    <p>{{ driver.name }}</p>\r\n                  </div>\r\n                  <div fxFlex fxLayoutAlign=\"center center\">\r\n                    <p>{{ driver.cpf }}</p>\r\n                  </div>\r\n                  <div fxFlex fxLayoutAlign=\"center center\">\r\n                    <p>{{ driver.cnh }}</p>\r\n                  </div>\r\n                  <div fxFlex fxLayoutAlign=\"center center\">\r\n                    <p>{{ driver.registration }}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n        <button mat-raised-button matStepperPrevious color=\"primary\">Voltar</button>\r\n        <button mat-raised-button color=\"primary\" class=\"signup-btn\" (click)=\"confirmTravel()\">Confirmar</button>\r\n      </div>\r\n    </mat-step>\r\n  </mat-horizontal-stepper>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/allocation/allocation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".allocation-stepper {\n  margin-top: 5%; }\n  .allocation-stepper button {\n    margin-top: 30px; }\n\n.selected-option {\n  background-color: #a2c0df; }\n\n.vehicle-choice {\n  padding: 0;\n  border-style: ridge; }\n  .vehicle-choice:hover {\n    cursor: pointer; }\n  .vehicle-choice .img-container {\n    height: 50px;\n    padding: 7px 0; }\n    .vehicle-choice .img-container img {\n      border-radius: 50%;\n      height: 50px;\n      width: 50px; }\n  .vehicle-choice p {\n    margin: 0;\n    padding: 24px 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
    function AllocationComponent(travelService, route, formService, vehicleService, driverService, snackBar, router) {
        this.travelService = travelService;
        this.route = route;
        this.formService = formService;
        this.vehicleService = vehicleService;
        this.driverService = driverService;
        this.snackBar = snackBar;
        this.router = router;
        this.model = {};
        this.isLinear = false;
        this.checked = false;
        this.terminal = false;
        this.availableVehicles = [];
        this.busyVehicles = [];
        this.travelsByVehicle = [];
        this.vehicles = [];
        this.vehiclesHeader = ['Veículo', 'Placa', 'Marca', 'Capacidade'];
        this.drivers = [];
        this.driversHeader = ['Nome', 'Cpf', 'Cnh', 'Registro'];
        this.provisoryDateHour = '01/01/2018 ';
        this.id = this.route.snapshot.params['id'];
    }
    AllocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formService.getById(this.id).subscribe(function (data) {
            _this.model = data;
            _this.model.departureHour = data.departureHour.slice(11);
            _this.model.returnHour = data.returnHour.slice(11);
            _this.vehicleService.getVehiclesWithTravels(_this.model.travelDate).subscribe(function (data2) {
                for (var _i = 0, data2_1 = data2; _i < data2_1.length; _i++) {
                    var vehicleData = data2_1[_i];
                    _this.busyVehicles.push(vehicleData);
                }
            });
        }, function (error) {
            console.error(error);
        });
        this.vehicleService.getAvailables(this.id).subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var vehicleData = data_1[_i];
                _this.availableVehicles.push(vehicleData);
            }
        });
        this.vehicleService.vehiclesObs.subscribe(function (data) {
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var vehicleData = data_2[_i];
                _this.vehicles.push(vehicleData);
            }
        });
        this.driverService.driversObs.subscribe(function (data) {
            for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                var driverData = data_3[_i];
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
    AllocationComponent.prototype.updateForm = function () {
        var _this = this;
        var id = this.model.id;
        var form = Object.assign({}, this.model);
        form.travelDate += ' ' + form.departureHour;
        form.returnDate += ' ' + form.returnHour;
        form.requestDate += ' ' + form.returnHour;
        form.returnHour = form.returnDate;
        form.departureHour = form.travelDate;
        this.formService.update(id, form).subscribe(function (data) {
            var snackBarRef = _this.snackBar.open('Solicitação atualizada!', 'OK', { duration: 5000 });
            console.log(data);
        }, function (error) {
            var snackBarRef = _this.snackBar.open(error.errors[0], 'ENVIAR NOVAMENTE', { duration: 5000 });
            console.log(error);
        });
    };
    AllocationComponent.prototype.confirmTravel = function () {
        var _this = this;
        var form = {
            formId: +this.id,
            vehicle: this.selectedVehicle,
            driver: this.selectedDriver
        };
        this.travelService.create(form).subscribe(function (data) {
            var snackBarRef = _this.snackBar.open('Solicitação aceita e viagem confirmada!', 'OK', { duration: 5000 });
            _this.router.navigate(['/home/travels']);
        }, function (error) {
            var snackBarRef = _this.snackBar.open(error.errors[0], 'ENVIAR NOVAMENTE', { duration: 5000 });
        });
    };
    AllocationComponent.prototype.changeDeparturePoint = function (point) {
        if (point !== this.model.departurePoint) {
            this.model.departurePoint = point;
        }
    };
    AllocationComponent.prototype.removeForm = function (id) {
        var _this = this;
        this.formService.deleteById(id).subscribe(function (data) {
            var snackBarRef = _this.snackBar.open('Formulário removido com sucesso!', 'OK', { duration: 5000 });
            _this.router.navigate(['/home/solicitations']);
        }, function (error) {
            var snackBarRef = _this.snackBar.open(error.errors[0], 'ENVIAR NOVAMENTE', { duration: 5000 });
        });
    };
    AllocationComponent.prototype.showTravels = function (id) {
        var _this = this;
        console.log(id, this.model.travelDate);
        this.travelsByVehicle = [];
        this.vehicleService.getTravelsFromVehicles(this.id, this.model.travelDate).subscribe(function (data) {
            for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                var vehicleData = data_4[_i];
                _this.travelsByVehicle.push(vehicleData);
            }
        });
        console.log(this.travelsByVehicle);
    };
    return AllocationComponent;
}());
AllocationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-allocation',
        template: __webpack_require__("../../../../../src/app/allocation/allocation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/allocation/allocation.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_travel_service__["a" /* TravelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_travel_service__["a" /* TravelService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_form_service__["a" /* FormService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_vehicle_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_vehicle_service__["a" /* VehicleService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_driver_service__["a" /* DriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_driver_service__["a" /* DriverService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatSnackBar */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _g || Object])
], AllocationComponent);

var _a, _b, _c, _d, _e, _f, _g;
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
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatStepperModule */],
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
var allocationRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(allocationRoutes);
//# sourceMappingURL=allocation.routing.js.map

/***/ })

});
//# sourceMappingURL=12.chunk.js.map