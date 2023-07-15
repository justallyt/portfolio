import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
import { gsap } from "gsap"
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

   let initial, done = false, prevTimeStamp
   console.log(preloaderBar)
    const playLoader = (timeStamp) => {
            if(initial === undefined){
                  initial = timeStamp
            }

            const elapsed = timeStamp - initial;

            if(prevTimeStamp !== timeStamp){
                  const count = Math.min(0.1 * elapsed, 100);

                  if(preloaderBar !== undefined){
                           preloaderBar.current.style.width = `${count}%`
                  }
                  if (count === 100) done = true
            }

            if(!done){
                   window.requestAnimationFrame(playLoader(2000))
            }
    }

    window.addEventListener("load", () => {
             window.requestAnimationFrame(playLoader(2000))
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