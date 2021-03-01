<template>
    <table class="table table-striped table-hover">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Pełen adres</th>
            <th scope="col">Krótki adres</th>
            <th scope="col">Atrybut</th>
            <th scope="col">Wartość</th>
        </tr>
        </thead>
        <tbody>
        <tr  v-for="optymization in optymizations">
            <th scope="row">{{optymization.id}}</th>
            <td>https://roseness.pl/</td>
            <td>{{optymization.short_url}}</td>
            <td>{{optymization.optymization_attribute.attribute}}</td>
            <td>{{optymization.value}}</td>
        </tr>

        </tbody>
    </table>

</template>

<script>
export default {
    name: "ClientsList",
    data() {
        return {
            optymizations: [],
        }
    },
    props:{
        quarter: ''
    },
    created() {
        this.getClients();
    },
    methods: {
        getClients() {
            console.log('Optymalizacje pobranie');
            console.log('/api/getoptymizations?quarter='+this.quarter);
            axios.get('/api/getoptymizations?quarter='+this.quarter).
            then(response => {
                this.optymizations = response.data;
                console.log('Optymalizacje pobrane');
            })
        }
    }
}
</script>

<style scoped>

</style>
