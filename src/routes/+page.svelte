<script lang='ts'>
	import GameTitle from "$lib/gameTitle.svelte";
  import { defaultValues } from "$lib/constants";  
	import OptionSelection from "$lib/optionSelection.svelte";
	import Pattern from "$lib/pattern.svelte";
	import type { Hints, UpdateFunction } from "$lib/types";
	import XHints from "$lib/xHints.svelte";
	import YHints from "$lib/yHints.svelte";
	import { calcXHints, calcYHints } from "$lib/hintCalculator";
	import CheckSolutionButton from "$lib/checkSolutionButton.svelte";
  
  let dimX = $state(defaultValues['dimX'])
  let dimY = $state(defaultValues['dimY'])
  let density = $state(defaultValues['density'])
  let started = $state(false)
  let solved: -1 | 0 | 1 = $state(0)
  let hints: Hints = $state({
    x: {},
    y: {}
  })
  let fields: number[] = $state([])
  let solutionTry: number[] = $state([])

  function setSolved(correct: boolean) {
    correct ? solved = 1 : solved = -1
  }

  function buildPattern() {
    hints = {x: {}, y: {}}
    fields = []
    solutionTry = []
    solved = 0
    for (let i = 0; i < dimX * dimY; i++) {
      const newEntry = Math.floor(Math.random() * 10) < 5 ? 0 : 1
      fields.push(newEntry)
    }

    hints.x = calcXHints(dimX, fields)
    hints.y = calcYHints(dimX, dimY, fields)
    started = true
  }

  // updates board variables
  function updateDimX(e: UpdateFunction) {
    started = false
    dimX = +e.currentTarget.value
  }
  function updateDimY(e: UpdateFunction) {
    started = false
    dimY = +e.currentTarget.value
  }
  function updateDensity(e: UpdateFunction) {
    started = false
    density = +e.currentTarget.value
  }

  const updateFunctions = {dimX: updateDimX, dimY: updateDimY, density: updateDensity}

</script>
<div class='centered'>
  <div class='container'>
    <div class='optionsWrapper'>
      <GameTitle />    
      <OptionSelection {dimX} {dimY} {density} {buildPattern} {updateFunctions}/>
    </div>
    {#if started}
      <div class='gameWrapper'>
        <div class='alignmentPlaceholder'></div>
        <XHints {dimY} {hints}/>
        <YHints {dimX} {hints}/>
        <Pattern {dimX} {fields} {solutionTry}/>
        <div class='alignmentPlaceholder'></div>
        <CheckSolutionButton {fields} {solutionTry} {setSolved}/>
      </div>    
      {/if}
    <div class='alignmentPlaceholder'></div>
    {#if solved == 1 || solved == -1}
      <div class='result'>{solved == 1 ? 'noice!' : 'whoopsie'}</div>
    {/if}
  </div>
</div>

<style lang="scss">
  :root {
    background: rgb(232, 175, 175);
    font-family: Bahnschrift;
  }
  .centered {
    margin-top: 50px;
    width: 100vw;
    display: flex;
    justify-content: center;
  }
  .container {
    margin: 20px 20px;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 20px;
    width: fit-content;
  }
  .optionsWrapper {
    margin-inline: auto;
    justify-content: center;
  }
  .gameWrapper {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    border-radius: 10px;
    padding: 20px 20px;
    background: white;
    width: fit-content;
  }
  .result {
    // margin-top: 10px;
    margin: 10px auto;
    padding: 5px 10px;
    background: white;
    border: none;
    border-radius: 10px;
  }
</style>