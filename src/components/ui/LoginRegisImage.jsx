function LoginRegisImage({ src, wSize, hSize }) {
  return (
    <>
      <div className="md:flex lg:flex md:justify-end hidden lg:mr-[10rem] ">
        <div className="w-[15rem] h-[26rem] bg-[#011983] z-0 ml-31 fadeInAnima">
          <div>
            <img
              className={`fadeInDownAnima ${wSize} ${hSize} rounded-lg transition-all duration-300 blur-[2px] hover:blur-none z-10 hidden md:block md:absolute md:top-[8rem] md:right-[3rem] lg:top-[9.5rem] lg:right-[15rem]`}
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
  )
}

export default LoginRegisImage
