<template>
    <tr v-bind:class="[show ?   '': 'd-none']">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.surname }}</td>
        <td class="text-right py-1 align-middle">
            <mdb-btn color="warning" tag="a" class="icon mx-2" v-bind:href="'/uzytkownicy/edytuj/'+ user.id">
                <mdb-icon icon="edit"/>
            </mdb-btn>
            <mdb-btn color="danger" class="icon mx-2" v-on:click="deleteClient(user.id)">
                <mdb-icon icon="trash-alt"/>
            </mdb-btn>
        </td>
    </tr>
</template>

<script>
import {mdbIcon, mdbBtn}
    from "mdbvue";

export default {
    name: "User",
    components: {
        mdbIcon,
        mdbBtn

    },
    data() {
        return {
            show: true,
        };
    },
    props: {
        user: {}
    },
    methods: {
        deleteClient: function (domain) {
            axios.delete('/api/staff/'+this.user.id, {
            }).then(response => {
                this.show = false;
                alert(response.data.message);
            }).catch(error => {
                alert("Wystąpił błąd podczas usuwanai klienta, spróbój później");
            });

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
