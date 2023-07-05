<template>
  <core-aov :delay="750">
    <div
      class="base-tarif-item__item t-translate-down t-fade-in"
      :class="highlight ? 'highlight' : ''"
    >
      <li class="font-bold text-black" :class="listTitre ? 'font-bold' : 'font-normal'">
        {{ listTitre }}
        <span class="font-normal">{{ listText }}</span>
      </li>
    </div>
  </core-aov>
</template>

<script>
export default {
  name: "TarifAdvantage",
  data() {
    return {
      isSelected: false,
      toggleIcon: "+",
    };
  },
  props: {
    populary: {
      type: Boolean,
      required: false,
      default: false,
    },
    tarifname: {
      type: String,
      required: false,
      default: "Starter",
    },
    description: {
      type: String,
      required: false,
      default:
        "Enim culpa exercitation minim sunt dolore nisi laborum est Lorem. Ea dolor non amet minim qui veniam cillum.",
    },
    listTitre: {
      type: String,
      required: false,
    },
    listText: {
      type: String,
      required: false,
      default:
        "Pariatur consectetur nisi aute aute occaecat enim occaecat id tempor consectetur nisi minim ullamco magna.",
    },
    highlight: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    selectPrice() {
      this.isSelected = !this.isSelected;
    },
  },
};
</script>

<style lang="scss">
.base-tarif-item {
  transform-origin: top;
  * {
    &::selection {
      background-color: transparent !important;
      color: currentColor !important;
    }
  }
  &__question {
    cursor: pointer;
    width: 100%;
    outline: none;
    transform-origin: top;
  }

  &__list {
    .base-tarif-item__item {
      padding: 1rem;

      &.highlight {
        background-color: #edd6f8;
        border-radius: 8px;
      }
    }
    li {
      position: relative;
      margin-left: 2.5rem;
      &::before {
        content: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='5' stroke='%23B21DCB' stroke-width='2'/%3E%3Ccircle cx='6' cy='6' r='2' fill='%23B21DCB'/%3E%3C/svg%3E%0A");
        position: absolute;
        left: -24px;
        top: 0.1rem;
      }
    }
  }
}
</style>
