(this["webpackJsonpdrawing-board"]=this["webpackJsonpdrawing-board"]||[]).push([[0],[,function(t,e,n){t.exports=n.p+"static/media/dot.69f073c4.png"},,,,,function(t,e,n){t.exports=n.p+"static/media/pen.447a0165.png"},function(t,e,n){t.exports=n.p+"static/media/erase.3bfa5ce6.png"},function(t,e,n){t.exports=n.p+"static/media/highlight.f127e836.png"},,,function(t,e,n){t.exports=n(19)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),a=n(3),r=n.n(a),s=(n(16),n(17),n(4)),h=n(5),l=n(10),c=n(9),d=(n(18),function(){function t(t,e,n,i,o){this.x=t,this.y=e,this.time=n||Date.now(),this.maxWidth=i,this.minWidth=o}return t.prototype.distanceTo=function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))},t.prototype.equals=function(t){return this.x===t.x&&this.y===t.y&&this.time===t.time},t.prototype.velocityFrom=function(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0},t}()),u=function(){function t(t,e,n,i,o,a){this.startPoint=t,this.control2=e,this.control1=n,this.endPoint=i,this.startWidth=o,this.endWidth=a}return t.fromPoints=function(e,n){var i=this.calculateControlPoints(e[0],e[1],e[2]).c2,o=this.calculateControlPoints(e[1],e[2],e[3]).c1;return new t(e[1],i,o,e[2],n.start,n.end)},t.calculateControlPoints=function(t,e,n){var i=t.x-e.x,o=t.y-e.y,a=e.x-n.x,r=e.y-n.y,s=(t.x+e.x)/2,h=(t.y+e.y)/2,l=(e.x+n.x)/2,c=(e.y+n.y)/2,u=Math.sqrt(i*i+o*o),m=Math.sqrt(a*a+r*r),g=m/(u+m),p=l+(s-l)*g,v=c+(h-c)*g,f=e.x-p,_=e.y-v;return{c1:new d(s+f,h+_),c2:new d(l+f,c+_)}},t.prototype.length=function(){for(var t,e,n=0,i=0;i<=10;i+=1){var o=i/10,a=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),r=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){var s=a-t,h=r-e;n+=Math.sqrt(s*s+h*h)}t=a,e=r}return n},t.prototype.point=function(t,e,n,i,o){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*i*(1-t)*t*t+o*t*t*t},t}();var m=function(){function t(e,n){var i=this;void 0===n&&(n={}),this.canvas=e,this.options=n,this._handleMouseDown=function(t){1===t.which&&(i._mouseButtonDown=!0,i._strokeBegin(t))},this._handleMouseMove=function(t){i._mouseButtonDown&&i._strokeMoveUpdate(t)},this._handleMouseUp=function(t){1===t.which&&i._mouseButtonDown&&(i._mouseButtonDown=!1,i._strokeEnd(t))},this._handleTouchStart=function(t){if(t.preventDefault(),1===t.targetTouches.length){var e=t.changedTouches[0];i._strokeBegin(e)}},this._handleTouchMove=function(t){t.preventDefault();var e=t.targetTouches[0];i._strokeMoveUpdate(e)},this._handleTouchEnd=function(t){if(t.target===i.canvas){t.preventDefault();var e=t.changedTouches[0];i._strokeEnd(e)}},this.velocityFilterWeight=n.velocityFilterWeight||.7,this.minWidth=n.minWidth||.5,this.maxWidth=n.maxWidth||2.5,this.throttle="throttle"in n?n.throttle:16,this.minDistance="minDistance"in n?n.minDistance:5,this.dotSize=n.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=n.penColor||"black",this.penColor2=n.penColor2||"black",this.backgroundColor=n.backgroundColor||"rgba(0,0,0,0)",this.onBegin=n.onBegin,this.onEnd=n.onEnd,this._strokeMoveUpdate=this.throttle?function(t,e){void 0===e&&(e=250);var n,i,o,a=0,r=null,s=function(){a=Date.now(),r=null,n=t.apply(i,o),r||(i=null,o=[])};return function(){for(var h=[],l=0;l<arguments.length;l++)h[l]=arguments[l];var c=Date.now(),d=e-(c-a);return i=this,o=h,d<=0||d>e?(r&&(clearTimeout(r),r=null),a=c,n=t.apply(i,o),r||(i=null,o=[])):r||(r=window.setTimeout(s,d)),n}}(t.prototype._strokeUpdate,this.throttle):t.prototype._strokeUpdate,this._ctx=e.getContext("2d"),this._data=[],this.clear(),this.on()}return t.prototype.clear=function(){var t=this._ctx,e=this.canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._reset(),this._isEmpty=!0},t.prototype.on=function(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())},t.prototype.off=function(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handleMouseDown),this.canvas.removeEventListener("pointermove",this._handleMouseMove),document.removeEventListener("pointerup",this._handleMouseUp),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)},t.prototype.isEmpty=function(){return this._isEmpty},t.prototype.fromData=function(t){var e=this;this.clear(),this._fromData(t,(function(t){var n=t.color,i=t.curve;return e._drawCurve({color:n,curve:i})}),(function(t){var n=t.color,i=t.point;return e._drawDot({color:n,point:i})})),this._data=t},t.prototype.toData=function(){return this._data},t.prototype._strokeBegin=function(t){var e=localStorage.getItem("isHighlighter"),n={color:this.penColor,points:[],maxWidth:this.maxWidth,minWidth:this.minWidth};"function"===typeof this.onBegin&&this.onBegin(t),"true"===e&&(n={color:this.penColor2,points:[],maxWidth:this.maxWidth,minWidth:this.minWidth,isHighLighter:!0});var i=this._data.length>0&&this._data[this._data.length-1];i&&i.isHighLighter&&(this._data.pop(),this.fromData(this._data)),this._data.push(n),this._reset(),this._strokeUpdate(t)},t.prototype._strokeUpdate=function(t){if(0!==this._data.length){var e=t.clientX,n=t.clientY,i=this._createPoint(e,n,this.maxWidth,this.minWidth),o=this._data[this._data.length-1],a=o.points,r=a.length>0&&a[a.length-1],s=!!r&&i.distanceTo(r)<=this.minDistance,h=o.color;if(!r||!r||!s){var l=this._addPoint(i);r?l&&this._drawCurve({color:h,curve:l}):this._drawDot({color:h,point:i}),a.push({time:i.time,x:i.x,y:i.y,maxWidth:i.maxWidth,minWidth:i.minWidth})}}else this._strokeBegin(t)},t.prototype._strokeEnd=function(t){this._strokeUpdate(t),"function"===typeof this.onEnd&&this.onEnd(t)},t.prototype._handlePointerEvents=function(){this._mouseButtonDown=!1,this.canvas.addEventListener("pointerdown",this._handleMouseDown),this.canvas.addEventListener("pointermove",this._handleMouseMove),document.addEventListener("pointerup",this._handleMouseUp)},t.prototype._handleMouseEvents=function(){this._mouseButtonDown=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)},t.prototype._handleTouchEvents=function(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)},t.prototype._reset=function(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor},t.prototype.changeBrushColor=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t&&(this.penColor=t),e&&(this.penColor2=e),console.log("this.penColor: ",this.penColor)},t.prototype.updateBrushWidth=function(t,e,n){this.minWidth=t,this.maxWidth=e,this.dotSize=n},t.prototype._createPoint=function(t,e,n,i){var o=this.canvas.getBoundingClientRect();return new d(t-o.left,e-o.top,(new Date).getTime(),n,i)},t.prototype._addPoint=function(t){var e=this._lastPoints;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);var n=this._calculateCurveWidths(e[1],e[2]),i=u.fromPoints(e,n);return e.shift(),i}return null},t.prototype._calculateCurveWidths=function(t,e){console.log("endPoint: ",e),console.log("startPoint: ",t);var n=this.velocityFilterWeight*e.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,i=this._strokeWidth(n,e.maxWidth,e.minWidth),o={end:i,start:i};return this._lastVelocity=n,this._lastWidth=i,o},t.prototype._strokeWidth=function(t,e,n){return Math.max(e/(t+1),n)},t.prototype._drawCurveSegment=function(t,e,n){var i=this._ctx;i.moveTo(t,e),i.arc(t,e,n,0,2*Math.PI,!1),this._isEmpty=!1},t.prototype._drawCurve=function(t){var e=t.color,n=t.curve,i=this._ctx,o=n.endWidth-n.startWidth,a=2*Math.floor(n.length());i.beginPath(),i.fillStyle=e;for(var r=0;r<a;r+=1){var s=r/a,h=s*s,l=h*s,c=1-s,d=c*c,u=d*c,m=u*n.startPoint.x;m+=3*d*s*n.control1.x,m+=3*c*h*n.control2.x,m+=l*n.endPoint.x;var g=u*n.startPoint.y;g+=3*d*s*n.control1.y,g+=3*c*h*n.control2.y,g+=l*n.endPoint.y;var p=Math.min(n.startWidth+l*o,this.maxWidth);this._drawCurveSegment(m,g,p)}i.closePath(),i.fill()},t.prototype._drawDot=function(t){var e=t.color,n=t.point,i=this._ctx,o="function"===typeof this.dotSize?this.dotSize():this.dotSize;i.beginPath(),this._drawCurveSegment(n.x,n.y,o),i.closePath(),i.fillStyle=e,i.fill()},t.prototype._fromData=function(t,e,n){for(var i=0,o=t;i<o.length;i++){var a=o[i],r=a.color,s=a.points,h=a.maxWidth,l=a.minWidth;if(s.length>1)for(var c=0;c<s.length;c+=1){var u=s[c],m=new d(u.x,u.y,u.time,h,l);0===c&&this._reset();var g=this._addPoint(m);g&&e({color:r,curve:g})}else this._reset(),n({color:r,point:s[0]})}},t}(),g=n(6),p=n.n(g),v=n(1),f=n.n(v),_=n(7),y=n.n(_),w=n(8),C=n.n(w),x=function(t){Object(l.a)(n,t);var e=Object(c.a)(n);function n(t){var i;return Object(s.a)(this,n),(i=e.call(this,t)).startDrawing=function(t){localStorage.setItem("isHighlighter","false");var e=i.state,n=e.penColor,o=e.hightlightColor;i.setState({selectedOption:t,selectedPx:"small"}),i.drawingPad.changeBrushColor(n,o),i.canvas.getContext("2d").globalCompositeOperation="source-over";var a=i.drawingPad.toData();if(a){var r=a.length>0&&a[a.length-1];r&&r.isHighLighter&&(a.pop(),i.drawingPad.fromData(a))}window.setTimeout((function(){return i.updatePx("small")}))},i.startErase=function(t){localStorage.setItem("isHighlighter","false"),i.setState({selectedOption:t,selectedPx:null}),i.drawingPad.changeBrushColor("white");var e=i.drawingPad.toData();if(i.drawingPad.updateBrushWidth(10,10,10),e){var n=e.length>0&&e[e.length-1];n&&n.isHighLighter&&(e.pop(),i.drawingPad.fromData(e))}i.canvas.getContext("2d").globalCompositeOperation="destination-out"},i.startHighlighting=function(t){var e=i.state,n=e.penColor,o=e.hightlightColor;i.setState({selectedOption:t,selectedPx:null}),i.drawingPad.updateBrushWidth(5,5,5),i.drawingPad.changeBrushColor(n,o),localStorage.setItem("isHighlighter","true"),i.canvas.getContext("2d").globalCompositeOperation="source-over"},i.onChangeColor=function(t,e){var n=t.target.value;if("penColor"===e)i.setState({penColor:n}),i.drawingPad.changeBrushColor(n);else if("highLighter"===e){var o=i.convertHex(n,50);i.setState({hightlightColor:o,placeHolderColor:n}),i.drawingPad.changeBrushColor(null,o)}},i.convertHex=function(t,e){var n=t.replace("#","");return 3===n.length&&(n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]),"rgba("+parseInt(n.substring(0,2),16)+","+parseInt(n.substring(2,4),16)+","+parseInt(n.substring(4,6),16)+","+e/100+")"},i.getCss=function(t){var e=i.state,n=e.selectedOption,o=e.selectedPx;return"string"===typeof t?o===t?"selected":"notSelected":n===t?"selected":"notSelected"},i.updatePx=function(t){if(1===i.state.selectedOption){i.setState({selectedPx:t});var e=i.getBrushWidth(t);i.drawingPad.updateBrushWidth(e,e,e)}},i.getBrushWidth=function(t){switch(t){case"small":return 1;case"medium":return 3;case"large":return 5;default:return null}},i.state={penColor:"black",hightlightColor:"rgba(0,0,0,0.5)",selectedOption:1,selectedPx:"small",placeHolderColor:"black"},i.drawingPad=null,i.canvas=null,i}return Object(h.a)(n,[{key:"componentDidMount",value:function(){localStorage.setItem("isHighlighter","false");var t=document.getElementById("drawing-pad");function e(){var e=Math.max(window.devicePixelRatio||1,1);t.width=t.offsetWidth*e,t.height=t.offsetHeight*e,t.getContext("2d").scale(e,e)}this.canvas=t,window.onresize=e,e();var n=new m(t,{backgroundColor:"rgb(255, 255, 255)",minWidth:1,maxWidth:1,dotSize:1});this.drawingPad=n}},{key:"render",value:function(){var t=this,e=this.state,n=e.penColor,i=e.placeHolderColor;return o.a.createElement("div",null,o.a.createElement("h1",{className:"mainColor"},"Drawing Board"),o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"leftPane"},o.a.createElement("img",{src:p.a,className:"padding10 large cursorP margin10 ".concat(this.getCss(1)),alt:"img",onClick:function(){return t.startDrawing(1)}}),o.a.createElement("div",null,o.a.createElement("img",{src:f.a,className:"small margin10 cursorP ".concat(this.getCss("small")),alt:"img",onClick:function(){return t.updatePx("small")}}),o.a.createElement("img",{src:f.a,className:"medium margin10 marginB6 cursorP ".concat(this.getCss("medium")),alt:"img",onClick:function(){return t.updatePx("medium")}}),o.a.createElement("img",{src:f.a,className:"large margin10 marginB4 cursorP ".concat(this.getCss("large")),alt:"img",onClick:function(){return t.updatePx("large")}})),o.a.createElement("div",null,o.a.createElement("span",null,"Pen Color : "),o.a.createElement("input",{type:"color",id:"favcolor",name:"favcolor",className:"margin10 cursorP",value:n,onChange:function(e){return t.onChangeColor(e,"penColor")}})),o.a.createElement("img",{src:y.a,id:"erase",className:"padding10 margin10 large cursorP ".concat(this.getCss(2)),alt:"img",onClick:function(){return t.startErase(2)}}),o.a.createElement("div",null,o.a.createElement("img",{src:C.a,id:"highlight",className:"padding10 margin10 large cursorP ".concat(this.getCss(3)),alt:"img",onClick:function(){return t.startHighlighting(3)}})),o.a.createElement("div",null,o.a.createElement("span",null,"HL Color : "),o.a.createElement("input",{type:"color",id:"favcolor",name:"favcolor",className:"margin10 cursorP",value:i,onChange:function(e){return t.onChangeColor(e,"highLighter")}}))),o.a.createElement("div",{className:"middlePane"},o.a.createElement("canvas",{id:"drawing-pad",className:"drawingPad",width:"1000",height:"1000"}))))}}]),n}(i.Component);var P=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.80877b00.chunk.js.map