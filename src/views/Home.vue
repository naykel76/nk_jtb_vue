<template>
  <div class="container">
    <Header />
    
    <router-link class="mr" to="/Dev">Dev</router-link>
    <svg class="icon">
      <use xlink:href="@/assets/nk_icon-defs.svg#icon-save" />
    </svg>
    <div class="navbar">
      <div class="nav">
        <router-link class="mr" to="/">Home</router-link>
        <span class="px">|</span>
        <router-link class="mr" to="/flexbox-guide">Flexbox Guide</router-link>
        <router-link class="mr" to="/content-spacing">Content Spacing</router-link>
        <span class="px">|</span>
        <router-link class="mr" to="/base">Base</router-link>
        <router-link class="mr" to="/mixins">Mixins</router-link>
        <router-link class="mr" to="/container">Container</router-link>
        <router-link class="mr" to="/grid">Grid</router-link>
      </div>
    </div>
    <div class="navbar">
      <div class="nav">
        <div class="header">Components</div>
        <router-link class="mr" to="/Accordion">Accordion</router-link>
        <router-link class="mr" to="/Box">Box</router-link>
        <router-link class="mr" to="/Breadcrumb">Breadcrumb</router-link>
        <router-link class="mr" to="/Button">Button</router-link>
        <router-link class="mr" to="/Dropdown">Dropdown</router-link>
        <router-link class="mr" to="/Form">Form</router-link>
        <router-link class="mr" to="/Icon">Icon</router-link>
        <router-link class="mr" to="/Menu">Menu</router-link>
        <router-link class="mr" to="/Message">Message</router-link>
        <router-link class="mr" to="/Modal">Modal</router-link>
        <router-link class="mr" to="/Navbar">Navbar</router-link>
        <router-link class="mr" to="/Pagination">Pagination</router-link>
        <router-link class="mr" to="/Tab">Tab</router-link>
      </div>
    </div>
    <div class="navbar">
      <div class="nav">
        <div class="header">Utilities</div>
        <router-link class="mr" to="/Border">Border</router-link>
        <router-link class="mr" to="/Color">Color</router-link>
        <router-link class="mr" to="/Flex">Flex</router-link>
        <router-link class="mr" to="/Other">Other</router-link>
        <router-link class="mr" to="/Position">Position</router-link>
        <router-link class="mr" to="/Sizes">Sizes</router-link>
        <router-link class="mr" to="/Spacing">Spacing</router-link>
        <router-link class="mr" to="/Text">Text</router-link>
        <router-link class="mr" to="/Visibility">Visibility</router-link>
      </div>
    </div>
    <div class="navbar">
      <div class="nav">
        <div class="header">Examples</div>
        <router-link class="mr" to="/example-spacing">Spacing</router-link>
      </div>
    </div>

    <section>
      <h2 id="">JTB Concepts</h2>
      <div class="bx">
        <p>generally anything that starts with <code>n</code> means none (no margin, no border, no padding ... etc)</p>
        <p>generally anything that starts with <code>d</code> means display (dblk, dflx ... etc)</p>
      </div>
      <div class="bx">
        <h4>Notes about framework</h4>
        <ul>
          <li>uses maps to create most utilities, if you don't like the classes you can easily change them</li>
          <li>Utility classes have a changeable prefix #{$prefix} allowing developers to use what suits them.</li>
        </ul>
      </div>
    </section>
    <!-- JTB Class Modifiers and Abbreviations -->
    <section>
      <h2 id="jtb-abbreviations">JTB Class Modifiers and Abbreviations</h2>
      <p class="txt-red">why? All frameworks seem to use the same naming convention, and while in many ways this makes sense it can make it more difficult for searching. By design most JTB classes have a uniqueness about them to make it easier to search!</p>
      <div class="row">
        <div class="col">
          <table>
            <thead>
              <caption>Display</caption>
              <tr>
                <th>Short Hand</th>
                <th>For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>blk</code></td>
                <td> block</td>
              </tr>
              <tr>
                <td><code>il</code></td>
                <td>inline</td>
              </tr>
              <tr>
                <td><code>ilb</code></td>
                <td>inline-block</td>
              </tr>
              <tr>
                <td><code>flx</code></td>
                <td>flex</td>
              </tr>
              <tr>
                <td><code>ilf</code></td>
                <td>inline-flex</td>
              </tr>
            </tbody>

          </table>
        </div>
        <div class="col">
          <table>
            <thead>
              <caption>Position</caption>
              <tr>
                <th>Short Hand</th>
                <th>For</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td><code>t</code></td>
                <td>top</td>
              </tr>
              <tr>
                <td><code>b</code></td>
                <td>bottom</td>
              </tr>
              <tr>
                <td><code>l</code></td>
                <td>left</td>
              </tr>
              <tr>
                <td><code>r</code></td>
                <td>right</td>
              </tr>
              <tr>
                <td><code>tl</code></td>
                <td>top-left</td>
              </tr>
              <tr>
                <td><code>tr</code></td>
                <td>top-right</td>
              </tr>
              <tr>
                <td><code>bl</code></td>
                <td>bottom-left</td>
              </tr>
              <tr>
                <td><code>br</code></td>
                <td>bottom-right</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col">
          <table>
            <thead>
              <caption>Direction</caption>
              <tr>
                <th>Short Hand</th>
                <th>For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>x</code></td>
                <td>Horizontal left and right</td>
              </tr>
              <tr>
                <td><code>y</code></td>
                <td>Vertical top and bottom</td>
              </tr>
              <tr>
                <td><code>xy</code></td>
                <td>Both horizontal and vertical</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <hr class="lg">
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

    </section>
    <section class="container">
      <h2>Tables</h2>
      <p class="lead">Element level table styling (no classes applied)</p>
      <table>
        <thead>
          <tr>
            <th>Header</th>
            <th>Longer Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>More table data</td>
          </tr>
          <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>More table data</td>
          </tr>
          <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>More table data</td>
          </tr>
        </tbody>
      </table>
    </section>

    <hr>
    <h2>Sizes</h2>
    <p class="lead">A range of height and width utility classes for sizing your elements</p>

    <hr>

    <section>
      <h2>Code</h2>
      <p class="lead">Basic inline code and multiline blocks.</p>
      <p>This is some <code>inline</code> code.</p>
      <pre class="html"><code>&lt;div class=&quot;bx&quot;&gt;
    &lt;div class=&quot;bx-title&quot;&gt; ... &lt;/div&gt;
    &lt;div class=&quot;bx-content&quot;&gt; ... &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </section>

    <hr>

    <section>
      <div class="bx">
        <h1>H1 Heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, error porro aliquid cupiditate nam,
          accusantium delectus velit nesciunt enim laborum, voluptatum
          doloremque fugit minima excepturi.</p>
        <h2>H2 Heading</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, error porro aliquid cupiditate nam,
          accusantium delectus velit nesciunt enim laborum, voluptatum
          doloremque fugit minima excepturi.</p>
        <h3>H3 Heading</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, error porro aliquid cupiditate nam,
          accusantium delectus velit nesciunt enim laborum, voluptatum
          doloremque fugit minima excepturi.</p>
        <h4>H4 Heading</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, error porro aliquid cupiditate nam,
          accusantium delectus velit nesciunt enim laborum, voluptatum
          doloremque fugit minima excepturi.</p>
        <h5>H5 Heading</h5>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, error porro aliquid cupiditate nam,
          accusantium delectus velit nesciunt enim laborum, voluptatum
          doloremque fugit minima excepturi.</p>
        <h6>H6 Heading</h6>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, error porro aliquid cupiditate nam,
          accusantium delectus velit nesciunt enim laborum, voluptatum
          doloremque fugit minima excepturi.</p>
      </div>
    </section>
    <hr>
    <section>
      <h2>Lists</h2>
      <ul>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>
      <h4>Nested List</h4>
      <ul>
        <li>List Item</li>
        <li>List Item
          <ul>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
          </ul>
        </li>
        <li>List Item</li>
      </ul>
      <ol>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
      </ol>
    </section>
    <hr>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue"
import Header from "@/components/layout/Header";

export default {
  name: "Home",
  components: { Header }
};
</script>

