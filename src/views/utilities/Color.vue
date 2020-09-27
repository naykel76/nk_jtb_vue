<template>
  <div class="nk-docs container">

    <section>
      <h1>Colours</h1>
      <p class="lead">A collection of colors and color schemes that can be applied to almost any element.</p>
      <h2>Things to Know</h2>
      <ol>
        <li>Colour themes are built based on the colors set in the <code>$colors-map</code> which can be found in <code>_vars_colors.scss</code>. You can add or remove colors at your discretion.</li>
        <li>Theme font colour (light or dark) is chosen automatically based on the theme color using the using the <code>setTextColor($bg-color)</code> function.</li>
        <li>Theme <code>border: 1px solid rgba(0, 0, 0, 0.15);</code> is a 1px solid transparent black border. This darkens then background colour giving the illusion of a darker shade of the background for the border colour.</li>
      </ol>

      <p><strong class="txt-blue">Note:</strong> The <code>key</code> in the <code>colors-map</code> is used for the class name.</p>
      <pre><code class="scss">$colors-map:(
  "primary": $primary,
  "orange": rgb(255, 165, 0),
  "blue": #3273dc,
);</code></pre>
    </section>
    <hr class="lg">
    <!-- color themes -->
    <section>
      <h2 id="color-themes">Color Themes</h2>
      <p>Note: It is implied that using the colour will using the entire theme including border and text, add the <code>nbdr</code> utility class to remove the border.</p>

      <h3 id="colors-theme">Theme Colours</h3>

      <p>The theme colors are most frequently used across your screens and components. <code>$primary</code>, <code>$secondary</code>, <code>$dark</code>, and <code>$light</code>.</p>

      <div class="row mm tac">
        <div class="col-md-25 t1">Normal</div>
        <div class="col-md-25 t2">Light</div>
        <div class="col-md-25 t3">Dark</div>
      </div>
      <br>
      <div class="row mm tac">
        <div class="col-md-25 primary">Primary</div>
        <div class="col-md-25 secondary">Secondary</div>
        <div class="col-md-25 dark">Dark</div>
        <div class="col-md-25 light">Light</div>
      </div>
      <div class="row mm tac">
        <div class="col-md-25 primary-light">Primary Light</div>
        <div class="col-md-25 secondary-light">Secondary Light</div>
      </div>
      <div class="row mm tac">
        <div class="col-md-25 primary-dark">Primary dark</div>
        <div class="col-md-25 secondary-dark">Secondary dark</div>
      </div>
      <small>** thick borders are show for demonstration purpose only</small>

      <h3 id="colors-alert">Alert Styles</h3>
      <p>The alert styles are built on standard colours, they just offer a more traditional naming convention</p>
      <div class="row mm tac">
        <div class="col-md-25 danger">danger</div>
        <div class="col-md-25 success">success</div>
        <div class="col-md-25 info">info</div>
        <div class="col-md-25 warning">warning</div>
      </div>
      <div class="row mm mt tac">
        <div class="col-md-25 danger-light">danger-light</div>
        <div class="col-md-25 success-light">success-light</div>
        <div class="col-md-25 info-light">info-light</div>
        <div class="col-md-25 warning-light">warning-light</div>
      </div>



      <h3 id="color-shades">Color Shades</h3>
      <div class="row mm tac">
        <div class="col-md-20 bdr3 red">red</div>
        <div class="col-md-20 bdr3 green">green</div>
        <div class="col-md-20 bdr3 blue">blue</div>
        <div class="col-md-20 bdr3 yellow">yellow</div>
        <div class="col-md-20 bdr3 indigo">indigo</div>
        <div class="col-md-20 bdr3 purple">purple</div>
        <div class="col-md-20 bdr3 pink">pink</div>
        <div class="col-md-20 bdr3 orange">orange</div>
        <div class="col-md-20 bdr3 turquoise">turquoise</div>
        <div class="col-md-20 bdr3 teal">teal</div>
        <div class="col-md-20 bdr3 cyan">cyan</div>
        <div class="col-md-20 bdr3 darkblue">darkblue</div>
      </div>
    </section>
    <hr class="lg">
    <!-- color shades -->
    <section>
      <h2 id="color-shades">Color Shades</h2>
      <p>You can turn of the colour shades in <code>_vars_base.scss</code> scale colours<code>$include-color-shades: true;</code></p>

      <div class="row tac mm">
        <div class="col grey1"><code>grey1</code></div>
        <div class="col grey2"><code>grey2</code></div>
        <div class="col grey3"><code>grey3</code></div>
        <div class="col grey4"><code>grey4</code></div>
        <div class="col grey5"><code>grey5</code></div>
        <div class="col grey6"><code>grey6</code></div>
        <div class="col grey7"><code>grey7</code></div>
        <div class="col grey8"><code>grey8</code></div>
        <div class="col grey9"><code>grey9</code></div>
        <div class="col"></div>
      </div>
      <div class="row tac mm">
        <div class="col orange1"><code>orange1</code></div>
        <div class="col orange2"><code>orange2</code></div>
        <div class="col orange3"><code>orange3</code></div>
        <div class="col orange4"><code>orange4</code></div>
        <div class="col orange5"><code>orange5</code></div>
        <div class="col orange6"><code>orange6</code></div>
        <div class="col orange7"><code>orange7</code></div>
        <div class="col orange8"><code>orange8</code></div>
        <div class="col orange9"><code>orange9</code></div>
        <div class="col orange"><code>orange</code></div>
      </div>
      <div class="row tac mm">
        <div class="col yellow1"><code>yellow1</code></div>
        <div class="col yellow2"><code>yellow2</code></div>
        <div class="col yellow3"><code>yellow3</code></div>
        <div class="col yellow4"><code>yellow4</code></div>
        <div class="col yellow5"><code>yellow5</code></div>
        <div class="col yellow6"><code>yellow6</code></div>
        <div class="col yellow7"><code>yellow7</code></div>
        <div class="col yellow8"><code>yellow8</code></div>
        <div class="col yellow9"><code>yellow9</code></div>
        <div class="col yellow"><code>yellow</code></div>
      </div>
    </section>
  </div>
</template>

<style>
.col-md-25 {
  border-width: 2px;
}
</style>