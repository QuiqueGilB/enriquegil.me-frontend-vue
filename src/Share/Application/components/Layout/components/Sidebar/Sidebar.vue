<template src="./Sidebar.html"></template>
<style src="./Sidebar.scss" lang="scss" scoped></style>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import Icon from "@/Share/Application/components/Icon/Icon.vue";

@Options({
  components: {
    Icon
  }
})
export default class Sidebar extends Vue {

}

</script>