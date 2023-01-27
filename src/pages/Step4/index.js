import Button from '../../components/Button';
import Input from '../../components/Input';
import '../style.scss';

function Step4() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 3;
  return (
    <>
      <div className='block__inputs block__inputs__step-3-4' >
        <Input label='Owner Name' type='text' />
        <Input label='Card Number' type='text' />
        <Input
          label='Expiration Date'
          type='month'
          min={`${year}-${month < 10 ? '0' + month : month}`}
        />
      </div>
      <div className='block__buttons' >
        <Button txt='Previous' buttonState='active' />
        <Button txt='Next' buttonState='active' />
      </div>
    </>
  );
}

export default Step4;