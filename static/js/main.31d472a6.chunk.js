(this.webpackJsonpcowineshkha=this.webpackJsonpcowineshkha||[]).push([[0],{68:function(e,t,a){},69:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(10),s=a.n(c),r=(a(68),a.p,a(69),a(12)),l=a(128),o=a(52),j=a(135),d=a(132),b=a(133),h=a(44),u=a(130),p=a(143),O=a(134),m=a(146),v=a(136),g=a(145),x=a(50),f=a(142),I=a(144),N=a(137),y=a(138),S=a(139),_=a(140),C=a(141),A=a(147),V=a.p+"static/media/progressring.30d2ddf9.gif",w=a(3),D=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(i.useState)([]),D=Object(r.a)(s,2),k=D[0],T=D[1],G=Object(i.useState)(""),J=Object(r.a)(G,2),E=J[0],M=J[1],Y=Object(i.useState)(""),L=Object(r.a)(Y,2),F=L[0],W=L[1],Z=Object(i.useState)(!1),P=Object(r.a)(Z,2),Q=P[0],z=P[1],B=Object(i.useState)([]),H=Object(r.a)(B,2),R=H[0],U=H[1],X=n.a.useState(!1),q=Object(r.a)(X,2),K=q[0],$=(q[1],Object(i.useState)("")),ee=Object(r.a)($,2),te=ee[0],ae=ee[1],ie=Object(i.useState)(""),ne=Object(r.a)(ie,2),ce=ne[0],se=ne[1],re=Object(i.useState)(""),le=Object(r.a)(re,2),oe=le[0],je=le[1],de=Object(i.useState)(""),be=Object(r.a)(de,2),he=be[0],ue=be[1],pe=n.a.useState(!1),Oe=Object(r.a)(pe,2),me=Oe[0],ve=Oe[1];Object(i.useEffect)((function(){ge()}),[]);var ge=function(){z(!0),fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states").then((function(e){return e.json()})).then((function(e){e.states;c(e.states),console.log(a),z(!1)})).catch((function(e){console.log(e),z(!1)}))},xe=Object(l.a)((function(e){return{root:{flexGrow:1,bottom:e.spacing(2),right:e.spacing(2)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},avatar:{background:"orange"},available:{background:"#49B215",color:"white"},Notavailable:{background:"red",color:"white",width:"25%"},capactitzero:{color:"red"},capactityavailable:{color:"#49B215"},noresult:{color:"red",textAlign:"center",FormatAlignJustify:"center",display:""},result_found:{display:"none"},hideimage:{display:"none"},showimage:{display:""}}})),fe=function(e){!function(e){if(z(!0),ve(!1),console.log(Q),""!=E&&""!=F||""!=te){var t=new Date,a=t.getDate()+"-"+(t.getMonth()+1)+"-"+t.getFullYear(),i="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id="+F+"&date="+a;console.log(i),fetch(i,{method:"get",headers:new Headers({Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiI4MGNmZWViMS1mZTQwLTQ4YmItOGI3MS1jYWMwOTJlODVjYWQiLCJ1c2VyX3R5cGUiOiJCRU5FRklDSUFSWSIsInVzZXJfaWQiOiI4MGNmZWViMS1mZTQwLTQ4YmItOGI3MS1jYWMwOTJlODVjYWQiLCJtb2JpbGVfbnVtYmVyIjo4NzU0MDcyNzcxLCJiZW5lZmljaWFyeV9yZWZlcmVuY2VfaWQiOjY4ODc2MjY5Mjc2NzgwLCJ0eG5JZCI6ImY0NGIyNjkwLThhMGEtNDNlYy05OWRkLTFkNGE1YTE2YmY1NCIsImlhdCI6MTYyMDk4MzU0NiwiZXhwIjoxNjIwOTg0NDQ2fQ.RLkG61Z1quzA16EUtfesIHQAIS5I1TcbsC5gfg-A4VI"})}).then((function(e){return e.json()})).then((function(e){var t=e.centers;""!=te&&(t=t.filter((function(e){return e.pincode==te}))),""!=ce&&(t=t.filter((function(e){if(e.sessions.filter((function(e){return e.min_age_limit==ce})).length>0)return e}))),""!=oe?t=t.filter((function(e){if(e.sessions.filter((function(e){return e.vaccine==oe})).length>0)return e})):""!=he&&(t=t.filter((function(e){if(e.sessions.filter((function(e){return e.available_capacity_dose1>0})).length>0)return e}))),""!=he&&""!=ce&&(t=t.filter((function(e){if(e.sessions.filter((function(e){return e.available_capacity_dose1>0&&e.min_age_limit==ce})).length>0)return e}))),0!=t.length&&void 0!=t||ve(!0),U(t),console.log(R),z(!1)})).catch((function(e){console.log(e)}))}else alert("Please provide either (state & district or pincode)")}()},Ie=xe();return Object(w.jsxs)(n.a.Fragment,{children:[Object(w.jsx)(u.a,{}),Object(w.jsx)(d.a,{children:Object(w.jsx)(b.a,{children:Object(w.jsx)(h.a,{variant:"h6",children:"Eshkha - Covid Vaccine Availablity Helper"})})}),Object(w.jsx)(b.a,{id:"back-to-top-anchor"}),Object(w.jsx)(O.a,{children:Object(w.jsxs)(p.a,{my:2,children:[Object(w.jsxs)(j.a,{container:!0,spacing:1,children:[Object(w.jsx)(j.a,{item:!0,xs:3,sm:3,children:Object(w.jsx)(o.a,{className:Ie.paper,children:Object(w.jsxs)(g.a,{className:Ie.formControl,children:[Object(w.jsx)(m.a,{htmlFor:"State-native-helper",children:"STATE"}),Object(w.jsxs)(x.a,{onChange:function(e){var t,a=e.target.value;M(a),t=a,z(!0),fetch("https://cdn-api.co-vin.in/api/v2/admin/location/districts/"+t).then((function(e){return e.json()})).then((function(e){e.states,T(e.districts),console.log(k),z(!1)})).catch((function(e){console.log(e),z(!1)}))},inputProps:{name:"State",id:"State-native-helper"},children:[Object(w.jsx)("option",{"aria-label":"None",value:""}),a.map((function(e){return Object(w.jsx)("option",{"aria-label":e.state_id,value:e.state_id,children:e.state_name},e.state_id)}))]}),Object(w.jsx)(v.a,{children:"Give your desired state"})]})})}),Object(w.jsx)(j.a,{item:!0,xs:3,sm:3,children:Object(w.jsx)(o.a,{className:Ie.paper,children:Object(w.jsxs)(g.a,{className:Ie.formControl,children:[Object(w.jsx)(m.a,{htmlFor:"State-native-helper",children:"DISTRICT"}),Object(w.jsxs)(x.a,{onChange:function(e){var t=e.target.value;W(t)},inputProps:{name:"District",id:"State-native-helper"},children:[Object(w.jsx)("option",{"aria-label":"None",value:""}),k.map((function(e){return Object(w.jsx)("option",{"aria-label":e.district_id,value:e.district_id,children:e.district_name},e.district_id)}))]}),Object(w.jsx)(v.a,{children:"Give your desired district"})]})})}),Object(w.jsx)(j.a,{item:!0,xs:3,sm:3,children:Object(w.jsx)(o.a,{className:Ie.paper,children:Object(w.jsxs)(g.a,{className:Ie.formControl,children:[Object(w.jsx)(f.a,{id:"standard-basic",label:"PINCODE",onChange:function(e){return ae(e.target.value)}}),Object(w.jsx)(v.a,{children:"Give your desired Pincode"})]})})}),Object(w.jsx)(j.a,{item:!0,xs:3,sm:3,children:Object(w.jsxs)(o.a,{children:[Object(w.jsxs)(h.a,{paragraph:!0,children:[Object(w.jsxs)(x.a,{onChange:function(e){var t=e.target.value;se(t)},inputProps:{name:"AGE",id:"age-native-helper"},children:[Object(w.jsx)("option",{"aria-label":"None",value:"",children:"AGE"}),Object(w.jsx)("option",{"aria-label":"18",value:"18",children:"18+"}),Object(w.jsx)("option",{"aria-label":"45",value:"45",children:"45+"})]}),"\xa0",Object(w.jsxs)(x.a,{onChange:function(e){var t=e.target.value;je(t)},inputProps:{name:"vaccine",id:"vaccine-native-helper"},children:[Object(w.jsx)("option",{"aria-label":"None",value:"",children:"Vaccine"}),Object(w.jsx)("option",{"aria-label":"COVAXIN",value:"COVAXIN",children:"COVAXIN"}),Object(w.jsx)("option",{"aria-label":"COVISHIELD",value:"COVISHIELD",children:"COVISHIELD"})]}),"\xa0",Object(w.jsxs)(x.a,{onChange:function(e){var t=e.target.value;ue(t)},inputProps:{name:"Availablity",id:"age-native-helper"},children:[Object(w.jsx)("option",{"aria-label":"None",value:"",children:"Availablity"}),Object(w.jsx)("option",{"aria-label":"Available",value:"Available",children:"Available"})]})]}),Object(w.jsx)(h.a,{paragraph:!0,children:Object(w.jsx)(I.a,{onClick:function(){fe()},variant:"contained",color:"primary",children:"SEARCH"})})]})}),R.map((function(e){var t=e.name.slice(0,1),a=(e.slots,e.sessions.filter((function(e){return e.available_capacity_dose1>0&&45==e.min_age_limit}))),i=e.sessions.filter((function(e){return e.available_capacity_dose1>0&&18==e.min_age_limit}));return Object(w.jsx)(j.a,{item:!0,xs:12,sm:3,children:Object(w.jsxs)(o.a,{className:Ie.paper,children:[Object(w.jsx)(I.a,{variant:"contained",color:"Green",className:a.length>0?Ie.available:Ie.Notavailable,children:"45+"}),"\xa0",Object(w.jsx)(I.a,{variant:"contained",color:"Green",className:i.length>0?Ie.available:Ie.Notavailable,children:"18+"}),Object(w.jsxs)(N.a,{className:Ie.root,children:[Object(w.jsx)(y.a,{avatar:Object(w.jsx)(A.a,{"aria-label":"recipe",className:Ie.avatar,children:t}),title:e.name+" - "+e.pincode,subheader:e.block_name}),Object(w.jsx)(S.a,{children:Object(w.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"p",children:e.sessions.map((function(t,a){return Object(w.jsxs)(n.a.Fragment,{children:[Object(w.jsx)(h.a,{children:"*********************"}),Object(w.jsxs)(h.a,{children:["Date:",t.date]}),Object(w.jsxs)(h.a,{className:0==t.available_capacity_dose1?Ie.capactitzero:Ie.capactityavailable,children:["Available Capacity [Dose 1] : ",t.available_capacity_dose1]}),Object(w.jsxs)(h.a,{children:["Fees: ",e.fee_type," | Age Limit:",t.min_age_limit," | Vaccine:",t.vaccine]}),Object(w.jsx)(h.a,{children:"Slots "}),t.slots.map((function(e){return"<<"+e+">>"}))]})}))})}),Object(w.jsx)(_.a,{disableSpacing:!0,children:Object(w.jsx)("a",{target:"_blank",href:"https://selfregistration.cowin.gov.in/appointment",children:"Book Appointment"})}),Object(w.jsx)(C.a,{in:K,timeout:"auto",unmountOnExit:!0,children:Object(w.jsxs)(S.a,{children:[Object(w.jsx)(h.a,{paragraph:!0,children:"Address:"}),Object(w.jsx)(h.a,{paragraph:!0,children:e.address}),Object(w.jsxs)(h.a,{paragraph:!0,children:[e.state_name,",",e.district_name,",",e.block_name]})]})})]})]})})}))]}),Object(w.jsxs)(h.a,{className:me?Ie.noresult:Ie.result_found,children:["No Slots Avaliable - Please revisit in someother time ",me]}),Object(w.jsx)("img",{className:Q?Ie.showimage:Ie.hideimage,src:V,alt:"Logo"})]})}),"This Tool has been developed to help my CITIZEN'S of INDIA to get vaccinated,Be Strong ! Stay Strong ! Jai Hind !!",Object(w.jsx)(h.a,{paragraph:!0,children:"Developer:gouthamarul23@gmail.com"})]})};var k=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(D,{})})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,149)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),c(e),s(e)}))};s.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(k,{})}),document.getElementById("root")),T()}},[[74,1,2]]]);
//# sourceMappingURL=main.31d472a6.chunk.js.map