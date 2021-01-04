<template>
    <tr>
        <td>{{client.id}}</td>
        <td>
            <div class="domain" v-on:click="open()">{{client.ssl}}://{{client.www}}{{client.url}}</div>
            <div class="content" v-if="client.optimizations && isOpen">
                <ol>
                    <li v-for="optimization in client.optimizations"><a href="/optymalizacje/klient/"><strong>{{optimization.kwartal}}</strong>: <em>({{optimization.data}})</em></a></li>
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
