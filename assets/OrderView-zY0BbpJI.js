import{a as c}from"./axios-G2rPRu76.js";import{P as _}from"./PaginationComponent-TUDoMpPd.js";import{_ as p,c as s,b as t,F as u,v as h,d as g,r as m,o as n,t as o}from"./index-_z5HY9ti.js";var f={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ryanchiang13",BASE_URL:"/aruadesign/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:P,VITE_APP_PATH:E}=f,V={components:{PaginationComponent:_},data(){return{orders:[],pages:{}}},methods:{getOrders(a=1){c.get(`${P}/v2/api/${E}/orders?page=${a}`).then(r=>{this.orders=r.data.orders})}},mounted(){this.getOrders()}},v={class:"container ff-sans"},w={class:"table mt-40"},x=t("thead",null,[t("tr",null,[t("th",{width:"120"},"訂單編號"),t("th",{width:"100"},"品項數"),t("th",{width:"100"},"總計"),t("th",{width:"120"},"訂購人"),t("th",{width:"100"},"付款狀態")])],-1),y={key:0,class:"text-success"},O={key:1};function T(a,r,k,A,d,i){const l=m("PaginationComponent");return n(),s("div",v,[t("table",w,[x,t("tbody",null,[(n(!0),s(u,null,h(d.orders,e=>(n(),s("tr",{key:e.id},[t("td",null,o(e.id),1),t("td",null,o(e.num),1),t("td",null,"$"+o(e.total),1),t("td",null,o(e.user.name),1),t("td",null,[e.is_paid?(n(),s("span",y,"已付款")):(n(),s("span",O,"未付款"))])]))),128))])]),g(l,{pages:d.pages,"get-data":i.getOrders},null,8,["pages","get-data"])])}const B=p(V,[["render",T]]);export{B as default};
