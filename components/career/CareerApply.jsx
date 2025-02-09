import { useState } from 'react';
import { useRouter } from 'next/router';

const CareerApply = ({ id }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    startDate: '',
    source: ''
  });

  const jobDetails = {
    title: "Community Building & Club Manager",
    type: "Full-Time & Part-Time",
    department: "Management",
    location: "Jelutong, Pulau Pinang"
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log(formData);
    
    // Show success message and redirect
    alert('Application submitted successfully!');
    router.push('/career');
  };

  return (
    <section className="career-apply">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="career-apply__content">
              <div className="career-apply__header">
                <h1>Apply for {jobDetails.title}</h1>
                <div className="career-apply__info">
                  <span><i className="fa-solid fa-briefcase"></i> {jobDetails.type}</span>
                  <span><i className="fa-solid fa-building"></i> {jobDetails.department}</span>
                  <span><i className="fa-solid fa-location-dot"></i> {jobDetails.location}</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="career-apply__form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Earliest Start Date *</label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label>How did you hear about us?</label>
                      <select
                        name="source"
                        value={formData.source}
                        onChange={handleInputChange}
                      >
                        <option value="">Select an option</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="jobstreet">JobStreet</option>
                        <option value="friend">Friend/Referral</option>
                        <option value="social">Social Media</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label>Resume/CV *</label>
                      <input
                        type="file"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                      />
                      <small>Accepted formats: PDF, DOC, DOCX (Max size: 5MB)</small>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label>Cover Letter</label>
                      <textarea
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        rows="4"
                        placeholder="Tell us why you'd be a great fit for this role..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="career-apply__actions">
                  <button type="button" className="cmn-button-outline" onClick={() => router.back()}>
                    Back
                  </button>
                  <button type="submit" className="cmn-button">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerApply; 