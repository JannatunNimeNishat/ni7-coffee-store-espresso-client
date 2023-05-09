import React from 'react';
import bg from '../../assets/images/more/11.png'
import { FaArrowLeft } from "react-icons/fa";
import { useFormik } from 'formik';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
const initialValues = {
    name: '',
    chef: '',
    supplier: '',
    test: '',
    category: '',
    details: '',
    photo: ''

}

const AddCoffee = () => {

    const { values, error, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        onSubmit: (values, action) => {
            const name = values.name;
            const chef = values.chef;
            const supplier = values.supplier;
            const test = values.test;
            const category = values.category;
            const details = values.details;
            const photo = values.photo;
            console.log(name, chef, supplier, test, category, details, photo);
            const newCoffee = { name, chef, supplier, test, category, details, photo };

            //send data to the server
            fetch('http://localhost:5000/coffees', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newCoffee)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Successfully added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })

            action.resetForm();
        }
    })






    return (
        // <div className=' bg-cover bg-center h-[calc(100vh-50px)]'
        <div className=' bg-cover bg-center '
            style={{
                backgroundImage: `url("${bg}")`
            }}

        >
            <div className='my-container pt-5 mb-3'>
                <Link to='/'>
                    <p className='flex items-center gap-3 mb-5'>
                        <FaArrowLeft /> Back to home
                    </p>
                </Link>
                <div className='bg-[#F4F3F0] pt-3 px-5 py-5 '>
                    <div className='px-20 text-center'>
                        <h3 className='text-3xl mt-5'>Add New Coffee</h3>
                        <p className='mt-5'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                        <form onSubmit={handleSubmit} className='mt-5'>
                            {/* name & chef */}
                            <div className='flex '>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text"
                                            name='name'
                                            placeholder="Enter coffee name"
                                            className="input input-bordered w-full"
                                            value={values.name}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                                <div className="form-control md:w-1/2 ml-4">
                                    <label className="label">
                                        <span className="label-text">Chef</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='chef' placeholder="Enter coffee chef" className="input input-bordered w-full"
                                            value={values.chef}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                            {/* Supplier & Test */}
                            <div className='flex '>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Supplier</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered w-full"
                                            value={values.supplier}
                                            onBlur={handleBlur}
                                            onChange={handleChange}

                                        />
                                    </label>
                                </div>
                                <div className="form-control md:w-1/2 ml-4">
                                    <label className="label">
                                        <span className="label-text">Test</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='test' placeholder="Enter coffee test" className="input input-bordered w-full"
                                            value={values.test}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                            {/* category & details */}
                            <div className='flex '>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">category</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='category' placeholder="Enter coffee category" className="input input-bordered w-full"
                                            value={values.category}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                                <div className="form-control md:w-1/2 ml-4">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='details' placeholder="Enter coffee details" className="input input-bordered w-full"
                                            value={values.details}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                            {/* category & details */}
                            <div className=' '>
                                <div className="form-control md:w-full">
                                    <label className="label">
                                        <span className="label-text">photo</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='photo' placeholder="Enter coffee photo url" className="input input-bordered w-full"
                                            value={values.photo}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>

                            </div>
                            <input className='w-full mt-4 py-2 border text-black bg-[#D2B48C] cursor-pointer' type="submit" value="Add Coffee" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;