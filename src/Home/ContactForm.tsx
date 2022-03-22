import FormInput from './FormInput'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const sendEmail = (e: any) => {
    e.preventDefault()

    emailjs.sendForm('gmail', 'template', e.target, 'Tp8ejTQAjm5S3VyRH').then(
      result => {
        console.log(result.text)
      },
      error => {
        console.log(error.text)
      },
    )

    e.target.reset()
  }

  return (
    <div className="mx-auto mt-8 flex w-full flex-col overflow-hidden px-6 text-indigo-300 caret-sky-600 sm:max-w-md sm:rounded-lg sm:p-1">
      <form onSubmit={sendEmail}>
        <div>
          <FormInput type="email" name="email" />
        </div>
        <div className="mt-4">
          <FormInput type="text" name="subject" />
        </div>
        <div className="mt-4 flex w-full flex-col gap-y-2">
          <label className="block font-medium text-gray-600" htmlFor="message">
            Message:
          </label>
          <textarea
            className="block rounded-lg border-gray-300 px-2 pt-2 pb-32  shadow-md outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            name="message"
          />
        </div>

        {/* TODO | Submit Button */}
        <div className="my-6 flex justify-center">
          <button
            className="mt-4 inline-block transform rounded-xl bg-gray-900 py-4 px-8 text-center text-lg font-medium text-white shadow-lg transition-all hover:scale-110"
            type="submit"
          >
            Send
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="m-auto ml-4 mb-1 inline-block h-4"
              fill="#FFF"
            >
              <path d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
