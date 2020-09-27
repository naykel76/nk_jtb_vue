<template>
  <div class="nk-docs container">
    <h1>Forms</h1>
    <p class="lead">Generic form controls require minimal mark-up for maximum flexibility.</p>

    <section>
      <h2 id="forms-things-to-know">Things To Know</h2>

    </section>

    <hr class="lg">

    <!-- default controls -->
    <section>
      <h2 id="default-controls">Default Controls</h2>
      <p>Native HTML form elements: <code>form</code>, <code>button</code>, <code>input</code>, <code>select</code>, <code>textarea</code>, <code>radio</code>, <code>checkbox</code> and <code>label</code> do not require any classes out of the box</p>

      <div>
        <label>Label:</label>
        <input type="text" placeholder="Input">
        <select>
          <option>Please Select</option>
        </select>
        <input type="submit">
        <input type="radio">
        <input type="checkbox">
        <input type="range">
        <label><input type="radio">Radio Label</label>
      </div>
    </section>

    <hr class="my-lg">

    <!-- Form Rows -->
    <section>
      <h2 id="form-row">Form Row</h2>

      <p>Create evenly balanced horizontal controls simply by wrapping the control group inside a <code>.frm-row</code>. The inputs become 100% wide, labels are places on top and spacing is automatically added between rows.</p>
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

    <section class="container">

      FORM IN REVIEW!!!!!!!!!!!!

      <section class="container">

        <h2>Control Sizes</h2>

        <p>Control sizes are change set by the font size. Add <code>.sm</code>, <code>.md</code> or <code>.lg</code> class to
          change the size</p>

        can the size can be controlled by the form row or input????
        <div>
          <input type="text" class="sm" placeholder="Small">
          <input type="text" placeholder="Normal">
          <input type="text" class="md" placeholder="Medium">
          <input type="text" class="lg" placeholder="Large">
        </div>

        <hr>
      </section>

      <hr>

      <section class="container">

        <h2>Checkbox</h2>

        <em>default needs some work!</em>

        <label><input type="checkbox" /> Label text</label>

        <div class="row">

          <div class="col">
            <div class="bx">
              <label class="checkbox">One
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
              </label>

              <label class="checkbox">Two
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>

              <label class="checkbox">Three
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>

              <label class="checkbox">Four
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
          </div>

          <div class="col">

            <pre>&lt;label class=&quot;checkbox&quot;&gt;Label
    &lt;input type=&quot;checkbox&quot; checked=&quot;checked&quot;&gt;
    &lt;span class=&quot;checkmark&quot;&gt;&lt;/span&gt;
&lt;/label&gt;</pre>

          </div>

        </div>

        <hr>
        <div class="col">
          <h2>Radio</h2>
          <div class="bx">
            <label class="radio">One
              <input type="radio" name="num" checked="checked">
              <span class="checkmark"></span>
            </label>

            <label class="radio">Two
              <input type="radio" name="num">
              <span class="checkmark"></span>
            </label>

            <label class="radio">Three
              <input type="radio" name="num">
              <span class="checkmark"></span>
            </label>

            <label class="radio">Four
              <input type="radio" name="num">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="bx">
            <h4>Square radio</h4>
            <p>Use the <code>.checkbox</code> class on the label with <code>type="radio"</code></p>
            <br>
            <label class="checkbox">One
              <input type="radio" name="num" checked="checked">
              <span class="checkmark"></span>
            </label>

            <label class="checkbox">Two
              <input type="radio" name="num">
              <span class="checkmark"></span>
            </label>

            <label class="checkbox">Three
              <input type="radio" name="num">
              <span class="checkmark"></span>
            </label>

            <label class="checkbox">Four
              <input type="radio" name="num">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </section>

      <hr>

      <section class="container">
        <h2>Form Groups</h2>
      </section>

      <hr class="mx my-lg">

      <section class="container">
        @include('nk/jtb-docs.components.forms.file')
      </section>

      <hr class="mx my-lg">

      <form class="bx dilb light">

        <label for="username">Username: </label>
        <input type="text" placeholder="Enter username" />

        <label for="pass">Password: </label>
        <input type="password" placeholder="Password" autocomplete="new-password" />

        <input type="submit" />

      </form>

      <pre>&lt;form&gt;

  &lt;label for=&quot;username&quot;&gt;Username: &lt;/label&gt;
  &lt;input type=&quot;text&quot; placeholder=&quot;Enter username&quot; /&gt;

  &lt;label for=&quot;pass&quot;&gt;Password: &lt;/label&gt;
  &lt;input type=&quot;password&quot; placeholder=&quot;Password&quot; autocomplete=&quot;new-password&quot; /&gt;

  &lt;input type=&quot;submit&quot; /&gt;

