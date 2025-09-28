export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen w-full relative"
    >
      {/* Text overlay */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white ">
<div className="md:text-5xl text-3xl font-bold max-w-lg py-3">
        Explore, Learn, Innovate with TechSphere
    
    </div>        
    <div className="text-[#cacaca] text-sm md:text-xl font-bold max-w-lg py-3">
        Your gateway to machine Learning Web Development, cloud Computing, and more.....
      </div>

      <div className="flex flex-col md:flex-row w-9/12 gap-3 ">
        <button className="py-2  px-5 bg-[#09a99c] rounded  hover:bg-red-700 transition">explore Domains</button>
        <button className="py-2 px-5 bg-gray-500 rounded">Upcoming Events</button>

      </div>
      </div>
      
    </div>
  )
}
