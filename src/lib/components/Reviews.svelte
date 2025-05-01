<script lang="ts">
  import {
    Heading2,
    Muted,
    Paragraph,
    Blockquote,
  } from '$typography';
  import { m } from '$lib/paraglide/messages';
</script>

<div class="mx-4">
  <Heading2>{m['review.title']()}</Heading2>
  <Blockquote>
    {m['review.review1']()}
  </Blockquote>
  <div class="flex flex-row justify-end">
    <Muted>
      {m['review.review1followUp']()}
      <a
        href="www.facebook.com/pg/unIQueRoomBrno/reviews/"
        style="text-decoration: underline;"
      >
        <strong>{m['review.review1followUpLink']()}</strong>
      </a>
    </Muted>
  </div>
  <Blockquote>
    {m['review.review2']()}
  </Blockquote>
  <div class="flex flex-row justify-end">
    <Muted>
      {m['review.review2followUp']()}
      <a
        style="text-decoration: underline;"
        href="https://www.tripadvisor.com/Attraction_Review-g274714-d10351199-Reviews-UnIQue_room-Brno_South_Moravian_Region_Moravia.html"
      >
        <strong>{m['review.review2followUpLink']()}</strong>
      </a>
    </Muted>
  </div>
  <Blockquote>
    {m['review.review3']()}
  </Blockquote>
  <div class="flex flex-row justify-end">
    <Muted>
      {m['review.review3followUpPart1']()}
      <a
        href="https://www.unss.sk/yalta/vystupy.php#brno"
        style="text-decoration: underline;"
      >
        <strong>{m['review.review3followUpPart2']()}</strong>
      </a>
      {m['review.review3followUpPart3']()}
    </Muted>
  </div>
</div>
