const TeamMember = ({ image, name, title, description }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
    <img src={image} alt={name} style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '20px' }} />
    <div>
      <h3 style={{ margin: 0 }}>{name}</h3>
      <p style={{ margin: 0, fontWeight: 'bold' }}>{title}</p>
    </div>
    <p style={{ marginLeft: 'auto', textAlign: 'right' }}>{description}</p>
  </div>
);

const AboutUs = () => {
  return (
    <section style={{ width: '40%', margin: 'auto', marginTop: '5rem' }}>
      <h2 style={{ textAlign: 'center' }}>Meet the Team</h2>
      <hr style={ { width: '40%' } } />
      <TeamMember
        image="team-member1.jpg"
        name="John Doe"
        title="CEO"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed urna vel nisi mattis aliquet."
      />
      <TeamMember
        image="team-member2.jpg"
        name="Jane Smith"
        title="CTO"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed urna vel nisi mattis aliquet."
      />
      <TeamMember
        image="team-member3.jpg"
        name="Alice Johnson"
        title="Lead Developer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed urna vel nisi mattis aliquet."
      />
    </section>
  );
};

export default AboutUs;
