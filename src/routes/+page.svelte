<script lang="ts">
  import Audience from '$lib/components/Audience.svelte';
  import HeroImage from '$lib/components/HeroImage.svelte';
  import AboutEscapeGames from '$lib/components/AboutEscapeGames.svelte';
  import Rooms from '$lib/components/Rooms.svelte';
  import BoastStrip from '$lib/components/BoastStrip.svelte';
  import Gallery from '$lib/components/Gallery.svelte';
  import Reviews from '$lib/components/Reviews.svelte';
  import Pricing from '$lib/components/Pricing.svelte';
  import GiftVoucherSection from "$lib/components/GiftVoucher/GiftVoucherSection.svelte"
  import ContactForm from '$lib/components/ContactForm/ContactForm.svelte';
  import GiftVoucherForm from '$lib/components/GiftVoucher/GiftVoucherForm.svelte';
  import AddressSection from "$lib/components/AddressSection.svelte"
  let { data } = $props()
</script>

<HeroImage />
<Audience />
<AboutEscapeGames />
<Rooms />
<BoastStrip />
<Gallery />
<Reviews />
<Pricing />
<!--
  <GiftVoucherForm data={data.giftVoucherForm} />
  <ContactForm contactFormInput={data.contactForm}/>
  -->
<AddressSection />