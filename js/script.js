import AppComponent from './AppComponent.js'
import NavbarComponent from './component/NavbarComponent.js'
import CartComponent from './component/CartComponent.js'
import ProductComponent from './component/ProductComponent.js'
import FormComponent from './component/FormComponent.js'

const app=Vue.createApp( AppComponent )

app.component('navbar-component', NavbarComponent)
app.component('cart-component', CartComponent)
app.component('product-component', ProductComponent)
app.component('form-component', FormComponent)

const reslut=app.mount('#app');