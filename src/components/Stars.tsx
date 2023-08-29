import './Stars.css';
import Star from './Star';

const Stars = ({ count }: { count: number }) => {
  const invalid: boolean = count < 1 || count > 5;
  const countArray: number[] = [...new Array(count).fill(0)];
  return invalid ? null : (
    <ul className="card-body-stars u-clearfix">
      {countArray.map((star, i) => (
        <Star key={i} />
      ))}
    </ul>
  )
}

Stars.defaultProps = { count: 0 };

export default Stars;