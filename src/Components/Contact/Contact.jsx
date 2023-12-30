import React from 'react';

function Contact() {
  return (
    <div className='max-w-xl mx-auto p-8 mt-[90px]'>
      <h1 className='text-3xl font-bold mb-8 md:text-4xl'>Contact <span className='font-berkshire text-[#d74112]'>Hunger Hero</span></h1>
      <p className='text-lg mb-6'>
        We'd love to hear from you! If you have any questions, feedback, or inquiries, feel free to reach out to us.
        Fill out the form below, and we'll get back to you as soon as possible.
      </p>
      
      <form className='max-w-xl mx-auto'>
        {/* Reusable input component */}
        {['name', 'email'].map((field) => (
          <div key={field} className='mb-4'>
            <label htmlFor={field} className='block text-gray-600 text-sm font-medium mb-2'>
              {field === 'name' ? 'Your Name' : 'Your Email'}
            </label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              id={field}
              name={field}
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
              placeholder={field === 'name' ? 'John Doe' : 'john@example.com'}
              required
            />
          </div>
        ))}
        
        <div className='mb-4'>
          <label htmlFor='message' className='block text-gray-600 text-sm font-medium mb-2'>
            Your Message
          </label>
          <textarea
            id='message'
            name='message'
            rows='4'
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            placeholder='Type your message here...'
            required
          ></textarea>
        </div>
        
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
