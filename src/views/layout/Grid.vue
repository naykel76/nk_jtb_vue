<template>

  <div class="nk-docs container">
    <code>$stack-on-device</code>
    <code>$grid-gutter</code>
    <section>
      <h1>Grid Layout</h1>
      <p class="lead">A simple flexbox grid system to build responsive layouts.</p>

      <h2>Things to Know</h2>
      <ol>
        <li><strong>Rows</strong> are simply containers (flex-parent). Their sole purpose is to tell the columns (flex-children) how to behave.</li>
        <li><strong>Rows</strong> have a negative margin to correctly align content inside the columns.</li>
        <li><strong>Columns</strong> (flex-children) come in a few different flavors. You can add as many equal width columns as you like using the <code>.col</code> class or responsive columns using the <code>col-?-?</code> classes.</li>
        <li><strong>Columns</strong> have padding (<code>$grid-gap</code>) to control the spacing which can be changed or removed entirely.</li>
      </ol>

      <img class="mt" src="@/assets/grid-info.png" alt="NAYKEL JTB Grid Layout Information" style="max-width:50%" />
      <p><strong class="txt-red">IMPORTANT:</strong> Rows and columns should <span class="fw7">not be styled directly</span>, they are purely for positioning. Styling is a is a job for the elements inside them.</p>

      <h2>Grid Row</h2>
      <p>A grid <code>row</code> is simply a flex-parent with it's sole purpose of being is to tell the columns (flex-children) how to behave. A row can instruct the columns to:</p>
      <ul>
        <li>Add or remove gutter</li>
        <li>Increase or decrease gutter width</li>
        <li>Align column content (middle, top, bottom)</li>
      </ul>
      <p><strong class="txt-blue">NOTE: </strong>rather than having special row classes to position content, just use the flex utility classes.</p>

      <div class="bx bdr3">
        <div class="bx-title">Tip</div>
        <p class="txt-red">Sometimes the negative margin on a row gets in the way</p>

        <div class="row bdr pxy-sm"><p>If you add a border to a <code>row</code> you will see that looks wider than the rest of the content. This is because the <code>row</code> class has negative margin applied allowing the content to align correctly. (This is why you should not apply any styles directly to it)</p></div>
        <div class="row mm bdr pxy-sm mt"><p>If for what ever this this is a problem you can add the minus-margin class <code>mm</code></p></div>
      </div>

      <!--  -->
      <h2>Column Classes</h2>
      <p>The JTB <strong>column</strong> class naming convention is a simple percentage based system. No cryptic long winded classes or 12 grid division that makes you stop and think. The system is simple, use a combination widths to to add up to a 100% wide.</p>
      <p>The column class is made up of three sections, <code>[col]-[screen]-[width]</code>. (<code>col-md-25</code>)</p>

      <ul>
        <li><strong><code>col</code></strong> - base column class</li>
        <li><strong><code>screen</code></strong> - is the responsive size <code>sm</code>, <code>md</code>, <code>lg</code> and, <code>lg</code></li>
        <li><strong><code>width</code></strong> - column width percentage. e.g 50 = 50% or 33 = 33%</li>
      </ul>

      <p><strong class="txt-blue">NOTE:</strong> If the columns in a row exceed 100% wide, they will just wrap to the next row.</p>

      <!--  -->
      <h2>Grid Spacing</h2>
      <p class="txt-red">This section is incomplete and needs some work!</p>
      <p> Padding is applied directly to the <em>columns</em>. This allows consistent spacing with any combination of rows and columns.</p>
      <p><strong><em>Rows</em></strong> have negative horizontal margin so content place inside the colum aligns with any
        other element outside of the <code>row</code> This way, all the content is naturally.</p>
    </section>

    <hr class="mb-lg">
    <section>
      <h2>Equal Column Widths</h2>

      <p>Create a column layout with equal column widths is as simple as:</p>

      <ol>
        <li>Add a <code>row</code>(the flex-parent)</li>
        <li>Add some <code>col</code> elements (flex-children)</li>
      </ol>

      <div class="row tac">
        <div class="col">
          <div class="primary pxy">Column</div>
        </div>
        <div class="col">
          <div class="primary pxy">Column</div>
        </div>
        <div class="col">
          <div class="primary pxy">Column</div>
        </div>
      </div>

      <pre><code>&lt;div class=&quot;row&quot;&gt;
  &lt;div class=&quot;col&quot;&gt; Column &lt;/div&gt;
  &lt;div class=&quot;col&quot;&gt; Column &lt;/div&gt;
  &lt;div class=&quot;col&quot;&gt; Column &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </section>

    <section>
      <h2>Non-Responsive Grid</h2>
      <p>Omit the <code>$screen</code> portion of the column class for set percentage widths (non-responsive), the column percentage will be what is specified in the class and stay that way no matter the screen size.</p>
      <div class="row tac">
        <div class="col-50">
          <div class="primary pxy"><code>col-50</code> I am 50% wide and that is that!</div>
        </div>
        <div class="col-75">
          <div class="primary pxy"><code>col-75</code> I am 75% wide and that is that!</div>
        </div>
      </div>
    </section>

    <section>
      <h2>Responsive Grid</h2>
      <p>The <code>$screen</code> portion of the column class (<code>-sm</code>, <code>-md</code>, <code>-lg</code> and, <code>-lg</code>) tells the column when and how to behave.</p>

      <p><strong>pseudo:</strong> make this <code>column</code> on this <code>screen</code> size this <code>percent</code> wide, and any <code>column</code> under this <code>screen</code> size will be <code>100%</code> wide.</p>
    </section>

    <p class="txt-red">NK-REVIEW: give option to use viewport name instead of size. (mobile, tablet, desktop, and wide-screen)</p>
    <div class="row">
      <div class="col-xl-50 col-lg-75">
        <div class="primary pxy">
          <p><code>.col-xl-50</code> 50% wide on a xl (wide-screen) screen</p>
          <p><code>.col-lg-75</code> 75% wide on a lg (desktop) screen</p>
          <p>100% wide from a md (tablet) down</p>
        </div>
      </div>
    </div>

    <hr class="my-lg">
    <div class="row">
      <div class="col-25">
        <div class="bx primary tac"><code>col-25</code> (not-responsive)</div>
      </div>
      <div class="col-50">
        <div class="bx primary tac"><code>col-50</code> (not-responsive)</div>
      </div>
      <div class="col-25">
        <div class="bx primary tac"><code>col-25</code> (not-responsive)</div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="bx primary tac"><code>col</code> (responsive)</div>
      </div>
      <div class="col-50">
        <div class="bx primary tac"><code>col-50</code> (not-responsive)</div>
      </div>
      <div class="col">
        <div class="bx primary tac"><code>col</code> (responsive)</div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="bx primary tac"><code>col</code> (responsive)</div>
      </div>
      <div class="col-md-50">
        <div class="bx primary tac"><code>col-md-50</code> (responsive)</div>
      </div>
      <div class="col">
        <div class="bx primary tac"><code>col</code> (responsive)</div>
      </div>
    </div>

    <section>
      It is also possible to mix and match with column width classes!
    </section>

  </div>
</template>
