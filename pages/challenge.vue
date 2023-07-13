<template>
  <div class="" id="page-home">
    <strate-challenge
      :token="token"
      :score="score"
      :error="error_msg"
      :description="description"
      v-on:challenge="startChallenge"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Challenge",

  data() {
    return {
      token: "",
      description: "",
      score: 0,
      host: "",
      username: "",
      error_msg: null,
    };
  },
  head() {
    return {};
  },
  mounted() {
    this.token = this.$cookies.get("cookie-token");
    this.fetchChallengeData();
  },
  methods: {
    fetchChallengeData() {
      axios
        .get("https://mt4-challenge.onrender.com/auth/me", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          this.description = response.data.challenge_to_do.description;
          this.score = response.data.challenge_to_do.current_score;
        })
        .catch((error) => {
          console.error("Error fetching challenge data", error);
        });
    },
    startChallenge() {
      console.log(this.$cookies.get("cookie-token"));
      axios
        .post(
          "https://mt4-challenge.onrender.com/challenge/run-challenges",
          null,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.$cookies.get("cookie-token")}`,
            },
          }
        )
        .then((response) => {
          this.success = true;
          this.error = false;
          if (response.data) {
            this.description = response.data.description;
            this.score = response.data.current_score;
            this.error_msg = response.data.error;
          } else {
            this.description = "Bravo vous avez finis le challenge !";
            this.score = 20;
            this.error_msg = null;
          }
        })
        .catch((error) => {
          this.success = false;
          this.error = true;
          if (error.response.data.message === "CHALLENGE_DISABLED") {
            this.error_msg = "Le challenge est désactivé.";
          }
        });
    },
  },
};
</script>
