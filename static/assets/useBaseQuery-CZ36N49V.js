var ut=s=>{throw TypeError(s)};var J=(s,t,r)=>t.has(s)||ut("Cannot "+r);var e=(s,t,r)=>(J(s,t,"read from private field"),r?r.call(s):t.get(s)),f=(s,t,r)=>t.has(s)?ut("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,r),o=(s,t,r,i)=>(J(s,t,"write to private field"),i?i.call(s,r):t.set(s,r),r),l=(s,t,r)=>(J(s,t,"access private method"),r);import{S as Ot,p as lt,r as E,s as X,e as W,f as Et,j as Y,k as dt,t as St,l as It,m as Qt,o as ft,n as mt,d as wt,u as xt,c as pt}from"./coin-2FF1BFL9.js";import{r as Q}from"./index-BIwUCy7Q.js";var R,a,z,v,U,L,x,O,N,j,k,D,_,T,B,n,H,Z,q,tt,et,st,rt,it,yt,Rt,Wt=(Rt=class extends Ot{constructor(t,r){super();f(this,n);f(this,R);f(this,a);f(this,z);f(this,v);f(this,U);f(this,L);f(this,x);f(this,O);f(this,N);f(this,j);f(this,k);f(this,D);f(this,_);f(this,T);f(this,B,new Set);this.options=r,o(this,R,t),o(this,O,null),o(this,x,lt()),this.options.experimental_prefetchInRender||e(this,x).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(r)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(e(this,a).addObserver(this),bt(e(this,a),this.options)?l(this,n,H).call(this):this.updateResult(),l(this,n,et).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return at(e(this,a),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return at(e(this,a),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,l(this,n,st).call(this),l(this,n,rt).call(this),e(this,a).removeObserver(this)}setOptions(t,r){const i=this.options,d=e(this,a);if(this.options=e(this,R).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof E(this.options.enabled,e(this,a))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");l(this,n,it).call(this),e(this,a).setOptions(this.options),i._defaulted&&!X(this.options,i)&&e(this,R).getQueryCache().notify({type:"observerOptionsUpdated",query:e(this,a),observer:this});const c=this.hasListeners();c&&vt(e(this,a),d,this.options,i)&&l(this,n,H).call(this),this.updateResult(r),c&&(e(this,a)!==d||E(this.options.enabled,e(this,a))!==E(i.enabled,e(this,a))||W(this.options.staleTime,e(this,a))!==W(i.staleTime,e(this,a)))&&l(this,n,Z).call(this);const h=l(this,n,q).call(this);c&&(e(this,a)!==d||E(this.options.enabled,e(this,a))!==E(i.enabled,e(this,a))||h!==e(this,T))&&l(this,n,tt).call(this,h)}getOptimisticResult(t){const r=e(this,R).getQueryCache().build(e(this,R),t),i=this.createResult(r,t);return Ft(this,i)&&(o(this,v,i),o(this,L,this.options),o(this,U,e(this,a).state)),i}getCurrentResult(){return e(this,v)}trackResult(t,r){const i={};return Object.keys(t).forEach(d=>{Object.defineProperty(i,d,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(d),r==null||r(d),t[d])})}),i}trackProp(t){e(this,B).add(t)}getCurrentQuery(){return e(this,a)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const r=e(this,R).defaultQueryOptions(t),i=e(this,R).getQueryCache().build(e(this,R),r);return i.fetch().then(()=>this.createResult(i,r))}fetch(t){return l(this,n,H).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),e(this,v)))}createResult(t,r){var ct;const i=e(this,a),d=this.options,c=e(this,v),h=e(this,U),S=e(this,L),m=t!==i?t.state:e(this,z),{state:y}=t;let u={...y},F=!1,g;if(r._optimisticResults){const b=this.hasListeners(),P=!b&&bt(t,r),M=b&&vt(t,i,r,d);(P||M)&&(u={...u,...Qt(y.data,t.options)}),r._optimisticResults==="isRestoring"&&(u.fetchStatus="idle")}let{error:A,errorUpdatedAt:w,status:I}=u;if(r.select&&u.data!==void 0)if(c&&u.data===(h==null?void 0:h.data)&&r.select===e(this,N))g=e(this,j);else try{o(this,N,r.select),g=r.select(u.data),g=ft(c==null?void 0:c.data,g,r),o(this,j,g),o(this,O,null)}catch(b){o(this,O,b)}else g=u.data;if(r.placeholderData!==void 0&&g===void 0&&I==="pending"){let b;if(c!=null&&c.isPlaceholderData&&r.placeholderData===(S==null?void 0:S.placeholderData))b=c.data;else if(b=typeof r.placeholderData=="function"?r.placeholderData((ct=e(this,k))==null?void 0:ct.state.data,e(this,k)):r.placeholderData,r.select&&b!==void 0)try{b=r.select(b),o(this,O,null)}catch(P){o(this,O,P)}b!==void 0&&(I="success",g=ft(c==null?void 0:c.data,b,r),F=!0)}e(this,O)&&(A=e(this,O),g=e(this,j),w=Date.now(),I="error");const K=u.fetchStatus==="fetching",$=I==="pending",G=I==="error",ht=$&&K,ot=g!==void 0,C={status:I,fetchStatus:u.fetchStatus,isPending:$,isSuccess:I==="success",isError:G,isInitialLoading:ht,isLoading:ht,data:g,dataUpdatedAt:u.dataUpdatedAt,error:A,errorUpdatedAt:w,failureCount:u.fetchFailureCount,failureReason:u.fetchFailureReason,errorUpdateCount:u.errorUpdateCount,isFetched:u.dataUpdateCount>0||u.errorUpdateCount>0,isFetchedAfterMount:u.dataUpdateCount>m.dataUpdateCount||u.errorUpdateCount>m.errorUpdateCount,isFetching:K,isRefetching:K&&!$,isLoadingError:G&&!ot,isPaused:u.fetchStatus==="paused",isPlaceholderData:F,isRefetchError:G&&ot,isStale:nt(t,r),refetch:this.refetch,promise:e(this,x)};if(this.options.experimental_prefetchInRender){const b=V=>{C.status==="error"?V.reject(C.error):C.data!==void 0&&V.resolve(C.data)},P=()=>{const V=o(this,x,C.promise=lt());b(V)},M=e(this,x);switch(M.status){case"pending":t.queryHash===i.queryHash&&b(M);break;case"fulfilled":(C.status==="error"||C.data!==M.value)&&P();break;case"rejected":(C.status!=="error"||C.error!==M.reason)&&P();break}}return C}updateResult(t){const r=e(this,v),i=this.createResult(e(this,a),this.options);if(o(this,U,e(this,a).state),o(this,L,this.options),e(this,U).data!==void 0&&o(this,k,e(this,a)),X(i,r))return;o(this,v,i);const d={},c=()=>{if(!r)return!0;const{notifyOnChangeProps:h}=this.options,S=typeof h=="function"?h():h;if(S==="all"||!S&&!e(this,B).size)return!0;const p=new Set(S??e(this,B));return this.options.throwOnError&&p.add("error"),Object.keys(e(this,v)).some(m=>{const y=m;return e(this,v)[y]!==r[y]&&p.has(y)})};(t==null?void 0:t.listeners)!==!1&&c()&&(d.listeners=!0),l(this,n,yt).call(this,{...d,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&l(this,n,et).call(this)}},R=new WeakMap,a=new WeakMap,z=new WeakMap,v=new WeakMap,U=new WeakMap,L=new WeakMap,x=new WeakMap,O=new WeakMap,N=new WeakMap,j=new WeakMap,k=new WeakMap,D=new WeakMap,_=new WeakMap,T=new WeakMap,B=new WeakMap,n=new WeakSet,H=function(t){l(this,n,it).call(this);let r=e(this,a).fetch(this.options,t);return t!=null&&t.throwOnError||(r=r.catch(Et)),r},Z=function(){l(this,n,st).call(this);const t=W(this.options.staleTime,e(this,a));if(Y||e(this,v).isStale||!dt(t))return;const i=St(e(this,v).dataUpdatedAt,t)+1;o(this,D,setTimeout(()=>{e(this,v).isStale||this.updateResult()},i))},q=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(e(this,a)):this.options.refetchInterval)??!1},tt=function(t){l(this,n,rt).call(this),o(this,T,t),!(Y||E(this.options.enabled,e(this,a))===!1||!dt(e(this,T))||e(this,T)===0)&&o(this,_,setInterval(()=>{(this.options.refetchIntervalInBackground||It.isFocused())&&l(this,n,H).call(this)},e(this,T)))},et=function(){l(this,n,Z).call(this),l(this,n,tt).call(this,l(this,n,q).call(this))},st=function(){e(this,D)&&(clearTimeout(e(this,D)),o(this,D,void 0))},rt=function(){e(this,_)&&(clearInterval(e(this,_)),o(this,_,void 0))},it=function(){const t=e(this,R).getQueryCache().build(e(this,R),this.options);if(t===e(this,a))return;const r=e(this,a);o(this,a,t),o(this,z,t.state),this.hasListeners()&&(r==null||r.removeObserver(this),t.addObserver(this))},yt=function(t){mt.batch(()=>{t.listeners&&this.listeners.forEach(r=>{r(e(this,v))}),e(this,R).getQueryCache().notify({query:e(this,a),type:"observerResultsUpdated"})})},Rt);function Tt(s,t){return E(t.enabled,s)!==!1&&s.state.data===void 0&&!(s.state.status==="error"&&t.retryOnMount===!1)}function bt(s,t){return Tt(s,t)||s.state.data!==void 0&&at(s,t,t.refetchOnMount)}function at(s,t,r){if(E(t.enabled,s)!==!1){const i=typeof r=="function"?r(s):r;return i==="always"||i!==!1&&nt(s,t)}return!1}function vt(s,t,r,i){return(s!==t||E(i.enabled,s)===!1)&&(!r.suspense||s.state.status!=="error")&&nt(s,r)}function nt(s,t){return E(t.enabled,s)!==!1&&s.isStaleByTime(W(t.staleTime,s))}function Ft(s,t){return!X(s.getCurrentResult(),t)}var Ct=Q.createContext(!1),Ut=()=>Q.useContext(Ct);Ct.Provider;function Dt(){let s=!1;return{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s}}var _t=Q.createContext(Dt()),Pt=()=>Q.useContext(_t),Mt=(s,t)=>{(s.suspense||s.throwOnError||s.experimental_prefetchInRender)&&(t.isReset()||(s.retryOnMount=!1))},Lt=s=>{Q.useEffect(()=>{s.clearReset()},[s])},jt=({result:s,errorResetBoundary:t,throwOnError:r,query:i})=>s.isError&&!t.isReset()&&!s.isFetching&&i&&wt(r,[s.error,i]),Kt=(s,t)=>t.state.data===void 0,kt=s=>{s.suspense&&(s.staleTime===void 0&&(s.staleTime=1e3),typeof s.gcTime=="number"&&(s.gcTime=Math.max(s.gcTime,1e3)))},Bt=(s,t)=>s.isLoading&&s.isFetching&&!t,At=(s,t)=>(s==null?void 0:s.suspense)&&t.isPending,gt=(s,t,r)=>t.fetchOptimistic(s).catch(()=>{r.clearReset()});function $t(s,t,r){var y,u,F,g,A;const i=xt(r),d=Ut(),c=Pt(),h=i.defaultQueryOptions(s);(u=(y=i.getDefaultOptions().queries)==null?void 0:y._experimental_beforeQuery)==null||u.call(y,h),h._optimisticResults=d?"isRestoring":"optimistic",kt(h),Mt(h,c),Lt(c);const S=!i.getQueryCache().get(h.queryHash),[p]=Q.useState(()=>new t(i,h)),m=p.getOptimisticResult(h);if(Q.useSyncExternalStore(Q.useCallback(w=>{const I=d?pt:p.subscribe(mt.batchCalls(w));return p.updateResult(),I},[p,d]),()=>p.getCurrentResult(),()=>p.getCurrentResult()),Q.useEffect(()=>{p.setOptions(h,{listeners:!1})},[h,p]),At(h,m))throw gt(h,p,c);if(jt({result:m,errorResetBoundary:c,throwOnError:h.throwOnError,query:i.getQueryCache().get(h.queryHash)}))throw m.error;if((g=(F=i.getDefaultOptions().queries)==null?void 0:F._experimental_afterQuery)==null||g.call(F,h,m),h.experimental_prefetchInRender&&!Y&&Bt(m,d)){const w=S?gt(h,p,c):(A=i.getQueryCache().get(h.queryHash))==null?void 0:A.promise;w==null||w.catch(pt).finally(()=>{p.updateResult()})}return h.notifyOnChangeProps?m:p.trackResult(m)}export{Wt as Q,Kt as d,$t as u};