(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/isara/development/everest/src/main.ts */"zUnb");


/***/ }),

/***/ "3RaO":
/*!*********************************************************!*\
  !*** ./src/app/components/summary/summary.component.ts ***!
  \*********************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");




class SummaryComponent {
    constructor() {
        this.months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        this.totalBalance = 0;
        this.totalPayoff = [];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Month';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Balance';
        this.autoScale = false;
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        this.totalBalance = 0;
        //this.paydownRate = 2000;
        if (changes.hasOwnProperty('creditCards')) {
            for (const card of changes.creditCards.currentValue) {
                this.totalBalance += card.balance;
            }
            this.computePayoff();
        }
    }
    computePayoff() {
        let balance = this.totalBalance;
        let paydownRate = this.paydownRate;
        const series = [];
        const today = new Date();
        let currentMonth = today.getMonth();
        let year = today.getFullYear();
        do {
            series.push({
                name: `${this.months[currentMonth]} '${year - 2000}`,
                value: Math.trunc(balance),
            });
            balance = balance - paydownRate;
            currentMonth += currentMonth >= this.months.length - 1 ? -currentMonth : 1;
            if (currentMonth === 0) {
                year++;
            }
        } while (balance > 0);
        const result = [{ name: 'Citi Bank', series }];
        this.totalPayoff = result;
    }
    computeInterest() {
    }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) { return new (t || SummaryComponent)(); };
SummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummaryComponent, selectors: [["app-summary"]], inputs: { creditCards: "creditCards", paydownRate: "paydownRate" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 12, consts: [[1, "container"], [3, "click"], [3, "ngModel", "keyup", "ngModelChange"], ["scheme", "vivid", 3, "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "autoScale"]], template: function SummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SummaryComponent_Template_button_click_1_listener() { return ctx.computeInterest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Compute Interest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SummaryComponent_Template_input_keyup_3_listener() { return ctx.computePayoff(); })("ngModelChange", function SummaryComponent_Template_input_ngModelChange_3_listener($event) { return ctx.paydownRate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SummaryComponent_Template_input_keyup_4_listener() { return ctx.computePayoff(); })("ngModelChange", function SummaryComponent_Template_input_ngModelChange_4_listener($event) { return ctx.totalBalance = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-charts-line-chart", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.paydownRate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.totalBalance);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("results", ctx.totalPayoff)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("autoScale", ctx.autoScale);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["LineChartComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdW1tYXJ5L3N1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-summary',
                templateUrl: './summary.component.html',
                styleUrls: ['./summary.component.scss'],
            }]
    }], function () { return []; }, { creditCards: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], paydownRate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_finance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/finance.service */ "w0zp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _cred_card_list_cred_card_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../cred-card-list/cred-card-list.component */ "s6YI");
/* harmony import */ var _add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../add-card-form/add-card-form.component */ "WZwg");













