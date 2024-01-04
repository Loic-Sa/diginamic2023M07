
const Counter = ({ counter, onClickLess }) => {


  /**
   * Gestionnaire de l'événement click sur le bouton moins.
   * Appel du setter de counterValue
   * @param {Event} event 
   * @param {String} name 
   */
  /* function handleClickLess(event, name) {
    setCounterValue((value) => value - 1)
  } */
  return (
    <section>
      <button href="."
        onClick={(event) => { onClickLess(counter.id) }}
      >-</button>
      <button>{counter.value}</button>
      <button
        onClick={() => { }}
      >+
      </button>
    </section>
  );
}

export default Counter;