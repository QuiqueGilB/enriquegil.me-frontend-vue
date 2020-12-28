<template src="./Home.html"></template>


<script>
import {Options, Vue} from "vue-class-component";
import Layout from "@/Share/Application/components/Layout/Layout";
import About from "@/Context/HomeContext/Domain/About/About";
import TYPES from "@/Types";
import AboutClient from "@/Context/HomeContext/Domain/About/AboutClient";
import {inject} from "inversify";
import AxiosAboutClient from "@/Context/HomeContext/Infrastructure/Client/About/AxiosAboutClient";

@Options({
  components: {
    Layout
  },
  props: {
  }
})
export default class Home extends Vue {

  _aboutClient;

  constructor(props, context,
              @inject(TYPES.aboutClientInterface) aboutClient = new AxiosAboutClient()
  ) {
    super(props, context);
    this._aboutClient = aboutClient;
  }

  async created() {
    this.about = await this._aboutClient.me()
    console.log(this.about);
  }

  data() {
    return {
      about: {}
    }
  }

}


</script>