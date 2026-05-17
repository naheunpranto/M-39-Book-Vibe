import { use } from "react";
import { useLoaderData, useParams } from "react-router";

// const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  const { bookId:bookParamsId } = useParams();
  console.log(bookParamsId, "bookId");

  // const books = use(booksPromise);
  const books = useLoaderData();
  console.log(books, "books ");

  const expectedBook = books.find((book) => book.bookId == Number(bookParamsId));
  console.log(expectedBook, "expectedBook");

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing
  } = expectedBook;

  return (
    <div className="grid grid-cols-2 bg-base-100 container mx-auto mt-14">
      <figure className="bg-gray-100 rounded-2xl w-143.25 h-177.75 flex items-center justify-center">
        <img
          src={image}
          alt="Album"
          className="h-146 w-106.25 p-12"
        />
      </figure>
      <div className="card-body space-y-6">
        <h2 className="card-title font-bold text-[40px]">{bookName}</h2>
        <h2 className="card-title font-medium text-[20px]">By: {author}</h2>
        <div className="border-y border-gray-300">
            <p className="font-medium text-[20px] my-3">{category}</p>
        </div>
        <p ><span className="font-bold">Review: </span>{review}</p>
        <div className="flex items-center gap-3"><span className="font-bold">Tag: </span>
          {tags.map((tag, ind) => (
            <div key={ind} className="badge text-[#23BE0A] bg-green-50 rounded-[30px] flex">
              #{tag}
            </div>
          ))}
        </div>
        <div className="border-t border-gray-300 space-y-3">
          <div className="flex justify-between items-center gap-2 mt-6">
            <span>Number of pages: </span> <span className="font-semibold">{totalPages}</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span>Publisher: </span> <span className="font-semibold">{publisher}</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span>Year of Publishing: </span> <span className="font-semibold">{yearOfPublishing}</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span>Rating: </span> <span className="font-semibold">{rating}</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn">Read</button>
            <button className="btn btn-info text-white">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
