import {motion} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import './Carrousel-Destaques.css'

// IMAGENS
import img1 from '../assets/img-carrousel/brownie1.jpg';
import img2 from '../assets/img-carrousel/brownie2.jpg'
import img3 from '../assets/img-carrousel/brownie3.jpg'

const imgs = [img1, img2, img3];


function CarrouselDestaques() {
  const carrousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {

      // CONDIÇÃO QUE GARANTE QUE O CARROUSEL NÃO ULTRAPASSE AS LATERAIS.
    if(carrousel.current) {
      setWidth(carrousel.current.scrollWidth - carrousel.current.offsetWidth)
    }

  }, [])



  return (
          <motion.div className='carrousel' whileTap={{cursor: "grabbing"}}>

          <motion.div className='carrousel-imgs' drag="x" dragConstraints={{ right: 0, left: -width}}  draggable="false" onDragStart={(e) => e.preventDefault()}
            >

                {imgs.map((item, index) => (
                  <motion.div key={index} className='carrousel-img-slider'>
                        <img src={item} alt={`slider ${index}`} />
                  </motion.div>
                ))}


        </motion.div>
          </motion.div>
  );
}

export default CarrouselDestaques;
