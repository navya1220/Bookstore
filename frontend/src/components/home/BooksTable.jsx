import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-separate border-spacing-2 min-w-[600px]">
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-md px-2 py-1">
              No
            </th>
            <th className="border border-slate-600 rounded-md px-2 py-1">
              Title
            </th>
            <th className="border border-slate-600 rounded-md px-2 py-1 hidden md:table-cell">
              Author
            </th>
            <th className="border border-slate-600 rounded-md px-2 py-1 hidden md:table-cell">
              Publish Year
            </th>
            <th className="border border-slate-600 rounded-md px-2 py-1">
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="h-10">
              <td className="border border-slate-700 rounded-md text-center px-2">
                {index + 1}
              </td>
              <td className="border border-slate-700 rounded-md text-center px-2">
                {book.title}
              </td>
              <td className="border border-slate-700 rounded-md text-center px-2 hidden md:table-cell">
                {book.author}
              </td>
              <td className="border border-slate-700 rounded-md text-center px-2 hidden md:table-cell">
                {book.publishYear}
              </td>
              <td className="border border-slate-700 rounded-md text-center px-2">
                <div className="flex justify-center gap-4">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
