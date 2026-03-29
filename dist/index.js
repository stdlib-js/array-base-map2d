"use strict";var f=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var p=f(function(R,l){
function q(e,a,n,c){var o,t,i,r,v,s,u;for(o=a[1],t=a[0],u=[],r=0;r<t;r++){for(v=e[r],s=[],i=0;i<o;i++)s.push(n.call(c,v[i],[r,i],e));u.push(s)}return u}l.exports=q
});var d=f(function(b,S){
function x(e,a,n,c,o){var t,i,r,v,s,u;if(t=n[1],i=n[0],t<=0||i<=0)return a;for(v=0;v<i;v++)for(s=e[v],u=a[v],r=0;r<t;r++)u[r]=c.call(o,s[r],[v,r],e);return a}S.exports=x
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=p(),y=d();g(m,"assign",y);module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
