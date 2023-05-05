import React from "react"

export default function App() {
    function boxArray() {
        const boxes = new Array(10).fill(0).map((item, index) => {
            const num = Math.floor((Math.random() * 6) + 1)
            return (
                <div 
                    className="box"
                    key={index}
                >
                        {num}
                </div>
            )
        })
        return boxes
    }
    const [boxes, setBoxes] = React.useState(boxArray)
    function updateBoxes() {
        const NewBoxArray = boxArray()
        setBoxes(oldBoxArray => NewBoxArray)
    }
    
    return (
        <main>
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="box-container">
                {boxes}
            </div>
            <button 
                onClick={updateBoxes}
            >
                Roll
            </button>
        </main>
    )
}