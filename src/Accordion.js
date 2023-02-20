import React from 'react';
import AccordionItem from './AccordionItem';


export default function Accordion() {

  const accordionData = [
    {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];

  const accordion = {
    width: '70%',
    borderRadius: 10,
    margin: '0 auto',
    boxShadow: "0 10px 8px rgb(0 0 0 / 0.2)"
  }

  return (
    <>
      <div style={accordion}>
      {accordionData.map(({ title, content }, idx) => (
          <AccordionItem key={idx} title={title} content={content} idx={idx} lastIdx={accordionData.length}/>
        ))}
      </div>
    </>
  );
};



