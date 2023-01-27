import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import '../style.scss';

function Step5() {
  return (
    <>
      <div className='block__inputs block__inputs__step-5' >
        <Input label='Username' type='text' status='disable' />
        <Input label='Email' type='email' status='disable' />
        <Checkbox label='By checking it I confirm my personal data processing' />
        <Checkbox label='I accept all cookies' />
      </div>
      <div className='block__buttons' >
        <Button txt='Previous' buttonState='active' />
        <Button txt='Next' buttonState='active' />
      </div>
    </>
  );
}

export default Step5;