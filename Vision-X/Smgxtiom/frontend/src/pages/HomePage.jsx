import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Award, BookOpen, MessageSquare, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomePage() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    // Mock courses data
    const mockCourses = [
      { id: 1, title: 'Python Fundamentals', instructor: 'John Doe', rating: 4.8, students: 1250, image: 'bg-blue-500' },
      { id: 2, title: 'Web Development', instructor: 'Jane Smith', rating: 4.9, students: 980, image: 'bg-purple-500' },
      { id: 3, title: 'React Mastery', instructor: 'Mike Chen', rating: 4.7, students: 850, image: 'bg-pink-500' },
      { id: 4, title: 'Data Science 101', instructor: 'Sarah Wilson', rating: 4.6, students: 1100, image: 'bg-green-500' },
      { id: 5, title: 'JavaScript Advanced', instructor: 'David Lee', rating: 4.8, students: 920, image: 'bg-yellow-500' },
      { id: 6, title: 'UI/UX Design', instructor: 'Emma Davis', rating: 4.9, students: 750, image: 'bg-indigo-500' },
    ];

    setCourses(mockCourses);
    setFilteredCourses(mockCourses);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredCourses(
      courses.filter(
        (course) =>
          course.title.toLowerCase().includes(term) ||
          course.instructor.toLowerCase().includes(term)
      )
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-primary/10 to-secondary/10 pt-20">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              Welcome to Smgxtiom
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Learn from industry experts, master new skills, and advance your tech career with our comprehensive IT education platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="btn-primary flex items-center justify-center gap-2">
                Get Started <ArrowRight size={20} />
              </Link>
              <Link to="/login" className="btn-secondary flex items-center justify-center gap-2">
                Sign In <Play size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 mt-20"
          >
            {[
              { icon: Users, label: 'Students', value: '25K+' },
              { icon: BookOpen, label: 'Courses', value: '150+' },
              { icon: Award, label: 'Completed', value: '50K+' },
            ].map((stat, i) => (
              <div key={i} className="card p-6 text-center">
                <stat.icon className="w-8 h-8 mx-auto text-primary mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white dark:bg-darkAlt">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Find Your Next Course</h2>
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search courses or instructors..."
              value={searchTerm}
              onChange={handleSearch}
              className="input-field pl-12 py-3 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Courses</h2>

          {filteredCourses.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-400">No courses found</p>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  variants={itemVariants}
                  className="card overflow-hidden hover:scale-105 transition-smooth cursor-pointer"
                >
                  <div className={`h-32 ${course.image}`}></div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      by {course.instructor}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="font-semibold">{course.rating}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {course.students} students
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Mentors/Teachers Section */}
      <section className="py-20 px-4 bg-white dark:bg-darkAlt">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Learn from Expert Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'John Doe', specialty: 'Python Expert', image: 'JD' },
              { name: 'Jane Smith', specialty: 'Web Developer', image: 'JS' },
              { name: 'Mike Chen', specialty: 'React Master', image: 'MC' },
              { name: 'Sarah Wilson', specialty: 'Data Scientist', image: 'SW' },
            ].map((mentor, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {mentor.image}
                </div>
                <h3 className="font-bold text-lg">{mentor.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{mentor.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Student Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Alex Johnson',
                review: 'Smgxtiom completely changed my career. The courses are well-structured and the instructors are amazing!',
                rating: 5,
              },
              {
                name: 'Emily Chen',
                review: 'The platform is so easy to use. I love the interactive lessons and real-world projects.',
                rating: 5,
              },
              {
                name: 'David Smith',
                review: 'Great quality content with affordable pricing. Highly recommended for anyone serious about learning!',
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div key={i} className="card p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{testimonial.review}</p>
                <p className="font-bold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of students already learning on Smgxtiom
          </p>
          <Link to="/register" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3 rounded-lg hover:shadow-lg transition-smooth">
            Sign Up Today <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
