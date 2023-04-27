var F=class{tickLengthMs=1e3/60;previousTick=Date.now();actualTicks=0;#t=0;startTime;#e=!1;#o=!0;#a;constructor(t=60,r=!0){r&&this.start(t)}start(t=60){t<=25&&this.disableHighAccuracy(),this.tickLengthMs=1e3/t,this.#e=!0,this.startTime=Date.now(),this.#r()}stop(){this.#e=!1}isRunning(){return this.#e}getDelta(){return this.#t}getElapsedTime(){return Date.now()-this.startTime}onTick(t){this.#a=t}#r(){if(this.#e){var t=Date.now();this.actualTicks++,this.previousTick+this.tickLengthMs<=t&&(this.#t=(t-this.previousTick)/1e3,this.previousTick=t,this.#a&&this.#a(this.#t),this.actualTicks=0),this.#o?Date.now()-this.previousTick<this.tickLengthMs-16?setTimeout(()=>this.#r()):setImmediate(()=>this.#r()):setTimeout(()=>{this.#r()},this.tickLengthMs)}}disableHighAccuracy(){this.#o=!1}enableHighAccuracy(){this.#o=!0}};var z="insert",R="update",H="delete",at="reverse",ft="shuffle",m=Symbol.for("object-observer-meta-key-0"),ne={async:1},ie=e=>{if(!e||typeof e!="object")return null;let t={},r=[];for(let[o,a]of Object.entries(e))if(o==="path"){if(typeof a!="string"||a==="")throw new Error('"path" option, if/when provided, MUST be a non-empty string');t[o]=a}else if(o==="pathsOf"){if(e.path)throw new Error('"pathsOf" option MAY NOT be specified together with "path" option');if(typeof a!="string")throw new Error('"pathsOf" option, if/when provided, MUST be a string (MAY be empty)');t[o]=e.pathsOf.split(".").filter(Boolean)}else if(o==="pathsFrom"){if(e.path||e.pathsOf)throw new Error('"pathsFrom" option MAY NOT be specified together with "path"/"pathsOf" option/s');if(typeof a!="string"||a==="")throw new Error('"pathsFrom" option, if/when provided, MUST be a non-empty string');t[o]=a}else r.push(o);if(r.length)throw new Error(`'${r.join(", ")}' is/are not a valid observer option/s`);return t},pe=(e,t,r)=>{let o={};o[m]=t;for(let a in e)o[a]=v(e[a],a,t,r);return o},le=(e,t,r)=>{let o=e.length,a=new Array(o);a[m]=t;for(let f=0;f<o;f++)a[f]=v(e[f],f,t,r);return a},ue=(e,t)=>(e[m]=t,e),me=(e,t)=>{if(e===null)return t;let r=t;if(e.path){let o=e.path;r=t.filter(a=>a.path.join(".")===o)}else if(e.pathsOf){let o=e.pathsOf,a=o.join(".");r=t.filter(f=>(f.path.length===o.length+1||f.path.length===o.length&&(f.type===at||f.type===ft))&&f.path.join(".").startsWith(a))}else if(e.pathsFrom){let o=e.pathsFrom;r=t.filter(a=>a.path.join(".").startsWith(o))}return r},st=(e,t)=>{try{e(t)}catch(r){console.error(`failed to notify listener ${e} with ${t}`,r)}},de=function(){let e=this.batches;this.batches=[];for(let[t,r]of e)st(t,r)},x=(e,t)=>{let r=e,o,a,f,n,s,l,i=t.length;do{for(o=r.options.async,a=r.observers,l=a.length;l--;)if([f,n]=a[l],s=me(n,t),s.length)if(o){r.batches.length===0&&queueMicrotask(de.bind(r));let p;for(let c of r.batches)if(c[0]===f){p=c;break}p||(p=[f,[]],r.batches.push(p)),Array.prototype.push.apply(p[1],s)}else st(f,s);let u=r.parent;if(u){for(let p=0;p<i;p++){let c=t[p];t[p]=new d(c.type,[r.ownKey,...c.path],c.value,c.oldValue,c.object)}r=u}else r=null}while(r)},v=(e,t,r,o)=>o!==void 0&&o.has(e)?null:typeof e!="object"||e===null?e:Array.isArray(e)?new $({target:e,ownKey:t,parent:r,visited:o}).proxy:ArrayBuffer.isView(e)?new G({target:e,ownKey:t,parent:r}).proxy:e instanceof Date?e:new L({target:e,ownKey:t,parent:r,visited:o}).proxy,ce=function(){let e=this[m],t=e.target,r=t.length-1,o=t.pop();if(o&&typeof o=="object"){let f=o[m];f&&(o=f.detach())}let a=[new d(H,[r],void 0,o,this)];return x(e,a),o},he=function(){let e=this[m],t=e.target,r=arguments.length,o=new Array(r),a=t.length;for(let s=0;s<r;s++)o[s]=v(arguments[s],a+s,e);let f=Reflect.apply(t.push,t,o),n=[];for(let s=a,l=t.length;s<l;s++)n[s-a]=new d(z,[s],t[s],void 0,this);return x(e,n),f},xe=function(){let e=this[m],t=e.target,r,o,a,f,n;for(r=t.shift(),r&&typeof r=="object"&&(n=r[m],n&&(r=n.detach())),o=0,a=t.length;o<a;o++)f=t[o],f&&typeof f=="object"&&(n=f[m],n&&(n.ownKey=o));let s=[new d(H,[0],void 0,r,this)];return x(e,s),r},ge=function(){let e=this[m],t=e.target,r=arguments.length,o=new Array(r);for(let s=0;s<r;s++)o[s]=v(arguments[s],s,e);let a=Reflect.apply(t.unshift,t,o);for(let s=0,l=t.length,i;s<l;s++)if(i=t[s],i&&typeof i=="object"){let u=i[m];u&&(u.ownKey=s)}let f=o.length,n=new Array(f);for(let s=0;s<f;s++)n[s]=new d(z,[s],t[s],void 0,this);return x(e,n),a},nt=function(){let e=this[m],t=e.target,r,o,a;for(t.reverse(),r=0,o=t.length;r<o;r++)if(a=t[r],a&&typeof a=="object"){let n=a[m];n&&(n.ownKey=r)}let f=[new d(at,[],void 0,void 0,this)];return x(e,f),this},it=function(e){let t=this[m],r=t.target,o,a,f;for(r.sort(e),o=0,a=r.length;o<a;o++)if(f=r[o],f&&typeof f=="object"){let s=f[m];s&&(s.ownKey=o)}let n=[new d(ft,[],void 0,void 0,this)];return x(t,n),this},pt=function(e,t,r){let o=this[m],a=o.target,f=[],n=a.length,s=a.slice(0);if(t=t===void 0?0:t<0?Math.max(n+t,0):Math.min(t,n),r=r===void 0?n:r<0?Math.max(n+r,0):Math.min(r,n),t<n&&r>t){a.fill(e,t,r);let l;for(let i=t,u,p;i<r;i++)u=a[i],a[i]=v(u,i,o),i in s?(p=s[i],p&&typeof p=="object"&&(l=p[m],l&&(p=l.detach())),f.push(new d(R,[i],a[i],p,this))):f.push(new d(z,[i],a[i],void 0,this));x(o,f)}return this},lt=function(e,t,r){let o=this[m],a=o.target,f=a.length;e=e<0?Math.max(f+e,0):e,t=t===void 0?0:t<0?Math.max(f+t,0):Math.min(t,f),r=r===void 0?f:r<0?Math.max(f+r,0):Math.min(r,f);let n=Math.min(r-t,f-e);if(e<f&&e!==t&&n>0){let s=a.slice(0),l=[];a.copyWithin(e,t,r);for(let i=e,u,p,c;i<e+n;i++)u=a[i],u&&typeof u=="object"&&(u=v(u,i,o),a[i]=u),p=s[i],p&&typeof p=="object"&&(c=p[m],c&&(p=c.detach())),!(typeof u!="object"&&u===p)&&l.push(new d(R,[i],u,p,this));x(o,l)}return this},ye=function(){let e=this[m],t=e.target,r=arguments.length,o=new Array(r),a=t.length;for(let g=0;g<r;g++)o[g]=v(arguments[g],g,e);let f=r===0?0:o[0]<0?a+o[0]:o[0],n=r<2?a-f:o[1],s=Math.max(r-2,0),l=Reflect.apply(t.splice,t,o),i=t.length,u;for(let g=0,B;g<i;g++)B=t[g],B&&typeof B=="object"&&(u=B[m],u&&(u.ownKey=g));let p,c,W;for(p=0,c=l.length;p<c;p++)W=l[p],W&&typeof W=="object"&&(u=W[m],u&&(l[p]=u.detach()));let K=[],h;for(h=0;h<n;h++)h<s?K.push(new d(R,[f+h],t[f+h],l[h],this)):K.push(new d(H,[f+h],void 0,l[h],this));for(;h<s;h++)K.push(new d(z,[f+h],t[f+h],void 0,this));return x(e,K),l},be=function(e,t){let r=this[m],o=r.target,a=e.length,f=o.slice(0);t=t||0,o.set(e,t);let n=new Array(a);for(let s=t;s<a+t;s++)n[s-t]=new d(R,[s],o[s],f[s],this);x(r,n)},ve={pop:ce,push:he,shift:xe,unshift:ge,reverse:nt,sort:it,fill:pt,copyWithin:lt,splice:ye},we={reverse:nt,sort:it,fill:pt,copyWithin:lt,set:be},d=class{constructor(t,r,o,a,f){this.type=t,this.path=r,this.value=o,this.oldValue=a,this.object=f}},N=class{constructor(t,r){let{target:o,parent:a,ownKey:f,visited:n=new Set}=t;a&&f!==void 0?(this.parent=a,this.ownKey=f):(this.parent=null,this.ownKey=null),n.add(o);let s=r(o,this,n);n.delete(o),this.observers=[],this.revocable=Proxy.revocable(s,this),this.proxy=this.revocable.proxy,this.target=s,this.options=this.processOptions(t.options),this.options.async&&(this.batches=[])}processOptions(t){if(t){if(typeof t!="object")throw new Error(`Observable options if/when provided, MAY only be an object, got '${t}'`);let r=Object.keys(t).filter(o=>!(o in ne));if(r.length)throw new Error(`'${r.join(", ")}' is/are not a valid Observable option/s`);return Object.assign({},t)}else return{}}detach(){return this.parent=null,this.target}set(t,r,o){let a=t[r];if(o!==a){let f=v(o,r,this);if(t[r]=f,a&&typeof a=="object"){let s=a[m];s&&(a=s.detach())}let n=a===void 0?[new d(z,[r],f,void 0,this.proxy)]:[new d(R,[r],f,a,this.proxy)];x(this,n)}return!0}deleteProperty(t,r){let o=t[r];if(delete t[r],o&&typeof o=="object"){let f=o[m];f&&(o=f.detach())}let a=[new d(H,[r],void 0,o,this.proxy)];return x(this,a),!0}},L=class extends N{constructor(t){super(t,pe)}},$=class extends N{constructor(t){super(t,le)}get(t,r){return ve[r]||t[r]}},G=class extends N{constructor(t){super(t,ue)}get(t,r){return we[r]||t[r]}},S=Object.freeze({from:(e,t)=>{if(!e||typeof e!="object")throw new Error("observable MAY ONLY be created from a non-null object");if(e[m])return e;if(Array.isArray(e))return new $({target:e,ownKey:null,parent:null,options:t}).proxy;if(ArrayBuffer.isView(e))return new G({target:e,ownKey:null,parent:null,options:t}).proxy;if(e instanceof Date)throw new Error(`${e} found to be one of a non-observable types`);return new L({target:e,ownKey:null,parent:null,options:t}).proxy},isObservable:e=>!!(e&&e[m]),observe:(e,t,r)=>{if(!S.isObservable(e))throw new Error("invalid observable parameter");if(typeof t!="function")throw new Error(`observer MUST be a function, got '${t}'`);let o=e[m].observers;o.some(a=>a[0]===t)?console.warn("observer may be bound to an observable only once; will NOT rebind"):o.push([t,ie(r)])},unobserve:(e,...t)=>{if(!S.isObservable(e))throw new Error("invalid observable parameter");let r=e[m].observers,o=r.length;if(o){if(!t.length){r.splice(0);return}for(;o;)t.indexOf(r[--o][0])>=0&&r.splice(o,1)}}});var Oe=typeof global=="object"&&global&&global.Object===Object&&global,ut=Oe;var _e=typeof self=="object"&&self&&self.Object===Object&&self,Se=ut||_e||Function("return this")(),T=Se;var Te=T.Symbol,y=Te;var mt=Object.prototype,je=mt.hasOwnProperty,Ce=mt.toString,k=y?y.toStringTag:void 0;function Ie(e){var t=je.call(e,k),r=e[k];try{e[k]=void 0;var o=!0}catch{}var a=Ce.call(e);return o&&(t?e[k]=r:delete e[k]),a}var dt=Ie;var Ae=Object.prototype,Me=Ae.toString;function Ee(e){return Me.call(e)}var ct=Ee;var Pe="[object Null]",De="[object Undefined]",ht=y?y.toStringTag:void 0;function Ne(e){return e==null?e===void 0?De:Pe:ht&&ht in Object(e)?dt(e):ct(e)}var q=Ne;function ze(e){return e!=null&&typeof e=="object"}var xt=ze;var Re="[object Symbol]";function ke(e){return typeof e=="symbol"||xt(e)&&q(e)==Re}var j=ke;function We(e,t){for(var r=-1,o=e==null?0:e.length,a=Array(o);++r<o;)a[r]=t(e[r],r,e);return a}var gt=We;var Ke=Array.isArray,C=Ke;var Be=1/0,yt=y?y.prototype:void 0,bt=yt?yt.toString:void 0;function vt(e){if(typeof e=="string")return e;if(C(e))return gt(e,vt)+"";if(j(e))return bt?bt.call(e):"";var t=e+"";return t=="0"&&1/e==-Be?"-0":t}var wt=vt;function Fe(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var _=Fe;var Le="[object AsyncFunction]",$e="[object Function]",Ge="[object GeneratorFunction]",He="[object Proxy]";function qe(e){if(!_(e))return!1;var t=q(e);return t==$e||t==Ge||t==Le||t==He}var Ot=qe;var Ue=T["__core-js_shared__"],U=Ue;var _t=function(){var e=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Ye(e){return!!_t&&_t in e}var St=Ye;var Ve=Function.prototype,Je=Ve.toString;function Xe(e){if(e!=null){try{return Je.call(e)}catch{}try{return e+""}catch{}}return""}var Tt=Xe;var Ze=/[\\^$.*+?()[\]{}|]/g,Qe=/^\[object .+?Constructor\]$/,tr=Function.prototype,er=Object.prototype,rr=tr.toString,or=er.hasOwnProperty,ar=RegExp("^"+rr.call(or).replace(Ze,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function fr(e){if(!_(e)||St(e))return!1;var t=Ot(e)?ar:Qe;return t.test(Tt(e))}var jt=fr;function sr(e,t){return e?.[t]}var Ct=sr;function nr(e,t){var r=Ct(e,t);return jt(r)?r:void 0}var I=nr;var ir=function(){try{var e=I(Object,"defineProperty");return e({},"",{}),e}catch{}}(),X=ir;var pr=9007199254740991,lr=/^(?:0|[1-9]\d*)$/;function ur(e,t){var r=typeof e;return t=t??pr,!!t&&(r=="number"||r!="symbol"&&lr.test(e))&&e>-1&&e%1==0&&e<t}var It=ur;function mr(e,t,r){t=="__proto__"&&X?X(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var At=mr;function dr(e,t){return e===t||e!==e&&t!==t}var Y=dr;var cr=Object.prototype,hr=cr.hasOwnProperty;function xr(e,t,r){var o=e[t];(!(hr.call(e,t)&&Y(o,r))||r===void 0&&!(t in e))&&At(e,t,r)}var Mt=xr;var gr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,yr=/^\w*$/;function br(e,t){if(C(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||j(e)?!0:yr.test(e)||!gr.test(e)||t!=null&&e in Object(t)}var Et=br;var vr=I(Object,"create"),b=vr;function wr(){this.__data__=b?b(null):{},this.size=0}var Pt=wr;function Or(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Dt=Or;var _r="__lodash_hash_undefined__",Sr=Object.prototype,Tr=Sr.hasOwnProperty;function jr(e){var t=this.__data__;if(b){var r=t[e];return r===_r?void 0:r}return Tr.call(t,e)?t[e]:void 0}var Nt=jr;var Cr=Object.prototype,Ir=Cr.hasOwnProperty;function Ar(e){var t=this.__data__;return b?t[e]!==void 0:Ir.call(t,e)}var zt=Ar;var Mr="__lodash_hash_undefined__";function Er(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=b&&t===void 0?Mr:t,this}var Rt=Er;function A(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}A.prototype.clear=Pt;A.prototype.delete=Dt;A.prototype.get=Nt;A.prototype.has=zt;A.prototype.set=Rt;var Z=A;function Pr(){this.__data__=[],this.size=0}var kt=Pr;function Dr(e,t){for(var r=e.length;r--;)if(Y(e[r][0],t))return r;return-1}var w=Dr;var Nr=Array.prototype,zr=Nr.splice;function Rr(e){var t=this.__data__,r=w(t,e);if(r<0)return!1;var o=t.length-1;return r==o?t.pop():zr.call(t,r,1),--this.size,!0}var Wt=Rr;function kr(e){var t=this.__data__,r=w(t,e);return r<0?void 0:t[r][1]}var Kt=kr;function Wr(e){return w(this.__data__,e)>-1}var Bt=Wr;function Kr(e,t){var r=this.__data__,o=w(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}var Ft=Kr;function M(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}M.prototype.clear=kt;M.prototype.delete=Wt;M.prototype.get=Kt;M.prototype.has=Bt;M.prototype.set=Ft;var Lt=M;var Br=I(T,"Map"),$t=Br;function Fr(){this.size=0,this.__data__={hash:new Z,map:new($t||Lt),string:new Z}}var Gt=Fr;function Lr(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var Ht=Lr;function $r(e,t){var r=e.__data__;return Ht(t)?r[typeof t=="string"?"string":"hash"]:r.map}var O=$r;function Gr(e){var t=O(this,e).delete(e);return this.size-=t?1:0,t}var qt=Gr;function Hr(e){return O(this,e).get(e)}var Ut=Hr;function qr(e){return O(this,e).has(e)}var Yt=qr;function Ur(e,t){var r=O(this,e),o=r.size;return r.set(e,t),this.size+=r.size==o?0:1,this}var Vt=Ur;function E(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}E.prototype.clear=Gt;E.prototype.delete=qt;E.prototype.get=Ut;E.prototype.has=Yt;E.prototype.set=Vt;var Q=E;var Yr="Expected a function";function tt(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Yr);var r=function(){var o=arguments,a=t?t.apply(this,o):o[0],f=r.cache;if(f.has(a))return f.get(a);var n=e.apply(this,o);return r.cache=f.set(a,n)||f,n};return r.cache=new(tt.Cache||Q),r}tt.Cache=Q;var Jt=tt;var Vr=500;function Jr(e){var t=Jt(e,function(o){return r.size===Vr&&r.clear(),o}),r=t.cache;return t}var Xt=Jr;var Xr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Zr=/\\(\\)?/g,Qr=Xt(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Xr,function(r,o,a,f){t.push(a?f.replace(Zr,"$1"):o||r)}),t}),Zt=Qr;function to(e){return e==null?"":wt(e)}var Qt=to;function eo(e,t){return C(e)?e:Et(e,t)?[e]:Zt(Qt(e))}var P=eo;var ro=1/0;function oo(e){if(typeof e=="string"||j(e))return e;var t=e+"";return t=="0"&&1/e==-ro?"-0":t}var D=oo;function ao(e,t){t=P(t,e);for(var r=0,o=t.length;e!=null&&r<o;)e=e[D(t[r++])];return r&&r==o?e:void 0}var V=ao;function fo(e,t,r){var o=e==null?void 0:V(e,t);return o===void 0?r:o}var et=fo;function so(e,t,r){var o=-1,a=e.length;t<0&&(t=-t>a?0:a+t),r=r>a?a:r,r<0&&(r+=a),a=t>r?0:r-t>>>0,t>>>=0;for(var f=Array(a);++o<a;)f[o]=e[o+t];return f}var te=so;function no(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var ee=no;function io(e,t){return t.length<2?e:V(e,te(t,0,-1))}var re=io;function po(e,t){return t=P(t,e),e=re(e,t),e==null||delete e[D(ee(t))]}var oe=po;function lo(e,t,r,o){if(!_(e))return e;t=P(t,e);for(var a=-1,f=t.length,n=f-1,s=e;s!=null&&++a<f;){var l=D(t[a]),i=r;if(l==="__proto__"||l==="constructor"||l==="prototype")return e;if(a!=n){var u=s[l];i=o?o(u,l,s):void 0,i===void 0&&(i=_(u)?u:It(t[a+1])?[]:{})}Mt(s,l,i),s=s[l]}return e}var ae=lo;function uo(e,t,r){return e==null?e:ae(e,t,r)}var rt=uo;function mo(e,t){return e==null?!0:oe(e,t)}var ot=mo;var J=class{#t;constructor(t,r={}){this.name=t,this.#t=S.from(r)}set(t,r){return rt(this.#t,t,r),this}get(t=null){return t?et(this.#t,t):this.json()}delete(t){return ot(this.#t,t)}sync(t,r=null){let o=a=>{let f=[];for(let n of a)f.push({type:n.type,path:n.path,value:n.value});t.emit(`sync:${this.name}`,f)};r?this.subscribe(r,o):this.onChange(o),t.on(`sync:${this.name}:init`,()=>{let a=r?{[r]:this.get(r)}:this.get();t.emit(`sync:${this.name}:init`,a)})}subscribe(t,r){S.observe(this.#t,r,{pathsOf:t})}onChange(t){S.observe(this.#t,r=>{t(r)})}json(){return JSON.parse(JSON.stringify(this.#t))}};var fe=class{constructor(){this.authorization=()=>!0,this.onConnection=t=>{console.log("new client connection")},this.onDisconnect=t=>{console.log("client disconnect")},this.onTick=null,this.events={}}async setup(t){global.$io=this,global.$State=J,global.$Ticker=F;let r=await import(`file://${t}`);r.authorization&&(this.authorization=r.authorization),r.onConnection&&(this.onConnection=r.onConnection),r.onDisconnect&&(this.onDisconnect=r.onDisconnect),r.onTick&&(this.onTick=r.onTick),r.onInit&&(this.onInit=r.onInit),r.events&&(this.events=r.events),this.onSetup&&this.onSetup()}connect(t){try{this.onConnection(t)}catch(r){console.error(r)}t.onDisconnect(()=>{try{this.onDisconnect(t)}catch(r){console.error(r)}}),this.setClientEvents(t)}setClientEvents(t){for(let r in this.events)t.on(r,(...o)=>{try{this.events[r](...o)}catch(a){console.error(a)}})}emit(t="",...r){}listen(){}},se=class{constructor(t){this.id=t}emit(t="",...r){return null}on(t="",r=null){return null}onDisconnect(){}};export{se as $Client,fe as $Server};
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/