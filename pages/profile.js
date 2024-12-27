import ProfileBody from "@/components/profile/ProfileBody";
import Sidebar from "@/components/profile/Sidebar";
import withAuth from "@/pages/withAuth";

// Helper function to generate dates
function Profile() {
  return (
    <>
      <section className="faq profile-page">
        <div className="container">
            <div className="row justify-content-center section__row">
                <Sidebar />
                <div className="col-lg-8 col-xl-6 section__col">
                    <ProfileBody />
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default withAuth(Profile);