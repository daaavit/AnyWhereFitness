import React from 'react'
import fitness2 from '../Assests/fitness2.jpg'
import './SectionTwo.css'


const SectionTwo = () => {
    return (
        <div className='main-wrapperTwo'>
            <div className='mainChild'>
                <div className='biceps-img'>
                    <img src={fitness2} alt='biceps pic' />
                </div>
                <div className='text-contnet'>
                    <h1>Orci maecenas</h1>
                    <div className='underlinetwo'>
                    </div>
                    <div className='ptext'>
                        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                    </div>
                    <div>
                        <button className='learnmore_btn'>LEARN MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SectionTwo; 