import _ from 'lodash'
import React from 'react'
import Command from './command'
import Collapsible from '../collapsible/collapsible'

const Hook = ({ model }) => (
  <li className='hook-item'>
    <Collapsible
      header={model.name}
      headerClass='hook-name'
      isOpen={true}
    >
      <ul className='commands-container'>
        {_.map(model.commands, (command) => <Command key={command.id} model={command} />)}
      </ul>
    </Collapsible>
  </li>
)

const Hooks = ({ model }) => (
  <ul className='hooks-container'>
    {_.map(model.hooks, (hook) => <Hook key={hook.id} model={hook} />)}
  </ul>
)

export default Hooks
