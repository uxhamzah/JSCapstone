!function(e){function t(t){for(var r,u,a=t[0],c=t[1],s=t[2],l=0,p=[];l<a.length;l++)u=a[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(t);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={0:0},i=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var f=c;i.push([547,1]),n()}({1449:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(71);var o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"Game"))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Phaser.Scene),r(t,[{key:"preload",value:function(){this.load.image("logo","./src/assets/title.jpeg")}},{key:"create",value:function(){this.add.image(400,300,"logo")}}]),t}();t.default=o},1450:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(71);var o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"Boot"))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Phaser.Scene),r(t,[{key:"preload",value:function(){this.load.image("logo","./src/assets/logo.png")}},{key:"create",value:function(){this.scene.start("Preloader")}}]),t}();t.default=o},1451:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(71);var o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"Preloader"))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Phaser.Scene),r(t,[{key:"preload",value:function(){var e=this;this.add.image(400,200,"logo");var t=this.add.graphics(),n=this.add.graphics();n.fillStyle(2236962,.8),n.fillRect(240,270,320,50);var r=this.cameras.main.width,o=this.cameras.main.height,i=this.make.text({x:r/2,y:o/2-50,text:"Loading...",style:{font:"20px monospace",fill:"#ffffff"}});i.setOrigin(.5,.5);var u=this.make.text({x:r/2,y:o/2-5,text:"0%",style:{font:"18px monospace",fill:"#ffffff"}});u.setOrigin(.5,.5);var a=this.make.text({x:r/2,y:o/2+50,text:"",style:{font:"18px monospace",fill:"#ffffff"}});a.setOrigin(.5,.5),this.load.on("progress",(function(e){u.setText(parseInt(100*e)+"%"),t.clear(),t.fillStyle(16777215,1),t.fillRect(250,280,300*e,30)})),this.load.on("fileprogress",(function(e){a.setText("Loading asset: "+e.key)})),this.load.on("complete",(function(){t.destroy(),n.destroy(),i.destroy(),u.destroy(),a.destroy(),e.ready()})),this.timedEvent=this.time.delayedCall(3e3,this.ready,[],this),this.load.image("playButton","./src/assets/ui/PlayButton.png"),this.load.image("playButton2","./src/assets/ui/PlayButtonPressed.png"),this.load.image("phaserLogo","./src/assets/logo.png")}},{key:"init",value:function(){this.readyCount=0}},{key:"ready",value:function(){this.readyCount++,2===this.readyCount&&this.scene.start("Title")}},{key:"create",value:function(){}}]),t}();t.default=o},1452:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(71);var o,i=n(546),u=(o=i)&&o.__esModule?o:{default:o};var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"Title"))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Phaser.Scene),r(t,[{key:"preload",value:function(){}},{key:"centerButton",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Phaser.Display.Align.In.Center(e,this.add.zone(u.default.width/2,u.default.height/2-100*t,u.default.width,u.default.height))}},{key:"create",value:function(){var e=this;this.gameButton=this.add.sprite(100,200,"playButton").setInteractive(),this.centerButton(this.gameButton,-2),this.gameButton.setScale(1,.7),this.gameButton.on("pointerdown",(function(t){e.scene.start("Game")})),this.input.on("pointerover",(function(e,t){t[0].setTexture("playButton2")})),this.input.on("pointerout",(function(e,t){t[0].setTexture("playButton")}))}}]),t}();t.default=a},1453:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(71);var o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"Credits"))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Phaser.Scene),r(t,[{key:"preload",value:function(){}},{key:"create",value:function(){}}]),t}();t.default=o},546:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(71),t.default={type:Phaser.AUTO,parent:"phaser-example",width:800,height:600}},547:function(e,t,n){"use strict";n(71);var r=s(n(546)),o=s(n(1449)),i=s(n(1450)),u=s(n(1451)),a=s(n(1452)),c=s(n(1453));function s(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r.default));return e.scene.add("Boot",i.default),e.scene.add("Preloader",u.default),e.scene.add("Title",a.default),e.scene.add("Credits",c.default),e.scene.add("Game",o.default),e.scene.start("Boot"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Phaser.Game),t}();window.game=new f,console.log(window.game.isBooted)},548:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},760:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var c,s=[],f=!1,l=-1;function p(){f&&c&&(f=!1,c.length?s=c.concat(s):l=-1,s.length&&h())}function h(){if(!f){var e=a(p);f=!0;for(var t=s.length;t;){for(c=s,s=[];++l<t;)c&&c[l].run();l=-1,t=s.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function d(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new y(e,t)),1!==s.length||f||a(h)},y.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},9:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,o="~";function i(){}function u(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function a(e,t,n,r,i){if("function"!=typeof n)throw new TypeError("The listener must be a function");var a=new u(n,r||e,i),c=o?o+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],a]:e._events[c].push(a):(e._events[c]=a,e._eventsCount++),e}function c(e,t){0==--e._eventsCount?e._events=new i:delete e._events[t]}function s(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),(new i).__proto__||(o=!1)),s.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)r.call(e,t)&&n.push(o?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},s.prototype.listeners=function(e){var t=o?o+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,i=n.length,u=new Array(i);r<i;r++)u[r]=n[r].fn;return u},s.prototype.listenerCount=function(e){var t=o?o+e:e,n=this._events[t];return n?n.fn?1:n.length:0},s.prototype.emit=function(e,t,n,r,i,u){var a=o?o+e:e;if(!this._events[a])return!1;var c,s,f=this._events[a],l=arguments.length;if(f.fn){switch(f.once&&this.removeListener(e,f.fn,void 0,!0),l){case 1:return f.fn.call(f.context),!0;case 2:return f.fn.call(f.context,t),!0;case 3:return f.fn.call(f.context,t,n),!0;case 4:return f.fn.call(f.context,t,n,r),!0;case 5:return f.fn.call(f.context,t,n,r,i),!0;case 6:return f.fn.call(f.context,t,n,r,i,u),!0}for(s=1,c=new Array(l-1);s<l;s++)c[s-1]=arguments[s];f.fn.apply(f.context,c)}else{var p,h=f.length;for(s=0;s<h;s++)switch(f[s].once&&this.removeListener(e,f[s].fn,void 0,!0),l){case 1:f[s].fn.call(f[s].context);break;case 2:f[s].fn.call(f[s].context,t);break;case 3:f[s].fn.call(f[s].context,t,n);break;case 4:f[s].fn.call(f[s].context,t,n,r);break;default:if(!c)for(p=1,c=new Array(l-1);p<l;p++)c[p-1]=arguments[p];f[s].fn.apply(f[s].context,c)}}return!0},s.prototype.on=function(e,t,n){return a(this,e,t,n,!1)},s.prototype.once=function(e,t,n){return a(this,e,t,n,!0)},s.prototype.removeListener=function(e,t,n,r){var i=o?o+e:e;if(!this._events[i])return this;if(!t)return c(this,i),this;var u=this._events[i];if(u.fn)u.fn!==t||r&&!u.once||n&&u.context!==n||c(this,i);else{for(var a=0,s=[],f=u.length;a<f;a++)(u[a].fn!==t||r&&!u[a].once||n&&u[a].context!==n)&&s.push(u[a]);s.length?this._events[i]=1===s.length?s[0]:s:c(this,i)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=o?o+e:e,this._events[t]&&c(this,t)):(this._events=new i,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=o,s.EventEmitter=s,e.exports=s}});