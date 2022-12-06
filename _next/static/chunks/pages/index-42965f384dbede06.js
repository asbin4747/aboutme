(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4731:function(e,t,a){"use strict";a.d(t,{Z:function(){return w}});var s=a(3366),r=a(7462),n=a(7294),i=a(6010),o=a(4780),l=a(1719),c=a(8884),d=a(8175),u=a(5893),m=(0,d.Z)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),p=a(1588),f=a(4867);function h(e){return(0,f.Z)("MuiAvatar",e)}(0,p.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let x=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],v=e=>{let{classes:t,variant:a,colorDefault:s}=e;return(0,o.Z)({root:["root",a,s&&"colorDefault"],img:["img"],fallback:["fallback"]},h,t)},g=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver(e,t){let{ownerState:a}=e;return[t.root,t[a.variant],a.colorDefault&&t.colorDefault]}})(({theme:e,ownerState:t})=>(0,r.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,r.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),b=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),j=(0,l.ZP)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"}),y=n.forwardRef(function(e,t){let a=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:o,children:l,className:d,component:m="div",imgProps:p,sizes:f,src:h,srcSet:y,variant:w="circular"}=a,k=(0,s.Z)(a,x),S=null,D=function({crossOrigin:e,referrerPolicy:t,src:a,srcSet:s}){let[r,i]=n.useState(!1);return n.useEffect(()=>{if(!a&&!s)return;i(!1);let r=!0,n=new Image;return n.onload=()=>{r&&i("loaded")},n.onerror=()=>{r&&i("error")},n.crossOrigin=e,n.referrerPolicy=t,n.src=a,s&&(n.srcset=s),()=>{r=!1}},[e,t,a,s]),r}((0,r.Z)({},p,{src:h,srcSet:y})),C=h||y,N=C&&"error"!==D,Z=(0,r.Z)({},a,{colorDefault:!N,component:m,variant:w}),A=v(Z);return S=N?(0,u.jsx)(b,(0,r.Z)({alt:o,src:h,srcSet:y,sizes:f,ownerState:Z,className:A.img},p)):null!=l?l:C&&o?o[0]:(0,u.jsx)(j,{className:A.fallback}),(0,u.jsx)(g,(0,r.Z)({as:m,ownerState:Z,className:(0,i.Z)(A.root,d),ref:t},k,{children:S}))});var w=y},5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(4369)}])},1559:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return n}});var s=a(5893);a(7294);var r=a(7573);function n(){return(0,s.jsx)("div",{className:"bg-cover m-2 sm:m-0 bg-no-repeat sm:bg-[url('../public/aboutBackground.jpeg')] sm:p-32",children:(0,s.jsx)(r.default,{})})}},7573:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var s=a(5893);a(7294);var r=a(3979),n=a(911),i=a(2045);function o(){return(0,s.jsx)(r.Z,{className:"shadow-2xl blue_background text-center m-2 p-4 sm:m-4 sm:p-8 sm:max-w-4xl sm:mx-auto",children:(0,s.jsxs)(i.Z,{maxWidth:"lg",children:[(0,s.jsx)(n.C,{className:"text-black text-3xl sm:text-5xl mb-2",children:"ABOUT ME"}),(0,s.jsx)(n.C,{className:"text-black md:text-2xl animate-pulse",children:"I am Austin based developer passionate about web development and software engineering. I have experience working in eCommerce industry, experience developing a payment solution as a software engineer, and as a software developer in different projects ranging from android development, machine learning, web development to software testing and validation. Some of the programming languages that I have worked with are Java, JavaScript, Python, SQL, C/C++."})]})})}},7900:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return n}});var s=a(5893);a(7294);var r=a(4731);function n(){return(0,s.jsxs)("div",{className:"flex flex-row space-x-4 m-2 sm:space-x-10 mt-6 border-4 p-2 shadow-2xl blue_background sm:education_card",children:[(0,s.jsx)("div",{className:"self-center",children:(0,s.jsx)(r.Z,{src:"/aboutme/CSUNS.svg.png",sx:{height:["50px","150px"],width:["50px","150px"],border:2,borderColor:"error.main"}})}),(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsx)("div",{className:"font-bold text-lg",children:"Education"}),(0,s.jsx)("div",{children:"Bachelor in Computer Science"}),(0,s.jsx)("div",{className:"education_item_border",children:"California State University"}),(0,s.jsx)("div",{className:"education_item_border",children:"Cum Laude Honors"})]})]})}},1896:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var s=a(5893);a(7294);var r=a(3280),n=a(9684),i=a(1163);function o(){var e,t,a,o;let l=(0,i.useRouter)(),c=e=>{e.preventDefault(),l.push("/ExperiencePage")};return(0,s.jsxs)("div",{className:"flex flex-col m-2 sm:m-4",children:[(0,s.jsx)("div",{className:"text-4xl flex border-2 max-w-sm sm:p-3 sm:mx-auto justify-center sm:text-5xl my-10 text-center bg-slate-100",children:(0,s.jsx)("h1",{children:"Career"})}),(0,s.jsx)("div",{className:"flex flex-col sm:flex-row justify-center sm:medium_screen_experience ",children:n.map((n,i)=>(0,s.jsx)("section",{className:"flex flex-col mb-6 shadow-2xl border-4",onClick:c,children:(0,s.jsxs)("div",{className:"flex flex-col p-2 space-y-2 sm:p-12 sm:space-x-4 items-center blue_background",children:[(0,s.jsx)(r.Z,{alt:"Asbin",src:"/aboutme"+n.cardTitle.imgSource,sx:{height:["100px","150px"],width:["100px","150px"],border:2,borderColor:"error.main"}}),(0,s.jsx)("div",{className:"font-extrabold",children:null!==(e=n.cardTitle.position)&&void 0!==e?e:""}),(0,s.jsx)("div",{className:"font-semibold",children:null!==(t=n.cardTitle.company)&&void 0!==t?t:""}),(0,s.jsx)("div",{children:null!==(a=n.cardTitle.date)&&void 0!==a?a:""}),(0,s.jsx)("div",{children:null!==(o=n.cardTitle.location)&&void 0!==o?o:""})]})},i))})]})}},8149:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return i}});var s=a(5893);a(7294);var r=a(3280),n=a(9958);function i(){let e="/aboutme";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"text-4xl p-2 flex border-2 max-w-sm m-2 sm:p-3 sm:mx-auto justify-center sm:text-5xl my-10 text-center bg-slate-100",children:(0,s.jsx)("h1",{className:"",children:"Tech Stack"})}),(0,s.jsx)("div",{className:"",children:(0,s.jsxs)(n.Z,{className:" gap-x-6 sm:gap-x-20 justify-center pb-4",size:"lg",children:[(0,s.jsx)(r.Z,{alt:"Javascript",src:e+"/javascript.png"}),(0,s.jsx)(r.Z,{alt:"React",src:e+"/react.jpg"}),(0,s.jsx)(r.Z,{alt:"Java",src:e+"/java.png"}),(0,s.jsx)(r.Z,{alt:"Html",src:e+"/html.png"}),(0,s.jsx)(r.Z,{alt:"Python",src:e+"/python.png"}),(0,s.jsx)(r.Z,{alt:"Sql",src:e+"/sql.png"})]})})]})}},4369:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var s=a(5893),r=a(9008),n=a.n(r),i=a(1559);a(7573);var o=a(7900),l=a(1896);a(2634);var c=a(8149);function d(){return(0,s.jsxs)("div",{children:[(0,s.jsxs)(n(),{children:[(0,s.jsx)("title",{children:"Asbin Dahal"}),(0,s.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,s.jsx)("link",{rel:"icon",href:"/aboutme/favicon.ico"})]}),(0,s.jsxs)("main",{className:"",children:[(0,s.jsx)("div",{children:(0,s.jsx)(i.default,{})}),(0,s.jsx)("div",{children:(0,s.jsx)(l.default,{})}),(0,s.jsx)("div",{children:(0,s.jsx)(o.default,{})}),(0,s.jsx)("div",{children:(0,s.jsx)(c.default,{})})]})]})}},9008:function(e,t,a){e.exports=a(3121)},1163:function(e,t,a){e.exports=a(880)},9684:function(e){"use strict";e.exports=JSON.parse('[{"cardTitle":{"position":"Full Stack Software Developer","company":"General Motors","location":"Austin, TX","date":"March, 2021 - Present","imgSource":"/general-motors.png"},"jobDescription":{"description":"Working as a software developer within the eCommerce team to support the customer sites and business facing application.","jobDuties":[{"jobDuty":"Working as a software developer within the eCommerce team to develop code supporting the customer sites and B2B application selling automotive parts for General Motors vehicles."},{"jobDuty":"Primary responsibilities include supporting eCommerce sites as a frontend developer, working with the backend team to deploy PCF applications and support Order Management as well as support the QE team to validate business stories."},{"jobDuty":"Experience working with JavaScript and React and to create sharable components, worked with React hooks, created interactive and dynamic UI pages for product searches, used Redux to manage and update the application state by creating stores and various actions to update the state."},{"jobDuty":"Implemented responsive web design techniques using flexbox and SaaS, used Axios to make CRUD requests as well as async requests to retrieve and update data, used NodeJS to access and generate tokens for authentication. Also, worked with JavaScript cookies to store session storage and vehicle fitment data."},{"jobDuty":"Experience working with Order Management System (OMS) to facilitate the eCommerce orders, created different classes primarily in Java within OMS to support the business stories, worked with IBM Sterling to manage business facing application, and wrote SQL queries to retrieve and update orders in the OMS database. "},{"jobDuty":"Worked with QE to write automated test scripts in Java using Selenium, helped identify and fix bugs, address different software impacts, and documented test defects and procedures."},{"jobDuty":"Worked with DevOps to create pipelines for deployments, create repo and branches for releases, and supported the deployment plans."},{"jobDuty":"Trained new hires to get familiar with the eCommerce, and development process at GM, refactored old code base to deploy new features, and participated in code reviews to improve code quality and efficiency."}]}},{"cardTitle":{"position":"Software Engineer","company":"Tata Consultancy Services","location":"Los Angeles, CA","state":"California","date":"October, 2020 - March, 2020","imgSource":"/tcs.png"},"jobDescription":{"description":"Worked with the payment system team to build an internal payment testing system for a business client. ","jobDuties":[{"jobDuty":"Worked as a developer to support a new payment system being implemented for a business client. Coded primarily in Java to create classes and interfaces to support the payment system, assisted in architectural design and documentation."},{"jobDuty":"Created SQL queries using SQL Developer tools to analyze data, designed and implement test cases and processes for client software and system development projects, wrote unit test cases in JUnit to validate the business features of payment gateway system, and ensured the proper functionality of invoices and emails generated by the system."},{"jobDuty":"Developed JSP pages using the MVC pattern, designed JSON responses for API calls, and wrote code by extensively using java collection classes like List, Set, HashMap, ArrayList.  "},{"jobDuty":"Developed email templates for successful transactions using html and css, worked with team members to create REST API\'S and implement CRUD actions on those API."},{"jobDuty":"Collabrated with Product Managers to refine requirements, participated in daily sprints, and participated in SDLC process for analysis, design, coding, testing, implementation of client products."}]}},{"cardTitle":{"position":"Software Developer Intern","company":"CetalDeveSolutions","location":"Los Angeles, CA","date":"May, 2021 - August, 2019","imgSource":"/cetaldevelogo.png"},"jobDescription":{"description":"Worked in agile environment, collaborated with senior developers on business stories, and reworked existing codebase","jobDuties":[{"jobDuty":"Worked in agile environment, collaborated with senior developers on business stories."},{"jobDuty":"Worked with senior developers to create web services using REST API, used Junit for writing unit tests, and LOG4J for debugging and testing."},{"jobDuty":"Worked with senior developers to document the REST API, created mock designs usign Figma for business stories, and participated in daily sprints."}]}}]')}},function(e){e.O(0,[769,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);