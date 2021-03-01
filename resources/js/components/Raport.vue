<template>

    <table class="table table-striped table-hover">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Atrybut</th>
            <th scope="col">Katalog</th>
            <th scope="col">Wartość</th>
        </tr>
        </thead>
        <tbody>
        <template  v-for="raport in raports">
            <tr v-bind:class="[raport.raport_info.correct ?   'success-color': 'danger-color']">
                <td>{{raport.check_id}}</td>
                <td>
                    <template v-if="raport.raport[0].attribute_id == 1">
                        Title
                    </template>
                    <template v-else-if="raport.raport[0].attribute_id == 2">
                        Meta description
                    </template>
                    <template v-else-if="raport.raport[0].attribute_id == 3">
                        H1
                    </template>
                </td>
                <td>{{raport.raport[0].short_url}}</td>
                <td>{{raport.raport[0].value}}</td>
            </tr>
        </template>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "ClientsRaportList",
    props: {
        raports: {}
    }
}

</script>

<style scoped>

</style>
