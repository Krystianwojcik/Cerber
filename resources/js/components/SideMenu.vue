<template>
    <mdb-navbar class="sidebar flex-column align-items-start h-100" dark color="unique-color-dark" position="top">
        <mdb-navbar-brand class="align-items-center mb-4" href="/">
            Cerber
        </mdb-navbar-brand>
        <mdb-navbar-toggler class="w-100 align-items-start">
            <mdb-navbar-nav class="flex-column w-100">
                <mdb-nav-item tag="li" icon="laptop" active href="/">Home</mdb-nav-item>
                <li class="parent" :class="{ active: isKlienci }">
                    <mdb-nav-item tag="li" icon="users" @click="clickParent('isKlienci')">Klienci <mdb-icon icon="angle-down" class="icon" /></mdb-nav-item>
                    <ul v-show="isKlienci" class="sub-menu pl-3">
                        <mdb-nav-item tag="li" icon="plus" href="/klienci/nowy/" >Dodaj klienta</mdb-nav-item>
                        <mdb-nav-item tag="li" icon="users" href="/klienci/" >Wszyscy klienci</mdb-nav-item>
                    </ul>
                </li>
                <li class="parent" :class="{ active: isOptymalizacja }">
                    <mdb-nav-item tag="li" icon="cog" @click="clickParent('isOptymalizacja')">Optymalizacja <mdb-icon class="icon" icon="angle-down" /></mdb-nav-item>
                    <ul v-show="isOptymalizacja" class="sub-menu pl-3">
                        <mdb-nav-item tag="li" icon="plus" href="#" >Dodaj optymalizację</mdb-nav-item>
                        <mdb-nav-item tag="li" icon="cog" href="/optymalizacje/" >Wszystkie Optymalizacje</mdb-nav-item>
                    </ul>
                </li>
                <mdb-nav-item tag="li" icon="file-alt" href="/raporty/" >Raporty</mdb-nav-item>
                <li class="parent" :class="{ active: isPracownicy }">
                    <mdb-nav-item tag="a" icon="users-cog" @click="clickParent('isPracownicy')">Pracownicy <mdb-icon class="icon" icon="angle-down" /></mdb-nav-item>
                    <ul v-show="isPracownicy" class="sub-menu pl-3">
                        <mdb-nav-item tag="li" icon="plus" href="#" >Dodaj pracownika</mdb-nav-item>
                        <mdb-nav-item tag="li" icon="laptop" href="/uzytkownicy/" >Wszyscy pracownicy</mdb-nav-item>
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
    mdbNavbarToggler,
    mdbIcon
}
    from 'mdbvue';
export default {
    name: 'Sidebar',
    components: {
        mdbNavbar,
        mdbNavbarBrand,
        mdbNavbarNav,
        mdbNavItem,
        mdbNavbarToggler,
        mdbIcon
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
#navbarSupportedContent.hide-navbar > .navbar-nav {
    display: none;
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
.parent.active i.icon {
    transform: rotate(180deg);
}
</style>
