(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[14],{1109:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o,s,u,b,j,d,l,f,O,p,h,x=n(54),m=n(0),v=n(3),g=n(19),k=n(204),y=n(207),w=n(2),C=n.n(w),I=n(29),S=n(16),F=n(11),M=n(34),T=n(791),N=n.n(T),U=n(108),E=n(47),A=n(70),D=n(801),P=n(127),R=n(49),_=v.e.div(r||(r=Object(x.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n"]))),J=n(158),L=n.n(J),q=n(760),B=n(8),Q=Object(v.e)(g.db)(c||(c=Object(x.a)(["\n  font-weight: 600;\n"]))),W=v.e.div(a||(a=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),z=v.e.div(i||(i=Object(x.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),Y=v.e.label(o||(o=Object(x.a)(["\n  color: ",";\n  display: block;\n  margin-bottom: 8px;\n  margin-top: 24px;\n"])),(function(e){return e.theme.colors.text})),G=function(e){var t=e.nft,n=e.tokenIds,r=e.onSuccess,c=e.onDismiss,a=Object(m.useState)(!1),i=Object(M.a)(a,2),o=i[0],s=i[1],u=Object(m.useState)(""),b=Object(M.a)(u,2),j=b[0],d=b[1],l=Object(m.useState)(null),f=Object(M.a)(l,2),O=f[0],p=f[1],h=Object(k.a)(),x=Object(E.c)().account,v=Object(q.j)(),y=Object(R.t)().toastSuccess,w=function(){var e=Object(F.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,L.a.utils.isAddress(j)){e.next=6;break}p(h(999,"Please enter a valid wallet address")),e.next=8;break;case 6:return e.next=8,v.methods.transferFrom(x,j,n[0]).send({from:x}).on("sending",(function(){s(!0)})).on("receipt",(function(){c(),r(),y("NFT successfully transferred!")})).on("error",(function(){console.error(O),p("Unable to transfer NFT"),s(!1)}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to transfer NFT:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(B.jsxs)(g.R,{title:h(999,"Transfer NFT"),onDismiss:c,children:[Object(B.jsxs)(W,{children:[O&&Object(B.jsx)(g.db,{color:"failure",mb:"8px",children:O}),Object(B.jsxs)(_,{children:[Object(B.jsxs)(g.db,{children:[h(999,"Transferring"),":"]}),Object(B.jsx)(Q,{children:'1x "'.concat(t.name,'" NFT')})]}),Object(B.jsxs)(Y,{htmlFor:"transferAddress",children:[h(999,"Receiving address"),":"]}),Object(B.jsx)(g.J,{id:"transferAddress",name:"address",type:"text",placeholder:h(999,"Paste address"),value:j,onChange:function(e){var t=e.target.value;d(t)},isWarning:O,disabled:o})]}),Object(B.jsxs)(z,{children:[Object(B.jsx)(g.k,{width:"100%",variant:"secondary",onClick:c,children:h(462,"Cancel")}),Object(B.jsx)(g.k,{width:"100%",onClick:w,disabled:!x||o||!j,children:h(464,"Confirm")})]})]})},H=v.e.div(s||(s=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),K=v.e.div(u||(u=Object(x.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),V=function(e){var t=e.nft,n=e.onSuccess,r=e.onDismiss,c=Object(m.useState)(!1),a=Object(M.a)(c,2),i=a[0],o=a[1],s=Object(k.a)(),u=Object(E.c)().account,b=Object(R.t)(),j=b.toastError,d=b.toastSuccess,l=Object(q.b)(),f=function(){var e=Object(F.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.methods.mintNFT(t.bunnyId).send({from:u}).on("sending",(function(){o(!0)})).on("receipt",(function(){d("Successfully claimed!"),r(),n()})).on("error",(function(e){console.error("Unable to claim NFT",e),j("Error","Unable to claim NFT, please try again."),o(!1)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(B.jsxs)(g.R,{title:s(999,"Claim Collectible"),onDismiss:r,children:[Object(B.jsx)(H,{children:Object(B.jsxs)(g.E,{alignItems:"center",mb:"8px",justifyContent:"space-between",children:[Object(B.jsxs)(g.db,{children:[s(626,"You will receive"),":"]}),Object(B.jsx)(g.db,{bold:!0,children:'1x "'.concat(t.name,'" Collectible')})]})}),Object(B.jsxs)(K,{children:[Object(B.jsx)(g.k,{width:"100%",variant:"secondary",onClick:r,children:s(462,"Cancel")}),Object(B.jsx)(g.k,{width:"100%",onClick:f,disabled:!u||i,children:s(464,"Confirm")})]})]})},X=v.e.div(b||(b=Object(x.a)(["\n  background-color: ",";\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding-bottom: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),Z=v.e.img(j||(j=Object(x.a)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  transition: opacity 1s linear;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 32px 32px 0 0;\n"]))),$=v.e.video(d||(d=Object(x.a)(["\n  height: 100%;\n  width: 100%;\n"]))),ee=function(e){var t=e.nft,n=e.isOwned,r=void 0!==n&&n,c=t.images,a=t.name,i=t.video,o="/images/nfts/".concat(c.lg);if(i){var s=Object(B.jsxs)($,{autoPlay:!0,controls:!1,loop:!0,muted:!0,poster:o,children:[Object(B.jsx)("source",{src:i.webm,type:"video/webm"}),Object(B.jsx)("source",{src:i.mp4,type:"video/mp4"})]});return r?Object(B.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:s}):s}var u=Object(B.jsx)(Z,{src:o,alt:a});return Object(B.jsx)(X,{children:r?Object(B.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:u}):u})},te=Object(v.e)(_)(l||(l=Object(x.a)(["\n  min-height: 28px;\n"]))),ne=Object(v.e)(g.k).attrs({variant:"text"})(f||(f=Object(x.a)(["\n  height: auto;\n  padding: 16px 24px;\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n\n  &:focus:not(:active) {\n    box-shadow: none;\n  }\n"]))),re=v.e.div(O||(O=Object(x.a)(["\n  padding: 24px;\n"]))),ce=function(e){var t,n=e.nft,r=e.onSuccess,c=e.canClaim,a=void 0!==c&&c,i=e.tokenIds,o=void 0===i?[]:i,s=Object(m.useState)(!1),u=Object(M.a)(s,2),b=u[0],j=u[1],d=Object(k.a)(),l=Object(R.q)().profile,f=n.bunnyId,O=n.name,p=n.description,h=o.length>0,x=b?g.A:g.x,v=function(){var e=Object(F.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(!b);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=Object(g.rb)(Object(B.jsx)(G,{nft:n,tokenIds:o,onSuccess:r})),w=Object(M.a)(y,1)[0],I=Object(g.rb)(Object(B.jsx)(V,{nft:n,onSuccess:r})),S=Object(M.a)(I,1)[0];return Object(B.jsxs)(g.o,{isActive:h||a,children:[Object(B.jsx)(ee,{nft:n,isOwned:h}),Object(B.jsxs)(g.p,{children:[Object(B.jsxs)(te,{children:[Object(B.jsx)(g.F,{children:O}),h&&Object(B.jsx)(g.cb,{outline:!0,variant:"secondary",children:d(999,"In Wallet")}),(null===l||void 0===l||null===(t=l.nft)||void 0===t?void 0:t.bunnyId)===f&&Object(B.jsx)(g.cb,{outline:!0,variant:"success",children:d(999,"Profile Pic")})]}),a&&Object(B.jsx)(g.k,{width:"100%",mt:"24px",onClick:S,children:d(999,"Claim this NFT")}),h&&Object(B.jsx)(g.k,{width:"100%",variant:"secondary",mt:"24px",onClick:w,children:d(999,"Transfer")})]}),Object(B.jsxs)(g.q,{p:"0",children:[Object(B.jsx)(ne,{width:"100%",endIcon:Object(B.jsx)(x,{width:"24px",color:"primary"}),onClick:v,children:d(658,"Details")}),b&&Object(B.jsx)(re,{children:Object(B.jsx)(g.db,{as:"p",color:"textSubtle",style:{textAlign:"center"},children:p})})]})]})},ae=v.e.div(p||(p=Object(x.a)(["\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  padding-bottom: 24px;\n  padding-top: 24px;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md})),ie=Object(A.c)(),oe=function(){var e=Object(m.useState)({}),t=Object(M.a)(e,2),n=t[0],r=t[1],c=Object(D.a)(),a=c.nfts,i=c.refresh,o=Object(E.c)().account,s=Object(R.t)().toastError,u=Object(m.useCallback)(function(){var e=Object(F.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(P.a)(U.a.map((function(e){return ie.methods.canClaimSingle(t,e.bunnyId).call})));case 3:n=e.sent,r(n.reduce((function(e,t,n){return Object(S.a)(Object(S.a)({},e),{},Object(I.a)({},U.a[n].bunnyId,t))}),{})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),s("Error checking NFT claimable status");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[r,s]),b=function(){i(),u(o)};return Object(m.useEffect)((function(){o&&u(o)}),[o,u]),Object(B.jsx)(ae,{children:N()(U.a,"sortOrder").map((function(e){var t=a[e.bunnyId]?a[e.bunnyId].tokenIds:[];return Object(B.jsx)("div",{children:Object(B.jsx)(ce,{nft:e,canClaim:n[e.bunnyId],tokenIds:t,onSuccess:b})},e.name)}))})},se=v.e.div(h||(h=Object(x.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 32px;\n"])),(function(e){return e.theme.colors.textSubtle}));t.default=function(){var e=Object(k.a)();return Object(B.jsxs)(y.a,{children:[Object(B.jsx)(se,{children:Object(B.jsx)(g.F,{as:"h1",size:"xxl",color:"secondary",children:e(999,"Pancake Collectibles")})}),Object(B.jsx)(oe,{})]})}},760:function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"j",(function(){return b})),n.d(t,"l",(function(){return j})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return f})),n.d(t,"m",(function(){return O})),n.d(t,"k",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return x}));var r=n(0),c=n(763),a=n(70),i=function(e){var t=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.f)(e,t)}),[e,t])},o=function(e){var t=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.a)(e,t)}),[e,t])},s=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.d)(e)}),[e])},u=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.b)(e)}),[e])},b=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.j)(e)}),[e])},j=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.l)(e)}),[e])},d=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.g)(e)}),[e])},l=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.h)(e)}),[e])},f=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.i)(e)}),[e])},O=function(e){var t=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.m)(e,t)}),[e,t])},p=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.k)(e)}),[e])},h=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.c)(e)}),[e])},x=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.e)(e)}),[e])}},763:function(e,t,n){"use strict";var r=n(34),c=n(0),a=n(158),i=n.n(a),o=n(47),s=n(63);t.a=function(){var e=Object(o.c)().library,t=Object(c.useRef)(e),n=Object(c.useState)(e?new i.a(e):Object(s.b)()),a=Object(r.a)(n,2),u=a[0],b=a[1];return Object(c.useEffect)((function(){e!==t.current&&(b(e?new i.a(e):Object(s.b)()),t.current=e)}),[e]),u}},791:function(e,t,n){var r=n(792),c=n(105);e.exports=function(e,t,n,a){return null==e?[]:(c(t)||(t=null==t?[]:[t]),c(n=a?void 0:n)||(n=null==n?[]:[n]),r(e,t,n))}},792:function(e,t,n){var r=n(384),c=n(383),a=n(793),i=n(796),o=n(798),s=n(389),u=n(799),b=n(210),j=n(105);e.exports=function(e,t,n){t=t.length?r(t,(function(e){return j(e)?function(t){return c(t,1===e.length?e[0]:e)}:e})):[b];var d=-1;t=r(t,s(a));var l=i(e,(function(e,n,c){return{criteria:r(t,(function(t){return t(e)})),index:++d,value:e}}));return o(l,(function(e,t){return u(e,t,n)}))}},796:function(e,t,n){var r=n(797),c=n(156);e.exports=function(e,t){var n=-1,a=c(e)?Array(e.length):[];return r(e,(function(e,r,c){a[++n]=t(e,r,c)})),a}},798:function(e,t){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},799:function(e,t,n){var r=n(800);e.exports=function(e,t,n){for(var c=-1,a=e.criteria,i=t.criteria,o=a.length,s=n.length;++c<o;){var u=r(a[c],i[c]);if(u)return c>=s?u:u*("desc"==n[c]?-1:1)}return e.index-t.index}},800:function(e,t,n){var r=n(126);e.exports=function(e,t){if(e!==t){var n=void 0!==e,c=null===e,a=e===e,i=r(e),o=void 0!==t,s=null===t,u=t===t,b=r(t);if(!s&&!b&&!i&&e>t||i&&o&&u&&!s&&!b||c&&o&&u||!n&&u||!a)return 1;if(!c&&!i&&!b&&e<t||b&&n&&a&&!c&&!i||s&&n&&a||!o&&a||!u)return-1}return 0}},801:function(e,t,n){"use strict";var r=n(29),c=n(57),a=n(2),i=n.n(a),o=n(11),s=n(34),u=n(16),b=n(47),j=n(0),d=n(70),l=n(127),f=Object(d.j)(),O={isLoading:!0,nfts:{},lastUpdated:Date.now()},p=function(e,t){switch(t.type){case"set_nfts":return Object(u.a)(Object(u.a)({},O),{},{isLoading:!1,nfts:t.data});case"refresh":return Object(u.a)(Object(u.a)({},O),{},{lastUpdated:t.timestamp});case"reset":return Object(u.a)(Object(u.a)({},O),{},{isLoading:!1});default:return e}};t.a=function(){var e=Object(j.useReducer)(p,O),t=Object(s.a)(e,2),n=t[0],a=t[1],d=Object(b.c)().account,h=n.lastUpdated;Object(j.useEffect)((function(){d&&function(){var e=Object(o.a)(i.a.mark((function e(){var t,n,b,j,O,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.methods.balanceOf(d).call();case 3:if(!((t=e.sent)>0)){e.next=16;break}for(n={},b=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,r,c,a,o,u,b,j,O;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=f.methods,r=n.tokenOfOwnerByIndex,c=n.getBunnyId,a=n.tokenURI,e.next=4,r(d,t).call();case 4:return o=e.sent,e.next=7,Object(l.a)([c(o).call,a(o).call]);case 7:return u=e.sent,b=Object(s.a)(u,2),j=b[0],O=b[1],e.abrupt("return",[Number(j),Number(o),O]);case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),j=[],O=0;O<t;O++)j.push(b(O));return e.next=11,Promise.all(j);case 11:p=e.sent,n=p.reduce((function(e,t){if(!t)return e;var n=Object(s.a)(t,3),a=n[0],i=n[1],o=n[2];return Object(u.a)(Object(u.a)({},e),{},Object(r.a)({},a,{tokenUri:o,tokenIds:e[a]?[].concat(Object(c.a)(e[a].tokenIds),[i]):[i]}))}),{}),a({type:"set_nfts",data:n}),e.next=17;break;case 16:a({type:"reset"});case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),a({type:"reset"});case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}()()}),[d,h,a]);return Object(u.a)(Object(u.a)({},n),{},{refresh:function(){return a({type:"refresh",timestamp:Date.now()})}})}}}]);
//# sourceMappingURL=14.e5471c99.chunk.js.map