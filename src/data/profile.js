import { contact } from './contact'

export const profile = {
  name: 'Utku Bilir',
  title:
    'Computer Engineering student in Izmir working on UAV software integration and practical student tools.',
  location: contact.location,
  summary:
    'I coordinate software milestones in ECOFUAV and build Java/React projects with clear constraints and decisions.',
  email: contact.email,
  highlights: [
    { label: 'Current Focus', value: 'ROS 2, PX4 SITL, Gazebo simulation' },
    { label: 'University', value: 'Izmir University of Economics' },
    { label: 'Building', value: 'Java and React applications' },
  ],
}
