import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


const CarouselComp = () => {
    const slides = [
        {
          url:'https://www.unite.ai/wp-content/uploads/2022/03/ai-education-tools.png'
        },
        {
          url:'https://www.unite.ai/wp-content/uploads/2022/03/ai-education-tools.png'
        },
        {
          url: 'https://wallpapers.com/images/hd/english-2103-x-900-wallpaper-l27103xva25mpf08.jpg'
        },
        {
          url: 'https://pbs.twimg.com/media/GIVfHKObMAAvf50.jpg:large'
        },
        {
          url: 'https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          url: 'https://mediatheory.net/wp-content/uploads/2023/10/cultural-hybridity.webp',
        },
    
        {
          url: 'https://icaccs.sece.ac.in/images/sece2.jpg',
        },
        {
          url: 'https://icaccs.sece.ac.in/images/sece3.jpg',
        },
        {
          url:'https://icaccs.sece.ac.in/images/sece4.jpg'
        }
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
    
      return (
        <div className='w-100 h-[780px] w-full m-auto py-16 px-4 relative group'>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
          ></div>
       
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
        
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
              
              </div>
            ))}
          </div>
        </div>
      );
}

export default CarouselComp