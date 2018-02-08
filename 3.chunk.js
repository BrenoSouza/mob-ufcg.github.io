webpackJsonp([3],{

/***/ "../../../../../src/app/search-form/search-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form fxLayout=\"column\">\r\n  <mat-card fxLayout=\"column\">\r\n    <div fxLayout=\"row\">\r\n      <mat-form-field fxFlex=\"30\">\r\n        <input matInput placeholder=\"Nome\" name=\"name\" [(ngModel)]=\"model.name\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex=\"30\" fxFlexOffset=\"5\">\r\n        <input matInput placeholder=\"Destino\" name=\"destination\" [(ngModel)]=\"model.destination\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex=\"15\" fxFlexOffset=\"5\">\r\n        <input matInput placeholder=\"Data Ida\" name=\"date_1\" [(ngModel)]=\"model.travelDate\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex=\"15\" fxFlexOffset=\"5\">\r\n        <input matInput placeholder=\"Data Volta\" name=\"date_2\" [(ngModel)]=\"model.returnDate\">\r\n      </mat-form-field>\r\n\r\n      <div fxFlex=\"15\" fxLayoutAlign=\"center center\">\r\n        <button mat-raised-button class=\"md-raised\" (click)=\"search()\"> BUSCAR </button>\r\n      </div>\r\n    </div>\r\n\r\n  </mat-card>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/search-form/search-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\n  padding: 20px;\n  margin-top: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-form/search-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_solicitation_model__ = __webpack_require__("../../../../../src/app/models/solicitation.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchFormComponent = (function () {
    function SearchFormComponent(searchService) {
        this.searchService = searchService;
        this.provisoryHour = ' 03:00:00';
        this.model = new __WEBPACK_IMPORTED_MODULE_2__models_solicitation_model__["a" /* Solicitation */];
        this.searchResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* EventEmitter */]();
    }
    SearchFormComponent.prototype.ngOnInit = function () {
    };
    SearchFormComponent.prototype.search = function () {
        var _this = this;
        if (this.model.travelDate) {
            this.model.travelDate += this.provisoryHour;
        }
        if (this.model.returnDate) {
            this.model.returnDate += this.provisoryHour;
        }
        this.searchService.searchSolicitation(this.model).subscribe(function (data) {
            _this.searchResult.emit(data.data);
        }, function (error) {
            console.error(error);
        });
    };
    return SearchFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Output */])(),
    __metadata("design:type", Object)
], SearchFormComponent.prototype, "searchResult", void 0);
SearchFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-search-form',
        template: __webpack_require__("../../../../../src/app/search-form/search-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-form/search-form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _a || Object])
], SearchFormComponent);

var _a;
//# sourceMappingURL=search-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-form/search-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_form_component__ = __webpack_require__("../../../../../src/app/search-form/search-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFormModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SearchFormModule = (function () {
    function SearchFormModule() {
    }
    return SearchFormModule;
}());
SearchFormModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__search_form_component__["a" /* SearchFormComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__search_form_component__["a" /* SearchFormComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_search_service__["a" /* SearchService */]
        ]
    })
], SearchFormModule);

//# sourceMappingURL=search-form.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crud_service__ = __webpack_require__("../../../../../src/app/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchService = (function () {
    function SearchService(http, crudService) {
        this.http = http;
        this.crudService = crudService;
    }
    SearchService.prototype.searchSolicitation = function (model) {
        if (model.travelDate) {
            model.travelDate = new Date(model.travelDate).toISOString();
        }
        else {
            model.travelDate = '';
        }
        if (model.returnDate) {
            model.returnDate = new Date(model.returnDate).toISOString();
        }
        else {
            model.returnDate = '';
        }
        return this.crudService.getWithParameter('https://mobilidade-ufcg.herokuapp.com/form/search', model).map(function (response) {
            return response;
        });
    };
    return SearchService;
}());
SearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__crud_service__["a" /* CrudService */]) === "function" && _b || Object])
], SearchService);

