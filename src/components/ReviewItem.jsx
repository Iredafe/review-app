import Card from './shared/Card';

function ReviewItem({ item }) {
  return (
    <Card reverse={true}>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

export default ReviewItem;
