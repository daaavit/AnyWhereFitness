import React from 'react'
import './SectionThree.css'
import fitness3 from '../Assests/fitness3.jpg'


const SectionThree = () => {
    return (
        <div className='main_wrapperThree'>
            <div className='text_contentThree'>
                <div>
                    <h1>Rhoncus magna</h1>
                </div>
                <div className='underline'></div>
                <div>
                    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                </div>
                <button className='learnmore_btn'>LEARN MORE</button>
            </div>
            <div className='img_three'>
                <img src={fitness3} alt='fitness3 pic'></img>
            </div>

        </div>
    )
}

export default SectionThree;