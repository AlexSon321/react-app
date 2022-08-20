import React, { useState } from 'react'

function FaqPage() {

    const [selected, setSelected] = useState(null)


    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }



    return (
        <div>
            <img className='pecho3' src="./pecho1.png" alt="" />
            <img className='pecho2' src="./pecho2.png" alt="" />
            <div className="faq">
                <h1>FAQ</h1>

                <div className="faq-container">
                    <input type="text" placeholder='Search...' />
                    <div className="accordion">
                        {data.map((item, i) => (
                            <div className="item">
                                <div className='title' onClick={() => toggle(i)}>
                                    <h3 >{item.question}</h3>
                                </div>
                                <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const data = [

    {
        question: 'What is Lorem Ipsum?',
        answer: 'There are many variations of passages of Lorem Ipsum available anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true '
    },
    {
        question: 'Where does it come from?',
        answer: 'There are many variations of passages of Lorem Ipsum available anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true '
    },
    {
        question: 'Where can I get some?',
        answer: 'There are many variations of passages of Lorem Ipsum available anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true '
    },
    {
        question: 'Why do we use it?',
        answer: 'There are many variations of passages of Lorem Ipsum available anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true '
    }
]

export default FaqPage