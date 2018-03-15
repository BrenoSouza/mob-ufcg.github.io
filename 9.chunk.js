webpackJsonp([9],{

/***/ "../../../../../src/app/solicitation/solicitation.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"full-form-container\" *ngIf=\"model.justificationDeniel !== null\">\r\n  <h3>Essa solicitação foi bloqueada</h3>\r\n  <h5>Justificativa: {{model.justificationDeniel}}</h5>\r\n</mat-card>\r\n<mat-card class=\"full-form-container\" *ngIf=\"model.ride\" fxLayoutAlign=\"center center\">\r\n  <h3>Essa solicitação foi aceita como uma carona</h3>\r\n</mat-card>\r\n<mat-card class=\"full-form-container\" fxLayout=\"column\" *ngIf=\"!isLoading; else Loading\">\r\n  <div class=\"form-header\" fxLayout=\"column\" fxLayoutAlign=\" center\">\r\n    <h6>SERVIÇO PÚBLICO FEDERAL</h6>\r\n    <h5>UNIVERSIDADE FEDERAL DE CAMPINA GRANDE</h5>\r\n    <h5>PREFEITURA UNIVERSITÀRIA </h5>\r\n    <h2>Setor de Transporte</h2>\r\n    <h2>SOLICITAÇÃO DE TRANSPORTE</h2>\r\n    <h2>{{model.register}}/{{model.travelDate.slice(6, 10)}}</h2>\r\n  </div>\r\n  <form fxLayout=\"column\">\r\n    <div fxFlex=\"80\" fxLayout=\"column\" fxFlexOffset=\"5\">\r\n      <div fxLayout=\"row\">\r\n        <mat-form-field fxFlex=\"50\" fxFlexOffset=\"15\">\r\n          <input matInput placeholder=\"Setor Requisitante\" name=\"requesterSector\" [(ngModel)]=\"model.requesterSector\">\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex=\"15\" fxFlexOffset=\"5\">\r\n          <input matInput placeholder=\"Data\" name=\"date\" [(ngModel)]=\"model.requestDate\" readonly=\"true\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\r\n          <input matInput placeholder=\"Destino\" name=\"destination\" [(ngModel)]=\"model.destination\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\r\n          <textarea matInput placeholder=\"Objetivo\" name=\"purpose\" [(ngModel)]=\"model.purpose\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxLayout=\"row\">\r\n        <mat-form-field fxFlex=\"50\" fxFlexOffset=\"15\">\r\n          <input matInput placeholder=\"Nome\" name=\"name\" [(ngModel)]=\"model.name\">\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex=\"15\" fxFlexOffset=\"5\">\r\n          <input matInput placeholder=\"Telefone\" name=\"phone\" [(ngModel)]=\"model.phone\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxLayout=\"row\">\r\n        <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\r\n          <input matInput placeholder=\"Data\" name=\"travelDate\" [(ngModel)]=\"model.travelDate\" readonly=\"true\">\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\r\n          <input matInput placeholder=\"Hora da Saída\"  name=\"departureHour\" [(ngModel)]=\"model.departureHour\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxLayout=\"row\">\r\n        <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\r\n          <input matInput placeholder=\"Regresso Provável\" name=\"returnDate\" [(ngModel)]=\"model.returnDate\" readonly=\"true\">\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\r\n          <input matInput placeholder=\"Hora\" name=\"returnHour\" [(ngModel)]=\"model.returnHour\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxLayout=\"row\">\r\n        <h3 fxFlex=\"20\" fxFlexOffset=\"15\">Local de Saída:</h3>\r\n        <mat-checkbox fxFlex=\"20\">Reitoria/UFCG</mat-checkbox>\r\n        <mat-checkbox fxFlex=\"20\">Residência</mat-checkbox>\r\n        <mat-checkbox fxFlex=\"20\">Outros*</mat-checkbox>\r\n      </div>\r\n      <div>\r\n        <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\r\n          <textarea matInput placeholder=\"\" name=\"Address\" [(ngModel)]=\"model.address\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <mat-form-field fxFlex=\"33\" fxFlexOffset=\"15\">\r\n          <input matInput placeholder=\"Horário de chegada do voo/ônibus\" name=\"arrivalTime\" [(ngModel)]=\"model.arrivalTime\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxLayout=\"row\">\r\n        <mat-form-field fxFlex=\"32\" fxFlexOffset=\"15\">\r\n          <input matInput placeholder=\"Número do voo\" name=\"flightNumber\" [(ngModel)]=\"model.flightNumber\">\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex=\"33\" fxFlexOffset=\"5\">\r\n          <input matInput placeholder=\"Empresa\" name=\"airCompany\" [(ngModel)]=\"model.airCompany\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <mat-form-field fxFlex=\"33\" fxFlexOffset=\"15\">\r\n          <input matInput placeholder=\"Origem da viagem\" name=\"travelOrigin\" [(ngModel)]=\"model.travelOrigin\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <mat-form-field fxFlex=\"70\" fxFlexOffset=\"15\">\r\n          <input matInput placeholder=\"Setor responsável pelas diárias do motorista\" name=\"driveSectorResponsability\" [(ngModel)]=\"model.driverSectorResponsibility\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"row\">\r\n\r\n      <button mat-raised-button matTooltip=\"By default, I delay\" color=\"warning\"\r\n              fxFlex=\"20\" fxFlexOffset=\"15\" mat-button *ngIf=\"!isCompleted\"\r\n              (click)=\"updateForm(model.id)\">Atualizar</button>\r\n\r\n      <button mat-raised-button color=\"primary\" *ngIf=\"!isCompleted\" fxFlex=\"20\" fxFlexOffset=\"30\" mat-button (click)=\"goBack()\">Voltar</button>\r\n\r\n      <button mat-raised-button color=\"primary\" *ngIf=\"isCompleted\" fxFlex=\"30\" fxFlexOffset=\"35\" mat-button (click)=\"goBack()\">Voltar</button>\r\n\r\n    </div>\r\n  </form>\r\n</mat-card>\r\n\r\n<ng-template *ngIf=\"isLoading\">\r\n  <mat-spinner fxFlex color=\"primary\"></mat-spinner>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/solicitation/solicitation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1, h2, h3, h4, h5, h6 {\n  margin: 3px; }\n\n.full-form-container {\n  margin: 2% 10% 2% 10%; }\n\nmat-spinner {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -50px; }\n", ""]);

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
    function SolicitationComponent(router, route, formService) {
        this.router = router;
        this.route = route;
        this.formService = formService;
        this.model = {};
        this.id = this.route.snapshot.params["id"];
        this.isLoading = true;
    }
    SolicitationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formService.getById(this.id).subscribe(function (data) {
            _this.model = data;
            _this.isLoading = false;
            if (data.status === "COMPLETED" || data.status === "DENIED") {
                _this.isCompleted = true;
            }
        }, function (error) {
            console.error(error);
        });
    };
    SolicitationComponent.prototype.deleteForm = function (id) {
        this.formService.deleteById(id).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    SolicitationComponent.prototype.goBack = function () {
        this.router.navigate(["/home/solicitations"]);
    };
    SolicitationComponent.prototype.updateForm = function (id) {
        var _this = this;
        this.isLoading = true;
        this.formService.update(id, this.model).subscribe(function (data) {
            _this.isLoading = false;
        }, function (error) {
            console.log(error);
        });
    };
    return SolicitationComponent;
}());
SolicitationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: "app-solicitation",
        template: __webpack_require__("../../../../../src/app/solicitation/solicitation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/solicitation/solicitation.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_form_service__["a" /* FormService */]) === "function" && _c || Object])
], SolicitationComponent);

var _a, _b, _c;
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
var solicitationRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(solicitationRoutes);
//# sourceMappingURL=solicitation.rounting.js.map

/***/ })

});
//# sourceMappingURL=9.chunk.js.map