<template>
  <div class="" id="page-home">
    <strate-challenge :token="token" :score="score" :description="description" @update-user-data="updateUserData"/>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "Challenge",

  data() {
    return {
      token : "",
      description: "",
      score: 0,
        host: "",
        username: ""
    };
  },
  head() {
    return {};
  },
  mounted(){
    this.token = this.$cookies.get('cookie-token');
    this.host = this.$cookies.get('cookie-host');
    this.username = this.$cookies.get('cookie-username');
    this.fetchChallengeData()
  },
  methods: {
    fetchChallengeData() {
      const formData = {
        host: this.host,
        username: this.username,
      };
      axios
        .patch("https://mt4challenge.onrender.com/challenge/new-instance", formData, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          console.log('test',response)
          this.description = response.data.description;
          this.score = response.data.current_score;
        })
        .catch((error) => {
          console.error("Error fetching challenge data", error);
        });
    },
   
  },
};
</script>
