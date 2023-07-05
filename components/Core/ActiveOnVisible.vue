<script>
import getAbsoluteOffset from '~/utils/getAbsoluteOffset';

export default {
  name: 'CoreAov',
  abstract: true,
  render() {
    // Without using a wrapper component, we can only render one child component.
    try {
      return this.$slots.default[0];
    } catch (e) {
      throw new Error('IntersectionObserver.vue can only render one, and exactly one child component.');
    }
    return null;
  },
  props: {
    isStagger: {
      type: Boolean,
      required: false,
      default: true
    },
    delay: {
      type: Number,
      required: false,
      default: 0
    },
    classActive: {
      type: String,
      required: false,
      default: 'is-visible'
    },
    removeOnLeave: {
      type: Boolean,
      required: false,
      default: false
    },
    options: {
      type: Object,
      required: false,
      default () {
        return {rootMargin: '5%'}
      }
    }
  },
  data () {
    return {
      isVisible: false,
      stagger: 0,
      maxStagger: 400,
      staggerDelay: 0
    }
  },
  mounted() {
    this.$eventHub.$on('onResize', this.onResize);
    this.onResize();
    this.$nextTick(this.bindObserver());
  },
  destroyed() {
    this.$eventHub.$off('onResize');
    this.$observer.unobserve(this.$slots.default[0].elm, this.options);
  },
  methods: {
    bindObserver() {
      this.$observer.observe(this.$slots.default[0].elm, this.options);
      this.$observer.addEnterCallback(this.$slots.default[0].elm, this.onVisible);
      if (this.removeOnLeave) this.$observer.addExitCallback(this.$slots.default[0].elm, this.onLeave);
    },
    onVisible() {
      this.isVisible = true;
      setTimeout(() => {
        this.$slots.default[0].elm.classList.add(this.classActive);
      }, this.staggerDelay + this.delay )
      if (!this.removeOnLeave){
        this.$observer.unobserve(this.$slots.default[0].elm, this.options);
      }
    },
    onLeave() {
      this.$slots.default[0].elm.classList.remove(this.classActive);
    },
    onResize() {
      if (this.isVisible || !this.isStagger) return;
      const offsetLeft = getAbsoluteOffset(this.$slots.default[0].elm).left;
      this.staggerDelay = this.maxStagger * offsetLeft / this.$device.width;
    }
  }
}
</script>
