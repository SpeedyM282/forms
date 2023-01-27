import './style.scss';

function Checkbox({ label }) {
  return (
    <>
      <div className='form__checkbox__wrapper' >
        {label}:
        <input
          className='form__checkbox'
          type="checkbox"
          required
        />
      </div>
    </>
  )
}

export default Checkbox;