/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require("bootstrap-css-only/css/bootstrap.min.css");
require("mdbvue/lib/css/mdb.min.css");
require("@fortawesome/fontawesome-free/css/all.min.css");
window.Vue = require('vue');


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('main-menu', require('./components/NavMenu.vue').default);
Vue.component('side-menu', require('./components/SideMenu.vue').default);
Vue.component('clients-list-component', require('./components/ClientsList.vue').default);
Vue.component('client-list-single-component', require('./components/ClientListSingle.vue').default);
Vue.component('client-add-button-component', require('./components/ClientAddButton.vue').default);
Vue.component('client-form', require('./components/ClientAddNew.vue').default);
Vue.component('clients-optimizations-list-component', require('./components/ClientsOptimizationsList.vue').default);
Vue.component('client-optimization-component', require('./components/ClientOptimizationSingle.vue').default);
Vue.component('client-optimization-page-component', require('./components/ClientOptimizationPage.vue').default);
Vue.component('optimization-check-button-component', require('./components/OptimizationCheckButton.vue').default);
Vue.component('client-optimization-change-quarter-component', require('./components/ClientOptimizationChangeQuarter.vue').default);
Vue.component('optimization-add-record-button-component', require('./components/OptimizationAddRecordButton.vue').default);
Vue.component('optimization-add-record-component', require('./components/OptimizationAddRecord.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
