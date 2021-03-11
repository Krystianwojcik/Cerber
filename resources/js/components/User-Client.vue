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
                            <template v-for="staff in client.staff">
                                <template v-if="staff.user_id == userid">
                                    Usuń
                                </template>

                            </template>
                        </template>
                        <template v-else>
                            Dodaj
                        </template>

                    </td>
                </tr>
            </template>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "UserClients",
    props: {
        clients: {},
        userid: ''
    },
    created() {
        console.log(this.clients);
        console.log(this.userid);
    }
}
</script>

<style scoped>

</style>
