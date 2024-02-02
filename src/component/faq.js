import React, { useState } from 'react'
import styled from 'styled-components'

const FaqWrapper = styled.div`
width: 90%;
margin: auto;
#heading{
    text-align:center;
    font-size: 32px;
    margin-bottom: 64px;
}

.question-answer{
    margin-top: 16px;
    background: #2D6A4F;
    color: white;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 8px;
    .question{
        font-size: 24px;
        .tab {
            display: inline-block;
            margin-left: 40px;
        }
    }
    .answer{
        padding: 8px 0px;
            margin-left: 60px;

    }
}

`

function Faq() {
    const [selectedState, setSelectedState] = useState(null);
    const questionanswer = [
        {
            question: "Is it safe to consume for everyone?",
            answer: "Yes, stinging nettle (Urtica dioica) is generally safe to consume when properly prepared. The young leaves of the plant are commonly used in various culinary applications, and they are known for their nutritional content. Stinging nettle is rich in vitamins, minerals, and antioxidants. "
        },
        {
            question: "Is stinging nettle considered as a functional food?",
            answer: "Yes, stinging nettle is often considered a functional food. Functional foods are those that provide health benefits beyond basic nutrition. Stinging nettle is valued for its nutritional content and potential health-promoting properties, making it more than just a source of calories."
        },
        {
            question: "Which part of the stinging nettle is used for consumption?",
            answer: "The young leaves and tender shoots of the stinging nettle plant are the parts most commonly used for consumption. These parts are harvested before the plant reaches maturity and typically before it flowers. The leaves and shoots are preferred because they are less fibrous and have a milder flavor compared to older parts of the plant."
        },
        {
            question: "What are those antioxidants properties of nettle bud?",
            answer: "Is it safe to consume for everyone?Is it safe to consume for everyone? Is it safe to consume for everyone ? Is it safe to consume for everyone ? Is it safe to consume for everyone ? Is it safe to consume for everyone ? "
        },
        {
            question: "How oil is extracted from nettle leaves",
            answer: "Stinging nettle oil can be extracted from the leaves through a process known as infusion or maceration. This method involves steeping the plant material in a carrier oil to extract its beneficial compounds."
        }
    ]

    const onSelectStateChanged = (state) =>{
        if(selectedState === state){
            setSelectedState(null);
        }else{
            setSelectedState(state)
        }
        

    }
    return (
        <FaqWrapper>
            <p id='heading'>Frequently Asked Question</p>
            {questionanswer.map((list, index) =>
                <div className='question-answer' onClick={()=>onSelectStateChanged(index)} key={index}>
                    <p className="question">+ <span class="tab"></span>{list?.question}</p>
                    {index === selectedState && <p className="answer">{list?.answer}</p>}
                </div>

            )}


        </FaqWrapper>
    )
}

export default Faq
