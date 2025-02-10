const Team = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300',
    },
    {
      name: 'Sarah Johnson',
      position: 'Sales Manager',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300',
    },
    {
      name: 'Michael Brown',
      position: 'Service Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300',
    },
  ];

  return (
    <div className="container mx-auto px-4 mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <div className="mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full mx-auto object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-600">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team; 