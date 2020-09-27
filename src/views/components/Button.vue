<template>
  <div class="nk-docs container">
    ** Each colour in the buttons map has different types (outline, ..) <br>
    has custom map
    <!-- Introduction -->
    <section>
      <h1>Buttons</h1>
      <p class="lead">Out of the box buttons are inline and require minimal mark-up for maximum flexibility.</p>

      <h2 id="buttons-things-to-know">Things To Know</h2>
      <ul>
        <li>
          The <code>.btn</code> class and modifiers can be can be used on:
          <ul>
            <li> <code>&lt;a&gt;</code> anchor links </li>
            <li> <code>&lt;button&gt;</code> form buttons </li>
            <li> <code>&lt;input type="submit"&gt;</code> submit inputs </li>
            <li> <code>&lt;input type="reset"&gt;</code> reset inputs </li>
          </ul>
        </li>
        <li>Buttons use <code>em</code> for padding so the dimensions are relative to the buttons <code>font-size</code>.</li>
        <li>The <code>&lt;button&gt;</code>, <code>&lt;input type="submit"&gt;</code> and <code>&lt;input type="reset"&gt;</code> elements default to the base <code>.btn</code> class styling, this means they can can be used out-of-the-box without any additional classes. <br>
          <button>Button</button>
          <input type="submit" value="Submit">
          <input type="reset" value="Reset">
        </li>
      </ul>
    </section>

    <hr class="my-lg">

    <section>
      <div class="row">
        <div class="col">
          <a class="btn">Anchor</a>
          <button class="btn">Button</button>
          <input class="btn" type="submit" value="Submit input">
          <input class="btn" type="reset" value="Reset input">
        </div>
        <div class="col">
          <pre><code class="html">&lt;a class=&quot;btn&quot;&gt; &lt;/a&gt;
&lt;button class=&quot;btn&quot;&gt; &lt;/ &gt;
&lt;input class=&quot;btn&quot; type=&quot;submit&quot; value=&quot;Submit input&quot;&gt;
&lt;input class=&quot;btn&quot; type=&quot;reset&quot; value=&quot;Reset input&quot;&gt;</code></pre>
        </div>
      </div>
    </section>

    <hr class="my-lg">
    <!-- button Styles -->
    <section>
      <h2 id="button-styles">Button Styles</h2>
      <p>Button styles can be added with a single class
        <br> <strong class="txt-blue">Note:</strong> can add additional styles to <code>$custom-buttons-map</code>
      </p>
      <div>
        <button class="btn">.btn</button>
        <button class="btn-primary">.btn-primary</button>
        <button class="btn-secondary">.btn-secondary</button>
        <button class="btn-success">.btn-success</button>
        <button class="btn-danger">.btn-danger</button>
      </div>
      <div>
        <a href="#" class="btn suprise">.btn .suprise</a>
        <a href="#" class="btn-primary outline">.btn-primary .outline</a>
        <a href="#" class="btn-secondary outline">.btn-secondary .outline</a>
        <a href="#" class="btn-success outline">.btn-success .outline</a>
        <a href="#" class="btn-danger outline">.btn-danger .outline</a>
      </div>
    </section>

    <hr class="my-lg">

    <!-- button sizes -->
    <section>
      <h2 id="button-sizes">Button Sizes</h2>
      <p>Add <code>.sm</code>, <code>.md</code> or <code>.lg</code> modifier classes to change the size.</p>

      <div class="mt">
        <input type="text" class="dilb sm" placeholder="Small">
        <a href="" class="btn sm">SMALL</a>
      </div>
      <div class="mt">
        <input type="text" placeholder="Normal">
        <a href="" class="btn">NORMAL</a>
      </div>
      <div class="mt">
        <input type="text" class="md" placeholder="Medium">
        <a href="" class="btn md">MEDIUM</a>
      </div>
      <div class="mt">
        <input type="text" class="lg" placeholder="Large">
        <a href="" class="btn lg">LARGE</a>
      </div>
    </section>
    <hr class="lg">
    <section>
      <h2 id="button-tips"># Tips and Tricks</h2>
      <p>Here are some tips and tricks for ways you can style buttons using utility classes. These utility classes are not specific to buttons.</p>

      <h3 id="button-tips-fullwidth"># Stretch Button to Parent Container</h3>
      <p>Add the <code>.fullwidth</code> modifier to 'stretch' the button to the width of it's parent container.</p>
      <div class="row mm">
        <div class="col-md-50 bx">
          <div class="btn fullwidth">btn fullwidth</div>
          <pre class="html py-sm"><code>&lt;div class=&quot;btn fullwidth&quot;&gt; ... &lt;/div&gt;</code></pre>
        </div>
      </div>
      <!--  -->
      <h3 id="button-tips-distribute"># Distribute Buttons</h3>
      <p>There are several ways to distribute buttons across the width of the parent container using <em>flex utility classes</em>.</p>

      <p>To evenly distribute buttons across the width of their parent container wrap the buttons in a <code>.flex</code> container and add the <code>.col</code> class to each button.</p>

      <p class="txt-red">These methods are only a guide to demonstrate distribute the buttons using flex utilities, additional classes or styles may be required to get the exact look you want.</p>

      <div class="row">
        <div class="col-md-50">
          <div class="flex bx">
            <div class="col">
              <div class="btn fullwidth">Distributed Button</div>
            </div>
            <div class="col">
              <div class="btn fullwidth">Distributed Button</div>
            </div>
          </div>
        </div>
        <div class="col-md-50">
          <div class="flex bx">
            <div class="col npx">
              <div class="btn fullwidth">Distributed Button</div>
            </div>
            <div class="col npx">
              <div class="btn fullwidth">Distributed Button</div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->

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