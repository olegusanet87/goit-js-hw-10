import"./assets/styles-596167b9.js";import{f as v,i as y}from"./assets/vendor-77e16229.js";import{E as S}from"./assets/bi_x-octagon-620cde6f.js";console.log("Timer");const o=document.querySelector("#datetime-picker");o.classList.add("dataset");const t=document.querySelector("[data-start]");t.classList.add("startbutton");document.querySelector("[data-start]").disabled=!0;let c=null,a=null;function p(e){const n=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:n,hours:d,minutes:f,seconds:h}}function m(){!a||a<=Date.now()||isNaN(a)?(y.error({class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",pauseOnHover:!0,timeout:3e3,iconUrl:S,title:"Error",message:"Please choose a date in the future"}),document.querySelector("[data-start]").disabled=!0):(t.removeAttribute.disabled,document.querySelector("[data-start]").disabled=!1,t.classList.add("normal"),o.classList.add("active"),t.addEventListener("mouseover",function(){t.classList.add("hover")}),t.addEventListener("mouseout",function(){t.classList.remove("hover")}),o.addEventListener("mouseover",function(){o.classList.add("hover")}),o.addEventListener("mouseout",function(){o.classList.remove("hover")}))}document.querySelector("[data-start]").addEventListener("click",()=>{clearInterval(c),m();const e=a,i=new Date;let r=e.getTime()-i.getTime();r>0&&(c=setInterval(()=>{let{days:u,hours:l,minutes:n,seconds:d}=p(r);document.querySelector("[data-days]").textContent=s(u),document.querySelector("[data-hours]").textContent=s(l),document.querySelector("[data-minutes]").textContent=s(n),document.querySelector("[data-seconds]").textContent=s(d),r-=1e3,r<=0&&(clearInterval(c),document.querySelector("[data-start]").disabled=!1,document.querySelector("#datetime-picker").disabled=!1)},1e3),document.querySelector("[data-start]").disabled=!0,document.querySelector("#datetime-picker").disabled=!0,o.classList.add("disable"),t.classList.remove("normal"),t.classList.remove("hover"))});const L={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]),a=e[0],m()}};v("#datetime-picker",L);function s(e){return e<10?e.toString().padStart(2,"0"):e.toString()}
//# sourceMappingURL=commonHelpers.js.map
