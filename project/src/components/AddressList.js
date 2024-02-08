import React from 'react'

const AddressList = ({ data }) => {
    console.log(data)
    return (

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Line 1</th>
                    <th scope="col">Line 2</th>
                    <th scope="col">Country</th>
                    <th scope="col">Post code</th>
                </tr>
            </thead>
            <tbody>


                {
                    data && data?.map((ele) => (
                        <tr>
                            <td>{ele?.line1}</td>
                            <td>{ele?.line2 ? ele?.line2 : "None"}</td>
                            <td>{ele?.country}</td>
                            <td>{ele?.postcode ? ele?.postcode : "None"}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>


    )
}


export default AddressList