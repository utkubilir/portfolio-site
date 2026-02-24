import { contact } from './contact'

export const profile = {
  name: 'Utku Bilir',
  title: 'Computer Engineering student working on ROS 2/PX4 UAV autonomy and Java/React applications.',
  location: contact.location,
  summary:
    'I lead software work for our TEKNOFEST UAV team and build course projects with Java and React.',
  email: contact.email,
  highlights: [
    { label: 'Current Focus', value: 'ROS 2, PX4 SITL, Gazebo simulation' },
    { label: 'University', value: 'Izmir University of Economics' },
    { label: 'Building', value: 'Java and React applications' },
  ],
}
