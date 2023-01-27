import './style.scss';

function Radio({ label }) {
  return (
    <>
      <div className='form__radio__wrapper' >
        {label}:
        <input
          className='form__radio'
          type="radio"
          name='gender'
          required
        /> Male
        <input
          className='form__radio'
          type="radio"
          name='gender'
          required
        /> Female
      </div>
    </>
  )
}

export default Radio;