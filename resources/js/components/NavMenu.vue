<template>
<!--    <div>
               <mdb-navbar slot="nav" tag="div" :toggler="false" position="top" dark color="unique-color-dark">
                <mdb-navbar-nav class="nav-flex-icons" right>
                    <mdb-nav-item tag="li" href="/navigation/pro/double-navigation-v1" waves-fixed icon="code-branch">
                        <span class="ml-1">v.1</span>
                    </mdb-nav-item>
                    <mdb-nav-item tag="li" href="/navigation/pro/double-navigation-v2" waves-fixed icon="eye">
                        <span class="ml-1">v.2</span>
                    </mdb-nav-item>
                    <mdb-nav-item tag="li" href="/navigation/pro/double-navigation-v3" waves-fixed icon="file-code" far>
                        <span class="ml-1">v.3</span>
                    </mdb-nav-item>
                    <mdb-nav-item tag="li" href="/navigation/pro/double-navigation-v4" waves-fixed icon="terminal">
                        <span class="ml-1">v.4</span>
                    </mdb-nav-item>
                    <mdb-nav-item tag="li" active href="/navigation/pro/double-navigation-v5" waves-fixed icon="smile" far>
                        <span class="ml-1">v.5</span>
                    </mdb-nav-item>
                    <mdb-nav-item tag="li" href="/navigation/pro/double-navigation-v6" waves-fixed icon="user" far>
                        <span class="ml-1">v.6</span>
                    </mdb-nav-item>
                </mdb-navbar-nav>
            </mdb-navbar>
    </div>-->
</template>

<script>
import {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbSideNav2,
    mdbAvatar,
    mdbBtn,
    mdbIcon,
    mdbNavbarBrand
} from "mdbvue";

export default {
    name: "DoubleNavigationPagev1",
    components: {
        mdbNavbar,
        mdbNavItem,
        mdbNavbarNav,
        mdbSideNav2,
        mdbAvatar,
        mdbBtn,
        mdbIcon,
        mdbNavbarBrand
    },
};
</script>
<style scoped>

.navbar i {
    cursor: pointer;
    color: white;
}
</style>
