<template>
  <div class="" id="page-home">
    <strate-instance :user="me" :token="token" @update-user-data="updateUserData"/>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NewInstance",

  data() {
    return {
      token : this.$route.query.token,
      me : {
        sshPublicKey: "",
        host: "",
        username: ""
      },
    };
  },
  head() {
    return {};
  },

  mounted(){
    this.authMe()   
  },

  methods: {
    authMe(){
      axios.get('https://mt4challenge.onrender.com/auth/me', {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          this.me.sshPublicKey = response.data.ssh_public_key_to_add;
          console.log(this.me) 
        })
        .catch((error) => {
          console.error('Error fetching SSH key:', error);
        });
    },

    updateUserData(newData) {
      this.me = newData;
    }

  },
};
</script>
