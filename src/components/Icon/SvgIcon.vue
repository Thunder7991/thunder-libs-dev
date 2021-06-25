<template>
  <svg :style=style class="svgIcon">
    <use :href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: "SvgIcon", 
  porps: {
    name: String,
    style: Object,
  },
  setup(props, ctx) {
    const iconName = `#${ctx.attrs.name}`;
    const style = ctx.attrs.style
    return {
      iconName,
      style
    };
  },
};
</script>

<style lang="scss" scoped>
.svgIcon {
  width: 100%;
  height: 100%;
}
</style>