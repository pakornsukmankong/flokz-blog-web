function LoginRegisImage({ src, wSize, hSize }) {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[15rem] h-[26rem] bg-[#011983] z-0 ml-31">
          <div>
            <img
              className={`${wSize} ${hSize} rounded-lg transition-all duration-300 blur-[2px] hover:blur-none z-10 absolute top-[8rem] right-[17rem]`}
              src={
                src ||
                'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png'
              }
              alt="cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginRegisImage;
