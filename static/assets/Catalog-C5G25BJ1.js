import{r as A,j as a,d as h,u as x}from"./index-CMpNqRDL.js";import{u as k}from"./useQuery-C0c1zEPY.js";import{a as v,b as w,q as y}from"./queryClient-BATE0oiz.js";import{l as z}from"./logo-C9EBW7GV.js";import{H as F}from"./HeaderCoinSvg-C6pixabV.js";import{g as j}from"./getUser-DJBpJkua.js";import{S as N}from"./SlidingPanel-BJZf0KST.js";import"./Portal-ogPHevcK.js";const b="_catalog__section_p0z47_1",B="_catalog__header_p0z47_6",U="_reverse_p0z47_15",Q="_catalog__button_p0z47_33",q="_catalog__image_p0z47_42",D="_catalog__list_p0z47_48",L="_category__caption_p0z47_53",Y="_catalog__title_p0z47_79",c={catalog__section:b,catalog__header:B,reverse:U,catalog__button:Q,catalog__image:q,catalog__list:D,category__caption:L,catalog__title:Y};function R(t){return v.get(`${w}/api/shop/product-list/${t}/`,{headers:{"Cache-Control":"no-cache","Content-Type":"application/json"}}).then(s=>s.data).catch(s=>{console.log(s)})}const Z="_catalog__item_ilwuq_1",S="_catalog__upper_ilwuq_19",O="_catalog__price_ilwuq_24",H="_catalog__info_ilwuq_31",M="_catalog__down_ilwuq_39",E="_catalog__img_ilwuq_45",V="_catalog__profession_ilwuq_54",K="_catalog__prof_ilwuq_54",n={catalog__item:Z,catalog__upper:S,catalog__price:O,catalog__info:H,catalog__down:M,catalog__img:E,catalog__profession:V,catalog__prof:K},G="/assets/iconBook-Dt4xzM-P.png",P="/assets/sale5-BHXnLRWG.png",W="/assets/sale10-DNBte8BQ.png",m="/assets/useful_materials-Cfmv-Iql.png",u="/assets/miniCurs-DjvlySZB.png",X="/assets/iconMerch-BICvc0cD.png",J=(t,s)=>{switch(t){case"Пройдите профтест на ....":return s(G);case"Скидка 5% на все курсы":return s(P);case"Скидка 10% на все курсы":return s(W);case"Python-разработчик":return s(m);case"Бизнес-аналитик":return s(m);case"Веб-дизайнер":return s(m);case"40 правил идеального текста для соцсетей":return s(m);case"Как найти клиентов фрилансеру":return s(m);case"Введение в программирование":return s(u);case"Введение в маркетинг":return s(u);case"Введение в дизайн":return s(u);case"Эксклюзивная байка":return s(X)}},I="data:image/png;base64,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",T=t=>{if(typeof t=="number")return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},C=({id:t,name:s,price:o,description:r,prof:_})=>{const[p,l]=A.useState();return A.useEffect(()=>{J(s,l)},[s]),a.jsxs("li",{className:n.catalog__item,children:[a.jsxs("div",{className:n.catalog__upper,children:[a.jsxs("p",{style:{display:"flex",alignItems:"center",gap:"8px"},className:n.catalog__price,children:[o!=="Бесплатно"?a.jsx("img",{src:I,alt:""}):null,T(o)]}),a.jsx("h2",{className:n.catalog__info,children:s}),a.jsx("p",{className:n.catalog__prof,children:_})]}),a.jsxs("div",{className:n.catalog__down,children:[a.jsx("img",{className:n.catalog__img,src:p,alt:"предмет каталога"}),a.jsx("span",{className:n.catalog__profession,children:r})]})]},t)},$="_sliding__button_1afla_1",aa="_sliding__block_1afla_9",sa="_sliding__image_1afla_22",ta="_sliding__title_1afla_26",ea="_sliding__label_1afla_34",ia="_sliding__span_1afla_45",la="_sliding__money_1afla_54",ca="_sliding__coins_1afla_60",g={sliding__button:$,sliding__block:aa,sliding__image:sa,sliding__title:ta,sliding__label:ea,sliding__span:ia,sliding__money:la,sliding__coins:ca},na="/assets/sliding__catalog-_ahktps_.png",oa=({isOpen:t,onClose:s,initialHeight:o,fullHeight:r})=>{const _=h(j);return a.jsx(N,{darkened:!0,isOpen:t,onClose:s,initialHeight:o,fullHeight:r,children:a.jsxs("div",{className:g.sliding__block,children:[a.jsxs("div",{className:g.sliding__money,children:[a.jsx("img",{width:277,height:90,src:na,alt:""}),a.jsx("span",{className:g.sliding__coins,children:_==null?void 0:_.points_all})]}),a.jsx("h2",{className:g.sliding__title,children:"У тебя есть баллы!"}),a.jsx("p",{className:g.sliding__label,children:"Обменяй их на бонусы в нашем магазине"}),a.jsx("p",{className:g.sliding__span,children:"*Важно: когда ты тратишь баллы в магазине, твой рейтинг в лидерборде не меняется!"}),a.jsx("button",{onClick:s,className:g.sliding__button,children:"Понятно"})]})})},ha=()=>{const{tg_id:t}=x(),s=h(j),[o,r]=A.useState(!1),_=()=>{r(!1)},p=()=>{r(!0)},{data:l}=k({queryFn:()=>R(t),queryKey:["catalog"]},y),f=["Каталог","Скидки","Полезные материалы","Мини-курсы","Мерч"].filter(i=>i!=="Каталог");return a.jsxs(a.Fragment,{children:[a.jsxs("section",{className:c.catalog__section,children:[a.jsxs("div",{className:c.catalog__header,children:[a.jsx("button",{onClick:p,className:c.catalog__button,children:"Информация"}),a.jsx("img",{className:c.catalog__image,src:z,alt:""}),a.jsxs("p",{className:c.reverse,children:[a.jsx("span",{children:s==null?void 0:s.points}),a.jsx(F,{})]})]}),a.jsx("h1",{className:c.catalog__title,children:"Каталог"}),a.jsxs("ul",{className:c.catalog__list,children:[l==null?void 0:l.shops.filter(i=>i.name==="Каталог").map(i=>i.products.map(e=>a.jsx(C,{prof:e.description,id:e.id,name:e.name,price:typeof e.price=="number"?"Бесплатно":e.price,description:i.description},e.id))),f.map(i=>a.jsxs(a.Fragment,{children:[a.jsx("li",{style:{margin:"30px 0"},children:a.jsx("h2",{className:c.category__caption,children:i})}),l==null?void 0:l.shops.filter(e=>e.name===i).map(e=>e.products.map(d=>a.jsx(a.Fragment,{children:a.jsx(C,{id:d.id,name:d.name,price:d.price,prof:d.description,description:e.description},d.id)})))]}))]})]}),a.jsx(oa,{fullHeight:"70vh",initialHeight:"70%",isOpen:o,onClose:_})]})};export{ha as default};