export default function TestimonialCard({ name, role, comment, imageUrl }) {
    return (
      <div className="bg-card-background p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <div className="flex items-center mb-4">
          <img src={imageUrl} alt={name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h4 className="text-xl font-bold text-white">{name}</h4>
            <p className="text-text-gray">{role}</p>
          </div>
        </div>
        <p className="text-text-gray">{comment}</p>
      </div>
    );
  }