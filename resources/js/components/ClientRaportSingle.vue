<template>
    <tr>
          <td>{{client.id}}</td>
          <td>
              <div class="domain" v-on:click="open()">
                  <a v-bind:href="'/raporty/'+ client.domain +'/'">
                      {{getWWW(client.ssl)}}://{{getSSL(client.www)}}{{client.domain}}
                  </a>
              </div>
        </td>
    </tr>
</template>

<script>
import {mdbIcon, mdbBtn}
    from "mdbvue";
export default {
    name: "ClientRaportSingle",
    components: {
        mdbIcon,
        mdbBtn
    },
    data() {
        return {
            isOpen: false
        };
    },
    props: {
        client: {}
    },

    methods: {
        open: function() {
            this.isOpen = !this.isOpen;
        },
        getWWW: function (value) {
            if(value) {
                return 'https';
            } else {
                return 'http';
            }
        },
        getSSL: function (value) {
            if(value) {
                return 'www.';
            }
        }
    }

}
</script>

<style scoped>

</style>
