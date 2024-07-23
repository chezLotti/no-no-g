<script lang="ts"></script>

{#snippet syllable(
  {
    syllable, 
    classname
  }: {
    syllable: string, 
    classname: string
    }
  )
}
  <div class='box'>
    <span class='top left corner'></span>
    <span class='top right corner'></span>
    <span class={'center ' + classname}>
      {syllable}
    </span>
    <span class='bottom left corner'></span>
    <span class='bottom right corner'></span>
  </div>
{/snippet}

<div class='title'>
  {@render syllable({syllable: 'no', classname: 'x'})}
  {@render syllable({syllable: 'no', classname: 'empty'})}
  {@render syllable({syllable: 'g', classname: 'filled'})}
</div>

<style lang="scss">
  :root {
    --border-radius: 10px;
    --width: 50px;
    --height: 45px;
    --centerWidth: calc(var(--width) - 2*var(--border-radius));
    --centerHeight: calc(var(--height) - 2*var(--border-radius)); 
  }
  .title {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 15px;   
  }
  .box {
    width: var(--width);
    height: var(--height);
    margin-inline: 5px;
    border: none;
    border-radius: var(--border-radius);
    background: white;
    display: grid;
    grid-template-columns: 
      var(--border-radius) 
      var(--centerWidth) 
      var(--border-radius);
    grid-template-rows: 
      var(--border-radius) 
      var(--centerHeight) 
      var(--border-radius);
    justify-content: center;
    align-items: center;
  }
  .center {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    width: var(--centerWidth);
    height: var(--centerHeight);
    border: 1px solid grey;
    margin: 0 -1px;
    color: grey;
    font-weight: 700;
    text-align: center;
  }
  .x {
    position: relative;
    background: transparent;
    &::after {
      content: 'X';
      position: absolute;
      color: lightcoral;
      font-size: 30px;
      font-weight: 700;
      opacity: 0.7;
      line-height: 0;
      inset: 14px 8px;
    }
  }
  .empty {
    background: transparent;
  }
  .filled {
    background: grey;
    color: white;
  }
  .corner {
    height: var(--border-radius);
    width: var(--border-radius);
    box-sizing: border-box;
  }
  .left {
    grid-column: 1 / 2;
    border-right: 1px solid grey;
  }
  .right {
    grid-column: 3;
    border-left: 1px solid grey;
  }
  .top {
    border-bottom: 1px solid grey;
  }
  .bottom {
    grid-row: 3;
    border-top: 1px solid grey;
  }
</style>