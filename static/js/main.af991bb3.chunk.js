(this["webpackJsonphappy-anniversary"]=this["webpackJsonphappy-anniversary"]||[]).push([[0],{67:function(e,t,s){},99:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(2),i=s(26),l=s.n(i),r=(s(65),s(66),s(67),s(16)),n=s(11),d=s(13),j=s(100),o=s(101),h=s(102),m=s(103),b=s(104),g=s(105),x=s(106),O=s(112),y=s(111),u=s(113),p=s(107);var v=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),s=t[0],i=t[1];return Object(c.jsx)("header",{children:Object(c.jsx)("div",{className:"container-xl",children:Object(c.jsxs)(j.a,{dark:!0,expand:"md",children:[Object(c.jsx)(o.a,{children:"Jet & Bomyung"}),Object(c.jsx)(h.a,{onClick:function(){return i(!s)}}),Object(c.jsx)(m.a,{isOpen:s,navbar:!0,children:Object(c.jsxs)(b.a,{className:"ml-auto",navbar:!0,children:[Object(c.jsx)(g.a,{children:Object(c.jsx)(x.a,{href:"#home",children:"Home"})}),Object(c.jsx)(g.a,{children:Object(c.jsx)(x.a,{href:"#couple",children:"Couple"})}),Object(c.jsxs)(O.a,{nav:!0,inNavbar:!0,children:[Object(c.jsx)(y.a,{nav:!0,caret:!0,children:"Story"}),Object(c.jsxs)(u.a,{right:!0,children:[Object(c.jsx)(p.a,{href:"#story",children:"Story"}),Object(c.jsx)(p.a,{children:Object(c.jsx)(r.Link,{to:"/story-details",children:"Story Details"})})]})]}),Object(c.jsx)(g.a,{children:Object(c.jsx)(x.a,{href:"#gallery",children:"Gallery"})})]})})]})})})},N=s(59),f=s(108),w=s(109),k=s(110),S=s(34),B=s.n(S),J=s(58),T=Object(J.extendMoment)(B.a),D=new Date("November 11, 2019"),G=new Date,H=T.range(D,G).diff("years"),L=(new Date).getFullYear()-1,A=(new Date).getFullYear(),C=new Date("November 11,"+A);var I=function(){return Object(c.jsxs)("div",{className:"slide-content",children:[Object(c.jsx)("div",{className:"slide-subtitle",children:Object(c.jsx)("h4",{children:"GOT MARRIED"})}),Object(c.jsx)("div",{className:"slide-title",children:Object(c.jsxs)("h1",{children:["Happy ",H,"year Anniversary"]})}),Object(c.jsx)("div",{className:"slide-text",children:Object(c.jsxs)("p",{children:["11 November ",G>C?A:L]})}),Object(c.jsx)("div",{className:"animation-pulse",children:Object(c.jsx)("div",{className:"animated-circle"})})]})},R=[{src:s.p+"static/media/title-image-1.233bc166.jpg"},{src:s.p+"static/media/title-image-2.97a07990.jpg"},{src:s.p+"static/media/title-image-3.fa5eb105.jpg"}];var M=function(e){var t=Object(a.useState)(0),s=Object(d.a)(t,2),i=s[0],l=s[1],r=Object(a.useState)(!1),n=Object(d.a)(r,2),j=n[0],o=n[1],h=function(){if(!j){var e=i===R.length-1?0:i+1;l(e)}},m=function(){if(!j){var e=0===i?R.length-1:i-1;l(e)}},b=R.map((function(e){return Object(c.jsx)(N.a,{onExiting:function(){return o(!0)},onExited:function(){return o(!1)},children:Object(c.jsx)("img",{src:e.src,className:"slide-images",alt:"slide-images"})},e.src)}));return Object(c.jsxs)("div",{className:"carousel-container",children:[Object(c.jsx)("div",{className:"carousel-img",children:Object(c.jsxs)(f.a,{activeIndex:i,next:h,previous:m,children:[Object(c.jsx)(w.a,{items:R,activeIndex:i,onClickHandler:function(e){j||l(e)}}),b,Object(c.jsx)(k.a,{direction:"prev",directionText:"Previous",onClickHandler:m}),Object(c.jsx)(k.a,{direction:"next",directionText:"Next",onClickHandler:h})]})}),Object(c.jsx)("div",{className:"carousel-content",children:Object(c.jsx)(I,{})})]})};var F=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),s=t[0],i=t[1],l=Object(a.useState)(""),r=Object(d.a)(l,2),n=r[0],j=r[1],o=Object(a.useState)(""),h=Object(d.a)(o,2),m=h[0],b=h[1],g=Object(a.useState)(""),x=Object(d.a)(g,2),O=x[0],y=x[1],u=Object(a.useRef)();return Object(a.useEffect)((function(){!function(){var e=(new Date).getFullYear(),t=(new Date).getFullYear()+1,s=new Date,c=new Date("November 11,"+e),a=new Date("11/11/".concat(s>=c?t:e)).getTime();u=setInterval((function(){var e=(new Date).getTime(),t=a-e,s=Math.floor(t/864e5),c=Math.floor(t/36e5%24),l=Math.floor(t/1e3/60%60),r=Math.floor(t/1e3%60);t<0?clearInterval(u.current):(i(s),j(c),b(l),y(r))}),1e3)}()})),Object(c.jsx)("div",{className:"countdown-container",children:Object(c.jsxs)("div",{className:"container-sm",children:[Object(c.jsx)("div",{className:"countdown-title",children:Object(c.jsx)("h1",{children:"Our next wedding anniversary is in"})}),Object(c.jsxs)("ul",{className:"row countdown-timer",children:[Object(c.jsxs)("li",{className:"col-lg-3 col-md-3",children:[Object(c.jsx)("p",{className:"time",children:s}),Object(c.jsx)("p",{className:"time-text",children:"DAYS"})]}),Object(c.jsxs)("li",{className:"col-lg-3 col-md-3",children:[Object(c.jsx)("p",{className:"time",children:n}),Object(c.jsx)("p",{className:"time-text",children:"HOURS"})]}),Object(c.jsxs)("li",{className:"col-lg-3 col-md-3",children:[Object(c.jsx)("p",{className:"time",children:m}),Object(c.jsx)("p",{className:"time-text",children:"MINUTES"})]}),Object(c.jsxs)("li",{className:"col-lg-3 col-md-3",children:[Object(c.jsx)("p",{className:"time",children:O}),Object(c.jsx)("p",{className:"time-text",children:"SECONDS"})]})]})]})})},E=s.p+"static/media/Bom-img.3a86578d.jpg",Y=s.p+"static/media/Jet-img.e2bcb277.jpg";var K=function(){return Object(c.jsx)("section",{id:"couple",children:Object(c.jsxs)("div",{className:"couple-container container-xl",children:[Object(c.jsxs)("div",{className:"vector-title",children:[Object(c.jsx)("div",{className:"vector-img"}),Object(c.jsx)("h1",{children:"Happy Couple"})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-6 col-md-6 border-right",children:Object(c.jsxs)("div",{className:"couple-wrap",children:[Object(c.jsx)("div",{className:"couple-img",children:Object(c.jsx)("img",{src:E,alt:"Bom"})}),Object(c.jsxs)("div",{className:"couple-content",children:[Object(c.jsx)("h3",{children:"Choi Bomyung"}),Object(c.jsx)("p",{children:"Kind and loving gal from Busan, South Korea. Likes cakes and fruits. Aspires to be an amazing mom and wife."})]})]})}),Object(c.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(c.jsxs)("div",{className:"couple-wrap",children:[Object(c.jsx)("div",{className:"couple-img",children:Object(c.jsx)("img",{src:Y,alt:"Jet"})}),Object(c.jsxs)("div",{className:"couple-content",children:[Object(c.jsx)("h3",{children:"Tan You Jie Jet"}),Object(c.jsx)("p",{children:"Humorous and considerate guy from Kuala Lumpur, Malaysia. Likes fruitcake and chicken. Already knows he will be an amazing dad and husband (he wrote this)."})]})]})})]})]})})},P=s(25),z=s.p+"static/media/Story-img-1.d98a8a1a.jpg",U=s.p+"static/media/Story-img-2.d0843c09.jpg",W=s.p+"static/media/Story-img-3.4513e637.jpg",q=s.p+"static/media/Story-img-4.e74a04c7.jpg";var Q=function(){return Object(c.jsx)("section",{id:"story",children:Object(c.jsxs)("div",{className:"story-container container-xl",children:[Object(c.jsxs)("div",{className:"vector-title",children:[Object(c.jsx)("div",{className:"vector-img"}),Object(c.jsx)("h1",{children:"Our Love Story"})]}),Object(c.jsx)("div",{className:"story-wrap",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-6 col-md-6 pr",children:Object(c.jsx)("div",{className:"story-img-container",children:Object(c.jsx)("img",{className:"story-img",src:z,alt:"story1"})})}),Object(c.jsx)("div",{className:"col-lg-6 col-md-6 text-container",children:Object(c.jsxs)("div",{className:"story-text left-align-text",children:[Object(c.jsx)("h3",{children:"First time we met"}),Object(c.jsx)("p",{className:"date",children:"Sometime in April, 2011 "}),Object(c.jsx)("p",{className:"story",children:"Jet and Bomyung majored in different fields but in the same university - Nagoya Institute of Technology. They first met during a culture class for foreigners. Jet asked for Bomyung's Facebook address and she gladly shared it with him. Later he contacted her to ask her to bring him along to church with her. They then became good friends and regularly studied in the library as well as went jogging in Tsuruma Park together.".substring(0,215)+"..."}),Object(c.jsx)(P.HashLink,{to:"/story-details#story1",children:"Read More"})]})}),Object(c.jsx)("div",{className:"col-lg-6 col-md-6 text-container",children:Object(c.jsxs)("div",{className:"story-text right-align-text",children:[Object(c.jsx)("h3",{children:"Our first date together"}),Object(c.jsx)("p",{className:"date",children:"Sep 22, 2012"}),Object(c.jsx)("p",{className:"story",children:"Jet prepared a long script in Korean and confessed his feelings to Bomyung at sometime past 1am in Tsuruma Park. At first she declined, saying that she didn't want to lose her best friend because couples who break up stop being friends. Jet persuaded her by saying that she wouldn't want to go out with somebody who she cannot be best friends with. Bomyung finally agreed and accepted him as her boyfriend. Little did she know that he would end up becoming her husband!".substring(0,215)+"..."}),Object(c.jsx)(P.HashLink,{to:"/story-details#story2",children:"Read More"})]})}),Object(c.jsx)("div",{className:"col-lg-6 col-md-6 pl",children:Object(c.jsx)("div",{className:"story-img-container",children:Object(c.jsx)("img",{className:"story-img",src:U,alt:"story2"})})}),Object(c.jsx)("div",{className:"col-lg-6 col-md-6 pr",children:Object(c.jsx)("div",{className:"story-img-container",children:Object(c.jsx)("img",{className:"story-img",src:W,alt:"story3"})})}),Object(c.jsx)("div",{className:"col-lg-6 col-md-6 text-container",children:Object(c.jsxs)("div",{className:"story-text left-align-text",children:[Object(c.jsx)("h3",{children:"Our Engagement"}),Object(c.jsx)("p",{className:"date",children:"Sep 22, 2018"}),Object(c.jsx)("p",{className:"story",children:"Jet and Bomyung went on a trip to Okinawa for their 6th anniversary, with Jet secretly bringing along an engagement ring. At first he planned to give her a romantic proposal by the beach at sunset. However, when the time came Bomyung suddenly felt tired and wanted to go back and rest. So Jet had no choice but to propose to her in the hotel... Of course Bomyung was delighted and accepted his proposal! (She was also curious about the ring and asked him how many carats the diamond was.)".substring(0,215)+"..."}),Object(c.jsx)(P.HashLink,{to:"/story-details#story3",children:"Read More"})]})}),Object(c.jsx)("div",{className:"col-lg-6 col-md-6 text-container",children:Object(c.jsxs)("div",{className:"story-text right-align-text",children:[Object(c.jsx)("h3",{children:"Our Wedding"}),Object(c.jsx)("p",{className:"date",children:"Nov 11, 2019"}),Object(c.jsx)("p",{className:"story",children:"Jet and Bomyung tied the knot at Okinawa, surrounded by their family and blessed by good weather. The wedding ceremony was a short 20-minute session held in a lovely chapel overlooking the sea. It was then followed by the 2-hour reception filled with fun games and touching speeches. (It just so happened that the year 2019 was Reiwa 1 in Japan too so the wedding date was Reiwa 1, 11/11! A memorable day indeed)".substring(0,215)+"..."}),Object(c.jsx)(P.HashLink,{to:"/story-details#story4",children:"Read More"})]})}),Object(c.jsx)("div",{className:"col-lg-6 col-md-6 pl",children:Object(c.jsx)("div",{className:"story-img-container",children:Object(c.jsx)("img",{className:"story-img",src:q,alt:"story4"})})})]})})]})})},V=s.p+"static/media/Gallery-img-1.08b66a8f.jpg",X=s.p+"static/media/Gallery-img-2.0c2856bf.jpg",Z=s.p+"static/media/Gallery-img-3.80a2b66e.jpg",$=s.p+"static/media/Gallery-img-4.d4d7a02d.jpg",_=s.p+"static/media/Gallery-img-5.f8337e6a.jpg",ee=s.p+"static/media/Gallery-img-6.37643be4.jpg",te=s.p+"static/media/Gallery-img-7.6edbc597.jpg",se=s.p+"static/media/Gallery-img-8.1b128527.jpg",ce=s.p+"static/media/Gallery-img-9.4a3f2a7f.jpg",ae=s.p+"static/media/Gallery-img-10.004f95da.jpg",ie=s.p+"static/media/Gallery-img-11.42871f91.jpg",le=s.p+"static/media/Gallery-img-12.c0ab655d.jpg";var re=function(){return Object(c.jsx)("section",{id:"gallery",children:Object(c.jsxs)("div",{className:"gallery-container container-xl",children:[Object(c.jsxs)("div",{className:"vector-title",children:[Object(c.jsx)("div",{className:"vector-img"}),Object(c.jsx)("h1",{children:"Our Gallery"})]}),Object(c.jsx)("div",{className:"gallery-wrap",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-4 col-md-4 gallery-col",children:Object(c.jsx)("div",{className:"gallery-img-container",children:Object(c.jsx)("img",{className:"gallery-img",src:V,alt:"img1"})})}),Object(c.jsx)("div",{className:"col-lg-4 col-md-4 gallery-col",children:Object(c.jsx)("div",{className:"gallery-img-container",children:Object(c.jsx)("img",{className:"gallery-img",src:X,alt:"img2"})})}),Object(c.jsx)("div",{className:"col-lg-4 col-md-4 gallery-col",children:Object(c.jsx)("div",{className:"gallery-img-container",children:Object(c.jsx)("img",{className:"gallery-img",src:Z,alt:"img3"})})}),Object(c.jsx)("div",{className:"col-lg-4 col-md-4 gallery-col",children:Object(c.jsx)("div",{className:"gallery-img-container",children:Object(c.jsx)("img",{className:"gallery-img",src:$,alt:"img4"})})}),Object(c.jsx)("div",{className:"col-lg-4 col-md-4 gallery-col",children:Object(c.jsx)("div",{className:"gallery-img-container",children:Object(c.jsx)("img",{className:"gallery-img",src:_,alt:"img5"})})}),Object(c.jsx)("div",{className:"col-lg-4 col-md-4 gallery-col",children:Object(c.jsx)("div",{className:"gallery-img-container",children:Object(c.jsx)("img",{className:"gallery-img",src:ee,alt:"img6"})})}),Object(c.jsx)("div",{className:"col-lg-4 col-md-4 gallery-col",children:Object(c.jsx)("div",{className:"gallery-img-container",children:Object(c.jsx)("img",{className:"gallery-img",src:te,alt:"img7"})})}),Object(c.jsx)("div",{className:"col-lg-4 col-md-4 gallery-col",children:Object(c.jsx)("div",{className:"gallery-img-container",children:Object(c.jsx)("img",{className:"gallery-img",src:se,alt:"img8"})})}),Object(c.jsx)("div",{className:"col-lg-4 col-md-4 gallery-col",children:Object(c.jsx)("div",{className:"gallery-img-container",children:Object(c.jsx)("img",{className:"gallery-img",src:ce,alt:"img9"})})}),Object(c.jsx)("div",{className:"col-lg-4 col-md-4 gallery-col",children:Object(c.jsx)("div",{className:"gallery-img-container",children:Object(c.jsx)("img",{className:"gallery-img",src:ae,alt:"img10"})})}),Object(c.jsx)("div",{className:"col-lg-4 col-md-4 gallery-col",children:Object(c.jsx)("div",{className:"gallery-img-container",children:Object(c.jsx)("img",{className:"gallery-img",src:ie,alt:"img11"})})}),Object(c.jsx)("div",{className:"col-lg-4 col-md-4 gallery-col",children:Object(c.jsx)("div",{className:"gallery-img-container",children:Object(c.jsx)("img",{className:"gallery-img",src:le,alt:"img12"})})})]})})]})})},ne=s(28),de=s(29);var je=function(){var e=(new Date).getFullYear();return Object(c.jsxs)("footer",{children:[Object(c.jsxs)("div",{className:"end-container",children:[Object(c.jsx)("div",{className:"end-img"}),Object(c.jsx)("div",{className:"end-content",children:Object(c.jsxs)("div",{className:"thank-content",children:[Object(c.jsx)("h1",{children:"Jet & Bomyung"}),Object(c.jsx)("p",{children:"Thank you"})]})}),Object(c.jsx)("div",{className:"copyright-container",children:Object(c.jsxs)("p",{className:"copyright",children:["Copyright \u24d2 ",e," Bomyung Choi"]})})]}),Object(c.jsx)("div",{className:"scroll",children:Object(c.jsx)("a",{href:"#home",children:Object(c.jsx)(ne.a,{icon:de.a})})})]})};var oe=function(){return Object(c.jsxs)("div",{id:"home",className:"container-fluid",children:[Object(c.jsx)(v,{}),Object(c.jsx)(M,{}),Object(c.jsx)(F,{}),Object(c.jsx)(K,{}),Object(c.jsx)(Q,{}),Object(c.jsx)(re,{}),Object(c.jsx)(je,{})]})};var he=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),s=t[0],i=t[1];return Object(c.jsx)("header",{children:Object(c.jsx)("div",{className:"container-xl",children:Object(c.jsxs)(j.a,{dark:!0,expand:"md",children:[Object(c.jsx)(o.a,{children:"Jet & Bomyung"}),Object(c.jsx)(h.a,{onClick:function(){return i(!s)}}),Object(c.jsx)(m.a,{isOpen:s,navbar:!0,children:Object(c.jsxs)(b.a,{className:"ml-auto",navbar:!0,children:[Object(c.jsx)(g.a,{children:Object(c.jsx)(x.a,{href:"#story1",children:"Story1"})}),Object(c.jsx)(g.a,{children:Object(c.jsx)(x.a,{href:"#story2",children:"Story2"})}),Object(c.jsx)(g.a,{children:Object(c.jsx)(x.a,{href:"#story3",children:"Story3"})}),Object(c.jsx)(g.a,{children:Object(c.jsx)(x.a,{href:"#story4",children:"Story4"})})]})})]})})})};var me=function(){return Object(c.jsx)("section",{id:"story-details",children:Object(c.jsxs)("div",{className:"title-container",children:[Object(c.jsx)("div",{className:"title-img"}),Object(c.jsxs)("div",{className:"title-content",children:[Object(c.jsx)("h2",{children:"Story Details"}),Object(c.jsxs)("ol",{children:[Object(c.jsx)("li",{className:"first-item",children:Object(c.jsx)(r.Link,{to:"/",children:"Home"})}),Object(c.jsx)("li",{className:"last-item",children:"Story Details"})]})]})]})})};var be=function(){return Object(c.jsxs)("section",{children:[Object(c.jsx)("section",{id:"story1",children:Object(c.jsxs)("div",{className:"container-xl",children:[Object(c.jsx)("div",{className:"story-image-container",children:Object(c.jsx)("img",{className:"story-image",src:z,alt:"story1"})}),Object(c.jsx)("div",{className:"story-text-container",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"First time we met"}),Object(c.jsx)("p",{className:"date",children:"Sometime in April, 2011 "}),Object(c.jsx)("p",{children:"Jet and Bomyung majored in different fields but in the same university - Nagoya Institute of Technology. They first met during a culture class for foreigners. Jet asked for Bomyung's Facebook address and she gladly shared it with him. Later he contacted her to ask her to bring him along to church with her. They then became good friends and regularly studied in the library as well as went jogging in Tsuruma Park together."})]})})]})}),Object(c.jsx)("section",{id:"story2",children:Object(c.jsxs)("div",{className:"container-xl",children:[Object(c.jsx)("div",{className:"story-image-container",children:Object(c.jsx)("img",{className:"story-image",src:U,alt:"story2"})}),Object(c.jsx)("div",{className:"story-text-container",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Our first date together"}),Object(c.jsx)("p",{className:"date",children:"Sep 22, 2012"}),Object(c.jsx)("p",{children:"Jet prepared a long script in Korean and confessed his feelings to Bomyung at sometime past 1am in Tsuruma Park. At first she declined, saying that she didn't want to lose her best friend because couples who break up stop being friends. Jet persuaded her by saying that she wouldn't want to go out with somebody who she cannot be best friends with. Bomyung finally agreed and accepted him as her boyfriend. Little did she know that he would end up becoming her husband!"})]})})]})}),Object(c.jsx)("section",{id:"story3",children:Object(c.jsxs)("div",{className:"container-xl",children:[Object(c.jsx)("div",{className:"story-image-container",children:Object(c.jsx)("img",{className:"story-image",src:W,alt:"story3"})}),Object(c.jsx)("div",{className:"story-text-container",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Our Engagement"}),Object(c.jsx)("p",{className:"date",children:"Sep 22, 2018 "}),Object(c.jsx)("p",{children:"Jet and Bomyung went on a trip to Okinawa for their 6th anniversary, with Jet secretly bringing along an engagement ring. At first he planned to give her a romantic proposal by the beach at sunset. However, when the time came Bomyung suddenly felt tired and wanted to go back and rest. So Jet had no choice but to propose to her in the hotel... Of course Bomyung was delighted and accepted his proposal! (She was also curious about the ring and asked him how many carats the diamond was.)"})]})})]})}),Object(c.jsx)("section",{id:"story4",children:Object(c.jsxs)("div",{className:"container-xl",children:[Object(c.jsx)("div",{className:"story-image-container",children:Object(c.jsx)("img",{className:"story-image",src:q,alt:"story4"})}),Object(c.jsx)("div",{className:"story-text-container last",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Our Wedding"}),Object(c.jsx)("p",{className:"date",children:"Nov 11, 2019 "}),Object(c.jsx)("p",{children:"Jet and Bomyung tied the knot at Okinawa, surrounded by their family and blessed by good weather. The wedding ceremony was a short 20-minute session held in a lovely chapel overlooking the sea. It was then followed by the 2-hour reception filled with fun games and touching speeches. (It just so happened that the year 2019 was Reiwa 1 in Japan too so the wedding date was Reiwa 1, 11/11! A memorable day indeed)"})]})})]})})]})};var ge=function(){var e=(new Date).getFullYear();return Object(c.jsxs)("footer",{children:[Object(c.jsxs)("div",{className:"end-container",children:[Object(c.jsx)("div",{className:"end-img"}),Object(c.jsx)("div",{className:"end-content",children:Object(c.jsxs)("div",{className:"thank-content",children:[Object(c.jsx)("h1",{children:"Jet & Bomyung"}),Object(c.jsx)("p",{children:"Thank you"})]})}),Object(c.jsx)("div",{className:"copyright-container",children:Object(c.jsxs)("p",{className:"copyright",children:["Copyright \u24d2 ",e," Bomyung Choi"]})})]}),Object(c.jsx)("div",{className:"scroll",children:Object(c.jsx)("a",{href:"#story-details",children:Object(c.jsx)(ne.a,{icon:de.a})})})]})};var xe=function(){return Object(c.jsxs)("div",{id:"story-details",className:"container-fluid",children:[Object(c.jsx)(he,{}),Object(c.jsx)(me,{}),Object(c.jsx)(be,{}),Object(c.jsx)(ge,{})]})};var Oe=function(){return Object(c.jsxs)(n.g,{children:[Object(c.jsx)(n.d,{exact:!0,path:"/",component:oe}),Object(c.jsx)(n.d,{path:"/story-details",component:xe})]})};var ye=function(){return Object(c.jsx)(r.BrowserRouter,{basename:"/happy-anniversary",children:Object(c.jsx)("div",{children:Object(c.jsx)(Oe,{})})})};l.a.render(Object(c.jsx)(ye,{}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.af991bb3.chunk.js.map