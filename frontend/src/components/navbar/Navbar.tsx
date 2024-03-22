import React from 'react'

import Icon1 from './assets/Icon1.svg'
import Icon1Selected from './assets/Icon1Selected.svg'
import Icon2 from './assets/Icon2.svg'
import Icon2Selected from './assets/Icon2Selected.svg'
import Icon3 from './assets/Icon3.svg'
import Icon3Selected from './assets/Icon3Selected.svg'
import Icon4 from './assets/Icon4.svg'
import Icon4Selected from './assets/Icon4Selected.svg'

function Navbar(props: { selected: number }) {
  const icons = [
    {
      name: 'Icon1Name',
      icon: Icon1,
      iconSelected: Icon1Selected,
      href: '/icon1path',
    },
    {
      name: 'Icon2Name',
      icon: Icon2,
      iconSelected: Icon2Selected,
      href: '/icon2path',
    },
    {
      name: 'Icon3Name',
      icon: Icon3,
      iconSelected: Icon3Selected,
      href: '/icon3path',
    },
    {
      name: 'Icon4Name',
      icon: Icon4,
      iconSelected: Icon4Selected,
      href: '/icon4path',
    },
  ]

  const iconSize = 32

  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-200 bg-opacity-80 flex justify-around py-2">
      {icons.map(({ name, icon, iconSelected, href }, index) => (
        <div key={index} className="flex-1 flex flex-col items-center">
          <a href={href}>
            <div className="flex flex-col items-center" style={{ height: `${iconSize + 16}px` }}>
              <img
                src={props.selected === index + 1 ? iconSelected : icon}
                alt={name}
                className={`w-8 h-8 mb-1 ${props.selected === index + 1 ? 'text-blue-500' : 'text-gray-600'}`}
              />
              <p className={`text-xs font-bold ${props.selected === index + 1 ? 'text-[#1E40AF]' : 'text-gray-600'}`}>{name}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Navbar