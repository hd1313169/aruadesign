import{C as i}from"./index-lIMdmJRJ.js";import{a as e}from"./axios-G2rPRu76.js";var d={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ryanchiang13",BASE_URL:"/aruadesign/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:o,VITE_APP_PATH:r}=d,c=i("counter",{state:()=>({carts:[],final_total:0,total:0,form:{user:{name:"",email:"",tel:"",address:""},message:""}}),actions:{getCart(){e.get(`${o}/v2/api/${r}/cart`).then(t=>{this.carts=t.data.data,this.final_total=t.data.data.final_total,this.total=t.data.data.total})},addToCart(t,a){const s={product_id:t,qty:a};e.post(`${o}/v2/api/${r}/cart`,{data:s}).then(n=>{this.getCart()})},onSubmit(){const t=this.form;e.post(`${o}/v2/api/${r}/order`,{data:t}).then(a=>{alert(`${a.data.message}`),this.form.user={name:"",email:"",tel:"",address:""},this.form.message="",this.getCart()})},getOrder(){console.log(this.form)}}});export{c};
