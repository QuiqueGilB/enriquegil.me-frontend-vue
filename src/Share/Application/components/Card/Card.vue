<template src="./Card.html"></template>
<style src="./Card.scss" lang="scss"></style>


<script lang="ts">

import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    title: String
  }
})
export default class Card extends Vue {

}

</script>