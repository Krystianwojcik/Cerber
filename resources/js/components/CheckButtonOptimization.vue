<template>
    <div class="d-inline">
        <mdb-btn type="button" color="primary" @click.native="modal = true">Sprawdź optymalizację
            <mdb-icon icon="check-circle" class="ml-2"/>
        </mdb-btn>

        <mdb-modal :show="modal" @close="modal = false">
            <mdb-modal-header>
                <mdb-modal-title>Sprawdź optymalizację</mdb-modal-title>
            </mdb-modal-header>
            <mdb-modal-body>
                <mdb-select
                    v-model="basicOptions"
                    placeholder="Wybierz częstotliwość sprawdzania"
                    label=""
                />
            </mdb-modal-body>
            <mdb-modal-footer>
                <mdb-btn color="warning" @click.native="modal = false">Cofnij</mdb-btn>
                <mdb-btn color="primary" @click="addOptymizationToOrder">Dodaj do kolejki</mdb-btn>
            </mdb-modal-footer>
        </mdb-modal>
    </div>
</template>
<script>
import {
    mdbBtn,
    mdbIcon,
    mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbSelect
} from 'mdbvue';

export default {
    name: "OptimizationCheckButton",
    components: {
        mdbBtn,
        mdbIcon,
        mdbModal,
        mdbModalHeader,
        mdbModalTitle,
        mdbModalBody,
        mdbModalFooter,
        mdbSelect
    },
    data() {
        return {
            modal: false,
            basicOptions: [
                {text: "Teraz", value: "now"},
                {text: "Codzienie", value: "day"},
                {text: "Raz na tydzień", value: "week"}
            ]
        };
    },
    props: {
        quarter: ''
    },
    methods: {
        addOptymizationToOrder: function () {
            axios.post('/api/add-optymization-to-order', {
                "quarter": this.quarter
            }).then(function (response) {
                alert(response.data.message);
                this.modal = false;
            }).catch(function (error) {
                alert(error.data.message);
            });
        }

    }
}
</script>
