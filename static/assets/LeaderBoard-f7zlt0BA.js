import{j as a,e as m,u as b,r as p}from"./index-cDrDiH5_.js";import{u}from"./useQuery-B9RzA9ab.js";import{a as x,L as h,P as j}from"./PageUI-yuraDqNr.js";import{a as f,b as N,q as k}from"./queryClient-DUqwzl3B.js";import{g as v}from"./getUser-DJBpJkua.js";import{S as q}from"./SlidingPanel-dhvZ6RxU.js";import{i as y}from"./coin-DlK3Y3AM.js";import"./Portal-Cj2NgbOH.js";function z(e){return f.get(`${N}/api/top100/${e}/`).then(s=>s.data).catch(s=>{console.log(s)})}const C="_leader__section_kv9aa_1",L="_leader__title_kv9aa_6",$="_page__list_kv9aa_16",d={leader__section:C,leader__title:L,page__list:$},S="/assets/sliding__prize-B9vwOjVE.png",O="_sliding__button_1a9ti_1",P="_sliding__block_1a9ti_9",E="_sliding__image_1a9ti_21",I="_sliding__title_1a9ti_25",F="_sliding__label_1a9ti_35",r={sliding__button:O,sliding__block:P,sliding__image:E,sliding__title:I,sliding__label:F},H=({initialHeight:e,fullHeight:s,isOpen:l,onClose:i})=>a.jsx(q,{darkened:!0,initialHeight:e,fullHeight:s,isOpen:l,onClose:i,children:a.jsxs("div",{className:r.sliding__block,children:[a.jsx("img",{className:r.sliding__image,src:S,alt:""}),a.jsx("h3",{className:r.sliding__title,children:"Супер-приз ждет тебя!"}),a.jsx("p",{className:r.sliding__label,children:"15 декабря игрок, который наберет наибольшее количество баллов, получит супер-приз — iPhone 16!"}),a.jsx("button",{onClick:i,className:r.sliding__button,children:"Ура!"})]})}),U="_leaderboard__item_zq2c1_1",w="_back_zq2c1_9",B="_leaderboard__avatar_zq2c1_13",G="_leaderboard__name_zq2c1_19",K="_leaderboard__coins_zq2c1_26",M="_iconCoin_zq2c1_33",Q="_leaderboard__index_zq2c1_38",R="_leaderboard__gift_zq2c1_45",_={leaderboard__item:U,back:w,leaderboard__avatar:B,leaderboard__name:G,leaderboard__coins:K,iconCoin:M,leaderboard__index:Q,leaderboard__gift:R},T=({id:e,name:s,points:l,index:i,openModal:o})=>a.jsxs("li",{className:i<=3?`${_.back} ${_.leaderboard__item}`:_.leaderboard__item,children:[a.jsx("span",{className:_.leaderboard__index,children:i}),a.jsx("img",{className:_.leaderboard__avatar,src:x,alt:"avatar"}),i===1&&a.jsx("button",{onClick:o,className:_.leaderboard__gift,children:a.jsx(h,{className:_.leaderboard__svg})}),a.jsx("h2",{className:_.leaderboard__name,children:s}),a.jsx("p",{className:_.leaderboard__coins,children:l}),a.jsx("img",{className:_.iconCoin,src:y,alt:""})]},e),aa=()=>{const e=m(v),{tg_id:s}=b(),[l,i]=p.useState(!1),o=()=>{i(!1)},c=()=>{i(!0)},{data:t}=u({queryFn:()=>z(s),queryKey:["leaderboard"]},k);return a.jsxs(a.Fragment,{children:[a.jsx(j,{className:d.leader__section,className__title:d.leader__title,place:t==null?void 0:t.player_rank,name:e==null?void 0:e.name,coins:e==null?void 0:e.points_all,gift:Number(t==null?void 0:t.player_rank)===1,title:"Leaderboard",time:"До конца осталось: 12 дней 8 часов",isOpen:c,children:a.jsx("ul",{className:d.page__list,children:t==null?void 0:t.top_players.map((n,g)=>a.jsx(T,{openModal:c,index:g+1,id:n.tg_id,name:n.name,points:n.points},n.tg_id))})}),a.jsx(H,{isOpen:l,onClose:o,initialHeight:"70%",fullHeight:"70vh"})]})};export{aa as default};