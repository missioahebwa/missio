const featuresList = [
  {
    icon: "create-task-icon.svg",
    title: "Library",
    description:
      "Easily have access to over 100s of different book collects.",
  },

  {
    icon: "reminders-icon.svg",
    title: "Gaga AI",
    description:
      "Get access to consultation at any time and every where you wish.",
  },

  {
    icon: "collaborations-icon.svg",
    title: "Lessons",
    description:
      "Feel the new way having lessons from different professions.",
  },

  {
    icon: "progress-icon.svg",
    title: "Personal Coaching",
    description:
      "Have skills and knownledge for any thing you wish.",
  },

  {
    icon: "deadline-icon.svg",
    title: "Networking",
    description:
      "Connect with different fellow students accross the global to enhance in your academics.",
  },

  {
    icon: "file-icon.svg",
    title: "Live Seminars",
    description:
      "Access seminars almost for free in any course.",
  },
];
const testimonialsList = [
  {
    review:
      "I recommend Gaga app because it is the good thing i would wish for my fellow students mainly in primary. Just beacuse am in primary it has helped alot in my research work and assisted me in doing every well my home work. i have got a good understanding in my class lessons. Thanks Gaga Expert Team",
    image: "testimonial4.png",
    name: "Walukaga Nature",
    designation: "Assistant Head Girl, Lights of Hope Primary School",
  },
  {
    review:
      "This app has completely changed the way I do my home work and research work. The service i joined have made me advance to the next level of my perfomance as now i am the best in my class. I can't imagine my work life without it!",
    image: "testimonial5.png",
    name: "Segayi Calvin",
    designation: "Head boy, Lights Of Hope International School",
  },
  {
    review:
      "I never miss my doning my home work just because i can't miss the joy that Gaga Expert has put in our studying that has enbled us have access to education guidance any where. thanks Gaga Expert",
    image: "testimonial7.png",
    name: "Blessing Moses",
    designation: "Student, LOHIM Primary School",
  },
];



const plans = [
  {
    name: "Free",
    features: [
      "Weekly Tests",
      "Saved Lessons",
      "Daily Home Work",

    ],
    price: "Free",
    link: "payment.html",
  },


  {
    name: "Monthly",
    features: [
      "Weekly Tests",
      "Basic Certificate",
      "2hrs/weekly Coaching and Mentorship",
      "Saved Lessons",
      "Daily Home Work",
      "24/7 Customer Support",
    ],
    price: "UGX129,000 / $29.99",
    link: "https://sites.google.com/view/gaga-expert-app/payment",
  },

  {
    name: "3 month",
    features: [
      "All from <strong>Basic</strong> plan",
      "Weekly Tests",
      "Subtasks",
      "Basic Certificate",
      "2hrs/weekly Consultation",
      "Group Discussions",
      "Daily Home Work",
      "Saved Lessons"


    ],
    price: "UGX399,000 / $99.99",
    link: "https://sites.google.com/view/gaga-expert-app/payment",
  },




  {
    name: "6 month",
    features: [
      "All from <strong>Basic</strong> plan",
      "Weekly Tests",
      "Subtasks",
      "Basic Certificate",
      "2hrs/weekly Consultation",
      "Group Discussions",
      "Daily Home Work",
      "Saved Lessons"


    ],
    price: "UGX799,000 / $199.99",
    link: "https://sites.google.com/view/gaga-expert-app/payment",
  },

  {
    name: "Yearly",
    features: [
      "All from <strong>Pro</strong> plan",
      "Weekly Tests",
      "Access to all Premium Packages",
      "Subtasks",
      "Basic Certificate",
      "2hrs/weekly Coaching",
      "Group Discussions",
      "Daily Home Work",
      "Saved Lessons",
      "Live Lessons",
    ],
    price: "UGX1.29m / $299.99",
    link: "https://sites.google.com/view/gaga-expert-app/payment",
  },
];

const featuresContent = document.querySelector("#features .content");
const testimonialCard = document.querySelector(
  "#testimonials .testimonial-card"
);
const prevBtn = document.querySelector("#testimonials .prev-btn");
const nextBtn = document.querySelector("#testimonials .next-btn");
const pricingContent = document.querySelector("#pricing .content");
const menuIcon = document.querySelector(".menu-icon");
const mobileNavMenu = document.querySelector(".mobile-nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
let currentTestimonialIndex = 0;

const displayFeatures = () => {
  featuresList.forEach((f) => {
    const html = `<div class="icon">
        <img src="${f.icon}" alt="" />
      </div>
      <h3>${f.title}</h3>
      <p>
        ${f.description}
      </p>`;

    const featureCard = document.createElement("div");
    featureCard.classList.add("feature-card");
    featureCard.innerHTML = html;

    featuresContent.appendChild(featureCard);
  });
};

displayFeatures();

const displayTestimonial = () => {
  const html = `<span class="quote-icon">
  <img src="images/quote-icon.svg" alt="" />
</span>

<p class="review">
 ${testimonialsList[currentTestimonialIndex].review}
</p>

<div class="reviewer-info">
  <div class="image">
    <img src="${testimonialsList[currentTestimonialIndex].image}" alt="" />
  </div>

  <div class="details">
    <div class="name">${testimonialsList[currentTestimonialIndex].name}</div>
    <div class="designation">${testimonialsList[currentTestimonialIndex].designation}</div>
  </div>
</div>`;

  testimonialCard.innerHTML = html;
  testimonialCard.classList.add("active");
};

displayTestimonial();

nextBtn.addEventListener("click", () => {
  testimonialCard.classList.remove("active");

  setTimeout(() => {
    currentTestimonialIndex++;
    if (currentTestimonialIndex >= testimonialsList.length) {
      currentTestimonialIndex = 0;
    }
    displayTestimonial();
  }, 200);
});

prevBtn.addEventListener("click", () => {
  testimonialCard.classList.remove("active");

  setTimeout(() => {
    currentTestimonialIndex--;
    if (currentTestimonialIndex < 0) {
      currentTestimonialIndex = testimonialsList.length - 1;
    }
    displayTestimonial();
  }, 200);
});

const displayPricing = () => {
  plans.forEach((p) => {
    const featuresHTML = p.features
      .map(
        (f) =>
          `<li><span class='icon'><img src='images/check-icon.svg'/></span>${f}</li>`
      )
      .join("");

    const html = `<h4 class="plan-name">${p.name}</h4>
    <ul class="plan-features">
      ${featuresHTML}
    </ul>
    <div class="plan-price">${p.price}</div>
    <a href="${p.link}" class="btn">Choose</a>`;

    const plan = document.createElement("div");
    plan.classList.add("plan");
    plan.innerHTML = html;

    pricingContent.appendChild(plan);
  });
};

displayPricing();

menuIcon.addEventListener("click", () => {
  mobileNavMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const offset = targetElement.offsetTop - 60;
      window.scrollTo({ top: offset });
    }

    mobileNavMenu.classList.remove("active");
  });
});
