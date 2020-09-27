<template>
  <div class="nk-docs container">

    <!-- introduction -->
    <section>
      <h1>Visibility and Responsiveness</h1>
      <p class="lead">Toggle the display property of an element to show/hide content depending on the width of the viewport.</p>

      <h2 id="responsive-definitions">Definitions</h2>
      <p>The context of these definitions is working with devices and their respective sizes, however the same principles when manually specifying sizes.</p>
      <table>
        <thead>
          <tr>
            <th>Term</th>
            <th>Meaning</th>
            <th>Examples</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Up to</td>
            <td>Anything <strong>from</strong> <code>0</code> <strong>up to</strong> <code>max-width</code></td>
            <td><code>@media (max-width: $device - 1)</code></td>
            <!-- hide up to tablet would be max-width: 768 -->
          </tr>
          <tr>
            <td>From</td>
            <td>Anything <strong>from</strong> <code>min-width</code></td>
            <td><code>@media (min-width: $device)</code></td>
          </tr>
          <tr>
            <td>On/Only/Between</td>
            <td>Anything <strong>between</strong> the <code>min-width</code> and <code>max-width</code></td>
            <td>The context changes here depending on the usage. <code>{display}-on-{device}</code></td>
          </tr>
        </tbody>
      </table>

    </section>

    <hr class="my-lg">

    <!-- responsive -->
    <section>
      <h2 id="responsive-sizes">Responsive Sizes and Breakpoints</h2>
      <table>
        <thead>
          <tr>
            <th>Device</th>
            <th>Breakpoint</th>
            <th>Default Size Range</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><code>$small</code></td>
            <td><code>$xs</code></td>
            <td>Up to <code>555px</code></td>
          </tr>
          <tr>
            <td><code>$phone</code></td>
            <td><code>$sm</code></td>
            <td>Between <code>556px</code> and <code>767px</code></td>
          </tr>
          <tr>
            <td><code>$tablet</code></td>
            <td><code>$md</code></td>
            <td>Between <code>768px</code> and <code>991px</code></td>
          </tr>
          <tr>
            <td><code>$desktop</code></td>
            <td><code>$lg</code></td>
            <td>Between <code>992px</code> and <code>1199px</code></td>
          </tr>
          <tr>
            <td><code>$widescreen</code></td>
            <td><code>$xl</code></td>
            <td>From <code>1200px</code> and above</td>
          </tr>
        </tbody>
      </table>
    </section>

    <hr class="my-lg">

    <section>
      <h2 id="visibility">Element Visibility Introduction</h2>

      <h3 id="visibility-hidden">Hidden</h3>
      <p>The <code>hidden</code> helper classes are used to hide a visible elements. The elements can be hidden <code>on</code>, <code>from</code>, <code>upto</code>, <code>between</code>, or just use the <code>hidden</code> class to hide from everything.</p>

      <h3 id="visibility-display">Display</h3>

      <p>The <code>display</code> helper classes are used to display hidden elements. The elements can be displayed <code>on</code>, <code>from</code>, <code>upto</code>, or <code>between</code>. Additionally elements can be displayed an all devices using one of the display class. <code>dblk</code>, <code>dil</code>, <code>dilb</code>, <code>dflx</code>,and <code>dilf</code></p>

      <p><code>{display}-{directive}-{device}</code></p>
      <p><code>{flex|block}-{on|from|upto}-{phone|tablet|desktop|widescreen}</code></p>

      <p>The display classes are created with a <code>@each</code> loop. If you don't want the class simply remove it form the list
        !</p>
      <pre><code>&lt;div class=&quot;d{ dblk | dil | dilb | dflx | dilf }&quot;&gt;...&lt;/div&gt;</code></pre>
      <pre><code class="scss">$display-types: (
    dblk: 'block !important',
    dil: 'inline !important',
    dilb: 'inline-block !important',
    dflx: 'flex !important',
    dilf: 'inline-flex !important',
);</code></pre>

    </section>

    <hr class="my-lg">

    <!-- visibility ON -->
    <section>
      <h2 id="visibility-on">Visibility ON</h2>
      <p>Use the <code>on</code> directive to specify a specific device.</p>

      <p><strong>Pseudo says:</strong> <code>hide</code> this visible element, <code>on</code> this <code>device</code> <strong>ONLY</strong></p>
      <pre><code>&lt;div class=&quot;hide-on-{small|phone|tablet|desktop|widescreen}&quot;&gt;...&lt;/div&gt;</code></pre>
      <p><strong>Pseudo says:</strong> <code>display</code> this hidden element, <code>on</code> this <code>device</code> <strong>ONLY</strong></p>
      <pre><code>&lt;div class=&quot;{display}-on-{small|phone|tablet|desktop|widescreen}&quot;&gt;...&lt;/div&gt;</code></pre>

      <table>
        <thead>
          <tr>
            <th class="tal">Class</th>
            <th width="20%">Phone (sm) <br> <code>767px</code> and below</th>
            <th width="20%">Tablet (md) <br> Between <code>768px</code> and <code>991px</code></th>
            <th width="20%">Desktop (lg) <br> Between <code>992px</code> and <code>1199px</code></th>
            <th width="20%">Widescreen (xl) <br> <code>1200px</code> and above</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>hide-on-phone</code></td>
            <td class="pxy-sm danger-light">hidden</td>
            <td class="pxy-sm warning-light">visible</td>
            <td class="pxy-sm warning-light">visible</td>
            <td class="pxy-sm warning-light">visible</td>
          </tr>
          <tr>
            <td><code>hide-on-tablet</code></td>
            <td class="pxy-sm warning-light">visible</td>
            <td class="pxy-sm danger-light">hidden</td>
            <td class="pxy-sm warning-light">visible</td>
            <td class="pxy-sm warning-light">visible</td>
          </tr>
          <tr>
            <td><code>hide-on-desktop</code></td>
            <td class="pxy-sm warning-light">visible</td>
            <td class="pxy-sm warning-light">visible</td>
            <td class="pxy-sm danger-light">hidden</td>
            <td class="pxy-sm warning-light">visible</td>
          </tr>
          <tr>
            <td><code>hide-on-widescreen</code></td>
            <td class="pxy-sm warning-light">visible</td>
            <td class="pxy-sm warning-light">visible</td>
            <td class="pxy-sm warning-light">visible</td>
            <td class="pxy-sm danger-light">hidden</td>
          </tr>
          <tr>
            <td><code>{display}-on-phone</code></td>
            <td class="pxy-sm success-light">visible</td>
            <td class="pxy-sm warning-light">hidden</td>
            <td class="pxy-sm warning-light">hidden</td>
            <td class="pxy-sm warning-light">hidden</td>
          </tr>
          <tr>
            <td><code>{display}-on-tablet</code></td>
            <td class="pxy-sm warning-light">hidden</td>
            <td class="pxy-sm success-light">visible</td>
            <td class="pxy-sm warning-light">hidden</td>
            <td class="pxy-sm warning-light">hidden</td>
          </tr>
          <tr>
            <td><code>{display}-on-desktop</code></td>
            <td class="pxy-sm warning-light">hidden</td>
            <td class="pxy-sm warning-light">hidden</td>
            <td class="pxy-sm success-light">visible</td>
            <td class="pxy-sm warning-light">hidden</td>
          </tr>
          <tr>
            <td><code>{display}-on-widescreen</code></td>
            <td class="pxy-sm warning-light">hidden</td>
            <td class="pxy-sm warning-light">hidden</td>
            <td class="pxy-sm warning-light">hidden</td>
            <td class="pxy-sm success-light">visible</td>
          </tr>
        </tbody>
      </table>

    </section>

    <!-- visibility FROM -->
    <section>
      <h2 id="visibility-from">Visibility FROM</h2>

      <p><strong>Pseudo says:</strong> <code>hide</code> this visible element, <code>from</code> <strong>and including</strong> this <code>device</code> and higher.</p>
      <pre><code>&lt;div class=&quot;hide-from-{phone|tablet|desktop}&quot;&gt;...&lt;/div&gt;</code></pre>

      <p><strong>Pseudo says:</strong> <code>display</code> this hidden element, <code>from</code> <strong>and including</strong> this <code>device</code> and higher.</p>
      <pre><code>&lt;div class=&quot;display-from-{phone|tablet|desktop|widescreen}&quot;&gt;...&lt;/div&gt;</code></pre>

      <table>
        <thead>
          <tr>
            <th class="tal">Class</th>
            <th width="20%">Phone (sm) <br> <code>556px</code> and above</th>
            <th width="20%">Tablet (md) <br> <code>768px</code> and above</th>
            <th width="20%">Desktop (lg) <br> <code>992px</code> and above</th>
            <th width="20%">Widescreen (xl) <br> <code>1200px</code> and above</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><code>hide-from-phone</code></td>
            <td class="pxy-sm danger-light">hidden</td>
            <td class="pxy-sm danger-light">hidden</td>
            <td class="pxy-sm danger-light">hidden</td>
            <td class="pxy-sm danger-light">hidden</td>
          </tr>
          <tr>
            <td><code>hide-from-tablet</code></td>
            <td class="pxy-sm warning-light">visible</td>
            <td class="pxy-sm danger-light">hidden</td>
            <td class="pxy-sm danger-light">hidden</td>
            <td class="pxy-sm danger-light">hidden</td>
          </tr>
          <tr>
            <td><code>hide-from-desktop</code></td>
            <td class="pxy-sm warning-light">visible</td>
            <td class="pxy-sm warning-light">visible</td>
            <td class="pxy-sm danger-light">hidden</td>
            <td class="pxy-sm danger-light">hidden</td>
          </tr>
          <tr>
            <td><code>hide-from-widescreen</code></td>
            <td class="pxy-sm warning-light">visible</td>
            <td class="pxy-sm warning-light">visible</td>
            <td class="pxy-sm warning-light">visible</td>
            <td class="pxy-sm danger-light">hidden</td>
          </tr>

          <tr>
            <td><code>{display}-from-phone</code></td>
            <td class="pxy-sm success-light">visible</td>
            <td class="pxy-sm success-light">visible</td>
            <td class="pxy-sm success-light">visible</td>
            <td class="pxy-sm success-light">visible</td>
          </tr>
          <tr>
            <td><code>{display}-from-tablet</code></td>
            <td class="pxy-sm warning-light">hidden</td>
            <td class="pxy-sm success-light">visible</td>
            <td class="pxy-sm success-light">visible</td>
            <td class="pxy-sm success-light">visible</td>
          </tr>
          <tr>
            <td><code>{display}-from-desktop</code></td>
            <td class="pxy-sm warning-light">hidden</td>
            <td class="pxy-sm warning-light">hidden</td>
            <td class="pxy-sm success-light">visible</td>
            <td class="pxy-sm success-light">visible</td>
          </tr>
          <tr>
            <td><code>{display}-from-widescreen</code></td>
            <td class="pxy-sm warning-light">hidden</td>
            <td class="pxy-sm warning-light">hidden</td>
            <td class="pxy-sm warning-light">hidden</td>
            <td class="pxy-sm success-light">visible</td>
          </tr>
        </tbody>
      </table>

    </section>

    <!-- visibility UP TO -->
    <section>
      <h2 id="visibility-upto">Visibility UP TO</h2>
      <p><strong>Pseudo says:</strong> <code>hide</code> this visible element, <code>up to</code> but <strong>NOT including</strong> this <code>device</code>.</p>
      <pre><code>&lt;div class=&quot;hide-upto-{tablet|desktop|widescreen}&quot;&gt;...&lt;/div&gt;</code></pre>

      <p><strong>Pseudo says:</strong> <code>display</code> this hidden element, <code>up to</code> but <strong>NOT including</strong> this <code>device</code>.</p>
      <pre><code>&lt;div class=&quot;display-upto-{tablet|desktop}&quot;&gt;...&lt;/div&gt;</code></pre>

      <table>
        <thead>
          <tr>
            <th class="tal">Class</th>
            <th width="25%">Phone (sm) <br> <code>555px</code> and below</th>
            <th width="25%">Tablet (md) <br> <code>767px</code> and below</th>
            <th width="25%">Desktop (lg) <br> <code>991px</code> and below</th>
            <th width="25%">Widescreen (xl) <br> <code>1199px</code> and below</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><code>hide-upto-tablet</code></td>
            <td class="pxy-sm danger-light">hidden</td>
            <td class="pxy-sm warning-light">visible</td>
            <td class="pxy-sm warning-light">visible</td>
            <td class="pxy-sm warning-light">visible</td>
          </tr>
          <tr>
            <td><code>hide-upto-desktop</code></td>
            <td class="pxy-sm danger-light">hidden</td>
            <td class="pxy-sm danger-light">hidden</td>
            <td class="pxy-sm warning-light">visible</td>
            <td class="pxy-sm warning-light">visible</td>
          </tr>
          <tr>
            <td><code>hide-upto-widescreen</code></td>
            <td class="pxy-sm danger-light">hidden</td>
            <td class="pxy-sm danger-light">hidden</td>
            <td class="pxy-sm danger-light">hidden</td>
            <td class="pxy-sm warning-light">visible</td>
          </tr>

          <tr>
            <td><code>{display}-upto-tablet</code></td>
            <td class="pxy-sm success-light">visible</td>
            <td class="pxy-sm warning-light">hidden</td>
            <td class="pxy-sm warning-light">hidden</td>
            <td class="pxy-sm warning-light">hidden</td>
          </tr>
          <tr>
            <td><code>{display}-upto-desktop</code></td>
            <td class="pxy-sm success-light">visible</td>
            <td class="pxy-sm success-light">visible</td>
            <td class="pxy-sm warning-light">hidden</td>
            <td class="pxy-sm warning-light">hidden</td>
          </tr>
          <tr>
            <td><code>{display}-upto-widescreen</code></td>
            <td class="pxy-sm success-light">visible</td>
            <td class="pxy-sm success-light">visible</td>
            <td class="pxy-sm success-light">visible</td>
            <td class="pxy-sm warning-light">hidden</td>
          </tr>
        </tbody>
      </table>

    </section>

    <section>
      <h2>Example Use Cases</h2>
      <h4>Hide the hamburger menu on tablet and above</h4>
      <p> Use the <code>{display}-on-phone</code> class because as this is the only device the menu will appear it is the easiest option. <br><strong>Note:</strong> if you want the hamburger to appear on the tablets as well you would be better of using the <code>hide-from-desktop</code> directive because it has a larger range and therefore only requires a single class.</p>
      
    </section>

  </div>
</template>