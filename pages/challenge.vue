<template>
  <div class="" id="page-home">
    <strate-challenge :token="token" :score="score" :description="description"/>
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
    this.fetchChallengeData()
  },
  methods: {
    fetchChallengeData() {
      axios
        .get("https://mt4challenge.onrender.com/auth/me", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          console.log('test',response)
          this.description = response.data.challenge_to_do.description;
          this.score = response.data.challenge_to_do.current_score;
        })
        .catch((error) => {
          console.error("Error fetching challenge data", error);
        });
    },
   
  },
};
</script>
