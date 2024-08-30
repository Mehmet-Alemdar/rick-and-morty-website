import React from 'react'
import EditThisPage from '@/components/edit-this-page/editThisPage'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex flex-col gap-12 bg-white'>
      <div className="max-w-[960px] mx-auto pt-6 px-6 mt-6 flex flex-col gap-12 items-start justify-start">
        <h1 className="text-4xl font-bold text-primary-black">About</h1>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-primary-black">What is this?</h2>
          <p className="text-lg font-light">
            The Rick and Morty API is a REST(ish) and GraphQL API based on the television show <a href="https://www.adultswim.com/videos/rick-and-morty" target='_blank' className="underline underline-offset-4 decoration-primary-orange hover:no-underline hover:text-primary-orange transition-all duration-150">Rick and Morty</a>. You will have access to about hundreds of characters, images, locations, and episodes. The Rick and Morty API is filled with canonical information as seen on the TV show.
          </p>
          <Link href={"/docs"} className="text-lg font-light underline underline-offset-4 decoration-primary-orange hover:no-underline hover:text-primary-orange transition-all duration-150">Check out the documentation to get started</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-primary-black">Who are you?</h2>
          <p className="text-lg font-light">
            We are <a href="https://github.com/afuh" target='_blank' className="underline underline-offset-4 decoration-primary-orange hover:no-underline hover:text-primary-orange transition-all duration-150">Axel Fuhrmann</a>, a guy who likes to develop things and <a href="https://talitatraveler.com/" target='_blank' className="underline underline-offset-4 decoration-primary-orange hover:no-underline hover:text-primary-orange transition-all duration-150">Talita</a>, the Rick and Morty data scientist and hardcore fan.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-primary-black">Why did you build this?</h2>
          <p className="text-lg font-light">
            Because we were really interested in the idea of writing an open source project and also because Rick and Morty is our favorite show at that moment, so why not?
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-primary-black">Technical stuff?</h2>
          <p className="text-lg font-light">
            The entire project is hosted on <a href="https://www.digitalocean.com/?refcode=2736d3ffe622&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=CopyPaste" target='_blank' class="underline underline-offset-4 decoration-primary-orange hover:no-underline hover:text-primary-orange transition-all duration-150">Digital Ocean</a> and <a href="https://www.netlify.com/" target='_blank' class="underline underline-offset-4 decoration-primary-orange hover:no-underline hover:text-primary-orange transition-all duration-150">Netlify</a>. GraphQL cache is handled through <a href="https://stellate.co/" target='_blank' class="underline underline-offset-4 decoration-primary-orange hover:no-underline hover:text-primary-orange transition-all duration-150">Stellate</a>. We use <a href="https://nodejs.org/en" target='_blank' class="underline underline-offset-4 decoration-primary-orange hover:no-underline hover:text-primary-orange transition-all duration-150">Node</a> and <a href="https://www.mongodb.com/" target='_blank' class="underline underline-offset-4 decoration-primary-orange hover:no-underline hover:text-primary-orange transition-all duration-150">MongoDB</a> to serve the API.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-primary-black">How can I contribute to the project?</h2>
          <p className="text-lg font-light">
            You can <Link href="support-us" class="underline underline-offset-4 decoration-primary-orange hover:no-underline hover:text-primary-orange transition-all duration-150">help us to keep the project alive</Link> and you can also contribute on <a href="https://github.com/afuh/rick-and-morty-api" target='_blank' class="underline underline-offset-4 decoration-primary-orange hover:no-underline hover:text-primary-orange transition-all duration-150">GitHub</a>.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-primary-black">Copyright?</h2>
          <p className="text-lg font-light">
          Rick and Morty is created by Justin Roiland and Dan Harmon for <a href="https://www.adultswim.com/" target='_blank' class="underline underline-offset-4 decoration-primary-orange hover:no-underline hover:text-primary-orange transition-all duration-150">Adult Swim</a>. The data and images are used without claim of ownership and belong to their respective owners. 
          </p>
          <p className="text-lg font-light">This API is open source and uses a BSD license.</p>
        </div>
      </div>
      <EditThisPage />

    </div>

  )
}

export default page