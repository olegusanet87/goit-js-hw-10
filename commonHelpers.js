import"./assets/styles-5b0d5b81.js";import{f as h,i as y}from"./assets/vendor-77e16229.js";import{E as v}from"./assets/bi_x-octagon-620cde6f.js";console.log("Timer");const t=document.querySelector("#datetime-picker");t.classList.add("dataset");const o=document.querySelector("[data-start]");o.classList.add("startbutton");o.addEventListener("mouseover",function(){o.classList.add("hover")});o.addEventListener("mouseout",function(){o.classList.remove("hover")});t.addEventListener("mouseover",function(){t.classList.add("hover")});t.addEventListener("mouseout",function(){t.classList.remove("hover")});let c=null,s=null;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]),s=e[0]}};h("#datetime-picker",S);function p(e){const n=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:n,hours:d,minutes:m,seconds:f}}function L(){!s||s.getTime()<=new Date().getTime()?(y.error({class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",pauseOnHover:!0,timeout:3e3,iconUrl:v,title:"Error",message:"Please choose a date in the future"}),document.querySelector("[data-start]").disabled=!0):(document.querySelector("[data-start]").disabled=!1,t.classList.add("active"))}document.querySelector("[data-start]").addEventListener("click",()=>{clearInterval(c),L();const e=s,i=new Date;let r=e.getTime()-i.getTime();r>0&&(o.classList.add("disable"),t.classList.add("disable"),c=setInterval(()=>{let{days:u,hours:l,minutes:n,seconds:d}=p(r);document.querySelector("[data-days]").textContent=a(u),document.querySelector("[data-hours]").textContent=a(l),document.querySelector("[data-minutes]").textContent=a(n),document.querySelector("[data-seconds]").textContent=a(d),r-=1e3,r<=0&&(clearInterval(c),document.querySelector("[data-start]").disabled=!1,document.querySelector("#datetime-picker").disabled=!1,o.classList.remove("disable"))},1e3),document.querySelector("[data-start]").disabled=!0,document.querySelector("#datetime-picker").disabled=!0)});function a(e){return e<10?e.toString().padStart(2,"0"):e.toString()}
//# sourceMappingURL=commonHelpers.js.map
