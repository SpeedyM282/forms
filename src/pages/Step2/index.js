import Card from '../../components/Card';
import Button from '../../components/Button';
import '../style.scss';

function Step2() {
  return (
    <>
      <div className='block__cards' >
        <Card heading='Basic' cost='Free' />
        <Card heading='Standard' cost='$2.50' period='month' />
        <Card heading='Premium' cost='$20.0' period='year' />
      </div>
      <div className='block__buttons'>
        <Button txt='Previous' buttonState='active' />
        <Button txt='Next' buttonState='active' />
      </div>
    </>
  );
}

export default Step2;