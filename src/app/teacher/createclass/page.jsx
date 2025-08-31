"use client"


export default function Page() {
  return (
    <div className="flex justify-center items-center gap-[10%]">
        <div>
          <button className="bg-white text-black p-[20px] rounded-2xl text-2xl"><h1>+ เพิ่มคลาส</h1></button>
        </div>
        <div className="w-[50vw] flex flex-col gap-[30px]">
          <input type='text' placeholder="🔍 ค้นหาคลาส" className="bg-[#CCCACA] rounded-3xl w-[100%] h-[50px] text-black flex items-center pl-[20px] mt-[40px] "></input>
          <div className="w-[100%] bg-white h-[60vh] rounded-2xl"></div>
        </div>
    </div>
  )
}