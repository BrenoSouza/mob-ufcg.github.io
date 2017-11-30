webpackJsonp([7],{

/***/ "../../../../../src/app/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card fxLayout=\"column\" style=\"width:100%\">\n  <div class=\"form-header\" fxFlex=\"100\" fxLayout=\"column\" fxLayoutAlign=\" center\">\n    <h6>SERVIÇO PÚBLICO FEDERAL</h6>\n    <h5>UNIVERSIDADE FEDERAL DE CAMPINA GRANDE</h5>\n    <h5>PREFEITURA UNIVERSITÀRIA </h5>\n    <h2>Setor de Transporte</h2>\n    <h2>SOLICITAÇÃO DE TRANSPORTE</h2>\n  </div>\n  <!-- <form (ngSubmit)=\"solicitation()\" #element=\"ngForm\" fxLayout=\"column\">\n    <div fxFlex=\"80\" fxLayout=\"column\" fxFlexOffset=\"5\">\n      <div fxLayout=\"row\">\n        <mat-form-field fxFlex=\"50\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Setor Requisitante\" name=\"requesterSector\" [(ngModel)]=\"model.requesterSector\" #requesterSector=\"ngModel\">\n        </mat-form-field>\n        <mat-form-field fxFlex=\"15\" fxFlexOffset=\"5\">\n          <input matInput [matDatepicker]=\"data_atual\" placeholder=\"Data\" name=\"date\" [(ngModel)]=\"model.date\" #date=\"ngModel\">\n          <mat-datepicker-toggle matSuffix [for]=\"data_atual\"></mat-datepicker-toggle>\n          <mat-datepicker #data_atual></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Destino\" name=\"destination\" [(ngModel)]=\"model.destination\" #destination=\"ngModel\">\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\n          <textarea matInput placeholder=\"Objetivo\" name=\"purpose\" [(ngModel)]=\"model.purpose\" #purpose=\"ngModel\"></textarea>\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\">\n        <mat-form-field fxFlex=\"50\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Nome\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\">\n        </mat-form-field>\n        <mat-form-field fxFlex=\"15\" fxFlexOffset=\"5\">\n          <input matInput placeholder=\"Telefone\" name=\"phone\" [(ngModel)]=\"model.phone\" #phone=\"ngModel\">\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\">\n        <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\n          <input matInput [matDatepicker]=\"data_viagem\" placeholder=\"Data\" name=\"travelDate\" [(ngModel)]=\"model.travelDate\" #travelDate=\"ngModel\">\n          <mat-datepicker-toggle matSuffix [for]=\"data_viagem\"></mat-datepicker-toggle>\n          <mat-datepicker #data_viagem></mat-datepicker>\n        </mat-form-field>\n        <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\n          <input matInput placeholder=\"Hora da Saída\"  name=\"departureHour\" [(ngModel)]=\"model.departureHour\" #departureHour=\"ngModel\">\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\">\n        <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\n          <input matInput [matDatepicker]=\"data_regresso\" placeholder=\"Regresso Provável\" name=\"returnDate\" [(ngModel)]=\"model.returnDate\" #returnDate=\"ngModel\">\n          <mat-datepicker-toggle matSuffix [for]=\"data_regresso\"></mat-datepicker-toggle>\n          <mat-datepicker #data_regresso></mat-datepicker>\n        </mat-form-field>\n        <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\n          <input matInput placeholder=\"Hora\" name=\"returnHour\" [(ngModel)]=\"model.returnHour\" #returnHour=\"ngModel\">\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\">\n        <h3 fxFlex=\"20\" fxFlexOffset=\"15\">Local de Saída:</h3>\n        <mat-checkbox fxFlex=\"20\">Reitoria/UFCG</mat-checkbox>\n        <mat-checkbox fxFlex=\"20\">Residência</mat-checkbox>\n        <mat-checkbox fxFlex=\"20\">Outros*</mat-checkbox>\n      </div>\n      <div>\n        <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\n          <textarea matInput placeholder=\"\" name=\"travelOrigin\" [(ngModel)]=\"model.travelOrigin\" #travelOrigin=\"ngModel\"></textarea>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field fxFlex=\"33\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Horário de chegada do voo/ônibus\" name=\"arrivalTime\" [(ngModel)]=\"model.arrivalTime\" #arrivalTime=\"ngModel\">\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\">\n        <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Número do voo\" name=\"flightNumber\" [(ngModel)]=\"model.flightNumber\" #flightNumber=\"ngModel\">\n        </mat-form-field>\n        <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\n          <input matInput placeholder=\"Empresa\" name=\"airCompany\" [(ngModel)]=\"model.airCompany\" #airCompany=\"ngModel\">\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field fxFlex=\"33\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Origem da viagem\" name=\"travelOrigin\" [(ngModel)]=\"model.travelOrigin\" #travelOrigin=\"ngModel\">\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Setor responsável pelas diárias do motorista\" name=\"driveSectorResponsability\" [(ngModel)]=\"model.driverSectorResponsibility\" #driverSectorResponsability=\"ngModel\">\n        </mat-form-field>\n      </div>\n      <div md-dialog-actions fxLayoutAlign=\"center center\">\n        <button mat-raised-button color=\"primary\" type=\"submit\" class=\"signup-btn\">Solicitar</button>\n      </div>\n    </div>\n  </form>   -->\n\n  <mat-horizontal-stepper [linear]=\"isLinear\" fxFlex>\n    <mat-step>\n      <form>\n        <ng-template matStepLabel>Dados do Solicitante</ng-template>\n        <div fxLayout=\"row\">\n          <mat-form-field fxFlex=\"70\">\n            <input matInput placeholder=\"Setor Requisitante\" name=\"requesterSector\" [(ngModel)]=\"model.requesterSector\">\n          </mat-form-field>\n          <mat-form-field fxFlex fxFlexOffset=\"5\">\n            <input matInput [matDatepicker]=\"data_atual10\" placeholder=\"Data\" name=\"date\" [(ngModel)]=\"model.date\">\n            <mat-datepicker-toggle matSuffix [for]=\"data_atual10\"></mat-datepicker-toggle>\n            <mat-datepicker #data_atual10></mat-datepicker>\n          </mat-form-field>\n        </div>\n        <div>\n          <mat-form-field fxFlex>\n            <textarea matInput placeholder=\"Objetivo\" name=\"purpose\" [(ngModel)]=\"model.purpose\" #purpose=\"ngModel\"></textarea>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\">\n          <mat-form-field fxFlex=\"70\">\n            <input matInput placeholder=\"Nome\" name=\"name\" [(ngModel)]=\"model.name\">\n          </mat-form-field>\n          <mat-form-field fxFlex fxFlexOffset=\"5\">\n            <input matInput placeholder=\"Telefone\" name=\"phone\" [(ngModel)]=\"model.phone\">\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\">\n          <mat-form-field fxFlex>\n            <input matInput placeholder=\"Email\" name=\"email\" [(ngModel)]=\"model.email\">\n          </mat-form-field>\n        </div>\n        <div>\n          <button mat-raised-button matStepperNext color=\"primary\">Próximo</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step>\n      <form fxLayout=\"column\">\n        <ng-template matStepLabel>Dados da Viagem</ng-template>\n        <div fxLayout=\"row\">\n          <mat-form-field fxFlex>\n            <input fxFlex matInput placeholder=\"Destino\" name=\"destination\" [(ngModel)]=\"model.destination\">\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <h4>Local de Saída:</h4>\n          <mat-checkbox>Reitoria/UFCG</mat-checkbox>\n          <mat-checkbox>Residência</mat-checkbox>\n          <mat-checkbox [(ngModel)]=\"checked\" name=\"outros\">Outros*</mat-checkbox>\n        </div>\n        <div *ngIf=\"checked\">\n          <mat-form-field fxFlex>\n            <textarea matInput placeholder=\"\" ></textarea>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\">\n            <mat-form-field fxFlex>\n              <input matInput [matDatepicker]=\"data_viagem1\" placeholder=\"Data Viagem\" name=\"travelDate\" [(ngModel)]=\"model.travelDate\" #travelDate=\"ngModel\">\n              <mat-datepicker-toggle matSuffix [for]=\"data_viagem1\"></mat-datepicker-toggle>\n              <mat-datepicker #data_viagem1></mat-datepicker>\n            </mat-form-field>\n            <mat-form-field fxFlex fxFlexOffset=\"5\">\n              <input matInput placeholder=\"Hora da Saída\"  name=\"departureHour\" [(ngModel)]=\"model.departureHour\" #departureHour=\"ngModel\">\n            </mat-form-field>\n        </div>\n        <div fxLayout=\"row\">\n          <mat-form-field fxFlex>\n            <input matInput [matDatepicker]=\"data_regresso1\" placeholder=\"Regresso Provável\" name=\"returnDate\" [(ngModel)]=\"model.returnDate\" #returnDate=\"ngModel\">\n            <mat-datepicker-toggle matSuffix [for]=\"data_regresso1\"></mat-datepicker-toggle>\n            <mat-datepicker #data_regresso1></mat-datepicker>\n          </mat-form-field>\n          <mat-form-field fxFlex fxFlexOffset=\"5\">\n            <input matInput placeholder=\"Hora Regresso\" name=\"returnHour\" [(ngModel)]=\"model.returnHour\" #returnHour=\"ngModel\">\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxFlexOffset=\"2\">\n            <mat-checkbox [(ngModel)]=\"terminal\" name=\"terminal\">Necessário apanhar no Aeroporto/Rodoviária</mat-checkbox>\n        </div>\n        <div fxLayout=\"row\" *ngIf=\"terminal\">\n          <mat-form-field fxFlex>\n            <input matInput placeholder=\"Horário de chegada do voo/ônibus\" name=\"arrivalTime\" [(ngModel)]=\"model.arrivalTime\" #arrivalTime=\"ngModel\">\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" *ngIf=\"terminal\">\n          <mat-form-field fxFlex>\n            <input matInput placeholder=\"Número do voo\" name=\"flightNumber\" [(ngModel)]=\"model.flightNumber\" #flightNumber=\"ngModel\">\n          </mat-form-field>\n          <mat-form-field fxFlex fxFlexOffset=\"1\">\n            <input matInput placeholder=\"Empresa\" name=\"airCompany\" [(ngModel)]=\"model.airCompany\" #airCompany=\"ngModel\">\n          </mat-form-field>\n        </div>\n        <div fxFlex *ngIf=\"terminal\" fxFlexOffset=\"1\">\n          <mat-form-field fxFlex>\n            <input matInput placeholder=\"Origem da viagem\" name=\"travelOrigin\" [(ngModel)]=\"model.travelOrigin\" #travelOrigin=\"ngModel\">\n          </mat-form-field>\n        </div>\n        <div fxFlex fxFlexOffset=\"10\">\n          <button mat-raised-button matStepperPrevious color=\"primary\">Voltar</button>\n          <button mat-raised-button matStepperNext color=\"primary\">Próximo</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step>\n      <ng-template matStepLabel>Enviar</ng-template>\n      <div>\n        <button mat-raised-button matStepperPrevious>Voltar</button>\n        <button mat-raised-button color=\"primary\" class=\"signup-btn\" (click)=\"solicitation()\">Solicitar</button>\n      </div>\n    </mat-step>\n  </mat-horizontal-stepper>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/form/form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1, h2, h3, h4, h5, h6 {\n  margin: 3px; }\n\nmat-card {\n  background-color: #f7f4f4; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = (function () {
    function FormComponent(formService) {
        this.formService = formService;
        this.model = {};
        this.isLinear = false;
        this.checked = false;
        this.terminal = false;
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.solicitation = function () {
        this.formService.create(this.model)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    return FormComponent;
}());
FormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-form',
        template: __webpack_require__("../../../../../src/app/form/form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form/form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_form_service__["a" /* FormService */]) === "function" && _a || Object])
], FormComponent);

var _a;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/form/form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_component__ = __webpack_require__("../../../../../src/app/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_routing__ = __webpack_require__("../../../../../src/app/form/form.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var FormModule = (function () {
    function FormModule() {
    }
    return FormModule;
}());
FormModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__form_routing__["a" /* formRouting */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatStepperModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__form_component__["a" /* FormComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_form_service__["a" /* FormService */]
        ]
    })
], FormModule);

//# sourceMappingURL=form.module.js.map

/***/ }),

/***/ "../../../../../src/app/form/form.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_component__ = __webpack_require__("../../../../../src/app/form/form.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formRouting; });


var formRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__form_component__["a" /* FormComponent */]
    }
];
var formRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(formRoutes);
//# sourceMappingURL=form.routing.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map