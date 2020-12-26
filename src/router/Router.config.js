// 一级
import Home from '@v/home/Home'
// import { Category } from './views/category/index'
import Category from '@v/category/container/Category'
import OrderDetails from '@v/home/order/ui/OrderDetails'
import PayOrder from '@v/home/order/ui/PayOrder'
import Details from '@c/details/ui/DetailsUi'
import PaySuccess from '@v/home/order/ui/PaySuccess'
import Search from '@c/search/Search'
import Time from '@v/time/container/Time'
import Article from '@v/article/container/Article'
import SubmitOrder from '@v/home/order/ui/SubmitOrder'
import AddressMange from "@v/dress/AddressMange"
import Evaluation from '@v/evaluation/Evaluation'
import Map from "@v/home/order/ui/Map.jsx"
import { ShopCar } from '@v//shoppingcar/index'
import Vegetables from '@v/home/vegetables/container/Vegetables'
import Chat from "@v/chat/Chat"
// my bqh
import AboutDelivery from '@v/profile/second/AboutDelivery'
import AboutUs from '@v/profile/second/AboutUs'
import AboutVegetable from '@v/profile/second/AboutVegetable'
import Address from '@v/profile/second/Address'
import Collection from '@v/profile/second/Collection'
import Problem from '@v/profile/second/Problem'
import Ticket from '@v/profile/second/Ticket'
import Count from '@v/profile/second/Count'
import Edit from '@v/profile/second/Edit.jsx' 
import Add from '@v/profile/second/Add.jsx' 
import About from '@v/profile/About'
import Contact from '@v/profile/Contact'
import My from '@v/profile/My'
//bqh login
import Login from '@v/Login/Login'
import SignIn from '@v/Login/SignIn'

//dx

import Upload from '@v/upload/container/Upload'
import Recipes from '@v/recipes/container/Recipes'
import Recdetails from '@v/recipes/container/Recdetails'
import Ingredients from '@v/ingredients/container/Ingredients'




// 二级
// import Homepage from '../views/homepage/index'
// import My from '../views/my/index'

// import Healthlist from '../views/healthlist/index'
// import Searchlist from '../views/searchlist/index'


const routerConfig = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/article',
    component: Article
  },
  {
    path: '/vegetables',
    component: Vegetables
  },

  {
    path: '/search',
    component: Search
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/orderDetails',
    component: OrderDetails
  },
  {
    path: '/details',
    component: Details
  },
  {
    path: '/paySuccess',
    component: PaySuccess
  },
  {
    path: '/payOrder',
    component: PayOrder
  },
  {
    path: '/paysuccess',
    component: PaySuccess
  },
  {
    path: '/time',
    component: Time
  },
  {
    path: '/dressmange',
    component: AddressMange
  },
  {
    path: '/evaluation',
    component: Evaluation
  },
  {
    path: '/map',
    component: Map
  },
  {
    path: '/submitorder',
    component: SubmitOrder
  },

  {
    path: '/goodscar',
    component: ShopCar
  },

  {
    path: '/time',
    component: Time
  },

  {
    path: '/article',
    component: Article
  },


  {
    path: '/recipes',
    component: Recipes
  },

  {
    path: '/recdetails',
    component: Recdetails
  },

  {
    path: '/upload',
    component: Upload
  },
  {
    path: '/ingredients',
    component: Ingredients
  },


  { path: '/AboutDelivery', component: AboutDelivery },
  { path: '/AboutUs', component: AboutUs },
  { path: '/AboutVegetable', component: AboutVegetable },
  { path: '/Address', component: Address },
  { path: '/Collection', component: Collection },
  { path: '/Problem', component: Problem },
  { path: '/Ticket', component: Ticket },
  { path: '/About', component: About },
  { path: '/Contact', component: Contact },
  { path: '/My', component: My },
  { path: '/Count', component: Count },
  { path: '/Edit', component: Edit },
  {path:'/chat',component:Chat},
  {path:'/Add',component:Add},

  //bqh Login
  { path: '/Login', component: Login },
  { path: '/SignIn', component: SignIn },

  // 添加子路由
  // {
  //   path: '/record',
  //   component: Record,
  //   children: [
  //     {
  //       path: '/record/healthlist',
  //       component: Healthlist,
  //     },
  //     {
  //       path: '/record/searchlist',
  //       component: Searchlist,
  //     },
  //     {
  //       from: '/record',
  //       to: '/record/healthlist'
  //     }
  //   ]
  // },
  {
    from: '/',
    to: '/home'
  }
]

export default routerConfig

