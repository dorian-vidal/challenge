<template>
  <div
    class="l-sidebar"
    :class="[{ 'is-open': isOpen }, `l-sidebar--${position}`]"
  >
    <div class="cursor-pointer l-sidebar__overlay " @click="onClick"></div>
    <div
      class="flex items-center justify-center py-16 l-sidebar__wrapper"
    >
      <button class="cursor-pointer l-sidebar__close">
        <base-use-svg id="close" size="lg" @click.native="onClick" color="white" />
      </button>
      <div
        class="flex items-center justify-center l-sidebar__inner "
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import debounce from '~/utils/debounce'

export default {
  name: 'Sidebar',
  props: {
    id: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: false,
      default: 'left'
    }
  },
  data: function() {
    return {
      isOpen: false
    }
  },
  mounted() {
    this.open = debounce(this.open, 500, true)
    this.close = debounce(this.close, 500, true)

    this.bindEvents()
  },
  destroyed() {
    this.unbindEvents()
  },
  methods: {
    bindEvents() {
      this.$eventHub.$on('sidebar:open', (id) => {
        if (id === this.id) {
          this.open()
        } else if (id !== this.id && this.isOpen) {
          this.close()
        }
      })

      this.$eventHub.$on('sidebar:close', (id) => {
        if (id == void 0) {
          this.close() // close all the sidebar
          return false
        }
        if (id === this.id) {
          this.close()
        }
      })
    },
    unbindEvents() {
      this.$eventHub.$off('sidebar:open')
      this.$eventHub.$off('sidebar:close')
    },
    open() {
      this.isOpen = true
      this.$fixScroll.fix()
    },
    close() {
      this.isOpen = false
      this.$fixScroll.unFix()
    },
    onClick() {
      this.$eventHub.$emit('sidebar:close', this.id)
    }
  }
}
</script>

<style scoped lang="scss">
/* purgecss start ignore */
.l-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
  max-height: 100vh;
  pointer-events: none;
  z-index: 20;

  &__wrapper {
    position: relative;
    width: 50vw;
    height: 100%;
    transform: translateX(-100%) translateZ(0);
    transition: transform 800ms $ease-in-out-quint,
      opacity 800ms $ease-in-out-quint;
    overflow: hidden;
    backdrop-filter: blur(10px);
    padding: 2.5rem;

    @include mq($until: $bp-landTablet) {
      width: 70vw;
      padding: 1.5rem;
    }

    @include mq($until: tablet) {
      width: 85vw;
    }

    &:before {
      @include abs-pseudo(0, 0, 0, 0);
      height: 100%;
      width: 100%;
      background: $gradient-green2pink120;
      opacity: 0.70;
    }
  }

  &__inner {
    height: 90%;
    width: 100%;
    opacity: 0;
    transform: translateX(90%) translateZ(0);
    transition: transform 800ms $ease-in-out-quint,
      opacity 800ms $ease-in-out-quad;

    @include mq($until: $bp-landTablet) {
      height: 100%;
      width: 100%;
    }
  }

  &--right {
    justify-content: flex-end;
  }

  &--right & {
    &__wrapper {
      transform: translateX(100%) translateZ(0);
    }
    &__inner {
      transform: translateX(-90%) translateZ(0);
    }
  }

  &__close {
    position: absolute;
    top: 2rem;
    right: 2.3rem;
    z-index: 1;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: $black;
    opacity: 0;
    transition: opacity 800ms $ease-in-out-quad;
  }

  &.is-open {
    pointer-events: all;
  }

  &.is-open & {
    &__inner,
    &__wrapper {
      opacity: 1;
      transform: translateX(0) translateZ(0);
    }
    &__overlay {
      opacity: 0.5;
    }
  }
}
/* purgecss end ignore */
</style>

