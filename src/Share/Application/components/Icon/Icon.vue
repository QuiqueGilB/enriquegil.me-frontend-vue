<template src="./Icon.html"></template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    name: String
  }
})
export default class Icon extends Vue {

  constructor(props: any, context: any) {
    super(props, context);
  }

}

</script>