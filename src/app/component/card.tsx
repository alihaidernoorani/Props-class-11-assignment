interface CardProps {
    bgColor: string;
    heading: string;
    text: string;
  }
  
  export default function Card({ bgColor, heading, text }: CardProps) {
    return (
      <div className={`w-full md:w-1/3 h-auto p-8 ${bgColor} rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2`}>
        <h2 className="text-xl font-bold text-white mb-4 text-center">{heading}</h2>
        <p className="text-white text-base text-center">{text}</p>
      </div>
    );
  }
  