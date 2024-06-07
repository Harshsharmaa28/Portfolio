// ContactForm.js
import { Send, X } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = ({ setsendMail }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // You can replace the above line with an API call to send the form data to your server or email service
    };

    return (
        <div className=' flex justify-center items-center md:h-screen w-screen absolute backdrop-blur-md -mt-20'>
            <section data-aos-duration="500" data-aos="fade-up" id="contact" className=" rounded-xl mx-32 py-10 px-5  absolute bg-gray-900 z-10">
                <div className=' flex justify-between'>
                    <div className=' text-white flex gap-2 font-semibold'>
                        <Send />
                        <span>Send Message</span>
                    </div>
                    <X onClick={() => setsendMail(false)} className=' hover:cursor-pointer text-white' />
                </div>
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Contact Me</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                        If you have any questions or would like to work together, feel free to reach out!
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                {...register('name', { required: 'Name is required' })}
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                            />
                            {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                {...register('email', { required: 'Email is required' })}
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                            />
                            {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Message
                            </label>
                            <textarea
                                id="message"
                                {...register('message', { required: 'Message is required' })}
                                rows="4"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                            ></textarea>
                            {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>}
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ContactForm;
