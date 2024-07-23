<script lang="ts">
	import type { Hints } from "./types";
	import { fieldSize } from "./constants";

  let {dimX, hints}: {dimX: number, hints: Hints} = $props()
</script>

<div class='yHints' style={'width: ' + (dimX * fieldSize / 3) + 'px;'}>
  {#each Object.values(hints.y) as hint}
    <div class='yHint' style={'height: ' + fieldSize + 'px;'}>
      <span>{hint.join(' ')}</span>
    </div>
  {/each}
</div>

<style lang="scss">
  .yHints {
    padding: 10px 0 10px 10px;
    display: flex;
    flex-flow: column;
    height: fit-content;
  }
  .yHint {
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
  }
</style>