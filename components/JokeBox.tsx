'use client'
import React, { useState } from 'react'
import { useToast } from "@/components/ui/use-toast"


const JokeBox = () => {
  const [joke, setJoke] = useState("Your joke appears here");
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast()

  const handleTopicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
  };

  const generateJoke = async(e: { preventDefault: () => void; }) =>{
    e.preventDefault();
    if(!topic){
        toast({
            title : "Enter a valid topic !"
        })
        return;
    }
    setLoading(true); 
    try {
        const response = await fetch(`/api/generate-joke?topic=${encodeURIComponent(topic)}`);
        const data = await response.json();
        if (response.ok) {
          setJoke(data.joke.content[0].text);
        } else {
          console.log("response failed")
        }
      } catch (err) {
        console.error('Error generating joke:', err);
      } finally {
        setLoading(false);
      } 
  }

  return (
    <div className='w-full flex justify-center mt-[120px]'>
        <div className='border-2 border-solid p-5 rounded-md sm:w-[40%] w-[90%]'>
            <div className="border-gray-150 border-[1px] shadow-md border-solid rounded-md px-3 py-2 flex justify-between">
            <input type="text" value={topic}  placeholder='Enter a topic' className='focus:outline-none w-full' onChange={handleTopicChange}/>
            <button className='bg-[#9DB2BF] py-2 px-3 rounded-md font-semibold' onClick={generateJoke}>{loading ? "Generating..." : "Generate"}</button>
            </div>
            <div className='border-gray-150 border-[1px] shadow-md border-solid rounded-md px-3 py-2 mt-3 h-52'>
                <p className='w-[100%] mb-3'>
                    {joke!="Your joke appears here" && joke.split(":")[0]}
                </p>
                <p className='w-[100%] font-semibold text-xl mb-1'>
                    {joke!="Your joke appears here" && joke.split(":")[1].split("?")[0]+"?"}
                </p>
                <p className='w-[100%] font-bold text-lg'>
                    {joke!="Your joke appears here" && joke.split("?")[1]}
                </p>
            </div>
        </div>
    </div>
  )
}

export default JokeBox