(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2313:function(e,n,a){Promise.resolve().then(a.bind(a,5420))},5420:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return b}});var t=a(7437),r=a(2265),s=a(7421),i=a.n(s),c=a(1396),o=a.n(c),_=function(){return(0,t.jsx)("main",{className:i().main_header,children:(0,t.jsxs)("header",{className:i().header,children:[(0,t.jsxs)("h1",{children:["Poke",(0,t.jsx)("span",{className:i().next,children:"Next"})]}),(0,t.jsxs)("nav",{children:[(0,t.jsx)(o(),{className:i().link,href:"/",children:"Home"}),(0,t.jsx)(o(),{className:i().link,href:"/about",children:"about"}),(0,t.jsx)(o(),{className:i().link,href:"/search",children:"search"})]})]})})},l=function(){return(0,t.jsx)("main",{children:(0,t.jsx)("footer",{children:(0,t.jsx)("h2",{children:"footer"})})})},h=a(1563),u=a.n(h),d=function(e){let{children:n}=e;return(0,t.jsxs)("main",{className:u().main_conteiner,children:[(0,t.jsx)(_,{}),n,(0,t.jsx)(l,{})]})},p=a(6691),f=a.n(p),g=a(131),m=a.n(g),x=a(4033);let j=async e=>{try{let n=await fetch(e),a=await n.json();return a}catch(e){return{name:"error"}}};var w=function(e){let{url:n}=e,[a,s]=(0,r.useState)(),i=(0,x.useRouter)();if((0,r.useEffect)(()=>{let e=async()=>{let e=await j(n);s(e)};e()},[n]),void 0!==a)return(0,t.jsxs)("section",{onClick:()=>{i.push("/details/".concat(null==a?void 0:a.id))},className:m().card+" "+m()[a.types[0].type.name],children:[(0,t.jsx)("p",{className:m().name,children:a.name}),(0,t.jsx)(f(),{src:a.sprites.other["official-artwork"].front_default,alt:a.name,width:160,height:100}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:m().height,children:["Height: ",a.height]}),(0,t.jsxs)("p",{className:m().weight,children:["Weight: ",a.weight]})]})]})},k=a(7171),N=a.n(k);let y=async e=>{let n=await fetch(e),a=await n.json();return a};var v=function(){let[e,n]=(0,r.useState)([]),[a,s]=(0,r.useState)("");(0,r.useEffect)(()=>{!async function(){try{let e=await fetch("https://pokeapi.co/api/v2/pokemon?limit=48"),a=await e.json();n(a.results),s(a.next)}catch(e){return[{name:"error",url:"error"}]}}()},[]);let i=async()=>{if(window.scrollY+window.innerHeight>=document.body.scrollHeight&&null!==a){let e=await y(a);n(n=>n.concat(e.results)),s(e.next)}};return(0,r.useEffect)(()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)})),(0,t.jsx)("section",{children:(0,t.jsx)("section",{className:N().main_pokedex,children:null==e?void 0:e.map(e=>(0,t.jsx)(w,{url:e.url},e.name))})})};function b(){return console.log("Home"),(0,t.jsx)(d,{children:(0,t.jsx)(v,{})})}},1563:function(){},7171:function(e){e.exports={main_pokedex:"page_main_pokedex__LQFU6"}},7421:function(e){e.exports={main_header:"page_main_header__LYI5Y",next:"page_next__KQM48",header:"page_header__9UO_S",link:"page_link___K45p"}},131:function(e){e.exports={card:"page_card__IM6s7",semirotate:"page_semirotate__8bw3I",pouse:"page_pouse__7PhDF",name:"page_name__2CbE9",height:"page_height__6h9d_",weight:"page_weight__mqfBn",normal:"page_normal__Bpzua",water:"page_water__3AaOq",fire:"page_fire__kurkb",grass:"page_grass__ErL3i",electric:"page_electric__uPd7r",ice:"page_ice__fyUS0",bug:"page_bug__ebf6F",flying:"page_flying__GjvQl",poison:"page_poison__jwhFz",ground:"page_ground__KiC8u",dragon:"page_dragon__JR2fP",rock:"page_rock__1AzMV",psychic:"page_psychic__8XbJD"}},4033:function(e,n,a){e.exports=a(8165)}},function(e){e.O(0,[685,165,971,596,744],function(){return e(e.s=2313)}),_N_E=e.O()}]);