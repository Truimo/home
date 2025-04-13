<svelte:head>
    <title>浅小沫 | Truimo - 我的学习笔记</title>
    <meta name="description" content="浅小沫的个人网站，Truimo`s Home Page." />
    <meta name="keywords" content="Truimo, 浅小沫, truimo, 小沫" />
    <link rel="canonical" href="https://www.truimo.com/" />
</svelte:head>

<div class="profile flex justify-center items-center">
    <div>
        <div class="avatar inline-block rounded-full border overflow-hidden">
            <img src="https://assets.truimo.com/avatars/min.png" alt="avatar" width={150} height={150}/>
        </div>
        <h1 class="text-3xl font-bold py-4">TRUIMO</h1>
        <p class="text-lg">Wonderful things will happen.</p>
    </div>
</div>

<style>
    .avatar {
        border-color: #f7f7f7;
        height: 150px;
        width: 150px;
        aspect-ratio: 1;
    }

    @media (prefers-color-scheme: dark) {
        .avatar {
            border-color: #3b434b;
        }
    }
</style>
