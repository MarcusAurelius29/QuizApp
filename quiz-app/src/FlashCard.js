import React , {useState , useEffect , useRef} from 'react'


export default function FlashCard( {flashcard}) {
    const [ flip, setFlip] = useState(false) // because first we want front side
    const [height , setHeight] = useState('initial')
    
    const frontEl = useRef()
    const backEl = useRef()

    function setMaxHeight() {
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = frontEl.current.getBoundingClientRect().height
        Math.max(frontHeight, backHeight , 100)
    }

    useEffect( () => {
        
    } , [flashcard.question , flashcard.answer , flashcard.option])

    // below is the example of dynamic classes
    return (
    <div
    className={`card ${flip ? 'flip' : ''}`} 
    onClick={() => setFlip(!flip)}
    >

        <div className="front">
            {flashcard.question}
            <div className="flashcard-options">
                {flashcard.options.map(option => {
                    return <div className="flashcard-option">
                        {option}
                    </div>
                })}
            </div>
        </div>

        <div className="back" ref={backEl}>{flashcard.answer}</div>

    
    </div>
  )
}
