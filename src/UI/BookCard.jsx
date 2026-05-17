import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";


const BookCard = ({book}) => {
  return (
    <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm p-6 rounded-2xl">
      <figure className="p-6 bg-gray-100 rounded-2xl">
        <img src={book.image} alt={book.bookName} className="rounded-xl h-50" />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-3">
          {book.tags.map((tag, ind) => (
            <div key={ind} className="badge text-[#23BE0A] bg-green-50 rounded-[30px] flex">
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title text-2xl font-bold">{book.bookName}</h2>
        <p className="font-medium text-lg">{book.author}</p>

        <div className="card-actions justify-between border-t border-dashed pt-4 border-gray-300">
          <div className="badge font-medium text-[16px]">{book.category}</div>
          <div className="badge font-medium text-[16px]">
            {book.rating} <FaRegStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
