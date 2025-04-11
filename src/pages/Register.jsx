import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Register = () => {

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdTMgmJEcYdPoRY5x5zdWZ7-TaqZSjIFvkK8ICh6VJDv8krmQ/viewform?usp=sharing"

  const handleRegisterClick = () => {
    window.open(googleFormUrl, '_blank');
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      <div className="container mx-auto px-4">
        <h1 className="section-title" data-aos="fade-up">Register for <span className="text-primary">Magnifest 2025</span></h1>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Join us for two days of excitement, innovation, and entertainment
        </p>

        <div className="max-w-3xl mx-auto mt-10" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Ready to join Magnifest 2025?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Complete your registration through our official Google Form. Click the button below to proceed to the registration form.
              </p>
            </div>

            <button
              onClick={handleRegisterClick}
              className="btn-primary flex items-center justify-center mx-auto"
            >
              <span className="flex items-center">
                Register Now
                <FaExternalLinkAlt className="ml-2" />
              </span>
            </button>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              You will be redirected to our secure Google Form to complete your registration.
            </p>
            <br />
            <img
              src="/logo pic.png"
              alt="Magnifest 2025 Registration"
              className="mx-auto rounded-lg mb-6"
            />
          </div>

          {/* <div className="mt-8 text-center text-gray-600 dark:text-gray-300">
            <p>Having trouble with registration? Contact us at <a href="mailto:support@magnifest2025.com" className="text-primary hover:underline">support@magnifest2025.com</a></p>
          </div> */}
        </div>
      </div>
    </motion.div>
  )
}

export default Register