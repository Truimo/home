<script lang="ts">
    import '@/app.css'

    import Footer from '@/components/Footer.svelte'
    import Header from '@/components/Header.svelte'

    let { children } = $props()
</script>

<Header/>
<main class="main">
{@render children()}
</main>
<Footer/>
