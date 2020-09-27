<template>

  <div class="container">

    <!-- Intro -->
    <section>
      <h1>Flexbox Utilities</h1>
      <p class="lead">Flex utilities offer another way to manage manage the layout and alignment of your content. When using flex utilities all <strong>direct children elements</strong> become flex-items.</p>
      <hr class="lg">
    </section>

    <!-- flex-parent -->
    <section>
      <h2 id="flex-parent">Flex Parent</h2>

      <h3>Flex Containers</h3>
      <div class="row">
        <div class="col-md-50">
          <p>Add the <code>flex</code> class to the parent element for a simple flex container. <br> By default the <em>flex-children</em> will shrink to fit content.</p>
        </div>
        <div class="col-md-50">
          <div class="flex primary bdr3">
            <div class="secondary px-sm">Content</div>
            <div class="secondary px-sm">More Content</div>
            <div class="secondary px-sm">Even More Content</div>
          </div>
        </div>
        <div class="col-md-50">
          <p>Add the <code>flexCol</code> class to the parent element for a simple flex container where the <em>flex-children</em> are displayed vertically as a column spanning the width of the <em>flex-parent</em>.</p>
        </div>
        <div class="col-md-50">
          <div class="flexCol primary bdr3">
            <div class="secondary px-sm">Content</div>
            <div class="secondary px-sm">More Content</div>
            <div class="secondary px-sm">Even More Content</div>
          </div>
        </div>
      </div>

      <h3 id="flex-horizontal-alignment">Justify Content (horizontal alignment)</h3>
      <div>
        <p>Space flex-children horizontally by adding the <code>ha-</code> helper classes to the flex-parent which sets the <code>justify-content: ;</code> css property.<br><strong>Note:</strong> has changeable class prefix.</p>
        <table>
          <thead>
            <tr>
              <th width="35%">Class</th>
              <th width="80%">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>.flex .ha-l</code> (<code>flex-start</code>)
              </td>
              <td>
                <div class="flex ha-l primary bdr3">
                  <div class="secondary px-sm">Item</div>
                  <div class="secondary px-sm">Item</div>
                  <div class="secondary px-sm">Item</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <code>.flex .ha-r</code> (<code>flex-end</code>)
              </td>
              <td>
                <div class="flex ha-r primary bdr3">
                  <div class="secondary px-sm">Item</div>
                  <div class="secondary px-sm">Item</div>
                  <div class="secondary px-sm">Item</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <code>.flex .ha-c</code> (<code>center</code>)
              <td>
                <div class="flex ha-c primary bdr3">
                  <div class="secondary px-sm">Item</div>
                  <div class="secondary px-sm">Item</div>
                  <div class="secondary px-sm">Item</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <code>.flex .ha-between</code> (<code>space-between</code>)
              <td>
                <div class="flex ha-between primary bdr3">
                  <div class="secondary px-sm">Item</div>
                  <div class="secondary px-sm">Item</div>
                  <div class="secondary px-sm">Item</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <code>.flex .ha-around</code> (<code>space-around</code>)
              <td>
                <div class="flex ha-around primary bdr3">
                  <div class="secondary px-sm">Item</div>
                  <div class="secondary px-sm">Item</div>
                  <div class="secondary px-sm">Item</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <code>.flex .ha-even</code> (<code>space-evenly</code>)
              <td>
                <div class="flex ha-even primary bdr3">
                  <div class="secondary px-sm">Item</div>
                  <div class="secondary px-sm">Item</div>
                  <div class="secondary px-sm">Item</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="flex-align-items">Align Items (vertical alignment)</h3>

      <p>Space flex-children vertically by adding the <code>va-</code> helper classes to the flex-parent which sets the <code>align-item: ;</code> css property.<br><strong>Note:</strong> has changeable class prefix.</p>

      <table>
        <thead>
          <tr>
            <th width="35%">Class</th>
            <th width="85%">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>.flex .va-t</code> (<code>flex-start</code>)
            <td>
              <div class="flex va-t h60 primary bdr3">
                <div class="secondary px-sm">Item</div>
                <div class="secondary px-sm">Item</div>
                <div class="secondary px-sm">Item</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <code>.flex .va-c</code> (<code>flex-center</code>)
            <td>
              <div class="flex va-c h60 primary bdr3">
                <div class="secondary px-sm">Item</div>
                <div class="secondary px-sm">Item</div>
                <div class="secondary px-sm">Item</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <code>.flex .va-b</code> (<code>flex-end</code>)
            <td>
              <div class="flex va-b h60 primary bdr3">
                <div class="secondary px-sm">Item</div>
                <div class="secondary px-sm">Item</div>
                <div class="secondary px-sm">Item</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <code>.flex .va-stretch</code> (<code>stretch</code>)
            <td>
              <div class="flex va-stretch h60 primary bdr3">
                <div class="secondary px-sm">Item</div>
                <div class="secondary px-sm">Item</div>
                <div class="secondary px-sm">Item</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <code>.flex .va-baseline</code> (<code>baseline</code>)
            <td>
              <div class="flex va-baseline  primary bdr3">
                <div class="secondary px-sm">Item</div>
                <div class="secondary px-sm">Item <br> More</div>
                <div class="secondary px-sm">Item <br> More <br> Most</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <hr class="lg">

    <!-- Flex Children -->
    <section class="container">

      <h2 id="flex-children">Flex Children</h2>

      <h3 id="flex-grow">Flex Grow</h3>

      <div class="bx pxy-sm info">
        <p><strong>Tip:</strong> <code>flex-grow</code> combined with <code>flex-basis</code> can be an effective way to centre elements.</p>
      </div>

      <div class="row">
        <div class="col-md-60">
          <p>Add the <code>.fg1</code> class (<code>flex-grow: 1;</code>) to the <em>flex-children</em> to distribute space evenly.</p>
        </div>
        <div class="col-md-40">
          <div class="flex primary bdr3">
            <div class="fg1 secondary px-sm">Item</div>
            <div class="fg1 secondary px-sm">Item</div>
            <div class="fg1 secondary px-sm">Item</div>
          </div>
        </div>
        <!--  -->
        <div class="col-md-60">
          <p>Add the <code>.fg0</code> class (<code>flex-grow: 0;</code>) to the <em>flex-children</em> to shrink content to fit.</p>
        </div>
        <div class="col-md-40">
          <div class="flex primary bdr3">
            <div class="fg0 secondary px-sm">Item</div>
            <div class="fg0 secondary px-sm">Item</div>
            <div class="fg0 secondary px-sm">Item</div>
          </div>
        </div>
        <!--  -->
        <div class="col-md-60">
          <p>You can also mix and match</p>
        </div>
        <div class="col-md-40">
          <div class="flex primary bdr3">
            <div class="fg1 secondary px-sm">Item</div>
            <div class="fg0 secondary px-sm">Item</div>
            <div class="fg0 secondary px-sm">Item</div>
          </div>
        </div>
        <div class="col-md-60">
          <p>When using flex grow the <em>flex-children</em> will wrap to the next line when when the parent becomes full. To prevent this add the <code>nowrap</code> class to the <em>flex-parent</em>.</p>
        </div>
        <div class="col-md-40">
          <div class="flex primary bdr3">
            <div class="fg1 secondary px-sm">Lorem ipsum dolor sit amet.</div>
            <div class="fg1 secondary px-sm">Lorem ipsum dolor sit amet.</div>
            <div class="fg1 secondary px-sm">Lorem ipsum dolor sit amet.</div>
          </div>
          <br>
          <div class="flex nowrap primary bdr3">
            <div class="fg1 secondary px-sm">Lorem ipsum dolor sit amet.</div>
            <div class="fg1 secondary px-sm">Lorem ipsum dolor sit amet.</div>
            <div class="fg1 secondary px-sm">Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
      </div>

    </section>

    <hr class="lg">
<div class="bx">
    <div class="bx-title">FAQ's</div>

    <h5>How do I get the row to match the container height?</h5>
    <p>The short answer is you don't. This is due to the <code>display: flex;</code> being set on the <code>.row</code>
        not the <code>.container</code>. To work around this you can add the <code>.flex</code> to the
        <code>.container</code> turning it into a flex parent, however a better approach would be to set the height of the
        <code>.row</code> because all children will match the height and the container will grow to accommodate. </p>

    <div class="bx primary">do write up on .v-stretch </div>
    <hr>

</div>

  </div>
</template>

