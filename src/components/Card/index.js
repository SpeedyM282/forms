import './style.scss';

function Card({ heading, cost, period }) {
  return (
    <div className="card" >
      <h2 className='card__heading' >{heading}</h2>
      <div className='card__text__wrapper' >
        <p className={`card__text bold`} >Some text here</p>
        <p className={`card__text ${cost !== 'Free' ? 'bold' : ''}`} >Some text here</p>
        <p className={`card__text ${cost !== 'Free' && period !== 'month' ? 'bold' : ''}`} >Some text here</p>
      </div>
      <div>
        <h2 className='card__cost' >{cost}</h2>
        {
          cost !== "Free" &&
          <span className='card__period' >per {period}</span>
        }
      </div>
    </div>
  );
}

export default Card;