<template>
        <div class="container mx-auto">
            <h1 class="text-lg font-bold">Produtos</h1>
            <NuxtLink to="/produtos/produto-a">Produto A</NuxtLink>
            <NuxtLink to="/produtos/produto-b">Produto B</NuxtLink>
            {{ products}}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, possimus rerum! Aliquam, debitis ad molestiae dolores sapiente obcaecati magnam neque eius suscipit modi et in minus ex tempore libero dolorum?</p>
        </div>
   
</template>

<script>

export default {
    //entra em açao antes que o component for criado
    async asyncData({$axios}) {
      const products = await $axios.$get('https://json.lists.com/posts?_limit=3')
        return {
            products
        }
    }
}
</script>
