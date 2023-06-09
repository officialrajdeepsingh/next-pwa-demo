import Image from "next/image"


function Card() {

  return (

    <div className="max-w-full bg-white dark:bg-gray-800">


        <Image className="rounded-lg p-3" width={1000} height={324} src="/moon.jpg" alt="moon" />

      <div className="p-1">

        <p className="mb-3 text-sm text-gray-500 dark:text-gray-400"> Here </p>

        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>

      </div>

    </div>

  )

}

export default Card
