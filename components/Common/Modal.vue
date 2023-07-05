<template>
  <form
    action="post"
    class="mt-8"
    data-success="Thanks for your enquiry, we'll be in touch shortly."
    data-error="Please fill in all fields correctly."
    @submit.prevent="submitForm"
    v-bind:value="value"
    v-on:input="updateValue($event.target.value)"
  >

    <p v-if="errors.length" >
    <b>Please correct the following error(s):</b>
    <ul >
      <li>{{ error }}</li>
    </ul>
  </p>
    <div class="grid px-8 md:px-12 md:grid-cols-2 md:gap-8">
      <base-input-text
        type="text"
        namefor="name"
        label="Nom"
        placeholder=" "
        :required="true"
        class="md:mr-8"
        v-model="form.name"
      />
      <base-input-text
        type="text"
        namefor="lastname"
        label="Prénom"
        placeholder=" "
        :required="true"
        v-model="form.lastname"
      />
    </div>
    <div class="grid px-8 md:px-12 md:grid-cols-2 md:gap-8">
      <t-radio-group
        :options="[
          { value: 'parent', text: 'Je suis parent' },
          { value: 'driver', text: 'Je suis chauffeur' },
        ]"
        name="radio"
        required
        v-model="form.profil"
        :value="['checked']"
      />
    </div>
    <div class="grid px-8 md:px-12 md:grid-cols-2 md:gap-8">
      <base-input-text
        type="mail"
        namefor="mail"
        label="Adresse e-mail"
        placeholder=" "
        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
        :required="true"
        class="md:mr-8"
        v-model="form.mail"
      />
      <base-input-text
        type="tel"
        namefor="phone"
        label="Téléphone"
        placeholder=" "
        pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
        :required="true"
        v-model="form.phone"
      />
    </div>

    <div class="grid grid-cols-1 px-8 md:px-12 md:gap-8">
      <base-text-area
        namefor="text"
        id="text"
        label="Votre message"
        placeholder=" "
        v-model="form.text"
        required="true"
      ></base-text-area>
    </div>

    <div
      class="flex justify-between px-8 py-8 mt-8 border-t border-gray-100 rounded-b md:py-12 md:px-12 bg-grey-light"
    >
      <slot name="tt1"></slot>

    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Form",
  data: function () {
    return {
      showModal: true,
      closeModal: false,
      errors: "",

      form: {
        name: "",
        lastname: "",
        phone: "",
        mail: "",
        profil: "",
        text: "",
      },
    };
  },
  props: {
    value: {
      type: String,
      required: false,
    },

  },
  methods: {
   
  },
};
</script>

<style scoped lang="scss"></style>
