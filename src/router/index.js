import Vue from "vue"
import VueRouter from "vue-router"

import Dev from "../views/Dev.vue"
import Home from "../views/Home.vue"
import FlexboxGuide from "../views/FlexboxGuide.vue"
import ContentSpacing from "../views/ContentSpacing.vue"


import Base from "../views/base/Base.vue"
import Mixins from "../views/base/Mixins.vue"

import Accordion from "../views/components/Accordion.vue"
import Box from "../views/components/Box.vue"
import Breadcrumb from "../views/components/Breadcrumb.vue"
import Button from "../views/components/Button.vue"
import Dropdown from "../views/components/Dropdown.vue"
import Form from "../views/components/Form.vue"
import Icon from "../views/components/Icon.vue"
import Menu from "../views/components/Menu.vue"
import Message from "../views/components/Message.vue"
import Modal from "../views/components/Modal.vue"
import Navbar from "../views/components/Navbar.vue"
import Pagination from "../views/components/Pagination.vue"
import Tab from "../views/components/Tab.vue"

import ExampleSpacing from "../views/examples/ExampleSpacing.vue"

import Container from "../views/layout/Container.vue"
import Grid from "../views/layout/Grid.vue"

import Border from "../views/utilities/Border.vue"
import Color from "../views/utilities/Color.vue"
import Flex from "../views/utilities/Flex.vue"
import Other from "../views/utilities/Other.vue"
import Position from "../views/utilities/Position.vue"
import Sizes from "../views/utilities/Sizes.vue"
import Spacing from "../views/utilities/Spacing.vue"
import Text from "../views/utilities/Text.vue"
import Visibility from "../views/utilities/Visibility.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/flexbox-guide",
    name: "FlexboxGuide",
    component: FlexboxGuide
  },
  {
    path: "/dev",
    name: "Dev",
    component: Dev
  },
  {
    path: "/content-spacing",
    name: "ContentSpacing",
    component: ContentSpacing
  },
  // Base
  {
    path: "/base",
    name: "Base",
    component: Base
  },
  // Components
  {
    path: "/accordion",
    name: "Accordion",
    component: Accordion
  },
  {
    path: "/box",
    name: "Box",
    component: Box
  },
  {
    path: "/breadcrumb",
    name: "Breadcrumb",
    component: Breadcrumb
  },
  {
    path: "/button",
    name: "Button",
    component: Button
  },
  {
    path: "/dropdown",
    name: "Dropdown",
    component: Dropdown
  },
  {
    path: "/form",
    name: "Form",
    component: Form
  },
  {
    path: "/icon",
    name: "Icon",
    component: Icon
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu
  },
  {
    path: "/message",
    name: "Message",
    component: Message
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal
  },
  {
    path: "/navbar",
    name: "Navbar",
    component: Navbar
  },
  {
    path: "/pagination",
    name: "Pagination",
    component: Pagination
  },
  {
    path: "/tab",
    name: "Tab",
    component: Tab
  },
  // Examples
  {
    path: "/example-spacing",
    name: "ExampleSpacing",
    component: ExampleSpacing
  },
  // Layout
  {
    path: "/container",
    name: "Container",
    component: Container
  },
  {
    path: "/mixins",
    name: "Mixins",
    component: Mixins
  },
  {
    path: "/grid",
    name: "Grid",
    component: Grid
  },

  // utilities
  {
    path: "/border",
    name: "Border",
    component: Border
  },
  {
    path: "/color",
    name: "Color",
    component: Color
  },
  {
    path: "/flex",
    name: "Flex",
    component: Flex
  },
  {
    path: "/other",
    name: "Other",
    component: Other
  },
  {
    path: "/position",
    name: "Position",
    component: Position
  },
  {
    path: "/sizes",
    name: "Sizes",
    component: Sizes
  },
  {
    path: "/spacing",
    name: "Spacing",
    component: Spacing
  },
  {
    path: "/visibility",
    name: "Visibility",
    component: Visibility
  },
  {
    path: "/text",
    name: "Text",
    component: Text
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
