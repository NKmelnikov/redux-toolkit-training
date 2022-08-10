import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';

function CurrencyCard({ el }: { el: string }) {
  const { addFavorite, removeFavorite } = useActions();

  const { selectedCurrencies } = useAppSelector((state) => state.currency);

  const handleClick = (e: any) => {
    console.log(selectedCurrencies);
    const element = e.target;

    if (element.classList.contains('selected')) {
      removeFavorite(element.textContent);
    } else {
      addFavorite(element.textContent);
    }
    element.classList.toggle('selected');
  };

  const isSelected = selectedCurrencies.filter((item) => item === el)[0];

  const cls = `currencies__card ${isSelected && 'selected'}`;

  return (
    <div className={cls} onClick={handleClick}>
      {el}
    </div>
  );
}

export default CurrencyCard;
