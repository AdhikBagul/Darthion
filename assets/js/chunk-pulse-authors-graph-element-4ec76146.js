System.register(["./chunk-vendor.js","./chunk-frameworks.js","./chunk-tip.js"],(function(){"use strict";var t,a,r,e,s,n,o,i,l,c,d,h,u;return{setters:[function(e){t=e._,a=e.t,r=e.c},function(t){e=t.m,s=t.aY},function(t){n=t.x,o=t.y,i=t.l,l=t.m,c=t.d,d=t.I,h=t.A,u=t.e}],execute:function(){const g=e((async function(t){const a=await s(t,{headers:{accept:"application/json"}});return await a.json()}));let m=class PulseAuthorsGraphElement extends HTMLElement{async connectedCallback(){const t=this.graph,a=t.getAttribute("data-url");if(a){for(const a of t.querySelectorAll("svg.viz"))a.remove();t.classList.add("is-graph-loading"),t.classList.remove("is-graph-load-error","is-graph-empty");try{const r=await g(a);t.classList.remove("is-graph-loading"),null!=r&&r.unusable?t.classList.add("is-graph-without-usable-data"):null!=r&&0===r.length||null!=r&&null!=r.summary&&0===r.summary.total||null!=r[0]&&null!=r[0].weeks&&0===r[0].weeks.length?t.classList.add("is-graph-empty"):function(t,a){const r=a.slice(0,15),e={top:20,right:0,bottom:30,left:25},s=Math.round(t.getBoundingClientRect().width)-e.left-e.right,g=Math.round(t.getBoundingClientRect().height)-e.top-e.bottom,m=n().domain(o(15)).rangeRound([0,s]).padding(.2),p=i().domain([0,l(r,(t=>t.commits))]).range([g,0]),f=c(p).ticks(3).tickSize(-s).tickFormat((t=>t<1e3?t:d(",~s")(t))),v=h().attr("class","svg-tip").offset([-10,0]).html((function(t){const a=t.login||t.name;return`<strong>${t.commits}</strong> ${1===t.commits?"commit":"commits"} authored by <strong>${a}</strong>`})),w=u(t).append("svg").attr("class","viz").attr("width",s+e.left+e.right).attr("height",g+e.top+e.bottom).append("g").attr("transform",`translate(${e.left}, ${e.top})`).call(v);w.append("g").attr("class","y axis").call(f);const y=w.selectAll(".bar").data(r).enter().append("g").attr("class","bar "+t.getAttribute("data-bar-class")).attr("transform",((t,a)=>`translate(${m(a)}, 0)`));y.append("rect").attr("width",m.bandwidth()).attr("height",(t=>g-p(t.commits))).attr("y",(t=>p(t.commits))).on("mouseover",v.show).on("mouseout",v.hide),y.append("a").attr("xlink:href",(function(t){if(null!=t.login)return"/"+t.login})).attr("data-hovercard-type","user").attr("data-hovercard-url",(t=>t.hovercard_url)).append("image").attr("y",g+5).attr("alt",(t=>t.login||"")).attr("xlink:href",(t=>t.gravatar)).attr("width",m.bandwidth()).attr("height",m.bandwidth())}(t,r)}catch(r){throw t.classList.remove("is-graph-loading"),t.classList.add("is-graph-load-error"),r}}}};t([a],m.prototype,"graph",void 0),m=t([r],m)}}}));
//# sourceMappingURL=chunk-pulse-authors-graph-element-f498cd4a.js.map
