import React, { useEffect, useState } from "react";
// import list from '../../public/list.json'
import Cards from './Cards'
import axios from "axios";
import {Link} from "react-router-dom"
const Course = () => {
    const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className="mt-28 item-center text-center justify-center">
            <h1 className='text-2xl  md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here :)</span></h1>
            
            <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium veniam est omnis amet aliquid porro culpa. Expedita labore similique reiciendis voluptas dignissimos reprehenderit quasi, aspernatur a facere? Reprehenderit, similique?</p>
            <Link to="/">
                <button className='text-white bg-pink-500 hover:bg-pink-800 duration-200 px-4 py-2 mt-6 rounded-md'>Back</button> 
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                book.map((item)=>(
                    <Cards item={item} key={item.id} />
                ))
            }
        </div>

    </div>
    </>
    
  )
}

export default Course
