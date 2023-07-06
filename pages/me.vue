<template>
  <div class="" id="page-home">
    <strate-instance :sshPublicKey="sshPublicKey"/>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NewInstance",

  data() {
    return {
      sshPublicKey: "", 
    };
  },
  head() {
    return {};
  },
  methods: {},
  
  mounted(){
      axios
        .get('https://mt4challenge.onrender.com/auth/me', {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${this.$route.query.token}`,
          },
        })
        .then((response) => {
          this.sshPublicKey = response.data.ssh_public_key_to_add;
          console.log(this.sshPublicKey) 
        })
        .catch((error) => {
          console.error('Error fetching SSH key:', error);
        });
    },
};
</script>
