const VideoTitle = ({title, overview}) => {
  return (

    <div className="w-screen aspect-video absolute text-white bg-gradient-to-r from-black pt-[20%] px-6 md:px-24">
                        {/* <h1>Video Title</h1> */}

<h1 className="text-5xl font-bold">{title}</h1>
<p className="hidden md:inline-block py-6 text-sm w-2/4">{overview}</p>

<div className="flex items-center">
    <button className=" flex items-center gap-0.5 bg-white text-black font-bold p-2 px-4 text-xl hover:opacity-80 rounded-sm cursor-pointer"> <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
    <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"/>

</svg> 


Play</button>

    <button className="flex items-center gap-0.5 mx-2 bg-gray-500 text-white font-bold  p-2 px-4 text-xl opacity-80 rounded-sm cursor-pointer">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
</svg>


      More Info</button>
</div>

    </div>
  );
};

export default VideoTitle;
