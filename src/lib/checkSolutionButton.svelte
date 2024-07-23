<script lang="ts">
  let {
    fields, 
    solutionTry, 
    setSolved
  }: {
    fields: number[]
    solutionTry: number[]
    setSolved: (correct: boolean) => void
  } = $props()
  
  function checkSolution() {
    let checkedSolution: number[] = []
    fields.forEach((field, index) => {
      const solvedField = solutionTry[index] == 1 ? 1 : 0
      checkedSolution.push(field - solvedField)
    })
    setSolved(checkedSolution.some((elem) => elem <= 0))    
  }
</script>

<div style='display: flex; justify-content: center;'>
  <button onclick={() => checkSolution()} class='check'>Check</button>
</div>

<style lang="scss">
  .check {
    border-radius: 10px;
    background: lightcoral;
    border: none;
    color: white;
    padding: 5px 10px;
    margin: 10px 10px 0 10px;
    border: 1px solid transparent;
    &:hover {
      background: white;
      color: black;
      border: 1px solid grey;
    }
  }

</style>