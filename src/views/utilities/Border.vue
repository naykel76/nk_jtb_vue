<template>
  <div class="container py-lg">
    <section>
      <h1>Border Utilities</h1>
      <p class="lead">Border utility classes to style your content.</p>
      <p>Border ulility classes play well together and you do not necessarily need to stack them, they are designed to work independent to each other.</p>
    </section>
    
    <section>
      <h2>Adding Border's</h2>
      <p>Add the <code>.bdr</code> class to your element to add a 1px solid transparent black border. As the border colour is a transparent black it will adapt to what ever the back ground colour is without having to specify a border colour.</p>

      <h3>Add Complete Border</h3>
      <div class="pxy bdr mt">Default border <code>.bdr</code></div>

      <h3>Add Partial Border's</h3>
      <div class="row tac mt">
        <div class="col">
          <span class="pxy-sm bdr-t">Add Top Border<code>.bdr-t</code></span>
        </div>
        <div class="col">
          <span class="pxy-sm bdr-b">Add Bottom Border<code>.bdr-b</code></span>
        </div>
        <div class="col">
          <span class="pxy-sm bdr-l">Add Left Border<code>.bdr-l</code></span>
        </div>
        <div class="col">
          <span class="pxy-sm bdr-r">Add Right Border<code>.bdr-r</code></span>
        </div>
      </div>
    </section>

    <hr class="my-lg">

    <section>
      <h2>Removing Border's</h2>
      <p>Add the <code>nbdr</code> class to remove the border from your element.</p>

      <h3>Remove Complete Border</h3>
      <div class="pxy bdr nbdr">Remove all borders <code>.nbdr</code></div>

      <h3>Remove Partial Border's</h3>
      <div class="row tac mt">
        <div class="col">
          <span class="pxy-sm bdr nbdr-t">Remove Top Border<code>.nbdr-t</code></span>
        </div>
        <div class="col">
          <span class="pxy-sm bdr nbdr-b">Remove Bottom Border<code>.nbdr-b</code></span>
        </div>
        <div class="col">
          <span class="pxy-sm bdr nbdr-l">Remove Left Border<code>.nbdr-l</code></span>
        </div>
        <div class="col">
          <span class="pxy-sm bdr nbdr-r">Remove Right Border<code>.nbdr-r</code></span>
        </div>
      </div>

    </section>

    <hr class="my-lg">
    <section>

      <h2>Radius Border</h2>
      <p>Use the <code>.bdrr</code> class to add radius border to you element.</p>

      <div class="pxy bdrr">Radius border <code>.bdrr</code></div>
      <div class="row mt">
        <div class="col mx bdr bdrr-t">Add Top Radius<code>.bdrr-t</code></div>
        <div class="col mx bdr bdrr-b">Add Bottom Radius<code>.bdrr-b</code></div>
        <div class="col mx bdr bdrr-l">Add Left Radius<code>.bdrr-l</code></div>
        <div class="col mx bdr bdrr-r">Add Right Radius<code>.bdrr-r</code></div>
      </div>

      <h2>Remove Border Radius</h2>
      <div class="pxy bdrr nbr">Radius border <code>.bdrr</code></div>
      <div class="row mt">
        <div class="col mx bdrr nbr-t">Remove Top Radius<code>.nbr-t</code></div>
        <div class="col mx bdrr nbr-b">Remove Bottom Radius<code>.nbr-b</code></div>
        <div class="col mx bdrr nbr-l">Remove Left Radius<code>.nbr-l</code></div>
        <div class="col mx bdrr nbr-r">Remove Right Radius<code>.nbr-r</code></div>
      </div>

    </section>

    <hr class="my-lg">

    <section>
      <h2>Border Thickness</h2>
      <div class="row">
        <div class="col success wh100 bdr bdr5">
        </div>
        <div class="col info wh100 bdr bdr5">
        </div>
        <div class="col danger wh100 bdr bdr5">
        </div>
      </div>
    </section>
  </div>
</template>