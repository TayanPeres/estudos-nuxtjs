<template>
<div>
  <div>
    {{ config}}
     </div>

  <div>
    <Vtooltip>
  
    {{ $store.state.user}}
  </div>

  <div>
    {{ user}}
  </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'

 export default {
  name: 'IndexPage',

  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  asyncData({ $config }) {
    console.log($config)
  },
  created() {
    console.log(this.$config.facebook_api_key)
    console.log(this.$name('tayan Snow'))
  },
  mounted() {
    console.log(this.$name('tayan Snow'))
   console.log(this.$dayjs().format())
}
}
</script>
