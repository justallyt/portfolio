import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
import { clearRequestInterval, requestInterval } from "../utils"
import { gsap } from "gsap"
const Preloader = () => {
    const [preloaderCols, setPreloaderCols] = useState()
    const [preloaderLine, setPreloaderLine] = useState()
    const [progressBar, setPreloaderBar] = useState()
    let start = 0, handle = {}, before = new Date().getTime()
    const colsRef = useRef()
    const LineRef = useRef()
    const barRef = useRef()

    useEffect(() => {
           setPreloaderCols(colsRef.current);
           setPreloaderBar(barRef.current);
           setPreloaderLine(LineRef.current);
    }, [])

    const runPreloader = () => {
           let after = new Date().getTime();
           const pageload = after - before;

           const loop = () => playLoader();
           requestAnimationFrame(loop);
           handle = requestInterval(loop, pageload)
    }

    const playLoader = () => {
          if(progressBar){
                  start = start + 20
                  progressBar.style.width = `${start}%`;

                  if(start === 100){
                        clearRequestInterval(handle);
                        progressBar.classList.add('remove');
                        start = null;

                        //start progress line
                        if(progressBar.classList.contains('remove')){
                              if(preloaderLine){
                                      preloaderLine.classList.add('active');
                              }
                        }
                  }
          }
    }

    window.addEventListener("load", runPreloader);
  return (
    <div className="preloader">
             <div className="preloader-cols" ref={colsRef}>
                       <div className="preloader-col">
                                  <div className="preloader-line active"ref={LineRef} ></div>
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