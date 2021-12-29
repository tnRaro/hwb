import{S as ie,i as oe,s as ue,e as _,t as g,j as T,c,a as I,g as E,d as k,l as L,b as s,J as K,f as de,H as e,K as M,L as j,h as $,I as ae,M as fe,N as x}from"../chunks/vendor-c8fe7531.js";function pe(t){let p,n,m,N,y,d,C,B,G,U,u,r,i,v,S,a,W,b,f,H,V,z,D=(t[1]*100|0)+"",q,F,O=(t[2]*100|0)+"",J,Q,X,P,Y,R,Z,ee;return{c(){p=_("main"),n=_("section"),m=_("label"),N=g("Hue"),y=T(),d=_("input"),C=T(),B=_("label"),G=g("Whiteness"),U=T(),u=_("input"),r=T(),i=_("label"),v=g("Blackness"),S=T(),a=_("input"),W=T(),b=_("section"),f=_("pre"),H=g("background: hwb("),V=g(t[0]),z=g("deg "),q=g(D),F=g("% "),J=g(O),Q=g("%);"),X=T(),P=_("div"),Y=T(),R=_("div"),this.h()},l(l){p=c(l,"MAIN",{class:!0});var o=I(p);n=c(o,"SECTION",{id:!0,class:!0});var h=I(n);m=c(h,"LABEL",{for:!0});var te=I(m);N=E(te,"Hue"),te.forEach(k),y=L(h),d=c(h,"INPUT",{id:!0,type:!0,min:!0,max:!0}),C=L(h),B=c(h,"LABEL",{for:!0});var se=I(B);G=E(se,"Whiteness"),se.forEach(k),U=L(h),u=c(h,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0}),r=L(h),i=c(h,"LABEL",{for:!0});var ne=I(i);v=E(ne,"Blackness"),ne.forEach(k),S=L(h),a=c(h,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0}),h.forEach(k),W=L(o),b=c(o,"SECTION",{});var A=I(b);f=c(A,"PRE",{});var w=I(f);H=E(w,"background: hwb("),V=E(w,t[0]),z=E(w,"deg "),q=E(w,D),F=E(w,"% "),J=E(w,O),Q=E(w,"%);"),w.forEach(k),X=L(A),P=c(A,"DIV",{class:!0,style:!0});var le=I(P);le.forEach(k),Y=L(A),R=c(A,"DIV",{class:!0,style:!0});var re=I(R);re.forEach(k),A.forEach(k),o.forEach(k),this.h()},h(){s(m,"for","hue"),s(d,"id","hue"),s(d,"type","range"),s(d,"min",0),s(d,"max",360),s(B,"for","whiteness"),s(u,"id","whiteness"),s(u,"type","range"),s(u,"min",0),s(u,"max",1),s(u,"step",.01),s(i,"for","blackness"),s(a,"id","blackness"),s(a,"type","range"),s(a,"min",0),s(a,"max",1),s(a,"step",.01),s(n,"id","sliders"),s(n,"class","svelte-1ndle3v"),s(P,"class","color-box svelte-1ndle3v"),K(P,"background",t[4](t[3]([t[0],t[1],t[2]]))),s(R,"class","color-box svelte-1ndle3v"),K(R,"background","hwb("+t[0]+"deg "+(t[1]*100|0)+"% "+(t[2]*100|0)+"%)"),s(p,"class","svelte-1ndle3v")},m(l,o){de(l,p,o),e(p,n),e(n,m),e(m,N),e(n,y),e(n,d),M(d,t[0]),e(n,C),e(n,B),e(B,G),e(n,U),e(n,u),M(u,t[1]),e(n,r),e(n,i),e(i,v),e(n,S),e(n,a),M(a,t[2]),e(p,W),e(p,b),e(b,f),e(f,H),e(f,V),e(f,z),e(f,q),e(f,F),e(f,J),e(f,Q),e(b,X),e(b,P),e(b,Y),e(b,R),Z||(ee=[j(d,"change",t[5]),j(d,"input",t[5]),j(u,"change",t[6]),j(u,"input",t[6]),j(a,"change",t[7]),j(a,"input",t[7])],Z=!0)},p(l,[o]){o&1&&M(d,l[0]),o&2&&M(u,l[1]),o&4&&M(a,l[2]),o&1&&$(V,l[0]),o&2&&D!==(D=(l[1]*100|0)+"")&&$(q,D),o&4&&O!==(O=(l[2]*100|0)+"")&&$(J,O),o&7&&K(P,"background",l[4](l[3]([l[0],l[1],l[2]]))),o&7&&K(R,"background","hwb("+l[0]+"deg "+(l[1]*100|0)+"% "+(l[2]*100|0)+"%)")},i:ae,o:ae,d(l){l&&k(p),Z=!1,fe(ee)}}}function he(t,p,n){let m=35,N=.5,y=0;const d=r=>{r=r%360;const i=1-Math.abs(r/60%2-1);if(r<60)return[1,i,0];if(r<120)return[i,1,0];if(r<180)return[0,1,i];if(r<240)return[0,i,1];if(r<300)return[i,0,1];if(r<360)return[1,0,i];throw new Error("Invalid hue")},C=r=>{const i=r[0],v=r[1],S=r[2];if(v+S>=1){const a=v/(v+S);return[a,a,a]}else{const a=d(i),W=a[0],b=a[1],f=a[2],H=1-v-S;return[W*H+v,b*H+v,f*H+v]}},B=r=>"#"+r.map(i=>Math.round(i*255).toString(16).padStart(2,"0")).join("");function G(){m=x(this.value),n(0,m)}function U(){N=x(this.value),n(1,N)}function u(){y=x(this.value),n(2,y)}return[m,N,y,C,B,G,U,u]}class ce extends ie{constructor(p){super();oe(this,p,he,pe,ue,{})}}export{ce as default};
