(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{1:function(e,t,a){e.exports={main:"PostAJob_main__3z3PY",header:"PostAJob_header__1Z1bg",h1MainHeader:"PostAJob_h1MainHeader___MWsh",mainDiv:"PostAJob_mainDiv__3fuva",outerLayer:"PostAJob_outerLayer__294I2",innerLayer:"PostAJob_innerLayer__7tp2r",inputDiv:"PostAJob_inputDiv__dYhRt",inputLabel:"PostAJob_inputLabel__1YrSR",inputLabelSalary:"PostAJob_inputLabelSalary__1Cnb7",yea:"PostAJob_yea__3BGsW",inputField:"PostAJob_inputField__VNqdU",textInputDiv:"PostAJob_textInputDiv__3I_Ea",inputFieldProgrammingLanguages:"PostAJob_inputFieldProgrammingLanguages__29bgI",selectDiv:"PostAJob_selectDiv__2cHc9",selectDivSalary:"PostAJob_selectDivSalary__P8JKK",salaryOutDiv:"PostAJob_salaryOutDiv__GkPQU",salaryInDiv:"PostAJob_salaryInDiv__270Ef",inputSalary:"PostAJob_inputSalary__3cbwj",outerDivLocation:"PostAJob_outerDivLocation__20HjR",inputFieldLocation:"PostAJob_inputFieldLocation__3btRc",inputLabelLocation:"PostAJob_inputLabelLocation__1yggE",LocationInDiv:"PostAJob_LocationInDiv__1oQCA",remoteLocation:"PostAJob_remoteLocation__25eWV",inputCheckBoxremote:"PostAJob_inputCheckBoxremote__13Zse",inputLabelLocationRemote:"PostAJob_inputLabelLocationRemote__3ayTZ",InpuTextAreaJob:"PostAJob_InpuTextAreaJob__27zHX",footer:"PostAJob_footer__hB5Og",Job:"PostAJob_Job__CT2IB",placiloInLokacija:"PostAJob_placiloInLokacija__5UKaD",basicDetails_Job:"PostAJob_basicDetails_Job__11K1H",lokacija:"PostAJob_lokacija__1IyYJ",placilo:"PostAJob_placilo__1-0Qz",programmingLanguages:"PostAJob_programmingLanguages__19k1N",jobsDivApplyAndDate:"PostAJob_jobsDivApplyAndDate__FOly_",jobPostedDate:"PostAJob_jobPostedDate__19rnp",linkButton:"PostAJob_linkButton__1w_2l",inputFieldJobDescription:"PostAJob_inputFieldJobDescription__bA5R-",filter:"PostAJob_filter__2MCuo",spanLocation:"PostAJob_spanLocation__1czkr",filterLang:"PostAJob_filterLang__30_cN",addButton:"PostAJob_addButton__bJ4jP",deleteFilter:"PostAJob_deleteFilter__35dpL",postJobFooter:"PostAJob_postJobFooter__3Po6x",errorDiv:"PostAJob_errorDiv__3PhBG"}},16:function(e,t,a){e.exports={MainDiv:"Header_MainDiv__32ink",mainNav:"Header_mainNav__QrryW",mainHeadingDiv:"Header_mainHeadingDiv__14WEn",mainHeadingH1:"Header_mainHeadingH1__CMQRO",mainHeadingH2:"Header_mainHeadingH2__2yXrQ",mainHeadingSearchDiv:"Header_mainHeadingSearchDiv__3YYTo",searchPicture:"Header_searchPicture__3bO5U",addAJobButton:"Header_addAJobButton__2Np3V"}},3:function(e,t,a){e.exports={mainContainerDiv:"MainContainer_mainContainerDiv__2ThWn",JobDiv:"MainContainer_JobDiv__1tFzC",jobDescription:"MainContainer_jobDescription__3JF7z",jobDescriptionHeading:"MainContainer_jobDescriptionHeading__3zAcb",jobDescriptionParagraph:"MainContainer_jobDescriptionParagraph__t-89P",Job:"MainContainer_Job__1qho3",JobExpanded:"MainContainer_JobExpanded__1UC1Z",fillterDiv:"MainContainer_fillterDiv__1KLh1",deleteFilter:"MainContainer_deleteFilter__W8U5_",filteredDivOne:"MainContainer_filteredDivOne__1aa45",filteredDivTwo:"MainContainer_filteredDivTwo__3E-GQ",jobDetailsMobile:"MainContainer_jobDetailsMobile__2z4Rl",selectDiv:"MainContainer_selectDiv__3St0c",buttonByPay:"MainContainer_buttonByPay__3kyCB",jobDetails:"MainContainer_jobDetails__3XgcK",selectDivremote:"MainContainer_selectDivremote__4NS1B",addAJobButton:"MainContainer_addAJobButton__2rEjz",getAlldiv:"MainContainer_getAlldiv__MfQYF",filter:"MainContainer_filter__1I6Hj",applyButton:"MainContainer_applyButton__1W88w",basicDetails_Job:"MainContainer_basicDetails_Job__3lnCX",placiloInLokacija:"MainContainer_placiloInLokacija__3O0xy",lokacija:"MainContainer_lokacija__2atw9",placilo:"MainContainer_placilo__23Sme",programmingLanguages:"MainContainer_programmingLanguages__2iRtQ",language:"MainContainer_language__2DRUz",jobsDivApplyAndDate:"MainContainer_jobsDivApplyAndDate__3Uh15",linkButtonDiv:"MainContainer_linkButtonDiv__139Q5",jobPostedDate:"MainContainer_jobPostedDate__2rHHI",linkButton:"MainContainer_linkButton__236_P",linkButtonJobDescription:"MainContainer_linkButtonJobDescription__3PBHt",sortedDiv:"MainContainer_sortedDiv__2EqyW",buttonSort:"MainContainer_buttonSort__2KVMP",AddedByUser:"MainContainer_AddedByUser__227ko",AddedByUserPopDown:"MainContainer_AddedByUserPopDown__2RKfL",arrowUp:"MainContainer_arrowUp__1ClJS"}},40:function(e,t,a){},63:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),o=a(23),c=a.n(o),s=(a(40),a(13)),l=a(5),r=a.n(l),d=a(12),j=a(4),b=a(14),u=a.n(b),p=(a(60),a.p,a(3)),h=a.n(p),m=a(0);function v(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(!1),c=Object(j.a)(o,2),l=(c[0],c[1],Object(n.useState)([])),b=Object(j.a)(l,2),p=b[0],v=b[1],x=Object(n.useState)("false"),O=Object(j.a)(x,2),g=O[0],y=O[1],_=function(){var e=Object(d.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/v1/jobs",{headers:{Authorization:"token thisisforyourbest123"}});case 2:t=e.sent,v([]),document.querySelector("#divremote").checked=!1,console.log(t.data.jobs[0]),i(t.data.jobs);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(d.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t.target.parentElement.parentElement),Number(window.screen.width)>900?"800px"===t.target.parentElement.parentElement.style.height?(t.target.parentElement.parentElement.style.height="140px",console.log(t.target.parentElement.parentElement.classList),document.querySelectorAll('[data-jobdescription-id="'.concat(t.target.id,'"]'))[0].style.display="none",t.target.textContent="Click here to show more"):(t.target.parentElement.parentElement.style.height="800px",document.querySelectorAll('[data-jobdescription-id="'.concat(t.target.id,'"]'))[0].style.display="block",t.target.textContent="Click here to show less"):Number(window.screen.width)<600&&("800px"===t.target.parentElement.parentElement.style.height?(t.target.parentElement.parentElement.style.height="500px",document.querySelectorAll('[data-jobdiv-id="'.concat(t.target.id,'"]'))[0].style.display="flex",document.querySelectorAll('[data-jobdescription-id="'.concat(t.target.id,'"]'))[0].style.display="none",t.target.textContent="Click here to show less"):(t.target.parentElement.parentElement.style.height="800px",document.querySelectorAll('[data-jobdiv-id="'.concat(t.target.id,'"]'))[0].style.display="none",document.querySelectorAll('[data-jobdescription-id="'.concat(t.target.id,'"]'))[0].style.display="block",t.target.textContent="Click here to show more"));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(d.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/v1/jobs",{headers:{Authorization:"token thisisforyourbest123"}});case 2:t=e.sent,v([]),document.querySelector("#divremote").checked=!1,i(t.data.jobs);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){_()}),[]);var D=function(e){var t=e.target.childNodes;void 0!==t[1]&&void 0!==t[2]&&(t[1].style.display="block",t[2].style.display="block")},A=function(e){var t=e.target.childNodes;if(void 0===t[1]||void 0===t[2])return e.target.style.display="none",void(e.target.parentNode.childNodes[1].style.display="none");t[1].style.display="none",t[2].style.display="none"},C=function(){var e=Object(d.a)(r.a.mark((function e(t){var a,n,o,c,l,d,j,b,h,m,x;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==(a=p).length){e.next=8;break}for(v(a=[]),_(),n=0;n<document.querySelectorAll('[data-expandable="yes"]').length;n++)o=document.querySelectorAll('[data-expandable="yes"]')[n],c=document.querySelectorAll('[data-job-expandable="yes"]')[n],l=document.querySelectorAll('[data-jobdiv-expandable="yes"]')[n],Number(window.screen.width)>900?(c.style.height="140px",o.style.display="none"):Number(window.screen.width)<600&&(c.style.height="500px",o.style.display="none",l.style.display="flex");e.next=18;break;case 8:for(d=0;d<document.querySelectorAll('[data-expandable="yes"]').length;d++)j=document.querySelectorAll('[data-expandable="yes"]')[d],b=document.querySelectorAll('[data-job-expandable="yes"]')[d],h=document.querySelectorAll('[data-jobdiv-expandable="yes"]')[d],Number(window.screen.width)>900?(b.style.height="140px",j.style.display="none"):Number(window.screen.width)<600&&(b.style.height="500px",j.style.display="none",h.style.display="flex");return console.log(t.target.attributes),a.splice(a.indexOf(t.target.attributes.filter.value),1),(m=Object(s.a)(a)).some((function(e){return"c#"===e}))&&m.splice(m.indexOf("c#"),1,"chashtag"),console.log(m),e.next=16,u.a.get("/api/v1/sort/langfilter=".concat(m.join("-"),"&remote=").concat(g));case 16:x=e.sent,i(x.data.jobs);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(r.a.mark((function e(t){var a,n,o,c,l,d,j;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(e.prev=0,a=p,console.log(a),a.includes(t.target.outerText)||a.push(t.target.outerText.toLowerCase()),n=0;n<document.querySelectorAll('[data-expandable="yes"]').length;n++)o=document.querySelectorAll('[data-expandable="yes"]')[n],c=document.querySelectorAll('[data-job-expandable="yes"]')[n],l=document.querySelectorAll('[data-jobdiv-expandable="yes"]')[n],console.log(window.screen.width),Number(window.screen.width)>900?(c.style.height="140px",o.style.display="none"):Number(window.screen.width)<600&&(c.style.height="500px",o.style.display="none",l.style.display="flex");return((d=Object(s.a)(a)).includes("c#")||d.includes("C#")||d.includes("c #"))&&d.splice(d.indexOf("c#"),1,"chashtag"),console.log(d),e.next=10,u.a.get("/api/v1/sort/langfilter=".concat(d.join("-"),"&remote=").concat(g));case 10:j=e.sent,v(a),i(j.data.jobs),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(r.a.mark((function e(t){var a,n,o,c,l,d,j;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=p,"office"!==t.target.value&&"remote"!==t.target.value){e.next=4;break}return e.abrupt("return");case 4:for(a.includes(t.target.value)||a.push(t.target.value.toLowerCase()),n=0;n<document.querySelectorAll('[data-expandable="yes"]').length;n++)o=document.querySelectorAll('[data-expandable="yes"]')[n],c=document.querySelectorAll('[data-job-expandable="yes"]')[n],l=document.querySelectorAll('[data-jobdiv-expandable="yes"]')[n],Number(window.screen.width)>900?(c.style.height="140px",o.style.display="none"):Number(window.screen.width)<600&&(c.style.height="500px",o.style.display="none",l.style.display="flex");return((d=Object(s.a)(a)).includes("c#")||d.includes("C#")||d.includes("c #"))&&d.splice(d.indexOf("c#"),1,"chashtag"),console.log(d),console.log("addingRemote",g),console.log("addingRemote",document.querySelector("#divremote").value),"remote"===document.querySelector("#divremote").value||void 0===document.querySelector("#divremote").value?y("true"):"office"===document.querySelector("#divremote").value&&y("false"),e.next=14,u.a.get("/api/v1/sort/langfilter=".concat(d.join("-"),"&remote=").concat(g));case 14:j=e.sent,v(a),i(j.data.jobs),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(d.a)(r.a.mark((function e(t){var a,n,o,c,l,d,j;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(y(t.target.checked),a=p,n=0;n<document.querySelectorAll('[data-expandable="yes"]').length;n++)o=document.querySelectorAll('[data-expandable="yes"]')[n],c=document.querySelectorAll('[data-job-expandable="yes"]')[n],l=document.querySelectorAll('[data-jobdiv-expandable="yes"]')[n],Number(window.screen.width)>900?(c.style.height="140px",o.style.display="none"):Number(window.screen.width)<600&&(c.style.height="500px",o.style.display="none",l.style.display="flex");return((d=Object(s.a)(a)).includes("c#")||d.includes("C#")||d.includes("c #"))&&d.splice(d.indexOf("c#"),1,"chashtag"),e.next=7,u.a.get("/api/v1/sort/text=".concat(d.join("-"),"&remote=").concat(t.target.checked));case 7:j=e.sent,i(j.data.jobs);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("a");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:h.a.mainContainerDiv,children:[Object(m.jsx)("a",{href:"/post-a-job",onClick:w,className:h.a.addAJobButton,children:"Post a job"}),Object(m.jsxs)("div",{className:h.a.fillterDiv,children:[" ",Object(m.jsxs)("div",{onChange:k,className:h.a.filteredDivOne,children:[Object(m.jsxs)("select",{placeholder:"language",className:h.a.selectDiv,children:[Object(m.jsx)("option",{value:"javascript",children:"javascript"}),Object(m.jsx)("option",{value:"css",children:"css"}),Object(m.jsx)("option",{value:"c#",children:"c#"}),Object(m.jsx)("option",{value:"c++",children:"c++"}),Object(m.jsx)("option",{value:"html",children:"html"}),Object(m.jsx)("option",{value:"vue",children:"vue"}),Object(m.jsx)("option",{value:"react",children:"react"}),Object(m.jsx)("option",{value:"python",children:"python"}),Object(m.jsx)("option",{value:"node",children:"node"}),Object(m.jsx)("option",{value:"django",children:"django"}),Object(m.jsx)("option",{value:"ios",children:"ios"}),Object(m.jsx)("option",{value:"android",children:"android"}),Object(m.jsx)("option",{value:"java",children:"java"}),Object(m.jsx)("option",{value:"sql",children:"sql"}),Object(m.jsx)("option",{value:".net",children:".net"}),Object(m.jsx)("option",{value:"typescript",children:"typescript"}),Object(m.jsx)("option",{value:"php",children:"php"}),Object(m.jsx)("option",{value:"jquery",children:"jquery"}),Object(m.jsx)("option",{value:"AWS",children:"aws"})]}),Object(m.jsxs)("div",{className:h.a.selectDivremote,children:[Object(m.jsx)("input",{id:"divremote",value:"office",type:"checkbox",onClick:L})," ",Object(m.jsx)("label",{htmlFor:"divremote",children:"Remote"})]}),Object(m.jsx)("button",{onClick:N,className:h.a.getAlldiv,children:"All Jobs"})]}),Object(m.jsx)("div",{className:h.a.filteredDivTwo,children:p.map((function(e,t){return Object(m.jsxs)("div",{filter:e,className:h.a.filter,children:[e," \xa0",Object(m.jsx)("span",{filter:e,onClick:C,className:h.a.deleteFilter,children:"\u274c"})]})}))})]}),Object(m.jsxs)("div",{children:[a.length," jobs found "]}),a.map((function(e,t){return Object(m.jsxs)("div",{"data-job-expandable":"yes","data-job-id":e.id,id:t,className:h.a.Job,children:[Object(m.jsxs)("div",{"data-jobdiv-id":e.id,"data-jobdiv-expandable":"yes",className:h.a.JobDiv,children:[e.AddedByUser?Object(m.jsxs)("div",{title:"Added by Company",onMouseOver:D,onMouseLeave:A,className:h.a.AddedByUser,children:["\u2705",Object(m.jsx)("div",{className:h.a.arrowUp}),Object(m.jsx)("div",{className:h.a.AddedByUserPopDown,children:"original post"})]}):null,Object(m.jsxs)("div",{className:h.a.basicDetails_Job,children:[Object(m.jsxs)("div",{children:[" \ud83c\udfe2 \xa0 ",e.employer]}),Object(m.jsxs)("div",{children:[" \ud83e\uddd1\u200d\ud83d\udcbb \xa0 ",e.title]}),Object(m.jsxs)("div",{className:h.a.placiloInLokacija,children:[Object(m.jsxs)("div",{className:h.a.lokacija,children:[Object(m.jsx)("span",{children:"\ud83d\udccd"}),Object(m.jsxs)("span",{children:[e.lokacija,e.isRemote?Object(m.jsxs)("span",{className:h.a.remotePosition,children:[""!==e.lokacija?Object(m.jsx)("span",{children:", "}):null,"Remote"]}):null]})," "]}),Object(m.jsxs)("div",{className:h.a.placilo,children:[" ","\ud83d\udcb6 \xa0",e.placilo,"bruto"==e.isBruto?Object(m.jsx)("span",{children:"bruto"}):Object(m.jsx)("span",{children:"neto"})]})]})]}),Object(m.jsx)("div",{className:h.a.programmingLanguages,children:e.programmingLanguages.map((function(e,t){return Object(m.jsx)("div",{value:e,onClick:S,className:h.a.language,children:e},t)}))}),Object(m.jsxs)("div",{className:h.a.jobsDivApplyAndDate,children:[Object(m.jsxs)("div",{className:h.a.jobPostedDate,children:["\u23f0 \xa0",e.dateFrom]}),Object(m.jsxs)("div",{className:h.a.linkButtonDiv,children:[" ",Object(m.jsx)("a",{className:h.a.linkButton,target:"_blank",href:e.email.includes("@")?"mailto:".concat(e.email):e.email,children:"Apply"})]})]}),Object(m.jsx)("div",{id:e.id,className:h.a.jobDetails,onClick:f,children:"Click here to show more"})]}),Object(m.jsxs)("div",{"data-jobdescription-id":e.id,"data-expandable":"yes",className:h.a.jobDescription,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:h.a.jobDescriptionHeading,children:"Job description"}),Object(m.jsx)("p",{className:h.a.jobDescriptionParagraph,children:e.opisDelovnegaMesta})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:h.a.jobDescriptionHeading,children:"Job requirements"}),Object(m.jsx)("p",{className:h.a.jobDescriptionParagraph,children:e.zahteve})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:h.a.jobDescriptionHeading,children:"How to Apply"}),Object(m.jsx)("p",{className:h.a.jobDescriptionParagraph,children:e.kontakt})]}),Object(m.jsx)("div",{id:e.id,className:h.a.jobDetailsMobile,onClick:f,children:"Click here to show less"}),Object(m.jsx)("a",{className:h.a.linkButtonJobDescription,target:"_blank",href:e.email.includes("@")?"mailto:".concat(e.email):e.email,children:"Apply"})]})]},t)}))]})}var x=a(6),O=(a(63),a(16)),g=a.n(O);a(64);function y(){return Object(m.jsx)("div",{className:g.a.MainDiv,children:Object(m.jsx)("div",{className:g.a.mainNav,children:Object(m.jsxs)("div",{className:g.a.mainHeadingDiv,children:[Object(m.jsx)("h1",{className:g.a.mainHeadingH1,children:"Slovenia IT job board"}),Object(m.jsxs)("h1",{className:g.a.mainHeadingH2,children:["Salary, Programming language and employment level",Object(m.jsx)("br",{})]})]})})})}var _=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y,{}),Object(m.jsx)(v,{})]})},f=a(1),N=a.n(f);var D=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)([]),c=Object(j.a)(o,2),l=(c[0],c[1],Object(n.useState)("")),b=Object(j.a)(l,2),p=b[0],h=b[1],v=Object(n.useState)(""),O=Object(j.a)(v,2),g=O[0],y=O[1],_=Object(n.useState)([]),f=Object(j.a)(_,2),D=f[0],A=f[1],C=Object(n.useState)(""),S=Object(j.a)(C,2),k=S[0],L=S[1],w=Object(n.useState)([]),P=Object(j.a)(w,2),J=P[0],M=P[1],I=Object(n.useState)(""),B=Object(j.a)(I,2),q=B[0],H=B[1],F=Object(n.useState)("\u20ac/m"),E=Object(j.a)(F,2),R=E[0],T=E[1],U=Object(n.useState)(""),W=Object(j.a)(U,2),z=W[0],Y=W[1],K=Object(n.useState)(""),Q=Object(j.a)(K,2),G=Q[0],V=Q[1],X=Object(n.useState)("bruto"),Z=Object(j.a)(X,2),$=Z[0],ee=Z[1],te=Object(n.useState)(!1),ae=Object(j.a)(te,2),ne=ae[0],ie=ae[1],oe=Object(n.useState)(!1),ce=Object(j.a)(oe,2),se=(ce[0],ce[1],Object(n.useState)("")),le=Object(j.a)(se,2),re=(le[0],le[1],Object(n.useState)(!1)),de=Object(j.a)(re,2),je=de[0],be=de[1],ue=Object(n.useState)(!1),pe=Object(j.a)(ue,2),he=pe[0],me=pe[1],ve=Object(n.useState)(!1),xe=Object(j.a)(ve,2),Oe=xe[0],ge=xe[1],ye=Object(n.useState)(!1),_e=Object(j.a)(ye,2),fe=_e[0],Ne=_e[1],De=Object(n.useState)(!1),Ae=Object(j.a)(De,2),Ce=Ae[0],Se=Ae[1],ke=Object(n.useState)(""),Le=Object(j.a)(ke,2),we=Le[0],Pe=Le[1],Je=Object(n.useState)(""),Me=Object(j.a)(Je,2),Ie=Me[0],Be=Me[1],qe=Object(n.useState)(""),He=Object(j.a)(qe,2),Fe=He[0],Ee=He[1],Re=Object(x.f)(),Te=function(e){var t=e.target.getAttribute("filter"),a=Object(s.a)(D);a.splice(D.indexOf(t),1),A(a)},Ue=function(e){console.log(e.target);var t=e.target.getAttribute("filter"),a=Object(s.a)(J);a.splice(J.indexOf(t),1),M(a)},We=function(){var e=new Date,t=e.getFullYear(),a=e.getMonth(),n=e.getDate(),i=e.getSeconds(),o=e.getMinutes(),c=e.getHours();return o<10&&(o="0"+o),i<10&&(i="0"+i),c<10&&(c="0"+c),n+" "+["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"][a]+". "+t+" "+c+":"+o+":"+i},ze=function(){var e=Object(d.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""!==k&&""!==a&&(0!==D.length||ne)&&""!==g&&""!==z){e.next=8;break}return""===k&&ge(!0),""===a&&me(!0),0!==D.length||ne||Ne(!0),""===g&&be(!0),""===z&&Se(!0),e.abrupt("return");case 8:if(z.includes("@")){e.next=11;break}return Se(!0),e.abrupt("return");case 11:return e.next=13,u.a.post("/api/v1/post-job",{title:k,employer:a,numberOfJob:1e4,addedByUser:!0,placilo:""!=p?p+" - "+g+" "+R:g+" "+R,lokacija:D.join(","),email:""!==q?q:z,zahteve:Ie,emailCompany:z,howToApply:Fe,isBruto:$,dateFrom:We(),isRemote:ne,maximumPlacilo:g,opisDelovnegaMesta:we,programmingLanguages:J});case 13:"position"==(n=e.sent).data.type&&ge(!0),"employer"==n.data.type&&me(!0),"lokacija"==n.data.type&&Ne(!0),n.data.type,"success"==n.data.status&&Re.push("/"),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("main",{className:N.a.main,children:[Object(m.jsxs)("header",{className:N.a.header,children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{children:Object(m.jsx)("h1",{className:N.a.h1MainHeader,children:"Hire Sloveninan IT"})}),Object(m.jsx)("div",{})]}),Object(m.jsx)("div",{className:N.a.mainDiv,children:Object(m.jsx)("div",{className:N.a.outerLayer,children:Object(m.jsxs)("div",{className:N.a.innerLayer,children:[Object(m.jsxs)("div",{className:N.a.inputDiv,children:[Object(m.jsx)("label",{className:N.a.inputLabel,for:"companyName",children:"COMPANY NAME *"}),Object(m.jsx)("input",{onChange:function(e){e.target.value.length>0&&me(!1),i(e.target.value)},className:N.a.inputField,name:"companyName",id:"companyId"}),he?Object(m.jsx)("div",{className:N.a.errorDiv,children:"Please fill out the required field"}):Object(m.jsx)("div",{children:"\xa0"}),Object(m.jsx)("p",{className:N.a.textInputDiv,children:"Write only the company name inside, without d.o.o, s.p. etc."})]}),Object(m.jsxs)("div",{className:N.a.inputDiv,children:[Object(m.jsx)("label",{className:N.a.inputLabel,for:"position",children:"POSITION *"}),Object(m.jsx)("input",{className:N.a.inputField,name:"position",id:"position",onChange:function(e){e.target.value.length>0&&ge(!1),L(e.target.value)}}),Oe?Object(m.jsx)("div",{className:N.a.errorDiv,children:"Please fill out the required field"}):Object(m.jsx)("div",{children:"\xa0"}),Object(m.jsx)("p",{className:N.a.textInputDiv,children:"Write the position you are looking for. Software engineer, Devops, Frontend developer etc."})]}),Object(m.jsxs)("div",{className:N.a.inputDiv,children:[Object(m.jsx)("label",{className:N.a.inputLabel,for:"location",children:"LOCATION *"}),Object(m.jsxs)("div",{className:N.a.outerDivLocation,children:[Object(m.jsxs)("select",{onChange:function(e){console.log(e.target.value);var t=Object(s.a)(D);t.includes(e.target.value)?console.log("includes"):(t.push(e.target.value),A(t),t.length>0&&Ne(!1))},placeholder:"location",className:N.a.selectDiv,children:[Object(m.jsx)("option",{slected:!0,disabled:!0,value:"",children:"Location"}),Object(m.jsx)("option",{value:"Lj",children:"Ljubljana"}),Object(m.jsx)("option",{value:"Mb",children:"Maribor"}),Object(m.jsx)("option",{value:"Ce",children:"Celje"}),Object(m.jsx)("option",{value:"Nm",children:"Novo Mesto"}),Object(m.jsx)("option",{value:"Ms",children:"Murska Sobota"}),Object(m.jsx)("option",{value:"Kop",children:"Koper"}),Object(m.jsx)("option",{selected:!0,value:"Kr",children:"Kranj"})]}),Object(m.jsxs)("div",{className:N.a.LocationInDiv,children:[Object(m.jsx)("label",{className:N.a.inputLabelLocation,for:"location",children:"From elsewhere"}),Object(m.jsx)("input",{onChange:function(e){V(e.target.value)},className:N.a.inputFieldLocation,name:"companyName",id:"companyId",value:G}),Object(m.jsx)("button",{onClick:function(){if(""!==G){var e=Object(s.a)(D);e.push(G),A(e),V("")}},className:N.a.addButton,children:"Add"})]}),Object(m.jsxs)("div",{className:N.a.remoteLocation,children:[Object(m.jsx)("input",{className:N.a.inputCheckBoxremote,name:"companyName",id:"companyId",type:"checkbox",onChange:function(e){e.target.checked&&(Ne(!1),console.log(D)),ie(e.target.checked)}}),Object(m.jsx)("label",{className:N.a.inputLabelLocationRemote,for:"language",children:"Remote"})]})]}),Object(m.jsxs)("div",{className:N.a.inputFieldProgrammingLanguages,name:"progLang",id:"progLang",children:[D.map((function(e){return Object(m.jsxs)("div",{className:N.a.filter,children:[e,Object(m.jsx)("span",{filter:e,onClick:Te,className:N.a.deleteFilter,children:"\u274c"})]},e)})),ne?Object(m.jsx)("div",{className:N.a.filter,children:"Remote"}):null]}),fe?Object(m.jsx)("div",{className:N.a.errorDiv,children:"There should be atleast one location"}):Object(m.jsx)("div",{children:"\xa0 "}),Object(m.jsx)("p",{className:N.a.textInputDiv,children:"Location of the job"})]}),Object(m.jsxs)("div",{className:N.a.inputDiv,children:[Object(m.jsx)("label",{className:N.a.inputLabel,for:"language",children:"PROGRAMMING LANGUAGES"}),Object(m.jsxs)("select",{onChange:function(e){console.log(e.target.value);var t=Object(s.a)(J);t.includes(e.target.value)?console.log("includes"):(t.push(e.target.value),console.log(t),M(t))},placeholder:"language",className:N.a.selectDiv,children:[Object(m.jsx)("option",{slected:!0,disabled:!0,value:"",children:"Language"}),Object(m.jsx)("option",{value:"javascript",children:"javascript"}),Object(m.jsx)("option",{value:"css",children:"css"}),Object(m.jsx)("option",{value:"c#",children:"c#"}),Object(m.jsx)("option",{value:"c++",children:"c++"}),Object(m.jsx)("option",{value:"html",children:"html"}),Object(m.jsx)("option",{value:"vue",children:"vue"}),Object(m.jsx)("option",{value:"angular",children:"angular"}),Object(m.jsx)("option",{value:"react",children:"react"}),Object(m.jsx)("option",{value:"python",children:"python"}),Object(m.jsx)("option",{value:"node",children:"node"}),Object(m.jsx)("option",{value:"django",children:"django"}),Object(m.jsx)("option",{value:"ios",children:"ios"}),Object(m.jsx)("option",{value:"android",children:"android"}),Object(m.jsx)("option",{value:"java",children:"java"}),Object(m.jsx)("option",{value:"sql",children:"sql"}),Object(m.jsx)("option",{value:".net",children:".net"}),Object(m.jsx)("option",{value:"typescript",children:"typescript"}),Object(m.jsx)("option",{value:"php",children:"php"}),Object(m.jsx)("option",{value:"jquery",children:"jquery"}),Object(m.jsx)("option",{value:"AWS",children:"aws"})]}),Object(m.jsx)("div",{className:N.a.inputFieldProgrammingLanguages,name:"progLang",id:"progLang",children:J.map((function(e){return Object(m.jsxs)("div",{className:N.a.filter,children:[e,Object(m.jsx)("span",{filter:e,onClick:Ue,className:N.a.deleteFilter,children:"\u274c"})]},e)}))}),Object(m.jsx)("p",{className:N.a.textInputDiv,children:"Select all of the programming lanugages that your job requires"})]}),Object(m.jsxs)("div",{className:N.a.inputDiv,children:[Object(m.jsx)("label",{className:N.a.inputLabel,for:"position",children:"SALARY *"}),Object(m.jsxs)("div",{className:N.a.salaryOutDiv,children:[Object(m.jsxs)("div",{className:N.a.salaryInDiv,children:[Object(m.jsx)("label",{className:N.a.inputLabelSalary,for:"fromSalary",children:"From"}),Object(m.jsx)("input",{onChange:function(e){h(e.target.value)},type:"number",className:N.a.inputSalary,name:"fromSalary"})]}),Object(m.jsxs)("div",{className:N.a.salaryInDiv,children:[Object(m.jsx)("label",{className:N.a.inputLabelSalary,for:"toSalary",children:"To"}),Object(m.jsx)("input",{onChange:function(e){y(e.target.value),""!==e.target.value&&be(!1)},type:"number",className:N.a.inputSalary,name:"toSalary"})]}),Object(m.jsxs)("select",{onChange:function(e){T(e.target.value)},placeholder:"language",className:N.a.selectDivSalary,children:[Object(m.jsx)("option",{slected:!0,disabled:!0,value:"",children:"Salary"}),Object(m.jsx)("option",{value:"\u20ac/m",children:"\u20ac/m"}),Object(m.jsx)("option",{value:"\u20ac/uro",children:"\u20ac/uro"})]}),Object(m.jsxs)("select",{onChange:function(e){ee(e.target.value)},placeholder:"language",className:N.a.selectDivSalary,children:[Object(m.jsx)("option",{slected:!0,disabled:!0,value:"",children:"Vrsta placila"}),Object(m.jsx)("option",{value:"bruto",children:"bruto"}),Object(m.jsx)("option",{value:"neto",children:"neto"})]})]}),je?Object(m.jsx)("div",{className:N.a.errorDiv,children:'Salary section "TO" is missing, if you want to field only one number as salary please fill out only section "TO".'}):Object(m.jsx)("div",{}),Object(m.jsx)("p",{className:N.a.textInputDiv,children:"Select the ranges you are willing to pay the candidates, also select if it is bruto or neto"})]}),Object(m.jsxs)("div",{className:N.a.inputDiv,children:[Object(m.jsx)("label",{className:N.a.inputLabel,for:"companyName",children:"JOB DESCRIPTION (coming soon)"}),Object(m.jsx)("textarea",{onChange:function(e){Pe(e.target.value)},className:N.a.inputFieldJobDescription,name:"companyName",id:"companyId"}),Object(m.jsx)("p",{className:N.a.textInputDiv,children:"Write about your company, What is it about, what do you do etc."})]}),Object(m.jsxs)("div",{className:N.a.inputDiv,children:[Object(m.jsx)("label",{className:N.a.inputLabel,for:"companyName",children:"JOB REQUIREMENTS (coming soon)"}),Object(m.jsx)("textarea",{onChange:function(e){Be(e.target.value)},className:N.a.inputFieldJobDescription,name:"companyName",id:"companyId"}),Object(m.jsx)("p",{className:N.a.textInputDiv,children:"Write in short what do you need, who are you looking for and so on."})]}),Object(m.jsxs)("div",{className:N.a.inputDiv,children:[Object(m.jsx)("label",{className:N.a.inputLabel,for:"companyName",children:"HOW TO APPLY (coming soon)"}),Object(m.jsx)("textarea",{onChange:function(e){Ee(e.target.value)},className:N.a.inputFieldJobDescription,name:"companyName",id:"companyId"}),Object(m.jsx)("p",{className:N.a.textInputDiv,children:"How to apply to the job. Should they send the CV to the mail or should they click on your website and apply there"})]}),Object(m.jsxs)("div",{className:N.a.inputDiv,children:[Object(m.jsx)("label",{className:N.a.inputLabel,for:"companyName",children:"APPLY URL"}),Object(m.jsx)("input",{onChange:function(e){H(e.target.value)},placeholder:"https://",className:N.a.inputField,name:"companyName",id:"companyId"}),Object(m.jsx)("p",{className:N.a.textInputDiv,children:"Give URL for the users to click on it and apply to your job, its more effiecient then the email"})]}),Object(m.jsxs)("div",{className:N.a.inputDiv,children:[Object(m.jsx)("label",{className:N.a.inputLabel,for:"companyName",children:"APPLY EMAIL or COMPANY EMAIL *"}),Object(m.jsx)("input",{onChange:function(e){e.target.value.length>0&&Se(!1),Y(e.target.value)},placeholder:"example@gmail.com",className:N.a.inputField,name:"companyName",id:"companyId",type:"email"}),Ce?Object(m.jsx)("div",{className:N.a.errorDiv,children:"Please provide correct email of your company email or email that the candidates can apply to."}):Object(m.jsx)("div",{}),Object(m.jsx)("p",{className:N.a.textInputDiv,children:"Write the company email, to let the people know how to contact you."})]})]})})}),Object(m.jsxs)("div",{className:N.a.footer,children:[Object(m.jsxs)("div",{className:N.a.Job,children:[Object(m.jsxs)("div",{className:N.a.basicDetails_Job,children:[Object(m.jsxs)("div",{children:[" \ud83c\udfe2 \xa0 ",a]}),Object(m.jsxs)("div",{children:[" \ud83e\uddd1\u200d\ud83d\udcbb \xa0 ",k]}),Object(m.jsxs)("div",{className:N.a.placiloInLokacija,children:[Object(m.jsxs)("div",{className:N.a.lokacija,children:[Object(m.jsx)("span",{children:"\ud83d\udccd"}),Object(m.jsxs)("span",{className:N.a.spanLocation,children:[D.map((function(e){return Object(m.jsxs)("div",{children:[e,","]})})),ne?Object(m.jsx)("div",{children:" Remote"}):null]})," "]}),Object(m.jsxs)("div",{className:N.a.placilo,children:[" ","\ud83d\udcb6 \xa0",p?p+" - ":null,g,"\xa0",R,Object(m.jsx)("br",{}),$]})]})]}),Object(m.jsx)("div",{className:N.a.programmingLanguages,children:J.map((function(e){return Object(m.jsxs)("div",{className:N.a.filterLang,children:[e,Object(m.jsx)("span",{filter:e,className:N.a.deleteFilter,children:"\u274c"})]},e)}))}),Object(m.jsxs)("div",{className:N.a.jobsDivApplyAndDate,children:[Object(m.jsx)("div",{className:N.a.jobPostedDate,children:"\u23f0 \xa0 Created at"}),Object(m.jsxs)("div",{className:N.a.linkButtonDiv,children:[" ",Object(m.jsx)("a",{className:N.a.linkButton,target:"_blank",children:"Apply"})]})]})]}),Object(m.jsx)("button",{onClick:ze,className:N.a.postJobFooter,children:"POST JOB"})]})]})};var A=function(){return Object(m.jsx)(x.c,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(x.a,{path:"/",exact:!0,component:_}),Object(m.jsx)(x.a,{path:"/post-a-job",exact:!0,component:D})]})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),o(e),c(e)}))},S=a(18);c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(S.a,{children:Object(m.jsx)(A,{})})}),document.getElementById("root")),C()}},[[73,1,2]]]);
//# sourceMappingURL=main.dcc4f080.chunk.js.map