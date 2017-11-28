webpackJsonp([5],{

/***/ "../../../../../src/app/solicitations-list/solicitations-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div *ngIf=\"solicitations\" fxLayoutAlign=\"space-between\">\r\n        <div *ngFor=\"let col of solicitations.header\" fxFlex fxLayoutAlign=\"center\">\r\n            <h4>{{ col }}</h4>\r\n        </div>\r\n    </div>\r\n    \r\n    <div *ngIf=\"solicitations\">\r\n        <mat-card *ngFor=\"let solicitation of solicitations.itemsContent\">\r\n            <mat-card-content class=\"card-container\" fxLayout=\"column\" (click)=\"goToFull(solicitation)\">\r\n                <div fxLayoutAlign=\"space-between\" fxLayoutGap=\"30px\">\r\n                    <div fxFlex fxLayoutAlign=\"center space-between\">\r\n                        <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ solicitation.name }}</p>\r\n                        </div>\r\n                        <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ solicitation.phone }}</p>\r\n                        </div>\r\n                        <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ solicitation.requestDate }}</p>\r\n                        </div>\r\n                        <div fxFlex fxLayoutAlign=\"center center\">\r\n                            <p>{{ solicitation.destination }}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        <button class=\"mat-button\" mat-fab color=\"primary\"><mat-icon>add</mat-icon></button>\r\n    </div>\r\n    <app-pdf-reader></app-pdf-reader>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/solicitations-list/solicitations-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\n  padding: 0; }\n  .mat-card:hover {\n    cursor: pointer;\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.24);\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .mat-card .img-container {\n    height: 50px;\n    padding: 7px 0; }\n    .mat-card .img-container img {\n      border-radius: 50%;\n      height: 50px;\n      width: 50px; }\n  .mat-card .is-link {\n    cursor: pointer; }\n  .mat-card p {\n    margin: 0;\n    padding: 24px 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n\n.card-container {\n  margin: 10px 10px 15px 10px !important; }\n\n.mat-button {\n  position: fixed;\n  bottom: 50px;\n  right: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/solicitations-list/solicitations-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitationsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SolicitationsListComponent = (function () {
    function SolicitationsListComponent(formService, router) {
        this.formService = formService;
        this.router = router;
    }
    SolicitationsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.solicitations = {
            header: ['Solicitante', 'Telefone', 'Data', 'Destino'],
            itemsContent: []
        };
        this.formService.solicitationObs.subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var solicitationData = data_1[_i];
                _this.solicitations.itemsContent.push(solicitationData);
            }
        });
    };
    SolicitationsListComponent.prototype.goToFull = function (solicitation) {
        this.router.navigate(['/solicitation', { id: solicitation.id }]);
    };
    return SolicitationsListComponent;
}());
SolicitationsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-solicitations-list',
        template: __webpack_require__("../../../../../src/app/solicitations-list/solicitations-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/solicitations-list/solicitations-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_form_service__["a" /* FormService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], SolicitationsListComponent);

var _a, _b;
//# sourceMappingURL=solicitations-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/solicitations-list/solicitations-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__solicitations_list_component__ = __webpack_require__("../../../../../src/app/solicitations-list/solicitations-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__solicitations_list_rounting__ = __webpack_require__("../../../../../src/app/solicitations-list/solicitations-list.rounting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pdf_reader_pdf_reader_module__ = __webpack_require__("../../../../../src/app/pdf-reader/pdf-reader.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitationsListModule", function() { return SolicitationsListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SolicitationsListModule = (function () {
    function SolicitationsListModule() {
    }
    return SolicitationsListModule;
}());
SolicitationsListModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__solicitations_list_rounting__["a" /* solicitationsRouting */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_6__pdf_reader_pdf_reader_module__["a" /* PdfReaderModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__solicitations_list_component__["a" /* SolicitationsListComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_form_service__["a" /* FormService */]
        ]
    })
], SolicitationsListModule);

//# sourceMappingURL=solicitations-list.module.js.map

/***/ }),

/***/ "../../../../../src/app/solicitations-list/solicitations-list.rounting.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__solicitations_list_component__ = __webpack_require__("../../../../../src/app/solicitations-list/solicitations-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return solicitationsRouting; });


var solicitationsRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__solicitations_list_component__["a" /* SolicitationsListComponent */]
    }
];
var solicitationsRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(solicitationsRoutes);
//# sourceMappingURL=solicitations-list.rounting.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map