<template>
    <tr v-bind:class="[show ?   '': 'd-none']">
        <td>{{ client.id }}</td>
        <td>{{ hasSSL }}://{{ hasWWW }}{{ client.domain }}</td>
        <td class="text-right py-1 align-middle">
            <mdb-btn color="warning" tag="a" class="icon mx-2" v-bind:href="'/klienci/edytuj/'+ client.id">
                <mdb-icon icon="edit"/>
            </mdb-btn>
            <mdb-btn color="danger" class="icon mx-2" v-on:click="deleteClient(client.domain)">
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
    data() {
        return {
            show: true
        };
    },
    props: {
        client: {}
    },
    methods: {
        deleteClient: function (domain) {
            axios.put('/api/hidden-user/'+this.client.id, {
            }).then(response => {
                this.show = false;
                alert(response.data.message);
            }).catch(error => {
                alert("Wystąpił błąd podczas usuwanai klienta, spróbój później");
            });

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
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

</style>
