import React, { useState } from 'react';
import useProductList from '../hooks/useProductList';

const SideFilter = () =>{
    const [ selectedOption, setSelectedOption ] = useState('');
    // var product = useProductList();

    const handleOptionChange = ( event ) =>{
        setSelectedOption(event.target.value );
        // product(event.target.value);
    };

    return (
        <div style={{width:'900px'}}>
            <div>
                <h2>BRAND</h2>

                <label>
                    <input
                        type="radio"
                        value="Monkey"
                        checked={ selectedOption === 'Monkey' }
                        onChange={ handleOptionChange }
                    />
                    Monkey
                </label>

                <label>
                    <input
                        type="radio"
                        value="H&M"
                        checked={ selectedOption === 'H&M' }
                        onChange={ handleOptionChange }
                    />
                    H&M
                </label>
            </div>
            <div>
                <h2>PRICE RANGE</h2>

                <label>
                    <input
                        type="radio"
                        value="Under 500"
                        checked={ selectedOption === 'Under 500' }
                        onChange={ handleOptionChange }
                    />
                    Under 500
                </label>

                <label>
                    <input
                        type="radio"
                        value="1000 To 3000"
                        checked={ selectedOption === '1000 To 3000' }
                        onChange={ handleOptionChange }
                    />
                    1000 To 3000
                </label>
            </div>
            <div>
                <h2>RATING</h2>

                <label>
                    <input
                        type="radio"
                        value="5"
                        checked={ selectedOption === '5' }
                        onChange={ handleOptionChange }
                    />
                    5
                </label>
                <label>
                    <input
                        type="radio"
                        value="4"
                        checked={ selectedOption === '4' }
                        onChange={ handleOptionChange }
                    />
                    4
                </label>
                <label>
                    <input
                        type="radio"
                        value="3"
                        checked={ selectedOption === '3' }
                        onChange={ handleOptionChange }
                    />
                    3
                </label>
                <label>
                    <input
                        type="radio"
                        value="2"
                        checked={ selectedOption === '2' }
                        onChange={ handleOptionChange }
                    />
                    2
                </label>
                <label>
                    <input
                        type="radio"
                        value="1"
                        checked={ selectedOption === '1' }
                        onChange={ handleOptionChange }
                    />
                    1
                </label>
            </div>
        </div>

    );
}

export default SideFilter;