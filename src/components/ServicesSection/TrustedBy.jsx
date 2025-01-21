import React from 'react'

function TrustedBy() {
  return (
    <section className='flex flex-col justify-between p-10'>
    <div className='text-center font-bold text-lg'>Trusted By Over 100+ Startups and freelance business</div>
    <div className="flex justify-evenly items-center flex-wrap p-5">
        <img src="src/assets/images/companies_logos/monday.png" alt="Monday" className="h-6"/>
        <img src="/src/assets/images/companies_logos/oracle.png" alt="Monday" className="h-6" />
        <img src="src/assets/images/companies_logos/monday.png" alt="Monday" className="h-6"/>
        <img src="/src/assets/images/companies_logos/oracle.png" alt="Monday" className="h-6" />
        <img src="/src/assets/images/companies_logos/morpheus.png" alt="Monday" className="h-6" />
    </div>
    </section>
  )
}

export default TrustedBy