import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

// Schedule data from Magnifest '25
const scheduleData = {
  'Day 1: April 21': [
    {
      id: 1,
      title: 'Registration',
      time: '9:30 AM - 10:30 AM',
      location: 'Help Desk 1',
      description: 'Registration for all participants.'
    },
    {
      id: 2,
      title: 'Opening Ceremony',
      time: '10:30 AM - 11:30 AM',
      location: 'OPEN Area',
      description: 'Inaugural ceremony of Magnifest 2025.'
    },
    {
      id: 3,
      title: 'Zenith (aptitude)',
      time: '11:30 AM - 12:15 PM',
      location: 'MBA Classes',
      description: 'Aptitude testing competition.'
    },
    {
      id: 4,
      title: 'Auditions (Cultural)',
      time: '11:30 AM - 1:00 PM',
      location: 'HIMCS Basement, 2nd Floor, 4th Floor, Cultural Room, HCST',
      description: 'Auditions for various cultural events.'
    },
    {
      id: 5,
      title: 'Ultimate turmoil – Debate',
      time: '11:30 AM - 1:00 PM',
      location: 'HCST Media Centre',
      description: 'Debate competition.'
    },
    {
      id: 6,
      title: 'Ad-Zap – Ad Making',
      time: '12:15 PM - 1:15 PM',
      location: 'MDP Hall HIMCS',
      description: 'Advertisement making competition.'
    },
    {
      id: 7,
      title: 'LOGO CONTRIEVER',
      time: '12:30 PM - 1:30 PM',
      location: 'MBA Classes',
      description: 'Logo designing contest.'
    },
    {
      id: 8,
      title: 'Programming Contest',
      time: '12:30 PM - 2:00 PM',
      location: 'CCL & MCA Lab',
      description: 'Coding competition for programmers.'
    },
    {
      id: 9,
      title: 'Curtain Raiser-Play',
      time: '1:00 PM - 2:30 PM',
      location: 'Auditorium',
      description: 'Theatrical performance.'
    },
    {
      id: 10,
      title: 'Happiness Heroes',
      time: '1:00 PM - 3:00 PM',
      location: 'HCST Media Centre',
      description: 'Social initiative event.'
    },
    {
      id: 11,
      title: 'BGMI',
      time: '1:30 PM - 2:30 PM',
      location: 'Library',
      description: 'Mobile gaming tournament.'
    },
    {
      id: 12,
      title: 'Zenith (GD)',
      time: '1:30 PM - 2:15 PM',
      location: 'MDP Hall HIMCS',
      description: 'Group discussion round of Zenith.'
    },
    {
      id: 13,
      title: 'Poster Making',
      time: '1:00 PM - 2:30 PM',
      location: 'Reception Area',
      description: 'Creative poster design competition.'
    },
    {
      id: 14,
      title: 'Technical Quiz',
      time: '2:30 PM - 4:00 PM',
      location: 'MCA & CCL Lab',
      description: 'Quiz on technical subjects.'
    },
    {
      id: 15,
      title: 'Photography Contest',
      time: '3:00 PM - 4:00 PM',
      location: 'Reception Area',
      description: 'Photography competition.'
    },
    {
      id: 16,
      title: 'Sur Sargam',
      time: '2:30 PM - 3:30 PM',
      location: 'Auditorium',
      description: 'Singing competition.'
    },
    {
      id: 17,
      title: 'Fashion Show',
      time: '3:30 PM - 5:00 PM',
      location: 'Auditorium',
      description: 'Fashion showcase by students.'
    },
    {
      id: 18,
      title: 'Battle of Bands',
      time: '5:00 PM - 7:00 PM',
      location: 'Open Stage',
      description: 'Live music competition featuring college bands.'
    }
  ],
  'Day 2: April 22': [
    {
      id: 19,
      title: 'Case Study',
      time: '10:30 AM - 12:00 PM',
      location: 'MDP Hall HIMCS',
      description: 'Business case analysis competition.'
    },
    {
      id: 20,
      title: 'Debugging',
      time: '10:30 AM - 12:00 PM',
      location: 'CCL/MCA Lab',
      description: 'Code debugging competition.'
    },
    {
      id: 21,
      title: 'Treasure Trove',
      time: '10:30 AM - 12:00 PM',
      location: 'Campus-wide',
      description: 'Treasure hunt competition.'
    },
    {
      id: 22,
      title: 'Zenith (Stress Interview)',
      time: '11:00 AM - 1:00 PM',
      location: 'MDP Hall HIMCS',
      description: 'Final interview round of Zenith.'
    },
    {
      id: 23,
      title: 'B-Plan',
      time: '11:00 AM - 1:00 PM',
      location: 'HCST Media Centre',
      description: 'Business plan presentation competition.'
    },
    {
      id: 24,
      title: 'Solo Dance',
      time: '12:00 PM - 1:00 PM',
      location: 'Auditorium',
      description: 'Individual dance performances.'
    },
    {
      id: 25,
      title: 'Just Dance',
      time: '1:00 PM - 2:30 PM',
      location: 'Auditorium',
      description: 'Dance competition.'
    },
    {
      id: 26,
      title: 'Starlet- Group Dance',
      time: '2:30 PM - 3:30 PM',
      location: 'Auditorium',
      description: 'Group dance performances.'
    },
    {
      id: 27,
      title: 'Duet Dance',
      time: '3:30 PM - 4:30 PM',
      location: 'Auditorium',
      description: 'Two-person dance performances.'
    },
    {
      id: 28,
      title: 'Closing Ceremony',
      time: '4:30 PM - 5:30 PM',
      location: 'Auditorium',
      description: 'Award distribution and closing remarks for Magnifest 2025.'
    },
    {
      id: 29,
      title: 'Celebrity Night',
      time: '5:30 PM - 7:00 PM',
      location: 'Auditorium',
      description: 'Special performances by invited celebrities.'
    }
  ]
}

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('Day 1: April 21')

  const days = Object.keys(scheduleData)

  const openSchedule = () => {
    window.open('/assets/Schedule of Events-Magnifest 25.pdf', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      <div className="container mx-auto px-4">
        <h1 className="section-title" data-aos="fade-up">Event <span className="text-primary">Schedule</span></h1>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Plan your Magnifest 2025 experience with our detailed schedule
        </p>

        {/* <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="200">
          <div className="inline-flex rounded-md shadow-sm bg-gray-100 dark:bg-gray-800 p-1">
            {days.map((day) => (
              <button
                key={day}
                className={`px-6 py-3 text-sm font-medium rounded-md transition-colors ${
                  activeDay === day 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveDay(day)}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

            {scheduleData[activeDay].map((event, index) => (
              <motion.div 
                key={event.id}
                className="relative flex gap-6 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute left-8 w-4 h-4 -ml-2 rounded-full bg-primary z-10"></div>

                <div className="w-32 pt-1 text-right flex-shrink-0">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {event.time.split(' - ')[0]}
                  </span>
                </div>

                <div className="flex-grow bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <FaClock className="mr-2 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div> */}

        <div className="text-center mt-16" data-aos="fade-up">
          <button className="btn-outline" onClick={openSchedule}>
            <FaCalendarAlt className="inline-block mr-2" />
            Download Full Schedule
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Schedule