function HomeComponent_app_cred_card_list_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-cred-card-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("creditCardsChange", function HomeComponent_app_cred_card_list_2_Template_app_cred_card_list_creditCardsChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.creditCards = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("creditCards", ctx_r0.creditCards);
} }
function HomeComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.displayCardForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Card ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_app_add_card_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-add-card-form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("creditCardsChange", function HomeComponent_app_add_card_form_4_Template_app_add_card_form_creditCardsChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.creditCards = $event; })("cardCreated", function HomeComponent_app_add_card_form_4_Template_app_add_card_form_cardCreated_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.cardCreated(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("creditCards", ctx_r2.creditCards);
} }
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
];
class HomeComponent {
    constructor(financeService) {
        this.financeService = financeService;
        this.monthsToPayoff = null;
        this.totalPrincipal = 0;
        this.totalInterestPaid = 0;
        this.totalPaid = 0;
        this.displayForm = false;
        this.creditCards = [
            {
                name: 'Citi',
                balance: 1300.21,
                interest: 23.16,
            },
            {
                name: 'Discover',
                balance: 4320.83,
                interest: 18.02,
            },
            {
                name: 'Bank of America',
                balance: 3402.97,
                interest: 21.47,
            },
        ];
        this.monthlyPayment = 500;
        this.data = [];
        this.inputColumns = ['position', 'name', 'weight', 'symbol'];
        this.inputData = ELEMENT_DATA;
    }
    ngOnInit() {
        this.displayColumns = ['0'].concat(this.inputData.map(x => x.position.toString()));
        this.displayData = this.inputColumns.map(x => this.formatInputRow(x));
    }
    calculate() {
        //this.data = this.financeService.computeInterest(this.creditCards, this.monthlyPayment);
        this.totalPrincipal = this.getTotalPrincipal(this.creditCards);
        const monthlyPayment = +this.monthlyPayment;
        const results = this.financeService.calculatePayoff(this.creditCards, monthlyPayment);
        this.monthsToPayoff = results.totalMonths;
        this.totalInterestPaid = results.totalPayment - this.totalPrincipal;
        this.totalPaid = this.totalInterestPaid + this.totalPrincipal;
    }
    getTotalPrincipal(cards) {
        let sum = 0;
        for (const card of cards) {
            sum += card.balance;
        }
        return sum;
    }
    getTime(months) {
        if (months === this.financeService.maxMonths) {
            return 'Never.';
        }
        const year = Math.trunc((months / 12));
        const month = months % 12;
        if (year && month) {
            return `${year} years ${month} months`;
        }
        else if (!year && month) {
            return `${month} months`;
        }
        else if (year && !month) {
            return `${year} years`;
        }
        return 'n/a';
    }
    displayCardForm() {
        this.displayForm = true;
    }
    cardCreated() {
        this.displayForm = false;
    }
    formatInputRow(row) {
        const output = {};
        output[0] = row;
        for (let i = 0; i < this.inputData.length; ++i) {
            output[this.inputData[i].position] = this.inputData[i][row];
        }
        return output;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_finance_service__WEBPACK_IMPORTED_MODULE_1__["FinanceService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 58, vars: 17, consts: [[1, "container"], [1, "configuration"], ["class", "cc-list", 3, "creditCards", "creditCardsChange", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], [3, "creditCards", "creditCardsChange", "cardCreated", 4, "ngIf"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "mat-h1"], ["role", "list"], ["role", "listitem"], [1, "list-item"], [1, "cc-list", 3, "creditCards", "creditCardsChange"], [3, "creditCards", "creditCardsChange", "cardCreated"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_app_cred_card_list_2_Template, 1, 1, "app-cred-card-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_button_3_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_app_add_card_form_4_Template, 1, 1, "app-add-card-form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Estimated Monthly Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_11_listener($event) { return ctx.monthlyPayment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_12_listener() { return ctx.calculate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Calculate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Your Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Monthly payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Total Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Total Principal Paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Total Interest Paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Total Paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.creditCards.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.creditCards.length && !ctx.displayForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.creditCards.length || ctx.displayForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.monthlyPayment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 9, ctx.monthlyPayment), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTime(ctx.monthsToPayoff));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 11, ctx.totalPrincipal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 13, ctx.totalInterestPaid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 15, ctx.totalPaid));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _cred_card_list_cred_card_list_component__WEBPACK_IMPORTED_MODULE_10__["CredCardListComponent"], _add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_11__["AddCardFormComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.chart[_ngcontent-%COMP%] {\n  flex: 3;\n}\n\n.configuration[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n}\n\n.add-card[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.cc-list[_ngcontent-%COMP%] {\n  flex: 3;\n}\n\n.calculations[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.list-item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2hhcnQge1xuICBmbGV4OiAzO1xufVxuXG4uY29uZmlndXJhdGlvbiB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5hZGQtY2FyZCB7XG4gIGZsZXg6IDE7XG59XG5cbi5jYy1saXN0IHtcbiAgZmxleDogMztcbn1cblxuLmNhbGN1bGF0aW9ucyB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5saXN0LWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_finance_service__WEBPACK_IMPORTED_MODULE_1__["FinanceService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");



class AppComponent {
    constructor() {
        this.title = 'everest';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
    } }, directives: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "WZwg":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-card-form/add-card-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddCardFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardFormComponent", function() { return AddCardFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







class AddCardFormComponent {
    constructor() {
        this.creditCardsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cardCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.creditCardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            balance: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            interest: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    ngOnInit() {
    }
    addCard() {
        if (this.creditCardForm.valid) {
            this.creditCards.push({
                name: this.creditCardForm.value.name,
                balance: parseInt(this.creditCardForm.value.balance),
                interest: parseInt(this.creditCardForm.value.interest),
            });
            this.creditCardForm.reset();
            this.creditCardsChange.emit([...this.creditCards]);
            this.cardCreated.emit();
        }
    }
}
AddCardFormComponent.ɵfac = function AddCardFormComponent_Factory(t) { return new (t || AddCardFormComponent)(); };
AddCardFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCardFormComponent, selectors: [["app-add-card-form"]], inputs: { creditCards: "creditCards" }, outputs: { creditCardsChange: "creditCardsChange", cardCreated: "cardCreated" }, decls: 15, vars: 1, consts: [[1, "container", 3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["formControlName", "name", "matInput", "", "autocomplete", "off"], ["formControlName", "balance", "matInput", "", "autocomplete", "off"], ["formControlName", "interest", "matInput", "", "autocomplete", "off"], ["mat-raised-button", "", "color", "primary"]], template: function AddCardFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddCardFormComponent_Template_form_ngSubmit_0_listener() { return ctx.addCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Balance Owed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Interest Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.creditCardForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtY2FyZC1mb3JtL2FkZC1jYXJkLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWNhcmQtZm9ybS9hZGQtY2FyZC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCardFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-card-form',
                templateUrl: './add-card-form.component.html',
                styleUrls: ['./add-card-form.component.scss'],
            }]
    }], function () { return []; }, { creditCards: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], creditCardsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cardCreated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _components_cred_card_list_cred_card_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cred-card-list/cred-card-list.component */ "s6YI");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/add-card-form/add-card-form.component */ "WZwg");
/* harmony import */ var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/summary/summary.component */ "3RaO");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "+0xr");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_15__["NgxChartsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_cred_card_list_cred_card_list_component__WEBPACK_IMPORTED_MODULE_9__["CredCardListComponent"],
        _components_add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_12__["AddCardFormComponent"],
        _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_13__["SummaryComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_15__["NgxChartsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _components_cred_card_list_cred_card_list_component__WEBPACK_IMPORTED_MODULE_9__["CredCardListComponent"],
                    _components_add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_12__["AddCardFormComponent"],
                    _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_13__["SummaryComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_15__["NgxChartsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "s6YI":
/*!***********************************************************************!*\
  !*** ./src/app/components/cred-card-list/cred-card-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: CredCardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredCardListComponent", function() { return CredCardListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");








function CredCardListComponent_mat_list_item_1_mat_divider_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");
} }
function CredCardListComponent_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "credit_card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CredCardListComponent_mat_list_item_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r3 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.remove(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CredCardListComponent_mat_list_item_1_mat_divider_10_Template, 1, 0, "mat-divider", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const creditCard_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](creditCard_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("$", creditCard_r1.balance, " - ", creditCard_r1.interest, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r2);
} }
class CredCardListComponent {
    constructor() {
        this.creditCardsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    remove(index) {
        this.creditCards.splice(index, 1);
        this.creditCardsChange.emit([...this.creditCards]);
    }
}
CredCardListComponent.ɵfac = function CredCardListComponent_Factory(t) { return new (t || CredCardListComponent)(); };
CredCardListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CredCardListComponent, selectors: [["app-cred-card-list"]], inputs: { creditCards: "creditCards" }, outputs: { creditCardsChange: "creditCardsChange" }, decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["mat-list-icon", ""], ["mat-line", ""], ["mat-icon-button", "", 3, "click"], [4, "ngIf"]], template: function CredCardListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CredCardListComponent_mat_list_item_1_Template, 11, 4, "mat-list-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.creditCards);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatLine"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlZC1jYXJkLWxpc3QvY3JlZC1jYXJkLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CredCardListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cred-card-list',
                templateUrl: './cred-card-list.component.html',
                styleUrls: ['./cred-card-list.component.scss'],
            }]
    }], function () { return []; }, { creditCards: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], creditCardsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "w0zp":
/*!*********************************************!*\
  !*** ./src/app/services/finance.service.ts ***!
  \*********************************************/
/*! exports provided: FinanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceService", function() { return FinanceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/card */ "yx/k");



const DEBUG = false;
class FinanceService {
    constructor() {
        this.months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        /** represents the max amount of months we will make calculations
         *  the assumption is that you should never need 40 years to pay off cc debt
         */
        this.maxMonths = 40 * 12;
    }
    computeTotalBalance(cards) {
        let totalBalance = 0;
        for (const card of cards) {
            totalBalance += card.balance;
        }
        return totalBalance;
    }
    getInterest(balance, dailyInterest) {
        return (30 * balance * dailyInterest) + balance;
    }
    shallowCopy(card) {
        return {
            name: card.name,
            balance: card.balance,
            interest: card.interest,
        };
    }
    constructCardObjs(creditCards) {
        const cards = [];
        const minimumPayment = 35;
        for (const card of creditCards) {
            cards.push(new src_app_models_card__WEBPACK_IMPORTED_MODULE_1__["Card"](card.balance, card.interest, card.name, minimumPayment));
        }
        return cards;
    }
    allDebtsPaid(cards) {
        return cards.every(card => card.isPaidOff());
    }
    findAndFocusCard(cards) {
        let focusNextCard = false;
        for (const card of cards) {
            // although payoff of the last card in the list will also set this
            // variable, the loop will finish before it is read on a card that would
            // have been out of bounds.
            if (focusNextCard) {
                card.focus();
                focusNextCard = false;
            }
            if (card.focused && card.isPaidOff()) {
                focusNextCard = true;
                card.unfocus();
            }
        }
    }
    payAllCards(cards, payment) {
        // if a card is paid off in one iteration, then the remaining payment will
        // go toward the next card. This includes minimum payments as well.
        let remainingMoney = 0;
        let totalPayment = 0;
        for (const card of cards) {
            let paymentAmount = 0;
            if (card.focused) {
                paymentAmount = payment;
            }
            else {
                paymentAmount = card.minimumPayment;
            }
            const leftOver = card.balance - paymentAmount;
            if (leftOver < 0) {
                remainingMoney += -leftOver;
                paymentAmount -= remainingMoney;
            }
            const finalPayment = paymentAmount + remainingMoney;
            totalPayment += finalPayment;
            card.applyPayment(finalPayment);
        }
        // moves the focused card to next if current card has been paid off
        // during this iteration
        this.findAndFocusCard(cards);
        return totalPayment;
    }
    applyInterest(cards) {
        for (const card of cards) {
            if (!card.isPaidOff()) {
                card.applyInterest();
            }
        }
    }
    calculateMontlyPayment(cards, payment) {
        for (const card of cards) {
            payment -= card.minimumPayment;
        }
        return payment;
    }
    calculatePayoff(creditCards, payment) {
        const cards = this.constructCardObjs(creditCards);
        let currentMonth = 0;
        let totalPayment = 0;
        cards[0].focus();
        do {
            // pay off debt
            const currentPayment = this.payAllCards(cards, payment);
            totalPayment += currentPayment;
            // apply interest
            this.applyInterest(cards);
            // iterate time
            currentMonth++;
            // print state
            if (DEBUG) {
                for (const card of cards) {
                    card.prettyPrint();
                }
            }
        } while (!this.allDebtsPaid(cards) && currentMonth < this.maxMonths);
        const results = {
            totalMonths: currentMonth,
            totalPayment,
        };
        return results;
    }
    computeInterest(creditCards, monthlyPayment) {
        let currentCardIndex = 0;
        let results = [];
        const today = new Date();
        let year = today.getFullYear();
        const startYear = year;
        let currentMonth = today.getMonth();
        const ccCopy = [];
        let totalBalance = this.computeTotalBalance(creditCards);
        const cardMap = { Total: [{
                    name: `${this.months[currentMonth]} '${year - 2000}`,
                    value: Math.trunc(totalBalance),
                }] };
        for (const card of creditCards) {
            let fuck = this.shallowCopy(card);
            ccCopy.push(fuck);
            cardMap[card.name] = [{
                    name: `${this.months[currentMonth]} '${year - 2000}`,
                    value: Math.trunc(card.balance),
                }];
        }
        currentMonth += currentMonth >= this.months.length - 1 ? -currentMonth : 1;
        if (currentMonth === 0) {
            year++;
        }
        do {
            // pay down current card
            ccCopy[currentCardIndex].balance -= monthlyPayment;
            if (ccCopy[currentCardIndex].balance < 0) {
                ccCopy[currentCardIndex].balance = 0;
            }
            totalBalance = 0;
            for (let i = 0; i < ccCopy.length; i++) {
                // apply interest to all cards
                const dailyInterest = ccCopy[i].interest / 100 / 365;
                ccCopy[i].balance = this.getInterest(ccCopy[i].balance, dailyInterest);
                // calculate total balance
                totalBalance += ccCopy[i].balance;
                // apply balance to appropriate card series
                cardMap[ccCopy[i].name].push({
                    name: `${this.months[currentMonth]} '${year - 2000}`,
                    value: Math.trunc(ccCopy[i].balance),
                });
            }
            // add total balance to series
            cardMap['Total'].push({
                name: `${this.months[currentMonth]} '${year - 2000}`,
                value: Math.trunc(totalBalance),
            });
            // increment current card if balance is 0
            currentMonth += currentMonth >= this.months.length - 1 ? -currentMonth : 1;
            if (currentMonth === 0) {
                year++;
            }
            if (ccCopy[currentCardIndex].balance <= 0) {
                currentCardIndex++;
            }
        } while (totalBalance > 0 && year < startYear + 40 && currentCardIndex < ccCopy.length);
        // apply to graph
        for (var key of Object.keys(cardMap)) {
            results.push({ name: key, series: cardMap[key] });
        }
        return results;
    }
}
FinanceService.ɵfac = function FinanceService_Factory(t) { return new (t || FinanceService)(); };
FinanceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FinanceService, factory: FinanceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinanceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "yx/k":
/*!********************************!*\
  !*** ./src/app/models/card.ts ***!
  \********************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
class Card {
    constructor(balance, interest, name, minimumPayment) {
        this.balance = balance;
        this.interest = interest;
        this.name = name;
        this.focused = false;
        this.dailyInterest = this.interest / 100 / 365;
        this.minimumPayment = minimumPayment;
    }
    applyInterest() {
        this.balance = (30 * this.balance * this.dailyInterest) + this.balance;
    }
    isPaidOff() {
        return this.balance <= 0;
    }
    applyPayment(payment) {
        if (this.balance > 0) {
            this.balance -= payment;
            if (this.balance <= 0) {
                this.balance = 0;
            }
        }
    }
    prettyPrint() {
        console.log(`name: ${this.name}, balance: ${this.balance}, focused: ${this.focused}`);
    }
    focus() {
        this.focused = true;
    }
    unfocus() {
        this.focused = false;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map