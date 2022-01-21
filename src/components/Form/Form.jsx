import './Form.scss'

export default function Form() {
  return (
    <form className='form' action="#">
        <input className='form__input' type="email" placeholder='Enter Your Email'/>
        <button className='form__btn' >Subscribe</button>
    </form>
  );
}
