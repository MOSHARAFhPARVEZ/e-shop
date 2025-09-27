import { Collapse } from 'antd'
import React from 'react'

const RightFaq = () => {
  return (
    <>
        <div className=''>
            <Collapse
                rootClassName='custom-collapse'
                items={[{ key: '1', label: 'What payment methods do you accept?', children: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ex illum veritatis vero cum voluptates minus laborum fuga cumque cupiditate? Explicabo cumque aut itaque modi corrupti debitis suscipit necessitatibus quisquam!</p> }]}
            />
        </div>
    </>
  )
}

export default RightFaq