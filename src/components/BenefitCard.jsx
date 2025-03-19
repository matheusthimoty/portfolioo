export default function BenefitCard({ icon, title, description }) {
    return (
      <div className="bg-card-background p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
        <span className="text-4xl mb-4 text-white">{icon}</span>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-text-gray">{description}</p>
      </div>
    );
  }