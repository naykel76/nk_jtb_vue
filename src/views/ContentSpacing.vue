<template>
  <div class="nk-docs container">
    <!-- Intro -->
    <section>
      <h1>Content Spacing</h1>
      <p class="lead">Set of rules and methodologies around how to add spacing to JTB elements for consistent look and feel when creating and placing elements within layouts and components.</p>

      <h2>The Great Debate, Margins Top or Bottom?</h2>
      <p>JTB has adapted a top margin approach where all page elements and components are separated with <code> margin-top</code>. Why? ...... because by adding the margin to the top you are able to use the adjacent sibling selector <code>+</code> to target the first element after. For example <code>h2 + p</code>. or <code>.bx + .bx</code> <a href="https://matthewjamestaylor.com/css-margin-top-vs-bottom">more</a></p>

      <p>Often parent containers and elements will have padding which will cause problems for any <code>:first-child</code> elements that has the top margin applied. To work around this and maintain consistent spacing we set the <code>top-margin</code> to <code>0</code> for any <code>:first-child</code> using the wildcard selector <code>* > :first-child</code>.</p>
    </section>
    <hr class="lg">
    <section>
      <h2>Gutters and Margins</h2>
      <ol>
        <li>A gutter is the space between elements.</li>
        <li>Padding is the space that separates content from elements</li>
        <li>Margin is what separates elements. This is easily confused with gutter, however the distinction is that gutters generally appear on layout elements such as sections, columns and rows, where a top-margin is placed on the content elements like paragraph, headings and lists.</li>
        <strong>Note:</strong> unless overridden all first-child elements have the top margin removed <code>* > :first-child {margin-top: 0;}</code>
      </ol>
      <img src="@/assets/content-spacing.png" alt="JTB content spacing" class="mt">
    </section>

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
  </div>
</template>
