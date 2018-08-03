import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Class from '../components/Class'
import Footer from '../components/Footer'
import List from '../components/List'
import Products from '../components/Products'
import Index from '../components/Index'
import Tablets from '../components/Tablets'
import Phones from '../components/Phones'
import Home from '../components/Home'
import HomeLink from '../components/HomeLink'
import PhonesAds from '../components/PhonesAds'
import TabletsAds from '../components/TabletsAds'
import NotFound from '../components/NotFound'

Vue.use(Router);
/*
const NotFound = { template: '<h2>Page Not Found</h2>' }
const Home = { template: '<h2>Home Page</h2>' }
const About = { template: '<h2>About Page</h2>' }*/

const routes = [
  /*{ path: '/about', component: About },
  { path: '*', component: NotFound },
  { path: '/', component: List },
  { path: '/class', component: Class },
  { path: '/footer', component: Footer },
  {
    path: '/',
    components: {
      default: HomeLink,
      content: Products
    }
  },
  {
    path: '/products/:id',
    component: Products,
    name: 'products'
  },
  {
    path: '/phones',
    components: {
      default: HomeLink,
      ads: PhonesAds,
      content: Phones
    }
  },
  {
    path: '/tablets',
    components: {
      default: HomeLink,
      ads: TabletsAds,
      content: Tablets
    }
  },*/
  { path: '/', component: Home },
  {
    path: '/products/:id', redirect: to => {
      if (to.params.id > 10) {
        return '/404';
      } else {
        return '/ru/product/:id';
      }
    }
  },
  { path: '/ru/products/:id', component: Products, name:'product'},
  { path: '/404', component: NotFound },
  { path: '*', redirect: "/404"}


  /*children: [
    {
      path: 'phones',
      component: Phones
    },
    {
      path: 'tablets',
      component: Tablets
    },
    {
      path: '',
      component: Index
    }
  ]*/

  //id? - optional parameter
];

export default new Router({
  mode: 'history',
  routes: routes
  /*routes: [
    {
      path: '/', component: App,
      path: '/components', component: Class
    }
  ]*/
})
