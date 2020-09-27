<template>
  <div class="nk-docs container">
    <h1>Icons</h1>
    <p class="lead"></p>
    <p>The svg files do not have the height or width property set allowing the icon to scale to the size set in the <code>icon</code> class (the svg)</p>

    <h2 id="icon-size">Icon Sizes</h2>

    <table>
      <thead>
        <tr>
          <th>Class</th>
          <th>Example</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>svg class="icon sm"</code></td>
          <td><code>1em</code></td>
          <td>
            <svg class="icon sm">
              <use xlink:href="@/assets/nk_icon-defs.svg#icon-save-outline"></use>
            </svg>
          </td>
        </tr>
        <tr>
          <td><code>svg class="icon"</code></td>
          <td><code>1.5em</code></td>
          <td>
            <svg class="icon">
              <use xlink:href="@/assets/nk_icon-defs.svg#icon-save-outline"></use>
            </svg>
          </td>
        </tr>
        <tr>
          <td><code>svg class="icon md"</code></td>
          <td><code>2em</code></td>
          <td>
            <svg class="icon md">
              <use xlink:href="@/assets/nk_icon-defs.svg#icon-save-outline"></use>
            </svg>
          </td>
        </tr>
        <tr>
          <td><code>svg class="icon lg"</code></td>
          <td><code>3em</code></td>
          <td>
            <svg class="icon lg">
              <use xlink:href="@/assets/nk_icon-defs.svg#icon-save-outline"></use>
            </svg>
          </td>
        </tr>
      </tbody>
    </table>

    <section>
      <p>This is some text<svg class="icon">
          <use xlink:href="@/assets/nk_icon-defs.svg#icon-save-outline"></use>
        </svg>with an icon</p>
    </section>

    <section>
      <h2 id="icon-alert">Main UI Icons</h2>
      <div class="flex">
        <div class="icon-box">
          <svg class="icon">
            <use xlink:href="@/assets/nk_icon-defs.svg#icon-save"></use>
          </svg>
          <span class="icon-title">save</span>
        </div>
        <div class="icon-box">
          <svg class="icon">
            <use xlink:href="@/assets/nk_icon-defs.svg#icon-save-outline"></use>
          </svg>
          <span class="icon-title">save-outline</span>
        </div>
        <div class="icon-box">
          <svg class="icon">
            <use xlink:href="@/assets/nk_icon-defs.svg#icon-search"></use>
          </svg>
          <span class="icon-title">search</span>
        </div>
        <div class="icon-box">
          <svg class="icon">
            <use xlink:href="@/assets/nk_icon-defs.svg#icon-menu"></use>
          </svg>
          <span class="icon-title">menu</span>
        </div>
        <div class="icon-box">
          <svg class="icon">
            <use xlink:href="@/assets/nk_icon-defs.svg#icon-menu-open"></use>
          </svg>
          <span class="icon-title">menu-open</span>
        </div>
      </div>
    </section>

  </div>
</template>