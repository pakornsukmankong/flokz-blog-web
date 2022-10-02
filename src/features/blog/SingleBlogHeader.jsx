import Avatar from '../../components/ui/Avatar'

function SingleBlogHeader() {
  return (
    <div className="flex flex-col gap-2 mb-5">
      <button
        type="button"
        class="w-max text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Lifestyle
      </button>
      <h5 className="mb-1 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="mb-1 text-[15px] text-gray-400 dark:text-white">
        Jun 21, 2021 - 11min ago
      </p>
      <img
        className="rounded-t-lg w-[100%] h-[25rem]"
        src="https://res.theconcert.com/c_thumb/1c8a8b27a58cdeeea9ac31da5fd1bad14/1.jpg"
        alt=""
      />

      <div className="flex justify-start items-center mt-2">
        <Avatar wSize={'w-7'} />
        <p className="text-xs ml-2 font-normal text-gray-900 dark:text-gray-400">
          Your Username
        </p>
      </div>
    </div>
  )
}

export default SingleBlogHeader
