import './Advantage.scss';

export default function Advantage(props) {
  return (
    <div className="advantage">
        <img className='advantage__img' src={props.image} alt="image" />
        <div className="advantage__title">{props.title}</div>
        <div className="advantage__text">{props.text}</div>
    </div>
  );
}

