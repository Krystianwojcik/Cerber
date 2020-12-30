<template>
    <mdb-navbar class="sidebar flex-column align-items-start" color="indigo" position="top" dark>
        <mdb-navbar-brand class="align-items-center" href="/">
            Cerber
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
            <mdb-navbar-nav class="flex-column">
                <mdb-nav-item tag="li" icon="laptop" active href="/">Home</mdb-nav-item>
                <li @click="clickParent('isKlienci')" class="parent" :class="{ active: isKlienci }">
                    <mdb-nav-item tag="a" icon="users" href="/klienci/">Klienci</mdb-nav-item>
                    <ul v-show="isKlienci" class="sub-menu pl-3">
                        <mdb-nav-item tag="li" icon="plus" href="/klienci/nowy/" >Dodaj klienta</mdb-nav-item>
                        <mdb-nav-item tag="li" icon="users" href="/klienci/" >Wszyscy klienci</mdb-nav-item>
                    </ul>
                </li>
                <li @click="clickParent('isOptymalizacja')" class="parent" :class="{ active: isOptymalizacja }">
                    <mdb-nav-item tag="a" icon="cog" href="#">Optymalizacja</mdb-nav-item>
                    <ul v-show="isOptymalizacja" class="sub-menu pl-3">
                        <mdb-nav-item tag="li" icon="plus" href="#" >Dodaj optymalizację</mdb-nav-item>
                        <mdb-nav-item tag="li" icon="cog" href="#" >Wszystkie Optymalizacje</mdb-nav-item>
                    </ul>
                </li>
                <mdb-nav-item tag="li" icon="file-alt" href="#" >Raporty</mdb-nav-item>
                <mdb-nav-item tag="li" icon="ellipsis-h" href="#" >Kolejki</mdb-nav-item>
                <li @click="clickParent('isPracownicy')" class="parent" :class="{ active: isPracownicy }">
                    <mdb-nav-item tag="a" icon="users-cog" href="#">Pracownicy</mdb-nav-item>
                    <ul v-show="isPracownicy" class="sub-menu pl-3">
                        <mdb-nav-item tag="li" icon="plus" href="#" >Dodaj pracownika</mdb-nav-item>
                        <mdb-nav-item tag="li" icon="laptop" href="#" >Wszyscy pracownicy</mdb-nav-item>
                    </ul>
                </li>
            </mdb-navbar-nav>
        </mdb-navbar-toggler>
    </mdb-navbar>
</template>

<script>
import {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarNav,
    mdbNavItem,
    mdbNavbarToggler
}
from 'mdbvue';
export default {
    name: 'Sidebar',
    components: {
        mdbNavbar,
        mdbNavbarBrand,
        mdbNavbarNav,
        mdbNavItem,
        mdbNavbarToggler
    },
    data() {
        return {
            isKlienci: false,
            isOptymalizacja: false,
            isPracownicy: false,
        };
    },
    methods: {
        clickParent: function(tag) {
            if(tag == 'isKlienci') {
                this.isKlienci = !this.isKlienci;
            } else if(tag == 'isOptymalizacja') {
                this.isOptymalizacja = !this.isOptymalizacja;
            } else if(tag == 'isPracownicy') {
                this.isPracownicy = !this.isPracownicy;
            }

        }
    },

}
</script>



<style scoped>
.sidebar {
    min-width: 300px;
}
.fixed-top {
    right: auto;
}
.sub-menu {
    display: none;
}
.parent.active .sub-menu {
    display: block;
}
</style>
