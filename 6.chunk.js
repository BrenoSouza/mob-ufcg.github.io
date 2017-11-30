webpackJsonp([6],{

/***/ "../../../../../src/app/solicitation/solicitation.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"full-form-container\" fxLayout=\"column\">\n  <div class=\"form-header\" fxLayout=\"column\" fxLayoutAlign=\" center\">\n    <h6>SERVIÇO PÚBLICO FEDERAL</h6>\n    <h5>UNIVERSIDADE FEDERAL DE CAMPINA GRANDE</h5>\n    <h5>PREFEITURA UNIVERSITÀRIA </h5>\n    <h2>Setor de Transporte</h2>\n    <h2>SOLICITAÇÃO DE TRANSPORTE</h2>\n  </div>\n  <form fxLayout=\"column\">\n    <div fxFlex=\"80\" fxLayout=\"column\" fxFlexOffset=\"5\">\n      <div fxLayout=\"row\">\n        <mat-form-field fxFlex=\"50\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Setor Requisitante\" name=\"requesterSector\" [(ngModel)]=\"model.requesterSector\">\n        </mat-form-field>\n        <mat-form-field fxFlex=\"15\" fxFlexOffset=\"5\">\n          <input matInput [matDatepicker]=\"data_atual\" placeholder=\"Data\" name=\"date\" [(ngModel)]=\"model.requestDate\">\n          <mat-datepicker-toggle matSuffix [for]=\"data_atual\"></mat-datepicker-toggle>\n          <mat-datepicker #data_atual></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Destino\" name=\"destination\" [(ngModel)]=\"model.destination\">\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\n          <textarea matInput placeholder=\"Objetivo\" name=\"purpose\" [(ngModel)]=\"model.purpose\"></textarea>\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\">\n        <mat-form-field fxFlex=\"50\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Nome\" name=\"name\" [(ngModel)]=\"model.name\">\n        </mat-form-field>\n        <mat-form-field fxFlex=\"15\" fxFlexOffset=\"5\">\n          <input matInput placeholder=\"Telefone\" name=\"phone\" [(ngModel)]=\"model.phone\">\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\">\n        <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\n          <input matInput [matDatepicker]=\"data_viagem\" placeholder=\"Data\" name=\"travelDate\" [(ngModel)]=\"model.travelDate\">\n          <mat-datepicker-toggle matSuffix [for]=\"data_viagem\"></mat-datepicker-toggle>\n          <mat-datepicker #data_viagem></mat-datepicker>\n        </mat-form-field>\n        <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\n          <input matInput placeholder=\"Hora da Saída\"  name=\"departureHour\" [(ngModel)]=\"model.departureHour\">\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\">\n        <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\n          <input matInput [matDatepicker]=\"data_regresso\" placeholder=\"Regresso Provável\" name=\"returnDate\" [(ngModel)]=\"model.returnDate\">\n          <mat-datepicker-toggle matSuffix [for]=\"data_regresso\"></mat-datepicker-toggle>\n          <mat-datepicker #data_regresso></mat-datepicker>\n        </mat-form-field>\n        <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\n          <input matInput placeholder=\"Hora\" name=\"returnHour\" [(ngModel)]=\"model.returnHour\">\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\">\n        <h3 fxFlex=\"20\" fxFlexOffset=\"15\">Local de Saída:</h3>\n        <mat-checkbox fxFlex=\"20\">Reitoria/UFCG</mat-checkbox>\n        <mat-checkbox fxFlex=\"20\">Residência</mat-checkbox>\n        <mat-checkbox fxFlex=\"20\">Outros*</mat-checkbox>\n      </div>\n      <div>\n        <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\n          <textarea matInput placeholder=\"\" name=\"travelOrigin\" [(ngModel)]=\"model.travelOrigin\"></textarea>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field fxFlex=\"33\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Horário de chegada do voo/ônibus\" name=\"arrivalTime\" [(ngModel)]=\"model.arrivalTime\">\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\">\n        <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Número do voo\" name=\"flightNumber\" [(ngModel)]=\"model.flightNumber\">\n        </mat-form-field>\n        <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\n          <input matInput placeholder=\"Empresa\" name=\"airCompany\" [(ngModel)]=\"model.airCompany\">\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field fxFlex=\"33\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Origem da viagem\" name=\"travelOrigin\" [(ngModel)]=\"model.travelOrigin\">\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\n          <input matInput placeholder=\"Setor responsável pelas diárias do motorista\" name=\"driveSectorResponsability\" [(ngModel)]=\"model.driverSectorResponsibility\">\n        </mat-form-field>\n      </div>\n    </div>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/solicitation/solicitation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1, h2, h3, h4, h5, h6 {\n  margin: 3px; }\n\n.full-form-container {\n  margin: 2% 10% 2% 10%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/solicitation/solicitation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SolicitationComponent = (function () {
    function SolicitationComponent(route, formService) {
        this.route = route;
        this.formService = formService;
        this.model = {};
        this.id = this.route.snapshot.params['id'];
    }
    SolicitationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formService.getById(this.id).subscribe(function (data) {
            _this.model = data;
            console.log(data);
        }, function (error) {
            console.error(error);
        });
    };
    return SolicitationComponent;
}());
SolicitationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-solicitation',
        template: __webpack_require__("../../../../../src/app/solicitation/solicitation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/solicitation/solicitation.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_form_service__["a" /* FormService */]) === "function" && _b || Object])
], SolicitationComponent);

var _a, _b;
//# sourceMappingURL=solicitation.component.js.map

/***/ }),

/***/ "../../../../../src/app/solicitation/solicitation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__solicitation_component__ = __webpack_require__("../../../../../src/app/solicitation/solicitation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__solicitation_rounting__ = __webpack_require__("../../../../../src/app/solicitation/solicitation.rounting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitationModule", function() { return SolicitationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SolicitationModule = (function () {
    function SolicitationModule() {
    }
    return SolicitationModule;
}());
SolicitationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__solicitation_rounting__["a" /* solicitationRouting */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__solicitation_component__["a" /* SolicitationComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_form_service__["a" /* FormService */]
        ]
    })
], SolicitationModule);

//# sourceMappingURL=solicitation.module.js.map

/***/ }),

/***/ "../../../../../src/app/solicitation/solicitation.rounting.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__solicitation_component__ = __webpack_require__("../../../../../src/app/solicitation/solicitation.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return solicitationRouting; });


var solicitationRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__solicitation_component__["a" /* SolicitationComponent */]
    }
];
var solicitationRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(solicitationRoutes);
//# sourceMappingURL=solicitation.rounting.js.map

/***/ })

});
//# sourceMappingURL=6.chunk.js.map