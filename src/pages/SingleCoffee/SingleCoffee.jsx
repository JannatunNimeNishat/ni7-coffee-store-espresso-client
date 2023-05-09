import React from 'react';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SingleCoffee = ({ coffee, coffees, setCoffees }) => {
    console.log(coffee);
    const { _id, category, chef, details, name, photo, suppliers, test } = coffee;

    const handleCoffeeDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                        }

                        const remainingCoffees = coffees?.filter(coffee => coffee._id !== _id)
                        setCoffees(remainingCoffees);

                    })


            }
        })



    }
    return (
        <div className='bg-[#F5F4F1] flex items-center justify-between gap-5 px-5 py-5 rounded'>
            <div className='overflow-hidden'>
                <img className='object-cover w-full h-full md:h-[239px] md:w-[185px]  ' src={photo} alt="" />
            </div>
            {/* <div className='flex items-center gap-3'> */}
            <div>
                <p><span className='font-semibold'>Name:</span> <span>{name}</span></p>
                <p><span className='font-semibold'>Chef:</span> <span>{chef}</span></p>
                <p><span className='font-semibold'>Test:</span> <span>{test}</span></p>
            </div>

            {/* <div className="btn-group btn-group-vertical space-y-4 pl-12"> */}
            <div className="flex flex-col  space-y-4 mr-3 ml-3 ">
                <button className="btn bg-[#D2B48C] border-0  mx-auto"><FaEye /></button>
                <button className="btn mx-auto rounded"><FaPen /></button>
                <button onClick={() => handleCoffeeDelete(_id)} className="btn bg-red-700  mx-auto border-0">

                    <FaTrash />

                </button>
            </div>
            {/* </div> */}

        </div>
    );
};

export default SingleCoffee;