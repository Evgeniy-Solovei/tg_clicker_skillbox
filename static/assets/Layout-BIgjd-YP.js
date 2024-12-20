import{u as C,a as Z,b as T,c as U,r as _,d as P,j as e,L as E,e as N,i as V,O as K}from"./index-BIwUCy7Q.js";import{l as D}from"./logo-exXQDy5k.js";import{u as R,H as z,g as G,a as q}from"./fetchFriends-DnHKJu0v.js";import{a as y,b as B,q as k,i as O}from"./coin-2FF1BFL9.js";import{c as Q,P as Y}from"./SlidingPanel-Bx_4u1Zw.js";import{f as W}from"./formatNumber-B2gvpCqi.js";import{H as $,a as e1,b as s1,c as n1,S as a1,d as t1,p as o1,t as i1,r as r1}from"./ticket-CjIA5rMC.js";import{g as S}from"./getUser-DJBpJkua.js";import{g as l1}from"./getCurrTicket-unHkMUTY.js";import{u as J}from"./useMutation-DYFrq3Rx.js";import"./useBaseQuery-CZ36N49V.js";const c1="_main_143dx_1",d1={main:c1},_1="_header__list_16pg2_1",g1="_header__center_16pg2_23",A1="_fz_16pg2_29",h1="_reverse_16pg2_33",b1="_header__button_16pg2_47",m1="_avatar_16pg2_54",u={header__list:_1,header__center:g1,fz:A1,reverse:h1,header__button:b1,avatar:m1};function f1(i,o){return y.get(`${B}/api/player-info/${i}/${o}/`).then(s=>s.data).catch(s=>{console.log(s)})}const u1=()=>{const{tg:i,tg_id:o,userName:s,avatar:n}=C(),l=Z(),r=T(),c=new URLSearchParams(U().search).get("id"),[t,F]=_.useState(),[f,j]=_.useState(),[A,v]=_.useState(),{data:x}=R({queryFn:()=>f1(o,s),queryKey:["user"],enabled:!c&&!!o},k),{data:b}=R({queryKey:["addFriend"],queryFn:()=>G(o,s,t),enabled:!!t&&!!o},k),{data:L}=R({queryKey:["addFriendUtm"],queryFn:()=>q(o,s,f),enabled:!!f&&!!o},k);_.useEffect(()=>{x&&(l(P.addUserStore(x)),v(x))},[l,x]),_.useEffect(()=>{L&&(l(P.addUserStore(L)),v(L))},[l,L]),_.useEffect(()=>{b&&(l(P.addUserStore(b)),v(b))},[l,b]),_.useEffect(()=>{c!==null&&(/[a-zA-Z]/.test(c)?j(c):F(c))},[c]);const M=()=>{r("tasks"),i.HapticFeedback.impactOccurred("medium")};return e.jsx("header",{children:e.jsxs("ul",{className:u.header__list,children:[e.jsxs("li",{children:[e.jsx("img",{className:u.avatar,src:n,alt:"avatar"}),e.jsx("span",{className:A&&A.name.length>=10?u.fz:void 0,children:A==null?void 0:A.name})]}),e.jsx("li",{className:u.header__center,children:e.jsx("img",{width:69,height:15,src:D,alt:"logo"})}),e.jsx("li",{className:u.reverse,children:e.jsxs("button",{className:Q(u.header__button,u.reverse),onClick:M,children:[e.jsx("span",{children:A&&W(A==null?void 0:A.points)}),e.jsx(z,{})]})})]})})},p1="_footer_k3q06_1",x1="_footer__list_k3q06_16",C1="_footer__home_k3q06_23",j1="_footer__button_k3q06_27",v1="_upper_k3q06_34",k1="_footerNav__list_k3q06_40",N1="_popover__block_k3q06_53",w1="_popover__list_k3q06_60",I1="_popover__link_k3q06_86",F1="_home__task_k3q06_93",L1="_footer__game_k3q06_97",Q1="_popover__btn_block_k3q06_104",S1="_popover__button_k3q06_108",P1="_popover__next_button_k3q06_113",g={footer:p1,footer__list:x1,footer__home:C1,footer__button:j1,upper:v1,footerNav__list:k1,popover__block:N1,popover__list:w1,popover__link:I1,home__task:F1,footer__game:L1,popover__btn_block:Q1,popover__button:S1,popover__next_button:P1},R1=()=>e.jsxs("svg",{width:"43",height:"44",viewBox:"0 0 43 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M13.2232 30.9798C12.7617 30.9804 12.3022 30.9198 11.8567 30.7995C10.5196 30.4182 9.38516 29.528 8.69684 28.3199C8.00851 27.1118 7.82112 25.682 8.17486 24.3373L10.3859 15.9488C10.5581 15.2699 10.8642 14.6322 11.2862 14.0733C11.7083 13.5143 12.2378 13.0454 12.8436 12.6939C13.4335 12.3523 14.0853 12.131 14.7613 12.0431C15.4373 11.9551 16.124 12.0022 16.7817 12.1815C17.4808 12.3756 18.1319 12.7129 18.6939 13.1719C19.2558 13.6309 19.7162 14.2017 20.046 14.848H22.5132C22.842 14.201 23.3022 13.6297 23.8642 13.1706C24.4263 12.7114 25.0779 12.3746 25.7775 12.1815C26.4352 12.0022 27.1219 11.9551 27.7979 12.0431C28.4739 12.131 29.1257 12.3523 29.7156 12.6939C30.3185 13.0445 30.846 13.5109 31.2678 14.0662C31.6897 14.6216 31.9974 15.2549 32.1733 15.9298L34.3843 24.3373C34.7434 25.6859 34.5575 27.1216 33.8668 28.3343C33.1761 29.547 32.0361 30.4393 30.693 30.8185C30.0353 30.9978 29.3486 31.0449 28.6726 30.9569C27.9966 30.869 27.3448 30.6477 26.7549 30.3061C26.1511 29.9568 25.6228 29.4908 25.2008 28.9352C24.7788 28.3797 24.4717 27.7457 24.2972 27.0702L24.1264 26.2352H18.4328L18.2146 27.0512C18.0401 27.7267 17.7329 28.3607 17.311 28.9162C16.889 29.4718 16.3607 29.9378 15.7568 30.2871C14.9858 30.7318 14.1132 30.9704 13.2232 30.9798ZM15.4247 13.8991C14.8521 13.9014 14.2899 14.0518 13.7925 14.3356C13.0133 14.7927 12.4469 15.54 12.2173 16.4137L10.0063 24.8023C9.77494 25.6665 9.89184 26.587 10.3319 27.366C10.7719 28.1449 11.5 28.7202 12.3596 28.9681C12.7748 29.0813 13.2083 29.1111 13.6351 29.0557C14.0618 29.0004 14.4733 28.8609 14.8458 28.6455C15.2337 28.4215 15.5728 28.1223 15.8433 27.7655C16.1139 27.4086 16.3103 27.0012 16.4211 26.5673L17.0094 24.3373H25.5498L26.1286 26.5673C26.2414 27.0004 26.4386 27.4069 26.7089 27.7635C26.9792 28.1202 27.3174 28.4199 27.7039 28.6455C28.0782 28.8607 28.4913 29 28.9196 29.0554C29.3478 29.1107 29.7828 29.0811 30.1996 28.9681C31.0602 28.7225 31.7892 28.1472 32.2281 27.3671C32.667 26.5871 32.7803 25.6654 32.5434 24.8023L30.3324 16.4137C30.2222 15.9808 30.0271 15.5741 29.7583 15.2174C29.4895 14.8606 29.1524 14.5609 28.7667 14.3356C28.3923 14.1203 27.9792 13.981 27.551 13.9257C27.1227 13.8703 26.6878 13.9 26.271 14.0129C25.7556 14.1599 25.2826 14.4276 24.8915 14.794C24.5004 15.1604 24.2023 15.6148 24.022 16.1196L23.7943 16.7459H18.7649L18.5372 16.1196C18.3553 15.6142 18.0556 15.1594 17.6628 14.793C17.27 14.4267 16.7955 14.1592 16.2787 14.0129C16.0002 13.9381 15.7131 13.8998 15.4247 13.8991Z",fill:"white"}),e.jsx("path",{d:"M15.5859 21.4906C15.2105 21.4906 14.8436 21.3792 14.5315 21.1707C14.2194 20.9622 13.9761 20.6658 13.8325 20.319C13.6888 19.9722 13.6512 19.5906 13.7245 19.2224C13.7977 18.8543 13.9784 18.5161 14.2439 18.2507C14.5093 17.9853 14.8474 17.8045 15.2156 17.7313C15.5837 17.6581 15.9653 17.6956 16.3121 17.8393C16.6589 17.9829 16.9553 18.2262 17.1639 18.5383C17.3724 18.8504 17.4837 19.2173 17.4837 19.5927C17.4837 20.096 17.2838 20.5788 16.9278 20.9347C16.5719 21.2906 16.0892 21.4906 15.5859 21.4906Z",fill:"white"}),e.jsx("path",{d:"M26.9733 18.644C27.4974 18.644 27.9223 18.2191 27.9223 17.695C27.9223 17.1709 27.4974 16.7461 26.9733 16.7461C26.4493 16.7461 26.0244 17.1709 26.0244 17.695C26.0244 18.2191 26.4493 18.644 26.9733 18.644Z",fill:"white"}),e.jsx("path",{d:"M26.9733 22.4399C27.4974 22.4399 27.9223 22.015 27.9223 21.4909C27.9223 20.9668 27.4974 20.542 26.9733 20.542C26.4493 20.542 26.0244 20.9668 26.0244 21.4909C26.0244 22.015 26.4493 22.4399 26.9733 22.4399Z",fill:"white"}),e.jsx("path",{d:"M25.0749 20.5414C25.599 20.5414 26.0238 20.1166 26.0238 19.5925C26.0238 19.0684 25.599 18.6436 25.0749 18.6436C24.5508 18.6436 24.126 19.0684 24.126 19.5925C24.126 20.1166 24.5508 20.5414 25.0749 20.5414Z",fill:"white"}),e.jsx("path",{d:"M28.8713 20.5414C29.3954 20.5414 29.8202 20.1166 29.8202 19.5925C29.8202 19.0684 29.3954 18.6436 28.8713 18.6436C28.3472 18.6436 27.9224 19.0684 27.9224 19.5925C27.9224 20.1166 28.3472 20.5414 28.8713 20.5414Z",fill:"white"})]}),y1="/assets/footer__home-Co125yDD.webp",H="data:image/webp;base64,UklGRuIBAABXRUJQVlA4WAoAAAAQAAAAJwAANQAAQUxQSE8BAAANgGPb2rHniTvbNuofdWzbnoDRZQBJZdsZhFl96WyzM9/nfZ/3r5IuIhi4bdvIuT2Y4O4XICwXra3JsaKAdGldFq+eXYKfFmUTbLrENNAcH8tGwW1EO8J9PL7tlWSeTVBMniVzZYtyJPvIohZFmjo+YpdF+f+29BDs+nz53UoHta18G//Mskh4mJeNYZjF4qF2CMw94w+lYjUB4NHYDgChLYW3ErGcBgDHau/fGULaUm/p6wwj+a+omKUn6pZ6d5ptsFbW4P7bwLPn+5C2TrENDpp3qrrcmcPWokOSxjY4LQLYKRtyBoQRNLRmMA/kjTljTKjxVnYZcseYQENjFX1PgiYo6+JgFK2cNzIfI2l4EWFCjfdJxZhQwwsFE2h4IWFA0mjYB0UjYvqEN6gYYSViFI2KETQ6JtToWJ87nGQCU5I3U53NtkAndbvwCH+oAgBWUDggbAAAAFAHAJ0BKigANgAuaUikUiIlpaWFgGhLSACvHf4B+AH6Qfn73Aawy5oHBjkih+hWYbdlx3wd8zi2z5jmGODVYCntWAAA4CnRgPG5f2lO2cgXTu5i2x2ORluOi/+4vH//71p7qcxx78/YqQAAAA==",B1=[{id:1,label:"Лидерборд",icon:e.jsx($,{}),path:"leaderboard"},{id:2,label:"Каталог",icon:e.jsx(e1,{}),path:"catalog"},{id:3,label:"Задания",icon:e.jsx(s1,{className:g.home__task}),path:"tasks"},{id:4,label:"Друзья",icon:e.jsx(n1,{className:g.home__task}),path:"friends"}],H1=()=>e.jsx("svg",{width:"43",height:"44",viewBox:"0 0 43 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12.3636 17.777L13.2519 17.1262L14.1092 17.777C14.419 18.0042 14.7496 17.7666 14.636 17.4258L14.2951 16.3722L15.1627 15.7215C15.4313 15.5149 15.328 15.1327 14.9871 15.1327H13.9026L13.5411 14.0069C13.4481 13.7073 13.0453 13.7073 12.9523 14.0069L12.5908 15.1327H11.4959C11.1551 15.1327 11.0415 15.5149 11.3203 15.7215L12.1983 16.3722L11.8574 17.4258C11.7335 17.7666 12.064 17.9939 12.3636 17.777ZM18.1478 16.9093H31.1521C31.6169 16.9093 31.9784 16.5478 31.9784 16.083C31.9784 15.6079 31.6169 15.2464 31.1521 15.2464H18.1478C17.683 15.2464 17.3112 15.6079 17.3112 16.083C17.3112 16.5478 17.683 16.9093 18.1478 16.9093ZM12.3636 24.0054L13.2519 23.3547L14.1092 24.0054C14.419 24.2429 14.7496 23.9951 14.636 23.6542L14.2951 22.6006L15.1627 21.9499C15.4313 21.7433 15.328 21.3715 14.9871 21.3715H13.9026L13.5411 20.2353C13.4481 19.9461 13.0453 19.9461 12.9523 20.2353L12.5908 21.3715H11.4959C11.1551 21.3715 11.0415 21.7433 11.3203 21.9499L12.1983 22.6006L11.8574 23.6542C11.7438 23.9951 12.064 24.2223 12.3636 24.0054ZM18.1478 23.1584H31.1521C31.6169 23.1584 31.9784 22.7866 31.9784 22.3217C31.9784 21.8569 31.6169 21.4954 31.1521 21.4954H18.1478C17.683 21.4954 17.3112 21.8569 17.3112 22.3217C17.3112 22.7866 17.683 23.1584 18.1478 23.1584ZM12.3636 30.2648L13.2519 29.614L14.1092 30.2648C14.419 30.5023 14.7496 30.2544 14.636 29.9136L14.2951 28.86L15.1627 28.2093C15.4313 28.0027 15.328 27.6309 14.9871 27.6309H13.9026L13.5411 26.4947C13.4481 26.2055 13.0453 26.1951 12.9523 26.4947L12.5908 27.6309H11.4959C11.1551 27.6309 11.0415 28.0027 11.3203 28.2093L12.1983 28.86L11.8574 29.9136C11.7438 30.2544 12.064 30.4817 12.3636 30.2648ZM18.1478 29.3971H31.1521C31.6169 29.3971 31.9784 29.0356 31.9784 28.5708C31.9784 28.0957 31.6169 27.7342 31.1521 27.7342H18.1478C17.683 27.7342 17.3112 28.0957 17.3112 28.5708C17.3112 29.0356 17.683 29.3971 18.1478 29.3971Z",fill:"white"})}),U1=()=>{const{tg:i}=C(),[o,s]=_.useState(!1),n=_.useRef(null),l=()=>{s(d=>!d)},r=()=>{if(n.current){const d=n.current.scrollHeight,c=n.current.scrollTop,t=n.current.clientHeight;if(c+t>=d)n.current.scrollTo({top:0,behavior:"smooth"});else{const f=t;n.current.scrollBy({top:f,behavior:"smooth"})}}i.HapticFeedback.impactOccurred("medium")};return e.jsx("li",{className:g.upper,children:e.jsxs("div",{className:g.popover__block,children:[o&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:g.popover__button,children:e.jsx("button",{className:g.popover__next_button,onClick:r,children:e.jsx("img",{width:20,height:27,src:H,alt:"footerArrow"})})}),e.jsx("ul",{className:g.popover__list,ref:n,children:B1.map(d=>e.jsx("li",{children:e.jsxs(E,{onClick:()=>{i.HapticFeedback.impactOccurred("medium")},className:g.popover__link,to:d.path,children:[d.icon,e.jsx("span",{children:d.label})]})},d.id))})]}),e.jsx("button",{onClick:l,className:g.footer__button,children:o?e.jsx("img",{width:20,height:25,src:H,alt:"footerArrow"}):e.jsx(H1,{})})]})})},E1=()=>{const{tg:i}=C(),[o,s]=_.useState(!1),[n,l]=_.useState(!1),r=N(S),d=N(l1),c=()=>{r&&((r==null?void 0:r.tickets)>0&&d===!0||r.premium_tickets>0&&d===!1?s(!0):((r==null?void 0:r.tickets)<=0&&d===!0||r.premium_tickets>=0&&d===!1)&&l(!0),i.HapticFeedback.impactOccurred("medium"))},t=()=>{i.HapticFeedback.impactOccurred("medium"),s(!1),l(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("footer",{className:g.footer,children:e.jsx("nav",{children:e.jsxs("ul",{className:g.footer__list,children:[e.jsx("li",{className:g.upper,children:e.jsx("button",{onClick:c,className:g.footer__game,children:e.jsx(R1,{})})}),e.jsx("li",{children:e.jsx(E,{onClick:()=>{i.HapticFeedback.impactOccurred("medium")},to:"/",children:e.jsx("img",{width:248,height:96,className:g.footer__home,src:y1,alt:"домой"})})}),e.jsx(U1,{})]})})}),e.jsx(a1,{user:r,fullHeight:"75vh",initialHeight:"75%",onClose:t,isOpen:o}),e.jsx(t1,{fullHeight:"40vh",initialHeight:"40%",isOpen:n,onClose:t,currentTicket:d})]})},O1="_calendar__block_gagfs_1",J1="_calendar__list_gagfs_7",X1="_calendar__title_gagfs_24",M1="_calendar__info_gagfs_37",Z1="_calendar__date_gagfs_51",T1="_calendar__prize_gagfs_67",V1="_calendar__button_gagfs_74",K1="_calendar__bonus_gagfs_93",h={calendar__block:O1,calendar__list:J1,calendar__title:X1,calendar__info:M1,calendar__date:Z1,calendar__prize:T1,calendar__button:V1,calendar__bonus:K1},D1="_modal_14re6_1",z1="_overlay_14re6_20",G1="_content_14re6_28",q1="_open_14re6_39",Y1="_close_14re6_48",p={modal:D1,overlay:z1,content:G1,open:q1,close:Y1};function X(i){const{children:o,isOpen:s,onClose:n,lazy:l,hiddenClose:r=!1}=i,[d,c]=_.useState(!1),[t,F]=_.useState(!1);_.useEffect(()=>{s&&F(!0)},[s]);const f=_.useRef(),j=_.useCallback(()=>{n&&(c(!0),f.current=setTimeout(()=>{c(!1),n()},300))},[n]),A=_.useCallback(b=>{b.key==="Escape"&&j()},[j]),v=b=>{b.stopPropagation()};if(_.useEffect(()=>(s&&(window.addEventListener("keydown",A),document.body.classList.add(p.bodyOpen)),()=>{clearTimeout(f.current),window.removeEventListener("keydown",A),document.body.classList.remove(p.bodyOpen)}),[s,A]),l&&!t)return null;const x={[p.open]:s,[p.close]:d};return e.jsx(Y,{children:e.jsx("div",{className:Q(p.modal,x),children:e.jsx("div",{className:p.overlay,onClick:j,children:e.jsxs("div",{className:p.content,onClick:v,children:[r,o]})})})})}const W1="_calendar__grid_w8kki_1",$1="_calendar__item_w8kki_8",ee="_blue_w8kki_15",se="_calendar__day_w8kki_19",ne="_calendar__bonus_w8kki_42",m={calendar__grid:W1,calendar__item:$1,blue:ee,calendar__day:se,calendar__bonus:ne},ae=()=>e.jsx("svg",{width:"41",height:"40",viewBox:"0 0 41 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M20.4044 2.71387C16.9896 2.71387 13.6514 3.72648 10.8121 5.62367C7.97275 7.52085 5.75976 10.2174 4.45296 13.3723C3.14615 16.5272 2.80423 19.9988 3.47044 23.348C4.13664 26.6972 5.78104 29.7737 8.19569 32.1883C10.6104 34.603 13.6868 36.2474 17.036 36.9136C20.3853 37.5798 23.8568 37.2379 27.0117 35.9311C30.1666 34.6243 32.8632 32.4113 34.7603 29.5719C36.6575 26.7326 37.6701 23.3944 37.6701 19.9796C37.6701 15.4004 35.8511 11.0088 32.6131 7.77088C29.3752 4.53293 24.9836 2.71387 20.4044 2.71387ZM17.9379 26.8736L11.7715 20.7072L13.7324 18.7463L17.9379 22.9518L27.0764 13.8133L29.0447 15.7692L17.9379 26.8736Z",fill:"white"})}),te=({bonus_info:i,conclusive_day:o})=>{const s=N(S);return e.jsx(e.Fragment,{children:i.map((n,l)=>e.jsxs("li",{className:o===n.day?`${m.blue} ${m.calendar__item}`:m.calendar__item,children:[e.jsxs("h3",{className:m.calendar__day,children:[n.day," день"]}),e.jsx("ul",{className:m.calendar__grid,children:s&&s.consecutive_days<=n.day?e.jsxs(e.Fragment,{children:[n.points&&e.jsxs("li",{className:m.calendar__bonus,children:[e.jsx("span",{style:{color:"#fff"},children:n.points}),e.jsx("img",{width:18,height:18,src:O,alt:""})]}),n.premium_tickets&&e.jsxs("li",{className:m.calendar__bonus,children:[e.jsx("span",{style:{color:"#fff"},children:n.premium_tickets}),e.jsx("img",{width:28,height:28,src:o1,alt:""})]}),n.tickets&&e.jsxs("li",{className:m.calendar__bonus,children:[e.jsx("span",{style:{color:"#fff"},children:n.tickets}),e.jsx("img",{width:28,height:28,src:i1,alt:""})]})]}):e.jsx("li",{children:e.jsx(ae,{})})})]},l))})},oe="data:image/png;base64,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";function ie(i){return y.post(`${B}/api/bonus_today/`,{tg_id:i}).then(o=>o.data).catch(o=>{console.log(o)})}const re=({isOpen:i,onClose:o})=>{const s=N(S),{tg:n,tg_id:l}=C(),r=J({mutationFn:c=>ie(c.tg_id),mutationKey:["calendar"]},k),d=c=>{r.mutate({tg_id:c}),o(),n.HapticFeedback.impactOccurred("medium")};return e.jsx(X,{lazy:!0,isOpen:i,onClose:o,children:e.jsxs("div",{className:h.calendar__block,children:[e.jsx("h1",{className:h.calendar__title,children:"Ежедневная награда"}),e.jsx("ul",{className:h.calendar__list,children:e.jsx(te,{conclusive_day:s&&s.consecutive_days,bonus_info:(s==null?void 0:s.bonus_info)||[]})}),s==null?void 0:s.bonus_info.filter(c=>c.day===s.consecutive_days).map(c=>e.jsxs("div",{className:h.calendar__info,children:[e.jsxs("h2",{className:h.calendar__date,children:[c.day," день"]}),e.jsxs("ul",{className:h.calendar__prize,children:[c.points&&e.jsxs("li",{className:h.calendar__bonus,children:[e.jsx("img",{width:32,height:32,src:O,alt:""}),e.jsx("span",{children:c.points})]}),c.premium_tickets&&e.jsxs("li",{className:h.calendar__bonus,children:[e.jsx("img",{width:51,height:51,src:oe,alt:""}),e.jsx("span",{children:c.premium_tickets})]}),c.tickets&&e.jsxs("li",{className:h.calendar__bonus,children:[e.jsx("img",{width:51,height:51,src:r1,alt:""}),e.jsx("span",{children:c.tickets})]})]}),e.jsx("button",{onClick:()=>d(l),className:h.calendar__button,children:"Забрать награду"})]},c.day)),e.jsx("img",{src:V,alt:"skillbox box"})]})})},le="/assets/onb__one-lhffAG97.webp",ce="/assets/onb__two-BPI4lFHp.webp",de="/assets/onb__three-BTLWLlzl.webp",_e="/assets/onb__four-eQ4xUS_l.webp",ge="/assets/onb__five-qbo3SWIf.webp",Ae="/assets/onb__six-CDc9SejE.webp",he="/assets/onb__seven-h5CmXSic.webp",be=[{id:1,title:"Привет!",image:le,label:"Я Бокси, полон знаний, навыков и люблю ими делиться. А ещё у меня много сюрпризов! Тапай и забирай подарки!"},{id:2,title:"Лидерборд",image:ce,label:"Рейтинг игроков, где ты можешь отслеживать свое место"},{id:3,title:"Каталог",image:de,label:"Бонусы и подарки"},{id:4,title:"Задания",image:_e,label:"Выполняй задания и получай дополнительные баллы"},{id:5,title:"Друзья",image:ge,label:"Приглашай друзей, чтобы играть вместе, и получай награды!"},{id:6,title:"Билеты",image:Ae,label:"Каждый день ты получаешь от 1 до 4 стандартных билетов  (1 билет = 1 игра)"},{id:7,title:"Премиум-билеты",image:he,label:" Билеты, которые удваивают положительные баллы в игре"}],me="_onboarding__list_142u2_1",fe="_onboarding__item_142u2_5",ue="_onboarding__image_142u2_13",pe="_onboarding__info_142u2_20",xe="_onboarding__title_142u2_39",Ce="_onboarding__label_142u2_47",je="_onboarding__button_142u2_56",ve="_onboarding__skip_142u2_70",ke="_onboarding__progress_142u2_76",Ne="_onboarding__image_top_142u2_84",we="_onboarding__image_seven_142u2_89",a={onboarding__list:me,onboarding__item:fe,onboarding__image:ue,onboarding__info:pe,onboarding__title:xe,onboarding__label:Ce,onboarding__button:je,onboarding__skip:ve,onboarding__progress:ke,onboarding__image_top:Ne,onboarding__image_seven:we};function Ie(i){return y.post(`${B}/api/instruction/`,{tg_id:i}).then(o=>o.data).catch(o=>{console.log(o)})}const Fe=({id:i,img:o,title:s,label:n,buttonStart:l})=>e.jsxs("li",{className:a.onboarding__item,children:[e.jsx("img",{className:Q(a.onboarding__image_top,a.onboarding__image),width:375,height:400,src:o,alt:""}),e.jsxs("div",{className:a.onboarding__info,children:[e.jsx("h2",{className:a.onboarding__title,children:s}),e.jsx("p",{className:a.onboarding__label,children:n}),e.jsx("button",{onClick:l,className:a.onboarding__button,children:"Начать"})]})]},i),w=()=>e.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 0C31.0457 9.65645e-07 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.95431 -9.65645e-07 20 0ZM15.4336 13.7234C14.8555 13.1575 14.8555 12.2402 15.4336 11.6744C16.0116 11.1085 16.9489 11.1085 17.527 11.6744L25.8164 19.788C26.3945 20.3538 26.3945 21.2712 25.8164 21.837L17.527 29.9506C16.9489 30.5165 16.0116 30.5165 15.4336 29.9506C14.8555 29.3848 14.8555 28.4675 15.4336 27.9016L22.6763 20.8125L15.4336 13.7234Z",fill:"#3D3BFF"}),e.jsx("path",{opacity:"0.8",d:"M15.4336 11.6744C14.8555 12.2402 14.8555 13.1575 15.4336 13.7234L22.6763 20.8125L15.4336 27.9016C14.8555 28.4675 14.8555 29.3848 15.4336 29.9506C16.0116 30.5165 16.9489 30.5165 17.527 29.9506L25.8164 21.837C26.3945 21.2712 26.3945 20.3538 25.8164 19.788L17.527 11.6744C16.9489 11.1085 16.0116 11.1085 15.4336 11.6744Z",fill:"white"})]}),I=()=>e.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 0C8.9543 9.65645e-07 -9.65645e-07 8.95431 0 20C9.65645e-07 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 -9.65645e-07 20 0ZM24.5664 13.7234C25.1445 13.1575 25.1445 12.2402 24.5664 11.6744C23.9884 11.1085 23.0511 11.1085 22.473 11.6744L14.1836 19.788C13.6055 20.3538 13.6055 21.2712 14.1836 21.837L22.473 29.9506C23.0511 30.5165 23.9884 30.5165 24.5664 29.9506C25.1445 29.3848 25.1445 28.4675 24.5664 27.9016L17.3237 20.8125L24.5664 13.7234Z",fill:"#3D3BFF"}),e.jsx("path",{opacity:"0.8",d:"M24.5664 11.6744C25.1445 12.2402 25.1445 13.1575 24.5664 13.7234L17.3237 20.8125L24.5664 27.9016C25.1445 28.4675 25.1445 29.3848 24.5664 29.9506C23.9884 30.5165 23.0511 30.5165 22.473 29.9506L14.1836 21.837C13.6055 21.2712 13.6055 20.3538 14.1836 19.788L22.473 11.6744C23.0511 11.1085 23.9884 11.1085 24.5664 11.6744Z",fill:"white"})]}),Le="data:image/webp;base64,UklGRgoDAABXRUJQVlA4WAoAAAAQAAAAuAAADwAAQUxQSKAAAAABV2AQYNpoETSDQrjJIyIE9TvH4DQAJEeZz/+ol0hK+RKwUAUSCQqbfU5TJjf7agqI6L/Ctm2bPFB26QhguHCdAwAAP0X/JrnMksZRsSVJToVjqPivkrYnHD/FjBRBmTR+ilUAVMKxU2wCoBOOneIaABPh2CnMZx8ArXDsFPMAaIRjpxgCQJPhp3iNfzs3hX12+tdY6uwUKRI7LgqNtJ0CVlA4IEQCAAAQBQCdASq5ABAAAAAAJZQAA0F7HbjG7kp/B7M29JWpaoWhkA5+ODVy+r5DjSjgfBAAAP7//2i6ZP+NxE35tInQVSETzV84gFeN8RLg7+3coDTIpr694ZCI2fkZD/y++zH8m//oPTw3AJVs5IjwO0kOU7d1//97/f/BO/6bZ/4NfqNP4neg9f7AN4D/s6D/aLYr//e/3/wTv+lIf+Gv6jT+J3ot3+0faA/7Sa/1/cwf/9//utcH9d/1fwE/02if3//uucr9d/0bwu/2/L0ZsBKGvC8bRc5EvhmYIGiIiUUvTby22RJt//72R/+Dq/02z/wa/VM/v/9JW/2AbwH/Z0H+0XUTf+9kf/g6v9KQ/7//qmf3/+mZf7R9oD/spX/X9wt//LP+/1wfDL/5fwE/02X/vP/v+gL9p9+/o2UP9vof/9iQ7//7jERaaWQSv82kToKoqOjpogINE4r/EfGqYS5TFQylIb8Rdk/P+FtdXb8GuU0d1+bfb6w+JQVAIn55bC88chA/QhyDHL1U4jbwCIzTLVawC/SLsn+eP//h8cc8e/qSIgroxPm5oR///uMRFppZBK/zaROgqkInmr5xAK8b4iXB39u5QGmRTX17wyERs/IyH/l99mP42xW+rzL/AVeYbkIuQJR8JJCoC334os6q0KcmJS8ZFsf79Iuyf5o11MhQJE6COqP183MX/+Hz9//9xiItNLIJX+bSJ0FUTAo6TYjOvygPnzny5CwrIvGRbH+/EXZPz/jbZbDTuFDNbZL5twAA",Qe=({id:i,img:o,title:s,label:n,buttonPrev:l,buttonNext:r})=>e.jsxs("li",{className:a.onboarding__item,children:[e.jsx("img",{className:a.onboarding__image,width:375,height:517,src:o,alt:""}),e.jsxs("div",{className:a.onboarding__info,children:[e.jsx("h2",{className:a.onboarding__title,children:s}),e.jsx("p",{className:a.onboarding__label,children:n}),e.jsxs("div",{className:a.onboarding__progress,children:[e.jsx("button",{onClick:l,className:a.onboarding__skip,children:e.jsx(I,{})}),e.jsx("img",{width:92,height:8,src:Le,alt:""}),e.jsx("button",{onClick:r,className:a.onboarding__skip,children:e.jsx(w,{})})]})]})]},i),Se="data:image/webp;base64,UklGRhoDAABXRUJQVlA4WAoAAAAQAAAAuAAADwAAQUxQSKAAAAABV2AQYNpoETSDQrjJIyIE9TvH4DQAJEeZz/+ol0hK+RKwUAUSCQqbfU5TJjf7agqI6L/Ctm2bPFB26QhguHCdAwAAP0X/JrnMksZRsSVJToVjqPivkrYnHD/FjBRBmTR+ilUAVMKxU2wCoBOOneIaABPh2CnMZx8ArXDsFPMAaIRjpxgCQJPhp3iNfzs3hX12+tdY6uwUKRI7LgqNtJ0CVlA4IFQCAAAwBQCdASq5ABAAAAAAJZQAA0F7Hb6z9AgmQfNGUnJ+wRSM4HrJPe4tXeoELtzj+vvYAAD+//9oumT/jcRN+bSJ0FUhE81fOIBXjfES4O/t3KA0yKa+veGQiNn5GQ/8vvsx/G2K31eZf4CrzDchFyBKPhJIVAW+/FFnVWhTkxKXjItj/fpF2T/NGupkKBInQR1R+vm5i//w+fv7Vw3RgUOHEyUeyOyoNYKHOXzfhkr8P//939/9yn/ptn/tf/qmf8Nf0W7/YB4Gz/fYP9ff///7v7/7lP/SkP/aiPVM/4a/oPX+0fwon+8Qf7Q43//6/Gkrn9v+n/4/6QAaWwL/+fjSnn+//T/8f9W8z9jVTPC8bRc5EvhmVKOV3tLumINIwT/k//+8d/+4h/02z/2v/1Gn+Jj6Zl/sA8DZ/vsH+vuhP/+8d/+4h/0pD/2oj1Gn+Jj6St/tH8KJ/wNn+0Ni//+ugzq5/b/r/+f+kAGlrF//roM88/3/6//n/q3me+CH//3MqHGvMUUen5tJeIG/ly+VKYwCf4vRNisOBpxB7Y9ls+dcY7+Iuyft//+Hxxzx7+pIiCujE+bmgIv//cYiLTSyCV/m0idBVIRPNXziAV43xEuDv7dygNMimvr3hkIjZ+RkP/L77Mfxtit9XmX+Aq8w3IRcgSj4SSFQFvvxRZ1VoU5MSl4yLY/36Rdk/zRrqZCgSJ0EdUfr5uYv/8Pn7//7jERaaWQSv82kToKomBR0mxGdflAfPnPlyFhWReMi2P9+Iuyfn/G2y2GncKGa2yXzbgAAAA==",Pe=({id:i,img:o,title:s,label:n,buttonPrev:l,buttonNext:r})=>e.jsxs("li",{className:a.onboarding__item,children:[e.jsx("img",{className:a.onboarding__image,width:375,height:517,src:o,alt:""}),e.jsxs("div",{className:a.onboarding__info,children:[e.jsx("h2",{className:a.onboarding__title,children:s}),e.jsx("p",{className:a.onboarding__label,children:n}),e.jsxs("div",{className:a.onboarding__progress,children:[e.jsx("button",{onClick:l,className:a.onboarding__skip,children:e.jsx(I,{})}),e.jsx("img",{width:92,height:8,src:Se,alt:""}),e.jsx("button",{onClick:r,className:a.onboarding__skip,children:e.jsx(w,{})})]})]})]},i),Re="data:image/webp;base64,UklGRiIDAABXRUJQVlA4WAoAAAAQAAAAuAAADwAAQUxQSKAAAAABV2AQYNpoETSDQrjJIyIE9TvH4DQAJEeZz/+ol0hK+RKwUAUSCQqbfU5TJjf7agqI6L/Ctm2bPFB26QhguHCdAwAAP0X/JrnMksZRsSVJToVjqPivkrYnHD/FjBRBmTR+ilUAVMKxU2wCoBOOneIaABPh2CnMZx8ArXDsFPMAaIRjpxgCQJPhp3iNfzs3hX12+tdY6uwUKRI7LgqNtJ0CVlA4IFwCAAAQBQCdASq5ABAAAAAAJZQAA0F7Hb6z9Ahducf19+r57KlRtD/+Q994uwQMzVAJLGAAAP7//2i6ZP+NxE35tInQVSETzV84gFeN8RLg7+3coDTIpr694ZCI2fkZD/y++zH8bYrfV5l/gKvMNyEXIEo+EkhUBb78UWdVaFOTEpeMi2P9+kXZP80a6mQoEidBHVH6+bmL//D5+//+4xEWmlkEr/NpE6CqJgUdJsRnX5QHz5z5chYVkXjItj/fiLsn5/wtrq7fg1ymjuvzcIf/oPTw3AJWkk7ASbJtRXAGdVR6rlJr///e/3/wTv+m2f+DX6jT+J3oPX+wDeA/7Og/2i2N//+YlP/+9/v/gnf9KQ/8Nf1Gn8TvRbv9o+0B/2k1/r+5j/+YlP//v/71rg/rv+r+An+m0X//a0P7//3XOV+u/6N4Xf7fmP+gZSINnWvl8AsaX//2IsxXpt5bbHoP/9+c//g6v9Ns/8Gv1TP7//SVv9gG8B/2dB/tF1x//8yQf+/Of/wdX+lIf9//1TP7//TMv9o+0B/2Ur/r+5j/+ZIPw9/v9cHwy/+X8BP9Nov/+0s0F/3/QF+0+/f0bKH+30P+bP//9xiItNLIJX+bSJ0FUhE81fOIBXjfES4O/t3KA0yKa+veGQiNn5GQ/8jj8fOpI93xdlfqg9+YbkIuQJR8JJCoC334os6q0KcmJS8ZFsf79Iuyf5o11MhQJE6COqP183MX/+Hz9//9xiItNLIJX+bSJ0FUTAo6TYjOvygPnzny5CwrIvGRbH+/EXZPz/jbZbDTuFDNbZL5twAA",ye=({id:i,img:o,title:s,label:n,buttonPrev:l,buttonNext:r})=>e.jsxs("li",{className:a.onboarding__item,children:[e.jsx("img",{className:a.onboarding__image,width:375,height:517,src:o,alt:""}),e.jsxs("div",{className:a.onboarding__info,children:[e.jsx("h2",{className:a.onboarding__title,children:s}),e.jsx("p",{className:a.onboarding__label,children:n}),e.jsxs("div",{className:a.onboarding__progress,children:[e.jsx("button",{onClick:l,className:a.onboarding__skip,children:e.jsx(I,{})}),e.jsx("img",{width:92,height:8,src:Re,alt:""}),e.jsx("button",{onClick:r,className:a.onboarding__skip,children:e.jsx(w,{})})]})]})]},i),Be="data:image/webp;base64,UklGRi4DAABXRUJQVlA4WAoAAAAQAAAAuAAADwAAQUxQSKAAAAABV2AQYNpoETSDQrjJIyIE9TvH4DQAJEeZz/+ol0hK+RKwUAUSCQqbfU5TJjf7agqI6L/Ctm2bPFB26QhguHCdAwAAP0X/JrnMksZRsSVJToVjqPivkrYnHD/FjBRBmTR+ilUAVMKxU2wCoBOOneIaABPh2CnMZx8ArXDsFPMAaIRjpxgCQJPhp3iNfzs3hX12+tdY6uwUKRI7LgqNtJ0CVlA4IGgCAAAwBQCdASq5ABAAAAAAJZQAA0F7Hb6z9Ahducf1+AW3EQEljGLMNZQS5/pxFz0Ge5vwAAD+//9oumT/jcRN+bSJ0FUhE81fOIBXjfES4O/t3KA0yKa+veGQiNn5GQ/8vvsx/G2K31eZf4CrzDchFyBKPhJIVAW+/FFnVWhTkxKXjItj/fpF2T/NGupkKBInQR1R+vm5i//w+fv//uMRFppZBK/zaROgqiYFHSbEZ1+UB8+c+XIWFZF4yLY/34i7J+f8La6u34Ncpo7r82+31h8SgqARPzy2F545CB+hDkGOXqpxG3gERmmWq1gF+kXZP88f//D44549/UkRBXRifNzQj/0hNcAlaSTsBKGvC8bRbvWUQLwF3CY2uD1CypEBKg1f///u/v/uU/9Ns/9r/9Uz/hr+i3f7APA2f77B/r8Af//l5R3H//u/v/uU/9KQ/9qI9Uz/hr+g9f7R/Cif7xB/tDj//y8oP//r8aSuf2/6f/j/pABpbBf/6tD//X40p5/v/0//H/VvM/Y2B+23vYDR5X//7mVDjXmKKPT8kFwxxdwAUQxidKxQWX3//3UH/3EP+m2f+1/+o0/xMfTMv9gHgbP99g/1+AP//y3H/+6g/+4h/0pD/2oj1Gn+Jj6St/tH8KJ/wNn+0OP//Lcf/+dBnVz+3/X/8/9IANLYL//Us/rbzzH/f/r/+f+reZ74IfvqJo60FUrgzqUMpSG/EXZP1PRv3jhkIjZ+RkP/NvMf/4fP3//3GIi00sglf5tInQVRMCjpNiM6/KA+fOfLkLCsi8ZFsf78Rdk/P+NtlsNO4UM1tkvm3AAA",He=({id:i,img:o,title:s,label:n,buttonPrev:l,buttonNext:r})=>e.jsxs("li",{className:a.onboarding__item,children:[e.jsx("img",{className:a.onboarding__image,width:375,height:517,src:o,alt:""}),e.jsxs("div",{className:a.onboarding__info,children:[e.jsx("h2",{className:a.onboarding__title,children:s}),e.jsx("p",{className:a.onboarding__label,children:n}),e.jsxs("div",{className:a.onboarding__progress,children:[e.jsx("button",{onClick:l,className:a.onboarding__skip,children:e.jsx(I,{})}),e.jsx("img",{width:92,height:8,src:Be,alt:""}),e.jsx("button",{onClick:r,className:a.onboarding__skip,children:e.jsx(w,{})})]})]})]},i),Ue="data:image/webp;base64,UklGRgoDAABXRUJQVlA4WAoAAAAQAAAAuAAADwAAQUxQSKAAAAABV2AQYNpoETSDQrjJIyIE9TvH4DQAJEeZz/+ol0hK+RKwUAUSCQqbfU5TJjf7agqI6L/Ctm2bPFB26QhguHCdAwAAP0X/JrnMksZRsSVJToVjqPivkrYnHD/FjBRBmTR+ilUAVMKxU2wCoBOOneIaABPh2CnMZx8ArXDsFPMAaIRjpxgCQJPhp3iNfzs3hX12+tdY6uwUKRI7LgqNtJ0CVlA4IEQCAAAQBQCdASq5ABAAAAAAJZQAA0F7Hb6z9Ahducf1+AW3EQEne/mrBPPsidmbFrjgfBAAAP7//2i6ZP+NxE35tInQVSETzV84gFeN8RLg7+3coDTIpr694ZCI2fkZD/y++zH8bYrfV5l/gKvMNyEXIEo+EkhUBb78UWdVaFOTEpeMi2P9+kXZP80a6mQoEidBHVH6+bmL//D5+//+4xEWmlkEr/NpE6CqJgUdJsRnX5QHz5z5chYVkXjItj/fiLsn5/wtrq7fg1ymjuvzb7fWHxKCoBE/PLYXnjkIH6EOQY5eqnEbeARGaZarWAX6Rdk/zx//8Pjjnj39SREFdGJ83NCP//9xiItNLIJX+bSJ0FUhE81fOIBXjfES4O/t3KA0yKa+veGQiNn5GQ/8vvsx/Jv/6D08NwCVbOSI8DtJDlO3df//e/3/wTv+m2f+DX6jT+J3oPX+wDeA/7Og/2i2K//3v9/8E7/pSH/hr+o0/id6Ld/tH2gP+0mv9f3MH//f/7rXB/Xf9X8BP9Non9//7rnK/Xf9G8Lv9vy9GbAShrwvG0XORL4ZmCBoiIlFL028ttkSbf/+9kf/g6v9Ns/8Gv1TP7//SVv9gG8B/2dB/tF1E3/vZH/4Or/SkP+//6pn9//pmX+0faA/7KV/1/cLf/yz/v9cHwy/+X8BP9Nl/7z/7/oC/affv6NlD/b6H//YkO//+4xEWmlkEr/NpE6CqKjo6aICDROK/xHxqmEuUxUMpSG/EXZPz/jbZbDTuFDNbZL5twAA",Ee=({id:i,img:o,title:s,label:n,buttonPrev:l,buttonNext:r})=>e.jsxs("li",{className:a.onboarding__item,children:[e.jsx("img",{className:a.onboarding__image,width:375,height:517,src:o,alt:""}),e.jsxs("div",{className:a.onboarding__info,children:[e.jsx("h2",{className:a.onboarding__title,children:s}),e.jsx("p",{className:a.onboarding__label,children:n}),e.jsxs("div",{className:a.onboarding__progress,children:[e.jsx("button",{onClick:l,className:a.onboarding__skip,children:e.jsx(I,{})}),e.jsx("img",{width:92,height:8,src:Ue,alt:""}),e.jsx("button",{onClick:r,className:a.onboarding__skip,children:e.jsx(w,{})})]})]})]},i),Oe=({id:i,img:o,title:s,label:n,buttonEnd:l})=>e.jsxs("li",{className:a.onboarding__item,children:[e.jsx("img",{className:Q(a.onboarding__image_seven,a.onboarding__image),width:375,height:517,src:o,alt:""}),e.jsxs("div",{className:a.onboarding__info,children:[e.jsx("h2",{className:a.onboarding__title,children:s}),e.jsx("p",{className:a.onboarding__label,children:n}),e.jsx("button",{onClick:l,className:a.onboarding__button,children:"Играть!"})]})]},i),Je=({isOpen:i,onClose:o})=>{const[s,n]=_.useState(1),l=1,{tg_id:r}=C(),d=J({mutationFn:t=>Ie(t.tg_id),mutationKey:["onboarding"]},k),c=t=>{d.mutate({tg_id:t}),o()};return e.jsx(X,{onClose:o,lazy:!0,isOpen:i,children:e.jsx("ul",{className:a.onboarding__list,children:be.slice((s-1)*l,s*l).map(t=>{switch(t.id){case 1:return e.jsx(Fe,{id:t.id,img:t.image,title:t.title,label:t.label,buttonStart:()=>n(s+1)},t.id);case 2:return e.jsx(Qe,{id:t.id,img:t.image,title:t.title,label:t.label,buttonPrev:()=>n(s-1),buttonNext:()=>n(s+1)},t.id);case 3:return e.jsx(Pe,{id:t.id,img:t.image,title:t.title,label:t.label,buttonPrev:()=>n(s-1),buttonNext:()=>n(s+1)},t.id);case 4:return e.jsx(ye,{id:t.id,img:t.image,title:t.title,label:t.label,buttonPrev:()=>n(s-1),buttonNext:()=>n(s+1)},t.id);case 5:return e.jsx(He,{id:t.id,img:t.image,title:t.title,label:t.label,buttonPrev:()=>n(s-1),buttonNext:()=>n(s+1)},t.id);case 6:return e.jsx(Ee,{id:t.id,img:t.image,title:t.title,label:t.label,buttonPrev:()=>n(s-1),buttonNext:()=>n(s+1)},t.id);case 7:return e.jsx(Oe,{id:t.id,img:t.image,title:t.title,label:t.label,buttonEnd:()=>c(r)},t.id)}})})})};function $e(){const i=U(),[o,s]=_.useState(!1),[n,l]=_.useState(!1),r=N(S),{tg:d}=C();_.useEffect(()=>{r!=null&&r.instruction&&l(!0)},[r]),_.useEffect(()=>{(r==null?void 0:r.login_today)===!1&&s(!0)},[r]);const c=()=>{d.HapticFeedback.impactOccurred("light"),s(!1)},t=()=>{d.HapticFeedback.impactOccurred("light"),l(!1)};return e.jsxs("div",{className:i.pathname!=="/"?"app bg":"app",children:[i.pathname==="/"&&e.jsx(u1,{}),e.jsx("main",{className:d1.main,children:e.jsx(K,{})}),e.jsx(E1,{}),e.jsx(re,{isOpen:o,onClose:c}),e.jsx(Je,{onClose:t,isOpen:n})]})}export{$e as default};
