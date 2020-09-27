<template>
  <div>
    <MyComponent msg="I am the message." />
    <BaseIcon name="save"/>
    <BaseIcon name="menu"/>
  </div>
</template>


<script>
import MyComponent from "@/components/MyComponent";

export default {
  components: { MyComponent }
};
</script>

