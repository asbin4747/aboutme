(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{893:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Contact",function(){return n(9171)}])},584:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(5893),a=n(7294),s=n(4731),i=n(7621),l=n(793),o=n(5235),u=n(1953),c=n(3845),d=n(9630),m=n(8016),f=n(9762),x=n(1927),h=n(5247),v=n(6614);n(2027);var g=n(1163),j=n(3454);let p=(0,f.Z)({components:{MuiButton:{styleOverrides:{root:{}}}}});function _(){let[e,t]=(0,a.useState)(""),[n,f]=(0,a.useState)(""),[_,b]=(0,a.useState)(""),[E,N]=(0,a.useState)(!1),[Z,w]=(0,a.useState)(!1),[C,S]=(0,a.useState)({}),[y,I]=(0,a.useState)(!1),P=(0,g.useRouter)(),T=(0,a.useRef)(),B=j.env.NEXT_PUBLIC_SERVICE_ID,L=j.env.NEXT_PUBLIC_TEMPLATE_ID,O=j.env.NEXT_PUBLIC_PUBLIC_KEY,k=()=>{let e=!0;if(n||(e=!1,C.name="Name cannot be empty"),void 0===n||n.match(/^[\s*a\s*-z\s*A\s*-Z\s*]+$/)||(e=!1,C.name="Name is not valid"),_||(e=!1,C.email="Email cannot be empty"),void 0!==_){let t=_.lastIndexOf("@"),r=_.lastIndexOf(".");t<r&&t>0&&-1==_.indexOf("@@")&&r>2&&_.length-r>2||(e=!1,C.email="Email is not valid")}return S({errors:C}),I(!0),e},D=e=>{e.preventDefault(),new FormData(e.currentTarget),k()?(h.ZP.sendForm(B,L,T.current,O).then(e=>{N(!0),setTimeout(()=>{P.push("/")},5e3)},e=>{w(!0)}),e.target.reset(),t(""),f(""),b("")):I(!0)};return(0,r.jsx)(x.Z,{theme:p,children:(0,r.jsxs)(m.Z,{component:"main",maxWidth:"xs",children:[(0,r.jsx)(l.ZP,{}),(0,r.jsxs)(u.Z,{sx:{marginTop:[4,8],marginBottom:[0,10],display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,r.jsx)(s.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,r.jsx)(c.Z,{})}),(0,r.jsx)(d.Z,{component:"h1",variant:"h5",children:"Let us get connected"}),(0,r.jsxs)(u.Z,{component:"form",ref:T,onSubmit:D,noValidate:!0,sx:{mt:1},children:[(0,r.jsx)(o.Z,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",value:n,onChange:e=>f(e.target.value),autoFocus:!0}),(0,r.jsx)(o.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",value:_,name:"email",autoComplete:"email",onChange:e=>b(e.target.value)}),(0,r.jsx)(o.Z,{id:"outlined-multiline-flexible",label:"Message",name:"message",multiline:!0,rows:8,value:e,onChange:e=>t(e.target.value),fullWidth:!0}),(0,r.jsx)(i.Z,{className:" border-2 bg-purple-800 text-white hover:none",type:"submit",variant:"contained",sx:{mt:3,mb:2},children:"Contact"})]}),E&&(0,r.jsx)(v.default,{success:E}),Z&&(0,r.jsx)(v.default,{failedResponse:Z}),y&&(0,r.jsx)(v.default,{errors:C})]})]})})}},2027:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893);function a(){return(0,r.jsxs)("div",{className:"flex text-blue-600 pt-3",children:[(0,r.jsx)("div",{children:"Sorry, Something wrong with our server. Please try again!"}),";"]})}n(7294)},6614:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893);function a(e){let{success:t,failedResponse:n,errors:a}=e;return console.log("Error from formvalidation",a),(0,r.jsxs)(r.Fragment,{children:[t&&(0,r.jsx)("div",{className:"flex text-blue-600 pt-3",children:"Thank you for connecting. I will be in touch!"}),n&&(0,r.jsxs)("div",{className:"flex text-blue-600 pt-3",children:[(0,r.jsx)("div",{children:"Sorry, Something wrong with our server. Please try again!"}),";"]}),a&&(0,r.jsxs)("div",{className:"flex text-red-600",children:[a.errors.name," ","."," ",a.errors.email,"."]})]})}n(7294)},9171:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5893);n(7294);var a=n(584);function s(){return(0,r.jsx)("div",{children:(0,r.jsx)(a.default,{})})}}},function(e){e.O(0,[78,774,888,179],function(){return e(e.s=893)}),_N_E=e.O()}]);