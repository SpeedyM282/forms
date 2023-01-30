import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import '../style.scss';

function Step5() {
  return (
    <>
      <div className='block__inputs' >
        <Input label='Username' type='text' status='disabled' />
        <Input label='Email' type='email' status='disabled' />
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