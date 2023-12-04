import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Constants/Colors'


const {width, height} = Dimensions.get('window');

const HelperScreenTextComponent = () => {
  return (
    <View
    style={{
        marginTop: 30,
        backgroundColor: Colors.white,
        height: height,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28
    }}
    >
        <View
        style={{
            padding: 20
        }}
        >
      <Text>Welcome to the Ultimate Student Portal Guide!

Congratulations on joining our dynamic educational community! This comprehensive guide is designed to assist you in navigating and utilizing our student portal effectively. Whether you're a seasoned user or a newcomer, we've got you covered with detailed instructions and tips to enhance your overall experience.

Table of Contents:
Getting Started

1.1 Creating Your Account
1.2 Logging In
1.3 Account Recovery
Dashboard Overview

2.1 Personalizing Your Dashboard
2.2 Quick Access Links
2.3 Notifications and Alerts
Courses and Enrollment

3.1 Browsing Available Courses
3.2 Course Enrollment Process
3.3 Adding/Dropping Courses
3.4 Viewing Your Class Schedule
Assignments and Grades

4.1 Accessing Assignments
4.2 Submitting Assignments Online
4.3 Checking Grades
4.4 Grade Point Average (GPA) Tracker
Communication Tools

5.1 Messaging Instructors and Peers
5.2 Discussion Forums
5.3 Virtual Classrooms
Library Resources

6.1 Online Catalog Search
6.2 E-Books and Articles
6.3 Citation Tools
Financial Information

7.1 Tuition Payment
7.2 Viewing Financial Statements
7.3 Applying for Financial Aid
Career Services

8.1 Job Listings
8.2 Resume Building Tools
8.3 Career Counseling
Technical Support

9.1 Troubleshooting Login Issues
9.2 Browser Compatibility
9.3 Contacting Support
Mobile App

10.1 Installation Guide
10.2 Key Features on Mobile
Pro Tips:
Stay Organized: Use the calendar and task features to manage deadlines and important dates.

Participate Actively: Engage in discussions, virtual classrooms, and collaborative projects to make the most of your learning experience.

Security Matters: Keep your login credentials secure and update your password regularly.

Explore Beyond Classes: Check out campus events, clubs, and extracurricular activities through the portal.

Remember, this guide is your go-to resource for any questions or challenges you may encounter within the student portal. Bookmark it for quick reference, and feel free to reach out to our support team for additional assistance.

Wishing you a successful and fulfilling academic journey!

11. Student Resources Center
11.1 Academic Advising
11.2 Tutoring Services
11.3 Accessibility Services
11.4 Counseling and Wellness Support
12. Research and Projects
12.1 Library Databases
12.2 Research Assistance
12.3 Project Collaboration Tools
12.4 Thesis and Capstone Project Support
13. Student Life Hub
13.1 Events Calendar
13.2 Club and Organization Portals
13.3 Campus News and Updates
13.4 Volunteer Opportunities
14. Global Learning Opportunities
14.1 Study Abroad Programs
14.2 Language Learning Resources
14.3 International Student Support
15. Self-Assessment Tools
15.1 Learning Style Assessments
15.2 Career Interest Surveys
15.3 Time Management Resources
16. Social Integration and Networking
16.1 Creating a Student Profile
16.2 Connecting with Peers
16.3 Alumni Network Access
17. Community Forums and Blogs
17.1 Engaging in Discussions
17.2 Blogging Platforms
17.3 Sharing Resources and Insights
18. Health and Safety Guidelines
18.1 Campus Safety Information
18.2 Emergency Protocols
18.3 Health Services Appointments
19. Customizing Notifications
19.1 Setting Preferences
19.2 Opting in/out of Notifications
19.3 Email and SMS Alerts
20. Feedback and Improvement
20.1 Surveys and Feedback Forms
20.2 Suggesting Portal Enhancements
20.3 Participating in User Testing
Additional Tips:
Data Management: Regularly back up important documents and download course materials for offline access.

Collaboration Tools: Explore group project features, shared documents, and collaborative spaces within the portal.

Career Development Plans: Utilize career planning tools to set goals, track progress, and build a roadmap for your professional





</Text>
      </View>
    </View>
  )
}

export default HelperScreenTextComponent

const styles = StyleSheet.create({})