var _a, _b;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/app/solicitations-list/solicitations-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <app-search-form (searchResult)=\"searchResult($event)\"></app-search-form>\r\n    <div *ngIf=\"solicitations\" fxLayoutAlign=\"space-between\">\r\n        <div *ngFor=\"let col of solicitations.header\" fxFlex fxLayoutAlign=\"center\">\r\n            <h4>{{ col }}</h4>\r\n        </div>\r\n    </div>\r\n    \r\n    <div *ngIf=\"!isLoadingSolicitations; else Loading\">            \r\n        <mat-card *ngFor=\"let solicitation of solicitations.itemsContent\">\r\n            <mat-card-content class=\"card-container\" fxLayout=\"column\" (click)=\"goToFull(solicitation)\">\r\n                <div fxLayoutAlign=\"space-between\" fxLayoutGap=\"30px\">\r\n                    <div fxFlex fxLayoutAlign=\"center space-between\">\r\n                        <div fxFlex=\"3\" [ngClass]=\"{'waiting': solicitation.status === 'WAITING', \r\n                        'completed': solicitation.status === 'COMPLETED', 'denied': solicitation.status === 'DENIED'}\">\r\n\r\n                        </div>\r\n                        <div fxFlex=\"25\" fxLayoutAlign=\"center center\">\r\n                            <p>{{ solicitation.requesterSector }}</p>\r\n                        </div>\r\n                        <div fxFlex=\"25\" fxLayoutAlign=\"center center\">\r\n                            <p>{{ solicitation.phone }}</p>\r\n                        </div>\r\n                        <div fxFlex=\"22\" fxLayoutAlign=\"center center\">\r\n                            <p>{{ solicitation.requestDate }}</p>\r\n                        </div>\r\n                        <div fxFlex=\"25\" fxLayoutAlign=\"center center\">\r\n                            <p>{{ solicitation.destination }}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <ng-template #Loading>\r\n        <mat-spinner fxFlex color=\"primary\"></mat-spinner>\r\n    </ng-template>\r\n    <app-pdf-reader (newSolicitation)=\"newSolicitation($event)\"></app-pdf-reader>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/solicitations-list/solicitations-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\n  padding: 0; }\n  .mat-card:hover {\n    cursor: pointer;\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.24);\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .mat-card .img-container {\n    height: 50px;\n    padding: 7px 0; }\n    .mat-card .img-container img {\n      border-radius: 50%;\n      height: 50px;\n      width: 50px; }\n  .mat-card .is-link {\n    cursor: pointer; }\n  .mat-card p {\n    margin: 0;\n    padding: 24px 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .mat-card .completed {\n    background-color: green; }\n  .mat-card .denied {\n    background-color: red; }\n  .mat-card .waiting {\n    background-color: yellow; }\n\n.card-container {\n  margin: 10px 10px 15px 0 !important; }\n\nmat-spinner {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -50px; }\n", ""]);

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
        this.isLoadingSolicitations = true;
    }
    SolicitationsListComponent.prototype.ngOnInit = function () {
        this.solicitations = {
            header: ['Requisitante', 'Telefone', 'Data', 'Destino'],
            itemsContent: []
        };
        this.showSolicitations();
    };
    SolicitationsListComponent.prototype.showSolicitations = function () {
        var _this = this;
        this.solicitations.itemsContent = [];
        this.formService.solicitationObs.subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var solicitationData = data_1[_i];
                _this.solicitations.itemsContent.push(solicitationData);
            }
            _this.isLoadingSolicitations = false;
        });
    };
    SolicitationsListComponent.prototype.goToFull = function (solicitation) {
        if (solicitation.status === 'WAITING') {
            this.router.navigate(['/home/allocation', { id: solicitation.id }]);
        }
        else {
            this.router.navigate(['/home/solicitation', { id: solicitation.id }]);
        }
    };
    SolicitationsListComponent.prototype.newSolicitation = function (value) {
        this.showSolicitations();
    };
    SolicitationsListComponent.prototype.searchResult = function (value) {
        this.solicitations.itemsContent = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var solicitationData = value_1[_i];
            this.solicitations.itemsContent.push(solicitationData);
        }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_form_search_form_module__ = __webpack_require__("../../../../../src/app/search-form/search-form.module.ts");
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
            __WEBPACK_IMPORTED_MODULE_6__pdf_reader_pdf_reader_module__["a" /* PdfReaderModule */],
            __WEBPACK_IMPORTED_MODULE_7__search_form_search_form_module__["a" /* SearchFormModule */]
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
var solicitationsRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(solicitationsRoutes);
//# sourceMappingURL=solicitations-list.rounting.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map