webpackJsonp([7],{

/***/ "../../../../../src/app/vehicle-request/vehicle-request.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let form of model.form\">\r\n<mat-card class=\"full-form-container\" fxLayout=\"column\" *ngIf=\"!isLoading; else Loading\">\r\n  <div class=\"form-header\" fxLayout=\"column\" fxLayoutAlign=\" center\">\r\n    <h5>SERVIÇO PÚBLICO FEDERAL</h5>\r\n    <h5>UNIVERSIDADE FEDERAL DE CAMPINA GRANDE</h5>\r\n    <h5>SECRETARIA DE INFRAESTRUTURA </h5>\r\n    <h5>SETOR DE TRANSPORTES</h5>\r\n    <h3>REQUISIÇÃO DE TRANSPORTE</h3>\r\n    <h2>{{model.register}}/{{model.travelDate.slice(6, 10)}}</h2>\r\n  </div>\r\n  <form fxLayout=\"column\" *ngIf=\"model.form\">\r\n    <div fxFlex=\"80\" fxLayout=\"column\" fxFlexOffset=\"3\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\r\n        <mat-form-field fxFlex=\"70\" fxFlexOffset=\"3\">\r\n          <input matInput placeholder=\"SETOR REQUISITANTE\" name=\"requesterSector\" [(ngModel)]=\"form.requesterSector\" readonly>\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex=\"25\" fxFlexOffset=\"5\">\r\n          <input matInput placeholder=\"DATA\" name=\"date\" [(ngModel)]=\"form.requestDate\" readonly>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <mat-form-field fxFlex=\"100\" fxFlexOffset=\"3\">\r\n          <textarea matInput placeholder=\"FINALIDADE\" name=\"purpose\" [(ngModel)]=\"form.purpose\" readonly></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlexOffset=\"4\">\r\n        <mat-form-field fxFlex=\"100\" fxFlexOffset=\"3\">\r\n          <input matInput placeholder=\"DESTINO/CIDADES\" name=\"destination\" [(ngModel)]=\"form.destination\" readonly>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <mat-form-field fxFlex=\"80\" fxFlexOffset=\"3\">\r\n          <input matInput placeholder=\"LOCAL DE SAÍDA\" name=\"departure_point\" [(ngModel)]=\"form.departurePoint\" readonly>\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex=\"32\" fxFlexOffset=\"3\">\r\n          <input matInput placeholder=\"DATA / HORA\" name=\"travelDate\" [(ngModel)]=\"form.travelDate\" readonly=\"true\" readonly>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n        <h4>REGRESSO PROVÁVEL</h4>\r\n      </div>\r\n      <div>\r\n        <mat-form-field fxFlex=\"32\" fxFlexOffset=\"3\">\r\n          <input matInput placeholder=\"DATA / HORA\" name=\"returnDate\" [(ngModel)]=\"form.returnDate\" readonly=\"true\" readonly>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <mat-form-field fxFlex=\"100\" fxFlexOffset=\"3\">\r\n          <input matInput placeholder=\"SETOR RESPONSÁVEL PELAS DIÁRIAS DO MOTORISTA\" name=\"requesterSector\" [(ngModel)]=\"form.requesterSector\" readonly>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"assinaturas\" fxLayout=\"row\" fxFlexOffset=\"2\" fxLayoutAlign=\"space-between center\">\r\n        <div fxLayout=\"column\" fxFlex fxFlexOffset=\"3\" fxLayoutAlign=\" center\">\r\n          <mat-form-field fxFlex=\"100\">\r\n            <input matInput placeholder=\"\" name=\"requesterSector\" fxFlex=\"100\" readonly>\r\n          </mat-form-field>\r\n          <h4>CHEFE DO SETOR REQUISITANTE</h4>\r\n        </div>\r\n        <div fxLayout=\"column\" fxFlex fxFlexOffset=\"5\" fxLayoutAlign=\" center\">\r\n          <mat-form-field fxFlex>\r\n            <input matInput fxFlex placeholder=\"\" name=\"date\" readonly>\r\n          </mat-form-field>\r\n          <h4>CENTROS / REITORIA</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"vehicle-driver-info\" fxFlexOffset=\"5\">\r\n        <div fxFlex=\"90\" fxLayout=\"column\" fxFlexOffset=\"3\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxFlexOffset=\"3\">\r\n            <mat-form-field fxFlex=\"70\" fxFlexOffset=\"3\">\r\n              <input matInput placeholder=\"DESPACHO\" name=\"despacho\" value=\"PAULO VINICIUS DE MORAIS NÓBREGA\" readonly>\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <mat-form-field fxFlex=\"100\" fxFlexOffset=\"3\">\r\n              <input matInput placeholder=\"VEÍCULO\" name=\"vehicle\" [(ngModel)]=\"model.vehicle.brand\" readonly>\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"100\" fxFlexOffset=\"3\">\r\n              <input matInput placeholder=\"PLACA\" name=\"plate\" [(ngModel)]=\"model.vehicle.plate\" readonly>\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <mat-form-field fxFlex=\"100\" fxFlexOffset=\"3\">\r\n              <input matInput placeholder=\"MOTORISTA\" name=\"driver_name\" [(ngModel)]=\"model.driver.name\" readonly>\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <mat-form-field fxFlex=\"32\" fxFlexOffset=\"3\">\r\n              <input matInput placeholder=\"DATAS\" name=\"date\" [(ngModel)]=\"form.travelDate\" readonly=\"true\" readonly>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"assinaturas\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <div fxLayout=\"column\" fxFlex fxFlexOffset=\"3\" fxLayoutAlign=\" center\">\r\n              <img src=\"assets/autorization.png\">\r\n              <span>________________________________________</span>\r\n              <h4>CHEFE DO SETOR DE TRANSPORTES</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</mat-card>\r\n\r\n  <ng-template #Loading>\r\n    <mat-spinner fxFlex color=\"primary\"></mat-spinner>\r\n  </ng-template>\r\n\r\n<mat-card class=\"full-form-container\" fxLayout=\"column\" *ngIf=\"!isLoading; else Loading\">\r\n    <div class=\"form-header\" fxLayout=\"column\" fxLayoutAlign=\" center\">\r\n      <h5>SERVIÇO PÚBLICO FEDERAL</h5>\r\n      <h5>UNIVERSIDADE FEDERAL DE CAMPINA GRANDE</h5>\r\n      <h5>SECRETARIA DE INFRAESTRUTURA </h5>\r\n      <h5>SETOR DE TRANSPORTES</h5>\r\n      <h3>CONTROLE DE MOVIMENTAÇÃO DE VEÍCULOS</h3>\r\n      <h2>{{model.register}}/{{model.travelDate.slice(6, 10)}}</h2>\r\n    </div>\r\n    <form fxLayout=\"column\" *ngIf=\"model.form\">\r\n      <div fxFlex=\"80\" fxLayout=\"column\" fxFlexOffset=\"3\">\r\n        <div>\r\n          <mat-form-field fxFlex=\"100\" fxFlexOffset=\"3\">\r\n            <input matInput placeholder=\"MOTORISTA/CONDUTOR\" name=\"driver\" [(ngModel)]=\"model.driver.name\" readonly>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\r\n          <mat-form-field fxFlex=\"100\" fxFlexOffset=\"3\">\r\n            <input matInput placeholder=\"ENCONTRA-SE AUTORIZADA A SAIR COM O VEÍCULO/PLACA\" name=\"autorization\" value=\"{{model.vehicle.brand}} / {{model.vehicle.plate}}\" readonly>\r\n          </mat-form-field>\r\n        </div>\r\n        <div>\r\n          <mat-form-field fxFlex=\"100\" fxFlexOffset=\"3\">\r\n            <input matInput placeholder=\"COM O OBJETIVO DE\" name=\"purpose\" [(ngModel)]=\"form.purpose\" readonly>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"vehicle-driver-info\" fxFlexOffset=\"2\">\r\n          <div fxFlex=\"90\" fxLayout=\"column\" fxFlexOffset=\"3\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxFlexOffset=\"3\">\r\n              <mat-form-field fxFlex=\"70\" fxFlexOffset=\"3\">\r\n                <input matInput placeholder=\"DESPACHO\" name=\"despacho\" value=\"PAULO VINICIUS DE MORAIS NÓBREGA\" readonly>\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxLayout=\"row\">\r\n              <mat-form-field fxFlex=\"100\" fxFlexOffset=\"3\">\r\n                <input matInput placeholder=\"\" name=\"departurePoint\" [(ngModel)]=\"form.departurePoint\" readonly>\r\n              </mat-form-field>\r\n              <mat-form-field fxFlex=\"100\" fxFlexOffset=\"3\">\r\n                <input matInput placeholder=\"\" name=\"destination\" [(ngModel)]=\"form.destination\" readonly>\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxLayoutAlign=\"space-between end\">\r\n              <mat-form-field fxFlex=\"32\" fxFlexOffset=\"3\">\r\n                <input matInput placeholder=\"DATA\" name=\"date\" [(ngModel)]=\"form.travelDate\" readonly=\"true\" readonly>\r\n              </mat-form-field>\r\n              <h4>ASSINATURA DO CHEFE</h4>\r\n            </div>\r\n            <div class=\"assinaturas\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n              <img src=\"assets/autorization.png\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </mat-card>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/vehicle-request/vehicle-request.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1, h2, h3, h4, h5, h6 {\n  margin: 3px; }\n\n.full-form-container {\n  margin: 2% 10% 2% 10%; }\n\n.assinaturas .mat-form-field {\n  width: 100%; }\n\n.assinaturas h4 {\n  margin: 0; }\n\n.vehicle-driver-info {\n  border: 2px solid #000; }\n\nmat-spinner {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vehicle-request/vehicle-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_travel_service__ = __webpack_require__("../../../../../src/app/services/travel.service.ts");
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
    function VehicleRequestComponent(route, travelService) {
        this.route = route;
        this.travelService = travelService;
        this.model = {};
        this.id = this.route.snapshot.params['id'];
        this.isLoading = true;
    }
    VehicleRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.travelService.getById(this.id).subscribe(function (data) {
            _this.model = data[0];
            console.log(_this.model);
            _this.isLoading = false;
            console.log(_this.isLoading);
        }, function (error) {
            console.error(error);
        });
    };
    return VehicleRequestComponent;
}());
VehicleRequestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-vehicle-request',
        template: __webpack_require__("../../../../../src/app/vehicle-request/vehicle-request.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vehicle-request/vehicle-request.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_travel_service__["a" /* TravelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_travel_service__["a" /* TravelService */]) === "function" && _b || Object])
], VehicleRequestComponent);

var _a, _b;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_travel_service__ = __webpack_require__("../../../../../src/app/services/travel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
            __WEBPACK_IMPORTED_MODULE_3__vehicle_request_routing__["a" /* vehicleRequestRouting */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__vehicle_request_component__["a" /* VehicleRequestComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_travel_service__["a" /* TravelService */]
        ]
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
//# sourceMappingURL=7.chunk.js.map