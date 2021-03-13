<template>
    <table class="table table-striped table-hover">
        <thead>

        </thead>
        <tbody>
            <template v-for="client in clients">
                <tr>
                    <td>{{client.domain}}</td>
                    <td>
                        <template v-if="client.staff.length>0">
                            <template v-for="(staff, index) in client.staff">
                                <template v-if="staff.user_id == userid">
                                    <mdb-btn @click="removeUserToProcjet(client.id)" size="sm" color="danger">Usuń</mdb-btn>
                                </template>
                                <template v-else-if="index == client.staff.length - 1">
                                    <mdb-btn @click="addUserToProcjet(client.id)" size="sm" color="success">Dodaj</mdb-btn>
                                </template>
                            </template>
                        </template>
                        <template v-else>
                            <mdb-btn @click="addUserToProcjet(client.id)" size="sm" color="success">Dodaj</mdb-btn>
                        </template>

                    </td>
                </tr>
            </template>
        </tbody>
    </table>
</template>

<script>
import {
    mdbBtn
} from 'mdbvue';

export default {
    name: "UserClients",
    components: {
        mdbBtn
    },
    props: {
        clients: {},
        userid: ''
    },
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        addUserToProcjet: function (clientID) {
            axios.post('/api/add-to-client', {
                "user_id": this.userid,
                "client_id": clientID
            }).then(function (response) {
                alert(response.data.message);
                window.location.reload(true);
            }).catch(function (error) {
                alert(error.data.message);
            });
        },
        removeUserToProcjet: function (clientID) {
            axios.post('/api/remove-to-client', {
                "user_id": this.userid,
                "client_id": clientID
            }).then(function (response) {
                alert(response.data.message);
                window.location.reload(true);
            }).catch(function (error) {
                alert(error.data.message);
            });
        }

    }
}
</script>

<style scoped>

</style>
