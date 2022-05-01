import { useEffect } from 'react';

import './App.css';

const App = () => {
    useEffect(() => {
        window.addEventListener("scroll", function (e) {
          const target = document.querySelectorAll(".scroll");
        
          let index = 0,
            length = target.length;
        
          for (index; index < length; index++) {
            let pos = window.pageYOffset * target[index].dataset.rate;
        
            if (target[index].dataset.direction === "horizontal") {
              let posX = window.pageYOffset * target[index].dataset.ratex;
              let posY = window.pageYOffset * target[index].dataset.ratey;
        
              target[
                index
              ].style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
            } else {
              target[index].style.transform = `translate3d(0px, ${pos}px, 0px)`;
            }
          }
        });
    },[]);

  return (
    <>
      
    </>
  );
}

export default App;
