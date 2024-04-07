const database = require("../config/DBConfig");

database.connect((err) => {
  if (err) console.log("error :", err);
  else {
    // user management
    let user_typeSQL =
      "CREATE TABLE IF NOT EXISTS user_type (id INT AUTO_INCREMENT PRIMARY KEY, user_type_name VARCHAR(50) NOT NULL)";

    let user_accountSQL =
      "CREATE TABLE IF NOT EXISTS user_account (id INT AUTO_INCREMENT PRIMARY KEY,user_type_id INT, email VARCHAR(255) NOT NULL, password VARCHAR(100) NOT NULL, date_of_birth DATE NOT NULL, gender VARCHAR(10) NOT NULL, contact_no BIGINT NOT NULL, user_image BLOB, FOREIGN KEY (user_type_id) REFERENCES user_type(id))";

    // company profile
    let business_streamSQL =
      "CREATE TABLE IF NOT EXISTS business_stream (id INT AUTO_INCREMENT PRIMARY KEY, business_stream_name VARCHAR(100))";

    let companySQL =
      "CREATE TABLE IF NOT EXISTS company (id INT AUTO_INCREMENT PRIMARY KEY, company_name VARCHAR(100) NOT NULL, profile_description VARCHAR(1000) NOT NULL, business_stream_id INT NOT NULL, establishment_date date NOT NULL, company_wesite_url VARCHAR(500), FOREIGN KEY(business_stream_id) REFERENCES business_stream(id))";

    let company_imageSQL =
      "CREATE TABLE IF NOT EXISTS company_image (id INT AUTO_INCREMENT PRIMARY KEY, company_id INT NOT NULL, company_image BLOB, FOREIGN KEY(company_id) REFERENCES company(id))";

    // seeker profile
    let education_detailSQL =
      "CREATE TABLE IF NOT EXISTS education_detail (user_account_id INT NOT NULL, certificate_degree_nhame VARCHAR(100) NOT NULL, major VARCHAR(100) NOT NULL, institute_university_name VARCHAR(100) NOT NULL, starting_date DATE NOT NULL, completion__date DATE, percentage INT, cgpa DECIMAL(3,2), FOREIGN KEY(user_account_id) REFERENCES user_account(id), primary key(user_account_id, certificate_degree_nhame, major))";

    let seeker_profileSQL =
      "CREATE TABLE IF NOT EXISTS seeker_profile (user_account_id INT PRIMARY KEY, first_name VARCHAR(100) NOT NULL, last_name VARCHAR(100) NOT NULL, current_salary INT, FOREIGN KEY(user_account_id) REFERENCES user_account(id))";

    let experience_detailSQL =
      "CREATE TABLE IF NOT EXISTS experience_detail (user_account_id INT NOT NULL, is_current_job CHAR(1) NOT NULL, start_date DATE NOT NULL, end_date DATE NOT NULL, job_title VARCHAR(100), company_name VARCHAR(100) NOT NULL, job_location_city VARCHAR(60) NOT NULL, job_location_state VARCHAR(60) NOT NULL, job_lacation_country VARCHAR(60) NOT NULL, description VARCHAR(4000) NOT NULL, FOREIGN KEY(user_account_id) REFERENCES user_account(id), PRIMARY KEY(user_account_id, start_date, end_date))";

    let skill_setSQL =
      "CREATE TABLE IF NOT EXISTS skill_set (id INT AUTO_INCREMENT PRIMARY KEY, skill_set_name VARCHAR(50) NOT NULL)";

    let seeker_skill_setSQL =
      "CREATE TABLE IF NOT EXISTS seeker_skill_set (user_account_id INT NOT NULL, skill_set_id INT NOT NULL, skill_level INT NOT NULL, FOREIGN KEY (user_account_id) REFERENCES user_account(id), FOREIGN KEY (skill_set_id) REFERENCES skill_set(id), PRIMARY KEY (user_account_id, skill_set_id))";

    // job post management
    let job_type =
      "CREATE TABLE IF NOT EXISTS job_type (id INT AUTO_INCREMENT PRIMARY KEY, job_type VARCHAR(60) NOT NULL)";

    let job_location =
      "CREATE TABLE IF NOT EXISTS job_location (id INT AUTO_INCREMENT PRIMARY KEY, street_address VARCHAR(150), city VARCHAR(50) NOT NULL, state VARCHAR(50) NOT NULL, country VARCHAR(50) NOT NULL, zip VARCHAR(50) NOT NULL)";

    let job_post =
      "CREATE TABLE IF NOT EXISTS job_post (id INT AUTO_INCREMENT PRIMARY KEY, posted_by_id INT NOT NULL, job_type_id INT NOT NULL, company_id INT NOT NULL, created_date DATE NOT NULL, job_discription VARCHAR(5000) NOT NULL, job_lacation_id INT NOT NULL,FOREIGN KEY(posted_by_id) REFERENCES user_account(id), FOREIGN KEY (job_type_id) REFERENCES job_type(id), FOREIGN KEY (company_id) REFERENCES company(id), FOREIGN KEY (job_lacation_id) REFERENCES job_location(id))";

    let job_post_skill_set =
      "CREATE TABLE IF NOT EXISTS job_post_skill_set (skill_set_id INT NOT NULL, job_post_id INT NOT NULL, skill_level INT NOT NULL, FOREIGN KEY(skill_set_id) REFERENCES skill_set(id), FOREIGN KEY(job_post_id) REFERENCES job_post(id), PRIMARY KEY(skill_set_id, job_post_id))";

    let job_post_activity =
      "CREATE TABLE IF NOT EXISTS job_post_activity (user_account_id INT NOT NULL, job_post_id INT NOT NULL, apply_date DATE NOT NULL, FOREIGN KEY (user_account_id) REFERENCES user_account(id), FOREIGN KEY (job_post_id) REFERENCES job_post(id))";

    database.query(user_typeSQL, (err, result) => {
      if (err) {
        console.log("error :", err);
      } else {
        console.log("user table created successfully.");
      }
    });
    database.query(user_accountSQL, (err, result) => {
      if (err) {
        console.error("Error creating jobPost table:", err);
      } else {
        console.log("jobPost table created successfully.");
      }
    });
    database.query(business_streamSQL, (err, result) => {
      if (err) {
        console.error("Error creating business_stream table:", err);
      } else {
        console.log("business_stream table created successfully.");
      }
    });

    database.query(companySQL, (err, result) => {
      if (err) {
        console.error("Error creating company table:", err);
      } else {
        console.log("company table created successfully.");
      }
    });

    database.query(company_imageSQL, (err, result) => {
      if (err) {
        console.error("Error creating company_image table:", err);
      } else {
        console.log("company_image table created successfully.");
      }
    });

    database.query(education_detailSQL, (err, result) => {
      if (err) {
        console.error("Error creating education_detail table:", err);
      } else {
        console.log("education_detail table created successfully.");
      }
    });

    database.query(seeker_profileSQL, (err, result) => {
      if (err) {
        console.error("Error creating seeker_profile table:", err);
      } else {
        console.log("seeker_profile table created successfully.");
      }
    });

    database.query(experience_detailSQL, (err, result) => {
      if (err) {
        console.error("Error creating experience_detail table:", err);
      } else {
        console.log("experience_detail table created successfully.");
      }
    });

    database.query(skill_setSQL, (err, result) => {
      if (err) {
        console.error("Error creating skill_set table:", err);
      } else {
        console.log("skill_set table created successfully.");
      }
    });

    database.query(seeker_skill_setSQL, (err, result) => {
      if (err) {
        console.error("Error creating seeker_skill_set table:", err);
      } else {
        console.log("seeker_skill_set table created successfully.");
      }
    });

    database.query(job_type, (err, result) => {
      if (err) {
        console.error("Error creating job_type table:", err);
      } else {
        console.log("job_type table created successfully.");
      }
    });

    database.query(job_location, (err, result) => {
      if (err) {
        console.error("Error creating job_location table:", err);
      } else {
        console.log("job_location table created successfully.");
      }
    });

    database.query(job_post, (err, result) => {
      if (err) {
        console.error("Error creating job_post table:", err);
      } else {
        console.log("job_post table created successfully.");
      }
    });

    database.query(job_post_skill_set, (err, result) => {
      if (err) {
        console.error("Error creating job_post_skill_set table:", err);
      } else {
        console.log("job_post_skill_set table created successfully.");
      }
    });

    database.query(job_post_activity, (err, result) => {
      if (err) {
        console.error("Error creating job_post_activity table:", err);
      } else {
        console.log("job_post_activity table created successfully.");
      }
    });
  }
});
