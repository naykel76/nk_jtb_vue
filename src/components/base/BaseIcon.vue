<template>
    <svg class="icon">
      <use v-bind="{'xlink:href':'nk_icon-defs.svg#icon-' + name }" />
    </svg>
</template>

<script>
export default {
  props: {
    name: String
  }
};
</script>

