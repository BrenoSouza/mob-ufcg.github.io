webpackJsonp([6],{

/***/ "../../../../../src/app/allocation/allocation.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"allocation-stepper\" *ngIf=\"!isLoading; else Loading\">\r\n  <mat-horizontal-stepper [linear]=\"isLinear\" fxFlex>\r\n    <mat-step>\r\n      <ng-template matStepLabel>Formulário</ng-template>\r\n      <form fxLayout=\"column\">\r\n        <div fxFlex=\"80\" fxLayout=\"column\" fxFlexOffset=\"5\">\r\n          <div fxLayout=\"row\">\r\n            <mat-form-field fxFlex=\"50\" fxFlexOffset=\"15\">\r\n              <input matInput placeholder=\"Setor Requisitante\" name=\"requesterSector\" [(ngModel)]=\"model.requesterSector\">\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"15\" fxFlexOffset=\"5\">\r\n              <input matInput placeholder=\"Data da Solicitação\" name=\"date\" [(ngModel)]=\"model.requestDate\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\r\n              <input matInput placeholder=\"Destino\" name=\"destination\" [(ngModel)]=\"model.destination\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\r\n              <textarea matInput placeholder=\"Objetivo\" name=\"purpose\" [(ngModel)]=\"model.purpose\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxLayout=\"row\">\r\n            <mat-form-field fxFlex=\"50\" fxFlexOffset=\"15\">\r\n              <input matInput placeholder=\"Nome\" name=\"name\" [(ngModel)]=\"model.name\">\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"15\" fxFlexOffset=\"5\">\r\n              <input matInput placeholder=\"Telefone\" name=\"phone\" [(ngModel)]=\"model.phone\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxLayout=\"row\">\r\n            <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\r\n              <input matInput placeholder=\"Data Ida\" name=\"travelDate\" [(ngModel)]=\"model.travelDate\">\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\r\n              <input matInput placeholder=\"Hora da Saída\"  name=\"departureHour\" [(ngModel)]=\"model.departureHour\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxLayout=\"row\">\r\n            <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\r\n              <input matInput placeholder=\"Regresso Provável\" name=\"returnDate\" [(ngModel)]=\"model.returnDate\">\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\r\n              <input matInput placeholder=\"Hora\" name=\"returnHour\" [(ngModel)]=\"model.returnHour\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxLayout=\"row\">\r\n            <h3 fxFlex=\"20\" fxFlexOffset=\"15\">Local de Saída:</h3>\r\n            <mat-checkbox [checked]=\"model.departurePoint === 'Reitoria UFCG'\" (change)=\"changeDeparturePoint('Reitoria UFCG')\" fxFlex=\"20\">Reitoria/UFCG</mat-checkbox>\r\n            <mat-checkbox [checked]=\"model.departurePoint === 'Residência'\" (change)=\"changeDeparturePoint('Residência')\" fxFlex=\"20\">Residência</mat-checkbox>\r\n            <mat-checkbox [checked]=\"model.departurePoint === 'Outros'\"(change)=\"changeDeparturePoint('Outros')\" fxFlex=\"20\">Outros*</mat-checkbox>\r\n          </div>\r\n          <div>\r\n            <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\r\n              <textarea matInput placeholder=\"\" name=\"travelOrigin\" [(ngModel)]=\"model.travelOrigin\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <mat-form-field fxFlex=\"33\" fxFlexOffset=\"15\">\r\n              <input matInput placeholder=\"Horário de chegada do voo/ônibus\" name=\"arrivalTime\" [(ngModel)]=\"model.arrivalTime\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxLayout=\"row\">\r\n            <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\r\n              <input matInput placeholder=\"Número do voo\" name=\"flightNumber\" [(ngModel)]=\"model.flightNumber\">\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\r\n              <input matInput placeholder=\"Empresa\" name=\"airCompany\" [(ngModel)]=\"model.airCompany\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <mat-form-field fxFlex=\"33\" fxFlexOffset=\"15\">\r\n              <input matInput placeholder=\"Origem da viagem\" name=\"travelOrigin\" [(ngModel)]=\"model.travelOrigin\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\r\n              <input matInput placeholder=\"Setor responsável pelas diárias do motorista\" name=\"driveSectorResponsability\" [(ngModel)]=\"model.driverSectorResponsibility\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <button mat-raised-button fxFlex=\"25\" fxFlexOffset=\"15\" color=\"primary\" (click)=\"updateForm(model.id)\">Atualizar</button>\r\n            <button mat-raised-button fxFlex=\"25\" fxFlexOffset=\"15\" color=\"primary\" (click)=\"removeForm(model.id)\">Deletar</button>\r\n            <button mat-raised-button fxFlex=\"30\" fxFlexOffset=\"15\" matStepperNext color=\"primary\">Próximo</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n    </mat-step>\r\n    <mat-step>\r\n      <ng-template matStepLabel>Selecionar Veículo</ng-template>\r\n      <div *ngIf=\"availableVehicles\">\r\n        <div fxLayout=\"row\">\r\n          <mat-toolbar color=\"primary\" fxLayoutAlign=\"center center\">\r\n            <span>Selecione um veículo</span>\r\n          </mat-toolbar>\r\n        </div>\r\n        <div fxLayoutAlign=\"space-between\">\r\n          <div *ngFor=\"let col of vehiclesHeader\" fxFlex fxLayoutAlign=\"center\">\r\n            <h4>{{ col }}</h4>\r\n          </div>\r\n        </div>\r\n        <mat-card class=\"vehicle-choice card card-5\" *ngFor=\"let vehicle of availableVehicles\">\r\n          <mat-card-content class=\"card-container\" fxLayout=\"column\" (click)=\"selectVehicleAvailable(vehicle.id)\">\r\n            <div class=\"vehicle-card\" fxLayoutAlign=\"space-between\" [ngClass]=\"{'selected-option':vehicle.id === selectedVehicleAvailable}\">\r\n              <div fxLayoutAlign=\"center center\">\r\n                <mat-checkbox [disabled]=\"true\" [checked]=\"vehicle.id === selectedVehicleAvailable\"></mat-checkbox>\r\n              </div>\r\n              <div fxFlex fxLayoutAlign=\"center space-between\">\r\n                <div fxFlex fxLayoutAlign=\"center center\">\r\n                  <p>{{ vehicle.vehicle }}</p>\r\n                </div>\r\n                <div fxFlex fxLayoutAlign=\"center center\">\r\n                  <p>{{ vehicle.plate }}</p>\r\n                </div>\r\n                <div fxFlex fxLayoutAlign=\"center center\">\r\n                  <p>{{ vehicle.brand }}</p>\r\n                </div>\r\n                <div fxFlex fxLayoutAlign=\"center center\">\r\n                  <p>{{ vehicle.capacity }}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex>\r\n        <div *ngIf=\"busyVehicles\">\r\n          <mat-card class=\"vehicle-choice\">\r\n            <mat-card-content class=\"card-container\" fxLayout=\"column\">\r\n              <mat-accordion [multi]=\"false\">\r\n                <mat-expansion-panel *ngFor=\"let vehicle of busyVehicles\" [ngClass]=\"{'selected-option':vehicle.id === selectedVehicleWithTravel}\" (click)=\"selectVehicleWithTravels(vehicle.id)\">\r\n                  <mat-expansion-panel-header (click)=\"showTravels(vehicle.id)\">\r\n                    <mat-panel-title>\r\n                      <div fxFlex=\"100\" fxLayoutAlign=\"space-between\">\r\n                        <div fxFlex fxLayoutAlign=\"center space-between\">\r\n                          <div fxLayoutAlign=\"center center\">\r\n                            <mat-icon>airline_seat_recline_normal</mat-icon>\r\n                          </div>\r\n                          <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ vehicle.vehicle }}</p>\r\n                          </div>\r\n                          <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ vehicle.plate }}</p>\r\n                          </div>\r\n                          <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ vehicle.brand }}</p>\r\n                          </div>\r\n                          <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ vehicle.capacity }}</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </mat-panel-title>\r\n                  </mat-expansion-panel-header>\r\n\r\n                  <div fxLayoutAlign=\"space-between center\">\r\n                    <div fxFlex fxLayoutAlign=\"center\"><h4>Destino</h4></div>\r\n                    <div fxFlex fxLayoutAlign=\"center\"><h4>Motorista</h4></div>\r\n                    <div fxFlex fxLayoutAlign=\"center\"><h4>Retorno</h4></div>\r\n                  </div>\r\n                  <mat-card class=\"travels-vehicles\" *ngFor=\"let travel of travelsByVehicle\" (click)=\"selectTravel(travel, travel.id, travel.form[0])\">\r\n                    <div fxFlex fxLayoutAlign=\"center space-between\" >\r\n                      <mat-checkbox [checked]=\"travel.id === selectedTravelID\"></mat-checkbox>\r\n                      <div fxFlex fxLayoutAlign=\"center center\">\r\n                        <p>{{ travel.form[0].destination }}</p>\r\n                      </div>\r\n                      <div fxFlex fxLayoutAlign=\"center center\">\r\n                        <p>{{travel.driver.name}}</p>\r\n                      </div>\r\n                      <div fxFlex fxLayoutAlign=\"center center\">\r\n                        <p>{{ travel.travelDate }}</p>\r\n                      </div>\r\n                    </div>\r\n                  </mat-card>\r\n                </mat-expansion-panel>\r\n              </mat-accordion>\r\n\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n        <button mat-raised-button matStepperPrevious color=\"primary\">Voltar</button>\r\n        <button mat-raised-button matStepperNext color=\"primary\">Próximo</button>\r\n      </div>\r\n    </mat-step>\r\n    <mat-step>\r\n      <ng-template matStepLabel>Selecionar Motorista</ng-template>\r\n      <div *ngIf=\"!isCarona\">\r\n        <div fxLayoutAlign=\"space-between\">\r\n          <div *ngFor=\"let col of driversHeader\" fxFlex fxLayoutAlign=\"center\">\r\n            <h4>{{ col }}</h4>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"drivers\">\r\n          <mat-card *ngFor=\"let driver of drivers\" class=\"vehicle-choice\">\r\n            <mat-card-content class=\"card-container\" fxLayout=\"column\" (click)=\"selectDriver(driver.id)\"  [ngClass]=\"{'selected-option':driver.id === selectedDriver}\">\r\n              <div fxLayoutAlign=\"space-between\" fxLayoutGap=\"30px\">\r\n                <div fxFlex fxLayoutAlign=\"center space-between\">\r\n                  <div fxFlex fxLayoutAlign=\"center center\">\r\n                    <p>{{ driver.name }}</p>\r\n                  </div>\r\n                  <div fxFlex fxLayoutAlign=\"center center\">\r\n                    <p>{{ driver.cpf }}</p>\r\n                  </div>\r\n                  <div fxFlex fxLayoutAlign=\"center center\">\r\n                    <p>{{ driver.cnh }}</p>\r\n                  </div>\r\n                  <div fxFlex fxLayoutAlign=\"center center\">\r\n                    <p>{{ driver.registration }}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"isCarona\" fxLayoutAlign=\"center\" fxLayout=\"column\">\r\n        <div fxLayoutAlign=\"center\">\r\n          <h1>Essa viagem será alocada como Carona</h1>\r\n        </div>\r\n        <mat-card class=\"full-form-container\" fxLayout=\"column\" *ngIf=\"isCarona\">\r\n          <form fxLayout=\"column\">\r\n            <div fxFlex=\"80\" fxLayout=\"column\" fxFlexOffset=\"5\">\r\n              <div fxLayout=\"row\">\r\n                <mat-form-field fxFlex=\"50\" fxFlexOffset=\"15\">\r\n                  <input matInput placeholder=\"Setor Requisitante\" name=\"requesterSector2\" [(ngModel)]=\"model.requesterSector\">\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex=\"15\" fxFlexOffset=\"5\">\r\n                  <input matInput placeholder=\"Data\" name=\"date2\" [(ngModel)]=\"formCarona.requestDate\" readonly=\"true\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div>\r\n                <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\r\n                  <input matInput placeholder=\"Destino\" name=\"destination2\" [(ngModel)]=\"formCarona.destination\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div>\r\n                <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\r\n                  <textarea matInput placeholder=\"Objetivo\" name=\"purpose2\" [(ngModel)]=\"formCarona.purpose\"></textarea>\r\n                </mat-form-field>\r\n              </div>\r\n              <div fxLayout=\"row\">\r\n                <mat-form-field fxFlex=\"50\" fxFlexOffset=\"15\">\r\n                  <input matInput placeholder=\"Nome\" name=\"name2\" [(ngModel)]=\"formCarona.name\">\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex=\"15\" fxFlexOffset=\"5\">\r\n                  <input matInput placeholder=\"Telefone\" name=\"phone2\" [(ngModel)]=\"formCarona.phone\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div fxLayout=\"row\">\r\n                <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\r\n                  <input matInput placeholder=\"Data\" name=\"travelDate2\" [(ngModel)]=\"formCarona.travelDate\" readonly=\"true\">\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\r\n                  <input matInput placeholder=\"Hora da Saída\"  name=\"departureHour2\" [(ngModel)]=\"formCarona.departureHour\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div fxLayout=\"row\">\r\n                <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\r\n                  <input matInput placeholder=\"Regresso Provável\" name=\"returnDate2\" [(ngModel)]=\"formCarona.returnDate\" readonly=\"true\">\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\r\n                  <input matInput placeholder=\"Hora\" name=\"returnHour2\" [(ngModel)]=\"formCarona.returnHour\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div fxLayout=\"row\">\r\n                <h3 fxFlex=\"20\" fxFlexOffset=\"15\">Local de Saída:</h3>\r\n                <mat-checkbox fxFlex=\"20\">Reitoria/UFCG</mat-checkbox>\r\n                <mat-checkbox fxFlex=\"20\">Residência</mat-checkbox>\r\n                <mat-checkbox fxFlex=\"20\">Outros*</mat-checkbox>\r\n              </div>\r\n              <div>\r\n                <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\r\n                  <textarea matInput placeholder=\"\" name=\"Address2\" [(ngModel)]=\"formCarona.address\"></textarea>\r\n                </mat-form-field>\r\n              </div>\r\n              <div>\r\n                <mat-form-field fxFlex=\"33\" fxFlexOffset=\"15\">\r\n                  <input matInput placeholder=\"Horário de chegada do voo/ônibus\" name=\"arrivalTime2\" [(ngModel)]=\"formCarona.arrivalTime\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div fxLayout=\"row\">\r\n                <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\r\n                  <input matInput placeholder=\"Número do voo\" name=\"flightNumber2\" [(ngModel)]=\"formCarona.flightNumber\">\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\r\n                  <input matInput placeholder=\"Empresa\" name=\"airCompany2\" [(ngModel)]=\"formCarona.airCompany\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div>\r\n                <mat-form-field fxFlex=\"33\" fxFlexOffset=\"15\">\r\n                  <input matInput placeholder=\"Origem da viagem\" name=\"travelOrigin2\" [(ngModel)]=\"formCarona.travelOrigin\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div>\r\n                <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\r\n                  <input matInput placeholder=\"Setor responsável pelas diárias do motorista\" name=\"driveSectorResponsability2\" [(ngModel)]=\"formCarona.driverSectorResponsibility\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </mat-card>\r\n      </div>\r\n\r\n      <button mat-raised-button matStepperPrevious color=\"primary\">Voltar</button>\r\n      <button mat-raised-button color=\"primary\" class=\"signup-btn\" (click)=\"confirmTravel()\">Confirmar</button>\r\n    </mat-step>\r\n  </mat-horizontal-stepper>\r\n  <button class=\"mat-button\" mat-fab (click)=\"openDialog()\"><mat-icon>not_interested</mat-icon></button>\r\n</mat-card>\r\n\r\n<ng-template *ngIf=\"isLoading || isLoadingAccordion\">\r\n  <mat-spinner fxFlex color=\"primary\"></mat-spinner>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/allocation/allocation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".allocation-stepper {\n  margin-top: 5%; }\n  .allocation-stepper button {\n    margin-top: 30px; }\n\n.selected-option {\n  background-color: #d4e4f3; }\n\n.vehicle-choice {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  padding: 0;\n  border: 20px;\n  margin: 15px 0 15px 0; }\n  .vehicle-choice .mat-expansion-panel-header {\n    padding: 0 12px 0 12px; }\n  .vehicle-choice mat-expansion-panel-body {\n    overflow: hidden; }\n  .vehicle-choice .vehicle-card:hover {\n    cursor: pointer; }\n  .vehicle-choice .img-container {\n    height: 50px;\n    padding: 7px 0; }\n    .vehicle-choice .img-container img {\n      border-radius: 50%;\n      height: 50px;\n      width: 50px; }\n  .vehicle-choice .mat-checkbox {\n    margin-left: 4px; }\n  .vehicle-choice p {\n    margin: 0;\n    padding: 24px 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n\n.travels-vehicles {\n  padding: 15px; }\n  .travels-vehicles:hover {\n    cursor: pointer; }\n  .travels-vehicles p {\n    padding: 2px;\n    font-size: 14px; }\n\n.toolbar-vehicles-travels {\n  margin-top: 20px; }\n\nh4 {\n  margin: 5px; }\n\n.mat-button {\n  background-color: #E68364;\n  position: fixed;\n  bottom: 50px;\n  right: 30px; }\n\nmat-spinner {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -50px; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__deniel_justification_dialog_deniel_justification_dialog_component__ = __webpack_require__("../../../../../src/app/deniel-justification-dialog/deniel-justification-dialog.component.ts");
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
    function AllocationComponent(travelService, route, formService, vehicleService, driverService, snackBar, router, justificationDialog) {
        this.travelService = travelService;
        this.route = route;
        this.formService = formService;
        this.vehicleService = vehicleService;
        this.driverService = driverService;
        this.snackBar = snackBar;
        this.router = router;
        this.justificationDialog = justificationDialog;
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
        this.selectedVehicleAvailable = -1;
        this.selectedTravel = {};
        this.selectedTravelID = -1;
        this.isCarona = false;
        this.formCarona = {};
        this.id = this.route.snapshot.params['id'];
        this.isLoading = true;
        this.isLoadingAccordion = true;
    }
    AllocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formService.getById(this.id).subscribe(function (data) {
            _this.model = data;
            _this.model.departureHour = data.departureHour.slice(11);
            _this.model.returnHour = data.returnHour.slice(11);
            _this.getVehiclesWithTravels();
            _this.getAvailableVehicles();
            _this.getAllDrivers();
            _this.isLoading = false;
        }, function (error) {
            console.error(error);
        });
    };
    AllocationComponent.prototype.getAllDrivers = function () {
        var _this = this;
        this.driverService.driversObs.subscribe(function (data) {
            _this.drivers = data;
        });
    };
    AllocationComponent.prototype.getAvailableVehicles = function () {
        var _this = this;
        this.vehicleService.getAvailables(this.id).subscribe(function (data) {
            _this.availableVehicles = data;
        });
    };
    AllocationComponent.prototype.getVehiclesWithTravels = function () {
        var _this = this;
        this.vehicleService.getVehiclesWithTravels(this.model.travelDate).subscribe(function (data2) {
            _this.busyVehicles = data2;
        });
    };
    AllocationComponent.prototype.selectDriver = function (id) {
        this.selectedDriver = id;
        console.log(this.selectedDriver);
    };
    AllocationComponent.prototype.selectVehicleAvailable = function (id) {
        this.isCarona = false;
        this.selectedVehicleWithTravel = -1;
        this.selectedTravelID = -1;
        this.selectedTravel = {};
        if (this.selectedVehicleAvailable === id) {
            this.selectedVehicleAvailable = -1;
        }
        else {
            this.selectedVehicleAvailable = id;
        }
        console.log(id, this.selectedVehicleAvailable, this.selectedVehicleAvailable);
        // console.log(id, this.selectedVehicleAvailable, this.selectedVehicleAvailable);
        //
        // if (this.selectedVehicleAvailable === -1 || this.selectedVehicleAvailable !== id) {
        //   this.selectedVehicleAvailable = id;
        // } else {
        //   console.log(id, this.selectedVehicleAvailable, this.selectedVehicleAvailable);
        //   this.selectedVehicleAvailable = -1;
        // }
        //
        // console.log(this.selectedVehicleAvailable);
    };
    AllocationComponent.prototype.selectVehicleWithTravels = function (id) {
        this.isCarona = true;
        this.selectedVehicleAvailable = -1;
        this.selectedVehicleWithTravel = id;
    };
    AllocationComponent.prototype.updateForm = function () {
        var _this = this;
        this.isLoading = true;
        var id = this.model.id;
        var form = Object.assign({}, this.model);
        form.travelDate += ' ' + form.departureHour;
        form.returnDate += ' ' + form.returnHour;
        form.requestDate += ' ' + form.returnHour;
        form.returnHour = form.returnDate;
        form.departureHour = form.travelDate;
        this.formService.update(id, form).subscribe(function (data) {
            var snackBarRef = _this.snackBar.open('Solicitação atualizada!', 'OK', { duration: 5000 });
            _this.getAvailableVehicles();
            _this.getVehiclesWithTravels();
            _this.isLoading = false;
        }, function (error) {
            var snackBarRef = _this.snackBar.open(error.errors[0], 'ENVIAR NOVAMENTE', { duration: 5000 });
        });
    };
    AllocationComponent.prototype.confirmTravel = function () {
        var _this = this;
        var form;
        if (this.selectedVehicleWithTravel !== -1) {
            if (this.selectedTravelID !== -1) {
                form = {
                    formId: +this.id,
                    travelId: this.selectedTravelID
                };
                this.travelService.ride(form).subscribe(function (data) {
                    var snackBarRef = _this.snackBar.open('Solicitação aceita e a carona foi confirmada!', 'OK', { duration: 5000 });
                    _this.router.navigate(['/home/travels']);
                }, function (error) {
                    var snackBarRef = _this.snackBar.open(error.errors[0], 'ENVIAR NOVAMENTE', { duration: 5000 });
                });
            }
            else {
                var snackBarRef = this.snackBar.open('A viagem de carona não foi selecionada', 'OK', { duration: 15000 });
            }
        }
        else {
            form = {
                formId: +this.id,
                vehicle: this.selectedVehicleAvailable,
                driver: this.selectedDriver
            };
            // this.selectedVehicle = this.selectedVehicleAvailable;
            this.travelService.create(form).subscribe(function (data) {
                var snackBarRef = _this.snackBar.open('Solicitação aceita e viagem confirmada!', 'OK', { duration: 5000 });
                _this.router.navigate(['/home/travels']);
            }, function (error) {
                var snackBarRef = _this.snackBar.open(error.errors[0], 'ENVIAR NOVAMENTE', { duration: 5000 });
            });
        }
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
        this.travelsByVehicle = [];
        this.vehicleService.getTravelsFromVehicles(id, this.model.travelDate).subscribe(function (data) {
            _this.travelsByVehicle = data;
            _this.isLoadingAccordion = false;
            console.log(_this.isLoadingAccordion);
        });
    };
    AllocationComponent.prototype.selectTravel = function (travel, id, model) {
        if (this.selectedTravelID === -1) {
            this.selectedTravelID = id;
            this.formCarona = model;
            this.selectedTravel = travel;
        }
        else {
            this.selectedTravelID = -1;
            this.formCarona = {};
            this.selectedTravel = {};
        }
    };
    AllocationComponent.prototype.deniedForm = function (justification) {
        var _this = this;
        var form = {
            justificationDeniel: justification
        };
        this.formService.denied(this.id, form).subscribe(function (data) {
            var snackBarRef = _this.snackBar.open('Solicitação foi bloqueada!', 'OK', { duration: 5000 });
            _this.router.navigate(['/home/solicitations']);
        }, function (error) {
            var snackBarRef = _this.snackBar.open(error.errors[0], 'ENVIAR NOVAMENTE', { duration: 5000 });
        });
    };
    AllocationComponent.prototype.openDialog = function () {
        var _this = this;
        var loginRef = this.justificationDialog.open(__WEBPACK_IMPORTED_MODULE_7__deniel_justification_dialog_deniel_justification_dialog_component__["a" /* DenielJustificationDialogComponent */], {
            height: '40%',
            width: '50%'
        });
        loginRef.afterClosed().subscribe(function (justification) {
            if (justification) {
                _this.deniedForm(justification);
            }
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_travel_service__["a" /* TravelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_travel_service__["a" /* TravelService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_form_service__["a" /* FormService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_vehicle_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_vehicle_service__["a" /* VehicleService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_driver_service__["a" /* DriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_driver_service__["a" /* DriverService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MatSnackBar */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["q" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["q" /* MatDialog */]) === "function" && _h || Object])
], AllocationComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__deniel_justification_dialog_deniel_justification_dialog_module__ = __webpack_require__("../../../../../src/app/deniel-justification-dialog/deniel-justification-dialog.module.ts");
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
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__allocation_routing__["a" /* allocationRouting */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__deniel_justification_dialog_deniel_justification_dialog_module__["a" /* DenielJustificationDialogModule */]
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

/***/ }),

/***/ "../../../../../src/app/deniel-justification-dialog/deniel-justification-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-container\">\r\n    <div fxFlex fxLayout=\"column\">\r\n        <mat-toolbar color=\"primary\">\r\n            <div md-dialog-title fxFlex>\r\n                <div>\r\n                    <div fxFlex fxLayoutAlign=\"center center\">Qual a justificativa do bloqueio?</div>\r\n                </div>\r\n            </div>\r\n        </mat-toolbar>\r\n        <mat-card fxFlex fxLayout=\"column\">\r\n            <div fxFlex class=\"textarea-container\" fxLayout=\"column\" fxLayoutAlign=\"space-around\">\r\n                <textarea placeholder=\"Justificativa\" fxFlex [(ngModel)]=\"justification\"></textarea>\r\n            </div>\r\n            <div md-dialog-actions fxLayoutOffset=\"10px\" fxLayoutAlign=\"space-around end\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\" type=\"submit\">        \r\n                    Salvar\r\n                </button>\r\n                <button mat-raised-button (click)=\"closeDialog()\">Cancelar</button>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/deniel-justification-dialog/deniel-justification-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-container {\n  padding: 0px !important; }\n\nmat-dialog-container {\n  padding: 0; }\n\n.dialog-container {\n  width: 100%;\n  height: 100%; }\n\ntextarea-container {\n  height: 80%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/deniel-justification-dialog/deniel-justification-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenielJustificationDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DenielJustificationDialogComponent = (function () {
    function DenielJustificationDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DenielJustificationDialogComponent.prototype.ngOnInit = function () {
    };
    DenielJustificationDialogComponent.prototype.onSubmit = function (value) {
        this.dialogRef.close(this.justification);
    };
    DenielJustificationDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    return DenielJustificationDialogComponent;
}());
DenielJustificationDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-deniel-justification-dialog',
        template: __webpack_require__("../../../../../src/app/deniel-justification-dialog/deniel-justification-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/deniel-justification-dialog/deniel-justification-dialog.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatDialogRef */]) === "function" && _a || Object])
], DenielJustificationDialogComponent);

var _a;
//# sourceMappingURL=deniel-justification-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/deniel-justification-dialog/deniel-justification-dialog.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deniel_justification_dialog_component__ = __webpack_require__("../../../../../src/app/deniel-justification-dialog/deniel-justification-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenielJustificationDialogModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DenielJustificationDialogModule = (function () {
    function DenielJustificationDialogModule() {
    }
    return DenielJustificationDialogModule;
}());
DenielJustificationDialogModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__deniel_justification_dialog_component__["a" /* DenielJustificationDialogComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__deniel_justification_dialog_component__["a" /* DenielJustificationDialogComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__deniel_justification_dialog_component__["a" /* DenielJustificationDialogComponent */]
        ]
    })
], DenielJustificationDialogModule);

//# sourceMappingURL=deniel-justification-dialog.module.js.map

/***/ })

});
//# sourceMappingURL=6.chunk.js.map