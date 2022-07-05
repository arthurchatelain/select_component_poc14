import { useState } from "react"
import PropTypes from 'prop-types'
import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

/**
 * A select component to choose between different possibilities.
 * example : 
 *  ```js
 * <Select onChange={e => {}} data={[''value1', 'value2', 'value3']} title='Department'/>
 * ```
 * @prop {string} title - The select title that will be used as the default value
 * @prop {func} onChange - Function to call when the user select a new possibility 
 * @prop {array} data - An array of string with the different possibilities
 */

/**
 * STATES DOCUMENTATION
 * @var {boolean} isOpen - Tell if the select component is open or closed
 * @var {value} string - The current value of the select
 */

export default function Select (props) {

    let [isOpen, setIsOpen] = useState(false)
    let [value, setValue] = useState(props.title)

    const ArrowBottom = () => <svg viewBox="0 0 330 330"><path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/></svg> 

    const handleClick = e => { // e is the new value
        let value = e.target.dataset.value
        setIsOpen(false)
        setValue(value)
        props.onChange(value) 
    }

    return (
        <div className="Select" >
            { 
                !isOpen ? <div className="selectCell" onClick={() => setIsOpen(true)}><p>{value}</p><ArrowBottom /></div>
                : <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}><div className="selectContainer">
                    {
                        props.data.map(item => 
                            <div key={item} data-value={item}
                             className="selectCells" onClick={e => {handleClick(e)}}>
                                {item}
                            </div>
                        )
                    }
                </div></OutsideClickHandler>
            }
        </div>
    ) 
}

Select.propTypes = {
    OnChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
}