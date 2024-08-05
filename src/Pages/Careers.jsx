import React from 'react';

const Careers = () => {
    const styles = {
      header: {
        textAlign: 'center',
        padding: '100px 0 50px',  // Adjusted padding to push content down
        backgroundColor: '#f5f5f5',
      },
      section: {
        padding: '50px 0',
      },
      container: {
        width: '80%',
        margin: '0 auto',
        maxWidth: '1200px',
      },
      h2: {
        fontSize: '2em',
        marginBottom: '20px',
      },
      p: {
        fontSize: '1.2em',
        lineHeight: '1.6',
      },
      ul: {
        listStyleType: 'disc',
        paddingLeft: '20px',
      },
      li: {
        marginBottom: '10px',
      },
      jobListing: {
        marginBottom: '30px',
      },
      jobDetails: {
        marginBottom: '20px',
      },
      applyButton: {
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
      },
      footer: {
        backgroundColor: '#f5f5f5',
        padding: '20px 0',
        textAlign: 'center',
      },
      ol: {
        listStyleType: 'decimal',
        paddingLeft: '20px',
      },
      h3: {
        marginBottom: '10px',
      }
    };

  return (
    <div>
      <header style={styles.header}>
        <h1>Careers at Naraina Group of Institutions</h1>
        <h2>Join Us in Shaping the Future of Education!</h2>
      </header>

      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Careers Overview</h2>
          <p style={styles.p}>
            At Naraina Group of Institutions, we are committed to fostering a
            dynamic and inclusive work environment. We value innovation,
            collaboration, and excellence, and we invite passionate individuals
            to join our team.
          </p>
          <p style={styles.p}>
            Our institution is dedicated to shaping the future of education
            through a culture that encourages creativity and critical thinking. We
            believe that every team member plays a vital role in our mission to
            provide top-ranked technical and professional courses.
          </p>

          <h3 style={styles.h3}>What We Offer:</h3>
          <ul style={styles.ul}>
            <li style={styles.li}>
              Professional Growth: Opportunities for continuous learning and
              professional development through workshops, seminars, and training
              programs.
            </li>
            <li style={styles.li}>
              Supportive Environment: A collaborative atmosphere where faculty
              and staff are encouraged to share ideas, engage in meaningful
              discussions, and contribute to institutional goals.
            </li>
            <li style={styles.li}>
              Diversity and Inclusion: We embrace a diverse workforce and are
              committed to creating an inclusive environment that respects and
              values individual differences.
            </li>
            <li style={styles.li}>
              Impactful Work: Join us in making a difference in the lives of
              students and the community by contributing to innovative teaching
              methods and research initiatives.
            </li>
            <li style={styles.li}>
              Recognition and Rewards: We acknowledge and celebrate the
              achievements of our employees, fostering a sense of belonging and
              motivation.
            </li>
          </ul>

          <p style={styles.p}>
            At Naraina Group of Institutions, we are not just colleagues; we
            are a community dedicated to excellence in education. If you are
            looking for a place where your skills and passion can thrive, we
            invite you to explore our career opportunities and become a part of
            our journey toward success.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Current Vacancies</h2>

          {/* Job Listings - Replace with actual data */}
          <div style={styles.jobListing}>
            <h3 style={styles.h3}>Office Executive</h3>
            <div style={styles.jobDetails}>
              <p>
                <strong>Department:</strong> Administration
              </p>
              <p>
                <strong>Location:</strong> Kanpur
              </p>
              <p>
                <strong>Employment Type:</strong> Full Time
              </p>
              <p>
                <strong>Application Deadline:</strong> [Insert Date]
              </p>
            </div>
            <a href="#" style={styles.applyButton}>
              View Details
            </a>
          </div>

          <div style={styles.jobListing}>
            <h3 style={styles.h3}>Assistant Professor</h3>
            <div style={styles.jobDetails}>
              <p>
                <strong>Department:</strong> Computer Science & Engineering
              </p>
              <p>
                <strong>Location:</strong> Kanpur
              </p>
              <p>
                <strong>Employment Type:</strong> Full Time
              </p>
              <p>
                <strong>Application Deadline:</strong> [Insert Date]
              </p>
            </div>
            <a href="#" style={styles.applyButton}>
              View Details
            </a>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>How to Apply</h2>
          <p style={styles.p}>To apply for any of the positions listed, please follow these steps:</p>
          <ol style={styles.ol}>
            <li>Review the job description and requirements.</li>
            <li>Prepare your resume and cover letter.</li>
            <li>Fill out the online application form linked below.</li>
            <li>Submit your application along with any required documents.</li>
          </ol>
          {/* Add Application Form Link Here */}
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Frequently Asked Questions (FAQs)</h2>
          <h3>Common Queries:</h3>
          <div className="faq-item">
            <h4>"What qualifications do I need to apply?"</h4>
            <p>
              The qualifications required to apply for a position at Naraina Group of Institutions vary depending on the specific role. Generally, for faculty positions, a Master's degree or Ph.D. in the relevant field is preferred, along with teaching experience and a strong research background. For administrative and support roles, qualifications may include relevant degrees, certifications, and experience in similar positions. Please refer to the specific job listing for detailed requirements.
            </p>
          </div>
          <div className="faq-item">
            <h4>"How long does the hiring process take?"</h4>
            <p>
              The hiring process duration can vary based on the position and the number of applicants. Typically, the process may take anywhere from a few weeks to a couple of months. After submitting your application, our HR team will review it and contact you if you are shortlisted for an interview. We strive to keep candidates informed throughout the process and appreciate your patience.
            </p>
          </div>
          <div className="faq-item">
            <h4>"Can I apply for multiple positions?"</h4>
            <p>
              Yes, you are welcome to apply for multiple positions that match your qualifications and interests. However, we recommend that you tailor your resume and cover letter for each position to highlight your relevant skills and experiences. This will help us better understand your fit for each role.
            </p>
          </div>
          <p>Feel free to reach out with any additional questions or concerns regarding the application process!</p>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Contact Information</h2>
          <p style={styles.p}>For more information, please contact us at:</p>
          <p style={styles.p}><strong>Email:</strong> hr@narainagroup.ac.in</p>
          <p style={styles.p}><strong>Phone:</strong> +91-123-456-7890</p>
        </div>
      </footer>
    </div>
  );
};

export default Careers;
