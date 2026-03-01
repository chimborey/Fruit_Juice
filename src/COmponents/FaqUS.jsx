import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
const FaqUS = () => {
  const FaqData = [
    {
      id:2,
      question : 'this is 2rd question?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus neque totam aut illum cupiditate sit repellat magnam, recusandae eum itaque accusamus aliquid eos distinctio laboriosam architecto facere qui. Deserunt nihil consequuntur provident inventore unde at esse eos aut accusantium, quia fugit cumque laudantium voluptatem ad sequi! Illo, modi nisi tempora quos doloribus, atque veritatis incidunt optio beatae voluptatibus possimus dolorum hic odit corporis. Dolor fugiat ipsum esse voluptate.',
    },
    {
      id:3,
      question : 'this is 3nd question?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus neque totam aut illum cupiditate sit repellat magnam, recusandae eum itaque accusamus aliquid eos distinctio laboriosam architecto facere qui. Deserunt nihil consequuntur provident inventore unde at esse eos aut accusantium, quia fugit cumque laudantium voluptatem ad sequi! Illo, modi nisi tempora quos doloribus, atque veritatis incidunt optio beatae voluptatibus possimus dolorum hic odit corporis. Dolor fugiat ipsum esse voluptate.',
    },
    {
      id:4,
      question : 'this is 4th question?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus neque totam aut illum cupiditate sit repellat magnam, recusandae eum itaque accusamus aliquid eos distinctio laboriosam architecto facere qui. Deserunt nihil consequuntur provident inventore unde at esse eos aut accusantium, quia fugit cumque laudantium voluptatem ad sequi! Illo, modi nisi tempora quos doloribus, atque veritatis incidunt optio beatae voluptatibus possimus dolorum hic odit corporis. Dolor fugiat ipsum esse voluptate.',
    },
    {
      id:5,
      question : 'this is 5th question?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus neque totam aut illum cupiditate sit repellat magnam, recusandae eum itaque accusamus aliquid eos distinctio laboriosam architecto facere qui. Deserunt nihil consequuntur provident inventore unde at esse eos aut accusantium, quia fugit cumque laudantium voluptatem ad sequi! Illo, modi nisi tempora quos doloribus, atque veritatis incidunt optio beatae voluptatibus possimus dolorum hic odit corporis. Dolor fugiat ipsum esse voluptate.',
    },
    {
      id:5,
      question : 'this is 6th question?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus neque totam aut illum cupiditate sit repellat magnam, recusandae eum itaque accusamus aliquid eos distinctio laboriosam architecto facere qui. Deserunt nihil consequuntur provident inventore unde at esse eos aut accusantium, quia fugit cumque laudantium voluptatem ad sequi! Illo, modi nisi tempora quos doloribus, atque veritatis incidunt optio beatae voluptatibus possimus dolorum hic odit corporis. Dolor fugiat ipsum esse voluptate.',
    },
    {
      id:6,
      question : 'this is 6th question?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus neque totam aut illum cupiditate sit repellat magnam, recusandae eum itaque accusamus aliquid eos distinctio laboriosam architecto facere qui. Deserunt nihil consequuntur provident inventore unde at esse eos aut accusantium, quia fugit cumque laudantium voluptatem ad sequi! Illo, modi nisi tempora quos doloribus, atque veritatis incidunt optio beatae voluptatibus possimus dolorum hic odit corporis. Dolor fugiat ipsum esse voluptate.',
    },

    {
      id:7,
      question : 'this is 7th question?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus neque totam aut illum cupiditate sit repellat magnam, recusandae eum itaque accusamus aliquid eos distinctio laboriosam architecto facere qui. Deserunt nihil consequuntur provident inventore unde at esse eos aut accusantium, quia fugit cumque laudantium voluptatem ad sequi! Illo, modi nisi tempora quos doloribus, atque veritatis incidunt optio beatae voluptatibus possimus dolorum hic odit corporis. Dolor fugiat ipsum esse voluptate.',
    },
  ];
  const [openIndex, setOpenIndex] = useState (false)
  const toggleIndex = (index) =>{
    setOpenIndex (index === openIndex ? null : index)
  }
  return (
    <section className='w-full overflow-hidden py-14' data-aos= 'fade-up' data-aos-delay='300'>
      <main className='mt-12 container'>
        <div className='flex flex-col space-y-3 justify-center items-center' data-aos= 'fade-up' data-aos-delay='600'>
          <h3 className="font-group">question and answer</h3>
          <p className="font-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quibusdam laboriosam rem odio laborum dolorem dolor nemo voluptate adipisci doloribus quo, eaque facere ipsa maiores provident. Porro eius molestiae voluptate, eos veritatis nisi laudantium vitae, similique voluptates quas voluptas!</p>
        </div>
        <div className='w-full overflow-hidden space-y-4 mt-7' data-aos= 'fade-up' data-aos-delay='900'>
          {
            FaqData.map((faq, index)=>(
              <div key={faq.id} className='w-full relative overflow-hidden py-4 px-4 cursor-not-allowed bg-blue-300 rounded-lg hover:scale-95 duration-300 transition-all'>
                <button onClick={()=> toggleIndex(index)} className='font-group'>{faq.question}
                  <span className='absolute top-0 right-0'>
                    {
                      openIndex == index ?
                      (<MdKeyboardArrowDown  size={38}/>)
                      :
                      (<MdKeyboardArrowUp size={38}/>)
                    }
                  </span>
                </button>
                {index === openIndex && (<div className='font-desc'>{faq.answer}</div>)}
              </div>
            ))
          }
        </div>
      </main>
    </section>
  )
}

export default FaqUS