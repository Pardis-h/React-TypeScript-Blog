function BlogTables({ blogs }) {
  return (
    <div className="bg-white ">
      <div className="container mx-auto p-6 my-8">
        <div className="rounded overflow-hidden shadow">
          <table className="  w-full table-auto rounded min-w-full">
            <thead className="bg-gray-50 rounded-s">
              <tr>
                <th className="border-b hidden md:table-cell border-gray-300 text-left font-semibold p-4 ps-8 text-gray-800">
                  ID
                </th>
                <th className="border-b hidden md:table-cell border-gray-300 text-left font-semibold p-4 text-gray-800">
                  Blog Author
                </th>
                <th className="border-b hidden md:table-cell border-gray-300 text-left font-semibold p-4 text-gray-800">
                  Blog Title
                </th>
                <th className="border-b md:hidden border-gray-300 text-left font-semibold p-4 text-gray-800">
                  Blog(ID - Author/ Title)
                </th>
                <th className="border-b border-gray-300 text-right font-semibold p-4 text-gray-800">
                  Edit
                </th>
                <th className="border-b border-gray-300 text-right font-semibold p-4 pe-8 text-gray-800">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {blogs.map((post) => (
                <tr key={post.id}>
                  <td className="border-b hidden md:table-cell border-gray-300 text-gray-600 p-4 ps-8">
                    {post.id}
                  </td>
                  <td className="border-b hidden md:table-cell border-gray-300 text-gray-600 p-4">
                    {post.author.name}
                  </td>
                  <td className="border-b hidden md:table-cell border-gray-300 text-gray-600 p-4">
                    {post.title}
                  </td>
                  <td className="border-b md:hidden  border-gray-300 text-gray-600 p-4">
                    <div> <span>{post.id}</span> - {post.author.name} /</div>

                    <div>{post.title}</div>
                  </td>
                  <td className="border-b border-gray-300 text-green-600 p-4 text-right">
                    Edit
                  </td>
                  <td className="border-b border-gray-300 text-red-600 p-4 pe-8 text-right">
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BlogTables;
