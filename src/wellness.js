import React, { useState } from "react";

const PetWellnessSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="pet-wellness-section">
      <div className="container">
        <h2 className="section-title">Give The Best Care For Your Pets</h2>
        <p className="section-intro">
          Be it a cat, a dog, or a parrot, a pet is a precious member of the
          family.
        </p>
        <div className={`content ${isExpanded ? "expanded" : ""}`}>
          <p>
            Taking care of pets involves understanding the signs that they show
            through changes in behavior. If you see anything different, and even
            if it is a trivial concern, we recommend you bring them to our vets.
          </p>
          <p>
            At Pet Trust hospital, we provide preventive, curative, and
            rehabilitative care for pets. But we promote a preventive approach
            in which we can ensure your pet’s wellness. This is why we recommend
            yearly wellness checkups, vaccinations, and provide nutritional
            counseling. We aim to become the best pet hospital in Kerala by
            providing diagnostic care and taking timely interventions whenever
            required.
          </p>
          <div className={`additional-content ${isExpanded ? "show" : "hide"}`}>
            <h3>Pets First</h3>
            <p>
              Pets are always the first priority at Pet Trust. We are a group of
              people who work to make the lives of pets and their life easier
              and comfortable. Our staff is always happy to assist you with any
              concerns that you have regarding your canine, feline, or avian
              pals.
            </p>
            <h3>Does your pet look tired and less active recently?</h3>
            <p>
              Get a wellness exam from Pet Trust today. For more details, give
              us a call on <a href="tel:+916235806115">+91 6235806115</a>.
            </p>
          </div>
        </div>
        <button className="explore-btn" onClick={handleToggleContent}>
          {isExpanded ? "Show Less" : "Explore More"}
        </button>
      </div>
    </section>
  );
};

export default PetWellnessSection;
