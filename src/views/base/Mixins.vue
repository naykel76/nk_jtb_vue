<template>
  <div class="container">
    <h1>SASS Mixins</h1>
    <p class="lead">Collection of mixins to call in your scss.</p>

    <section>

      <h2 id="responsive-mixins">@Media Mixins</h2>
      <p>The media mixins are use to easily create device specific media queries. <code>phone</code>, <code>tablet</code>, <code>desktop</code>, and <code>widescreen</code></p>

      <p>There are a few different flavours of media mixins to choose from:</p>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Description</th>
            <th>Example Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>{device}-Only</code></td>
            <td>Creates a media query for a specific device only</td>
            <td><code>@include phone-only { }</code></td>
          </tr>
          <tr>
            <td><code>from-{device}</code></td>
            <td>Creates a media query setting the <code>min-width</code> based on device specified. <br><strong>Note:</strong> includes the specified device.</td>
            <td><code>@include from-tablet { }</code></td>
          </tr>
          <tr>
            <td><code>excludeFrom-{device}</code></td>
            <td>Creates a media query setting the <code>max-width</code> to the specified device - 1. <br> <strong>Note:</strong> excludes the specified device and higher. No <code>phone</code> or <code>widescreen</code> option.
            </td>
            <td><code>@include excludeFrom-tablet</code></td>

          </tr>
        </tbody>
      </table>

      <h3>Example</h3>
      <pre><code class="scss">@mixin desktop-only {
    @media (min-width: $desktop) and (max-width: $widescreen - 1px) {
        @content;
    }
}</code></pre>

      <h3>Usage</h3>
      <p>The responsive media queries are called using the scss <code>@include</code> directive.</p>

      <p> are two ways to use the responsive mixins classes:</p>

      <h4>1. Nest media query inside class</h4>
      <p>This method is useful if you want to nest your media queries insde you class to keep them together.</p>
      <pre><code class="scss">.my-class {
    @include phone-only {
        background: hsl(240, 50%, 20%);
    }
    @include tablet-only {
        background: hsl(240, 50%, 30%);
    }
    @include desktop-only {
        background: hsl(240, 50%, 40%);
    }
    @include widescreen-only {
        background: hsl(240, 50%, 50%);
    }
}</code></pre>
      <h4>2. Create standalone media query</h4>
      <p>This method is useful if you want to create multiple classes for a single media query.</p>
      <pre><code class="scss">@include phone-only {
    .my-class {background: hsl(240, 50%, 20%);}
    .my-other-class {font-size: 0.75rem;}
}
@include tablet-only {
    .my-class {background: hsl(240, 50%, 30%);}
    .my-other-class {font-size: 1rem;}
}
@include desktop-only {
    .my-class {background: hsl(240, 50%, 40%);}
    .my-other-class {font-size: 1.5rem;}
}
@include widescreen-only {
    .my-class {background: hsl(240, 50%, 50%);}
    .my-other-class {font-size: 2rem;}
}</code></pre>
    </section>

//phone-only {
// @media (max-width: $tablet - 1px) { }

//tablet-only {
// @media (min-width: $tablet) and (max-width: $desktop - 1px) { }

//desktop-only {
// @media (min-width: $desktop) and (max-width: $widescreen - 1px) { }

//widescreen-only {
// @media (min-width: $widescreen) { }

  </div>
</template>