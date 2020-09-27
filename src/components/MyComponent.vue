<template>
  <div>
    <p>I am a simple component!</p>
    <p>The message passes in as a prop is, <em>{{ msg }}</em></p>
  </div>
</template>

<script>
export default {
  props:{
    msg: String,
  }
}
</script>

