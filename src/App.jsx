import './App.css';

function App() {
  return (
    <div className="flex bg-gray-100 ">
      <Sidebar />
      <MainContent />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="transition-all duration-500 drop-shadow-md bg-white hover:w-1/5 w-16 h-screen p-4 group">
      {/* Logo */}
      <div className=" h-16 w-full flex items-center justify-center">
        <div className="bg-blue-800 text-white h-8 rounded-xl px-4 hover:text-teal-400">
          <span className="cursor-pointer hidden group-hover:inline">Webinar<span className="text-blue-300">.gg</span></span>
          <span className="group-hover:hidden">W</span>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="bg-gray-100 mt-4 h-12 w-full flex items-center hover:bg-gray-300 cursor-pointer group">
        <img src="./home.svg" className="h-8 ml-4" alt="Home Icon" />
        <span className="ml-4 hidden group-hover:inline">Home</span>
      </div>
      <div className="bg-gray-100 mt-4 h-12 w-full flex items-center hover:bg-gray-300 cursor-pointer group">
        <img src="./people.svg" className="h-8 ml-4" alt="Webinars Icon" />
        <span className="ml-4 hidden group-hover:inline">Webinars</span>
      </div>
      <div className="bg-gray-100 mt-4 h-12 w-full flex items-center hover:bg-gray-300 cursor-pointer group">
        <img src="./billing.svg" className="h-8 ml-4" alt="Billing Icon" />
        <span className="ml-4 hidden group-hover:inline">Billing</span>
      </div>
      <div className="bg-gray-100 mt-4 h-12 w-full flex items-center hover:bg-gray-300 cursor-pointer group">
        <img src="./user.svg" className="h-8 ml-4" alt="User Management Icon" />
        <span className="ml-4 hidden group-hover:inline">User Management</span>
      </div>
      <div className="bg-gray-100 mt-4 h-12 w-full flex items-center hover:bg-gray-300 cursor-pointer group">
        <img src="./settings.svg" className="h-8 ml-4" alt="Settings Icon" />
        <span className="ml-4 hidden group-hover:inline">Settings</span>
      </div>
    </div>
  );
}


function MainContent() {
  return (
    <div className="w-full ">
      <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMmKcQQdpsMy1BLqZ06gefx2RjJfxpernAA&s" className="bg-black w-full h-36"></img></div>
      <div className="flex flex-wrap lg:flex-nowrap">

        {/* Profile Div */}
        <div className="bg-white drop-shadow-xl rounded-xl w-full sm:w-2/5 lg:w-1/5 h-auto m-4 -translate-y-12 p-4">
          <div className="mt-4 flex justify-center">
            <img src="./pfp.jpeg" className="rounded-xl h-32" alt="Profile" />
          </div>
          <div className="flex justify-center mt-4 font-bold text-center">
            Sushant Mishra
          </div>
          <div className="flex justify-center mt-4 text-md text-gray-500 text-center">
            mishrasushant101@gmail.com
          </div>
          <div className="flex justify-center text-md text-gray-500 text-center">
            9667777865
          </div>
          <div className="flex justify-center text-md mt-4 text-gray-500 text-center">
            Delhi, India
          </div>
        </div>

        {/* Webinar Div */}
        <div className="bg-white drop-shadow-xl rounded-xl p-4 w-full lg:w-2/4 h-auto m-4 mt-8">
          <div className="bg-gray-100 h-12 w-full rounded-md flex items-center p-2 flex-wrap">
            <img src="./calender.svg" className="h-7" alt="Calendar Icon" />
            <div className="text-base sm:text-lg md:text-xl px-4 font-bold truncate">
              Wednesday, 1st January 2025
            </div>
            <div className="ml-auto flex space-x-2">
              <img src="left.svg" className="h-6" alt="Previous" />
              <img src="right.svg" className="h-6" alt="Next" />
            </div>
          </div>
          <div className='bg-white content-center h-16 mt-4 w-full border-b-4 rounded-md flex'>
            <div className='bg-white font-bold text-lg border-teal-300 border-r-4 h-12 w-1/6'>11:30 AM <div className='font-medium text-gray-500 text-sm'>11:30 AM</div></div>
            <div className='ml-2 font-medium text-gray-500 '>Live   <div className='font-bold text-lg text-black'>UX Webinar</div></div>
          </div>
          <div className='bg-white content-center h-16 mt-4 w-full border-b-4 rounded-md flex'>
            <div className='bg-white font-bold text-lg border-teal-300 border-r-4 h-12 w-1/6'>11:30 AM <div className='font-medium text-gray-500 text-sm'>11:30 AM</div></div>
            <div className='ml-2 font-medium text-gray-500'>Upcoming<div className='font-bold text-lg text-black'>My First Webinar</div></div>
          </div>
          <div className='bg-white content-center h-16 mt-4 w-full border-b-4 rounded-md flex'>
            <div className='bg-white font-bold text-lg border-teal-300 border-r-4 h-12 w-1/6'>11:30 AM <div className='font-medium text-gray-500 text-sm'>11:30 AM</div></div>
            <div className='ml-2 font-medium text-gray-500'>Upcoming<div className='font-bold text-lg text-black'>Important Webinar</div></div>
          </div>
          <div className='bg-white content-center h-16 mt-4 w-full border-b-4 rounded-md flex'>
            <div className='bg-white font-bold text-lg border-teal-300 border-r-4 h-12 w-1/6'>11:30 AM <div className='font-medium text-gray-500 text-sm'>11:30 AM</div></div>
            <div className='ml-2 font-medium text-gray-500'>Upcoming<div className='font-bold text-lg text-black'>Webinar 1</div></div>
          </div>
        </div>

        {/* Schedule Webinar Div */}
        <div className="bg-white drop-shadow-xl rounded-xl w-full lg:w-1/4 h-64 m-4 mt-8">
          <div className='flex justify-around mt-8'>
            <div className='hover:cursor-pointer'>
              <img src="./meeting.svg" className='h-16 bg-teal-300 hover:bg-teal-200 rounded-xl ml-8'></img>
              <div className='font-bold'>Schedule a webinar</div>
            </div>
            <div className='hover:cursor-pointer'>
              <img src="./newmeeting.svg" className='h-16 bg-teal-300 hover:bg-teal-200 rounded-xl ml-8'></img>
              <div className='font-bold'>Schedule a webinar</div>
            </div>
          </div>
          <div className='flex justify-around mt-8' >
            <div className='hover:cursor-pointer'>
              <img src="./recordings.svg" className='h-16 bg-teal-300 hover:bg-teal-200 rounded-xl ml-8'></img>
              <div className='font-bold'>Open Recordings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

