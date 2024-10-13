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
      "Since I started using the app, my productivity has skyrocketed. The reminder feature keeps me on track and ensures that I never miss an important task or deadline. Highly recommended!",
    image: "testimonial1.png",
    name: "John Smith",
    designation: "Tech Lead, Amazon",
  },
  {
    review:
      "This app has completely changed the way I manage my tasks. The advanced features and intuitive interface make it a joy to use. I can't imagine my work life without it!",
    image: "testimonial2.png",
    name: "Sarah Johnson",
    designation: "Product Manager, Google",
  },
  {
    review:
      "I've tried several task management apps, but this one takes the cake. The customizable workflows and seamless collaboration features have greatly improved my team's efficiency.",
    image: "testimonial3.png",
    name: "Emily Davis",
    designation: "Project Manager, Microsoft",
  },
];

const plans = [
  {
    name: "Monthly",
    features: [
      "50 Tasks",
      "Deadline Tracking",
      "Priority Settings",
      "Basic Reporting",
      "Email Notifications",
      "24/7 Customer Support",
    ],
    price: "$9.99",
    link: "#",
  },

  {
    name: "6 Month",
    features: [
      "All from <strong>Basic</strong> plan",
      "Advanced Tasks",
      "Subtasks",
      "File Attachments",
      "Gantt Chart View",
      "Collaborations",
    ],
    price: "$49.99",
    link: "#",
  },

  {
    name: "Yearly",
    features: [
      "All from <strong>Pro</strong> plan",
      "Custom Branding",
      "API Access",
      "Data Export",
      "Advanced Security",
      "Custom Integrations",
    ],
    price: "$99.99",
    link: "#",
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
  <img src="quote-icon.svg" alt="" />
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
          `<li><span class='icon'>
          <img src="check-icon.svg" alt="" />
          </span>${f}</li>`
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
