!function t(e,i,n){function r(s,d){if(!i[s]){if(!e[s]){var h="function"==typeof require&&require;if(!d&&h)return h(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var w=i[s]={exports:{}};e[s][0].call(w.exports,function(t){var i=e[s][1][t];return r(i?i:t)},w,w.exports,t,e,i,n)}return i[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)r(n[s]);return r}({1:[function(t,e,i){(function(){function t(t){var e=(window.innerWidth-t.width)/2,i=(window.innerHeight-t.height)/2;return t.style.top=i+"px",t.style.left=e+"px",t}for(var e=document.querySelectorAll(".pixgrid"),i=0;i<e.length;i++)e[i].addEventListener("click",function(e){if("IMG"===e.target.tagName){var i=document.createElement("div");i.id="overlay",document.body.appendChild(i),i.style.position="absolute",i.style.top=0,i.style.backgroundColor="rgba(0,0,0,0.7)",i.style.cursor="pointer",i.style.width=window.innerWidth+"px",i.style.height=window.innerHeight+"px",i.style.top=window.pageYOffset+"px",i.style.left=window.pageXOffset+"px";var n=e.target.src,r=document.createElement("img");r.id="largeImage",r.src=n.substr(0,n.length-7)+".jpg",r.style.display="block",r.style.position="absolute",r.addEventListener("load",function(){this.height>window.innerHeight&&(this.ratio=window.innerHeight/this.height,this.height=this.height*this.ratio,this.width=this.width*this.ratio),this.width>window.innerWidth&&(this.ratio=window.innerWidth/this.width,this.height=this.height*this.ratio,this.width=this.width*this.ratio),t(this),i.appendChild(r)}),r.addEventListener("click",function(){i&&(window.removeEventListener("resize",window,!1),window.removeEventListener("scroll",window,!1),i.parentNode.removeChild(i))},!1),window.addEventListener("scroll",function(){i&&(i.style.top=window.pageYOffset+"px",i.style.left=window.pageXOffset+"px")},!1),window.addEventListener("resize",function(){i&&(i.style.width=window.innerWidth+"px",i.style.height=window.innerHeight+"px",i.style.top=window.pageYOffset+"px",i.style.left=window.pageXOffset+"px",t(r))},!1)}},!1)})()},{}]},{},[1]);