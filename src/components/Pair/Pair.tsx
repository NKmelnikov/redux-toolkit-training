function Pair({ pair } : {pair: {name: string, value: string}}) {

  const handleNumberFormat = (value: any) => {
    return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <div className="favorites__card">
      <div className='favorites__card favorites__card_name'>{pair.name} <div>:</div></div>
      &nbsp;
      <div className='favorites__card favorites__card_value'>{handleNumberFormat(pair?.value)} </div>
    </div>
  );
}

export default Pair;
