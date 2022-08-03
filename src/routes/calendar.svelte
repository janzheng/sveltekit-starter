

<script>

  import { browser } from '$app/env';
  import ical from 'ical'

  let events = []
  async function getCal() {
    if(browser && window) {
      try {
        let res = await fetch('https://cf-proxy.yawnxyz.workers.dev/corsproxy/https://calendar.google.com/calendar/ical/jp5a7kvi83ilbcd0f7e6amk6ks%40group.calendar.google.com/public/basic.ics')
        
        if(res.ok) {
          let text = await res.text()
          events = ical.parseICS(text);
        }
      } catch(e) {
        console.error('error', e)
      }
    }
  }
  
  getCal()
  
</script>

<div class="_content mx-auto">
  {#each Object.values(events) as event}
    {#if event.start}
      <div class="Card-light mb-4">
        <p>Summary: {@html event.summary}</p>
        <p>Description: {@html event.description}</p>
        <p>Start Date: {event.start?.toISOString()}</p>
      </div>
    {/if}
  {/each}
</div>