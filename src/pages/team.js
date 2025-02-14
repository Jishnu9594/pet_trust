import React from "react";

const TeamMember = ({ imgSrc, name, title }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div className="single-team mb-30">
        <div className="team-img">
          <img src={imgSrc} alt={name} />
        </div>
        <div className="team-caption">
          <span>{name}</span>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      imgSrc: "assets/img/pettrust_optimized_img/P1210326.webp",
      name: "DR. JOBY GEORGE BVSc &AH , PGDTMD",
      title: "MEDICAL DIRECTOR",
    },
    {
      imgSrc: "assets/img/pettrust_optimized_img/P1210265.webp",
      name: "DR. George Rikku Roshan BVSc &AH",
      title: "Veterinary Surgeon & Unit HEAD",
    },
    {
      imgSrc: "assets/img/pettrust_optimized_img/P1210310.webp",
      name: "DR. Parvathi Abhijith BVSc &AH",
      title: "Veterinary Surgeon & Unit HEAD",
    },
    {
      imgSrc: "assets/img/pettrust_optimized_img/P1210246 .webp",
      name: "DR. ASWATHY NAIR MVSc (Microbiology)",
      title: "veterinary Surgeon",
    },
    {
      imgSrc: "assets/img/pettrust_optimized_img/P1210240.webp",
      name: "DR. MITHUN KAPOOR BVSc & AH",
      title: "VETERINARY SURGEON",
    },
    {
      imgSrc: "assets/img/pettrust_optimized_img/P1210302.webp",
      name: "DR. ASHIR KI BVSc & AH",
      title: "veterinary Surgeon",
    },
    {
      imgSrc: "assets/img/pettrust_optimized_img/P1210272.webp",
      name: "DR. Sravan BVSc &AH",
      title: "veterinary Surgeon",
    },
    {
      imgSrc: "assets/img/pettrust_optimized_img/P1210255.webp",
      name: "DR. DEVIKA TS,BVSc & AH",
      title: "Veterinary Surgeon",
    },
    {
      imgSrc: "assets/img/pettrust_optimized_img/P1210261 .webp",
      name: "DR. MALAVIKA BVSc&AH",
      title: "Veterinary Surgeon",
    },
    {
      imgSrc: "assets/img/pettrust_optimized_img/P1210291.webp",
      name: "DR. Greeshma P BVSc &AH",
      title: "Veterinary Surgeon",
    },
    {
      imgSrc: "assets/img/pettrust_optimized_img/P1210354.webp",
      name: "DR. Maneesha BVSc & AH",
      title: "Veterinary Surgeon",
    },
    {
      imgSrc: "assets/img/pettrust_optimized_img/unavaiable.webp",
      name: "DR. Vishnuvardhan MVSC,PhD",
      title: "Veterinary Surgeon",
    },
  ];

  return (
    <div className="team-area section-padding30">
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="cl-xl-7 col-lg-8 col-md-10">
            {/* Section Title */}
            <div className="section-tittle text-center mb-70">
              <span>Our Professional Members</span>
              <h2>Our Team Members</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              imgSrc={member.imgSrc}
              name={member.name}
              title={member.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
