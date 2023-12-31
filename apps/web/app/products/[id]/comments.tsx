import { Comment } from "../../../types/types";

const Comments = ({ comments }) => {
  return (
    <div>
      <div className="mt-8 p-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Comments</h2>

        <div className="mb-4 flex items-center">
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full py-2 px-4 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Add
          </button>
        </div>
        <div className=" text-white rounded">
          <ul className="list-disc pl-4">
            {comments?.map((comment: Comment) => (
              <li className="bg-gray-700 rounded-md p-2 mb-2 text-white">
                <span className="font-semibold">{comment.user}:</span>{" "}
                {comment.comment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Comments;
