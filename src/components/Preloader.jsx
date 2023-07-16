import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
import { gsap, Power4 } from "gsap"
const Preloader = () => {
    const [preloaderCols, setPreloaderCols] = useState()
    const [preloaderLine, setPreloaderLine] = useState()
    const [preloaderBar, setPreloaderBar] = useState()
    const colsRef = useRef()
    const LineRef = useRef()
    const barRef = useRef()

    useEffect(() => {
           setPreloaderCols(colsRef.current);
           setPreloaderBar(barRef.current);
           setPreloaderLine(LineRef.current);
    }, [])

   let initial, 
   done = false,
    prevTimeStamp, 
    initialLoadT = new Date().getTime(),
    tl = gsap.timeline()
  
    const playLoader = (timeStamp) => {
            const loadAfterT = new Date().getTime();
            const pageload = initialLoadT - loadAfterT
            
            if(initial === undefined){
                  initial = timeStamp
            }

            const elapsed = timeStamp - initial;

            if(prevTimeStamp !== timeStamp){
                  const count = Math.min(0.1 * elapsed, 100);

                  if(preloaderBar !== undefined){
                           preloaderBar.style.width = `${count}%`
                  }
                  if (count === 100){
                         done = true
                        
                         if(preloaderBar && preloaderLine && preloaderCols){
                                  tl.to(preloaderBar, {
                                          opacity: 0,
                                          duration: 0.5
                                  })
                                  tl.to(preloaderCols.querySelector(".name-box h2"), {
                                         opacity: 0,
                                         duration: 0.3
                                  })
                                  tl.to(preloaderLine, {
                                         width: '100%',
                                         duration: 0.8,
                                         ease: Power4.easeOut,
                                  })
                          
                                  if(preloaderCols){
                                        const cols = preloaderCols.querySelectorAll(".preloader-col")
                                        for(let i = 0 ; i < cols.length; i++){
                                               tl.to(cols[0], {
                                                      y: '-100%',
                                                     duration: 0.5
                                                })
                                              tl.to(cols[1], {
                                                      y: '100%',
                                                      duration: 0.5
                                              })
                                         }
                                 }
                         }
                  }
            }

            if(elapsed < Math.abs(pageload)){
                    prevTimeStamp = timeStamp;

                    if(!done){
                           window.requestAnimationFrame(playLoader)
                    }
            }
    }

    window.addEventListener("load", () => {
             window.requestAnimationFrame(playLoader)
    })
  return (
    <div className="preloader">
             <div className="preloader-cols" ref={colsRef}>
                       <div className="preloader-col">
                                  <div className="preloader-line"ref={LineRef} ></div>
                       </div>
                       <div className="preloader-col"></div>
                        <div className="preloader-content">
                                   <div className="name-box">
                                             <h2>Albert Okundi <span className="preloader-dot"></span></h2>
                                             <div className="progress-bar" ref={barRef}></div>
                                   </div>
                        </div>
             </div>
    </div>
  )
}

export default Preloader