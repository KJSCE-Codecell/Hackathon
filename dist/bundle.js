!function(e){var r={};function t(o){if(r[o])return r[o].exports;var a=r[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(o,a,function(r){return e[r]}.bind(null,a));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/dist",t(t.s=5)}([function(e,r){e.exports=function(e){var r="undefined"!=typeof window&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=r.protocol+"//"+r.host,o=t+r.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,r){var a,i=r.trim().replace(/^"(.*)"$/,function(e,r){return r}).replace(/^'(.*)'$/,function(e,r){return r});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(a=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(e,r,t){var o={},a=function(e){var r;return function(){return void 0===r&&(r=e.apply(this,arguments)),r}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var r={};return function(e){if("function"==typeof e)return e();if(void 0===r[e]){var t=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}}(),n=null,l=0,d=[],c=t(0);function s(e,r){for(var t=0;t<e.length;t++){var a=e[t],i=o[a.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](a.parts[n]);for(;n<a.parts.length;n++)i.parts.push(g(a.parts[n],r))}else{var l=[];for(n=0;n<a.parts.length;n++)l.push(g(a.parts[n],r));o[a.id]={id:a.id,refs:1,parts:l}}}}function h(e,r){for(var t=[],o={},a=0;a<e.length;a++){var i=e[a],n=r.base?i[0]+r.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};o[n]?o[n].parts.push(l):t.push(o[n]={id:n,parts:[l]})}return t}function m(e,r){var t=i(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=d[d.length-1];if("top"===e.insertAt)o?o.nextSibling?t.insertBefore(r,o.nextSibling):t.appendChild(r):t.insertBefore(r,t.firstChild),d.push(r);else if("bottom"===e.insertAt)t.appendChild(r);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=i(e.insertInto+" "+e.insertAt.before);t.insertBefore(r,a)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var r=d.indexOf(e);r>=0&&d.splice(r,1)}function f(e){var r=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),u(r,e.attrs),m(e,r),r}function u(e,r){Object.keys(r).forEach(function(t){e.setAttribute(t,r[t])})}function g(e,r){var t,o,a,i;if(r.transform&&e.css){if(!(i=r.transform(e.css)))return function(){};e.css=i}if(r.singleton){var d=l++;t=n||(n=f(r)),o=x.bind(null,t,d,!1),a=x.bind(null,t,d,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var r=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",u(r,e.attrs),m(e,r),r}(r),o=function(e,r,t){var o=t.css,a=t.sourceMap,i=void 0===r.convertToAbsoluteUrls&&a;(r.convertToAbsoluteUrls||i)&&(o=c(o));a&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var n=new Blob([o],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(n),l&&URL.revokeObjectURL(l)}.bind(null,t,r),a=function(){p(t),t.href&&URL.revokeObjectURL(t.href)}):(t=f(r),o=function(e,r){var t=r.css,o=r.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),a=function(){p(t)});return o(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;o(e=r)}else a()}}e.exports=function(e,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(r=r||{}).attrs="object"==typeof r.attrs?r.attrs:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=a()),r.insertInto||(r.insertInto="head"),r.insertAt||(r.insertAt="bottom");var t=h(e,r);return s(t,r),function(e){for(var a=[],i=0;i<t.length;i++){var n=t[i];(l=o[n.id]).refs--,a.push(l)}e&&s(h(e,r),r);for(i=0;i<a.length;i++){var l;if(0===(l=a[i]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete o[l.id]}}}};var b=function(){var e=[];return function(r,t){return e[r]=t,e.filter(Boolean).join("\n")}}();function x(e,r,t,o){var a=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=b(r,a);else{var i=document.createTextNode(a),n=e.childNodes;n[r]&&e.removeChild(n[r]),n.length?e.insertBefore(i,n[r]):e.appendChild(i)}}},function(e,r){e.exports=function(e){var r=[];return r.toString=function(){return this.map(function(r){var t=function(e,r){var t=e[1]||"",o=e[3];if(!o)return t;if(r&&"function"==typeof btoa){var a=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(o),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[t].concat(i).concat([a]).join("\n")}return[t].join("\n")}(r,e);return r[2]?"@media "+r[2]+"{"+t+"}":t}).join("")},r.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(o[i]=!0)}for(a=0;a<e.length;a++){var n=e[a];"number"==typeof n[0]&&o[n[0]]||(t&&!n[2]?n[2]=t:t&&(n[2]="("+n[2]+") and ("+t+")"),r.push(n))}},r}},function(e,r,t){(e.exports=t(2)(!1)).push([e.i,'*,:after,:before{margin:0;padding:0;box-sizing:inherit}:root{--color-primary:#fc427b;--color-primary-dark:#b33771;--color-secondary:#0062c5;--color-secondary-light:#1b9cfc;--color-tertiary:#ffa700;--color-tertiary-dark:#b37500;--color-white:#fff;--color-black:#222;--color-gray:#ccc;background-color:var(--color-black);color:var(--color-black);font-size:90%}@media screen and (max-device-width:650px){:root{font-size:60%}}body{box-sizing:border-box;overflow-x:hidden}a{text-decoration:none;color:var(--color-secondary-light)}body{font-size:1.5rem;font-family:Roboto}.container{width:100vw;height:100vh;position:relative}.container__button{display:inline-block;background-color:var(--color-primary);color:var(--color-white);padding:.5rem 5rem;border-radius:3rem;position:relative;left:50%;transform:translate(-50%);cursor:pointer;transition:all .5s ease-in-out;margin-bottom:1rem}.container__button:hover{box-shadow:0 .5rem 1.25rem -.2rem #000;transform:translate(-50%,calc(-50% - .5rem))}.container__heading{cursor:pointer;display:inline-block;position:relative;left:50%;transform:translate(-50%);margin:1rem auto}.container__heading--text{font-size:2rem;padding:.5rem 0;text-align:center;transition:all .5s ease-in-out;color:var(--color-white)}.container__heading--overline{width:60%;margin:0 auto;background:linear-gradient(-90deg,var(--color-primary),var(--color-primary-dark),var(--color-primary));height:.5rem;border-radius:.5rem;transition:all .5s ease-in-out}.container__heading:hover>.container__heading--overline{width:100%;transform:translateY(2rem)}.container__heading:hover>.container__heading--text{transform:translateY(-1rem)}.ffont{text-align:center;margin-top:10px;font-family:Times,serif;font-style:bold;font-size:15px;color:#000}main{display:flex;flex-flow:row wrap;justify-content:center;width:100%}.flexbox img{max-width:250px;width:100%;height:auto;position:relative;top:50%;left:50%;transform:translate(-50%,-50%)}.flexbox{padding:10px}@media screen and (max-device-width:650px){.flexbox img{max-width:150px}}.imgcontainer{margin:0 auto;text-align:center}.effect{width:100%}.effect .buttons{margin:4rem auto;display:flex;justify-content:center}.effect a:last-child{margin-right:0}.effect a{text-decoration:none!important;color:#fff;width:60px;height:60px;display:flex;align-items:center;justify-content:center;border-radius:50%;border:1px solid var(--color-white);margin-right:20px;font-size:25px;overflow:hidden;position:relative}.effect a i{position:relative;z-index:3}.effect a.fb{background-color:#3b5998}.effect a.tw{background-color:#00aced}.effect a.insta{background-color:#bc2a8d}.effect a.in{background-color:#313131}.effect.laertes a,.effect.laertes a i{transition:all .2s linear 0s}.effect.laertes a:hover i{transform:scale(1.5);box-shadow:0 .5rem 1.25rem -.2rem #000}.sponsor{margin:2rem auto}.sponsor__button{display:inline-block;position:relative;left:50%;transform:translate(-50%);padding:1rem 5rem;margin:1rem auto;cursor:pointer;color:var(--color-white);font-size:2rem;background-color:var(--color-primary);border-radius:3rem;transition:all .5s ease-in-out}.sponsor__button:hover{box-shadow:0 .5rem 1.25rem -.2rem #000;transform:translate(-50%,-.5rem)}.sponsor__link{text-align:center;font-size:1.2rem}.fcontainer{max-width:1100px;width:90%;height:100%;padding-bottom:80px;background-color:rgba(0,0,0,.5);border:.2rem solid var(--color-tertiary-dark);border-radius:5px;margin:0 auto 50px;display:flex;justify-content:center;flex-wrap:wrap;align-content:flex-start;transition:all .25s ease-in-out}.fcontainer .qa{position:relative;top:50px;margin:auto;padding-left:75px;width:50%;float:left}.fcontainer .qa .q{cursor:pointer}.fcontainer .qa .q .question span{display:block;line-height:20px;color:var(--color-white);font-size:1.2rem;padding-left:4rem}.fcontainer .qa .q .shape.hovered{animation-iteration-count:3}.fcontainer .qa .a .ans{line-height:20px;color:var(--color-tertiary);font-size:1.2rem;margin-left:13px;margin-top:25px;margin-bottom:10px;padding-left:25px;max-height:0;overflow:hidden;transition:.4s ease-in-out;opacity:0;border-radius:5px}.fcontainer .qa .a .ans.show{opacity:1;max-height:500px}.header{max-width:1000px;background-color:#fff;margin:auto;display:flex;justify-content:center;flex-wrap:wrap;align-content:flex-start}.header__heading{cursor:pointer;display:inline-block;position:relative;top:50px;transform:translate(-50%,-50%);margin-bottom:1rem}.header__heading--text{padding:.5rem 0;text-align:center;transition:all .5s ease-in-out}.header__heading--overline{width:60%;margin:0 auto;background:linear-gradient(-90deg,var(--color-primary),var(--color-primary-dark),var(--color-primary));height:.5rem;border-radius:.5rem;transition:all .5s ease-in-out}.header__heading:hover>.header__heading--overline{width:100%;transform:translateY(2rem)}.header__heading:hover>.header__heading--text{transform:translateY(-1rem)}@keyframes wiggle{0%{transform:rotate(45deg)}25%{transform:rotate(50deg)}75%{transform:rotate(40deg)}to{transform:rotate(45deg)}}@media screen and (max-width:1200px){.fcontainer{width:80%;align-content:flex-start}.fcontainer .qa{padding:0;width:calc(100% - 30px);margin:auto}}@media screen and (max-width:400px){.fcontainer{width:80%;align-content:flex-start}.fcontainer .qa{padding:0;width:calc(100% - 30px);margin:auto;padding:auto}}.closed .horizontal,.closed .vertical{transition:all .5s ease-in-out;transform:rotate(-135deg)}.closed .horizontal,.opened{opacity:1}.opened .horizontal,.opened .vertical{transition:all .5s ease-in-out;transform:rotate(45deg)}.opened .horizontal{opacity:0}.even .horizontal{width:10px;height:2px;margin-left:-5px;margin-top:-1px}.even .horizontal,.even .vertical{position:absolute;background-color:#5153f8;left:50%;top:50%}.even .vertical{width:2px;height:10px;margin-left:-1px;margin-top:-5px}.even .shape{width:30px;height:30px;border-radius:50%;margin:auto;background-color:#fff;border:5px solid #fc427b;text-align:center;transform:rotate(45deg);float:left}.even .ans{border-left:5px solid #5153f8}.odd .horizontal{width:10px;height:2px;margin-left:-5px;margin-top:-1px}.odd .horizontal,.odd .vertical{position:absolute;background-color:#fc427b;left:50%;top:50%}.odd .vertical{width:2px;height:10px;margin-left:-1px;margin-top:-5px}.odd .shape{width:30px;height:30px;border-radius:50%;margin:auto;background-color:#fff;border:5px solid #5153f8;text-align:center;transform:rotate(45deg);float:left}.odd .ans{border-left:5px solid #fc427b}.schedulebox{width:100vw;overflow:hidden;position:relative}.schedulebox__heading{cursor:pointer;display:inline-block;position:relative;left:50%;top:5rem;transform:translate(-50%,-50%)}.schedulebox__heading--text{padding:.5rem 0;text-align:center}.schedulebox__heading--overline{width:10rem;margin:0 auto;background-color:var(--color-primary);height:.5rem;border-radius:.5rem}.schedulebox .scheduleholder{width:70%;margin:0 auto 5rem;overflow:hidden}.schedulebox .scheduleholder--days{width:43%;height:31rem;margin:2rem auto;padding:1.5rem 1.5rem 0;border-radius:5px;border:.2rem solid var(--color-tertiary-dark);background-color:rgba(0,0,0,.5);min-width:220px}.schedulebox .scheduleholder .left{margin-left:2%;float:left}.schedulebox .scheduleholder .right{float:right;margin-right:2%}.schedulebox .scheduleholder .daynum{text-align:center;color:var(--color-white)}.schedulebox .scheduleholder .actualschedule{padding:1.2rem 0 1.2rem 1rem;color:var(--color-black);height:90%}.schedulebox .scheduleholder .timeline{position:relative;margin:0 auto;height:100%;float:left}.schedulebox .scheduleholder .timeline:after{content:"";position:absolute;float:left;width:2px;height:100%;background-color:var(--color-white);top:0;bottom:0}.schedulebox .scheduleholder .event{padding:.8rem 0 .8rem .5rem;margin-left:.6rem;position:relative;width:100%;font-size:1.2rem;text-align:left;float:left;color:var(--color-white)}.schedulebox .scheduleholder .event:before{content:"";position:absolute;width:1rem;height:1rem;padding:0;margin-top:0;left:-1.2rem;background-color:var(--color-white);border:.25rem solid var(--color-secondary);border-radius:50%;z-index:1;transform:translate(.15rem)}.schedulebox .scheduleholder .odde:before{border:.25rem solid var(--color-primary)}.schedulebox .scheduleholder .time{color:var(--color-tertiary)}.schedulebox .scheduleholder .right .event{padding:1.03rem 0 1.03rem .5rem}@media only screen and (max-width:1379px){.schedulebox .scheduleholder .right .event{padding:.92rem 0 .92rem .5rem}}@media only screen and (max-width:1279px){.schedulebox .scheduleholder--days{height:32rem}.schedulebox .scheduleholder .right .event{padding:1.03rem 0 1.03rem .5rem}}@media only screen and (max-width:1272px){.schedulebox .scheduleholder .right .event{padding:.92rem 0 .92rem .5rem}}@media only screen and (max-width:1127px){.schedulebox .scheduleholder--days{height:33.5rem}.schedulebox .scheduleholder .right .event{padding:1.03rem 0 1.03rem .5rem}}@media only screen and (max-width:1021px){.schedulebox .scheduleholder .right .event{padding:.92rem 0 .92rem .5rem}}@media only screen and (max-width:927px){.schedulebox .scheduleholder{width:75%}}@media only screen and (max-width:865px){.schedulebox .scheduleholder{width:78%}}@media only screen and (max-width:833px){.schedulebox .scheduleholder--days{position:relative;left:50%;transform:translate(-50%);width:75%;height:30.5rem;margin:2rem auto;padding:1.5rem;padding-bottom:0}.schedulebox .scheduleholder--days:hover{box-shadow:-.18rem .35rem .85rem -.2rem var(--color-black);transform:translate(-50%,-.8%)}.schedulebox .scheduleholder .left{margin-left:0}.schedulebox .scheduleholder .right{margin-right:0;float:left}.schedulebox .scheduleholder .right .event{padding:.8rem 0 .8rem .5rem}.schedulebox .scheduleholder .right .timeline{height:87.5%}}@media only screen and (max-width:780px){.schedulebox .scheduleholder .right .timeline{height:89%}}@media only screen and (max-width:726px){.schedulebox .scheduleholder--days{height:31rem}}@media only screen and (max-width:660px){.schedulebox .scheduleholder--days{height:31.5rem}}@media only screen and (max-width:468px){.schedulebox .scheduleholder .right .timeline{height:95%}}@media only screen and (max-width:438px){.schedulebox .scheduleholder--days{height:32.5rem}.schedulebox .scheduleholder .right .timeline{height:90%}}@media only screen and (max-width:436px){.schedulebox .scheduleholder--days{height:33rem}.schedulebox .scheduleholder .right .timeline{height:93%}}@media only screen and (max-width:386px){.schedulebox .scheduleholder--days{height:34rem}.schedulebox .scheduleholder .right .timeline{height:90%}}.head{height:100vh;width:100vw;background-size:cover}.head__nav{display:flex;justify-content:space-between;position:fixed;left:0;right:0;top:0;z-index:999;background:hsla(0,0%,100%,.5);box-shadow:0 .5rem 1.25rem -.2rem #000}.head__nav__elems{display:flex;justify-content:center;align-items:center}.head__nav__elems a:hover{color:var(--color-white)}.head__nav__elems--name{padding:1rem;font-size:1.5rem;text-align:center;cursor:pointer}.head__nav__elems--name:hover{background-color:var(--color-secondary);transition:all .3s linear}.head__content{margin-top:50px;display:grid;grid-template-columns:50% 50%;grid-template-rows:50% 50%;grid-template-areas:"title gallery" "button gallery"}.head__content--title{position:relative;grid-area:title}.head__content--title div{position:absolute;text-align:center;left:50%;bottom:1rem;transform:translate(-50%);font-size:2rem}.head__content--button{grid-area:button;position:relative}.head__content--button--main{display:inline-block;position:relative;left:50%;transform:translate(-50%);margin:1rem auto;padding:1rem 5rem;cursor:pointer;color:var(--color-white);font-size:2rem;background-color:var(--color-primary);border-radius:3rem;transition:all .5s ease-in-out}.head__content--button--main:hover{box-shadow:0 .5rem 1.25rem -.2rem #000;transform:translate(-50%,-.5rem)}.head__content--button--link{font-size:1.2rem;text-align:center}.head__content--gallery{grid-area:gallery;width:50vw;height:calc(100vh - 50px);position:relative}.head__content--gallery img{box-shadow:0 .5rem 1.25rem -.2rem #000;position:absolute;width:500px;max-width:40vw;transform:translate(-50%,-50%);transition:all .2s linear;outline-offset:2rem}.head__content--gallery img:first-child{display:none;top:50%;left:50%;transform:translate(-50%,calc(-50% + 10rem));z-index:2}.head__content--gallery img:first-child:hover{transform:translate(-50%,calc(-50% + 10rem)) scale(1.2)}.head__content--gallery img:nth-child(2){top:50%;left:50%;z-index:3;transform:translate(-50%,-50%)}.head__content--gallery img:nth-child(3){display:none;top:50%;left:50%;transform:translate(calc(-50% - 5rem),calc(-50% - 10rem));z-index:1}.head__content--gallery img:nth-child(3):hover{transform:translate(calc(-50% - 5rem),calc(-50% - 10rem)) scale(1.2)}.head__content--gallery img:hover{box-shadow:0 .5rem 1.25rem -.2rem #000}@media screen and (max-device-width:650px){.head__nav{display:none}.head__content{grid-template-columns:1fr;grid-template-rows:1fr 2fr 1fr;grid-template-areas:"title" "gallery" "button"}.head__content--button,.head__content--title{height:25vh}.head__content--gallery{height:50vh;width:100vw}.head__content--gallery img{width:300px;max-width:80vw}}.about{width:100%;background-size:cover;background-attachment:fixed;color:var(--color-white);overflow-x:hidden;border:0 solid var(--color-black)}.about__content{max-width:75rem;padding-top:3rem;margin:0 auto;text-align:center;font-size:1.5rem}.about__pics{padding:4rem;display:flex;align-content:center;justify-content:center}.about__pics__card{margin:1rem}.about__pics__card img{height:75px;width:auto}.about__pics__title{text-align:center;font-size:1.2rem}@media screen and (max-device-width:650px){.about__content{max-width:300px;padding-top:0}.about__pics{padding:2rem}.about__pics__card img{height:40px}.about__pics__title{font-size:1rem}}.carousel{position:relative;top:50%;left:50%;transform:translate(-50%,-50%);max-width:500px;max-height:300px;width:90%;height:90%}.carousel__activator{display:none}.carousel__slide{width:100%;height:100%;display:none;background-size:cover;border-radius:2rem}.carousel__controls{display:none;font-size:3rem;color:#fff}.carousel__control{position:absolute;top:50%;transform:translateY(-50%);cursor:pointer}.carousel__control--backward{left:0;padding:0 10px;background:rgba(0,0,0,.5)}.carousel__control--forward{right:0;padding:0 10px;background:rgba(0,0,0,.5)}.carousel__indicators{position:absolute;left:50%;bottom:0;transform:translateX(-50%);color:#fff}.carousel__indicator{cursor:pointer}.carousel__activator:first-of-type:checked ~ .carousel__controls:nth-of-type(1),.carousel__activator:first-of-type:checked ~ .carousel__slide:nth-of-type(1),.carousel__activator:nth-of-type(2):checked~.carousel__controls:nth-of-type(2),.carousel__activator:nth-of-type(2):checked~.carousel__slide:nth-of-type(2),.carousel__activator:nth-of-type(3):checked~.carousel__controls:nth-of-type(3),.carousel__activator:nth-of-type(3):checked~.carousel__slide:nth-of-type(3){display:block}#hamburger,.mobilenav{display:none}.mobilenav{background-color:var(--color-white);z-index:999}.mobilenav__hamburger{margin-right:10px;font-size:3rem}.mobilenav__elems{display:none;background-color:var(--color-white);position:fixed;z-index:999;top:50px;left:0;right:0}@media screen and (max-device-width:650px){.mobilenav{position:fixed;top:0;left:0;right:0;height:50px;display:flex;justify-content:space-between;align-items:center}#hamburger:checked~.mobilenav__elems{display:flex;flex-direction:column}}.pasthackathon{width:100vw;height:50vh;background-size:cover;border:0 solid var(--color-black);background-attachment:fixed;backface-visibility:hidden;position:relative}.pasthackathon__button{display:inline-block;position:relative;left:50%;top:50%;transform:translate(-50%,-50%);padding:1rem 5rem;cursor:pointer;color:var(--color-white);font-size:2rem;background-color:var(--color-primary);border-radius:3rem;transition:all .5s ease-in-out}.pasthackathon__button:hover{box-shadow:0 .5rem 1.25rem -.2rem #000;transform:translate(-50%,calc(-50% - .5rem))}@media screen and (max-device-width:650px){.pasthackathon__button{font-size:1rem}}.backanimation{z-index:-10;position:fixed}.backanimation__container{z-index:-1;position:fixed;top:0;left:0;right:0;bottom:0}.backanimation__rectangle--1{top:0;left:35%;width:60px;height:60px}.backanimation__rectangle--1,.backanimation__rectangle--2{border:.5rem solid var(--color-primary);animation:animate1 5s cubic-bezier(0,1.2,0,1.24) infinite}.backanimation__rectangle--2{top:5%;left:50%;width:30px;height:30px}.backanimation__rectangle--3{top:20%;left:70%;width:70px;height:70px}.backanimation__rectangle--3,.backanimation__rectangle--4{border:.5rem solid var(--color-primary);animation:animate1 5s cubic-bezier(0,1.2,0,1.24) infinite}.backanimation__rectangle--4{top:45%;left:60%;width:45px;height:45px}.backanimation__rectangle--5{top:30%;right:15%;width:10px;height:10px;border:.7rem solid var(--color-primary);animation:animate1 5s cubic-bezier(0,1.2,0,1.24) infinite}.backanimation__circle--1{top:50%;left:35%;width:30px;height:30px;border-radius:50%;border:.5rem solid var(--color-secondary-light)}.backanimation__circle--1,.backanimation__circle--2{animation:animate2 5s cubic-bezier(0,1.24,0,1.24) infinite}.backanimation__circle--2{top:15%;left:15%;width:75px;height:75px;border-radius:50%;border:.6rem solid var(--color-tertiary)}.backanimation__circle--3{top:35%;left:30%;width:20px;height:20px;border-radius:50%;border:.5rem solid var(--color-tertiary)}.backanimation__circle--3,.backanimation__circle--4{animation:animate2 5s cubic-bezier(0,1.24,0,1.24) infinite}.backanimation__circle--4{top:60%;right:25%;width:70px;height:70px;border-radius:50%;border:0 solid var(--color-tertiary)}.backanimation__circle--5{top:55%;left:15%}.backanimation__circle--5,.backanimation__circle--6{width:10px;height:10px;border-radius:50%;border:.5rem solid var(--color-tertiary);animation:animate2 5s cubic-bezier(0,1.24,0,1.24) infinite}.backanimation__circle--6{top:50%;left:50%}@keyframes animate1{0%{border-color:var(--color-primary);border-radius:0}35%{border-color:var(--color-secondary)}50%{border-radius:50%}70%{border-color:var(--color-primary)}to{border-color:var(--color-primary);border-radius:0}}@keyframes animate2{0%{border-color:var(--color-secondary);border-radius:50%}35%{border-color:var(--color-primary)}50%{border-radius:0}70%{border-color:var(--color-secondary)}to{border-color:var(--color-secondary);border-radius:50%}}@media screen and (max-device-width:650px){.backanimation{display:none}}.newhead{background-size:contain;background-repeat:no-repeat;background-position:bottom}.newhead,.newhead__layer{height:100vh;width:100vw;position:relative}.newhead__layer{background-color:rgba(0,0,0,.5);background:radial-gradient(hsla(0,0%,100%,.4),rgba(0,0,0,.2));z-index:-100}.newhead__content{position:absolute;top:calc(50% - 50px);left:50%;transform:translate(-50%,-50%);color:#fff;size:3rem}.newhead__logo img{height:200px}.newhead__logo1 img,.newhead__logo img{width:auto;position:relative;left:50%;transform:translateX(-50%)}.newhead__logo1 img{height:50px}.newhead__tagline{text-align:center;margin:1rem}.newhead__form{position:relative;width:30vw;left:50%;transform:translateX(-50%)}.newhead__form .subscribed{left:50%}.newhead__input{position:absolute;left:0;width:75%;margin:0;padding:.5rem;height:2.5rem;font-size:1rem;border-radius:.5rem 0 0 .5rem;border:3px solid var(--color-primary)}.newhead__input:focus{outline:none}.newhead__submit{position:absolute;right:0;width:25%;margin:0;height:2.5rem;font-size:1.2rem;background-color:var(--color-primary);border:none;border-radius:0 .5rem .5rem 0;color:#fff;cursor:pointer}.newhead__submit:focus{outline:none}.newhead__button{visibility:hidden;display:inline-block;position:relative;left:50%;top:52%;transform:translate(-50%,-50%);padding:.4rem 1rem;color:var(--color-white);font-size:1.3rem;background-color:var(--color-primary);border-radius:.5rem;box-shadow:0 .5rem 1rem -.2rem rgba(0,0,0,.5)}@media screen and (max-device-width:1100px){.newhead__logo img{height:150px}.newhead__logo1 img,.newhead__logo img{width:auto;position:relative;left:50%;transform:translateX(-50%)}.newhead__logo1 img{height:40px}.newhead__form{width:80vw}}.stats{width:100vw}.col_fourth{width:23.5%;margin-right:2%;margin-top:15vh;margin-bottom:15vh;text-align:center;background:transparent;background:rgba(0,0,0,.5);border:.2rem solid var(--color-tertiary-dark)}.end{margin-right:0!important}.wrapper{width:90%;margin:30px auto;position:relative;display:flex;justify-content:space-evenly}.counter{padding:20px 0;color:#fff;border-radius:5px}.count-title{font-size:40px}.count-text,.count-title{font-weight:400;margin-top:10px;margin-bottom:0;text-align:center}.count-text{font-size:13px;color:#fff}.fa-2x{margin:0 auto;float:none;display:table;color:var(--color-tertiary)}@media screen and (max-device-width:500px){.wrapper{flex-direction:column;display:inline-block;margin-right:5%;margin-left:5%}.col_fourth{float:left;width:40%;margin:10px 5%}}',""])},function(e,r,t){var o=t(3);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(1)(o,a);o.locals&&(e.exports=o.locals)},function(e,r,t){"use strict";t.r(r);t(4)}]);