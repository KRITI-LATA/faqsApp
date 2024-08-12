// Write your code here.
import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="faq-container">
        <h1 className="faq-heading">FAQs</h1>
        <div className="faq-answer-container">
          <ul className="faq-list-container">
            {faqsList.map(eachFaq => (
              <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Faqs
