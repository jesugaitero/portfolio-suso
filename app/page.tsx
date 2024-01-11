import React from 'react';
import './globals.css'; // Import your custom CSS styles

const Page: React.FC = () => {
  return (
    <>

      <div className="page-container">
        <header className="page-header">
          <h1><a href='/'>Welcome to My Portfolio</a></h1>

          <a >Jobs</a>
          <a>Projects</a>
          <a> Skills</a>

        </header>

        <main className="page-main">
          <section className="page-section">
            <h2>About Me</h2>
            <p></p>
          </section>

          <section className="page-section jobs">
            <h2>Experience</h2>
            <div className="projects-container">
              {/* Add your projects here */}
              <div className="project-card">
                <h3>Freelance</h3>
                <p>Cody Adkins (AWSH)</p>
                <p>
                  Worked with a variety of different languages, platforms, databases, frameworks and content management systems such as Javascript, React.js, Selenium JS, Node.js, Express.js, Wordpress, Php, CodeIgniter 4, Mongodb and Mysql
                  Developed highly interactive web applications for clients such as Hitbridge LLC and others.
                </p>
                <ul>
                  <li>Hitbridge Data Extraction, (Awsh Bot Scraper) an application that provides a user interface to process txt files with a large list of website domains and check whether they are working or not, once done the user can start extracting available sites to obtain their contact information and by taking a screenshot of the site, all data recovered from the scraping process can be viewed from a Metabase instance</li>
                  <li>HUI, an application that provides an accessible user interface for creating/updating Wordpress site instances using the Cpanel API and allowing users to modify the general style, text and images of sites created in HUI directly from the application. the application.</li></ul>
              </div>
              <div className="project-card">
                <h3>Frontend Developer</h3>
                <p><a target="_blank" href="https://bigboost.marketing/">Big Boost Marketing (BBM)</a></p>
                <ul>
                  <p>Provide solutions and support to different client websites with the web development team.</p>
                  <li>Wordpress</li>
                  <li>GHL</li>
                  <li>Domain Management</li>
                  <li>Hosting Management</li>
                  <li>Client Website Maintenance</li>
                </ul>
              </div>
              {/* ... */}
            </div>
          </section>

          <section className="page-section projects">
            <h2>Projects i have done</h2>
            <div className="projects-container">
              {/* Add your projects here */}
              <div className="project-card">
                <h3>Hitbridge Data Extraction (AWSH Bot Scraper)</h3>
                <p>Project 1 description...</p>
              </div>
              <div className="project-card">
                <h3>HUI</h3>
                <p>Project 2 description...</p>
              </div>
              <div className="project-card">
                <h3>Website Backup Bot(WBB)</h3>
                <img src="../../public/wbb.webp"/>
              </div>
              {/* ... */}
            </div>
          </section>

          <section className="page-section skills">
            <h2>Technologies that i might have used, but for sure not know 100%</h2>
            <div className="projects-container">
              {/* Add your projects here */}
              <div className="project-card">
                <h3>Project 1</h3>
                <p>Project 1 description...</p>
              </div>
              <div className="project-card">
                <h3>Project 2</h3>
                <p>Project 2 description...</p>
              </div>
              {/* ... */}
            </div>
          </section>

          <section className="page-section">
            <h2>Contact Me</h2>
            <p>Email: <a href='mailto:jsmrno520@gmail.com'>jsmrno520@gmail.com</a></p>
            <p>Phone: <a href='wa.me/584127686737'>584127686737</a></p>
          </section>
        </main>

        <footer className="page-footer">
          <p>&copy; {new Date().getFullYear()} Jesus Moreno. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Page;