import React, { useState } from 'react';

const AddressForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        line1: '',
        line2: '',
        country: '',
        postcode: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let errors = {};

        if (!formData.country) {
            errors.country = 'Country cannot be blank';
        }

        if (!formData.postcode) {
            errors.postcode = 'Postcode cannot be blank';
        } else if (formData.country === 'GB') {
            const regex = /^(?:(?:[A-Z][A-HJ-Y]?\d[A-Z\d]? \d[A-Z]{2})|(?:[A-Z][A-HJ-Y]?\d{2} \d[A-Z]{2}))$/;
            if (!regex.test(formData.postcode)) {
                errors.postcode = 'Invalid postcode format for GB';
            }
        } else if (formData.country === 'FR') {
            const regex = /^\d{5,7}$/;
            if (!regex.test(formData.postcode)) {
                errors.postcode = 'Invalid postcode format for FR';
            }
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
        }
    };

    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="row g-3 my-3">
                        <div className="col-md-4 ">
                            <select id="country" name="country" className="form-select" value={formData.country} onChange={handleChange}>
                                <option value="">Select country</option>
                                <option value="GB">GB</option>
                                <option value="FR">FR</option>
                            </select>
                        </div>
                        <div className='col-md-4'>
                            <input type="text" name="postcode" className="form-control" placeholder="postcode" value={formData.postcode} onChange={handleChange} />
                            {errors.postcode && <span className="error">{errors.postcode}</span>}
                        </div>
                    </div>
                    <div className="row g-3 my-3">
                        
                        <div className="col-md-4">
                            <input type="text" name="line1" className="form-control" placeholder="Line 1" value={formData.line1} onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            {formData.country === 'GB' && (
                                <input type="text" name="line2" className="form-control" placeholder="Line 2" value={formData.line2} onChange={handleChange} />
                            )}
                        </div>
                    </div>
                    <div className="row g-3 my-3">
                        <div className='col-md-4 '>
                            <button type="submit" class="btn btn-primary">Submit</button>

                        </div>
                    </div>
                </form>
            </div>

        </>
    );
};

export default AddressForm;
