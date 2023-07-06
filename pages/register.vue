<template>
  <div class="" id="page-home">
    <strate-hero :user="me"  @update-user-data="updateUserData"/>
  </div>
</template>

<script>
export default {
  name: "Register",

  data() {
    return {
      me : {
        first_name: "",
        last_name: ""
      }
    };
  },
  head() {
    return {};
  },
  methods: {
    updateUserData(newData) {
      this.me = newData;
    }
  },
};
</script>
