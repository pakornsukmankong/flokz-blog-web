import ReactQuill from 'react-quill'

function CreateBlogContainer() {
  return (
    <>
      <div className="my-3">
        <label
          htmlFor="default-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Title
        </label>
        <input
          type="text"
          id="default-input"
          placeholder="Your Title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="category"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
          Select category
        </label>
        <select
          id="category"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option defaultValue>Choose a categories</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Fashion">Fashion</option>
          <option value="Music">Music</option>
        </select>
      </div>

      <div className="flex flex-col mb-3">
        <label
          className="mb-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          htmlFor="file_input">
          Upload cover image
        </label>
        <input
          id="file_input"
          type="file"
          className="w-max text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-800 file:text-white
      hover:file:bg-blue-500
    "
        />
      </div>
      <div className="mb-3">
        <ReactQuill theme="snow" placeholder="Your content" />
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          Back
        </button>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Publish
        </button>
      </div>
    </>
  )
}

export default CreateBlogContainer
