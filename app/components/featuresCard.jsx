import Image from "next/image";

const FeatureCard = ({ icon, alt, title, text }) => {
  return (
    <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition max-w-2xl mx-auto">
      
      <Image
        className="mx-auto mb-4 md:mx-0"
        src={icon}
        width={48}
        height={48}
        alt={alt}
      />

      <h3 className="text-xl font-bold text-center md:text-left mb-2">
        {title}
      </h3>

      <p className="text-gray-500 text-[16px] text-center md:text-left">
        {text}
      </p>
    </div>
  );
}

export default FeatureCard