"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[943],{7943:(Z,c,n)=>{n.r(c),n.d(c,{ExerciceModule:()=>i});var d=n(6895),t=n(433),s=n(7163),e=n(1571);class m{transform(o,...a){return JSON.stringify(o,null,2).replace(/ /g,"&nbsp;").replace(/\n/g,"<br/>")}}m.\u0275fac=function(o){return new(o||m)},m.\u0275pipe=e.Yjl({name:"prettyjson",type:m,pure:!0});class u{constructor(o){this.fb=o,this.exampleForm=this.fb.group({name:[""],releaseDate:[""],franchise:[!1],summary:[""],boxoffice:this.fb.group({budget:[0],worldwide:[0],international:[0],domestic:[0]})})}ngOnInit(){this.updateControls()}updateControls(){this.exampleForm.patchValue({name:"Avengers: Endgame",releaseDate:"26/04/2019",franchise:!0,summary:"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.",boxoffice:{budget:356e6,worldwide:2797800564,domestic:858373e3,international:1939427564}})}resetControls(){this.exampleForm.patchValue({name:null,releaseDate:null,franchise:!1,summary:null,boxoffice:{budget:null,worldwide:null,domestic:null,international:null}})}}u.\u0275fac=function(o){return new(o||u)(e.Y36(t.qu))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-form-builder-nested"]],decls:61,vars:7,consts:[[1,"card"],[1,"card-body"],[1,"row"],[1,"col-7"],[1,"card-title","text-center","text-info"],[3,"formGroup"],[1,"form-row"],[1,"form-group","col-md-9"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],[1,"form-group","col-md-3"],["for","releaseDate"],["type","text","id","releaseDate","formControlName","releaseDate",1,"form-control"],[1,"form-group","col-md-12"],["for","summary"],["id","summary","rows","2","formControlName","summary",1,"form-control"],[1,"form-group"],[1,"form-check"],["type","checkbox","id","franchise","formControlName","franchise",1,"form-check-input"],["for","franchise",1,"form-check-label"],[1,"card","p-4","mb-4"],["formGroupName","boxoffice",1,"form-row"],["for","budget"],["type","text","id","budget","formControlName","budget",1,"form-control"],["for","international"],["type","text","id","budget","formControlName","international",1,"form-control"],["for","domestic"],["type","text","id","budget","formControlName","domestic",1,"form-control"],["for","worldwide"],["type","text","id","worldwide","formControlName","worldwide",1,"form-control"],["type","submit",1,"btn","btn-info","mr-2",3,"click"],[1,"col-5"],[3,"innerHTML"]],template:function(o,a){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),e._uU(5,"Nested FormBuilder"),e.qZA(),e.TgZ(6,"form",5)(7,"div",6)(8,"div",7)(9,"label",8),e._uU(10,"Name"),e.qZA(),e._UZ(11,"input",9),e.qZA(),e.TgZ(12,"div",10)(13,"label",11),e._uU(14,"Date"),e.qZA(),e._UZ(15,"input",12),e.qZA()(),e.TgZ(16,"div",6)(17,"div",13)(18,"label",14),e._uU(19,"Summary"),e.qZA(),e._UZ(20,"textarea",15),e.qZA()(),e.TgZ(21,"div",16)(22,"div",17),e._UZ(23,"input",18),e.TgZ(24,"label",19),e._uU(25," Franchise "),e.qZA()()(),e.TgZ(26,"div",20)(27,"h5",4),e._uU(28,"Nested Controls"),e.qZA(),e.TgZ(29,"div",21)(30,"div",10)(31,"label",22),e._uU(32,"Budget"),e.qZA(),e._UZ(33,"input",23),e.qZA(),e.TgZ(34,"div",10)(35,"label",24),e._uU(36,"International"),e.qZA(),e._UZ(37,"input",25),e.qZA(),e.TgZ(38,"div",10)(39,"label",26),e._uU(40,"Domestic"),e.qZA(),e._UZ(41,"input",27),e.qZA(),e.TgZ(42,"div",10)(43,"label",28),e._uU(44,"Worlwide"),e.qZA(),e._UZ(45,"input",29),e.qZA()()(),e.TgZ(46,"button",30),e.NdJ("click",function(){return a.resetControls()}),e._uU(47,"Reset Controls"),e.qZA(),e.TgZ(48,"button",30),e.NdJ("click",function(){return a.updateControls()}),e._uU(49,"Update Controls"),e.qZA()()(),e.TgZ(50,"div",31)(51,"h5",4),e._uU(52,"Nested FormBuilder Results"),e.qZA(),e.TgZ(53,"strong"),e._uU(54,"Form Value"),e.qZA(),e._UZ(55,"div",32),e.ALo(56,"prettyjson"),e.TgZ(57,"strong"),e._uU(58,"Nested Controls Value"),e.qZA(),e._UZ(59,"div",32),e.ALo(60,"prettyjson"),e.qZA()()()()),2&o&&(e.xp6(6),e.Q6J("formGroup",a.exampleForm),e.xp6(49),e.Q6J("innerHTML",e.lcZ(56,3,a.exampleForm.value),e.oJD),e.xp6(4),e.Q6J("innerHTML",e.lcZ(60,5,a.exampleForm.value.boxoffice),e.oJD))},dependencies:[t._Y,t.Fj,t.Wl,t.JJ,t.JL,t.sg,t.u,t.x0,m]});const f=[{path:"",component:u,children:[]}];class l{}l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[s.Bz.forChild(f),s.Bz]});class i{}i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.ez,l,t.u5,t.UX]})}}]);