import {createContext, useState} from "react";
import animationData from '../loading.json'

export const AnimationContext = createContext()

export const AnimationProvider = ({children}) => {
    const [animation, setAnimation] = useState({isStopped: false, isPaused: false})

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <AnimationContext.Provider  value ={{animation, defaultOptions, setAnimation}}>
            {children}
        </AnimationContext.Provider>
    )
}