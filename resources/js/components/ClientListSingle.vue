<template>
    <tr>
        <td>{{client.id}}</td>
        <td>{{client.ssl}}://{{client.www}}{{client.url}}</td>
    </tr>
</template>

<script>
export default {
    name: "ClientListSingle",
    props:{
        client: {}
    }
}
</script>

<style scoped>

</style>
