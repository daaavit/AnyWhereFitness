import React from 'react'
import fitness4 from '../Assests/fitness4.jpg'
import './SectionFour.css'


const SectionFour = () => {
    return (
        <div className='main-wrapperTwo'>
            <div className='mainChild'>
                <div className='biceps-img'>
                    <img src={fitness4} alt='gym_pic' />
                </div>
                <div className='text-contnet'>
                    <h1>Sed nunc ligula</h1>
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


export default SectionFour; 