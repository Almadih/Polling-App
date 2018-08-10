import Vue from 'vue'
import Router from 'vue-router'
import newNote from '../components/newNote'
import edit from '../components/edit'
import login from '../components/login'
import home from '../components/home'
import vote from '../components/vote'
import signup from '../components/signup'
import auth from '../components/auth'
import auth2 from '../components/auth2'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'root',
            component: home,
            beforeEnter: auth

    },
        {
            path: '/new',
            name: 'new',
            component: newNote,
            beforeEnter: auth
    },
        {
            path: '/edit/:id',
            name: 'edit',
            component: edit,
            beforeEnter: auth
    },
        {
            path: '/login',
            name: 'login',
            component: login,
            beforeEnter: auth2
    },
        {
            path: '/vote/:id',
            name: 'vote',
            component: vote
    },
        {
            path: '/signup',
            name: 'singup',
            component: signup,
            beforeEnter: auth2
    }
  ]
})
