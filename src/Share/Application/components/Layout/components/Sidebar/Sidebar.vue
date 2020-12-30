<template src="./Sidebar.html"></template>
<style src="./Sidebar.scss" lang="scss" scoped></style>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import Icon from "@/Share/Application/components/Icon/Icon.vue";
import RouterLink from "@/Share/Application/components/RouterLink/RouterLink.vue";

@Options({
  components: {
    Icon,
    RouterLink
  }
})
export default class Sidebar extends Vue {



}

</script>