import { useState } from 'react';
import { CollapsibleItem } from 'react-materialize';

const AccordionItem = ({ header, content}) => {
  const [open, setOpen] = useState(false)

  return(
    <CollapsibleItem
      expanded={open}
      header={header}
      node="div"
      onClick={() => setOpen(!open)}
    >
      {content}
    </CollapsibleItem>
  )
}

export default AccordionItem;