import React from 'react'

import Header from './Header'

export default {
  title: 'Example/Header',
  component: Header,
}

const Template = args => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  user: null,
}
