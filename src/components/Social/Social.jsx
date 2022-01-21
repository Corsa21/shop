import './Social.scss';

export default function Social(props) {
  return (
        <div className="social">
            <img className='social__img' src={props.image} alt="social" />
        </div>
  );
}
