(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"i/56":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),o=u("pMnS"),i=u("Ip0R"),s=u("gIcY"),r=u("26FU"),a=u("xMyE"),d=u("t/Na"),b=function(){function l(l){this.http=l,this.documents$=new r.a([])}return l.prototype.getDocumets=function(){var l=this;return this.http.get("/assets/docsRequired.json").pipe(Object(a.a)(function(n){console.log("inside employee service",n),l.documents$.next(n)}))},l.prototype.getDocObs=function(){return this.http.get("/assets/docsRequired.json")},l.ngInjectableDef=t.S({factory:function(){return new l(t.W(d.c))},token:l,providedIn:"root"}),l}(),c=u("+bNW"),g=function(){function l(l,n,u,t){this.formBuilder=l,this.documentsService=n,this.studentsService=u,this.route=t,this.submitted=!1,this.viewOnly=!1,this.viewEditStudent={id:0,studentName:"",category:"",aliases:["","","","","","",""],fatherName:"",motherName:"",dob:"",lastClassScore:0},this.edit=!1}return l.prototype.ngOnInit=function(){var l=this;console.log("Resolver ka dat for docs a",this.route.snapshot.data),this.documents=this.route.snapshot.data.documentsList,console.log("Resolver ka dat for list",this.route.snapshot.data.studentsList),this.studentsList=this.route.snapshot.data.studentsList,console.log("Data from normal subscribe, hence list--\x3e",this.studentsList),this.viewOnly="true"==this.route.snapshot.paramMap.get("action"),this.viewEditStudentName=+this.route.snapshot.paramMap.get("id"),console.log("Optional parameters as seen",this.viewOnly,this.viewEditStudentName),console.log("Data from normal subscribe, hence list111",this.studentsList),this.studentsList.forEach(function(n,u){n.id===l.viewEditStudentName&&(l.viewEditStudent=n)}),console.log("Found viewEditStudentName",this.viewEditStudent),0==this.viewOnly&&this.viewEditStudentName&&0!==this.viewEditStudentName&&(this.edit=!0),this.registerForm=this.formBuilder.group({id:[{value:this.viewEditStudent.id,disabled:this.viewOnly}],studentName:[{value:this.viewEditStudent.studentName,disabled:this.viewOnly},[s.q.required,s.q.minLength(4)]],category:[{value:this.viewEditStudent.category,disabled:this.viewOnly},s.q.required],dob:[{value:this.viewEditStudent.dob,disabled:this.viewOnly},[s.q.required,function(l){return console.log("Validator directive was called with value",l.value),l.value>=new Date("2015-03-25").toISOString().split("T")[0]?{invalidDate:{value:l.value}}:null}]],fatherName:[{value:this.viewEditStudent.fatherName,disabled:this.viewOnly},[s.q.required,s.q.minLength(4)]],motherName:[{value:this.viewEditStudent.motherName,disabled:this.viewOnly},[s.q.required,s.q.minLength(4)]],lastClassScore:[{value:this.viewEditStudent.lastClassScore,disabled:this.viewOnly},[s.q.required,s.q.max(100),s.q.min(1)]],aliases:this.formBuilder.array([])}),this.displayDocumentsList(this.viewEditStudent.category)},l.prototype.displayDocumentsList=function(l){var n=this;for(console.log("inside on change select",l);0!==this.aliases.length;)this.aliases.removeAt(0);this.documents.forEach(function(u,t){var e=[];"domestic"==l?u.mandatoryForDomestic&&e.push(s.q.requiredTrue):"international"==l&&u.mandatoryForInternational&&e.push(s.q.requiredTrue),console.log("this.viewEditStudent.documents--\x3e",n.viewEditStudent.aliases),console.log("Validation for doc",u.docName,"--\x3e",e),n.aliases.push(n.formBuilder.control({value:"true"==n.viewEditStudent.aliases[t].toString(),disabled:n.viewOnly},e))}),console.log("Alisases->",this.aliases)},Object.defineProperty(l.prototype,"aliases",{get:function(){return this.registerForm.get("aliases")},enumerable:!0,configurable:!0}),l.prototype.addAlias=function(){this.aliases.push(this.formBuilder.control(""))},Object.defineProperty(l.prototype,"f",{get:function(){return this.registerForm.controls},enumerable:!0,configurable:!0}),l.prototype.onSubmit=function(){this.submitted=!0,this.registerForm.invalid||(console.log("form value",this.registerForm.value),this.edit?this.studentsService.update(this.registerForm.value):this.studentsService.create(this.registerForm.value),alert("SUCCESS!! :-)\n\n"+JSON.stringify(this.registerForm.value)),this.registerForm.reset())},l.prototype.showMe=function(l,n){console.log(l,n)},l}(),m=u("ZYCi"),p=t.nb({encapsulation:0,styles:[[""]],data:{}});function f(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Name is required"]))],null,null)}function h(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Name should be atleast 4 characters"]))],null,null)}function v(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,4,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,f)),t.ob(2,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,h)),t.ob(4,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.f.studentName.errors.required),l(n,4,0,u.f.studentName.errors.minlength)},null)}function x(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Father's Name is required"]))],null,null)}function C(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Father's Name should be atleast 4 characters"]))],null,null)}function y(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,4,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,x)),t.ob(2,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,C)),t.ob(4,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.f.fatherName.errors.required),l(n,4,0,u.f.fatherName.errors.minlength)},null)}function I(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Mother's Name is required"]))],null,null)}function S(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Mother's Name should be atleast 4 characters"]))],null,null)}function w(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,4,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,I)),t.ob(2,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,S)),t.ob(4,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.f.motherName.errors.required),l(n,4,0,u.f.motherName.errors.minlength)},null)}function N(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["DOB is required"]))],null,null)}function E(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Student should be of minimum age!!!"]))],null,null)}function O(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,4,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,N)),t.ob(2,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,E)),t.ob(4,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.f.dob.errors.required),l(n,4,0,u.f.dob.errors.invalidDate)},null)}function L(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Last Class Score is required"]))],null,null)}function D(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Last Class Score should be between 1 and 100!!!"]))],null,null)}function k(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,5,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,4,"small",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,L)),t.ob(3,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,D)),t.ob(5,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,u.f.lastClassScore.errors.required),l(n,5,0,u.f.lastClassScore.errors.min||u.f.lastClassScore.errors.max)},null)}function q(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Category is required"]))],null,null)}function G(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,2,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,q)),t.ob(2,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.f.category.errors.required)},null)}function F(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["*"]))],null,null)}function j(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Eb(2,null,[""," is required"]))],null,function(l,n){l(n,2,0,n.component.documents[n.parent.parent.context.index].docName)})}function P(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,2,"div",[["class","text-danger"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,j)),t.ob(2,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.aliases.controls[n.parent.context.index].errors.required)},null)}function T(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,13,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Eb(2,null,[" ",""])),(l()(),t.Eb(-1,null,["\xa0 "])),(l()(),t.pb(4,0,null,null,5,"input",[["class","form-control-md"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==t.xb(l,5).onChange(u.target.checked)&&e),"blur"===n&&(e=!1!==t.xb(l,5).onTouched()&&e),e},null,null)),t.ob(5,16384,null,0,s.b,[t.D,t.k],null,null),t.Cb(1024,null,s.j,function(l){return[l]},[s.b]),t.ob(7,671744,null,0,s.g,[[3,s.c],[8,null],[8,null],[6,s.j],[2,s.v]],{name:[0,"name"]},null),t.Cb(2048,null,s.k,null,[s.g]),t.ob(9,16384,null,0,s.l,[[4,s.k]],null,null),(l()(),t.gb(16777216,null,null,1,null,F)),t.ob(11,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,P)),t.ob(13,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,7,0,n.context.index),l(n,11,0,"domestic"==u.f.category.value?u.documents[n.context.index].mandatoryForDomestic:u.documents[n.context.index].mandatoryForInternational),l(n,13,0,(u.aliases.controls[n.context.index].dirty||u.aliases.controls[n.context.index].touched)&&u.aliases.controls[n.context.index].errors)},function(l,n){l(n,2,0,n.component.documents[n.context.index].docName),l(n,4,0,t.xb(n,9).ngClassUntouched,t.xb(n,9).ngClassTouched,t.xb(n,9).ngClassPristine,t.xb(n,9).ngClassDirty,t.xb(n,9).ngClassValid,t.xb(n,9).ngClassInvalid,t.xb(n,9).ngClassPending)})}function _(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,9,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Documents:"])),(l()(),t.pb(4,0,null,null,5,"div",[["formArrayName","aliases"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),t.ob(5,212992,null,0,s.e,[[3,s.c],[8,null],[8,null]],{name:[0,"name"]},null),t.Cb(2048,null,s.c,null,[s.e]),t.ob(7,16384,null,0,s.m,[[4,s.c]],null,null),(l()(),t.gb(16777216,null,null,1,null,T)),t.ob(9,278528,null,0,i.k,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,5,0,"aliases"),l(n,9,0,u.aliases.controls)},function(l,n){l(n,4,0,t.xb(n,7).ngClassUntouched,t.xb(n,7).ngClassTouched,t.xb(n,7).ngClassPristine,t.xb(n,7).ngClassDirty,t.xb(n,7).ngClassValid,t.xb(n,7).ngClassInvalid,t.xb(n,7).ngClassPending)})}function V(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"button",[["class","btn btn-primary"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.Eb(-1,null,["Update"]))],null,function(l,n){var u=n.component;l(n,1,0,u.viewOnly||!u.registerForm.valid)})}function U(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"button",[["class","btn btn-primary"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.Eb(-1,null,["Register"]))],null,function(l,n){var u=n.component;l(n,1,0,u.viewOnly||!u.registerForm.valid)})}function M(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,94,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"p",[["class","display-4"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Student Onboarding Form"])),(l()(),t.pb(3,0,null,null,91,"form",[["class","needs-validation"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,o=l.component;return"submit"===n&&(e=!1!==t.xb(l,5).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.xb(l,5).onReset()&&e),"ngSubmit"===n&&(e=!1!==o.onSubmit()&&e),e},null,null)),t.ob(4,16384,null,0,s.t,[],null,null),t.ob(5,540672,null,0,s.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Cb(2048,null,s.c,null,[s.h]),t.ob(7,16384,null,0,s.m,[[4,s.c]],null,null),(l()(),t.pb(8,0,null,null,5,"input",[["formControlName","id"],["name","id"],["type","hidden"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.xb(l,9)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.xb(l,9).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.xb(l,9)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.xb(l,9)._compositionEnd(u.target.value)&&e),e},null,null)),t.ob(9,16384,null,0,s.d,[t.D,t.k,[2,s.a]],null,null),t.Cb(1024,null,s.j,function(l){return[l]},[s.d]),t.ob(11,671744,null,0,s.g,[[3,s.c],[8,null],[8,null],[6,s.j],[2,s.v]],{name:[0,"name"]},null),t.Cb(2048,null,s.k,null,[s.g]),t.ob(13,16384,null,0,s.l,[[4,s.k]],null,null),(l()(),t.pb(14,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(15,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Student Name:"])),(l()(),t.pb(17,0,null,null,5,"input",[["class","form-control"],["formControlName","studentName"],["name","studentName"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.xb(l,18)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.xb(l,18).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.xb(l,18)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.xb(l,18)._compositionEnd(u.target.value)&&e),e},null,null)),t.ob(18,16384,null,0,s.d,[t.D,t.k,[2,s.a]],null,null),t.Cb(1024,null,s.j,function(l){return[l]},[s.d]),t.ob(20,671744,null,0,s.g,[[3,s.c],[8,null],[8,null],[6,s.j],[2,s.v]],{name:[0,"name"]},null),t.Cb(2048,null,s.k,null,[s.g]),t.ob(22,16384,null,0,s.l,[[4,s.k]],null,null),(l()(),t.gb(16777216,null,null,1,null,v)),t.ob(24,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(25,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(26,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Father Name:"])),(l()(),t.pb(28,0,null,null,5,"input",[["class","form-control"],["formControlName","fatherName"],["name","fatherName"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.xb(l,29)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.xb(l,29).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.xb(l,29)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.xb(l,29)._compositionEnd(u.target.value)&&e),e},null,null)),t.ob(29,16384,null,0,s.d,[t.D,t.k,[2,s.a]],null,null),t.Cb(1024,null,s.j,function(l){return[l]},[s.d]),t.ob(31,671744,null,0,s.g,[[3,s.c],[8,null],[8,null],[6,s.j],[2,s.v]],{name:[0,"name"]},null),t.Cb(2048,null,s.k,null,[s.g]),t.ob(33,16384,null,0,s.l,[[4,s.k]],null,null),(l()(),t.gb(16777216,null,null,1,null,y)),t.ob(35,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(36,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(37,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Mother Name:"])),(l()(),t.pb(39,0,null,null,5,"input",[["class","form-control"],["formControlName","motherName"],["name","motherName"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.xb(l,40)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.xb(l,40).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.xb(l,40)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.xb(l,40)._compositionEnd(u.target.value)&&e),e},null,null)),t.ob(40,16384,null,0,s.d,[t.D,t.k,[2,s.a]],null,null),t.Cb(1024,null,s.j,function(l){return[l]},[s.d]),t.ob(42,671744,null,0,s.g,[[3,s.c],[8,null],[8,null],[6,s.j],[2,s.v]],{name:[0,"name"]},null),t.Cb(2048,null,s.k,null,[s.g]),t.ob(44,16384,null,0,s.l,[[4,s.k]],null,null),(l()(),t.gb(16777216,null,null,1,null,w)),t.ob(46,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(47,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(48,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" DOB:"])),(l()(),t.pb(50,0,null,null,5,"input",[["class","form-control"],["formControlName","dob"],["name","dob"],["type","date"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.xb(l,51)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.xb(l,51).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.xb(l,51)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.xb(l,51)._compositionEnd(u.target.value)&&e),e},null,null)),t.ob(51,16384,null,0,s.d,[t.D,t.k,[2,s.a]],null,null),t.Cb(1024,null,s.j,function(l){return[l]},[s.d]),t.ob(53,671744,null,0,s.g,[[3,s.c],[8,null],[8,null],[6,s.j],[2,s.v]],{name:[0,"name"]},null),t.Cb(2048,null,s.k,null,[s.g]),t.ob(55,16384,null,0,s.l,[[4,s.k]],null,null),(l()(),t.gb(16777216,null,null,1,null,O)),t.ob(57,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(58,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(59,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Last Class Score: "])),(l()(),t.pb(61,0,null,null,6,"input",[["class","form-control"],["formControlName","lastClassScore"],["name","lastClassScore"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.xb(l,62)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.xb(l,62).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.xb(l,62)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.xb(l,62)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.xb(l,63).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.xb(l,63).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.xb(l,63).onTouched()&&e),e},null,null)),t.ob(62,16384,null,0,s.d,[t.D,t.k,[2,s.a]],null,null),t.ob(63,16384,null,0,s.s,[t.D,t.k],null,null),t.Cb(1024,null,s.j,function(l,n){return[l,n]},[s.d,s.s]),t.ob(65,671744,null,0,s.g,[[3,s.c],[8,null],[8,null],[6,s.j],[2,s.v]],{name:[0,"name"]},null),t.Cb(2048,null,s.k,null,[s.g]),t.ob(67,16384,null,0,s.l,[[4,s.k]],null,null),(l()(),t.gb(16777216,null,null,1,null,k)),t.ob(69,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(70,0,null,null,18,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(71,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Category:"])),(l()(),t.pb(73,0,null,null,13,"select",[["class","form-control"],["formControlName","category"],["name","category"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var e=!0,o=l.component;return"change"===n&&(e=!1!==t.xb(l,74).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.xb(l,74).onTouched()&&e),"change"===n&&(e=!1!==o.displayDocumentsList(u.target.value)&&e),e},null,null)),t.ob(74,16384,null,0,s.p,[t.D,t.k],null,null),t.Cb(1024,null,s.j,function(l){return[l]},[s.p]),t.ob(76,671744,null,0,s.g,[[3,s.c],[8,null],[8,null],[6,s.j],[2,s.v]],{name:[0,"name"]},null),t.Cb(2048,null,s.k,null,[s.g]),t.ob(78,16384,null,0,s.l,[[4,s.k]],null,null),(l()(),t.pb(79,0,null,null,3,"option",[["value","domestic"]],null,null,null,null,null)),t.ob(80,147456,null,0,s.n,[t.k,t.D,[2,s.p]],{value:[0,"value"]},null),t.ob(81,147456,null,0,s.w,[t.k,t.D,[8,null]],{value:[0,"value"]},null),(l()(),t.Eb(-1,null,["Domestic"])),(l()(),t.pb(83,0,null,null,3,"option",[["value","international"]],null,null,null,null,null)),t.ob(84,147456,null,0,s.n,[t.k,t.D,[2,s.p]],{value:[0,"value"]},null),t.ob(85,147456,null,0,s.w,[t.k,t.D,[8,null]],{value:[0,"value"]},null),(l()(),t.Eb(-1,null,["International"])),(l()(),t.gb(16777216,null,null,1,null,G)),t.ob(88,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,_)),t.ob(90,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,V)),t.ob(92,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,U)),t.ob(94,16384,null,0,i.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,5,0,u.registerForm),l(n,11,0,"id"),l(n,20,0,"studentName"),l(n,24,0,u.f.studentName.touched&&u.f.studentName.errors),l(n,31,0,"fatherName"),l(n,35,0,u.f.fatherName.touched&&u.f.fatherName.errors),l(n,42,0,"motherName"),l(n,46,0,u.f.motherName.touched&&u.f.motherName.errors),l(n,53,0,"dob"),l(n,57,0,(u.f.dob.dirty||u.f.dob.touched)&&u.f.dob.errors),l(n,65,0,"lastClassScore"),l(n,69,0,(u.f.lastClassScore.dirty||u.f.lastClassScore.touched)&&u.f.lastClassScore.errors),l(n,76,0,"category"),l(n,80,0,"domestic"),l(n,81,0,"domestic"),l(n,84,0,"international"),l(n,85,0,"international"),l(n,88,0,(u.f.category.dirty||u.f.category.touched)&&u.f.category.errors),l(n,90,0,!u.f.category.errors),l(n,92,0,u.edit),l(n,94,0,!u.edit)},function(l,n){l(n,3,0,t.xb(n,7).ngClassUntouched,t.xb(n,7).ngClassTouched,t.xb(n,7).ngClassPristine,t.xb(n,7).ngClassDirty,t.xb(n,7).ngClassValid,t.xb(n,7).ngClassInvalid,t.xb(n,7).ngClassPending),l(n,8,0,t.xb(n,13).ngClassUntouched,t.xb(n,13).ngClassTouched,t.xb(n,13).ngClassPristine,t.xb(n,13).ngClassDirty,t.xb(n,13).ngClassValid,t.xb(n,13).ngClassInvalid,t.xb(n,13).ngClassPending),l(n,17,0,t.xb(n,22).ngClassUntouched,t.xb(n,22).ngClassTouched,t.xb(n,22).ngClassPristine,t.xb(n,22).ngClassDirty,t.xb(n,22).ngClassValid,t.xb(n,22).ngClassInvalid,t.xb(n,22).ngClassPending),l(n,28,0,t.xb(n,33).ngClassUntouched,t.xb(n,33).ngClassTouched,t.xb(n,33).ngClassPristine,t.xb(n,33).ngClassDirty,t.xb(n,33).ngClassValid,t.xb(n,33).ngClassInvalid,t.xb(n,33).ngClassPending),l(n,39,0,t.xb(n,44).ngClassUntouched,t.xb(n,44).ngClassTouched,t.xb(n,44).ngClassPristine,t.xb(n,44).ngClassDirty,t.xb(n,44).ngClassValid,t.xb(n,44).ngClassInvalid,t.xb(n,44).ngClassPending),l(n,50,0,t.xb(n,55).ngClassUntouched,t.xb(n,55).ngClassTouched,t.xb(n,55).ngClassPristine,t.xb(n,55).ngClassDirty,t.xb(n,55).ngClassValid,t.xb(n,55).ngClassInvalid,t.xb(n,55).ngClassPending),l(n,61,0,t.xb(n,67).ngClassUntouched,t.xb(n,67).ngClassTouched,t.xb(n,67).ngClassPristine,t.xb(n,67).ngClassDirty,t.xb(n,67).ngClassValid,t.xb(n,67).ngClassInvalid,t.xb(n,67).ngClassPending),l(n,73,0,t.xb(n,78).ngClassUntouched,t.xb(n,78).ngClassTouched,t.xb(n,78).ngClassPristine,t.xb(n,78).ngClassDirty,t.xb(n,78).ngClassValid,t.xb(n,78).ngClassInvalid,t.xb(n,78).ngClassPending)})}function B(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"app-student-rx-form",[],null,null,null,M,p)),t.ob(1,114688,null,0,g,[s.f,b,c.a,m.a],null,null)],function(l,n){l(n,1,0)},null)}var R=t.lb("app-student-rx-form",g,B,{},{},[]),A=u("toVM"),J=function(){function l(l){this.documentsService=l}return l.prototype.resolve=function(l,n){return console.log("Inside resolver getting doc list"),this.documentsService.getDocObs()},l}(),Q=u("VQQV"),W=u("kedu"),Y=function(){return function(){}}();u.d(n,"StudentsFormModuleNgFactory",function(){return $});var $=t.mb(e,[],function(l){return t.vb([t.wb(512,t.j,t.bb,[[8,[o.a,R]],[3,t.j],t.x]),t.wb(4608,i.n,i.m,[t.u,[2,i.u]]),t.wb(4608,A.a,A.a,[c.a]),t.wb(4608,J,J,[b]),t.wb(4608,Q.a,Q.a,[m.k,W.a]),t.wb(4608,s.f,s.f,[]),t.wb(4608,s.u,s.u,[]),t.wb(1073742336,i.c,i.c,[]),t.wb(1073742336,m.m,m.m,[[2,m.s],[2,m.k]]),t.wb(1073742336,Y,Y,[]),t.wb(1073742336,s.r,s.r,[]),t.wb(1073742336,s.o,s.o,[]),t.wb(1073742336,s.i,s.i,[]),t.wb(1073742336,e,e,[]),t.wb(1024,m.i,function(){return[[{path:"",component:g,resolve:{studentsList:A.a,documentsList:J},canActivate:[Q.a]}]]},[])])})}}]);