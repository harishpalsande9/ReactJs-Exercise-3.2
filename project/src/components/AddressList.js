import React from 'react'

const AddressList = ({ data }) => {
    return (

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Line 1</th>
                    <th scope="col">Line 2</th>
                    <th scope="col">Country</th>
                    <th scope="col">Post code</th>
                </tr>
            </thead>
            <tbody>


                {
                    data && data.map((index,ele) => {
                        <tr>
                            <th scope="row">{index}</th>
                            <td>{ele.line1}</td>
                            <td>{ele.line2}</td>
                            <td>{ele.country}</td>
                            <td>{ele.postcode}</td>
                        </tr>
                    })
                }

            </tbody>
        </table>


    )
}


export default AddressList