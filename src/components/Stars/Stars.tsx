import './Stars.css';
import { Star } from './Star';

interface StarsProps {
  count: number;
}

export function Stars({ count }: StarsProps) {
  return (
    <ul className="card-body-stars u-clearfix">
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <Star key={index + 1} />
        ))}
    </ul>
  );
}