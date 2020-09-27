<template>
  <div class="nk-docs container">
    <h1>Flexbox Guide</h1>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <!-- flex-direction -->
    <section>
      <h3 id="flex-direction">flex-direction</h3>
      <p>Establishes the flex-children axis direction (horizontal rows or vertical columns).</p>
    </section>

    <p><code>flex-direction: row | row-reverse | column | column-reverse </code></p>
    <div class="bx">

      <h4>Try it out!</h4>

      <div class="buttons">
        <button class="btn mr" v-on:click="changeFlexDirection('row')"><code>row (default)</code></button>
        <button class="btn mr" v-on:click="changeFlexDirection('row-reverse')"><code>row-reverse</code></button>
        <button class="btn mr" v-on:click="changeFlexDirection('column')"><code>column</code></button>
        <button class="btn mr" v-on:click="changeFlexDirection('column-reverse')"><code>column-reverse</code></button>
      </div>

      <div id="changeFlexDirection" class="flex mt primary bdr5">
        <div class="secondary pxy-sm">First Item</div>
        <div class="secondary pxy-sm">Second Item</div>
        <div class="secondary pxy-sm">Third Item</div>
      </div>
    </div>
    <p class="mt"><strong>Note: </strong><code>flex-row: row nowrap; (default)</code> can be used as shorthand for
      flex-direction and flex-wrap properties, which together define the flex container's main and cross axes.</p>

    <h3 class="subtitle">Justify Content</h3>
    <p>By default, all flex-items will be shrunk to fit content and aligned to the left. Change alignment with
      <code>justify-content</code>.
    </p>
    <p><code>justify-content:</code> flex-start | flex-end | center | space-between | space-around | space-evenly;
    </p>

    <div class="bx">
      <h4>Try it out!</h4>
      <button class="btn" v-on:click="changeFlexJustify('flex-start')"><code>flex-start</code></button>
      <button class="btn" v-on:click="changeFlexJustify('flex-end')"><code>flex-end</code></button>
      <button class="btn" v-on:click="changeFlexJustify('center')"><code>center</code></button>
      <button class="btn" v-on:click="changeFlexJustify('space-around')"><code>space-around</code></button>
      <button class="btn" v-on:click="changeFlexJustify('space-evenly')"><code>space-evenly</code></button>

      <div id="changeFlexJustify" class="flex mt warning">
        <div class="blue pxy-sm">First Item</div>
        <div class="blue pxy-sm">Second Item</div>
        <div class="blue pxy-sm">Third Item</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlexboxGuide",
  data() {
    return {
      myVar: "My Data"
    };
  },
  methods: {
    changeFlexDirection: function(type) {
      document.getElementById("changeFlexDirection").style.flexDirection = type;
    }
  }
};
</script>