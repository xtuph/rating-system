(this["webpackJsonprating-system"]=this["webpackJsonprating-system"]||[]).push([[0],{13:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(18),i=n.n(r),a=(n(24),n(13),n(7)),o=n(16),j=n(0),l={ratings:[]},d=Object(c.createContext)(l),u=function(){return Object(c.useContext)(d)},h=function(e){var t=e.children,n=Object(c.useReducer)((function(e,t){return Object(o.a)(Object(o.a)({},e),t)}),l),s=Object(a.a)(n,2),r=s[0],i=s[1];return Object(j.jsx)(d.Provider,{value:[r,i],children:t})},b=n.p+"static/media/star_black_24dp.ecf2636e.svg",O=n.p+"static/media/star_outline_black_24dp.6bc663d6.svg",x=n(9),g={0:"Please rate your overall experience you had with your booking.",1:"Did this person use clear language and explain exactly what they were requesting? Are they responding to follow-up questions in a timely manner?",2:"Did this person accurately describe what they were planning to do during land access? Was the party size correct or exceeded? Did they undertake activities they did not specify in the request?",3:"Did this user keep to the timelines of the access request? Did they check-in and check out at the appropriate time?",4:"How did this recreational user leave things on your land after the trip? Were instructions followed? Did they cause damage and leave a mess or did they clean up after themselves?",noRating:"Please select a rating!"},m={0:"Experience",1:"Communication",2:"Accuracy",3:"Timeliness",4:"Stewardship",5:"Summary"},v=[],f=function(e){var t=Object(c.useState)(0),n=Object(a.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(0),o=Object(a.a)(i,2),l=o[0],d=o[1],h=Object(c.useState)(0),f=Object(a.a)(h,2),p=f[0],y=f[1],w=Object(c.useState)(!1),N=Object(a.a)(w,2),k=N[0],C=N[1],M=u(),E=Object(a.a)(M,2),S=E[0],D=E[1],L=g[p],T=k?g.noRating:"",F=S.ratings,P=p>=5,R=0;if(P){for(var _=0,q=0;q<v.length;q++)_+=v[q];R=_/v.length}return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Rate your experience"}),Object(j.jsx)("h2",{children:m[p]}),P?Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"rating-row",children:[Object(j.jsx)("div",{children:m[0]}),Object(j.jsx)("div",{children:v[0]})]}),Object(j.jsxs)("div",{className:"rating-row",children:[Object(j.jsx)("div",{children:m[1]}),Object(j.jsx)("div",{children:v[1]})]}),Object(j.jsxs)("div",{className:"rating-row",children:[Object(j.jsx)("div",{children:m[2]}),Object(j.jsx)("div",{children:v[2]})]}),Object(j.jsxs)("div",{className:"rating-row",children:[Object(j.jsx)("div",{children:m[3]}),Object(j.jsx)("div",{children:v[3]})]}),Object(j.jsxs)("div",{className:"rating-row",children:[Object(j.jsx)("div",{children:m[4]}),Object(j.jsx)("div",{children:v[4]})]}),Object(j.jsx)("div",{className:"btn-row",children:Object(j.jsx)(x.b,{to:"/rating-system/",children:Object(j.jsx)("button",{className:"btn",onClick:function(){F.push(R),D({ratings:F})},children:"SUBMIT"})})})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"message",children:L}),Object(j.jsxs)("div",{className:"star-row",children:[Object(j.jsx)("img",{src:s>=1||l>=1?b:O,alt:"star1",className:"star",onClick:function(){return r(1)},onMouseEnter:function(){return d(1)},onMouseLeave:function(){return d(0)}}),Object(j.jsx)("img",{src:s>=2||l>=2?b:O,alt:"star2",className:"star",onClick:function(){return r(2)},onMouseEnter:function(){return d(2)},onMouseLeave:function(){return d(0)}}),Object(j.jsx)("img",{src:s>=3||l>=3?b:O,alt:"star3",className:"star",onClick:function(){return r(3)},onMouseEnter:function(){return d(3)},onMouseLeave:function(){return d(0)}}),Object(j.jsx)("img",{src:s>=4||l>=4?b:O,alt:"star4",className:"star",onClick:function(){return r(4)},onMouseEnter:function(){return d(4)},onMouseLeave:function(){return d(0)}}),Object(j.jsx)("img",{src:s>=5||l>=5?b:O,alt:"star5",className:"star",onClick:function(){return r(5)},onMouseEnter:function(){return d(5)},onMouseLeave:function(){return d(0)}})]}),Object(j.jsx)("p",{children:T}),Object(j.jsx)("div",{className:"btn-row",children:Object(j.jsx)("button",{type:"button",className:"btn",onClick:function(){s>0?(v.push(s),y(p+1),r(0),C(!1)):C(!0)},children:"NEXT"})})]})]})},p=function(){for(var e=u(),t=Object(a.a)(e,2),n=t[0],c=(t[1],n.ratings),s=0,r=0;r<c.length;r++)s+=c[r];var i=s/c.length;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Booking"}),Object(j.jsxs)("p",{children:[i?i.toFixed(1):0,"/5 stars (",c.length," ratings)"]}),Object(j.jsx)("div",{className:"btn-row",children:Object(j.jsx)(x.b,{to:"/rating-system/rating",children:Object(j.jsx)("button",{className:"btn",children:"RATE"})})})]})},y=n(2),w=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(h,{children:Object(j.jsx)(x.a,{children:Object(j.jsxs)(y.c,{children:[Object(j.jsx)(y.a,{path:"/rating-system//rating",children:Object(j.jsx)(f,{})}),Object(j.jsx)(y.a,{path:"/rating-system/",children:Object(j.jsx)(p,{})})]})})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),N()}},[[31,1,2]]]);
//# sourceMappingURL=main.343263bb.chunk.js.map