import{S as G,i as M,s as R,k as q,a as k,y as I,l as v,m as w,h,c as K,z as x,n as m,Q as H,b as O,R as $,A as E,g as y,d as S,B as D,q as B,r as A,u as Y,X as L,f as P,Y as U,w as F,Z as Q,_ as T,v as X}from"../chunks/index.c9fe6f64.js";import{T as V}from"../chunks/NavigationView.svelte_svelte_type_style_lang.f82699d1.js";function Z(r){let e;return{c(){e=B(r[0])},l(t){e=A(t,r[0])},m(t,s){O(t,e,s)},p(t,s){s&1&&Y(e,t[0])},d(t){t&&h(e)}}}function j(r){let e;return{c(){e=B(r[1])},l(t){e=A(t,r[1])},m(t,s){O(t,e,s)},p(t,s){s&2&&Y(e,t[1])},d(t){t&&h(e)}}}function C(r){let e,t,s,u,f,g,d,n,i,_,o;return n=new V({props:{class:"question",variant:"bodyLarge",style:"margin-top: 15px; font-size: 20px;",$$slots:{default:[Z]},$$scope:{ctx:r}}}),_=new V({props:{class:"answer",style:"margin-left: 25px; margin-top: auto; margin-right: 20px; margin-bottom:auto;",$$slots:{default:[j]},$$scope:{ctx:r}}}),{c(){e=q("div"),t=q("div"),s=q("div"),u=q("img"),g=k(),d=q("div"),I(n.$$.fragment),i=k(),I(_.$$.fragment),this.h()},l(a){e=v(a,"DIV",{class:!0});var c=w(e);t=v(c,"DIV",{class:!0});var l=w(t);s=v(l,"DIV",{});var p=w(s);u=v(p,"IMG",{class:!0,src:!0,alt:!0}),p.forEach(h),g=K(l),d=v(l,"DIV",{});var b=w(d);x(n.$$.fragment,b),b.forEach(h),l.forEach(h),i=K(c),x(_.$$.fragment,c),c.forEach(h),this.h()},h(){m(u,"class","hero svelte-14u1aqy"),H(u.src,f="/images/question.png")||m(u,"src",f),m(u,"alt","question-hero"),m(t,"class","content svelte-14u1aqy"),m(e,"class","card svelte-14u1aqy")},m(a,c){O(a,e,c),$(e,t),$(t,s),$(s,u),$(t,g),$(t,d),E(n,d,null),$(e,i),E(_,e,null),o=!0},p(a,[c]){const l={};c&5&&(l.$$scope={dirty:c,ctx:a}),n.$set(l);const p={};c&6&&(p.$$scope={dirty:c,ctx:a}),_.$set(p)},i(a){o||(y(n.$$.fragment,a),y(_.$$.fragment,a),o=!0)},o(a){S(n.$$.fragment,a),S(_.$$.fragment,a),o=!1},d(a){a&&h(e),D(n),D(_)}}}function J(r,e,t){let{question:s}=e,{answer:u}=e;return r.$$set=f=>{"question"in f&&t(0,s=f.question),"answer"in f&&t(1,u=f.answer)},[s,u]}class N extends G{constructor(e){super(),M(this,e,J,C,R,{question:0,answer:1})}}function W(r,e,t){const s=r.slice();return s[4]=e[t],s[5]=e,s[6]=t,s}function ee(r){let e;return{c(){e=B("KeyOS FAQ")},l(t){e=A(t,"KeyOS FAQ")},m(t,s){O(t,e,s)},d(t){t&&h(e)}}}function z(r){let e,t,s,u;function f(n){r[2](n,r[4])}function g(n){r[3](n,r[4])}let d={};return r[4].question!==void 0&&(d.question=r[4].question),r[4].answer!==void 0&&(d.answer=r[4].answer),e=new N({props:d}),F.push(()=>Q(e,"question",f)),F.push(()=>Q(e,"answer",g)),{c(){I(e.$$.fragment)},l(n){x(e.$$.fragment,n)},m(n,i){E(e,n,i),u=!0},p(n,i){r=n;const _={};!t&&i&1&&(t=!0,_.question=r[4].question,T(()=>t=!1)),!s&&i&1&&(s=!0,_.answer=r[4].answer,T(()=>s=!1)),e.$set(_)},i(n){u||(y(e.$$.fragment,n),u=!0)},o(n){S(e.$$.fragment,n),u=!1},d(n){D(e,n)}}}function te(r){let e,t,s,u,f,g,d;s=new V({props:{variant:"display",style:"margin-left: 20px; margin-right: 20px; font-size: 60px;",$$slots:{default:[ee]},$$scope:{ctx:r}}});let n=r[0],i=[];for(let o=0;o<n.length;o+=1)i[o]=z(W(r,n,o));const _=o=>S(i[o],1,1,()=>{i[o]=null});return{c(){e=q("div"),t=q("div"),I(s.$$.fragment),u=k(),f=q("div");for(let o=0;o<i.length;o+=1)i[o].c();g=k(),this.h()},l(o){e=v(o,"DIV",{id:!0,class:!0});var a=w(e);t=v(a,"DIV",{id:!0,class:!0});var c=w(t);x(s.$$.fragment,c),c.forEach(h),u=K(a),f=v(a,"DIV",{id:!0,class:!0});var l=w(f);for(let b=0;b<i.length;b+=1)i[b].l(l);l.forEach(h),a.forEach(h),g=K(o),L("svelte-12rvoxy",document.head).forEach(h),this.h()},h(){m(t,"id","intro"),m(t,"class","svelte-1g1qnaq"),m(f,"id","card-container"),m(f,"class","svelte-1g1qnaq"),m(e,"id","container"),m(e,"class","svelte-1g1qnaq"),document.title="KeyOS • FAQ"},m(o,a){O(o,e,a),$(e,t),E(s,t,null),$(e,u),$(e,f);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(f,null);O(o,g,a),d=!0},p(o,[a]){const c={};if(a&128&&(c.$$scope={dirty:a,ctx:o}),s.$set(c),a&1){n=o[0];let l;for(l=0;l<n.length;l+=1){const p=W(o,n,l);i[l]?(i[l].p(p,a),y(i[l],1)):(i[l]=z(p),i[l].c(),y(i[l],1),i[l].m(f,null))}for(X(),l=n.length;l<i.length;l+=1)_(l);P()}},i(o){if(!d){y(s.$$.fragment,o);for(let a=0;a<n.length;a+=1)y(i[a]);d=!0}},o(o){S(s.$$.fragment,o),i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)S(i[a]);d=!1},d(o){o&&h(e),D(s),U(i,o),o&&h(g)}}}function ne(r,e,t){const u=[{question:"What is KeyOS?",answer:"KeyOS is an OS based on Windows 10 which aims to fix huge problems with Windows 10."},{question:"What are the requirements to run KeyOS?",answer:"The requirements for KeyOS are: 1GB of RAM and atleast 12GB of space on your hard disk."},{question:"How do i install KeyOS?",answer:"To install KeyOS, download an ISO and if installing on real hardware flash the ISO on a USB drive."},{question:"Is KeyOS free?",answer:"Yes - KeyOS is an entirely free OS for anyone to use."}];function f(d,n){r.$$.not_equal(n.question,d)&&(n.question=d,t(0,u))}function g(d,n){r.$$.not_equal(n.answer,d)&&(n.answer=d,t(0,u))}return[u,!0,f,g]}class re extends G{constructor(e){super(),M(this,e,ne,te,R,{prerender:1})}get prerender(){return this.$$.ctx[1]}}export{re as default};
