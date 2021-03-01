<template>
    <tr>
        <td>{{ client.id }}</td>
        <td>{{ hasSSL }}://{{ hasWWW }}{{ client.domain }}</td>
        <td class="text-right py-1 align-middle">
            <mdb-btn color="warning" tag="a" class="icon mx-2" v-bind:href="'/klienci/'+ client.id +'/edit/'">
                <mdb-icon icon="edit"/>
            </mdb-btn>
            <mdb-btn color="danger" class="icon mx-2" v-on:click="deleteClient(client.id)">
                <mdb-icon icon="trash-alt"/>
            </mdb-btn>
        </td>
    </tr>
</template>

<script>
import {mdbIcon, mdbBtn}
    from "mdbvue";

export default {
    name: "ClientListSingle",
    components: {
        mdbIcon,
        mdbBtn

    },
    props: {
        client: {}
    },
    methods: {
        deleteClient: function(index) {
           // axios.delete('/api/client/'+ index);
           this.$emit('delete-row');
        }
    },
    computed: {
        hasWWW: function () {
            if (this.client.www) {
                return 'www.';
            } else {
                return '';
            }
        },
        hasSSL: function () {
            if (this.client.ssl) {
                return 'https';
            } else {
                return 'http';
            }
        }
    },
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
