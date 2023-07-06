<template>
  <div class="" id="page-home">
    <strate-instance :sshPublicKey="sshPublicKey" :host="host" :username="username"/>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NewInstance",

  data() {
    return {
      sshPublicKey: "", 
      host:'',
      username: ''
    };
  },
  head() {
    return {};
  },
  methods: {
  sendForm() {
    console.log(username)
    const host = this.host;
    const username = this.username;
    const formData = {
      host: host,
      username: username
    }
    console.log(formData)
    axios.post('https://mt4challenge.onrender.com/challenge/new-instance', formData, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${this.$route.query.token}`,
        }
      })
      .then((response) => {
        console.log('Requête POST réussie', response);
      })
      .catch((error) => {
        console.error('Erreur lors de la requête POST', error);
      });
    }
  },

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
