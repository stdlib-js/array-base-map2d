// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";function n(r,n,e,s){var t,o,a,i,f,l,u;for(t=n[1],o=n[0],u=[],i=0;i<o;i++){for(f=r[i],l=[],a=0;a<t;a++)l.push(e.call(s,f[a],[i,a],r));u.push(l)}return u}function e(r,n,e,s,t){var o,a,i,f,l,u;if(o=e[1],a=e[0],o<=0||a<=0)return n;for(f=0;f<a;f++)for(l=r[f],u=n[f],i=0;i<o;i++)u[i]=s.call(t,l[i],[f,i],r);return n}r(n,"assign",e);export{e as assign,n as default};
//# sourceMappingURL=index.mjs.map
