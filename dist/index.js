var ue=Object.create;var G=Object.defineProperty;var me=Object.getOwnPropertyDescriptor;var de=Object.getOwnPropertyNames;var ce=Object.getPrototypeOf,he=Object.prototype.hasOwnProperty;var xe=(t,e)=>{for(var r in e)G(t,r,{get:e[r],enumerable:!0})},it=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of de(e))!he.call(t,a)&&a!==r&&G(t,a,{get:()=>e[a],enumerable:!(o=me(e,a))||o.enumerable});return t};var ge=(t,e,r)=>(r=t!=null?ue(ce(t)):{},it(e||!t||!t.__esModule?G(r,"default",{value:t,enumerable:!0}):r,t)),ye=t=>it(G({},"__esModule",{value:!0}),t);var Co={};xe(Co,{$Server:()=>Io,$State:()=>T,$Ticker:()=>v});module.exports=ye(Co);var H=ge(require("path"),1);var tt=process.cwd(),$=class{#t;tick;server;constructor(){console.log("[mp:manager] reading config"),import(`file://${H.join(tt,"config.mjs")}`).then(async r=>{let o=r.default;this.config=o;let a=H.join(tt,o.adapter.path),s=H.join(tt,o.script),{Server:n}=await import(`file://${a}`);if(this.server=new n(o.adapter.options),await this.server.setup(s),this.server.listen(),this.server.onInit&&this.server.onInit(this.server),this.server.onTick){let f=this.config.tick||!1;this.tick=new v(f.fps||60,f.autoStart||!0),this.tick.onTick(this.server.onTick)}this.#t&&this.#t()})}onload(e){this.#t=e}};var v=class{tickLengthMs=1e3/60;previousTick=Date.now();actualTicks=0;#t=0;startTime;#e=!1;#o=!0;#a;constructor(e=60,r=!0){r&&this.start(e)}start(e=60){e<=25&&this.disableHighAccuracy(),this.tickLengthMs=1e3/e,this.#e=!0,this.startTime=Date.now(),this.#r()}stop(){this.#e=!1}isRunning(){return this.#e}getDelta(){return this.#t}getElapsedTime(){return Date.now()-this.startTime}onTick(e){this.#a=e}#r(){if(this.#e){var e=Date.now();this.actualTicks++,this.previousTick+this.tickLengthMs<=e&&(this.#t=(e-this.previousTick)/1e3,this.previousTick=e,this.#a&&this.#a(this.#t),this.actualTicks=0),this.#o?Date.now()-this.previousTick<this.tickLengthMs-16?setTimeout(()=>this.#r()):setImmediate(()=>this.#r()):setTimeout(()=>{this.#r()},this.tickLengthMs)}}disableHighAccuracy(){this.#o=!1}enableHighAccuracy(){this.#o=!0}};var R="insert",W="update",V="delete",pt="reverse",lt="shuffle",m=Symbol.for("object-observer-meta-key-0"),be={async:1},ve=t=>{if(!t||typeof t!="object")return null;let e={},r=[];for(let[o,a]of Object.entries(t))if(o==="path"){if(typeof a!="string"||a==="")throw new Error('"path" option, if/when provided, MUST be a non-empty string');e[o]=a}else if(o==="pathsOf"){if(t.path)throw new Error('"pathsOf" option MAY NOT be specified together with "path" option');if(typeof a!="string")throw new Error('"pathsOf" option, if/when provided, MUST be a string (MAY be empty)');e[o]=t.pathsOf.split(".").filter(Boolean)}else if(o==="pathsFrom"){if(t.path||t.pathsOf)throw new Error('"pathsFrom" option MAY NOT be specified together with "path"/"pathsOf" option/s');if(typeof a!="string"||a==="")throw new Error('"pathsFrom" option, if/when provided, MUST be a non-empty string');e[o]=a}else r.push(o);if(r.length)throw new Error(`'${r.join(", ")}' is/are not a valid observer option/s`);return e},we=(t,e,r)=>{let o={};o[m]=e;for(let a in t)o[a]=w(t[a],a,e,r);return o},Oe=(t,e,r)=>{let o=t.length,a=new Array(o);a[m]=e;for(let s=0;s<o;s++)a[s]=w(t[s],s,e,r);return a},_e=(t,e)=>(t[m]=e,t),Se=(t,e)=>{if(t===null)return e;let r=e;if(t.path){let o=t.path;r=e.filter(a=>a.path.join(".")===o)}else if(t.pathsOf){let o=t.pathsOf,a=o.join(".");r=e.filter(s=>(s.path.length===o.length+1||s.path.length===o.length&&(s.type===pt||s.type===lt))&&s.path.join(".").startsWith(a))}else if(t.pathsFrom){let o=t.pathsFrom;r=e.filter(a=>a.path.join(".").startsWith(o))}return r},ut=(t,e)=>{try{t(e)}catch(r){console.error(`failed to notify listener ${t} with ${e}`,r)}},Te=function(){let t=this.batches;this.batches=[];for(let[e,r]of t)ut(e,r)},x=(t,e)=>{let r=t,o,a,s,n,f,l,i=e.length;do{for(o=r.options.async,a=r.observers,l=a.length;l--;)if([s,n]=a[l],f=Se(n,e),f.length)if(o){r.batches.length===0&&queueMicrotask(Te.bind(r));let p;for(let c of r.batches)if(c[0]===s){p=c;break}p||(p=[s,[]],r.batches.push(p)),Array.prototype.push.apply(p[1],f)}else ut(s,f);let u=r.parent;if(u){for(let p=0;p<i;p++){let c=e[p];e[p]=new d(c.type,[r.ownKey,...c.path],c.value,c.oldValue,c.object)}r=u}else r=null}while(r)},w=(t,e,r,o)=>o!==void 0&&o.has(t)?null:typeof t!="object"||t===null?t:Array.isArray(t)?new U({target:t,ownKey:e,parent:r,visited:o}).proxy:ArrayBuffer.isView(t)?new Y({target:t,ownKey:e,parent:r}).proxy:t instanceof Date?t:new q({target:t,ownKey:e,parent:r,visited:o}).proxy,je=function(){let t=this[m],e=t.target,r=e.length-1,o=e.pop();if(o&&typeof o=="object"){let s=o[m];s&&(o=s.detach())}let a=[new d(V,[r],void 0,o,this)];return x(t,a),o},Ie=function(){let t=this[m],e=t.target,r=arguments.length,o=new Array(r),a=e.length;for(let f=0;f<r;f++)o[f]=w(arguments[f],a+f,t);let s=Reflect.apply(e.push,e,o),n=[];for(let f=a,l=e.length;f<l;f++)n[f-a]=new d(R,[f],e[f],void 0,this);return x(t,n),s},Ce=function(){let t=this[m],e=t.target,r,o,a,s,n;for(r=e.shift(),r&&typeof r=="object"&&(n=r[m],n&&(r=n.detach())),o=0,a=e.length;o<a;o++)s=e[o],s&&typeof s=="object"&&(n=s[m],n&&(n.ownKey=o));let f=[new d(V,[0],void 0,r,this)];return x(t,f),r},Ae=function(){let t=this[m],e=t.target,r=arguments.length,o=new Array(r);for(let f=0;f<r;f++)o[f]=w(arguments[f],f,t);let a=Reflect.apply(e.unshift,e,o);for(let f=0,l=e.length,i;f<l;f++)if(i=e[f],i&&typeof i=="object"){let u=i[m];u&&(u.ownKey=f)}let s=o.length,n=new Array(s);for(let f=0;f<s;f++)n[f]=new d(R,[f],e[f],void 0,this);return x(t,n),a},mt=function(){let t=this[m],e=t.target,r,o,a;for(e.reverse(),r=0,o=e.length;r<o;r++)if(a=e[r],a&&typeof a=="object"){let n=a[m];n&&(n.ownKey=r)}let s=[new d(pt,[],void 0,void 0,this)];return x(t,s),this},dt=function(t){let e=this[m],r=e.target,o,a,s;for(r.sort(t),o=0,a=r.length;o<a;o++)if(s=r[o],s&&typeof s=="object"){let f=s[m];f&&(f.ownKey=o)}let n=[new d(lt,[],void 0,void 0,this)];return x(e,n),this},ct=function(t,e,r){let o=this[m],a=o.target,s=[],n=a.length,f=a.slice(0);if(e=e===void 0?0:e<0?Math.max(n+e,0):Math.min(e,n),r=r===void 0?n:r<0?Math.max(n+r,0):Math.min(r,n),e<n&&r>e){a.fill(t,e,r);let l;for(let i=e,u,p;i<r;i++)u=a[i],a[i]=w(u,i,o),i in f?(p=f[i],p&&typeof p=="object"&&(l=p[m],l&&(p=l.detach())),s.push(new d(W,[i],a[i],p,this))):s.push(new d(R,[i],a[i],void 0,this));x(o,s)}return this},ht=function(t,e,r){let o=this[m],a=o.target,s=a.length;t=t<0?Math.max(s+t,0):t,e=e===void 0?0:e<0?Math.max(s+e,0):Math.min(e,s),r=r===void 0?s:r<0?Math.max(s+r,0):Math.min(r,s);let n=Math.min(r-e,s-t);if(t<s&&t!==e&&n>0){let f=a.slice(0),l=[];a.copyWithin(t,e,r);for(let i=t,u,p,c;i<t+n;i++)u=a[i],u&&typeof u=="object"&&(u=w(u,i,o),a[i]=u),p=f[i],p&&typeof p=="object"&&(c=p[m],c&&(p=c.detach())),!(typeof u!="object"&&u===p)&&l.push(new d(W,[i],u,p,this));x(o,l)}return this},Me=function(){let t=this[m],e=t.target,r=arguments.length,o=new Array(r),a=e.length;for(let g=0;g<r;g++)o[g]=w(arguments[g],g,t);let s=r===0?0:o[0]<0?a+o[0]:o[0],n=r<2?a-s:o[1],f=Math.max(r-2,0),l=Reflect.apply(e.splice,e,o),i=e.length,u;for(let g=0,L;g<i;g++)L=e[g],L&&typeof L=="object"&&(u=L[m],u&&(u.ownKey=g));let p,c,B;for(p=0,c=l.length;p<c;p++)B=l[p],B&&typeof B=="object"&&(u=B[m],u&&(l[p]=u.detach()));let F=[],h;for(h=0;h<n;h++)h<f?F.push(new d(W,[s+h],e[s+h],l[h],this)):F.push(new d(V,[s+h],void 0,l[h],this));for(;h<f;h++)F.push(new d(R,[s+h],e[s+h],void 0,this));return x(t,F),l},Pe=function(t,e){let r=this[m],o=r.target,a=t.length,s=o.slice(0);e=e||0,o.set(t,e);let n=new Array(a);for(let f=e;f<a+e;f++)n[f-e]=new d(W,[f],o[f],s[f],this);x(r,n)},Ee={pop:je,push:Ie,shift:Ce,unshift:Ae,reverse:mt,sort:dt,fill:ct,copyWithin:ht,splice:Me},De={reverse:mt,sort:dt,fill:ct,copyWithin:ht,set:Pe},d=class{constructor(e,r,o,a,s){this.type=e,this.path=r,this.value=o,this.oldValue=a,this.object=s}},z=class{constructor(e,r){let{target:o,parent:a,ownKey:s,visited:n=new Set}=e;a&&s!==void 0?(this.parent=a,this.ownKey=s):(this.parent=null,this.ownKey=null),n.add(o);let f=r(o,this,n);n.delete(o),this.observers=[],this.revocable=Proxy.revocable(f,this),this.proxy=this.revocable.proxy,this.target=f,this.options=this.processOptions(e.options),this.options.async&&(this.batches=[])}processOptions(e){if(e){if(typeof e!="object")throw new Error(`Observable options if/when provided, MAY only be an object, got '${e}'`);let r=Object.keys(e).filter(o=>!(o in be));if(r.length)throw new Error(`'${r.join(", ")}' is/are not a valid Observable option/s`);return Object.assign({},e)}else return{}}detach(){return this.parent=null,this.target}set(e,r,o){let a=e[r];if(o!==a){let s=w(o,r,this);if(e[r]=s,a&&typeof a=="object"){let f=a[m];f&&(a=f.detach())}let n=a===void 0?[new d(R,[r],s,void 0,this.proxy)]:[new d(W,[r],s,a,this.proxy)];x(this,n)}return!0}deleteProperty(e,r){let o=e[r];if(delete e[r],o&&typeof o=="object"){let s=o[m];s&&(o=s.detach())}let a=[new d(V,[r],void 0,o,this.proxy)];return x(this,a),!0}},q=class extends z{constructor(e){super(e,we)}},U=class extends z{constructor(e){super(e,Oe)}get(e,r){return Ee[r]||e[r]}},Y=class extends z{constructor(e){super(e,_e)}get(e,r){return De[r]||e[r]}},j=Object.freeze({from:(t,e)=>{if(!t||typeof t!="object")throw new Error("observable MAY ONLY be created from a non-null object");if(t[m])return t;if(Array.isArray(t))return new U({target:t,ownKey:null,parent:null,options:e}).proxy;if(ArrayBuffer.isView(t))return new Y({target:t,ownKey:null,parent:null,options:e}).proxy;if(t instanceof Date)throw new Error(`${t} found to be one of a non-observable types`);return new q({target:t,ownKey:null,parent:null,options:e}).proxy},isObservable:t=>!!(t&&t[m]),observe:(t,e,r)=>{if(!j.isObservable(t))throw new Error("invalid observable parameter");if(typeof e!="function")throw new Error(`observer MUST be a function, got '${e}'`);let o=t[m].observers;o.some(a=>a[0]===e)?console.warn("observer may be bound to an observable only once; will NOT rebind"):o.push([e,ve(r)])},unobserve:(t,...e)=>{if(!j.isObservable(t))throw new Error("invalid observable parameter");let r=t[m].observers,o=r.length;if(o){if(!e.length){r.splice(0);return}for(;o;)e.indexOf(r[--o][0])>=0&&r.splice(o,1)}}});var ke=typeof global=="object"&&global&&global.Object===Object&&global,xt=ke;var Ne=typeof self=="object"&&self&&self.Object===Object&&self,$e=xt||Ne||Function("return this")(),I=$e;var ze=I.Symbol,y=ze;var gt=Object.prototype,Re=gt.hasOwnProperty,We=gt.toString,K=y?y.toStringTag:void 0;function Ke(t){var e=Re.call(t,K),r=t[K];try{t[K]=void 0;var o=!0}catch{}var a=We.call(t);return o&&(e?t[K]=r:delete t[K]),a}var yt=Ke;var Be=Object.prototype,Fe=Be.toString;function Le(t){return Fe.call(t)}var bt=Le;var Ge="[object Null]",He="[object Undefined]",vt=y?y.toStringTag:void 0;function qe(t){return t==null?t===void 0?He:Ge:vt&&vt in Object(t)?yt(t):bt(t)}var J=qe;function Ue(t){return t!=null&&typeof t=="object"}var wt=Ue;var Ye="[object Symbol]";function Ve(t){return typeof t=="symbol"||wt(t)&&J(t)==Ye}var C=Ve;function Je(t,e){for(var r=-1,o=t==null?0:t.length,a=Array(o);++r<o;)a[r]=e(t[r],r,t);return a}var Ot=Je;var Xe=Array.isArray,A=Xe;var Ze=1/0,_t=y?y.prototype:void 0,St=_t?_t.toString:void 0;function Tt(t){if(typeof t=="string")return t;if(A(t))return Ot(t,Tt)+"";if(C(t))return St?St.call(t):"";var e=t+"";return e=="0"&&1/t==-Ze?"-0":e}var jt=Tt;function Qe(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var S=Qe;var tr="[object AsyncFunction]",er="[object Function]",rr="[object GeneratorFunction]",or="[object Proxy]";function ar(t){if(!S(t))return!1;var e=J(t);return e==er||e==rr||e==tr||e==or}var It=ar;var sr=I["__core-js_shared__"],X=sr;var Ct=function(){var t=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function fr(t){return!!Ct&&Ct in t}var At=fr;var nr=Function.prototype,ir=nr.toString;function pr(t){if(t!=null){try{return ir.call(t)}catch{}try{return t+""}catch{}}return""}var Mt=pr;var lr=/[\\^$.*+?()[\]{}|]/g,ur=/^\[object .+?Constructor\]$/,mr=Function.prototype,dr=Object.prototype,cr=mr.toString,hr=dr.hasOwnProperty,xr=RegExp("^"+cr.call(hr).replace(lr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function gr(t){if(!S(t)||At(t))return!1;var e=It(t)?xr:ur;return e.test(Mt(t))}var Pt=gr;function yr(t,e){return t?.[e]}var Et=yr;function br(t,e){var r=Et(t,e);return Pt(r)?r:void 0}var M=br;var vr=function(){try{var t=M(Object,"defineProperty");return t({},"",{}),t}catch{}}(),et=vr;var wr=9007199254740991,Or=/^(?:0|[1-9]\d*)$/;function _r(t,e){var r=typeof t;return e=e??wr,!!e&&(r=="number"||r!="symbol"&&Or.test(t))&&t>-1&&t%1==0&&t<e}var Dt=_r;function Sr(t,e,r){e=="__proto__"&&et?et(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}var kt=Sr;function Tr(t,e){return t===e||t!==t&&e!==e}var Z=Tr;var jr=Object.prototype,Ir=jr.hasOwnProperty;function Cr(t,e,r){var o=t[e];(!(Ir.call(t,e)&&Z(o,r))||r===void 0&&!(e in t))&&kt(t,e,r)}var Nt=Cr;var Ar=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Mr=/^\w*$/;function Pr(t,e){if(A(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||C(t)?!0:Mr.test(t)||!Ar.test(t)||e!=null&&t in Object(e)}var $t=Pr;var Er=M(Object,"create"),b=Er;function Dr(){this.__data__=b?b(null):{},this.size=0}var zt=Dr;function kr(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Rt=kr;var Nr="__lodash_hash_undefined__",$r=Object.prototype,zr=$r.hasOwnProperty;function Rr(t){var e=this.__data__;if(b){var r=e[t];return r===Nr?void 0:r}return zr.call(e,t)?e[t]:void 0}var Wt=Rr;var Wr=Object.prototype,Kr=Wr.hasOwnProperty;function Br(t){var e=this.__data__;return b?e[t]!==void 0:Kr.call(e,t)}var Kt=Br;var Fr="__lodash_hash_undefined__";function Lr(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=b&&e===void 0?Fr:e,this}var Bt=Lr;function P(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}P.prototype.clear=zt;P.prototype.delete=Rt;P.prototype.get=Wt;P.prototype.has=Kt;P.prototype.set=Bt;var rt=P;function Gr(){this.__data__=[],this.size=0}var Ft=Gr;function Hr(t,e){for(var r=t.length;r--;)if(Z(t[r][0],e))return r;return-1}var O=Hr;var qr=Array.prototype,Ur=qr.splice;function Yr(t){var e=this.__data__,r=O(e,t);if(r<0)return!1;var o=e.length-1;return r==o?e.pop():Ur.call(e,r,1),--this.size,!0}var Lt=Yr;function Vr(t){var e=this.__data__,r=O(e,t);return r<0?void 0:e[r][1]}var Gt=Vr;function Jr(t){return O(this.__data__,t)>-1}var Ht=Jr;function Xr(t,e){var r=this.__data__,o=O(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}var qt=Xr;function E(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}E.prototype.clear=Ft;E.prototype.delete=Lt;E.prototype.get=Gt;E.prototype.has=Ht;E.prototype.set=qt;var Ut=E;var Zr=M(I,"Map"),Yt=Zr;function Qr(){this.size=0,this.__data__={hash:new rt,map:new(Yt||Ut),string:new rt}}var Vt=Qr;function to(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var Jt=to;function eo(t,e){var r=t.__data__;return Jt(e)?r[typeof e=="string"?"string":"hash"]:r.map}var _=eo;function ro(t){var e=_(this,t).delete(t);return this.size-=e?1:0,e}var Xt=ro;function oo(t){return _(this,t).get(t)}var Zt=oo;function ao(t){return _(this,t).has(t)}var Qt=ao;function so(t,e){var r=_(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}var te=so;function D(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}D.prototype.clear=Vt;D.prototype.delete=Xt;D.prototype.get=Zt;D.prototype.has=Qt;D.prototype.set=te;var ot=D;var fo="Expected a function";function at(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(fo);var r=function(){var o=arguments,a=e?e.apply(this,o):o[0],s=r.cache;if(s.has(a))return s.get(a);var n=t.apply(this,o);return r.cache=s.set(a,n)||s,n};return r.cache=new(at.Cache||ot),r}at.Cache=ot;var ee=at;var no=500;function io(t){var e=ee(t,function(o){return r.size===no&&r.clear(),o}),r=e.cache;return e}var re=io;var po=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,lo=/\\(\\)?/g,uo=re(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(po,function(r,o,a,s){e.push(a?s.replace(lo,"$1"):o||r)}),e}),oe=uo;function mo(t){return t==null?"":jt(t)}var ae=mo;function co(t,e){return A(t)?t:$t(t,e)?[t]:oe(ae(t))}var k=co;var ho=1/0;function xo(t){if(typeof t=="string"||C(t))return t;var e=t+"";return e=="0"&&1/t==-ho?"-0":e}var N=xo;function go(t,e){e=k(e,t);for(var r=0,o=e.length;t!=null&&r<o;)t=t[N(e[r++])];return r&&r==o?t:void 0}var Q=go;function yo(t,e,r){var o=t==null?void 0:Q(t,e);return o===void 0?r:o}var st=yo;function bo(t,e,r){var o=-1,a=t.length;e<0&&(e=-e>a?0:a+e),r=r>a?a:r,r<0&&(r+=a),a=e>r?0:r-e>>>0,e>>>=0;for(var s=Array(a);++o<a;)s[o]=t[o+e];return s}var se=bo;function vo(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var fe=vo;function wo(t,e){return e.length<2?t:Q(t,se(e,0,-1))}var ne=wo;function Oo(t,e){return e=k(e,t),t=ne(t,e),t==null||delete t[N(fe(e))]}var ie=Oo;function _o(t,e,r,o){if(!S(t))return t;e=k(e,t);for(var a=-1,s=e.length,n=s-1,f=t;f!=null&&++a<s;){var l=N(e[a]),i=r;if(l==="__proto__"||l==="constructor"||l==="prototype")return t;if(a!=n){var u=f[l];i=o?o(u,l,f):void 0,i===void 0&&(i=S(u)?u:Dt(e[a+1])?[]:{})}Nt(f,l,i),f=f[l]}return t}var pe=_o;function So(t,e,r){return t==null?t:pe(t,e,r)}var ft=So;function To(t,e){return t==null?!0:ie(t,e)}var nt=To;var T=class{#t;constructor(e,r={}){this.name=e,this.#t=j.from(r)}set(e,r){return ft(this.#t,e,r),this}get(e=null){return e?st(this.#t,e):this.json()}delete(e){return nt(this.#t,e)}sync(e,r=null){let o=a=>{let s=[];for(let n of a)s.push({type:n.type,path:n.path,value:n.value});e.emit(`sync:${this.name}`,s)};r?this.subscribe(r,o):this.onChange(o),e.on(`sync:${this.name}:init`,()=>{let a=r?{[r]:this.get(r)}:this.get();e.emit(`sync:${this.name}:init`,a)})}subscribe(e,r){j.observe(this.#t,r,{pathsOf:e})}onChange(e){j.observe(this.#t,r=>{e(r)})}json(){return JSON.parse(JSON.stringify(this.#t))}};var le=new $;le.onload(()=>{console.log("Server ready")});var Io=le.server;0&&(module.exports={$Server,$State,$Ticker});
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