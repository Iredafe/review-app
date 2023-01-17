import Card from './shared/Card';

function ReviewItem({ item }) {
  return <Card rating={item.rating} text={item.text} />;
}

export default ReviewItem;
