<script lang="ts">
	import { fieldSize } from "./constants";
	
	let {dimX, fields, solutionTry}: {dimX: number, fields: number[], solutionTry: number[]} = $props()

	function setFieldState(fieldIndex: number) {
    if (
      solutionTry[fieldIndex] === null || 
      solutionTry[fieldIndex] === undefined || 
      solutionTry[fieldIndex] == 0
    ) {
      solutionTry[fieldIndex] = 1
    } else if (solutionTry[fieldIndex] == 1) {
      solutionTry[fieldIndex] = -1
    } else if (solutionTry[fieldIndex] == -1) {
      solutionTry[fieldIndex] = 0
    }
  }
</script>

<div class='patternContainer' style={"width: " + (dimX * fieldSize) + 'px;'}>
	{#each fields as _, index}
		<button 
			class={'field ' + (solutionTry[index] == 1 ? 'filled' : solutionTry[index] == -1 ? 'x' : 'empty')}
			onclick={() => setFieldState(index)} 
		>
			{"X"}
		</button>
			
		{#if (index + 1) % dimX == 0}
			<div class='break'></div>
		{/if}
	{/each}
</div>

<style lang="scss">
	.patternContainer {
    padding: 10px 10px;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
  }
  .break {
    flex-basis: 100%;
    height: 0;
  }
  .field {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 1px solid grey;
  }
  .empty {
    background: white;
    color: white;
  }
  .filled {
    background: grey;
    color: grey;
  }
  .x {
    background: white;
    color: lightcoral;
    font-size: 30px;
  }
	
</style>