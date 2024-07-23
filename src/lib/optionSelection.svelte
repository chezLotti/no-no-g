<script lang="ts">
	import { options } from "$lib/constants";
	import type { UpdateFunction } from "./types";

  let {
    dimX, 
    dimY, 
    density,
    buildPattern,
    updateFunctions
  }: {
    dimX: number 
    dimY: number
    density: number
    buildPattern: () => void
    updateFunctions: {
      dimX: (e: UpdateFunction) => void
      dimY: (e: UpdateFunction) => void
      density: (e: UpdateFunction) => void
    }
  } = $props() 

</script>

<div class='grid'>
  {#each options as option}
    <label for={option.name}>
      {option.label}
    </label>
    <input 
      id={option.name} 
      required           
      min={option.min} 
      max={option.max}
      step={option.step}
      oninput={updateFunctions[option.name]}
      disabled={option.name == 'density'}
      type='number'
      value={option.name == 'dimX' ? dimX : option.name == 'dimY' ? dimY : density}
    />
  {/each}
  <div class='alignmentPlaceholder'></div>
  <button 
    class='startButton'
    onclick={buildPattern}
  >
    Start
  </button>
</div>

<style lang="scss">
  label {
    padding: 5px 10px;
    border-top-left-radius: 50vh;
    border-bottom-left-radius: 50vh;
    border: none;
    background: white;
  }
  input {
    border-top-right-radius: 50vh;
    border-bottom-right-radius: 50vh;
    border: none;
    padding: 5px 10px;
    text-align: end;
  }
  .grid {
    display: grid;
    grid-template-columns: auto 1fr;
    row-gap: 20px;
  }
  .startButton {
    border-radius: 10px;
    border: none;
    padding: 5px 10px;
    background: lightcoral;
    color: white;
    &:hover {
      background: white;
      color: black;
    }
  }  
</style>