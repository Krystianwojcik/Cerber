<template>

    <table class="table table-striped table-hover">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col" colspace="2" class="w-100">Adres WWW</th>
        </tr>
        </thead>
        <tbody>
        <template  v-for="client in clients">
            <template v-if="client.client_has_raport.length > 0">
                <client-report-component :client="client"/>
            </template>
        </template>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "ClientsRaportList",
    props: {
        clients: {}
    }

}

</script>

<style scoped>

</style>
