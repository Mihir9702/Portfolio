import React from 'react'
import CodeLines from './CodeLines'

const Contact = () => {
  return (
    <section className="bg-gray-100 py-24 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:flex lg:px-8">
        <div className="mx-auto mt-10 max-w-md md:mt-0">
          <div className="flex flex-col p-2">
            <div>
              <div className="flex flex-col">
                <div className="text-code-white w-max overflow-hidden rounded-lg bg-gray-800 px-5 pb-6 pt-4 font-mono text-sm subpixel-antialiased shadow-lg">
                  <div className="mb-6 flex">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="ml-2 h-3 w-3 rounded-full bg-orange-300" />
                    <span className="ml-2 h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <CodeLines
                    element="div"
                    number={1}
                    text="bg-gray-700 text-white"
                  />
                  <CodeLines
                    element="div"
                    number={2}
                    text="mx-auto px-4 sm:px-6 lg:px-8"
                  />
                  <CodeLines
                    element="h1"
                    number={3}
                    text="md:text-6xl"
                    renderText="Mihir Patel"
                  />
                  <CodeLines
                    element="h2"
                    number={4}
                    text="text-gray-500"
                    renderText="Web Developer"
                  />
                  <CodeLines
                    element="div"
                    number={5}
                    text="text-gray"
                    renderText="mihirkp7@gmail.com"
                  />
                  <CodeLines
                    element="div"
                    number={6}
                    text="text-gray-600"
                    renderText="(267)-250-3505"
                  />

                  {/* Line 7 Div */}
                  <div>
                    <div className="inline-block text-gray-600">
                      7&nbsp;&nbsp;&nbsp;
                    </div>
                    <div className="inline-block text-blue-300">
                      &nbsp;&nbsp;&nbsp;{'</'}
                    </div>
                    <div className="inline-block text-red-400">div</div>
                    <div className="inline-block text-blue-300">{'>'}</div>
                  </div>

                  {/* Line 8 Div */}
                  <div>
                    <div className="inline-block text-gray-600">8&nbsp;</div>
                    <div className="inline-block text-blue-300">
                      &nbsp;{'</'}
                    </div>
                    <div className="inline-block text-red-400">div</div>
                    <div className="inline-block text-blue-300">{'>'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-grow flex-col items-center justify-center text-center">
          <h1 className="mt-12 text-4xl font-black leading-tight tracking-tight text-gray-900">
            Mihir Patel
          </h1>
          <h2 className="mt-6 max-w-3xl text-lg leading-8 text-gray-500">
            Web Developer
          </h2>
          <h2 className="mt-6 max-w-3xl text-lg leading-8 text-gray-500">
            mihirkp7@gmail.com
          </h2>
          <h2 className="mt-6 max-w-3xl text-lg leading-8 text-gray-500">
            (267)-250-3505
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Contact
