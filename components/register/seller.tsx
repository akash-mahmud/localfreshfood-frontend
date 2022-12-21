import React, { useState } from 'react'
import MultiStepProgressBar from '../common/MultiStepProgressBar'
import Pagefour from '../seller/registrationSteps/pagefour'
import PageOne from '../seller/registrationSteps/PageOne'
import PageThree from '../seller/registrationSteps/PageThree'
import PageTwo from '../seller/registrationSteps/PageTwo'

export default function Seller () {
  const [page, setPage] = useState('pageone')

  const nextPage = (page: string) => {
    setPage(page)
  }

  const nextPageNumber = (pageNumber: string) => {
    switch (pageNumber) {
      case '1':
        setPage('pageone')
        break
      case '2':
        setPage('pagetwo')
        break
      case '3':
        setPage('pagethree')
        break
      case '4':
        alert('Ooops! Seems like you did not fill the form.')
        break
      default:
        setPage('1')
    }
  }
  return (
    <>
      <div className="mt-10">
        <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
      </div>

      {
        {
          pageone: <PageOne onButtonClick={nextPage} />,
          pagetwo: <PageTwo onButtonClick={nextPage} />,
          pagethree: <PageThree onButtonClick={nextPage} />,
          pagefour: <Pagefour onButtonClick={nextPage} />,
        }[page]
      }
    </>
  )
}
