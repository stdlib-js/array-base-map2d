"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var p=f(function(R,l){
function q(e,r,t,c){var o,s,i,a,v,u,n;for(o=r[1],s=r[0],n=[],a=0;a<s;a++){for(v=e[a],u=[],i=0;i<o;i++)u.push(t.call(c,v[i],[a,i],e));n.push(u)}return n}l.exports=q
});var d=f(function(b,S){
function x(e,r,t,c,o){var s,i,a,v,u,n;if(s=t[1],i=t[0],s<=0||i<=0)return r;for(v=0;v<i;v++)for(u=e[v],n=r[v],a=0;a<s;a++)n[a]=c.call(o,u[a],[v,a],e);return r}S.exports=x
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=p(),y=d();g(m,"assign",y);module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
