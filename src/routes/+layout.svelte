<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <title>unIQue room</title>
  <meta charset="UTF-8" />
  <meta
    name="description"
    content="Únikové místnosti v centru Brna, na výběr ze tří různých her. Originální příběh, nápadité úkoly, autentická atmosféra. Přijďte si užít až 75 minut zábavy!"
  />
  <meta
    name="keywords"
    content="únikovka, únikovky, úniková hra, únikové hry, úniková místnost, únikové místnosti, hra Brno, hry Brno, Brno, co dělat když prší Brno
    co dělat když je venku hnusně, co dělat když je venku hnusně Brno, brno pro děti, co dělat s dětmi v Brně, co dělat s dětmi dnes Brno, teambuilding Brno, team building Brno, building team, dárek na poslední chvíli, dárek na poslední chvíli Brno, dárek Brno, originální dárek, dárek úniková hra, dárek úniková hra Brno"
  />
  <meta name="author" content="unIQue room s.r.o." />
  <meta name="robots" content="index, follow" />
  <meta name="revisit-after" content="3 days" />
  <meta lang="cze" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  />

  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Raleway"
  />
</svelte:head>
<Navbar />
{@render children()}
<Footer />
