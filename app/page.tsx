import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline';

function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
        <h1 className="text-5xl font-bold mb-20">EduChat</h1>
        <div className="flex space-x-2 text-center">
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    {/*Sun Icon*/}
                    <SunIcon className="h-8 w-8"/>
                    <h2>Examples</h2>
                    <div className="space-y-2">
                        <p className="infoText">"Explain Something to me"</p>
                        <p className="infoText">"What is the difference between Thuma Mina and A corrupt leader?"</p>
                        <p className="infoText">"What is stocko in South Africa?"</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    {/*Bolt Icon*/}
                    <BoltIcon className="h-8 w-8"/>
                    <h2>Capabilities</h2>
                    <div className="space-y-2">
                        <p className="infoText">Ability to switch between ChatGPT Models</p>
                        <p className="infoText">Messages are stored, you can continue later</p>
                        <p className="infoText">Hot Toast notifications when EduChat is thinking!</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    {/*Excalmation Icon*/}
                    <ExclamationTriangleIcon className="h-8 w-8"/>
                    <h2>Limitations</h2>
                    <div className="space-y-2">
                        <p className="infoText">May occasionally generate incorrect information</p>
                        <p className="infoText">May occasionally produce harmful instructions or biased content</p>
                        <p className="infoText">Limited knowledge of world and events after 2021</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage;