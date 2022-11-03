<template>
    <div>
            <h1 class="text-lg font-bold">Serviços</h1>
            <NuxtLink to="/servicos/desenvolvimento-de-site">
                Desenvolvimento de sites
            </NuxtLink>
            <NuxtLink to="/servicos/marketing-digital">
                Marketing digital
            </NuxtLink>
            <br>
            {{ services.name}}
            
            <br>
            <NuxtChild />
        </div>
</template>

<script> 
 export default {
    name: '',
    head() {
        return {
            title: 'this.title',
            meta: [
                {hid: 'description', name: 'description', content: 'Minha descrição de serviço'}
            ],
            bodyAttrs: {
                class: ' bg-gray-400'
            }
        }
    },
    data() {
        return {
            title: '',
            services: []
        }
    },
    //entra em açao depois que o component for criado
  async fetch() {
    this.services = await this.$axios.get('https://json.lists.com/users?_limit=3')
   console.log(this)
 },
    created() {
        this.getTitle()
    },
    methods: {
        getTitle() {
        setTimeout(() => {
            this.title = 'Serviços'
        }, 3000)
    }
    }
 }
</script>