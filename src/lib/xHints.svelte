<script lang="ts">
	import type { Hints } from "./types";
	import { fieldSize } from "./constants";

  let {dimY, hints}: {dimY: number, hints: Hints} = $props()
</script>

<div class='xHints' style={'height: ' + (dimY * fieldSize / 3) + 'px;'}>
  {#each Object.values(hints.x) as hint}
    <div class='xHint' style={'width: ' + fieldSize + 'px;'}>
      <span style='white-space: pre-line'>{hint.join('\n')}</span>
    </div>
  {/each}
</div>

<style lang="scss">
  .xHints {
    padding: 10px 10px 0 10px;
    display: flex;
  }
  .xHint {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    border-inline: 1px solid grey;
  }  
</style>