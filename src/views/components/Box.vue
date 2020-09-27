<template>
  <div class="nk-docs container">

    <div class="row">

      <div class="col-75">
        <section>
          <h1>Box</h1>
          <p class="lead">An all-around flexible component with versatile design with several elements that you can mix and match.</p>

          <h2 id="box-things-to-know">Things To Know</h2>
          <ul>
            <li>You do not need to stack a ton of classes to control basic box styles. In many cases box styles can be applied with a single class.</li>
            <li>Margin is removed from all <code>first:child</code> elements.</li>
            <li><strong>ONLY</strong> use the <code>bx-content</code> element when using other section (header, footer). <span class="txt-red">This needs to be reviewed!</span></li>
          </ul>
        </section>
      </div>

      <div class="col-25">
        <div class="bx">
          <div class="bx-title">Navigation</div>
          <ul>
            <li>Nav Item</li>
            <li>Nav Item</li>
            <li>Nav Item</li>
            <li>Nav Item</li>
            <li>Nav Item</li>
            <li>Nav Item</li>
            <li>Nav Item</li>
            <li>Nav Item</li>
            <li>Nav Item</li>
            <li>Nav Item</li>
          </ul>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, distinctio. Quibusdam unde quo temporibus tempore!</p>
        </div>
      </div>

    </div>

    <hr class="lg">

    <section>
      <h2 id="box-basic-usage">Basic Usage</h2>
      <p>The <strong>box</strong> component can be built using several elements, however in it's simplest form it can be built with one or two:</p>
      <ul class="pl-md mb">
        <li><code>bx</code>: the main container which has <code>$content-gap</code> and border. You can add content directly inside.</li>
        <li><code>bx-title</code>: Basic title with left-aligned bold text. can be used with or without <code>bx-header</code></li>
      </ul>

      <div class="bx">
        <img src="@/assets/box-basic.png" alt="">
        <ol>
          <li>box padding (<code>$content-gap</code>)</li>
          <li>element top-margin (<code>$content-gap</code>)</li>
        </ol>
      </div>
      <div class="row mt">
        <div class="col-md-40">
          <div class="bx">
            <div class="bx-title">My Awesome Title</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sunt cupiditate molestias dolor praesentium earum iste consectetur ratione nam fugiat?</p>
            <div class="txt-red">
              Use HTML elements or other components for spacing.
            </div>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. At iure dolorem optio, tempore ex ad!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi placeat debitis nisi laudantium quam.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae molestiae doloremque ad sint, id nemo facilis.

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id mollitia autem quis maiores enim.
            <p>lorem15</p>
            <p>lorem15</p>
          </div>
        </div>
        <div class="col-md-60">
          <pre><code class="html">&lt;div class=&quot;bx&quot;&gt;
    &lt;div class=&quot;bx-title&quot;&gt; &lt;/div&gt;
    &lt;p&gt; &lt;/p&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>
    </section>
    <hr class="lg">
    <section>
      <h2 id="box-sections">Box Sections (Header, Footer and Content)</h2>
      <p>Add customizable sections to your box using the <code>.bx-header</code>, <code>.bx-content</code> and <code>.bx-footer</code> section classess.</p>

      <div class="row">

        <div class="col-md-40">
          <div class="bx">
            <div class="bx-header">
              <div class="bx-title">Header Title</div>
            </div>
            <div class="bx-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus est commodi illo quis iusto omnis
              voluptate accusamus id adipisci?
            </div>
            <div class="bx-footer">
              <button class="btn-primary">Show me the magic</button>
              <button class="btn-danger">Forget it</button>
            </div>
          </div>
        </div>

        <div class="col-md-60">
          <pre><code>&lt;div class=&quot;bx&quot;&gt;
    &lt;div class=&quot;bx-header&quot;&gt;
        &lt;div class=&quot;bx-title&quot;&gt;...&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="bx-content"&gt;...&lt;/div&gt;
    &lt;div class=&quot;bx-footer&quot;&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>
    </section>

    <hr class="lg">

    <section>

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
      <li><code>bx-content</code>: a multi-purpose container for content. <strong>Note:</strong> in many cases this is optional and can be replaced with any standard HTML element.</li>

      <!-- <li>bx-header: a horizontal bar with a shadow</li>
            <li>bx-header-icon: a placeholder for an icon</li>
            <li>bx-image: a fullwidth container for a responsive image</li>
            <li>bx-footer: a horizontal list of controls</li>
            <li>bx-footer-item: a repeatable list item</li> -->
    </section>

    <section>
      <p>Here are some other examples of box layouts using utility classes only</p>
      <h2 id="box-other-examples">Other Examples</h2>
      <div class="container">
        <div class="row tac">
          <div class="col-md-33">
            <div class="posr">
              <img src="@/assets/samples/sample001-0600-(16x9).jpg" alt="Naykel Sample Image">
              <div class="primary">Overlay Text</div>
            </div>
          </div>
          <div class="col-md-33">
            <div class="posr">
              <img src="@/assets/samples/sample002-0600-(16x9).jpg" alt="Naykel Sample Image">
              <div class="primary">Overlay Text</div>
            </div>
          </div>
          <div class="col-md-33">
            <div class="posr">
              <img src="@/assets/samples/sample003-0600-(16x9).jpg" alt="Naykel Sample Image">
              <div class="primary posb">Overlay Text</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>