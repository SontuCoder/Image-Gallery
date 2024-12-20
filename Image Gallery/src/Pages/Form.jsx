import React from 'react'

const Form = () => {
    return (
        <div id='form-section'>
            <div className='container'>
                <div className="form-text" >
                    <h1 className="heading-2">Form</h1>
                    <p className="pera" style={{ color: 'red', fontSize: '10px' }}>This form only for Admin control*</p>
                </div>
                <div id='form'>
                    <form action="/">
                        <input type="text" required />
                        <div className="labelling">Enter your name</div>

                        <input type="text" required />
                        <div className="labelling">Enter your password</div>

                        <button type="submit">Submit</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Form
