<template>
  <div id="app">
    <div class="navbar">
      <div class="nav">
        <router-link class="mr" to="/">Home</router-link>
        <router-link class="mr" to="/Dev">Dev</router-link>
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
    <router-view />
  </div>
</template>


