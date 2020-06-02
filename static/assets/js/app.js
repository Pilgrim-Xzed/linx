/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

/*
* iziToast | v1.4.0
* http://izitoast.marcelodolce.com
* by Marcelo Dolce.
*/
!function(t,e){"function"==typeof define&&define.amd?define([],e(t)):"object"==typeof exports?module.exports=e(t):t.iziToast=e(t)}("undefined"!=typeof global?global:window||this.window||this.global,function(t){"use strict";var e={},n="iziToast",o=(document.querySelector("body"),!!/Mobi/.test(navigator.userAgent)),i=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),s="undefined"!=typeof InstallTrigger,a="ontouchstart"in document.documentElement,r=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],l={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},d=568,c={};e.children={};var u={id:null,"class":"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),"function"!=typeof window.CustomEvent){var p=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n};p.prototype=window.Event.prototype,window.CustomEvent=p}var m=function(t,e,n){if("[object Object]"===Object.prototype.toString.call(t))for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(n,t[o],o,t);else if(t)for(var i=0,s=t.length;s>i;i++)e.call(n,t[i],i,t)},g=function(t,e){var n={};return m(t,function(e,o){n[o]=t[o]}),m(e,function(t,o){n[o]=e[o]}),n},f=function(t){var e=document.createDocumentFragment(),n=document.createElement("div");for(n.innerHTML=t;n.firstChild;)e.appendChild(n.firstChild);return e},v=function(t){var e=btoa(encodeURIComponent(t));return e.replace(/=/g,"")},y=function(t){return"#"==t.substring(0,1)||"rgb"==t.substring(0,3)||"hsl"==t.substring(0,3)},h=function(t){try{return btoa(atob(t))==t}catch(e){return!1}},b=function(){return{move:function(t,e,o,a){var r,l=.3,d=180;0!==a&&(t.classList.add(n+"-dragged"),t.style.transform="translateX("+a+"px)",a>0?(r=(d-a)/d,l>r&&e.hide(g(o,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),t,"drag")):(r=(d+a)/d,l>r&&e.hide(g(o,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),t,"drag")),t.style.opacity=r,l>r&&((i||s)&&(t.style.left=a+"px"),t.parentNode.style.opacity=l,this.stopMoving(t,null)))},startMoving:function(t,e,n,o){o=o||window.event;var i=a?o.touches[0].clientX:o.clientX,s=t.style.transform.replace("px)","");s=s.replace("translateX(","");var r=i-s;n.transitionIn&&t.classList.remove(n.transitionIn),n.transitionInMobile&&t.classList.remove(n.transitionInMobile),t.style.transition="",a?document.ontouchmove=function(o){o.preventDefault(),o=o||window.event;var i=o.touches[0].clientX,s=i-r;b.move(t,e,n,s)}:document.onmousemove=function(o){o.preventDefault(),o=o||window.event;var i=o.clientX,s=i-r;b.move(t,e,n,s)}},stopMoving:function(t,e){a?document.ontouchmove=function(){}:document.onmousemove=function(){},t.style.opacity="",t.style.transform="",t.classList.contains(n+"-dragged")&&(t.classList.remove(n+"-dragged"),t.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){t.style.transition=""},400))}}}();return e.setSetting=function(t,n,o){e.children[t][n]=o},e.getSetting=function(t,n){return e.children[t][n]},e.destroy=function(){m(document.querySelectorAll("."+n+"-overlay"),function(t,e){t.remove()}),m(document.querySelectorAll("."+n+"-wrapper"),function(t,e){t.remove()}),m(document.querySelectorAll("."+n),function(t,e){t.remove()}),this.children={},document.removeEventListener(n+"-opened",{},!1),document.removeEventListener(n+"-opening",{},!1),document.removeEventListener(n+"-closing",{},!1),document.removeEventListener(n+"-closed",{},!1),document.removeEventListener("keyup",{},!1),c={}},e.settings=function(t){e.destroy(),c=t,u=g(u,t||{})},m(l,function(t,n){e[n]=function(e){var n=g(c,e||{});n=g(t,n||{}),this.show(n)}}),e.progress=function(t,e,o){var i=this,s=e.getAttribute("data-iziToast-ref"),a=g(this.children[s],t||{}),r=e.querySelector("."+n+"-progressbar div");return{start:function(){"undefined"==typeof a.time.REMAINING&&(e.classList.remove(n+"-reseted"),null!==r&&(r.style.transition="width "+a.timeout+"ms "+a.progressBarEasing,r.style.width="0%"),a.time.START=(new Date).getTime(),a.time.END=a.time.START+a.timeout,a.time.TIMER=setTimeout(function(){clearTimeout(a.time.TIMER),e.classList.contains(n+"-closing")||(i.hide(a,e,"timeout"),"function"==typeof o&&o.apply(i))},a.timeout),i.setSetting(s,"time",a.time))},pause:function(){if("undefined"!=typeof a.time.START&&!e.classList.contains(n+"-paused")&&!e.classList.contains(n+"-reseted")){if(e.classList.add(n+"-paused"),a.time.REMAINING=a.time.END-(new Date).getTime(),clearTimeout(a.time.TIMER),i.setSetting(s,"time",a.time),null!==r){var t=window.getComputedStyle(r),l=t.getPropertyValue("width");r.style.transition="none",r.style.width=l}"function"==typeof o&&setTimeout(function(){o.apply(i)},10)}},resume:function(){"undefined"!=typeof a.time.REMAINING?(e.classList.remove(n+"-paused"),null!==r&&(r.style.transition="width "+a.time.REMAINING+"ms "+a.progressBarEasing,r.style.width="0%"),a.time.END=(new Date).getTime()+a.time.REMAINING,a.time.TIMER=setTimeout(function(){clearTimeout(a.time.TIMER),e.classList.contains(n+"-closing")||(i.hide(a,e,"timeout"),"function"==typeof o&&o.apply(i))},a.time.REMAINING),i.setSetting(s,"time",a.time)):this.start()},reset:function(){clearTimeout(a.time.TIMER),delete a.time.REMAINING,i.setSetting(s,"time",a.time),e.classList.add(n+"-reseted"),e.classList.remove(n+"-paused"),null!==r&&(r.style.transition="none",r.style.width="100%"),"function"==typeof o&&setTimeout(function(){o.apply(i)},10)}}},e.hide=function(t,e,i){"object"!=typeof e&&(e=document.querySelector(e));var s=this,a=g(this.children[e.getAttribute("data-iziToast-ref")],t||{});a.closedBy=i||null,delete a.time.REMAINING,e.classList.add(n+"-closing"),function(){var t=document.querySelector("."+n+"-overlay");if(null!==t){var e=t.getAttribute("data-iziToast-ref");e=e.split(",");var o=e.indexOf(String(a.ref));-1!==o&&e.splice(o,1),t.setAttribute("data-iziToast-ref",e.join()),0===e.length&&(t.classList.remove("fadeIn"),t.classList.add("fadeOut"),setTimeout(function(){t.remove()},700))}}(),a.transitionIn&&e.classList.remove(a.transitionIn),a.transitionInMobile&&e.classList.remove(a.transitionInMobile),o||window.innerWidth<=d?a.transitionOutMobile&&e.classList.add(a.transitionOutMobile):a.transitionOut&&e.classList.add(a.transitionOut);var r=e.parentNode.offsetHeight;e.parentNode.style.height=r+"px",e.style.pointerEvents="none",(!o||window.innerWidth>d)&&(e.parentNode.style.transitionDelay="0.2s");try{var l=new CustomEvent(n+"-closing",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(l)}catch(c){console.warn(c)}setTimeout(function(){e.parentNode.style.height="0px",e.parentNode.style.overflow="",setTimeout(function(){delete s.children[a.ref],e.parentNode.remove();try{var t=new CustomEvent(n+"-closed",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(o){console.warn(o)}"undefined"!=typeof a.onClosed&&a.onClosed.apply(null,[a,e,i])},1e3)},200),"undefined"!=typeof a.onClosing&&a.onClosing.apply(null,[a,e,i])},e.show=function(t){var i=this,s=g(c,t||{});if(s=g(u,s),s.time={},null===s.id&&(s.id=v(s.title+s.message+s.color)),1===s.displayMode||"once"==s.displayMode)try{if(document.querySelectorAll("."+n+"#"+s.id).length>0)return!1}catch(l){console.warn("["+n+"] Could not find an element with this selector: #"+s.id+". Try to set an valid id.")}if(2===s.displayMode||"replace"==s.displayMode)try{m(document.querySelectorAll("."+n+"#"+s.id),function(t,e){i.hide(s,t,"replaced")})}catch(l){console.warn("["+n+"] Could not find an element with this selector: #"+s.id+". Try to set an valid id.")}s.ref=(new Date).getTime()+Math.floor(1e7*Math.random()+1),e.children[s.ref]=s;var p={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:s.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};p.toast.setAttribute("data-iziToast-ref",s.ref),p.toast.appendChild(p.toastBody),p.toastCapsule.appendChild(p.toast),function(){if(p.toast.classList.add(n),p.toast.classList.add(n+"-opening"),p.toastCapsule.classList.add(n+"-capsule"),p.toastBody.classList.add(n+"-body"),p.toastTexts.classList.add(n+"-texts"),o||window.innerWidth<=d?s.transitionInMobile&&p.toast.classList.add(s.transitionInMobile):s.transitionIn&&p.toast.classList.add(s.transitionIn),s["class"]){var t=s["class"].split(" ");m(t,function(t,e){p.toast.classList.add(t)})}s.id&&(p.toast.id=s.id),s.rtl&&(p.toast.classList.add(n+"-rtl"),p.toast.setAttribute("dir","rtl")),s.layout>1&&p.toast.classList.add(n+"-layout"+s.layout),s.balloon&&p.toast.classList.add(n+"-balloon"),s.maxWidth&&(isNaN(s.maxWidth)?p.toast.style.maxWidth=s.maxWidth:p.toast.style.maxWidth=s.maxWidth+"px"),""===s.theme&&"light"===s.theme||p.toast.classList.add(n+"-theme-"+s.theme),s.color&&(y(s.color)?p.toast.style.background=s.color:p.toast.classList.add(n+"-color-"+s.color)),s.backgroundColor&&(p.toast.style.background=s.backgroundColor,s.balloon&&(p.toast.style.borderColor=s.backgroundColor))}(),function(){s.image&&(p.cover.classList.add(n+"-cover"),p.cover.style.width=s.imageWidth+"px",h(s.image.replace(/ /g,""))?p.cover.style.backgroundImage="url(data:image/png;base64,"+s.image.replace(/ /g,"")+")":p.cover.style.backgroundImage="url("+s.image+")",s.rtl?p.toastBody.style.marginRight=s.imageWidth+10+"px":p.toastBody.style.marginLeft=s.imageWidth+10+"px",p.toast.appendChild(p.cover))}(),function(){s.close?(p.buttonClose=document.createElement("button"),p.buttonClose.type="button",p.buttonClose.classList.add(n+"-close"),p.buttonClose.addEventListener("click",function(t){t.target;i.hide(s,p.toast,"button")}),p.toast.appendChild(p.buttonClose)):s.rtl?p.toast.style.paddingLeft="18px":p.toast.style.paddingRight="18px"}(),function(){s.progressBar&&(p.progressBar=document.createElement("div"),p.progressBarDiv=document.createElement("div"),p.progressBar.classList.add(n+"-progressbar"),p.progressBarDiv.style.background=s.progressBarColor,p.progressBar.appendChild(p.progressBarDiv),p.toast.appendChild(p.progressBar)),s.timeout&&(s.pauseOnHover&&!s.resetOnHover&&(p.toast.addEventListener("mouseenter",function(t){i.progress(s,p.toast).pause()}),p.toast.addEventListener("mouseleave",function(t){i.progress(s,p.toast).resume()})),s.resetOnHover&&(p.toast.addEventListener("mouseenter",function(t){i.progress(s,p.toast).reset()}),p.toast.addEventListener("mouseleave",function(t){i.progress(s,p.toast).start()})))}(),function(){s.iconUrl?(p.icon.setAttribute("class",n+"-icon"),p.icon.setAttribute("src",s.iconUrl)):s.icon&&(p.icon.setAttribute("class",n+"-icon "+s.icon),s.iconText&&p.icon.appendChild(document.createTextNode(s.iconText)),s.iconColor&&(p.icon.style.color=s.iconColor)),(s.icon||s.iconUrl)&&(s.rtl?p.toastBody.style.paddingRight="33px":p.toastBody.style.paddingLeft="33px",p.toastBody.appendChild(p.icon))}(),function(){s.title.length>0&&(p.strong=document.createElement("strong"),p.strong.classList.add(n+"-title"),p.strong.appendChild(f(s.title)),p.toastTexts.appendChild(p.strong),s.titleColor&&(p.strong.style.color=s.titleColor),s.titleSize&&(isNaN(s.titleSize)?p.strong.style.fontSize=s.titleSize:p.strong.style.fontSize=s.titleSize+"px"),s.titleLineHeight&&(isNaN(s.titleSize)?p.strong.style.lineHeight=s.titleLineHeight:p.strong.style.lineHeight=s.titleLineHeight+"px")),s.message.length>0&&(p.p=document.createElement("p"),p.p.classList.add(n+"-message"),p.p.appendChild(f(s.message)),p.toastTexts.appendChild(p.p),s.messageColor&&(p.p.style.color=s.messageColor),s.messageSize&&(isNaN(s.titleSize)?p.p.style.fontSize=s.messageSize:p.p.style.fontSize=s.messageSize+"px"),s.messageLineHeight&&(isNaN(s.titleSize)?p.p.style.lineHeight=s.messageLineHeight:p.p.style.lineHeight=s.messageLineHeight+"px")),s.title.length>0&&s.message.length>0&&(s.rtl?p.strong.style.marginLeft="10px":2===s.layout||s.rtl||(p.strong.style.marginRight="10px"))}(),p.toastBody.appendChild(p.toastTexts);var L;!function(){s.inputs.length>0&&(p.inputs.classList.add(n+"-inputs"),m(s.inputs,function(t,e){p.inputs.appendChild(f(t[0])),L=p.inputs.childNodes,L[e].classList.add(n+"-inputs-child"),t[3]&&setTimeout(function(){L[e].focus()},300),L[e].addEventListener(t[1],function(e){var n=t[2];return n(i,p.toast,this,e)})}),p.toastBody.appendChild(p.inputs))}(),function(){s.buttons.length>0&&(p.buttons.classList.add(n+"-buttons"),m(s.buttons,function(t,e){p.buttons.appendChild(f(t[0]));var o=p.buttons.childNodes;o[e].classList.add(n+"-buttons-child"),t[2]&&setTimeout(function(){o[e].focus()},300),o[e].addEventListener("click",function(e){e.preventDefault();var n=t[1];return n(i,p.toast,this,e,L)})})),p.toastBody.appendChild(p.buttons)}(),s.message.length>0&&(s.inputs.length>0||s.buttons.length>0)&&(p.p.style.marginBottom="0"),(s.inputs.length>0||s.buttons.length>0)&&(s.rtl?p.toastTexts.style.marginLeft="10px":p.toastTexts.style.marginRight="10px",s.inputs.length>0&&s.buttons.length>0&&(s.rtl?p.inputs.style.marginLeft="8px":p.inputs.style.marginRight="8px")),function(){p.toastCapsule.style.visibility="hidden",setTimeout(function(){var t=p.toast.offsetHeight,e=p.toast.currentStyle||window.getComputedStyle(p.toast),n=e.marginTop;n=n.split("px"),n=parseInt(n[0]);var o=e.marginBottom;o=o.split("px"),o=parseInt(o[0]),p.toastCapsule.style.visibility="",p.toastCapsule.style.height=t+o+n+"px",setTimeout(function(){p.toastCapsule.style.height="auto",s.target&&(p.toastCapsule.style.overflow="visible")},500),s.timeout&&i.progress(s,p.toast).start()},100)}(),function(){var t=s.position;if(s.target)p.wrapper=document.querySelector(s.target),p.wrapper.classList.add(n+"-target"),s.targetFirst?p.wrapper.insertBefore(p.toastCapsule,p.wrapper.firstChild):p.wrapper.appendChild(p.toastCapsule);else{if(-1==r.indexOf(s.position))return void console.warn("["+n+"] Incorrect position.\nIt can be › "+r);t=o||window.innerWidth<=d?"bottomLeft"==s.position||"bottomRight"==s.position||"bottomCenter"==s.position?n+"-wrapper-bottomCenter":"topLeft"==s.position||"topRight"==s.position||"topCenter"==s.position?n+"-wrapper-topCenter":n+"-wrapper-center":n+"-wrapper-"+t,p.wrapper=document.querySelector("."+n+"-wrapper."+t),p.wrapper||(p.wrapper=document.createElement("div"),p.wrapper.classList.add(n+"-wrapper"),p.wrapper.classList.add(t),document.body.appendChild(p.wrapper)),"topLeft"==s.position||"topCenter"==s.position||"topRight"==s.position?p.wrapper.insertBefore(p.toastCapsule,p.wrapper.firstChild):p.wrapper.appendChild(p.toastCapsule)}isNaN(s.zindex)?console.warn("["+n+"] Invalid zIndex."):p.wrapper.style.zIndex=s.zindex}(),function(){s.overlay&&(null!==document.querySelector("."+n+"-overlay.fadeIn")?(p.overlay=document.querySelector("."+n+"-overlay"),p.overlay.setAttribute("data-iziToast-ref",p.overlay.getAttribute("data-iziToast-ref")+","+s.ref),isNaN(s.zindex)||null===s.zindex||(p.overlay.style.zIndex=s.zindex-1)):(p.overlay.classList.add(n+"-overlay"),p.overlay.classList.add("fadeIn"),p.overlay.style.background=s.overlayColor,p.overlay.setAttribute("data-iziToast-ref",s.ref),isNaN(s.zindex)||null===s.zindex||(p.overlay.style.zIndex=s.zindex-1),document.querySelector("body").appendChild(p.overlay)),s.overlayClose?(p.overlay.removeEventListener("click",{}),p.overlay.addEventListener("click",function(t){i.hide(s,p.toast,"overlay")})):p.overlay.removeEventListener("click",{}))}(),function(){if(s.animateInside){p.toast.classList.add(n+"-animateInside");var t=[200,100,300];"bounceInLeft"!=s.transitionIn&&"bounceInRight"!=s.transitionIn||(t=[400,200,400]),s.title.length>0&&setTimeout(function(){p.strong.classList.add("slideIn")},t[0]),s.message.length>0&&setTimeout(function(){p.p.classList.add("slideIn")},t[1]),(s.icon||s.iconUrl)&&setTimeout(function(){p.icon.classList.add("revealIn")},t[2]);var e=150;s.buttons.length>0&&p.buttons&&setTimeout(function(){m(p.buttons.childNodes,function(t,n){setTimeout(function(){t.classList.add("revealIn")},e),e+=150})},s.inputs.length>0?150:0),s.inputs.length>0&&p.inputs&&(e=150,m(p.inputs.childNodes,function(t,n){setTimeout(function(){t.classList.add("revealIn")},e),e+=150}))}}(),s.onOpening.apply(null,[s,p.toast]);try{var C=new CustomEvent(n+"-opening",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(C)}catch(w){console.warn(w)}setTimeout(function(){p.toast.classList.remove(n+"-opening"),p.toast.classList.add(n+"-opened");try{var t=new CustomEvent(n+"-opened",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(e){console.warn(e)}s.onOpened.apply(null,[s,p.toast])},1e3),s.drag&&(a?(p.toast.addEventListener("touchstart",function(t){b.startMoving(this,i,s,t)},!1),p.toast.addEventListener("touchend",function(t){b.stopMoving(this,t)},!1)):(p.toast.addEventListener("mousedown",function(t){t.preventDefault(),b.startMoving(this,i,s,t)},!1),p.toast.addEventListener("mouseup",function(t){t.preventDefault(),b.stopMoving(this,t)},!1))),s.closeOnEscape&&document.addEventListener("keyup",function(t){t=t||window.event,27==t.keyCode&&i.hide(s,p.toast,"esc")}),s.closeOnClick&&p.toast.addEventListener("click",function(t){i.hide(s,p.toast,"toast")}),i.toast=p.toast},e});
/* Chosen v1.8.7 | (c) 2011-2018 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */

(function(){var t,e,s,i,n=function(t,e){return function(){return t.apply(e,arguments)}},r=function(t,e){function s(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return s.prototype=e.prototype,t.prototype=new s,t.__super__=e.prototype,t},o={}.hasOwnProperty;(i=function(){function t(){this.options_index=0,this.parsed=[]}return t.prototype.add_node=function(t){return"OPTGROUP"===t.nodeName.toUpperCase()?this.add_group(t):this.add_option(t)},t.prototype.add_group=function(t){var e,s,i,n,r,o;for(e=this.parsed.length,this.parsed.push({array_index:e,group:!0,label:t.label,title:t.title?t.title:void 0,children:0,disabled:t.disabled,classes:t.className}),o=[],s=0,i=(r=t.childNodes).length;s<i;s++)n=r[s],o.push(this.add_option(n,e,t.disabled));return o},t.prototype.add_option=function(t,e,s){if("OPTION"===t.nodeName.toUpperCase())return""!==t.text?(null!=e&&(this.parsed[e].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:t.value,text:t.text,html:t.innerHTML,title:t.title?t.title:void 0,selected:t.selected,disabled:!0===s?s:t.disabled,group_array_index:e,group_label:null!=e?this.parsed[e].label:null,classes:t.className,style:t.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1},t}()).select_to_array=function(t){var e,s,n,r,o;for(r=new i,s=0,n=(o=t.childNodes).length;s<n;s++)e=o[s],r.add_node(e);return r.parsed},e=function(){function t(e,s){this.form_field=e,this.options=null!=s?s:{},this.label_click_handler=n(this.label_click_handler,this),t.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers(),this.on_ready())}return t.prototype.set_default_values=function(){return this.click_test_action=function(t){return function(e){return t.test_active_click(e)}}(this),this.activate_action=function(t){return function(e){return t.activate_field(e)}}(this),this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.is_rtl=this.options.rtl||/\bchosen-rtl\b/.test(this.form_field.className),this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text&&this.options.allow_single_deselect,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null==this.options.enable_split_word_search||this.options.enable_split_word_search,this.group_search=null==this.options.group_search||this.options.group_search,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null==this.options.single_backstroke_delete||this.options.single_backstroke_delete,this.max_selected_options=this.options.max_selected_options||Infinity,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null==this.options.display_selected_options||this.options.display_selected_options,this.display_disabled_options=null==this.options.display_disabled_options||this.options.display_disabled_options,this.include_group_label_in_selected=this.options.include_group_label_in_selected||!1,this.max_shown_results=this.options.max_shown_results||Number.POSITIVE_INFINITY,this.case_sensitive_search=this.options.case_sensitive_search||!1,this.hide_results_on_select=null==this.options.hide_results_on_select||this.options.hide_results_on_select},t.prototype.set_default_text=function(){return this.form_field.getAttribute("data-placeholder")?this.default_text=this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||t.default_multiple_text:this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||t.default_single_text,this.default_text=this.escape_html(this.default_text),this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||t.default_no_result_text},t.prototype.choice_label=function(t){return this.include_group_label_in_selected&&null!=t.group_label?"<b class='group-name'>"+this.escape_html(t.group_label)+"</b>"+t.html:t.html},t.prototype.mouse_enter=function(){return this.mouse_on_container=!0},t.prototype.mouse_leave=function(){return this.mouse_on_container=!1},t.prototype.input_focus=function(t){if(this.is_multiple){if(!this.active_field)return setTimeout(function(t){return function(){return t.container_mousedown()}}(this),50)}else if(!this.active_field)return this.activate_field()},t.prototype.input_blur=function(t){if(!this.mouse_on_container)return this.active_field=!1,setTimeout(function(t){return function(){return t.blur_test()}}(this),100)},t.prototype.label_click_handler=function(t){return this.is_multiple?this.container_mousedown(t):this.activate_field()},t.prototype.results_option_build=function(t){var e,s,i,n,r,o,h;for(e="",h=0,n=0,r=(o=this.results_data).length;n<r&&(s=o[n],i="",""!==(i=s.group?this.result_add_group(s):this.result_add_option(s))&&(h++,e+=i),(null!=t?t.first:void 0)&&(s.selected&&this.is_multiple?this.choice_build(s):s.selected&&!this.is_multiple&&this.single_set_selected_text(this.choice_label(s))),!(h>=this.max_shown_results));n++);return e},t.prototype.result_add_option=function(t){var e,s;return t.search_match&&this.include_option_in_results(t)?(e=[],t.disabled||t.selected&&this.is_multiple||e.push("active-result"),!t.disabled||t.selected&&this.is_multiple||e.push("disabled-result"),t.selected&&e.push("result-selected"),null!=t.group_array_index&&e.push("group-option"),""!==t.classes&&e.push(t.classes),s=document.createElement("li"),s.className=e.join(" "),t.style&&(s.style.cssText=t.style),s.setAttribute("data-option-array-index",t.array_index),s.innerHTML=t.highlighted_html||t.html,t.title&&(s.title=t.title),this.outerHTML(s)):""},t.prototype.result_add_group=function(t){var e,s;return(t.search_match||t.group_match)&&t.active_options>0?((e=[]).push("group-result"),t.classes&&e.push(t.classes),s=document.createElement("li"),s.className=e.join(" "),s.innerHTML=t.highlighted_html||this.escape_html(t.label),t.title&&(s.title=t.title),this.outerHTML(s)):""},t.prototype.results_update_field=function(){if(this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing)return this.winnow_results()},t.prototype.reset_single_select_options=function(){var t,e,s,i,n;for(n=[],t=0,e=(s=this.results_data).length;t<e;t++)(i=s[t]).selected?n.push(i.selected=!1):n.push(void 0);return n},t.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},t.prototype.results_search=function(t){return this.results_showing?this.winnow_results():this.results_show()},t.prototype.winnow_results=function(t){var e,s,i,n,r,o,h,l,c,_,a,u,d,p,f;for(this.no_results_clear(),_=0,e=(h=this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),c=this.get_search_regex(e),i=0,n=(l=this.results_data).length;i<n;i++)(r=l[i]).search_match=!1,a=null,u=null,r.highlighted_html="",this.include_option_in_results(r)&&(r.group&&(r.group_match=!1,r.active_options=0),null!=r.group_array_index&&this.results_data[r.group_array_index]&&(0===(a=this.results_data[r.group_array_index]).active_options&&a.search_match&&(_+=1),a.active_options+=1),f=r.group?r.label:r.text,r.group&&!this.group_search||(u=this.search_string_match(f,c),r.search_match=null!=u,r.search_match&&!r.group&&(_+=1),r.search_match?(h.length&&(d=u.index,o=f.slice(0,d),s=f.slice(d,d+h.length),p=f.slice(d+h.length),r.highlighted_html=this.escape_html(o)+"<em>"+this.escape_html(s)+"</em>"+this.escape_html(p)),null!=a&&(a.group_match=!0)):null!=r.group_array_index&&this.results_data[r.group_array_index].search_match&&(r.search_match=!0)));return this.result_clear_highlight(),_<1&&h.length?(this.update_results_content(""),this.no_results(h)):(this.update_results_content(this.results_option_build()),(null!=t?t.skip_highlight:void 0)?void 0:this.winnow_results_set_highlight())},t.prototype.get_search_regex=function(t){var e,s;return s=this.search_contains?t:"(^|\\s|\\b)"+t+"[^\\s]*",this.enable_split_word_search||this.search_contains||(s="^"+s),e=this.case_sensitive_search?"":"i",new RegExp(s,e)},t.prototype.search_string_match=function(t,e){var s;return s=e.exec(t),!this.search_contains&&(null!=s?s[1]:void 0)&&(s.index+=1),s},t.prototype.choices_count=function(){var t,e,s;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,t=0,e=(s=this.form_field.options).length;t<e;t++)s[t].selected&&(this.selected_option_count+=1);return this.selected_option_count},t.prototype.choices_click=function(t){if(t.preventDefault(),this.activate_field(),!this.results_showing&&!this.is_disabled)return this.results_show()},t.prototype.keydown_checker=function(t){var e,s;switch(s=null!=(e=t.which)?e:t.keyCode,this.search_field_scale(),8!==s&&this.pending_backstroke&&this.clear_backstroke(),s){case 8:this.backstroke_length=this.get_search_field_value().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(t),this.mouse_on_container=!1;break;case 13:case 27:this.results_showing&&t.preventDefault();break;case 32:this.disable_search&&t.preventDefault();break;case 38:t.preventDefault(),this.keyup_arrow();break;case 40:t.preventDefault(),this.keydown_arrow()}},t.prototype.keyup_checker=function(t){var e,s;switch(s=null!=(e=t.which)?e:t.keyCode,this.search_field_scale(),s){case 8:this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0?this.keydown_backstroke():this.pending_backstroke||(this.result_clear_highlight(),this.results_search());break;case 13:t.preventDefault(),this.results_showing&&this.result_select(t);break;case 27:this.results_showing&&this.results_hide();break;case 9:case 16:case 17:case 18:case 38:case 40:case 91:break;default:this.results_search()}},t.prototype.clipboard_event_checker=function(t){if(!this.is_disabled)return setTimeout(function(t){return function(){return t.results_search()}}(this),50)},t.prototype.container_width=function(){return null!=this.options.width?this.options.width:this.form_field.offsetWidth+"px"},t.prototype.include_option_in_results=function(t){return!(this.is_multiple&&!this.display_selected_options&&t.selected)&&(!(!this.display_disabled_options&&t.disabled)&&!t.empty)},t.prototype.search_results_touchstart=function(t){return this.touch_started=!0,this.search_results_mouseover(t)},t.prototype.search_results_touchmove=function(t){return this.touch_started=!1,this.search_results_mouseout(t)},t.prototype.search_results_touchend=function(t){if(this.touch_started)return this.search_results_mouseup(t)},t.prototype.outerHTML=function(t){var e;return t.outerHTML?t.outerHTML:((e=document.createElement("div")).appendChild(t),e.innerHTML)},t.prototype.get_single_html=function(){return'<a class="chosen-single chosen-default">\n  <span>'+this.default_text+'</span>\n  <div><b></b></div>\n</a>\n<div class="chosen-drop">\n  <div class="chosen-search">\n    <input class="chosen-search-input" type="text" autocomplete="off" />\n  </div>\n  <ul class="chosen-results"></ul>\n</div>'},t.prototype.get_multi_html=function(){return'<ul class="chosen-choices">\n  <li class="search-field">\n    <input class="chosen-search-input" type="text" autocomplete="off" value="'+this.default_text+'" />\n  </li>\n</ul>\n<div class="chosen-drop">\n  <ul class="chosen-results"></ul>\n</div>'},t.prototype.get_no_results_html=function(t){return'<li class="no-results">\n  '+this.results_none_found+" <span>"+this.escape_html(t)+"</span>\n</li>"},t.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:!(/iP(od|hone)/i.test(window.navigator.userAgent)||/IEMobile/i.test(window.navigator.userAgent)||/Windows Phone/i.test(window.navigator.userAgent)||/BlackBerry/i.test(window.navigator.userAgent)||/BB10/i.test(window.navigator.userAgent)||/Android.*Mobile/i.test(window.navigator.userAgent))},t.default_multiple_text="Select Some Options",t.default_single_text="Select an Option",t.default_no_result_text="No results match",t}(),(t=jQuery).fn.extend({chosen:function(i){return e.browser_is_supported()?this.each(function(e){var n,r;r=(n=t(this)).data("chosen"),"destroy"!==i?r instanceof s||n.data("chosen",new s(this,i)):r instanceof s&&r.destroy()}):this}}),s=function(s){function n(){return n.__super__.constructor.apply(this,arguments)}return r(n,e),n.prototype.setup=function(){return this.form_field_jq=t(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex},n.prototype.set_up_html=function(){var e,s;return(e=["chosen-container"]).push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&e.push(this.form_field.className),this.is_rtl&&e.push("chosen-rtl"),s={"class":e.join(" "),title:this.form_field.title},this.form_field.id.length&&(s.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=t("<div />",s),this.container.width(this.container_width()),this.is_multiple?this.container.html(this.get_multi_html()):this.container.html(this.get_single_html()),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior()},n.prototype.on_ready=function(){return this.form_field_jq.trigger("chosen:ready",{chosen:this})},n.prototype.register_observers=function(){return this.container.on("touchstart.chosen",function(t){return function(e){t.container_mousedown(e)}}(this)),this.container.on("touchend.chosen",function(t){return function(e){t.container_mouseup(e)}}(this)),this.container.on("mousedown.chosen",function(t){return function(e){t.container_mousedown(e)}}(this)),this.container.on("mouseup.chosen",function(t){return function(e){t.container_mouseup(e)}}(this)),this.container.on("mouseenter.chosen",function(t){return function(e){t.mouse_enter(e)}}(this)),this.container.on("mouseleave.chosen",function(t){return function(e){t.mouse_leave(e)}}(this)),this.search_results.on("mouseup.chosen",function(t){return function(e){t.search_results_mouseup(e)}}(this)),this.search_results.on("mouseover.chosen",function(t){return function(e){t.search_results_mouseover(e)}}(this)),this.search_results.on("mouseout.chosen",function(t){return function(e){t.search_results_mouseout(e)}}(this)),this.search_results.on("mousewheel.chosen DOMMouseScroll.chosen",function(t){return function(e){t.search_results_mousewheel(e)}}(this)),this.search_results.on("touchstart.chosen",function(t){return function(e){t.search_results_touchstart(e)}}(this)),this.search_results.on("touchmove.chosen",function(t){return function(e){t.search_results_touchmove(e)}}(this)),this.search_results.on("touchend.chosen",function(t){return function(e){t.search_results_touchend(e)}}(this)),this.form_field_jq.on("chosen:updated.chosen",function(t){return function(e){t.results_update_field(e)}}(this)),this.form_field_jq.on("chosen:activate.chosen",function(t){return function(e){t.activate_field(e)}}(this)),this.form_field_jq.on("chosen:open.chosen",function(t){return function(e){t.container_mousedown(e)}}(this)),this.form_field_jq.on("chosen:close.chosen",function(t){return function(e){t.close_field(e)}}(this)),this.search_field.on("blur.chosen",function(t){return function(e){t.input_blur(e)}}(this)),this.search_field.on("keyup.chosen",function(t){return function(e){t.keyup_checker(e)}}(this)),this.search_field.on("keydown.chosen",function(t){return function(e){t.keydown_checker(e)}}(this)),this.search_field.on("focus.chosen",function(t){return function(e){t.input_focus(e)}}(this)),this.search_field.on("cut.chosen",function(t){return function(e){t.clipboard_event_checker(e)}}(this)),this.search_field.on("paste.chosen",function(t){return function(e){t.clipboard_event_checker(e)}}(this)),this.is_multiple?this.search_choices.on("click.chosen",function(t){return function(e){t.choices_click(e)}}(this)):this.container.on("click.chosen",function(t){t.preventDefault()})},n.prototype.destroy=function(){return t(this.container[0].ownerDocument).off("click.chosen",this.click_test_action),this.form_field_label.length>0&&this.form_field_label.off("click.chosen"),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},n.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field.disabled||this.form_field_jq.parents("fieldset").is(":disabled"),this.container.toggleClass("chosen-disabled",this.is_disabled),this.search_field[0].disabled=this.is_disabled,this.is_multiple||this.selected_item.off("focus.chosen",this.activate_field),this.is_disabled?this.close_field():this.is_multiple?void 0:this.selected_item.on("focus.chosen",this.activate_field)},n.prototype.container_mousedown=function(e){var s;if(!this.is_disabled)return!e||"mousedown"!==(s=e.type)&&"touchstart"!==s||this.results_showing||e.preventDefault(),null!=e&&t(e.target).hasClass("search-choice-close")?void 0:(this.active_field?this.is_multiple||!e||t(e.target)[0]!==this.selected_item[0]&&!t(e.target).parents("a.chosen-single").length||(e.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),t(this.container[0].ownerDocument).on("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},n.prototype.container_mouseup=function(t){if("ABBR"===t.target.nodeName&&!this.is_disabled)return this.results_reset(t)},n.prototype.search_results_mousewheel=function(t){var e;if(t.originalEvent&&(e=t.originalEvent.deltaY||-t.originalEvent.wheelDelta||t.originalEvent.detail),null!=e)return t.preventDefault(),"DOMMouseScroll"===t.type&&(e*=40),this.search_results.scrollTop(e+this.search_results.scrollTop())},n.prototype.blur_test=function(t){if(!this.active_field&&this.container.hasClass("chosen-container-active"))return this.close_field()},n.prototype.close_field=function(){return t(this.container[0].ownerDocument).off("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale(),this.search_field.blur()},n.prototype.activate_field=function(){if(!this.is_disabled)return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},n.prototype.test_active_click=function(e){var s;return(s=t(e.target).closest(".chosen-container")).length&&this.container[0]===s[0]?this.active_field=!0:this.close_field()},n.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=i.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},n.prototype.result_do_highlight=function(t){var e,s,i,n,r;if(t.length){if(this.result_clear_highlight(),this.result_highlight=t,this.result_highlight.addClass("highlighted"),i=parseInt(this.search_results.css("maxHeight"),10),r=this.search_results.scrollTop(),n=i+r,s=this.result_highlight.position().top+this.search_results.scrollTop(),(e=s+this.result_highlight.outerHeight())>=n)return this.search_results.scrollTop(e-i>0?e-i:0);if(s<r)return this.search_results.scrollTop(s)}},n.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},n.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.get_search_field_value()),this.winnow_results(),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}))},n.prototype.update_results_content=function(t){return this.search_results.html(t)},n.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},n.prototype.set_tab_index=function(t){var e;if(this.form_field.tabIndex)return e=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=e},n.prototype.set_label_behavior=function(){if(this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=t("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0)return this.form_field_label.on("click.chosen",this.label_click_handler)},n.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},n.prototype.search_results_mouseup=function(e){var s;if((s=t(e.target).hasClass("active-result")?t(e.target):t(e.target).parents(".active-result").first()).length)return this.result_highlight=s,this.result_select(e),this.search_field.focus()},n.prototype.search_results_mouseover=function(e){var s;if(s=t(e.target).hasClass("active-result")?t(e.target):t(e.target).parents(".active-result").first())return this.result_do_highlight(s)},n.prototype.search_results_mouseout=function(e){if(t(e.target).hasClass("active-result")||t(e.target).parents(".active-result").first())return this.result_clear_highlight()},n.prototype.choice_build=function(e){var s,i;return s=t("<li />",{"class":"search-choice"}).html("<span>"+this.choice_label(e)+"</span>"),e.disabled?s.addClass("search-choice-disabled"):((i=t("<a />",{"class":"search-choice-close","data-option-array-index":e.array_index})).on("click.chosen",function(t){return function(e){return t.choice_destroy_link_click(e)}}(this)),s.append(i)),this.search_container.before(s)},n.prototype.choice_destroy_link_click=function(e){if(e.preventDefault(),e.stopPropagation(),!this.is_disabled)return this.choice_destroy(t(e.target))},n.prototype.choice_destroy=function(t){if(this.result_deselect(t[0].getAttribute("data-option-array-index")))return this.active_field?this.search_field.focus():this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.get_search_field_value().length<1&&this.results_hide(),t.parents("li").first().remove(),this.search_field_scale()},n.prototype.results_reset=function(){if(this.reset_single_select_options(),this.form_field.options[0].selected=!0,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.trigger_form_field_change(),this.active_field)return this.results_hide()},n.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},n.prototype.result_select=function(t){var e,s;if(this.result_highlight)return e=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?e.removeClass("active-result"):this.reset_single_select_options(),e.addClass("result-selected"),s=this.results_data[e[0].getAttribute("data-option-array-index")],s.selected=!0,this.form_field.options[s.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(s):this.single_set_selected_text(this.choice_label(s)),this.is_multiple&&(!this.hide_results_on_select||t.metaKey||t.ctrlKey)?t.metaKey||t.ctrlKey?this.winnow_results({skip_highlight:!0}):(this.search_field.val(""),this.winnow_results()):(this.results_hide(),this.show_search_field_default()),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.trigger_form_field_change({selected:this.form_field.options[s.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,t.preventDefault(),this.search_field_scale())},n.prototype.single_set_selected_text=function(t){return null==t&&(t=this.default_text),t===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").html(t)},n.prototype.result_deselect=function(t){var e;return e=this.results_data[t],!this.form_field.options[e.options_index].disabled&&(e.selected=!1,this.form_field.options[e.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.trigger_form_field_change({deselected:this.form_field.options[e.options_index].value}),this.search_field_scale(),!0)},n.prototype.single_deselect_control_build=function(){if(this.allow_single_deselect)return this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")},n.prototype.get_search_field_value=function(){return this.search_field.val()},n.prototype.get_search_text=function(){return t.trim(this.get_search_field_value())},n.prototype.escape_html=function(e){return t("<div/>").text(e).html()},n.prototype.winnow_results_set_highlight=function(){var t,e;if(e=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),null!=(t=e.length?e.first():this.search_results.find(".active-result").first()))return this.result_do_highlight(t)},n.prototype.no_results=function(t){var e;return e=this.get_no_results_html(t),this.search_results.append(e),this.form_field_jq.trigger("chosen:no_results",{chosen:this})},n.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},n.prototype.keydown_arrow=function(){var t;return this.results_showing&&this.result_highlight?(t=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(t):void 0:this.results_show()},n.prototype.keyup_arrow=function(){var t;return this.results_showing||this.is_multiple?this.result_highlight?(t=this.result_highlight.prevAll("li.active-result")).length?this.result_do_highlight(t.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight()):void 0:this.results_show()},n.prototype.keydown_backstroke=function(){var t;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(t=this.search_container.siblings("li.search-choice").last()).length&&!t.hasClass("search-choice-disabled")?(this.pending_backstroke=t,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0},n.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},n.prototype.search_field_scale=function(){var e,s,i,n,r,o,h;if(this.is_multiple){for(r={position:"absolute",left:"-1000px",top:"-1000px",display:"none",whiteSpace:"pre"},s=0,i=(o=["fontSize","fontStyle","fontWeight","fontFamily","lineHeight","textTransform","letterSpacing"]).length;s<i;s++)r[n=o[s]]=this.search_field.css(n);return(e=t("<div />").css(r)).text(this.get_search_field_value()),t("body").append(e),h=e.width()+25,e.remove(),this.container.is(":visible")&&(h=Math.min(this.container.outerWidth()-10,h)),this.search_field.width(h)}},n.prototype.trigger_form_field_change=function(t){return this.form_field_jq.trigger("input",t),this.form_field_jq.trigger("change",t)},n}()}).call(this);
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

!function(){"use strict";function r(t){if(void 0===t)throw new Error('Pathformer [constructor]: "element" parameter is required');if(t.constructor===String&&!(t=document.getElementById(t)))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');if(!(t instanceof window.SVGElement||t instanceof window.SVGGElement||/^svg$/i.test(t.nodeName)))throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');this.el=t,this.scan(t)}var n,e,t,h;function i(t,e,r){n(),this.isReady=!1,this.setElement(t,e),this.setOptions(e),this.setCallback(r),this.isReady&&this.init()}r.prototype.TYPES=["line","ellipse","circle","polygon","polyline","rect"],r.prototype.ATTR_WATCH=["cx","cy","points","r","rx","ry","x","x1","x2","y","y1","y2"],r.prototype.scan=function(t){for(var e,r,n,i=t.querySelectorAll(this.TYPES.join(",")),a=0;a<i.length;a++)r=(0,this[(e=i[a]).tagName.toLowerCase()+"ToPath"])(this.parseAttr(e.attributes)),n=this.pathMaker(e,r),e.parentNode.replaceChild(n,e)},r.prototype.lineToPath=function(t){var e={},r=t.x1||0,n=t.y1||0,i=t.x2||0,a=t.y2||0;return e.d="M"+r+","+n+"L"+i+","+a,e},r.prototype.rectToPath=function(t){var e={},r=parseFloat(t.x)||0,n=parseFloat(t.y)||0,i=parseFloat(t.width)||0,a=parseFloat(t.height)||0;if(t.rx||t.ry){var o=parseInt(t.rx,10)||-1,s=parseInt(t.ry,10)||-1;o=Math.min(Math.max(o<0?s:o,0),i/2),s=Math.min(Math.max(s<0?o:s,0),a/2),e.d="M "+(r+o)+","+n+" L "+(r+i-o)+","+n+" A "+o+","+s+",0,0,1,"+(r+i)+","+(n+s)+" L "+(r+i)+","+(n+a-s)+" A "+o+","+s+",0,0,1,"+(r+i-o)+","+(n+a)+" L "+(r+o)+","+(n+a)+" A "+o+","+s+",0,0,1,"+r+","+(n+a-s)+" L "+r+","+(n+s)+" A "+o+","+s+",0,0,1,"+(r+o)+","+n}else e.d="M"+r+" "+n+" L"+(r+i)+" "+n+" L"+(r+i)+" "+(n+a)+" L"+r+" "+(n+a)+" Z";return e},r.prototype.polylineToPath=function(t){var e,r,n={},i=t.points.trim().split(" ");if(-1===t.points.indexOf(",")){var a=[];for(e=0;e<i.length;e+=2)a.push(i[e]+","+i[e+1]);i=a}for(r="M"+i[0],e=1;e<i.length;e++)-1!==i[e].indexOf(",")&&(r+="L"+i[e]);return n.d=r,n},r.prototype.polygonToPath=function(t){var e=r.prototype.polylineToPath(t);return e.d+="Z",e},r.prototype.ellipseToPath=function(t){var e={},r=parseFloat(t.rx)||0,n=parseFloat(t.ry)||0,i=parseFloat(t.cx)||0,a=parseFloat(t.cy)||0,o=i-r,s=a,h=parseFloat(i)+parseFloat(r),l=a;return e.d="M"+o+","+s+"A"+r+","+n+" 0,1,1 "+h+","+l+"A"+r+","+n+" 0,1,1 "+o+","+l,e},r.prototype.circleToPath=function(t){var e={},r=parseFloat(t.r)||0,n=parseFloat(t.cx)||0,i=parseFloat(t.cy)||0,a=n-r,o=i,s=parseFloat(n)+parseFloat(r),h=i;return e.d="M"+a+","+o+"A"+r+","+r+" 0,1,1 "+s+","+h+"A"+r+","+r+" 0,1,1 "+a+","+h,e},r.prototype.pathMaker=function(t,e){var r,n,i=document.createElementNS("http://www.w3.org/2000/svg","path");for(r=0;r<t.attributes.length;r++)n=t.attributes[r],-1===this.ATTR_WATCH.indexOf(n.name)&&i.setAttribute(n.name,n.value);for(r in e)i.setAttribute(r,e[r]);return i},r.prototype.parseAttr=function(t){for(var e,r={},n=0;n<t.length;n++){if(e=t[n],-1!==this.ATTR_WATCH.indexOf(e.name)&&-1!==e.value.indexOf("%"))throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");r[e.name]=e.value}return r},i.LINEAR=function(t){return t},i.EASE=function(t){return-Math.cos(t*Math.PI)/2+.5},i.EASE_OUT=function(t){return 1-Math.pow(1-t,3)},i.EASE_IN=function(t){return Math.pow(t,3)},i.EASE_OUT_BOUNCE=function(t){var e=1-Math.cos(t*(.5*Math.PI)),r=Math.pow(e,1.5),n=Math.pow(1-t,2);return 1-n+(1-Math.abs(Math.cos(r*(2.5*Math.PI))))*n},i.prototype.setElement=function(e,r){var t,n;if(void 0===e)throw new Error('Vivus [constructor]: "element" parameter is required');if(e.constructor===String&&!(e=document.getElementById(e)))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(this.parentEl=e,r&&r.file){n=this,t=function(){var t=document.createElement("div");t.innerHTML=this.responseText;var e=t.querySelector("svg");if(!e)throw new Error("Vivus [load]: Cannot find the SVG in the loaded file : "+r.file);n.el=e,n.el.setAttribute("width","100%"),n.el.setAttribute("height","100%"),n.parentEl.appendChild(n.el),n.isReady=!0,n.init(),n=null};var i=new window.XMLHttpRequest;return i.addEventListener("load",t),i.open("GET",r.file),void i.send()}switch(e.constructor){case window.SVGSVGElement:case window.SVGElement:case window.SVGGElement:this.el=e,this.isReady=!0;break;case window.HTMLObjectElement:n=this,(t=function(t){if(!n.isReady){if(n.el=e.contentDocument&&e.contentDocument.querySelector("svg"),!n.el&&t)throw new Error("Vivus [constructor]: object loaded does not contain any SVG");n.el&&(e.getAttribute("built-by-vivus")&&(n.parentEl.insertBefore(n.el,e),n.parentEl.removeChild(e),n.el.setAttribute("width","100%"),n.el.setAttribute("height","100%")),n.isReady=!0,n.init(),n=null)}})()||e.addEventListener("load",t);break;default:throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')}},i.prototype.setOptions=function(t){var e=["delayed","sync","async","nsync","oneByOne","scenario","scenario-sync"],r=["inViewport","manual","autostart"];if(void 0!==t&&t.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if((t=t||{}).type&&-1===e.indexOf(t.type))throw new Error("Vivus [constructor]: "+t.type+" is not an existing animation `type`");if(this.type=t.type||e[0],t.start&&-1===r.indexOf(t.start))throw new Error("Vivus [constructor]: "+t.start+" is not an existing `start` option");if(this.start=t.start||r[0],this.isIE=-1!==window.navigator.userAgent.indexOf("MSIE")||-1!==window.navigator.userAgent.indexOf("Trident/")||-1!==window.navigator.userAgent.indexOf("Edge/"),this.duration=h(t.duration,120),this.delay=h(t.delay,null),this.dashGap=h(t.dashGap,1),this.forceRender=t.hasOwnProperty("forceRender")?!!t.forceRender:this.isIE,this.reverseStack=!!t.reverseStack,this.selfDestroy=!!t.selfDestroy,this.onReady=t.onReady,this.map=[],this.frameLength=this.currentFrame=this.delayUnit=this.speed=this.handle=null,this.ignoreInvisible=!!t.hasOwnProperty("ignoreInvisible")&&!!t.ignoreInvisible,this.animTimingFunction=t.animTimingFunction||i.LINEAR,this.pathTimingFunction=t.pathTimingFunction||i.LINEAR,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},i.prototype.setCallback=function(t){if(t&&t.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=t||function(){}},i.prototype.mapping=function(){var t,e,r,n,i,a,o,s;for(s=a=o=0,e=this.el.querySelectorAll("path"),t=0;t<e.length;t++)r=e[t],this.isInvisible(r)||(i={el:r,length:Math.ceil(r.getTotalLength())},isNaN(i.length)?window.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",r):(this.map.push(i),r.style.strokeDasharray=i.length+" "+(i.length+2*this.dashGap),r.style.strokeDashoffset=i.length+this.dashGap,i.length+=this.dashGap,a+=i.length,this.renderPath(t)));for(a=0===a?1:a,this.delay=null===this.delay?this.duration/3:this.delay,this.delayUnit=this.delay/(1<e.length?e.length-1:1),this.reverseStack&&this.map.reverse(),t=0;t<this.map.length;t++){switch(i=this.map[t],this.type){case"delayed":i.startAt=this.delayUnit*t,i.duration=this.duration-this.delay;break;case"oneByOne":i.startAt=o/a*this.duration,i.duration=i.length/a*this.duration;break;case"sync":case"async":case"nsync":i.startAt=0,i.duration=this.duration;break;case"scenario-sync":r=i.el,n=this.parseAttr(r),i.startAt=s+(h(n["data-delay"],this.delayUnit)||0),i.duration=h(n["data-duration"],this.duration),s=void 0!==n["data-async"]?i.startAt:i.startAt+i.duration,this.frameLength=Math.max(this.frameLength,i.startAt+i.duration);break;case"scenario":r=i.el,n=this.parseAttr(r),i.startAt=h(n["data-start"],this.delayUnit)||0,i.duration=h(n["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,i.startAt+i.duration)}o+=i.length,this.frameLength=this.frameLength||this.duration}},i.prototype.drawer=function(){var t=this;if(this.currentFrame+=this.speed,this.currentFrame<=0)this.stop(),this.reset();else{if(!(this.currentFrame>=this.frameLength))return this.trace(),void(this.handle=e(function(){t.drawer()}));this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy()}this.callback(this),this.instanceCallback&&(this.instanceCallback(this),this.instanceCallback=null)},i.prototype.trace=function(){var t,e,r,n;for(n=this.animTimingFunction(this.currentFrame/this.frameLength)*this.frameLength,t=0;t<this.map.length;t++)e=(n-(r=this.map[t]).startAt)/r.duration,e=this.pathTimingFunction(Math.max(0,Math.min(1,e))),r.progress!==e&&(r.progress=e,r.el.style.strokeDashoffset=Math.floor(r.length*(1-e)),this.renderPath(t))},i.prototype.renderPath=function(t){if(this.forceRender&&this.map&&this.map[t]){var e=this.map[t],r=e.el.cloneNode(!0);e.el.parentNode.replaceChild(r,e.el),e.el=r}},i.prototype.init=function(){this.frameLength=0,this.currentFrame=0,this.map=[],new r(this.el),this.mapping(),this.starter(),this.onReady&&this.onReady(this)},i.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var t=this,e=function(){t.isInViewport(t.parentEl,1)&&(t.play(),window.removeEventListener("scroll",e))};window.addEventListener("scroll",e),e()}},i.prototype.getStatus=function(){return 0===this.currentFrame?"start":this.currentFrame===this.frameLength?"end":"progress"},i.prototype.reset=function(){return this.setFrameProgress(0)},i.prototype.finish=function(){return this.setFrameProgress(1)},i.prototype.setFrameProgress=function(t){return t=Math.min(1,Math.max(0,t)),this.currentFrame=Math.round(this.frameLength*t),this.trace(),this},i.prototype.play=function(t,e){if(this.instanceCallback=null,t&&"function"==typeof t)this.instanceCallback=t,t=null;else if(t&&"number"!=typeof t)throw new Error("Vivus [play]: invalid speed");return e&&"function"==typeof e&&!this.instanceCallback&&(this.instanceCallback=e),this.speed=t||1,this.handle||this.drawer(),this},i.prototype.stop=function(){return this.handle&&(t(this.handle),this.handle=null),this},i.prototype.destroy=function(){var t,e;for(this.stop(),t=0;t<this.map.length;t++)(e=this.map[t]).el.style.strokeDashoffset=null,e.el.style.strokeDasharray=null,this.renderPath(t)},i.prototype.isInvisible=function(t){var e,r=t.getAttribute("data-ignore");return null!==r?"false"!==r:!!this.ignoreInvisible&&(!(e=t.getBoundingClientRect()).width&&!e.height)},i.prototype.parseAttr=function(t){var e,r={};if(t&&t.attributes)for(var n=0;n<t.attributes.length;n++)r[(e=t.attributes[n]).name]=e.value;return r},i.prototype.isInViewport=function(t,e){var r=this.scrollY(),n=r+this.getViewportH(),i=t.getBoundingClientRect(),a=i.height,o=r+i.top;return o+a*(e=e||0)<=n&&r<=o+a},i.prototype.getViewportH=function(){var t=this.docElem.clientHeight,e=window.innerHeight;return t<e?e:t},i.prototype.scrollY=function(){return window.pageYOffset||this.docElem.scrollTop},n=function(){i.prototype.docElem||(i.prototype.docElem=window.document.documentElement,e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},t=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)})},h=function(t,e){var r=parseInt(t,10);return 0<=r?r:e},"function"==typeof define&&define.amd?define([],function(){return i}):"object"==typeof exports?module.exports=i:window.Vivus=i}();
var coverVid=function(a,b,c){function d(a,b){var c=null;return function(){var d=this,e=arguments;window.clearTimeout(c),c=window.setTimeout(function(){a.apply(d,e)},b)}}function e(){var d=a.parentNode.offsetHeight,e=a.parentNode.offsetWidth,f=b,g=c,h=d/g,i=e/f;i>h?(a.style.height="auto",a.style.width=e+"px"):(a.style.height=d+"px",a.style.width="auto")}document.addEventListener("DOMContentLoaded",e),window.addEventListener("resize",d(e,50)),a.style.position="absolute",a.style.top="50%",a.style.left="50%",a.style["-webkit-transform"]="translate(-50%, -50%)",a.style["-ms-transform"]="translate(-50%, -50%)",a.style.transform="translate(-50%, -50%)",a.parentNode.style.overflow="hidden";var f=a.getAttribute("poster");a.removeAttribute("poster"),a.parentNode.style.backgroundImage="url("+f+")",a.parentNode.style.backgroundSize="cover",a.parentNode.style.backgroundPosition="center center";var g="undefined"!=typeof a.canPlayType?!0:!1,h=!1;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(h=!0),(!g||h)&&a&&a.parentNode&&a.parentNode.removeChild(a)};window.jQuery&&jQuery.fn.extend({coverVid:function(){return coverVid(this[0],arguments[0],arguments[1]),this}});
!function(){"use strict";function e(n){return"undefined"==typeof this||Object.getPrototypeOf(this)!==e.prototype?new e(n):(O=this,O.version="3.4.0",O.tools=new E,O.isSupported()?(O.tools.extend(O.defaults,n||{}),O.defaults.container=t(O.defaults),O.store={elements:{},containers:[]},O.sequences={},O.history=[],O.uid=0,O.initialized=!1):"undefined"!=typeof console&&null!==console,O)}function t(e){if(e&&e.container){if("string"==typeof e.container)return window.document.documentElement.querySelector(e.container);if(O.tools.isNode(e.container))return e.container}return O.defaults.container}function n(e,t){return"string"==typeof e?Array.prototype.slice.call(t.querySelectorAll(e)):O.tools.isNode(e)?[e]:O.tools.isNodeList(e)?Array.prototype.slice.call(e):Array.isArray(e)?e.filter(O.tools.isNode):[]}function i(){return++O.uid}function o(e,t,n){t.container&&(t.container=n),e.config?e.config=O.tools.extendClone(e.config,t):e.config=O.tools.extendClone(O.defaults,t),"top"===e.config.origin||"bottom"===e.config.origin?e.config.axis="Y":e.config.axis="X"}function r(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,t.transition&&"all 0s ease 0s"!==t.transition?e.styles.computed.transition=t.transition+", ":e.styles.computed.transition=""),e.styles.transition.instant=s(e,0),e.styles.transition.delayed=s(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",a(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",a(e)}function s(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function a(e){var t,n=e.config,i=e.styles.transform;t="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(i.initial+=" translate"+n.axis+"("+t+")",i.target+=" translate"+n.axis+"(0)"),n.scale&&(i.initial+=" scale("+n.scale+")",i.target+=" scale(1)"),n.rotate.x&&(i.initial+=" rotateX("+n.rotate.x+"deg)",i.target+=" rotateX(0)"),n.rotate.y&&(i.initial+=" rotateY("+n.rotate.y+"deg)",i.target+=" rotateY(0)"),n.rotate.z&&(i.initial+=" rotateZ("+n.rotate.z+"deg)",i.target+=" rotateZ(0)"),i.initial+="; opacity: "+n.opacity+";",i.target+="; opacity: "+e.styles.computed.opacity+";"}function l(e){var t=e.config.container;t&&O.store.containers.indexOf(t)===-1&&O.store.containers.push(e.config.container),O.store.elements[e.id]=e}function c(e,t,n){var i={target:e,config:t,interval:n};O.history.push(i)}function f(){if(O.isSupported()){y();for(var e=0;e<O.store.containers.length;e++)O.store.containers[e].addEventListener("scroll",d),O.store.containers[e].addEventListener("resize",d);O.initialized||(window.addEventListener("scroll",d),window.addEventListener("resize",d),O.initialized=!0)}return O}function d(){A(y)}function u(){var e,t,n,i;O.tools.forOwn(O.sequences,function(o){i=O.sequences[o],e=!1;for(var r=0;r<i.elemIds.length;r++)n=i.elemIds[r],t=O.store.elements[n],q(t)&&!e&&(e=!0);i.active=e})}function y(){var e,t;u(),O.tools.forOwn(O.store.elements,function(n){t=O.store.elements[n],e=w(t),g(t)?(t.config.beforeReveal(t.domEl),e?t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.delayed):t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.instant),p("reveal",t,e),t.revealing=!0,t.seen=!0,t.sequence&&m(t,e)):v(t)&&(t.config.beforeReset(t.domEl),t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.initial+t.styles.transition.instant),p("reset",t),t.revealing=!1)})}function m(e,t){var n=0,i=0,o=O.sequences[e.sequence.id];o.blocked=!0,t&&"onload"===e.config.useDelay&&(i=e.config.delay),e.sequence.timer&&(n=Math.abs(e.sequence.timer.started-new Date),window.clearTimeout(e.sequence.timer)),e.sequence.timer={started:new Date},e.sequence.timer.clock=window.setTimeout(function(){o.blocked=!1,e.sequence.timer=null,d()},Math.abs(o.interval)+i-n)}function p(e,t,n){var i=0,o=0,r="after";switch(e){case"reveal":o=t.config.duration,n&&(o+=t.config.delay),r+="Reveal";break;case"reset":o=t.config.duration,r+="Reset"}t.timer&&(i=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[r](t.domEl),t.timer=null},o-i)}function g(e){if(e.sequence){var t=O.sequences[e.sequence.id];return t.active&&!t.blocked&&!e.revealing&&!e.disabled}return q(e)&&!e.revealing&&!e.disabled}function w(e){var t=e.config.useDelay;return"always"===t||"onload"===t&&!O.initialized||"once"===t&&!e.seen}function v(e){if(e.sequence){var t=O.sequences[e.sequence.id];return!t.active&&e.config.reset&&e.revealing&&!e.disabled}return!q(e)&&e.config.reset&&e.revealing&&!e.disabled}function b(e){return{width:e.clientWidth,height:e.clientHeight}}function h(e){if(e&&e!==window.document.documentElement){var t=x(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function x(e){var t=0,n=0,i=e.offsetHeight,o=e.offsetWidth;do isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft),e=e.offsetParent;while(e);return{top:t,left:n,height:i,width:o}}function q(e){function t(){var t=c+a*s,n=f+l*s,i=d-a*s,y=u-l*s,m=r.y+e.config.viewOffset.top,p=r.x+e.config.viewOffset.left,g=r.y-e.config.viewOffset.bottom+o.height,w=r.x-e.config.viewOffset.right+o.width;return t<g&&i>m&&n<w&&y>p}function n(){return"fixed"===window.getComputedStyle(e.domEl).position}var i=x(e.domEl),o=b(e.config.container),r=h(e.config.container),s=e.config.viewFactor,a=i.height,l=i.width,c=i.top,f=i.left,d=c+a,u=f+l;return t()||n()}function E(){}var O,A;e.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(e){},beforeReset:function(e){},afterReveal:function(e){},afterReset:function(e){}},e.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},e.prototype.reveal=function(e,s,a,d){var u,y,m,p,g,w;if(void 0!==s&&"number"==typeof s?(a=s,s={}):void 0!==s&&null!==s||(s={}),u=t(s),y=n(e,u),!y.length)return O;a&&"number"==typeof a&&(w=i(),g=O.sequences[w]={id:w,interval:a,elemIds:[],active:!1});for(var v=0;v<y.length;v++)p=y[v].getAttribute("data-sr-id"),p?m=O.store.elements[p]:(m={id:i(),domEl:y[v],seen:!1,revealing:!1},m.domEl.setAttribute("data-sr-id",m.id)),g&&(m.sequence={id:g.id,index:g.elemIds.length},g.elemIds.push(m.id)),o(m,s,u),r(m),l(m),O.tools.isMobile()&&!m.config.mobile||!O.isSupported()?(m.domEl.setAttribute("style",m.styles.inline),m.disabled=!0):m.revealing||m.domEl.setAttribute("style",m.styles.inline+m.styles.transform.initial);return!d&&O.isSupported()&&(c(e,s,a),O.initTimeout&&window.clearTimeout(O.initTimeout),O.initTimeout=window.setTimeout(f,0)),O},e.prototype.sync=function(){if(O.history.length&&O.isSupported()){for(var e=0;e<O.history.length;e++){var t=O.history[e];O.reveal(t.target,t.config,t.interval,!0)}f()}return O},E.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor===Object},E.prototype.isNode=function(e){return"object"==typeof window.Node?e instanceof window.Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},E.prototype.isNodeList=function(e){var t=Object.prototype.toString.call(e),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"==typeof window.NodeList?e instanceof window.NodeList:e&&"object"==typeof e&&n.test(t)&&"number"==typeof e.length&&(0===e.length||this.isNode(e[0]))},E.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},E.prototype.extend=function(e,t){return this.forOwn(t,function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}.bind(this)),e},E.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},E.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},A=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:window.ScrollReveal=e}();
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
/*!
Waypoints Sticky Element Shortcut - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(s){this.options=e.extend({},i.defaults,t.defaults,s),this.element=this.options.element,this.$element=e(this.element),this.createWrapper(),this.createWaypoint()}var e=window.jQuery,i=window.Waypoint;t.prototype.createWaypoint=function(){var t=this.options.handler;this.waypoint=new i(e.extend({},this.options,{element:this.wrapper,handler:e.proxy(function(e){var i=this.options.direction.indexOf(e)>-1,s=i?this.$element.outerHeight(!0):"";this.$wrapper.height(s),this.$element.toggleClass(this.options.stuckClass,i),t&&t.call(this,e)},this)}))},t.prototype.createWrapper=function(){this.options.wrapper&&this.$element.wrap(this.options.wrapper),this.$wrapper=this.$element.parent(),this.wrapper=this.$wrapper[0]},t.prototype.destroy=function(){this.$element.parent()[0]===this.wrapper&&(this.waypoint.destroy(),this.$element.removeClass(this.options.stuckClass),this.options.wrapper&&this.$element.unwrap())},t.defaults={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck",direction:"down right"},i.Sticky=t}();
(function($){"use strict";$.fn.counterUp=function(options){var settings=$.extend({time:400,delay:10,offset:100,beginAt:0,formatter:false,context:"window",callback:function(){}},options),s;return this.each(function(){var $this=$(this),counter={time:$(this).data("counterup-time")||settings.time,delay:$(this).data("counterup-delay")||settings.delay,offset:$(this).data("counterup-offset")||settings.offset,beginAt:$(this).data("counterup-beginat")||settings.beginAt,context:$(this).data("counterup-context")||settings.context};var counterUpper=function(){var nums=[];var divisions=counter.time/counter.delay;var num=$(this).attr("data-num")?$(this).attr("data-num"):$this.text();var isComma=/[0-9]+,[0-9]+/.test(num);num=num.replace(/,/g,"");var decimalPlaces=(num.split(".")[1]||[]).length;if(counter.beginAt>num)counter.beginAt=num;var isTime=/[0-9]+:[0-9]+:[0-9]+/.test(num);if(isTime){var times=num.split(":"),m=1;s=0;while(times.length>0){s+=m*parseInt(times.pop(),10);m*=60}}for(var i=divisions;i>=counter.beginAt/num*divisions;i--){var newNum=parseFloat(num/divisions*i).toFixed(decimalPlaces);if(isTime){newNum=parseInt(s/divisions*i);var hours=parseInt(newNum/3600)%24;var minutes=parseInt(newNum/60)%60;var seconds=parseInt(newNum%60,10);newNum=(hours<10?"0"+hours:hours)+":"+(minutes<10?"0"+minutes:minutes)+":"+(seconds<10?"0"+seconds:seconds)}if(isComma){while(/(\d+)(\d{3})/.test(newNum.toString())){newNum=newNum.toString().replace(/(\d+)(\d{3})/,"$1"+","+"$2")}}if(settings.formatter){newNum=settings.formatter.call(this,newNum)}nums.unshift(newNum)}$this.data("counterup-nums",nums);$this.text(counter.beginAt);var f=function(){if(!$this.data("counterup-nums")){settings.callback.call(this);return}$this.html($this.data("counterup-nums").shift());if($this.data("counterup-nums").length){setTimeout($this.data("counterup-func"),counter.delay)}else{$this.data("counterup-nums",null);$this.data("counterup-func",null);settings.callback.call(this)}};$this.data("counterup-func",f);setTimeout($this.data("counterup-func"),counter.delay)};$this.waypoint(function(direction){counterUpper();this.destroy()},{offset:counter.offset+"%",context:counter.context})})}})(jQuery);

/*
 * jQuery Dropdown: A simple dropdown plugin
 *
 * Contribute: https://github.com/claviska/jquery-dropdown
 *
 * @license: MIT license: http://opensource.org/licenses/MIT
 *
 */
jQuery&&function($){function t(t,e){var n=t?$(this):e,d=$(n.attr("data-jq-dropdown")),a=n.hasClass("jq-dropdown-open");if(t){if($(t.target).hasClass("jq-dropdown-ignore"))return;t.preventDefault(),t.stopPropagation()}else if(n!==e.target&&$(e.target).hasClass("jq-dropdown-ignore"))return;o(),a||n.hasClass("jq-dropdown-disabled")||(n.addClass("jq-dropdown-open"),d.data("jq-dropdown-trigger",n).show(),r(),d.trigger("show",{jqDropdown:d,trigger:n}))}function o(t){var o=t?$(t.target).parents().addBack():null;if(o&&o.is(".jq-dropdown")){if(!o.is(".jq-dropdown-menu"))return;if(!o.is("A"))return}$(document).find(".jq-dropdown:visible").each(function(){var t=$(this);t.hide().removeData("jq-dropdown-trigger").trigger("hide",{jqDropdown:t})}),$(document).find(".jq-dropdown-open").removeClass("jq-dropdown-open")}function r(){var t=$(".jq-dropdown:visible").eq(0),o=t.data("jq-dropdown-trigger"),r=o?parseInt(o.attr("data-horizontal-offset")||0,10):null,e=o?parseInt(o.attr("data-vertical-offset")||0,10):null;0!==t.length&&o&&t.css(t.hasClass("jq-dropdown-relative")?{left:t.hasClass("jq-dropdown-anchor-right")?o.position().left-(t.outerWidth(!0)-o.outerWidth(!0))-parseInt(o.css("margin-right"),10)+r:o.position().left+parseInt(o.css("margin-left"),10)+r,top:o.position().top+o.outerHeight(!0)-parseInt(o.css("margin-top"),10)+e}:{left:t.hasClass("jq-dropdown-anchor-right")?o.offset().left-(t.outerWidth()-o.outerWidth())+r:o.offset().left+r,top:o.offset().top+o.outerHeight()+e})}$.extend($.fn,{jqDropdown:function(r,e){switch(r){case"show":return t(null,$(this)),$(this);case"hide":return o(),$(this);case"attach":return $(this).attr("data-jq-dropdown",e);case"detach":return o(),$(this).removeAttr("data-jq-dropdown");case"disable":return $(this).addClass("jq-dropdown-disabled");case"enable":return o(),$(this).removeClass("jq-dropdown-disabled")}}}),$(document).on("click.jq-dropdown","[data-jq-dropdown]",t),$(document).on("click.jq-dropdown",o),$(window).on("resize",r)}(jQuery);
/*!
 * Datepicker v0.6.5
 * https://github.com/fengyuanchen/datepicker
 *
 * Copyright (c) 2014-2018 Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2018-03-31T06:17:11.587Z
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):t(e.jQuery)}(this,function(D){"use strict";D=D&&D.hasOwnProperty("default")?D.default:D;var a={autoShow:!1,autoHide:!1,autoPick:!1,inline:!1,container:null,trigger:null,language:"",format:"mm/dd/yyyy",date:null,startDate:null,endDate:null,startView:0,weekStart:0,yearFirst:!1,yearSuffix:"",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],itemTag:"li",mutedClass:"muted",pickedClass:"picked",disabledClass:"disabled",highlightedClass:"highlighted",template:'<div class="datepicker-container"><div class="datepicker-panel" data-view="years picker"><ul><li data-view="years prev">&lsaquo;</li><li data-view="years current"></li><li data-view="years next">&rsaquo;</li></ul><ul data-view="years"></ul></div><div class="datepicker-panel" data-view="months picker"><ul><li data-view="year prev">&lsaquo;</li><li data-view="year current"></li><li data-view="year next">&rsaquo;</li></ul><ul data-view="months"></ul></div><div class="datepicker-panel" data-view="days picker"><ul><li data-view="month prev">&lsaquo;</li><li data-view="month current"></li><li data-view="month next">&rsaquo;</li></ul><ul data-view="week"></ul><ul data-view="days"></ul></div></div>',offset:10,zIndex:1e3,filter:null,show:null,hide:null,pick:null},e="undefined"!=typeof window?window:{},d="datepicker",s="click."+d,n="focus."+d,r="hide."+d,h="keyup."+d,o="pick."+d,t="resize."+d,l="show."+d,u=d+"-hide",c={},p=0,f=1,g=2,i=Object.prototype.toString;function y(e){return"string"==typeof e}var v=Number.isNaN||e.isNaN;function m(e){return"number"==typeof e&&!v(e)}function w(e){return void 0===e}function k(e){return"date"===(t=e,i.call(t).slice(8,-1).toLowerCase());var t}function b(a,s){for(var e=arguments.length,n=Array(2<e?e-2:0),t=2;t<e;t++)n[t-2]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return a.apply(s,n.concat(t))}}function C(e){return'[data-view="'+e+'"]'}function G(e,t){return[31,(i=e,i%4==0&&i%100!=0||i%400==0?29:28),31,30,31,30,31,31,30,31,30,31][t];var i}function $(e,t,i){return Math.min(i,G(e,t))}var x=/(y|m|d)+/g;var F=/\d+/g,M={show:function(){this.built||this.build(),this.shown||this.trigger(l).isDefaultPrevented()||(this.shown=!0,this.$picker.removeClass(u).on(s,D.proxy(this.click,this)),this.showView(this.options.startView),this.inline||(D(window).on(t,this.onResize=b(this.place,this)),D(document).on(s,this.onGlobalClick=b(this.globalClick,this)),D(document).on(h,this.onGlobalKeyup=b(this.globalKeyup,this)),this.place()))},hide:function(){this.shown&&(this.trigger(r).isDefaultPrevented()||(this.shown=!1,this.$picker.addClass(u).off(s,this.click),this.inline||(D(window).off(t,this.onResize),D(document).off(s,this.onGlobalClick),D(document).off(h,this.onGlobalKeyup))))},toggle:function(){this.shown?this.hide():this.show()},update:function(){var e=this.getValue();e!==this.oldValue&&(this.setDate(e,!0),this.oldValue=e)},pick:function(e){var t=this.$element,i=this.date;this.trigger(o,{view:e||"",date:i}).isDefaultPrevented()||(i=this.formatDate(this.date),this.setValue(i),this.isInput&&(t.trigger("input"),t.trigger("change")))},reset:function(){this.setDate(this.initialDate,!0),this.setValue(this.initialValue),this.shown&&this.showView(this.options.startView)},getMonthName:function(e,t){var i=this.options,a=i.monthsShort,s=i.months;return D.isNumeric(e)?e=Number(e):w(t)&&(t=e),!0===t&&(s=a),s[m(e)?e:this.date.getMonth()]},getDayName:function(e,t,i){var a=this.options,s=a.days;return D.isNumeric(e)?e=Number(e):(w(i)&&(i=t),w(t)&&(t=e)),i?s=a.daysMin:t&&(s=a.daysShort),s[m(e)?e:this.date.getDay()]},getDate:function(e){var t=this.date;return e?this.formatDate(t):new Date(t)},setDate:function(e,t){var i=this.options.filter;if(k(e)||y(e)){if(e=this.parseDate(e),D.isFunction(i)&&!1===i.call(this.$element,e))return;this.date=e,this.viewDate=new Date(e),t||this.pick(),this.built&&this.render()}},setStartDate:function(e){(k(e)||y(e))&&(this.startDate=this.parseDate(e),this.built&&this.render())},setEndDate:function(e){(k(e)||y(e))&&(this.endDate=this.parseDate(e),this.built&&this.render())},parseDate:function(e){var a=this.format,t=[];if(k(e))return new Date(e.getFullYear(),e.getMonth(),e.getDate());y(e)&&(t=e.match(F)||[]),e=new Date;var i=a.parts.length,s=e.getFullYear(),n=e.getDate(),r=e.getMonth();return t.length===i&&D.each(t,function(e,t){var i=parseInt(t,10)||1;switch(a.parts[e]){case"dd":case"d":n=i;break;case"mm":case"m":r=i-1;break;case"yy":s=2e3+i;break;case"yyyy":s=i}}),new Date(s,r,n)},formatDate:function(e){var t=this.format,i="";if(k(e)){var a=e.getFullYear(),s={d:e.getDate(),m:e.getMonth()+1,yy:a.toString().substring(2),yyyy:a};s.dd=(s.d<10?"0":"")+s.d,s.mm=(s.m<10?"0":"")+s.m,i=t.source,D.each(t.parts,function(e,t){i=i.replace(t,s[t])})}return i},destroy:function(){this.unbind(),this.unbuild(),this.$element.removeData(d)}},V={click:function(e){var t=D(e.target),i=this.options,a=this.viewDate,s=this.format;if(e.stopPropagation(),e.preventDefault(),!t.hasClass("disabled")){var n=t.data("view"),r=a.getFullYear(),h=a.getMonth(),o=a.getDate();switch(n){case"years prev":case"years next":r="years prev"===n?r-10:r+10,this.viewDate=new Date(r,h,$(r,h,o)),this.renderYears();break;case"year prev":case"year next":r="year prev"===n?r-1:r+1,this.viewDate=new Date(r,h,$(r,h,o)),this.renderMonths();break;case"year current":s.hasYear&&this.showView(g);break;case"year picked":s.hasMonth?this.showView(f):(t.addClass(i.pickedClass).siblings().removeClass(i.pickedClass),this.hideView()),this.pick("year");break;case"year":r=parseInt(t.text(),10),this.date=new Date(r,h,$(r,h,o)),s.hasMonth?(this.viewDate=new Date(this.date),this.showView(f)):(t.addClass(i.pickedClass).siblings().removeClass(i.pickedClass),this.hideView()),this.pick("year");break;case"month prev":case"month next":(h="month prev"===n?h-1:h+1)<0?(r-=1,h+=12):11<h&&(r+=1,h-=12),this.viewDate=new Date(r,h,$(r,h,o)),this.renderDays();break;case"month current":s.hasMonth&&this.showView(f);break;case"month picked":s.hasDay?this.showView(p):(t.addClass(i.pickedClass).siblings().removeClass(i.pickedClass),this.hideView()),this.pick("month");break;case"month":h=D.inArray(t.text(),i.monthsShort),this.date=new Date(r,h,$(r,h,o)),s.hasDay?(this.viewDate=new Date(r,h,$(r,h,o)),this.showView(p)):(t.addClass(i.pickedClass).siblings().removeClass(i.pickedClass),this.hideView()),this.pick("month");break;case"day prev":case"day next":case"day":"day prev"===n?h-=1:"day next"===n&&(h+=1),o=parseInt(t.text(),10),this.date=new Date(r,h,o),this.viewDate=new Date(r,h,o),this.renderDays(),"day"===n&&this.hideView(),this.pick("day");break;case"day picked":this.hideView(),this.pick("day")}}},globalClick:function(e){for(var t=e.target,i=this.element,a=this.$trigger[0],s=!0;t!==document;){if(t===a||t===i){s=!1;break}t=t.parentNode}s&&this.hide()},keyup:function(){this.update()},globalKeyup:function(e){var t=e.target,i=e.key,a=e.keyCode;this.isInput&&t!==this.element&&this.shown&&("Tab"===i||9===a)&&this.hide()}},Y={render:function(){this.renderYears(),this.renderMonths(),this.renderDays()},renderWeek:function(){var i=this,a=[],e=this.options,t=e.weekStart,s=e.daysMin;t=parseInt(t,10)%7,s=s.slice(t).concat(s.slice(0,t)),D.each(s,function(e,t){a.push(i.createItem({text:t}))}),this.$week.html(a.join(""))},renderYears:function(){var e=this.options,t=this.startDate,i=this.endDate,a=e.disabledClass,s=e.filter,n=e.yearSuffix,r=this.viewDate.getFullYear(),h=(new Date).getFullYear(),o=this.date.getFullYear(),l=[],d=!1,u=!1,c=void 0;for(c=-5;c<=6;c+=1){var p=new Date(r+c,1,1),f=!1;t&&(f=p.getFullYear()<t.getFullYear(),-5===c&&(d=f)),!f&&i&&(f=p.getFullYear()>i.getFullYear(),6===c&&(u=f)),!f&&s&&(f=!1===s.call(this.$element,p));var g=r+c===o,y=g?"year picked":"year";l.push(this.createItem({picked:g,disabled:f,text:r+c,view:f?"year disabled":y,highlighted:p.getFullYear()===h}))}this.$yearsPrev.toggleClass(a,d),this.$yearsNext.toggleClass(a,u),this.$yearsCurrent.toggleClass(a,!0).html(r+-5+n+" - "+(r+6)+n),this.$years.html(l.join(""))},renderMonths:function(){var e=this.options,t=this.startDate,i=this.endDate,a=this.viewDate,s=e.disabledClass||"",n=e.monthsShort,r=D.isFunction(e.filter)&&e.filter,h=a.getFullYear(),o=new Date,l=o.getFullYear(),d=o.getMonth(),u=this.date.getFullYear(),c=this.date.getMonth(),p=[],f=!1,g=!1,y=void 0;for(y=0;y<=11;y+=1){var v=new Date(h,y,1),m=!1;t&&(m=(f=v.getFullYear()===t.getFullYear())&&v.getMonth()<t.getMonth()),!m&&i&&(m=(g=v.getFullYear()===i.getFullYear())&&v.getMonth()>i.getMonth()),!m&&r&&(m=!1===r.call(this.$element,v));var w=h===u&&y===c,k=w?"month picked":"month";p.push(this.createItem({disabled:m,picked:w,highlighted:h===l&&v.getMonth()===d,index:y,text:n[y],view:m?"month disabled":k}))}this.$yearPrev.toggleClass(s,f),this.$yearNext.toggleClass(s,g),this.$yearCurrent.toggleClass(s,f&&g).html(h+e.yearSuffix||""),this.$months.html(p.join(""))},renderDays:function(){var e=this.$element,t=this.options,i=this.startDate,a=this.endDate,s=this.viewDate,n=this.date,r=t.disabledClass,h=t.filter,o=t.monthsShort,l=t.weekStart,d=t.yearSuffix,u=s.getFullYear(),c=s.getMonth(),p=new Date,f=p.getFullYear(),g=p.getMonth(),y=p.getDate(),v=n.getFullYear(),m=n.getMonth(),w=n.getDate(),k=void 0,D=void 0,b=void 0,C=[],$=u,x=c,F=!1;0===c?($-=1,x=11):x-=1,k=G($,x);var M=new Date(u,c,1);for((b=M.getDay()-parseInt(l,10)%7)<=0&&(b+=7),i&&(F=M.getTime()<=i.getTime()),D=k-(b-1);D<=k;D+=1){var V=new Date($,x,D),Y=!1;i&&(Y=V.getTime()<i.getTime()),!Y&&h&&(Y=!1===h.call(e,V)),C.push(this.createItem({disabled:Y,highlighted:$===f&&x===g&&V.getDate()===y,muted:!0,picked:$===v&&x===m&&D===w,text:D,view:"day prev"}))}var I=[],S=u,T=c,N=!1;11===c?(S+=1,T=0):T+=1,k=G(u,c),b=42-(C.length+k);var P=new Date(u,c,k);for(a&&(N=P.getTime()>=a.getTime()),D=1;D<=b;D+=1){var j=new Date(S,T,D),q=S===v&&T===m&&D===w,A=!1;a&&(A=j.getTime()>a.getTime()),!A&&h&&(A=!1===h.call(e,j)),I.push(this.createItem({disabled:A,picked:q,highlighted:S===f&&T===g&&j.getDate()===y,muted:!0,text:D,view:"day next"}))}var W=[];for(D=1;D<=k;D+=1){var z=new Date(u,c,D),J=!1;i&&(J=z.getTime()<i.getTime()),!J&&a&&(J=z.getTime()>a.getTime()),!J&&h&&(J=!1===h.call(e,z));var O=u===v&&c===m&&D===w,E=O?"day picked":"day";W.push(this.createItem({disabled:J,picked:O,highlighted:u===f&&c===g&&z.getDate()===y,text:D,view:J?"day disabled":E}))}this.$monthPrev.toggleClass(r,F),this.$monthNext.toggleClass(r,N),this.$monthCurrent.toggleClass(r,F&&N).html(t.yearFirst?u+d+" "+o[c]:o[c]+" "+u+d),this.$days.html(C.join("")+W.join("")+I.join(""))}},I=function(){function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,i){return t&&a(e.prototype,t),i&&a(e,i),e}}();var S=d+"-top-left",T=d+"-bottom-left",N=[S,d+"-top-right",T,d+"-bottom-right"].join(" "),P=function(){function i(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.$element=D(e),this.element=e,this.options=D.extend({},a,c[t.language],t),this.built=!1,this.shown=!1,this.isInput=!1,this.inline=!1,this.initialValue="",this.initialDate=null,this.startDate=null,this.endDate=null,this.init()}return I(i,[{key:"init",value:function(){var e=this.$element,t=this.options,i=t.startDate,a=t.endDate,s=t.date;this.$trigger=D(t.trigger),this.isInput=e.is("input")||e.is("textarea"),this.inline=t.inline&&(t.container||!this.isInput),this.format=function(i){var e=String(i).toLowerCase(),t=e.match(x);if(!t||0===t.length)throw new Error("Invalid date format.");return i={source:e,parts:t},D.each(t,function(e,t){switch(t){case"dd":case"d":i.hasDay=!0;break;case"mm":case"m":i.hasMonth=!0;break;case"yyyy":case"yy":i.hasYear=!0}}),i}(t.format);var n=this.getValue();this.initialValue=n,this.oldValue=n,s=this.parseDate(s||n),i&&(i=this.parseDate(i),s.getTime()<i.getTime()&&(s=new Date(i)),this.startDate=i),a&&(a=this.parseDate(a),i&&a.getTime()<i.getTime()&&(a=new Date(i)),s.getTime()>a.getTime()&&(s=new Date(a)),this.endDate=a),this.date=s,this.viewDate=new Date(s),this.initialDate=new Date(this.date),this.bind(),(t.autoShow||this.inline)&&this.show(),t.autoPick&&this.pick()}},{key:"build",value:function(){if(!this.built){this.built=!0;var e=this.$element,t=this.options,i=D(t.template);this.$picker=i,this.$week=i.find(C("week")),this.$yearsPicker=i.find(C("years picker")),this.$yearsPrev=i.find(C("years prev")),this.$yearsNext=i.find(C("years next")),this.$yearsCurrent=i.find(C("years current")),this.$years=i.find(C("years")),this.$monthsPicker=i.find(C("months picker")),this.$yearPrev=i.find(C("year prev")),this.$yearNext=i.find(C("year next")),this.$yearCurrent=i.find(C("year current")),this.$months=i.find(C("months")),this.$daysPicker=i.find(C("days picker")),this.$monthPrev=i.find(C("month prev")),this.$monthNext=i.find(C("month next")),this.$monthCurrent=i.find(C("month current")),this.$days=i.find(C("days")),this.inline?D(t.container||e).append(i.addClass(d+"-inline")):(D(document.body).append(i.addClass(d+"-dropdown")),i.addClass(u)),this.renderWeek()}}},{key:"unbuild",value:function(){this.built&&(this.built=!1,this.$picker.remove())}},{key:"bind",value:function(){var e=this.options,t=this.$element;D.isFunction(e.show)&&t.on(l,e.show),D.isFunction(e.hide)&&t.on(r,e.hide),D.isFunction(e.pick)&&t.on(o,e.pick),this.isInput&&t.on(h,D.proxy(this.keyup,this)),this.inline||(e.trigger?this.$trigger.on(s,D.proxy(this.toggle,this)):this.isInput?t.on(n,D.proxy(this.show,this)):t.on(s,D.proxy(this.show,this)))}},{key:"unbind",value:function(){var e=this.$element,t=this.options;D.isFunction(t.show)&&e.off(l,t.show),D.isFunction(t.hide)&&e.off(r,t.hide),D.isFunction(t.pick)&&e.off(o,t.pick),this.isInput&&e.off(h,this.keyup),this.inline||(t.trigger?this.$trigger.off(s,this.toggle):this.isInput?e.off(n,this.show):e.off(s,this.show))}},{key:"showView",value:function(e){var t=this.$yearsPicker,i=this.$monthsPicker,a=this.$daysPicker,s=this.format;if(s.hasYear||s.hasMonth||s.hasDay)switch(Number(e)){case g:i.addClass(u),a.addClass(u),s.hasYear?(this.renderYears(),t.removeClass(u),this.place()):this.showView(p);break;case f:t.addClass(u),a.addClass(u),s.hasMonth?(this.renderMonths(),i.removeClass(u),this.place()):this.showView(g);break;default:t.addClass(u),i.addClass(u),s.hasDay?(this.renderDays(),a.removeClass(u),this.place()):this.showView(f)}}},{key:"hideView",value:function(){!this.inline&&this.options.autoHide&&this.hide()}},{key:"place",value:function(){if(!this.inline){var e=this.$element,t=this.options,i=this.$picker,a=D(document).outerWidth(),s=D(document).outerHeight(),n=e.outerWidth(),r=e.outerHeight(),h=i.width(),o=i.height(),l=e.offset(),d=l.left,u=l.top,c=parseFloat(t.offset),p=S;v(c)&&(c=10),o<u&&s<u+r+o?(u-=o+c,p=T):u+=r+c,a<d+h&&(d+=n-h,p=p.replace("left","right")),i.removeClass(N).addClass(p).css({top:u,left:d,zIndex:parseInt(t.zIndex,10)})}}},{key:"trigger",value:function(e,t){var i=D.Event(e,t);return this.$element.trigger(i),i}},{key:"createItem",value:function(e){var t=this.options,i=t.itemTag,a={text:"",view:"",muted:!1,picked:!1,disabled:!1,highlighted:!1},s=[];return D.extend(a,e),a.muted&&s.push(t.mutedClass),a.highlighted&&s.push(t.highlightedClass),a.picked&&s.push(t.pickedClass),a.disabled&&s.push(t.disabledClass),"<"+i+' class="'+s.join(" ")+'" data-view="'+a.view+'">'+a.text+"</"+i+">"}},{key:"getValue",value:function(){var e=this.$element;return this.isInput?e.val():e.text()}},{key:"setValue",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=this.$element;this.isInput?t.val(e):t.text(e)}}],[{key:"setDefaults",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};D.extend(a,c[e.language],e)}}]),i}();if(D.extend&&D.extend(P.prototype,Y,V,M),D.fn){var j=D.fn.datepicker;D.fn.datepicker=function(h){for(var e=arguments.length,o=Array(1<e?e-1:0),t=1;t<e;t++)o[t-1]=arguments[t];var l=void 0;return this.each(function(e,t){var i=D(t),a="destroy"===h,s=i.data(d);if(!s){if(a)return;var n=D.extend({},i.data(),D.isPlainObject(h)&&h);s=new P(t,n),i.data(d,s)}if(y(h)){var r=s[h];D.isFunction(r)&&(l=r.apply(s,o),a&&i.removeData(d))}}),w(l)?this:l},D.fn.datepicker.Constructor=P,D.fn.datepicker.languages=c,D.fn.datepicker.setDefaults=P.setDefaults,D.fn.datepicker.noConflict=function(){return D.fn.datepicker=j,this}}});
jQuery.easing._dd_easing=function(d,a,i,s,e){return-s*((a=a/e-1)*a*a*a-1)+i},function(d){d.fn.dateDropper=function(a){return d(this).each(function(){if(d(this).is("input")&&"text"==d(this).attr("type")){var i,s,e,r,t=(new Date).getFullYear(),n=(new Date).getDate(),o=(new Date).getMonth(),l=d(".dd-w").length,u='<div class="dd-w dd-init" id="dd-w-'+l+'"><div class="dd-o"></div><div class="dd-c"><div class="dd-w-c"><div class="dd-b dd-m"><div class="dd-ul"><a class="dd-n dd-n-left"><i class="dd-icon-left" ></i></a><a class="dd-n dd-n-right"><i class="dd-icon-right" ></i></a><ul></ul></div></div><div class="dd-b dd-d"><div class="dd-ul"><a class="dd-n dd-n-left"><i class="dd-icon-left" ></i></a><a class="dd-n dd-n-right"><i class="dd-icon-right" ></i></a><ul></ul></div></div><div class="dd-b dd-y"><div class="dd-ul"><a class="dd-n dd-n-left"><i class="dd-icon-left" ></i></a><a class="dd-n dd-n-right"><i class="dd-icon-right" ></i></a><ul></ul></div></div><div class="dd-s-b dd-s-b-m dd-trans"><div class="dd-s-b-ul"><ul></ul></div></div><div class="dd-s-b dd-s-b-d dd-trans"><div class="dd-s-b-ul"><ul></ul></div></div><div class="dd-s-b dd-s-b-y dd-trans"><div class="dd-s-b-ul"><ul></ul></div></div><div class="dd-s-b dd-s-b-s-y dd-trans"><div class="dd-s-b-ul"><ul></ul></div></div><div class="dd-s-b-s"><i class="dd-icon-close" ></i></div><div class="dd-b dd-sub-y"><div class="dd-ul"><a class="dd-n dd-n-left"><i class="dd-icon-left" ></i></a><a class="dd-n dd-n-right"><i class="dd-icon-right" ></i></a><ul></ul></div></div><div class="dd-s"><a><i class="dd-icon-check" ></i></a></div></div></div></div>';d("body").append(u);var c=d(this),f=d("#dd-w-"+l),b=function(d){return!(d%4||!(d%100)&&d%400)},m=function(d){return 10>d?"0"+d:d},p=d.extend({animate:!0,init_animation:"fadein",format:"m/d/Y",lang:"en",lock:!1,maxYear:t,minYear:1970,yearsRange:10,dropPrimaryColor:"#01CEFF",dropTextColor:"#333333",dropBackgroundColor:"#FFFFFF",dropBorder:"1px solid #08C",dropBorderRadius:8,dropShadow:"0 0 10px 0 rgba(0, 136, 204, 0.45)",dropWidth:124,dropTextWeight:"bold"},a),h=null,v=!1,g=function(d,a){var i=!1;"#"==d[0]&&(d=d.slice(1),i=!0);var s=parseInt(d,16),e=(s>>16)+a;e>255?e=255:0>e&&(e=0);var r=(s>>8&255)+a;r>255?r=255:0>r&&(r=0);var t=(255&s)+a;return t>255?t=255:0>t&&(t=0),(i?"#":"")+(t|r<<8|e<<16).toString(16)};switch(d("<style>#dd-w-"+l+" { font-weight: "+p.dropTextWeight+"; } #dd-w-"+l+" .dd-w-c,#dd-w-"+l+" .dd-ul li,#dd-w-"+l+" .dd-s-b-ul ul { width:"+p.dropWidth+"px; } #dd-w-"+l+" .dd-w-c{color:"+p.dropTextColor+";background:"+p.dropBackgroundColor+";border:"+p.dropBorder+";box-shadow:"+p.dropShadow+";border-radius:"+p.dropBorderRadius+"px}#dd-w-"+l+" .dd-w-c,#dd-w-"+l+" .dd-s-b{background:"+p.dropBackgroundColor+"}#dd-w-"+l+" .dd-sun,#dd-w-"+l+" .dd-s-b-ul li.dd-on{color:"+p.dropPrimaryColor+"}#dd-w-"+l+" .dd-c .dd-s,#dd-w-"+l+" .dd-s-b-s,#dd-w-"+l+" .dd-s-b-sub-y,#dd-w-"+l+" .dd-sub-y{background:"+p.dropPrimaryColor+";color:"+p.dropBackgroundColor+"}#dd-w-"+l+" .dd-c .dd-s a,#dd-w-"+l+" .dd-c .dd-s a:hover{color:"+p.dropBackgroundColor+"}#dd-w-"+l+" .dd-c:after{border-left:"+p.dropBorder+";border-top:"+p.dropBorder+"}#dd-w-"+l+".dd-bottom .dd-c:after{background:"+p.dropBackgroundColor+"}#dd-w-"+l+".dd-top .dd-c:after{background:"+p.dropPrimaryColor+"}#dd-w-"+l+" .dd-n,#dd-w-"+l+" .dd-sun{color:"+p.dropPrimaryColor+"}#dd-w-"+l+" .dd-sub-y .dd-n{color:"+p.dropBackgroundColor+"} #dd-w-"+l+" .dd-c .dd-s:hover,#dd-w-"+l+" .dd-s-b-s:hover { background:"+g(p.dropPrimaryColor,-20)+"; }</style>").appendTo("head"),p.lang){case"ar":var y=["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],k=["الأحد","الإثنين","الثلثاء","الأربعاء","الخميس","الجمعة","السبت"];break;case"it":var y=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],k=["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"];break;case"hu":var y=["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"],k=["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"];break;case"gr":var y=["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],k=["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"];break;case"es":var y=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],k=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];break;case"da":var y=["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],k=["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"];break;case"de":var y=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],k=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];break;case"nl":var y=["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],k=["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"];break;case"fr":var y=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],k=["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];break;case"pl":var y=["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"],k=["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"];break;case"pt":var y=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],k=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];break;case"si":var y=["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"],k=["nedelja","ponedeljek","torek","sreda","četrtek","petek","sobota"];break;case"uk":var y=["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"],k=["неділя","понеділок","вівторок","середа","четвер","п'ятниця","субота"];break;case"ru":var y=["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],k=["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"];break;case"tr":var y=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],k=["Pazar","Pazartesi","Sali","Çarşamba","Perşembe","Cuma","Cumartesi"];break;case"ko":var y=["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],k=["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];break;case"fi":var y=["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],k=["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"];break;default:var y=["January","February","March","April","May","June","July","August","September","October","November","December"],k=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}var w=function(){f.find(".dd-d li,.dd-s-b li").show(),b(e)&&2==i?(f.find(".dd-d ul").width(29*p.dropWidth),(30==s||31==s)&&(s=29),f.find("li[data-id=30],li[data-id=31]").hide()):b(e)||2!=i?4==i||6==i||9==i||11==i?(f.find(".dd-d ul").width(30*p.dropWidth),31==s&&(s=30),f.find("li[data-id=31]").hide()):f.find(".dd-d ul").width(31*p.dropWidth):(f.find(".dd-d ul").width(28*p.dropWidth),(29==s||30==s||31==s)&&(s=28),f.find("li[data-id=29],li[data-id=30],li[data-id=31]").hide()),f.find(".dd-d li").each(function(a,s){var r=d(this).attr("data-id"),r=new Date(i+"/"+r+"/"+e),r=r.getDay();0==r||6==r?d(this).addClass("dd-sun"):d(this).removeClass("dd-sun"),d(this).find("span").html(k[r])}),f.find(".dd-s-b-d li").each(function(a,s){var r=d(this).attr("data-id"),r=new Date(i+"/"+r+"/"+e),r=r.getDay();0==r||6==r?d(this).addClass("dd-sun"):d(this).removeClass("dd-sun"),d(this).find("span").html(k[r].substr(0,3))}),f.find(".dd-s-b li").removeClass("dd-on"),f.find('.dd-s-b-d li[data-id="'+s+'"],.dd-s-b-m li[data-id="'+i+'"],.dd-s-b-s-y li[data-id="'+e+'"],.dd-s-b-y li[data-id="'+r+'"]').addClass("dd-on"),p.animate?f.hasClass("dd-init")?(f.find(".dd-m .dd-ul").animate({scrollLeft:f.find('.dd-m li[data-id="'+i+'"]').index()*p.dropWidth},1200,"swing"),setTimeout(function(){f.find(".dd-d .dd-ul").animate({scrollLeft:f.find('.dd-d li[data-id="'+s+'"]').index()*p.dropWidth},1200,"swing"),setTimeout(function(){f.find(".dd-y .dd-ul").animate({scrollLeft:f.find('.dd-y li[data-id="'+e+'"]').index()*p.dropWidth},1200,"swing",function(){v=!0,f.removeClass("dd-init")})},200)},400)):(f.find(".dd-d .dd-ul").stop().animate({scrollLeft:f.find('.dd-d li[data-id="'+s+'"]').index()*p.dropWidth},260),f.find(".dd-m .dd-ul").stop().animate({scrollLeft:f.find('.dd-m li[data-id="'+i+'"]').index()*p.dropWidth},260),f.find(".dd-y .dd-ul").stop().animate({scrollLeft:f.find('.dd-y li[data-id="'+e+'"]').index()*p.dropWidth},260),f.find(".dd-sub-y .dd-ul").stop().animate({scrollLeft:f.find('.dd-sub-y li[data-id="'+r+'"]').index()*p.dropWidth},260)):(setTimeout(function(){f.find(".dd-d .dd-ul").scrollLeft(f.find('.dd-d li[data-id="'+s+'"]').index()*p.dropWidth),f.find(".dd-m .dd-ul").scrollLeft(f.find('.dd-m li[data-id="'+i+'"]').index()*p.dropWidth),f.find(".dd-y .dd-ul").scrollLeft(f.find('.dd-y li[data-id="'+e+'"]').index()*p.dropWidth),f.find(".dd-sub-y .dd-ul").scrollLeft(f.find('.dd-sub-y li[data-id="'+r+'"]').index()*p.dropWidth)},1),f.hasClass("dd-init")&&(f.removeClass("dd-init"),v=!0)),D(r)},C=function(){f.addClass("dd-bottom"),f.find(".dd-c").css({top:c.offset().top+c.innerHeight()-6,left:c.offset().left+(c.innerWidth()/2-p.dropWidth/2)}).addClass("dd-"+p.init_animation)},M=function(){f.find(".dd-c").addClass("dd-alert").removeClass("dd-"+p.init_animation),setTimeout(function(){f.find(".dd-c").removeClass("dd-alert")},500)},x=function(){if(p.lock){var d=Date.parse(t+"-"+(o+1)+"-"+n)/1e3,a=Date.parse(e+"-"+i+"-"+s)/1e3;if("from"==p.lock){if(d>a)return M(),!1}else if(a>d)return M(),!1}var r=new Date(i+"/"+s+"/"+e),r=r.getDay(),l=p.format.replace(/\b(d)\b/g,m(s)).replace(/\b(m)\b/g,m(i)).replace(/\b(Y)\b/g,e).replace(/\b(D)\b/g,k[r].substr(0,3)).replace(/\b(l)\b/g,k[r]).replace(/\b(F)\b/g,y[i-1]).replace(/\b(M)\b/g,y[i-1].substr(0,3)).replace(/\b(n)\b/g,i).replace(/\b(j)\b/g,s);c.val(l),f.find(".dd-c").addClass("dd-fadeout").removeClass("dd-"+p.init_animation),h=setTimeout(function(){f.hide(),f.find(".dd-c").removeClass("dd-fadeout")},400),c.change()},D=function(a){f.find(".dd-s-b-s-y ul").empty();var i=parseInt(a),s=i+(p.yearsRange-1);s>p.maxYear&&(s=p.maxYear);for(var t=i;s>=t;t++){if(t%p.yearsRange==0)var n=t;f.find(".dd-s-b-s-y ul").append('<li data-id="'+t+'" data-filter="'+n+'">'+t+"</li>")}f.find(".dd-s-b-s-y ul").append('<div class="dd-clear"></div>'),r=parseInt(a),f.find(".dd-sub-y .dd-ul").scrollLeft(f.find('.dd-sub-y li[data-id="'+r+'"]').index()*p.dropWidth),f.find(".dd-s-b-s-y li").each(function(a,i){d(this).click(function(){f.find(".dd-s-b-s-y li").removeClass("dd-on"),d(this).addClass("dd-on"),e=parseInt(d(this).attr("data-id")),f.find(".dd-s-b-y,.dd-s-b-s-y").removeClass("dd-show"),f.find(".dd-s-b-s,.dd-sub-y").hide(),w()})})},j=function(){f.find(".dd-s-b").each(function(a,e){var r=d(this),t=0;if(r.hasClass("dd-s-b-m")||r.hasClass("dd-s-b-d")){if(r.hasClass("dd-s-b-m"))for(var n=12,o=t;n>o;o++)r.find("ul").append('<li data-id="'+(o+1)+'">'+y[o].substr(0,3)+"<span>"+m(o+1)+"</span></li>");if(r.hasClass("dd-s-b-d"))for(var n=31,o=t;n>o;o++)r.find("ul").append('<li data-id="'+(o+1)+'">'+m(o+1)+"<span></span></li>")}if(r.hasClass("dd-s-b-y"))for(var o=p.minYear;o<=p.maxYear;o++)o%p.yearsRange==0&&r.find("ul").append('<li data-id="'+o+'">'+o+"</li>");r.find("ul").append('<div class="dd-clear"></div>'),r.find("ul li").click(function(){(r.hasClass("dd-s-b-m")||r.hasClass("dd-s-b-d"))&&(r.hasClass("dd-s-b-m")&&(i=parseInt(d(this).attr("data-id"))),r.hasClass("dd-s-b-d")&&(s=parseInt(d(this).attr("data-id"))),w(),r.removeClass("dd-show"),f.find(".dd-s-b-s").hide()),r.hasClass("dd-s-b-y")&&(f.find(".dd-sub-y").show(),D(d(this).attr("data-id")),f.find(".dd-s-b-s-y").addClass("dd-show"))});var l=0,u=!1;r.on("mousewheel DOMMouseScroll",function(d){u=!0,(d.originalEvent.wheelDeltaY<0||d.originalEvent.detail>0)&&(l=r.scrollTop()+100),(d.originalEvent.wheelDeltaY>0||d.originalEvent.detail<0)&&(l=r.scrollTop()-100),r.stop().animate({scrollTop:l},600,"_dd_easing",function(){u=!1})}).on("scroll",function(){u||(l=r.scrollTop())})}),f.find(".dd-b").each(function(a,t){var n,o=d(this),l=0;if(o.hasClass("dd-m")){for(var u=0;12>u;u++)o.find("ul").append('<li data-id="'+(u+1)+'">'+y[u].substr(0,3)+"</li>");o.find("li").click(function(){return"m"==p.format||"n"==p.format||"F"==p.format||"M"==p.format?!1:void f.find(".dd-s-b-m").addClass("dd-show")})}if(o.hasClass("dd-d")){for(var u=1;31>=u;u++)o.find("ul").append('<li data-id="'+u+'"><strong>'+m(u)+"</strong><br><span></span></li>");o.find("li").click(function(){f.find(".dd-s-b-d").addClass("dd-show")})}if(o.hasClass("dd-y")){for(var u=p.minYear;u<=p.maxYear;u++){var c;u%p.yearsRange==0&&(c='data-filter="'+u+'"'),o.find("ul").append('<li data-id="'+u+'" '+c+">"+u+"</li>")}o.find("li").click(function(){return"Y"==p.format?!1:void f.find(".dd-s-b-y").addClass("dd-show")})}if(o.hasClass("dd-sub-y"))for(var u=p.minYear;u<=p.maxYear;u++)u%p.yearsRange==0&&o.find("ul").append('<li data-id="'+u+'">'+u+"</li>");o.find("ul").width(o.find("li").length*p.dropWidth),o.find(".dd-n").click(function(){clearInterval(n);var a,t,l;o.hasClass("dd-y")&&(t=e),o.hasClass("dd-m")&&(t=i),o.hasClass("dd-d")&&(t=s),o.hasClass("dd-sub-y")&&(t=r),d(this).hasClass("dd-n-left")?(a=o.find('li[data-id="'+t+'"]').prev("li"),l=a.length&&a.is(":visible")?parseInt(a.attr("data-id")):parseInt(o.find("li:visible:last").attr("data-id"))):(a=o.find('li[data-id="'+t+'"]').next("li"),l=a.length&&a.is(":visible")?parseInt(a.attr("data-id")):parseInt(o.find("li:first").attr("data-id"))),o.hasClass("dd-y")&&(e=l),o.hasClass("dd-m")&&(i=l),o.hasClass("dd-d")&&(s=l),o.hasClass("dd-sub-y")&&(r=l),w()});var b=function(){if(v){l=Math.round(o.find(".dd-ul").scrollLeft()/p.dropWidth);var d=parseInt(o.find("li").eq(l).attr("data-id"));o.hasClass("dd-y")&&(e=d),o.hasClass("dd-m")&&(i=d),o.hasClass("dd-d")&&(s=d),o.hasClass("dd-sub-y")&&(r=d)}};o.find(".dd-ul").on("scroll",function(){b()});var h=!1;o.find(".dd-ul").on("mousedown touchstart",function(){h||(h=!0),clearInterval(n),d(window).on("mouseup touchend touchmove",function(){h&&(clearInterval(n),n=setTimeout(function(){w(),h=!1},780))})}),"Y"==p.format&&f.find(".dd-m,.dd-d").hide(),("m"==p.format||"n"==p.format||"F"==p.format||"M"==p.format)&&f.find(".dd-y,.dd-d").hide()}),f.find(".dd-b li").click(function(){return"m"==p.format||"n"==p.format||"F"==p.format||"M"==p.format||"Y"==p.format?!1:void f.find(".dd-s-b-s").show()}),f.find(".dd-s-b-s").click(function(){f.find(".dd-s-b").removeClass("dd-show"),f.find(".dd-s-b-s").hide()}),f.find(".dd-s").click(function(){x()}),f.find(".dd-o").click(function(){f.find(".dd-c").addClass("dd-fadeout").removeClass("dd-"+p.init_animation),h=setTimeout(function(){f.hide(),f.find(".dd-c").removeClass("dd-fadeout")},400)}),w()},z=function(){clearInterval(h),f.hasClass("dd-init")&&(c.attr({readonly:"readonly"}).blur(),i=o+1,s=n,e=t,parseInt(c.attr("data-d"))&&parseInt(c.attr("data-d"))<=31&&(s=parseInt(c.attr("data-d"))),parseInt(c.attr("data-m"))&&parseInt(c.attr("data-m"))<=11&&(i=parseInt(c.attr("data-m"))+1),parseInt(c.attr("data-y"))&&4==c.attr("data-y").length&&(e=parseInt(c.attr("data-y"))),e>p.maxYear&&(p.maxYear=e),e<p.minYear&&(p.minYear=e),j()),f.show(),C()};c.click(function(){z()}),c.bind("focusin focus",function(d){d.preventDefault()}),d(window).resize(function(){C()})}})}}(jQuery);
!function(t){t.fn.timeDropper=function(e,d){return t(this).each(function(){var d,n=t(this),o=!1,a=!1,i=function(t){return 10>t?"0"+t:t},r=t(".td-clock").length,s=null,l=t.extend({format:"h:mm a",autoswitch:!1,meridians:!1,mousewheel:!1,setCurrentTime:!0,init_animation:"fadein",primaryColor:"#1977CC",borderColor:"#1977CC",backgroundColor:"#FFF",textColor:"#555"},e);n.prop({readonly:!0}).addClass("td-input"),t("body").append('<div class="td-wrap td-n2" id="td-clock-'+r+'"><div class="td-overlay"></div><div class="td-clock td-init"><div class="td-deg td-n"><div class="td-select"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 35.4" enable-background="new 0 0 100 35.4" xml:space="preserve"><g><path fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M98.1,33C85.4,21.5,68.5,14.5,50,14.5S14.6,21.5,1.9,33"/><line fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1.9" y1="33" x2="1.9" y2="28.6"/><line fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1.9" y1="33" x2="6.3" y2="33"/><line fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="98.1" y1="33" x2="93.7" y2="33"/><line fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="98.1" y1="33" x2="98.1" y2="28.6"/></g></svg></div></div><div class="td-medirian"><span class="td-icon-am td-n">AM</span><span class="td-icon-pm td-n">PM</span></div><div class="td-lancette"><div></div><div></div></div><div class="td-time"><span class="on"></span>:<span></span></div></div></div>'),t("head").append("<style>#td-clock-"+r+" .td-clock {color:"+l.textColor+";background: "+l.backgroundColor+"; box-shadow: 0 0 0 1px "+l.borderColor+",0 0 0 8px rgba(0, 0, 0, 0.05); } #td-clock-"+r+" .td-clock .td-time span.on { color:"+l.primaryColor+"} #td-clock-"+r+" .td-clock:before { border-color: "+l.borderColor+"} #td-clock-"+r+" .td-select:after { box-shadow: 0 0 0 1px "+l.borderColor+" } #td-clock-"+r+" .td-clock:before,#td-clock-"+r+" .td-select:after {background: "+l.backgroundColor+";} #td-clock-"+r+" .td-lancette {border: 2px solid "+l.primaryColor+"; opacity:0.1}#td-clock-"+r+" .td-lancette div:after { background: "+l.primaryColor+";} #td-clock-"+r+" .td-bulletpoint div:after { background:"+l.primaryColor+"; opacity:0.1}</style>");var c=t("#td-clock-"+r),f=c.find(".td-overlay"),u=c.find(".td-clock");u.find("svg").attr("style","stroke:"+l.borderColor);var v=-1,m=0,p=0,h=function(){var t=u.find(".td-time span.on"),e=parseInt(t.attr("data-id"));0==t.index()?deg=Math.round(360*e/23):deg=Math.round(360*e/59),v=-1,m=deg,p=deg},g=function(t){var e=u.find(".td-time span.on"),d=e.attr("data-id");d||(d=0);var o=Math.round(23*t/360),a=Math.round(59*t/360);if(0==e.index()?(e.attr("data-id",i(o)),l.meridians&&(o>=12&&24>o?(u.find(".td-icon-pm").addClass("td-on"),u.find(".td-icon-am").removeClass("td-on")):(u.find(".td-icon-am").addClass("td-on"),u.find(".td-icon-pm").removeClass("td-on")),o>12&&(o-=12),0==o&&(o=12)),e.text(i(o))):e.attr("data-id",i(a)).text(i(a)),p=t,u.find(".td-deg").css("transform","rotate("+t+"deg)"),0==e.index()){var r=Math.round(360*o/12);u.find(".td-lancette div:last").css("transform","rotate("+r+"deg)")}else u.find(".td-lancette div:first").css("transform","rotate("+t+"deg)");var s=u.find(".td-time span:first").attr("data-id"),c=u.find(".td-time span:last").attr("data-id");if(Math.round(s)>=12&&Math.round(s)<24)var o=Math.round(s)-12,f="pm",v="PM";else var o=Math.round(s),f="am",v="AM";0==o&&(o=12);var m=l.format.replace(/\b(H)\b/g,Math.round(s)).replace(/\b(h)\b/g,Math.round(o)).replace(/\b(m)\b/g,Math.round(c)).replace(/\b(HH)\b/g,i(Math.round(s))).replace(/\b(hh)\b/g,i(Math.round(o))).replace(/\b(mm)\b/g,i(Math.round(c))).replace(/\b(a)\b/g,f).replace(/\b(A)\b/g,v);n.val(m)};/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(a=!0),u.find(".td-time span").on("click",function(e){var d=t(this);u.find(".td-time span").removeClass("on"),d.addClass("on");var n=parseInt(d.attr("data-id"));0==d.index()?deg=Math.round(360*n/23):deg=Math.round(360*n/59),v=-1,m=deg,p=deg,g(deg)}),u.find(".td-deg").on("touchstart mousedown",function(e){h(),e.preventDefault(),clearInterval(d),u.find(".td-deg").removeClass("td-n"),u.find(".td-select").removeClass("td-rubber"),o=!0;var n,i,r,s,l=u.offset(),c={y:l.top+u.height()/2,x:l.left+u.width()/2},f=180/Math.PI;u.removeClass("td-rubber"),t(window).on("touchmove mousemove",function(t){1==o&&(a?move=t.originalEvent.touches[0]:move=t,n=c.y-move.pageY,i=c.x-move.pageX,r=Math.atan2(n,i)*f,0>r&&(r=360+r),-1==v&&(v=r),s=Math.floor(r-v+m),0>s?s=360+s:s>360&&(s%=360),g(s))})}),l.mousewheel&&u.on("mousewheel",function(t){t.preventDefault(),u.find(".td-deg").removeClass("td-n"),t.originalEvent.wheelDelta>0?360>=p&&(t.originalEvent.wheelDelta<=120?p++:t.originalEvent.wheelDelta>120&&(p+=20),p>360&&(p=0)):p>=0&&(t.originalEvent.wheelDelta>=-120?p--:t.originalEvent.wheelDelta<-120&&(p-=20),0>p&&(p=360)),v=-1,m=p,g(p)}),t(document).on("touchend mouseup",function(){o&&(o=!1,l.autoswitch&&(u.find(".td-time span").toggleClass("on"),u.find(".td-time span.on").click()),u.find(".td-deg").addClass("td-n"),u.find(".td-select").addClass("td-rubber"))});var k=function(t){var e,d,o=new Date,a=u.find(".td-time span:first"),r=u.find(".td-time span:last");if(n.val().length&&!l.setCurrentTime){var s,c=/\d+/g,f=n.val().split(":");f?(e=f[0].match(c),d=f[1].match(c),-1!=n.val().indexOf("am")||-1!=n.val().indexOf("AM")||-1!=n.val().indexOf("pm")||-1!=n.val().indexOf("PM")?(s=-1!=n.val().indexOf("am")||-1!=n.val().indexOf("AM")?!0:!1,s?12==e&&(e=0):13>e&&(e=parseInt(e)+12,24==e&&(e=0))):24==e&&(e=0)):(e=i(parseInt(a.text())?a.text():o.getHours()),d=i(parseInt(r.text())?r.text():o.getMinutes()))}else e=i(parseInt(a.text())?a.text():o.getHours()),d=i(parseInt(r.text())?r.text():o.getMinutes());a.attr("data-id",e).text(e),r.attr("data-id",d).text(d),m=Math.round(360*e/23),u.find(".td-lancette div:first").css("transform","rotate("+Math.round(360*d/59)+"deg)"),g(m),p=m,v=-1};k(),n.focus(function(t){t.preventDefault(),n.blur()}),n.click(function(t){clearInterval(s),c.removeClass("td-fadeout"),c.addClass("td-show").addClass("td-"+l.init_animation),u.css({top:n.offset().top+(n.outerHeight()-8),left:n.offset().left+n.outerWidth()/2-u.outerWidth()/2}),u.hasClass("td-init")&&(d=setInterval(function(){u.find(".td-select").addClass("td-alert"),setTimeout(function(){u.find(".td-select").removeClass("td-alert")},1e3)},2e3),u.removeClass("td-init"))}),f.click(function(){c.addClass("td-fadeout").removeClass("td-"+l.init_animation),s=setTimeout(function(){c.removeClass("td-show")},300)}),t(window).on("resize",function(){h(),u.css({top:n.offset().top+(n.outerHeight()-8),left:n.offset().left+n.outerWidth()/2-u.outerWidth()/2})})})}}(jQuery);
/*
 * easy-autocomplete
 * jQuery plugin for autocompletion
 * 
 * @author Łukasz Pawełczak (http://github.com/pawelczak)
 * @version 1.3.5
 * Copyright  License: 
 */

var EasyAutocomplete=function(a){return a.Configuration=function(a){function b(){if("xml"===a.dataType&&(a.getValue||(a.getValue=function(a){return $(a).text()}),a.list||(a.list={}),a.list.sort||(a.list.sort={}),a.list.sort.method=function(b,c){return b=a.getValue(b),c=a.getValue(c),c>b?-1:b>c?1:0},a.list.match||(a.list.match={}),a.list.match.method=function(a,b){return a.search(b)>-1}),void 0!==a.categories&&a.categories instanceof Array){for(var b=[],c=0,d=a.categories.length;d>c;c+=1){var e=a.categories[c];for(var f in h.categories[0])void 0===e[f]&&(e[f]=h.categories[0][f]);b.push(e)}a.categories=b}}function c(){function b(a,c){var d=a||{};for(var e in a)void 0!==c[e]&&null!==c[e]&&("object"!=typeof c[e]||c[e]instanceof Array?d[e]=c[e]:b(a[e],c[e]));return void 0!==c.data&&null!==c.data&&"object"==typeof c.data&&(d.data=c.data),d}h=b(h,a)}function d(){if("list-required"!==h.url&&"function"!=typeof h.url){var b=h.url;h.url=function(){return b}}if(void 0!==h.ajaxSettings.url&&"function"!=typeof h.ajaxSettings.url){var b=h.ajaxSettings.url;h.ajaxSettings.url=function(){return b}}if("string"==typeof h.listLocation){var c=h.listLocation;"XML"===h.dataType.toUpperCase()?h.listLocation=function(a){return $(a).find(c)}:h.listLocation=function(a){return a[c]}}if("string"==typeof h.getValue){var d=h.getValue;h.getValue=function(a){return a[d]}}void 0!==a.categories&&(h.categoriesAssigned=!0)}function e(){void 0!==a.ajaxSettings&&"object"==typeof a.ajaxSettings?h.ajaxSettings=a.ajaxSettings:h.ajaxSettings={}}function f(a){return void 0!==h[a]&&null!==h[a]}function g(a,b){function c(b,d){for(var e in d)void 0===b[e]&&a.log("Property '"+e+"' does not exist in EasyAutocomplete options API."),"object"==typeof b[e]&&-1===$.inArray(e,i)&&c(b[e],d[e])}c(h,b)}var h={data:"list-required",url:"list-required",dataType:"json",listLocation:function(a){return a},xmlElementName:"",getValue:function(a){return a},autocompleteOff:!0,placeholder:!1,ajaxCallback:function(){},matchResponseProperty:!1,list:{sort:{enabled:!1,method:function(a,b){return a=h.getValue(a),b=h.getValue(b),b>a?-1:a>b?1:0}},maxNumberOfElements:6,hideOnEmptyPhrase:!0,match:{enabled:!1,caseSensitive:!1,method:function(a,b){return a.search(b)>-1}},showAnimation:{type:"normal",time:400,callback:function(){}},hideAnimation:{type:"normal",time:400,callback:function(){}},onClickEvent:function(){},onSelectItemEvent:function(){},onLoadEvent:function(){},onChooseEvent:function(){},onKeyEnterEvent:function(){},onMouseOverEvent:function(){},onMouseOutEvent:function(){},onShowListEvent:function(){},onHideListEvent:function(){}},highlightPhrase:!0,theme:"",cssClasses:"",minCharNumber:0,requestDelay:0,adjustWidth:!0,ajaxSettings:{},preparePostData:function(a,b){return a},loggerEnabled:!0,template:"",categoriesAssigned:!1,categories:[{maxNumberOfElements:4}]},i=["ajaxSettings","template"];this.get=function(a){return h[a]},this.equals=function(a,b){return!(!f(a)||h[a]!==b)},this.checkDataUrlProperties=function(){return"list-required"!==h.url||"list-required"!==h.data},this.checkRequiredProperties=function(){for(var a in h)if("required"===h[a])return logger.error("Option "+a+" must be defined"),!1;return!0},this.printPropertiesThatDoesntExist=function(a,b){g(a,b)},b(),c(),h.loggerEnabled===!0&&g(console,a),e(),d()},a}(EasyAutocomplete||{}),EasyAutocomplete=function(a){return a.Logger=function(){this.error=function(a){console.log("ERROR: "+a)},this.warning=function(a){console.log("WARNING: "+a)}},a}(EasyAutocomplete||{}),EasyAutocomplete=function(a){return a.Constans=function(){var a={CONTAINER_CLASS:"easy-autocomplete-container",CONTAINER_ID:"eac-container-",WRAPPER_CSS_CLASS:"easy-autocomplete"};this.getValue=function(b){return a[b]}},a}(EasyAutocomplete||{}),EasyAutocomplete=function(a){return a.ListBuilderService=function(a,b){function c(b,c){function d(){var d,e={};return void 0!==b.xmlElementName&&(e.xmlElementName=b.xmlElementName),void 0!==b.listLocation?d=b.listLocation:void 0!==a.get("listLocation")&&(d=a.get("listLocation")),void 0!==d?"string"==typeof d?e.data=$(c).find(d):"function"==typeof d&&(e.data=d(c)):e.data=c,e}function e(){var a={};return void 0!==b.listLocation?"string"==typeof b.listLocation?a.data=c[b.listLocation]:"function"==typeof b.listLocation&&(a.data=b.listLocation(c)):a.data=c,a}var f={};if(f="XML"===a.get("dataType").toUpperCase()?d():e(),void 0!==b.header&&(f.header=b.header),void 0!==b.maxNumberOfElements&&(f.maxNumberOfElements=b.maxNumberOfElements),void 0!==a.get("list").maxNumberOfElements&&(f.maxListSize=a.get("list").maxNumberOfElements),void 0!==b.getValue)if("string"==typeof b.getValue){var g=b.getValue;f.getValue=function(a){return a[g]}}else"function"==typeof b.getValue&&(f.getValue=b.getValue);else f.getValue=a.get("getValue");return f}function d(b){var c=[];return void 0===b.xmlElementName&&(b.xmlElementName=a.get("xmlElementName")),$(b.data).find(b.xmlElementName).each(function(){c.push(this)}),c}this.init=function(b){var c=[],d={};return d.data=a.get("listLocation")(b),d.getValue=a.get("getValue"),d.maxListSize=a.get("list").maxNumberOfElements,c.push(d),c},this.updateCategories=function(b,d){if(a.get("categoriesAssigned")){b=[];for(var e=0;e<a.get("categories").length;e+=1){var f=c(a.get("categories")[e],d);b.push(f)}}return b},this.convertXml=function(b){if("XML"===a.get("dataType").toUpperCase())for(var c=0;c<b.length;c+=1)b[c].data=d(b[c]);return b},this.processData=function(c,d){for(var e=0,f=c.length;f>e;e+=1)c[e].data=b(a,c[e],d);return c},this.checkIfDataExists=function(a){for(var b=0,c=a.length;c>b;b+=1)if(void 0!==a[b].data&&a[b].data instanceof Array&&a[b].data.length>0)return!0;return!1}},a}(EasyAutocomplete||{}),EasyAutocomplete=function(a){return a.proccess=function(b,c,d){function e(a,c){var d=[],e="";if(b.get("list").match.enabled)for(var g=0,h=a.length;h>g;g+=1)e=b.get("getValue")(a[g]),f(e,c)&&d.push(a[g]);else d=a;return d}function f(a,c){return b.get("list").match.caseSensitive||("string"==typeof a&&(a=a.toLowerCase()),c=c.toLowerCase()),!!b.get("list").match.method(a,c)}function g(a){return void 0!==c.maxNumberOfElements&&a.length>c.maxNumberOfElements&&(a=a.slice(0,c.maxNumberOfElements)),a}function h(a){return b.get("list").sort.enabled&&a.sort(b.get("list").sort.method),a}a.proccess.match=f;var i=c.data,j=d;return i=e(i,j),i=g(i),i=h(i)},a}(EasyAutocomplete||{}),EasyAutocomplete=function(a){return a.Template=function(a){var b={basic:{type:"basic",method:function(a){return a},cssClass:""},description:{type:"description",fields:{description:"description"},method:function(a){return a+" - description"},cssClass:"eac-description"},iconLeft:{type:"iconLeft",fields:{icon:""},method:function(a){return a},cssClass:"eac-icon-left"},iconRight:{type:"iconRight",fields:{iconSrc:""},method:function(a){return a},cssClass:"eac-icon-right"},links:{type:"links",fields:{link:""},method:function(a){return a},cssClass:""},custom:{type:"custom",method:function(){},cssClass:""}},c=function(a){var c,d=a.fields;return"description"===a.type?(c=b.description.method,"string"==typeof d.description?c=function(a,b){return a+" - <span>"+b[d.description]+"</span>"}:"function"==typeof d.description&&(c=function(a,b){return a+" - <span>"+d.description(b)+"</span>"}),c):"iconRight"===a.type?("string"==typeof d.iconSrc?c=function(a,b){return a+"<img class='eac-icon' src='"+b[d.iconSrc]+"' />"}:"function"==typeof d.iconSrc&&(c=function(a,b){return a+"<img class='eac-icon' src='"+d.iconSrc(b)+"' />"}),c):"iconLeft"===a.type?("string"==typeof d.iconSrc?c=function(a,b){return"<img class='eac-icon' src='"+b[d.iconSrc]+"' />"+a}:"function"==typeof d.iconSrc&&(c=function(a,b){return"<img class='eac-icon' src='"+d.iconSrc(b)+"' />"+a}),c):"links"===a.type?("string"==typeof d.link?c=function(a,b){return"<a href='"+b[d.link]+"' >"+a+"</a>"}:"function"==typeof d.link&&(c=function(a,b){return"<a href='"+d.link(b)+"' >"+a+"</a>"}),c):"custom"===a.type?a.method:b.basic.method},d=function(a){return a&&a.type&&a.type&&b[a.type]?c(a):b.basic.method},e=function(a){var c=function(){return""};return a&&a.type&&a.type&&b[a.type]?function(){var c=b[a.type].cssClass;return function(){return c}}():c};this.getTemplateClass=e(a),this.build=d(a)},a}(EasyAutocomplete||{}),EasyAutocomplete=function(a){return a.main=function(b,c){function d(){return 0===t.length?void p.error("Input field doesn't exist."):o.checkDataUrlProperties()?o.checkRequiredProperties()?(e(),void g()):void p.error("Will not work without mentioned properties."):void p.error("One of options variables 'data' or 'url' must be defined.")}function e(){function a(){var a=$("<div>"),c=n.getValue("WRAPPER_CSS_CLASS");o.get("theme")&&""!==o.get("theme")&&(c+=" eac-"+o.get("theme")),o.get("cssClasses")&&""!==o.get("cssClasses")&&(c+=" "+o.get("cssClasses")),""!==q.getTemplateClass()&&(c+=" "+q.getTemplateClass()),a.addClass(c),t.wrap(a),o.get("adjustWidth")===!0&&b()}function b(){var a=t.outerWidth();t.parent().css("width",a)}function c(){t.unwrap()}function d(){var a=$("<div>").addClass(n.getValue("CONTAINER_CLASS"));a.attr("id",f()).prepend($("<ul>")),function(){a.on("show.eac",function(){switch(o.get("list").showAnimation.type){case"slide":var b=o.get("list").showAnimation.time,c=o.get("list").showAnimation.callback;a.find("ul").slideDown(b,c);break;case"fade":var b=o.get("list").showAnimation.time,c=o.get("list").showAnimation.callback;a.find("ul").fadeIn(b),c;break;default:a.find("ul").show()}o.get("list").onShowListEvent()}).on("hide.eac",function(){switch(o.get("list").hideAnimation.type){case"slide":var b=o.get("list").hideAnimation.time,c=o.get("list").hideAnimation.callback;a.find("ul").slideUp(b,c);break;case"fade":var b=o.get("list").hideAnimation.time,c=o.get("list").hideAnimation.callback;a.find("ul").fadeOut(b,c);break;default:a.find("ul").hide()}o.get("list").onHideListEvent()}).on("selectElement.eac",function(){a.find("ul li").removeClass("selected"),a.find("ul li").eq(w).addClass("selected"),o.get("list").onSelectItemEvent()}).on("loadElements.eac",function(b,c,d){var e="",f=a.find("ul");f.empty().detach(),v=[];for(var h=0,i=0,k=c.length;k>i;i+=1){var l=c[i].data;if(0!==l.length){void 0!==c[i].header&&c[i].header.length>0&&f.append("<div class='eac-category' >"+c[i].header+"</div>");for(var m=0,n=l.length;n>m&&h<c[i].maxListSize;m+=1)e=$("<li><div class='eac-item'></div></li>"),function(){var a=m,b=h,f=c[i].getValue(l[a]);e.find(" > div").on("click",function(){t.val(f).trigger("change"),w=b,j(b),o.get("list").onClickEvent(),o.get("list").onChooseEvent()}).mouseover(function(){w=b,j(b),o.get("list").onMouseOverEvent()}).mouseout(function(){o.get("list").onMouseOutEvent()}).html(q.build(g(f,d),l[a]))}(),f.append(e),v.push(l[m]),h+=1}}a.append(f),o.get("list").onLoadEvent()})}(),t.after(a)}function e(){t.next("."+n.getValue("CONTAINER_CLASS")).remove()}function g(a,b){return o.get("highlightPhrase")&&""!==b?i(a,b):a}function h(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function i(a,b){var c=h(b);return(a+"").replace(new RegExp("("+c+")","gi"),"<b>$1</b>")}t.parent().hasClass(n.getValue("WRAPPER_CSS_CLASS"))&&(e(),c()),a(),d(),u=$("#"+f()),o.get("placeholder")&&t.attr("placeholder",o.get("placeholder"))}function f(){var a=t.attr("id");return a=n.getValue("CONTAINER_ID")+a}function g(){function a(){s("autocompleteOff",!0)&&n(),b(),c(),d(),e(),f(),g()}function b(){t.focusout(function(){var a,b=t.val();o.get("list").match.caseSensitive||(b=b.toLowerCase());for(var c=0,d=v.length;d>c;c+=1)if(a=o.get("getValue")(v[c]),o.get("list").match.caseSensitive||(a=a.toLowerCase()),a===b)return w=c,void j(w)})}function c(){t.off("keyup").keyup(function(a){function b(a){function b(){var a={},b=o.get("ajaxSettings")||{};for(var c in b)a[c]=b[c];return a}function c(a,b){return o.get("matchResponseProperty")!==!1?"string"==typeof o.get("matchResponseProperty")?b[o.get("matchResponseProperty")]===a:"function"==typeof o.get("matchResponseProperty")?o.get("matchResponseProperty")(b)===a:!0:!0}if(!(a.length<o.get("minCharNumber"))){if("list-required"!==o.get("data")){var d=o.get("data"),e=r.init(d);e=r.updateCategories(e,d),e=r.processData(e,a),k(e,a),t.parent().find("li").length>0?h():i()}var f=b();void 0!==f.url&&""!==f.url||(f.url=o.get("url")),void 0!==f.dataType&&""!==f.dataType||(f.dataType=o.get("dataType")),void 0!==f.url&&"list-required"!==f.url&&(f.url=f.url(a),f.data=o.get("preparePostData")(f.data,a),$.ajax(f).done(function(b){var d=r.init(b);d=r.updateCategories(d,b),d=r.convertXml(d),c(a,b)&&(d=r.processData(d,a),k(d,a)),r.checkIfDataExists(d)&&t.parent().find("li").length>0?h():i(),o.get("ajaxCallback")()}).fail(function(){p.warning("Fail to load response data")}).always(function(){}))}}switch(a.keyCode){case 27:i(),l();break;case 38:a.preventDefault(),v.length>0&&w>0&&(w-=1,t.val(o.get("getValue")(v[w])),j(w));break;case 40:a.preventDefault(),v.length>0&&w<v.length-1&&(w+=1,t.val(o.get("getValue")(v[w])),j(w));break;default:if(a.keyCode>40||8===a.keyCode){var c=t.val();o.get("list").hideOnEmptyPhrase!==!0||8!==a.keyCode||""!==c?o.get("requestDelay")>0?(void 0!==m&&clearTimeout(m),m=setTimeout(function(){b(c)},o.get("requestDelay"))):b(c):i()}}})}function d(){t.on("keydown",function(a){a=a||window.event;var b=a.keyCode;return 38===b?(suppressKeypress=!0,!1):void 0}).keydown(function(a){13===a.keyCode&&w>-1&&(t.val(o.get("getValue")(v[w])),o.get("list").onKeyEnterEvent(),o.get("list").onChooseEvent(),w=-1,i(),a.preventDefault())})}function e(){t.off("keypress")}function f(){t.focus(function(){""!==t.val()&&v.length>0&&(w=-1,h())})}function g(){t.blur(function(){setTimeout(function(){w=-1,i()},250)})}function n(){t.attr("autocomplete","off")}a()}function h(){u.trigger("show.eac")}function i(){u.trigger("hide.eac")}function j(a){u.trigger("selectElement.eac",a)}function k(a,b){u.trigger("loadElements.eac",[a,b])}function l(){t.trigger("blur")}var m,n=new a.Constans,o=new a.Configuration(c),p=new a.Logger,q=new a.Template(c.template),r=new a.ListBuilderService(o,a.proccess),s=o.equals,t=b,u="",v=[],w=-1;a.consts=n,this.getConstants=function(){return n},this.getConfiguration=function(){return o},this.getContainer=function(){return u},this.getSelectedItemIndex=function(){return w},this.getItems=function(){return v},this.getItemData=function(a){return v.length<a||void 0===v[a]?-1:v[a]},this.getSelectedItemData=function(){return this.getItemData(w)},this.build=function(){e()},this.init=function(){d()}},a.eacHandles=[],a.getHandle=function(b){return a.eacHandles[b]},a.inputHasId=function(a){return void 0!==$(a).attr("id")&&$(a).attr("id").length>0},a.assignRandomId=function(b){var c="";do c="eac-"+Math.floor(1e4*Math.random());while(0!==$("#"+c).length);elementId=a.consts.getValue("CONTAINER_ID")+c,$(b).attr("id",c)},a.setHandle=function(b,c){a.eacHandles[c]=b},a}(EasyAutocomplete||{});!function(a){a.fn.easyAutocomplete=function(b){return this.each(function(){var c=a(this),d=new EasyAutocomplete.main(c,b);EasyAutocomplete.inputHasId(c)||EasyAutocomplete.assignRandomId(c),d.init(),EasyAutocomplete.setHandle(d,c.attr("id"))})},a.fn.getSelectedItemIndex=function(){var b=a(this).attr("id");return void 0!==b?EasyAutocomplete.getHandle(b).getSelectedItemIndex():-1},a.fn.getItems=function(){var b=a(this).attr("id");return void 0!==b?EasyAutocomplete.getHandle(b).getItems():-1},a.fn.getItemData=function(b){var c=a(this).attr("id");return void 0!==c&&b>-1?EasyAutocomplete.getHandle(c).getItemData(b):-1},a.fn.getSelectedItemData=function(){var b=a(this).attr("id");return void 0!==b?EasyAutocomplete.getHandle(b).getSelectedItemData():-1}}(jQuery);
!function(a){var b=new Array,c=new Array;a.fn.doAutosize=function(b){var c=a(this).data("minwidth"),d=a(this).data("maxwidth"),e="",f=a(this),g=a("#"+a(this).data("tester_id"));if(e!==(e=f.val())){var h=e.replace(/&/g,"&amp;").replace(/\s/g," ").replace(/</g,"&lt;").replace(/>/g,"&gt;");g.html(h);var i=g.width(),j=i+b.comfortZone>=c?i+b.comfortZone:c,k=f.width(),l=k>j&&j>=c||j>c&&d>j;l&&f.width(j)}},a.fn.resetAutosize=function(b){var c=a(this).data("minwidth")||b.minInputWidth||a(this).width(),d=a(this).data("maxwidth")||b.maxInputWidth||a(this).closest(".tagsinput").width()-b.inputPadding,e=a(this),f=a("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:e.css("fontSize"),fontFamily:e.css("fontFamily"),fontWeight:e.css("fontWeight"),letterSpacing:e.css("letterSpacing"),whiteSpace:"nowrap"}),g=a(this).attr("id")+"_autosize_tester";!a("#"+g).length>0&&(f.attr("id",g),f.appendTo("body")),e.data("minwidth",c),e.data("maxwidth",d),e.data("tester_id",g),e.css("width",c)},a.fn.addTag=function(d,e){return e=jQuery.extend({focus:!1,callback:!0},e),this.each(function(){var f=a(this).attr("id"),g=a(this).val().split(b[f]);if(""==g[0]&&(g=new Array),d=jQuery.trim(d),e.unique){var h=a(this).tagExist(d);1==h&&a("#"+f+"_tag").addClass("not_valid")}else var h=!1;if(""!=d&&1!=h){if(a("<span>").addClass("tag").append(a("<span>").text(d).append("&nbsp;&nbsp;"),a("<a>",{href:"#",title:"Removing tag",text:"x"}).click(function(){return a("#"+f).removeTag(escape(d))})).insertBefore("#"+f+"_addTag"),g.push(d),a("#"+f+"_tag").val(""),e.focus?a("#"+f+"_tag").focus():a("#"+f+"_tag").blur(),a.fn.tagsInput.updateTagsField(this,g),e.callback&&c[f]&&c[f].onAddTag){var i=c[f].onAddTag;i.call(this,d)}if(c[f]&&c[f].onChange){var j=g.length,i=c[f].onChange;i.call(this,a(this),g[j-1])}}}),!1},a.fn.removeTag=function(d){return d=unescape(d),this.each(function(){var e=a(this).attr("id"),f=a(this).val().split(b[e]);for(a("#"+e+"_tagsinput .tag").remove(),str="",i=0;i<f.length;i++)f[i]!=d&&(str=str+b[e]+f[i]);if(a.fn.tagsInput.importTags(this,str),c[e]&&c[e].onRemoveTag){var g=c[e].onRemoveTag;g.call(this,d)}}),!1},a.fn.tagExist=function(c){var d=a(this).attr("id"),e=a(this).val().split(b[d]);return jQuery.inArray(c,e)>=0},a.fn.importTags=function(b){var c=a(this).attr("id");a("#"+c+"_tagsinput .tag").remove(),a.fn.tagsInput.importTags(this,b)},a.fn.tagsInput=function(e){var f=jQuery.extend({interactive:!0,defaultText:"add a tag",minChars:0,width:"300px",height:"100px",autocomplete:{selectFirst:!1},hide:!0,delimiter:",",unique:!0,removeWithBackspace:!0,placeholderColor:"#666666",autosize:!0,comfortZone:20,inputPadding:12},e),g=0;return this.each(function(){if("undefined"==typeof a(this).attr("data-tagsinput-init")){a(this).attr("data-tagsinput-init",!0),f.hide&&a(this).hide();var e=a(this).attr("id");(!e||b[a(this).attr("id")])&&(e=a(this).attr("id","tags"+(new Date).getTime()+g++).attr("id"));var h=jQuery.extend({pid:e,real_input:"#"+e,holder:"#"+e+"_tagsinput",input_wrapper:"#"+e+"_addTag",fake_input:"#"+e+"_tag"},f);b[e]=h.delimiter,(f.onAddTag||f.onRemoveTag||f.onChange)&&(c[e]=new Array,c[e].onAddTag=f.onAddTag,c[e].onRemoveTag=f.onRemoveTag,c[e].onChange=f.onChange);var i='<div id="'+e+'_tagsinput" class="tagsinput"><div id="'+e+'_addTag">';if(f.interactive&&(i=i+'<input id="'+e+'_tag" value="" data-default="'+f.defaultText+'" />'),i+='</div><div class="tags_clear"></div></div>',a(i).insertAfter(this),a(h.holder).css("width",f.width),a(h.holder).css("min-height",f.height),a(h.holder).css("height",f.height),""!=a(h.real_input).val()&&a.fn.tagsInput.importTags(a(h.real_input),a(h.real_input).val()),f.interactive){if(a(h.fake_input).val(a(h.fake_input).attr("data-default")),a(h.fake_input).css("color",f.placeholderColor),a(h.fake_input).resetAutosize(f),a(h.holder).bind("click",h,function(b){a(b.data.fake_input).focus()}),a(h.fake_input).bind("focus",h,function(b){a(b.data.fake_input).val()==a(b.data.fake_input).attr("data-default")&&a(b.data.fake_input).val(""),a(b.data.fake_input).css("color","#000000")}),void 0!=f.autocomplete_url){autocomplete_options={source:f.autocomplete_url};for(attrname in f.autocomplete)autocomplete_options[attrname]=f.autocomplete[attrname];void 0!==jQuery.Autocompleter?(a(h.fake_input).autocomplete(f.autocomplete_url,f.autocomplete),a(h.fake_input).bind("result",h,function(b,c,d){c&&a("#"+e).addTag(c[0]+"",{focus:!0,unique:f.unique})})):void 0!==jQuery.ui.autocomplete&&(a(h.fake_input).autocomplete(autocomplete_options),a(h.fake_input).bind("autocompleteselect",h,function(b,c){return a(b.data.real_input).addTag(c.item.value,{focus:!0,unique:f.unique}),!1}))}else a(h.fake_input).bind("blur",h,function(b){var c=a(this).attr("data-default");return""!=a(b.data.fake_input).val()&&a(b.data.fake_input).val()!=c?b.data.minChars<=a(b.data.fake_input).val().length&&(!b.data.maxChars||b.data.maxChars>=a(b.data.fake_input).val().length)&&a(b.data.real_input).addTag(a(b.data.fake_input).val(),{focus:!0,unique:f.unique}):(a(b.data.fake_input).val(a(b.data.fake_input).attr("data-default")),a(b.data.fake_input).css("color",f.placeholderColor)),!1});a(h.fake_input).bind("keypress",h,function(b){return d(b)?(b.preventDefault(),b.data.minChars<=a(b.data.fake_input).val().length&&(!b.data.maxChars||b.data.maxChars>=a(b.data.fake_input).val().length)&&a(b.data.real_input).addTag(a(b.data.fake_input).val(),{focus:!0,unique:f.unique}),a(b.data.fake_input).resetAutosize(f),!1):void(b.data.autosize&&a(b.data.fake_input).doAutosize(f))}),h.removeWithBackspace&&a(h.fake_input).bind("keydown",function(b){if(8==b.keyCode&&""==a(this).val()){b.preventDefault();var c=a(this).closest(".tagsinput").find(".tag:last").text(),d=a(this).attr("id").replace(/_tag$/,"");c=c.replace(/[\s]+x$/,""),a("#"+d).removeTag(escape(c)),a(this).trigger("focus")}}),a(h.fake_input).blur(),h.unique&&a(h.fake_input).keydown(function(b){(8==b.keyCode||String.fromCharCode(b.which).match(/\w+|[áéíóúÁÉÍÓÚñÑ,/]+/))&&a(this).removeClass("not_valid")})}}}),this},a.fn.tagsInput.updateTagsField=function(c,d){var e=a(c).attr("id");a(c).val(d.join(b[e]))},a.fn.tagsInput.importTags=function(d,e){a(d).val("");var f=a(d).attr("id"),g=e.split(b[f]);for(i=0;i<g.length;i++)a(d).addTag(g[i],{focus:!1,callback:!1});if(c[f]&&c[f].onChange){var h=c[f].onChange;h.call(d,d,g[i])}};var d=function(b){var c=!1;return 13==b.which?!0:("string"==typeof b.data.delimiter?b.which==b.data.delimiter.charCodeAt(0)&&(c=!0):a.each(b.data.delimiter,function(a,d){b.which==d.charCodeAt(0)&&(c=!0)}),c)}}(jQuery);
!function webpackUniversalModuleDefinition(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.bulmaCalendar=t():e.bulmaCalendar=t()}("undefined"!=typeof self?self:this,function(){return function(n){var o={};function __webpack_require__(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,__webpack_require__),t.l=!0,t.exports}return __webpack_require__.m=n,__webpack_require__.c=o,__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=232)}([function(e,t,n){var d=n(120),l=36e5,f=6e4,h=/[T ]/,m=/:/,p=/^(\d{2})$/,v=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],g=/^(\d{4})/,b=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],_=/^-(\d{2})$/,M=/^-?(\d{3})$/,k=/^-?(\d{2})-?(\d{2})$/,y=/^-?W(\d{2})$/,x=/^-?W(\d{2})-?(\d{1})$/,D=/^(\d{2}([.,]\d*)?)$/,w=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,j=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,T=/([Z+-].*)$/,S=/^(Z)$/,P=/^([+-])(\d{2})$/,H=/^([+-])(\d{2}):?(\d{2})$/;function dayOfISOYear(e,t,n){t=t||0,n=n||0;var o=new Date(0);o.setUTCFullYear(e,0,4);var i=7*t+n+1-(o.getUTCDay()||7);return o.setUTCDate(o.getUTCDate()+i),o}e.exports=function parse(e,t){if(d(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var n=(t||{}).additionalDigits;n=null==n?2:Number(n);var o=function splitDateString(e){var t,n={},o=e.split(h);if(t=m.test(o[0])?(n.date=null,o[0]):(n.date=o[0],o[1])){var i=T.exec(t);i?(n.time=t.replace(i[1],""),n.timezone=i[1]):n.time=t}return n}(e),i=function parseYear(e,t){var n,o=v[t],i=b[t];if(n=g.exec(e)||i.exec(e)){var r=n[1];return{year:parseInt(r,10),restDateString:e.slice(r.length)}}if(n=p.exec(e)||o.exec(e)){var a=n[1];return{year:100*parseInt(a,10),restDateString:e.slice(a.length)}}return{year:null}}(o.date,n),r=i.year,a=function parseDate(e,t){if(null===t)return null;var n,o,i,r;if(0===e.length)return(o=new Date(0)).setUTCFullYear(t),o;if(n=_.exec(e))return o=new Date(0),i=parseInt(n[1],10)-1,o.setUTCFullYear(t,i),o;if(n=M.exec(e)){o=new Date(0);var a=parseInt(n[1],10);return o.setUTCFullYear(t,0,a),o}if(n=k.exec(e)){o=new Date(0),i=parseInt(n[1],10)-1;var s=parseInt(n[2],10);return o.setUTCFullYear(t,i,s),o}if(n=y.exec(e))return r=parseInt(n[1],10)-1,dayOfISOYear(t,r);if(n=x.exec(e)){r=parseInt(n[1],10)-1;var u=parseInt(n[2],10)-1;return dayOfISOYear(t,r,u)}return null}(i.restDateString,r);if(a){var s,u=a.getTime(),c=0;return o.time&&(c=function parseTime(e){var t,n,o;if(t=D.exec(e))return(n=parseFloat(t[1].replace(",",".")))%24*l;if(t=w.exec(e))return n=parseInt(t[1],10),o=parseFloat(t[2].replace(",",".")),n%24*l+o*f;if(t=j.exec(e)){n=parseInt(t[1],10),o=parseInt(t[2],10);var i=parseFloat(t[3].replace(",","."));return n%24*l+o*f+1e3*i}return null}(o.time)),s=o.timezone?function parseTimezone(e){var t,n;return(t=S.exec(e))?0:(t=P.exec(e))?(n=60*parseInt(t[2],10),"+"===t[1]?-n:n):(t=H.exec(e))?(n=60*parseInt(t[2],10)+parseInt(t[3],10),"+"===t[1]?-n:n):0}(o.timezone):(s=new Date(u+c).getTimezoneOffset(),new Date(u+c+s*f).getTimezoneOffset()),new Date(u+c+s*f)}return new Date(e)}},function(e,n,o){var i;!function(t){"use strict";var b={},_="en",M={en:{MMMM:["January","February","March","April","May","June","July","August","September","October","November","December"],MMM:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dddd:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ddd:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dd:["Su","Mo","Tu","We","Th","Fr","Sa"],A:["a.m.","p.m."],formatter:{YYYY:function(e){return("000"+e.getFullYear()).slice(-4)},YY:function(e){return("0"+e.getFullYear()).slice(-2)},Y:function(e){return""+e.getFullYear()},MMMM:function(e){return this.MMMM[e.getMonth()]},MMM:function(e){return this.MMM[e.getMonth()]},MM:function(e){return("0"+(e.getMonth()+1)).slice(-2)},M:function(e){return""+(e.getMonth()+1)},DD:function(e){return("0"+e.getDate()).slice(-2)},D:function(e){return""+e.getDate()},HH:function(e){return("0"+e.getHours()).slice(-2)},H:function(e){return""+e.getHours()},A:function(e){return this.A[11<e.getHours()|0]},hh:function(e){return("0"+(e.getHours()%12||12)).slice(-2)},h:function(e){return""+(e.getHours()%12||12)},mm:function(e){return("0"+e.getMinutes()).slice(-2)},m:function(e){return""+e.getMinutes()},ss:function(e){return("0"+e.getSeconds()).slice(-2)},s:function(e){return""+e.getSeconds()},SSS:function(e){return("00"+e.getMilliseconds()).slice(-3)},SS:function(e){return("0"+(e.getMilliseconds()/10|0)).slice(-2)},S:function(e){return""+(e.getMilliseconds()/100|0)},dddd:function(e){return this.dddd[e.getDay()]},ddd:function(e){return this.ddd[e.getDay()]},dd:function(e){return this.dd[e.getDay()]},Z:function(e){var t=e.utc?0:e.getTimezoneOffset()/.6;return(0<t?"-":"+")+("000"+Math.abs(t-t%100*.4)).slice(-4)},post:function(e){return e}},parser:{find:function(e,t){for(var n,o=-1,i=0,r=0,a=e.length;r<a;r++)n=e[r],!t.indexOf(n)&&n.length>i&&(o=r,i=n.length);return{index:o,length:i}},MMMM:function(e){return this.parser.find(this.MMMM,e)},MMM:function(e){return this.parser.find(this.MMM,e)},A:function(e){return this.parser.find(this.A,e)},h:function(e,t){return(12===e?0:e)+12*t},pre:function(e){return e}}}};b.format=function(e,n,t){var o=b.addMinutes(e,t?e.getTimezoneOffset():0),i=M[_],r=i.formatter;return o.utc=t,n.replace(/(\[[^\[\]]*]|\[.*\][^\[]*\]|YYYY|YY|MMM?M?|DD|HH|hh|mm|ss|SSS?|ddd?d?|.)/g,function(e){var t=r[e];return t?r.post(t.call(i,o,n)):e.replace(/\[(.*)]/,"$1")})},b.parse=function(e,t,n){for(var o,i,r,a,s,u,c,d,l=M[_],f=l.parser.pre(e),h=0,m=/(MMMM?|A)|(YYYY)|(SSS)|(MM|DD|HH|hh|mm|ss)|(YY|M|D|H|h|m|s|SS)|(S)|(.)/g,p={2:/^\d{1,4}/,3:/^\d{1,3}/,4:/^\d\d/,5:/^\d\d?/,6:/^\d/},v=[31,28,31,30,31,30,31,31,30,31,30,31],g={Y:1970,M:1,D:1,H:0,m:0,s:0,S:0};o=m.exec(t);){for(i=0,a=1,r="";!r;)r=o[++i];if(s=r.charAt(0),u=f.slice(h),i<2)c=l.parser[r].call(l,u,t),g[s]=c.index,"M"===s&&g[s]++,a=c.length;else if(i<7)c=(u.match(p[i])||[""])[0],g[s]=0|("S"===s?(c+"000").slice(0,-r.length):c),a=c.length;else if(" "!==s&&s!==u[0])return NaN;if(!a)return NaN;h+=a}return h===f.length&&c?(g.Y+=g.Y<70?2e3:g.Y<100?1900:0,g.H=g.H||l.parser.h(g.h||0,g.A||0),d=new Date(g.Y,g.M-1,g.D,g.H,g.m,g.s,g.S),v[1]+=0|b.isLeapYear(d),g.M<1||12<g.M||g.D<1||g.D>v[g.M-1]||23<g.H||59<g.m||59<g.s?NaN:n?b.addMinutes(d,-d.getTimezoneOffset()):d):NaN},b.isValid=function(e,t){return!!b.parse(e,t)},b.addYears=function(e,t){return b.addMonths(e,12*t)},b.addMonths=function(e,t){var n=new Date(e.getTime());return n.setMonth(n.getMonth()+t),n},b.addDays=function(e,t){var n=new Date(e.getTime());return n.setDate(n.getDate()+t),n},b.addHours=function(e,t){return b.addMilliseconds(e,36e5*t)},b.addMinutes=function(e,t){return b.addMilliseconds(e,6e4*t)},b.addSeconds=function(e,t){return b.addMilliseconds(e,1e3*t)},b.addMilliseconds=function(e,t){return new Date(e.getTime()+t)},b.subtract=function(e,t){var n=e.getTime()-t.getTime();return{toMilliseconds:function(){return n},toSeconds:function(){return n/1e3|0},toMinutes:function(){return n/6e4|0},toHours:function(){return n/36e5|0},toDays:function(){return n/864e5|0}}},b.isLeapYear=function(e){var t=e.getFullYear();return!((t%4||!(t%100))&&t%400)},b.isSameDay=function(e,t){return b.format(e,"YYYYMMDD")===b.format(t,"YYYYMMDD")},b.locale=function(e){return e&&(!M[e]&&t&&o(331)("./"+e),_=e),_},b.getLocales=function(e){return M[e||_]},b.setLocales=function(e,t){var n=function(e,t){var n,o,i=function(){};for(o in i.prototype=t,n=new i,e)e.hasOwnProperty(o)&&(n[o]=e[o]);return n},o=M[e]||M.en,i=n(t,o);t.formatter&&(i.formatter=n(t.formatter,o.formatter)),t.parser&&(i.parser=n(t.parser,o.parser)),M[e]=i},"object"==typeof e&&"object"==typeof e.exports?e.exports=b:void 0===(i=function(){return b}.apply(n,[]))||(e.exports=i)}(this)},function(e,t){var i=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];e.exports=function buildFormattingTokensRegExp(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);var o=i.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},function(e,t,n){var s=n(0),u=n(4);e.exports=function getISOYear(e){var t=s(e),n=t.getFullYear(),o=new Date(0);o.setFullYear(n+1,0,4),o.setHours(0,0,0,0);var i=u(o),r=new Date(0);r.setFullYear(n,0,4),r.setHours(0,0,0,0);var a=u(r);return t.getTime()>=i.getTime()?n+1:t.getTime()>=a.getTime()?n:n-1}},function(e,t,n){var o=n(80);e.exports=function startOfISOWeek(e){return o(e,{weekStartsOn:1})}},function(e,t,n){var o=n(0);e.exports=function startOfDay(e){var t=o(e);return t.setHours(0,0,0,0),t}},function(e,t,n){var o=n(12),i=n(13);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){e.exports={addDays:n(8),addHours:n(130),addISOYears:n(131),addMilliseconds:n(9),addMinutes:n(133),addMonths:n(82),addQuarters:n(134),addSeconds:n(135),addWeeks:n(122),addYears:n(136),areRangesOverlapping:n(233),closestIndexTo:n(234),closestTo:n(235),compareAsc:n(11),compareDesc:n(123),differenceInCalendarDays:n(81),differenceInCalendarISOWeeks:n(236),differenceInCalendarISOYears:n(137),differenceInCalendarMonths:n(138),differenceInCalendarQuarters:n(237),differenceInCalendarWeeks:n(238),differenceInCalendarYears:n(140),differenceInDays:n(141),differenceInHours:n(239),differenceInISOYears:n(240),differenceInMilliseconds:n(83),differenceInMinutes:n(241),differenceInMonths:n(124),differenceInQuarters:n(242),differenceInSeconds:n(125),differenceInWeeks:n(243),differenceInYears:n(244),distanceInWords:n(143),distanceInWordsStrict:n(245),distanceInWordsToNow:n(246),eachDay:n(247),endOfDay:n(126),endOfHour:n(248),endOfISOWeek:n(249),endOfISOYear:n(250),endOfMinute:n(251),endOfMonth:n(145),endOfQuarter:n(252),endOfSecond:n(253),endOfToday:n(254),endOfTomorrow:n(255),endOfWeek:n(144),endOfYear:n(256),endOfYesterday:n(257),format:n(258),getDate:n(259),getDay:n(260),getDayOfYear:n(146),getDaysInMonth:n(121),getDaysInYear:n(261),getHours:n(262),getISODay:n(150),getISOWeek:n(127),getISOWeeksInYear:n(263),getISOYear:n(3),getMilliseconds:n(264),getMinutes:n(265),getMonth:n(266),getOverlappingDaysInRanges:n(267),getQuarter:n(139),getSeconds:n(268),getTime:n(269),getYear:n(270),isAfter:n(271),isBefore:n(272),isDate:n(120),isEqual:n(273),isFirstDayOfMonth:n(274),isFriday:n(275),isFuture:n(276),isLastDayOfMonth:n(277),isLeapYear:n(149),isMonday:n(278),isPast:n(279),isSameDay:n(280),isSameHour:n(151),isSameISOWeek:n(153),isSameISOYear:n(154),isSameMinute:n(155),isSameMonth:n(157),isSameQuarter:n(158),isSameSecond:n(160),isSameWeek:n(128),isSameYear:n(162),isSaturday:n(281),isSunday:n(282),isThisHour:n(283),isThisISOWeek:n(284),isThisISOYear:n(285),isThisMinute:n(286),isThisMonth:n(287),isThisQuarter:n(288),isThisSecond:n(289),isThisWeek:n(290),isThisYear:n(291),isThursday:n(292),isToday:n(293),isTomorrow:n(294),isTuesday:n(295),isValid:n(148),isWednesday:n(296),isWeekend:n(297),isWithinRange:n(298),isYesterday:n(299),lastDayOfISOWeek:n(300),lastDayOfISOYear:n(301),lastDayOfMonth:n(302),lastDayOfQuarter:n(303),lastDayOfWeek:n(163),lastDayOfYear:n(304),max:n(305),min:n(306),parse:n(0),setDate:n(307),setDay:n(308),setDayOfYear:n(309),setHours:n(310),setISODay:n(311),setISOWeek:n(312),setISOYear:n(132),setMilliseconds:n(313),setMinutes:n(314),setMonth:n(164),setQuarter:n(315),setSeconds:n(316),setYear:n(317),startOfDay:n(5),startOfHour:n(152),startOfISOWeek:n(4),startOfISOYear:n(10),startOfMinute:n(156),startOfMonth:n(318),startOfQuarter:n(159),startOfSecond:n(161),startOfToday:n(319),startOfTomorrow:n(320),startOfWeek:n(80),startOfYear:n(147),startOfYesterday:n(321),subDays:n(322),subHours:n(323),subISOYears:n(142),subMilliseconds:n(324),subMinutes:n(325),subMonths:n(326),subQuarters:n(327),subSeconds:n(328),subWeeks:n(329),subYears:n(330)}},function(e,t,n){var i=n(0);e.exports=function addDays(e,t){var n=i(e),o=Number(t);return n.setDate(n.getDate()+o),n}},function(e,t,n){var i=n(0);e.exports=function addMilliseconds(e,t){var n=i(e).getTime(),o=Number(t);return new Date(n+o)}},function(e,t,n){var o=n(3),i=n(4);e.exports=function startOfISOYear(e){var t=o(e),n=new Date(0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),i(n)}},function(e,t,n){var i=n(0);e.exports=function compareAsc(e,t){var n=i(e).getTime(),o=i(t).getTime();return n<o?-1:o<n?1:0}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"in "+o:o+" ago":o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=["January","February","March","April","May","June","July","August","September","October","November","December"],o=["Su","Mo","Tu","We","Th","Fr","Sa"],i=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["AM","PM"],s=["am","pm"],u=["a.m.","p.m."],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){var t=e%100;if(20<t||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"أقل من ثانية واحدة",other:"أقل من {{count}} ثواني"},xSeconds:{one:"ثانية واحدة",other:"{{count}} ثواني"},halfAMinute:"نصف دقيقة",lessThanXMinutes:{one:"أقل من دقيقة",other:"أقل من {{count}} دقيقة"},xMinutes:{one:"دقيقة واحدة",other:"{{count}} دقائق"},aboutXHours:{one:"ساعة واحدة تقريباً",other:"{{count}} ساعات تقريباً"},xHours:{one:"ساعة واحدة",other:"{{count}} ساعات"},xDays:{one:"يوم واحد",other:"{{count}} أيام"},aboutXMonths:{one:"شهر واحد تقريباً",other:"{{count}} أشهر تقريباً"},xMonths:{one:"شهر واحد",other:"{{count}} أشهر"},aboutXYears:{one:"عام واحد تقريباً",other:"{{count}} أعوام تقريباً"},xYears:{one:"عام واحد",other:"{{count}} أعوام"},overXYears:{one:"أكثر من عام",other:"أكثر من {{count}} أعوام"},almostXYears:{one:"عام واحد تقريباً",other:"{{count}} أعوام تقريباً"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"في خلال "+o:"منذ "+o:o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],n=["كانون الثاني يناير","شباط فبراير","آذار مارس","نيسان أبريل","أيار مايو","حزيران يونيو","تموز يوليو","آب أغسطس","أيلول سبتمبر","تشرين الأول أكتوبر","تشرين الثاني نوفمبر","كانون الأول ديسمبر"],o=["ح","ن","ث","ر","خ","ج","س"],i=["أحد","إثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],r=["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],a=["صباح","مساء"],s=["ص","م"],u=["صباحاً","مساءاً"],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){return String(e)}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"по-малко от секунда",other:"по-малко от {{count}} секунди"},xSeconds:{one:"1 секунда",other:"{{count}} секунди"},halfAMinute:"половин минута",lessThanXMinutes:{one:"по-малко от минута",other:"по-малко от {{count}} минути"},xMinutes:{one:"1 минута",other:"{{count}} минути"},aboutXHours:{one:"около час",other:"около {{count}} часа"},xHours:{one:"1 час",other:"{{count}} часа"},xDays:{one:"1 ден",other:"{{count}} дни"},aboutXMonths:{one:"около месец",other:"около {{count}} месеца"},xMonths:{one:"1 месец",other:"{{count}} месеца"},aboutXYears:{one:"около година",other:"около {{count}} години"},xYears:{one:"1 година",other:"{{count}} години"},overXYears:{one:"над година",other:"над {{count}} години"},almostXYears:{one:"почти година",other:"почти {{count}} години"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"след "+o:"преди "+o:o}}}},function(e,t,n){var u=n(2);e.exports=function buildFormatLocale(){var t=["яну","фев","мар","апр","май","юни","юли","авг","сеп","окт","ное","дек"],n=["януари","февруари","март","април","май","юни","юли","август","септември","октомври","ноември","декември"],o=["нд","пн","вт","ср","чт","пт","сб"],i=["нед","пон","вто","сря","чет","пет","съб"],r=["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"],a=["сутринта","на обяд","следобед","вечерта"],e=function(e){var t=e.getHours();return 4<=t&&t<12?a[0]:12<=t&&t<14?a[1]:14<=t&&t<17?a[2]:a[3]},s={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:e,a:e,aa:e};return["M","D","DDD","d","Q","W"].forEach(function(n){s[n+"o"]=function(e,t){return function ordinal(e){var t=e%100;if(20<t||t<10)switch(t%10){case 1:return e+"-ви";case 2:return e+"-ри"}return e+"-и"}(t[n](e))}}),{formatters:s,formattingTokensRegExp:u(s)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"menys d'un segon",other:"menys de {{count}} segons"},xSeconds:{one:"1 segon",other:"{{count}} segons"},halfAMinute:"mig minut",lessThanXMinutes:{one:"menys d'un minut",other:"menys de {{count}} minuts"},xMinutes:{one:"1 minut",other:"{{count}} minuts"},aboutXHours:{one:"aproximadament una hora",other:"aproximadament {{count}} hores"},xHours:{one:"1 hora",other:"{{count}} hores"},xDays:{one:"1 dia",other:"{{count}} dies"},aboutXMonths:{one:"aproximadament un mes",other:"aproximadament {{count}} mesos"},xMonths:{one:"1 mes",other:"{{count}} mesos"},aboutXYears:{one:"aproximadament un any",other:"aproximadament {{count}} anys"},xYears:{one:"1 any",other:"{{count}} anys"},overXYears:{one:"més d'un any",other:"més de {{count}} anys"},almostXYears:{one:"gairebé un any",other:"gairebé {{count}} anys"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"en "+o:"fa "+o:o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["gen","feb","mar","abr","mai","jun","jul","ago","set","oct","nov","des"],n=["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octobre","novembre","desembre"],o=["dg","dl","dt","dc","dj","dv","ds"],i=["dge","dls","dts","dcs","djs","dvs","dss"],r=["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],a=["AM","PM"],s=["am","pm"],u=["a.m.","p.m."],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){switch(e){case 1:return"1r";case 2:return"2n";case 3:return"3r";case 4:return"4t";default:return e+"è"}}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){function declension(e,t,n){var o=function declensionGroup(e,t){return 1===t?e.one:2<=t&&t<=4?e.twoFour:e.other}(e,t);return(o[n]||o).replace("{{count}}",t)}function prefixPreposition(e){var t="";return"almost"===e&&(t="skoro"),"about"===e&&(t="přibližně"),0<t.length?t+" ":""}function suffixPreposition(e){var t="";return"lessThan"===e&&(t="méně než"),"over"===e&&(t="více než"),0<t.length?t+" ":""}e.exports=function buildDistanceInWordsLocale(){var a={xSeconds:{one:{regular:"vteřina",past:"vteřinou",future:"vteřinu"},twoFour:{regular:"{{count}} vteřiny",past:"{{count}} vteřinami",future:"{{count}} vteřiny"},other:{regular:"{{count}} vteřin",past:"{{count}} vteřinami",future:"{{count}} vteřin"}},halfAMinute:{other:{regular:"půl minuty",past:"půl minutou",future:"půl minuty"}},xMinutes:{one:{regular:"minuta",past:"minutou",future:"minutu"},twoFour:{regular:"{{count}} minuty",past:"{{count}} minutami",future:"{{count}} minuty"},other:{regular:"{{count}} minut",past:"{{count}} minutami",future:"{{count}} minut"}},xHours:{one:{regular:"hodina",past:"hodinou",future:"hodinu"},twoFour:{regular:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{regular:"{{count}} hodin",past:"{{count}} hodinami",future:"{{count}} hodin"}},xDays:{one:{regular:"den",past:"dnem",future:"den"},twoFour:{regular:"{{count}} dni",past:"{{count}} dny",future:"{{count}} dni"},other:{regular:"{{count}} dní",past:"{{count}} dny",future:"{{count}} dní"}},xMonths:{one:{regular:"měsíc",past:"měsícem",future:"měsíc"},twoFour:{regular:"{{count}} měsíce",past:"{{count}} měsíci",future:"{{count}} měsíce"},other:{regular:"{{count}} měsíců",past:"{{count}} měsíci",future:"{{count}} měsíců"}},xYears:{one:{regular:"rok",past:"rokem",future:"rok"},twoFour:{regular:"{{count}} roky",past:"{{count}} roky",future:"{{count}} roky"},other:{regular:"{{count}} roků",past:"{{count}} roky",future:"{{count}} roků"}}};return{localize:function localize(e,t,n){n=n||{};var o=function extractPreposition(t){return["lessThan","about","over","almost"].filter(function(e){return!!t.match(new RegExp("^"+e))})[0]}(e)||"",i=function lowercaseFirstLetter(e){return e.charAt(0).toLowerCase()+e.slice(1)}(e.substring(o.length)),r=a[i];return n.addSuffix?0<n.comparison?prefixPreposition(o)+"za "+suffixPreposition(o)+declension(r,t,"future"):prefixPreposition(o)+"před "+suffixPreposition(o)+declension(r,t,"past"):prefixPreposition(o)+suffixPreposition(o)+declension(r,t,"regular")}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],n=["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"],o=["ne","po","út","st","čt","pá","so"],i=["ned","pon","úte","stř","čtv","pát","sob"],r=["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],a=["DOP.","ODP."],s=["dop.","odp."],u=["dopoledne","odpoledne"],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){return e+"."}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"mindre end et sekund",other:"mindre end {{count}} sekunder"},xSeconds:{one:"1 sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minut",lessThanXMinutes:{one:"mindre end et minut",other:"mindre end {{count}} minutter"},xMinutes:{one:"1 minut",other:"{{count}} minutter"},aboutXHours:{one:"cirka 1 time",other:"cirka {{count}} timer"},xHours:{one:"1 time",other:"{{count}} timer"},xDays:{one:"1 dag",other:"{{count}} dage"},aboutXMonths:{one:"cirka 1 måned",other:"cirka {{count}} måneder"},xMonths:{one:"1 måned",other:"{{count}} måneder"},aboutXYears:{one:"cirka 1 år",other:"cirka {{count}} år"},xYears:{one:"1 år",other:"{{count}} år"},overXYears:{one:"over 1 år",other:"over {{count}} år"},almostXYears:{one:"næsten 1 år",other:"næsten {{count}} år"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"om "+o:o+" siden":o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],n=["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],o=["sø","ma","ti","on","to","fr","lø"],i=["søn","man","tir","ons","tor","fre","lør"],r=["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],a=["AM","PM"],s=["am","pm"],u=["a.m.","p.m."],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){return e+"."}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var r={lessThanXSeconds:{standalone:{one:"weniger als eine Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als einer Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"eine Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"einer Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als eine Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als einer Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"eine Minute",other:"{{count}} Minuten"},withPreposition:{one:"einer Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa eine Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa einer Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"eine Stunde",other:"{{count}} Stunden"},withPreposition:{one:"einer Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"ein Tag",other:"{{count}} Tage"},withPreposition:{one:"einem Tag",other:"{{count}} Tagen"}},aboutXMonths:{standalone:{one:"etwa ein Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa einem Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"ein Monat",other:"{{count}} Monate"},withPreposition:{one:"einem Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa ein Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa einem Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"ein Jahr",other:"{{count}} Jahre"},withPreposition:{one:"einem Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als ein Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als einem Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast ein Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast einem Jahr",other:"fast {{count}} Jahren"}}};return{localize:function localize(e,t,n){var o,i=(n=n||{}).addSuffix?r[e].withPreposition:r[e].standalone;return o="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"in "+o:"vor "+o:o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],n=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],o=["So","Mo","Di","Mi","Do","Fr","Sa"],i=["Son","Mon","Die","Mit","Don","Fre","Sam"],r=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],a=["AM","PM"],s=["am","pm"],u=["a.m.","p.m."],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){return e+"."}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"λιγότερο από ένα δευτερόλεπτο",other:"λιγότερο από {{count}} δευτερόλεπτα"},xSeconds:{one:"1 δευτερόλεπτο",other:"{{count}} δευτερόλεπτα"},halfAMinute:"μισό λεπτό",lessThanXMinutes:{one:"λιγότερο από ένα λεπτό",other:"λιγότερο από {{count}} λεπτά"},xMinutes:{one:"1 λεπτό",other:"{{count}} λεπτά"},aboutXHours:{one:"περίπου 1 ώρα",other:"περίπου {{count}} ώρες"},xHours:{one:"1 ώρα",other:"{{count}} ώρες"},xDays:{one:"1 ημέρα",other:"{{count}} ημέρες"},aboutXMonths:{one:"περίπου 1 μήνας",other:"περίπου {{count}} μήνες"},xMonths:{one:"1 μήνας",other:"{{count}} μήνες"},aboutXYears:{one:"περίπου 1 χρόνο",other:"περίπου {{count}} χρόνια"},xYears:{one:"1 χρόνο",other:"{{count}} χρόνια"},overXYears:{one:"πάνω από 1 χρόνο",other:"πάνω από {{count}} χρόνια"},almostXYears:{one:"περίπου 1 χρόνο",other:"περίπου {{count}} χρόνια"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"σε "+o:o+" πρίν":o}}}},function(e,t,n){var f=n(2);e.exports=function buildFormatLocale(){var t=["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],n=["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],o=["Ιανουαρίου","Φεβρουαρίου","Μαρτίου","Απριλίου","Μαΐου","Ιουνίου","Ιουλίου","Αυγούστου","Σεπτεμβρίου","Οκτωβρίου","Νοεμβρίου","Δεκεμβρίου"],i=["Κυ","Δε","Τρ","Τε","Πέ","Πα","Σά"],r=["Κυρ","Δευ","Τρί","Τετ","Πέμ","Παρ","Σάβ"],a=["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],s=["ΠΜ","ΜΜ"],u=["πμ","μμ"],c=["π.μ.","μ.μ."],d={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return i[e.getDay()]},ddd:function(e){return r[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){return 1<=e.getHours()/12?s[1]:s[0]},a:function(e){return 1<=e.getHours()/12?u[1]:u[0]},aa:function(e){return 1<=e.getHours()/12?c[1]:c[0]}},l={M:"ος",D:"η",DDD:"η",d:"η",Q:"ο",W:"η"};return["M","D","DDD","d","Q","W"].forEach(function(n){d[n+"o"]=function(e,t){return t[n](e)+l[n]}}),["D","Do","DD"].forEach(function(n){d[n+" MMMM"]=function(e,t){return(d[n]||t[n])(e,t)+" "+o[e.getMonth()]}}),{formatters:d,formattingTokensRegExp:f(d)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"malpli ol sekundo",other:"malpli ol {{count}} sekundoj"},xSeconds:{one:"1 sekundo",other:"{{count}} sekundoj"},halfAMinute:"duonminuto",lessThanXMinutes:{one:"malpli ol minuto",other:"malpli ol {{count}} minutoj"},xMinutes:{one:"1 minuto",other:"{{count}} minutoj"},aboutXHours:{one:"proksimume 1 horo",other:"proksimume {{count}} horoj"},xHours:{one:"1 horo",other:"{{count}} horoj"},xDays:{one:"1 tago",other:"{{count}} tagoj"},aboutXMonths:{one:"proksimume 1 monato",other:"proksimume {{count}} monatoj"},xMonths:{one:"1 monato",other:"{{count}} monatoj"},aboutXYears:{one:"proksimume 1 jaro",other:"proksimume {{count}} jaroj"},xYears:{one:"1 jaro",other:"{{count}} jaroj"},overXYears:{one:"pli ol 1 jaro",other:"pli ol {{count}} jaroj"},almostXYears:{one:"preskaŭ 1 jaro",other:"preskaŭ {{count}} jaroj"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"post "+o:"antaŭ "+o:o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["jan","feb","mar","apr","maj","jun","jul","aŭg","sep","okt","nov","dec"],n=["januaro","februaro","marto","aprilo","majo","junio","julio","aŭgusto","septembro","oktobro","novembro","decembro"],o=["di","lu","ma","me","ĵa","ve","sa"],i=["dim","lun","mar","mer","ĵaŭ","ven","sab"],r=["dimanĉo","lundo","mardo","merkredo","ĵaŭdo","vendredo","sabato"],a=["A.T.M.","P.T.M."],s=["a.t.m.","p.t.m."],u=["antaŭtagmeze","posttagmeze"],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return t[n](e)+"-a"}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 día",other:"{{count}} días"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 año",other:"alrededor de {{count}} años"},xYears:{one:"1 año",other:"{{count}} años"},overXYears:{one:"más de 1 año",other:"más de {{count}} años"},almostXYears:{one:"casi 1 año",other:"casi {{count}} años"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"en "+o:"hace "+o:o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],n=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],o=["do","lu","ma","mi","ju","vi","sa"],i=["dom","lun","mar","mié","jue","vie","sáb"],r=["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],a=["AM","PM"],s=["am","pm"],u=["a.m.","p.m."],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){return e+"º"}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){function futureSeconds(e){return e.replace(/sekuntia?/,"sekunnin")}function futureMinutes(e){return e.replace(/minuuttia?/,"minuutin")}function futureHours(e){return e.replace(/tuntia?/,"tunnin")}function futureMonths(e){return e.replace(/(kuukausi|kuukautta)/,"kuukauden")}function futureYears(e){return e.replace(/(vuosi|vuotta)/,"vuoden")}var r={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:futureSeconds},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:futureSeconds},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(e){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:futureMinutes},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:futureMinutes},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:futureHours},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:futureHours},xDays:{one:"päivä",other:"{{count}} päivää",futureTense:function futureDays(e){return e.replace(/päivää?/,"päivän")}},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:futureMonths},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:futureMonths},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:futureYears},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:futureYears},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:futureYears},almostXYears:{one:"lähes vuosi",other:"lähes {{count}} vuotta",futureTense:futureYears}};return{localize:function localize(e,t,n){n=n||{};var o=r[e],i=1===t?o.one:o.other.replace("{{count}}",t);return n.addSuffix?0<n.comparison?o.futureTense(i)+" kuluttua":i+" sitten":i}}}},function(e,t,n){var r=n(2);e.exports=function buildFormatLocale(){var t=["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"],n=["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],o=["su","ma","ti","ke","to","pe","la"],i=["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"];function meridiem(e){return e.getHours()<12?"AP":"IP"}var e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return i[e.getDay()]},A:meridiem,a:meridiem,aa:meridiem};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return t[n](e).toString()+"."}}),{formatters:e,formattingTokensRegExp:r(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"mas maliit sa isang segundo",other:"mas maliit sa {{count}} segundo"},xSeconds:{one:"1 segundo",other:"{{count}} segundo"},halfAMinute:"kalahating minuto",lessThanXMinutes:{one:"mas maliit sa isang minuto",other:"mas maliit sa {{count}} minuto"},xMinutes:{one:"1 minuto",other:"{{count}} minuto"},aboutXHours:{one:"mga 1 oras",other:"mga {{count}} oras"},xHours:{one:"1 oras",other:"{{count}} oras"},xDays:{one:"1 araw",other:"{{count}} araw"},aboutXMonths:{one:"mga 1 buwan",other:"mga {{count}} buwan"},xMonths:{one:"1 buwan",other:"{{count}} buwan"},aboutXYears:{one:"mga 1 taon",other:"mga {{count}} taon"},xYears:{one:"1 taon",other:"{{count}} taon"},overXYears:{one:"higit sa 1 taon",other:"higit sa {{count}} taon"},almostXYears:{one:"halos 1 taon",other:"halos {{count}} taon"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"sa loob ng "+o:o+" ang nakalipas":o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["Ene","Peb","Mar","Abr","May","Hun","Hul","Ago","Set","Okt","Nob","Dis"],n=["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Setyembre","Oktubre","Nobyembre","Disyembre"],o=["Li","Lu","Ma","Mi","Hu","Bi","Sa"],i=["Lin","Lun","Mar","Miy","Huw","Biy","Sab"],r=["Linggo","Lunes","Martes","Miyerkules","Huwebes","Biyernes","Sabado"],a=["NU","NT","NH","NG"],s=["nu","nt","nh","ng"],u=["ng umaga","ng tanghali","ng hapon","ng gabi"],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 12<e.getHours()?e.getHours()%12<6?a[2]:a[3]:e.getHours()<12?a[0]:a[1]},a:function(e){return 12<e.getHours()?e.getHours()%12<6?s[2]:s[3]:e.getHours()<12?s[0]:s[1]},aa:function(e){return 12<e.getHours()?e.getHours()%12<6?u[2]:u[3]:e.getHours()<12?u[0]:u[1]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){return"ika-"+e}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"moins d’une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d’une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d’un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu’un an",other:"presque {{count}} ans"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"dans "+o:"il y a "+o:o}}}},function(e,t,n){var d=n(2);e.exports=function buildFormatLocale(){var t=["janv.","févr.","mars","avr.","mai","juin","juill.","août","sept.","oct.","nov.","déc."],n=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],o=["di","lu","ma","me","je","ve","sa"],i=["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],r=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],a=["AM","PM"],s=["am","pm"],u=["du matin","de l’après-midi","du soir"],c={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){var t=e.getHours();return t<=12?u[0]:t<=16?u[1]:u[2]},Wo:function(e,t){return function feminineOrdinal(e){return 1!==e?e+"e":"1re"}(t.W(e))}};return["M","D","DDD","d","Q"].forEach(function(n){c[n+"o"]=function(e,t){return function masculineOrdinal(e){return 1!==e?e+"e":"1er"}(t[n](e))}}),["MMM","MMMM"].forEach(function(o){c["Do "+o]=function(e,t){var n=1===e.getDate()?"Do":"D";return(c[n]||t[n])(e,t)+" "+c[o](e)}}),{formatters:c,formattingTokensRegExp:d(c)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:{standalone:"manje od 1 sekunde",withPrepositionAgo:"manje od 1 sekunde",withPrepositionIn:"manje od 1 sekundu"},dual:"manje od {{count}} sekunde",other:"manje od {{count}} sekundi"},xSeconds:{one:{standalone:"1 sekunda",withPrepositionAgo:"1 sekunde",withPrepositionIn:"1 sekundu"},dual:"{{count}} sekunde",other:"{{count}} sekundi"},halfAMinute:"pola minute",lessThanXMinutes:{one:{standalone:"manje od 1 minute",withPrepositionAgo:"manje od 1 minute",withPrepositionIn:"manje od 1 minutu"},dual:"manje od {{count}} minute",other:"manje od {{count}} minuta"},xMinutes:{one:{standalone:"1 minuta",withPrepositionAgo:"1 minute",withPrepositionIn:"1 minutu"},dual:"{{count}} minute",other:"{{count}} minuta"},aboutXHours:{one:{standalone:"oko 1 sat",withPrepositionAgo:"oko 1 sat",withPrepositionIn:"oko 1 sat"},dual:"oko {{count}} sata",other:"oko {{count}} sati"},xHours:{one:{standalone:"1 sat",withPrepositionAgo:"1 sat",withPrepositionIn:"1 sat"},dual:"{{count}} sata",other:"{{count}} sati"},xDays:{one:{standalone:"1 dan",withPrepositionAgo:"1 dan",withPrepositionIn:"1 dan"},dual:"{{count}} dana",other:"{{count}} dana"},aboutXMonths:{one:{standalone:"oko 1 mjesec",withPrepositionAgo:"oko 1 mjesec",withPrepositionIn:"oko 1 mjesec"},dual:"oko {{count}} mjeseca",other:"oko {{count}} mjeseci"},xMonths:{one:{standalone:"1 mjesec",withPrepositionAgo:"1 mjesec",withPrepositionIn:"1 mjesec"},dual:"{{count}} mjeseca",other:"{{count}} mjeseci"},aboutXYears:{one:{standalone:"oko 1 godinu",withPrepositionAgo:"oko 1 godinu",withPrepositionIn:"oko 1 godinu"},dual:"oko {{count}} godine",other:"oko {{count}} godina"},xYears:{one:{standalone:"1 godina",withPrepositionAgo:"1 godine",withPrepositionIn:"1 godinu"},dual:"{{count}} godine",other:"{{count}} godina"},overXYears:{one:{standalone:"preko 1 godinu",withPrepositionAgo:"preko 1 godinu",withPrepositionIn:"preko 1 godinu"},dual:"preko {{count}} godine",other:"preko {{count}} godina"},almostXYears:{one:{standalone:"gotovo 1 godinu",withPrepositionAgo:"gotovo 1 godinu",withPrepositionIn:"gotovo 1 godinu"},dual:"gotovo {{count}} godine",other:"gotovo {{count}} godina"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?n.addSuffix?0<n.comparison?i[e].one.withPrepositionIn:i[e].one.withPrepositionAgo:i[e].one.standalone:1<t%10&&t%10<5&&"1"!==String(t).substr(-2,1)?i[e].dual.replace("{{count}}",t):i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"za "+o:"prije "+o:o}}}},function(e,t,n){var l=n(2);e.exports=function buildFormatLocale(){var t=["sij","velj","ožu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"],n=["siječanj","veljača","ožujak","travanj","svibanj","lipanj","srpanj","kolovoz","rujan","listopad","studeni","prosinac"],o=["siječnja","veljače","ožujka","travnja","svibnja","lipnja","srpnja","kolovoza","rujna","listopada","studenog","prosinca"],i=["ne","po","ut","sr","če","pe","su"],r=["ned","pon","uto","sri","čet","pet","sub"],a=["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petak","subota"],s=["ujutro","popodne"],u=["ujutro","popodne"],c=["ujutro","popodne"],d={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return i[e.getDay()]},ddd:function(e){return r[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){return 1<=e.getHours()/12?s[1]:s[0]},a:function(e){return 1<=e.getHours()/12?u[1]:u[0]},aa:function(e){return 1<=e.getHours()/12?c[1]:c[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){d[n+"o"]=function(e,t){return function ordinal(e){return e+"."}(t[n](e))}}),["D","Do","DD"].forEach(function(n){d[n+" MMM"]=function(e,t){return(d[n]||t[n])(e,t)+" "+o[e.getMonth()]}}),{formatters:d,formattingTokensRegExp:l(d)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"kevesebb, mint egy másodperce",other:"kevesebb, mint {{count}} másodperce"},xSeconds:{one:"1 másodperce",other:"{{count}} másodperce"},halfAMinute:"fél perce",lessThanXMinutes:{one:"kevesebb, mint egy perce",other:"kevesebb, mint {{count}} perce"},xMinutes:{one:"1 perce",other:"{{count}} perce"},aboutXHours:{one:"közel 1 órája",other:"közel {{count}} órája"},xHours:{one:"1 órája",other:"{{count}} órája"},xDays:{one:"1 napja",other:"{{count}} napja"},aboutXMonths:{one:"közel 1 hónapja",other:"közel {{count}} hónapja"},xMonths:{one:"1 hónapja",other:"{{count}} hónapja"},aboutXYears:{one:"közel 1 éve",other:"közel {{count}} éve"},xYears:{one:"1 éve",other:"{{count}} éve"},overXYears:{one:"több, mint 1 éve",other:"több, mint {{count}} éve"},almostXYears:{one:"majdnem 1 éve",other:"majdnem {{count}} éve"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?""+o:o+"":o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["Jan","Feb","Már","Ápr","Máj","Jún","Júl","Aug","Sze","Okt","Nov","Dec"],n=["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],o=["Va","Hé","Ke","Sze","Cs","Pé","Szo"],i=["Vas","Hét","Ked","Sze","Csü","Pén","Szo"],r=["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"],a=["DE","DU"],s=["de","du"],u=["délelőtt","délután"],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){var t=e%100;if(20<t||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"dalam waktu "+o:o+" yang lalu":o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],n=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],o=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],i=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],r=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],a=["AM","PM"],s=["am","pm"],u=["a.m.","p.m."],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){switch(e){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+e}}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"minna en 1 sekúnda",other:"minna en {{count}} sekúndur"},xSeconds:{one:"1 sekúnda",other:"{{count}} sekúndur"},halfAMinute:"hálf mínúta",lessThanXMinutes:{one:"minna en 1 mínúta",other:"minna en {{count}} mínútur"},xMinutes:{one:"1 mínúta",other:"{{count}} mínútur"},aboutXHours:{one:"u.þ.b. 1 klukkustund",other:"u.þ.b. {{count}} klukkustundir"},xHours:{one:"1 klukkustund",other:"{{count}} klukkustundir"},xDays:{one:"1 dagur",other:"{{count}} dagar"},aboutXMonths:{one:"u.þ.b. 1 mánuður",other:"u.þ.b. {{count}} mánuðir"},xMonths:{one:"1 mánuður",other:"{{count}} mánuðir"},aboutXYears:{one:"u.þ.b. 1 ár",other:"u.þ.b. {{count}} ár"},xYears:{one:"1 ár",other:"{{count}} ár"},overXYears:{one:"meira en 1 ár",other:"meira en {{count}} ár"},almostXYears:{one:"næstum 1 ár",other:"næstum {{count}} ár"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"í "+o:o+" síðan":o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["jan","feb","mar","apr","maí","jún","júl","ágú","sep","okt","nóv","des"],n=["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"],o=["su","má","þr","mi","fi","fö","la"],i=["sun","mán","þri","mið","fim","fös","lau"],r=["sunnudaginn","mánudaginn","þriðjudaginn","miðvikudaginn","fimmtudaginn","föstudaginn","laugardaginn"],a=["AM","PM"],s=["am","pm"],u=["a.m.","p.m."],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){return""+e}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"meno di un secondo",other:"meno di {{count}} secondi"},xSeconds:{one:"un secondo",other:"{{count}} secondi"},halfAMinute:"alcuni secondi",lessThanXMinutes:{one:"meno di un minuto",other:"meno di {{count}} minuti"},xMinutes:{one:"un minuto",other:"{{count}} minuti"},aboutXHours:{one:"circa un'ora",other:"circa {{count}} ore"},xHours:{one:"un'ora",other:"{{count}} ore"},xDays:{one:"un giorno",other:"{{count}} giorni"},aboutXMonths:{one:"circa un mese",other:"circa {{count}} mesi"},xMonths:{one:"un mese",other:"{{count}} mesi"},aboutXYears:{one:"circa un anno",other:"circa {{count}} anni"},xYears:{one:"un anno",other:"{{count}} anni"},overXYears:{one:"più di un anno",other:"più di {{count}} anni"},almostXYears:{one:"quasi un anno",other:"quasi {{count}} anni"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"tra "+o:o+" fa":o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],n=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],o=["do","lu","ma","me","gi","ve","sa"],i=["dom","lun","mar","mer","gio","ven","sab"],r=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],a=["AM","PM"],s=["am","pm"],u=["a.m.","p.m."],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){return e+"º"}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"1秒以下",other:"{{count}}秒以下"},xSeconds:{one:"1秒",other:"{{count}}秒"},halfAMinute:"30秒ぐらい",lessThanXMinutes:{one:"1分以下",other:"{{count}}分以下"},xMinutes:{one:"1分",other:"{{count}}分"},aboutXHours:{one:"1時間ぐらい",other:"{{count}}時間ぐらい"},xHours:{one:"1時間",other:"{{count}}時間"},xDays:{one:"1日",other:"{{count}}日"},aboutXMonths:{one:"1ヶ月ぐらい",other:"{{count}}ヶ月ぐらい"},xMonths:{one:"1ヶ月",other:"{{count}}ヶ月"},aboutXYears:{one:"1年ぐらい",other:"{{count}}年ぐらい"},xYears:{one:"1年",other:"{{count}}年"},overXYears:{one:"1年以上",other:"{{count}}年以上"},almostXYears:{one:"1年以下",other:"{{count}}年以下"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?o+"後":o+"前":o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],n=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],o=["日","月","火","水","木","金","土"],i=["日曜","月曜","火曜","水曜","木曜","金曜","土曜"],r=["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],a=["午前","午後"],s=["午前","午後"],u=["午前","午後"],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){return e+"日"}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"1초 미만",other:"{{count}}초 미만"},xSeconds:{one:"1초",other:"{{count}}초"},halfAMinute:"30초",lessThanXMinutes:{one:"1분 미만",other:"{{count}}분 미만"},xMinutes:{one:"1분",other:"{{count}}분"},aboutXHours:{one:"약 1시간",other:"약 {{count}}시간"},xHours:{one:"1시간",other:"{{count}}시간"},xDays:{one:"1일",other:"{{count}}일"},aboutXMonths:{one:"약 1개월",other:"약 {{count}}개월"},xMonths:{one:"1개월",other:"{{count}}개월"},aboutXYears:{one:"약 1년",other:"약 {{count}}년"},xYears:{one:"1년",other:"{{count}}년"},overXYears:{one:"1년 이상",other:"{{count}}년 이상"},almostXYears:{one:"거의 1년",other:"거의 {{count}}년"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?o+" 후":o+" 전":o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],n=["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],o=["일","월","화","수","목","금","토"],i=["일","월","화","수","목","금","토"],r=["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],a=["오전","오후"],s=["오전","오후"],u=["오전","오후"],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){return e+"일"}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"помалку од секунда",other:"помалку од {{count}} секунди"},xSeconds:{one:"1 секунда",other:"{{count}} секунди"},halfAMinute:"половина минута",lessThanXMinutes:{one:"помалку од минута",other:"помалку од {{count}} минути"},xMinutes:{one:"1 минута",other:"{{count}} минути"},aboutXHours:{one:"околу 1 час",other:"околу {{count}} часа"},xHours:{one:"1 час",other:"{{count}} часа"},xDays:{one:"1 ден",other:"{{count}} дена"},aboutXMonths:{one:"околу 1 месец",other:"околу {{count}} месеци"},xMonths:{one:"1 месец",other:"{{count}} месеци"},aboutXYears:{one:"околу 1 година",other:"околу {{count}} години"},xYears:{one:"1 година",other:"{{count}} години"},overXYears:{one:"повеќе од 1 година",other:"повеќе од {{count}} години"},almostXYears:{one:"безмалку 1 година",other:"безмалку {{count}} години"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"за "+o:"пред "+o:o}}}},function(e,t,n){var s=n(2);e.exports=function buildFormatLocale(){var t=["јан","фев","мар","апр","мај","јун","јул","авг","сеп","окт","ное","дек"],n=["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември"],o=["не","по","вт","ср","че","пе","са"],i=["нед","пон","вто","сре","чет","пет","саб"],r=["недела","понеделник","вторник","среда","четврток","петок","сабота"],a=["претпладне","попладне"],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?a[1]:a[0]},aa:function(e){return 1<=e.getHours()/12?a[1]:a[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){var t=e%100;if(20<t||t<10)switch(t%10){case 1:return e+"-ви";case 2:return e+"-ри";case 7:case 8:return e+"-ми"}return e+"-ти"}(t[n](e))}}),{formatters:e,formattingTokensRegExp:s(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"rundt en time",other:"rundt {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXMonths:{one:"rundt en måned",other:"rundt {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"rundt ett år",other:"rundt {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"om "+o:o+" siden":o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["jan.","feb.","mars","april","mai","juni","juli","aug.","sep.","okt.","nov.","des."],n=["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],o=["sø","ma","ti","on","to","fr","lø"],i=["sø.","ma.","ti.","on.","to.","fr.","lø."],r=["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],a=["AM","PM"],s=["am","pm"],u=["a.m.","p.m."],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){return e+"."}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"minder dan een seconde",other:"minder dan {{count}} seconden"},xSeconds:{one:"1 seconde",other:"{{count}} seconden"},halfAMinute:"een halve minuut",lessThanXMinutes:{one:"minder dan een minuut",other:"minder dan {{count}} minuten"},xMinutes:{one:"een minuut",other:"{{count}} minuten"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} uur"},xHours:{one:"1 uur",other:"{{count}} uur"},xDays:{one:"1 dag",other:"{{count}} dagen"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maanden"},xMonths:{one:"1 maand",other:"{{count}} maanden"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer dan 1 jaar",other:"meer dan {{count}} jaar"},almostXYears:{one:"bijna 1 jaar",other:"bijna {{count}} jaar"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"over "+o:o+" geleden":o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["jan","feb","mar","apr","mei","jun","jul","aug","sep","okt","nov","dec"],n=["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],o=["zo","ma","di","wo","do","vr","za"],i=["zon","maa","din","woe","don","vri","zat"],r=["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],a=["AM","PM"],s=["am","pm"],u=["a.m.","p.m."],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){return e+"e"}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){function declension(e,t,n){n=n||"regular";var o=function declensionGroup(e,t){if(1===t)return e.one;var n=t%100;if(n<=20&&10<n)return e.other;var o=n%10;return 2<=o&&o<=4?e.twoFour:e.other}(e,t);return(o[n]||o).replace("{{count}}",t)}e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:{regular:"mniej niż sekunda",past:"mniej niż sekundę",future:"mniej niż sekundę"},twoFour:"mniej niż {{count}} sekundy",other:"mniej niż {{count}} sekund"},xSeconds:{one:{regular:"sekunda",past:"sekundę",future:"sekundę"},twoFour:"{{count}} sekundy",other:"{{count}} sekund"},halfAMinute:{one:"pół minuty",twoFour:"pół minuty",other:"pół minuty"},lessThanXMinutes:{one:{regular:"mniej niż minuta",past:"mniej niż minutę",future:"mniej niż minutę"},twoFour:"mniej niż {{count}} minuty",other:"mniej niż {{count}} minut"},xMinutes:{one:{regular:"minuta",past:"minutę",future:"minutę"},twoFour:"{{count}} minuty",other:"{{count}} minut"},aboutXHours:{one:{regular:"około godzina",past:"około godziny",future:"około godzinę"},twoFour:"około {{count}} godziny",other:"około {{count}} godzin"},xHours:{one:{regular:"godzina",past:"godzinę",future:"godzinę"},twoFour:"{{count}} godziny",other:"{{count}} godzin"},xDays:{one:{regular:"dzień",past:"dzień",future:"1 dzień"},twoFour:"{{count}} dni",other:"{{count}} dni"},aboutXMonths:{one:"około miesiąc",twoFour:"około {{count}} miesiące",other:"około {{count}} miesięcy"},xMonths:{one:"miesiąc",twoFour:"{{count}} miesiące",other:"{{count}} miesięcy"},aboutXYears:{one:"około rok",twoFour:"około {{count}} lata",other:"około {{count}} lat"},xYears:{one:"rok",twoFour:"{{count}} lata",other:"{{count}} lat"},overXYears:{one:"ponad rok",twoFour:"ponad {{count}} lata",other:"ponad {{count}} lat"},almostXYears:{one:"prawie rok",twoFour:"prawie {{count}} lata",other:"prawie {{count}} lat"}};return{localize:function localize(e,t,n){var o=i[e];return(n=n||{}).addSuffix?0<n.comparison?"za "+declension(o,t,"future"):declension(o,t,"past")+" temu":declension(o,t)}}}},function(e,t,n){var s=n(2);e.exports=function buildFormatLocale(){var t=["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],n=["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"],o=["nd","pn","wt","śr","cz","pt","sb"],i=["niedz.","pon.","wt.","śr.","czw.","piąt.","sob."],r=["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],a=["w nocy","rano","po południu","wieczorem"],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){var t=e.getHours();return 17<=t?a[3]:12<=t?a[2]:4<=t?a[1]:a[0]}};return e.a=e.A,e.aa=e.A,["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return t[n](e).toString()}}),{formatters:e,formattingTokensRegExp:s(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"aproximadamente 1 hora",other:"aproximadamente {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXMonths:{one:"aproximadamente 1 mês",other:"aproximadamente {{count}} meses"},xMonths:{one:"1 mês",other:"{{count}} meses"},aboutXYears:{one:"aproximadamente 1 ano",other:"aproximadamente {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"daqui a "+o:"há "+o:o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],n=["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],o=["do","se","te","qa","qi","se","sa"],i=["dom","seg","ter","qua","qui","sex","sáb"],r=["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"],a=["AM","PM"],s=["am","pm"],u=["a.m.","p.m."],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){return e+"º"}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"mai puțin de o secundă",other:"mai puțin de {{count}} secunde"},xSeconds:{one:"1 secundă",other:"{{count}} secunde"},halfAMinute:"jumătate de minut",lessThanXMinutes:{one:"mai puțin de un minut",other:"mai puțin de {{count}} minute"},xMinutes:{one:"1 minut",other:"{{count}} minute"},aboutXHours:{one:"circa 1 oră",other:"circa {{count}} ore"},xHours:{one:"1 oră",other:"{{count}} ore"},xDays:{one:"1 zi",other:"{{count}} zile"},aboutXMonths:{one:"circa 1 lună",other:"circa {{count}} luni"},xMonths:{one:"1 lună",other:"{{count}} luni"},aboutXYears:{one:"circa 1 an",other:"circa {{count}} ani"},xYears:{one:"1 an",other:"{{count}} ani"},overXYears:{one:"peste 1 an",other:"peste {{count}} ani"},almostXYears:{one:"aproape 1 an",other:"aproape {{count}} ani"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"în "+o:o+" în urmă":o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["ian","feb","mar","apr","mai","iun","iul","aug","sep","oct","noi","dec"],n=["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"],o=["du","lu","ma","mi","jo","vi","sâ"],i=["dum","lun","mar","mie","joi","vin","sâm"],r=["duminică","luni","marți","miercuri","joi","vineri","sâmbăta"],a=["AM","PM"],s=["am","pm"],u=["a.m.","p.m."],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){return e.toString()}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){function declension(e,t){if(void 0!==e.one&&1===t)return e.one;var n=t%10,o=t%100;return 1===n&&11!==o?e.singularNominative.replace("{{count}}",t):2<=n&&n<=4&&(o<10||20<o)?e.singularGenitive.replace("{{count}}",t):e.pluralGenitive.replace("{{count}}",t)}function buildLocalizeTokenFn(n){return function(e,t){return t.addSuffix?0<t.comparison?n.future?declension(n.future,e):"через "+declension(n.regular,e):n.past?declension(n.past,e):declension(n.regular,e)+" назад":declension(n.regular,e)}}e.exports=function buildDistanceInWordsLocale(){var o={lessThanXSeconds:buildLocalizeTokenFn({regular:{one:"меньше секунды",singularNominative:"меньше {{count}} секунды",singularGenitive:"меньше {{count}} секунд",pluralGenitive:"меньше {{count}} секунд"},future:{one:"меньше, чем через секунду",singularNominative:"меньше, чем через {{count}} секунду",singularGenitive:"меньше, чем через {{count}} секунды",pluralGenitive:"меньше, чем через {{count}} секунд"}}),xSeconds:buildLocalizeTokenFn({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду назад",singularGenitive:"{{count}} секунды назад",pluralGenitive:"{{count}} секунд назад"},future:{singularNominative:"через {{count}} секунду",singularGenitive:"через {{count}} секунды",pluralGenitive:"через {{count}} секунд"}}),halfAMinute:function(e,t){return t.addSuffix?0<t.comparison?"через полминуты":"полминуты назад":"полминуты"},lessThanXMinutes:buildLocalizeTokenFn({regular:{one:"меньше минуты",singularNominative:"меньше {{count}} минуты",singularGenitive:"меньше {{count}} минут",pluralGenitive:"меньше {{count}} минут"},future:{one:"меньше, чем через минуту",singularNominative:"меньше, чем через {{count}} минуту",singularGenitive:"меньше, чем через {{count}} минуты",pluralGenitive:"меньше, чем через {{count}} минут"}}),xMinutes:buildLocalizeTokenFn({regular:{singularNominative:"{{count}} минута",singularGenitive:"{{count}} минуты",pluralGenitive:"{{count}} минут"},past:{singularNominative:"{{count}} минуту назад",singularGenitive:"{{count}} минуты назад",pluralGenitive:"{{count}} минут назад"},future:{singularNominative:"через {{count}} минуту",singularGenitive:"через {{count}} минуты",pluralGenitive:"через {{count}} минут"}}),aboutXHours:buildLocalizeTokenFn({regular:{singularNominative:"около {{count}} часа",singularGenitive:"около {{count}} часов",pluralGenitive:"около {{count}} часов"},future:{singularNominative:"приблизительно через {{count}} час",singularGenitive:"приблизительно через {{count}} часа",pluralGenitive:"приблизительно через {{count}} часов"}}),xHours:buildLocalizeTokenFn({regular:{singularNominative:"{{count}} час",singularGenitive:"{{count}} часа",pluralGenitive:"{{count}} часов"}}),xDays:buildLocalizeTokenFn({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} дней"}}),aboutXMonths:buildLocalizeTokenFn({regular:{singularNominative:"около {{count}} месяца",singularGenitive:"около {{count}} месяцев",pluralGenitive:"около {{count}} месяцев"},future:{singularNominative:"приблизительно через {{count}} месяц",singularGenitive:"приблизительно через {{count}} месяца",pluralGenitive:"приблизительно через {{count}} месяцев"}}),xMonths:buildLocalizeTokenFn({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяца",pluralGenitive:"{{count}} месяцев"}}),aboutXYears:buildLocalizeTokenFn({regular:{singularNominative:"около {{count}} года",singularGenitive:"около {{count}} лет",pluralGenitive:"около {{count}} лет"},future:{singularNominative:"приблизительно через {{count}} год",singularGenitive:"приблизительно через {{count}} года",pluralGenitive:"приблизительно через {{count}} лет"}}),xYears:buildLocalizeTokenFn({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} года",pluralGenitive:"{{count}} лет"}}),overXYears:buildLocalizeTokenFn({regular:{singularNominative:"больше {{count}} года",singularGenitive:"больше {{count}} лет",pluralGenitive:"больше {{count}} лет"},future:{singularNominative:"больше, чем через {{count}} год",singularGenitive:"больше, чем через {{count}} года",pluralGenitive:"больше, чем через {{count}} лет"}}),almostXYears:buildLocalizeTokenFn({regular:{singularNominative:"почти {{count}} год",singularGenitive:"почти {{count}} года",pluralGenitive:"почти {{count}} лет"},future:{singularNominative:"почти через {{count}} год",singularGenitive:"почти через {{count}} года",pluralGenitive:"почти через {{count}} лет"}})};return{localize:function localize(e,t,n){return n=n||{},o[e](t,n)}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["янв.","фев.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],n=["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],o=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],i=["вс","пн","вт","ср","чт","пт","сб"],r=["вск","пнд","втр","срд","чтв","птн","суб"],a=["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],s=["ночи","утра","дня","вечера"],u={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return i[e.getDay()]},ddd:function(e){return r[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){var t=e.getHours();return 17<=t?s[3]:12<=t?s[2]:4<=t?s[1]:s[0]},Do:function(e,t){return t.D(e)+"-е"},Wo:function(e,t){return t.W(e)+"-я"}};return u.a=u.A,u.aa=u.A,["M","DDD","d","Q"].forEach(function(n){u[n+"o"]=function(e,t){return t[n](e)+"-й"}}),["D","Do","DD"].forEach(function(n){u[n+" MMMM"]=function(e,t){return(u[n]||t[n])(e,t)+" "+o[e.getMonth()]}}),{formatters:u,formattingTokensRegExp:c(u)}}},function(e,t){function declension(e,t,n){var o=function declensionGroup(e,t){return 1===t?e.one:2<=t&&t<=4?e.twoFour:e.other}(e,t);return(o[n]||o).replace("{{count}}",t)}function prefixPreposition(e){var t="";return"almost"===e&&(t="takmer"),"about"===e&&(t="približne"),0<t.length?t+" ":""}function suffixPreposition(e){var t="";return"lessThan"===e&&(t="menej než"),"over"===e&&(t="viac než"),0<t.length?t+" ":""}e.exports=function buildDistanceInWordsLocale(){var a={xSeconds:{one:{regular:"sekunda",past:"sekundou",future:"sekundu"},twoFour:{regular:"{{count}} sekundy",past:"{{count}} sekundami",future:"{{count}} sekundy"},other:{regular:"{{count}} sekúnd",past:"{{count}} sekundami",future:"{{count}} sekúnd"}},halfAMinute:{other:{regular:"pol minúty",past:"pol minútou",future:"pol minúty"}},xMinutes:{one:{regular:"minúta",past:"minútou",future:"minútu"},twoFour:{regular:"{{count}} minúty",past:"{{count}} minútami",future:"{{count}} minúty"},other:{regular:"{{count}} minút",past:"{{count}} minútami",future:"{{count}} minút"}},xHours:{one:{regular:"hodina",past:"hodinou",future:"hodinu"},twoFour:{regular:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{regular:"{{count}} hodín",past:"{{count}} hodinami",future:"{{count}} hodín"}},xDays:{one:{regular:"deň",past:"dňom",future:"deň"},twoFour:{regular:"{{count}} dni",past:"{{count}} dňami",future:"{{count}} dni"},other:{regular:"{{count}} dní",past:"{{count}} dňami",future:"{{count}} dní"}},xMonths:{one:{regular:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{regular:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{regular:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xYears:{one:{regular:"rok",past:"rokom",future:"rok"},twoFour:{regular:"{{count}} roky",past:"{{count}} rokmi",future:"{{count}} roky"},other:{regular:"{{count}} rokov",past:"{{count}} rokmi",future:"{{count}} rokov"}}};return{localize:function localize(e,t,n){n=n||{};var o=function extractPreposition(t){return["lessThan","about","over","almost"].filter(function(e){return!!t.match(new RegExp("^"+e))})[0]}(e)||"",i=function lowercaseFirstLetter(e){return e.charAt(0).toLowerCase()+e.slice(1)}(e.substring(o.length)),r=a[i];return n.addSuffix?0<n.comparison?prefixPreposition(o)+"za "+suffixPreposition(o)+declension(r,t,"future"):prefixPreposition(o)+"pred "+suffixPreposition(o)+declension(r,t,"past"):prefixPreposition(o)+suffixPreposition(o)+declension(r,t,"regular")}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],n=["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"],o=["ne","po","ut","st","št","pi","so"],i=["neď","pon","uto","str","štv","pia","sob"],r=["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"],a=["AM","PM"],s=["am","pm"],u=["a.m.","p.m."],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){return e+"."}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"manj kot sekunda",two:"manj kot 2 sekundi",three:"manj kot {{count}} sekunde",other:"manj kot {{count}} sekund"},xSeconds:{one:"1 sekunda",two:"2 sekundi",three:"{{count}} sekunde",other:"{{count}} sekund"},halfAMinute:"pol minute",lessThanXMinutes:{one:"manj kot minuta",two:"manj kot 2 minuti",three:"manj kot {{count}} minute",other:"manj kot {{count}} minut"},xMinutes:{one:"1 minuta",two:"2 minuti",three:"{{count}} minute",other:"{{count}} minut"},aboutXHours:{one:"približno 1 ura",two:"približno 2 uri",three:"približno {{count}} ure",other:"približno {{count}} ur"},xHours:{one:"1 ura",two:"2 uri",three:"{{count}} ure",other:"{{count}} ur"},xDays:{one:"1 dan",two:"2 dni",three:"{{count}} dni",other:"{{count}} dni"},aboutXMonths:{one:"približno 1 mesec",two:"približno 2 meseca",three:"približno {{count}} mesece",other:"približno {{count}} mesecev"},xMonths:{one:"1 mesec",two:"2 meseca",three:"{{count}} meseci",other:"{{count}} mesecev"},aboutXYears:{one:"približno 1 leto",two:"približno 2 leti",three:"približno {{count}} leta",other:"približno {{count}} let"},xYears:{one:"1 leto",two:"2 leti",three:"{{count}} leta",other:"{{count}} let"},overXYears:{one:"več kot 1 leto",two:"več kot 2 leti",three:"več kot {{count}} leta",other:"več kot {{count}} let"},almostXYears:{one:"skoraj 1 leto",two:"skoraj 2 leti",three:"skoraj {{count}} leta",other:"skoraj {{count}} let"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:2===t?i[e].two:3===t||4===t?i[e].three.replace("{{count}}",t):i[e].other.replace("{{count}}",t),n.addSuffix?(o=o.replace(/(minut|sekund|ur)(a)/,"$1o"),"xMonths"===e&&(o=o.replace(/(mesec)(i)/,"$1e")),0<n.comparison?"čez "+o:o+" nazaj"):o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],n=["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"],o=["ne","po","to","sr","če","pe","so"],i=["ned","pon","tor","sre","čet","pet","sob"],r=["nedelja","ponedeljek","torek","sreda","četrtek","petek","sobota"],a=["AM","PM"],s=["am","pm"],u=["a.m.","p.m."],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){return e+"."}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var r={lessThanXSeconds:{singular:"mindre än en sekund",plural:"mindre än {{count}} sekunder"},xSeconds:{singular:"en sekund",plural:"{{count}} sekunder"},halfAMinute:"en halv minut",lessThanXMinutes:{singular:"mindre än en minut",plural:"mindre än {{count}} minuter"},xMinutes:{singular:"en minut",plural:"{{count}} minuter"},aboutXHours:{singular:"ungefär en timme",plural:"ungefär {{count}} timmar"},xHours:{singular:"en timme",plural:"{{count}} timmar"},xDays:{singular:"en dag",plural:"{{count}} dagar"},aboutXMonths:{singular:"ungefär en månad",plural:"ungefär {{count}} månader"},xMonths:{singular:"en månad",plural:"{{count}} månader"},aboutXYears:{singular:"ungefär ett år",plural:"ungefär {{count}} år"},xYears:{singular:"ett år",plural:"{{count}} år"},overXYears:{singular:"över ett år",plural:"över {{count}} år"},almostXYears:{singular:"nästan ett år",plural:"nästan {{count}} år"}},a=["noll","en","två","tre","fyra","fem","sex","sju","åtta","nio","tio","elva","tolv"];return{localize:function localize(e,t,n){n=n||{};var o,i=r[e];return o="string"==typeof i?i:0===t||1<t?i.plural.replace("{{count}}",t<13?a[t]:t):i.singular,n.addSuffix?0<n.comparison?"om "+o:o+" sedan":o}}}},function(e,t,n){var s=n(2);e.exports=function buildFormatLocale(){var t=["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],n=["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],o=["sö","må","ti","on","to","fr","lö"],i=["sön","mån","tis","ons","tor","fre","lör"],r=["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"],a=["f.m.","e.m."],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},aa:function(e){return 1<=e.getHours()/12?a[1]:a[0]}};return e.A=e.aa,e.a=e.aa,["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){var t=e%100;if(20<t||t<10)switch(t%10){case 1:case 2:return e+":a"}return e+":e"}(t[n](e))}}),{formatters:e,formattingTokensRegExp:s(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"น้อยกว่า 1 วินาที",other:"น้อยกว่า {{count}} วินาที"},xSeconds:{one:"1 วินาที",other:"{{count}} วินาที"},halfAMinute:"ครึ่งนาที",lessThanXMinutes:{one:"น้อยกว่า 1 นาที",other:"น้อยกว่า {{count}} นาที"},xMinutes:{one:"1 นาที",other:"{{count}} นาที"},aboutXHours:{one:"ประมาณ 1 ชั่วโมง",other:"ประมาณ {{count}} ชั่วโมง"},xHours:{one:"1 ชั่วโมง",other:"{{count}} ชั่วโมง"},xDays:{one:"1 วัน",other:"{{count}} วัน"},aboutXMonths:{one:"ประมาณ 1 เดือน",other:"ประมาณ {{count}} เดือน"},xMonths:{one:"1 เดือน",other:"{{count}} เดือน"},aboutXYears:{one:"ประมาณ 1 ปี",other:"ประมาณ {{count}} ปี"},xYears:{one:"1 ปี",other:"{{count}} ปี"},overXYears:{one:"มากกว่า 1 ปี",other:"มากกว่า {{count}} ปี"},almostXYears:{one:"เกือบ 1 ปี",other:"เกือบ {{count}} ปี"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"halfAMinute"===e?"ใน"+o:"ใน "+o:o+"ที่ผ่านมา":o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],n=["มกราคาม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],o=["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],i=["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],r=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],a=["น."],s=["น."],u=["นาฬิกา"],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return a[0]},a:function(e){return s[0]},aa:function(e){return u[0]}};return{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var r={lessThanXSeconds:{one:"bir saniyeden az",other:"{{count}} saniyeden az"},xSeconds:{one:"1 saniye",other:"{{count}} saniye"},halfAMinute:"yarım dakika",lessThanXMinutes:{one:"bir dakikadan az",other:"{{count}} dakikadan az"},xMinutes:{one:"1 dakika",other:"{{count}} dakika"},aboutXHours:{one:"yaklaşık 1 saat",other:"yaklaşık {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 gün",other:"{{count}} gün"},aboutXMonths:{one:"yaklaşık 1 ay",other:"yaklaşık {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"yaklaşık 1 yıl",other:"yaklaşık {{count}} yıl"},xYears:{one:"1 yıl",other:"{{count}} yıl"},overXYears:{one:"1 yıldan fazla",other:"{{count}} yıldan fazla"},almostXYears:{one:"neredeyse 1 yıl",other:"neredeyse {{count}} yıl"}},a=["lessThanXSeconds","lessThanXMinutes","overXYears"];return{localize:function localize(e,t,n){var o;if(n=n||{},o="string"==typeof r[e]?r[e]:1===t?r[e].one:r[e].other.replace("{{count}}",t),n.addSuffix){var i="";return-1<a.indexOf(e)&&(i=" bir süre"),0<n.comparison?o+i+" içinde":o+i+" önce"}return o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],n=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],o=["Pz","Pt","Sa","Ça","Pe","Cu","Ct"],i=["Paz","Pts","Sal","Çar","Per","Cum","Cts"],r=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],a=["ÖÖ","ÖS"],s=["öö","ös"],u=["ö.ö.","ö.s."],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){var t={1:"'inci",2:"'inci",3:"'üncü",4:"'üncü",5:"'inci",6:"'ıncı",7:"'inci",8:"'inci",9:"'uncu",10:"'uncu",20:"'inci",30:"'uncu",50:"'inci",60:"'ıncı",70:"'inci",80:"'inci",90:"'ıncı",100:"'üncü"};if(0===e)return"0'ıncı";var n=e%10,o=e%100-n,i=100<=e?100:null;return e+(t[n]||t[o]||t[i])}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"不到 1 秒",other:"不到 {{count}} 秒"},xSeconds:{one:"1 秒",other:"{{count}} 秒"},halfAMinute:"半分钟",lessThanXMinutes:{one:"不到 1 分钟",other:"不到 {{count}} 分钟"},xMinutes:{one:"1 分钟",other:"{{count}} 分钟"},xHours:{one:"1 小时",other:"{{count}} 小时"},aboutXHours:{one:"大约 1 小时",other:"大约 {{count}} 小时"},xDays:{one:"1 天",other:"{{count}} 天"},aboutXMonths:{one:"大约 1 个月",other:"大约 {{count}} 个月"},xMonths:{one:"1 个月",other:"{{count}} 个月"},aboutXYears:{one:"大约 1 年",other:"大约 {{count}} 年"},xYears:{one:"1 年",other:"{{count}} 年"},overXYears:{one:"超过 1 年",other:"超过 {{count}} 年"},almostXYears:{one:"将近 1 年",other:"将近 {{count}} 年"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?o+"内":o+"前":o}}}},function(e,t,n){var s=n(2);e.exports=function buildFormatLocale(){var t=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],n=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],o=["日","一","二","三","四","五","六"],i=["周日","周一","周二","周三","周四","周五","周六"],r=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],a=["上午","下午"],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]}};return e.a=e.aa=e.A=function(e){return 1<=e.getHours()/12?a[1]:a[0]},["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){return e.toString()}(t[n](e))}}),{formatters:e,formattingTokensRegExp:s(e)}}},function(e,t){e.exports=function buildDistanceInWordsLocale(){var i={lessThanXSeconds:{one:"少於 1 秒",other:"少於 {{count}} 秒"},xSeconds:{one:"1 秒",other:"{{count}} 秒"},halfAMinute:"半分鐘",lessThanXMinutes:{one:"少於 1 分鐘",other:"少於 {{count}} 分鐘"},xMinutes:{one:"1 分鐘",other:"{{count}} 分鐘"},xHours:{one:"1 小時",other:"{{count}} 小時"},aboutXHours:{one:"大約 1 小時",other:"大約 {{count}} 小時"},xDays:{one:"1 天",other:"{{count}} 天"},aboutXMonths:{one:"大約 1 個月",other:"大約 {{count}} 個月"},xMonths:{one:"1 個月",other:"{{count}} 個月"},aboutXYears:{one:"大約 1 年",other:"大約 {{count}} 年"},xYears:{one:"1 年",other:"{{count}} 年"},overXYears:{one:"超過 1 年",other:"超過 {{count}} 年"},almostXYears:{one:"將近 1 年",other:"將近 {{count}} 年"}};return{localize:function localize(e,t,n){var o;return n=n||{},o="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?o+"內":o+"前":o}}}},function(e,t,n){var c=n(2);e.exports=function buildFormatLocale(){var t=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],n=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],o=["日","一","二","三","四","五","六"],i=["周日","周一","周二","周三","周四","周五","周六"],r=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],a=["AM","PM"],s=["am","pm"],u=["上午","下午"],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return o[e.getDay()]},ddd:function(e){return i[e.getDay()]},dddd:function(e){return r[e.getDay()]},A:function(e){return 1<=e.getHours()/12?a[1]:a[0]},a:function(e){return 1<=e.getHours()/12?s[1]:s[0]},aa:function(e){return 1<=e.getHours()/12?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function ordinal(e){return e.toString()}(t[n](e))}}),{formatters:e,formattingTokensRegExp:c(e)}}},function(e,t,n){var a=n(0);e.exports=function startOfWeek(e,t){var n=t&&Number(t.weekStartsOn)||0,o=a(e),i=o.getDay(),r=(i<n?7:0)+i-n;return o.setDate(o.getDate()-r),o.setHours(0,0,0,0),o}},function(e,t,n){var a=n(5);e.exports=function differenceInCalendarDays(e,t){var n=a(e),o=a(t),i=n.getTime()-6e4*n.getTimezoneOffset(),r=o.getTime()-6e4*o.getTimezoneOffset();return Math.round((i-r)/864e5)}},function(e,t,n){var s=n(0),u=n(121);e.exports=function addMonths(e,t){var n=s(e),o=Number(t),i=n.getMonth()+o,r=new Date(0);r.setFullYear(n.getFullYear(),i,1),r.setHours(0,0,0,0);var a=u(r);return n.setMonth(i,Math.min(a,n.getDate())),n}},function(e,t,n){var i=n(0);e.exports=function differenceInMilliseconds(e,t){var n=i(e),o=i(t);return n.getTime()-o.getTime()}},function(e,t,n){var o={"./_lib/build_formatting_tokens_reg_exp":2,"./_lib/build_formatting_tokens_reg_exp/":2,"./_lib/build_formatting_tokens_reg_exp/index":2,"./_lib/build_formatting_tokens_reg_exp/index.js":2,"./_lib/package":196,"./_lib/package.json":196,"./ar":85,"./ar/":85,"./ar/build_distance_in_words_locale":14,"./ar/build_distance_in_words_locale/":14,"./ar/build_distance_in_words_locale/index":14,"./ar/build_distance_in_words_locale/index.js":14,"./ar/build_format_locale":15,"./ar/build_format_locale/":15,"./ar/build_format_locale/index":15,"./ar/build_format_locale/index.js":15,"./ar/index":85,"./ar/index.js":85,"./ar/package":197,"./ar/package.json":197,"./bg":86,"./bg/":86,"./bg/build_distance_in_words_locale":16,"./bg/build_distance_in_words_locale/":16,"./bg/build_distance_in_words_locale/index":16,"./bg/build_distance_in_words_locale/index.js":16,"./bg/build_format_locale":17,"./bg/build_format_locale/":17,"./bg/build_format_locale/index":17,"./bg/build_format_locale/index.js":17,"./bg/index":86,"./bg/index.js":86,"./bg/package":198,"./bg/package.json":198,"./ca":87,"./ca/":87,"./ca/build_distance_in_words_locale":18,"./ca/build_distance_in_words_locale/":18,"./ca/build_distance_in_words_locale/index":18,"./ca/build_distance_in_words_locale/index.js":18,"./ca/build_format_locale":19,"./ca/build_format_locale/":19,"./ca/build_format_locale/index":19,"./ca/build_format_locale/index.js":19,"./ca/index":87,"./ca/index.js":87,"./ca/package":199,"./ca/package.json":199,"./cs":88,"./cs/":88,"./cs/build_distance_in_words_locale":20,"./cs/build_distance_in_words_locale/":20,"./cs/build_distance_in_words_locale/index":20,"./cs/build_distance_in_words_locale/index.js":20,"./cs/build_format_locale":21,"./cs/build_format_locale/":21,"./cs/build_format_locale/index":21,"./cs/build_format_locale/index.js":21,"./cs/index":88,"./cs/index.js":88,"./cs/package":200,"./cs/package.json":200,"./da":89,"./da/":89,"./da/build_distance_in_words_locale":22,"./da/build_distance_in_words_locale/":22,"./da/build_distance_in_words_locale/index":22,"./da/build_distance_in_words_locale/index.js":22,"./da/build_format_locale":23,"./da/build_format_locale/":23,"./da/build_format_locale/index":23,"./da/build_format_locale/index.js":23,"./da/index":89,"./da/index.js":89,"./da/package":201,"./da/package.json":201,"./de":90,"./de/":90,"./de/build_distance_in_words_locale":24,"./de/build_distance_in_words_locale/":24,"./de/build_distance_in_words_locale/index":24,"./de/build_distance_in_words_locale/index.js":24,"./de/build_format_locale":25,"./de/build_format_locale/":25,"./de/build_format_locale/index":25,"./de/build_format_locale/index.js":25,"./de/index":90,"./de/index.js":90,"./de/package":202,"./de/package.json":202,"./el":91,"./el/":91,"./el/build_distance_in_words_locale":26,"./el/build_distance_in_words_locale/":26,"./el/build_distance_in_words_locale/index":26,"./el/build_distance_in_words_locale/index.js":26,"./el/build_format_locale":27,"./el/build_format_locale/":27,"./el/build_format_locale/index":27,"./el/build_format_locale/index.js":27,"./el/index":91,"./el/index.js":91,"./el/package":203,"./el/package.json":203,"./en":6,"./en/":6,"./en/build_distance_in_words_locale":12,"./en/build_distance_in_words_locale/":12,"./en/build_distance_in_words_locale/index":12,"./en/build_distance_in_words_locale/index.js":12,"./en/build_format_locale":13,"./en/build_format_locale/":13,"./en/build_format_locale/index":13,"./en/build_format_locale/index.js":13,"./en/index":6,"./en/index.js":6,"./en/package":204,"./en/package.json":204,"./eo":92,"./eo/":92,"./eo/build_distance_in_words_locale":28,"./eo/build_distance_in_words_locale/":28,"./eo/build_distance_in_words_locale/index":28,"./eo/build_distance_in_words_locale/index.js":28,"./eo/build_format_locale":29,"./eo/build_format_locale/":29,"./eo/build_format_locale/index":29,"./eo/build_format_locale/index.js":29,"./eo/index":92,"./eo/index.js":92,"./eo/package":205,"./eo/package.json":205,"./es":93,"./es/":93,"./es/build_distance_in_words_locale":30,"./es/build_distance_in_words_locale/":30,"./es/build_distance_in_words_locale/index":30,"./es/build_distance_in_words_locale/index.js":30,"./es/build_format_locale":31,"./es/build_format_locale/":31,"./es/build_format_locale/index":31,"./es/build_format_locale/index.js":31,"./es/index":93,"./es/index.js":93,"./es/package":206,"./es/package.json":206,"./fi":94,"./fi/":94,"./fi/build_distance_in_words_locale":32,"./fi/build_distance_in_words_locale/":32,"./fi/build_distance_in_words_locale/index":32,"./fi/build_distance_in_words_locale/index.js":32,"./fi/build_format_locale":33,"./fi/build_format_locale/":33,"./fi/build_format_locale/index":33,"./fi/build_format_locale/index.js":33,"./fi/index":94,"./fi/index.js":94,"./fi/package":207,"./fi/package.json":207,"./fil":95,"./fil/":95,"./fil/build_distance_in_words_locale":34,"./fil/build_distance_in_words_locale/":34,"./fil/build_distance_in_words_locale/index":34,"./fil/build_distance_in_words_locale/index.js":34,"./fil/build_format_locale":35,"./fil/build_format_locale/":35,"./fil/build_format_locale/index":35,"./fil/build_format_locale/index.js":35,"./fil/index":95,"./fil/index.js":95,"./fil/package":208,"./fil/package.json":208,"./fr":96,"./fr/":96,"./fr/build_distance_in_words_locale":36,"./fr/build_distance_in_words_locale/":36,"./fr/build_distance_in_words_locale/index":36,"./fr/build_distance_in_words_locale/index.js":36,"./fr/build_format_locale":37,"./fr/build_format_locale/":37,"./fr/build_format_locale/index":37,"./fr/build_format_locale/index.js":37,"./fr/index":96,"./fr/index.js":96,"./fr/package":209,"./fr/package.json":209,"./hr":97,"./hr/":97,"./hr/build_distance_in_words_locale":38,"./hr/build_distance_in_words_locale/":38,"./hr/build_distance_in_words_locale/index":38,"./hr/build_distance_in_words_locale/index.js":38,"./hr/build_format_locale":39,"./hr/build_format_locale/":39,"./hr/build_format_locale/index":39,"./hr/build_format_locale/index.js":39,"./hr/index":97,"./hr/index.js":97,"./hr/package":210,"./hr/package.json":210,"./hu":98,"./hu/":98,"./hu/build_distance_in_words_locale":40,"./hu/build_distance_in_words_locale/":40,"./hu/build_distance_in_words_locale/index":40,"./hu/build_distance_in_words_locale/index.js":40,"./hu/build_format_locale":41,"./hu/build_format_locale/":41,"./hu/build_format_locale/index":41,"./hu/build_format_locale/index.js":41,"./hu/index":98,"./hu/index.js":98,"./hu/package":211,"./hu/package.json":211,"./id":99,"./id/":99,"./id/build_distance_in_words_locale":42,"./id/build_distance_in_words_locale/":42,"./id/build_distance_in_words_locale/index":42,"./id/build_distance_in_words_locale/index.js":42,"./id/build_format_locale":43,"./id/build_format_locale/":43,"./id/build_format_locale/index":43,"./id/build_format_locale/index.js":43,"./id/index":99,"./id/index.js":99,"./id/package":212,"./id/package.json":212,"./is":100,"./is/":100,"./is/build_distance_in_words_locale":44,"./is/build_distance_in_words_locale/":44,"./is/build_distance_in_words_locale/index":44,"./is/build_distance_in_words_locale/index.js":44,"./is/build_format_locale":45,"./is/build_format_locale/":45,"./is/build_format_locale/index":45,"./is/build_format_locale/index.js":45,"./is/index":100,"./is/index.js":100,"./is/package":213,"./is/package.json":213,"./it":101,"./it/":101,"./it/build_distance_in_words_locale":46,"./it/build_distance_in_words_locale/":46,"./it/build_distance_in_words_locale/index":46,"./it/build_distance_in_words_locale/index.js":46,"./it/build_format_locale":47,"./it/build_format_locale/":47,"./it/build_format_locale/index":47,"./it/build_format_locale/index.js":47,"./it/index":101,"./it/index.js":101,"./it/package":214,"./it/package.json":214,"./ja":102,"./ja/":102,"./ja/build_distance_in_words_locale":48,"./ja/build_distance_in_words_locale/":48,"./ja/build_distance_in_words_locale/index":48,"./ja/build_distance_in_words_locale/index.js":48,"./ja/build_format_locale":49,"./ja/build_format_locale/":49,"./ja/build_format_locale/index":49,"./ja/build_format_locale/index.js":49,"./ja/index":102,"./ja/index.js":102,"./ja/package":215,"./ja/package.json":215,"./ko":103,"./ko/":103,"./ko/build_distance_in_words_locale":50,"./ko/build_distance_in_words_locale/":50,"./ko/build_distance_in_words_locale/index":50,"./ko/build_distance_in_words_locale/index.js":50,"./ko/build_format_locale":51,"./ko/build_format_locale/":51,"./ko/build_format_locale/index":51,"./ko/build_format_locale/index.js":51,"./ko/index":103,"./ko/index.js":103,"./ko/package":216,"./ko/package.json":216,"./mk":104,"./mk/":104,"./mk/build_distance_in_words_locale":52,"./mk/build_distance_in_words_locale/":52,"./mk/build_distance_in_words_locale/index":52,"./mk/build_distance_in_words_locale/index.js":52,"./mk/build_format_locale":53,"./mk/build_format_locale/":53,"./mk/build_format_locale/index":53,"./mk/build_format_locale/index.js":53,"./mk/index":104,"./mk/index.js":104,"./mk/package":217,"./mk/package.json":217,"./nb":105,"./nb/":105,"./nb/build_distance_in_words_locale":54,"./nb/build_distance_in_words_locale/":54,"./nb/build_distance_in_words_locale/index":54,"./nb/build_distance_in_words_locale/index.js":54,"./nb/build_format_locale":55,"./nb/build_format_locale/":55,"./nb/build_format_locale/index":55,"./nb/build_format_locale/index.js":55,"./nb/index":105,"./nb/index.js":105,"./nb/package":218,"./nb/package.json":218,"./nl":106,"./nl/":106,"./nl/build_distance_in_words_locale":56,"./nl/build_distance_in_words_locale/":56,"./nl/build_distance_in_words_locale/index":56,"./nl/build_distance_in_words_locale/index.js":56,"./nl/build_format_locale":57,"./nl/build_format_locale/":57,"./nl/build_format_locale/index":57,"./nl/build_format_locale/index.js":57,"./nl/index":106,"./nl/index.js":106,"./nl/package":219,"./nl/package.json":219,"./package":220,"./package.json":220,"./pl":107,"./pl/":107,"./pl/build_distance_in_words_locale":58,"./pl/build_distance_in_words_locale/":58,"./pl/build_distance_in_words_locale/index":58,"./pl/build_distance_in_words_locale/index.js":58,"./pl/build_format_locale":59,"./pl/build_format_locale/":59,"./pl/build_format_locale/index":59,"./pl/build_format_locale/index.js":59,"./pl/index":107,"./pl/index.js":107,"./pl/package":221,"./pl/package.json":221,"./pt":108,"./pt/":108,"./pt/build_distance_in_words_locale":60,"./pt/build_distance_in_words_locale/":60,"./pt/build_distance_in_words_locale/index":60,"./pt/build_distance_in_words_locale/index.js":60,"./pt/build_format_locale":61,"./pt/build_format_locale/":61,"./pt/build_format_locale/index":61,"./pt/build_format_locale/index.js":61,"./pt/index":108,"./pt/index.js":108,"./pt/package":222,"./pt/package.json":222,"./ro":109,"./ro/":109,"./ro/build_distance_in_words_locale":62,"./ro/build_distance_in_words_locale/":62,"./ro/build_distance_in_words_locale/index":62,"./ro/build_distance_in_words_locale/index.js":62,"./ro/build_format_locale":63,"./ro/build_format_locale/":63,"./ro/build_format_locale/index":63,"./ro/build_format_locale/index.js":63,"./ro/index":109,"./ro/index.js":109,"./ro/package":223,"./ro/package.json":223,"./ru":110,"./ru/":110,"./ru/build_distance_in_words_locale":64,"./ru/build_distance_in_words_locale/":64,"./ru/build_distance_in_words_locale/index":64,"./ru/build_distance_in_words_locale/index.js":64,"./ru/build_format_locale":65,"./ru/build_format_locale/":65,"./ru/build_format_locale/index":65,"./ru/build_format_locale/index.js":65,"./ru/index":110,"./ru/index.js":110,"./ru/package":224,"./ru/package.json":224,"./sk":111,"./sk/":111,"./sk/build_distance_in_words_locale":66,"./sk/build_distance_in_words_locale/":66,"./sk/build_distance_in_words_locale/index":66,"./sk/build_distance_in_words_locale/index.js":66,"./sk/build_format_locale":67,"./sk/build_format_locale/":67,"./sk/build_format_locale/index":67,"./sk/build_format_locale/index.js":67,"./sk/index":111,"./sk/index.js":111,"./sk/package":225,"./sk/package.json":225,"./sl":112,"./sl/":112,"./sl/build_distance_in_words_locale":68,"./sl/build_distance_in_words_locale/":68,"./sl/build_distance_in_words_locale/index":68,"./sl/build_distance_in_words_locale/index.js":68,"./sl/build_format_locale":69,"./sl/build_format_locale/":69,"./sl/build_format_locale/index":69,"./sl/build_format_locale/index.js":69,"./sl/index":112,"./sl/index.js":112,"./sl/package":226,"./sl/package.json":226,"./sv":113,"./sv/":113,"./sv/build_distance_in_words_locale":70,"./sv/build_distance_in_words_locale/":70,"./sv/build_distance_in_words_locale/index":70,"./sv/build_distance_in_words_locale/index.js":70,"./sv/build_format_locale":71,"./sv/build_format_locale/":71,"./sv/build_format_locale/index":71,"./sv/build_format_locale/index.js":71,"./sv/index":113,"./sv/index.js":113,"./sv/package":227,"./sv/package.json":227,"./th":114,"./th/":114,"./th/build_distance_in_words_locale":72,"./th/build_distance_in_words_locale/":72,"./th/build_distance_in_words_locale/index":72,"./th/build_distance_in_words_locale/index.js":72,"./th/build_format_locale":73,"./th/build_format_locale/":73,"./th/build_format_locale/index":73,"./th/build_format_locale/index.js":73,"./th/index":114,"./th/index.js":114,"./th/package":228,"./th/package.json":228,"./tr":115,"./tr/":115,"./tr/build_distance_in_words_locale":74,"./tr/build_distance_in_words_locale/":74,"./tr/build_distance_in_words_locale/index":74,"./tr/build_distance_in_words_locale/index.js":74,"./tr/build_format_locale":75,"./tr/build_format_locale/":75,"./tr/build_format_locale/index":75,"./tr/build_format_locale/index.js":75,"./tr/index":115,"./tr/index.js":115,"./tr/package":229,"./tr/package.json":229,"./zh_cn":116,"./zh_cn/":116,"./zh_cn/build_distance_in_words_locale":76,"./zh_cn/build_distance_in_words_locale/":76,"./zh_cn/build_distance_in_words_locale/index":76,"./zh_cn/build_distance_in_words_locale/index.js":76,"./zh_cn/build_format_locale":77,"./zh_cn/build_format_locale/":77,"./zh_cn/build_format_locale/index":77,"./zh_cn/build_format_locale/index.js":77,"./zh_cn/index":116,"./zh_cn/index.js":116,"./zh_cn/package":230,"./zh_cn/package.json":230,"./zh_tw":117,"./zh_tw/":117,"./zh_tw/build_distance_in_words_locale":78,"./zh_tw/build_distance_in_words_locale/":78,"./zh_tw/build_distance_in_words_locale/index":78,"./zh_tw/build_distance_in_words_locale/index.js":78,"./zh_tw/build_format_locale":79,"./zh_tw/build_format_locale/":79,"./zh_tw/build_format_locale/index":79,"./zh_tw/build_format_locale/index.js":79,"./zh_tw/index":117,"./zh_tw/index.js":117,"./zh_tw/package":231,"./zh_tw/package.json":231};function webpackContext(e){return n(webpackContextResolve(e))}function webpackContextResolve(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}webpackContext.keys=function webpackContextKeys(){return Object.keys(o)},webpackContext.resolve=webpackContextResolve,(e.exports=webpackContext).id=84},function(e,t,n){var o=n(14),i=n(15);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(16),i=n(17);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(18),i=n(19);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(20),i=n(21);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(22),i=n(23);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(24),i=n(25);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(26),i=n(27);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(28),i=n(29);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(30),i=n(31);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(32),i=n(33);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(34),i=n(35);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(36),i=n(37);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(38),i=n(39);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(40),i=n(41);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(42),i=n(43);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(44),i=n(45);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(46),i=n(47);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(48),i=n(49);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(50),i=n(51);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(52),i=n(53);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(54),i=n(55);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(56),i=n(57);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(58),i=n(59);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(60),i=n(61);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(62),i=n(63);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(64),i=n(65);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(66),i=n(67);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(68),i=n(69);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(70),i=n(71);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(72),i=n(73);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(74),i=n(75);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(76),i=n(77);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){var o=n(78),i=n(79);e.exports={distanceInWords:o(),format:i()}},function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i});Object.assign;var o=function uuid(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"")+([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})},i=function detectSupportsPassive(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function get(){e=!0}});window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}catch(e){}return e}},function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"e",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"d",function(){return s}),n.d(t,"a",function(){return c});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function isFunction(e){return"function"==typeof e},r=function isString(e){return"string"==typeof e||!!e&&"object"===(void 0===e?"undefined":o(e))&&"[object String]"===Object.prototype.toString.call(e)},a=function isDate(e){return("[object Date]"===Object.prototype.toString.call(e)||e instanceof Date)&&!isNaN(e.valueOf())},s=function isObject(e){return("function"==typeof e||"object"===(void 0===e?"undefined":o(e))&&!!e)&&!Array.isArray(e)},u=/^(?:f(?:alse)?|no?|0+)$/i,c=function BooleanParse(e){return!u.test(e)&&!!e}},function(e,t){e.exports=function isDate(e){return e instanceof Date}},function(e,t,n){var r=n(0);e.exports=function getDaysInMonth(e){var t=r(e),n=t.getFullYear(),o=t.getMonth(),i=new Date(0);return i.setFullYear(n,o+1,0),i.setHours(0,0,0,0),i.getDate()}},function(e,t,n){var o=n(8);e.exports=function addWeeks(e,t){var n=Number(t);return o(e,7*n)}},function(e,t,n){var i=n(0);e.exports=function compareDesc(e,t){var n=i(e).getTime(),o=i(t).getTime();return o<n?-1:n<o?1:0}},function(e,t,n){var a=n(0),s=n(138),u=n(11);e.exports=function differenceInMonths(e,t){var n=a(e),o=a(t),i=u(n,o),r=Math.abs(s(n,o));return n.setMonth(n.getMonth()-i*r),i*(r-(u(n,o)===-i))}},function(e,t,n){var o=n(83);e.exports=function differenceInSeconds(e,t){var n=o(e,t)/1e3;return 0<n?Math.floor(n):Math.ceil(n)}},function(e,t,n){var o=n(0);e.exports=function endOfDay(e){var t=o(e);return t.setHours(23,59,59,999),t}},function(e,t,n){var o=n(0),i=n(4),r=n(10);e.exports=function getISOWeek(e){var t=o(e),n=i(t).getTime()-r(t).getTime();return Math.round(n/6048e5)+1}},function(e,t,n){var r=n(80);e.exports=function isSameWeek(e,t,n){var o=r(e,n),i=r(t,n);return o.getTime()===i.getTime()}},function(e,t,n){"use strict";var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var i=function(){function EventEmitter(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,EventEmitter),this._listeners=new Map(e),this._middlewares=new Map}return o(EventEmitter,[{key:"listenerCount",value:function listenerCount(e){return this._listeners.has(e)?this._listeners.get(e).length:0}},{key:"removeListeners",value:function removeListeners(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,n=1<arguments.length&&void 0!==arguments[1]&&arguments[1];null!==e?Array.isArray(e)?name.forEach(function(e){return t.removeListeners(e,n)}):(this._listeners.delete(e),n&&this.removeMiddleware(e)):this._listeners=new Map}},{key:"middleware",value:function middleware(e,t){var n=this;Array.isArray(e)?name.forEach(function(e){return n.middleware(e,t)}):(Array.isArray(this._middlewares.get(e))||this._middlewares.set(e,[]),this._middlewares.get(e).push(t))}},{key:"removeMiddleware",value:function removeMiddleware(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null!==e?Array.isArray(e)?name.forEach(function(e){return t.removeMiddleware(e)}):this._middlewares.delete(e):this._middlewares=new Map}},{key:"on",value:function on(e,t){var n=this,o=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(Array.isArray(e))e.forEach(function(e){return n.on(e,t)});else{var i=(e=e.toString()).split(/,|, | /);1<i.length?i.forEach(function(e){return n.on(e,t)}):(Array.isArray(this._listeners.get(e))||this._listeners.set(e,[]),this._listeners.get(e).push({once:o,callback:t}))}}},{key:"once",value:function once(e,t){this.on(e,t,!0)}},{key:"emit",value:function emit(n,o){var i=this,r=2<arguments.length&&void 0!==arguments[2]&&arguments[2];n=n.toString();var a=this._listeners.get(n),s=null,u=0,c=r;if(Array.isArray(a))for(a.forEach(function(e,t){r||(s=i._middlewares.get(n),Array.isArray(s)?(s.forEach(function(e){e(o,function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null!==e&&(o=e),u++},n)}),u>=s.length&&(c=!0)):c=!0),c&&(e.once&&(a[t]=null),e.callback({type:n,timeStamp:(new Date).getTime(),data:o}))});-1!==a.indexOf(null);)a.splice(a.indexOf(null),1)}}]),EventEmitter}();t.a=i},function(e,t,n){var o=n(9);e.exports=function addHours(e,t){var n=Number(t);return o(e,36e5*n)}},function(e,t,n){var o=n(3),i=n(132);e.exports=function addISOYears(e,t){var n=Number(t);return i(e,o(e)+n)}},function(e,t,n){var a=n(0),s=n(10),u=n(81);e.exports=function setISOYear(e,t){var n=a(e),o=Number(t),i=u(n,s(n)),r=new Date(0);return r.setFullYear(o,0,4),r.setHours(0,0,0,0),(n=s(r)).setDate(n.getDate()+i),n}},function(e,t,n){var o=n(9);e.exports=function addMinutes(e,t){var n=Number(t);return o(e,6e4*n)}},function(e,t,n){var o=n(82);e.exports=function addQuarters(e,t){var n=Number(t);return o(e,3*n)}},function(e,t,n){var o=n(9);e.exports=function addSeconds(e,t){var n=Number(t);return o(e,1e3*n)}},function(e,t,n){var o=n(82);e.exports=function addYears(e,t){var n=Number(t);return o(e,12*n)}},function(e,t,n){var o=n(3);e.exports=function differenceInCalendarISOYears(e,t){return o(e)-o(t)}},function(e,t,n){var i=n(0);e.exports=function differenceInCalendarMonths(e,t){var n=i(e),o=i(t);return 12*(n.getFullYear()-o.getFullYear())+(n.getMonth()-o.getMonth())}},function(e,t,n){var o=n(0);e.exports=function getQuarter(e){var t=o(e);return Math.floor(t.getMonth()/3)+1}},function(e,t,n){var i=n(0);e.exports=function differenceInCalendarYears(e,t){var n=i(e),o=i(t);return n.getFullYear()-o.getFullYear()}},function(e,t,n){var a=n(0),s=n(81),u=n(11);e.exports=function differenceInDays(e,t){var n=a(e),o=a(t),i=u(n,o),r=Math.abs(s(n,o));return n.setDate(n.getDate()-i*r),i*(r-(u(n,o)===-i))}},function(e,t,n){var o=n(131);e.exports=function subISOYears(e,t){var n=Number(t);return o(e,-n)}},function(e,t,n){var v=n(123),g=n(0),b=n(125),_=n(124),M=n(6);e.exports=function distanceInWords(e,t,n){var o=n||{},i=v(e,t),r=o.locale,a=M.distanceInWords.localize;r&&r.distanceInWords&&r.distanceInWords.localize&&(a=r.distanceInWords.localize);var s,u,c={addSuffix:Boolean(o.addSuffix),comparison:i};u=0<i?(s=g(e),g(t)):(s=g(t),g(e));var d,l=b(u,s),f=u.getTimezoneOffset()-s.getTimezoneOffset(),h=Math.round(l/60)-f;if(h<2)return o.includeSeconds?l<5?a("lessThanXSeconds",5,c):l<10?a("lessThanXSeconds",10,c):l<20?a("lessThanXSeconds",20,c):l<40?a("halfAMinute",null,c):a(l<60?"lessThanXMinutes":"xMinutes",1,c):0===h?a("lessThanXMinutes",1,c):a("xMinutes",h,c);if(h<45)return a("xMinutes",h,c);if(h<90)return a("aboutXHours",1,c);if(h<1440)return a("aboutXHours",Math.round(h/60),c);if(h<2520)return a("xDays",1,c);if(h<43200)return a("xDays",Math.round(h/1440),c);if(h<86400)return a("aboutXMonths",d=Math.round(h/43200),c);if((d=_(u,s))<12)return a("xMonths",Math.round(h/43200),c);var m=d%12,p=Math.floor(d/12);return m<3?a("aboutXYears",p,c):m<9?a("overXYears",p,c):a("almostXYears",p+1,c)}},function(e,t,n){var a=n(0);e.exports=function endOfWeek(e,t){var n=t&&Number(t.weekStartsOn)||0,o=a(e),i=o.getDay(),r=6+(i<n?-7:0)-(i-n);return o.setDate(o.getDate()+r),o.setHours(23,59,59,999),o}},function(e,t,n){var o=n(0);e.exports=function endOfMonth(e){var t=o(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}},function(e,t,n){var o=n(0),i=n(147),r=n(81);e.exports=function getDayOfYear(e){var t=o(e);return r(t,i(t))+1}},function(e,t,n){var o=n(0);e.exports=function startOfYear(e){var t=o(e),n=new Date(0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}},function(e,t,n){var o=n(120);e.exports=function isValid(e){if(o(e))return!isNaN(e);throw new TypeError(toString.call(e)+" is not an instance of Date")}},function(e,t,n){var o=n(0);e.exports=function isLeapYear(e){var t=o(e).getFullYear();return t%400==0||t%4==0&&t%100!=0}},function(e,t,n){var o=n(0);e.exports=function getISODay(e){var t=o(e).getDay();return 0===t&&(t=7),t}},function(e,t,n){var i=n(152);e.exports=function isSameHour(e,t){var n=i(e),o=i(t);return n.getTime()===o.getTime()}},function(e,t,n){var o=n(0);e.exports=function startOfHour(e){var t=o(e);return t.setMinutes(0,0,0),t}},function(e,t,n){var o=n(128);e.exports=function isSameISOWeek(e,t){return o(e,t,{weekStartsOn:1})}},function(e,t,n){var i=n(10);e.exports=function isSameISOYear(e,t){var n=i(e),o=i(t);return n.getTime()===o.getTime()}},function(e,t,n){var i=n(156);e.exports=function isSameMinute(e,t){var n=i(e),o=i(t);return n.getTime()===o.getTime()}},function(e,t,n){var o=n(0);e.exports=function startOfMinute(e){var t=o(e);return t.setSeconds(0,0),t}},function(e,t,n){var i=n(0);e.exports=function isSameMonth(e,t){var n=i(e),o=i(t);return n.getFullYear()===o.getFullYear()&&n.getMonth()===o.getMonth()}},function(e,t,n){var i=n(159);e.exports=function isSameQuarter(e,t){var n=i(e),o=i(t);return n.getTime()===o.getTime()}},function(e,t,n){var i=n(0);e.exports=function startOfQuarter(e){var t=i(e),n=t.getMonth(),o=n-n%3;return t.setMonth(o,1),t.setHours(0,0,0,0),t}},function(e,t,n){var i=n(161);e.exports=function isSameSecond(e,t){var n=i(e),o=i(t);return n.getTime()===o.getTime()}},function(e,t,n){var o=n(0);e.exports=function startOfSecond(e){var t=o(e);return t.setMilliseconds(0),t}},function(e,t,n){var i=n(0);e.exports=function isSameYear(e,t){var n=i(e),o=i(t);return n.getFullYear()===o.getFullYear()}},function(e,t,n){var a=n(0);e.exports=function lastDayOfWeek(e,t){var n=t&&Number(t.weekStartsOn)||0,o=a(e),i=o.getDay(),r=6+(i<n?-7:0)-(i-n);return o.setHours(0,0,0,0),o.setDate(o.getDate()+r),o}},function(e,t,n){var u=n(0),c=n(121);e.exports=function setMonth(e,t){var n=u(e),o=Number(t),i=n.getFullYear(),r=n.getDate(),a=new Date(0);a.setFullYear(i,o,15),a.setHours(0,0,0,0);var s=c(a);return n.setMonth(o,Math.min(r,s)),n}},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){var t=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"],n={"٠":0,"١":1,"٢":2,"٣":3,"٤":4,"٥":5,"٦":6,"٧":7,"٨":8,"٩":9};e.setLocales("ar",{MMMM:["كانون الثاني يناير","شباط فبراير","آذار مارس","نيسان أبريل","أيار مايو","حزيران يونيو","تموز يوليو","آب أغسطس","أيلول سبتمبر","تشرين الأول أكتوبر","تشرين الثاني نوفمبر","كانون الأول ديسمبر"],MMM:["كانون الثاني يناير","شباط فبراير","آذار مارس","نيسان أبريل","أيار مايو","حزيران يونيو","تموز يوليو","آب أغسطس","أيلول سبتمبر","تشرين الأول أكتوبر","تشرين الثاني نوفمبر","كانون الأول ديسمبر"],dddd:["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],ddd:["أحد","إثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],dd:["ح","ن","ث","ر","خ","ج","س"],A:["ص","م"],formatter:{post:function(e){return e.replace(/\d/g,function(e){return t[0|e]})}},parser:{pre:function(e){return e.replace(/[٠١٢٣٤٥٦٧٨٩]/g,function(e){return""+n[e]})}}})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("az",{MMMM:["yanvar","fevral","mart","aprel","may","iyun","iyul","avqust","sentyabr","oktyabr","noyabr","dekabr"],MMM:["yan","fev","mar","apr","may","iyn","iyl","avq","sen","okt","noy","dek"],dddd:["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"],ddd:["Baz","BzE","ÇAx","Çər","CAx","Cüm","Şən"],dd:["Bz","BE","ÇA","Çə","CA","Cü","Şə"],A:["gecə","səhər","gündüz","axşam"],formatter:{A:function(e){var t=e.getHours();return t<4?this.A[0]:t<12?this.A[1]:t<17?this.A[2]:this.A[3]}},parser:{h:function(e,t){return t<2?e:11<e?e:e+12}}})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("bn",{MMMM:["জানুয়ারী","ফেবুয়ারী","মার্চ","এপ্রিল","মে","জুন","জুলাই","অগাস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"],MMM:["জানু","ফেব","মার্চ","এপর","মে","জুন","জুল","অগ","সেপ্ট","অক্টো","নভ","ডিসেম্"],dddd:["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পত্তিবার","শুক্রবার","শনিবার"],ddd:["রবি","সোম","মঙ্গল","বুধ","বৃহস্পত্তি","শুক্র","শনি"],dd:["রব","সম","মঙ্গ","বু","ব্রিহ","শু","শনি"],A:["রাত","সকাল","দুপুর","বিকাল"],formatter:{A:function(e){var t=e.getHours();return t<4?this.A[0]:t<10?this.A[1]:t<17?this.A[2]:t<20?this.A[3]:this.A[0]}},parser:{h:function(e,t){return t<1?e<4||11<e?e:e+12:t<2?e:t<3&&9<e?e:e+12}}})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("cs",{MMMM:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"],MMM:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],dddd:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],ddd:["ne","po","út","st","čt","pá","so"],dd:["ne","po","út","st","čt","pá","so"]})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("de",{MMMM:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],MMM:["Jan.","Febr.","Mrz.","Apr.","Mai","Jun.","Jul.","Aug.","Sept.","Okt.","Nov.","Dez."],dddd:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],ddd:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],dd:["So","Mo","Di","Mi","Do","Fr","Sa"],A:["Uhr nachmittags","Uhr morgens"]})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("el",{MMMM:{nominative:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],genitive:["Ιανουαρίου","Φεβρουαρίου","Μαρτίου","Απριλίου","Μαΐου","Ιουνίου","Ιουλίου","Αυγούστου","Σεπτεμβρίου","Οκτωβρίου","Νοεμβρίου","Δεκεμβρίου"]},MMM:["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],dddd:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],ddd:["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"],dd:["Κυ","Δε","Τρ","Τε","Πε","Πα","Σα"],A:["πμ","μμ"],formatter:{MMMM:function(e,t){return this.MMMM[/D.*MMMM/.test(t)?"genitive":"nominative"][e.getMonth()]},hh:function(e){return("0"+e.getHours()%12).slice(-2)},h:function(e){return e.getHours()%12}},parser:{MMMM:function(e,t){return this.parser.find(this.MMMM[/D.*MMMM/.test(t)?"genitive":"nominative"],e)}}})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("es",{MMMM:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],MMM:["Ene.","Feb.","Mar.","Abr.","May.","Jun.","Jul.","Ago.","Sep.","Oct.","Nov.","Dic."],dddd:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],ddd:["Dom.","Lun.","Mar.","Mié.","Jue.","Vie.","Sáb."],dd:["Do","Lu","Ma","Mi","Ju","Vi","Sá"],A:["de la mañana","de la tarde","de la noche"],formatter:{A:function(e){var t=e.getHours();return t<12?this.A[0]:t<19?this.A[1]:this.A[2]}},parser:{h:function(e,t){return t<1?e:11<e?e:e+12}}})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){var t=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"],n={"۰":0,"۱":1,"۲":2,"۳":3,"۴":4,"۵":5,"۶":6,"۷":7,"۸":8,"۹":9};e.setLocales("fa",{MMMM:["ژانویه","فوریه","مارس","آوریل","مه","ژوئن","ژوئیه","اوت","سپتامبر","اکتبر","نوامبر","دسامبر"],MMM:["ژانویه","فوریه","مارس","آوریل","مه","ژوئن","ژوئیه","اوت","سپتامبر","اکتبر","نوامبر","دسامبر"],dddd:["یک‌شنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه","شنبه"],ddd:["یک‌شنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه","شنبه"],dd:["ی","د","س","چ","پ","ج","ش"],A:["قبل از ظهر","بعد از ظهر"],formatter:{post:function(e){return e.replace(/\d/g,function(e){return t[0|e]})}},parser:{pre:function(e){return e.replace(/[۰۱۲۳۴۵۶۷۸۹]/g,function(e){return""+n[e]})}}})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("fr",{MMMM:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],MMM:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],dddd:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],ddd:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],dd:["Di","Lu","Ma","Me","Je","Ve","Sa"],A:["matin","l'après-midi"]})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("hi",{MMMM:["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्टूबर","नवम्बर","दिसम्बर"],MMM:["जन.","फ़र.","मार्च","अप्रै.","मई","जून","जुल.","अग.","सित.","अक्टू.","नव.","दिस."],dddd:["रविवार","सोमवार","मंगलवार","बुधवार","गुरूवार","शुक्रवार","शनिवार"],ddd:["रवि","सोम","मंगल","बुध","गुरू","शुक्र","शनि"],dd:["र","सो","मं","बु","गु","शु","श"],A:["रात","सुबह","दोपहर","शाम"],formatter:{A:function(e){var t=e.getHours();return t<4?this.A[0]:t<10?this.A[1]:t<17?this.A[2]:t<20?this.A[3]:this.A[0]}},parser:{h:function(e,t){return t<1?e<4||11<e?e:e+12:t<2?e:t<3&&9<e?e:e+12}}})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("hu",{MMMM:["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"],MMM:["jan","feb","márc","ápr","máj","jún","júl","aug","szept","okt","nov","dec"],dddd:["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"],ddd:["vas","hét","kedd","sze","csüt","pén","szo"],dd:["v","h","k","sze","cs","p","szo"],A:["de","du"]})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("id",{MMMM:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],MMM:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Ags","Sep","Okt","Nov","Des"],dddd:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],ddd:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],dd:["Mg","Sn","Sl","Rb","Km","Jm","Sb"],A:["pagi","siang","sore","malam"],formatter:{A:function(e){var t=e.getHours();return t<11?this.A[0]:t<15?this.A[1]:t<19?this.A[2]:this.A[3]}},parser:{h:function(e,t){return t<1?e:t<2&&11<=e?e:e+12}}})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("it",{MMMM:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],MMM:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],dddd:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],ddd:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],dd:["Do","Lu","Ma","Me","Gi","Ve","Sa"],A:["di mattina","di pomerrigio"]})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("ja",{MMMM:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],MMM:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dddd:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],ddd:["日","月","火","水","木","金","土"],dd:["日","月","火","水","木","金","土"],A:["午前","午後"],formatter:{hh:function(e){return("0"+e.getHours()%12).slice(-2)},h:function(e){return e.getHours()%12}}})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("jv",{MMMM:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember"],MMM:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Ags","Sep","Okt","Nop","Des"],dddd:["Minggu","Senen","Seloso","Rebu","Kemis","Jemuwah","Septu"],ddd:["Min","Sen","Sel","Reb","Kem","Jem","Sep"],dd:["Mg","Sn","Sl","Rb","Km","Jm","Sp"],A:["enjing","siyang","sonten","ndalu"],formatter:{A:function(e){var t=e.getHours();return t<11?this.A[0]:t<15?this.A[1]:t<19?this.A[2]:this.A[3]}},parser:{h:function(e,t){return t<1?e:t<2&&11<=e?e:e+12}}})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("ko",{MMMM:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],MMM:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],dddd:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],ddd:["일","월","화","수","목","금","토"],dd:["일","월","화","수","목","금","토"],A:["오전","오후"]})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){var t=["၀","၁","၂","၃","၄","၅","၆","၇","၈","၉"],n={"၀":0,"၁":1,"၂":2,"၃":3,"၄":4,"၅":5,"၆":6,"၇":7,"၈":8,"၉":9};e.setLocales("my",{MMMM:["ဇန်နဝါရီ","ဖေဖော်ဝါရီ","မတ်","ဧပြီ","မေ","ဇွန်","ဇူလိုင်","သြဂုတ်","စက်တင်ဘာ","အောက်တိုဘာ","နိုဝင်ဘာ","ဒီဇင်ဘာ"],MMM:["ဇန်","ဖေ","မတ်","ပြီ","မေ","ဇွန်","လိုင်","သြ","စက်","အောက်","နို","ဒီ"],dddd:["တနင်္ဂနွေ","တနင်္လာ","အင်္ဂါ","ဗုဒ္ဓဟူး","ကြာသပတေး","သောကြာ","စနေ"],ddd:["နွေ","လာ","ဂါ","ဟူး","ကြာ","သော","နေ"],dd:["နွေ","လာ","ဂါ","ဟူး","ကြာ","သော","နေ"],formatter:{post:function(e){return e.replace(/\d/g,function(e){return t[0|e]})}},parser:{pre:function(e){return e.replace(/[၀၁၂၃၄၅၆၇၈၉]/g,function(e){return""+n[e]})}}})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("nl",{MMMM:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],MMM:{withdots:["jan.","feb.","mrt.","apr.","mei","jun.","jul.","aug.","sep.","okt.","nov.","dec."],withoutdots:["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"]},dddd:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],ddd:["zo.","ma.","di.","wo.","do.","vr.","za."],dd:["Zo","Ma","Di","Wo","Do","Vr","Za"],formatter:{MMM:function(e,t){return this.MMM[/-MMM-/.test(t)?"withoutdots":"withdots"][e.getMonth()]}},parser:{MMM:function(e,t){return this.parser.find(this.MMM[/-MMM-/.test(t)?"withoutdots":"withdots"],e)}}})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){var t=["੦","੧","੨","੩","੪","੫","੬","੭","੮","੯"],n={"੦":0,"੧":1,"੨":2,"੩":3,"੪":4,"੫":5,"੬":6,"੭":7,"੮":8,"੯":9};e.setLocales("pa-in",{MMMM:["ਜਨਵਰੀ","ਫ਼ਰਵਰੀ","ਮਾਰਚ","ਅਪ੍ਰੈਲ","ਮਈ","ਜੂਨ","ਜੁਲਾਈ","ਅਗਸਤ","ਸਤੰਬਰ","ਅਕਤੂਬਰ","ਨਵੰਬਰ","ਦਸੰਬਰ"],MMM:["ਜਨਵਰੀ","ਫ਼ਰਵਰੀ","ਮਾਰਚ","ਅਪ੍ਰੈਲ","ਮਈ","ਜੂਨ","ਜੁਲਾਈ","ਅਗਸਤ","ਸਤੰਬਰ","ਅਕਤੂਬਰ","ਨਵੰਬਰ","ਦਸੰਬਰ"],dddd:["ਐਤਵਾਰ","ਸੋਮਵਾਰ","ਮੰਗਲਵਾਰ","ਬੁਧਵਾਰ","ਵੀਰਵਾਰ","ਸ਼ੁੱਕਰਵਾਰ","ਸ਼ਨੀਚਰਵਾਰ"],ddd:["ਐਤ","ਸੋਮ","ਮੰਗਲ","ਬੁਧ","ਵੀਰ","ਸ਼ੁਕਰ","ਸ਼ਨੀ"],dd:["ਐਤ","ਸੋਮ","ਮੰਗਲ","ਬੁਧ","ਵੀਰ","ਸ਼ੁਕਰ","ਸ਼ਨੀ"],A:["ਰਾਤ","ਸਵੇਰ","ਦੁਪਹਿਰ","ਸ਼ਾਮ"],formatter:{A:function(e){var t=e.getHours();return t<4?this.A[0]:t<10?this.A[1]:t<17?this.A[2]:t<20?this.A[3]:this.A[0]},post:function(e){return e.replace(/\d/g,function(e){return t[0|e]})}},parser:{h:function(e,t){return t<1?e<4||11<e?e:e+12:t<2?e:t<3&&10<=e?e:e+12},pre:function(e){return e.replace(/[੦੧੨੩੪੫੬੭੮੯]/g,function(e){return""+n[e]})}}})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("pl",{MMMM:{nominative:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"],subjective:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"]},MMM:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],dddd:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],ddd:["nie","pon","wt","śr","czw","pt","sb"],dd:["Nd","Pn","Wt","Śr","Cz","Pt","So"],formatter:{MMMM:function(e,t){return this.MMMM[/D MMMM/.test(t)?"subjective":"nominative"][e.getMonth()]}},parser:{MMMM:function(e,t){return this.parser.find(this.MMMM[/D MMMM/.test(t)?"subjective":"nominative"],e)}}})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("pt",{MMMM:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],MMM:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dddd:["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"],ddd:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],dd:["Dom","2ª","3ª","4ª","5ª","6ª","Sáb"],A:["da madrugada","da manhã","da tarde","da noite"],formatter:{A:function(e){var t=e.getHours();return t<5?this.A[0]:t<12?this.A[1]:t<19?this.A[2]:this.A[3]}},parser:{h:function(e,t){return t<2?e:11<e?e:e+12}}})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("ro",{MMMM:["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"],MMM:["ian.","febr.","mart.","apr.","mai","iun.","iul.","aug.","sept.","oct.","nov.","dec."],dddd:["duminică","luni","marți","miercuri","joi","vineri","sâmbătă"],ddd:["Dum","Lun","Mar","Mie","Joi","Vin","Sâm"],dd:["Du","Lu","Ma","Mi","Jo","Vi","Sâ"]})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("ru",{MMMM:["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"],MMM:["янв","фев","мар","апр","мая","июня","июля","авг","сен","окт","ноя","дек"],dddd:["Воскресенье","Понедельник","Вторник","Среду","Четверг","Пятницу","Субботу"],ddd:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],dd:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],A:["ночи","утра","дня","вечера"],formatter:{A:function(e){var t=e.getHours();return t<4?this.A[0]:t<12?this.A[1]:t<17?this.A[2]:this.A[3]}},parser:{h:function(e,t){return t<2?e:11<e?e:e+12}}})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("sr",{MMMM:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],MMM:["jan.","feb.","mar.","apr.","maj","jun","jul","avg.","sep.","okt.","nov.","dec."],dddd:["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"],ddd:["ned.","pon.","uto.","sre.","čet.","pet.","sub."],dd:["ne","po","ut","sr","če","pe","su"]})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("th",{MMMM:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],MMM:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],dddd:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],ddd:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์","เสาร์"],dd:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],A:["ก่อนเที่ยง","หลังเที่ยง"]})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("tr",{MMMM:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],MMM:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],dddd:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],ddd:["Paz","Pts","Sal","Çar","Per","Cum","Cts"],dd:["Pz","Pt","Sa","Ça","Pe","Cu","Ct"]})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("uk",{MMMM:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"],MMM:["січ","лют","бер","квіт","трав","черв","лип","серп","вер","жовт","лист","груд"],dddd:{nominative:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"],accusative:["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"],genitive:["неділі","понеділка","вівторка","середи","четверга","п’ятниці","суботи"]},ddd:["нд","пн","вт","ср","чт","пт","сб"],dd:["нд","пн","вт","ср","чт","пт","сб"],A:["ночі","ранку","дня","вечора"],formatter:{A:function(e){var t=e.getHours();return t<4?this.A[0]:t<12?this.A[1]:t<17?this.A[2]:this.A[3]},dddd:function(e,t){var n="nominative";return/(\[[ВвУу]\]) ?dddd/.test(t)?n="accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)&&(n="genitive"),this.dddd[n][e.getDay()]}},parser:{h:function(e,t){return t<2?e:11<e?e:e+12}}})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("uz",{MMMM:["январ","феврал","март","апрел","май","июн","июл","август","сентябр","октябр","ноябр","декабр"],MMM:["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"],dddd:["Якшанба","Душанба","Сешанба","Чоршанба","Пайшанба","Жума","Шанба"],ddd:["Якш","Душ","Сеш","Чор","Пай","Жум","Шан"],dd:["Як","Ду","Се","Чо","Па","Жу","Ша"]})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("vi",{MMMM:["tháng 1","tháng 2","tháng 3","tháng 4","tháng 5","tháng 6","tháng 7","tháng 8","tháng 9","tháng 10","tháng 11","tháng 12"],MMM:["Th01","Th02","Th03","Th04","Th05","Th06","Th07","Th08","Th09","Th10","Th11","Th12"],dddd:["chủ nhật","thứ hai","thứ ba","thứ tư","thứ năm","thứ sáu","thứ bảy"],ddd:["CN","T2","T3","T4","T5","T6","T7"],dd:["CN","T2","T3","T4","T5","T6","T7"],A:["sa","ch"]})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("zh-cn",{MMMM:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],MMM:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dddd:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],ddd:["周日","周一","周二","周三","周四","周五","周六"],dd:["日","一","二","三","四","五","六"],A:["凌晨","早上","上午","中午","下午","晚上"],formatter:{A:function(e){var t=100*e.getHours()+e.getMinutes();return t<600?this.A[0]:t<900?this.A[1]:t<1130?this.A[2]:t<1230?this.A[3]:t<1800?this.A[4]:this.A[5]}},parser:{h:function(e,t){return t<4?e:11<e?e:e+12}}})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(n,o,i){var r,a,s;!function(e){"use strict";var t=function(e){e.setLocales("zh-tw",{MMMM:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],MMM:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dddd:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],ddd:["周日","周一","周二","周三","周四","周五","周六"],dd:["日","一","二","三","四","五","六"],A:["早上","上午","中午","下午","晚上"],formatter:{A:function(e){var t=100*e.getHours()+e.getMinutes();return t<900?this.A[0]:t<1130?this.A[1]:t<1230?this.A[2]:t<1800?this.A[3]:this.A[4]}},parser:{h:function(e,t){return t<3?e:11<e?e:e+12}}})};"object"==typeof n&&"object"==typeof n.exports?t(i(1)):(a=[i(1)],void 0===(s="function"==typeof(r=t)?r.apply(o,a):r)||(n.exports=s))}()},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t){e.exports={typings:"../../typings.d.ts"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(118),r=n(119),a=n(7),o=(n.n(a),n(1)),s=n.n(o),u=n(129),c=n(332),d=n(339),l=n(342),f=n(343),h=n(344),m=n(345),p=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},g=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var b=function(e){function bulmaCalendar(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,bulmaCalendar);var n=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(bulmaCalendar.__proto__||Object.getPrototypeOf(bulmaCalendar)).call(this));if(n.element=r.e(e)?document.querySelector(e):e,!n.element)throw new Error("An invalid selector or non-DOM node has been provided.");n._clickEvents=["click","touch"],n._supportsPassive=i.a();var o=n.element.dataset?Object.keys(n.element.dataset).filter(function(e){return Object.keys(l.a).includes(e)}).reduce(function(e,t){return v({},e,function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,n.element.dataset[t]))},{}):{};if(n.options=v({},l.a,t,o),void 0===n.options.type)switch(n.element.getAttribute("type")){case"date":n.options.type="date";break;case"time":n.options.type="time";break;default:n.options.type="datetime"}return n._id=i.b("datetimePicker"),n.onToggleDateTimePicker=n.onToggleDateTimePicker.bind(n),n.onCloseDateTimePicker=n.onCloseDateTimePicker.bind(n),n.onDocumentClickDateTimePicker=n.onDocumentClickDateTimePicker.bind(n),n.onValidateClickDateTimePicker=n.onValidateClickDateTimePicker.bind(n),n.onTodayClickDateTimePicker=n.onTodayClickDateTimePicker.bind(n),n.onClearClickDateTimePicker=n.onClearClickDateTimePicker.bind(n),n.onCancelClickDateTimePicker=n.onCancelClickDateTimePicker.bind(n),n.onSelectDateTimePicker=n.onSelectDateTimePicker.bind(n),n._init(),n}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(bulmaCalendar,u["a"]),g(bulmaCalendar,[{key:"onSelectDateTimePicker",value:function onSelectDateTimePicker(e){this.refresh(),this.save(),"select"===e.type&&this.options.closeOnSelect&&"inline"!==this.options.displayMode&&this.hide(),this.emit(e.type,this)}},{key:"onDocumentClickDateTimePicker",value:function onDocumentClickDateTimePicker(e){var t=e.target||e.srcElement;!this._ui.wrapper.contains(t)&&"inline"!==this.options.displayMode&&this._open&&this.onCloseDateTimePicker(e)}},{key:"onToggleDateTimePicker",value:function onToggleDateTimePicker(e){this._supportsPassive||e.preventDefault(),e.stopPropagation(),this._open?this.hide():this.show()}},{key:"onValidateClickDateTimePicker",value:function onValidateClickDateTimePicker(e){this._supportsPassive||e.preventDefault(),e.stopPropagation(),this.save(),this.emit("select",this),"inline"!==this.options.displayMode&&this.onCloseDateTimePicker(e)}},{key:"onTodayClickDateTimePicker",value:function onTodayClickDateTimePicker(e){this._supportsPassive||e.preventDefault(),e.stopPropagation(),this.datePicker.value(new Date),this.datePicker.refresh(),this.timePicker.value(new Date),this.timePicker.refresh(),this.save()}},{key:"onClearClickDateTimePicker",value:function onClearClickDateTimePicker(e){this._supportsPassive||e.preventDefault(),e.stopPropagation(),this.clear(),this.emit("clear",this)}},{key:"onCancelClickDateTimePicker",value:function onCancelClickDateTimePicker(e){this._supportsPassive||e.preventDefault(),e.stopPropagation(),this._snapshots.length&&(this.datePicker=this._snapshots[0].datePicker,this.timePicker=this._snapshots[0].timePicker),this.save(),"inline"!==this.options.displayMode&&this.onCloseDateTimePicker(e)}},{key:"onCloseDateTimePicker",value:function onCloseDateTimePicker(e){this._supportsPassive||e.preventDefault(),e.stopPropagation(),this.hide()}},{key:"isRange",value:function isRange(){return this.options.isRange}},{key:"isOpen",value:function isOpen(){return this._open}},{key:"value",value:function value(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;if(!e){var t="";switch(this.options.type){case"date":t=this.datePicker.value();break;case"time":t=this.timePicker.value();break;case"datetime":var n=this.datePicker.start?a.getTime(a.addMinutes(a.addHours(this.datePicker.start,a.getHours(this.timePicker.start)),a.getMinutes(this.timePicker.start))):void 0,o=this.datePicker.end?a.getTime(this.datePicker.end):void 0;o&&this.options.isRange&&(o=a.getTime(a.addMinutes(a.addHours(this.datePicker.end,a.getHours(this.timePicker.end)),a.getMinutes(this.timePicker.end)))),t=n?a.format(new Date(n),this.format,{locale:this.locale}):"",o&&(t+=" - "+(o?a.format(new Date(o),this.format,{locale:this.locale}):""))}return t}this.datePicker.value(e),this.timePicker.value(e)}},{key:"refresh",value:function refresh(){this._ui.header.start.day.innerHTML=this.datePicker.start?a.format(this.datePicker.start,"DD",{locale:this.locale}):"--",this._ui.header.start.month.innerHTML=this.datePicker.start?a.format(this.datePicker.start,"MMMM YYYY",{locale:this.locale}):"",this.datePicker.start?(this._ui.header.start.weekday.classList.remove("is-hidden"),this._ui.header.start.weekday.innerHTML=this.datePicker.start?a.format(this.datePicker.start,"dddd",{locale:this.locale}):""):this._ui.header.start.weekday.classList.add("is-hidden"),this._ui.header.start.hour&&(this._ui.header.start.hour.innerHTML=this.timePicker.start?a.format(this.timePicker.start,"HH:mm",{locale:this.locale}):"--:--"),this._ui.header.end&&(this._ui.header.end.day.innerHTML=this.options.isRange&&this.datePicker.end?a.format(this.datePicker.end,"DD",{locale:this.locale}):"--",this._ui.header.end.month.innerHTML=this.options.isRange&&this.datePicker.end?a.format(this.datePicker.end,"MMMM YYYY",{locale:this.locale}):"",this.datePicker.end?(this._ui.header.end.weekday.classList.remove("is-hidden"),this._ui.header.end.weekday.innerHTML=this.datePicker.end?a.format(this.datePicker.end,"dddd",{locale:this.locale}):""):this._ui.header.end.weekday.classList.add("is-hidden"),this._ui.header.end&&this._ui.header.end.hour&&(this._ui.header.end.hour.innerHTML=this.timePicker.end?a.format(this.timePicker.end,"HH:mm",{locale:this.locale}):"--:--")),this.emit("refresh",this)}},{key:"clear",value:function clear(){this.datePicker.clear(),this.timePicker.clear(),this.refresh(),this.element.value="",this._ui.dummy.dummy_1.value="",this._ui.dummy.dummy_2&&(this._ui.dummy.dummy_2.value=""),this.emit("clear",this)}},{key:"show",value:function show(){this._snapshots=[],this.snapshot(),this.element.value&&(this.datePicker.value(this.element.value),this.timePicker.value(this.element.value)),this.datePicker.show(),this.timePicker.hide(),this._ui.modal&&this._ui.modal.classList.add("is-active"),this._ui.wrapper.classList.add("is-active"),this._open=!0,this.emit("show",this)}},{key:"hide",value:function hide(){this._open=!1,this._focus=!1,this._ui.modal&&this._ui.modal.classList.remove("is-active"),this._ui.wrapper.classList.remove("is-active"),this.emit("hide",this)}},{key:"save",value:function save(){var e=this.value(),t=e.split(" - "),n=p(t,2),o=n[0],i=n[1];this.element.value=e,this._ui.dummy.dummy_1.value=o||"",this._ui.dummy.dummy_2&&(this._ui.dummy.dummy_2.value=i||"")}},{key:"snapshot",value:function snapshot(){}},{key:"destroy",value:function destroy(){this._ui.wrapper.remove()}},{key:"_init",value:function _init(){this._open=!1,this._snapshots=[],this._type=-1<["date","time","datetime"].indexOf(this.options.type.toLowerCase())?this.options.type.toLowerCase():"date",this.element.setAttribute("type","text"),this.datePicker=new c.a(v({},this.options,{lang:this.lang})),this.timePicker=new d.a(v({},this.options,{lang:this.lang})),this.element.value&&(this.datePicker.value(this.element.value),this.timePicker.value(this.element.value)),this.lang=this.options.lang,this.format="date"===this._type?this.options.dateFormat:"time"===this._type?this.options.timeFormat:this.options.dateFormat+" "+this.options.timeFormat,"default"===this.options.displayMode&&window.matchMedia("screen and (max-width: 768px)").matches&&(this.options.displayMode="dialog"),window.matchMedia("screen and (max-width: 768px)").matches&&("default"===this.options.displayMode&&(this.options.displayMode="dialog"),this.options.displayDual=!1),this._build(),this._bindEvents(),this.save(),r.c(this.options.onReady)&&this.on("ready",this.options.onReady),this.emit("ready",this)}},{key:"_build",value:function _build(){var e=document.createRange().createContextualFragment(Object(h.a)(v({},this.options,{type:this._type,datePicker:"time"!==this.options.type,timePicker:"date"!==this.options.type}))),t=document.createRange().createContextualFragment(Object(m.a)(this.options)),n=document.createRange().createContextualFragment(Object(f.a)(v({},this.options,{id:this.id})));switch(this._ui={modal:n.querySelector(".modal"),wrapper:n.querySelector(".datetimepicker"),container:n.querySelector(".datetimepicker-container"),dummy:{container:n.querySelector(".datetimepicker-dummy"),wrapper:n.querySelector(".datetimepicker-dummy-wrapper"),dummy_1:n.querySelector(".datetimepicker-dummy .datetimepicker-dummy-input:nth-child(1)"),dummy_2:n.querySelector(".datetimepicker-dummy .datetimepicker-dummy-input:nth-child(2)"),clear:n.querySelector(".datetimepicker-dummy .datetimepicker-clear-button")},calendar:n.querySelector(".datetimepicker"),overlay:"dialog"===this.options.displayMode?{background:n.querySelector(".modal-background"),close:n.querySelector(".modal-close")}:void 0,header:{container:e.querySelector(".datetimepicker-header"),start:{container:e.querySelector(".datetimepicker-selection-start"),day:e.querySelector(".datetimepicker-selection-start .datetimepicker-selection-day"),month:e.querySelector(".datetimepicker-selection-start .datetimepicker-selection-month"),weekday:e.querySelector(".datetimepicker-selection-start .datetimepicker-selection-weekday"),hour:e.querySelector(".datetimepicker-selection-start .datetimepicker-selection-hour"),empty:e.querySelector(".datetimepicker-selection-start .empty")},end:this.options.isRange?{container:e.querySelector(".datetimepicker-selection-end"),day:e.querySelector(".datetimepicker-selection-end .datetimepicker-selection-day"),month:e.querySelector(".datetimepicker-selection-end .datetimepicker-selection-month"),weekday:e.querySelector(".datetimepicker-selection-end .datetimepicker-selection-weekday"),hour:e.querySelector(".datetimepicker-selection-end .datetimepicker-selection-hour"),empty:e.querySelector(".datetimepicker-selection-start .empty")}:void 0},footer:{container:t.querySelector(".datetimepicker-footer"),validate:t.querySelector(".datetimepicker-footer-validate"),today:t.querySelector(".datetimepicker-footer-today"),clear:t.querySelector(".datetimepicker-footer-clear"),cancel:t.querySelector(".datetimepicker-footer-cancel")}},r.a(this.options.showHeader)||this._ui.header.container.classList.add("is-hidden"),r.a(this.options.showFooter)||this._ui.footer.container.classList.add("is-hidden"),r.a(this.options.showTodayButton)||this._ui.footer.today.classList.add("is-hidden"),r.a(this.options.showClearButton)||this._ui.footer.clear.classList.add("is-hidden"),this.options.closeOnSelect&&this._ui.footer.validate&&this._ui.footer.validate.classList.add("is-hidden"),this._ui.container.appendChild(e),this._type){case"date":this._ui.container.appendChild(this.datePicker.render());break;case"time":this._ui.container.appendChild(this.timePicker.render()),this._ui.footer.validate&&this._ui.footer.validate.classList.remove("is-hidden"),this._ui.footer.today&&this._ui.footer.today.classList.add("is-hidden");break;case"datetime":this.options.closeOnSelect=!1,this._ui.footer.validate&&this._ui.footer.validate.classList.remove("is-hidden"),this._ui.container.appendChild(this.datePicker.render()),this._ui.container.appendChild(this.timePicker.render())}this._ui.wrapper.appendChild(t),this._ui.wrapper.classList.add("is-"+this.options.color),this._ui.dummy.container.classList.add("is-"+this.options.color),this.element.parentNode.insertBefore(n,this.element.nextSibling),this._ui.dummy.wrapper.appendChild(this.element),this.element.classList.add("is-hidden"),"inline"===this.options.displayMode?this._ui.wrapper.classList.add("is-active"):(this._ui.dummy.container.classList.remove("is-hidden"),this._ui.wrapper.style.position="absolute",this._ui.wrapper.classList.add("is-datetimepicker-default")),this.refresh()}},{key:"_bindEvents",value:function _bindEvents(){var t=this;this._clickEvents.forEach(function(e){document.body.addEventListener(e,t.onDocumentClickDateTimePicker)}),this.datePicker.on("select",this.onSelectDateTimePicker),this.datePicker.on("select:start",this.onSelectDateTimePicker),this.datePicker.on("select:end",this.onSelectDateTimePicker),this.timePicker.on("select",this.onSelectDateTimePicker),this.timePicker.on("select:start",this.onSelectDateTimePicker),this.timePicker.on("select:end",this.onSelectDateTimePicker),!0===this.options.toggleOnInputClick&&this._clickEvents.forEach(function(e){t._ui.dummy.wrapper.addEventListener(e,t.onToggleDateTimePicker),t.element.addEventListener(e,t.onToggleDateTimePicker)}),"dialog"===this.options.displayMode&&this._ui.overlay&&(this._ui.overlay.close&&this._clickEvents.forEach(function(e){t.this._ui.overlay.close.addEventListener(e,t.onCloseDateTimePicker)}),this.options.closeOnOverlayClick&&this._ui.overlay.background&&this._clickEvents.forEach(function(e){t._ui.overlay.background.addEventListener(e,t.onCloseDateTimePicker)})),this._ui.footer.validate&&this._clickEvents.forEach(function(e){t._ui.footer.validate.addEventListener(e,t.onValidateClickDateTimePicker)}),this._ui.footer.today&&this._clickEvents.forEach(function(e){t._ui.footer.today.addEventListener(e,t.onTodayClickDateTimePicker)}),this._ui.footer.clear&&this._clickEvents.forEach(function(e){t._ui.footer.clear.addEventListener(e,t.onClearClickDateTimePicker)}),this._clickEvents.forEach(function(e){t._ui.dummy.clear.addEventListener(e,t.onClearClickDateTimePicker)}),this._ui.footer.cancel&&this._clickEvents.forEach(function(e){t._ui.footer.cancel.addEventListener(e,t.onCancelClickDateTimePicker)})}},{key:"id",get:function get(){return this._id}},{key:"lang",set:function set(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"en";try{this._locale=n(84)("./"+t)}catch(e){t="en",this._locale=n(84)("./"+t)}finally{return this._lang=t,this.datePicker.lang=t,this.timePicker.lang=t,this}},get:function get(){return this._lang}},{key:"locale",get:function get(){return this._locale}},{key:"format",set:function set(e){return this._format=e,this},get:function get(){return this._format}},{key:"date",set:function set(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return this.datePicker.date=e,this},get:function get(){return this.datePicker.date}},{key:"startDate",set:function set(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:void 0;return this.datePicker.start=s.a.parse(e,this.dateFormat),this},get:function get(){return this.datePicker.start}},{key:"endDate",set:function set(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:void 0;return this.datePicker.end=s.a.parse(e,this.dateFormat),this},get:function get(){return this.datePicker.end}},{key:"minDate",set:function set(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:void 0;return this.datePicker.minDate=s.a.parse(e,this.dateFormat),this},get:function get(){return this.datePicker.minDate}},{key:"maxDate",set:function set(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:void 0;return this.datePicker.maxDate=s.a.parse(e,this.dateFormat),this},get:function get(){return this.datePicker.maxDate}},{key:"dateFormat",set:function set(e){return this.datePicker.dateFormat=e,this},get:function get(){return this.datePicker.dateFormat}},{key:"time",set:function set(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return this.timePicker.time=e,this},get:function get(){return this.timePicker.time}},{key:"startTime",set:function set(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:void 0;return this.timePicker.start=e,this},get:function get(){return this.timePicker.start}},{key:"endTime",set:function set(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:void 0;return this.timePicker.end=e,this},get:function get(){return this.timePicker.end}},{key:"minTime",set:function set(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:void 0;return this.timePicker.minTime=e,this},get:function get(){return this.timePicker.minTime}},{key:"maxTime",set:function set(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:void 0;return this.timePicker.maxTime=e,this},get:function get(){return this.timePicker.maxTime}},{key:"timeFormat",set:function set(e){return this.timePicker.dateFormat=e,this},get:function get(){return this.timePicker.timeFormat}}],[{key:"attach",value:function attach(){var n=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'input[type="date"]',o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=new Array,t=r.e(e)?document.querySelectorAll(e):Array.isArray(e)?e:[e];return[].forEach.call(t,function(e){if(void 0===e[n.constructor.name]){var t=new bulmaCalendar(e,o);e.bulmaCalendar=t,i.push(t)}else i.push(e[n.constructor.name])}),i}}]),bulmaCalendar}();t.default=b},function(e,t,n){var u=n(0);e.exports=function areRangesOverlapping(e,t,n,o){var i=u(e).getTime(),r=u(t).getTime(),a=u(n).getTime(),s=u(o).getTime();if(r<i||s<a)throw new Error("The start of the range cannot be after the end of the range");return i<s&&a<r}},function(e,t,n){var s=n(0);e.exports=function closestIndexTo(e,t){if(!(t instanceof Array))throw new TypeError(toString.call(t)+" is not an instance of Array");var i,r,a=s(e).getTime();return t.forEach(function(e,t){var n=s(e),o=Math.abs(a-n.getTime());(void 0===i||o<r)&&(i=t,r=o)}),i}},function(e,t,n){var a=n(0);e.exports=function closestTo(e,t){if(!(t instanceof Array))throw new TypeError(toString.call(t)+" is not an instance of Array");var o,i,r=a(e).getTime();return t.forEach(function(e){var t=a(e),n=Math.abs(r-t.getTime());(void 0===o||n<i)&&(o=t,i=n)}),o}},function(e,t,n){var a=n(4);e.exports=function differenceInCalendarISOWeeks(e,t){var n=a(e),o=a(t),i=n.getTime()-6e4*n.getTimezoneOffset(),r=o.getTime()-6e4*o.getTimezoneOffset();return Math.round((i-r)/6048e5)}},function(e,t,n){var i=n(139),r=n(0);e.exports=function differenceInCalendarQuarters(e,t){var n=r(e),o=r(t);return 4*(n.getFullYear()-o.getFullYear())+(i(n)-i(o))}},function(e,t,n){var s=n(80);e.exports=function differenceInCalendarWeeks(e,t,n){var o=s(e,n),i=s(t,n),r=o.getTime()-6e4*o.getTimezoneOffset(),a=i.getTime()-6e4*i.getTimezoneOffset();return Math.round((r-a)/6048e5)}},function(e,t,n){var o=n(83);e.exports=function differenceInHours(e,t){var n=o(e,t)/36e5;return 0<n?Math.floor(n):Math.ceil(n)}},function(e,t,n){var a=n(0),s=n(137),u=n(11),c=n(142);e.exports=function differenceInISOYears(e,t){var n=a(e),o=a(t),i=u(n,o),r=Math.abs(s(n,o));return n=c(n,i*r),i*(r-(u(n,o)===-i))}},function(e,t,n){var o=n(83);e.exports=function differenceInMinutes(e,t){var n=o(e,t)/6e4;return 0<n?Math.floor(n):Math.ceil(n)}},function(e,t,n){var o=n(124);e.exports=function differenceInQuarters(e,t){var n=o(e,t)/3;return 0<n?Math.floor(n):Math.ceil(n)}},function(e,t,n){var o=n(141);e.exports=function differenceInWeeks(e,t){var n=o(e,t)/7;return 0<n?Math.floor(n):Math.ceil(n)}},function(e,t,n){var a=n(0),s=n(140),u=n(11);e.exports=function differenceInYears(e,t){var n=a(e),o=a(t),i=u(n,o),r=Math.abs(s(n,o));return n.setFullYear(n.getFullYear()-i*r),i*(r-(u(n,o)===-i))}},function(e,t,n){var p=n(123),v=n(0),g=n(125),b=n(6);e.exports=function distanceInWordsStrict(e,t,n){var o=n||{},i=p(e,t),r=o.locale,a=b.distanceInWords.localize;r&&r.distanceInWords&&r.distanceInWords.localize&&(a=r.distanceInWords.localize);var s,u,c,d={addSuffix:Boolean(o.addSuffix),comparison:i};u=0<i?(s=v(e),v(t)):(s=v(t),v(e));var l=Math[o.partialMethod?String(o.partialMethod):"floor"],f=g(u,s),h=u.getTimezoneOffset()-s.getTimezoneOffset(),m=l(f/60)-h;if("s"===(c=o.unit?String(o.unit):m<1?"s":m<60?"m":m<1440?"h":m<43200?"d":m<525600?"M":"Y"))return a("xSeconds",f,d);if("m"===c)return a("xMinutes",m,d);if("h"===c)return a("xHours",l(m/60),d);if("d"===c)return a("xDays",l(m/1440),d);if("M"===c)return a("xMonths",l(m/43200),d);if("Y"===c)return a("xYears",l(m/525600),d);throw new Error("Unknown unit: "+c)}},function(e,t,n){var o=n(143);e.exports=function distanceInWordsToNow(e,t){return o(Date.now(),e,t)}},function(e,t,n){var u=n(0);e.exports=function eachDay(e,t,n){var o=u(e),i=void 0!==n?n:1,r=u(t).getTime();if(o.getTime()>r)throw new Error("The first date cannot be after the second date");var a=[],s=o;for(s.setHours(0,0,0,0);s.getTime()<=r;)a.push(u(s)),s.setDate(s.getDate()+i);return a}},function(e,t,n){var o=n(0);e.exports=function endOfHour(e){var t=o(e);return t.setMinutes(59,59,999),t}},function(e,t,n){var o=n(144);e.exports=function endOfISOWeek(e){return o(e,{weekStartsOn:1})}},function(e,t,n){var i=n(3),r=n(4);e.exports=function endOfISOYear(e){var t=i(e),n=new Date(0);n.setFullYear(t+1,0,4),n.setHours(0,0,0,0);var o=r(n);return o.setMilliseconds(o.getMilliseconds()-1),o}},function(e,t,n){var o=n(0);e.exports=function endOfMinute(e){var t=o(e);return t.setSeconds(59,999),t}},function(e,t,n){var i=n(0);e.exports=function endOfQuarter(e){var t=i(e),n=t.getMonth(),o=n-n%3+3;return t.setMonth(o,0),t.setHours(23,59,59,999),t}},function(e,t,n){var o=n(0);e.exports=function endOfSecond(e){var t=o(e);return t.setMilliseconds(999),t}},function(e,t,n){var o=n(126);e.exports=function endOfToday(){return o(new Date)}},function(e,t){e.exports=function endOfTomorrow(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),o=e.getDate(),i=new Date(0);return i.setFullYear(t,n,o+1),i.setHours(23,59,59,999),i}},function(e,t,n){var o=n(0);e.exports=function endOfYear(e){var t=o(e),n=t.getFullYear();return t.setFullYear(n+1,0,0),t.setHours(23,59,59,999),t}},function(e,t){e.exports=function endOfYesterday(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),o=e.getDate(),i=new Date(0);return i.setFullYear(t,n,o-1),i.setHours(23,59,59,999),i}},function(e,t,n){var o=n(146),i=n(127),r=n(3),u=n(0),c=n(148),d=n(6);var l={M:function(e){return e.getMonth()+1},MM:function(e){return addLeadingZeros(e.getMonth()+1,2)},Q:function(e){return Math.ceil((e.getMonth()+1)/3)},D:function(e){return e.getDate()},DD:function(e){return addLeadingZeros(e.getDate(),2)},DDD:function(e){return o(e)},DDDD:function(e){return addLeadingZeros(o(e),3)},d:function(e){return e.getDay()},E:function(e){return e.getDay()||7},W:function(e){return i(e)},WW:function(e){return addLeadingZeros(i(e),2)},YY:function(e){return addLeadingZeros(e.getFullYear(),4).substr(2)},YYYY:function(e){return addLeadingZeros(e.getFullYear(),4)},GG:function(e){return String(r(e)).substr(2)},GGGG:function(e){return r(e)},H:function(e){return e.getHours()},HH:function(e){return addLeadingZeros(e.getHours(),2)},h:function(e){var t=e.getHours();return 0===t?12:12<t?t%12:t},hh:function(e){return addLeadingZeros(l.h(e),2)},m:function(e){return e.getMinutes()},mm:function(e){return addLeadingZeros(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return addLeadingZeros(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return addLeadingZeros(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return addLeadingZeros(e.getMilliseconds(),3)},Z:function(e){return formatTimezone(e.getTimezoneOffset(),":")},ZZ:function(e){return formatTimezone(e.getTimezoneOffset())},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()}};function formatTimezone(e,t){t=t||"";var n=0<e?"-":"+",o=Math.abs(e),i=o%60;return n+addLeadingZeros(Math.floor(o/60),2)+t+addLeadingZeros(i,2)}function addLeadingZeros(e,t){for(var n=Math.abs(e).toString();n.length<t;)n="0"+n;return n}e.exports=function format(e,t,n){var o=t?String(t):"YYYY-MM-DDTHH:mm:ss.SSSZ",i=(n||{}).locale,r=d.format.formatters,a=d.format.formattingTokensRegExp;i&&i.format&&i.format.formatters&&(r=i.format.formatters,i.format.formattingTokensRegExp&&(a=i.format.formattingTokensRegExp));var s=u(e);return c(s)?function buildFormatFn(e,t,n){var o,i,r,a=e.match(n),s=a.length;for(o=0;o<s;o++)i=t[a[o]]||l[a[o]],a[o]=i||((r=a[o]).match(/\[[\s\S]/)?r.replace(/^\[|]$/g,""):r.replace(/\\/g,""));return function(e){for(var t="",n=0;n<s;n++)a[n]instanceof Function?t+=a[n](e,l):t+=a[n];return t}}(o,r,a)(s):"Invalid Date"}},function(e,t,n){var o=n(0);e.exports=function getDate(e){return o(e).getDate()}},function(e,t,n){var o=n(0);e.exports=function getDay(e){return o(e).getDay()}},function(e,t,n){var o=n(149);e.exports=function getDaysInYear(e){return o(e)?366:365}},function(e,t,n){var o=n(0);e.exports=function getHours(e){return o(e).getHours()}},function(e,t,n){var o=n(10),i=n(122);e.exports=function getISOWeeksInYear(e){var t=o(e),n=o(i(t,60)).valueOf()-t.valueOf();return Math.round(n/6048e5)}},function(e,t,n){var o=n(0);e.exports=function getMilliseconds(e){return o(e).getMilliseconds()}},function(e,t,n){var o=n(0);e.exports=function getMinutes(e){return o(e).getMinutes()}},function(e,t,n){var o=n(0);e.exports=function getMonth(e){return o(e).getMonth()}},function(e,t,n){var c=n(0);e.exports=function getOverlappingDaysInRanges(e,t,n,o){var i=c(e).getTime(),r=c(t).getTime(),a=c(n).getTime(),s=c(o).getTime();if(r<i||s<a)throw new Error("The start of the range cannot be after the end of the range");if(!(i<s&&a<r))return 0;var u=(r<s?r:s)-(a<i?i:a);return Math.ceil(u/864e5)}},function(e,t,n){var o=n(0);e.exports=function getSeconds(e){return o(e).getSeconds()}},function(e,t,n){var o=n(0);e.exports=function getTime(e){return o(e).getTime()}},function(e,t,n){var o=n(0);e.exports=function getYear(e){return o(e).getFullYear()}},function(e,t,n){var i=n(0);e.exports=function isAfter(e,t){var n=i(e),o=i(t);return n.getTime()>o.getTime()}},function(e,t,n){var i=n(0);e.exports=function isBefore(e,t){var n=i(e),o=i(t);return n.getTime()<o.getTime()}},function(e,t,n){var i=n(0);e.exports=function isEqual(e,t){var n=i(e),o=i(t);return n.getTime()===o.getTime()}},function(e,t,n){var o=n(0);e.exports=function isFirstDayOfMonth(e){return 1===o(e).getDate()}},function(e,t,n){var o=n(0);e.exports=function isFriday(e){return 5===o(e).getDay()}},function(e,t,n){var o=n(0);e.exports=function isFuture(e){return o(e).getTime()>(new Date).getTime()}},function(e,t,n){var o=n(0),i=n(126),r=n(145);e.exports=function isLastDayOfMonth(e){var t=o(e);return i(t).getTime()===r(t).getTime()}},function(e,t,n){var o=n(0);e.exports=function isMonday(e){return 1===o(e).getDay()}},function(e,t,n){var o=n(0);e.exports=function isPast(e){return o(e).getTime()<(new Date).getTime()}},function(e,t,n){var i=n(5);e.exports=function isSameDay(e,t){var n=i(e),o=i(t);return n.getTime()===o.getTime()}},function(e,t,n){var o=n(0);e.exports=function isSaturday(e){return 6===o(e).getDay()}},function(e,t,n){var o=n(0);e.exports=function isSunday(e){return 0===o(e).getDay()}},function(e,t,n){var o=n(151);e.exports=function isThisHour(e){return o(new Date,e)}},function(e,t,n){var o=n(153);e.exports=function isThisISOWeek(e){return o(new Date,e)}},function(e,t,n){var o=n(154);e.exports=function isThisISOYear(e){return o(new Date,e)}},function(e,t,n){var o=n(155);e.exports=function isThisMinute(e){return o(new Date,e)}},function(e,t,n){var o=n(157);e.exports=function isThisMonth(e){return o(new Date,e)}},function(e,t,n){var o=n(158);e.exports=function isThisQuarter(e){return o(new Date,e)}},function(e,t,n){var o=n(160);e.exports=function isThisSecond(e){return o(new Date,e)}},function(e,t,n){var o=n(128);e.exports=function isThisWeek(e,t){return o(new Date,e,t)}},function(e,t,n){var o=n(162);e.exports=function isThisYear(e){return o(new Date,e)}},function(e,t,n){var o=n(0);e.exports=function isThursday(e){return 4===o(e).getDay()}},function(e,t,n){var o=n(5);e.exports=function isToday(e){return o(e).getTime()===o(new Date).getTime()}},function(e,t,n){var o=n(5);e.exports=function isTomorrow(e){var t=new Date;return t.setDate(t.getDate()+1),o(e).getTime()===o(t).getTime()}},function(e,t,n){var o=n(0);e.exports=function isTuesday(e){return 2===o(e).getDay()}},function(e,t,n){var o=n(0);e.exports=function isWednesday(e){return 3===o(e).getDay()}},function(e,t,n){var o=n(0);e.exports=function isWeekend(e){var t=o(e).getDay();return 0===t||6===t}},function(e,t,n){var a=n(0);e.exports=function isWithinRange(e,t,n){var o=a(e).getTime(),i=a(t).getTime(),r=a(n).getTime();if(r<i)throw new Error("The start of the range cannot be after the end of the range");return i<=o&&o<=r}},function(e,t,n){var o=n(5);e.exports=function isYesterday(e){var t=new Date;return t.setDate(t.getDate()-1),o(e).getTime()===o(t).getTime()}},function(e,t,n){var o=n(163);e.exports=function lastDayOfISOWeek(e){return o(e,{weekStartsOn:1})}},function(e,t,n){var i=n(3),r=n(4);e.exports=function lastDayOfISOYear(e){var t=i(e),n=new Date(0);n.setFullYear(t+1,0,4),n.setHours(0,0,0,0);var o=r(n);return o.setDate(o.getDate()-1),o}},function(e,t,n){var o=n(0);e.exports=function lastDayOfMonth(e){var t=o(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(0,0,0,0),t}},function(e,t,n){var i=n(0);e.exports=function lastDayOfQuarter(e){var t=i(e),n=t.getMonth(),o=n-n%3+3;return t.setMonth(o,0),t.setHours(0,0,0,0),t}},function(e,t,n){var o=n(0);e.exports=function lastDayOfYear(e){var t=o(e),n=t.getFullYear();return t.setFullYear(n+1,0,0),t.setHours(0,0,0,0),t}},function(e,t,n){var o=n(0);e.exports=function max(){var e=Array.prototype.slice.call(arguments).map(function(e){return o(e)}),t=Math.max.apply(null,e);return new Date(t)}},function(e,t,n){var o=n(0);e.exports=function min(){var e=Array.prototype.slice.call(arguments).map(function(e){return o(e)}),t=Math.min.apply(null,e);return new Date(t)}},function(e,t,n){var i=n(0);e.exports=function setDate(e,t){var n=i(e),o=Number(t);return n.setDate(o),n}},function(e,t,n){var s=n(0),u=n(8);e.exports=function setDay(e,t,n){var o=n&&Number(n.weekStartsOn)||0,i=s(e),r=Number(t),a=i.getDay();return u(i,((r%7+7)%7<o?7:0)+r-a)}},function(e,t,n){var i=n(0);e.exports=function setDayOfYear(e,t){var n=i(e),o=Number(t);return n.setMonth(0),n.setDate(o),n}},function(e,t,n){var i=n(0);e.exports=function setHours(e,t){var n=i(e),o=Number(t);return n.setHours(o),n}},function(e,t,n){var r=n(0),a=n(8),s=n(150);e.exports=function setISODay(e,t){var n=r(e),o=Number(t),i=s(n);return a(n,o-i)}},function(e,t,n){var r=n(0),a=n(127);e.exports=function setISOWeek(e,t){var n=r(e),o=Number(t),i=a(n)-o;return n.setDate(n.getDate()-7*i),n}},function(e,t,n){var i=n(0);e.exports=function setMilliseconds(e,t){var n=i(e),o=Number(t);return n.setMilliseconds(o),n}},function(e,t,n){var i=n(0);e.exports=function setMinutes(e,t){var n=i(e),o=Number(t);return n.setMinutes(o),n}},function(e,t,n){var i=n(0),r=n(164);e.exports=function setQuarter(e,t){var n=i(e),o=Number(t)-(Math.floor(n.getMonth()/3)+1);return r(n,n.getMonth()+3*o)}},function(e,t,n){var i=n(0);e.exports=function setSeconds(e,t){var n=i(e),o=Number(t);return n.setSeconds(o),n}},function(e,t,n){var i=n(0);e.exports=function setYear(e,t){var n=i(e),o=Number(t);return n.setFullYear(o),n}},function(e,t,n){var o=n(0);e.exports=function startOfMonth(e){var t=o(e);return t.setDate(1),t.setHours(0,0,0,0),t}},function(e,t,n){var o=n(5);e.exports=function startOfToday(){return o(new Date)}},function(e,t){e.exports=function startOfTomorrow(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),o=e.getDate(),i=new Date(0);return i.setFullYear(t,n,o+1),i.setHours(0,0,0,0),i}},function(e,t){e.exports=function startOfYesterday(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),o=e.getDate(),i=new Date(0);return i.setFullYear(t,n,o-1),i.setHours(0,0,0,0),i}},function(e,t,n){var o=n(8);e.exports=function subDays(e,t){var n=Number(t);return o(e,-n)}},function(e,t,n){var o=n(130);e.exports=function subHours(e,t){var n=Number(t);return o(e,-n)}},function(e,t,n){var o=n(9);e.exports=function subMilliseconds(e,t){var n=Number(t);return o(e,-n)}},function(e,t,n){var o=n(133);e.exports=function subMinutes(e,t){var n=Number(t);return o(e,-n)}},function(e,t,n){var o=n(82);e.exports=function subMonths(e,t){var n=Number(t);return o(e,-n)}},function(e,t,n){var o=n(134);e.exports=function subQuarters(e,t){var n=Number(t);return o(e,-n)}},function(e,t,n){var o=n(135);e.exports=function subSeconds(e,t){var n=Number(t);return o(e,-n)}},function(e,t,n){var o=n(122);e.exports=function subWeeks(e,t){var n=Number(t);return o(e,-n)}},function(e,t,n){var o=n(136);e.exports=function subYears(e,t){var n=Number(t);return o(e,-n)}},function(e,t,n){var o={"./ar":165,"./ar.js":165,"./az":166,"./az.js":166,"./bn":167,"./bn.js":167,"./cs":168,"./cs.js":168,"./de":169,"./de.js":169,"./el":170,"./el.js":170,"./es":171,"./es.js":171,"./fa":172,"./fa.js":172,"./fr":173,"./fr.js":173,"./hi":174,"./hi.js":174,"./hu":175,"./hu.js":175,"./id":176,"./id.js":176,"./it":177,"./it.js":177,"./ja":178,"./ja.js":178,"./jv":179,"./jv.js":179,"./ko":180,"./ko.js":180,"./my":181,"./my.js":181,"./nl":182,"./nl.js":182,"./pa-in":183,"./pa-in.js":183,"./pl":184,"./pl.js":184,"./pt":185,"./pt.js":185,"./ro":186,"./ro.js":186,"./ru":187,"./ru.js":187,"./sr":188,"./sr.js":188,"./th":189,"./th.js":189,"./tr":190,"./tr.js":190,"./uk":191,"./uk.js":191,"./uz":192,"./uz.js":192,"./vi":193,"./vi.js":193,"./zh-cn":194,"./zh-cn.js":194,"./zh-tw":195,"./zh-tw.js":195};function webpackContext(e){return n(webpackContextResolve(e))}function webpackContextResolve(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}webpackContext.keys=function webpackContextKeys(){return Object.keys(o)},webpackContext.resolve=webpackContextResolve,(e.exports=webpackContext).id=331},function(e,t,n){"use strict";var o=n(118),c=n(119),d=n(7),i=(n.n(d),n(129)),r=n(333),a=n(334),s=n(335),u=n(336),l=n(337),f=n(338),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},m=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var p=function(e){function datePicker(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,datePicker);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(datePicker.__proto__||Object.getPrototypeOf(datePicker)).call(this));return t.options=h({},f.a,e),t._clickEvents=["click","touch"],t._supportsPassive=o.a(),t._id=o.b("datePicker"),t.node=null,t.onPreviousDatePicker=t.onPreviousDatePicker.bind(t),t.onNextDatePicker=t.onNextDatePicker.bind(t),t.onSelectMonthDatePicker=t.onSelectMonthDatePicker.bind(t),t.onMonthClickDatePicker=t.onMonthClickDatePicker.bind(t),t.onSelectYearDatePicker=t.onSelectYearDatePicker.bind(t),t.onYearClickDatePicker=t.onYearClickDatePicker.bind(t),t.onDateClickDatePicker=t.onDateClickDatePicker.bind(t),t._init(),t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(datePicker,i["a"]),m(datePicker,[{key:"onPreviousDatePicker",value:function onPreviousDatePicker(e){this._supportsPassive||e.preventDefault(),e.stopPropagation();var t=d.lastDayOfMonth(d.subMonths(new Date(d.getYear(this._visibleDate),d.getMonth(this._visibleDate)),1)),n=Math.min(d.getDaysInMonth(t),d.getDate(this._visibleDate));this._visibleDate=this.min?d.max(d.setDate(t,n),this.min):d.setDate(t,n),this.refresh()}},{key:"onNextDatePicker",value:function onNextDatePicker(e){this._supportsPassive||e.preventDefault(),e.stopPropagation();var t=d.addMonths(this._visibleDate,1),n=Math.min(d.getDaysInMonth(t),d.getDate(this._visibleDate));this._visibleDate=this.max?d.min(d.setDate(t,n),this.max):d.setDate(t,n),this.refresh()}},{key:"onSelectMonthDatePicker",value:function onSelectMonthDatePicker(e){e.stopPropagation(),this.options.enableMonthSwitch&&(this._ui.body.dates.classList.remove("is-active"),this._ui.body.years.classList.remove("is-active"),this._ui.body.months.classList.add("is-active"),this._ui.navigation.previous.setAttribute("disabled","disabled"),this._ui.navigation.next.setAttribute("disabled","disabled"))}},{key:"onSelectYearDatePicker",value:function onSelectYearDatePicker(e){if(e.stopPropagation(),this.options.enableYearSwitch){this._ui.body.dates.classList.remove("is-active"),this._ui.body.months.classList.remove("is-active"),this._ui.body.years.classList.add("is-active"),this._ui.navigation.previous.setAttribute("disabled","disabled"),this._ui.navigation.next.setAttribute("disabled","disabled");var t=this._ui.body.years.querySelector(".calendar-year.is-active");t&&(this._ui.body.years.scrollTop=t.offsetTop-this._ui.body.years.offsetTop-this._ui.body.years.clientHeight/2)}}},{key:"onMonthClickDatePicker",value:function onMonthClickDatePicker(e){this._supportsPassive||e.preventDefault(),e.stopPropagation();var t=d.setMonth(this._visibleDate,parseInt(e.currentTarget.dataset.month)-1);this._visibleDate=this.min?d.max(t,this.min):t,this._visibleDate=this.max?d.min(this._visibleDate,this.max):this._visibleDate,this.refresh()}},{key:"onYearClickDatePicker",value:function onYearClickDatePicker(e){this._supportsPassive||e.preventDefault(),e.stopPropagation();var t=d.setYear(this._visibleDate,parseInt(e.currentTarget.dataset.year));this._visibleDate=this.min?d.max(t,this.min):t,this._visibleDate=this.max?d.min(this._visibleDate,this.max):this._visibleDate,this.refresh()}},{key:"onDateClickDatePicker",value:function onDateClickDatePicker(e){this._supportsPassive||e.preventDefault(),e.stopPropagation(),e.currentTarget.classList.contains("is-disabled")||(this._select(e.currentTarget.dataset.date),this.refresh())}},{key:"isRange",value:function isRange(){return this.options.isRange}},{key:"enableDate",value:function enableDate(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:void 0,e=this.disabledDates.findIndex(function(e){return d.isEqual(e,t)});-1<e&&unset(this.disabledDates[e])}},{key:"disableDate",value:function disableDate(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:void 0;-1<this.disabledDates.findIndex(function(e){return d.isEqual(e,t)})&&this.disabledDates.push(t)}},{key:"enableWeekDay",value:function enableWeekDay(t){var e=this.disabledWeekDays.findIndex(function(e){return d.isEqual(e,t)});-1<e&&unset(this.disabledWeekDays[e])}},{key:"disableWeekDay",value:function disableWeekDay(e){-1<this.disabledWeekDays.findIndex(function(e){return d.isEqual(e,date)})&&this.disabledWeekDays.push(e)}},{key:"show",value:function show(){this._open||(this._ui.body.dates.classList.add("is-active"),this._ui.body.months.classList.remove("is-active"),this._ui.body.years.classList.remove("is-active"),this._ui.navigation.previous.removeAttribute("disabled"),this._ui.navigation.next.removeAttribute("disabled"),this._ui.container.classList.add("is-active"),this._open=!0,this._focus=!0,this.emit("show",this))}},{key:"hide",value:function hide(){this._open&&(this._open=!1,this._focus=!1,this._ui.container.classList.remove("is-active"),this.emit("hide",this))}},{key:"toggle",value:function toggle(){this._open?this.hide():this.show()}},{key:"value",value:function value(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;if(!e){var t=this.start&&this._isValidDate(this.start)?d.format(this.start,this.format,{locale:this.locale}):"";return this.options.isRange&&this.end&&this._isValidDate(this.end)&&(t+=" - "+d.format(this.end,this.format,{locale:this.locale})),t}if(this.options.isRange){if(c.e(e)){var n=e.split(" - ");n.length&&(this.start=d.format(new Date(n[0]),this.format,{locale:this.locale})),2===n.length&&(this.end=d.format(new Date(n[1]),this.format,{locale:this.locale}))}(c.d(e)||c.b(e))&&this._select(e)}else this._select(e)}},{key:"refresh",value:function refresh(){var n=this;this._ui.body.dates.innerHTML="";var e=new Array(12).fill(d.startOfWeek(this._visibleDate)).map(function(e,t){return d.format(d.addMonths(e,t),"MM",{locale:n.locale})});this._ui.body.months.innerHTML="",this._ui.body.months.appendChild(document.createRange().createContextualFragment(Object(u.a)({months:e}))),(this._ui.body.months.querySelectorAll(".datepicker-month")||[]).forEach(function(t){n._clickEvents.forEach(function(e){t.addEventListener(e,n.onMonthClickDatePicker)}),t.classList.remove("is-active"),t.dataset.month===d.format(n._visibleDate,"MM",{locale:n.locale})&&t.classList.add("is-active")});var t=new Array(100).fill(d.subYears(this._visibleDate,50)).map(function(e,t){return d.format(d.addYears(e,t),"YYYY",{locale:n.locale})});this._ui.body.years.innerHTML="",this._ui.body.years.appendChild(document.createRange().createContextualFragment(Object(l.a)({visibleDate:this._visibleDate,years:t}))),(this._ui.body.years.querySelectorAll(".datepicker-year")||[]).forEach(function(t){n._clickEvents.forEach(function(e){t.addEventListener(e,n.onYearClickDatePicker)}),t.classList.remove("is-active"),t.dataset.year===d.format(n._visibleDate,"YYYY",{locale:n.locale})&&t.classList.add("is-active")});var o=new Array(7).fill(d.startOfWeek(this._visibleDate)).map(function(e,t){return d.format(d.addDays(e,t+n.options.weekStart),"ddd",{locale:n.locale})});return this._ui.body.dates.appendChild(document.createRange().createContextualFragment(Object(s.a)({weekdays:o}))),this.min&&0===d.differenceInMonths(this._visibleDate,this.min)?this._togglePreviousButton(!1):this._togglePreviousButton(),this.max&&0===d.differenceInMonths(this._visibleDate,this.max)?this._toggleNextButton(!1):this._toggleNextButton(),this._ui.navigation.month.innerHTML=d.format(this._visibleDate,"MMMM",{locale:this.locale}),this._ui.navigation.year.innerHTML=d.format(this._visibleDate,"YYYY",{locale:this.locale}),this._renderDays(),this._ui.body.dates.classList.add("is-active"),this._ui.body.months.classList.remove("is-active"),this._ui.body.years.classList.remove("is-active"),this._ui.navigation.previous.removeAttribute("disabled"),this._ui.navigation.next.removeAttribute("disabled"),this}},{key:"clear",value:function clear(){var e=new Date;this._date={start:void 0,end:void 0},this._visibleDate=this._isValidDate(e,this.min,this.max)?e:this.min,this.refresh()}},{key:"snapshot",value:function snapshot(){this._snapshots.push(h({},this._date))}},{key:"render",value:function render(){return this.refresh(),this.node}},{key:"_init",value:function _init(){var e=new Date;this._open=!1,this._snapshots=[],this.lang=this.options.lang,this.format=this.options.dateFormat||"MM/DD/YYYY",this.disabledDates=Array.isArray(this.options.disabledDates)?this.options.disabledDates:[];for(var t=0;t<this.disabledDates.length;t++)this.disabledDates[t]=d.format(this.disabledDates[t],this.format,{locale:this.locale});this.disabledWeekDays=c.e(this.options.disabledWeekDays)?this.options.disabledWeekDays.split(","):Array.isArray(this.options.disabledWeekDays)?this.options.disabledWeekDays:[],this.min=this.options.minDate,this.max=this.options.maxDate,this._date={start:this.options.startDate,end:this.options.isRange?this.options.endDate:void 0},this._visibleDate=this._isValidDate(this.start)?this.start:this._isValidDate(e,this.min,this.max)?e:this.min,this._build(),this._bindEvents(),this.emit("ready",this)}},{key:"_build",value:function _build(){this.node=document.createRange().createContextualFragment(Object(r.a)({locale:this.locale,visibleDate:this._visibleDate,icons:this.options.icons})),this._ui={container:this.node.firstChild,navigation:{container:this.node.querySelector(".datepicker-nav"),previous:this.node.querySelector(".datepicker-nav-previous"),next:this.node.querySelector(".datepicker-nav-next"),month:this.node.querySelector(".datepicker-nav-month"),year:this.node.querySelector(".datepicker-nav-year")},body:{dates:this.node.querySelector(".datepicker-dates"),days:this.node.querySelector(".datepicker-days"),weekdays:this.node.querySelector(".datepicker-weekdays"),months:this.node.querySelector(".datepicker-months"),years:this.node.querySelector(".datepicker-years")}}}},{key:"_bindEvents",value:function _bindEvents(){var n=this;document.addEventListener("keydown",function(e){if(n._focus)switch(e.keyCode||e.which){case 37:n.onPreviousDatePicker(e);break;case 39:n.onNextDatePicker(e)}}),this._ui.navigation.previous&&this._clickEvents.forEach(function(e){n._ui.navigation.previous.addEventListener(e,n.onPreviousDatePicker)}),this._ui.navigation.next&&this._clickEvents.forEach(function(e){n._ui.navigation.next.addEventListener(e,n.onNextDatePicker)}),this._ui.navigation.month&&this._clickEvents.forEach(function(e){n._ui.navigation.month.addEventListener(e,n.onSelectMonthDatePicker)}),this._ui.navigation.year&&this._clickEvents.forEach(function(e){n._ui.navigation.year.addEventListener(e,n.onSelectYearDatePicker)}),(this._ui.body.months.querySelectorAll(".calendar-month")||[]).forEach(function(t){n._clickEvents.forEach(function(e){t.addEventListener(e,n.onMonthClickDatePicker)})}),(this._ui.body.years.querySelectorAll(".calendar-year")||[]).forEach(function(t){n._clickEvents.forEach(function(e){t.addEventListener(e,n.onYearClickDatePicker)})})}},{key:"_bindDaysEvents",value:function _bindDaysEvents(){var o=this;[].forEach.call(this._ui.days,function(n){o._clickEvents.forEach(function(e){var t=o._isValidDate(new Date(n.dataset.date),o.min,o.max)?o.onDateClickDatePicker:null;n.addEventListener(e,t)}),n.addEventListener("hover",function(e){e.preventDEfault()})})}},{key:"_renderDays",value:function _renderDays(){var u=this,e=d.startOfWeek(d.startOfMonth(this._visibleDate)),t=d.endOfWeek(d.endOfMonth(this._visibleDate)),n=new Array(d.differenceInDays(t,e)+1).fill(e).map(function(e,t){var n=d.startOfDay(d.addDays(e,t+u.options.weekStart)),o=d.isSameMonth(u._visibleDate,n),i=u.options.isRange&&d.isWithinRange(n,d.startOfDay(u.start),d.endOfDay(u.end)),r=!!u.max&&d.isAfter(d.startOfDay(n),d.endOfDay(u.max));if(r=!r&&u.min?d.isBefore(d.startOfDay(n),d.startOfDay(u.min)):r,u.disabledDates)for(var a=0;a<u.disabledDates.length;a++){var s=u.disabledDates[a];c.c(s)&&(s=s(u)),d.getTime(n)==d.getTime(s)&&(r=!0)}return u.disabledWeekDays&&u.disabledWeekDays.forEach(function(e){c.c(e)&&(e=e(u)),d.getDay(n)==e&&(r=!0)}),{date:n,isRange:u.options.isRange,isToday:d.isToday(n),isStartDate:d.isEqual(d.startOfDay(u.start),n),isEndDate:d.isEqual(d.startOfDay(u.end),n),isDisabled:r,isThisMonth:o,isInRange:i}});this._ui.body.dates.appendChild(document.createRange().createContextualFragment(Object(a.a)(n))),this._ui.days=this._ui.body.dates.querySelectorAll(".datepicker-date"),this._bindDaysEvents()}},{key:"_select",value:function _select(){var i=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:void 0;this.snapshot(),e=c.b(e)?e:new Date(e),this.options.isRange&&(!this._isValidDate(this.start)||this._isValidDate(this.start)&&this._isValidDate(this.end))?(this.start=e,this.end=void 0,this.emit("select:start",this)):this.options.isRange&&!this._isValidDate(this.end)?d.isBefore(e,this.start)?(this.end=this.start,this.start=e,this.emit("select",this)):d.isAfter(e,this.start)?(this.end=e,this.emit("select",this)):this.options.allowSameDayRange?(this.end=e,this.emit("select",this)):(this.start=e,this.end=void 0,this.emit("select:start",this)):(this.start=e,this.end=void 0,this.emit("select",this)),this._visibleDate=this._isValidDate(this.start)?this.start:this._visibleDate,this.options.isRange&&this._isValidDate(this.start)&&this._isValidDate(this.end)&&new Array(d.differenceInDays(this.end,this.start)+1).fill(this.start).map(function(e,t){var n=d.addDays(e,t),o=i._ui.body.dates.querySelector('.datepicker-date[data-date="'+n.toString()+'"]');o&&(d.isEqual(i.start,n)&&o.classList.add("datepicker-range-start"),d.isEqual(i.end,n)&&o.classList.add("datepicker-range-end"),o.classList.add("datepicker-range"))})}},{key:"_isValidDate",value:function _isValidDate(e,t,n){try{return!!e&&(!!d.isValid(e)&&(!t&&!n||(t&&n?d.isWithinRange(e,t,n):n?d.isBefore(e,n)||d.isEqual(e,n):d.isAfter(e,t)||d.isEqual(e,t))))}catch(e){return!1}}},{key:"_togglePreviousButton",value:function _togglePreviousButton(){!(0<arguments.length&&void 0!==arguments[0])||arguments[0]?this._ui.navigation.previous.removeAttribute("disabled"):this._ui.navigation.previous.setAttribute("disabled","disabled")}},{key:"_toggleNextButton",value:function _toggleNextButton(){!(0<arguments.length&&void 0!==arguments[0])||arguments[0]?this._ui.navigation.next.removeAttribute("disabled"):this._ui.navigation.next.setAttribute("disabled","disabled")}},{key:"id",get:function get(){return this._id}},{key:"date",set:function set(e){return c.d(e)&&e.start&&e.end&&(this._date=e),this},get:function get(){return this._date||{start:void 0,end:void 0}}},{key:"lang",set:function set(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"en";return this._lang=e,this._locale=n(84)("./"+e),this},get:function get(){return this._lang}},{key:"locale",get:function get(){return this._locale}},{key:"start",set:function set(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:void 0;return e?(c.b(e)&&(this._date.start=this._isValidDate(e,this.min,this.max)?d.startOfDay(e):this._date.start),c.e(e)&&(this._date.start=this._isValidDate(d.parse(e),this.min,this.max)?d.startOfDay(d.parse(e)):this._date.start)):this._date.start=void 0,this},get:function get(){return this._date.start}},{key:"end",set:function set(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:void 0;return e?(c.b(e)&&(this._date.end=this._isValidDate(e,this.min,this.max)?d.startOfDay(e):this._date.end),c.e(e)&&(this._date.end=this._isValidDate(d.parse(e),this.min,this.max)?d.startOfDay(d.parse(e)):this._date.end)):this._date.end=void 0,this},get:function get(){return this._date.end}},{key:"min",set:function set(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:void 0;return e&&(c.b(e)&&(this._min=this._isValidDate(e)?d.startOfDay(e):this._min),c.e(e)&&(this._min=this._isValidDate(d.parse(e))?d.startOfDay(e):this._min)),this},get:function get(){return this._min}},{key:"max",set:function set(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return e&&(c.b(e)&&(this._max=this._isValidDate(e)?d.startOfDay(e):this._max),c.e(e)&&(this._max=this._isValidDate(d.parse(e))?d.startOfDay(e):this._max)),this},get:function get(){return this._max}},{key:"format",set:function set(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"MM/DD/YYYY";return this._format=e,this},get:function get(){return this._format}}]),datePicker}();t.a=p},function(e,t,n){"use strict";t.a=function(e){return'<div class="datepicker">\n    <div class="datepicker-nav">\n        <button type="button" class="datepicker-nav-previous button is-small is-text">'+e.icons.previous+'</button>\n        <div class="datepicker-nav-month-year">\n          <div class="datepicker-nav-month"></div>\n          &nbsp;\n          <div class="datepicker-nav-year"></div>\n        </div>\n        <button type="button" class="datepicker-nav-next button is-small is-text">'+e.icons.next+'</button>\n      </div>\n      <div class="datepicker-body">\n        <div class="datepicker-dates is-active"></div>\n        <div class="datepicker-months"></div>\n        <div class="datepicker-years"></div>\n      </div>\n    </div>'}},function(e,t,n){"use strict";t.a=function(e){return'<div class="datepicker-days">'+e.map(function(e){return'<div data-date="'+e.date.toString()+'" class="datepicker-date'+(e.isThisMonth?" is-current-month":"")+(e.isDisabled?" is-disabled":"")+(e.isRange&&e.isInRange?" datepicker-range":"")+(e.isStartDate?" datepicker-range-start":"")+(e.isEndDate?" datepicker-range-end":"")+'">\n      <button class="date-item'+(e.isToday?" is-today":"")+(e.isStartDate?" is-active":"")+'" type="button">'+e.date.getDate()+"</button>\n  </div>"}).join("")+"</div>"}},function(e,t,n){"use strict";t.a=function(e){return'<div class="datepicker-weekdays">\n\t\t'+e.weekdays.map(function(e){return'<div class="datepicker-date">'+e+"</div>"}).join("")+"\n\t</div>"}},function(e,t,n){"use strict";var o=n(7);n.n(o);t.a=function(n){return""+n.months.map(function(e,t){return'<div class="datepicker-month" data-month="'+Object(o.format)(Object(o.addMonths)(e,t),"MM",{locale:n.locale})+'">'+Object(o.format)(Object(o.addMonths)(e,t),"MMM",{locale:n.locale})+"</div>"}).join("")}},function(e,t,n){"use strict";var o=n(7);n.n(o);t.a=function(t){return""+t.years.map(function(e){return'<div class="datepicker-year'+(e===Object(o.getMonth)(t.visibleDate)?" is-active":"")+'" data-year="'+e+'"><span class="item">'+e+"</span></div>"}).join("")}},function(e,t,n){"use strict";var o={color:"primary",isRange:!1,allowSameDayRange:!0,lang:"en",startDate:void 0,endDate:void 0,minDate:null,maxDate:null,disabledDates:[],disabledWeekDays:void 0,weekStart:0,dateFormat:"MM/DD/YYYY",enableMonthSwitch:!0,enableYearSwitch:!0};t.a=o},function(e,t,n){"use strict";var o=n(118),i=n(119),r=n(7),a=(n.n(r),n(129)),s=n(340),u=n(341),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var l=function(e){function timePicker(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,timePicker);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(timePicker.__proto__||Object.getPrototypeOf(timePicker)).call(this));return t.options=c({},u.a,e),t._clickEvents=["click","touch"],t._supportsPassive=o.a(),t._id=o.b("timePicker"),t.node=null,t.onPreviousHourStartTimePicker=t.onPreviousHourStartTimePicker.bind(t),t.onNextHourStartTimePicker=t.onNextHourStartTimePicker.bind(t),t.onPreviousMinuteStartTimePicker=t.onPreviousMinuteStartTimePicker.bind(t),t.onNextMinuteStartTimePicker=t.onNextMinuteStartTimePicker.bind(t),t.onPreviousHourEndTimePicker=t.onPreviousHourEndTimePicker.bind(t),t.onNextHourEndTimePicker=t.onNextHourEndTimePicker.bind(t),t.onPreviousMinuteEndTimePicker=t.onPreviousMinuteEndTimePicker.bind(t),t.onNextMinuteEndTimePicker=t.onNextMinuteEndTimePicker.bind(t),t._init(),t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(timePicker,a["a"]),d(timePicker,[{key:"_init",value:function _init(){this._open=!1,this._snapshots=[],this.lang=this.options.lang,this.format=this.options.format||"HH:mm",this.min=this.options.min,this.max=this.options.max,this._time={start:r.startOfToday(),end:r.endOfToday()},this.start=this.options.start||r.startOfToday(),this.end=this.options.isRange?this.options.end:r.endOfToday(),this._build(),this._bindEvents(),this.emit("ready",this)}},{key:"_build",value:function _build(){this.node=document.createRange().createContextualFragment(Object(s.a)({locale:this.locale,isRange:this.options.isRange,icons:this.options.icons})),this._ui={container:this.node.firstChild,start:{container:this.node.querySelector(".timepicker-start"),hours:{container:this.node.querySelector(".timepicker-start .timepicker-hours"),input:this.node.querySelector(".timepicker-start .timepicker-hours input"),number:this.node.querySelector(".timepicker-start .timepicker-hours .timepicker-input-number"),previous:this.node.querySelector(".timepicker-start .timepicker-hours .timepicker-previous"),next:this.node.querySelector(".timepicker-start .timepicker-hours .timepicker-next")},minutes:{container:this.node.querySelector(".timepicker-start .timepicker-minutes"),input:this.node.querySelector(".timepicker-start .timepicker-minutes input"),number:this.node.querySelector(".timepicker-start .timepicker-minutes .timepicker-input-number"),previous:this.node.querySelector(".timepicker-start .timepicker-minutes .timepicker-previous"),next:this.node.querySelector(".timepicker-start .timepicker-minutes .timepicker-next")}},end:{container:this.node.querySelector(".timepicker-end"),hours:{container:this.node.querySelector(".timepicker-end .timepicker-hours"),input:this.node.querySelector(".timepicker-end .timepicker-hours input"),number:this.node.querySelector(".timepicker-end .timepicker-hours .timepicker-input-number"),previous:this.node.querySelector(".timepicker-end .timepicker-hours .timepicker-previous"),next:this.node.querySelector(".timepicker-end .timepicker-hours .timepicker-next")},minutes:{container:this.node.querySelector(".timepicker-end .timepicker-minutes"),input:this.node.querySelector(".timepicker-end .timepicker-minutes input"),number:this.node.querySelector(".timepicker-end .timepicker-minutes .timepicker-input-number"),previous:this.node.querySelector(".timepicker-end .timepicker-minutes .timepicker-previous"),next:this.node.querySelector(".timepicker-end .timepicker-minutes .timepicker-next")}}}}},{key:"_bindEvents",value:function _bindEvents(){var t=this;this._clickEvents.forEach(function(e){t._ui.start.hours.previous.addEventListener(e,t.onPreviousHourStartTimePicker),t._ui.start.hours.next.addEventListener(e,t.onNextHourStartTimePicker),t._ui.start.minutes.previous.addEventListener(e,t.onPreviousMinuteStartTimePicker),t._ui.start.minutes.next.addEventListener(e,t.onNextMinuteStartTimePicker),t.options.isRange&&(t._ui.end.hours.previous.addEventListener(e,t.onPreviousHourEndTimePicker),t._ui.end.hours.next.addEventListener(e,t.onNextHourEndTimePicker),t._ui.end.minutes.previous.addEventListener(e,t.onPreviousMinuteEndTimePicker),t._ui.end.minutes.next.addEventListener(e,t.onNextMinuteEndTimePicker))})}},{key:"_select",value:function _select(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:void 0;this.snapshot(),e=i.b(e)?e:new Date(e),this.options.isRange&&(!this._isValidTime(this.start)||this._isValidTime(this.start)&&this._isValidTime(this.end))?(this.start=e,this.end=r.endOfToday(),this.emit("select:start",this)):this.options.isRange&&!this._isValidTime(this.end)?r.isBefore(e,this.start)?(this.end=this.start,this.start=r.endOfToday(),this.emit("select",this)):r.isAfter(e,this.start)?(this.end=e,this.emit("select",this)):(this.start=e,this.end=r.endOfToday(),this.emit("select:start",this)):(this.start=e,this.end=r.endOfToday(),this.emit("select",this))}},{key:"_isValidTime",value:function _isValidTime(e,t,n){try{return!!e&&(!!r.isValid(e)&&(!t&&!n||(t&&n?r.isWithinRange(e,t,n):n?r.isBefore(e,n)||r.isEqual(e,n):r.isAfter(e,t)||r.isEqual(e,t))))}catch(e){return!1}}},{key:"onPreviousHourStartTimePicker",value:function onPreviousHourStartTimePicker(e){var t=this;this._supportsPassive||e.preventDefault(),e.stopPropagation(),this.start=r.subHours(this.start,1),setTimeout(function(){t._ui.start.hours.number.classList.add("is-decrement-hide"),setTimeout(function(){t._ui.start.hours.number.innerText=r.format(t.start,"HH"),t._ui.start.hours.input.value=r.format(t.start,"HH"),t._ui.start.hours.number.classList.add("is-decrement-visible")},100),setTimeout(function(){t._ui.start.hours.number.classList.remove("is-decrement-hide"),t._ui.start.hours.number.classList.remove("is-decrement-visible")},1100)},100)}},{key:"onNextHourStartTimePicker",value:function onNextHourStartTimePicker(e){var t=this;this._supportsPassive||e.preventDefault(),e.stopPropagation(),this.start=r.addHours(this.start,1),setTimeout(function(){t._ui.start.hours.number.classList.add("is-increment-hide"),setTimeout(function(){t._ui.start.hours.number.innerText=r.format(t.start,"HH"),t._ui.start.hours.input.value=r.format(t.start,"HH"),t._ui.start.hours.number.classList.add("is-increment-visible")},100),setTimeout(function(){t._ui.start.hours.number.classList.remove("is-increment-hide"),t._ui.start.hours.number.classList.remove("is-increment-visible")},1100)},100)}},{key:"onPreviousMinuteStartTimePicker",value:function onPreviousMinuteStartTimePicker(e){var t=this;this._supportsPassive||e.preventDefault(),e.stopPropagation(),this.start=r.subMinutes(this.start,this.options.minuteSteps),setTimeout(function(){t._ui.start.minutes.number.classList.add("is-decrement-hide"),setTimeout(function(){t._ui.start.minutes.number.innerText=r.format(t.start,"mm"),t._ui.start.minutes.input.value=r.format(t.start,"mm"),t._ui.start.minutes.number.classList.add("is-decrement-visible"),r.format(t.start,"HH")!==t._ui.start.hours.input.value&&(t._ui.start.hours.number.innerText=r.format(t.start,"HH"),t._ui.start.hours.input.value=r.format(t.start,"HH"),t._ui.start.hours.number.classList.add("is-decrement-visible"))},100),setTimeout(function(){t._ui.start.minutes.number.classList.remove("is-decrement-hide"),t._ui.start.minutes.number.classList.remove("is-decrement-visible"),t._ui.start.hours.number.classList.remove("is-decrement-hide"),t._ui.start.hours.number.classList.remove("is-decrement-visible")},1100)},100)}},{key:"onNextMinuteStartTimePicker",value:function onNextMinuteStartTimePicker(e){var t=this;this._supportsPassive||e.preventDefault(),e.stopPropagation(),this.start=r.addMinutes(this.start,this.options.minuteSteps),setTimeout(function(){t._ui.start.minutes.number.classList.add("is-increment-hide"),setTimeout(function(){t._ui.start.minutes.number.innerText=r.format(t.start,"mm"),t._ui.start.minutes.input.value=r.format(t.start,"mm"),t._ui.start.minutes.number.classList.add("is-increment-visible"),r.format(t.start,"HH")!==t._ui.start.hours.input.value&&(t._ui.start.hours.number.innerText=r.format(t.start,"HH"),t._ui.start.hours.input.value=r.format(t.start,"HH"),t._ui.start.hours.number.classList.add("is-increment-visible"))},100),setTimeout(function(){t._ui.start.minutes.number.classList.remove("is-increment-hide"),t._ui.start.minutes.number.classList.remove("is-increment-visible"),t._ui.start.hours.number.classList.remove("is-increment-hide"),t._ui.start.hours.number.classList.remove("is-increment-visible")},1100)},100)}},{key:"onPreviousHourEndTimePicker",value:function onPreviousHourEndTimePicker(e){var t=this;this._supportsPassive||e.preventDefault(),e.stopPropagation(),this.end=r.subHours(this.end,1),setTimeout(function(){t._ui.end.hours.number.classList.add("is-decrement-hide"),setTimeout(function(){t._ui.end.hours.number.innerText=r.format(t.end,"HH"),t._ui.end.hours.input.value=r.format(t.end,"HH"),t._ui.end.hours.number.classList.add("is-decrement-visible")},100),setTimeout(function(){t._ui.end.hours.number.classList.remove("is-decrement-hide"),t._ui.end.hours.number.classList.remove("is-decrement-visible")},1100)},100)}},{key:"onNextHourEndTimePicker",value:function onNextHourEndTimePicker(e){var t=this;this._supportsPassive||e.preventDefault(),e.stopPropagation(),this.end=r.addHours(this.end,1),setTimeout(function(){t._ui.end.hours.number.classList.add("is-increment-hide"),setTimeout(function(){t._ui.end.hours.number.innerText=r.format(t.end,"HH"),t._ui.end.hours.input.value=r.format(t.end,"HH"),t._ui.end.hours.number.classList.add("is-increment-visible")},100),setTimeout(function(){t._ui.end.hours.number.classList.remove("is-increment-hide"),t._ui.end.hours.number.classList.remove("is-increment-visible")},1100)},100)}},{key:"onPreviousMinuteEndTimePicker",value:function onPreviousMinuteEndTimePicker(e){var t=this;this._supportsPassive||e.preventDefault(),e.stopPropagation(),this.end=r.subMinutes(this.end,this.options.minuteSteps),setTimeout(function(){t._ui.end.minutes.number.classList.add("is-decrement-hide"),setTimeout(function(){t._ui.end.minutes.number.innerText=r.format(t.end,"mm"),t._ui.end.minutes.input.value=r.format(t.end,"mm"),t._ui.end.minutes.number.classList.add("is-decrement-visible"),r.format(t.end,"HH")!==t._ui.end.hours.input.value&&(t._ui.end.hours.number.innerText=r.format(t.end,"HH"),t._ui.end.hours.input.value=r.format(t.end,"HH"),t._ui.end.hours.number.classList.add("is-decrement-visible"))},100),setTimeout(function(){t._ui.end.minutes.number.classList.remove("is-decrement-hide"),t._ui.end.minutes.number.classList.remove("is-decrement-visible")},1100)},100)}},{key:"onNextMinuteEndTimePicker",value:function onNextMinuteEndTimePicker(e){var t=this;this._supportsPassive||e.preventDefault(),e.stopPropagation(),this.end=r.addMinutes(this.end,this.options.minuteSteps),setTimeout(function(){t._ui.end.minutes.number.classList.add("is-increment-hide"),setTimeout(function(){t._ui.end.minutes.number.innerText=r.format(t.end,"mm"),t._ui.end.minutes.input.value=r.format(t.end,"mm"),t._ui.end.minutes.number.classList.add("is-increment-visible"),r.format(t.end,"HH")!==t._ui.end.hours.input.value&&(t._ui.end.hours.number.innerText=r.format(t.end,"HH"),t._ui.end.hours.input.value=r.format(t.end,"HH"),t._ui.end.hours.number.classList.add("is-increment-visible"))},100),setTimeout(function(){t._ui.end.minutes.number.classList.remove("is-increment-hide"),t._ui.end.minutes.number.classList.remove("is-increment-visible")},1100)},100)}},{key:"isRange",value:function isRange(){return this.options.isRange}},{key:"show",value:function show(){this._open||(this._ui.container.classList.add("is-active"),this._open=!0,this._focus=!0,this.emit("show",this))}},{key:"hide",value:function hide(){this._open=!1,this._focus=!1,this._ui.container.classList.remove("is-active"),this.emit("hide",this)}},{key:"toggle",value:function toggle(){this._open?this.hide():this.show()}},{key:"value",value:function value(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;if(!e){var t=this.start&&this._isValidTime(this.start)?r.format(this.start,this.format,{locale:this.locale}):"";return this.options.isRange&&this.end&&this._isValidTime(this.end)&&(t+=" - "+r.format(this.end,this.format,{locale:this.locale})),t}if(this.options.isRange){if(i.e(e)){var n=e.split(" - ");n.length&&(this.start=r.format(new Date(n[0]),this.format,{locale:this.locale})),2===n.length&&(this.end=r.format(new Date(n[1]),this.format,{locale:this.locale}))}(i.d(e)||i.b(e))&&this._select(e)}else this._select(e)}},{key:"refresh",value:function refresh(){return this._ui.start.hours.input.value=r.format(this.start,"HH"),this._ui.start.hours.number.innerText=r.format(this.start,"HH"),this._ui.start.minutes.input.value=r.format(this.start,"mm"),this._ui.start.minutes.number.innerText=r.format(this.start,"mm"),this.options.isRange&&(this._ui.end.hours.input.value=r.format(this.end,"HH"),this._ui.end.hours.number.innerText=r.format(this.end,"HH"),this._ui.end.minutes.input.value=r.format(this.end,"mm"),this._ui.end.minutes.number.innerText=r.format(this.end,"mm")),this}},{key:"clear",value:function clear(){this.time={start:r.startOfToday(),end:r.endOfToday()},this.refresh()}},{key:"snapshot",value:function snapshot(){this._snapshots.push(c({},this._time))}},{key:"render",value:function render(){return this.refresh(),this.node}},{key:"id",get:function get(){return this._id}},{key:"time",set:function set(e){return i.d(e)&&e.start&&e.end&&(this._time=e),this},get:function get(){return this._time||{start:void 0,end:void 0}}},{key:"lang",set:function set(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"en";return this._lang=e,this._locale=n(84)("./"+e),this},get:function get(){return this._lang}},{key:"locale",get:function get(){return this._locale}},{key:"start",set:function set(e){return this._time.start=e?this._isValidTime(e,this.min,this.max)?e:this._time.start:r.startOfToday(),this},get:function get(){return this._time.start}},{key:"end",set:function set(e){return this._time.end=e?this._isValidTime(e,this.min,this.max)?e:this._time.end:r.endOfToday(),this},get:function get(){return this._time.end}},{key:"min",set:function set(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:void 0;return this._min=e?this._isValidTime(e)?e:this._min:void 0,this},get:function get(){return this._min}},{key:"max",set:function set(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return this._max=e?this._isValidTime(e)?e:this._max:void 0,this},get:function get(){return this._max}},{key:"format",set:function set(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"HH:mm";return this._format=e,this},get:function get(){return this._format}}]),timePicker}();t.a=l},function(e,t,n){"use strict";t.a=function(e){return'<div class="timepicker">\n    <div class="timepicker-start">\n      <div class="timepicker-hours">\n        <span class="timepicker-next">+</span>\n        <div class="timepicker-input">\n          <input type="number">\n          <div class="timepicker-input-number"></div>\n        </div>\n        <span class="timepicker-previous">-</span>\n      </div>\n      <div class="timepicker-time-divider">:</div>\n      <div class="timepicker-minutes">\n        <span class="timepicker-next">+</span>\n        <div class="timepicker-input">\n          <input type="number">\n          <div class="timepicker-input-number"></div>\n        </div>\n        <span class="timepicker-previous">-</span>\n      </div>\n    </div>\n    '+(e.isRange?'<div class="timepicker-end">\n      <div class="timepicker-hours">\n        <span class="timepicker-next">+</span>\n        <div class="timepicker-input">\n          <input type="number">\n          <div class="timepicker-input-number"></div>\n        </div>\n        <span class="timepicker-previous">-</span>\n      </div>\n      <div class="timepicker-time-divider">:</div>\n      <div class="timepicker-minutes">\n        <span class="timepicker-next">+</span>\n        <div class="timepicker-input">\n          <input type="number">\n          <div class="timepicker-input-number"></div>\n        </div>\n        <span class="timepicker-previous">-</span>\n      </div>\n    </div>':"")+"\n  </div>"}},function(e,t,n){"use strict";var o={timeFormat:"HH:mm",color:"primary",isRange:!1,lang:"en",startTime:void 0,endTime:void 0,minTime:null,maxTime:null,minuteSteps:5};t.a=o},function(e,t,n){"use strict";var o={type:void 0,color:"primary",isRange:!1,allowSameDayRange:!0,lang:navigator.language.substring(0,2)||"en",dateFormat:"MM/DD/YYYY",timeFormat:"HH:mm",displayMode:"default",position:"auto",showHeader:!0,headerPosition:"top",showFooter:!0,showButtons:!0,showTodayButton:!0,showClearButton:!0,cancelLabel:"Cancel",clearLabel:"Clear",todayLabel:"Today",nowLabel:"Now",validateLabel:"Validate",enableMonthSwitch:!0,enableYearSwitch:!0,startDate:void 0,endDate:void 0,minDate:null,maxDate:null,disabledDates:[],disabledWeekDays:void 0,weekStart:0,startTime:void 0,endTime:void 0,minuteSteps:5,labelFrom:"",labelTo:"",closeOnOverlayClick:!0,closeOnSelect:!0,toggleOnInputClick:!0,onReady:null,icons:{previous:'<svg viewBox="0 0 50 80" xml:space="preserve">\n      <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>\n    </svg>',next:'<svg viewBox="0 0 50 80" xml:space="preserve">\n      <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>\n    </svg>',time:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 60 60" xml:space="preserve">\n      <g>\n        <path fill="currentcolor" d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/>\n\t      <path fill="currentcolor" d="M30,6c-0.552,0-1,0.447-1,1v23H14c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1V7C31,6.447,30.552,6,30,6z"/>\n      </g>\n    </svg>',date:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 60 60" xml:space="preserve">\n      <g>\n        <path d="M57,4h-7V1c0-0.553-0.447-1-1-1h-7c-0.553,0-1,0.447-1,1v3H19V1c0-0.553-0.447-1-1-1h-7c-0.553,0-1,0.447-1,1v3H3C2.447,4,2,4.447,2,5v11v43c0,0.553,0.447,1,1,1h54c0.553,0,1-0.447,1-1V16V5C58,4.447,57.553,4,57,4z M43,2h5v3v3h-5V5V2z M12,2h5v3v3h-5V5V2z M4,6h6v3c0,0.553,0.447,1,1,1h7c0.553,0,1-0.447,1-1V6h22v3c0,0.553,0.447,1,1,1h7c0.553,0,1-0.447,1-1V6h6v9H4V6zM4,58V17h52v41H4z"/>\n        <path d="M38,23h-7h-2h-7h-2h-9v9v2v7v2v9h9h2h7h2h7h2h9v-9v-2v-7v-2v-9h-9H38z M31,25h7v7h-7V25z M38,41h-7v-7h7V41z M22,34h7v7h-7V34z M22,25h7v7h-7V25z M13,25h7v7h-7V25z M13,34h7v7h-7V34z M20,50h-7v-7h7V50z M29,50h-7v-7h7V50z M38,50h-7v-7h7V50z M47,50h-7v-7h7V50z M47,41h-7v-7h7V41z M47,25v7h-7v-7H47z"/>\n      </g>\n    </svg>'}};t.a=o},function(e,t,n){"use strict";t.a=function(e){return"<div id='"+e.id+'\'>\n    <div class="datetimepicker-dummy is-hidden">\n      <div class="datetimepicker-dummy-wrapper">\n        <input placeholder="'+e.labelFrom+'" readonly="readonly" class="datetimepicker-dummy-input'+(e.isRange?" is-datetimepicker-range":"")+'" type="text">\n        '+(e.isRange?'<input placeholder="'+e.labelTo+'" readonly="readonly" class="datetimepicker-dummy-input" type="text">':"")+'\n      </div>\n      <button class="datetimepicker-clear-button">＋</button>\n    </div>\n    <div class="datetimepicker-wrapper'+("dialog"===e.displayMode?" modal":"")+'">\n        <div class="modal-background'+("dialog"===e.displayMode?"":" is-hidden")+'"></div>\n        <div class="datetimepicker">\n          <div class="datetimepicker-container'+("top"===e.headerPosition?"":" has-header-bottom")+'"></div>\n        </div>\n    </div>\n  </div>'}},function(e,t,n){"use strict";t.a=function(e){return'<div class="datetimepicker-header'+("time"===e.type?" is-hidden":"")+("date"===e.type?" is-date-only":"")+'">\n\t\t<div class="datetimepicker-selection-details">\n\t\t\t<div class="datetimepicker-selection-from'+(""===e.labelFrom?" is-hidden":"")+'">'+e.labelFrom+'</div>\n\t\t\t<div class="datetimepicker-selection-start'+(e.isRange?"":" is-centered")+'">\n\t\t\t\t<div class="datetimepicker-selection-wrapper">\n\t\t\t\t\t<div class="datetimepicker-selection-day"></div>\n\t\t\t\t\t<div class="datetimepicker-selection-date">\n\t\t\t\t\t\t<div class="datetimepicker-selection-month"></div>\n\t\t\t\t\t\t<div class="datetimepicker-selection-weekday"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t'+("date"!==e.type?'<div class="datetimepicker-selection-time">\n\t\t\t\t\t<div class="datetimepicker-selection-time-icon">\n\t\t\t\t\t\t<figure class="image is-16x16">\n\t\t\t\t\t\t\t'+(e.icons?e.icons.time:"")+'\n\t\t\t\t\t\t</figure>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="datetimepicker-selection-hour"></div>\n\t\t\t\t</div>':"")+"\n\t\t\t</div>\n\t\t</div>\n\t\t"+(e.isRange?'\n\t\t<div class="datetimepicker-selection-details">\n\t\t\t<div class="datetimepicker-selection-to'+(""===e.labelTo?" is-hidden":"")+'">'+e.labelTo+'</div>\n\t\t\t<div class="datetimepicker-selection-end">\n\t\t\t\t<div class="datetimepicker-selection-wrapper">\n\t\t\t\t\t<div class="datetimepicker-selection-day"></div>\n\t\t\t\t\t<div class="datetimepicker-selection-date">\n\t\t\t\t\t\t<div class="datetimepicker-selection-month"></div>\n\t\t\t\t\t\t<div class="datetimepicker-selection-weekday"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t'+("date"!==e.type?'<div class="datetimepicker-selection-time">\n\t\t\t\t\t<div class="datetimepicker-selection-time-icon">\n\t\t\t\t\t\t<figure class="image is-16x16">\n\t\t\t\t\t\t\t'+(e.icons?e.icons.time:"")+'\n\t\t\t\t\t\t</figure>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="datetimepicker-selection-hour"></div>\n\t\t\t\t</div>':"")+"\n\t\t\t</div>\n\t\t</div>":"")+"\n\t</div>"}},function(e,t,n){"use strict";t.a=function(e){return'<div class="datetimepicker-footer">\n\t\t<button type="button" class="datetimepicker-footer-validate has-text-success button is-small is-text '+("inline"===e.displayMode?"is-hidden":"")+'">'+(e.icons.validate?e.icons.validate:"")+e.validateLabel+' </button>\n\t\t<button type="button" class="datetimepicker-footer-today has-text-warning button is-small is-text">'+(e.icons.today?e.icons.today:"")+e.todayLabel+'</button>\n\t\t<button type="button" class="datetimepicker-footer-clear has-text-danger button is-small is-text">'+(e.icons.clear?e.icons.clear:"")+e.clearLabel+'</button>\n\t\t<button type="button" class="datetimepicker-footer-cancel button is-small is-text '+("inline"===e.displayMode?"is-hidden":"")+'">'+(e.icons.cancel?e.icons.cancel:"")+e.cancelLabel+"</button>\n\t</div>"}}]).default});
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bulmaIconpicker"] = factory();
	else
		root["bulmaIconpicker"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultOptions__ = __webpack_require__(2);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var fetchStyle = function fetchStyle(url) {
  return new Promise(function (resolve, reject) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.onload = function () {
      resolve();
    };
    link.href = url;

    if (!document.querySelector('link[href="' + url + '"]')) {
      var headScript = document.querySelector('head');
      headScript.append(link);
    }
  });
};

var bulmaIconpicker = function (_EventEmitter) {
  _inherits(bulmaIconpicker, _EventEmitter);

  function bulmaIconpicker(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, bulmaIconpicker);

    var _this = _possibleConstructorReturn(this, (bulmaIconpicker.__proto__ || Object.getPrototypeOf(bulmaIconpicker)).call(this));

    _this.element = typeof selector === 'string' ? document.querySelector(selector) : selector;
    // An invalid selector or non-DOM node has been provided.
    if (!_this.element) {
      throw new Error('An invalid selector or non-DOM node has been provided.');
    }

    _this._clickEvents = ['click'];
    /// Set default options and merge with instance defined
    _this.options = _extends({}, __WEBPACK_IMPORTED_MODULE_1__defaultOptions__["a" /* default */], options);

    _this.icons = [];
    _this.id = 'iconPicker' + new Date().getTime();
    _this.init();
    return _this;
  }

  /**
   * Initiate all DOM element containing carousel class
   * @method
   * @return {Array} Array of all Carousel instances
   */


  _createClass(bulmaIconpicker, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.createModal();
      this.createPreview();

      this.options.iconSets.forEach(function (iconSet) {
        fetchStyle(iconSet.css);
        // Parse CSS file to get array of all available icons
        fetch(iconSet.css, { mode: 'cors' }).then(function (res) {
          return res.text();
        }).then(function (css) {
          _this2.icons[iconSet.name] = _this2.parseCSS(css, iconSet.prefix || 'fa-', iconSet.displayPrefix || '');
          _this2.modalSetTabs.querySelector('a').click();
          var touchEvent = new Event('touchstart');
          _this2.modalSetTabs.querySelector('a').dispatchEvent(touchEvent);
        });
      });
    }
  }, {
    key: 'createPreview',
    value: function createPreview() {
      var _this3 = this;

      this.preview = document.createElement('div');
      this.preview.className = 'icon is-large';
      this.preview.classList.add('iconpicker-preview');
      var iconPreview = document.createElement('i');
      iconPreview.className = 'iconpicker-icon-preview';
      if (this.element.value.length) {
        var classes = this.element.value.split(' ');
        classes.forEach(function (cls) {
          iconPreview.classList.add(cls);
        });
      }
      this.preview.appendChild(iconPreview);

      this._clickEvents.forEach(function (event) {
        _this3.preview.addEventListener(event, function (e) {
          e.preventDefault();

          _this3.modal.classList.add('is-active');
        });
      });

      this.element.parentNode.insertBefore(this.preview, this.element.nextSibling);
    }
  }, {
    key: 'parseCSS',
    value: function parseCSS(css) {
      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fa-';
      var displayPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      var iconPattern = new RegExp('\\.' + prefix + '([^\\.!:]*)::?before\\s*{\\s*content:\\s*["|\']\\\\[^\'|"]*["|\'];?\\s*}', 'g');
      var index = 1;
      var icons = [],
          icon = void 0,
          match = void 0;

      while (match = iconPattern.exec(css)) {
        icon = {
          prefix: prefix,
          selector: prefix + match[index].trim(':'),
          name: this.ucwords(match[index]).trim(':'),
          filter: match[index].trim(':'),
          displayPrefix: displayPrefix
        };
        icons[match[index]] = icon;
      }

      if (Object.getOwnPropertyNames(this.icons).length == 0) {
        console.warn("No icons found in CSS file");
      }
      return icons;
    }
  }, {
    key: 'ucwords',
    value: function ucwords(str) {
      return (str + '').replace(/^(.)|\s+(.)/g, function ($1) {
        return $1.toUpperCase();
      });
    }
  }, {
    key: 'drawIcons',
    value: function drawIcons(iconSet) {
      this.iconsList.innerHTML = '';

      if (iconSet) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = Object.entries(iconSet)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = _slicedToArray(_ref, 2);

            var iconName = _ref2[0];
            var icon = _ref2[1];

            this.iconsList.appendChild(this.createIconPreview(icon));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: 'createIconPreview',
    value: function createIconPreview(icon) {
      var _this4 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fa-';

      var iconLink = document.createElement('a');
      iconLink.dataset.title = icon['name'];
      iconLink.setAttribute('title', icon['name']);
      iconLink.dataset.icon = icon['selector'];
      iconLink.dataset.filter = icon['filter'];
      var iconPreview = document.createElement('i');
      iconPreview.className = 'iconpicker-icon-preview';
      if (icon['displayPrefix'].length) {
        prefix = icon['displayPrefix'].split(' ');
        prefix.forEach(function (pfx) {
          iconPreview.classList.add(pfx);
        });
      }
      iconPreview.classList.add(icon['selector']);
      iconLink.appendChild(iconPreview);
      this._clickEvents.forEach(function (event) {
        iconLink.addEventListener(event, function (e) {
          e.preventDefault();
          _this4.preview.innerHTML = '';
          _this4.element.value = e.target.classList;
          _this4.preview.appendChild(e.target.cloneNode(true));
          _this4.modal.classList.remove('is-active');
        });
      });
      return iconLink;
    }
  }, {
    key: 'createModal',
    value: function createModal() {
      var _this5 = this;

      this.modal = document.createElement('div');
      this.modal.className = 'modal';
      this.modal.classList.add('iconpicker-modal');
      this.modal.id = this.id;
      var modalBackground = document.createElement('div');
      modalBackground.className = 'modal-background';
      var modalCard = document.createElement('div');
      modalCard.className = 'modal-card';

      var modalHeader = document.createElement('header');
      modalHeader.className = 'modal-card-head';
      var modalHeaderTitle = document.createElement('p');
      modalHeaderTitle.className = 'modal-card-title';
      modalHeaderTitle.innerHTML = 'iconPicker';
      this.modalHeaderSearch = document.createElement('input');
      this.modalHeaderSearch.setAttribute('type', 'search');
      this.modalHeaderSearch.setAttribute('placeholder', 'Search');
      this.modalHeaderSearch.className = 'iconpicker-search';
      this.modalHeaderSearch.addEventListener('input', function (e) {
        _this5.filter(e.target.value);
      });
      var modalHeaderClose = document.createElement('button');
      modalHeaderClose.className = 'delete';
      this._clickEvents.forEach(function (event) {
        modalHeaderClose.addEventListener(event, function (e) {
          e.preventDefault();

          _this5.modal.classList.remove('is-active');
        });
      });

      modalCard.appendChild(modalHeader);

      this.modalBody = document.createElement('section');
      this.modalBody.className = 'modal-card-body';

      if (this.options.iconSets.length >= 1) {
        var modalSets = document.createElement('div');
        modalSets.className = 'iconpicker-sets';
        modalSets.classList.add('tabs');
        this.modalSetTabs = document.createElement('ul');
        this.options.iconSets.forEach(function (iconSet) {
          var modalSetTab = document.createElement('li');
          var modalSetTabLink = document.createElement('a');
          modalSetTabLink.dataset.iconset = iconSet.name;
          modalSetTabLink.innerHTML = iconSet.name;
          _this5._clickEvents.forEach(function (event) {
            modalSetTabLink.addEventListener(event, function (e) {
              e.preventDefault();

              var activeModalTabs = _this5.modalSetTabs.querySelectorAll('.is-active');
              [].forEach.call(activeModalTabs, function (activeModalTab) {
                activeModalTab.classList.remove('is-active');
              });

              e.target.parentNode.classList.add('is-active');
              _this5.drawIcons(_this5.icons[e.target.dataset.iconset]);
              _this5.filter(_this5.modalHeaderSearch.value);
            });
          });
          modalSetTab.appendChild(modalSetTabLink);
          _this5.modalSetTabs.appendChild(modalSetTab);
        });
        modalSets.appendChild(this.modalSetTabs);
        modalCard.appendChild(modalSets);
      }

      this.iconsList = document.createElement('div');
      this.iconsList.className = 'iconpicker-icons';

      modalHeader.appendChild(modalHeaderTitle);
      modalHeader.appendChild(this.modalHeaderSearch);
      modalHeader.appendChild(modalHeaderClose);

      this.modalBody.appendChild(this.iconsList);
      modalCard.appendChild(this.modalBody);

      this.modal.appendChild(modalBackground);
      this.modal.appendChild(modalCard);
      document.body.appendChild(this.modal);
    }
  }, {
    key: 'filter',
    value: function filter() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (value === '') {
        this.iconsList.querySelectorAll('[data-filter]').forEach(function (el) {
          el.classList.remove('is-hidden');
        });
        return;
      }
      this.iconsList.querySelectorAll('[data-filter]').forEach(function (el) {
        el.classList.remove('is-hidden');
      });
      this.iconsList.querySelectorAll('[data-filter]:not([data-filter*="' + value + '"])').forEach(function (el) {
        el.classList.add('is-hidden');
      });
    }
  }], [{
    key: 'attach',
    value: function attach() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-action="iconPicker"]';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var instances = new Array();

      var elements = document.querySelectorAll(selector);
      [].forEach.call(elements, function (element) {
        setTimeout(function () {
          instances.push(new bulmaIconpicker(element, options));
        }, 100);
      });
      return instances;
    }
  }]);

  return bulmaIconpicker;
}(__WEBPACK_IMPORTED_MODULE_0__events__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = (bulmaIconpicker);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, EventEmitter);

    this._listeners = new Map(listeners);
    this._middlewares = new Map();
  }

  _createClass(EventEmitter, [{
    key: "listenerCount",
    value: function listenerCount(eventName) {
      if (!this._listeners.has(eventName)) {
        return 0;
      }

      var eventListeners = this._listeners.get(eventName);
      return eventListeners.length;
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      var _this = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var middleware = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this.removeListeners(e, middleware);
          });
        } else {
          this._listeners.delete(eventName);

          if (middleware) {
            this.removeMiddleware(eventName);
          }
        }
      } else {
        this._listeners = new Map();
      }
    }
  }, {
    key: "middleware",
    value: function middleware(eventName, fn) {
      var _this2 = this;

      if (Array.isArray(eventName)) {
        name.forEach(function (e) {
          return _this2.middleware(e, fn);
        });
      } else {
        if (!Array.isArray(this._middlewares.get(eventName))) {
          this._middlewares.set(eventName, []);
        }

        this._middlewares.get(eventName).push(fn);
      }
    }
  }, {
    key: "removeMiddleware",
    value: function removeMiddleware() {
      var _this3 = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this3.removeMiddleware(e);
          });
        } else {
          this._middlewares.delete(eventName);
        }
      } else {
        this._middlewares = new Map();
      }
    }
  }, {
    key: "on",
    value: function on(name, callback) {
      var _this4 = this;

      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (Array.isArray(name)) {
        name.forEach(function (e) {
          return _this4.on(e, callback);
        });
      } else {
        name = name.toString();
        var split = name.split(/,|, | /);

        if (split.length > 1) {
          split.forEach(function (e) {
            return _this4.on(e, callback);
          });
        } else {
          if (!Array.isArray(this._listeners.get(name))) {
            this._listeners.set(name, []);
          }

          this._listeners.get(name).push({ once: once, callback: callback });
        }
      }
    }
  }, {
    key: "once",
    value: function once(name, callback) {
      this.on(name, callback, true);
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      var _this5 = this;

      var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      name = name.toString();
      var listeners = this._listeners.get(name);
      var middlewares = null;
      var doneCount = 0;
      var execute = silent;

      if (Array.isArray(listeners)) {
        listeners.forEach(function (listener, index) {
          // Start Middleware checks unless we're doing a silent emit
          if (!silent) {
            middlewares = _this5._middlewares.get(name);
            // Check and execute Middleware
            if (Array.isArray(middlewares)) {
              middlewares.forEach(function (middleware) {
                middleware(data, function () {
                  var newData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                  if (newData !== null) {
                    data = newData;
                  }
                  doneCount++;
                }, name);
              });

              if (doneCount >= middlewares.length) {
                execute = true;
              }
            } else {
              execute = true;
            }
          }

          // If Middleware checks have been passed, execute
          if (execute) {
            if (listener.once) {
              listeners[index] = null;
            }
            listener.callback(data);
          }
        });

        // Dirty way of removing used Events
        while (listeners.indexOf(null) !== -1) {
          listeners.splice(listeners.indexOf(null), 1);
        }
      }
    }
  }]);

  return EventEmitter;
}();

/* harmony default export */ __webpack_exports__["a"] = (EventEmitter);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var defaultOptions = {
  iconSets: [{
    name: 'simpleLine', // Name displayed on tab
    css: 'https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css', // CSS url containing icons rules
    prefix: 'icon-', // CSS rules prefix to identify icons
    displayPrefix: ''
  }, {
    name: 'Linearicons', // Name displayed on tab
    css: 'https://cdn.linearicons.com/free/1.0.0/icon-font.min.css', // CSS url containing icons rules
    prefix: 'lnr', // CSS rules prefix to identify icons
    displayPrefix: 'lnr lnr-icon'
  }]
};

/* harmony default export */ __webpack_exports__["a"] = (defaultOptions);

/***/ })
/******/ ])["default"];
});
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.bulmaSteps=e():t.bulmaSteps=e()}("undefined"!=typeof self?self:this,function(){return function(n){var s={};function i(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}return i.m=n,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),o=n(2),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},l=function(){function s(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}}();var a=Symbol("onStepsPrevious"),u=Symbol("onStepsNext"),i=function(t){function i(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));if(n.element="string"==typeof t?document.querySelector(t):t,!n.element)throw new Error("An invalid selector or non-DOM node has been provided.");return n._clickEvents=["click"],n.options=r({},o.a,e),n[a]=n[a].bind(n),n[u]=n[u].bind(n),n.init(),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(i,s["a"]),l(i,[{key:"init",value:function(){this._id="bulmaSteps"+(new Date).getTime()+Math.floor(Math.random()*Math.floor(9999)),this.steps=this.element.querySelectorAll(this.options.selector),this.contents=this.element.querySelectorAll(this.options.selector_content),this.previous_btn=this.element.querySelector(this.options.previous_selector),this.next_btn=this.element.querySelector(this.options.next_selector),[].forEach.call(this.steps,function(t,e){t.setAttribute("data-step-id",e)}),this.steps&&this.steps.length&&(this.activate_step(0),this.updateActions(this.steps[0])),this._bindEvents(),this.emit("bulmasteps:ready",this.element.value)}},{key:"_bindEvents",value:function(){var n=this;null!=this.previous_btn&&this._clickEvents.forEach(function(t){n.previous_btn.addEventListener(t,n[a],!1)}),null!=this.next_btn&&this._clickEvents.forEach(function(t){n.next_btn.addEventListener(t,n[u],!1)}),this.options.stepClickable&&[].forEach.call(this.steps,function(t,e){n._clickEvents.forEach(function(t){for(;e>n.current_id;)n[u](t);for(;e<n.current_id;)n[a](t)})})}},{key:a,value:function(t){t.preventDefault(),t.target.getAttribute("disabled")||this.previous_step()}},{key:u,value:function(t){t.preventDefault(),t.target.getAttribute("disabled")||this.next_step()}},{key:"get_current_step_id",value:function(){for(var t=0;t<this.steps.length;t++){var e=this.steps[t];if(e.classList.contains(this.options.active_class))return parseInt(e.getAttribute("data-step-id"))}return null}},{key:"updateActions",value:function(t){var e=parseInt(t.getAttribute("data-step-id"));0==e?(null!=this.previous_btn&&this.previous_btn.setAttribute("disabled","disabled"),null!=this.next_btn&&this.next_btn.removeAttribute("disabled","disabled")):e==this.steps.length-1?(null!=this.previous_btn&&this.previous_btn.removeAttribute("disabled","disabled"),null!=this.next_btn&&this.next_btn.setAttribute("disabled","disabled")):(null!=this.previous_btn&&this.previous_btn.removeAttribute("disabled","disabled"),null!=this.next_btn&&this.next_btn.removeAttribute("disabled","disabled"))}},{key:"next_step",value:function(){var t=this.get_current_step_id();if(null!=t){var e=t+1,n=[];if(void 0!==this.options.beforeNext&&null!=this.options.beforeNext&&this.options.beforeNext&&(n=this.options.beforeNext(t)),this.emit("bulmasteps:before:next",t),void 0===n&&(n=[]),0<n.length){this.emit("bulmasteps:errors",n);for(var s=0;s<n.length;s++)void 0!==this.options.onError&&null!=this.options.onError&&this.options.onError&&this.options.onError(n[s])}else e>=this.steps.length-1&&(void 0!==this.options.onFinish&&null!=this.options.onFinish&&this.options.onFinish&&this.options.onFinish(t),this.emit("bulmasteps:finish",t)),e<this.steps.length&&(this.complete_step(t),this.activate_step(e))}}},{key:"previous_step",value:function(){var t=this.get_current_step_id();null!=t&&(this.uncomplete_step(t-1),this.activate_step(t-1))}},{key:"activate_step",value:function(t){this.updateActions(this.steps[t]);for(var e=0;e<this.steps.length;e++){this.steps[e]!=this.steps[t]&&this.deactivate_step(e)}this.steps[t].classList.add(this.options.active_class),void 0!==this.contents[t]&&this.contents[t].classList.add(this.options.active_class),void 0!==this.options.onShow&&null!=this.options.onShow&&this.options.onShow&&this.options.onShow(t),this.emit("bulmasteps:step:show",t)}},{key:"complete_step",value:function(t){this.steps[t].classList.add(this.options.completed_class),this.emit("bulmasteps:step:completed",t)}},{key:"uncomplete_step",value:function(t){this.steps[t].classList.remove(this.options.completed_class),this.emit("bulmasteps:step:uncompleted",t)}},{key:"deactivate_step",value:function(t){this.steps[t].classList.remove(this.options.active_class),void 0!==this.contents[t]&&this.contents[t].classList.remove(this.options.active_class)}}],[{key:"attach",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".steps",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=new Array,s=document.querySelectorAll(t);return[].forEach.call(s,function(t){setTimeout(function(){n.push(new i(t,e))},100)}),n}}]),i}();e.default=i},function(t,e,n){"use strict";var s=function(){function s(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}}();var i=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._listeners=new Map(t),this._middlewares=new Map}return s(e,[{key:"listenerCount",value:function(t){return this._listeners.has(t)?this._listeners.get(t).length:0}},{key:"removeListeners",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,n=1<arguments.length&&void 0!==arguments[1]&&arguments[1];null!==t?Array.isArray(t)?name.forEach(function(t){return e.removeListeners(t,n)}):(this._listeners.delete(t),n&&this.removeMiddleware(t)):this._listeners=new Map}},{key:"middleware",value:function(t,e){var n=this;Array.isArray(t)?name.forEach(function(t){return n.middleware(t,e)}):(Array.isArray(this._middlewares.get(t))||this._middlewares.set(t,[]),this._middlewares.get(t).push(e))}},{key:"removeMiddleware",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null!==t?Array.isArray(t)?name.forEach(function(t){return e.removeMiddleware(t)}):this._middlewares.delete(t):this._middlewares=new Map}},{key:"on",value:function(t,e){var n=this,s=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(Array.isArray(t))t.forEach(function(t){return n.on(t,e)});else{var i=(t=t.toString()).split(/,|, | /);1<i.length?i.forEach(function(t){return n.on(t,e)}):(Array.isArray(this._listeners.get(t))||this._listeners.set(t,[]),this._listeners.get(t).push({once:s,callback:e}))}}},{key:"once",value:function(t,e){this.on(t,e,!0)}},{key:"emit",value:function(n,s){var i=this,o=2<arguments.length&&void 0!==arguments[2]&&arguments[2];n=n.toString();var r=this._listeners.get(n),l=null,a=0,u=o;if(Array.isArray(r))for(r.forEach(function(t,e){o||(l=i._middlewares.get(n),Array.isArray(l)?(l.forEach(function(t){t(s,function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null!==t&&(s=t),a++},n)}),a>=l.length&&(u=!0)):u=!0),u&&(t.once&&(r[e]=null),t.callback(s))});-1!==r.indexOf(null);)r.splice(r.indexOf(null),1)}}]),e}();e.a=i},function(t,e,n){"use strict";e.a={selector:".step-item",selector_content:".step-content",previous_selector:'[data-nav="previous"]',next_selector:'[data-nav="next"]',active_class:"is-active",completed_class:"is-completed",stepClickable:!1,beforeNext:null,onShow:null,onFinish:null,onError:null}}]).default});
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.bulmaTagsinput=t():e.bulmaTagsinput=t()}("undefined"!=typeof self?self:this,function(){return function(n){var i={};function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}return r.m=n,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),a=n(2),s=n(3),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();var r=function(e){function r(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));if(n.element=s.a(e)?document.querySelector(e):e,!n.element)throw new Error("An invalid selector or non-DOM node has been provided.");return n._clickEvents=["click"],n.options=o({},a.a,t),n.element.dataset.hasOwnProperty("lowercase")&&(n.options.lowercase=n.element.dataset("lowercase")),n.element.dataset.hasOwnProperty("uppercase")&&(n.options.lowercase=n.element.dataset("uppercase")),n.element.dataset.hasOwnProperty("duplicates")&&(n.options.lowercase=n.element.dataset("duplicates")),n.init(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,i["a"]),l(r,[{key:"init",value:function(){if(!this.options.disabled){this.tags=[],this.container=document.createElement("div"),this.container.className="tagsinput",this.container.classList.add("field"),this.container.classList.add("is-grouped"),this.container.classList.add("is-grouped-multiline"),this.container.classList.add("input");var e=this.element.getAttribute("type");e&&"tags"!==e||(e="text"),this.input=document.createElement("input"),this.input.setAttribute("type",e),this.element.getAttribute("placeholder")?this.input.setAttribute("placeholder",this.element.getAttribute("placeholder")):this.input.setAttribute("placeholder","Add a Tag"),this.container.appendChild(this.input);var t=this.element.nextSibling;this.element.parentNode[t?"insertBefore":"appendChild"](this.container,t),this.element.style.cssText="position:absolute;left:0;top:0;width:1px;height:1px;opacity:0.01;",this.element.tabIndex=-1,this.enable()}}},{key:"enable",value:function(){var s=this;this.enabled||this.options.disabled||(this.element.addEventListener("focus",function(){s.container.classList.add("is-focused"),s.select(Array.prototype.slice.call(s.container.querySelectorAll(".tag:not(.is-delete)")).pop())}),this.input.addEventListener("focus",function(){s.container.classList.add("is-focused"),s.select(Array.prototype.slice.call(s.container.querySelectorAll(".tag:not(.is-delete)")).pop())}),this.input.addEventListener("blur",function(){s.container.classList.remove("is-focused"),s.select(Array.prototype.slice.call(s.container.querySelectorAll(".tag:not(.is-delete)")).pop()),s.savePartial()}),this.input.addEventListener("keydown",function(e){var t=e.charCode||e.keyCode||e.which,n=void 0,i=s.container.querySelector(".tag.is-active"),r=Array.prototype.slice.call(s.container.querySelectorAll(".tag:not(.is-delete)")).pop(),a=s.caretAtStart(s.input);if(i&&(n=s.container.querySelector('[data-tag="'+i.innerHTML.trim()+'"]')),s.setInputWidth(),13===t||t===s.options.delimiter.charCodeAt(0)||188===t||9===t){if(!s.input.value&&(t!==s.options.delimiter.charCodeAt(0)||188===t))return;s.savePartial()}else if(46===t&&n)n.nextSibling?s.select(n.nextSibling.querySelector(".tag")):n.previousSibling&&s.select(n.previousSibling.querySelector(".tag")),s.container.removeChild(n),s.tags.splice(s.tags.indexOf(n.getAttribute("data-tag")),1),s.setInputWidth(),s.save();else if(8===t)if(n)n.previousSibling?s.select(n.previousSibling.querySelector(".tag")):n.nextSibling&&s.select(n.nextSibling.querySelector(".tag")),s.container.removeChild(n),s.tags.splice(s.tags.indexOf(n.getAttribute("data-tag")),1),s.setInputWidth(),s.save();else{if(!r||!a)return;s.select(r)}else if(37===t)if(n)n.previousSibling&&s.select(n.previousSibling.querySelector(".tag"));else{if(!a)return;s.select(r)}else{if(39!==t)return s.select();if(!n)return;s.select(n.nextSibling.querySelector(".tag"))}return e.preventDefault(),!1}),this.input.addEventListener("input",function(){s.element.value=s.getValue(),s.element.dispatchEvent(new Event("input"))}),this.input.addEventListener("paste",function(){return setTimeout(savePartial,0)}),this.container.addEventListener("mousedown",function(e){s.refocus(e)}),this.container.addEventListener("touchstart",function(e){s.refocus(e)}),this.savePartial(this.element.value),this.enabled=!0)}},{key:"disable",value:function(){this.enabled&&!this.options.disabled&&(this.reset(),this.enabled=!1)}},{key:"select",value:function(e){var t=this.container.querySelector(".is-active");t&&t.classList.remove("is-active"),e&&e.classList.add("is-active")}},{key:"addTag",value:function(e){var a=this;if(~e.indexOf(this.options.delimiter)&&(e=e.split(this.options.delimiter)),Array.isArray(e))return e.forEach(function(e){a.addTag(e)});var t=e&&e.trim();if(!t)return!1;if("true"==this.options.lowercase&&(t=t.toLowerCase()),"true"==this.options.uppercase&&(t=t.toUpperCase()),this.options.duplicates||-1===this.tags.indexOf(t)){this.tags.push(t);var n=document.createElement("div");n.className="control",n.setAttribute("data-tag",t);var i=document.createElement("div");i.className="tags",i.classList.add("has-addons");var r=document.createElement("span");if(r.className="tag",r.classList.add("is-active"),this.select(r),r.innerHTML=t,i.appendChild(r),this.options.allowDelete){var s=document.createElement("a");s.className="tag",s.classList.add("is-delete"),this._clickEvents.forEach(function(e){s.addEventListener(e,function(e){var t=void 0,n=e.target.parentNode,i=Array.prototype.slice.call(a.container.querySelectorAll(".tag")).pop(),r=a.caretAtStart(a.input);if(n&&(t=a.container.querySelector('[data-tag="'+n.innerText.trim()+'"]')),t)a.select(t.previousSibling),a.container.removeChild(t),a.tags.splice(a.tags.indexOf(t.getAttribute("data-tag")),1),a.setInputWidth(),a.save();else{if(!i||!r)return;a.select(i)}})}),i.appendChild(s)}n.appendChild(i),this.container.insertBefore(n,this.input)}}},{key:"getValue",value:function(){return this.tags.join(this.options.delimiter)}},{key:"setValue",value:function(e){var t=this;Array.prototype.slice.call(this.container.querySelectorAll(".tag")).forEach(function(e){t.tags.splice(t.tags.indexOf(e.innerHTML),1),t.container.removeChild(e)}),this.savePartial(e)}},{key:"setInputWidth",value:function(){var e=Array.prototype.slice.call(this.container.querySelectorAll(".control")).pop();this.container.offsetWidth&&(this.input.style.width=Math.max(this.container.offsetWidth-(e?e.offsetLeft+e.offsetWidth:30)-30,this.container.offsetWidth/4)+"px")}},{key:"savePartial",value:function(e){"string"==typeof e||Array.isArray(e)||(e=this.input.value),!1!==this.addTag(e)&&(this.input.value="",this.save(),this.setInputWidth())}},{key:"save",value:function(){this.element.value=this.tags.join(this.options.delimiter),this.element.dispatchEvent(new Event("change"))}},{key:"caretAtStart",value:function(t){try{return 0===t.selectionStart&&0===t.selectionEnd}catch(e){return""===t.value}}},{key:"refocus",value:function(e){return e.target.classList.contains("tag")&&this.select(e.target),e.target===this.input?this.select():(this.input.focus(),e.preventDefault(),!1)}},{key:"reset",value:function(){this.tags=[]}},{key:"destroy",value:function(){this.disable(),this.reset(),this.element=null}}],[{key:"attach",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'input[type="tags"]',t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=new Array,i=document.querySelectorAll(e);return[].forEach.call(i,function(e){setTimeout(function(){n.push(new r(e,t))},100)}),n}}]),r}();t.default=r},function(e,t,n){"use strict";var i=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();var r=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._listeners=new Map(e),this._middlewares=new Map}return i(t,[{key:"listenerCount",value:function(e){return this._listeners.has(e)?this._listeners.get(e).length:0}},{key:"removeListeners",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,n=1<arguments.length&&void 0!==arguments[1]&&arguments[1];null!==e?Array.isArray(e)?name.forEach(function(e){return t.removeListeners(e,n)}):(this._listeners.delete(e),n&&this.removeMiddleware(e)):this._listeners=new Map}},{key:"middleware",value:function(e,t){var n=this;Array.isArray(e)?name.forEach(function(e){return n.middleware(e,t)}):(Array.isArray(this._middlewares.get(e))||this._middlewares.set(e,[]),this._middlewares.get(e).push(t))}},{key:"removeMiddleware",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null!==e?Array.isArray(e)?name.forEach(function(e){return t.removeMiddleware(e)}):this._middlewares.delete(e):this._middlewares=new Map}},{key:"on",value:function(e,t){var n=this,i=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(Array.isArray(e))e.forEach(function(e){return n.on(e,t)});else{var r=(e=e.toString()).split(/,|, | /);1<r.length?r.forEach(function(e){return n.on(e,t)}):(Array.isArray(this._listeners.get(e))||this._listeners.set(e,[]),this._listeners.get(e).push({once:i,callback:t}))}}},{key:"once",value:function(e,t){this.on(e,t,!0)}},{key:"emit",value:function(n,i){var r=this,a=2<arguments.length&&void 0!==arguments[2]&&arguments[2];n=n.toString();var s=this._listeners.get(n),o=null,l=0,c=a;if(Array.isArray(s))for(s.forEach(function(e,t){a||(o=r._middlewares.get(n),Array.isArray(o)?(o.forEach(function(e){e(i,function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null!==e&&(i=e),l++},n)}),l>=o.length&&(c=!0)):c=!0),c&&(e.once&&(s[t]=null),e.callback(i))});-1!==s.indexOf(null);)s.splice(s.indexOf(null),1)}}]),t}();t.a=r},function(e,t,n){"use strict";t.a={disabled:!1,delimiter:",",allowDelete:!0,lowercase:!1,uppercase:!1,duplicates:!0}},function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e){return"string"==typeof e||!!e&&"object"===(void 0===e?"undefined":i(e))&&"[object String]"===Object.prototype.toString.call(e)}}]).default});
/*!
 * current-device v0.8.2 - https://github.com/matthewhudson/current-device
 * MIT Licensed
 */
!function (n, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.device = e() : n.device = e() }(window, function () { return function (n) { var e = {}; function o(t) { if (e[t]) return e[t].exports; var r = e[t] = { i: t, l: !1, exports: {} }; return n[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports } return o.m = n, o.c = e, o.d = function (n, e, t) { o.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: t }) }, o.r = function (n) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 }) }, o.t = function (n, e) { if (1 & e && (n = o(n)), 8 & e) return n; if (4 & e && "object" == typeof n && n && n.__esModule) return n; var t = Object.create(null); if (o.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: n }), 2 & e && "string" != typeof n) for (var r in n) o.d(t, r, function (e) { return n[e] }.bind(null, r)); return t }, o.n = function (n) { var e = n && n.__esModule ? function () { return n.default } : function () { return n }; return o.d(e, "a", e), e }, o.o = function (n, e) { return Object.prototype.hasOwnProperty.call(n, e) }, o.p = "", o(o.s = 0) }([function (n, e, o) { n.exports = o(1) }, function (n, e, o) { "use strict"; o.r(e); var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) { return typeof n } : function (n) { return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n }, r = window.device, i = {}, a = []; window.device = i; var c = window.document.documentElement, d = window.navigator.userAgent.toLowerCase(), u = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "pov_tv", "hbbtv", "ce-html"]; function l(n, e) { return -1 !== n.indexOf(e) } function s(n) { return l(d, n) } function f(n) { return c.className.match(new RegExp(n, "i")) } function b(n) { var e = null; f(n) || (e = c.className.replace(/^\s+|\s+$/g, ""), c.className = e + " " + n) } function p(n) { f(n) && (c.className = c.className.replace(" " + n, "")) } function w() { i.landscape() ? (p("portrait"), b("landscape"), m("landscape")) : (p("landscape"), b("portrait"), m("portrait")), h() } function m(n) { for (var e in a) a[e](n) } i.macos = function () { return s("mac") }, i.ios = function () { return i.iphone() || i.ipod() || i.ipad() }, i.iphone = function () { return !i.windows() && s("iphone") }, i.ipod = function () { return s("ipod") }, i.ipad = function () { return s("ipad") }, i.android = function () { return !i.windows() && s("android") }, i.androidPhone = function () { return i.android() && s("mobile") }, i.androidTablet = function () { return i.android() && !s("mobile") }, i.blackberry = function () { return s("blackberry") || s("bb10") || s("rim") }, i.blackberryPhone = function () { return i.blackberry() && !s("tablet") }, i.blackberryTablet = function () { return i.blackberry() && s("tablet") }, i.windows = function () { return s("windows") }, i.windowsPhone = function () { return i.windows() && s("phone") }, i.windowsTablet = function () { return i.windows() && s("touch") && !i.windowsPhone() }, i.fxos = function () { return (s("(mobile") || s("(tablet")) && s(" rv:") }, i.fxosPhone = function () { return i.fxos() && s("mobile") }, i.fxosTablet = function () { return i.fxos() && s("tablet") }, i.meego = function () { return s("meego") }, i.cordova = function () { return window.cordova && "file:" === location.protocol }, i.nodeWebkit = function () { return "object" === t(window.process) }, i.mobile = function () { return i.androidPhone() || i.iphone() || i.ipod() || i.windowsPhone() || i.blackberryPhone() || i.fxosPhone() || i.meego() }, i.tablet = function () { return i.ipad() || i.androidTablet() || i.blackberryTablet() || i.windowsTablet() || i.fxosTablet() }, i.desktop = function () { return !i.tablet() && !i.mobile() }, i.television = function () { for (var n = 0; n < u.length;) { if (s(u[n])) return !0; n++ } return !1 }, i.portrait = function () { return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? l(screen.orientation.type, "portrait") : window.innerHeight / window.innerWidth > 1 }, i.landscape = function () { return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? l(screen.orientation.type, "landscape") : window.innerHeight / window.innerWidth < 1 }, i.noConflict = function () { return window.device = r, this }, i.ios() ? i.ipad() ? b("ios ipad tablet") : i.iphone() ? b("ios iphone mobile") : i.ipod() && b("ios ipod mobile") : i.macos() ? b("macos desktop") : i.android() ? i.androidTablet() ? b("android tablet") : b("android mobile") : i.blackberry() ? i.blackberryTablet() ? b("blackberry tablet") : b("blackberry mobile") : i.windows() ? i.windowsTablet() ? b("windows tablet") : i.windowsPhone() ? b("windows mobile") : b("windows desktop") : i.fxos() ? i.fxosTablet() ? b("fxos tablet") : b("fxos mobile") : i.meego() ? b("meego mobile") : i.nodeWebkit() ? b("node-webkit") : i.television() ? b("television") : i.desktop() && b("desktop"), i.cordova() && b("cordova"), i.onChangeOrientation = function (n) { "function" == typeof n && a.push(n) }; var y = "resize"; function v(n) { for (var e = 0; e < n.length; e++)if (i[n[e]]()) return n[e]; return "unknown" } function h() { i.orientation = v(["portrait", "landscape"]) } Object.prototype.hasOwnProperty.call(window, "onorientationchange") && (y = "orientationchange"), window.addEventListener ? window.addEventListener(y, w, !1) : window.attachEvent ? window.attachEvent(y, w) : window[y] = w, w(), i.type = v(["mobile", "tablet", "desktop"]), i.os = v(["ios", "iphone", "ipad", "ipod", "android", "blackberry", "macos", "windows", "fxos", "meego", "television"]), h(), e.default = i }]).default });
//# sourceMappingURL=current-device.min.js.map
+function(n){"use strict";function t(){var i=document.createElement("gg"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var t in n)if(i.style[t]!==undefined)return{end:n[t]};return!1}n.fn.emulateTransitionEnd=function(t){var i=!1,u=this,r;n(this).one("ggTransitionEnd",function(){i=!0});return r=function(){i||n(u).trigger(n.support.transition.end)},setTimeout(r,t),this};n(function(){(n.support.transition=t(),n.support.transition)&&(n.event.special.ggTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery);+function(n){"use strict";function r(i){return this.each(function(){var u=n(this),r=u.data("gg.tooltip"),f=typeof i=="object"&&i;(r||i!="destroy")&&(r||u.data("gg.tooltip",r=new t(this,f)),typeof i=="string"&&r[i]())})}var t=function(n,t){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;this.init("tooltip",n,t)},i;t.VERSION="2.0";t.TRANSITION_DURATION=150;t.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="ggtooltip" role="tooltip"><div class="arrow-shadow"><div class="arrow"><\/div><\/div><div class="tooltip-inner"><\/div><\/div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},backcolor:"#00ffcc",textcolor:"#000000",bordercolor:"#0066cc"};t.prototype.init=function(t,i,r){var f,e,u,o,s;for(this.enabled=!0,this.type=t,this.$element=n(i),this.options=this.getOptions(r),this.$viewport=this.options.viewport&&n(this.options.viewport.selector||this.options.viewport),f=this.options.trigger.split(" "),e=f.length;e--;)if(u=f[e],u=="click")this.$element.on("click."+this.type,this.options.selector,n.proxy(this.toggle,this));else if(u!="manual"){o=u=="hover"?"mouseenter":"focusin";s=u=="hover"?"mouseleave":"focusout";this.$element.on(o+"."+this.type,this.options.selector,n.proxy(this.enter,this));this.$element.on(s+"."+this.type,this.options.selector,n.proxy(this.leave,this))}this.options.selector?this._options=n.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()};t.prototype.getDefaults=function(){return t.DEFAULTS};t.prototype.getOptions=function(t){return t=n.extend({},this.getDefaults(),this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t};t.prototype.getDelegateOptions=function(){var t={},i=this.getDefaults();return this._options&&n.each(this._options,function(n,r){i[n]!=r&&(t[n]=r)}),t};t.prototype.enter=function(t){var i=t instanceof this.constructor?t:n(t.currentTarget).data("gg."+this.type);if(i&&i.$tip&&i.$tip.is(":visible")){i.hoverState="in";return}if(i||(i=new this.constructor(t.currentTarget,this.getDelegateOptions()),n(t.currentTarget).data("gg."+this.type,i)),clearTimeout(i.timeout),i.hoverState="in",!i.options.delay||!i.options.delay.show)return i.show();i.timeout=setTimeout(function(){i.hoverState=="in"&&i.show()},i.options.delay.show)};t.prototype.leave=function(t){var i=t instanceof this.constructor?t:n(t.currentTarget).data("gg."+this.type);if(i||(i=new this.constructor(t.currentTarget,this.getDelegateOptions()),n(t.currentTarget).data("gg."+this.type,i)),clearTimeout(i.timeout),i.hoverState="out",!i.options.delay||!i.options.delay.hide)return i.hide();i.timeout=setTimeout(function(){i.hoverState=="out"&&i.hide()},i.options.delay.hide)};t.prototype.show=function(){var c=n.Event("show.gg."+this.type),l,p,h;if(this.hasContent()&&this.enabled){if(this.$element.trigger(c),l=n.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]),c.isDefaultPrevented()||!l)return;var u=this,r=this.tip(),a=this.getUID(this.type);this.setContent();r.attr("id",a);this.$element.attr("aria-describedby",a);this.options.animation&&r.addClass("fade");var i=typeof this.options.placement=="function"?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,v=/\s?auto?\s?/i,y=v.test(i);y&&(i=i.replace(v,"")||"top");r.detach().css({top:0,left:0,display:"block"}).addClass(i).data("gg."+this.type,this);this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element);var f=this.getPosition(),o=r[0].offsetWidth,s=r[0].offsetHeight;if(y){var w=i,b=this.options.container?n(this.options.container):this.$element.parent(),e=this.getPosition(b);i=i=="bottom"&&f.bottom+s>e.bottom?"top":i=="top"&&f.top-s<e.top?"bottom":i=="right"&&f.right+o>e.width?"left":i=="left"&&f.left-o<e.left?"right":i;r.removeClass(w).addClass(i)}p=this.getCalculatedOffset(i,f,o,s);this.applyPlacement(p,i);h=function(){var n=u.hoverState;u.$element.trigger("shown.gg."+u.type);u.hoverState=null;n=="out"&&u.leave(u)};n.support.transition&&this.$tip.hasClass("fade")?r.one("ggTransitionEnd",h).emulateTransitionEnd(t.TRANSITION_DURATION):h()}};t.prototype.applyPlacement=function(t,i){var r=this.tip(),l=r[0].offsetWidth,e=r[0].offsetHeight,o=parseInt(r.css("margin-top"),10),s=parseInt(r.css("margin-left"),10),h,f,u;isNaN(o)&&(o=0);isNaN(s)&&(s=0);t.top=t.top+o;t.left=t.left+s;n.offset.setOffset(r[0],n.extend({using:function(n){r.css({top:Math.round(n.top),left:Math.round(n.left)})}},t),0);r.addClass("in");h=r[0].offsetWidth;f=r[0].offsetHeight;i=="top"&&f!=e&&(t.top=t.top+e-f);u=this.getViewportAdjustedDelta(i,t,h,f);u.left?t.left+=u.left:t.top+=u.top;var c=/top|bottom/.test(i),a=c?u.left*2-l+h:u.top*2-e+f,v=c?"offsetWidth":"offsetHeight";r.offset(t);this.replaceArrow(a,r[0][v],c);this.setStyles(i)};t.prototype.replaceArrow=function(n,t,i){n>0&&(this.arrow().css(i?"left":"top",50*(1-n/t)+"%").css(i?"top":"left",""),this.arrowShadow().css(i?"left":"top",50*(1-n/t)+"%").css(i?"top":"left",""))};t.prototype.setContent=function(){var n=this.tip(),t=this.getTitle();n.find(".tooltip-inner")[this.options.html?"html":"text"](t);n.removeClass("fade in top bottom left right")};t.prototype.setStyles=function(n){var t=this.tip();t.find(".tooltip-inner").css({background:this.options.backcolor,color:this.options.textcolor,"border-color":this.options.bordercolor});t.find(".arrow").css("border-"+n+"-color",this.options.backcolor);t.find(".arrow-shadow").css("border-"+n+"-color",this.options.bordercolor)};t.prototype.hide=function(i){function e(){r.hoverState!="in"&&u.detach();r.$element.removeAttr("aria-describedby").trigger("hidden.gg."+r.type);i&&i()}var r=this,u=this.tip(),f=n.Event("hide.gg."+this.type);if(this.$element.trigger(f),!f.isDefaultPrevented())return u.removeClass("in"),n.support.transition&&this.$tip.hasClass("fade")?u.one("ggTransitionEnd",e).emulateTransitionEnd(t.TRANSITION_DURATION):e(),this.hoverState=null,this};t.prototype.fixTitle=function(){var n=this.$element;(n.attr("title")||typeof n.attr("data-original-title")!="string")&&n.attr("data-original-title",n.attr("title")||"").attr("title","")};t.prototype.hasContent=function(){return this.getTitle()};t.prototype.getPosition=function(t){t=t||this.$element;var u=t[0],r=u.tagName=="BODY",i=u.getBoundingClientRect();i.width==null&&(i=n.extend({},i,{width:i.right-i.left,height:i.bottom-i.top}));var f=r?{top:0,left:0}:t.offset(),e={scroll:r?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},o=r?{width:n(window).width(),height:n(window).height()}:null;return n.extend({},i,e,o,f)};t.prototype.getCalculatedOffset=function(n,t,i,r){return n=="bottom"?{top:t.top+t.height,left:t.left+t.width/2-i/2}:n=="top"?{top:t.top-r,left:t.left+t.width/2-i/2}:n=="left"?{top:t.top+t.height/2-r/2,left:t.left-i}:{top:t.top+t.height/2-r/2,left:t.left+t.width}};t.prototype.getViewportAdjustedDelta=function(n,t,i,r){var f={top:0,left:0},e,u,o,s,h,c;return this.$viewport?(e=this.options.viewport&&this.options.viewport.padding||0,u=this.getPosition(this.$viewport),/right|left/.test(n)?(o=t.top-e-u.scroll,s=t.top+e-u.scroll+r,o<u.top?f.top=u.top-o:s>u.top+u.height&&(f.top=u.top+u.height-s)):(h=t.left-e,c=t.left+e+i,h<u.left?f.left=u.left-h:c>u.width&&(f.left=u.left+u.width-c)),f):f};t.prototype.getTitle=function(){var t=this.$element,n=this.options;return t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title)};t.prototype.getUID=function(n){do n+=~~(Math.random()*1e6);while(document.getElementById(n));return n};t.prototype.tip=function(){return this.$tip=this.$tip||n(this.options.template)};t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};t.prototype.arrowShadow=function(){return this.$arrowShadow=this.$arrowShadow||this.tip().find(".arrow-shadow")};t.prototype.enable=function(){this.enabled=!0};t.prototype.disable=function(){this.enabled=!1};t.prototype.toggleEnabled=function(){this.enabled=!this.enabled};t.prototype.toggle=function(t){var i=this;t&&(i=n(t.currentTarget).data("gg."+this.type),i||(i=new this.constructor(t.currentTarget,this.getDelegateOptions()),n(t.currentTarget).data("gg."+this.type,i)));i.tip().hasClass("in")?i.leave(i):i.enter(i)};t.prototype.destroy=function(){var n=this;clearTimeout(this.timeout);this.hide(function(){n.$element.off("."+n.type).removeData("gg."+n.type)})};i=n.fn.ggtooltip;n.fn.ggtooltip=r;n.fn.ggtooltip.Constructor=t;n.fn.ggtooltip.noConflict=function(){return n.fn.ggtooltip=i,this}}(jQuery);+function(n){"use strict";function r(i){return this.each(function(){var u=n(this),r=u.data("gg.popover"),f=typeof i=="object"&&i;(r||i!="destroy")&&(r||u.data("gg.popover",r=new t(this,f)),typeof i=="string"&&r[i]())})}var t=function(n,t){this.init("popover",n,t)},i;if(!n.fn.ggtooltip)throw new Error("ggPopover requires ggtooltip.js");t.VERSION="1.0";t.DEFAULTS=n.extend({},n.fn.ggtooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="ggpopover" role="tooltip"><div class="arrow"><div class="after"><\/div><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>',titleBackcolor:"#f7f7f7",titleBordercolor:"#ebebeb",titleTextcolor:"#000000",contentBackcolor:"#ffffff",contentTextcolor:"#000000",bordercolor:"#cccccc",arrowcolor:"#ffffff"});t.prototype=n.extend({},n.fn.ggtooltip.Constructor.prototype);t.prototype.constructor=t;t.prototype.getDefaults=function(){return t.DEFAULTS};t.prototype.setContent=function(){var n=this.tip(),i=this.getTitle(),t=this.getContent();n.find(".popover-title")[this.options.html?"html":"text"](i);n.find(".popover-content").children().detach().end()[this.options.html?typeof t=="string"?"html":"append":"text"](t);n.removeClass("fade top bottom left right in");n.find(".popover-title").html()||n.find(".popover-title").hide()};t.prototype.setStyles=function(n){var t=this.tip(),i=this.getTitle();t.find(".popover-title").css({"background-color":this.options.titleBackcolor,color:this.options.titleTextcolor,"border-bottom-color":this.options.titleBordercolor});t.find(".popover-content").css({"background-color":this.options.contentBackcolor,color:this.options.contentTextcolor});t.find(".arrow").css("border-"+n+"-color",this.options.bordercolor);t.find(".arrow > .after").css("border-"+n+"-color",this.options.arrowcolor);t.css({"border-color":this.options.bordercolor})};t.prototype.hasContent=function(){return this.getTitle()||this.getContent()};t.prototype.getContent=function(){var t=this.$element,n=this.options;return t.attr("data-content")||(typeof n.content=="function"?n.content.call(t[0]):n.content)};t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};t.prototype.tip=function(){return this.$tip||(this.$tip=n(this.options.template)),this.$tip};i=n.fn.ggpopover;n.fn.ggpopover=r;n.fn.ggpopover.Constructor=t;n.fn.ggpopover.noConflict=function(){return n.fn.ggpopover=i,this}}(jQuery);
/*
//# sourceMappingURL=ggpopover.min.js.map
*/

!function ($) {

    "use strict"; // jshint ;_;

    var ggTooltip = function (element, options) {
        this.init('ggtooltip', element, options)
    }

    ggTooltip.prototype = {
        constructor: ggTooltip,

        init: function (type, element, options) {
            var eventIn, eventOut;

            this.type = type;
            this.$element = $(element);
            this.options = this.getOptions(options);
            this.enabled = true;

            if (this.options.trigger == 'click') {
                this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
            } else if (this.options.trigger != 'manual') {
                eventIn = this.options.trigger == 'hover' ? 'mouseenter' : 'focus';
                eventOut = this.options.trigger == 'hover' ? 'mouseleave' : 'blur';
                this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
                this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));;
            }

            this.options.selector ?
              (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
              this.fixTitle();
        },

        getOptions: function (options) {
            options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data());

            if (options.delay && typeof options.delay == 'number') {
                options.delay = {
                    show: options.delay
                , hide: options.delay
                };
            }

            return options;
        },

        enter: function (e) {
            var self = $(e.currentTarget)[this.type](this._options).data(this.type);

            if (!self.options.delay || !self.options.delay.show) return self.show();

            clearTimeout(this.timeout);
            self.hoverState = 'in';
            this.timeout = setTimeout(function () {
                if (self.hoverState == 'in') self.show();
            }, self.options.delay.show);
        },

        leave: function (e) {
            var self = $(e.currentTarget)[this.type](this._options).data(this.type);

            if (this.timeout) clearTimeout(this.timeout);
            if (!self.options.delay || !self.options.delay.hide) return self.hide();

            self.hoverState = 'out';
            this.timeout = setTimeout(function () {
                if (self.hoverState == 'out') self.hide();
            }, self.options.delay.hide);
        },

        show: function () {
            var $tip
              , inside
              , pos
              , actualWidth
              , actualHeight
              , placement
              , tp;

            if (this.hasContent() && this.enabled) {
                $tip = this.tip();
                this.setContent();

                if (this.options.animation) {
                    $tip.addClass('fade');
                }

                placement = typeof this.options.placement == 'function' ?
                  this.options.placement.call(this, $tip[0], this.$element[0]) :
                    this.options.placement;

                inside = /in/.test(placement);

                $tip
                  .detach()
                  .css({ top: 0, left: 0, display: 'block' })
                  .insertAfter(this.$element);

                pos = this.getPosition(inside);

                actualWidth = $tip[0].offsetWidth;
                actualHeight = $tip[0].offsetHeight;

                switch (inside ? placement.split(' ')[1] : placement) {
                    case 'bottom':
                        tp = { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 }
                        break;
                    case 'top':
                        tp = { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 }
                        break;
                    case 'left':
                        tp = { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth }
                        break;
                    case 'right':
                        tp = { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }
                        break;
                }

                $tip
                  .offset(tp)
                  .addClass(placement)
                  .addClass('in');
            }
        },

        setContent: function () {
            var $tip = this.tip(), title = this.getTitle();

            $tip.find('.ggtooltip-inner').css({ 'background': this.options.backcolor, 'color': this.options.textcolor, 'border-color' : this.options.bordercolor  });
            $tip.find('.ggtooltip-arrow').css('border-' + this.options.placement + '-color', this.options.backcolor);
            $tip.find('.ggtooltip-arrow-shadow').css('border-' + this.options.placement + '-color', this.options.bordercolor);
            $tip.find('.ggtooltip-inner')[this.options.html ? 'html' : 'text'](title);
            $tip.removeClass('fade in top bottom left right');
        },

        hide: function () {
            var that = this
              , $tip = this.tip();

            $tip.removeClass('in');

            function removeWithAnimation() {
                var timeout = setTimeout(function () {
                    $tip.off($.support.transition.end).detach();
                }, 500);

                $tip.one($.support.transition.end, function () {
                    clearTimeout(timeout);
                    $tip.detach();
                });
            }

            $.support.transition && this.$tip.hasClass('fade') ?
              removeWithAnimation() :
              $tip.detach();

            return this;
        },

        fixTitle: function () {
            var $e = this.$element;
            if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
                $e.attr('data-original-title', $e.attr('title') || '').removeAttr('title');
            }
        },

        hasContent: function () {
            return this.getTitle();
        },

        getPosition: function (inside) {
            return $.extend({}, (inside ? { top: 0, left: 0 } : this.$element.offset()), {
                width: this.$element[0].offsetWidth
            , height: this.$element[0].offsetHeight
            });
        },

        getTitle: function () {
            var title
              , $e = this.$element
              , o = this.options;

            title = $e.attr('data-original-title')
              || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);

            return title;
        },

        tip: function () {
            return this.$tip = this.$tip || $(this.options.template);
        },

        validate: function () {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },

        enable: function () {
            this.enabled = true;
        },

        disable: function () {
            this.enabled = false;
        },

        toggleEnabled: function () {
            this.enabled = !this.enabled;
        },

        toggle: function (e) {
            var self = $(e.currentTarget)[this.type](this._options).data(this.type);
            self[self.tip().hasClass('in') ? 'hide' : 'show']();
        },

        destroy: function () {
            this.hide().$element.off('.' + this.type).removeData(this.type);
        }
    }

    var old = $.fn.ggtooltip;

    $.fn.ggtooltip = function (option) {
        return this.each(function () {
            var $this = $(this)
              , data = $this.data('ggtooltip')
              , options = typeof option == 'object' && option
            if (!data) $this.data('ggtooltip', (data = new ggTooltip(this, options)))
            if (typeof option == 'string') data[option]()
        });
    }

    $.fn.ggtooltip.Constructor = ggTooltip;

    $.fn.ggtooltip.defaults = {
        animation: true,
        placement: 'top',
        selector: false,
        template: '<div class="ggtooltip"><div class="ggtooltip-arrow-shadow"></div><div class="ggtooltip-arrow"></div><div class="ggtooltip-inner"></div></div>',
        trigger: 'hover',
        title: '',
        delay: 0,
        html: false,
        backcolor: '#00ffcc',
        textcolor: '#000000',
        bordercolor: '#0066cc'
    }


    $.fn.ggtooltip.noConflict = function () {
        $.fn.ggtooltip = old;
        return this;
    }

}(window.jQuery);
/**
 * FileUploader
 * Copyright (c) 2017 Innostudio.de
 * Website: http://innostudio.de/fileuploader/
 * Version: 1.3 (21-Sep-2017)
 * Requires: jQuery v1.7.1 or later
 * License: https://innostudio.de/fileuploader/documentation/#license
 */
(function($) {
    "use strict";
	
    $.fn.fileuploader = function(q) {
        return this.each(function(t, r) {
			var s = $(r), // input element
				p = null, // parent element
				o = null, // new input element
				l = null, // list element
				sl = [], // input elements !important for addMore option
				n = $.extend(true, {}, $.fn.fileuploader.defaults, q), // options
				f = {
					/**
					 * init
					 * initialize the plugin
					 *
					 * @void
					 */
					init: function() {
						// create and set the parent element
						if (!s.closest('.fileuploader').length)
							s.wrap('<div class="fileuploader"></div>');
						p = s.closest('.fileuploader');
						
						// add, merge and apply input attributes with the options
						// also define the defaults for some options
						f.set('attrOpts');
						
						// check if the plugin is supported in current browser
						if (!f.isSupported()) {
							n.onSupportError && $.isFunction(n.onSupportError) ? n.onSupportError(p, s) : null;
							return false;
						}
						
						// before render callback
						if (n.beforeRender && $.isFunction(n.beforeRender) && n.beforeRender(p, s) === false) {
							return false;
						}
						
						// redesign the new input
						f.redesign();
						
						// append files from options
                        if (n.files)
						  f.files.append(n.files);
						
						// after render callback
						f.rendered = true;
						n.afterRender && $.isFunction(n.afterRender) ? n.afterRender(l, p, o, s) : null;
						
						// bind events
						if (!f.disabled)
							f.bindUnbindEvents(true);
					},
					
					/**
					 * bindUnbindEvents
					 * bind or unbind events for input and new elements
					 *
					 * @param {bool} bind - bind the events?
					 * @void
					 */
					bindUnbindEvents: function(bind) {
						// unbind events
						if (bind)
							f.bindUnbindEvents(false);
						
						// bind all input events
						s[bind ? 'on' : 'off'](f._assets.getAllEvents(), f.onEvent);
						
						// bind click event for the new input
						if (n.changeInput && o!==s)
							o[bind ? 'on' : 'off']('click', f.clickHandler);
						
						// bind drag&drop events
                        if (f.isUploadMode() && n.dragDrop && n.dragDrop.container.length) {
                            n.dragDrop.container[bind ? 'on' : 'off']('drag dragstart dragend dragover dragenter dragleave drop', function(e) { e.preventDefault(); });
                            n.dragDrop.container[bind ? 'on' : 'off']('drop', f.dragDrop.onDrop);
                            n.dragDrop.container[bind ? 'on' : 'off']('dragover', f.dragDrop.onDragEnter);
                            n.dragDrop.container[bind ? 'on' : 'off']('dragleave', f.dragDrop.onDragLeave);
                        }
						
						// bind the paste from clipboard event
                        if (f.isUploadMode() && n.clipboardPaste)
                            $(window)[bind ? 'on' : 'off']('paste', f.clipboard.paste);
						
						// bind sorter events
						if (n.sorter && n.thumbnails && n.thumbnails._selectors.sorter)
							f.sorter[bind ? 'init': 'destroy']();
						
						// bind the form reset
						s.closest('form')[bind ? 'on' : 'off']('reset', f.reset);
					},
					
					/**
					 * redesign
					 * create the new input and hide the standard one
					 *
					 * @void
					 */
					redesign: function() {
						// set as default
						o = s;
						
						// add a class name with theme
						if (n.theme)
							p.addClass('fileuploader-theme-' + n.theme);
						
						// set new input html
						if (n.changeInput) {
							switch ((typeof n.changeInput + "").toLowerCase()) {
								case 'boolean':
									o = $('<div class="fileuploader-input">' +
										  	'<div class="fileuploader-input-caption"><span>' + f._assets.textParse(n.captions.feedback) + '</span></div>' + 
										  	'<div class="fileuploader-input-button"><span>' + f._assets.textParse(n.captions.button) + '</span></div>' + 
										  '</div>');
									break;
								case 'string':
									if (n.changeInput != ' ')
                                    	o = $(f._assets.textParse(n.changeInput, n));
									break;
								case 'object':
									o = $(n.changeInput);
									break;
								case 'function':
									o = $(n.changeInput(s, p, n, f._assets.textParse));
									break;
							}
							
                            // add the new input after standard input
							s.after(o);
                            
                            // hide the standard input
							s.css({
								position: "absolute",
								"z-index": "-9999",
								height: '0',
								width: '0',
								padding: '0',
								margin: '0',
								"line-height": '0',
								outline: '0',
								border: '0',
								opacity: '0'
							});
						}
						
						
						// create thumbnails list
						if (n.thumbnails)
							f.thumbnails.create();
						
						// set drag&drop container
						if (n.dragDrop) {
							n.dragDrop = typeof(n.dragDrop) != 'object' ? {container: null} : n.dragDrop;
							n.dragDrop.container = n.dragDrop.container ? $(n.dragDrop.container) : o;
						}
					},
					
					/**
					 * clickHandler
					 * click event for new input
					 *
                     * @param {Event} e - jQuery event
					 * @void
					 */
					clickHandler: function(e) {
						e.preventDefault();
                        
                        // clear clipboard pending
                        if (f.clipboard._timer) {
                            f.clipboard.clean();
                            return;
                        }
						
						// trigger input click
						s.click();
					},
					
					/**
					 * onEvent
					 * callbacks for each input event
					 *
                     * @param {Event} e - jQuery event
					 * @void
					 */
					onEvent: function(e) {
						switch(e.type) {
							case 'focus':
								p ? p.addClass('fileuploader-focused') : null;
								break;
							case 'blur':
								p ? p.removeClass('fileuploader-focused') : null;
								break;
							case 'change':
								f.onChange.call(this);
								break;
						}
						
						// listeners callback
						n.listeners && $.isFunction(n.listeners[e.type]) ? n.listeners[e.type].call(s, p) : null;
					},
					
					
					/**
					 * set
					 * set properties
					 *
                     * @param {String} type - property type
                     * @param {null|String} value - property value
					 * @void
					 */
					set: function(type, value) {
						switch(type) {
							case 'attrOpts':
								var d = ['limit', 'maxSize', 'fileMaxSize', 'extensions', 'changeInput', 'theme', 'addMore', 'listInput', 'files'];
								for (var k = 0; k < d.length; k++) {
									var j = 'data-fileuploader-' + d[k];
									if (f._assets.hasAttr(j)) {
										switch (d[k]) {
											case 'changeInput':
											case 'addMore':
											case 'listInput':
												n[d[k]] = (['true', 'false'].indexOf(s.attr(j)) > -1 ? s.attr(j) == 'true' : s.attr(j));
												break;
											case 'extensions':
												n[d[k]] = s.attr(j)
													.replace(/ /g, '')
													.split(',');
												break;
											case 'files':
												n[d[k]] = JSON.parse(s.attr(j));
												break;
											default:
												n[d[k]] = s.attr(j);
										}
									}
									s.removeAttr(j);
								}
								
								// set the plugin on disabled if the input has disabled attribute or limit is 0
								if (s.attr('disabled') != null || s.attr('readonly') != null || n.limit === 0)
									f.disabled = true;
								
								// set multiple attribute to the input
								if (!n.limit || (n.limit && n.limit >= 2)) {
									s.attr('multiple', 'multiple');
                                    // set brackets at the end of input name
									n.inputNameBrackets && s.attr('name').slice(-2) != '[]' ? s.attr('name', s.attr('name') + '[]') : null;
								}
								
								// set list input element
								if (n.listInput === true) {
									n.listInput = $('<input type="hidden" name="fileuploader-list-' + s.attr('name').replace('[]', '').split('[').pop().replace(']', '') + '">').insertBefore(s);
								}
								if (typeof n.listInput == "string" && $(n.listInput).length == 0) {
									n.listInput = $('<input type="hidden" name="' + n.listInput + '">').insertBefore(s);
								}
								
								// apply some defined options to plugin
								f.set('disabled', f.disabled);
								if (!n.fileMaxSize && n.maxSize)
									n.fileMaxSize = n.maxSize;
								break;
							// set and apply disable option to plugin
							case 'disabled':
								f.disabled = value;
								p[f.disabled ? 'addClass' : 'removeClass']('fileuploader-disabled');
								s[f.disabled ? 'attr' : 'removeAttr']('disabled', 'disabled');
								
								if (f.rendered)
									f.bindUnbindEvents(!value);
								break;
							// set new input feedback html
							case 'feedback':
                                if (!value)
                                    value = f._assets.textParse(f._itFl.length > 0 ? n.captions.feedback2 : n.captions.feedback, {length: f._itFl.length});
                                
                                $(!o.is(':file')) ? o.find('.fileuploader-input-caption span').html(value) : null;
                                break;
							// set file input value to empty
							case 'input':
                                var el = f._assets.copyAllAttributes($('<input type="file">'), s, true);
                                
                                f.bindUnbindEvents(false);
								s.after(s = el).remove();
                                f.bindUnbindEvents(true);
								break;
							// set previous input; only for addMore option
							case 'prevInput':
								if (sl.length > 0) {
									f.bindUnbindEvents(false);
									sl[value].remove();
									sl.splice(value, 1);
									s = sl[sl.length - 1];
									f.bindUnbindEvents(true);
								}
								break;
							// set next input; only for addMore option
							case 'nextInput':
								var el = f._assets.copyAllAttributes($('<input type="file">'), s);
                                
								f.bindUnbindEvents(false);
								if (sl.length > 0 && sl[sl.length - 1].get(0).files.length == 0) {
									s = sl[sl.length - 1];
								} else {
									sl.indexOf(s) == -1 ? sl.push(s) : null;
									sl.push(el);
									s.after(s = el);
								}
								f.bindUnbindEvents(true);
								break;
							// set list input with list of the files
							case 'listInput':
								if (n.listInput)
                                    n.listInput.val(f.files.list(true, null, false, value));
								break;
						}
					},
					
					/**
					 * onChange
					 * on input change event
					 *
                     * @param {Event} e - jQuery event
                     * @param {Array} fileList - FileList array, used only by drag&drop and clipboard paste
					 * @void
					 */
					onChange: function(e, fileList) {
						var files = s.get(0).files;
						
						// drag&drop or clipboard paste
						if (fileList) {
							if (fileList.length) {
                                files = fileList;
                            } else {
                                f.set('input', '');
                                f.files.clear();
                                return false;
							}
							
						}
                        
                        // clean clipboard timer
                        // made only for safety
                        if (f.clipboard._timer)
                            f.clipboard.clean();
						
						// reset the input if default mode
						if (f.isDefaultMode()) {
							f.reset();
							
							if (files.length == 0)
								return;
						}
						
						// beforeSelect callback
						if (n.beforeSelect && $.isFunction(n.beforeSelect) && n.beforeSelect(files, l, p, o, s) == false) {
                            return false;
                        }
						
						// files
                        var t = 0; // total processed files
						for (var i = 0; i < files.length; i++ ) {
							var file = files[i], // file
								item = f._itFl[f.files.add(file, 'choosed')], // item
								status = f.files.check(item, files, i == 0); // ["type", "message", "do not show the warning message", "do not check the next files"]
                            
                            // process the warnings
							if (status !== true) {
								f.files.remove(item, true);
								
								if (!status[2]) {
									if (f.isDefaultMode()) {
										f.set('input', '');
										f.reset();
										status[3] = true;
									}
                                    
									status[1] ? n.dialogs.alert(status[1], item, l, p, o, s) : null;
								}
								
								if (status[3]) {
									break;
								}
								
								continue;
							}
							
							// file is valid
							// create item html
							if (n.thumbnails)
								f.thumbnails.item(item);
								
							// create item ajax request
							if (f.isUploadMode())
								f.upload.prepare(item);
							
							// onSelect callback
							n.onSelect && $.isFunction(n.onSelect) ? n.onSelect(item, l, p, o, s) : null;
							
                            t++;
						}
						
                        // clear the input in uploadMode
                        if (f.isUploadMode() && t > 0)
                            f.set('input', '');
						
						// set feedback caption
						f.set('feedback', null);
						
						// set nextInput for addMore option
						if (f.isAddMoreMode() && t > 0) {
							f.set('nextInput');
						}
						
                        // set listInput value
						f.set('listInput', null);
                        
						// afterSelect callback
						n.afterSelect && $.isFunction(n.afterSelect) ? n.afterSelect(l, p, o, s) : null;
					},
                    
					/**
                     * @namespace thumbnails
                     */
					thumbnails: {
                        /**
                         * create
                         * create the thumbnails list
                         *
						 * @namespace thumbnails
                         * @void
                         */
						create: function() {
							// thumbnails.beforeShow callback
							n.thumbnails.beforeShow != null && $.isFunction(n.thumbnails.beforeShow) ? n.thumbnails.beforeShow(p, o, s) : null;
                            
							// create item's list element
							var box = $(f._assets.textParse(n.thumbnails.box)).appendTo(n.thumbnails.boxAppendTo ? n.thumbnails.boxAppendTo : p);
							l = !box.is(n.thumbnails._selectors.list) ? box.find(n.thumbnails._selectors.list) : box;
							
                            // bind item popup method to the selector
                            if (n.thumbnails._selectors.popup_open) {
                                l.on('click', n.thumbnails._selectors.popup_open, function(e) {
                                    e.preventDefault();
                                    
                                    var m = $(this).closest(n.thumbnails._selectors.item),
                                        item = f.files.find(m);
                                    
                                    if (item && item.html.hasClass('file-has-popup'))
                                        f.thumbnails.popup(item);
                                });
                            }
							// bind item upload start method to the selector
                            if (f.isUploadMode() && n.thumbnails._selectors.start) {
                                l.on('click', n.thumbnails._selectors.start, function(e) {
									e.preventDefault();
                                    
                                    if (f.locked)
                                        return false;

									var m = $(this).closest(n.thumbnails._selectors.item),
                                        item = f.files.find(m);
                                    
                                    if (item)
                                        f.upload.send(item, true);
								});
                            }
							// bind item upload retry method to the selector
                            if (f.isUploadMode() && n.thumbnails._selectors.retry) {
                                l.on('click', n.thumbnails._selectors.retry, function(e) {
									e.preventDefault();
                                    
                                    if (f.locked)
                                        return false;

									var m = $(this).closest(n.thumbnails._selectors.item),
                                        item = f.files.find(m);
                                    
                                    if (item)
                                        f.upload.retry(item);
								});
                            }
                            // bind item remove / upload.cancel method to the selector
							if (n.thumbnails._selectors.remove) {
								l.on('click', n.thumbnails._selectors.remove, function(e) {
									e.preventDefault();
                                    
                                    if (f.locked)
                                        return false;

									var m = $(this).closest(n.thumbnails._selectors.item),
                                        item = f.files.find(m),
										c = function(a) {
											f.files.remove(item);
										};
                                    
                                    if (item) {
                                        if (item.upload && item.upload.status != 'successful') {
                                            f.upload.cancel(item);
                                        } else {
                                            if (n.thumbnails.removeConfirmation) {
                                                n.dialogs.confirm(f._assets.textParse(n.captions.removeConfirmation, item), c);
                                            } else {
                                                c();
                                            }
                                        }
                                    }
								});
							}
						},
                        /**
                         * clear
                         * set the HTML content from items list to empty
                         *
						 * @namespace thumbnails
                         * @void
                         */
						clear: function() {
							if (l)
								l.html('');
						},
                        /**
                         * item
                         * create the item.html and append it to the list
                         *
						 * @namespace thumbnails
                         * @param {Object} item
                         * @void
                         */
						item: function(item) {
							item.icon = f.thumbnails.generateFileIcon(item.format, item.extension);
							item.image = '<div class="fileuploader-item-image fileuploader-loading"></div>';
							item.progressBar = f.isUploadMode() ? '<div class="fileuploader-progressbar"><div class="bar"></div></div>' : '';
							item.html = $(f._assets.textParse(item.appended && n.thumbnails.item2 ? n.thumbnails.item2 : n.thumbnails.item, item));
							item.progressBar = item.html.find('.fileuploader-progressbar');
                            
                            // add class with file extension and file format to item html
                            item.html.addClass('file-type-' + (item.format ? item.format : 'no') + ' file-ext-' + (item.extension ? item.extension : 'no') + '');
                            
							// add item html to list element
							item.html[n.thumbnails.itemPrepend ? 'prependTo' : 'appendTo'](l);
							
							// render the image thumbnail
                            f.thumbnails.renderThumbnail(item);
							item.renderThumbnail = function(src) { f.thumbnails.renderThumbnail(item, true, src); };
                            item.popup = { open: function() { f.thumbnails.popup(item); } };
							
							// thumbnails.onItemShow callback
							n.thumbnails.onItemShow != null && $.isFunction(n.thumbnails.onItemShow) ? n.thumbnails.onItemShow(item, l, p, o, s) : null;
						},
						/**
                         * generateFileIcon
                         * generate a file icon with custom background color
                         *
						 * @namespace thumbnails
                         * @param {String} form - file format
						 * @param {String} extension - file extension
                         * @return {String} html element
                         */
						generateFileIcon: function(format, extension) {
                            var el = '<div style="${style}" class="fileuploader-item-icon' + '${class}"><i>' + (extension ? extension : '') + '</i></div>';
							
							// set generated color to icon background
                            var bgColor = f._assets.textToColor(extension);
							if (bgColor) {
								var isBgColorBright = f._assets.isBrightColor(bgColor);
								if (isBgColorBright)
									el = el.replace('${class}', ' is-bright-color');
								el = el.replace('${style}', 'background-color: ' + bgColor);
							}
							
                            return el.replace('${style}', '').replace('${class}', '');
						},
						/**
                         * renderThumbnail
                         * render image thumbnail and append to .fileuploader-item-image element
						 * it appends the generated icon if the file is not an image or not a valid image
                         *
						 * @namespace thumbnails
                         * @param {Object} item
						 * @param {bool} forceRender - skip the synchron functions and force the rendering
						 * @param {string} src - custom image source
                         * @void
                         */
						renderThumbnail: function(item, forceRender, src) {
							var m = item.html.find('.fileuploader-item-image'),
								readerSkip = item.data && item.data.readerSkip,
								setImageThumb = function(img) {
									var $img = $(img);
									
									// add $img to html
									m.removeClass('fileuploader-no-thumbnail fileuploader-loading').html($img);
									
									// add onImageLoaded callback
                                    if ($img.is('img'))
                                        $img.attr('draggable', 'false').on('load error', function(e) {
                                            if (e.type == 'error')
                                                setIconThumb(true);
                                            renderNextItem();
                                            n.thumbnails.onImageLoaded != null && $.isFunction(n.thumbnails.onImageLoaded) ? n.thumbnails.onImageLoaded(item, l, p, o, s) : null;
                                        });
									
									if ($img.is('canvas'))
										n.thumbnails.onImageLoaded != null && $.isFunction(n.thumbnails.onImageLoaded) ? n.thumbnails.onImageLoaded(item, l, p, o, s) : null;
								},
								setIconThumb = function(onImageError) {
									m.addClass('fileuploader-no-thumbnail');
									m.removeClass('fileuploader-loading').html(item.icon);
								
									if (onImageError)
										n.thumbnails.onImageLoaded != null && $.isFunction(n.thumbnails.onImageLoaded) ? n.thumbnails.onImageLoaded(item, l, p, o, s) : null;
								},
								renderNextItem = function() {
									var i = 0;
									
									if (item && f._pfrL.indexOf(item) > -1) {
										f._pfrL.splice(f._pfrL.indexOf(item), 1);
										while (i < f._pfrL.length) {
											if (f._itFl.indexOf(f._pfrL[i]) > -1) {
												f.thumbnails.renderThumbnail(f._pfrL[i], true);
												break;
											} else {
												f._pfrL.splice(i, 1);
											}
                                            i++;
										}
									}
								};
							
							// skip this function if there is no place for image
							if (!m.length) {
								renderNextItem();
								return;
							}
							
							// set item.image to jQuery element
							item.image = m;
							
							// create an image thumbnail only if file is an image and if FileReader is supported
							if (['image', 'video', 'audio', 'astext'].indexOf(item.format) > -1 && f.isFileReaderSupported() && !readerSkip && (item.appended || n.thumbnails.startImageRenderer || forceRender)) {
								// check pending list
								if (n.thumbnails.synchronImages) {
									f._pfrL.indexOf(item) == -1 && !forceRender ? f._pfrL.push(item) : null;
									if (f._pfrL.length > 1 && !forceRender) {
										return;
									}
								}
								
								// create thumbnail
                                var load = function(data, fromReader) {
									var srcIsImg = data.nodeName && data.nodeName.toLocaleLowerCase() == 'img',
										src = !srcIsImg ? data : data.src;
									
                                    if (n.thumbnails.canvasImage) {
                                        var canvas = document.createElement('canvas'),
											img = srcIsImg ? data : new Image(),
                                            onload = function() {
												// resize canvas
                                                f.editor.resize(img, canvas, n.thumbnails.canvasImage.width ? n.thumbnails.canvasImage.width : m.width(), n.thumbnails.canvasImage.height ? n.thumbnails.canvasImage.height : m.height(), false, true);

                                                // check if canvas is not blank
                                                if (!f._assets.isBlankCanvas(canvas)) {
                                                    setImageThumb(canvas);
                                                } else {
                                                    setIconThumb();
                                                }

                                                // render the next pending item
                                                renderNextItem();
                                            },
                                            onerror = function(text) {
                                                setIconThumb(true);
                                                renderNextItem();
                                                img = null;
                                            };
                                        
                                        // do not create another image element
                                        if (item.format == 'image' && fromReader && item.reader.node) {
                                            img = item.reader.node;
                                            return onload();
                                        }
                                        
                                        // do not create an empty image element
                                        if(!src)
                                            return onerror();
										
										if (srcIsImg)
											return onload.call(data);
                                        
                                        // create image element
                                        img.onload = onload;
                                        img.onerror = onerror;
										if (item.data && item.data.readerCrossOrigin)
											img.setAttribute('crossOrigin', item.data.readerCrossOrigin);
                                        img.src = src;
                                    } else {
                                        setImageThumb(srcIsImg ? data : '<img src="'+ src +'">');
                                    }
                                };
                                
                                // choose thumbnail source
                                if (src)
                                    return load(src);
                                else
                                    return f.files.read(item, function() {
										var fileIsPictureMedia = item.format == 'image' || item.format == 'video';
										
                                        if (item.reader.node && n.thumbnails.popup)
                                            item.html.addClass('file-has-popup');
                                        
                                        if (item.reader.node && fileIsPictureMedia) {
                                            load(item.reader.frame || item.reader.src, true);
                                        } else {
                                            setIconThumb(fileIsPictureMedia);
                                            renderNextItem();
                                        }
                                    });
							}
							
							setIconThumb();
						},
                        /**
                         * popup
                         * create and show a popup for an item
                         * appends the popup to parent element
						 * reset values for the editor
                         *
						 * @namespace thumbnails
                         * @param {Object} item
                         * @void
                         */
                        popup: function(item) {
                            if (!n.thumbnails.popup || !n.thumbnails._selectors.popup)
                                return;
                            
                            // remove all created popups
                            if (p.find(n.thumbnails._selectors.popup).length) {
                                $.each(f._itFl, function(i, a) {
                                    if (a.popup && a.popup.close) {
                                        a.popup.close();
                                    }
                                });
                            }
                            
                            var template = item.popup.html || $(f._assets.textParse(n.thumbnails.popup.template, item)),
								popupIsNew = item.popup.html !== template,
								windowResizeEvent = function() {
									var $parent = item.popup.html.find('.fileuploader-popup-preview'),
										$node = $parent.find('.node'),
										$tools = $parent.find('.tools'),
										$childEl = $node.find('> *'),
										height = $parent.height() - $tools.outerHeight(true);

									// get child height
									$node.css({height: '100%'});
									if ($childEl && height > $childEl.outerHeight())
										height = $childEl.outerHeight();

									$node.css({
										height: height
									});
								},
                                windowKeyEvent = function(e) {
                                    var key = e.which || e.keyCode;
                                    
                                    if (key == 27 && item.popup && item.popup.close)
                                        item.popup.close();
                                };
                            
                            template.show().appendTo(p);
                            item.popup.html = template;
                            item.popup.close = function() {
                                if (item.reader.node) {
                                    item.reader.node.pause ? item.reader.node.pause() : null;
                                }
								
                                $(window).off('keyup', windowKeyEvent);
                                $(window).off('resize', windowResizeEvent);
								
								// hide the cropper
								if (item.popup.editor && item.popup.editor.cropper)
									item.popup.editor.cropper.hide();
                                
                                // thumbnails.popup.onHide callback
                                item.popup.html && n.thumbnails.popup.onHide && $.isFunction(n.thumbnails.popup.onHide) ? n.thumbnails.popup.onHide(item, l, p, o, s) : (item.popup.html ? item.popup.html.remove() : null);
                                
                                delete item.popup.close;
                            };
                            
                            // append item.reader.node to popup
                            // play video/audio
                            if (item.reader.node) {
								if (popupIsNew)
                                	template.find('.fileuploader-popup-preview .node').html(item.reader.node);
                                item.reader.node.controls = true;
                                item.reader.node.currentTime = 0;
                                item.reader.node.play ? item.reader.node.play() : null;
                            }
                            
                            // bind Window functions
                            $(window).on('keyup', windowKeyEvent);
                            $(window).on('resize', windowResizeEvent);
							windowResizeEvent.call();
							
							// IE dirty fix
							setTimeout(function() {
								windowResizeEvent.call();
							}, 10);
							
							// popup editor
							if (item.editor && item.popup.editor && item.popup.editor.hasChanges) {
								// set saved rotation
								if (item.popup.editor && item.popup.editor.rotation)
									f.editor.rotate(item, item.editor.rotation || 0, true);
								
								// set saved crop
								if (item.popup.editor && item.popup.editor.cropper) {
									item.popup.editor.cropper.hide(true);
									setTimeout(function() {
										f.editor.crop(item, item.editor.crop ? $.extend({}, item.editor.crop) : item.popup.editor.cropper.setDefaultData());
									}, 100);
								}
							} else {
								item.popup.editor = {};
							}
                            
                            // thumbnails.popup.onShow callback
                            n.thumbnails.popup.onShow && $.isFunction(n.thumbnails.popup.onShow) ? n.thumbnails.popup.onShow(item, l, p, o, s) : null;
                        }
					},
					
					/**
                     * @namespace editor
                     */
					editor: {
						/**
                         * rotate
                         * rotate image action
						 * animate rotation in popup, only when popup is enabled
                         *
						 * @namespace editor
                         * @param {Object} item
                         * @param {Number} degrees - rotation degrees
                         * @param {Boolean} force - force rotation without animation to degrees
                         * @void
                         */
						rotate: function(item, degrees, force) {
							var inPopup = item.popup && typeof item.popup.html !== "undefined";
							
							if (!inPopup) {
								var rotation = item.editor.rotation || 0;
								
								return item.editor.rotation = degrees ? degrees : rotation + 90;
							} else {
								
								// prevent animation issues
								if (item.popup.editor.isAnimating)
									return;
								item.popup.editor.isAnimating = true;
								
								var $popup = item.popup.html,
									$node = $popup.find('.node'),
									$imageEl = $node.find('> img'),
									rotation = item.popup.editor.rotation || 0,
									scale = item.popup.editor.scale || 1,
									animationObj = {
										rotation: rotation,
										scale: scale
									};
								
								// hide cropper
								if (item.popup.editor.cropper)
									item.popup.editor.cropper.$template.hide();
								
								// change values
								item.popup.editor.rotation = force ? degrees : rotation + 90;
								item.popup.editor.scale = ($node.height() / $imageEl[[90,270].indexOf(item.popup.editor.rotation) > -1 ? 'width' : 'height']()).toFixed(3);
								if ($imageEl.height() * item.popup.editor.scale > $node.width() && [90,270].indexOf(item.popup.editor.rotation) > -1)
									item.popup.editor.scale = $node.width() / $imageEl.height();
								if (item.popup.editor.scale > 1)
									item.popup.editor.scale = 1;
								
								// animate
								$(animationObj).animate({
									rotation: item.popup.editor.rotation,
									scale: item.popup.editor.scale
								}, {
									duration: force ? 1 : 300,
									easing: 'swing',
									step: function(now, fx) {
										var matrix = $imageEl.css('-webkit-transform') || $imageEl.css('-moz-transform') || $imageEl.css('transform') || 'none',
											rotation = 0,
											scale = 1,
											prop = fx.prop;
										
										// get css matrix
										if (matrix !== 'none') {
											var values = matrix.split('(')[1].split(')')[0].split(','),
												a = values[0],
												b = values[1];

											rotation = prop == 'rotation' ? now : Math.round(Math.atan2(b, a) * (180/Math.PI));
											scale = prop == 'scale' ? now : Math.round(Math.sqrt(a*a + b*b) * 10) / 10;
										}
										
										// set $imageEl css
										$imageEl.css({
											'-webkit-transform': 'rotate('+ rotation +'deg) scale('+ scale +')',
											'-moz-transform': 'rotate('+ rotation +'deg) scale('+ scale +')',
											'transform': 'rotate('+ rotation +'deg) scale('+ scale +')'
										});
									},
									always: function() {
										delete item.popup.editor.isAnimating;
										
										// re-draw the cropper if exists
										if (item.popup.editor.cropper && !force) {
											item.popup.editor.cropper.setDefaultData();
											item.popup.editor.cropper.init('rotation');
										}
									}
								});
								
								// check if rotation no greater than 360 degrees
								if (item.popup.editor.rotation >= 360)
									item.popup.editor.rotation = 0;
								
								// register as change
								if (item.popup.editor.rotation != item.editor.rotation)
									item.popup.editor.hasChanges = true;
							}
						},
						
						/**
                         * crop
                         * crop image action
						 * show cropping tools, only when popup is enabled
                         *
						 * @namespace editor
                         * @param {Object} item
                         * @param {Object} data - cropping data
                         * @void
                         */
						crop: function(item, data) {
							var inPopup = item.popup && typeof item.popup.html !== "undefined";
							
							if (!inPopup) {
								return item.editor.crop = data || item.editor.crop;
							} else {
								if (!item.popup.editor.cropper) {
									var template = '<div class="fileuploader-cropper">' +
											'<div class="fileuploader-cropper-area">' +
												'<div class="point point-a"></div>' +
												'<div class="point point-b"></div>' +
												'<div class="point point-c"></div>' +
												'<div class="point point-d"></div>' +
												'<div class="point point-e"></div>' +
												'<div class="point point-f"></div>' +
												'<div class="point point-g"></div>' +
												'<div class="point point-h"></div>' +
												'<div class="area-move"></div>' +
												'<div class="area-image"></div>' +
											'</div>' +
										'</div>',
										$popup = item.popup.html,
										$imageEl = $popup.find('.node > img'),
										$template = $(template),
										$editor = $template.find('.fileuploader-cropper-area');
									
									// define popup cropper tool
									item.popup.editor.cropper = {
										$imageEl: $imageEl,
										$template: $template,
										$editor: $editor,
										isCropping: false,
										crop: data || null,
										init: function(data) {
											var cropper = item.popup.editor.cropper,
												position = cropper.$imageEl.position(),
												width = cropper.$imageEl[0].getBoundingClientRect().width,
												height = cropper.$imageEl[0].getBoundingClientRect().height,
												isInverted = item.popup.editor.rotation && [90,270].indexOf(item.popup.editor.rotation) > -1,
												scale = isInverted ? item.popup.editor.scale : 1;
											
											// unbind all events
											cropper.hide();
											
											// set default data
											if (!cropper.crop)
												cropper.setDefaultData();
											
											// hide if image not visible
											if (width == 0 || height == 0)
												return cropper.hide(true);

											// prevent duplicates
											if (!cropper.isCropping) {
												cropper.$imageEl.clone().appendTo(cropper.$template.find('.area-image'));
												cropper.$imageEl.parent().append($template);
											}

											// animate cropping tool
											cropper.$template.hide().css({
												left: position.left,
												top: position.top,
												width: width,
												height: height
											}).fadeIn(150);
											cropper.$editor.hide();
											clearTimeout(cropper._editorAnimationTimeout);
											cropper._editorAnimationTimeout = setTimeout(function() {
												delete cropper._editorAnimationTimeout;
												
												cropper.$editor.fadeIn(250);
												
												// update data with cf and scale
												if (item.editor.crop && $.isPlainObject(data)) {
													cropper.resize();
													cropper.crop.left = cropper.crop.left * cropper.crop.cfWidth * scale;
													cropper.crop.width = cropper.crop.width * cropper.crop.cfWidth * scale;
													cropper.crop.top = cropper.crop.top * cropper.crop.cfHeight * scale;
													cropper.crop.height = cropper.crop.height * cropper.crop.cfHeight * scale;
												}
												
												// ratio on open
												if ((!item.editor.crop || data == 'rotation') && (n.editor.cropper && n.editor.cropper.ratio && data != 'resize')) {
													var ratio = n.editor.cropper.ratio,
														ratioPx = f._assets.ratioToPx(cropper.crop.width, cropper.crop.height, ratio);

													if (ratioPx) {
														cropper.crop.width = Math.min(cropper.crop.width, ratioPx[0]);
														cropper.crop.left = (cropper.$template.width() - cropper.crop.width) / 2;
														cropper.crop.height = Math.min(cropper.crop.height, ratioPx[1]);
														cropper.crop.top = (cropper.$template.height() - cropper.crop.height) / 2;
													}
												}
												
												// draw editor
												cropper.drawPlaceHolder(cropper.crop);
											}, 400);

											// start and bind events
											if (!cropper.isCropping)
												cropper.$template.on('drop dragend dragleave dragover dragenter dragstart touchstart touchmove touchend touchcancel', function(e) { e.preventDefault(); });
											if (n.editor.cropper && n.editor.cropper.showGrid)
												cropper.$editor.addClass('has-grid');
											cropper.$imageEl.attr('draggable', 'false');
											cropper.$template.on('mousedown touchstart', cropper.mousedown);
											$(window).on('resize', cropper.resize);

											// register as changed
											cropper.isCropping = true;
											item.popup.editor.hasChanges = true;
										},
										setDefaultData: function() {
											var cropper = item.popup.editor.cropper,
												$imageEl = cropper.$imageEl,
												width = $imageEl.width(),
												height = $imageEl.height(),
												isInverted = item.popup.editor.rotation && [90,270].indexOf(item.popup.editor.rotation) > -1,
												scale = item.popup.editor.scale || 1;
											
											// set default data
											cropper.crop = {
												left: 0,
												top: 0,
												width: isInverted ? height * scale : width,
												height: isInverted ? width * scale : height,
												cfWidth: width / cropper.$imageEl.prop('naturalWidth'),
												cfHeight: height / cropper.$imageEl.prop('naturalHeight')
											};
											
											return null;
										},
										hide: function(force) {
											var cropper = item.popup.editor.cropper;
											
											// hide editor on force
											if (force) {
												cropper.$template.hide();
												cropper.$editor.hide();
											}
											
											// stop and unbind events
											cropper.$imageEl.attr('draggable', '');
											cropper.$template.off('mousedown touchstart', cropper.mousedown);
											$(window).off('resize', cropper.resize);
										},
										resize: function(e) {
											var cropper = item.popup.editor.cropper,
												$imageEl = cropper.$imageEl;
											
											// only when image is visible
											if ($imageEl.width() > 0) {
												if (!e) {
													// re-write cf
													cropper.crop.cfWidth = $imageEl.width() / $imageEl.prop('naturalWidth');
													cropper.crop.cfHeight = $imageEl.height() / $imageEl.prop('naturalHeight');
												} else {
													// resize $editor
													cropper.$template.hide();
													clearTimeout(cropper._resizeTimeout);
													cropper._resizeTimeout = setTimeout(function() {
														delete cropper._resizeTimeout;
														var cfWidth = $imageEl.width() / $imageEl.prop('naturalWidth'),
															cfHeight = $imageEl.height() / $imageEl.prop('naturalHeight');
														
														cropper.crop.left = cropper.crop.left / cropper.crop.cfWidth * cfWidth;
														cropper.crop.width = cropper.crop.width / cropper.crop.cfWidth * cfWidth;
														cropper.crop.top = cropper.crop.top / cropper.crop.cfHeight * cfHeight;
														cropper.crop.height = cropper.crop.height / cropper.crop.cfHeight * cfHeight;
														cropper.crop.cfWidth = cfWidth;
														cropper.crop.cfHeight = cfHeight;
														
														cropper.init('resize');
													}, 400);
												}
											}
										},
										drawPlaceHolder: function(css) {
											var cropper = item.popup.editor.cropper,
												rotation = item.popup.editor.rotation || 0,
												scale = item.popup.editor.scale || 1,
												translate = [0, 0];

											if (!css)
												return;
											
											// create new object
											css = $.extend({}, css);
											
											// edit width, height and translate values by rotation
											if (rotation)
												translate = [rotation == 180 || rotation == 270 ? -100 : 0, rotation == 90 || rotation == 180 ? -100 : 0];
											
											// draw cropping-area
											cropper.$editor.css(css);
											cropper.$editor.find('.area-image img').removeAttr('style').css({
												width: cropper.$imageEl.width(),
												height: cropper.$imageEl.height(),
												left: cropper.$editor.position().left * -1,
												top: cropper.$editor.position().top * -1,
												
												'-webkit-transform': 'rotate('+ rotation +'deg) scale('+ scale +') translateX('+ translate[0] +'%) translateY('+ translate[1] +'%)',
												'-moz-transform': 'rotate('+ rotation +'deg) scale('+ scale +') translateX('+ translate[0] +'%) translateY('+ translate[1] +'%)',
												'transform': 'rotate('+ rotation +'deg) scale('+ scale +') translateX('+ translate[0] +'%) translateY('+ translate[1] +'%)'
											});
										},
										mousedown: function(e) {
											var eventType = e.originalEvent.touches && e.originalEvent.touches[0] ? 'touchstart' : 'mousedown',
												$target = $(e.target),
												cropper = item.popup.editor.cropper,
												points = {
													x: (eventType == 'mousedown' ? e.pageX : e.originalEvent.touches[0].pageX) - cropper.$template.offset().left,
													y: (eventType == 'mousedown' ? e.pageY : e.originalEvent.touches[0].pageY) - cropper.$template.offset().top
												},
												callback = function() {
													// set current state
													cropper.pointData = {
														el: $target,
														x: points.x,
														y: points.y,
														xEditor: points.x - cropper.crop.left,
														yEditor: points.y - cropper.crop.top,
														left: cropper.crop.left,
														top: cropper.crop.top,
														width: cropper.crop.width,
														height: cropper.crop.height
													};

													// determinate cropping type
													if ($target.is('.area-move'))
														cropper.isMoving = true;
													if ($target.is('.point'))
														cropper.isResizing = true;

													// start cropping event
													if (cropper.isMoving || cropper.isResizing) {
														cropper.$editor.addClass('moving');
														$('body').css({
															'-webkit-user-select': 'none',
															'-moz-user-select': 'none',
															'-ms-user-select': 'none',
															'user-select': 'none'
														});

														// bind window mousemove event
														$(window).on('mousemove touchmove', cropper.mousemove);
													}
												};

											// mousedown event
											if (eventType == 'mousedown') {
												// bind cropping start event
												callback();
											}

											// touchstart event
											if (eventType == 'touchstart') {
												cropper.isTouchLongPress = true;

												// check if long press
												setTimeout(function() {
													if (!cropper.isTouchLongPress)
														return;
													delete cropper.isTouchLongPress;
													callback();
												}, 500);
											}

											// bind window mouseup event
											$(window).on('mouseup touchend', cropper.mouseup);
										},
										mousemove: function(e) {
											var eventType = e.originalEvent.touches && e.originalEvent.touches[0] ? 'touchstart' : 'mousedown',
												$target = $(e.target),
												cropper = item.popup.editor.cropper,
												points = {
													x: (eventType == 'mousedown' ? e.pageX : e.originalEvent.touches[0].pageX) - cropper.$template.offset().left,
													y: (eventType == 'mousedown' ? e.pageY : e.originalEvent.touches[0].pageY) - cropper.$template.offset().top
												};

											// move
											if (cropper.isMoving) {
												var left = points.x - cropper.pointData.xEditor,
													top = points.y - cropper.pointData.yEditor;

												// position
												if (left + cropper.crop.width > cropper.$template.width())
													left = cropper.$template.width() - cropper.crop.width;
												if (left < 0)
													left = 0;
												if (top + cropper.crop.height > cropper.$template.height())
													top = cropper.$template.height() - cropper.crop.height;
												if (top < 0)
													top = 0;

												// set position
												cropper.crop.left = left;
												cropper.crop.top = top;
											}

											// resize
											if (cropper.isResizing) {
												var point = cropper.pointData.el.attr('class').substr("point point-".length),
													lastWidth = cropper.crop.left + cropper.crop.width,
													lastHeight = cropper.crop.top + cropper.crop.height,
													minWidth = (n.editor.cropper && n.editor.cropper.minWidth || 0) * cropper.crop.cfWidth,
													minHeight = (n.editor.cropper && n.editor.cropper.minHeight || 0) * cropper.crop.cfHeight,
													ratio = n.editor.cropper ? n.editor.cropper.ratio : null,
													ratioPx;

												// set minWidth if greater than image
												if (minWidth > cropper.$template.width())
													minWidth = cropper.$template.width();
												if (minHeight > cropper.$template.height())
													minHeight = cropper.$template.height();

												// points
												if ((point == 'a' || point == 'b' || point == 'c') && !ratioPx) {
													cropper.crop.top = points.y;
													if (cropper.crop.top < 0)
														cropper.crop.top = 0;

													cropper.crop.height = lastHeight - cropper.crop.top;
													if (cropper.crop.top > cropper.crop.top + cropper.crop.height) {
														cropper.crop.top = lastHeight;
														cropper.crop.height = 0;
													}

													// minHeight
													if (cropper.crop.height < minHeight) {
														cropper.crop.top = lastHeight - minHeight;
														cropper.crop.height = minHeight;
													}
													
													// ratio
													ratioPx = ratio ? f._assets.ratioToPx(cropper.crop.width, cropper.crop.height, ratio) : null;
													if (ratioPx) {
														cropper.crop.width = ratioPx[0];
														
														if (point == 'a' || point == 'b')
															cropper.crop.left = Math.max(0, cropper.pointData.left + ((cropper.pointData.width - cropper.crop.width) / (point == 'b' ? 2 : 1)));
														
														// check
														if (cropper.crop.left + cropper.crop.width > cropper.$template.width()) {
															var newWidth = cropper.$template.width() - cropper.crop.left;

															cropper.crop.width = newWidth;
															cropper.crop.height = newWidth / ratioPx[2] * ratioPx[3];
															cropper.crop.top = lastHeight - cropper.crop.height;
														}
													}
												}
												if ((point == 'e' || point == 'f' || point == 'g') && !ratioPx) {
													cropper.crop.height = points.y - cropper.crop.top;
													if (cropper.crop.height + cropper.crop.top > cropper.$template.height())
														cropper.crop.height = cropper.$template.height() - cropper.crop.top;

													// minHeight
													if (cropper.crop.height < minHeight)
														cropper.crop.height = minHeight;
													
													// ratio
													ratioPx = ratio ? f._assets.ratioToPx(cropper.crop.width, cropper.crop.height, ratio) : null;
													if (ratioPx) {
														cropper.crop.width = ratioPx[0];
														
														if (point == 'f' || point == 'g')
															cropper.crop.left = Math.max(0, cropper.pointData.left + ((cropper.pointData.width - cropper.crop.width) / (point == 'f' ? 2 : 1)));
														
														// check
														if (cropper.crop.left + cropper.crop.width > cropper.$template.width()) {
															var newWidth = cropper.$template.width() - cropper.crop.left;

															cropper.crop.width = newWidth;
															cropper.crop.height = newWidth / ratioPx[2] * ratioPx[3];
														}
													}
												}
												if ((point == 'c' || point == 'd' || point == 'e') && !ratioPx) {
													cropper.crop.width = points.x - cropper.crop.left;
													if (cropper.crop.width + cropper.crop.left > cropper.$template.width())
														cropper.crop.width = cropper.$template.width() - cropper.crop.left;

													// minWidth
													if (cropper.crop.width < minWidth)
														cropper.crop.width = minWidth;
													
													// ratio
													ratioPx = ratio ? f._assets.ratioToPx(cropper.crop.width, cropper.crop.height, ratio) : null;
													if (ratioPx) {
														cropper.crop.height = ratioPx[1];
														
														if (point == 'c' || point == 'd')
															cropper.crop.top = Math.max(0, cropper.pointData.top + ((cropper.pointData.height - cropper.crop.height) / (point == 'd' ? 2 : 1)));
														
														// check
														if (cropper.crop.top + cropper.crop.height > cropper.$template.height()) {
															var newHeight = cropper.$template.height() - cropper.crop.top;
															
															cropper.crop.height = newHeight;
															cropper.crop.width = newHeight / ratioPx[3] * ratioPx[2];
														}
													}
												}
												if ((point == 'a' || point == 'g' || point == 'h') && !ratioPx) {
													cropper.crop.left = points.x;
													if (cropper.crop.left > cropper.$template.width())
														cropper.crop.left = cropper.$template.width();
													if (cropper.crop.left < 0)
														cropper.crop.left = 0;

													cropper.crop.width = lastWidth - cropper.crop.left;
													if (cropper.crop.left > cropper.crop.left + cropper.crop.width) {
														cropper.crop.left = lastWidth;
														cropper.crop.width = 0;
													}

													// minWidth
													if (cropper.crop.width < minWidth) {
														cropper.crop.left = lastWidth - minWidth;
														cropper.crop.width = minWidth;
													}
													
													// ratio
													ratioPx = ratio ? f._assets.ratioToPx(cropper.crop.width, cropper.crop.height, ratio) : null;
													if (ratioPx) {
														cropper.crop.height = ratioPx[1];
														
														if (point == 'a' || point == 'h')
															cropper.crop.top = Math.max(0, cropper.pointData.top + ((cropper.pointData.height - cropper.crop.height) / (point == 'h' ? 2 : 1)));
														
														// check
														if (cropper.crop.top + cropper.crop.height > cropper.$template.height()) {
															var newHeight = cropper.$template.height() - cropper.crop.top;
															
															cropper.crop.height = newHeight;
															cropper.crop.width = newHeight / ratioPx[3] * ratioPx[2];
															cropper.crop.left = lastWidth - cropper.crop.width;
														}
													}
												}
											}

											// draw cropping-area
											cropper.drawPlaceHolder(cropper.crop);
										},
										mouseup: function(e) {
											var cropper = item.popup.editor.cropper;

											// check if empty area
											if (cropper.$editor.width() == 0 || cropper.$editor.height() == 0)
												cropper.init(cropper.setDefaultData());

											// clear
											delete cropper.isTouchLongPress;
											delete cropper.isMoving;
											delete cropper.isResizing;
											cropper.$editor.removeClass('moving');
											$('body').css({
												'-webkit-user-select': '',
												'-moz-user-select': '',
												'-ms-user-select': '',
												'user-select': ''
											});

											// unbind window events
											$(window).off('mousemove touchmove', cropper.mousemove);
											$(window).off('mouseup touchend', cropper.mouseup);
										}
									};
									
									// init cropper tool
									item.popup.editor.cropper.init();
								} else {
									if (data)
										item.popup.editor.cropper.crop = data;
									item.popup.editor.cropper.init(data);
								}
							}	
						},
						
						/**
                         * resize
                         * resize a canvas image
                         *
						 * @namespace editor
                         * @param {DOM El} img
                         * @param {DOM El} canvas
                         * @param {Number} width - new width
                         * @param {Number} height - new height
                         * @param {Boolean} alpha - enable transparency on resize (!not available on smooth resize)
                         * @param {Boolean} fixedSize - fixed canvas size
                         * @void
                         */
						resize: function(img, canvas, width, height, alpha, fixedSize) {
							var context = canvas.getContext('2d'),
                                width = !width && height ? height * img.width / img.height : width,
                                height = !height && width ? width * img.height / img.width : height,
								ratio = img.width / img.height,
								optimalWidth =  ratio >= 1 ? width : height * ratio,
								optimalHeight = ratio < 1 ? height : width / ratio;
							
							if (fixedSize && optimalWidth < width) {
								optimalHeight = optimalHeight * (width/optimalWidth);
								optimalWidth = width;
							}
							if (fixedSize && optimalHeight < height) {
								optimalWidth = optimalWidth * (height/optimalHeight);
								optimalHeight = height;
							}
							
							var steps = Math.ceil(Math.log(img.width / optimalWidth) / Math.log(2));
							canvas.width = optimalWidth;
							canvas.height = optimalHeight;

							// if image is smaller than canvas or there are no resizing steps
							if (img.width < canvas.width || img.height < canvas.height || steps < 2) {
								
								// set canvas size as image size if size is not fixed
								if (!fixedSize) {
									canvas.width = Math.min(img.width, canvas.width);
									canvas.height = Math.min(img.height, canvas.height);
								}
								
								// alight image to center
								var x = img.width < canvas.width ? (canvas.width - img.width)/2 : 0,
									y = img.height < canvas.height ? (canvas.height - img.height)/2 : 0;
								
								// draw image
								if (!alpha) {
									context.fillStyle = "#fff";
									context.fillRect(0, 0, canvas.width, canvas.height);
								}
								context.drawImage(img, x, y, Math.min(img.width, canvas.width), Math.min(img.height, canvas.height));
							} else {
								var oc = document.createElement('canvas'),
									octx = oc.getContext('2d'),
									factor = 2;
								
								// smooth resize
								oc.width = img.width/factor;
								oc.height = img.height/factor;
								octx.fillStyle = "#fff";
								octx.fillRect(0, 0, oc.width, oc.height);
								octx.drawImage(img, 0, 0, img.width/2, img.height/2);
								while(steps > 2) {
									var factor2 = factor + 2,
										widthFactor = img.width/factor,
										heightFactor = img.height/factor;
									
									if (widthFactor > oc.width)
										widthFactor = oc.width;
									if (heightFactor > oc.height)
										heightFactor = oc.height;
									
									octx.drawImage(oc, 0, 0, widthFactor, heightFactor, 0, 0, img.width/factor2, img.height/factor2);
									factor = factor2;
									steps--;
								}
								
								// draw image
								var widthFactor = img.width/factor,
									heightFactor = img.height/factor;
								
								if (widthFactor > oc.width)
									widthFactor = oc.width;
								if (heightFactor > oc.height)
									heightFactor = oc.height;
								
								context.drawImage(oc, 0, 0, widthFactor, heightFactor, 0, 0, optimalWidth, optimalHeight);
								
								oc = octx = null;
							}
							
							context = null;
						},
						
						/**
                         * save
                         * save edited image
						 * show cropping tools, only when popup is enabled
                         *
						 * @namespace editor
                         * @param {Object} item
                         * @void
                         */
						save: function(item, toBlob, mimeType, callback, preventThumbnailRender) {
							var inPopup = item.popup && typeof item.popup.html !== "undefined";
							
							if (inPopup) {
								if (!item.popup.editor.hasChanges)
									return;
								
								var scale = item.popup.editor.scale || 1;
								
								item.editor.rotation = item.popup.editor.rotation || 0;
								if (item.popup.editor.cropper) {
									item.editor.crop = item.popup.editor.cropper.crop;
									
									item.editor.crop.width = item.editor.crop.width / item.popup.editor.cropper.crop.cfWidth / scale;
									item.editor.crop.left = item.editor.crop.left / item.popup.editor.cropper.crop.cfWidth / scale;
									item.editor.crop.height = item.editor.crop.height / item.popup.editor.cropper.crop.cfHeight / scale;
									item.editor.crop.top = item.editor.crop.top / item.popup.editor.cropper.crop.cfHeight / scale;
								}
							}
							
							// update thumbnail
							var canvas = document.createElement('canvas'),
								ctx = canvas.getContext('2d'),
								image = item.reader.node,
								rotationCf = [0, 180];
								
							// set canvas size and image
							canvas.width = image.naturalWidth;
							canvas.height = image.naturalHeight;
							ctx.drawImage(image, 0, 0);
							
							// rotate image
							if (typeof item.editor.rotation != 'undefined') {
								canvas.width = rotationCf.indexOf(item.editor.rotation) > -1 ? image.naturalWidth : image.naturalHeight;
								canvas.height = rotationCf.indexOf(item.editor.rotation) > -1 ? image.naturalHeight : image.naturalWidth;
								
								var angle = item.editor.rotation*Math.PI/180,
									cw = canvas.width * 0.5,
									ch = canvas.height * 0.5;
								
								// clear context
								ctx.clearRect(0, 0, canvas.width, canvas.height);
								
								// rotate context
								ctx.translate(cw, ch);
								ctx.rotate(angle);
								ctx.translate(-image.naturalWidth * 0.5, -image.naturalHeight * 0.5);

								// draw image and reset transform
								ctx.drawImage(image, 0, 0);
								ctx.setTransform(1, 0, 0, 1, 0, 0);
							}
							
							// crop image
							if (item.editor.crop) {
								var cut = ctx.getImageData(item.editor.crop.left, item.editor.crop.top, item.editor.crop.width, item.editor.crop.height);
								
								canvas.width = item.editor.crop.width;
								canvas.height = item.editor.crop.height;
								
								// put image
								ctx.putImageData(cut, 0, 0);
							}
							
							// export image
							var type = mimeType || item.type || 'image/jpeg',
								quality = n.editor.quality || 90,
								exportDataURI = canvas.toDataURL(type, quality/100),
								nextStep = function(exportDataURI, img) {
									var data = !toBlob ? exportDataURI : f._assets.dataURItoBlob(exportDataURI, type);
									
									inPopup && !preventThumbnailRender ? f.thumbnails.renderThumbnail(item, true, img || exportDataURI) : null;
									callback ? callback(data, item, l, p, o, s) : null;
									n.editor.onSave != null && typeof n.editor.onSave == "function" ? n.editor.onSave(data, item, l, p, o, s) : null;
									f.set('listInput', null);
								};
							
							// resize image if maxWidth
							if (n.editor.maxWidth || n.editor.maxHeight) {
								var img = new Image();
								
								img.src = exportDataURI;
								img.onload = function() {
									var canvas2 = document.createElement('canvas');
									
									// resize canvas
									f.editor.resize(img, canvas2, n.editor.maxWidth, n.editor.maxHeight, true, false);
									
									exportDataURI = canvas2.toDataURL(type, quality/100);
									canvas = ctx = canvas2 = null;
									nextStep(exportDataURI, img);
								};
							} else {
								canvas = ctx = null;
								nextStep(exportDataURI);
							}
						}
					},
					
					/**
                     * @namespace sorter
                     */
					sorter: {
						init: function() {
							p.on('mousedown touchstart', n.thumbnails._selectors.sorter, f.sorter.mousedown);
						},
						destroy: function() {
							p.off('mousedown touchstart', n.thumbnails._selectors.sorter, f.sorter.mousedown);
						},
						prevent: function(e) {
							if (e === true)
								return 'click drop dragend dragleave dragover dragenter dragstart touchstart touchmove touchend touchcancel';
							
							e.preventDefault();
						},
						mousedown: function(e) {
							var eventType = e.originalEvent.touches && e.originalEvent.touches[0] ? 'touchstart' : 'mousedown',
								$target = $(e.target),
								$item = $target.closest(n.thumbnails._selectors.item),
								item = f.files.find($item),
								points = {
									x: eventType == 'mousedown' || !$item.length ? e.pageX : e.originalEvent.touches[0].pageX,
									y: eventType == 'mousedown' || !$item.length ? e.pageY : e.originalEvent.touches[0].pageY
								},
								callback = function() {
									// set current state
									f.sorter.sort = {
										el: $target,
										item: item,
										items: l.find(n.thumbnails._selectors.item),
										x: points.x,
										y: points.y,
										xItem: points.x - $item.offset().left,
										yItem: points.y - $item.offset().top,
										left: $item.position().left,
										top: $item.position().top,
										width: $item.outerWidth(),
										height: $item.outerHeight(),
										placeholder: n.sorter.placeholder ? $(n.sorter.placeholder) : item.html.clone().addClass('fileuploader-sorter-placeholder').html('')
									};
									
									// disable user-select
									$('body').css({
										'-webkit-user-select': 'none',
										'-moz-user-select': 'none',
										'-ms-user-select': 'none',
										'user-select': 'none'
									});

									// bind window mousemove event
									$(window).on('mousemove touchmove', f.sorter.mousemove);
								};
                            
                            // off
                            if (f.sorter.sort)
                                f.sorter.mouseup();
							
							// prevent if there is no item
							if (!item)
								return;
							
							// prevent if target is selectorExclude
							if (n.sorter.selectorExclude && ($target.is(n.sorter.selectorExclude) || $target.closest(n.sorter.selectorExclude).length))
								return;
							
							// preventDefault();
							p.on(f.sorter.prevent(true), n.thumbnails._selectors.sorter, f.sorter.prevent);

							// mousedown event
							if (eventType == 'mousedown') {
								// bind cropping start event
								callback();
							}

							// touchstart event
							if (eventType == 'touchstart') {
								f.sorter.isTouchLongPress = true;

								// check if long press
								setTimeout(function() {
									if (!f.sorter.isTouchLongPress)
										return;
									
									delete f.sorter.isTouchLongPress;
									callback();
								}, 500);
							}

							// bind window mouseup event
							$(window).on('mouseup touchend', f.sorter.mouseup);
						},
						findItemAtPos: function(points) {
							var sort = f.sorter.sort,
								$list = sort.items.not(sort.item.html),
								$item = null;
							
							$list.each(function(i, el) {
								var $el = $(el);
								
								if (points.x > $el.offset().left && points.x < $el.offset().left + $el.outerWidth() &&
								  points.y > $el.offset().top && points.y < $el.offset().top + $el.outerHeight()) {
									$item = $el;
									return false;
								}
							});
							
							return $item;
						},
						mousemove: function(e) {
							var eventType = e.originalEvent.touches && e.originalEvent.touches[0] ? 'touchstart' : 'mousedown',
								sort = f.sorter.sort,
								item = sort.item,
                                $list = l.find(n.thumbnails._selectors.item),
								$container = $(n.sorter.scrollContainer || window),
                                scroll = {
                                    left: $container.scrollLeft(),
                                    top: $container.scrollTop()
                                },
								points = {
									x: eventType == 'mousedown' ? e.pageX : e.originalEvent.touches[0].pageX,
									y: eventType == 'mousedown' ? e.pageY : e.originalEvent.touches[0].pageY
								};

							// drag
							var left = points.x - sort.xItem - scroll.left,
								top = points.y - sort.yItem - scroll.top;

							// position
							if (left + sort.xItem > $container.width())
								left = $container.width() - sort.xItem;
							if (left < 0 - sort.xItem)
								left = 0 - sort.xItem;
							if (top + sort.yItem  > $container.height())
								top = $container.height() - sort.yItem;
							if (top < 0 - sort.yItem)
								top = 0 - sort.yItem;
                            
							// set style
							item.html.addClass('sorting').css({
                                position: 'fixed',
								left: left,
								top: top,
								width: f.sorter.sort.width,
								height: f.sorter.sort.height
							});
							
							// position placeholder
							if (!l.find(sort.placeholder).length)
								item.html.after(sort.placeholder);
							sort.placeholder.css({
								width: f.sorter.sort.width,
								height: f.sorter.sort.height,
							});
                            
							// set new position
							var $hoverEl = f.sorter.findItemAtPos({x: left + sort.xItem + scroll.left, y: top + sort.yItem + scroll.top});
							if ($hoverEl) {
                                // prevent drag issue
                                var directionX = sort.placeholder.offset().left != $hoverEl.offset().left,
                                    directionY = sort.placeholder.offset().top != $hoverEl.offset().top;
								if (f.sorter.sort.lastHover) {
									if (f.sorter.sort.lastHover.el == $hoverEl[0]) {
										if (directionY && f.sorter.sort.lastHover.direction == 'before' && points.y < f.sorter.sort.lastHover.y)
											return;
										if (directionY && f.sorter.sort.lastHover.direction == 'after' && points.y > f.sorter.sort.lastHover.y)
											return;
                                        
                                        if (directionX && f.sorter.sort.lastHover.direction == 'before' && points.x < f.sorter.sort.lastHover.x)
											return;
										if (directionX && f.sorter.sort.lastHover.direction == 'after' && points.x > f.sorter.sort.lastHover.x)
											return;
									}
								}
								
                                // insert element before/after in HTML
								var index = $list.index(item.html),
									hoverIndex = $list.index($hoverEl),
                                    direction = index > hoverIndex ? 'before' : 'after';
								
								$hoverEl[direction](sort.placeholder);
								$hoverEl[direction](item.html);
                                
                                // save last hover data
								f.sorter.sort.lastHover = {
									el: $hoverEl[0],
									x: points.x,
									y: points.y,
									direction: direction
								};
                                
                                // reset container scroller
                                $container.scrollLeft(scroll.left);
                                $container.scrollTop(scroll.top);
							}
						},
						mouseup: function() {
							var sort = f.sorter.sort,
								item = sort.item;
							
							// clear
							$('body').css({
								'-webkit-user-select': '',
								'-moz-user-select': '',
								'-ms-user-select': '',
								'user-select': ''
							});
                            
                            item.html.removeClass('sorting').css({
                                position: '',
                                left: '',
                                top: '',
                                width: '',
                                height: ''
                            });
                            sort.placeholder.remove();
                            delete f.sorter.sort;
							
                            p.off(f.sorter.prevent(true), n.thumbnails._selectors.sorter, f.sorter.prevent);
							$(window).off('mousemove touchmove', f.sorter.mousemove);
							$(window).off('mouseup touchend', f.sorter.mouseup);
							
							f.sorter.save();
						},
						save: function(isFromList) {
							var index = 0,
								list = [],
								hasChanges = f.rendered && isFromList;
							
							// set index for all files
							// if not rendered - from the _itFl; if rendered - from HTML
							$.each(isFromList ? f._itFl : l.children(), function(i, el) {
								var item = el.file ? el : f.files.find($(el));
								
								if (item) {
                                    // inspired from files.list method
                                    if (item.upload && !item.uploaded) {
                                        hasChanges = false;
                                        return false;
                                    }
                                    
                                    // check if changes
									if (f.rendered && item.index != index)
										hasChanges = true;
									
									item.index = index;
									list.push(item);
									index++;
								}
							});
							
							// replace list 
							if (hasChanges && list.length == f._itFl.length)
								f._itFl = list;
							
							// update listInput
							if (!isFromList)
								f.set('listInput', 'ignoreSorter');
							
							// onSort callback
							hasChanges && n.sorter.onSort != null && typeof n.sorter.onSort == "function" ? n.sorter.onSort(list, l, p, o, s) : null;
						}
					},
                    
                    /**
                     * @namespace upload
                     */
                    upload: {
						/**
                         * prepare
                         * prepare item ajax data and also item ajax methods
                         *
						 * @namespace upload
                         * @param {Object} item
						 * @param {bool} force_send - force ajax sending after prepare
                         * @void
                         */
                        prepare: function(item, force_send) {
							// create item upload object
                            item.upload = {
                                url: n.upload.url,
                                data: n.upload.data || {},
                                formData: new FormData(),
                                type: n.upload.type || 'POST',
                                enctype: n.upload.enctype || 'multipart/form-data',
                                cache: false,
                                contentType: false,
                                processData: false,
                                
								status: null,
                                send: function() {
                                    f.upload.send(item, true);
                                },
                                cancel: function(isFromRemove) {
                                    f.upload.cancel(item, isFromRemove);
                                },
                                retry: function() {
                                    f.upload.retry(item);
                                }
                            };
							
                            // add file to formData
                            item.upload.formData.append(s.attr('name'), item.file, (item.name ? item.name : false));
                            
                            if (n.upload.start || force_send)
                                f.upload.send(item, force_send);
                        },
						/**
                         * send
                         * send item ajax
                         *
						 * @namespace upload
                         * @param {Object} item
						 * @param {bool} force_send - skip the synchron functions and force ajax sending
                         * @void
                         */
                        send: function(item, force_send) {
                            // skip if upload settings were not prepared
							// only made for safety
                            if (!item.upload)
                                return;
							
							var setItemUploadStatus = function(status) {
									item.html.removeClass('upload-pending upload-loading upload-cancelled upload-failed upload-success').addClass('upload-' + (status || item.upload.status));
								},
								loadNextItem = function() {
									var i = 0;
									
									if (f._pfuL.length > 0) {
										f._pfuL.indexOf(item) > -1 ? f._pfuL.splice(f._pfuL.indexOf(item), 1) : null;
										while (i < f._pfuL.length) {
											if (f._itFl.indexOf(f._pfuL[i]) > -1 && f._pfuL[i].upload && !f._pfuL[i].upload.$ajax) {
												f.upload.send(f._pfuL[i], true);
												break;
											} else {
												f._pfuL.splice(i, 1);
											}
											i++;
										}
									}
								};
							
							// synchron upload
                            if (n.upload.synchron && !item.upload.chunk) {
								// add pending status to item
								item.upload.status = 'pending';
								if (item.html)
									setItemUploadStatus();
								
                            	// check pending list
								if (force_send) {
									f._pfuL.indexOf(item) > -1 ? f._pfuL.splice(f._pfuL.indexOf(item), 1) : null;
								} else {
									f._pfuL.indexOf(item) == -1 ? f._pfuL.push(item) : null;
									if (f._pfuL.length > 1) {
										return;
									}
								}
                            }
                            
                            // chunk upload
							if (n.upload.chunk && item.file.slice) {
								var chunkSize = n.upload.chunk * 1e+6,
									chunks = Math.ceil(item.size/chunkSize, chunkSize);
								
								if (chunks > 1 && !item.upload.chunk)
									item.upload.chunk = {
										name: item.name,
										size: item.file.size,
										type: item.file.type,
										chunkSize: chunkSize,
										temp_name: item.name,
										
                                        loaded: 0,
										total: chunks,
										i: -1
									};
								
								if (item.upload.chunk) {
									item.upload.chunk.i++;
									delete item.upload.chunk.isFirst;
									delete item.upload.chunk.isLast;
									if (item.upload.chunk.i == 0)
										item.upload.chunk.isFirst = true;
									if (item.upload.chunk.i == item.upload.chunk.total - 1)
										item.upload.chunk.isLast = true;
									
									if (item.upload.chunk.i <= item.upload.chunk.total - 1) {
										var offset = item.upload.chunk.i * item.upload.chunk.chunkSize,
											filePart = item.file.slice(offset, offset + item.upload.chunk.chunkSize);
										
										item.upload.data = n.upload.data || {};
										item.upload.formData = new FormData();
										item.upload.formData.append(s.attr('name'), filePart);
										item.upload.data._chunkedd = JSON.stringify(item.upload.chunk);
									} else {
										delete item.upload.chunk;
									}
								}
							}
                            
                            // upload.beforeSend callback
							if (n.upload.beforeSend && $.isFunction(n.upload.beforeSend) && n.upload.beforeSend(item, l, p, o, s) === false) {
                                delete item.upload.chunk;
								setItemUploadStatus();
								loadNextItem();
								return;
							}
                            
							// add uploading class to parent element
							p.addClass('fileuploader-is-uploading');
							
                            // add loading status to item
							if (item.upload.$ajax)
								item.upload.$ajax.abort();
							delete item.upload.$ajax;
                            delete item.upload.send;
							item.upload.status = 'loading';
                            if (item.html) {
								if (n.thumbnails._selectors.start)
                                    item.html.find(n.thumbnails._selectors.start).remove();
                                setItemUploadStatus();
							}
							
                            // add upload data to formData
                            if (item.upload.data) {
                                for (var k in item.upload.data) {
                                    item.upload.formData.append(k, item.upload.data[k]);
                                }
                            }
                            
                            item.upload.data = item.upload.formData;
                            item.upload.xhr = function() {
                                var xhr = $.ajaxSettings.xhr(),
                                    xhrStartedAt = item.upload.chunk && item.upload.chunk.xhrStartedAt ? item.upload.chunk.xhrStartedAt : new Date();

                                if (xhr.upload) {
                                    xhr.upload.addEventListener("progress", function(e) {
										if (item.upload.$ajax) {
											item.upload.$ajax.total = item.upload.chunk ? item.upload.chunk.size : e.total;
											item.upload.$ajax.xhrStartedAt = xhrStartedAt;
										}
                                        f.upload.progressHandling(e, item, xhrStartedAt);
                                    }, false);
                                }
                                return xhr;
                            };
                            item.upload.complete = function(jqXHR, textStatus) {
								if (item.upload.chunk && !item.upload.chunk.isLast && textStatus == 'success')
									return f.upload.send(item);
                                loadNextItem();
                                
                                var g = true;
                                $.each(f._itFl, function(i, a) {
                                    if (a.upload && a.upload.$ajax)
                                        g = false;
                                });
                                if (g) {
                                    p.removeClass('fileuploader-is-uploading');
                                    n.upload.onComplete != null && typeof n.upload.onComplete == "function" ? n.upload.onComplete(l, p, o, s, jqXHR, textStatus) : null;
                                }
                            };
                            item.upload.success = function(data, textStatus, jqXHR) {
								if (item.upload.chunk && !item.upload.chunk.isLast) {
									try {
										var json = JSON.parse(data);
										
										item.upload.chunk.temp_name = json.fileuploader.temp_name;
									} catch (e) { }
									return;
								}
                                delete item.upload.chunk;
								f.upload.progressHandling(null, item, item.upload.$ajax.xhrStartedAt, true);
                                item.uploaded = true;
                                delete item.upload;
								item.upload = {status: 'successful', resend: function() { f.upload.retry(item); }};
                                
                                if (item.html)
                                    setItemUploadStatus();
								
                                n.upload.onSuccess != null && $.isFunction(n.upload.onSuccess) ? n.upload.onSuccess(data, item, l, p, o, s, textStatus, jqXHR) : null;
                                f.set('listInput', null);
                            };
                            item.upload.error = function(jqXHR, textStatus, errorThrown) {
                                item.uploaded = false;
								item.upload.status = item.upload.status == 'cancelled' ? item.upload.status : 'failed';
                                delete item.upload.$ajax;
                                
                                if (item.html)
                                    setItemUploadStatus();
								
                                n.upload.onError != null && $.isFunction(n.upload.onError) ? n.upload.onError(item, l, p, o, s, jqXHR, textStatus, errorThrown) : null;
                            };
                            
                            // send
                            item.upload.$ajax = $.ajax(item.upload);
                        },
						/**
                         * cancel
                         * cancel item ajax request
                         *
						 * @namespace upload
                         * @param {Object} item
                         * @void
                         */
                        cancel: function(item, isFromRemove) {
                            if (item && item.upload) {
                                item.upload.status = 'cancelled';
                                delete item.upload.chunk;
                                item.upload.$ajax ? item.upload.$ajax.abort() : null;
								delete item.upload.$ajax;
                                !isFromRemove ? f.files.remove(item) : null;
                            }
                        },
						/**
                         * retry
                         * retry item ajax upload
                         *
						 * @namespace upload
                         * @param {Object} item
                         * @void
                         */
                        retry: function(item) { 
                            if (item && item.upload) {
                                if (item.html && n.thumbnails._selectors.retry)
                                    item.html.find(n.thumbnails._selectors.retry).remove();
								
                                f.upload.prepare(item, true);
                            }
                        },
						/**
                         * progressHandling
                         * item ajax progress function
                         *
						 * @namespace upload
                         * @param {Event} e - xhr event
						 * @param {Object} item
						 * @param {Date} xhrStartedAt - request started Date()
						 * @param {Boolean} isManual - check if function was manually called
                         * @void
                         */
                        progressHandling: function(e, item, xhrStartedAt, isManual) {
							if (!e && isManual && item.upload.$ajax)
								e = {total: item.upload.$ajax.total, loaded: item.upload.$ajax.total, lengthComputable: true};
							
                            if (e.lengthComputable) {
                                var loaded = e.loaded + (item.upload.chunk ? item.upload.chunk.loaded : 0),
                                    total = item.upload.chunk ? item.upload.chunk.size : e.total,
                                    percentage = Math.round(loaded * 100 / total),
									timeStarted = item.upload.chunk && item.upload.chunk.xhrStartedAt ? item.upload.chunk.xhrStartedAt : xhrStartedAt,
                                    secondsElapsed = (new Date().getTime() - timeStarted.getTime()) / 1000,
                                    bytesPerSecond = secondsElapsed ? loaded / secondsElapsed : 0,
                                    remainingBytes = Math.max(0, total - loaded),
                                    secondsRemaining = Math.max(0, secondsElapsed ? remainingBytes / bytesPerSecond : 0),
                                    data = {
                                        loaded: loaded,
                                        loadedInFormat: f._assets.bytesToText(loaded),
                                        total: total,
                                        totalInFormat: f._assets.bytesToText(total),
                                        percentage: percentage,
                                        secondsElapsed: secondsElapsed,
                                        secondsElapsedInFormat: f._assets.secondsToText(secondsElapsed, true),
                                        bytesPerSecond: bytesPerSecond,
                                        bytesPerSecondInFormat: f._assets.bytesToText(bytesPerSecond) + '/s',
                                        remainingBytes: remainingBytes,
                                        remainingBytesInFormat: f._assets.bytesToText(remainingBytes),
                                        secondsRemaining: secondsRemaining,
                                        secondsRemainingInFormat: f._assets.secondsToText(secondsRemaining, true)
                                    };
								
								if (item.upload.chunk) {
                                    if (item.upload.chunk.isFirst)
										item.upload.chunk.xhrStartedAt = xhrStartedAt;
									if (e.loaded == e.total && !item.upload.chunk.isLast)
										item.upload.chunk.loaded += Math.max(e.total, item.upload.chunk.total/item.upload.chunk.chunkSize);
								}
                                
								if (data.percentage > 99 && !isManual)
									data.percentage = 99;
								
								// upload.onProgress callback
                                n.upload.onProgress && $.isFunction(n.upload.onProgress) ? n.upload.onProgress(data, item, l, p, o, s) : null;
                            }
                        }
                    },
					
                    /**
                     * @namespace dragDrop
                     */
					dragDrop: {
						/**
                         * onDragEnter
                         * on dragging file on the drag container
                         *
						 * @namespace dragDrop
                         * @param {Event} e - jQuery event
                         * @void
                         */
						onDragEnter: function(e) {
                            clearTimeout(f.dragDrop._timer);
                            
							// add dragging class to parent element
                            n.dragDrop.container.addClass('fileuploader-dragging');
							
							// set feedback caption
                            f.set('feedback', f._assets.textParse(n.captions.drop));
                            
							// dragDrop.onDragEnter callback
                            n.dragDrop.onDragEnter != null && $.isFunction(n.dragDrop.onDragEnter) ? n.dragDrop.onDragEnter(e, l, p, o, s) : null;
                        },
						/**
                         * onDragLeave
                         * on dragging leave from the drag container
                         *
						 * @namespace dragDrop
                         * @param {Event} e - jQuery event
                         * @void
                         */
                        onDragLeave: function(e) {
                            clearTimeout(f.dragDrop._timer);
                            
                            f.dragDrop._timer = setTimeout(function(e) {
								// check if not the childNodes from dragging container are hovered
                                if (!f.dragDrop._dragLeaveCheck(e)) {
                                    return false;
                                }
								
								// remove dragging class from parent element
                                n.dragDrop.container.removeClass('fileuploader-dragging');
                                
								// set feedback caption
								f.set('feedback', null);
                                
								// dragDrop.onDragLeave callback
                                n.dragDrop.onDragLeave != null && $.isFunction(n.dragDrop.onDragLeave) ? n.dragDrop.onDragLeave(e, l, p, o, s) : null;
                            }, 100, e);
                        },
						/**
                         * onDrop
                         * on drop files
                         *
						 * @namespace dragDrop
                         * @param {Event} e - jQuery event
                         * @void
                         */
                        onDrop: function(e) {
                            clearTimeout(f.dragDrop._timer);
                            
							// remove dragging class from parent element
                            n.dragDrop.container.removeClass('fileuploader-dragging');
                            
							// set feedback caption 
							f.set('feedback', null);
							
							// check if event has dropped files and use them
                            if (e && e.originalEvent && e.originalEvent.dataTransfer && e.originalEvent.dataTransfer.files && e.originalEvent.dataTransfer.files.length) {
								if (f.isUploadMode()) {
				                	f.onChange(e, e.originalEvent.dataTransfer.files);
								} else {
									s.prop('files', e.originalEvent.dataTransfer.files);
								}
                            }
                            
							// dragDrop.onDrop callback
                            n.dragDrop.onDrop != null && $.isFunction(n.dragDrop.onDrop) ? n.dragDrop.onDrop(e, l, p, o, s) : null;
                        },
						/**
                         * _dragLeaveCheck
                         * check by the living from drag container if not the childNodes are hovered
                         *
						 * @namespace dragDrop
                         * @param {Event} e - jQuery event
                         * @return {bool} return the leaving statement
                         */
                        _dragLeaveCheck: function(e) {
                            var related = $(e.currentTarget),
                                insideEls;
							
                            if (!related.is(n.dragDrop.container)) {
                                insideEls = n.dragDrop.container.find(related);

                                if (insideEls.length) {
                                    return false;
                                }
                            }
							
                            return true;
                        }
					},
                    
                    /**
                     * @namespace clipboard
                     */
                    clipboard: {
						/**
                         * paste
                         * on pasting a file from clipboard on page
                         *
						 * @namespace clipboard
                         * @param {Event} e - jQuery event
                         * @void
                         */
                        paste: function(e) {
                            // check if the input is into view and if clipboard is supported and if there are files in the clipboard
                            if (!f._assets.isIntoView(o) || !e.originalEvent.clipboardData || !e.originalEvent.clipboardData.items || !e.originalEvent.clipboardData.items.length)
                                return;
                            
                            var items =  e.originalEvent.clipboardData.items;
							
							// extra clean
							f.clipboard.clean();
							
							for (var i = 0; i < items.length; i++) {
								if (items[i].type.indexOf("image") !== -1 || items[i].type.indexOf("text/uri-list") !== -1) {
									var blob = items[i].getAsFile(),
										ms = n.clipboardPaste > 1 ? n.clipboardPaste : 2000;
									
									if (blob) {
										// create clipboard file name
										blob._name = f._assets.generateFileName(blob.type.indexOf("/") != -1 ? blob.type.split("/")[1].toString().toLowerCase() : 'png', 'Clipboard ');

										// set clipboard timer
										f.set('feedback', f._assets.textParse(n.captions.paste, {ms: ms/1000}));
										f.clipboard._timer = setTimeout(function() {
											f.set('feedback', null);
											f.onChange(e, [blob]);
										}, ms-2);
									}
								}
							}
                        },
						/**
                         * clean
                         * clean the clipboard timer
                         *
						 * @namespace clipboard
                         * @void
                         */
                        clean: function() {
                            if (f.clipboard._timer) {
                                clearTimeout(f.clipboard._timer);
								delete f.clipboard._timer;
								
								// set feedback caption
                                f.set('feedback', null);
                            }
                        }
                    },
                    
                    /**
                     * @namespace files
                     */
					files: {
						/**
                         * add
                         * add a file to memory
                         *
						 * @namespace files
                         * @param {Object} file
						 * @param {String} prop - type of adding a file to memory
                         * @return {Number} index - index of the item in memory array
                         */
						add: function(file, prop) {
							var name = file._name || file.name,
								size = file.size,
								size2 = f._assets.bytesToText(size),
								type = file.type,
								format = type ? type.split('/', 1).toString().toLowerCase() : '',
								extension = name.indexOf('.') != -1 ? name.split('.').pop().toLowerCase() : '',
								title = name.substr(0, name.length - (name.indexOf('.') != -1 ? extension.length+1 : extension.length)),
								data = file.data || {},
								file = file.file || file,
								id = Date.now(),
								index,
								item;
                            
							f._itFl.push({
								name: name,
								title: title,
								size: size,
								size2: size2,
								type: type,
								format: format,
								extension: extension,
								data: data,
								file: file,
                                reader: {
                                    read: function(callback, type, force) { return f.files.read(item, callback, type, force); }
                                },
								id: id,
								
								input: prop == 'choosed' ? s : null,
								html: null,
								choosed: prop == 'choosed',
								appended: prop == 'appended',
								uploaded: prop == 'uploaded'
							});
							
							index = f._itFl.length - 1;
							item = f._itFl[index];
							item.remove = function() {
								f.files.remove(item);
							};
							
							if (n.editor && format == 'image')
								item.editor = {
									rotate: function(deg) {
										f.editor.rotate(item, deg);
									},
									cropper: function(data) {
										f.editor.crop(item, data);
									},
									save: function(callback, toBlob, mimeType, preventThumbnailRender) {
										f.editor.save(item, toBlob, mimeType, callback, preventThumbnailRender);
									}
								};
							
							return index;
						},
                        /**
                         * read
                         * read choosed file and sends the information to callback
                         *
						 * @namespace files
                         * @param {Object} item
                         * @param {Function} callback
                         * @param {String} type - FileReader readAs type
                         * @param {Boolean} force - force a new file read and ignore the existing
                         * @return {null}
                         */
                        read: function(item, callback, type, force) {
                            if (f.isFileReaderSupported()) {
                                var reader = new FileReader(),
                                    useFile = item.choosed,
                                    execute_callbacks = function() {
                                        var _callbacks = item.reader._callbacks;
                                        
                                        delete item.reader._callbacks;
                                        delete item.reader._FileReader;
                                        
                                        for(var i = 0; i<_callbacks.length; i++) {
                                            $.isFunction(_callbacks[i]) ? _callbacks[i](item, l, p, o, s) : null;
                                        }
                                        
                                        n.onFileRead && $.isFunction(n.onFileRead) ? n.onFileRead(item, l, p, o, s) : null;
                                    };
                                
                                if ((!item.reader.src && !item.reader._FileReader) || force)
                                    item.reader = {
                                        _FileReader: reader,
                                        _callbacks: [],
                                        read: item.reader.read
                                    };
                                
                                if (item.reader.src && !force)
                                    return callback && $.isFunction(callback) ? callback(item, l, p, o, s) : null;
                                
                                if (callback && item.reader._callbacks) {
                                    item.reader._callbacks.push(callback);
                                    
                                    if (item.reader._callbacks.length > 1)
                                        return;
                                }
                                
								if (item.format == 'astext') {
									reader.onload = function(e) {
										var node = document.createElement('div');
										
										item.reader.node = node;
          								item.reader.src = e.target.result;
										item.reader.length = e.target.result.length;
										
										node.innerHTML = item.reader.src.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
										
										execute_callbacks();
									};
									reader.onerror = function() {
										execute_callbacks();
                                        item.reader = { read: item.reader.read };
									};
									if (useFile)
                                        reader.readAsText(item.file);
                                    else
                                        $.ajax({
											url : item.file,
											success : function(result){
												reader.onload({target: {result: result}});
											},
											error: function() {
												reader.onerror();
											}
										});
								} else if (item.format == 'image') {
                                    reader.onload = function(e) {
                                        var node = new Image();
                                        
										if (item.data && item.data.readerCrossOrigin)
											node.setAttribute('crossOrigin', item.data.readerCrossOrigin);
                                        node.src = e.target.result + (force && !useFile ? (e.target.result.indexOf('?') == -1 ? '?' : '&') + 'd=' + Date.now() : '');
                                        node.onload = function() {
                                            item.reader.node = node;
                                            item.reader.src = node.src;
                                            item.reader.width = node.width;
                                            item.reader.height = node.height;
                                            item.reader.ratio = f._assets.pxToRatio(item.reader.width, item.reader.height);
                                            
                                            execute_callbacks();
                                        };
                                        node.onerror = function() {
                                            execute_callbacks();
                                            item.reader = { read: item.reader.read };
                                        };
                                    };
                                    reader.onerror = function() {
                                        execute_callbacks();
                                        item.reader = { read: item.reader.read };
                                    };
                                    
                                    if (useFile)
                                        reader.readAsDataURL(item.file);
                                    else
                                        reader.onload({target: {result: item.file}});
                                } else if (item.format == 'video' || item.format == 'audio') {
                                    var node = document.createElement(item.format),
                                        canPlay = node.canPlayType(item.type),
                                        src;
                                    
                                    if (URL && canPlay !== '') {
                                        src = useFile ? URL.createObjectURL(item.file) : item.file;
                                        node.onloadedmetadata = function() {
                                            item.reader.node = node;
                                            item.reader.src = node.src;
                                            item.reader.duration = node.duration;
                                            item.reader.duration2 = f._assets.secondsToText(node.duration);
                                            
                                            if (item.format == 'video') {
                                                item.reader.width = node.videoWidth;
                                                item.reader.height = node.videoHeight;
												item.reader.ratio = f._assets.pxToRatio(item.reader.width, item.reader.height);
                                            }
                                        };
                                        node.onerror = function() {
                                            execute_callbacks();
                                            item.reader = { read: item.reader.read };
                                        };
                                        node.onloadeddata = function() {
                                            if (item.format == 'video') {
                                                var canvas = document.createElement('canvas'),
                                                    context = canvas.getContext('2d');

                                                canvas.width = node.videoWidth;
                                                canvas.height = node.videoHeight;
                                                context.drawImage(node, 0, 0, canvas.width, canvas.height);
                                                item.reader.frame = !f._assets.isBlankCanvas(canvas) ? canvas.toDataURL() : null;

                                                canvas = context = null;
                                            }
                                            
                                            execute_callbacks();
                                        };
                                        
										// dirty fix
                                        setTimeout(function() {
											if (item.data && item.data.readerCrossOrigin)
												node.setAttribute('crossOrigin', item.data.readerCrossOrigin);
                                            node.src = src;
                                        }, 100);
                                    } else {
                                        execute_callbacks();
                                        item.reader = { read: item.reader.read };
                                    }
                                } else {
                                    reader.onload = function(e) {
                                        item.reader.src = e.target.result;
                                        item.reader.length = e.target.result.length;
                                        
                                        execute_callbacks();
                                    };
									reader.onerror = function(e) {
										execute_callbacks();
										item.reader = { read: item.reader.read };
									};
                                    useFile ? reader[type || 'readAsBinaryString'](item.file) : execute_callbacks();
                                }
                            } else {
                                if (callback)
                                    callback(item, l, p, o, s);
                            }
                            
                            return null;
                        },
						/**
                         * list
                         * generate a list of files
                         *
						 * @namespace files
                         * @param {bool} toJSON - generate a JSON list
						 * @param {String} customKey - use a custom item attribute by generating
						 * @param {Boolean} triggered - function was triggered from the API
						 * @param {String} additional - additional settings
                         * @return {String|Object}
                         */
						list: function(toJson, customKey, triggered, additional) {
							var files = [];
							
							// save sorter
							if (n.sorter && !triggered && (!additional || additional != 'ignoreSorter'))
								f.sorter.save(true);
							
							$.each(f._itFl, function(i, a) {
								if (a.upload && !a.uploaded)
									return true;
								
								var file = a;
								
								if (customKey || toJson)
									file = (file.choosed ? '0:/' : '') + (customKey && f.files.getItemAttr(a, customKey) !== null ? f.files.getItemAttr(a, customKey) : a[typeof a.file == "string" ? "file" : "name"]);
								
								if (toJson) {
									file = {file: file};
									
									// editor properties
									// add only if file was cropped or rotated
									if (a.editor && (a.editor.crop || a.editor.rotation)) {
										file.editor = {};
										if (a.editor.rotation)
											file.editor.rotation = a.editor.rotation;
										if (a.editor.crop)
											file.editor.crop = a.editor.crop;
									}
									
									// sorting property
									if (typeof a.index !== 'undefined') {
										file.index = a.index;
									}
									
									// custom properties
									if (a.data && a.data.listProps) {
										for (var key in a.data.listProps) {
											file[key] = a.data.listProps[key];
										}
									}
								}
								
								files.push(file);
							});
                            
                            files = n.onListInput && $.isFunction(n.onListInput)? n.onListInput(files, f._itFl, n.listInput, l, p, o, s) : files;
							
							return !toJson ? files : JSON.stringify(files);
						},
						/**
                         * check
                         * check the files
                         *
						 * @namespace files
                         * @param {Object} item
						 * @param {Array} files
						 * @param {bool} fullCheck - check some parameters that should be checked only once
                         * @return {bool|Array} r
                         */
						check: function(item, files, fullCheck) {
							var r = ["warning", null, false, false];
							
							if (n.limit != null && fullCheck && files.length + f._itFl.length - 1 > n.limit) {
                                r[1] = f._assets.textParse(n.captions.errors.filesLimit);
                                r[3] = true;
                                return r;
							}
							if (n.maxSize != null && fullCheck) {
								var g = 0;
								$.each(f._itFl, function(i, a) {
                                    g += a.size;
								}); g -= item.size;
								$.each(files, function(i, a) {
									g += a.size;
								});

								if (g > Math.round(n.maxSize * 1e+6)) {
                                    r[1] = f._assets.textParse(n.captions.errors.filesSizeAll);
                                    r[3] = true;
                                    return r;
								}
							}
                            if (n.onFilesCheck != null && $.isFunction(n.onFilesCheck) && fullCheck) {
								var onFilesCheck = n.onFilesCheck(files, n, l, p, o, s);
								if (onFilesCheck === false) {
                                    r[3] = true;
									return r;
								}
							}
							if (n.extensions != null && $.inArray(item.extension, n.extensions) == -1 && $.inArray(item.type, n.extensions) == -1) {
								r[1] = f._assets.textParse(n.captions.errors.filesType, item);
								return r;
							}
							if (n.fileMaxSize != null && item.size > n.fileMaxSize * 1e+6) {
								r[1] = f._assets.textParse(n.captions.errors.fileSize, item);
								return r;
							}
							if (item.size == 4096 && item.type == "") {
								r[1] = f._assets.textParse(n.captions.errors.folderUpload, item);
								return r;
							}
							if (!n.skipFileNameCheck) {
								var g = false;
                                
								$.each(f._itFl, function(i, a) {
							  		if (a != item && a.choosed == true && a.file && a.name == item.name) {
										g = true;
                                        
                                        if (a.file.size == item.size && a.file.type == item.type && (item.file.lastModified && a.file.lastModified ? a.file.lastModified == item.file.lastModified : true) && files.length > 1) {
                                            r[2] = true;
                                        } else {
                                            r[1] = f._assets.textParse(n.captions.errors.fileName, item);
                                            r[2] = false;
                                        }
                                        
										return false;
									}
								});
								
								if (g) {
									return r;
								}
							}
							
							return true;
						},
						/**
                         * append
                         * check the files
                         *
						 * @namespace files
                         * @param {Array} files
                         * @return {bool|Object}
                         */
						append: function(files) {
							files = $.isArray(files) ? files : [files];
							
							if (files.length) {
								var item;
								for (var i = 0; i < files.length; i++) {
									item =  f._itFl[f.files.add(files[i], 'appended')];
									
									n.thumbnails ? f.thumbnails.item(item) : null;
								}
								
								// set feedback caption
								f.set('feedback', null);
								
								// set listInput value
								f.set('listInput', null);
								
								// afterSelect callback
								n.afterSelect && $.isFunction(n.afterSelect) ? n.afterSelect(l, p, o, s) : null;
								
								return files.length == 1 ? item : true;
							}
						},
						/**
                         * find
                         * find an item in memory using html element
                         *
						 * @namespace files
                         * @param {jQuery Object} html
                         * @return {null,Object}
                         */
                        find: function(html) {
                            var item = null;
                            
                            $.each(f._itFl, function(i, a) {
                                if (a.html && a.html.is(html)) {
                                    item = a;
                                    return false;
                                }
                            });
                            
                            return item;
                        },
						/**
                         * remove
                         * remove an item from memory and html
                         *
						 * @namespace files
                         * @param {Object} item
                         * @param {bool} isFromCheck - if removing function was triggered by checking a file
                         * @return {null,Object}
                         */
						remove: function(item, isFromCheck) {
							// onRemove callback
							if (!isFromCheck && n.onRemove && $.isFunction(n.onRemove) && n.onRemove(item, l, p, o, s) === false)
								return;
							
							// thumbnails.onItemRemove callback
                            if (item.html)
                                n.thumbnails.onItemRemove && $.isFunction(n.thumbnails.onItemRemove) && !isFromCheck ? n.thumbnails.onItemRemove(item.html, l, p, o, s) : item.html.remove();
							
							// cancel file upload
							if (item.upload && item.upload.$ajax && item.upload.cancel)
								item.upload.cancel(true);
							
							// remove popup
							if (item.popup && item.popup.html)
								item.popup.html.remove();
                            
                            // remove filereader
                            if (item.reader.src) {
                                item.reader.node = null;
                                URL.revokeObjectURL(item.reader.src);
                            }
							
							// check if any file is in the same input like item.input
							if (item.input) {
								var g = true;
								$.each(f._itFl, function(i, a) {
									if (item != a && (item.input == a.input || (isFromCheck && item.input.get(0).files.length > 1))) {
										g = false;
										return false;
									}
								});
								if (g) {
									if (f.isAddMoreMode() && sl.length > 1) {
										f.set('nextInput');
										sl.splice(sl.indexOf(item.input), 1);
										item.input.remove();
									} else {
										f.set('input', '');
									}
								}
							}
                            
							// remove data from memory
                            f._pfrL.indexOf(item) > -1 ? f._pfrL.splice(f._pfrL.indexOf(item), 1) : null;
                            f._pfuL.indexOf(item) > -1 ? f._pfuL.splice(f._pfuL.indexOf(item), 1) : null;
                            f._itFl.indexOf(item) > -1 ? f._itFl.splice(f._itFl.indexOf(item), 1) : null;
                            item = null;
							
							// reset the plugin if there are no any files in the memory
							f._itFl.length == 0 ? f.reset() : null;
                            
							// set feedback caption
							f.set('feedback', null);
							
							// set listInput value
							f.set('listInput', null);
						},
						/**
                         * getItemAttr
                         * get an attribute from item or item.data
                         *
						 * @namespace files
                         * @param {Object} item
						 * @param {String} attr - attribute key
                         * @return {null,String}
                         */
						getItemAttr: function(item, attr) {
							var result = null;
							
							if (item) {
								if (typeof item[attr] != "undefined") {
									result = item[attr];
								} else if (item.data && typeof item.data[attr] != "undefined") {
									result = item.data[attr];
								}
							}
							
							return result;
						},
						/**
                         * clear
                         * clear files from the memory
						 * delete also item.html and item.upload data
                         *
						 * @namespace files
                         * @param {bool} all - delete also appended files?
                         * @void
                         */
						clear: function(all) {
							var i = 0;
							while (i < f._itFl.length) {
								var a = f._itFl[i];
								
								if (!all && a.appended) {
									i++;
									continue;
								}
								
								if (a.html)
									a.html ? f._itFl[i].html.remove() : null;
								
								if (a.upload && a.upload.$ajax)
									f.upload.cancel(a);
								
								f._itFl.splice(i, 1);
							}
							
							// set feedback caption
							f.set('feedback', null);
                            
                            // set listInput value
                            f.set('listInput', null);
							
							// onEmpty callback
							f._itFl.length == 0 && n.onEmpty && $.isFunction(n.onEmpty) ? n.onEmpty(l, p, o, s) : null;
						}
					},
					
					/**
					 * reset
					 * reset the plugin
					 *
					 * @param {bool} all - remove also appended files?
					 * @void
					 */
					reset: function(all) {
						if (all) {
							if (f.clipboard._timer)
								f.clipboard.clean();
							
							$.each(sl, function(i, a) {
								if (i < sl.length)
									a.remove();
							});
							sl = [];
                            f.set('input', '');
						}
						
						f._itRl = [];
                        f._pfuL = [];
                        f._pfrL = [];
						f.files.clear(all);
					},
					/**
					 * destroy
					 * destroy the plugin
					 *
					 * @void
					 */
					destroy: function() {
						f.reset(true);
						f.bindUnbindEvents(false);
						s.removeAttr('style');
						s.insertBefore('.fileuploader');
						s.prop('FileUploader', null);
						p.remove();
						p = o = l = null;
					},
                    
                    /**
                     * @namespace _assets 
                     */
					_assets: {
                        bytesToText: function(bytes) {
                            if (bytes == 0) return '0 Byte';
                            var k = 1000,
								sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
								i = Math.floor(Math.log(bytes) / Math.log(k));
							
                            return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
                        },
                        secondsToText: function(seconds, textFormat) {
                            seconds = parseInt(Math.round(seconds), 10);
                            
                            var hours   = Math.floor(seconds / 3600),
                                minutes = Math.floor((seconds - (hours * 3600)) / 60),
                                seconds = seconds - (hours * 3600) - (minutes * 60),
                                result = "";
                            
                            if (hours > 0 || !textFormat) {
                                result += (hours < 10 ? "0" : "") + hours + (textFormat ? "h " : ":");
                            }
                            if (minutes > 0 || !textFormat) {
                                result += (minutes < 10 && !textFormat ? "0" : "") + minutes + (textFormat ? "m " : ":");
                            }
                            
                            result += (seconds < 10 && !textFormat ? "0" : "") + seconds + (textFormat ? "s" : "");
                            
                            return result;
                        },
						pxToRatio: function(width, height) {
							var gcd = function(a, b) {
									return (b == 0) ? a : gcd (b, a%b);
								},
								r = gcd(width, height);
							
							return [width/r, height/r];
						},
						ratioToPx: function(width, height, ratio) {
							ratio = (ratio+'').split(':');
							
							if (ratio.length < 2)
								return null;
							
							var rWidth = height / ratio[1] * ratio[0],
								rHeight = width / ratio[0] * ratio[1];
							
							return [rWidth, rHeight, ratio[0], ratio[1]];
						},
                        hasAttr: function(attr, el) {
                            var el = !el ? s : el,
                                a = el.attr(attr);
							
                            if (!a || typeof a == 'undefined') {
                                return false;
                            } else {
                                return true;
                            }
                        },
						copyAllAttributes: function(newEl, oldEl) {
							$.each(oldEl.get(0).attributes, function() {
								if (this.name == 'required' || this.name == 'type') return;
								newEl.attr(this.name, this.value);
							});
                            
                            if (oldEl.get(0).FileUploader)
                                newEl.get(0).FileUploader = oldEl.get(0).FileUploader;
							
							return newEl;
						},
						getAllEvents: function(el) {
							var el = !el ? s : el,
								result = [];
							
							el = el.get ? el.get(0) : el;
							for (var key in el) {
								if (key.indexOf('on') === 0) {
									result.push(key.slice(2));
								}
							}
							
							if (result.indexOf('change') == -1)
								result.push('change');
							
							return result.join(' ');
						},
                        isIntoView: function(el) {
                            var windowTop = $(window).scrollTop(),
                                windowBottom = windowTop + window.innerHeight,
                                elTop = el.offset().top,
                                elBottom = elTop + el.outerHeight();

                            return ((windowTop < elTop) && (windowBottom > elBottom));
                        },
						isBlankCanvas: function(canvas) {
							var blank = document.createElement('canvas'),
								result = false;
							
							blank.width = canvas.width;
							blank.height = canvas.height;
							result = canvas.toDataURL() == blank.toDataURL();
							blank = null;
							
							return result;
						},
                        generateFileName: function(extension, prefix) {
							var date = new Date(),
								addZero = function(x) {
									if (x < 10)
										x = "0" + x;

									return x;
								},
								prefix = prefix ? prefix : '',
								extension = extension ? '.' + extension : '';
							
							return prefix + date.getFullYear() + '-' + addZero(date.getMonth()+1) + '-' + addZero(date.getDate()) + ' ' + addZero(date.getHours()) + '-' + addZero(date.getMinutes()) + '-' + addZero(date.getSeconds()) + extension;
						},
						dataURItoBlob: function(dataURI, type) {
							var byteString = atob(dataURI.split(',')[1]),
								mimeType = dataURI.split(',')[0].split(':')[1].split(';')[0],
								arrayBuffer = new ArrayBuffer(byteString.length),
								_ia = new Uint8Array(arrayBuffer);
							
							for (var i = 0; i < byteString.length; i++) {
								_ia[i] = byteString.charCodeAt(i);
							}

							var dataView = new DataView(arrayBuffer),
								blob = new Blob([dataView], { type: type || mimeType });
							
							return blob;
						},
                        textParse: function(text, opts, noOptions) {
                            opts = noOptions ? (opts || {}) : $.extend({}, {
                                limit: n.limit,
                                maxSize: n.maxSize,
                                fileMaxSize: n.fileMaxSize,
                                extensions: n.extensions ? n.extensions.join(', ') : null,
                                captions: n.captions
                            }, opts);
							
                            switch (typeof(text)) {
                                case 'string':
                                    text = text.replace(/\$\{(.*?)\}/g, function(match, a) {
                                        var a = a.replace(/ /g, ''),
                                            r = typeof opts[a] != "undefined" && opts[a] != null ? opts[a] : '';
                                        
                                        if (a.indexOf('.') > -1 || a.indexOf('[]') > -1) {
                                            var x = a.substr(0, a.indexOf('.') > -1 ? a.indexOf('.') : a.indexOf('[') > -1 ? a.indexOf('[') : a.length),
                                                y = a.substring(x.length);
                                            if (opts[x]) {
                                                try {
                                                    r = eval('opts["' + x + '"]' + y);
                                                } catch(e) {
                                                    r = '';
                                                }
                                            }
                                        }
										
										r = $.isFunction(r) ? f._assets.textParse(r) : r;
                                        
                                        return r || '';
                                    });
                                    break;
                                case 'function':
                                    text = f._assets.textParse(text(opts, l, p, o, s, f._assets.textParse), opts, noOptions);
                                    break;
                            }
							
							opts = null;
							return text;
                        },
                        textToColor: function(str) {
                            if (!str || str.length == 0)
								return false;
							
                            for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));
                            for (var i = 0, colour = '#'; i < 3; colour += ('00' + ((hash >> i++ * 2) & 0xFF)
                                    .toString(16))
                                .slice(-2));
                            return colour;
                        },
						isBrightColor: function(color) {
							var getRGB = function(b) {
									var a;
									if (b && b.constructor == Array && b.length == 3) return b;
									if (a = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b)) return [parseInt(a[1]), parseInt(a[2]), parseInt(a[3])];
									if (a = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b)) return [parseFloat(a[1]) * 2.55, parseFloat(a[2]) * 2.55, parseFloat(a[3]) * 2.55];
									if (a = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b)) return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3],
										16)];
									if (a = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b)) return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)];
									return (typeof(colors) != "undefined") ? colors[$.trim(b).toLowerCase()] : null
								},
								luminance_get = function(color) {
									var rgb = getRGB(color);
									if (!rgb) return null;
									return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
								};
							
							return luminance_get(color) > 194;
						}
                    },
					
					isSupported: function() {
						return s && s.get(0).files;
					},
					isFileReaderSupported: function() {
						return window.File && window.FileList && window.FileReader;
					},
					isDefaultMode: function() {
						return !n.upload && !n.addMore;
					},
					isAddMoreMode: function() {
						return !n.upload && n.addMore;
					},
					isUploadMode: function() {
						return n.upload;
					},
					
					// fileuploader file list
                    _itFl: [],
					
					// fileuploader file upload pending list
					_pfuL: [],
					
					// fileuploader file render pending list
					_pfrL: [],
					
					// disabled
					disabled: false,
                    
                    // locked
                    locked: false,
					
					// rendered
					rendered: false
				};
			
			// set FileUploader property to the input
            if (n.enableApi) {
                s.prop('FileUploader', {
                    open: function() {
                        s.trigger('click');
                    },
                    getOptions: function() {
                        return n;
                    },
                    getParentEl: function() {
                        return p;
                    },
                    getInputEl: function() {
                        return s;
                    },
                    getNewInputEl: function() {
                        return o;
                    },
                    getListEl: function() {
                        return l;
                    },
                    getListInputEl: function() {
                        return n.listInput;
                    },
                    getFiles: function() {
                        return f._itFl;
                    },
                    getChoosedFiles: function() {
                        return f._itFl.filter(function(a) {
                            return a.choosed;
                        });
                    },
                    getAppendedFiles: function() {
                        return f._itFl.filter(function(a) {
                            return a.appended;
                        });
                    },
                    getUploadedFiles: function() {
                        return f._itFl.filter(function(a) {
                            return a.uploaded;
                        });
                    },
                    getFileList: function(toJson, customKey) {
                        return f.files.list(toJson, customKey, true);
                    },
					updateFileList: function() {
						f.set('listInput', null);
						
						return true;
					},
                    setOption: function(option, value) {
                        n[option] = value;

                        return true;
                    },
                    findFile: function(html) {
                        return f.files.find(html);
                    },
                    add: function(data, type, name) {
                        if (!f.isUploadMode())
                            return false;
						
                        var blob;
						if (data instanceof Blob) {
							blob = data;
						} else {
							var dataURI = /data:[a-z]+\/[a-z]+\;base64\,/.test(data) ? data : 'data:' + type + ';base64,' + btoa(data);
							
							blob = f._assets.dataURItoBlob(dataURI, type);
						}
						blob._name = name || f._assets.generateFileName(blob.type.indexOf("/") != -1 ? blob.type.split("/")[1].toString().toLowerCase() : 'File ');
						
						f.onChange(null, [blob]);
                        
                        return true;
					},
                    append: function(files) {
                        return f.files.append(files);
                    },
                    remove: function(item) {
                        item = item.jquery ? f.files.find(item) : item;

                        if (f._itFl.indexOf(item) > -1) {
                            f.files.remove(item);
                            return true;
                        }

                        return false;
                    },
					uploadStart: function() {
						var choosedFiles = this.getChoosedFiles() || [];
						
						if (f.isUploadMode() && choosedFiles.length > 0 && !choosedFiles[0].uploaded) {
							for(var i = 0; i<choosedFiles.length; i++) {
								f.upload.send(choosedFiles[i]);
							}
						}
					},
                    reset: function() {
                        f.reset(true);
                        return true;
                    },
                    disable: function(lock) {
                        f.set('disabled', true);
                        if (lock)
                            f.locked = true;
                        return true;
                    },
                    enable: function() {
                        f.set('disabled', false);
                        f.locked = false;
                        return true;
                    },
                    destroy: function() {
                        f.destroy();
                        return true;
                    },
                    isEmpty: function() {
                        return f._itFl.length == 0; 
                    },
                    isDisabled: function() {
                        return f.disabled;
                    },
                    isRendered: function() {
                        return f.rendered;
                    },
                    assets: f._assets,
                    getPluginMode: function() {
                        if (f.isDefaultMode())
                            return 'default';

                        if (f.isAddMoreMode())
                            return 'addMore';

                        if (f.isUploadMode())
                            return 'upload';
                    }
                });
            }
            
            // initialize the plugin
			f.init();
            
			return this;
		});
    };
	
	$.fileuploader = {
        getInstance: function(input) {
            var $input = input.prop ? input : $(input);

            return $input.prop('FileUploader');
        }
    };
	
	$.fn.fileuploader.defaults = {
        limit: null,
        maxSize: null,
        fileMaxSize: null,
        extensions: null,
		changeInput: true,
		inputNameBrackets: true,
        theme: 'default',
        thumbnails: {
			box: '<div class="fileuploader-items">' +
                      '<ul class="fileuploader-items-list"></ul>' +
                  '</div>',
			boxAppendTo: null,
			item: '<li class="fileuploader-item">' +
                       '<div class="columns">' +
                           '<div class="column-thumbnail">${image}<span class="fileuploader-action-popup"></span></div>' +
                           '<div class="column-title">' +
                               '<div title="${name}">${name}</div>' +
                               '<span>${size2}</span>' +
                           '</div>' +
                           '<div class="column-actions">' +
                               '<a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i></i></a>' +
                           '</div>' +
                       '</div>' +
                       '<div class="progress-bar2">${progressBar}<span></span></div>' +
                   '</li>',
            item2: '<li class="fileuploader-item">' +
                        '<div class="columns">' +
                            '<div class="column-thumbnail">${image}<span class="fileuploader-action-popup"></span></div>' +
                            '<a href="${file}" target="_blank">' +
                                '<div class="column-title">' +
                                    '<div title="${name}">${name}</div>' +
                                    '<span>${size2}</span>' +
                                '</div>' +
                            '</a>' +
                            '<div class="column-actions">' +
                                '<a href="${file}" class="fileuploader-action fileuploader-action-download" title="${captions.download}" download><i></i></a>' +
                                '<a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i></i></a>' +
                            '</div>' +
                        '</div>' +
                    '</li>',
            popup: {
                template: function(data) { return '<div class="fileuploader-popup">' +
                    '<div class="fileuploader-popup-preview">' +
                        '<div class="node ${format}">${reader.node}</div>' +
                        '<div class="tools">' +
                            '<ul>' +
                                '<li>' +
                                    '<span>${captions.name}:</span>' +
                                    '<h5>${name}</h5>' +
                                '</li>' +
                                '<li>' +
                                    '<span>${captions.type}:</span>' +
                                    '<h5>${extension.toUpperCase()}</h5>' +
                                '</li>' +
                                '<li>' +
                                    '<span>${captions.size}:</span>' +
                                    '<h5>${size2}</h5>' +
                                '</li>' +
                                (data.reader && data.reader.width ? '<li>' +
                                    '<span>${captions.dimensions}:</span>' +
                                    '<h5>${reader.width}x${reader.height}px</h5>' +
                                '</li>' : ''
								) +
								(data.reader && data.reader.duration ? '<li>' +
                                    '<span>${captions.duration}:</span>' +
                                    '<h5>${reader.duration2}</h5>' +
                                '</li>' : ''
								) +
                                '<li class="separator"></li>' +
                                (data.format == 'image' && data.reader.src && data.editor ? '<li>' +
                                    '<a data-action="crop">' +
                                        '<i></i>' +
                                        '<span>${captions.crop}</span>' +
                                    '</a>' +
                                '</li>' +
                                '<li>' +
                                    '<a data-action="rotate-cw">' +
                                        '<i></i>' +
                                        '<span>${captions.rotate}</span>' +
                                    '</a>' +
                                '</li>' : ''
								) +
                                '<li>' +
                                    '<a data-action="remove">' +
                                        '<i></i>' +
                                        '<span>${captions.remove}</span>' +
                                    '</a>' +
                                '</li>' +
                            '</ul>' +
                            '<div class="buttons">' +
                                '<a class="fileuploader-popup-button" data-action="cancel">${captions.cancel}</a>' +
                                '<a class="fileuploader-popup-button button-success" data-action="save">${captions.confirm}</a>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>'; },
                onShow: function(item) {
                    item.popup.html.on('click', '[data-action="crop"]', function(e) {
						if (item.editor)
                        	item.editor.cropper();
                    }).on('click', '[data-action="rotate-cw"]', function(e) {
						if (item.editor)
                        	item.editor.rotate();
                    }).on('click', '[data-action="remove"]', function(e) {
                        item.popup.close();
                        item.remove();
                    }).on('click', '[data-action="cancel"]', function(e) {
                        item.popup.close();
                    }).on('click', '[data-action="save"]', function(e) {
						if (item.editor)
                        	item.editor.save();
						if (item.popup.close)
							item.popup.close();
                    });
                },
                onHide: function(item) {
                    var popup = item.popup.html;
                    
                    popup.fadeOut(200, function() {
                        popup.remove();
                    });
                }
            },
			itemPrepend: false,
			removeConfirmation: true,
			startImageRenderer: true,
			synchronImages: true,
			canvasImage: true,
			_selectors: {
				list: '.fileuploader-items-list',
				item: '.fileuploader-item',
				start: '.fileuploader-action-start',
				retry: '.fileuploader-action-retry',
				remove: '.fileuploader-action-remove',
				sorter: '.fileuploader-action-sort',
                popup: '.fileuploader-popup',
                popup_open: '.fileuploader-action-popup'
			},
        	beforeShow: null,
			onItemShow: null,
            onItemRemove: function(html) {
                html.children().animate({'opacity': 0}, 200, function() {
                    setTimeout(function() {
                        html.slideUp(200, function() {
                            html.remove();
                        });
                    }, 100);
                });
            },
			onImageLoaded: null
		},
		editor: false,
		sorter: false,
        files: null,
        upload: null,
        dragDrop: true,
        addMore: false,
        skipFileNameCheck: false,
        clipboardPaste: true,
        listInput: true,
        enableApi: false,
		listeners: null,
		onSupportError: null,
        beforeRender: null,
        afterRender: null,
        beforeSelect: null,
        onFilesCheck: null,
        onFileRead: null,
        onSelect: null,
		afterSelect: null,
        onListInput: null,
        onRemove: null,
        onEmpty: null,
        dialogs: {
            alert: function(text) {
                return alert(text);
            },
            confirm: function(text, callback) {
                confirm(text) ? callback() : null;
            }
        },
        captions: {
            button: function(options) { return 'Choose ' + (options.limit == 1 ? 'File' : 'Files'); },
            feedback: function(options) { return 'Choose ' + (options.limit == 1 ? 'file' : 'files') + ' to upload'; },
            feedback2: function(options) { return options.length + ' ' + (options.length > 1 ? ' files were' : ' file was') + ' chosen'; },
			confirm: 'Confirm',
            cancel: 'Cancel',
			name: 'Name',
			type: 'Type',
			size: 'Size',
			dimensions: 'Dimensions',
			duration: 'Duration',
            crop: 'Crop',
            rotate: 'Rotate',
			sort: 'Sort',
            download: 'Download',
            remove: 'Remove',
            drop: 'Drop the files here to Upload',
            paste: '<div class="fileuploader-pending-loader"><div class="left-half" style="animation-duration: ${ms}s"></div><div class="spinner" style="animation-duration: ${ms}s"></div><div class="right-half" style="animation-duration: ${ms}s"></div></div> Pasting a file, click here to cancel.',
            removeConfirmation: 'Are you sure you want to remove this file?',
            errors: {
                filesLimit: 'Only ${limit} files are allowed to be uploaded.',
                filesType: 'Only ${extensions} files are allowed to be uploaded.',
                fileSize: '${name} is too large! Please choose a file up to ${fileMaxSize}MB.',
                filesSizeAll: 'Files that you chose are too large! Please upload files up to ${maxSize} MB.',
                fileName: 'File with the name ${name} is already selected.',
                folderUpload: 'You are not allowed to upload folders.'
            }
        }
	}
})(jQuery);
/**
 * FileUploader
 * Copyright (c) 2017 Innostudio.de
 * Website: http://innostudio.de/fileuploader/
 * Version: 1.3 (21-Sep-2017)
 * Requires: jQuery v1.7.1 or later
 * License: https://innostudio.de/fileuploader/documentation/#license
 */
!function($){"use strict";$.fn.fileuploader=function(q){return this.each(function(t,r){var s=$(r),p=null,o=null,l=null,sl=[],n=$.extend(!0,{},$.fn.fileuploader.defaults,q),f={init:function(){return s.closest(".fileuploader").length||s.wrap('<div class="fileuploader"></div>'),p=s.closest(".fileuploader"),f.set("attrOpts"),f.isSupported()?(!n.beforeRender||!$.isFunction(n.beforeRender)||!1!==n.beforeRender(p,s))&&(f.redesign(),n.files&&f.files.append(n.files),f.rendered=!0,n.afterRender&&$.isFunction(n.afterRender)&&n.afterRender(l,p,o,s),void(f.disabled||f.bindUnbindEvents(!0))):(n.onSupportError&&$.isFunction(n.onSupportError)&&n.onSupportError(p,s),!1)},bindUnbindEvents:function(e){e&&f.bindUnbindEvents(!1),s[e?"on":"off"](f._assets.getAllEvents(),f.onEvent),n.changeInput&&o!==s&&o[e?"on":"off"]("click",f.clickHandler),f.isUploadMode()&&n.dragDrop&&n.dragDrop.container.length&&(n.dragDrop.container[e?"on":"off"]("drag dragstart dragend dragover dragenter dragleave drop",function(e){e.preventDefault()}),n.dragDrop.container[e?"on":"off"]("drop",f.dragDrop.onDrop),n.dragDrop.container[e?"on":"off"]("dragover",f.dragDrop.onDragEnter),n.dragDrop.container[e?"on":"off"]("dragleave",f.dragDrop.onDragLeave)),f.isUploadMode()&&n.clipboardPaste&&$(window)[e?"on":"off"]("paste",f.clipboard.paste),n.sorter&&n.thumbnails&&n.thumbnails._selectors.sorter&&f.sorter[e?"init":"destroy"](),s.closest("form")[e?"on":"off"]("reset",f.reset)},redesign:function(){if(o=s,n.theme&&p.addClass("fileuploader-theme-"+n.theme),n.changeInput){switch((typeof n.changeInput).toLowerCase()){case"boolean":o=$('<div class="fileuploader-input"><div class="fileuploader-input-caption"><span>'+f._assets.textParse(n.captions.feedback)+'</span></div><div class="fileuploader-input-button"><span>'+f._assets.textParse(n.captions.button)+"</span></div></div>");break;case"string":" "!=n.changeInput&&(o=$(f._assets.textParse(n.changeInput,n)));break;case"object":o=$(n.changeInput);break;case"function":o=$(n.changeInput(s,p,n,f._assets.textParse))}s.after(o),s.css({position:"absolute","z-index":"-9999",height:"0",width:"0",padding:"0",margin:"0","line-height":"0",outline:"0",border:"0",opacity:"0"})}n.thumbnails&&f.thumbnails.create(),n.dragDrop&&(n.dragDrop="object"!=typeof n.dragDrop?{container:null}:n.dragDrop,n.dragDrop.container=n.dragDrop.container?$(n.dragDrop.container):o)},clickHandler:function(e){e.preventDefault(),f.clipboard._timer?f.clipboard.clean():s.click()},onEvent:function(e){switch(e.type){case"focus":p&&p.addClass("fileuploader-focused");break;case"blur":p&&p.removeClass("fileuploader-focused");break;case"change":f.onChange.call(this)}n.listeners&&$.isFunction(n.listeners[e.type])&&n.listeners[e.type].call(s,p)},set:function(e,t){switch(e){case"attrOpts":for(var r=["limit","maxSize","fileMaxSize","extensions","changeInput","theme","addMore","listInput","files"],i=0;i<r.length;i++){var a="data-fileuploader-"+r[i];if(f._assets.hasAttr(a))switch(r[i]){case"changeInput":case"addMore":case"listInput":n[r[i]]=["true","false"].indexOf(s.attr(a))>-1?"true"==s.attr(a):s.attr(a);break;case"extensions":n[r[i]]=s.attr(a).replace(/ /g,"").split(",");break;case"files":n[r[i]]=JSON.parse(s.attr(a));break;default:n[r[i]]=s.attr(a)}s.removeAttr(a)}null==s.attr("disabled")&&null==s.attr("readonly")&&0!==n.limit||(f.disabled=!0),(!n.limit||n.limit&&n.limit>=2)&&(s.attr("multiple","multiple"),n.inputNameBrackets&&"[]"!=s.attr("name").slice(-2)&&s.attr("name",s.attr("name")+"[]")),!0===n.listInput&&(n.listInput=$('<input type="hidden" name="fileuploader-list-'+s.attr("name").replace("[]","").split("[").pop().replace("]","")+'">').insertBefore(s)),"string"==typeof n.listInput&&0==$(n.listInput).length&&(n.listInput=$('<input type="hidden" name="'+n.listInput+'">').insertBefore(s)),f.set("disabled",f.disabled),!n.fileMaxSize&&n.maxSize&&(n.fileMaxSize=n.maxSize);break;case"disabled":f.disabled=t,p[f.disabled?"addClass":"removeClass"]("fileuploader-disabled"),s[f.disabled?"attr":"removeAttr"]("disabled","disabled"),f.rendered&&f.bindUnbindEvents(!t);break;case"feedback":t||(t=f._assets.textParse(f._itFl.length>0?n.captions.feedback2:n.captions.feedback,{length:f._itFl.length})),$(!o.is(":file"))&&o.find(".fileuploader-input-caption span").html(t);break;case"input":l=f._assets.copyAllAttributes($('<input type="file">'),s,!0);f.bindUnbindEvents(!1),s.after(s=l).remove(),f.bindUnbindEvents(!0);break;case"prevInput":sl.length>0&&(f.bindUnbindEvents(!1),sl[t].remove(),sl.splice(t,1),s=sl[sl.length-1],f.bindUnbindEvents(!0));break;case"nextInput":var l=f._assets.copyAllAttributes($('<input type="file">'),s);f.bindUnbindEvents(!1),sl.length>0&&0==sl[sl.length-1].get(0).files.length?s=sl[sl.length-1]:(-1==sl.indexOf(s)&&sl.push(s),sl.push(l),s.after(s=l)),f.bindUnbindEvents(!0);break;case"listInput":n.listInput&&n.listInput.val(f.files.list(!0,null,!1,t))}},onChange:function(e,t){var r=s.get(0).files;if(t){if(!t.length)return f.set("input",""),f.files.clear(),!1;r=t}if(f.clipboard._timer&&f.clipboard.clean(),!f.isDefaultMode()||(f.reset(),0!=r.length)){if(n.beforeSelect&&$.isFunction(n.beforeSelect)&&0==n.beforeSelect(r,l,p,o,s))return!1;for(var i=0,a=0;a<r.length;a++){var d=r[a],u=f._itFl[f.files.add(d,"choosed")],c=f.files.check(u,r,0==a);if(!0===c)n.thumbnails&&f.thumbnails.item(u),f.isUploadMode()&&f.upload.prepare(u),n.onSelect&&$.isFunction(n.onSelect)&&n.onSelect(u,l,p,o,s),i++;else if(f.files.remove(u,!0),c[2]||(f.isDefaultMode()&&(f.set("input",""),f.reset(),c[3]=!0),c[1]&&n.dialogs.alert(c[1],u,l,p,o,s)),c[3])break}f.isUploadMode()&&i>0&&f.set("input",""),f.set("feedback",null),f.isAddMoreMode()&&i>0&&f.set("nextInput"),f.set("listInput",null),n.afterSelect&&$.isFunction(n.afterSelect)&&n.afterSelect(l,p,o,s)}},thumbnails:{create:function(){null!=n.thumbnails.beforeShow&&$.isFunction(n.thumbnails.beforeShow)&&n.thumbnails.beforeShow(p,o,s);var e=$(f._assets.textParse(n.thumbnails.box)).appendTo(n.thumbnails.boxAppendTo?n.thumbnails.boxAppendTo:p);l=e.is(n.thumbnails._selectors.list)?e:e.find(n.thumbnails._selectors.list),n.thumbnails._selectors.popup_open&&l.on("click",n.thumbnails._selectors.popup_open,function(e){e.preventDefault();var t=$(this).closest(n.thumbnails._selectors.item),o=f.files.find(t);o&&o.html.hasClass("file-has-popup")&&f.thumbnails.popup(o)}),f.isUploadMode()&&n.thumbnails._selectors.start&&l.on("click",n.thumbnails._selectors.start,function(e){if(e.preventDefault(),f.locked)return!1;var t=$(this).closest(n.thumbnails._selectors.item),o=f.files.find(t);o&&f.upload.send(o,!0)}),f.isUploadMode()&&n.thumbnails._selectors.retry&&l.on("click",n.thumbnails._selectors.retry,function(e){if(e.preventDefault(),f.locked)return!1;var t=$(this).closest(n.thumbnails._selectors.item),o=f.files.find(t);o&&f.upload.retry(o)}),n.thumbnails._selectors.remove&&l.on("click",n.thumbnails._selectors.remove,function(e){if(e.preventDefault(),f.locked)return!1;var t=$(this).closest(n.thumbnails._selectors.item),o=f.files.find(t),r=function(e){f.files.remove(o)};o&&(o.upload&&"successful"!=o.upload.status?f.upload.cancel(o):n.thumbnails.removeConfirmation?n.dialogs.confirm(f._assets.textParse(n.captions.removeConfirmation,o),r):r())})},clear:function(){l&&l.html("")},item:function(e){e.icon=f.thumbnails.generateFileIcon(e.format,e.extension),e.image='<div class="fileuploader-item-image fileuploader-loading"></div>',e.progressBar=f.isUploadMode()?'<div class="fileuploader-progressbar"><div class="bar"></div></div>':"",e.html=$(f._assets.textParse(e.appended&&n.thumbnails.item2?n.thumbnails.item2:n.thumbnails.item,e)),e.progressBar=e.html.find(".fileuploader-progressbar"),e.html.addClass("file-type-"+(e.format?e.format:"no")+" file-ext-"+(e.extension?e.extension:"no")),e.html[n.thumbnails.itemPrepend?"prependTo":"appendTo"](l),f.thumbnails.renderThumbnail(e),e.renderThumbnail=function(t){f.thumbnails.renderThumbnail(e,!0,t)},e.popup={open:function(){f.thumbnails.popup(e)}},null!=n.thumbnails.onItemShow&&$.isFunction(n.thumbnails.onItemShow)&&n.thumbnails.onItemShow(e,l,p,o,s)},generateFileIcon:function(e,t){var o='<div style="${style}" class="fileuploader-item-icon${class}"><i>'+(t||"")+"</i></div>",n=f._assets.textToColor(t);return n&&(f._assets.isBrightColor(n)&&(o=o.replace("${class}"," is-bright-color")),o=o.replace("${style}","background-color: "+n)),o.replace("${style}","").replace("${class}","")},renderThumbnail:function(e,t,r){var i=e.html.find(".fileuploader-item-image"),a=e.data&&e.data.readerSkip,d=function(t){var r=$(t);i.removeClass("fileuploader-no-thumbnail fileuploader-loading").html(r),r.is("img")&&r.attr("draggable","false").on("load error",function(t){"error"==t.type&&u(!0),c(),null!=n.thumbnails.onImageLoaded&&$.isFunction(n.thumbnails.onImageLoaded)&&n.thumbnails.onImageLoaded(e,l,p,o,s)}),r.is("canvas")&&null!=n.thumbnails.onImageLoaded&&$.isFunction(n.thumbnails.onImageLoaded)&&n.thumbnails.onImageLoaded(e,l,p,o,s)},u=function(t){i.addClass("fileuploader-no-thumbnail"),i.removeClass("fileuploader-loading").html(e.icon),t&&null!=n.thumbnails.onImageLoaded&&$.isFunction(n.thumbnails.onImageLoaded)&&n.thumbnails.onImageLoaded(e,l,p,o,s)},c=function(){var t=0;if(e&&f._pfrL.indexOf(e)>-1)for(f._pfrL.splice(f._pfrL.indexOf(e),1);t<f._pfrL.length;){if(f._itFl.indexOf(f._pfrL[t])>-1){f.thumbnails.renderThumbnail(f._pfrL[t],!0);break}f._pfrL.splice(t,1),t++}};if(i.length){if(e.image=i,["image","video","audio","astext"].indexOf(e.format)>-1&&f.isFileReaderSupported()&&!a&&(e.appended||n.thumbnails.startImageRenderer||t)){if(n.thumbnails.synchronImages&&(-1!=f._pfrL.indexOf(e)||t||f._pfrL.push(e),f._pfrL.length>1&&!t))return;var h=function(t,o){var r=t.nodeName&&"img"==t.nodeName.toLocaleLowerCase(),a=r?t.src:t;if(n.thumbnails.canvasImage){var l=document.createElement("canvas"),s=r?t:new Image,p=function(){f.editor.resize(s,l,n.thumbnails.canvasImage.width?n.thumbnails.canvasImage.width:i.width(),n.thumbnails.canvasImage.height?n.thumbnails.canvasImage.height:i.height(),!1,!0),f._assets.isBlankCanvas(l)?u():d(l),c()},h=function(e){u(!0),c(),s=null};if("image"==e.format&&o&&e.reader.node)return s=e.reader.node,p();if(!a)return h();if(r)return p.call(t);s.onload=p,s.onerror=h,e.data&&e.data.readerCrossOrigin&&s.setAttribute("crossOrigin",e.data.readerCrossOrigin),s.src=a}else d(r?t:'<img src="'+a+'">')};return r?h(r):f.files.read(e,function(){var t="image"==e.format||"video"==e.format;e.reader.node&&n.thumbnails.popup&&e.html.addClass("file-has-popup"),e.reader.node&&t?h(e.reader.frame||e.reader.src,!0):(u(t),c())})}u()}else c()},popup:function(e){if(n.thumbnails.popup&&n.thumbnails._selectors.popup){p.find(n.thumbnails._selectors.popup).length&&$.each(f._itFl,function(e,t){t.popup&&t.popup.close&&t.popup.close()});var t=e.popup.html||$(f._assets.textParse(n.thumbnails.popup.template,e)),r=e.popup.html!==t,i=function(){var t=e.popup.html.find(".fileuploader-popup-preview"),o=t.find(".node"),n=t.find(".tools"),r=o.find("> *"),i=t.height()-n.outerHeight(!0);o.css({height:"100%"}),r&&i>r.outerHeight()&&(i=r.outerHeight()),o.css({height:i})},a=function(t){27==(t.which||t.keyCode)&&e.popup&&e.popup.close&&e.popup.close()};t.show().appendTo(p),e.popup.html=t,e.popup.close=function(){e.reader.node&&e.reader.node.pause&&e.reader.node.pause(),$(window).off("keyup",a),$(window).off("resize",i),e.popup.editor&&e.popup.editor.cropper&&e.popup.editor.cropper.hide(),e.popup.html&&n.thumbnails.popup.onHide&&$.isFunction(n.thumbnails.popup.onHide)?n.thumbnails.popup.onHide(e,l,p,o,s):e.popup.html&&e.popup.html.remove(),delete e.popup.close},e.reader.node&&(r&&t.find(".fileuploader-popup-preview .node").html(e.reader.node),e.reader.node.controls=!0,e.reader.node.currentTime=0,e.reader.node.play&&e.reader.node.play()),$(window).on("keyup",a),$(window).on("resize",i),i.call(),setTimeout(function(){i.call()},10),e.editor&&e.popup.editor&&e.popup.editor.hasChanges?(e.popup.editor&&e.popup.editor.rotation&&f.editor.rotate(e,e.editor.rotation||0,!0),e.popup.editor&&e.popup.editor.cropper&&(e.popup.editor.cropper.hide(!0),setTimeout(function(){f.editor.crop(e,e.editor.crop?$.extend({},e.editor.crop):e.popup.editor.cropper.setDefaultData())},100))):e.popup.editor={},n.thumbnails.popup.onShow&&$.isFunction(n.thumbnails.popup.onShow)&&n.thumbnails.popup.onShow(e,l,p,o,s)}}},editor:{rotate:function(e,t,o){if(!(e.popup&&void 0!==e.popup.html)){var n=e.editor.rotation||0;return e.editor.rotation=t||n+90}if(!e.popup.editor.isAnimating){e.popup.editor.isAnimating=!0;var r=e.popup.html.find(".node"),i=r.find("> img"),a={rotation:n=e.popup.editor.rotation||0,scale:e.popup.editor.scale||1};e.popup.editor.cropper&&e.popup.editor.cropper.$template.hide(),e.popup.editor.rotation=o?t:n+90,e.popup.editor.scale=(r.height()/i[[90,270].indexOf(e.popup.editor.rotation)>-1?"width":"height"]()).toFixed(3),i.height()*e.popup.editor.scale>r.width()&&[90,270].indexOf(e.popup.editor.rotation)>-1&&(e.popup.editor.scale=r.width()/i.height()),e.popup.editor.scale>1&&(e.popup.editor.scale=1),$(a).animate({rotation:e.popup.editor.rotation,scale:e.popup.editor.scale},{duration:o?1:300,easing:"swing",step:function(e,t){var o=i.css("-webkit-transform")||i.css("-moz-transform")||i.css("transform")||"none",n=0,r=1,a=t.prop;if("none"!==o){var l=o.split("(")[1].split(")")[0].split(","),s=l[0],p=l[1];n="rotation"==a?e:Math.round(Math.atan2(p,s)*(180/Math.PI)),r="scale"==a?e:Math.round(10*Math.sqrt(s*s+p*p))/10}i.css({"-webkit-transform":"rotate("+n+"deg) scale("+r+")","-moz-transform":"rotate("+n+"deg) scale("+r+")",transform:"rotate("+n+"deg) scale("+r+")"})},always:function(){delete e.popup.editor.isAnimating,e.popup.editor.cropper&&!o&&(e.popup.editor.cropper.setDefaultData(),e.popup.editor.cropper.init("rotation"))}}),e.popup.editor.rotation>=360&&(e.popup.editor.rotation=0),e.popup.editor.rotation!=e.editor.rotation&&(e.popup.editor.hasChanges=!0)}},crop:function(e,t){if(!(e.popup&&void 0!==e.popup.html))return e.editor.crop=t||e.editor.crop;if(e.popup.editor.cropper)t&&(e.popup.editor.cropper.crop=t),e.popup.editor.cropper.init(t);else{var o=e.popup.html.find(".node > img"),r=$('<div class="fileuploader-cropper"><div class="fileuploader-cropper-area"><div class="point point-a"></div><div class="point point-b"></div><div class="point point-c"></div><div class="point point-d"></div><div class="point point-e"></div><div class="point point-f"></div><div class="point point-g"></div><div class="point point-h"></div><div class="area-move"></div><div class="area-image"></div></div></div>'),i=r.find(".fileuploader-cropper-area");e.popup.editor.cropper={$imageEl:o,$template:r,$editor:i,isCropping:!1,crop:t||null,init:function(t){var o=e.popup.editor.cropper,i=o.$imageEl.position(),a=o.$imageEl[0].getBoundingClientRect().width,l=o.$imageEl[0].getBoundingClientRect().height,s=e.popup.editor.rotation&&[90,270].indexOf(e.popup.editor.rotation)>-1?e.popup.editor.scale:1;if(o.hide(),o.crop||o.setDefaultData(),0==a||0==l)return o.hide(!0);o.isCropping||(o.$imageEl.clone().appendTo(o.$template.find(".area-image")),o.$imageEl.parent().append(r)),o.$template.hide().css({left:i.left,top:i.top,width:a,height:l}).fadeIn(150),o.$editor.hide(),clearTimeout(o._editorAnimationTimeout),o._editorAnimationTimeout=setTimeout(function(){if(delete o._editorAnimationTimeout,o.$editor.fadeIn(250),e.editor.crop&&$.isPlainObject(t)&&(o.resize(),o.crop.left=o.crop.left*o.crop.cfWidth*s,o.crop.width=o.crop.width*o.crop.cfWidth*s,o.crop.top=o.crop.top*o.crop.cfHeight*s,o.crop.height=o.crop.height*o.crop.cfHeight*s),(!e.editor.crop||"rotation"==t)&&n.editor.cropper&&n.editor.cropper.ratio&&"resize"!=t){var r=n.editor.cropper.ratio,i=f._assets.ratioToPx(o.crop.width,o.crop.height,r);i&&(o.crop.width=Math.min(o.crop.width,i[0]),o.crop.left=(o.$template.width()-o.crop.width)/2,o.crop.height=Math.min(o.crop.height,i[1]),o.crop.top=(o.$template.height()-o.crop.height)/2)}o.drawPlaceHolder(o.crop)},400),o.isCropping||o.$template.on("drop dragend dragleave dragover dragenter dragstart touchstart touchmove touchend touchcancel",function(e){e.preventDefault()}),n.editor.cropper&&n.editor.cropper.showGrid&&o.$editor.addClass("has-grid"),o.$imageEl.attr("draggable","false"),o.$template.on("mousedown touchstart",o.mousedown),$(window).on("resize",o.resize),o.isCropping=!0,e.popup.editor.hasChanges=!0},setDefaultData:function(){var t=e.popup.editor.cropper,o=t.$imageEl,n=o.width(),r=o.height(),i=e.popup.editor.rotation&&[90,270].indexOf(e.popup.editor.rotation)>-1,a=e.popup.editor.scale||1;return t.crop={left:0,top:0,width:i?r*a:n,height:i?n*a:r,cfWidth:n/t.$imageEl.prop("naturalWidth"),cfHeight:r/t.$imageEl.prop("naturalHeight")},null},hide:function(t){var o=e.popup.editor.cropper;t&&(o.$template.hide(),o.$editor.hide()),o.$imageEl.attr("draggable",""),o.$template.off("mousedown touchstart",o.mousedown),$(window).off("resize",o.resize)},resize:function(t){var o=e.popup.editor.cropper,n=o.$imageEl;n.width()>0&&(t?(o.$template.hide(),clearTimeout(o._resizeTimeout),o._resizeTimeout=setTimeout(function(){delete o._resizeTimeout;var e=n.width()/n.prop("naturalWidth"),t=n.height()/n.prop("naturalHeight");o.crop.left=o.crop.left/o.crop.cfWidth*e,o.crop.width=o.crop.width/o.crop.cfWidth*e,o.crop.top=o.crop.top/o.crop.cfHeight*t,o.crop.height=o.crop.height/o.crop.cfHeight*t,o.crop.cfWidth=e,o.crop.cfHeight=t,o.init("resize")},400)):(o.crop.cfWidth=n.width()/n.prop("naturalWidth"),o.crop.cfHeight=n.height()/n.prop("naturalHeight")))},drawPlaceHolder:function(t){var o=e.popup.editor.cropper,n=e.popup.editor.rotation||0,r=e.popup.editor.scale||1,i=[0,0];t&&(t=$.extend({},t),n&&(i=[180==n||270==n?-100:0,90==n||180==n?-100:0]),o.$editor.css(t),o.$editor.find(".area-image img").removeAttr("style").css({width:o.$imageEl.width(),height:o.$imageEl.height(),left:-1*o.$editor.position().left,top:-1*o.$editor.position().top,"-webkit-transform":"rotate("+n+"deg) scale("+r+") translateX("+i[0]+"%) translateY("+i[1]+"%)","-moz-transform":"rotate("+n+"deg) scale("+r+") translateX("+i[0]+"%) translateY("+i[1]+"%)",transform:"rotate("+n+"deg) scale("+r+") translateX("+i[0]+"%) translateY("+i[1]+"%)"}))},mousedown:function(t){var o=t.originalEvent.touches&&t.originalEvent.touches[0]?"touchstart":"mousedown",n=$(t.target),r=e.popup.editor.cropper,i={x:("mousedown"==o?t.pageX:t.originalEvent.touches[0].pageX)-r.$template.offset().left,y:("mousedown"==o?t.pageY:t.originalEvent.touches[0].pageY)-r.$template.offset().top},a=function(){r.pointData={el:n,x:i.x,y:i.y,xEditor:i.x-r.crop.left,yEditor:i.y-r.crop.top,left:r.crop.left,top:r.crop.top,width:r.crop.width,height:r.crop.height},n.is(".area-move")&&(r.isMoving=!0),n.is(".point")&&(r.isResizing=!0),(r.isMoving||r.isResizing)&&(r.$editor.addClass("moving"),$("body").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}),$(window).on("mousemove touchmove",r.mousemove))};"mousedown"==o&&a(),"touchstart"==o&&(r.isTouchLongPress=!0,setTimeout(function(){r.isTouchLongPress&&(delete r.isTouchLongPress,a())},500)),$(window).on("mouseup touchend",r.mouseup)},mousemove:function(t){var o=t.originalEvent.touches&&t.originalEvent.touches[0]?"touchstart":"mousedown",r=($(t.target),e.popup.editor.cropper),i={x:("mousedown"==o?t.pageX:t.originalEvent.touches[0].pageX)-r.$template.offset().left,y:("mousedown"==o?t.pageY:t.originalEvent.touches[0].pageY)-r.$template.offset().top};if(r.isMoving){var a=i.x-r.pointData.xEditor,l=i.y-r.pointData.yEditor;a+r.crop.width>r.$template.width()&&(a=r.$template.width()-r.crop.width),a<0&&(a=0),l+r.crop.height>r.$template.height()&&(l=r.$template.height()-r.crop.height),l<0&&(l=0),r.crop.left=a,r.crop.top=l}if(r.isResizing){var s,p=r.pointData.el.attr("class").substr("point point-".length),d=r.crop.left+r.crop.width,u=r.crop.top+r.crop.height,c=(n.editor.cropper&&n.editor.cropper.minWidth||0)*r.crop.cfWidth,h=(n.editor.cropper&&n.editor.cropper.minHeight||0)*r.crop.cfHeight,m=n.editor.cropper?n.editor.cropper.ratio:null;if(c>r.$template.width()&&(c=r.$template.width()),h>r.$template.height()&&(h=r.$template.height()),("a"==p||"b"==p||"c"==p)&&!s&&(r.crop.top=i.y,r.crop.top<0&&(r.crop.top=0),r.crop.height=u-r.crop.top,r.crop.top>r.crop.top+r.crop.height&&(r.crop.top=u,r.crop.height=0),r.crop.height<h&&(r.crop.top=u-h,r.crop.height=h),(s=m?f._assets.ratioToPx(r.crop.width,r.crop.height,m):null)&&(r.crop.width=s[0],"a"!=p&&"b"!=p||(r.crop.left=Math.max(0,r.pointData.left+(r.pointData.width-r.crop.width)/("b"==p?2:1))),r.crop.left+r.crop.width>r.$template.width()))){g=r.$template.width()-r.crop.left;r.crop.width=g,r.crop.height=g/s[2]*s[3],r.crop.top=u-r.crop.height}if(("e"==p||"f"==p||"g"==p)&&!s&&(r.crop.height=i.y-r.crop.top,r.crop.height+r.crop.top>r.$template.height()&&(r.crop.height=r.$template.height()-r.crop.top),r.crop.height<h&&(r.crop.height=h),(s=m?f._assets.ratioToPx(r.crop.width,r.crop.height,m):null)&&(r.crop.width=s[0],"f"!=p&&"g"!=p||(r.crop.left=Math.max(0,r.pointData.left+(r.pointData.width-r.crop.width)/("f"==p?2:1))),r.crop.left+r.crop.width>r.$template.width()))){var g=r.$template.width()-r.crop.left;r.crop.width=g,r.crop.height=g/s[2]*s[3]}if(("c"==p||"d"==p||"e"==p)&&!s&&(r.crop.width=i.x-r.crop.left,r.crop.width+r.crop.left>r.$template.width()&&(r.crop.width=r.$template.width()-r.crop.left),r.crop.width<c&&(r.crop.width=c),(s=m?f._assets.ratioToPx(r.crop.width,r.crop.height,m):null)&&(r.crop.height=s[1],"c"!=p&&"d"!=p||(r.crop.top=Math.max(0,r.pointData.top+(r.pointData.height-r.crop.height)/("d"==p?2:1))),r.crop.top+r.crop.height>r.$template.height()))){v=r.$template.height()-r.crop.top;r.crop.height=v,r.crop.width=v/s[3]*s[2]}if(("a"==p||"g"==p||"h"==p)&&!s&&(r.crop.left=i.x,r.crop.left>r.$template.width()&&(r.crop.left=r.$template.width()),r.crop.left<0&&(r.crop.left=0),r.crop.width=d-r.crop.left,r.crop.left>r.crop.left+r.crop.width&&(r.crop.left=d,r.crop.width=0),r.crop.width<c&&(r.crop.left=d-c,r.crop.width=c),(s=m?f._assets.ratioToPx(r.crop.width,r.crop.height,m):null)&&(r.crop.height=s[1],"a"!=p&&"h"!=p||(r.crop.top=Math.max(0,r.pointData.top+(r.pointData.height-r.crop.height)/("h"==p?2:1))),r.crop.top+r.crop.height>r.$template.height()))){var v=r.$template.height()-r.crop.top;r.crop.height=v,r.crop.width=v/s[3]*s[2],r.crop.left=d-r.crop.width}}r.drawPlaceHolder(r.crop)},mouseup:function(t){var o=e.popup.editor.cropper;0!=o.$editor.width()&&0!=o.$editor.height()||o.init(o.setDefaultData()),delete o.isTouchLongPress,delete o.isMoving,delete o.isResizing,o.$editor.removeClass("moving"),$("body").css({"-webkit-user-select":"","-moz-user-select":"","-ms-user-select":"","user-select":""}),$(window).off("mousemove touchmove",o.mousemove),$(window).off("mouseup touchend",o.mouseup)}},e.popup.editor.cropper.init()}},resize:function(e,t,o,n,r,i){var a=t.getContext("2d"),o=!o&&n?n*e.width/e.height:o,n=!n&&o?o*e.height/e.width:n,l=e.width/e.height,s=l>=1?o:n*l,p=l<1?n:o/l;i&&s<o&&(p*=o/s,s=o),i&&p<n&&(s*=n/p,p=n);var d=Math.ceil(Math.log(e.width/s)/Math.log(2));if(t.width=s,t.height=p,e.width<t.width||e.height<t.height||d<2){i||(t.width=Math.min(e.width,t.width),t.height=Math.min(e.height,t.height));var u=e.width<t.width?(t.width-e.width)/2:0,c=e.height<t.height?(t.height-e.height)/2:0;r||(a.fillStyle="#fff",a.fillRect(0,0,t.width,t.height)),a.drawImage(e,u,c,Math.min(e.width,t.width),Math.min(e.height,t.height))}else{var f=document.createElement("canvas"),h=f.getContext("2d"),m=2;for(f.width=e.width/m,f.height=e.height/m,h.fillStyle="#fff",h.fillRect(0,0,f.width,f.height),h.drawImage(e,0,0,e.width/2,e.height/2);d>2;){var g=m+2,v=e.width/m,b=e.height/m;v>f.width&&(v=f.width),b>f.height&&(b=f.height),h.drawImage(f,0,0,v,b,0,0,e.width/g,e.height/g),m=g,d--}var v=e.width/m,b=e.height/m;v>f.width&&(v=f.width),b>f.height&&(b=f.height),a.drawImage(f,0,0,v,b,0,0,s,p),f=h=null}a=null},save:function(e,t,r,i,a){var d=e.popup&&void 0!==e.popup.html;if(d){if(!e.popup.editor.hasChanges)return;var u=e.popup.editor.scale||1;e.editor.rotation=e.popup.editor.rotation||0,e.popup.editor.cropper&&(e.editor.crop=e.popup.editor.cropper.crop,e.editor.crop.width=e.editor.crop.width/e.popup.editor.cropper.crop.cfWidth/u,e.editor.crop.left=e.editor.crop.left/e.popup.editor.cropper.crop.cfWidth/u,e.editor.crop.height=e.editor.crop.height/e.popup.editor.cropper.crop.cfHeight/u,e.editor.crop.top=e.editor.crop.top/e.popup.editor.cropper.crop.cfHeight/u)}var c=document.createElement("canvas"),h=c.getContext("2d"),m=e.reader.node,g=[0,180];if(c.width=m.naturalWidth,c.height=m.naturalHeight,h.drawImage(m,0,0),void 0!==e.editor.rotation){c.width=g.indexOf(e.editor.rotation)>-1?m.naturalWidth:m.naturalHeight,c.height=g.indexOf(e.editor.rotation)>-1?m.naturalHeight:m.naturalWidth;var v=e.editor.rotation*Math.PI/180,b=.5*c.width,w=.5*c.height;h.clearRect(0,0,c.width,c.height),h.translate(b,w),h.rotate(v),h.translate(.5*-m.naturalWidth,.5*-m.naturalHeight),h.drawImage(m,0,0),h.setTransform(1,0,0,1,0,0)}if(e.editor.crop){var x=h.getImageData(e.editor.crop.left,e.editor.crop.top,e.editor.crop.width,e.editor.crop.height);c.width=e.editor.crop.width,c.height=e.editor.crop.height,h.putImageData(x,0,0)}var $=r||e.type||"image/jpeg",_=n.editor.quality||90,y=c.toDataURL($,_/100),k=function(r,u){var c=t?f._assets.dataURItoBlob(r,$):r;d&&!a&&f.thumbnails.renderThumbnail(e,!0,u||r),i&&i(c,e,l,p,o,s),null!=n.editor.onSave&&"function"==typeof n.editor.onSave&&n.editor.onSave(c,e,l,p,o,s),f.set("listInput",null)};if(n.editor.maxWidth||n.editor.maxHeight){var F=new Image;F.src=y,F.onload=function(){var e=document.createElement("canvas");f.editor.resize(F,e,n.editor.maxWidth,n.editor.maxHeight,!0,!1),y=e.toDataURL($,_/100),c=h=e=null,k(y,F)}}else c=h=null,k(y)}},sorter:{init:function(){p.on("mousedown touchstart",n.thumbnails._selectors.sorter,f.sorter.mousedown)},destroy:function(){p.off("mousedown touchstart",n.thumbnails._selectors.sorter,f.sorter.mousedown)},prevent:function(e){if(!0===e)return"click drop dragend dragleave dragover dragenter dragstart touchstart touchmove touchend touchcancel";e.preventDefault()},mousedown:function(e){var t=e.originalEvent.touches&&e.originalEvent.touches[0]?"touchstart":"mousedown",o=$(e.target),r=o.closest(n.thumbnails._selectors.item),i=f.files.find(r),a={x:"mousedown"!=t&&r.length?e.originalEvent.touches[0].pageX:e.pageX,y:"mousedown"!=t&&r.length?e.originalEvent.touches[0].pageY:e.pageY},s=function(){f.sorter.sort={el:o,item:i,items:l.find(n.thumbnails._selectors.item),x:a.x,y:a.y,xItem:a.x-r.offset().left,yItem:a.y-r.offset().top,left:r.position().left,top:r.position().top,width:r.outerWidth(),height:r.outerHeight(),placeholder:n.sorter.placeholder?$(n.sorter.placeholder):i.html.clone().addClass("fileuploader-sorter-placeholder").html("")},$("body").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}),$(window).on("mousemove touchmove",f.sorter.mousemove)};f.sorter.sort&&f.sorter.mouseup(),i&&(n.sorter.selectorExclude&&(o.is(n.sorter.selectorExclude)||o.closest(n.sorter.selectorExclude).length)||(p.on(f.sorter.prevent(!0),n.thumbnails._selectors.sorter,f.sorter.prevent),"mousedown"==t&&s(),"touchstart"==t&&(f.sorter.isTouchLongPress=!0,setTimeout(function(){f.sorter.isTouchLongPress&&(delete f.sorter.isTouchLongPress,s())},500)),$(window).on("mouseup touchend",f.sorter.mouseup)))},findItemAtPos:function(e){var t=f.sorter.sort,o=null;return t.items.not(t.item.html).each(function(t,n){var r=$(n);if(e.x>r.offset().left&&e.x<r.offset().left+r.outerWidth()&&e.y>r.offset().top&&e.y<r.offset().top+r.outerHeight())return o=r,!1}),o},mousemove:function(e){var t=e.originalEvent.touches&&e.originalEvent.touches[0]?"touchstart":"mousedown",o=f.sorter.sort,r=o.item,i=l.find(n.thumbnails._selectors.item),a=$(n.sorter.scrollContainer||window),s={left:a.scrollLeft(),top:a.scrollTop()},p={x:"mousedown"==t?e.pageX:e.originalEvent.touches[0].pageX,y:"mousedown"==t?e.pageY:e.originalEvent.touches[0].pageY},d=p.x-o.xItem-s.left,u=p.y-o.yItem-s.top;d+o.xItem>a.width()&&(d=a.width()-o.xItem),d<0-o.xItem&&(d=0-o.xItem),u+o.yItem>a.height()&&(u=a.height()-o.yItem),u<0-o.yItem&&(u=0-o.yItem),r.html.addClass("sorting").css({position:"fixed",left:d,top:u,width:f.sorter.sort.width,height:f.sorter.sort.height}),l.find(o.placeholder).length||r.html.after(o.placeholder),o.placeholder.css({width:f.sorter.sort.width,height:f.sorter.sort.height});var c=f.sorter.findItemAtPos({x:d+o.xItem+s.left,y:u+o.yItem+s.top});if(c){var h=o.placeholder.offset().left!=c.offset().left,m=o.placeholder.offset().top!=c.offset().top;if(f.sorter.sort.lastHover&&f.sorter.sort.lastHover.el==c[0]){if(m&&"before"==f.sorter.sort.lastHover.direction&&p.y<f.sorter.sort.lastHover.y)return;if(m&&"after"==f.sorter.sort.lastHover.direction&&p.y>f.sorter.sort.lastHover.y)return;if(h&&"before"==f.sorter.sort.lastHover.direction&&p.x<f.sorter.sort.lastHover.x)return;if(h&&"after"==f.sorter.sort.lastHover.direction&&p.x>f.sorter.sort.lastHover.x)return}var g=i.index(r.html)>i.index(c)?"before":"after";c[g](o.placeholder),c[g](r.html),f.sorter.sort.lastHover={el:c[0],x:p.x,y:p.y,direction:g},a.scrollLeft(s.left),a.scrollTop(s.top)}},mouseup:function(){var e=f.sorter.sort,t=e.item;$("body").css({"-webkit-user-select":"","-moz-user-select":"","-ms-user-select":"","user-select":""}),t.html.removeClass("sorting").css({position:"",left:"",top:"",width:"",height:""}),e.placeholder.remove(),delete f.sorter.sort,p.off(f.sorter.prevent(!0),n.thumbnails._selectors.sorter,f.sorter.prevent),$(window).off("mousemove touchmove",f.sorter.mousemove),$(window).off("mouseup touchend",f.sorter.mouseup),f.sorter.save()},save:function(e){var t=0,r=[],i=f.rendered&&e;$.each(e?f._itFl:l.children(),function(e,o){var n=o.file?o:f.files.find($(o));if(n){if(n.upload&&!n.uploaded)return i=!1,!1;f.rendered&&n.index!=t&&(i=!0),n.index=t,r.push(n),t++}}),i&&r.length==f._itFl.length&&(f._itFl=r),e||f.set("listInput","ignoreSorter"),i&&null!=n.sorter.onSort&&"function"==typeof n.sorter.onSort&&n.sorter.onSort(r,l,p,o,s)}},upload:{prepare:function(e,t){e.upload={url:n.upload.url,data:n.upload.data||{},formData:new FormData,type:n.upload.type||"POST",enctype:n.upload.enctype||"multipart/form-data",cache:!1,contentType:!1,processData:!1,status:null,send:function(){f.upload.send(e,!0)},cancel:function(t){f.upload.cancel(e,t)},retry:function(){f.upload.retry(e)}},e.upload.formData.append(s.attr("name"),e.file,!!e.name&&e.name),(n.upload.start||t)&&f.upload.send(e,t)},send:function(e,t){if(e.upload){var r=function(t){e.html.removeClass("upload-pending upload-loading upload-cancelled upload-failed upload-success").addClass("upload-"+(t||e.upload.status))},i=function(){var t=0;if(f._pfuL.length>0)for(f._pfuL.indexOf(e)>-1&&f._pfuL.splice(f._pfuL.indexOf(e),1);t<f._pfuL.length;){if(f._itFl.indexOf(f._pfuL[t])>-1&&f._pfuL[t].upload&&!f._pfuL[t].upload.$ajax){f.upload.send(f._pfuL[t],!0);break}f._pfuL.splice(t,1),t++}};if(n.upload.synchron&&!e.upload.chunk)if(e.upload.status="pending",e.html&&r(),t)f._pfuL.indexOf(e)>-1&&f._pfuL.splice(f._pfuL.indexOf(e),1);else if(-1==f._pfuL.indexOf(e)&&f._pfuL.push(e),f._pfuL.length>1)return;if(n.upload.chunk&&e.file.slice){var a=1e6*n.upload.chunk,d=Math.ceil(e.size/a,a);if(d>1&&!e.upload.chunk&&(e.upload.chunk={name:e.name,size:e.file.size,type:e.file.type,chunkSize:a,temp_name:e.name,loaded:0,total:d,i:-1}),e.upload.chunk)if(e.upload.chunk.i++,delete e.upload.chunk.isFirst,delete e.upload.chunk.isLast,0==e.upload.chunk.i&&(e.upload.chunk.isFirst=!0),e.upload.chunk.i==e.upload.chunk.total-1&&(e.upload.chunk.isLast=!0),e.upload.chunk.i<=e.upload.chunk.total-1){var u=e.upload.chunk.i*e.upload.chunk.chunkSize,c=e.file.slice(u,u+e.upload.chunk.chunkSize);e.upload.data=n.upload.data||{},e.upload.formData=new FormData,e.upload.formData.append(s.attr("name"),c),e.upload.data._chunkedd=JSON.stringify(e.upload.chunk)}else delete e.upload.chunk}if(n.upload.beforeSend&&$.isFunction(n.upload.beforeSend)&&!1===n.upload.beforeSend(e,l,p,o,s))return delete e.upload.chunk,r(),void i();if(p.addClass("fileuploader-is-uploading"),e.upload.$ajax&&e.upload.$ajax.abort(),delete e.upload.$ajax,delete e.upload.send,e.upload.status="loading",e.html&&(n.thumbnails._selectors.start&&e.html.find(n.thumbnails._selectors.start).remove(),r()),e.upload.data)for(var h in e.upload.data)e.upload.formData.append(h,e.upload.data[h]);e.upload.data=e.upload.formData,e.upload.xhr=function(){var t=$.ajaxSettings.xhr(),o=e.upload.chunk&&e.upload.chunk.xhrStartedAt?e.upload.chunk.xhrStartedAt:new Date;return t.upload&&t.upload.addEventListener("progress",function(t){e.upload.$ajax&&(e.upload.$ajax.total=e.upload.chunk?e.upload.chunk.size:t.total,e.upload.$ajax.xhrStartedAt=o),f.upload.progressHandling(t,e,o)},!1),t},e.upload.complete=function(t,r){if(e.upload.chunk&&!e.upload.chunk.isLast&&"success"==r)return f.upload.send(e);i();var a=!0;$.each(f._itFl,function(e,t){t.upload&&t.upload.$ajax&&(a=!1)}),a&&(p.removeClass("fileuploader-is-uploading"),null!=n.upload.onComplete&&"function"==typeof n.upload.onComplete&&n.upload.onComplete(l,p,o,s,t,r))},e.upload.success=function(t,i,a){if(!e.upload.chunk||e.upload.chunk.isLast)delete e.upload.chunk,f.upload.progressHandling(null,e,e.upload.$ajax.xhrStartedAt,!0),e.uploaded=!0,delete e.upload,e.upload={status:"successful",resend:function(){f.upload.retry(e)}},e.html&&r(),null!=n.upload.onSuccess&&$.isFunction(n.upload.onSuccess)&&n.upload.onSuccess(t,e,l,p,o,s,i,a),f.set("listInput",null);else try{var d=JSON.parse(t);e.upload.chunk.temp_name=d.fileuploader.temp_name}catch(e){}},e.upload.error=function(t,i,a){e.uploaded=!1,e.upload.status="cancelled"==e.upload.status?e.upload.status:"failed",delete e.upload.$ajax,e.html&&r(),null!=n.upload.onError&&$.isFunction(n.upload.onError)&&n.upload.onError(e,l,p,o,s,t,i,a)},e.upload.$ajax=$.ajax(e.upload)}},cancel:function(e,t){e&&e.upload&&(e.upload.status="cancelled",delete e.upload.chunk,e.upload.$ajax&&e.upload.$ajax.abort(),delete e.upload.$ajax,t||f.files.remove(e))},retry:function(e){e&&e.upload&&(e.html&&n.thumbnails._selectors.retry&&e.html.find(n.thumbnails._selectors.retry).remove(),f.upload.prepare(e,!0))},progressHandling:function(e,t,r,i){if(!e&&i&&t.upload.$ajax&&(e={total:t.upload.$ajax.total,loaded:t.upload.$ajax.total,lengthComputable:!0}),e.lengthComputable){var a=e.loaded+(t.upload.chunk?t.upload.chunk.loaded:0),d=t.upload.chunk?t.upload.chunk.size:e.total,u=Math.round(100*a/d),c=t.upload.chunk&&t.upload.chunk.xhrStartedAt?t.upload.chunk.xhrStartedAt:r,h=((new Date).getTime()-c.getTime())/1e3,m=h?a/h:0,g=Math.max(0,d-a),v=Math.max(0,h?g/m:0),b={loaded:a,loadedInFormat:f._assets.bytesToText(a),total:d,totalInFormat:f._assets.bytesToText(d),percentage:u,secondsElapsed:h,secondsElapsedInFormat:f._assets.secondsToText(h,!0),bytesPerSecond:m,bytesPerSecondInFormat:f._assets.bytesToText(m)+"/s",remainingBytes:g,remainingBytesInFormat:f._assets.bytesToText(g),secondsRemaining:v,secondsRemainingInFormat:f._assets.secondsToText(v,!0)};t.upload.chunk&&(t.upload.chunk.isFirst&&(t.upload.chunk.xhrStartedAt=r),e.loaded!=e.total||t.upload.chunk.isLast||(t.upload.chunk.loaded+=Math.max(e.total,t.upload.chunk.total/t.upload.chunk.chunkSize))),b.percentage>99&&!i&&(b.percentage=99),n.upload.onProgress&&$.isFunction(n.upload.onProgress)&&n.upload.onProgress(b,t,l,p,o,s)}}},dragDrop:{onDragEnter:function(e){clearTimeout(f.dragDrop._timer),n.dragDrop.container.addClass("fileuploader-dragging"),f.set("feedback",f._assets.textParse(n.captions.drop)),null!=n.dragDrop.onDragEnter&&$.isFunction(n.dragDrop.onDragEnter)&&n.dragDrop.onDragEnter(e,l,p,o,s)},onDragLeave:function(e){clearTimeout(f.dragDrop._timer),f.dragDrop._timer=setTimeout(function(e){if(!f.dragDrop._dragLeaveCheck(e))return!1;n.dragDrop.container.removeClass("fileuploader-dragging"),f.set("feedback",null),null!=n.dragDrop.onDragLeave&&$.isFunction(n.dragDrop.onDragLeave)&&n.dragDrop.onDragLeave(e,l,p,o,s)},100,e)},onDrop:function(e){clearTimeout(f.dragDrop._timer),n.dragDrop.container.removeClass("fileuploader-dragging"),f.set("feedback",null),e&&e.originalEvent&&e.originalEvent.dataTransfer&&e.originalEvent.dataTransfer.files&&e.originalEvent.dataTransfer.files.length&&(f.isUploadMode()?f.onChange(e,e.originalEvent.dataTransfer.files):s.prop("files",e.originalEvent.dataTransfer.files)),null!=n.dragDrop.onDrop&&$.isFunction(n.dragDrop.onDrop)&&n.dragDrop.onDrop(e,l,p,o,s)},_dragLeaveCheck:function(e){var t=$(e.currentTarget);return!(!t.is(n.dragDrop.container)&&n.dragDrop.container.find(t).length)}},clipboard:{paste:function(e){if(f._assets.isIntoView(o)&&e.originalEvent.clipboardData&&e.originalEvent.clipboardData.items&&e.originalEvent.clipboardData.items.length){var t=e.originalEvent.clipboardData.items;f.clipboard.clean();for(var r=0;r<t.length;r++)if(-1!==t[r].type.indexOf("image")||-1!==t[r].type.indexOf("text/uri-list")){var i=t[r].getAsFile(),a=n.clipboardPaste>1?n.clipboardPaste:2e3;i&&(i._name=f._assets.generateFileName(-1!=i.type.indexOf("/")?i.type.split("/")[1].toString().toLowerCase():"png","Clipboard "),f.set("feedback",f._assets.textParse(n.captions.paste,{ms:a/1e3})),f.clipboard._timer=setTimeout(function(){f.set("feedback",null),f.onChange(e,[i])},a-2))}}},clean:function(){f.clipboard._timer&&(clearTimeout(f.clipboard._timer),delete f.clipboard._timer,f.set("feedback",null))}},files:{add:function(e,t){var o,r,i=e._name||e.name,a=e.size,l=f._assets.bytesToText(a),p=e.type,d=p?p.split("/",1).toString().toLowerCase():"",u=-1!=i.indexOf(".")?i.split(".").pop().toLowerCase():"",c=i.substr(0,i.length-(-1!=i.indexOf(".")?u.length+1:u.length)),h=e.data||{},e=e.file||e,m=Date.now();return f._itFl.push({name:i,title:c,size:a,size2:l,type:p,format:d,extension:u,data:h,file:e,reader:{read:function(e,t,o){return f.files.read(r,e,t,o)}},id:m,input:"choosed"==t?s:null,html:null,choosed:"choosed"==t,appended:"appended"==t,uploaded:"uploaded"==t}),o=f._itFl.length-1,r=f._itFl[o],r.remove=function(){f.files.remove(r)},n.editor&&"image"==d&&(r.editor={rotate:function(e){f.editor.rotate(r,e)},cropper:function(e){f.editor.crop(r,e)},save:function(e,t,o,n){f.editor.save(r,t,o,e,n)}}),o},read:function(e,t,r,i){if(f.isFileReaderSupported()){var a=new FileReader,d=e.choosed,u=function(){var t=e.reader._callbacks;delete e.reader._callbacks,delete e.reader._FileReader;for(var r=0;r<t.length;r++)$.isFunction(t[r])&&t[r](e,l,p,o,s);n.onFileRead&&$.isFunction(n.onFileRead)&&n.onFileRead(e,l,p,o,s)};if((!e.reader.src&&!e.reader._FileReader||i)&&(e.reader={_FileReader:a,_callbacks:[],read:e.reader.read}),e.reader.src&&!i)return t&&$.isFunction(t)?t(e,l,p,o,s):null;if(t&&e.reader._callbacks&&(e.reader._callbacks.push(t),e.reader._callbacks.length>1))return;if("astext"==e.format)a.onload=function(t){var o=document.createElement("div");e.reader.node=o,e.reader.src=t.target.result,e.reader.length=t.target.result.length,o.innerHTML=e.reader.src.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),u()},a.onerror=function(){u(),e.reader={read:e.reader.read}},d?a.readAsText(e.file):$.ajax({url:e.file,success:function(e){a.onload({target:{result:e}})},error:function(){a.onerror()}});else if("image"==e.format)a.onload=function(t){var o=new Image;e.data&&e.data.readerCrossOrigin&&o.setAttribute("crossOrigin",e.data.readerCrossOrigin),o.src=t.target.result+(i&&!d?(-1==t.target.result.indexOf("?")?"?":"&")+"d="+Date.now():""),o.onload=function(){e.reader.node=o,e.reader.src=o.src,e.reader.width=o.width,e.reader.height=o.height,e.reader.ratio=f._assets.pxToRatio(e.reader.width,e.reader.height),u()},o.onerror=function(){u(),e.reader={read:e.reader.read}}},a.onerror=function(){u(),e.reader={read:e.reader.read}},d?a.readAsDataURL(e.file):a.onload({target:{result:e.file}});else if("video"==e.format||"audio"==e.format){var c,h=document.createElement(e.format),m=h.canPlayType(e.type);URL&&""!==m?(c=d?URL.createObjectURL(e.file):e.file,h.onloadedmetadata=function(){e.reader.node=h,e.reader.src=h.src,e.reader.duration=h.duration,e.reader.duration2=f._assets.secondsToText(h.duration),"video"==e.format&&(e.reader.width=h.videoWidth,e.reader.height=h.videoHeight,e.reader.ratio=f._assets.pxToRatio(e.reader.width,e.reader.height))},h.onerror=function(){u(),e.reader={read:e.reader.read}},h.onloadeddata=function(){if("video"==e.format){var t=document.createElement("canvas"),o=t.getContext("2d");t.width=h.videoWidth,t.height=h.videoHeight,o.drawImage(h,0,0,t.width,t.height),e.reader.frame=f._assets.isBlankCanvas(t)?null:t.toDataURL(),t=o=null}u()},setTimeout(function(){e.data&&e.data.readerCrossOrigin&&h.setAttribute("crossOrigin",e.data.readerCrossOrigin),h.src=c},100)):(u(),e.reader={read:e.reader.read})}else a.onload=function(t){e.reader.src=t.target.result,e.reader.length=t.target.result.length,u()},a.onerror=function(t){u(),e.reader={read:e.reader.read}},d?a[r||"readAsBinaryString"](e.file):u()}else t&&t(e,l,p,o,s);return null},list:function(e,t,r,i){var a=[];return!n.sorter||r||i&&"ignoreSorter"==i||f.sorter.save(!0),$.each(f._itFl,function(o,n){if(n.upload&&!n.uploaded)return!0;var r=n;if((t||e)&&(r=(r.choosed?"0:/":"")+(t&&null!==f.files.getItemAttr(n,t)?f.files.getItemAttr(n,t):n["string"==typeof n.file?"file":"name"])),e&&(r={file:r},n.editor&&(n.editor.crop||n.editor.rotation)&&(r.editor={},n.editor.rotation&&(r.editor.rotation=n.editor.rotation),n.editor.crop&&(r.editor.crop=n.editor.crop)),void 0!==n.index&&(r.index=n.index),n.data&&n.data.listProps))for(var i in n.data.listProps)r[i]=n.data.listProps[i];a.push(r)}),a=n.onListInput&&$.isFunction(n.onListInput)?n.onListInput(a,f._itFl,n.listInput,l,p,o,s):a,e?JSON.stringify(a):a},check:function(e,t,r){var i=["warning",null,!1,!1];if(null!=n.limit&&r&&t.length+f._itFl.length-1>n.limit)return i[1]=f._assets.textParse(n.captions.errors.filesLimit),i[3]=!0,i;if(null!=n.maxSize&&r){a=0;if($.each(f._itFl,function(e,t){a+=t.size}),a-=e.size,$.each(t,function(e,t){a+=t.size}),a>Math.round(1e6*n.maxSize))return i[1]=f._assets.textParse(n.captions.errors.filesSizeAll),i[3]=!0,i}if(null!=n.onFilesCheck&&$.isFunction(n.onFilesCheck)&&r&&!1===n.onFilesCheck(t,n,l,p,o,s))return i[3]=!0,i;if(null!=n.extensions&&-1==$.inArray(e.extension,n.extensions)&&-1==$.inArray(e.type,n.extensions))return i[1]=f._assets.textParse(n.captions.errors.filesType,e),i;if(null!=n.fileMaxSize&&e.size>1e6*n.fileMaxSize)return i[1]=f._assets.textParse(n.captions.errors.fileSize,e),i;if(4096==e.size&&""==e.type)return i[1]=f._assets.textParse(n.captions.errors.folderUpload,e),i;if(!n.skipFileNameCheck){var a=!1;if($.each(f._itFl,function(o,r){if(r!=e&&1==r.choosed&&r.file&&r.name==e.name)return a=!0,r.file.size!=e.size||r.file.type!=e.type||e.file.lastModified&&r.file.lastModified&&r.file.lastModified!=e.file.lastModified||!(t.length>1)?(i[1]=f._assets.textParse(n.captions.errors.fileName,e),i[2]=!1):i[2]=!0,!1}),a)return i}return!0},append:function(e){if((e=$.isArray(e)?e:[e]).length){for(var t,r=0;r<e.length;r++)t=f._itFl[f.files.add(e[r],"appended")],n.thumbnails&&f.thumbnails.item(t);return f.set("feedback",null),f.set("listInput",null),n.afterSelect&&$.isFunction(n.afterSelect)&&n.afterSelect(l,p,o,s),1!=e.length||t}},find:function(e){var t=null;return $.each(f._itFl,function(o,n){if(n.html&&n.html.is(e))return t=n,!1}),t},remove:function(e,t){if(t||!n.onRemove||!$.isFunction(n.onRemove)||!1!==n.onRemove(e,l,p,o,s)){if(e.html&&(n.thumbnails.onItemRemove&&$.isFunction(n.thumbnails.onItemRemove)&&!t?n.thumbnails.onItemRemove(e.html,l,p,o,s):e.html.remove()),e.upload&&e.upload.$ajax&&e.upload.cancel&&e.upload.cancel(!0),e.popup&&e.popup.html&&e.popup.html.remove(),e.reader.src&&(e.reader.node=null,URL.revokeObjectURL(e.reader.src)),e.input){var r=!0;$.each(f._itFl,function(o,n){if(e!=n&&(e.input==n.input||t&&e.input.get(0).files.length>1))return r=!1,!1}),r&&(f.isAddMoreMode()&&sl.length>1?(f.set("nextInput"),sl.splice(sl.indexOf(e.input),1),e.input.remove()):f.set("input",""))}f._pfrL.indexOf(e)>-1&&f._pfrL.splice(f._pfrL.indexOf(e),1),f._pfuL.indexOf(e)>-1&&f._pfuL.splice(f._pfuL.indexOf(e),1),f._itFl.indexOf(e)>-1&&f._itFl.splice(f._itFl.indexOf(e),1),e=null,0==f._itFl.length&&f.reset(),f.set("feedback",null),f.set("listInput",null)}},getItemAttr:function(e,t){var o=null;return e&&(void 0!==e[t]?o=e[t]:e.data&&void 0!==e.data[t]&&(o=e.data[t])),o},clear:function(e){for(var t=0;t<f._itFl.length;){var r=f._itFl[t];e||!r.appended?(r.html&&r.html&&f._itFl[t].html.remove(),r.upload&&r.upload.$ajax&&f.upload.cancel(r),f._itFl.splice(t,1)):t++}f.set("feedback",null),f.set("listInput",null),0==f._itFl.length&&n.onEmpty&&$.isFunction(n.onEmpty)&&n.onEmpty(l,p,o,s)}},reset:function(e){e&&(f.clipboard._timer&&f.clipboard.clean(),$.each(sl,function(e,t){e<sl.length&&t.remove()}),sl=[],f.set("input","")),f._itRl=[],f._pfuL=[],f._pfrL=[],f.files.clear(e)},destroy:function(){f.reset(!0),f.bindUnbindEvents(!1),s.removeAttr("style"),s.insertBefore(".fileuploader"),s.prop("FileUploader",null),p.remove(),p=o=l=null},_assets:{bytesToText:function(e){if(0==e)return"0 Byte";var t=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(1e3));return(e/Math.pow(1e3,o)).toPrecision(3)+" "+t[o]},secondsToText:function(e,t){e=parseInt(Math.round(e),10);var o=Math.floor(e/3600),n=Math.floor((e-3600*o)/60),e=e-3600*o-60*n,r="";return(o>0||!t)&&(r+=(o<10?"0":"")+o+(t?"h ":":")),(n>0||!t)&&(r+=(n<10&&!t?"0":"")+n+(t?"m ":":")),r+=(e<10&&!t?"0":"")+e+(t?"s":"")},pxToRatio:function(e,t){var o=function(e,t){return 0==t?e:o(t,e%t)},n=o(e,t);return[e/n,t/n]},ratioToPx:function(e,t,o){return(o=(o+"").split(":")).length<2?null:[t/o[1]*o[0],e/o[0]*o[1],o[0],o[1]]},hasAttr:function(e,t){var o=(t=t||s).attr(e);return!(!o||void 0===o)},copyAllAttributes:function(e,t){return $.each(t.get(0).attributes,function(){"required"!=this.name&&"type"!=this.name&&e.attr(this.name,this.value)}),t.get(0).FileUploader&&(e.get(0).FileUploader=t.get(0).FileUploader),e},getAllEvents:function(e){var t=[];e=(e=e||s).get?e.get(0):e;for(var o in e)0===o.indexOf("on")&&t.push(o.slice(2));return-1==t.indexOf("change")&&t.push("change"),t.join(" ")},isIntoView:function(e){var t=$(window).scrollTop(),o=t+window.innerHeight,n=e.offset().top,r=n+e.outerHeight();return t<n&&o>r},isBlankCanvas:function(e){var t=document.createElement("canvas"),o=!1;return t.width=e.width,t.height=e.height,o=e.toDataURL()==t.toDataURL(),t=null,o},generateFileName:function(e,t){var o=new Date,n=function(e){return e<10&&(e="0"+e),e},t=t||"",e=e?"."+e:"";return t+o.getFullYear()+"-"+n(o.getMonth()+1)+"-"+n(o.getDate())+" "+n(o.getHours())+"-"+n(o.getMinutes())+"-"+n(o.getSeconds())+e},dataURItoBlob:function(e,t){for(var o=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],r=new ArrayBuffer(o.length),i=new Uint8Array(r),a=0;a<o.length;a++)i[a]=o.charCodeAt(a);var l=new DataView(r);return new Blob([l],{type:t||n})},textParse:function(text,opts,noOptions){switch(opts=noOptions?opts||{}:$.extend({},{limit:n.limit,maxSize:n.maxSize,fileMaxSize:n.fileMaxSize,extensions:n.extensions?n.extensions.join(", "):null,captions:n.captions},opts),typeof text){case"string":text=text.replace(/\$\{(.*?)\}/g,function(match,a){var a=a.replace(/ /g,""),r=void 0!==opts[a]&&null!=opts[a]?opts[a]:"";if(a.indexOf(".")>-1||a.indexOf("[]")>-1){var x=a.substr(0,a.indexOf(".")>-1?a.indexOf("."):a.indexOf("[")>-1?a.indexOf("["):a.length),y=a.substring(x.length);if(opts[x])try{r=eval('opts["'+x+'"]'+y)}catch(e){r=""}}return(r=$.isFunction(r)?f._assets.textParse(r):r)||""});break;case"function":text=f._assets.textParse(text(opts,l,p,o,s,f._assets.textParse),opts,noOptions)}return opts=null,text},textToColor:function(e){if(!e||0==e.length)return!1;for(var t=0,o=0;t<e.length;o=e.charCodeAt(t++)+((o<<5)-o));for(var t=0,n="#";t<3;n+=("00"+(o>>2*t++&255).toString(16)).slice(-2));return n},isBrightColor:function(e){var t=function(e){var t;return e&&e.constructor==Array&&3==e.length?e:(t=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e))?[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])]:(t=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(e))?[2.55*parseFloat(t[1]),2.55*parseFloat(t[2]),2.55*parseFloat(t[3])]:(t=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(e))?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:(t=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(e))?[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]:"undefined"!=typeof colors?colors[$.trim(e).toLowerCase()]:null};return function(e){var o=t(e);return o?.2126*o[0]+.7152*o[1]+.0722*o[2]:null}(e)>194}},isSupported:function(){return s&&s.get(0).files},isFileReaderSupported:function(){return window.File&&window.FileList&&window.FileReader},isDefaultMode:function(){return!n.upload&&!n.addMore},isAddMoreMode:function(){return!n.upload&&n.addMore},isUploadMode:function(){return n.upload},_itFl:[],_pfuL:[],_pfrL:[],disabled:!1,locked:!1,rendered:!1};return n.enableApi&&s.prop("FileUploader",{open:function(){s.trigger("click")},getOptions:function(){return n},getParentEl:function(){return p},getInputEl:function(){return s},getNewInputEl:function(){return o},getListEl:function(){return l},getListInputEl:function(){return n.listInput},getFiles:function(){return f._itFl},getChoosedFiles:function(){return f._itFl.filter(function(e){return e.choosed})},getAppendedFiles:function(){return f._itFl.filter(function(e){return e.appended})},getUploadedFiles:function(){return f._itFl.filter(function(e){return e.uploaded})},getFileList:function(e,t){return f.files.list(e,t,!0)},updateFileList:function(){return f.set("listInput",null),!0},setOption:function(e,t){return n[e]=t,!0},findFile:function(e){return f.files.find(e)},add:function(e,t,o){if(!f.isUploadMode())return!1;var n;if(e instanceof Blob)n=e;else{var r=/data:[a-z]+\/[a-z]+\;base64\,/.test(e)?e:"data:"+t+";base64,"+btoa(e);n=f._assets.dataURItoBlob(r,t)}return n._name=o||f._assets.generateFileName(-1!=n.type.indexOf("/")?n.type.split("/")[1].toString().toLowerCase():"File "),f.onChange(null,[n]),!0},append:function(e){return f.files.append(e)},remove:function(e){return e=e.jquery?f.files.find(e):e,f._itFl.indexOf(e)>-1&&(f.files.remove(e),!0)},uploadStart:function(){var e=this.getChoosedFiles()||[];if(f.isUploadMode()&&e.length>0&&!e[0].uploaded)for(var t=0;t<e.length;t++)f.upload.send(e[t])},reset:function(){return f.reset(!0),!0},disable:function(e){return f.set("disabled",!0),e&&(f.locked=!0),!0},enable:function(){return f.set("disabled",!1),f.locked=!1,!0},destroy:function(){return f.destroy(),!0},isEmpty:function(){return 0==f._itFl.length},isDisabled:function(){return f.disabled},isRendered:function(){return f.rendered},assets:f._assets,getPluginMode:function(){return f.isDefaultMode()?"default":f.isAddMoreMode()?"addMore":f.isUploadMode()?"upload":void 0}}),f.init(),this})},$.fileuploader={getInstance:function(e){return(e.prop?e:$(e)).prop("FileUploader")}},$.fn.fileuploader.defaults={limit:null,maxSize:null,fileMaxSize:null,extensions:null,changeInput:!0,inputNameBrackets:!0,theme:"default",thumbnails:{box:'<div class="fileuploader-items"><ul class="fileuploader-items-list"></ul></div>',boxAppendTo:null,item:'<li class="fileuploader-item"><div class="columns"><div class="column-thumbnail">${image}<span class="fileuploader-action-popup"></span></div><div class="column-title"><div title="${name}">${name}</div><span>${size2}</span></div><div class="column-actions"><a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i></i></a></div></div><div class="progress-bar2">${progressBar}<span></span></div></li>',item2:'<li class="fileuploader-item"><div class="columns"><div class="column-thumbnail">${image}<span class="fileuploader-action-popup"></span></div><a href="${file}" target="_blank"><div class="column-title"><div title="${name}">${name}</div><span>${size2}</span></div></a><div class="column-actions"><a href="${file}" class="fileuploader-action fileuploader-action-download" title="${captions.download}" download><i></i></a><a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i></i></a></div></div></li>',popup:{template:function(e){return'<div class="fileuploader-popup"><div class="fileuploader-popup-preview"><div class="node ${format}">${reader.node}</div><div class="tools"><ul><li><span>${captions.name}:</span><h5>${name}</h5></li><li><span>${captions.type}:</span><h5>${extension.toUpperCase()}</h5></li><li><span>${captions.size}:</span><h5>${size2}</h5></li>'+(e.reader&&e.reader.width?"<li><span>${captions.dimensions}:</span><h5>${reader.width}x${reader.height}px</h5></li>":"")+(e.reader&&e.reader.duration?"<li><span>${captions.duration}:</span><h5>${reader.duration2}</h5></li>":"")+'<li class="separator"></li>'+("image"==e.format&&e.reader.src&&e.editor?'<li><a data-action="crop"><i></i><span>${captions.crop}</span></a></li><li><a data-action="rotate-cw"><i></i><span>${captions.rotate}</span></a></li>':"")+'<li><a data-action="remove"><i></i><span>${captions.remove}</span></a></li></ul><div class="buttons"><a class="fileuploader-popup-button" data-action="cancel">${captions.cancel}</a><a class="fileuploader-popup-button button-success" data-action="save">${captions.confirm}</a></div></div></div></div>'},onShow:function(e){e.popup.html.on("click",'[data-action="crop"]',function(t){e.editor&&e.editor.cropper()}).on("click",'[data-action="rotate-cw"]',function(t){e.editor&&e.editor.rotate()}).on("click",'[data-action="remove"]',function(t){e.popup.close(),e.remove()}).on("click",'[data-action="cancel"]',function(t){e.popup.close()}).on("click",'[data-action="save"]',function(t){e.editor&&e.editor.save(),e.popup.close&&e.popup.close()})},onHide:function(e){var t=e.popup.html;t.fadeOut(200,function(){t.remove()})}},itemPrepend:!1,removeConfirmation:!0,startImageRenderer:!0,synchronImages:!0,canvasImage:!0,_selectors:{list:".fileuploader-items-list",item:".fileuploader-item",start:".fileuploader-action-start",retry:".fileuploader-action-retry",remove:".fileuploader-action-remove",sorter:".fileuploader-action-sort",popup:".fileuploader-popup",popup_open:".fileuploader-action-popup"},beforeShow:null,onItemShow:null,onItemRemove:function(e){e.children().animate({opacity:0},200,function(){setTimeout(function(){e.slideUp(200,function(){e.remove()})},100)})},onImageLoaded:null},editor:!1,sorter:!1,files:null,upload:null,dragDrop:!0,addMore:!1,skipFileNameCheck:!1,clipboardPaste:!0,listInput:!0,enableApi:!1,listeners:null,onSupportError:null,beforeRender:null,afterRender:null,beforeSelect:null,onFilesCheck:null,onFileRead:null,onSelect:null,afterSelect:null,onListInput:null,onRemove:null,onEmpty:null,dialogs:{alert:function(e){return alert(e)},confirm:function(e,t){confirm(e)&&t()}},captions:{button:function(e){return"Choose "+(1==e.limit?"File":"Files")},feedback:function(e){return"Choose "+(1==e.limit?"file":"files")+" to upload"},feedback2:function(e){return e.length+" "+(e.length>1?" files were":" file was")+" chosen"},confirm:"Confirm",cancel:"Cancel",name:"Name",type:"Type",size:"Size",dimensions:"Dimensions",duration:"Duration",crop:"Crop",rotate:"Rotate",sort:"Sort",download:"Download",remove:"Remove",drop:"Drop the files here to Upload",paste:'<div class="fileuploader-pending-loader"><div class="left-half" style="animation-duration: ${ms}s"></div><div class="spinner" style="animation-duration: ${ms}s"></div><div class="right-half" style="animation-duration: ${ms}s"></div></div> Pasting a file, click here to cancel.',removeConfirmation:"Are you sure you want to remove this file?",errors:{filesLimit:"Only ${limit} files are allowed to be uploaded.",filesType:"Only ${extensions} files are allowed to be uploaded.",fileSize:"${name} is too large! Please choose a file up to ${fileMaxSize}MB.",filesSizeAll:"Files that you chose are too large! Please upload files up to ${maxSize} MB.",fileName:"File with the name ${name} is already selected.",folderUpload:"You are not allowed to upload folders."}}}}(jQuery);
/**
 * jQuery gMap - Google Maps API V3
 *
 * @license MIT License; http://www.opensource.org/licenses/mit-license.php
 * @url   http://github.com/marioestrada/jQuery-gMap
 * @author  Mario Estrada <me@mario.ec> based on original plugin by Cedric Kastner <cedric@nur-text.de>
 * @version 2.2
 */
/* global google */
!function(e){e.fn.gMap=function(o,a){switch(o){case"addMarker":return e(this).trigger("gMap.addMarker",[a.latitude,a.longitude,a.content,a.icon,a.popup]);case"centerAt":return e(this).trigger("gMap.centerAt",[a.latitude,a.longitude,a.zoom]);case"clearMarkers":return e(this).trigger("gMap.clearMarkers")}var n=e.extend({},e.fn.gMap.defaults,o);return this.each(function(){var o=new google.maps.Map(this);e(this).data("gMap.reference",o);var a=new google.maps.Geocoder;n.address?a.geocode({address:n.address},function(e){e&&e.length&&o.setCenter(e[0].geometry.location)}):n.latitude&&n.longitude?o.setCenter(new google.maps.LatLng(n.latitude,n.longitude)):e.isArray(n.markers)&&n.markers.length>0?n.markers[0].address?a.geocode({address:n.markers[0].address},function(e){e&&e.length>0&&o.setCenter(e[0].geometry.location)}):o.setCenter(new google.maps.LatLng(n.markers[0].latitude,n.markers[0].longitude)):o.setCenter(new google.maps.LatLng(34.885931,9.84375)),o.setZoom(n.zoom),o.setMapTypeId(google.maps.MapTypeId[n.maptype]);var s={scrollwheel:n.scrollwheel,disableDoubleClickZoom:!n.doubleclickzoom};n.controls===!1?e.extend(s,{disableDefaultUI:!0}):0!==n.controls.length&&e.extend(s,n.controls,{disableDefaultUI:!0}),o.setOptions(s),o.setOptions({styles:n.styles});var t,r,i=new google.maps.Marker;t=new google.maps.MarkerImage(n.icon.image),t.size=new google.maps.Size(n.icon.iconsize[0],n.icon.iconsize[1]),t.anchor=new google.maps.Point(n.icon.iconanchor[0],n.icon.iconanchor[1]),i.setIcon(t),n.icon.shadow&&(r=new google.maps.MarkerImage(n.icon.shadow),r.size=new google.maps.Size(n.icon.shadowsize[0],n.icon.shadowsize[1]),r.anchor=new google.maps.Point(n.icon.shadowanchor[0],n.icon.shadowanchor[1]),i.setShadow(r)),e(this).bind("gMap.centerAt",function(e,a,n,s){s&&o.setZoom(s),o.panTo(new google.maps.LatLng(parseFloat(a),parseFloat(n)))});var g=[];e(this).bind("gMap.clearMarkers",function(){for(;g[0];)g.pop().setMap(null)});var l;e(this).bind("gMap.addMarker",function(e,a,s,t,r,d){var c,p,m=new google.maps.LatLng(parseFloat(a),parseFloat(s)),h=new google.maps.Marker({position:m});if(r?(c=new google.maps.MarkerImage(r.image),c.size=new google.maps.Size(r.iconsize[0],r.iconsize[1]),c.anchor=new google.maps.Point(r.iconanchor[0],r.iconanchor[1]),h.setIcon(c),r.shadow&&(p=new google.maps.MarkerImage(r.shadow),p.size=new google.maps.Size(r.shadowsize[0],r.shadowsize[1]),p.anchor=new google.maps.Point(r.shadowanchor[0],r.shadowanchor[1]),i.setShadow(p))):(h.setIcon(i.getIcon()),h.setShadow(i.getShadow())),t){"_latlng"===t&&(t=a+", "+s);var w=new google.maps.InfoWindow({content:n.html_prepend+t+n.html_append});google.maps.event.addListener(h,"click",function(){l&&l.close(),w.open(o,h),l=w}),d&&google.maps.event.addListenerOnce(o,"tilesloaded",function(){w.open(o,h)})}h.setMap(o),g.push(h)});for(var d,c=this,p=function(o){return function(a){a&&a.length>0&&e(c).trigger("gMap.addMarker",[a[0].geometry.location.lat(),a[0].geometry.location.lng(),o.html,o.icon,o.popup])}},m=0;m<n.markers.length;m++)d=n.markers[m],d.address?("_address"===d.html&&(d.html=d.address),a.geocode({address:d.address},p(d))):e(this).trigger("gMap.addMarker",[d.latitude,d.longitude,d.html,d.icon,d.popup])})},e.fn.gMap.defaults={address:"",latitude:0,longitude:0,zoom:1,markers:[],controls:[],styles:/*Styles start*/[{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]/*Styles end*/,scrollwheel:!1,doubleclickzoom:!0,maptype:"ROADMAP",html_prepend:'<div class="gmap_marker">',html_append:"</div>",icon:{image:"http://www.google.com/mapfiles/marker.png",shadow:"http://www.google.com/mapfiles/shadow50.png",iconsize:[20,34],shadowsize:[37,34],iconanchor:[9,34],shadowanchor:[6,34]}}}(jQuery);
/*! embed.js v1.0.0 | Custom youtube and vimeo embed plugin */

function embedVideo (container) {

    var video_url = $(container).data("url");


    function get_video_thumb(url, callback) {
        var id = get_video_id(url);
        if (id['type'] == 'y') {
            return processYouTube(id);
        } else if (id['type'] == 'v') {

            $.ajax({
                url: 'http://vimeo.com/api/v2/video/' + id['id'] + '.json',
                dataType: 'jsonp',
                success: function (data) {
                    callback({type: 'v', id: id['id'], url: data[0].thumbnail_large});
                }
            });
        }

        function processYouTube(id) {
            if (!id) {
                throw new Error('Unsupported YouTube URL');
            }

            callback({
                type: 'y',
                id: id['id'],
                url: 'http://i2.ytimg.com/vi/' + id['id'] + '/hqdefault.jpg'
            });
        }
    }

    function get_video_id(url) {
        var id;
        var a;
        if (url.indexOf('youtube.com') > -1) {
            if (url.indexOf('v=') > -1) {
                id = url.split('v=')[1].split('&')[0];
            }
            else if (url.indexOf('embed') > -1) {
                id = url.split('embed/')[1].split('?')[0];
            }
            ;
            return processYouTube(id);
        }
        else if (url.indexOf('youtu.be') > -1) {
            id = url.split('/')[1];
            return processYouTube(id);
        }
        else if (url.indexOf('vimeo.com') > -1) {
            if (url.match(/https?:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/)) {
                id = url.split('/')[3];
            }
            else if (url.match(/^vimeo.com\/channels\/[\d\w]+#[0-9]+/)) {
                id = url.split('#')[1];
            }
            else if (url.match(/vimeo.com\/groups\/[\d\w]+\/videos\/[0-9]+/)) {
                id = url.split('/')[4];
            }
            else if (url.match(/player.vimeo.com\/video\/[0-9]+/)) {
                id = url.split('/')[2];
            }
            else {
                throw new Error('Unsupported Vimeo URL');
            }

        }
        else {
            throw new Error('Unrecognised URL');
        }
        a = {type: 'v', id: id};
        return a;
        function processYouTube(id) {
            if (!id) {
                throw new Error('Unsupported YouTube URL');
            }
            a = {type: 'y', id: id};
            return (a); // default.jpg OR hqdefault.jpg
        }
    }

    function callback(video) {

        $(container + ' .video-overlay').css({"background-image": "url('" + video.url + "')"});

        var frame;

        if (video.type == 'v') {
            frame = '<iframe src="https://player.vimeo.com/video/' + video.id + '?autoplay=1&color=3aafd6&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>';
        } else {
            frame = '<iframe src="https://www.youtube.com/embed/' + video.id + '?autoplay=1&color=white&rel=0" frameborder="0" allowfullscreen width="560" height="315" showinfo="0"></iframe>';
        }

        $(container).click(function () {
            $(container).fadeOut('fast', 'linear', function () {
                $(this).html(frame);
                $(this).fadeIn('fast');
            });
        })

    }

    get_video_thumb(video_url, callback);
}
/*! highlight.js v9.12.0 | BSD3 License | git.io/hljslicense */
!function(e){var n="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs}))}(function(e){function n(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0===t.index}function a(e){return k.test(e)}function i(e){var n,t,r,i,o=e.className+" ";if(o+=e.parentNode?e.parentNode.className:"",t=B.exec(o))return w(t[1])?t[1]:"no-highlight";for(o=o.split(/\s+/),n=0,r=o.length;r>n;n++)if(i=o[n],a(i)||w(i))return i}function o(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function u(e){var n=[];return function r(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3===i.nodeType?a+=i.nodeValue.length:1===i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=r(i,a),t(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function c(e,r,a){function i(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function o(e){function r(e){return" "+e.nodeName+'="'+n(e.value).replace('"',"&quot;")+'"'}s+="<"+t(e)+E.map.call(e.attributes,r).join("")+">"}function u(e){s+="</"+t(e)+">"}function c(e){("start"===e.event?o:u)(e.node)}for(var l=0,s="",f=[];e.length||r.length;){var g=i();if(s+=n(a.substring(l,g[0].offset)),l=g[0].offset,g===e){f.reverse().forEach(u);do c(g.splice(0,1)[0]),g=i();while(g===e&&g.length&&g[0].offset===l);f.reverse().forEach(o)}else"start"===g[0].event?f.push(g[0].node):f.pop(),c(g.splice(0,1)[0])}return s+n(a.substr(l))}function l(e){return e.v&&!e.cached_variants&&(e.cached_variants=e.v.map(function(n){return o(e,{v:null},n)})),e.cached_variants||e.eW&&[o(e)]||[e]}function s(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var o={},u=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");o[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.k?u("keyword",a.k):x(a.k).forEach(function(e){u(e,a.k[e])}),a.k=o}a.lR=t(a.l||/\w+/,!0),i&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=n(a.e)||"",a.eW&&i.tE&&(a.tE+=(a.e?"|":"")+i.tE)),a.i&&(a.iR=t(a.i)),null==a.r&&(a.r=1),a.c||(a.c=[]),a.c=Array.prototype.concat.apply([],a.c.map(function(e){return l("self"===e?a:e)})),a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var c=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=c.length?t(c.join("|"),!0):{exec:function(){return null}}}}r(e)}function f(e,t,a,i){function o(e,n){var t,a;for(t=0,a=n.c.length;a>t;t++)if(r(n.c[t].bR,e))return n.c[t]}function u(e,n){if(r(e.eR,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?u(e.parent,n):void 0}function c(e,n){return!a&&r(n.iR,e)}function l(e,n){var t=N.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function p(e,n,t,r){var a=r?"":I.classPrefix,i='<span class="'+a,o=t?"":C;return i+=e+'">',i+n+o}function h(){var e,t,r,a;if(!E.k)return n(k);for(a="",t=0,E.lR.lastIndex=0,r=E.lR.exec(k);r;)a+=n(k.substring(t,r.index)),e=l(E,r),e?(B+=e[1],a+=p(e[0],n(r[0]))):a+=n(r[0]),t=E.lR.lastIndex,r=E.lR.exec(k);return a+n(k.substr(t))}function d(){var e="string"==typeof E.sL;if(e&&!y[E.sL])return n(k);var t=e?f(E.sL,k,!0,x[E.sL]):g(k,E.sL.length?E.sL:void 0);return E.r>0&&(B+=t.r),e&&(x[E.sL]=t.top),p(t.language,t.value,!1,!0)}function b(){L+=null!=E.sL?d():h(),k=""}function v(e){L+=e.cN?p(e.cN,"",!0):"",E=Object.create(e,{parent:{value:E}})}function m(e,n){if(k+=e,null==n)return b(),0;var t=o(n,E);if(t)return t.skip?k+=n:(t.eB&&(k+=n),b(),t.rB||t.eB||(k=n)),v(t,n),t.rB?0:n.length;var r=u(E,n);if(r){var a=E;a.skip?k+=n:(a.rE||a.eE||(k+=n),b(),a.eE&&(k=n));do E.cN&&(L+=C),E.skip||(B+=E.r),E=E.parent;while(E!==r.parent);return r.starts&&v(r.starts,""),a.rE?0:n.length}if(c(n,E))throw new Error('Illegal lexeme "'+n+'" for mode "'+(E.cN||"<unnamed>")+'"');return k+=n,n.length||1}var N=w(e);if(!N)throw new Error('Unknown language: "'+e+'"');s(N);var R,E=i||N,x={},L="";for(R=E;R!==N;R=R.parent)R.cN&&(L=p(R.cN,"",!0)+L);var k="",B=0;try{for(var M,j,O=0;;){if(E.t.lastIndex=O,M=E.t.exec(t),!M)break;j=m(t.substring(O,M.index),M[0]),O=M.index+j}for(m(t.substr(O)),R=E;R.parent;R=R.parent)R.cN&&(L+=C);return{r:B,value:L,language:e,top:E}}catch(T){if(T.message&&-1!==T.message.indexOf("Illegal"))return{r:0,value:n(t)};throw T}}function g(e,t){t=t||I.languages||x(y);var r={r:0,value:n(e)},a=r;return t.filter(w).forEach(function(n){var t=f(n,e,!1);t.language=n,t.r>a.r&&(a=t),t.r>r.r&&(a=r,r=t)}),a.language&&(r.second_best=a),r}function p(e){return I.tabReplace||I.useBR?e.replace(M,function(e,n){return I.useBR&&"\n"===e?"<br>":I.tabReplace?n.replace(/\t/g,I.tabReplace):""}):e}function h(e,n,t){var r=n?L[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function d(e){var n,t,r,o,l,s=i(e);a(s)||(I.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e,l=n.textContent,r=s?f(s,l,!0):g(l),t=u(n),t.length&&(o=document.createElementNS("http://www.w3.org/1999/xhtml","div"),o.innerHTML=r.value,r.value=c(t,u(o),l)),r.value=p(r.value),e.innerHTML=r.value,e.className=h(e.className,s,r.language),e.result={language:r.language,re:r.r},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.r}))}function b(e){I=o(I,e)}function v(){if(!v.called){v.called=!0;var e=document.querySelectorAll("pre code");E.forEach.call(e,d)}}function m(){addEventListener("DOMContentLoaded",v,!1),addEventListener("load",v,!1)}function N(n,t){var r=y[n]=t(e);r.aliases&&r.aliases.forEach(function(e){L[e]=n})}function R(){return x(y)}function w(e){return e=(e||"").toLowerCase(),y[e]||y[L[e]]}var E=[],x=Object.keys,y={},L={},k=/^(no-?highlight|plain|text)$/i,B=/\blang(?:uage)?-([\w-]+)\b/i,M=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,C="</span>",I={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=f,e.highlightAuto=g,e.fixMarkup=p,e.highlightBlock=d,e.configure=b,e.initHighlighting=v,e.initHighlightingOnLoad=m,e.registerLanguage=N,e.listLanguages=R,e.getLanguage=w,e.inherit=o,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.C=function(n,t,r){var a=e.inherit({cN:"comment",b:n,e:t,c:[]},r||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e});hljs.registerLanguage("ruby",function(e){var b="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",r={keyword:"and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",literal:"true false nil"},c={cN:"doctag",b:"@[A-Za-z]+"},a={b:"#<",e:">"},s=[e.C("#","$",{c:[c]}),e.C("^\\=begin","^\\=end",{c:[c],r:10}),e.C("^__END__","\\n$")],n={cN:"subst",b:"#\\{",e:"}",k:r},t={cN:"string",c:[e.BE,n],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/`/,e:/`/},{b:"%[qQwWx]?\\(",e:"\\)"},{b:"%[qQwWx]?\\[",e:"\\]"},{b:"%[qQwWx]?{",e:"}"},{b:"%[qQwWx]?<",e:">"},{b:"%[qQwWx]?/",e:"/"},{b:"%[qQwWx]?%",e:"%"},{b:"%[qQwWx]?-",e:"-"},{b:"%[qQwWx]?\\|",e:"\\|"},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/},{b:/<<(-?)\w+$/,e:/^\s*\w+$/}]},i={cN:"params",b:"\\(",e:"\\)",endsParent:!0,k:r},d=[t,a,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{b:"<\\s*",c:[{b:"("+e.IR+"::)?"+e.IR}]}].concat(s)},{cN:"function",bK:"def",e:"$|;",c:[e.inherit(e.TM,{b:b}),i].concat(s)},{b:e.IR+"::"},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"symbol",b:":(?!\\s)",c:[t,{b:b}],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{cN:"params",b:/\|/,e:/\|/,k:r},{b:"("+e.RSR+"|unless)\\s*",k:"unless",c:[a,{cN:"regexp",c:[e.BE,n],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}].concat(s),r:0}].concat(s);n.c=d,i.c=d;var l="[>?]>",o="[\\w#]+\\(\\w+\\):\\d+:\\d+>",u="(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",w=[{b:/^\s*=>/,starts:{e:"$",c:d}},{cN:"meta",b:"^("+l+"|"+o+"|"+u+")",starts:{e:"$",c:d}}];return{aliases:["rb","gemspec","podspec","thor","irb"],k:r,i:/\/\*/,c:s.concat(w).concat(d)}});hljs.registerLanguage("sql",function(e){var t=e.C("--","$");return{cI:!0,i:/[<>{}*#]/,c:[{bK:"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment",e:/;/,eW:!0,l:/[\w\.]+/,k:{keyword:"abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",literal:"true false null",built_in:"array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"},c:[{cN:"string",b:"'",e:"'",c:[e.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[e.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[e.BE]},e.CNM,e.CBCM,t]},e.CBCM,t]}});hljs.registerLanguage("perl",function(e){var t="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",r={cN:"subst",b:"[$@]\\{",e:"\\}",k:t},s={b:"->{",e:"}"},n={v:[{b:/\$\d/},{b:/[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/},{b:/[\$%@][^\s\w{]/,r:0}]},i=[e.BE,r,n],o=[n,e.HCM,e.C("^\\=\\w","\\=cut",{eW:!0}),s,{cN:"string",c:i,v:[{b:"q[qwxr]?\\s*\\(",e:"\\)",r:5},{b:"q[qwxr]?\\s*\\[",e:"\\]",r:5},{b:"q[qwxr]?\\s*\\{",e:"\\}",r:5},{b:"q[qwxr]?\\s*\\|",e:"\\|",r:5},{b:"q[qwxr]?\\s*\\<",e:"\\>",r:5},{b:"qw\\s+q",e:"q",r:5},{b:"'",e:"'",c:[e.BE]},{b:'"',e:'"'},{b:"`",e:"`",c:[e.BE]},{b:"{\\w+}",c:[],r:0},{b:"-?\\w+\\s*\\=\\>",c:[],r:0}]},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\/\\/|"+e.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[e.HCM,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[e.BE],r:0}]},{cN:"function",bK:"sub",e:"(\\s*\\(.*?\\))?[;{]",eE:!0,r:5,c:[e.TM]},{b:"-\\w\\b",r:0},{b:"^__DATA__$",e:"^__END__$",sL:"mojolicious",c:[{b:"^@@.*",e:"$",cN:"comment"}]}];return r.c=o,s.c=o,{aliases:["pl","pm"],l:/[\w\.]+/,k:t,c:o}});hljs.registerLanguage("php",function(e){var c={b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},i={cN:"meta",b:/<\?(php)?|\?>/},t={cN:"string",c:[e.BE,i],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},a={v:[e.BNM,e.CNM]};return{aliases:["php3","php4","php5","php6"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.HCM,e.C("//","$",{c:[i]}),e.C("/\\*","\\*/",{c:[{cN:"doctag",b:"@[A-Za-z]+"}]}),e.C("__halt_compiler.+?;",!1,{eW:!0,k:"__halt_compiler",l:e.UIR}),{cN:"string",b:/<<<['"]?\w+['"]?$/,e:/^\w+;?$/,c:[e.BE,{cN:"subst",v:[{b:/\$\w+/},{b:/\{\$/,e:/\}/}]}]},i,{cN:"keyword",b:/\$this\b/},c,{b:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",c,e.CBCM,t,a]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},t,a]}});hljs.registerLanguage("json",function(e){var i={literal:"true false null"},n=[e.QSM,e.CNM],r={e:",",eW:!0,eE:!0,c:n,k:i},t={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[e.BE],i:"\\n"},e.inherit(r,{b:/:/})],i:"\\S"},c={b:"\\[",e:"\\]",c:[e.inherit(r)],i:"\\S"};return n.splice(n.length,0,t,c),{c:n,k:i,i:"\\S"}});hljs.registerLanguage("http",function(e){var t="HTTP/[0-9\\.]+";return{aliases:["https"],i:"\\S",c:[{b:"^"+t,e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{b:"^[A-Z]+ (.*?) "+t+"$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0},{b:t},{cN:"keyword",b:"[A-Z]+"}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{e:"$",r:0}},{b:"\\n\\n",starts:{sL:[],eW:!0}}]}});hljs.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},s={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]},a={cN:"string",b:/'/,e:/'/};return{aliases:["sh","zsh"],l:/\b-?[a-z\._]+\b/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"meta",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,s,a,t]}});hljs.registerLanguage("javascript",function(e){var r="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},n={cN:"subst",b:"\\$\\{",e:"\\}",k:t,c:[]},c={cN:"string",b:"`",e:"`",c:[e.BE,n]};n.c=[e.ASM,e.QSM,c,a,e.RM];var s=n.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:t,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,c,e.CLCM,e.CBCM,a,{b:/[{,]\s*/,r:0,c:[{b:r+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:r,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+r+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:r},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,c:s}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:r}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:s}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}});hljs.registerLanguage("xml",function(s){var e="[A-Za-z0-9\\._:-]+",t={eW:!0,i:/</,r:0,c:[{cN:"attr",b:e,r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},s.C("<!--","-->",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[t],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[t],starts:{e:"</script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},t]}]}});hljs.registerLanguage("markdown",function(e){return{aliases:["md","mkdown","mkd"],c:[{cN:"section",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"quote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"^```w*s*$",e:"^```s*$"},{b:"`.+?`"},{b:"^( {4}|	)",e:"$",r:0}]},{b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"string",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"symbol",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:/^\[[^\n]+\]:/,rB:!0,c:[{cN:"symbol",b:/\[/,e:/\]/,eB:!0,eE:!0},{cN:"link",b:/:\s*/,e:/$/,eB:!0}]}]}});hljs.registerLanguage("coffeescript",function(e){var c={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",built_in:"npm require console print module global window document"},n="[A-Za-z$_][0-9A-Za-z$_]*",r={cN:"subst",b:/#\{/,e:/}/,k:c},i=[e.BNM,e.inherit(e.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[e.BE]},{b:/'/,e:/'/,c:[e.BE]},{b:/"""/,e:/"""/,c:[e.BE,r]},{b:/"/,e:/"/,c:[e.BE,r]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[r,e.HCM]},{b:"//[gim]*",r:0},{b:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]},{b:"@"+n},{sL:"javascript",eB:!0,eE:!0,v:[{b:"```",e:"```"},{b:"`",e:"`"}]}];r.c=i;var s=e.inherit(e.TM,{b:n}),t="(\\(.*\\))?\\s*\\B[-=]>",o={cN:"params",b:"\\([^\\(]",rB:!0,c:[{b:/\(/,e:/\)/,k:c,c:["self"].concat(i)}]};return{aliases:["coffee","cson","iced"],k:c,i:/\/\*/,c:i.concat([e.C("###","###"),e.HCM,{cN:"function",b:"^\\s*"+n+"\\s*=\\s*"+t,e:"[-=]>",rB:!0,c:[s,o]},{b:/[:\(,=]\s*/,r:0,c:[{cN:"function",b:t,e:"[-=]>",rB:!0,c:[o]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:!0,i:/[:="\[\]]/,c:[s]},s]},{b:n+":",e:":",rB:!0,rE:!0,r:0}])}});hljs.registerLanguage("shell",function(s){return{aliases:["console"],c:[{cN:"meta",b:"^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]",starts:{e:"$",sL:"bash"}}]}});hljs.registerLanguage("css",function(e){var c="[a-zA-Z-][a-zA-Z0-9_-]*",t={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:c,r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,t]}]}});
!function(t,e){t.fn.extend({scrollspy:function(n){var a={namespace:"scrollspy",activeClass:"active",animate:!1,offset:0,container:e};n=t.extend({},a,n);var o=function(t,e){return parseInt(t,10)+parseInt(e,10)},r=function(e){for(var n=[],a=0;a<e.length;a++){var o=e[a],r=t(o).attr("href"),f=t(r);if(f.length>0){var s=Math.floor(f.offset().top),i=s+Math.floor(f.outerHeight());n.push({element:f,hash:r,top:s,bottom:i})}}return n},f=function(e,n){for(var a=0;a<e.length;a++){var o=t(e[a]);if(o.attr("href")===n)return o}},s=function(e){for(var a=0;a<e.length;a++){var o=t(e[a]);o.parent().removeClass(n.activeClass)}};return this.each(function(){for(var a=this,i=t(n.container),l=t(a).find("a"),c=0;c<l.length;c++){var h=l[c];t(h).on("click",function(a){var r=t(this).attr("href"),f=t(r);if(f.length>0){var s=o(f.offset().top,n.offset);n.animate?t("html, body").animate({scrollTop:s},1e3):e.scrollTo(0,s),a.preventDefault()}})}var v=r(l);i.bind("scroll."+n.namespace,function(){for(var e,r={top:o(t(this).scrollTop(),Math.abs(n.offset)),left:t(this).scrollLeft()},i=0;i<v.length;i++){var c=v[i];if(r.top>=c.top&&r.top<c.bottom){var h=c.hash;if(e=f(l,h)){n.onChange&&n.onChange(c.element,t(a),r),s(l),e.parent().addClass(n.activeClass);break}}}!e&&n.onExit&&n.onExit(t(a),r)})})}})}(jQuery,window,document,void 0);
//# sourceMappingURL=app.js.map
