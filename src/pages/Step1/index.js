import Button from '../../components/Button';
import Input from '../../components/Input';
import '../style.scss';

function Step1() {
  return (
    <>
      <div className='block__inputs'>
        <Input label='Username' type='text' />
        <Input label='Password' type='password' />
        <Input label='Confirm Password' type='password' />
      </div>
      <div className='block__buttons block__buttons__step-1'>
        <Button txt='Next' buttonState='active' />
      </div>
    </>
  );
}

export default Step1;