<template src="./HelloWorld.html"></template>
<style src="./HelloWorld.css"></style>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import TranslatorInterface from "@/Share/Domain/Service/Translator/TranslatorInterface";
import {inject} from "inversify";
import TYPES from "@/Types";
import container from "../../inversify.config";


@Options({
  props: {
    msg: String,
  }
})
export default class HelloWorld extends Vue {
  msg!: string;

  private t: any;


  constructor(
      props: any,
      context: any,
      @inject(TYPES.translatorInterface) private translator: TranslatorInterface = container.get(TYPES.translatorInterface)
  ) {
    super(props, context);

    this.t = translator.translate;
  }

  data() {
    return {
      counter: 'aaaaaaaaaa',
      t: null
    }
  }

}


</script>

