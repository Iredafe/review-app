import Card from './shared/Card';

function ReviewItem({ item }) {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

export default ReviewItem;
