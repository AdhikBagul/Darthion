System.register(["./chunk-vendor.js","./chunk-frameworks.js"],(function(){"use strict";var e,t;return{setters:[function(t){e=t.a},function(e){t=e.h}],execute:function(){let n=!1;function r(e,t){let n=e.nextElementSibling;for(;n&&s(n);)n.hidden=t,n=n.nextElementSibling}function c(e,t){e.querySelector(".js-runner-chevron-up").hidden=t,e.querySelector(".js-runner-chevron-down").hidden=!t}e("click",".js-open-runner-group",(function(e){if(n)return;n=!0;const t=e.currentTarget,u=t.closest(".js-runner-group");"false"===t.getAttribute("aria-expanded")?(t.setAttribute("aria-expanded","true"),r(u,!1),c(u,!1)):(t.setAttribute("aria-expanded","false"),r(u,!0),c(u,!0)),n=!1}));const u="SELECTED";function s(e){return null!=e&&e.classList.contains("js-runner")}e("details-menu-selected",".js-runner-group-visibility-menu",(function(e){const t=e.detail.relatedTarget,n=t.closest(".js-runner-group-form"),r=t.getAttribute("value");n.querySelector(".js-runner-group-targets-selection").hidden=r!==u}),{capture:!0}),e("details-menu-selected",".js-runner-group-component-visibility-menu",(function(e){const t=e.detail.relatedTarget,n=t.closest(".js-runner-group-form"),r=t.getAttribute("value");n.querySelector(".js-runner-group-targets-selection").hidden=r!==u,n.querySelector(".js-runner-group-targets-count").hidden=r!==u}),{capture:!0}),document.addEventListener("details-dialog-close",(function(e){const t=e.target.closest("selected-item-list");for(const n of t.items)n.checked=n.defaultChecked;t.updateCount()})),e("click",".js-btn-select-items",(function(e){const n=e.target.closest("details-dialog"),r=e.target.closest("selected-item-list");if(t(n))for(const t of r.items)t.defaultChecked=t.checked;n.toggle(!1);r.querySelector("selected-item-count").updateCount(Number(r.selectedCount.textContent))})),e("click",".js-runner-group-checkbox",(function(e){const t=e.currentTarget;if(!(t instanceof HTMLInputElement))return;const u=t.closest(".js-runner-group"),o=u.querySelector(".js-open-runner-group");if(!o)return;if(n)return;n=!0,t.checked&&(o.setAttribute("aria-expanded","true"),r(u,!1),c(u,!1));let i=u.nextElementSibling;for(;i&&s(i);){const e=i.querySelector(".js-bulk-actions-toggle");s(i.nextElementSibling)?e.checked=t.checked:(e.checked=!t.checked,e.click()),i=i.nextElementSibling}n=!1}))}}}));
//# sourceMappingURL=chunk-runner-groups-e88ed93e.js.map
