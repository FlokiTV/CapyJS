(()=>{var m="insert",j="update",D="delete",N="reverse",S="shuffle",a=Symbol.for("object-observer-meta-key-0"),R={async:1},_=n=>{if(!n||typeof n!="object")return null;let t={},e=[];for(let[s,o]of Object.entries(n))if(s==="path"){if(typeof o!="string"||o==="")throw new Error('"path" option, if/when provided, MUST be a non-empty string');t[s]=o}else if(s==="pathsOf"){if(n.path)throw new Error('"pathsOf" option MAY NOT be specified together with "path" option');if(typeof o!="string")throw new Error('"pathsOf" option, if/when provided, MUST be a string (MAY be empty)');t[s]=n.pathsOf.split(".").filter(Boolean)}else if(s==="pathsFrom"){if(n.path||n.pathsOf)throw new Error('"pathsFrom" option MAY NOT be specified together with "path"/"pathsOf" option/s');if(typeof o!="string"||o==="")throw new Error('"pathsFrom" option, if/when provided, MUST be a non-empty string');t[s]=o}else e.push(s);if(e.length)throw new Error(`'${e.join(", ")}' is/are not a valid observer option/s`);return t},I=(n,t,e)=>{let s={};s[a]=t;for(let o in n)s[o]=v(n[o],o,t,e);return s},B=(n,t,e)=>{let s=n.length,o=new Array(s);o[a]=t;for(let i=0;i<s;i++)o[i]=v(n[i],i,t,e);return o},H=(n,t)=>(n[a]=t,n),W=(n,t)=>{if(n===null)return t;let e=t;if(n.path){let s=n.path;e=t.filter(o=>o.path.join(".")===s)}else if(n.pathsOf){let s=n.pathsOf,o=s.join(".");e=t.filter(i=>(i.path.length===s.length+1||i.path.length===s.length&&(i.type===N||i.type===S))&&i.path.join(".").startsWith(o))}else if(n.pathsFrom){let s=n.pathsFrom;e=t.filter(o=>o.path.join(".").startsWith(s))}return e},C=(n,t)=>{try{n(t)}catch(e){console.error(`failed to notify listener ${n} with ${t}`,e)}},J=function(){let n=this.batches;this.batches=[];for(let[t,e]of n)C(t,e)},g=(n,t)=>{let e=n,s,o,i,h,r,p,l=t.length;do{for(s=e.options.async,o=e.observers,p=o.length;p--;)if([i,h]=o[p],r=W(h,t),r.length)if(s){e.batches.length===0&&queueMicrotask(J.bind(e));let c;for(let y of e.batches)if(y[0]===i){c=y;break}c||(c=[i,[]],e.batches.push(c)),Array.prototype.push.apply(c[1],r)}else C(i,r);let f=e.parent;if(f){for(let c=0;c<l;c++){let y=t[c];t[c]=new u(y.type,[e.ownKey,...y.path],y.value,y.oldValue,y.object)}e=f}else e=null}while(e)},v=(n,t,e,s)=>s!==void 0&&s.has(n)?null:typeof n!="object"||n===null?n:Array.isArray(n)?new M({target:n,ownKey:t,parent:e,visited:s}).proxy:ArrayBuffer.isView(n)?new A({target:n,ownKey:t,parent:e}).proxy:n instanceof Date?n:new k({target:n,ownKey:t,parent:e,visited:s}).proxy,P=function(){let n=this[a],t=n.target,e=t.length-1,s=t.pop();if(s&&typeof s=="object"){let i=s[a];i&&(s=i.detach())}let o=[new u(D,[e],void 0,s,this)];return g(n,o),s},U=function(){let n=this[a],t=n.target,e=arguments.length,s=new Array(e),o=t.length;for(let r=0;r<e;r++)s[r]=v(arguments[r],o+r,n);let i=Reflect.apply(t.push,t,s),h=[];for(let r=o,p=t.length;r<p;r++)h[r-o]=new u(m,[r],t[r],void 0,this);return g(n,h),i},V=function(){let n=this[a],t=n.target,e,s,o,i,h;for(e=t.shift(),e&&typeof e=="object"&&(h=e[a],h&&(e=h.detach())),s=0,o=t.length;s<o;s++)i=t[s],i&&typeof i=="object"&&(h=i[a],h&&(h.ownKey=s));let r=[new u(D,[0],void 0,e,this)];return g(n,r),e},q=function(){let n=this[a],t=n.target,e=arguments.length,s=new Array(e);for(let r=0;r<e;r++)s[r]=v(arguments[r],r,n);let o=Reflect.apply(t.unshift,t,s);for(let r=0,p=t.length,l;r<p;r++)if(l=t[r],l&&typeof l=="object"){let f=l[a];f&&(f.ownKey=r)}let i=s.length,h=new Array(i);for(let r=0;r<i;r++)h[r]=new u(m,[r],t[r],void 0,this);return g(n,h),o},z=function(){let n=this[a],t=n.target,e,s,o;for(t.reverse(),e=0,s=t.length;e<s;e++)if(o=t[e],o&&typeof o=="object"){let h=o[a];h&&(h.ownKey=e)}let i=[new u(N,[],void 0,void 0,this)];return g(n,i),this},L=function(n){let t=this[a],e=t.target,s,o,i;for(e.sort(n),s=0,o=e.length;s<o;s++)if(i=e[s],i&&typeof i=="object"){let r=i[a];r&&(r.ownKey=s)}let h=[new u(S,[],void 0,void 0,this)];return g(t,h),this},Y=function(n,t,e){let s=this[a],o=s.target,i=[],h=o.length,r=o.slice(0);if(t=t===void 0?0:t<0?Math.max(h+t,0):Math.min(t,h),e=e===void 0?h:e<0?Math.max(h+e,0):Math.min(e,h),t<h&&e>t){o.fill(n,t,e);let p;for(let l=t,f,c;l<e;l++)f=o[l],o[l]=v(f,l,s),l in r?(c=r[l],c&&typeof c=="object"&&(p=c[a],p&&(c=p.detach())),i.push(new u(j,[l],o[l],c,this))):i.push(new u(m,[l],o[l],void 0,this));g(s,i)}return this},F=function(n,t,e){let s=this[a],o=s.target,i=o.length;n=n<0?Math.max(i+n,0):n,t=t===void 0?0:t<0?Math.max(i+t,0):Math.min(t,i),e=e===void 0?i:e<0?Math.max(i+e,0):Math.min(e,i);let h=Math.min(e-t,i-n);if(n<i&&n!==t&&h>0){let r=o.slice(0),p=[];o.copyWithin(n,t,e);for(let l=n,f,c,y;l<n+h;l++)f=o[l],f&&typeof f=="object"&&(f=v(f,l,s),o[l]=f),c=r[l],c&&typeof c=="object"&&(y=c[a],y&&(c=y.detach())),!(typeof f!="object"&&f===c)&&p.push(new u(j,[l],f,c,this));g(s,p)}return this},G=function(){let n=this[a],t=n.target,e=arguments.length,s=new Array(e),o=t.length;for(let w=0;w<e;w++)s[w]=v(arguments[w],w,n);let i=e===0?0:s[0]<0?o+s[0]:s[0],h=e<2?o-i:s[1],r=Math.max(e-2,0),p=Reflect.apply(t.splice,t,s),l=t.length,f;for(let w=0,T;w<l;w++)T=t[w],T&&typeof T=="object"&&(f=T[a],f&&(f.ownKey=w));let c,y,O;for(c=0,y=p.length;c<y;c++)O=p[c],O&&typeof O=="object"&&(f=O[a],f&&(p[c]=f.detach()));let x=[],b;for(b=0;b<h;b++)b<r?x.push(new u(j,[i+b],t[i+b],p[b],this)):x.push(new u(D,[i+b],void 0,p[b],this));for(;b<r;b++)x.push(new u(m,[i+b],t[i+b],void 0,this));return g(n,x),p},Q=function(n,t){let e=this[a],s=e.target,o=n.length,i=s.slice(0);t=t||0,s.set(n,t);let h=new Array(o);for(let r=t;r<o+t;r++)h[r-t]=new u(j,[r],s[r],i[r],this);g(e,h)},X={pop:P,push:U,shift:V,unshift:q,reverse:z,sort:L,fill:Y,copyWithin:F,splice:G},Z={reverse:z,sort:L,fill:Y,copyWithin:F,set:Q},u=class{constructor(t,e,s,o,i){this.type=t,this.path=e,this.value=s,this.oldValue=o,this.object=i}},d=class{constructor(t,e){let{target:s,parent:o,ownKey:i,visited:h=new Set}=t;o&&i!==void 0?(this.parent=o,this.ownKey=i):(this.parent=null,this.ownKey=null),h.add(s);let r=e(s,this,h);h.delete(s),this.observers=[],this.revocable=Proxy.revocable(r,this),this.proxy=this.revocable.proxy,this.target=r,this.options=this.processOptions(t.options),this.options.async&&(this.batches=[])}processOptions(t){if(t){if(typeof t!="object")throw new Error(`Observable options if/when provided, MAY only be an object, got '${t}'`);let e=Object.keys(t).filter(s=>!(s in R));if(e.length)throw new Error(`'${e.join(", ")}' is/are not a valid Observable option/s`);return Object.assign({},t)}else return{}}detach(){return this.parent=null,this.target}set(t,e,s){let o=t[e];if(s!==o){let i=v(s,e,this);if(t[e]=i,o&&typeof o=="object"){let r=o[a];r&&(o=r.detach())}let h=o===void 0?[new u(m,[e],i,void 0,this.proxy)]:[new u(j,[e],i,o,this.proxy)];g(this,h)}return!0}deleteProperty(t,e){let s=t[e];if(delete t[e],s&&typeof s=="object"){let i=s[a];i&&(s=i.detach())}let o=[new u(D,[e],void 0,s,this.proxy)];return g(this,o),!0}},k=class extends d{constructor(t){super(t,I)}},M=class extends d{constructor(t){super(t,B)}get(t,e){return X[e]||t[e]}},A=class extends d{constructor(t){super(t,H)}get(t,e){return Z[e]||t[e]}},K=Object.freeze({from:(n,t)=>{if(!n||typeof n!="object")throw new Error("observable MAY ONLY be created from a non-null object");if(n[a])return n;if(Array.isArray(n))return new M({target:n,ownKey:null,parent:null,options:t}).proxy;if(ArrayBuffer.isView(n))return new A({target:n,ownKey:null,parent:null,options:t}).proxy;if(n instanceof Date)throw new Error(`${n} found to be one of a non-observable types`);return new k({target:n,ownKey:null,parent:null,options:t}).proxy},isObservable:n=>!!(n&&n[a]),observe:(n,t,e)=>{if(!K.isObservable(n))throw new Error("invalid observable parameter");if(typeof t!="function")throw new Error(`observer MUST be a function, got '${t}'`);let s=n[a].observers;s.some(o=>o[0]===t)?console.warn("observer may be bound to an observable only once; will NOT rebind"):s.push([t,_(e)])},unobserve:(n,...t)=>{if(!K.isObservable(n))throw new Error("invalid observable parameter");let e=n[a].observers,s=e.length;if(s){if(!t.length){e.splice(0);return}for(;s;)t.indexOf(e[--s][0])>=0&&e.splice(s,1)}}});var E=class{constructor(t){this.id=t}emit(t="",...e){return null}on(t="",e=null){return null}onDisconnect(){}};var $=class extends E{#t;constructor(t){super(t.id),this.#t=t}emit(t,...e){this.#t.emit(t,...e)}on(t,e){this.#t.on(t,s=>{try{e(this,s)}catch(o){console.log(o)}})}onDisconnect(t){try{this.#t.onDisconnect(t)}catch(e){console.log(e)}}},tt=(n="http://127.0.0.1:3000/",t)=>{let e=geckos({url:n,authorization:"default"});e.onConnect(s=>{let o=new $(e);t(o)})};window.CapyAdapter=tt;})();
