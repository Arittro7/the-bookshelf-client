import { Link } from 'react-router-dom';
import news1 from '../../assets/books/news-4.png'
// import news2 from '../../assets/books/news-2.png'
// import news3 from '../../assets/books/news-3.png'
// import news4 from '../../assets/books/news-4.png'

const NewsCard = ({news}) => {
  return (
    <div className='flex items-center justify-center py-10 gap-5 p-4 rounded-lg transition-shadow duration-300'>
      <div className='w-2/3' >
        <h1 className='text-2xl font-semibold'>{news.title}</h1>
      <h1>{news.description.slice(0, 60)} <Link to={'/news/${news.id'} className='text-blue-400'>Read More</Link></h1>
      </div>
      <div className='w-1/3'>
        <img className='w-' src={news1} alt="" />
      </div>
    </div>
  );
};

export default NewsCard;