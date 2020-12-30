<template src="./RouterLink.html"></template>


<script lang="ts">


import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    to: String
  },
  components: {}
})
export default class RouterLink extends Vue {


  redirect(to: string) {
    this.$router.push(to);
  }

}

</script>