const JoinSquad = () => {
  return (
    <section
      className="membership membership--main section_pricing"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '30vh',
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="flex flex-column justify-content-center align-items-center">
          <h2 className="">Join the Squad</h2>
          <p>Follow us and tag us at @picklesquad.my</p>
        </div>
      </div>
    </section>
  );
};

export default JoinSquad;
