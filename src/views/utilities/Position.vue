<template>
  <div class="nk-docs container">
    <h1>Position Utilities</h1>
    <p class="lead">Quickly configure the position of an element using position utilities.</p>
    <p>The <code>pos-*</code> postion classes use absolute position to place and element relative to another element. Be sure you understand your layout and other elements as you may need to add additional CSS.</p>
    <table class="fullwidth">
      <thead>
        <tr>
          <th>Class</th>
          <th>Description</th>
          <th width="150">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> <code>.posa</code></td>
          <td>Add <code>position: absolute;</code> property to an element</td>
          <td></td>
        </tr>
        <tr>
          <td> <code>.posr</code></td>
          <td>Add <code>position: relative;</code> property to an element</td>
          <td></td>
        </tr>
        <tr>
          <td> <code>.pos-t</code></td>
          <td> Position an element at the <em>top</em> of a relative parent. (stretches to width of parent element)</td>
          <td>
            <div class="pxy h40 primary posr">
              <div class="pos-t secondary tac"><code>pos-t</code></div>
            </div>
          </td>
        </tr>
        <tr>
          <td> <code>.pos-tl</code></td>
          <td> Position an element at the <em>top-left</em> of a relative parent. (element shrinks to fit content)</td>
          <td>
            <div class="pxy h40 primary posr">
              <div class="pos-tl secondary"><code class="mx-sm">pos-tl</code></div>
            </div>
          </td>
        </tr>
        <tr>
          <td> <code>.pos-tr</code></td>
          <td> Position an element at the <em>top-right</em> of a relative parent. (element shrinks to fit content)</td>
          <td>
            <div class="pxy h40 primary posr">
              <div class="pos-tr secondary"><code class="mx-sm">pos-</code></div>
            </div>
          </td>
        </tr>
        <tr>
          <td> <code>.pos-b</code></td>
          <td> Position an element at the <em>bottom</em> of a relative parent. (stretches to width of parent element)</td>
          <td>
            <div class="pxy h40 primary posr">
              <div class="pos-b secondary tac"><code>pos-b</code></div>
            </div>
          </td>
        </tr>

        <tr>
          <td> <code>.pos-bl</code></td>
          <td> Position an element at the <em>bottom-left</em> of a relative parent. (element shrinks to fit content)</td>
          <td>
            <div class="pxy h40 primary posr">
              <div class="pos-bl secondary"><code class="mx-sm">pos-</code></div>
            </div>
          </td>
        </tr>
        <tr>
          <td> <code>.pos-br</code></td>
          <td> Position an element at the <em>bottom-right</em> of a relative parent. (element shrinks to fit content)</td>
          <td>
            <div class="pxy h40 primary posr">
              <div class="pos-br secondary"><code class="mx-sm">pos-br</code></div>
            </div>
          </td>
        </tr>
        <tr>
          <td> <code>.sticky</code></td>
          <td>Element sticks to the top of the viewport, from edge to edge, but only after you scroll past it. <strong>Note:</strong> the element only sticks while the parent is in view because it is relative to the parent.</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>