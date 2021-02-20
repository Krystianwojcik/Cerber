<template>
    <tr>
        <td>{{client.id}}</td>
        <td>
            <div class="domain" v-on:click="open()">{{getWWW(client.ssl)}}://{{getSSL(client.www)}}{{client.domain}}</div>
            <div class="content" v-if="client.optymizations_quarters && isOpen">
                <ol>
                    <li v-for="optimization in client.optymizations_quarters">
                        <a v-bind:href="'/optymalizacje/'+ client.domain +'/kwartal-'+ optimization.quarter +'/' "><strong>kwartał {{optimization.quarter}}</strong>: <em>({{optimization.start_Quarter}})</em></a>
                    </li>
                </ol>
            </div>
        </td>
        <td class="text-right py-2"><mdb-btn color="primary" tag="a" class="icon mx-2" href="/klienci/nowy/"><mdb-icon icon="plus" /></mdb-btn></td>
    </tr>
</template>

<script>
import {mdbIcon, mdbBtn}
    from "mdbvue";
export default {
    name: "ClientOptimizationSingle",
    components: {
        mdbIcon,
        mdbBtn
    },
    data() {
        return {
            isOpen: false
        };
    },
    props:{
        client: {}
    },
    methods: {
        open: function() {
            this.isOpen = !this.isOpen;
        },
        getWWW: function (value) {
            if(value) {
                return 'https';
            } else {
                return 'http';
            }
        },
        getSSL: function (value) {
            if(value) {
                return 'www.';
            }
        }
    }

}
</script>

<style scoped>
.icon {
    height: 30px;
    width: 30px;
    padding: 0;
    line-height: 30px;
    border-radius: 50%;
}

</style>
