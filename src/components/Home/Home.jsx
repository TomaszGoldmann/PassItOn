import React from "react";
// import {Scrollama, Step} from 'react-scrollama';
// import {useNavigate} from "react-router-dom";
import {Start} from "./HomeComponents/Start.jsx";
import {Benefits} from "./HomeComponents/Benefits.jsx";
import {About} from "./HomeComponents/About.jsx";
import {Organisations} from "./HomeComponents/Organisations.jsx";
import {Contact} from "./HomeComponents/Contact.jsx";
import {Info} from "./HomeComponents/Info.jsx";

// const ScrollamaDemo = () => {
//     const [currentStepIndex, setCurrentStepIndex] = useState(null);
//
//     // This callback fires when a Step hits the offset threshold. It receives the
//     // data prop of the step, which in this demo stores the index of the step.
//     const onStepEnter = ({data}) => {
//         setCurrentStepIndex(data);
//     };
//
//     return (
//         <Scrollama onStepEnter={onStepEnter} offset={0.5}>
//             <Step data={1}>
//                 <Start id="start" style={{background: "cornflowerblue", height: "100vh"}}/>
//             </Step>
//             <Step data={2}>
//                 <Info id="o co chodzi?" style={{background: "olive", height: "100vh"}}/>
//             </Step>
//             <Step data={2}>
//                 <About id="o nas" style={{background: "tomato", height: "100vh"}}/>
//             </Step>
//             <Step data={3}>
//                 <Organisations id="fundacja i organizacje" style={{background: "cornflowerblue", height: "100vh"}}/>
//             </Step>
//             <Step data={4}>
//                 <Contact id="kontakt" style={{background: "olive", height: "100vh"}}/>
//             </Step>
//         </Scrollama>
//     );
// };

// const ScrollActionDemo = () => {
//     const [position, setPosition] = useState(0)
//     const navigate = useNavigate();
//
//     useEffect( () => {
//         // Function to handle scroll events
//         const handleScroll = async () => {
//             // Get the current scroll position
//             const scrollY = window.scrollY;
//             // console.log("Scroll action triggered!" + scrollY);
//             if (position <= 845) {
//                 navigate("#section-1")
//                 console.log("1")
//             } else if (position > 845 && position < 1600){
//                 navigate("#section-2")
//                 console.log("2")
//             } else {
//                 navigate("#section-3")
//                 console.log("3")
//             }
//             await setPosition(scrollY)
//         };
//
//         // Add the scroll event listener when the component mounts
//         window.addEventListener("scroll", handleScroll);
//
//         // Remove the scroll event listener when the component unmounts
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);
//
//     return (
//         <h1 style={{position: 'fixed', top: `${position}`}}>
//             pozycja {position}
//         </h1>
//     )
// };


export const Home = () => {
    return (
        <>
            <Start id="start"/>
            <Benefits/>
            <Info id="o co chodzi?" style={{background: "olive", height: "100vh"}}/>
            <About id="o nas" style={{background: "tomato", height: "100vh"}}/>
            <Organisations id="fundacja i organizacje"/>
            <Contact id="kontakt"/>
        </>
    );
}
