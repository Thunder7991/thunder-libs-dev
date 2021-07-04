<template>
  <svg class="thunder-logo" viewBox="0 0 1061 1024">
    <path
      class="thunder-logo1"
      :stroke="stroke"
      :stroke-width="strokeWidth"
      d="M817.7830496 295.9533408C808.73239893 108.88666773 629.93534293 76.20390613 599.03650453 72.6801728 419.51290453 52.2033344 362.18606293 222.03147627 357.65944 222.03147627 200.53023253 136.9545824 193.22198827 306.5141632 187.1877888 311.039488c-55.81666987 13.5772736-123.869104 58.91096533-120.68788373 126.72338027 5.98749333 127.63545173 101.91063787 157.72730773 162.87797973 163.8951392l477.53080213-419.4151424-72.53494506 300.05709226 212.57741653 2.21206507-133.98102613 124.032576c188.63393067 27.9952608 234.9886752-83.18009813 238.5578176-98.37003733 39.51096853-168.17266133-126.20182613-221.76429333-133.74490027-214.22122027z"
    ></path>
    <path
      :stroke="stroke"
      :stroke-width="strokeWidth"
      d="M741.9708768 529.64980693l-164.1649984-1.71126826 69.12927467-250.59897174L287.09913493 604.71857067h158.0633344L310.2551008 929.31205973z"
      class="thunder-logo1"
    ></path>
  </svg>
</template>

<script>
import { onMounted } from 'vue';
export default {
  name: 'ThunderLogo',
  props: {
    strokeWidth: {
      type: [String, Number],
      default: 1,
    },
    stroke: {
      type: String,
      default: '#000',
    },
  },
  setup(props, ctx) {
    onMounted(() => {
      const logo = document.getElementsByClassName('thunder-logo1')[0];
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>
.thunder-logo {
  width: 100%;
  height: 100%;
}
.thunder-logo1 {
  fill: none;
  animation: thunder-logo-animation 5s linear infinite forwards;
}
@keyframes thunder-logo-animation {
  0% {
    stroke-dasharray: 3239;
    stroke-dashoffset: 2202;
  }
  50% {
    stroke-dasharray: 3239;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 3239;
    stroke-dashoffset: 0;
  }

}

</style>
