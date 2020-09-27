<template>
  <div class="nk-docs container">
    <section>
      <h1>Navbar</h1>
      <p class="lead">A responsive horizontal navbar.</p>

      <h2 id="things-to-know">Things To Know</h2>
      <ul>
        <li>The highest element will set the height of the <code>navbar</code></li>
        <li>You can use flex utility classes to easily change the <code>navbar</code> layout</li>
        <li>use visibility classes to easily create responsive layouts</li>
      </ul>

    </section>

    <section>
      <h2 id="navbar-basic">Basic Navbar</h2>
      <p>In it's most basic form there is only a limited amount of markup and styling required to create a simple <code>navbar</code>. Because the <code>navbar</code> is just a flexbox with flex-children you can easily add what you like using a combination of <em>utility</em> and <em>visibility</em> classes.</p>

      <p>In it's most simple form this is what the navbar will look like:</p>

      <div class="navbar">
        <div class="logo">
          <a href="#"><img src="@/assets/logo-alt.svg" alt="NAYKEL Logo"></a>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </nav>
      </div>

      <pre class="html"><code>&lt;div class=&quot;navbar&quot;&gt;
    &lt;div class=&quot;logo&quot;&gt;
      &lt;a href=&quot;&quot;&gt;&lt;img src=&quot;&quot; alt=&quot;&quot;&gt;&lt;/a&gt;
    &lt;/div&gt;
    &lt;nav&gt;
      &lt;a href=&quot;&quot;&gt; &lt;/a&gt;
    &lt;/nav&gt;
&lt;/div&gt;</code></pre>
    </section>

    <section>
      <h2 id="navbar-burger-menu">Navbar Burger Menu</h2>
      <p>Using visibility classes the navbar burger can be displayed on you chosen devices.</p>
      <div class="bx pxy-sm danger-light mb"><strong>Note:</strong> generally you would not have both the menu and hamburger menu active at the same time as shown below, you would use visibility classes to hide the menu when the hamburger appears. The following example is for visual purpose.</div>

      <div class="navbar">
        <div class="logo">
          <a href="#"><img src="@/assets/logo-alt.svg" alt="NAYKEL Logo"></a>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </nav>
        <div class="burger">
          <svg class="icon">
            <use xlink:href="@/assets/nk_icon-defs.svg#icon-menu"></use>
          </svg>
        </div>
      </div>

      <div class="bx pxy-sm info-light mb">Resize your screen to see the responsive navbar</div>
      <div class="navbar">
        <div class="logo">
          <a href="#"><img src="@/assets/logo-alt.svg" alt="NAYKEL Logo"></a>
        </div>
        <nav class="hide-upto-tablet">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </nav>
        <div class="burger hide-from-tablet">
          <svg class="icon">
            <use xlink:href="@/assets/nk_icon-defs.svg#icon-menu"></use>
          </svg>
        </div>
      </div>
      <pre class="html"><code>&lt;div class=&quot;navbar&quot;&gt;
  &lt;div class=&quot;logo&quot;&gt;
    &lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;&quot; alt=&quot;&quot;&gt;&lt;/a&gt;
  &lt;/div&gt;
  &lt;nav class=&quot;hide-upto-tablet&quot;&gt;
    &lt;a href=&quot;&quot;&gt; &lt;/a&gt;
  &lt;/nav&gt;
  &lt;div class=&quot;burger hide-from-tablet&quot;&gt;
    &lt;svg class=&quot;icon&quot;&gt;
      &lt;use xlink:href=&quot;path/to/nk_icon-defs.svg#icon-menu&quot;&gt;&lt;/use&gt;
    &lt;/svg&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </section>

  </div>
</template>