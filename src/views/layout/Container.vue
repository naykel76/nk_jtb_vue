<template>
  <div class="container">
    <h1>Container</h1>
    <p class="lead">A <em>container</em> to center your content horizontally.</p>

    <section>
      <p class="txt-red mt">WORK IN PROGRESS</p>
    </section>
    <h2>Things to Know</h2>
    <ul>
      <li><em>Containers</em> are used to provide structure to your content but they should not be styled directly.</li>
      <li>The<code>.container</code> class has a fixed <code>max-width</code> which changes at specified breakpoints.</li>
      <li>Add the<code>.fullwidth</code> utility class if you do not want a defined width.</li>
    </ul>
    <pre><code>&lt;div class=&quot;container&quot;&gt;&lt;/div&gt;</code></pre>
    <pre><code>&lt;div class=&quot;container fullwidth&quot;&gt;&lt;/div&gt;</code></pre>

    <section>
      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Default Value</th>
            <th>Maximum Width</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td><code>$container-tablet</code></td>
            <td><code>$tablet</code></td>
            <td>720px</td>
          </tr>

          <tr>
            <td><code>$container-desktop</code></td>
            <td><code>$desktop</code></td>
            <td>960px</td>
          </tr>

          <tr>
            <td><code>$container-widescreen</code></td>
            <td><code>$widescreen</code></td>
            <td>1200px</td>
          </tr>

        </tbody>

      </table>
    </section>
  </div>
</template>
