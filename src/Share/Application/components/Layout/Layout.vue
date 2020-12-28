<template src="./Layout.html"></template>
<style src="./Layout.scss" lang="scss"></style>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import PhotoProfile from "@/Share/Application/components/PhotoProfile/PhotoProfile.vue";
import Card from "@/Share/Application/components/Card/Card.vue";
import Sidebar from "@/Share/Application/components/Layout/components/Sidebar/Sidebar.vue";

@Options({
  components: {
    PhotoProfile,
    Card,
    Sidebar
  },
  props: {
    title: String
  }
})
export default class Layout extends Vue {

}


</script>