&lt;/form&gt;</pre>

    </section>

    <hr>

    <hr>

    <section class="container">

      <h2>Horizontal Forms with Columns</h2>

      <p>Create more complex layouts simply by using the grid system.</p>
      <div class="row">
        <div class="col">
          <div class="bx">
            <div class="row">
              <div class="col">
                <h3 class="bx-title">Grid Layout</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-20">
                <div class="h40 dark"></div>
              </div>
              <div class="col">
                <div class="h40 dark"></div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="h40 dark"></div>
              </div>
              <div class="col">
                <div class="h40 dark"></div>
              </div>
              <div class="col">
                <div class="h40 dark"></div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="h40 dark"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <pre>&lt;div class=&quot;row&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;col-20&quot;&gt; form controls &lt;/div&gt;
    &lt;div class=&quot;col&quot;&gt; form controls &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;col&quot;&gt; form controls &lt;/div&gt;
    &lt;div class=&quot;col&quot;&gt; form controls &lt;/div&gt;
    &lt;div class=&quot;col&quot;&gt; form controls &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;col&quot;&gt; form controls &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
        </div>
      </div>

      <hr>

      <p>Simply add the form controls in the grid column.</p>

      <div class="row">
        <div class="col">
          <form action="" class="bx">
            <div class="row">
              <div class="col-20">
                <div class="frm-row">
                  <label for="street_num">Number</label>
                  <input name="street_num" type="text">
                </div>
              </div>
              <div class="col">
                <div class="frm-row">
                  <label for="name">Street</label>
                  <input name="name" type="text">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="frm-row">
                  <label for="name">Suburb</label>
                  <input name="name" type="text">
                </div>
              </div>
              <div class="col">
                <div class="frm-row">
                  <label for="name">Postcode</label>
                  <input name="name" type="text">
                </div>
              </div>
              <div class="col">
                <div class="frm-row">
                  <label for="name">State</label>
                  <input name="name" type="text">
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col">
        <pre>&lt;div class=&quot;row&quot;&gt;
  &lt;div class=&quot;col-20&quot;&gt;
    &lt;div class=&quot;frm-row&quot;&gt;
      &lt;label for=&quot;street_num&quot;&gt;Number&lt;/label&gt;
      &lt;input name=&quot;street_num&quot; type=&quot;text&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;col&quot;&gt;
    &lt;div class=&quot;frm-row&quot;&gt;
      &lt;label for=&quot;name&quot;&gt;Street&lt;/label&gt;
      &lt;input name=&quot;name&quot; type=&quot;text&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
      </div>

      <div class="row mt">
        <p><strong>Note:</strong> <code>.frm-row</code> and <code>.row</code> can be used interchangeably for fields that
          will span the entire width to remove unnecessary addition
          styles.</p>
      </div>
    </section>

    <hr>

    <section class="container">
      <h2>Inline Forms</h2>

      <p>Add <code>.inline</code> to the <code>.frm-row</code> for inline forms.</p>

      <p>By default the labels will align vertically to the middle of the input, this can be overriden changing the <code>align-self</code> property</p>

      <div class="row">
        <div class="col">
          <form class="bx">
            <div class="frm-row inline">
              <label for="name">Name</label>
              <input name="name" type="text">
            </div>

            <div class="frm-row inline">
              <label for="email">Email</label>
              <input name="email" type="email">
            </div>

            <div class="frm-row inline">
              <label for="message">Message</label>
              <textarea name="" id="" cols="20" rows="5"></textarea>
            </div>
          </form>
        </div>
        <div class="col">
          <pre>&lt;form &gt;
  &lt;div class=&quot;frm-row inline&quot;&gt;
    &lt;label for=&quot;name&quot;&gt;Name&lt;/label&gt;
    &lt;input name=&quot;name&quot; type=&quot;text&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;frm-row inline&quot;&gt;
    &lt;label for=&quot;email&quot;&gt;Email&lt;/label&gt;
    &lt;input name=&quot;email&quot; type=&quot;email&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;frm-row inline&quot;&gt;
    &lt;label for=&quot;message&quot;&gt;Message&lt;/label&gt;
    &lt;textarea name=&quot;message&quot; cols=&quot;20&quot; rows=&quot;5&quot;&gt;&lt;/textarea&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>
        </div>
      </div>

      <p><strong>NOTE:</strong> The <code>label</code> and <code>input</code> widths are set proportionally to the width of the parent with the <code>flex-grow</code> property.</p>
      <form class="bx">

        <div class="frm-row inline">
          <label for="name">Name</label>
          <input name="name" type="text">
        </div>

        <div class="frm-row inline">
          <label for="email">Email</label>
          <input name="email" type="email">
        </div>

        <div class="frm-row inline">
          <label for="message">Message</label>
          <textarea name="" id="" cols="20" rows="5"></textarea>
        </div>
      </form>

    </section>

    <hr>

  </div>
</template>