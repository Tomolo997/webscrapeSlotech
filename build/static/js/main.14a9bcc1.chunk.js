(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){e.exports={MainDiv:"Header_MainDiv__32ink",mainNav:"Header_mainNav__QrryW",mainHeadingDiv:"Header_mainHeadingDiv__14WEn",mainHeadingH1:"Header_mainHeadingH1__CMQRO",mainHeadingH2:"Header_mainHeadingH2__2yXrQ",mainHeadingSearchDiv:"Header_mainHeadingSearchDiv__3YYTo",searchPicture:"Header_searchPicture__3bO5U",addAJobButton:"Header_addAJobButton__2Np3V"}},2:function(e,t,n){e.exports={mainContainerDiv:"MainContainer_mainContainerDiv__2ThWn",Job:"MainContainer_Job__1qho3",JobExpanded:"MainContainer_JobExpanded__1UC1Z",fillterDiv:"MainContainer_fillterDiv__1KLh1",deleteFilter:"MainContainer_deleteFilter__W8U5_",filteredDivOne:"MainContainer_filteredDivOne__1aa45",filteredDivTwo:"MainContainer_filteredDivTwo__3E-GQ",selectDiv:"MainContainer_selectDiv__3St0c",buttonByPay:"MainContainer_buttonByPay__3kyCB",selectDivremote:"MainContainer_selectDivremote__4NS1B",addAJobButton:"MainContainer_addAJobButton__2rEjz",getAlldiv:"MainContainer_getAlldiv__MfQYF",filter:"MainContainer_filter__1I6Hj",applyButton:"MainContainer_applyButton__1W88w",basicDetails_Job:"MainContainer_basicDetails_Job__3lnCX",placiloInLokacija:"MainContainer_placiloInLokacija__3O0xy",lokacija:"MainContainer_lokacija__2atw9",placilo:"MainContainer_placilo__23Sme",programmingLanguages:"MainContainer_programmingLanguages__2iRtQ",language:"MainContainer_language__2DRUz",jobsDivApplyAndDate:"MainContainer_jobsDivApplyAndDate__3Uh15",linkButtonDiv:"MainContainer_linkButtonDiv__139Q5",jobPostedDate:"MainContainer_jobPostedDate__2rHHI",linkButton:"MainContainer_linkButton__236_P",sortedDiv:"MainContainer_sortedDiv__2EqyW",buttonSort:"MainContainer_buttonSort__2KVMP",AddedByUser:"MainContainer_AddedByUser__227ko",AddedByUserPopDown:"MainContainer_AddedByUserPopDown__2RKfL",arrowUp:"MainContainer_arrowUp__1ClJS"}},39:function(e,t,n){},62:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(21),r=n.n(c),o=(n(39),n(17)),s=n(5),l=n.n(s),d=n(10),u=n(18),j=n(11),v=n.n(j),p=(n(59),n.p,n(2)),b=n.n(p),h=n(0);function _(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(!1),r=Object(u.a)(c,2),s=(r[0],r[1],Object(a.useState)([])),j=Object(u.a)(s,2),p=j[0],_=j[1],m=Object(a.useState)("false"),x=Object(u.a)(m,2),O=x[0],g=x[1],f=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/v1/jobs",{headers:{Authorization:"token thisisforyourbest123"}});case 2:t=e.sent,_([]),document.querySelector("#divremote").checked=!1,i(t.data.jobs);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/v1/jobs",{headers:{Authorization:"token thisisforyourbest123"}});case 2:t=e.sent,_([]),document.querySelector("#divremote").checked=!1,i(t.data.jobs);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){f()}),[]);var C=function(e){var t=e.target.childNodes;void 0!==t[1]&&void 0!==t[2]&&(t[1].style.display="block",t[2].style.display="block")},D=function(e){var t=e.target.childNodes;if(void 0===t[1]||void 0===t[2])return e.target.style.display="none",void(e.target.parentNode.childNodes[1].style.display="none");t[1].style.display="none",t[2].style.display="none"},k=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==(n=p).length){e.next=7;break}_(n=[]),f(),e.next=16;break;case 7:return console.log(t.target.attributes),n.splice(n.indexOf(t.target.attributes.filter.value),1),(a=Object(o.a)(n)).some((function(e){return"c#"===e}))&&a.splice(a.indexOf("c#"),1,"chashtag"),console.log(a),e.next=14,v.a.get("/api/v1/sort/langfilter=".concat(a.join("-"),"&remote=").concat(O));case 14:c=e.sent,i(c.data.jobs);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=p,console.log(n),n.includes(t.target.outerText)||n.push(t.target.outerText.toLowerCase()),((a=Object(o.a)(n)).includes("c#")||a.includes("C#")||a.includes("c #"))&&a.splice(a.indexOf("c#"),1,"chashtag"),console.log(a),e.next=9,v.a.get("/api/v1/sort/langfilter=".concat(a.join("-"),"&remote=").concat(O));case 9:c=e.sent,_(n),i(c.data.jobs),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=p,"office"!==t.target.value&&"remote"!==t.target.value){e.next=4;break}return e.abrupt("return");case 4:return n.includes(t.target.value)||n.push(t.target.value.toLowerCase()),((a=Object(o.a)(n)).includes("c#")||a.includes("C#")||a.includes("c #"))&&a.splice(a.indexOf("c#"),1,"chashtag"),console.log(a),console.log("addingRemote",O),console.log("addingRemote",document.querySelector("#divremote").value),"remote"===document.querySelector("#divremote").value||void 0===document.querySelector("#divremote").value?g("true"):"office"===document.querySelector("#divremote").value&&g("false"),e.next=13,v.a.get("/api/v1/sort/langfilter=".concat(a.join("-"),"&remote=").concat(O));case 13:c=e.sent,_(n),i(c.data.jobs),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(t.target.checked),n=p,((a=Object(o.a)(n)).includes("c#")||a.includes("C#")||a.includes("c #"))&&a.splice(a.indexOf("c#"),1,"chashtag"),e.next=6,v.a.get("/api/v1/sort/text=".concat(a.join("-"),"&remote=").concat(t.target.checked));case 6:c=e.sent,i(c.data.jobs);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:b.a.mainContainerDiv,children:[Object(h.jsxs)("div",{className:b.a.fillterDiv,children:[" ",Object(h.jsxs)("div",{onChange:M,className:b.a.filteredDivOne,children:[Object(h.jsxs)("select",{placeholder:"language",className:b.a.selectDiv,children:[Object(h.jsx)("option",{value:"javascript",children:"javascript"}),Object(h.jsx)("option",{value:"css",children:"css"}),Object(h.jsx)("option",{value:"c#",children:"c#"}),Object(h.jsx)("option",{value:"c++",children:"c++"}),Object(h.jsx)("option",{value:"html",children:"html"}),Object(h.jsx)("option",{value:"vue",children:"vue"}),Object(h.jsx)("option",{value:"react",children:"react"}),Object(h.jsx)("option",{value:"python",children:"python"}),Object(h.jsx)("option",{value:"node",children:"node"}),Object(h.jsx)("option",{value:"django",children:"django"}),Object(h.jsx)("option",{value:"ios",children:"ios"}),Object(h.jsx)("option",{value:"android",children:"android"}),Object(h.jsx)("option",{value:"java",children:"java"}),Object(h.jsx)("option",{value:"sql",children:"sql"}),Object(h.jsx)("option",{value:".net",children:".net"}),Object(h.jsx)("option",{value:"typescript",children:"typescript"}),Object(h.jsx)("option",{value:"php",children:"php"}),Object(h.jsx)("option",{value:"jquery",children:"jquery"}),Object(h.jsx)("option",{value:"AWS",children:"aws"})]}),Object(h.jsxs)("div",{className:b.a.selectDivremote,children:[Object(h.jsx)("input",{id:"divremote",value:"office",type:"checkbox",onClick:w})," ",Object(h.jsx)("label",{htmlFor:"divremote",children:"Remote"})]}),Object(h.jsx)("button",{onClick:y,className:b.a.getAlldiv,children:"All Jobs"})]}),Object(h.jsx)("div",{className:b.a.filteredDivTwo,children:p.map((function(e,t){return Object(h.jsxs)("div",{filter:e,className:b.a.filter,children:[e," \xa0",Object(h.jsx)("span",{filter:e,onClick:k,className:b.a.deleteFilter,children:"\u274c"})]})}))})]}),Object(h.jsxs)("div",{children:[n.length," jobs found "]}),n.map((function(e,t){return Object(h.jsxs)("div",{id:t,className:b.a.Job,children:[e.AddedByUser?Object(h.jsxs)("div",{title:"Added by Company",onMouseOver:C,onMouseLeave:D,className:b.a.AddedByUser,children:["\u2705",Object(h.jsx)("div",{className:b.a.arrowUp}),Object(h.jsx)("div",{className:b.a.AddedByUserPopDown,children:"original post"})]}):null,Object(h.jsxs)("div",{className:b.a.basicDetails_Job,children:[Object(h.jsxs)("div",{children:[" \ud83c\udfe2 \xa0 ",e.employer]}),Object(h.jsxs)("div",{children:[" \ud83e\uddd1\u200d\ud83d\udcbb \xa0 ",e.title]}),Object(h.jsxs)("div",{className:b.a.placiloInLokacija,children:[Object(h.jsxs)("div",{className:b.a.lokacija,children:[Object(h.jsx)("span",{children:"\ud83d\udccd"}),Object(h.jsxs)("span",{children:[e.lokacija,e.isRemote?Object(h.jsxs)("span",{className:b.a.remotePosition,children:[0!==e.lokacija.length?Object(h.jsx)("span",{children:", "}):null,"Remote"]}):null]})," "]}),Object(h.jsxs)("div",{className:b.a.placilo,children:[" ","\ud83d\udcb6 \xa0",e.placilo,"bruto"==e.isBruto?Object(h.jsx)("span",{children:"bruto"}):Object(h.jsx)("span",{children:"neto"})]})]})]}),Object(h.jsx)("div",{className:b.a.programmingLanguages,children:e.programmingLanguages.map((function(e,t){return Object(h.jsx)("div",{value:e,onClick:N,className:b.a.language,children:e},t)}))}),Object(h.jsxs)("div",{className:b.a.jobsDivApplyAndDate,children:[Object(h.jsxs)("div",{className:b.a.jobPostedDate,children:["\u23f0 \xa0",e.dateFrom]}),Object(h.jsxs)("div",{className:b.a.linkButtonDiv,children:[" ",Object(h.jsx)("a",{className:b.a.linkButton,target:"_blank",href:e.email.includes("@")?"mailto:".concat(e.email):e.email,children:"Apply"})]})]})]},t)}))]})}var m=n(22),x=n(3),O=(n(62),n(13)),g=n.n(O);n(63);function f(){return Object(h.jsx)("div",{className:g.a.MainDiv,children:Object(h.jsx)("div",{className:g.a.mainNav,children:Object(h.jsxs)("div",{className:g.a.mainHeadingDiv,children:[Object(h.jsx)("h1",{className:g.a.mainHeadingH1,children:"No bullshit Slovenian IT jobs"}),Object(h.jsxs)("h1",{className:g.a.mainHeadingH2,children:["Salary, Programming language and employment level",Object(h.jsx)("br",{})]})]})})})}var y=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{}),Object(h.jsx)(_,{})]})};var C=function(){return Object(h.jsx)("div",{children:"postig"})};var D=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(x.c,{children:[Object(h.jsx)(x.a,{path:"/",exact:!0,component:y}),Object(h.jsx)(x.a,{path:"/post-a-job",exact:!0,component:C})]})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(D,{})}),document.getElementById("root")),k()}},[[72,1,2]]]);
//# sourceMappingURL=main.14a9bcc1.chunk.js.map