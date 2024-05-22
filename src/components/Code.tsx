import React from 'react'
import CodeLines from './CodeLines'

const Code = () => {
  return (
    <div className="mt-10 max-w-lg md:mt-0">
      <div className="flex scale-75 flex-col md:scale-100">
        <div>
          <div className="flex flex-col">
            <div className="text-code-white w-fit md:w-max overflow-hidden rounded-lg bg-gray-800 px-5 pb-6 pt-4 font-mono text-sm subpixel-antialiased shadow-lg">
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
                text="text-gray-600"
                renderText="Software Developer"
              />
              <CodeLines
                element="h3"
                number={5}
                text="text-gray-500"
                renderText="Pennsylvania"
              />
              <CodeLines
                element="h3"
                number={6}
                text="text-gray-500"
                renderText="Java / Python / JavaScript"
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
                <div className="inline-block text-blue-300">&nbsp;{'</'}</div>
                <div className="inline-block text-red-400">div</div>
                <div className="inline-block text-blue-300">{'>'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Code
