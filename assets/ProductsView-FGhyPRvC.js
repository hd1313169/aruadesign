import{a as b}from"./axios-G2rPRu76.js";import{_ as f,c as o,b as t,d,w as h,F as c,v as p,x as u,r as x,o as n,e as _,t as r}from"./index-lIMdmJRJ.js";var y={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ryanchiang13",BASE_URL:"/aruadesign/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:v,VITE_APP_PATH:k}=y,D={data(){return{products:[],categories:["客廳","廚房","書房","燈飾","臥房"],pages:{}}},watch:{"route.query":{handler(){this.getData()},deep:!0}},methods:{getData(g=1){b.get(`${v}/v2/api/${k}/products?page=${g}`).then(s=>{this.products=s.data.products,this.pages=s.data.pagination}).catch(s=>{alert(s.response.data.message)})}},mounted(){this.getData()}},P=t("div",{class:"pb-160 pb-md-120"},null,-1),V={class:"container"},E={class:"mb-40 mb-md-64"},w=t("h2",{class:"text-primary text-center mb-40"},"產品列表",-1),C={class:"d-flex flex-wrap justify-content-center p-0"},T={class:"products-submenu px-24 py-4 px-md-80 py-md-8"},L={class:"d-flex flex-wrap justify-content-between m-0 p-0"},A=["src"],R={class:"mb-8"},B={class:"fs-14 mb-8"},I=t("span",{class:"fs-14 me-4"},"售價",-1),N=t("span",{class:"fs-14"},"元",-1),S={"aria-label":"Page navigation",class:"mb-80"},U={class:"pagination justify-content-center"},j=t("span",{"aria-hidden":"true"},"«",-1),F=[j],H=["onClick"],O=t("span",{"aria-hidden":"true"},"»",-1),q=[O];function z(g,s,M,$,a,l){const i=x("routerLink");return n(),o(c,null,[P,t("div",V,[t("div",E,[w,t("ul",C,[t("li",T,[d(i,{to:"/products"},{default:h(()=>[_("全部")]),_:1})]),(n(!0),o(c,null,p(a.categories,e=>(n(),o("li",{key:e,class:"products-submenu px-24 py-4 px-md-80 py-md-8"},[d(i,{to:`/products?category=${e}`},{default:h(()=>[_(r(e),1)]),_:2},1032,["to"])]))),128))])]),t("ul",L,[(n(!0),o(c,null,p(a.products,e=>(n(),o("li",{key:e.id,class:"products-item"},[t("img",{class:"img-fluid mb-8 mb-md-16",src:e.imageUrl,alt:"圖片"},null,8,A),t("h4",R,r(e.title),1),t("p",B,r(e.content),1),t("h5",null,[I,_(r(e.price)+" ",1),N]),d(i,{to:`product/${e.id}`,class:"stretched-link"},null,8,["to"])]))),128))]),t("nav",S,[t("ul",U,[t("li",{class:u([{disabled:!a.pages.has_pre},"page-item"])},[t("button",{type:"button",onClick:s[0]||(s[0]=e=>l.getData(a.pages.current_page-1)),class:"page-link border-0","aria-label":"Previous"},F)],2),(n(!0),o(c,null,p(a.pages.total_pages,(e,m)=>(n(),o("li",{key:m,class:u([{active:e===a.pages.current_page},"page-item"])},[t("button",{type:"button",onClick:G=>l.getData(e),class:"page-link border-0"},r(e),9,H)],2))),128)),t("li",{class:u([{disabled:!a.pages.has_next},"page-item"])},[t("button",{type:"button",onClick:s[1]||(s[1]=e=>l.getData(a.pages.current_page+1)),class:"page-link border-0","aria-label":"Next"},q)],2)])])])],64)}const Q=f(D,[["render",z]]);export{Q as default};
