(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7UCR":function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),c=n("fXoL"),r=n("tyNb"),o=n("Ouoq"),s=n("6uu6"),a=n("0IaG"),b=n("3Pt+"),l=n("kmnG"),d=n("qFsG"),u=n("bTqV");function f(e,t){if(1&e){const e=c.Tb();c.Sb(0,"div",2),c.Sb(1,"div",3),c.Sb(2,"h2"),c.vc(3,"My Profile"),c.Rb(),c.Rb(),c.Sb(4,"form",null,4),c.Sb(6,"div",5),c.Sb(7,"mat-form-field",6),c.Sb(8,"mat-label"),c.vc(9,"Email"),c.Rb(),c.Sb(10,"input",7),c.ac("ngModelChange",(function(t){return c.mc(e),c.cc().myProfile.email=t})),c.Rb(),c.Rb(),c.Sb(11,"mat-form-field",6),c.Sb(12,"mat-label"),c.vc(13," Username "),c.Rb(),c.Sb(14,"input",8),c.ac("ngModelChange",(function(t){return c.mc(e),c.cc().myProfile.username=t})),c.Rb(),c.Rb(),c.Sb(15,"mat-form-field",6),c.Sb(16,"mat-label"),c.vc(17,"Password"),c.Rb(),c.Ob(18,"input",9),c.Rb(),c.Sb(19,"mat-form-field",6),c.Sb(20,"mat-label"),c.vc(21,"Bio"),c.Rb(),c.Sb(22,"input",10),c.ac("ngModelChange",(function(t){return c.mc(e),c.cc().myProfile.bio=t})),c.Rb(),c.Rb(),c.Sb(23,"mat-form-field",6),c.Sb(24,"mat-label"),c.vc(25,"Avatar"),c.Rb(),c.Sb(26,"input",11),c.ac("ngModelChange",(function(t){return c.mc(e),c.cc().myProfile.image=t})),c.Rb(),c.Rb(),c.Rb(),c.Sb(27,"small"),c.vc(28,"Profile is public with other user..."),c.Rb(),c.Sb(29,"div",12),c.Sb(30,"button",13),c.ac("click",(function(){c.mc(e);const t=c.lc(5);return c.cc().updateProfile(t.value)})),c.Ob(31,"i",14),c.Rb(),c.Rb(),c.Rb(),c.Rb()}if(2&e){const e=c.lc(5),t=c.cc();c.Bb(10),c.hc("ngModel",t.myProfile.email),c.Bb(4),c.hc("ngModel",t.myProfile.username),c.Bb(8),c.hc("ngModel",t.myProfile.bio),c.Bb(4),c.hc("ngModel",t.myProfile.image),c.Bb(4),c.hc("disabled",e.invalid)}}function g(e,t){1&e&&(c.Sb(0,"div",15),c.Sb(1,"div",16),c.Ob(2,"div"),c.Ob(3,"div"),c.Ob(4,"div"),c.Rb(),c.Rb())}let h=(()=>{class e{constructor(e,t,n,i){this.userService=e,this.authService=t,this.dialogRef=n,this.router=i}ngOnInit(){this.subcribe=this.authService.currentUser.subscribe(e=>{this.myProfile=e.user})}updateProfile(e){this.isUpdate=!0,this.userService.editProfileUser(e).subscribe(e=>{this.userService.userAfterchange.next(e.user.username),this.router.navigate(["/user",e.user.username]),this.dialogRef.close(),this.isUpdate=!1})}ngOnDestroy(){this.subcribe.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(o.a),c.Nb(s.a),c.Nb(a.e),c.Nb(r.b))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-edit-profile"]],decls:3,vars:2,consts:[["class","main-edit",4,"ngIf","ngIfElse"],["spinner",""],[1,"main-edit"],[1,"edit-header","text-center"],["form","ngForm"],[1,"edit-body"],["appearance","outline"],["type","text","matInput","","name","email","email","","required","",3,"ngModel","ngModelChange"],["type","text","matInput","","name","username","required","",3,"ngModel","ngModelChange"],["type","password","matInput","","name","password","ngModel",""],["type","text","matInput","","name","bio",3,"ngModel","ngModelChange"],["type","text","matInput","","name","image",3,"ngModel","ngModelChange"],[1,"edit-footer","text-center"],["mat-mini-fab","","color","primary",3,"disabled","click"],[1,"far","fa-check-circle"],[1,"spin"],[1,"lds-facebook"]],template:function(e,t){if(1&e&&(c.tc(0,f,32,5,"div",0),c.tc(1,g,5,0,"ng-template",null,1,c.uc)),2&e){const e=c.lc(2);c.hc("ngIf",!t.isUpdate)("ngIfElse",e)}},directives:[i.j,b.k,b.g,b.h,l.a,l.d,d.a,b.a,b.b,b.j,b.f,b.i,u.a],styles:[".main-edit[_ngcontent-%COMP%]   .edit-header[_ngcontent-%COMP%]{color:#3f51b5;margin-bottom:3%}.main-edit[_ngcontent-%COMP%]   .edit-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 auto;border-bottom:3px dashed #000;width:30%;padding:2px}.main-edit[_ngcontent-%COMP%]   .edit-body[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.main-edit[_ngcontent-%COMP%]   .edit-body[_ngcontent-%COMP%], .spin[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.spin[_ngcontent-%COMP%]{height:80vh;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}button[_ngcontent-%COMP%]{outline:none}mat-label[_ngcontent-%COMP%]{color:#3f51b5;font-weight:500}"]}),e})();function p(e,t){if(1&e){const e=c.Tb();c.Sb(0,"div",9),c.ac("click",(function(){return c.mc(e),c.cc().openEditUser()})),c.Ob(1,"i",10),c.Rb()}}function m(e,t){if(1&e){const e=c.Tb();c.Sb(0,"div",9),c.ac("click",(function(){return c.mc(e),c.cc().followUser()})),c.Ob(1,"i",11),c.Rb()}}function v(e,t){if(1&e){const e=c.Tb();c.Sb(0,"div",9),c.ac("click",(function(){return c.mc(e),c.cc().unFollowUser()})),c.Ob(1,"i",12),c.Rb()}}let w=(()=>{class e{constructor(e,t,n){this.userService=e,this.authService=t,this.dialog=n,this.isMyAccount=!1}ngOnInit(){this.userService.userAfterchange.subscribe(e=>{this.username=e,this.userService.getProfile(this.username).subscribe(e=>{this.follow=e.profile.following,this.userProfile=e,this.isMyAccount=this.userProfile.profile.username===this.myAccount})}),this.subcribe=this.authService.currentUser.subscribe(e=>{var t;this.myAccount=null===(t=e)||void 0===t?void 0:t.user.username})}ngOnChanges(){this.userService.getProfile(this.username).subscribe(e=>{this.follow=e.profile.following,this.userProfile=e,this.isMyAccount=this.userProfile.profile.username===this.myAccount})}openEditUser(){this.dialog.open(h,{width:"60vw",height:"80vh"}).afterClosed().subscribe(()=>{this.userService.getProfile(this.username).subscribe(e=>{this.userProfile=e})})}followUser(){this.userService.follow(this.username).subscribe(()=>{this.follow=!0})}unFollowUser(){this.userService.unfollow(this.username).subscribe(()=>{this.follow=!1})}ngOnDestroy(){this.subcribe.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(o.a),c.Nb(s.a),c.Nb(a.b))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-user-cover"]],inputs:{username:"username"},features:[c.zb],decls:14,vars:7,consts:[[1,"main-cover"],[1,"triangle"],[1,"circle"],[1,"rectangle"],[1,"circle-rec"],["class","cir-edit",3,"click",4,"ngIf"],[1,"rectangle-2"],[1,"name"],[1,"bio"],[1,"cir-edit",3,"click"],[1,"fas","fa-cogs"],[1,"fas","fa-bell"],[1,"fas","fa-bell-slash"]],template:function(e,t){1&e&&(c.Sb(0,"div",0),c.Sb(1,"div",0),c.Ob(2,"div",1),c.Ob(3,"div",2),c.Sb(4,"div",3),c.Sb(5,"div",4),c.tc(6,p,2,0,"div",5),c.tc(7,m,2,0,"div",5),c.tc(8,v,2,0,"div",5),c.Rb(),c.Rb(),c.Sb(9,"div",6),c.Sb(10,"div",7),c.vc(11),c.Rb(),c.Sb(12,"div",8),c.vc(13),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&e&&(c.Bb(5),c.rc("background-image:url("+(null==t.userProfile?null:t.userProfile.profile.image)+");"),c.Bb(1),c.hc("ngIf",t.isMyAccount),c.Bb(1),c.hc("ngIf",!t.isMyAccount&&0==t.follow),c.Bb(1),c.hc("ngIf",!t.isMyAccount&&1==t.follow),c.Bb(3),c.wc(null==t.userProfile?null:t.userProfile.profile.username),c.Bb(2),c.wc(null==t.userProfile?null:t.userProfile.profile.bio))},directives:[i.j],styles:[".main-cover[_ngcontent-%COMP%]{background-color:#ee484f;position:relative;height:100vh;overflow:hidden}.main-cover[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%]{width:0;height:0;border-left:35vw solid transparent;border-right:35vw solid transparent;border-bottom:100vh solid #fff}.main-cover[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{position:absolute;width:100vw;height:150vh;color:#fff;background-color:#fff;border-radius:50%;top:-30%;left:-30%}.main-cover[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]{position:absolute;width:60vw;height:100vh;background-color:#fff;top:0;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.circle-rec[_ngcontent-%COMP%]{width:67%;height:75%;border-radius:50%;border:3px dashed #ee484f;position:relative;margin-top:10px;background-size:cover;background-origin:content-box;background-position:50%;background-repeat:no-repeat}.cir-edit[_ngcontent-%COMP%]{position:absolute;width:15%;height:15%;border-radius:50%;border:2px dashed #ee484f;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;bottom:10%;right:5%;background-color:#f0757c;color:#fff;font-size:1.5em}.cir-edit[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#e4575e;-webkit-transition:all .5s;transition:all .5s;color:#f5eaea}.main-cover[_ngcontent-%COMP%]   .rectangle-2[_ngcontent-%COMP%]{position:absolute;width:30vw;height:100vh;top:0;right:0}.main-cover[_ngcontent-%COMP%]   .rectangle-2[_ngcontent-%COMP%], .rectangle-2[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.rectangle-2[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.rectangle-2[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#fff;font-weight:700;font-size:2.5em;margin-bottom:5px;line-height:1.2}.rectangle-2[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%], .rectangle-2[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{word-wrap:break-word;text-align:center}@media screen and (max-width:480px) and (min-width:100px){.circle-rec[_ngcontent-%COMP%]{width:100%;height:35%;margin-left:10%}.main-cover[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%]{display:none}.main-cover[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]{height:85vh;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.rectangle-2[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:1.5em;margin-bottom:70px}.rectangle-2[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]{margin-bottom:30px}}@media screen and (max-width:768px) and (min-width:481px){.circle-rec[_ngcontent-%COMP%]{width:67%;height:30%;margin-left:10%;margin-top:60%}.rectangle-2[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]{padding-bottom:50%}}@media screen and (max-width:1400px) and (min-width:769px){.circle-rec[_ngcontent-%COMP%]{width:66%;height:40%;margin-top:35%}}"]}),e})();var O=n("wZkO"),P=n("9Dvx");function x(e,t){if(1&e&&c.Ob(0,"app-article",9),2&e){const e=c.cc(2);c.hc("articles",e.articles)}}function C(e,t){if(1&e){const e=c.Tb();c.Qb(0),c.tc(1,x,1,1,"app-article",2),c.Sb(2,"div",3),c.Sb(3,"div",4),c.Sb(4,"button",5),c.ac("click",(function(){return c.mc(e),c.cc().back()})),c.Ob(5,"i",6),c.Rb(),c.Sb(6,"button",7),c.vc(7),c.Rb(),c.Sb(8,"button",5),c.ac("click",(function(){return c.mc(e),c.cc().next()})),c.Ob(9,"i",8),c.Rb(),c.Rb(),c.Rb(),c.Pb()}if(2&e){const e=c.cc();c.Bb(1),c.hc("ngIf",e.articles),c.Bb(3),c.hc("disabled",0==e.show?"disabled":""),c.Bb(3),c.wc(e.show+1),c.Bb(1),c.hc("disabled",e.show>e.endPage-1?"disabled":"")}}function M(e,t){1&e&&(c.Sb(0,"div",10),c.Sb(1,"div",11),c.Ob(2,"div"),c.Ob(3,"div"),c.Ob(4,"div"),c.Rb(),c.Rb())}let S=(()=>{class e{constructor(e){this.userService=e,this.show=0}ngOnInit(){this.subcribe=this.userService.userAfterchange.subscribe(e=>{this.userService.myArticle(e).subscribe(e=>{this.articles=e.articles,this.endPage=Math.floor(e.articlesCount/20)})})}ngOnChanges(){this.userService.myArticle(this.username).subscribe(e=>{this.articles=e.articles,this.endPage=Math.floor(e.articlesCount/20)})}next(){this.show+=1,this.articles=void 0,this.userService.getFavoriteArticle(this.username,20*this.show+"").subscribe(e=>{this.articles=e.articles})}back(){this.show-=1,this.articles=void 0,this.userService.getFavoriteArticle(this.username,20*this.show+"").subscribe(e=>{this.articles=e.articles})}ngOnDestroy(){this.subcribe.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(o.a))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-my-articles"]],inputs:{username:"username"},features:[c.zb],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["spiner",""],[3,"articles",4,"ngIf"],[1,"buttonContainer"],[1,"pagination"],[1,"fnBtn",3,"disabled","click"],[1,"fas","fa-backward"],[1,"page"],[1,"fas","fa-forward"],[3,"articles"],[1,"spinner"],[1,"lds-facebook"]],template:function(e,t){if(1&e&&(c.tc(0,C,10,4,"ng-container",0),c.tc(1,M,5,0,"ng-template",null,1,c.uc)),2&e){const e=c.lc(2);c.hc("ngIf",t.articles)("ngIfElse",e)}},directives:[i.j,P.a],styles:[""]}),e})();function y(e,t){if(1&e&&c.Ob(0,"app-article",9),2&e){const e=c.cc(2);c.hc("articles",e.articles)}}function k(e,t){if(1&e){const e=c.Tb();c.Qb(0),c.tc(1,y,1,1,"app-article",2),c.Sb(2,"div",3),c.Sb(3,"div",4),c.Sb(4,"button",5),c.ac("click",(function(){return c.mc(e),c.cc().back()})),c.Ob(5,"i",6),c.Rb(),c.Sb(6,"button",7),c.vc(7),c.Rb(),c.Sb(8,"button",5),c.ac("click",(function(){return c.mc(e),c.cc().next()})),c.Ob(9,"i",8),c.Rb(),c.Rb(),c.Rb(),c.Pb()}if(2&e){const e=c.cc();c.Bb(1),c.hc("ngIf",e.articles),c.Bb(3),c.hc("disabled",0==e.show?"disabled":""),c.Bb(3),c.wc(e.show+1),c.Bb(1),c.hc("disabled",e.show>e.endPage-1?"disabled":"")}}function _(e,t){1&e&&(c.Sb(0,"div",10),c.Sb(1,"div",11),c.Ob(2,"div"),c.Ob(3,"div"),c.Ob(4,"div"),c.Rb(),c.Rb())}let R=(()=>{class e{constructor(e){this.userService=e,this.show=0}ngOnInit(){this.userService.getFavoriteArticle(this.username).subscribe(e=>{this.articles=e.articles,this.endPage=Math.floor(e.articlesCount/20)})}ngOnChanges(){this.userService.getFavoriteArticle(this.username).subscribe(e=>{this.articles=e.articles,this.endPage=Math.floor(e.articlesCount/20)})}next(){this.show+=1,this.articles=void 0,this.userService.getFavoriteArticle(this.username,20*this.show+"").subscribe(e=>{this.articles=e.articles})}back(){this.show-=1,this.articles=void 0,this.userService.getFavoriteArticle(this.username,20*this.show+"").subscribe(e=>{this.articles=e.articles})}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(o.a))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-favorite-articles"]],inputs:{username:"username"},features:[c.zb],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["spiner",""],[3,"articles",4,"ngIf"],[1,"buttonContainer"],[1,"pagination"],[1,"fnBtn",3,"disabled","click"],[1,"fas","fa-backward"],[1,"page"],[1,"fas","fa-forward"],[3,"articles"],[1,"spinner"],[1,"lds-facebook"]],template:function(e,t){if(1&e&&(c.tc(0,k,10,4,"ng-container",0),c.tc(1,_,5,0,"ng-template",null,1,c.uc)),2&e){const e=c.lc(2);c.hc("ngIf",t.articles)("ngIfElse",e)}},directives:[i.j,P.a],styles:[""]}),e})();var I=n("UQPd");function B(e,t){if(1&e){const e=c.Tb();c.Sb(0,"button",3),c.ac("click",(function(){return c.mc(e),c.cc().searchFriend()})),c.vc(1," Load Follower's List "),c.Rb()}}function A(e,t){1&e&&(c.Qb(0),c.Sb(1,"div",4),c.Sb(2,"div",5),c.Ob(3,"div"),c.Ob(4,"div"),c.Ob(5,"div"),c.Rb(),c.Rb(),c.Pb())}const j=function(e){return["/user",e]};function F(e,t){if(1&e&&(c.Sb(0,"div",8),c.Sb(1,"div",9),c.Ob(2,"img",10),c.Rb(),c.Sb(3,"div",11),c.Sb(4,"h2"),c.vc(5),c.Ob(6,"br"),c.Sb(7,"span",12),c.vc(8," Don't know me? Click! "),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&e){const e=t.$implicit;c.Bb(5),c.xc(" ",e,""),c.Bb(2),c.hc("routerLink",c.ic(2,j,e))}}function U(e,t){if(1&e&&(c.Qb(0),c.Sb(1,"h1"),c.vc(2,"Here is what we've got for you!"),c.Rb(),c.Sb(3,"div",6),c.tc(4,F,9,4,"div",7),c.Rb(),c.Pb()),2&e){const e=c.cc();c.Bb(4),c.hc("ngForOf",e.follower)}}let N=(()=>{class e{constructor(e){this.articleService=e,this.offset=0,this.name=[],this.loading=!1}ngOnInit(){}searchFriend(){this.loading=!0,this.articleService.getFeed(10*this.offset+"").subscribe(e=>{this.offset+=1,this.feed=e,this.feed.articles.forEach(e=>{this.name.push(e.author.username)}),this.name.length<e.articlesCount?this.searchFriend():(this.follower=new Set(this.name),this.loading=!1)})}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(I.a))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-follower"]],decls:4,vars:3,consts:[[1,"btnContainer"],["mat-flat-button","","color","warn",3,"click",4,"ngIf"],[4,"ngIf"],["mat-flat-button","","color","warn",3,"click"],[1,"spinner"],[1,"lds-facebook"],[1,"cardContainer"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"imgBx"],["src","https://pbs.twimg.com/profile_images/1085199662938767360/GDqyN9Qt_400x400.jpg"],[1,"details"],[3,"routerLink"]],template:function(e,t){1&e&&(c.Sb(0,"div",0),c.tc(1,B,2,0,"button",1),c.Rb(),c.tc(2,A,6,0,"ng-container",2),c.tc(3,U,5,1,"ng-container",2)),2&e&&(c.Bb(1),c.hc("ngIf",null==t.follower),c.Bb(1),c.hc("ngIf",t.loading),c.Bb(1),c.hc("ngIf",t.follower))},directives:[i.j,u.a,i.i,r.c],styles:['.cardContainer[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:5px;-webkit-animation:fade 1s;animation:fade 1s;padding:10px}.btnContainer[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}h1[_ngcontent-%COMP%]{text-align:center}.card[_ngcontent-%COMP%]{position:relative;max-width:300px;height:350px;margin:0 auto;box-shadow:0 2px 10px rgba(0,0,0,.2)}.card[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]:after, .card[_ngcontent-%COMP%]:before{width:100%;background:#fff;border-radius:4px}.card[_ngcontent-%COMP%]:after, .card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;height:100%;-webkit-transition:.5s;transition:.5s;z-index:-1}.card[_ngcontent-%COMP%]:hover:before{-webkit-transform:rotate(20deg);transform:rotate(20deg);box-shadow:0 2px 20px rgba(0,0,0,.2)}.card[_ngcontent-%COMP%]:hover:after{-webkit-transform:rotate(10deg);transform:rotate(10deg);box-shadow:0 2px 20px rgba(0,0,0,.2)}.card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]{position:absolute;top:10px;left:10px;bottom:10px;right:10px;background:#222;-webkit-transition:.5s;transition:.5s;z-index:1}.card[_ngcontent-%COMP%]:hover   .imgBx[_ngcontent-%COMP%]{bottom:80px}.card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{position:absolute;left:10px;right:10px;bottom:10px;height:60px;text-align:center}.card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;padding:0;font-weight:600;font-size:20px;color:#777;text-transform:uppercase}.card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;font-size:16px;color:#f38695;display:block;margin-top:5px}@media only screen and (max-width:600px){.cardContainer[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.card[_ngcontent-%COMP%]{width:220px;height:250px}}@media only screen and (max-width:470px){.cardContainer[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr}}']}),e})();function E(e,t){1&e&&(c.Sb(0,"mat-tab",10),c.Ob(1,"app-follower"),c.Rb())}function z(e,t){if(1&e&&(c.Sb(0,"div",2),c.Ob(1,"app-user-cover",3),c.Sb(2,"div",4),c.Sb(3,"div",5),c.Sb(4,"mat-tab-group",6),c.Sb(5,"mat-tab",7),c.Ob(6,"app-my-articles",3),c.Rb(),c.Sb(7,"mat-tab",8),c.Ob(8,"app-favorite-articles",3),c.Rb(),c.tc(9,E,2,0,"mat-tab",9),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&e){const e=c.cc();c.Bb(1),c.hc("username",e.user),c.Bb(5),c.hc("username",e.user),c.Bb(2),c.hc("username",e.user),c.Bb(1),c.hc("ngIf",e.user===e.currentUser.user.username)}}function L(e,t){1&e&&(c.Sb(0,"div",11),c.Sb(1,"div",12),c.Ob(2,"div"),c.Ob(3,"div"),c.Ob(4,"div"),c.Rb(),c.Rb())}let T=(()=>{class e{constructor(e,t,n){this.actived=e,this.userService=t,this.authService=n}ngOnInit(){this.isLoading=!0,this.subcribeRouter=this.actived.params.subscribe(e=>{this.user=e.username,this.userService.userAfterchange.next(this.user),setTimeout(()=>{this.isLoading=!1},1e3)}),this.subcribeSubject=this.authService.currentUser.subscribe(e=>{this.currentUser=e})}ngOnDestroy(){this.subcribeRouter.unsubscribe(),this.subcribeSubject.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(r.a),c.Nb(o.a),c.Nb(s.a))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-user-profile"]],decls:3,vars:2,consts:[["class","main-profile",4,"ngIf","ngIfElse"],["spin",""],[1,"main-profile"],[3,"username"],[1,"contentContainer"],[1,"article"],[2,"box-shadow","3px 5px 15px -7px rgba(0, 0, 0, 0.75)","height","100vh"],["label","My Articles"],["label","Favorite Articles"],["label","Follower",4,"ngIf"],["label","Follower"],[1,"d-flex","justify-content-center"],[1,"lds-facebook"]],template:function(e,t){if(1&e&&(c.tc(0,z,10,4,"div",0),c.tc(1,L,5,0,"ng-template",null,1,c.uc)),2&e){const e=c.lc(2);c.hc("ngIf",!t.isLoading)("ngIfElse",e)}},directives:[i.j,w,O.b,O.a,S,R,N],styles:[".contentContainer[_ngcontent-%COMP%]{-webkit-animation:fade 2s;animation:fade 2s;padding:0 10%}@media only screen and (max-width:765px){mat-tab-group[_ngcontent-%COMP%]{box-shadow:3px 5px 25px -7px rgba(0,0,0,.2);width:100vw}.contentContainer[_ngcontent-%COMP%]{-webkit-animation:fade 2s;animation:fade 2s;padding:0}}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),e})();const H=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Hb({type:e,selectors:[["app-user"]],decls:1,vars:0,template:function(e,t){1&e&&c.Ob(0,"app-user-profile")},directives:[T],styles:["*[_ngcontent-%COMP%]{overflow:auto}"]}),e})()}];let D=(()=>{class e{}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(t){return new(t||e)},imports:[[r.e.forChild(H)],r.e]}),e})();var q=n("PCNd"),Q=n("hctd");n.d(t,"UserModule",(function(){return G}));let G=(()=>{class e{}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(t){return new(t||e)},imports:[[i.b,D,q.a,Q.a,b.d]]}),e})()}}]);