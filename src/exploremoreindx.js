import React, { useState } from "react";

const PetCareSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="pet-care-section">
      <div className="container">
        <h2 className="section-title">#1 Pet Hospital in Ernakulam</h2>
        <div className={`content ${isExpanded ? "expanded" : ""}`}>
          <p>
            Are you looking for a pet hospital in Ernakulam to provide
            specialized and affordable medical care for your pets? Caring for
            your pets is easier if you have an expert veterinarian to guide you.
            With our state-of-the-art laboratory and facilities, experienced
            professionals, and a knowledgeable team of veterinarians and pet
            nutritionists, we aim to provide compassionate and expert care to
            all animal companions. Get to know more about our dedicated pet care
            services.
          </p>

          <h3>Veterinary Wellness Exams</h3>
          <p>
            How well do you know your pet? Is your pet less active, agitated, or
            gaining weight recently? Just like the case of humans, there are
            different diseases and ailments that can affect the health of your
            loving pet. It is important to take your pet for a routine health
            checkup at least once a year. With a comprehensive wellness exam
            from Pet Trust, take timely preventive measures and ensure that your
            pets are always at the best of health.
          </p>

          <h3>Outpatient Care Services</h3>
          <p>
            Be it a comprehensive wellness exam, a vaccination, or even a minor
            surgery, with experienced staff and state-of-the-art facilities, our
            outpatient department can give preventive and curative healthcare to
            your pets. In addition to this, we provide counseling on veterinary
            behavior and pet nutrition, and pet grooming services.
          </p>

          <h3>Emergency And Critical Care</h3>
          <p>
            Pets are family and, if your pet starts vomiting or meets with an
            accident, it is natural to be afraid. But, do not worry. Our 24×7
            expert emergency care for pets is here to help your little friend.
            Bring them to us, the best pet hospital in Kochi that has all the
            facilities, and experienced veterinarians for timely intervention
            and specialty medical care.
          </p>

          <h3>Flea and Tick Treatments</h3>
          <p>
            Fleas and ticks are common problems encountered by every pet owner.
            These can grow into infestations that spread and can affect both
            pets and humans. If you see your pets scratching and biting or you
            see fleas, bring them to your vets at Pet Trust to get rid of them
            immediately.
          </p>
        </div>

        <button className="explore-btn" onClick={handleToggle}>
          {isExpanded ? "Show Less" : "Explore More"}
        </button>
      </div>
    </section>
  );
};

export default PetCareSection;
