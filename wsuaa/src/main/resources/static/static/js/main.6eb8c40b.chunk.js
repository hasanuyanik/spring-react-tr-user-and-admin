(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{50:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(21),s=a.n(r),c=(a(50),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,83)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))}),i=a(3),o=a(9),l=a.n(o),u=function(e,t){var a=Object(n.useState)(!1),r=Object(i.a)(a,2),s=r[0],c=r[1];return Object(n.useEffect)((function(){var a,n,r=function(a,n,r){n.startsWith(t)&&a==e&&c(r)};return a=l.a.interceptors.request.use((function(e){var t=e.url,a=e.method;return r(a,t,!0),e})),n=l.a.interceptors.response.use((function(e){var t=e.config,a=t.url,n=t.method;return r(n,a,!1),e}),(function(e){var t=e.config,a=t.url,n=t.method;throw r(n,a,!1),e})),function(){l.a.interceptors.request.eject(a),l.a.interceptors.response.eject(n)}}),[t,e]),s},d=a(2),j=a.n(d),b=a(7),p=a(17),m=a(4),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return l.a.get("/api/1.0/users?page=".concat(e,"&size=").concat(t))},f=function(e){var t=e.isLoggedIn,a=e.token;if(t){var n="Bearer ".concat(a);l.a.defaults.headers.Authorization=n}else delete l.a.defaults.headers.Authorization},h=function(e){return l.a.get("/api/1.0/users/".concat(e))},v=function(e,t){return l.a.put("/api/1.0/users/".concat(e),t)},x=function(e){return l.a.delete("/api/1.0/users/".concat(e))},g=a(0),N=function(e){var t=e.label,a=e.error,n=e.name,r=e.onChange,s=e.type,c=e.defaultValue,i="form-control";return"file"==s&&(i+="-file"),void 0!=a&&(i+=" is-invalid"),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:t}),Object(g.jsx)("input",{className:i,name:n,onChange:r,type:s,defaultValue:c}),Object(g.jsx)("div",{className:"invalid-feedback",children:a})]})},w=a(82),y=function(e){var t=e.onClick,a=e.pendingApiCall,n=e.disabled,r=e.text,s=e.className;return Object(g.jsxs)("button",{className:s||"btn btn-primary",onClick:t,disabled:n,children:[a&&Object(g.jsx)("span",{className:"spinner-border spinner-border-sm"}),r]})},k=a(8),C="logout-success",S="login-success",L="update-success",E=function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post("/api/1.0/logout");case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:t({type:C});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},A=function(e){return{type:S,payload:e}},P=function(e){var t=e.displayName,a=e.image;return{type:L,payload:{displayName:t,image:a}}},U=function(e){return function(){var t=Object(b.a)(j.a.mark((function t(a){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s=e,l.a.post("/api/1.0/auth",s);case 2:return n=t.sent,r=Object(m.a)(Object(m.a)({},n.data.user),{},{role:"user",password:e.password,token:n.data.token}),a(A(r)),t.abrupt("return",n);case 6:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(b.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r=e,l.a.post("/api/1.0/users",r);case 2:return n=t.sent,a(U(e)),t.abrupt("return",n);case 5:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},F=function(e){return function(){var t=Object(b.a)(j.a.mark((function t(a){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s=e,l.a.post("/api/1.0/admin/auth",s);case 2:return n=t.sent,r=Object(m.a)(Object(m.a)({},n.data.admin),{},{role:"admin",password:e.password,token:n.data.token}),a(A(r)),t.abrupt("return",n);case 6:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(b.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r=e,l.a.post("/api/1.0/admin",r);case 2:return n=t.sent,a(F(e)),t.abrupt("return",n);case 5:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},R=function(e){var t,a=Object(n.useState)({username:null,displayName:null,password:null,passwordRepeat:null}),r=Object(i.a)(a,2),s=r[0],c=r[1],o=Object(n.useState)({}),l=Object(i.a)(o,2),d=l[0],O=l[1],f=Object(k.b)(),h=function(e){var t=e.target,a=t.name,n=t.value;O((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(p.a)({},a,void 0))})),c((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(p.a)({},a,n))}))},v=function(){var t=Object(b.a)(j.a.mark((function t(a){var n,r,c,i,o,l;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.history,r=n.push,c=s.username,i=s.displayName,o=s.password,l={username:c,displayName:i,password:o},t.prev=5,t.next=8,f(D(l));case 8:r("/"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),t.t0.response.data.validationErrors&&O(t.t0.response.data.validationErrors);case 14:case"end":return t.stop()}}),t,null,[[5,11]])})));return function(e){return t.apply(this,arguments)}}(),x=Object(w.a)().t,C=d.username,S=d.displayName,L=d.password,E=u("post","/api/1.0/users"),A=u("post","/api/1.0/auth"),P=E||A;return s.password!=s.passwordRepeat&&(t=x("Password mismatch")),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("form",{children:[Object(g.jsx)("h1",{className:"text-center",children:x("Sign Up")}),Object(g.jsx)(N,{name:"username",label:x("Username"),error:C,onChange:h}),Object(g.jsx)(N,{name:"displayName",label:x("Display Name"),error:S,onChange:h}),Object(g.jsx)(N,{name:"password",label:x("Password"),error:L,onChange:h,type:"password"}),Object(g.jsx)(N,{name:"passwordRepeat",label:x("Password Repeat"),error:t,onChange:h,type:"password"}),Object(g.jsx)("div",{className:"form-group text-center",children:Object(g.jsx)(y,{onClick:v,disabled:P||void 0!=t,pendingApiCall:P,text:x("Sign Up")})})]})})},z=function(e){var t=Object(n.useState)(),a=Object(i.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(),o=Object(i.a)(c,2),l=o[0],d=o[1],p=Object(n.useState)(),m=Object(i.a)(p,2),O=m[0],f=m[1],h=Object(k.b)();Object(n.useEffect)((function(){f(void 0)}),[r,l]);var v=function(){var t=Object(b.a)(j.a.mark((function t(a){var n,s,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={username:r,password:l},s=e.history,c=s.push,f(void 0),t.prev=5,t.next=8,h(U(n));case 8:c("/"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),f(t.t0.response.data.message);case 14:case"end":return t.stop()}}),t,null,[[5,11]])})));return function(e){return t.apply(this,arguments)}}(),x=Object(w.a)().t,C=u("post","/api/1.0/auth"),S=r&&l;return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("form",{children:[Object(g.jsx)("h1",{className:"text-center",children:x("Login")}),Object(g.jsx)(N,{label:x("Username"),onChange:function(e){return s(e.target.value)}}),Object(g.jsx)(N,{label:x("Password"),onChange:function(e){return d(e.target.value)},type:"password"}),O&&Object(g.jsx)("div",{className:"alert alert-danger",children:O}),Object(g.jsx)("div",{className:"form-group text-center",children:Object(g.jsx)(y,{onClick:v,disabled:!S||C,pendingApiCall:C,text:x("Login")})})]})})},M=function(e){var t,a=Object(n.useState)({username:null,password:null,passwordRepeat:null}),r=Object(i.a)(a,2),s=r[0],c=r[1],o=Object(n.useState)({}),l=Object(i.a)(o,2),d=l[0],O=l[1],f=Object(k.b)(),h=function(e){var t=e.target,a=t.name,n=t.value;O((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(p.a)({},a,void 0))})),c((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(p.a)({},a,n))}))},v=function(){var t=Object(b.a)(j.a.mark((function t(a){var n,r,c,i,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.history,r=n.push,c=s.username,i=s.password,o={username:c,password:i},t.prev=5,t.next=8,f(I(o));case 8:r("/"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),t.t0.response.data.validationErrors&&O(t.t0.response.data.validationErrors);case 14:case"end":return t.stop()}}),t,null,[[5,11]])})));return function(e){return t.apply(this,arguments)}}(),x=Object(w.a)().t,C=d.username,S=d.password,L=u("post","/api/1.0/admin"),E=u("post","/api/1.0/auth"),A=L||E;return s.password!=s.passwordRepeat&&(t=x("Password mismatch")),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("form",{children:[Object(g.jsx)("h1",{className:"text-center",children:x("Sign Up")}),Object(g.jsx)(N,{name:"username",label:x("Username"),error:C,onChange:h}),Object(g.jsx)(N,{name:"password",label:x("Password"),error:S,onChange:h,type:"password"}),Object(g.jsx)(N,{name:"passwordRepeat",label:x("Password Repeat"),error:t,onChange:h,type:"password"}),Object(g.jsx)("div",{className:"form-group text-center",children:Object(g.jsx)(y,{onClick:v,disabled:A||void 0!=t,pendingApiCall:A,text:x("Sign Up")})})]})})},_=function(e){var t=Object(n.useState)(),a=Object(i.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(),o=Object(i.a)(c,2),l=o[0],d=o[1],p=Object(n.useState)(),m=Object(i.a)(p,2),O=m[0],f=m[1],h=Object(k.b)();Object(n.useEffect)((function(){f(void 0)}),[r,l]);var v=function(){var t=Object(b.a)(j.a.mark((function t(a){var n,s,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={username:r,password:l},s=e.history,c=s.push,f(void 0),t.prev=5,t.next=8,h(F(n));case 8:c("/"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),f(t.t0.response.data.message);case 14:case"end":return t.stop()}}),t,null,[[5,11]])})));return function(e){return t.apply(this,arguments)}}(),x=Object(w.a)().t,C=u("post","/api/1.0/admin/auth"),S=r&&l;return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("form",{children:[Object(g.jsx)("h1",{className:"text-center",children:x("Login")}),Object(g.jsx)(N,{label:x("Username"),onChange:function(e){return s(e.target.value)}}),Object(g.jsx)(N,{label:x("Password"),onChange:function(e){return d(e.target.value)},type:"password"}),O&&Object(g.jsx)("div",{className:"alert alert-danger",children:O}),Object(g.jsx)("div",{className:"form-group text-center",children:Object(g.jsx)(y,{onClick:v,disabled:!S||C,pendingApiCall:C,text:x("Login")})})]})})},T=function(e){var t=Object(w.a)().i18n,a=function(e){t.changeLanguage(e),function(e){l.a.defaults.headers["accept-language"]=e}(e)};return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("img",{src:"https://www.countryflags.io/tr/flat/24.png",alt:"Turkish Flag",onClick:function(){return a("tr")},style:{cursor:"pointer"}}),Object(g.jsx)("img",{src:"https://www.countryflags.io/us/flat/24.png",alt:"English Flag",onClick:function(){return a("en")},style:{cursor:"pointer"}})]})},B=a(15),K=a.p+"static/media/profile.06c30927.png",V=function(e){var t=e.image,a=e.tempimage,n=K;return t&&(n="images/"+t),Object(g.jsx)("img",Object(m.a)(Object(m.a)({alt:"Profile",src:a||n},e),{},{onError:function(e){e.target.src=K}}))},G=function(e){var t=e.user,a=t.username,n=t.displayName,r=t.image;return Object(g.jsxs)(B.b,{to:"/user/".concat(a),className:"list-group-item list-group-item-action",children:[Object(g.jsx)(V,{className:"img-circle rounded-circle",width:"30",height:"30",alt:"".concat(a," profile"),image:r}),Object(g.jsxs)("span",{className:"pl-2",children:[n,"@",a]})]})},q=function(){return Object(g.jsx)("div",{className:"d-flex justify-content-center",children:Object(g.jsx)("div",{className:"spinner-border text-black-50",children:Object(g.jsx)("span",{className:"sr-only",children:"Loading..."})})})},H=function(e){var t=Object(n.useState)({content:[],size:3,number:0}),a=Object(i.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(!1),o=Object(i.a)(c,2),l=o[0],d=o[1],p=u("get","/api/1.0/users?page");Object(n.useEffect)((function(){f()}),[]);var m=Object(k.c)((function(e){return{isLoggedIn:e.isLoggedIn}})),f=(m.isLoggedIn,m.admin,function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!1),e.prev=1,e.next=4,O(t);case 4:a=e.sent,s(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),d(!0);case 11:case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()),h=Object(w.a)().t,v=r.content,x=r.last,N=r.first,y=Object(g.jsxs)("div",{children:[0==N&&Object(g.jsx)("button",{className:"btn btn-sm btn-light",onClick:function(){var e=r.number-1;f(e)},children:h("Previous")}),0==x&&Object(g.jsx)("button",{className:"btn btn-sm btn-light float-right",onClick:function(){var e=r.number+1;f(e)},children:h("Next")})]});return p&&(y=Object(g.jsx)(q,{})),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("h3",{className:"card-header text-center",children:h("Users")}),Object(g.jsx)("div",{className:"list-group-flush",children:v.map((function(e){return Object(g.jsx)(G,{user:e},e.username)}))}),y,l&&Object(g.jsx)("div",{className:"text-center text-danger",children:h("Load Failure")})]})})},J=function(){return Object(g.jsx)("div",{className:"container"})},X=a(6),Y=function(e){var t=e.visible,a=e.onClickCancel,n=e.message,r=e.onClickOk,s=e.pendingApiCall,c=e.title,i=e.okButton,o=Object(w.a)().t,l="modal";return l+=t?" show d-block":" fade",Object(g.jsx)("div",{className:l,style:{backgroundColor:"#000000b0"},children:Object(g.jsx)("div",{className:"modal-dialog",children:Object(g.jsxs)("div",{className:"modal-content",children:[Object(g.jsx)("div",{className:"modal-header",children:Object(g.jsx)("h5",{className:"modal-title",children:c})}),Object(g.jsx)("div",{className:"modal-body",children:n}),Object(g.jsxs)("div",{className:"modal-footer",children:[Object(g.jsx)("button",{className:"btn btn-secondary",disabled:s,onClick:a,children:o("Cancel")}),Object(g.jsx)(y,{className:"btn btn-danger",onClick:r,pendingApiCall:s,disabled:s,text:i})]})]})})})},W=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(),o=Object(i.a)(c,2),l=o[0],d=o[1],p=Object(k.c)((function(e){return{username:e.username}})),O=p.username,f=(p.role,Object(X.h)().username),h=Object(n.useState)({}),C=Object(i.a)(h,2),S=C[0],L=C[1],A=Object(n.useState)(!1),U=Object(i.a)(A,2),D=U[0],F=U[1],I=Object(n.useState)(),R=Object(i.a)(I,2),z=R[0],M=R[1],_=Object(n.useState)({}),T=Object(i.a)(_,2),B=T[0],K=T[1],G=Object(n.useState)(!1),q=Object(i.a)(G,2),H=q[0],J=q[1],W=Object(k.b)(),Q=Object(X.g)();Object(n.useEffect)((function(){L(e.user)}),[e.user]),Object(n.useEffect)((function(){F(f===O)}),[f,O]),Object(n.useEffect)((function(){K((function(e){return Object(m.a)(Object(m.a)({},e),{},{displayName:void 0})}))}),[l]),Object(n.useEffect)((function(){K((function(e){return Object(m.a)(Object(m.a)({},e),{},{image:void 0})}))}),[z]);var Z=S.username,$=S.displayName,ee=S.image,te=u("delete","/api/1.0/users/".concat(Z)),ae=Object(w.a)().t;Object(n.useEffect)((function(){r?d($):(d(void 0),M(void 0))}),[r,$]);var ne=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z&&(t=z.split(",")[1]),a={displayName:l,image:t},e.prev=2,e.next=5,v(Z,a);case 5:n=e.sent,s(!1),L(n.data),W(P(n.data)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),K(e.t0.response.data.validationErrors);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(Z);case 2:J(!1),W(E()),Q.push("/");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=u("put","/api/1.0/users/"+Z),ce=B.displayName,ie=B.image;return Object(g.jsxs)("div",{className:"card text-center",children:[Object(g.jsx)("div",{className:"card-header",children:Object(g.jsx)(V,{className:"rounded-circle img-circle shadow",width:"200",height:"200",alt:"".concat(Z," profile"),image:ee,tempimage:z})}),Object(g.jsxs)("div",{className:"card-body",children:[!r&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("h3",{children:[$,"@",Z]}),D&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("button",{className:"btn btn-success d-inline-flex",onClick:function(){return s(!0)},children:[Object(g.jsx)("i",{className:"material-icons",children:"edit"}),ae("Edit")]}),Object(g.jsx)("div",{className:"pt-2",children:Object(g.jsxs)("button",{className:"btn btn-danger d-inline-flex",onClick:function(){return J(!0)},children:[Object(g.jsx)("i",{className:"material-icons",children:"directions_run"}),ae("Delete My Account")]})})]})]}),r&&Object(g.jsxs)("div",{children:[Object(g.jsx)(N,{label:ae("Change Display Name"),defaultValue:$,onChange:function(e){d(e.target.value)},error:ce}),Object(g.jsx)(N,{className:"d-inline-flex",type:"file",onChange:function(e){if(!(e.target.files.length<1)){var t=e.target.files[0],a=new FileReader;a.onloadend=function(){M(a.result)},a.readAsDataURL(t)}},error:ie}),Object(g.jsxs)("div",{children:[Object(g.jsx)(y,{className:"btn btn-primary d-inline-flex",onClick:ne,disabled:se,pendingApiCall:se,text:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("i",{className:"material-icons",children:"save"}),ae("Save")]})}),Object(g.jsxs)("button",{className:"btn btn-light d-inline-flex ml-1",onClick:function(){return s(!1)},disabled:se,children:[Object(g.jsx)("i",{className:"material-icons",children:"close"}),ae("Cancel")]})]})]})]}),Object(g.jsx)(Y,{visible:H,title:ae("Delete My Account"),okButton:ae("Delete My Account"),onClickCancel:function(){J(!1)},onClickOk:re,message:ae("Are you sure to delete your account?"),pendingApiCall:te})]})},Q=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!1),c=Object(i.a)(s,2),o=c[0],l=c[1],d=Object(X.h)().username,p=Object(w.a)().t,m=u("get","/api/1.0/users/"+d);return Object(n.useEffect)((function(){l(!1)}),[a]),Object(n.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(d);case 3:t=e.sent,r(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[d]),m?Object(g.jsx)(q,{}):o?Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"alert alert-danger text-center",children:[Object(g.jsx)("div",{children:Object(g.jsx)("i",{className:"material-icons",style:{fontSize:"48px"},children:"error"})}),p("User not found")]})}):Object(g.jsx)("div",{className:"container",children:Object(g.jsx)(W,{user:a})})},Z=(a.p,function(e){var t=Object(w.a)().t,a=Object(k.c)((function(e){return{isLoggedIn:e.isLoggedIn,username:e.username,displayName:e.displayName,image:e.image,role:e.role}})),r=a.username,s=a.isLoggedIn,c=a.displayName,o=a.image,l=a.role,u=Object(n.useRef)(null),d=Object(n.useState)(!1),j=Object(i.a)(d,2),b=j[0],p=j[1];Object(n.useEffect)((function(){return document.addEventListener("click",m),function(){document.removeEventListener("click",m)}}),[s]);var m=function(e){null!=u.current&&u.current.contains(e.target)||p(!1)},O=Object(k.b)(),f=Object(g.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(g.jsx)("li",{children:Object(g.jsx)(B.b,{className:"nav-link",to:"/login",children:t("Login")})}),Object(g.jsx)("li",{children:Object(g.jsx)(B.b,{className:"nav-link",to:"/signup",children:t("Sign Up")})}),Object(g.jsx)("li",{children:Object(g.jsx)(B.b,{className:"nav-link",to:"/admin/login",children:t("Admin Login")})})]});if(s){var h="dropdown-menu p-0 shadow";b&&(h+=" show"),f=Object(g.jsx)("ul",{className:"navbar-nav ms-auto",ref:u,children:Object(g.jsxs)("li",{className:"nav-item dropdown",children:[Object(g.jsxs)("div",{className:"nav-link d-flex",style:{cursor:"pointer"},onClick:function(){return p(!0)},children:[Object(g.jsx)(V,{image:o,width:"32",height:"32",className:"rounded-circle img-circle m-auto"}),Object(g.jsxs)("span",{className:"dropdown-toggle p-2",children:[c,!c&&"".concat(r,"-").concat(l)]})]}),Object(g.jsxs)("div",{className:h,children:["user"==l&&Object(g.jsxs)(B.b,{className:"dropdown-item d-flex",to:"/user/".concat(r),onClick:function(){return p(!1)},children:[Object(g.jsx)("i",{className:"material-icons text-info",children:"person"}),Object(g.jsx)("span",{className:"",children:t("My Profile")})]}),Object(g.jsxs)("span",{className:"dropdown-item d-flex",onClick:function(){O(E())},style:{cursor:"pointer"},children:[Object(g.jsx)("i",{className:"material-icons text-info",children:"power_settings_new"}),Object(g.jsx)("span",{className:"",children:t("Logout")})]})]})]})})}return Object(g.jsx)("div",{className:"shadow-sm bg-light mb-2",children:Object(g.jsxs)("nav",{className:"navbar navbar-light navbar-expand container",children:[Object(g.jsx)(B.b,{className:"navbar-brand d-flex",to:"/",children:Object(g.jsx)("span",{className:"m-auto p-2",children:"User&Admin"})}),f]})})}),$=function(){var e=Object(k.c)((function(e){return{isLoggedIn:e.isLoggedIn,role:e.role}})),t=e.isLoggedIn,a=e.role;return Object(g.jsxs)("div",{children:[Object(g.jsxs)(B.a,{children:[Object(g.jsx)(Z,{}),Object(g.jsxs)(X.d,{children:["admin"!=a&&Object(g.jsx)(X.b,{exact:!0,path:"/",component:J}),"admin"==a&&Object(g.jsx)(X.b,{exact:!0,path:"/",component:H}),!t&&Object(g.jsx)(X.b,{path:"/login",component:z}),!t&&Object(g.jsx)(X.b,{path:"/signup",component:R}),!t&&Object(g.jsx)(X.b,{path:"/admin/login",component:_}),!t&&Object(g.jsx)(X.b,{path:"/admin/signup",component:M}),Object(g.jsx)(X.b,{path:"/user/:username",component:Q}),Object(g.jsx)(X.a,{to:"/"})]})]}),Object(g.jsx)(T,{})]})},ee=a(31),te=a(20);ee.a.use(te.e).init({resources:{en:{translations:{"Sign Up":"Sign Up",Login:"Login","Admin Login":"Admin Login","Password mismatch":"Password mismatch",Username:"Username","Display Name":"Display Name",Password:"Password","Password Repeat":"Password Repeat",Logout:"Logout",Users:"Users",Next:"next > ",Previous:"< previous","Load Failure":"Load Failure","User Not Found":"User Not Found",Edit:"Edit","Change Display Name":"Change Display Name",Save:"Save",Cancel:"Cancel","My Profile":"My Profile","Delete My Account":"Delete My Account","Are you sure to delete your account?":"Are you sure to delete your account?"}},tr:{translations:{"Sign Up":"Kay\u0131t Ol",Login:"Giri\u015f Yap","Admin Login":"Y\xf6netici Giri\u015fi","Password mismatch":"Ayn\u0131 \u015fifreyi giriniz",Username:"Kullan\u0131c\u0131 Ad\u0131","Display Name":"Tercih Edilen \u0130sim",Password:"\u015eifre","Password Repeat":"\u015eifreyi Tekrarla",Logout:"\xc7\u0131k\u0131\u015f",Users:"Kullan\u0131c\u0131lar",Next:"sonraki >",Previous:"< \xf6nceki","Load Failure":"Liste Al\u0131namad\u0131","User Not Found":"Kullan\u0131c\u0131 Bulunamad\u0131",Edit:"D\xfczenle","Change Display Name":"G\xf6r\xfcn\xfcr \u0130sminizi De\u011fi\u015ftirin",Save:"Kaydet",Cancel:"\u0130ptal","My Profile":"Profilim","Delete My Account":"Hesab\u0131m\u0131 Sil","Are you sure to delete your account?":"Hesab\u0131n\u0131z\u0131 silmek istedi\u011finize emin misiniz?"}}},fallbackLng:"en",ns:["translations"],defaultNS:"translations",keySeparator:!1,interpolation:{escapeValue:!1,formatSeparator:","},react:{wait:!0}});ee.a;var ae=a(26),ne=a(44),re={isLoggedIn:!1,username:void 0,displayName:void 0,image:void 0,password:void 0},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(m.a)({},re),t=arguments.length>1?arguments[1]:void 0;return t.type==C?re:t.type==S?Object(m.a)(Object(m.a)({},t.payload),{},{isLoggedIn:!0}):t.type==L?Object(m.a)(Object(m.a)({},e),t.payload):e},ce=a(45),ie=new(a.n(ce).a),oe=function(){var e=ie.get("h-auth")||{isLoggedIn:!1,username:void 0,displayName:void 0,image:void 0,password:void 0};f(e);var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ae.b,a=Object(ae.c)(se,e,t(Object(ae.a)(ne.a)));return a.subscribe((function(){var e;e=a.getState(),ie.set("h-auth",e),f(a.getState())})),a}();s.a.render(Object(g.jsx)(k.a,{store:oe,children:Object(g.jsx)($,{})}),document.getElementById("root")),c()}},[[81,1,2]]]);
//# sourceMappingURL=main.6eb8c40b.chunk.js.map