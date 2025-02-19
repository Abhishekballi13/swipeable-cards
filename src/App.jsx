import { useState } from "react";
import Card from "./Card"
import { cardData } from "./utils/cardsData"
import { motion ,useTransform,useMotionValue} from "framer-motion";

function App() {
  
  const [cardArr,setCardArr] = useState(cardData);
 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100">
      <h1 className="font-bold text-4xl text-center underline mb-6">Cards</h1>
      
      {/* Card Container */}
      <div className="relative w-72 h-96">
        {cardArr.map((card, index) => (
          <Card key={card.id} card={card} cardArr={cardArr} setCardArr={setCardArr} index={index} />
        ))}
      </div>
    </div>
  )
}

export default App
