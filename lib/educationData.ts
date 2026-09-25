export interface Course {
  course_id: string;
  course_name: string;
  category: string;
  fee_sgd: number;
  duration_weeks: number;
  format: string;
  campus: string;
  trainer_id: string;
  admission_requirement: string;
  image: string;
  rating: string;
  reviews_count: number;
  enrolled_count: number;
  schedule_time: string;
  trial_seats: number;
  skillsfuture_eligible: boolean;
  skillsfuture_subsidy_sgd: number;
  net_fee_sgd: number;
  curriculum: Array<{
    module: string;
    duration: string;
    topics: string[];
  }>;
  outcomes: string[];
  overview: string;
}

export interface Trainer {
  trainer_id: string;
  name: string;
  display_name: string;
  full_name: string;
  title: string;
  bio: string;
  photo: string;
  experience_years: number;
  specialization: string;
  rating: string;
  students_count: number;
  qualifications: string[];
  courses_taught: string[];
}

export interface Campus {
  id: string;
  name: string;
  address: string;
  mrt: string;
  phone: string;
  email: string;
  hours: string;
  type: string;
  image: string;
}

export interface Certification {
  certification_id: string;
  name: string;
  industry_title: string;
  category: string;
  issuing_body: string;
  verification_code: string;
  skills_validated: string[];
  validity: string;
  credential_level: string;
  sample_recipient: string;
}

export interface Review {
  review_id: string;
  rating: number;
  comment: string;
  author_name: string;
  author_role: string;
  category: string;
  course_name: string;
  review_date: string;
  verified_student: boolean;
  detailed_comment: string;
  avatar: string;
}

export interface CategoryInfo {
  icon: string;
  description: string;
  popular_job: string;
  skills: string[];
  is_featured: boolean;
}

export const instituteInfo = {
  "name": "Apex Institute of Singapore",
  "tagline": "Learn Skills That Shape Your Future",
  "subheadline": "Industry-recognized courses, expert trainers, flexible learning formats, and professional certifications.",
  "registration_no": "UEN: 201829481E (EduTrust Singapore Certified & CPE Registered)",
  "skillsfuture_eligible": true,
  "utap_eligible": true,
  "total_courses": 100,
  "total_trainers": 30,
  "total_campuses": 10,
  "pass_rate": "98.6%",
  "graduates_count": "24,500+"
};
export const courses: Course[] = [
  {
    "course_id": "CR001",
    "course_name": "PSLE Preparation Professional Course 1",
    "category": "PSLE Preparation",
    "fee_sgd": 1015,
    "duration_weeks": 6,
    "format": "On-Campus",
    "campus": "Tampines",
    "trainer_id": "TR001",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    "rating": "4.8",
    "reviews_count": 28,
    "enrolled_count": 120,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 515,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in PSLE Preparation. Taught by industry-leading faculty at our modern Tampines campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR002",
    "course_name": "O-Level Preparation Professional Course 2",
    "category": "O-Level Preparation",
    "fee_sgd": 1030,
    "duration_weeks": 8,
    "format": "Hybrid",
    "campus": "Jurong East",
    "trainer_id": "TR002",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
    "rating": "4.8",
    "reviews_count": 35,
    "enrolled_count": 137,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 530,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in O-Level Preparation. Taught by industry-leading faculty at our modern Jurong East campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR003",
    "course_name": "A-Level Preparation Professional Course 3",
    "category": "A-Level Preparation",
    "fee_sgd": 1045,
    "duration_weeks": 10,
    "format": "Weekend",
    "campus": "Woodlands",
    "trainer_id": "TR003",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    "rating": "4.8",
    "reviews_count": 42,
    "enrolled_count": 154,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 545,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in A-Level Preparation. Taught by industry-leading faculty at our modern Woodlands campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR004",
    "course_name": "Coding & Robotics Professional Course 4",
    "category": "Coding & Robotics",
    "fee_sgd": 1060,
    "duration_weeks": 12,
    "format": "Evening",
    "campus": "Punggol",
    "trainer_id": "TR004",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 49,
    "enrolled_count": 171,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 560,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Coding & Robotics. Taught by industry-leading faculty at our modern Punggol campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR005",
    "course_name": "Python Programming Professional Course 5",
    "category": "Python Programming",
    "fee_sgd": 1075,
    "duration_weeks": 16,
    "format": "Online",
    "campus": "Bishan",
    "trainer_id": "TR005",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 56,
    "enrolled_count": 188,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 575,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Python Programming. Taught by industry-leading faculty at our modern Bishan campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR006",
    "course_name": "Data Analytics Professional Course 6",
    "category": "Data Analytics",
    "fee_sgd": 1090,
    "duration_weeks": 4,
    "format": "On-Campus",
    "campus": "Novena",
    "trainer_id": "TR006",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 63,
    "enrolled_count": 205,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 590,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Data Analytics. Taught by industry-leading faculty at our modern Novena campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR007",
    "course_name": "Artificial Intelligence Professional Course 7",
    "category": "Artificial Intelligence",
    "fee_sgd": 1105,
    "duration_weeks": 6,
    "format": "Hybrid",
    "campus": "Bedok",
    "trainer_id": "TR007",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 70,
    "enrolled_count": 222,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 605,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Artificial Intelligence. Taught by industry-leading faculty at our modern Bedok campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR008",
    "course_name": "Machine Learning Professional Course 8",
    "category": "Machine Learning",
    "fee_sgd": 1120,
    "duration_weeks": 8,
    "format": "Weekend",
    "campus": "Clementi",
    "trainer_id": "TR008",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 77,
    "enrolled_count": 239,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 620,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Machine Learning. Taught by industry-leading faculty at our modern Clementi campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR009",
    "course_name": "Cyber Security Professional Course 9",
    "category": "Cyber Security",
    "fee_sgd": 1135,
    "duration_weeks": 10,
    "format": "Evening",
    "campus": "City",
    "trainer_id": "TR009",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 84,
    "enrolled_count": 256,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 635,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Cyber Security. Taught by industry-leading faculty at our modern City campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR010",
    "course_name": "Cloud Computing Professional Course 10",
    "category": "Cloud Computing",
    "fee_sgd": 1150,
    "duration_weeks": 12,
    "format": "Online",
    "campus": "Orchard",
    "trainer_id": "TR010",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 91,
    "enrolled_count": 273,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 650,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Cloud Computing. Taught by industry-leading faculty at our modern Orchard campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR011",
    "course_name": "Digital Marketing Professional Course 11",
    "category": "Digital Marketing",
    "fee_sgd": 1165,
    "duration_weeks": 16,
    "format": "On-Campus",
    "campus": "Tampines",
    "trainer_id": "TR011",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 33,
    "enrolled_count": 290,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 665,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Digital Marketing. Taught by industry-leading faculty at our modern Tampines campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR012",
    "course_name": "Business Analytics Professional Course 12",
    "category": "Business Analytics",
    "fee_sgd": 1180,
    "duration_weeks": 4,
    "format": "Hybrid",
    "campus": "Jurong East",
    "trainer_id": "TR012",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 40,
    "enrolled_count": 307,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 680,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Business Analytics. Taught by industry-leading faculty at our modern Jurong East campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR013",
    "course_name": "English Professional Course 13",
    "category": "English",
    "fee_sgd": 1195,
    "duration_weeks": 6,
    "format": "Weekend",
    "campus": "Woodlands",
    "trainer_id": "TR013",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 47,
    "enrolled_count": 324,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 695,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in English. Taught by industry-leading faculty at our modern Woodlands campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR014",
    "course_name": "Mathematics Professional Course 14",
    "category": "Mathematics",
    "fee_sgd": 1210,
    "duration_weeks": 8,
    "format": "Evening",
    "campus": "Punggol",
    "trainer_id": "TR014",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 54,
    "enrolled_count": 341,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 710,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Mathematics. Taught by industry-leading faculty at our modern Punggol campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR015",
    "course_name": "Science Professional Course 15",
    "category": "Science",
    "fee_sgd": 1225,
    "duration_weeks": 10,
    "format": "Online",
    "campus": "Bishan",
    "trainer_id": "TR015",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 61,
    "enrolled_count": 358,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 725,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Science. Taught by industry-leading faculty at our modern Bishan campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR016",
    "course_name": "Chinese Professional Course 16",
    "category": "Chinese",
    "fee_sgd": 1240,
    "duration_weeks": 12,
    "format": "On-Campus",
    "campus": "Novena",
    "trainer_id": "TR016",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 68,
    "enrolled_count": 375,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 740,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Chinese. Taught by industry-leading faculty at our modern Novena campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR017",
    "course_name": "IB Programme Professional Course 17",
    "category": "IB Programme",
    "fee_sgd": 1255,
    "duration_weeks": 16,
    "format": "Hybrid",
    "campus": "Bedok",
    "trainer_id": "TR017",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 75,
    "enrolled_count": 392,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 755,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in IB Programme. Taught by industry-leading faculty at our modern Bedok campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR018",
    "course_name": "IGCSE Programme Professional Course 18",
    "category": "IGCSE Programme",
    "fee_sgd": 1270,
    "duration_weeks": 4,
    "format": "Weekend",
    "campus": "Clementi",
    "trainer_id": "TR018",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 82,
    "enrolled_count": 409,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 770,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in IGCSE Programme. Taught by industry-leading faculty at our modern Clementi campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR019",
    "course_name": "Power BI Professional Course 19",
    "category": "Power BI",
    "fee_sgd": 1285,
    "duration_weeks": 6,
    "format": "Evening",
    "campus": "City",
    "trainer_id": "TR019",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    "rating": "4.8",
    "reviews_count": 89,
    "enrolled_count": 426,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 785,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Power BI. Taught by industry-leading faculty at our modern City campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR020",
    "course_name": "Software Testing Professional Course 20",
    "category": "Software Testing",
    "fee_sgd": 1300,
    "duration_weeks": 8,
    "format": "Online",
    "campus": "Orchard",
    "trainer_id": "TR020",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    "rating": "4.8",
    "reviews_count": 31,
    "enrolled_count": 443,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 800,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Software Testing. Taught by industry-leading faculty at our modern Orchard campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR021",
    "course_name": "PSLE Preparation Professional Course 21",
    "category": "PSLE Preparation",
    "fee_sgd": 1315,
    "duration_weeks": 10,
    "format": "On-Campus",
    "campus": "Tampines",
    "trainer_id": "TR021",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
    "rating": "4.8",
    "reviews_count": 38,
    "enrolled_count": 460,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 815,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in PSLE Preparation. Taught by industry-leading faculty at our modern Tampines campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR022",
    "course_name": "O-Level Preparation Professional Course 22",
    "category": "O-Level Preparation",
    "fee_sgd": 1330,
    "duration_weeks": 12,
    "format": "Hybrid",
    "campus": "Jurong East",
    "trainer_id": "TR022",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 45,
    "enrolled_count": 477,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 830,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in O-Level Preparation. Taught by industry-leading faculty at our modern Jurong East campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR023",
    "course_name": "A-Level Preparation Professional Course 23",
    "category": "A-Level Preparation",
    "fee_sgd": 1345,
    "duration_weeks": 16,
    "format": "Weekend",
    "campus": "Woodlands",
    "trainer_id": "TR023",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 52,
    "enrolled_count": 494,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 845,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in A-Level Preparation. Taught by industry-leading faculty at our modern Woodlands campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR024",
    "course_name": "Coding & Robotics Professional Course 24",
    "category": "Coding & Robotics",
    "fee_sgd": 1360,
    "duration_weeks": 4,
    "format": "Evening",
    "campus": "Punggol",
    "trainer_id": "TR024",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 59,
    "enrolled_count": 131,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 860,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Coding & Robotics. Taught by industry-leading faculty at our modern Punggol campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR025",
    "course_name": "Python Programming Professional Course 25",
    "category": "Python Programming",
    "fee_sgd": 1375,
    "duration_weeks": 6,
    "format": "Online",
    "campus": "Bishan",
    "trainer_id": "TR025",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 66,
    "enrolled_count": 148,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 875,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Python Programming. Taught by industry-leading faculty at our modern Bishan campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR026",
    "course_name": "Data Analytics Professional Course 26",
    "category": "Data Analytics",
    "fee_sgd": 1390,
    "duration_weeks": 8,
    "format": "On-Campus",
    "campus": "Novena",
    "trainer_id": "TR026",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 73,
    "enrolled_count": 165,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 890,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Data Analytics. Taught by industry-leading faculty at our modern Novena campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR027",
    "course_name": "Artificial Intelligence Professional Course 27",
    "category": "Artificial Intelligence",
    "fee_sgd": 1405,
    "duration_weeks": 10,
    "format": "Hybrid",
    "campus": "Bedok",
    "trainer_id": "TR027",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 80,
    "enrolled_count": 182,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 905,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Artificial Intelligence. Taught by industry-leading faculty at our modern Bedok campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR028",
    "course_name": "Machine Learning Professional Course 28",
    "category": "Machine Learning",
    "fee_sgd": 1420,
    "duration_weeks": 12,
    "format": "Weekend",
    "campus": "Clementi",
    "trainer_id": "TR028",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 87,
    "enrolled_count": 199,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 920,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Machine Learning. Taught by industry-leading faculty at our modern Clementi campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR029",
    "course_name": "Cyber Security Professional Course 29",
    "category": "Cyber Security",
    "fee_sgd": 1435,
    "duration_weeks": 16,
    "format": "Evening",
    "campus": "City",
    "trainer_id": "TR029",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 29,
    "enrolled_count": 216,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 935,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Cyber Security. Taught by industry-leading faculty at our modern City campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR030",
    "course_name": "Cloud Computing Professional Course 30",
    "category": "Cloud Computing",
    "fee_sgd": 1450,
    "duration_weeks": 4,
    "format": "Online",
    "campus": "Orchard",
    "trainer_id": "TR030",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 36,
    "enrolled_count": 233,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 950,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Cloud Computing. Taught by industry-leading faculty at our modern Orchard campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR031",
    "course_name": "Digital Marketing Professional Course 31",
    "category": "Digital Marketing",
    "fee_sgd": 1465,
    "duration_weeks": 6,
    "format": "On-Campus",
    "campus": "Tampines",
    "trainer_id": "TR001",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 43,
    "enrolled_count": 250,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 965,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Digital Marketing. Taught by industry-leading faculty at our modern Tampines campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR032",
    "course_name": "Business Analytics Professional Course 32",
    "category": "Business Analytics",
    "fee_sgd": 1480,
    "duration_weeks": 8,
    "format": "Hybrid",
    "campus": "Jurong East",
    "trainer_id": "TR002",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 50,
    "enrolled_count": 267,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 980,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Business Analytics. Taught by industry-leading faculty at our modern Jurong East campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR033",
    "course_name": "English Professional Course 33",
    "category": "English",
    "fee_sgd": 1495,
    "duration_weeks": 10,
    "format": "Weekend",
    "campus": "Woodlands",
    "trainer_id": "TR003",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 57,
    "enrolled_count": 284,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 995,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in English. Taught by industry-leading faculty at our modern Woodlands campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR034",
    "course_name": "Mathematics Professional Course 34",
    "category": "Mathematics",
    "fee_sgd": 1510,
    "duration_weeks": 12,
    "format": "Evening",
    "campus": "Punggol",
    "trainer_id": "TR004",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 64,
    "enrolled_count": 301,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1010,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Mathematics. Taught by industry-leading faculty at our modern Punggol campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR035",
    "course_name": "Science Professional Course 35",
    "category": "Science",
    "fee_sgd": 1525,
    "duration_weeks": 16,
    "format": "Online",
    "campus": "Bishan",
    "trainer_id": "TR005",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 71,
    "enrolled_count": 318,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1025,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Science. Taught by industry-leading faculty at our modern Bishan campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR036",
    "course_name": "Chinese Professional Course 36",
    "category": "Chinese",
    "fee_sgd": 1540,
    "duration_weeks": 4,
    "format": "On-Campus",
    "campus": "Novena",
    "trainer_id": "TR006",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 78,
    "enrolled_count": 335,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1040,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Chinese. Taught by industry-leading faculty at our modern Novena campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR037",
    "course_name": "IB Programme Professional Course 37",
    "category": "IB Programme",
    "fee_sgd": 1555,
    "duration_weeks": 6,
    "format": "Hybrid",
    "campus": "Bedok",
    "trainer_id": "TR007",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    "rating": "4.8",
    "reviews_count": 85,
    "enrolled_count": 352,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1055,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in IB Programme. Taught by industry-leading faculty at our modern Bedok campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR038",
    "course_name": "IGCSE Programme Professional Course 38",
    "category": "IGCSE Programme",
    "fee_sgd": 1570,
    "duration_weeks": 8,
    "format": "Weekend",
    "campus": "Clementi",
    "trainer_id": "TR008",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
    "rating": "4.8",
    "reviews_count": 92,
    "enrolled_count": 369,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1070,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in IGCSE Programme. Taught by industry-leading faculty at our modern Clementi campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR039",
    "course_name": "Power BI Professional Course 39",
    "category": "Power BI",
    "fee_sgd": 1585,
    "duration_weeks": 10,
    "format": "Evening",
    "campus": "City",
    "trainer_id": "TR009",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    "rating": "4.8",
    "reviews_count": 34,
    "enrolled_count": 386,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1085,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Power BI. Taught by industry-leading faculty at our modern City campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR040",
    "course_name": "Software Testing Professional Course 40",
    "category": "Software Testing",
    "fee_sgd": 1600,
    "duration_weeks": 12,
    "format": "Online",
    "campus": "Orchard",
    "trainer_id": "TR010",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 41,
    "enrolled_count": 403,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1100,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Software Testing. Taught by industry-leading faculty at our modern Orchard campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR041",
    "course_name": "PSLE Preparation Professional Course 41",
    "category": "PSLE Preparation",
    "fee_sgd": 1615,
    "duration_weeks": 16,
    "format": "On-Campus",
    "campus": "Tampines",
    "trainer_id": "TR011",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 48,
    "enrolled_count": 420,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1115,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in PSLE Preparation. Taught by industry-leading faculty at our modern Tampines campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR042",
    "course_name": "O-Level Preparation Professional Course 42",
    "category": "O-Level Preparation",
    "fee_sgd": 1630,
    "duration_weeks": 4,
    "format": "Hybrid",
    "campus": "Jurong East",
    "trainer_id": "TR012",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 55,
    "enrolled_count": 437,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1130,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in O-Level Preparation. Taught by industry-leading faculty at our modern Jurong East campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR043",
    "course_name": "A-Level Preparation Professional Course 43",
    "category": "A-Level Preparation",
    "fee_sgd": 1645,
    "duration_weeks": 6,
    "format": "Weekend",
    "campus": "Woodlands",
    "trainer_id": "TR013",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 62,
    "enrolled_count": 454,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1145,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in A-Level Preparation. Taught by industry-leading faculty at our modern Woodlands campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR044",
    "course_name": "Coding & Robotics Professional Course 44",
    "category": "Coding & Robotics",
    "fee_sgd": 1660,
    "duration_weeks": 8,
    "format": "Evening",
    "campus": "Punggol",
    "trainer_id": "TR014",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 69,
    "enrolled_count": 471,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1160,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Coding & Robotics. Taught by industry-leading faculty at our modern Punggol campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR045",
    "course_name": "Python Programming Professional Course 45",
    "category": "Python Programming",
    "fee_sgd": 1675,
    "duration_weeks": 10,
    "format": "Online",
    "campus": "Bishan",
    "trainer_id": "TR015",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 76,
    "enrolled_count": 488,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1175,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Python Programming. Taught by industry-leading faculty at our modern Bishan campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR046",
    "course_name": "Data Analytics Professional Course 46",
    "category": "Data Analytics",
    "fee_sgd": 1690,
    "duration_weeks": 12,
    "format": "On-Campus",
    "campus": "Novena",
    "trainer_id": "TR016",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 83,
    "enrolled_count": 125,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1190,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Data Analytics. Taught by industry-leading faculty at our modern Novena campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR047",
    "course_name": "Artificial Intelligence Professional Course 47",
    "category": "Artificial Intelligence",
    "fee_sgd": 1705,
    "duration_weeks": 16,
    "format": "Hybrid",
    "campus": "Bedok",
    "trainer_id": "TR017",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 90,
    "enrolled_count": 142,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1205,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Artificial Intelligence. Taught by industry-leading faculty at our modern Bedok campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR048",
    "course_name": "Machine Learning Professional Course 48",
    "category": "Machine Learning",
    "fee_sgd": 1720,
    "duration_weeks": 4,
    "format": "Weekend",
    "campus": "Clementi",
    "trainer_id": "TR018",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 32,
    "enrolled_count": 159,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1220,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Machine Learning. Taught by industry-leading faculty at our modern Clementi campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR049",
    "course_name": "Cyber Security Professional Course 49",
    "category": "Cyber Security",
    "fee_sgd": 1735,
    "duration_weeks": 6,
    "format": "Evening",
    "campus": "City",
    "trainer_id": "TR019",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 39,
    "enrolled_count": 176,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1235,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Cyber Security. Taught by industry-leading faculty at our modern City campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR050",
    "course_name": "Cloud Computing Professional Course 50",
    "category": "Cloud Computing",
    "fee_sgd": 1750,
    "duration_weeks": 8,
    "format": "Online",
    "campus": "Orchard",
    "trainer_id": "TR020",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 46,
    "enrolled_count": 193,
    "schedule_time": "10:00-13:00",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1250,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Cloud Computing. Taught by industry-leading faculty at our modern Orchard campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR051",
    "course_name": "Digital Marketing Professional Course 51",
    "category": "Digital Marketing",
    "fee_sgd": 1765,
    "duration_weeks": 10,
    "format": "On-Campus",
    "campus": "Tampines",
    "trainer_id": "TR021",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 53,
    "enrolled_count": 210,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1265,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Digital Marketing. Taught by industry-leading faculty at our modern Tampines campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR052",
    "course_name": "Business Analytics Professional Course 52",
    "category": "Business Analytics",
    "fee_sgd": 1780,
    "duration_weeks": 12,
    "format": "Hybrid",
    "campus": "Jurong East",
    "trainer_id": "TR022",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 60,
    "enrolled_count": 227,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1280,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Business Analytics. Taught by industry-leading faculty at our modern Jurong East campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR053",
    "course_name": "English Professional Course 53",
    "category": "English",
    "fee_sgd": 1795,
    "duration_weeks": 16,
    "format": "Weekend",
    "campus": "Woodlands",
    "trainer_id": "TR023",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 67,
    "enrolled_count": 244,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1295,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in English. Taught by industry-leading faculty at our modern Woodlands campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR054",
    "course_name": "Mathematics Professional Course 54",
    "category": "Mathematics",
    "fee_sgd": 1810,
    "duration_weeks": 4,
    "format": "Evening",
    "campus": "Punggol",
    "trainer_id": "TR024",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 74,
    "enrolled_count": 261,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1310,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Mathematics. Taught by industry-leading faculty at our modern Punggol campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR055",
    "course_name": "Science Professional Course 55",
    "category": "Science",
    "fee_sgd": 1825,
    "duration_weeks": 6,
    "format": "Online",
    "campus": "Bishan",
    "trainer_id": "TR025",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    "rating": "4.8",
    "reviews_count": 81,
    "enrolled_count": 278,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1325,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Science. Taught by industry-leading faculty at our modern Bishan campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR056",
    "course_name": "Chinese Professional Course 56",
    "category": "Chinese",
    "fee_sgd": 1840,
    "duration_weeks": 8,
    "format": "On-Campus",
    "campus": "Novena",
    "trainer_id": "TR026",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    "rating": "4.8",
    "reviews_count": 88,
    "enrolled_count": 295,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1340,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Chinese. Taught by industry-leading faculty at our modern Novena campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR057",
    "course_name": "IB Programme Professional Course 57",
    "category": "IB Programme",
    "fee_sgd": 1855,
    "duration_weeks": 10,
    "format": "Hybrid",
    "campus": "Bedok",
    "trainer_id": "TR027",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    "rating": "4.8",
    "reviews_count": 30,
    "enrolled_count": 312,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1355,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in IB Programme. Taught by industry-leading faculty at our modern Bedok campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR058",
    "course_name": "IGCSE Programme Professional Course 58",
    "category": "IGCSE Programme",
    "fee_sgd": 1870,
    "duration_weeks": 12,
    "format": "Weekend",
    "campus": "Clementi",
    "trainer_id": "TR028",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 37,
    "enrolled_count": 329,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1370,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in IGCSE Programme. Taught by industry-leading faculty at our modern Clementi campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR059",
    "course_name": "Power BI Professional Course 59",
    "category": "Power BI",
    "fee_sgd": 1885,
    "duration_weeks": 16,
    "format": "Evening",
    "campus": "City",
    "trainer_id": "TR029",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 44,
    "enrolled_count": 346,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1385,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Power BI. Taught by industry-leading faculty at our modern City campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR060",
    "course_name": "Software Testing Professional Course 60",
    "category": "Software Testing",
    "fee_sgd": 1900,
    "duration_weeks": 4,
    "format": "Online",
    "campus": "Orchard",
    "trainer_id": "TR030",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 51,
    "enrolled_count": 363,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1400,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Software Testing. Taught by industry-leading faculty at our modern Orchard campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR061",
    "course_name": "PSLE Preparation Professional Course 61",
    "category": "PSLE Preparation",
    "fee_sgd": 1915,
    "duration_weeks": 6,
    "format": "On-Campus",
    "campus": "Tampines",
    "trainer_id": "TR001",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 58,
    "enrolled_count": 380,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1415,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in PSLE Preparation. Taught by industry-leading faculty at our modern Tampines campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR062",
    "course_name": "O-Level Preparation Professional Course 62",
    "category": "O-Level Preparation",
    "fee_sgd": 1930,
    "duration_weeks": 8,
    "format": "Hybrid",
    "campus": "Jurong East",
    "trainer_id": "TR002",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 65,
    "enrolled_count": 397,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1430,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in O-Level Preparation. Taught by industry-leading faculty at our modern Jurong East campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR063",
    "course_name": "A-Level Preparation Professional Course 63",
    "category": "A-Level Preparation",
    "fee_sgd": 1945,
    "duration_weeks": 10,
    "format": "Weekend",
    "campus": "Woodlands",
    "trainer_id": "TR003",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 72,
    "enrolled_count": 414,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1445,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in A-Level Preparation. Taught by industry-leading faculty at our modern Woodlands campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR064",
    "course_name": "Coding & Robotics Professional Course 64",
    "category": "Coding & Robotics",
    "fee_sgd": 1960,
    "duration_weeks": 12,
    "format": "Evening",
    "campus": "Punggol",
    "trainer_id": "TR004",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 79,
    "enrolled_count": 431,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1460,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Coding & Robotics. Taught by industry-leading faculty at our modern Punggol campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR065",
    "course_name": "Python Programming Professional Course 65",
    "category": "Python Programming",
    "fee_sgd": 1975,
    "duration_weeks": 16,
    "format": "Online",
    "campus": "Bishan",
    "trainer_id": "TR005",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 86,
    "enrolled_count": 448,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1475,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Python Programming. Taught by industry-leading faculty at our modern Bishan campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR066",
    "course_name": "Data Analytics Professional Course 66",
    "category": "Data Analytics",
    "fee_sgd": 1990,
    "duration_weeks": 4,
    "format": "On-Campus",
    "campus": "Novena",
    "trainer_id": "TR006",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 28,
    "enrolled_count": 465,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1490,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Data Analytics. Taught by industry-leading faculty at our modern Novena campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR067",
    "course_name": "Artificial Intelligence Professional Course 67",
    "category": "Artificial Intelligence",
    "fee_sgd": 2005,
    "duration_weeks": 6,
    "format": "Hybrid",
    "campus": "Bedok",
    "trainer_id": "TR007",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 35,
    "enrolled_count": 482,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1505,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Artificial Intelligence. Taught by industry-leading faculty at our modern Bedok campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR068",
    "course_name": "Machine Learning Professional Course 68",
    "category": "Machine Learning",
    "fee_sgd": 2020,
    "duration_weeks": 8,
    "format": "Weekend",
    "campus": "Clementi",
    "trainer_id": "TR008",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 42,
    "enrolled_count": 499,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1520,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Machine Learning. Taught by industry-leading faculty at our modern Clementi campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR069",
    "course_name": "Cyber Security Professional Course 69",
    "category": "Cyber Security",
    "fee_sgd": 2035,
    "duration_weeks": 10,
    "format": "Evening",
    "campus": "City",
    "trainer_id": "TR009",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 49,
    "enrolled_count": 136,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1535,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Cyber Security. Taught by industry-leading faculty at our modern City campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR070",
    "course_name": "Cloud Computing Professional Course 70",
    "category": "Cloud Computing",
    "fee_sgd": 2050,
    "duration_weeks": 12,
    "format": "Online",
    "campus": "Orchard",
    "trainer_id": "TR010",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 56,
    "enrolled_count": 153,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1550,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Cloud Computing. Taught by industry-leading faculty at our modern Orchard campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR071",
    "course_name": "Digital Marketing Professional Course 71",
    "category": "Digital Marketing",
    "fee_sgd": 2065,
    "duration_weeks": 16,
    "format": "On-Campus",
    "campus": "Tampines",
    "trainer_id": "TR011",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 63,
    "enrolled_count": 170,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1565,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Digital Marketing. Taught by industry-leading faculty at our modern Tampines campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR072",
    "course_name": "Business Analytics Professional Course 72",
    "category": "Business Analytics",
    "fee_sgd": 2080,
    "duration_weeks": 4,
    "format": "Hybrid",
    "campus": "Jurong East",
    "trainer_id": "TR012",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 70,
    "enrolled_count": 187,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1580,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Business Analytics. Taught by industry-leading faculty at our modern Jurong East campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR073",
    "course_name": "English Professional Course 73",
    "category": "English",
    "fee_sgd": 2095,
    "duration_weeks": 6,
    "format": "Weekend",
    "campus": "Woodlands",
    "trainer_id": "TR013",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80",
    "rating": "4.8",
    "reviews_count": 77,
    "enrolled_count": 204,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1595,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in English. Taught by industry-leading faculty at our modern Woodlands campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR074",
    "course_name": "Mathematics Professional Course 74",
    "category": "Mathematics",
    "fee_sgd": 2110,
    "duration_weeks": 8,
    "format": "Evening",
    "campus": "Punggol",
    "trainer_id": "TR014",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    "rating": "4.8",
    "reviews_count": 84,
    "enrolled_count": 221,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1610,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Mathematics. Taught by industry-leading faculty at our modern Punggol campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR075",
    "course_name": "Science Professional Course 75",
    "category": "Science",
    "fee_sgd": 2125,
    "duration_weeks": 10,
    "format": "Online",
    "campus": "Bishan",
    "trainer_id": "TR015",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
    "rating": "4.8",
    "reviews_count": 91,
    "enrolled_count": 238,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1625,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Science. Taught by industry-leading faculty at our modern Bishan campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR076",
    "course_name": "Chinese Professional Course 76",
    "category": "Chinese",
    "fee_sgd": 2140,
    "duration_weeks": 12,
    "format": "On-Campus",
    "campus": "Novena",
    "trainer_id": "TR016",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 33,
    "enrolled_count": 255,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1640,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Chinese. Taught by industry-leading faculty at our modern Novena campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR077",
    "course_name": "IB Programme Professional Course 77",
    "category": "IB Programme",
    "fee_sgd": 2155,
    "duration_weeks": 16,
    "format": "Hybrid",
    "campus": "Bedok",
    "trainer_id": "TR017",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 40,
    "enrolled_count": 272,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1655,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in IB Programme. Taught by industry-leading faculty at our modern Bedok campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR078",
    "course_name": "IGCSE Programme Professional Course 78",
    "category": "IGCSE Programme",
    "fee_sgd": 2170,
    "duration_weeks": 4,
    "format": "Weekend",
    "campus": "Clementi",
    "trainer_id": "TR018",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 47,
    "enrolled_count": 289,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1670,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in IGCSE Programme. Taught by industry-leading faculty at our modern Clementi campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR079",
    "course_name": "Power BI Professional Course 79",
    "category": "Power BI",
    "fee_sgd": 2185,
    "duration_weeks": 6,
    "format": "Evening",
    "campus": "City",
    "trainer_id": "TR019",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 54,
    "enrolled_count": 306,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1685,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Power BI. Taught by industry-leading faculty at our modern City campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR080",
    "course_name": "Software Testing Professional Course 80",
    "category": "Software Testing",
    "fee_sgd": 2200,
    "duration_weeks": 8,
    "format": "Online",
    "campus": "Orchard",
    "trainer_id": "TR020",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 61,
    "enrolled_count": 323,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1700,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Software Testing. Taught by industry-leading faculty at our modern Orchard campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR081",
    "course_name": "PSLE Preparation Professional Course 81",
    "category": "PSLE Preparation",
    "fee_sgd": 2215,
    "duration_weeks": 10,
    "format": "On-Campus",
    "campus": "Tampines",
    "trainer_id": "TR021",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 68,
    "enrolled_count": 340,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1715,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in PSLE Preparation. Taught by industry-leading faculty at our modern Tampines campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR082",
    "course_name": "O-Level Preparation Professional Course 82",
    "category": "O-Level Preparation",
    "fee_sgd": 2230,
    "duration_weeks": 12,
    "format": "Hybrid",
    "campus": "Jurong East",
    "trainer_id": "TR022",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 75,
    "enrolled_count": 357,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1730,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in O-Level Preparation. Taught by industry-leading faculty at our modern Jurong East campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR083",
    "course_name": "A-Level Preparation Professional Course 83",
    "category": "A-Level Preparation",
    "fee_sgd": 2245,
    "duration_weeks": 16,
    "format": "Weekend",
    "campus": "Woodlands",
    "trainer_id": "TR023",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 82,
    "enrolled_count": 374,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1745,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in A-Level Preparation. Taught by industry-leading faculty at our modern Woodlands campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR084",
    "course_name": "Coding & Robotics Professional Course 84",
    "category": "Coding & Robotics",
    "fee_sgd": 2260,
    "duration_weeks": 4,
    "format": "Evening",
    "campus": "Punggol",
    "trainer_id": "TR024",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 89,
    "enrolled_count": 391,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1760,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Coding & Robotics. Taught by industry-leading faculty at our modern Punggol campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR085",
    "course_name": "Python Programming Professional Course 85",
    "category": "Python Programming",
    "fee_sgd": 2275,
    "duration_weeks": 6,
    "format": "Online",
    "campus": "Bishan",
    "trainer_id": "TR025",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 31,
    "enrolled_count": 408,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1775,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Python Programming. Taught by industry-leading faculty at our modern Bishan campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR086",
    "course_name": "Data Analytics Professional Course 86",
    "category": "Data Analytics",
    "fee_sgd": 2290,
    "duration_weeks": 8,
    "format": "On-Campus",
    "campus": "Novena",
    "trainer_id": "TR026",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 38,
    "enrolled_count": 425,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1790,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Data Analytics. Taught by industry-leading faculty at our modern Novena campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR087",
    "course_name": "Artificial Intelligence Professional Course 87",
    "category": "Artificial Intelligence",
    "fee_sgd": 2305,
    "duration_weeks": 10,
    "format": "Hybrid",
    "campus": "Bedok",
    "trainer_id": "TR027",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 45,
    "enrolled_count": 442,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1805,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Artificial Intelligence. Taught by industry-leading faculty at our modern Bedok campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR088",
    "course_name": "Machine Learning Professional Course 88",
    "category": "Machine Learning",
    "fee_sgd": 2320,
    "duration_weeks": 12,
    "format": "Weekend",
    "campus": "Clementi",
    "trainer_id": "TR028",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 52,
    "enrolled_count": 459,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1820,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Machine Learning. Taught by industry-leading faculty at our modern Clementi campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR089",
    "course_name": "Cyber Security Professional Course 89",
    "category": "Cyber Security",
    "fee_sgd": 2335,
    "duration_weeks": 16,
    "format": "Evening",
    "campus": "City",
    "trainer_id": "TR029",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 59,
    "enrolled_count": 476,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1835,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Cyber Security. Taught by industry-leading faculty at our modern City campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR090",
    "course_name": "Cloud Computing Professional Course 90",
    "category": "Cloud Computing",
    "fee_sgd": 2350,
    "duration_weeks": 4,
    "format": "Online",
    "campus": "Orchard",
    "trainer_id": "TR030",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
    "rating": "5.0",
    "reviews_count": 66,
    "enrolled_count": 493,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1850,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Cloud Computing. Taught by industry-leading faculty at our modern Orchard campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR091",
    "course_name": "Digital Marketing Professional Course 91",
    "category": "Digital Marketing",
    "fee_sgd": 2365,
    "duration_weeks": 6,
    "format": "On-Campus",
    "campus": "Tampines",
    "trainer_id": "TR001",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    "rating": "4.8",
    "reviews_count": 73,
    "enrolled_count": 130,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1865,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Digital Marketing. Taught by industry-leading faculty at our modern Tampines campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR092",
    "course_name": "Business Analytics Professional Course 92",
    "category": "Business Analytics",
    "fee_sgd": 2380,
    "duration_weeks": 8,
    "format": "Hybrid",
    "campus": "Jurong East",
    "trainer_id": "TR002",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    "rating": "4.8",
    "reviews_count": 80,
    "enrolled_count": 147,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1880,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Business Analytics. Taught by industry-leading faculty at our modern Jurong East campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR093",
    "course_name": "English Professional Course 93",
    "category": "English",
    "fee_sgd": 2395,
    "duration_weeks": 10,
    "format": "Weekend",
    "campus": "Woodlands",
    "trainer_id": "TR003",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    "rating": "4.8",
    "reviews_count": 87,
    "enrolled_count": 164,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1895,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in English. Taught by industry-leading faculty at our modern Woodlands campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR094",
    "course_name": "Mathematics Professional Course 94",
    "category": "Mathematics",
    "fee_sgd": 2410,
    "duration_weeks": 12,
    "format": "Evening",
    "campus": "Punggol",
    "trainer_id": "TR004",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 29,
    "enrolled_count": 181,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1910,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Mathematics. Taught by industry-leading faculty at our modern Punggol campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR095",
    "course_name": "Science Professional Course 95",
    "category": "Science",
    "fee_sgd": 2425,
    "duration_weeks": 16,
    "format": "Online",
    "campus": "Bishan",
    "trainer_id": "TR005",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 36,
    "enrolled_count": 198,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1925,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Science. Taught by industry-leading faculty at our modern Bishan campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR096",
    "course_name": "Chinese Professional Course 96",
    "category": "Chinese",
    "fee_sgd": 2440,
    "duration_weeks": 4,
    "format": "On-Campus",
    "campus": "Novena",
    "trainer_id": "TR006",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 43,
    "enrolled_count": 215,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1940,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Chinese. Taught by industry-leading faculty at our modern Novena campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR097",
    "course_name": "IB Programme Professional Course 97",
    "category": "IB Programme",
    "fee_sgd": 2455,
    "duration_weeks": 6,
    "format": "Hybrid",
    "campus": "Bedok",
    "trainer_id": "TR007",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 50,
    "enrolled_count": 232,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1955,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in IB Programme. Taught by industry-leading faculty at our modern Bedok campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR098",
    "course_name": "IGCSE Programme Professional Course 98",
    "category": "IGCSE Programme",
    "fee_sgd": 2470,
    "duration_weeks": 8,
    "format": "Weekend",
    "campus": "Clementi",
    "trainer_id": "TR008",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 57,
    "enrolled_count": 249,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1970,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in IGCSE Programme. Taught by industry-leading faculty at our modern Clementi campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR099",
    "course_name": "Power BI Professional Course 99",
    "category": "Power BI",
    "fee_sgd": 2485,
    "duration_weeks": 10,
    "format": "Evening",
    "campus": "City",
    "trainer_id": "TR009",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 64,
    "enrolled_count": 266,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 1985,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Power BI. Taught by industry-leading faculty at our modern City campus with full hands-on labs and Singapore certification."
  },
  {
    "course_id": "CR100",
    "course_name": "Software Testing Professional Course 100",
    "category": "Software Testing",
    "fee_sgd": 2500,
    "duration_weeks": 12,
    "format": "Online",
    "campus": "Orchard",
    "trainer_id": "TR010",
    "admission_requirement": "Registration required",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    "rating": "4.9",
    "reviews_count": 71,
    "enrolled_count": 283,
    "schedule_time": "10:00-13:00 (Sat & Sun)",
    "trial_seats": 20,
    "skillsfuture_eligible": true,
    "skillsfuture_subsidy_sgd": 500,
    "net_fee_sgd": 2000,
    "curriculum": [
      {
        "module": "Module 1: Foundations & Core Architecture",
        "duration": "Week 1 - 2",
        "topics": [
          "Fundamental concepts, industry standards, and diagnostic baseline evaluation",
          "Setting up professional development / examination practice environment",
          "Core methodology breakdown, syntax/framework essentials, and guided hands-on lab"
        ]
      },
      {
        "module": "Module 2: Intermediate Deep Dive & Problem Solving",
        "duration": "Week 3 - 5",
        "topics": [
          "Heuristic frameworks, structural modeling, and intermediate analytical patterns",
          "Real-world case simulations and past examination benchmark breakdowns",
          "Debugging, optimization techniques, and error reduction strategies"
        ]
      },
      {
        "module": "Module 3: Advanced Applications & Capstone Project",
        "duration": "Week 6 - 8",
        "topics": [
          "High-complexity application design, advanced heuristics, and synthesis",
          "Comprehensive capstone challenge / timed mock examination under real test conditions",
          "Individual trainer feedback, grading rubric review, and fine-tuning"
        ]
      },
      {
        "module": "Module 4: Professional Certification & Career / Exam Readiness",
        "duration": "Final Weeks",
        "topics": [
          "Accreditation exam walkthrough and comprehensive portfolio defense",
          "Industry best practices, interview readiness / examination distinction strategy",
          "Issuance of verified digital credential and graduation ceremony"
        ]
      }
    ],
    "outcomes": [
      "Master essential core competencies and frameworks aligned with Singapore standards",
      "Build verified hands-on projects and realistic case study solutions",
      "Attain accredited certification recognized by Singapore employers and educational institutions",
      "Gain 1-on-1 mentorship, personalized diagnostics, and distinction-level confidence"
    ],
    "overview": "A premier commercial training programme designed to develop high-level proficiency in Software Testing. Taught by industry-leading faculty at our modern Orchard campus with full hands-on labs and Singapore certification."
  }
];
export const trainers: Trainer[] = [
  {
    "trainer_id": "TR001",
    "name": "Trainer 1",
    "experience_years": 4,
    "specialization": "PSLE Preparation",
    "display_name": "Trainer 1 (Dr. Lin Chen)",
    "full_name": "Dr. Lin Chen",
    "title": "PhD (NIE / NTU), Ex-MOE Curriculum Lead",
    "bio": "Former MOE Lead Curriculum Specialist with 15+ years formulating pedagogy for Singapore primary schools. Over 94% of her students score AL1/AL2 in PSLE.",
    "photo": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    "rating": "4.85",
    "students_count": 350,
    "qualifications": [
      "PhD (NIE / NTU)",
      "Ex-MOE Curriculum Lead"
    ],
    "courses_taught": [
      "CR001",
      "CR031",
      "CR061",
      "CR091"
    ]
  },
  {
    "trainer_id": "TR002",
    "name": "Trainer 2",
    "experience_years": 5,
    "specialization": "O-Level Preparation",
    "display_name": "Trainer 2 (Marcus Goh)",
    "full_name": "Marcus Goh",
    "title": "MSc Mathematics (NUS), Distinction Coach",
    "bio": "Specialist in O-Level Additional & Elementary Mathematics. Known for his systematic \"Heuristic Breakdown\" method that turns C6 grades into A1s.",
    "photo": "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
    "rating": "4.86",
    "students_count": 397,
    "qualifications": [
      "MSc Mathematics (NUS)",
      "Distinction Coach"
    ],
    "courses_taught": [
      "CR002",
      "CR032",
      "CR062",
      "CR092"
    ]
  },
  {
    "trainer_id": "TR003",
    "name": "Trainer 3",
    "experience_years": 6,
    "specialization": "A-Level Preparation",
    "display_name": "Trainer 3 (Clarissa Wong)",
    "full_name": "Clarissa Wong",
    "title": "MA English Literature (Cambridge University)",
    "bio": "Cambridge First-Class Honours graduate specializing in A-Level General Paper and H2 Literature. Regular contributor to Singapore educational journals.",
    "photo": "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=500&q=80",
    "rating": "4.87",
    "students_count": 444,
    "qualifications": [
      "MA English Literature (Cambridge University)"
    ],
    "courses_taught": [
      "CR003",
      "CR033",
      "CR063",
      "CR093"
    ]
  },
  {
    "trainer_id": "TR004",
    "name": "Trainer 4",
    "experience_years": 7,
    "specialization": "Coding & Robotics",
    "display_name": "Trainer 4 (Adrian Lim)",
    "full_name": "Adrian Lim",
    "title": "BEng Robotics & Mechatronics (NTU), FIRST Mentor",
    "bio": "World Robot Olympiad gold-medal winning coach. Passionate about empowering young learners with physical computing, Arduino, and ROS.",
    "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    "rating": "4.88",
    "students_count": 491,
    "qualifications": [
      "BEng Robotics & Mechatronics (NTU)",
      "FIRST Mentor"
    ],
    "courses_taught": [
      "CR004",
      "CR034",
      "CR064",
      "CR094"
    ]
  },
  {
    "trainer_id": "TR005",
    "name": "Trainer 5",
    "experience_years": 8,
    "specialization": "Python Programming",
    "display_name": "Trainer 5 (David Zhang)",
    "full_name": "David Zhang",
    "title": "MSc Computer Science (Carnegie Mellon), Ex-Shopee",
    "bio": "Principal Software Architect and Python veteran. Designed large-scale distributed systems and trained over 1,200 software engineers across ASEAN.",
    "photo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    "rating": "4.89",
    "students_count": 538,
    "qualifications": [
      "MSc Computer Science (Carnegie Mellon)",
      "Ex-Shopee"
    ],
    "courses_taught": [
      "CR005",
      "CR035",
      "CR065",
      "CR095"
    ]
  },
  {
    "trainer_id": "TR006",
    "name": "Trainer 6",
    "experience_years": 9,
    "specialization": "Data Analytics",
    "display_name": "Trainer 6 (Dr. Valerie Koh)",
    "full_name": "Dr. Valerie Koh",
    "title": "PhD Statistics & Data Science (Stanford)",
    "bio": "Former Senior Data Scientist at GovTech Singapore. Expert in exploratory data analysis, predictive modeling, and executive business insights.",
    "photo": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80",
    "rating": "4.90",
    "students_count": 585,
    "qualifications": [
      "PhD Statistics & Data Science (Stanford)"
    ],
    "courses_taught": [
      "CR006",
      "CR036",
      "CR066",
      "CR096"
    ]
  },
  {
    "trainer_id": "TR007",
    "name": "Trainer 7",
    "experience_years": 10,
    "specialization": "Artificial Intelligence",
    "display_name": "Trainer 7 (Rajesh Nair)",
    "full_name": "Rajesh Nair",
    "title": "MTech Artificial Intelligence (NUS), Google Developer Expert",
    "bio": "Deep learning practitioner with focus on computer vision and LLM fine-tuning. Consulted for top Southeast Asian banks and tech unicorns.",
    "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    "rating": "4.91",
    "students_count": 632,
    "qualifications": [
      "MTech Artificial Intelligence (NUS)",
      "Google Developer Expert"
    ],
    "courses_taught": [
      "CR007",
      "CR037",
      "CR067",
      "CR097"
    ]
  },
  {
    "trainer_id": "TR008",
    "name": "Trainer 8",
    "experience_years": 11,
    "specialization": "Machine Learning",
    "display_name": "Trainer 8 (Prof. Kenneth Lee)",
    "full_name": "Prof. Kenneth Lee",
    "title": "PhD Machine Learning (Imperial College London)",
    "bio": "Adjunct Professor and Machine Learning researcher with 11+ years consulting for SGX-listed corporations on algorithmic optimization.",
    "photo": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
    "rating": "4.92",
    "students_count": 679,
    "qualifications": [
      "PhD Machine Learning (Imperial College London)"
    ],
    "courses_taught": [
      "CR008",
      "CR038",
      "CR068",
      "CR098"
    ]
  },
  {
    "trainer_id": "TR009",
    "name": "Trainer 9",
    "experience_years": 12,
    "specialization": "Cyber Security",
    "display_name": "Trainer 9 (Bernard Tan)",
    "full_name": "Bernard Tan",
    "title": "CISSP, CISM, CREST Lead Pentester",
    "bio": "Cyber security veteran with military intelligence and enterprise Red Team experience. Mentor for national cyber defense competitions in Singapore.",
    "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
    "rating": "4.93",
    "students_count": 726,
    "qualifications": [
      "CISSP",
      "CISM",
      "CREST Lead Pentester"
    ],
    "courses_taught": [
      "CR009",
      "CR039",
      "CR069",
      "CR099"
    ]
  },
  {
    "trainer_id": "TR010",
    "name": "Trainer 10",
    "experience_years": 13,
    "specialization": "Cloud Computing",
    "display_name": "Trainer 10 (Kelvin Ho)",
    "full_name": "Kelvin Ho",
    "title": "AWS Hero & Google Cloud Certified Fellow",
    "bio": "Solutions architect who has migrated multi-million dollar banking workloads to Kubernetes and serverless cloud architectures.",
    "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
    "rating": "4.94",
    "students_count": 773,
    "qualifications": [
      "AWS Hero & Google Cloud Certified Fellow"
    ],
    "courses_taught": [
      "CR010",
      "CR040",
      "CR070",
      "CR100"
    ]
  },
  {
    "trainer_id": "TR011",
    "name": "Trainer 11",
    "experience_years": 14,
    "specialization": "Digital Marketing",
    "display_name": "Trainer 11 (Audrey Sim)",
    "full_name": "Audrey Sim",
    "title": "MBA (INSEAD), Ex-Meta Growth Strategist",
    "bio": "Performance marketing maestro having managed $20M+ in digital ad spend across APAC. Teaches omnichannel data-driven growth.",
    "photo": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=500&q=80",
    "rating": "4.95",
    "students_count": 820,
    "qualifications": [
      "MBA (INSEAD)",
      "Ex-Meta Growth Strategist"
    ],
    "courses_taught": [
      "CR011",
      "CR041",
      "CR071"
    ]
  },
  {
    "trainer_id": "TR012",
    "name": "Trainer 12",
    "experience_years": 15,
    "specialization": "Business Analytics",
    "display_name": "Trainer 12 (Benjamin Lim)",
    "full_name": "Benjamin Lim",
    "title": "MSc Financial Analytics (SMU), CFA",
    "bio": "Corporate strategy director transforming raw operational metrics into board-level analytics dashboards and strategic growth roadmaps.",
    "photo": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=80",
    "rating": "4.96",
    "students_count": 867,
    "qualifications": [
      "MSc Financial Analytics (SMU)",
      "CFA"
    ],
    "courses_taught": [
      "CR012",
      "CR042",
      "CR072"
    ]
  },
  {
    "trainer_id": "TR013",
    "name": "Trainer 13",
    "experience_years": 3,
    "specialization": "English",
    "display_name": "Trainer 13 (Rachel Tan)",
    "full_name": "Rachel Tan",
    "title": "MA Applied Linguistics (Warwick University)",
    "bio": "Specialist in English phonetics, rhetoric, and international academic examinations. Over 90% of her IELTS students attain Band 8.0 or higher.",
    "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
    "rating": "4.97",
    "students_count": 914,
    "qualifications": [
      "MA Applied Linguistics (Warwick University)"
    ],
    "courses_taught": [
      "CR013",
      "CR043",
      "CR073"
    ]
  },
  {
    "trainer_id": "TR014",
    "name": "Trainer 14",
    "experience_years": 4,
    "specialization": "Mathematics",
    "display_name": "Trainer 14 (Jonathan Seah)",
    "full_name": "Jonathan Seah",
    "title": "BSc Mathematics (1st Class Hons, NUS)",
    "bio": "Singapore Mathematical Olympiad medalist. Passionate about deconstructing complex algebraic proofs into intuitive visual steps.",
    "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80",
    "rating": "4.98",
    "students_count": 961,
    "qualifications": [
      "BSc Mathematics (1st Class Hons",
      "NUS)"
    ],
    "courses_taught": [
      "CR014",
      "CR044",
      "CR074"
    ]
  },
  {
    "trainer_id": "TR015",
    "name": "Trainer 15",
    "experience_years": 5,
    "specialization": "Science",
    "display_name": "Trainer 15 (Dr. Eugene Ng)",
    "full_name": "Dr. Eugene Ng",
    "title": "PhD Biomedical Engineering (NTU)",
    "bio": "Published researcher in biomedical physics and biology. Integrates hands-on experimental inquiry to instill genuine scientific curiosity.",
    "photo": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=500&q=80",
    "rating": "4.99",
    "students_count": 1008,
    "qualifications": [
      "PhD Biomedical Engineering (NTU)"
    ],
    "courses_taught": [
      "CR015",
      "CR045",
      "CR075"
    ]
  },
  {
    "trainer_id": "TR016",
    "name": "Trainer 16",
    "experience_years": 6,
    "specialization": "Chinese",
    "display_name": "Trainer 16 (Li Wei)",
    "full_name": "Li Wei",
    "title": "MA Chinese Pedagogy (Peking University)",
    "bio": "Master educator specializing in Higher Chinese essay writing, oral discourse, and modern Chinese literature for secondary and junior college.",
    "photo": "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=500&q=80",
    "rating": "4.85",
    "students_count": 1055,
    "qualifications": [
      "MA Chinese Pedagogy (Peking University)"
    ],
    "courses_taught": [
      "CR016",
      "CR046",
      "CR076"
    ]
  },
  {
    "trainer_id": "TR017",
    "name": "Trainer 17",
    "experience_years": 7,
    "specialization": "IB Programme",
    "display_name": "Trainer 17 (Dr. Fiona Campbell)",
    "full_name": "Dr. Fiona Campbell",
    "title": "PhD Comparative Education (Oxford)",
    "bio": "Senior IBDP Examiner with deep mastery of Theory of Knowledge (TOK), Extended Essays, and Higher Level subject moderation.",
    "photo": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
    "rating": "4.86",
    "students_count": 1102,
    "qualifications": [
      "PhD Comparative Education (Oxford)"
    ],
    "courses_taught": [
      "CR017",
      "CR047",
      "CR077"
    ]
  },
  {
    "trainer_id": "TR018",
    "name": "Trainer 18",
    "experience_years": 8,
    "specialization": "IGCSE Programme",
    "display_name": "Trainer 18 (Stuart Mitchell)",
    "full_name": "Stuart Mitchell",
    "title": "MA Education (University of Edinburgh)",
    "bio": "Cambridge Assessment accredited trainer having prepared hundreds of international students across Singapore for top global boarding schools.",
    "photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=500&q=80",
    "rating": "4.87",
    "students_count": 1149,
    "qualifications": [
      "MA Education (University of Edinburgh)"
    ],
    "courses_taught": [
      "CR018",
      "CR048",
      "CR078"
    ]
  },
  {
    "trainer_id": "TR019",
    "name": "Trainer 19",
    "experience_years": 9,
    "specialization": "Power BI",
    "display_name": "Trainer 19 (Gavin Neo)",
    "full_name": "Gavin Neo",
    "title": "Microsoft MVP (Data Platform), Power BI Champion",
    "bio": "Author of enterprise DAX modeling frameworks. Trained finance and supply chain teams across multinational corporate headquarters in Singapore.",
    "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    "rating": "4.88",
    "students_count": 1196,
    "qualifications": [
      "Microsoft MVP (Data Platform)",
      "Power BI Champion"
    ],
    "courses_taught": [
      "CR019",
      "CR049",
      "CR079"
    ]
  },
  {
    "trainer_id": "TR020",
    "name": "Trainer 20",
    "experience_years": 10,
    "specialization": "Software Testing",
    "display_name": "Trainer 20 (Hafiz Ismail)",
    "full_name": "Hafiz Ismail",
    "title": "ISTQB Advanced Level Test Manager",
    "bio": "DevOps & Quality Engineering leader with 10+ years driving test automation in high-frequency trading and fintech platforms.",
    "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
    "rating": "4.89",
    "students_count": 1243,
    "qualifications": [
      "ISTQB Advanced Level Test Manager"
    ],
    "courses_taught": [
      "CR020",
      "CR050",
      "CR080"
    ]
  },
  {
    "trainer_id": "TR021",
    "name": "Trainer 21",
    "experience_years": 11,
    "specialization": "PSLE Preparation",
    "display_name": "Trainer 21 (Dr. Stephanie Low)",
    "full_name": "Dr. Stephanie Low",
    "title": "EdD Curriculum & Instruction (Bristol)",
    "bio": "Specialist in early cognitive development and accelerated mathematics heuristics for upper primary gifted education programs.",
    "photo": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    "rating": "4.90",
    "students_count": 1290,
    "qualifications": [
      "EdD Curriculum & Instruction (Bristol)"
    ],
    "courses_taught": [
      "CR021",
      "CR051",
      "CR081"
    ]
  },
  {
    "trainer_id": "TR022",
    "name": "Trainer 22",
    "experience_years": 12,
    "specialization": "O-Level Preparation",
    "display_name": "Trainer 22 (Cheryl Chia)",
    "full_name": "Cheryl Chia",
    "title": "MEd Curriculum Studies (NIE Singapore)",
    "bio": "Master trainer for O-Level Pure Sciences (Physics & Chemistry). Developer of proprietary Singapore exam memory retention maps.",
    "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
    "rating": "4.91",
    "students_count": 1337,
    "qualifications": [
      "MEd Curriculum Studies (NIE Singapore)"
    ],
    "courses_taught": [
      "CR022",
      "CR052",
      "CR082"
    ]
  },
  {
    "trainer_id": "TR023",
    "name": "Trainer 23",
    "experience_years": 13,
    "specialization": "A-Level Preparation",
    "display_name": "Trainer 23 (Alan Quek)",
    "full_name": "Alan Quek",
    "title": "MSc Economics (London School of Economics)",
    "bio": "Ex-Monetary Authority of Singapore (MAS) analyst. Renowned JC economics tutor known for sharp real-world case analysis.",
    "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    "rating": "4.92",
    "students_count": 1384,
    "qualifications": [
      "MSc Economics (London School of Economics)"
    ],
    "courses_taught": [
      "CR023",
      "CR053",
      "CR083"
    ]
  },
  {
    "trainer_id": "TR024",
    "name": "Trainer 24",
    "experience_years": 14,
    "specialization": "Coding & Robotics",
    "display_name": "Trainer 24 (Jeremy Fong)",
    "full_name": "Jeremy Fong",
    "title": "BEng Computer Science (NUS), Maker Mentor",
    "bio": "Pioneer of micro:bit and robotic IoT workshops in Singapore schools. Mentored teams to win top honors at Tan Kah Kee Science Award.",
    "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
    "rating": "4.93",
    "students_count": 1431,
    "qualifications": [
      "BEng Computer Science (NUS)",
      "Maker Mentor"
    ],
    "courses_taught": [
      "CR024",
      "CR054",
      "CR084"
    ]
  },
  {
    "trainer_id": "TR025",
    "name": "Trainer 25",
    "experience_years": 15,
    "specialization": "Python Programming",
    "display_name": "Trainer 25 (Jason Wu)",
    "full_name": "Jason Wu",
    "title": "Principal Python Engineer & PyCon Speaker",
    "bio": "15 years specializing in Django, FastAPI, backend microservices, and asynchronous concurrency for Singapore tech companies.",
    "photo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    "rating": "4.94",
    "students_count": 1478,
    "qualifications": [
      "Principal Python Engineer & PyCon Speaker"
    ],
    "courses_taught": [
      "CR025",
      "CR055",
      "CR085"
    ]
  },
  {
    "trainer_id": "TR026",
    "name": "Trainer 26",
    "experience_years": 3,
    "specialization": "Data Analytics",
    "display_name": "Trainer 26 (Tan Zhi Wei)",
    "full_name": "Tan Zhi Wei",
    "title": "Head of Analytics (FinTech), BEng (NTU)",
    "bio": "Builds customer propensity and fraud prediction models. Mentor for junior data analysts seeking high-yield career pivots.",
    "photo": "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
    "rating": "4.95",
    "students_count": 1525,
    "qualifications": [
      "Head of Analytics (FinTech)",
      "BEng (NTU)"
    ],
    "courses_taught": [
      "CR026",
      "CR056",
      "CR086"
    ]
  },
  {
    "trainer_id": "TR027",
    "name": "Trainer 27",
    "experience_years": 4,
    "specialization": "Artificial Intelligence",
    "display_name": "Trainer 27 (Kavita Ramasamy)",
    "full_name": "Kavita Ramasamy",
    "title": "Lead AI Engineer, MTech (NUS)",
    "bio": "AI researcher working on generative NLP models and ethical AI deployment. Recognized in Southeast Asia Women in Tech.",
    "photo": "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=500&q=80",
    "rating": "4.96",
    "students_count": 372,
    "qualifications": [
      "Lead AI Engineer",
      "MTech (NUS)"
    ],
    "courses_taught": [
      "CR027",
      "CR057",
      "CR087"
    ]
  },
  {
    "trainer_id": "TR028",
    "name": "Trainer 28",
    "experience_years": 5,
    "specialization": "Machine Learning",
    "display_name": "Trainer 28 (Felix Wong)",
    "full_name": "Felix Wong",
    "title": "Senior ML Engineer, MSc Computer Science",
    "bio": "Specialist in recommendation engines and production ML pipelines using MLflow, Kubeflow, and AWS SageMaker.",
    "photo": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
    "rating": "4.97",
    "students_count": 419,
    "qualifications": [
      "Senior ML Engineer",
      "MSc Computer Science"
    ],
    "courses_taught": [
      "CR028",
      "CR058",
      "CR088"
    ]
  },
  {
    "trainer_id": "TR029",
    "name": "Trainer 29",
    "experience_years": 6,
    "specialization": "Cyber Security",
    "display_name": "Trainer 29 (Zackary Tay)",
    "full_name": "Zackary Tay",
    "title": "Offensive Security Certified Professional (OSCP)",
    "bio": "Ethical hacker and vulnerability researcher. Passionate about raising Singapore workforce security readiness against ransomware.",
    "photo": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=80",
    "rating": "4.98",
    "students_count": 466,
    "qualifications": [
      "Offensive Security Certified Professional (OSCP)"
    ],
    "courses_taught": [
      "CR029",
      "CR059",
      "CR089"
    ]
  },
  {
    "trainer_id": "TR030",
    "name": "Trainer 30",
    "experience_years": 7,
    "specialization": "Cloud Computing",
    "display_name": "Trainer 30 (Darren Tan)",
    "full_name": "Darren Tan",
    "title": "Cloud Solutions Lead, CKA, CKS, Terraform",
    "bio": "Cloud architect who has designed scalable multi-region infrastructures for ASEAN healthcare and ecommerce platforms.",
    "photo": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80",
    "rating": "4.99",
    "students_count": 513,
    "qualifications": [
      "Cloud Solutions Lead",
      "CKA",
      "CKS",
      "Terraform"
    ],
    "courses_taught": [
      "CR030",
      "CR060",
      "CR090"
    ]
  }
];
export const campuses: Campus[] = [
  {
    "id": "Orchard",
    "name": "Orchard Central Flagship Campus",
    "address": "Level 14 Orchard Gateway, 277 Orchard Road, Singapore 238858",
    "mrt": "Somerset MRT (Direct Underpass, Exit B)",
    "phone": "+65 6732 8890",
    "email": "orchard@apex.edu.sg",
    "hours": "Mon-Fri: 9:00 AM - 9:30 PM | Sat-Sun: 8:30 AM - 7:00 PM",
    "type": "Executive & STEM Flagship Hub",
    "image": "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "Tampines",
    "name": "Tampines Regional Academic Hub",
    "address": "Level 4 Tampines One & Hub Link, 10 Tampines Central 1, Singapore 529536",
    "mrt": "Tampines MRT Interchange (Exit A)",
    "phone": "+65 6788 4421",
    "email": "tampines@apex.edu.sg",
    "hours": "Mon-Fri: 9:00 AM - 9:00 PM | Sat-Sun: 8:30 AM - 6:30 PM",
    "type": "Primary & Secondary Excellence Centre",
    "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "Jurong East",
    "name": "Jurong West Innovation Hub",
    "address": "Level 11 JEM Office Tower, 50 Jurong Gateway Road, Singapore 608549",
    "mrt": "Jurong East MRT Interchange (Exit C, Link Bridge)",
    "phone": "+65 6425 1198",
    "email": "jurongeast@apex.edu.sg",
    "hours": "Mon-Fri: 9:00 AM - 9:30 PM | Sat-Sun: 8:30 AM - 7:00 PM",
    "type": "Tech, AI & Data Science Hub",
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "Woodlands",
    "name": "Woodlands Civic Learning Centre",
    "address": "Level 5 Woodlands Civic Centre, 900 South Woodlands Drive, Singapore 730900",
    "mrt": "Woodlands MRT (TEL / NSL Interchange Exit 3)",
    "phone": "+65 6365 2209",
    "email": "woodlands@apex.edu.sg",
    "hours": "Mon-Fri: 9:30 AM - 9:00 PM | Sat-Sun: 8:30 AM - 6:00 PM",
    "type": "O/A-Level & STEM Training Campus",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "Punggol",
    "name": "Punggol Digital District Campus",
    "address": "Level 3 Waterway Point West Wing, 83 Punggol Central, Singapore 828761",
    "mrt": "Punggol MRT/LRT Interchange",
    "phone": "+65 6822 7741",
    "email": "punggol@apex.edu.sg",
    "hours": "Mon-Fri: 10:00 AM - 9:00 PM | Sat-Sun: 8:30 AM - 6:30 PM",
    "type": "Coding, Robotics & Junior Tech Academy",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "Bishan",
    "name": "Bishan Central High-Scorers Hub",
    "address": "Level 6 Junction 8 Office Tower, 9 Bishan Place, Singapore 579837",
    "mrt": "Bishan MRT Interchange (Circle & North-South Line)",
    "phone": "+65 6358 3312",
    "email": "bishan@apex.edu.sg",
    "hours": "Mon-Fri: 9:00 AM - 9:30 PM | Sat-Sun: 8:30 AM - 7:00 PM",
    "type": "Academic Mastery & Olympiad Centre",
    "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "Novena",
    "name": "Novena Medical & STEM Hub",
    "address": "Level 9 Royal Square @ Novena, 103 Irrawaddy Road, Singapore 329566",
    "mrt": "Novena MRT (Exit B, Sheltered Link)",
    "phone": "+65 6250 9984",
    "email": "novena@apex.edu.sg",
    "hours": "Mon-Fri: 9:30 AM - 9:00 PM | Sat-Sun: 8:30 AM - 6:00 PM",
    "type": "Data & Professional Analytics Centre",
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "Bedok",
    "name": "Bedok Central Community Hub",
    "address": "Level 3 Bedok Mall Commercial Wing, 311 New Upper Changi Road, Singapore 467360",
    "mrt": "Bedok MRT (Direct Mall Connection)",
    "phone": "+65 6443 6610",
    "email": "bedok@apex.edu.sg",
    "hours": "Mon-Fri: 10:00 AM - 9:00 PM | Sat-Sun: 8:30 AM - 6:30 PM",
    "type": "Digital Skills & Academic Preparation",
    "image": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "Clementi",
    "name": "Clementi West Coast Tech Campus",
    "address": "Level 4 Grantral Mall @ Clementi, 3151 Commonwealth Ave West, Singapore 129581",
    "mrt": "Clementi MRT (Exit A)",
    "phone": "+65 6779 5501",
    "email": "clementi@apex.edu.sg",
    "hours": "Mon-Fri: 9:00 AM - 9:00 PM | Sat-Sun: 8:30 AM - 6:30 PM",
    "type": "Python, Cloud & Computing Campus",
    "image": "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "City",
    "name": "Raffles City Corporate Campus",
    "address": "Level 18 Raffles City Tower, 250 North Bridge Road, Singapore 179101",
    "mrt": "City Hall MRT Interchange (Underground Link)",
    "phone": "+65 6338 1200",
    "email": "city@apex.edu.sg",
    "hours": "Mon-Fri: 8:30 AM - 9:30 PM | Sat: 9:00 AM - 5:00 PM",
    "type": "Corporate Upskilling & Executive Leadership",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
  }
];
export const learningFormats: string[] = [
  "Online",
  "On-Campus",
  "Hybrid",
  "Weekend",
  "Evening"
];
export const categories: Record<string, CategoryInfo> = {
  "Data Analytics": {
    "icon": "bar-chart-2",
    "description": "Master SQL, Tableau, Power BI, and statistical inference to turn complex data into strategic business impact.",
    "popular_job": "Data Analyst / BI Specialist (SGD 4,500 - 8,200/mo)",
    "skills": [
      "SQL",
      "Tableau",
      "Power BI",
      "Excel Advanced",
      "ETL Pipelines"
    ],
    "is_featured": true
  },
  "Artificial Intelligence": {
    "icon": "cpu",
    "description": "Build intelligent applications using modern LLMs, neural networks, computer vision, and cognitive systems.",
    "popular_job": "AI Solutions Engineer (SGD 6,500 - 12,000/mo)",
    "skills": [
      "GenAI",
      "LangChain",
      "PyTorch",
      "Transformers",
      "Prompt Engineering"
    ],
    "is_featured": true
  },
  "Machine Learning": {
    "icon": "brain",
    "description": "Implement predictive models, feature engineering, classification, and deployment pipelines.",
    "popular_job": "Machine Learning Engineer (SGD 6,000 - 11,500/mo)",
    "skills": [
      "Scikit-Learn",
      "MLflow",
      "Supervised/Unsupervised Learning",
      "TensorFlow"
    ],
    "is_featured": true
  },
  "Cyber Security": {
    "icon": "shield-check",
    "description": "Safeguard critical digital infrastructure with vulnerability assessment, ethical hacking, and threat mitigation.",
    "popular_job": "Cyber Security Analyst / Pentester (SGD 5,200 - 9,800/mo)",
    "skills": [
      "Network Security",
      "Penetration Testing",
      "SIEM",
      "Incident Response"
    ],
    "is_featured": true
  },
  "Cloud Computing": {
    "icon": "cloud",
    "description": "Design highly available, scalable enterprise cloud architectures on AWS, Azure, and Google Cloud.",
    "popular_job": "Cloud Solutions Architect (SGD 7,000 - 13,000/mo)",
    "skills": [
      "AWS Architecting",
      "Kubernetes",
      "Docker",
      "Terraform",
      "CI/CD"
    ],
    "is_featured": true
  },
  "Python Programming": {
    "icon": "code-2",
    "description": "From core algorithmic logic to web frameworks and backend systems, master the world’s most versatile language.",
    "popular_job": "Python Software Developer (SGD 4,800 - 9,000/mo)",
    "skills": [
      "Python 3.12",
      "FastAPI",
      "OOP",
      "Data Structures",
      "REST APIs"
    ],
    "is_featured": true
  },
  "Digital Marketing": {
    "icon": "trending-up",
    "description": "Drive high-conversion customer acquisition with SEO, programmatic ads, content strategy, and attribution modeling.",
    "popular_job": "Performance Marketing Manager (SGD 4,500 - 8,500/mo)",
    "skills": [
      "Google Ads",
      "Meta Blueprint",
      "SEO",
      "Conversion Rate Optimization"
    ],
    "is_featured": true
  },
  "Business Analytics": {
    "icon": "briefcase",
    "description": "Bridging technical data insights with high-level corporate strategy, financial forecasting, and decision analysis.",
    "popular_job": "Business Analytics Consultant (SGD 5,500 - 10,000/mo)",
    "skills": [
      "Financial Modeling",
      "KPI Frameworks",
      "Predictive Forecasting",
      "Executive Presentation"
    ],
    "is_featured": true
  },
  "Coding & Robotics": {
    "icon": "bot",
    "description": "Hands-on hardware and software integration with Arduino, micro:bit, Python, and automated mechanical robotics.",
    "popular_job": "Robotics Educator / Junior IoT Maker",
    "skills": [
      "C++",
      "Micro:bit",
      "Sensors & Actuators",
      "Algorithmic Thinking"
    ],
    "is_featured": true
  },
  "IELTS Preparation": {
    "icon": "globe",
    "description": "Achieve Band 7.5 - 9.0 with targeted diagnostic drills, speaking simulations, and academic essay mastery.",
    "popular_job": "University & Immigration Benchmark Exam",
    "skills": [
      "Academic Writing Task 1 & 2",
      "Oral Fluency",
      "Speed Reading Techniques"
    ],
    "is_featured": true
  },
  "PSLE Preparation": {
    "icon": "graduation-cap",
    "description": "Rigorous MOE-aligned exam mastery across Math, Science, and English to secure AL1 & AL2 grades.",
    "popular_job": "Singapore Primary School Leaving Examination (PSLE)",
    "skills": [
      "Heuristic Problem Solving",
      "Science Open-Ended Keywords",
      "Oral Presentation"
    ],
    "is_featured": false
  },
  "O-Level Preparation": {
    "icon": "award",
    "description": "Structured Cambridge GCE O-Level prep designed to turn C6s into distinctions for JCs and Poly tracks.",
    "popular_job": "Singapore-Cambridge GCE O-Level Examination",
    "skills": [
      "Pure Sciences Mastery",
      "A-Math & E-Math Papers",
      "English Comprehension"
    ],
    "is_featured": false
  },
  "A-Level Preparation": {
    "icon": "book-open",
    "description": "Intensive H2 Mathematics, Sciences, Economics, and General Paper modules led by distinction coaches.",
    "popular_job": "Singapore-Cambridge GCE A-Level Examination",
    "skills": [
      "H2 Subject Analysis",
      "Case Study Deconstruction",
      "GP Argumentation"
    ],
    "is_featured": false
  },
  "English": {
    "icon": "feather",
    "description": "Comprehensive language mastery spanning primary creative writing, secondary rhetoric, and adult business communication.",
    "popular_job": "Academic & Professional English Competence",
    "skills": [
      "Creative Composition",
      "Critical Reading",
      "Rhetorical Analysis"
    ],
    "is_featured": false
  },
  "Mathematics": {
    "icon": "hash",
    "description": "Master Singapore heuristics, Olympiad logic, algebra, calculus, and multi-step word problem solutions.",
    "popular_job": "Olympiad & Academic Distinction Track",
    "skills": [
      "Model Drawing Method",
      "Calculus",
      "Trigonometry",
      "Speed Arithmetic"
    ],
    "is_featured": false
  },
  "Science": {
    "icon": "flask-conical",
    "description": "Experimental physics, chemistry, and biology inquiry developed in certified lab training environments.",
    "popular_job": "Science Olympiad & Exam Distinctions",
    "skills": [
      "Experimental Design",
      "Scientific Keyword Precision",
      "Data Interpretation"
    ],
    "is_featured": false
  },
  "Chinese": {
    "icon": "languages",
    "description": "Higher Chinese & Standard Chinese pedagogy focusing on creative composition, comprehension, and oral conversation.",
    "popular_job": "MOE Syllabus & HSK Level 5/6 Certification",
    "skills": [
      "Higher Chinese Composition",
      "Oral Fluency",
      "Idioms & Classical Text"
    ],
    "is_featured": false
  },
  "IB Programme": {
    "icon": "compass",
    "description": "International Baccalaureate Middle Years & Diploma Programme mentoring for 40+ point achievers.",
    "popular_job": "IBDP World University Admissions Benchmark",
    "skills": [
      "Internal Assessments (IA)",
      "Theory of Knowledge (TOK)",
      "Extended Essay"
    ],
    "is_featured": false
  },
  "IGCSE Programme": {
    "icon": "file-text",
    "description": "Cambridge IGCSE curriculum coaching across core STEM and Humanities subjects with exam simulations.",
    "popular_job": "Cambridge International Certification",
    "skills": [
      "Past Paper Mastery",
      "Examiner Rubric Alignment",
      "Time Management"
    ],
    "is_featured": false
  },
  "Power BI": {
    "icon": "pie-chart",
    "description": "End-to-end Microsoft Power BI mastery: DAX formulas, Power Query, automated refresh, and interactive dashboards.",
    "popular_job": "Certified Power BI Data Analyst (PL-300)",
    "skills": [
      "DAX Formulas",
      "Power Query (M)",
      "Data Modeling",
      "Executive Reporting"
    ],
    "is_featured": false
  },
  "Software Testing": {
    "icon": "check-circle-2",
    "description": "Industry-standard QA automation: Selenium, Playwright, Cypress, API testing, and ISTQB certification prep.",
    "popular_job": "QA Automation Engineer (SGD 4,500 - 8,500/mo)",
    "skills": [
      "Playwright",
      "Selenium WebDriver",
      "Postman / REST Assured",
      "CI/CD Testing"
    ],
    "is_featured": false
  }
};
export const certifications: Certification[] = [
  {
    "certification_id": "CERT001",
    "name": "Certification 1",
    "industry_title": "Singapore MOE-Aligned PSLE Distinction Fellow",
    "category": "Data Analytics",
    "issuing_body": "Apex Institute Singapore in partnership with Singapore Industry Boards",
    "verification_code": "SG-APX-1000",
    "skills_validated": [
      "SQL",
      "Tableau",
      "Power BI",
      "Excel Advanced",
      "ETL Pipelines"
    ],
    "validity": "Lifetime Accreditation",
    "credential_level": "Advanced Professional",
    "sample_recipient": "Tan Wei Ming"
  },
  {
    "certification_id": "CERT002",
    "name": "Certification 2",
    "industry_title": "Cambridge GCE O-Level Academic Excellence Diploma",
    "category": "Artificial Intelligence",
    "issuing_body": "Apex Institute Singapore in partnership with Singapore Industry Boards",
    "verification_code": "SG-APX-1047",
    "skills_validated": [
      "GenAI",
      "LangChain",
      "PyTorch",
      "Transformers",
      "Prompt Engineering"
    ],
    "validity": "Lifetime Accreditation",
    "credential_level": "Executive Specialist",
    "sample_recipient": "Sarah Al-Attas"
  },
  {
    "certification_id": "CERT003",
    "name": "Certification 3",
    "industry_title": "Cambridge GCE A-Level Higher Secondary Diploma",
    "category": "Machine Learning",
    "issuing_body": "Apex Institute Singapore in partnership with Singapore Industry Boards",
    "verification_code": "SG-APX-1094",
    "skills_validated": [
      "Scikit-Learn",
      "MLflow",
      "Supervised/Unsupervised Learning",
      "TensorFlow"
    ],
    "validity": "Lifetime Accreditation",
    "credential_level": "Advanced Professional",
    "sample_recipient": "Rachel Lim"
  },
  {
    "certification_id": "CERT004",
    "name": "Certification 4",
    "industry_title": "Junior STEM & Robotics Innovation Specialist",
    "category": "Cyber Security",
    "issuing_body": "Apex Institute Singapore in partnership with Singapore Industry Boards",
    "verification_code": "SG-APX-1141",
    "skills_validated": [
      "Network Security",
      "Penetration Testing",
      "SIEM",
      "Incident Response"
    ],
    "validity": "Lifetime Accreditation",
    "credential_level": "Executive Specialist",
    "sample_recipient": "Jonathan Lee"
  },
  {
    "certification_id": "CERT005",
    "name": "Certification 5",
    "industry_title": "Certified Professional Python Developer (SSG Aligned)",
    "category": "Cloud Computing",
    "issuing_body": "Apex Institute Singapore in partnership with Singapore Industry Boards",
    "verification_code": "SG-APX-1188",
    "skills_validated": [
      "AWS Architecting",
      "Kubernetes",
      "Docker",
      "Terraform",
      "CI/CD"
    ],
    "validity": "Lifetime Accreditation",
    "credential_level": "Advanced Professional",
    "sample_recipient": "Priya Ramanathan"
  },
  {
    "certification_id": "CERT006",
    "name": "Certification 6",
    "industry_title": "Certified Enterprise Data Analytics Specialist",
    "category": "Python Programming",
    "issuing_body": "Apex Institute Singapore in partnership with Singapore Industry Boards",
    "verification_code": "SG-APX-1235",
    "skills_validated": [
      "Python 3.12",
      "FastAPI",
      "OOP",
      "Data Structures",
      "REST APIs"
    ],
    "validity": "Lifetime Accreditation",
    "credential_level": "Executive Specialist",
    "sample_recipient": "Tan Wei Ming"
  },
  {
    "certification_id": "CERT007",
    "name": "Certification 7",
    "industry_title": "Applied Artificial Intelligence & GenAI Practitioner",
    "category": "Digital Marketing",
    "issuing_body": "Apex Institute Singapore in partnership with Singapore Industry Boards",
    "verification_code": "SG-APX-1282",
    "skills_validated": [
      "Google Ads",
      "Meta Blueprint",
      "SEO",
      "Conversion Rate Optimization"
    ],
    "validity": "Lifetime Accreditation",
    "credential_level": "Advanced Professional",
    "sample_recipient": "Sarah Al-Attas"
  },
  {
    "certification_id": "CERT008",
    "name": "Certification 8",
    "industry_title": "Professional Machine Learning Engineering Fellow",
    "category": "Business Analytics",
    "issuing_body": "Apex Institute Singapore in partnership with Singapore Industry Boards",
    "verification_code": "SG-APX-1329",
    "skills_validated": [
      "Financial Modeling",
      "KPI Frameworks",
      "Predictive Forecasting",
      "Executive Presentation"
    ],
    "validity": "Lifetime Accreditation",
    "credential_level": "Executive Specialist",
    "sample_recipient": "Rachel Lim"
  },
  {
    "certification_id": "CERT009",
    "name": "Certification 9",
    "industry_title": "Certified Cyber Security Defense & Operations Specialist",
    "category": "Coding & Robotics",
    "issuing_body": "Apex Institute Singapore in partnership with Singapore Industry Boards",
    "verification_code": "SG-APX-1376",
    "skills_validated": [
      "C++",
      "Micro:bit",
      "Sensors & Actuators",
      "Algorithmic Thinking"
    ],
    "validity": "Lifetime Accreditation",
    "credential_level": "Advanced Professional",
    "sample_recipient": "Jonathan Lee"
  },
  {
    "certification_id": "CERT010",
    "name": "Certification 10",
    "industry_title": "Certified Enterprise Cloud Architect (Multi-Cloud)",
    "category": "IELTS Preparation",
    "issuing_body": "Apex Institute Singapore in partnership with Singapore Industry Boards",
    "verification_code": "SG-APX-1423",
    "skills_validated": [
      "Academic Writing Task 1 & 2",
      "Oral Fluency",
      "Speed Reading Techniques"
    ],
    "validity": "Lifetime Accreditation",
    "credential_level": "Executive Specialist",
    "sample_recipient": "Priya Ramanathan"
  },
  {
    "certification_id": "CERT011",
    "name": "Certification 11",
    "industry_title": "Certified Digital Marketing & Growth Strategist",
    "category": "PSLE Preparation",
    "issuing_body": "Apex Institute Singapore in partnership with Singapore Industry Boards",
    "verification_code": "SG-APX-1470",
    "skills_validated": [
      "Heuristic Problem Solving",
      "Science Open-Ended Keywords",
      "Oral Presentation"
    ],
    "validity": "Lifetime Accreditation",
    "credential_level": "Advanced Professional",
    "sample_recipient": "Tan Wei Ming"
  },
  {
    "certification_id": "CERT012",
    "name": "Certification 12",
    "industry_title": "Certified Corporate Business Analytics Specialist",
    "category": "O-Level Preparation",
    "issuing_body": "Apex Institute Singapore in partnership with Singapore Industry Boards",
    "verification_code": "SG-APX-1517",
    "skills_validated": [
      "Pure Sciences Mastery",
      "A-Math & E-Math Papers",
      "English Comprehension"
    ],
    "validity": "Lifetime Accreditation",
    "credential_level": "Executive Specialist",
    "sample_recipient": "Sarah Al-Attas"
  },
  {
    "certification_id": "CERT013",
    "name": "Certification 13",
    "industry_title": "Cambridge English Professional & Academic Fluency Diploma",
    "category": "A-Level Preparation",
    "issuing_body": "Apex Institute Singapore in partnership with Singapore Industry Boards",
    "verification_code": "SG-APX-1564",
    "skills_validated": [
      "H2 Subject Analysis",
      "Case Study Deconstruction",
      "GP Argumentation"
    ],
    "validity": "Lifetime Accreditation",
    "credential_level": "Advanced Professional",
    "sample_recipient": "Rachel Lim"
  },
  {
    "certification_id": "CERT014",
    "name": "Certification 14",
    "industry_title": "Advanced Mathematics & Olympiad Heuristic Fellow",
    "category": "English",
    "issuing_body": "Apex Institute Singapore in partnership with Singapore Industry Boards",
    "verification_code": "SG-APX-1611",
    "skills_validated": [
      "Creative Composition",
      "Critical Reading",
      "Rhetorical Analysis"
    ],
    "validity": "Lifetime Accreditation",
    "credential_level": "Executive Specialist",
    "sample_recipient": "Jonathan Lee"
  },
  {
    "certification_id": "CERT015",
    "name": "Certification 15",
    "industry_title": "Experimental Science & Laboratory Inquiry Diploma",
    "category": "Mathematics",
    "issuing_body": "Apex Institute Singapore in partnership with Singapore Industry Boards",
    "verification_code": "SG-APX-1658",
    "skills_validated": [
      "Model Drawing Method",
      "Calculus",
      "Trigonometry",
      "Speed Arithmetic"
    ],
    "validity": "Lifetime Accreditation",
    "credential_level": "Advanced Professional",
    "sample_recipient": "Priya Ramanathan"
  },
  {
    "certification_id": "CERT016",
    "name": "Certification 16",
    "industry_title": "Higher Chinese Language & Literature Distinction Fellow",
    "category": "Science",
    "issuing_body": "Apex Institute Singapore in partnership with Singapore Industry Boards",
    "verification_code": "SG-APX-1705",
    "skills_validated": [
      "Experimental Design",
      "Scientific Keyword Precision",
      "Data Interpretation"
    ],
    "validity": "Lifetime Accreditation",
    "credential_level": "Executive Specialist",
    "sample_recipient": "Tan Wei Ming"
  },
  {
    "certification_id": "CERT017",
    "name": "Certification 17",
    "industry_title": "International Baccalaureate (IB) Diploma Specialist",
    "category": "Chinese",
    "issuing_body": "Apex Institute Singapore in partnership with Singapore Industry Boards",
    "verification_code": "SG-APX-1752",
    "skills_validated": [
      "Higher Chinese Composition",
      "Oral Fluency",
      "Idioms & Classical Text"
    ],
    "validity": "Lifetime Accreditation",
    "credential_level": "Advanced Professional",
    "sample_recipient": "Sarah Al-Attas"
  },
  {
    "certification_id": "CERT018",
    "name": "Certification 18",
    "industry_title": "Cambridge IGCSE Global Honors Diploma",
    "category": "IB Programme",
    "issuing_body": "Apex Institute Singapore in partnership with Singapore Industry Boards",
    "verification_code": "SG-APX-1799",
    "skills_validated": [
      "Internal Assessments (IA)",
      "Theory of Knowledge (TOK)",
      "Extended Essay"
    ],
    "validity": "Lifetime Accreditation",
    "credential_level": "Executive Specialist",
    "sample_recipient": "Rachel Lim"
  },
  {
    "certification_id": "CERT019",
    "name": "Certification 19",
    "industry_title": "Microsoft Certified Power BI Data Analyst Associate",
    "category": "IGCSE Programme",
    "issuing_body": "Apex Institute Singapore in partnership with Singapore Industry Boards",
    "verification_code": "SG-APX-1846",
    "skills_validated": [
      "Past Paper Mastery",
      "Examiner Rubric Alignment",
      "Time Management"
    ],
    "validity": "Lifetime Accreditation",
    "credential_level": "Advanced Professional",
    "sample_recipient": "Jonathan Lee"
  },
  {
    "certification_id": "CERT020",
    "name": "Certification 20",
    "industry_title": "ISTQB Certified Quality & Test Automation Engineer",
    "category": "Power BI",
    "issuing_body": "Apex Institute Singapore in partnership with Singapore Industry Boards",
    "verification_code": "SG-APX-1893",
    "skills_validated": [
      "DAX Formulas",
      "Power Query (M)",
      "Data Modeling",
      "Executive Reporting"
    ],
    "validity": "Lifetime Accreditation",
    "credential_level": "Executive Specialist",
    "sample_recipient": "Priya Ramanathan"
  }
];
export const reviews: Review[] = [
  {
    "review_id": "RV001",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Tan Wei Jie",
    "author_role": "Data Analyst at Grab Singapore",
    "category": "Data Analytics",
    "course_name": "Data Analytics Professional Course 6",
    "review_date": "24 Sept 2026",
    "verified_student": true,
    "detailed_comment": "The curriculum was deeply practical. We worked with real Singapore public dataset pipelines and SQL databases. Within 2 months of graduation, I successfully transitioned from operations to full-time data analytics with a 35% pay increment!",
    "avatar": "https://images.unsplash.com/photo-1534528741775?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV002",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Cheryl Lim",
    "author_role": "Parent of Sec 4 Student (CHIJ St. Nicholas)",
    "category": "O-Level Preparation",
    "course_name": "O-Level Preparation Professional Course 2",
    "review_date": "21 Sept 2026",
    "verified_student": true,
    "detailed_comment": "My daughter struggled with A-Math and was hovering at C6. Trainer Marcus made the heuristics so clear and approachable. In her preliminary exams, she scored A1! Truly grateful for the personalized feedback and dedicated after-class support.",
    "avatar": "https://images.unsplash.com/photo-1534528749694?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV003",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Ahmad Farhan",
    "author_role": "Cloud Engineer at Singtel",
    "category": "Cloud Computing",
    "course_name": "Cloud Computing Professional Course 10",
    "review_date": "18 Sept 2026",
    "verified_student": true,
    "detailed_comment": "Trainer Kelvin’s real-world insights from enterprise migrations made all the difference. Passed my AWS Solutions Architect exam on the first try. The modern labs at Jurong East campus are world-class.",
    "avatar": "https://images.unsplash.com/photo-1534528757613?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV004",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Grace Teo",
    "author_role": "Marketing Lead at Shopee",
    "category": "Digital Marketing",
    "course_name": "Digital Marketing Professional Course 11",
    "review_date": "15 Sept 2026",
    "verified_student": true,
    "detailed_comment": "Unlike typical surface-level courses, this course dove deep into programmatic bidding, attribution modeling, and GA4 data structures. SkillsFuture subsidy covered over half the fee!",
    "avatar": "https://images.unsplash.com/photo-1534528765532?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV005",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Mdm. Koh Siew Lan",
    "author_role": "Parent of P6 Student (Tao Nan School)",
    "category": "PSLE Preparation",
    "course_name": "PSLE Preparation Professional Course 1",
    "review_date": "12 Sept 2026",
    "verified_student": true,
    "detailed_comment": "Dr. Lin Chen is simply outstanding. She knows every single nuance of the revised PSLE scoring framework and taught my son systematic answering methods that eliminated careless mistakes.",
    "avatar": "https://images.unsplash.com/photo-1534528773451?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV006",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Kenneth Seah",
    "author_role": "Cyber Security Analyst at DBS Bank",
    "category": "Cyber Security",
    "course_name": "Cyber Security Professional Course 9",
    "review_date": "9 Sept 2026",
    "verified_student": true,
    "detailed_comment": "The hands-on red team and blue team labs at the City campus simulated real enterprise intrusions. It gave me the practical edge needed to pass the technical interview at DBS.",
    "avatar": "https://images.unsplash.com/photo-1534528781370?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV007",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Priya Narayanan",
    "author_role": "Senior Business Analyst at Standard Chartered",
    "category": "Business Analytics",
    "course_name": "Business Analytics Professional Course 12",
    "review_date": "6 Sept 2026",
    "verified_student": true,
    "detailed_comment": "High-yield curriculum focused on predictive forecasting and financial KPIs. The trainer bridged technical dashboards directly to board-level decision making.",
    "avatar": "https://images.unsplash.com/photo-1534528789289?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV008",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Lucas Wong",
    "author_role": "Junior College Year 2 Student (Raffles Institution)",
    "category": "A-Level Preparation",
    "course_name": "A-Level Preparation Professional Course 3",
    "review_date": "3 Sept 2026",
    "verified_student": true,
    "detailed_comment": "Clarissa’s General Paper argumentation drills and H2 essays changed how I approach essay construction. Scored distinction in the prelims. Highly recommend to any JC student aiming for top university offers.",
    "avatar": "https://images.unsplash.com/photo-1534528747208?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV009",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Marcus Fong",
    "author_role": "Software Engineer at Sea Group",
    "category": "Python Programming",
    "course_name": "Python Programming Professional Course 5",
    "review_date": "31 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Trainer David is an absolute machine when it comes to Python internals, concurrency, and FastAPI. The code reviews were as rigorous as production pull requests at top tech companies.",
    "avatar": "https://images.unsplash.com/photo-1534528755127?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV010",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Benjamin Neo",
    "author_role": "BI Developer at SingHealth",
    "category": "Power BI",
    "course_name": "Power BI Professional Course 19",
    "review_date": "28 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Mastered DAX time intelligence and complex tabular modeling. We even connected our capstones to live healthcare mockup data. Absolutely worth every dollar!",
    "avatar": "https://images.unsplash.com/photo-1534528763046?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV011",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Tan Wei Jie",
    "author_role": "Data Analyst at Grab Singapore",
    "category": "Data Analytics",
    "course_name": "Data Analytics Professional Course 6",
    "review_date": "25 Aug 2026",
    "verified_student": true,
    "detailed_comment": "The curriculum was deeply practical. We worked with real Singapore public dataset pipelines and SQL databases. Within 2 months of graduation, I successfully transitioned from operations to full-time data analytics with a 35% pay increment!",
    "avatar": "https://images.unsplash.com/photo-1534528770965?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV012",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Cheryl Lim",
    "author_role": "Parent of Sec 4 Student (CHIJ St. Nicholas)",
    "category": "O-Level Preparation",
    "course_name": "O-Level Preparation Professional Course 2",
    "review_date": "22 Aug 2026",
    "verified_student": true,
    "detailed_comment": "My daughter struggled with A-Math and was hovering at C6. Trainer Marcus made the heuristics so clear and approachable. In her preliminary exams, she scored A1! Truly grateful for the personalized feedback and dedicated after-class support.",
    "avatar": "https://images.unsplash.com/photo-1534528778884?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV013",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Ahmad Farhan",
    "author_role": "Cloud Engineer at Singtel",
    "category": "Cloud Computing",
    "course_name": "Cloud Computing Professional Course 10",
    "review_date": "19 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Trainer Kelvin’s real-world insights from enterprise migrations made all the difference. Passed my AWS Solutions Architect exam on the first try. The modern labs at Jurong East campus are world-class.",
    "avatar": "https://images.unsplash.com/photo-1534528786803?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV014",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Grace Teo",
    "author_role": "Marketing Lead at Shopee",
    "category": "Digital Marketing",
    "course_name": "Digital Marketing Professional Course 11",
    "review_date": "16 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Unlike typical surface-level courses, this course dove deep into programmatic bidding, attribution modeling, and GA4 data structures. SkillsFuture subsidy covered over half the fee!",
    "avatar": "https://images.unsplash.com/photo-1534528744722?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV015",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Mdm. Koh Siew Lan",
    "author_role": "Parent of P6 Student (Tao Nan School)",
    "category": "PSLE Preparation",
    "course_name": "PSLE Preparation Professional Course 1",
    "review_date": "13 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Dr. Lin Chen is simply outstanding. She knows every single nuance of the revised PSLE scoring framework and taught my son systematic answering methods that eliminated careless mistakes.",
    "avatar": "https://images.unsplash.com/photo-1534528752641?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV016",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Kenneth Seah",
    "author_role": "Cyber Security Analyst at DBS Bank",
    "category": "Cyber Security",
    "course_name": "Cyber Security Professional Course 9",
    "review_date": "10 Aug 2026",
    "verified_student": true,
    "detailed_comment": "The hands-on red team and blue team labs at the City campus simulated real enterprise intrusions. It gave me the practical edge needed to pass the technical interview at DBS.",
    "avatar": "https://images.unsplash.com/photo-1534528760560?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV017",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Priya Narayanan",
    "author_role": "Senior Business Analyst at Standard Chartered",
    "category": "Business Analytics",
    "course_name": "Business Analytics Professional Course 12",
    "review_date": "7 Aug 2026",
    "verified_student": true,
    "detailed_comment": "High-yield curriculum focused on predictive forecasting and financial KPIs. The trainer bridged technical dashboards directly to board-level decision making.",
    "avatar": "https://images.unsplash.com/photo-1534528768479?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV018",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Lucas Wong",
    "author_role": "Junior College Year 2 Student (Raffles Institution)",
    "category": "A-Level Preparation",
    "course_name": "A-Level Preparation Professional Course 3",
    "review_date": "4 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Clarissa’s General Paper argumentation drills and H2 essays changed how I approach essay construction. Scored distinction in the prelims. Highly recommend to any JC student aiming for top university offers.",
    "avatar": "https://images.unsplash.com/photo-1534528776398?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV019",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Marcus Fong",
    "author_role": "Software Engineer at Sea Group",
    "category": "Python Programming",
    "course_name": "Python Programming Professional Course 5",
    "review_date": "1 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Trainer David is an absolute machine when it comes to Python internals, concurrency, and FastAPI. The code reviews were as rigorous as production pull requests at top tech companies.",
    "avatar": "https://images.unsplash.com/photo-1534528784317?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV020",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Benjamin Neo",
    "author_role": "BI Developer at SingHealth",
    "category": "Power BI",
    "course_name": "Power BI Professional Course 19",
    "review_date": "29 Jul 2026",
    "verified_student": true,
    "detailed_comment": "Mastered DAX time intelligence and complex tabular modeling. We even connected our capstones to live healthcare mockup data. Absolutely worth every dollar!",
    "avatar": "https://images.unsplash.com/photo-1534528742236?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV021",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Tan Wei Jie",
    "author_role": "Data Analyst at Grab Singapore",
    "category": "Data Analytics",
    "course_name": "Data Analytics Professional Course 6",
    "review_date": "26 Jul 2026",
    "verified_student": true,
    "detailed_comment": "The curriculum was deeply practical. We worked with real Singapore public dataset pipelines and SQL databases. Within 2 months of graduation, I successfully transitioned from operations to full-time data analytics with a 35% pay increment!",
    "avatar": "https://images.unsplash.com/photo-1534528750155?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV022",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Cheryl Lim",
    "author_role": "Parent of Sec 4 Student (CHIJ St. Nicholas)",
    "category": "O-Level Preparation",
    "course_name": "O-Level Preparation Professional Course 2",
    "review_date": "23 Jul 2026",
    "verified_student": true,
    "detailed_comment": "My daughter struggled with A-Math and was hovering at C6. Trainer Marcus made the heuristics so clear and approachable. In her preliminary exams, she scored A1! Truly grateful for the personalized feedback and dedicated after-class support.",
    "avatar": "https://images.unsplash.com/photo-1534528758074?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV023",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Ahmad Farhan",
    "author_role": "Cloud Engineer at Singtel",
    "category": "Cloud Computing",
    "course_name": "Cloud Computing Professional Course 10",
    "review_date": "20 Jul 2026",
    "verified_student": true,
    "detailed_comment": "Trainer Kelvin’s real-world insights from enterprise migrations made all the difference. Passed my AWS Solutions Architect exam on the first try. The modern labs at Jurong East campus are world-class.",
    "avatar": "https://images.unsplash.com/photo-1534528765993?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV024",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Grace Teo",
    "author_role": "Marketing Lead at Shopee",
    "category": "Digital Marketing",
    "course_name": "Digital Marketing Professional Course 11",
    "review_date": "17 Jul 2026",
    "verified_student": true,
    "detailed_comment": "Unlike typical surface-level courses, this course dove deep into programmatic bidding, attribution modeling, and GA4 data structures. SkillsFuture subsidy covered over half the fee!",
    "avatar": "https://images.unsplash.com/photo-1534528773912?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV025",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Mdm. Koh Siew Lan",
    "author_role": "Parent of P6 Student (Tao Nan School)",
    "category": "PSLE Preparation",
    "course_name": "PSLE Preparation Professional Course 1",
    "review_date": "14 Jul 2026",
    "verified_student": true,
    "detailed_comment": "Dr. Lin Chen is simply outstanding. She knows every single nuance of the revised PSLE scoring framework and taught my son systematic answering methods that eliminated careless mistakes.",
    "avatar": "https://images.unsplash.com/photo-1534528781831?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV026",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Kenneth Seah",
    "author_role": "Cyber Security Analyst at DBS Bank",
    "category": "Cyber Security",
    "course_name": "Cyber Security Professional Course 9",
    "review_date": "11 Jul 2026",
    "verified_student": true,
    "detailed_comment": "The hands-on red team and blue team labs at the City campus simulated real enterprise intrusions. It gave me the practical edge needed to pass the technical interview at DBS.",
    "avatar": "https://images.unsplash.com/photo-1534528789750?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV027",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Priya Narayanan",
    "author_role": "Senior Business Analyst at Standard Chartered",
    "category": "Business Analytics",
    "course_name": "Business Analytics Professional Course 12",
    "review_date": "8 Jul 2026",
    "verified_student": true,
    "detailed_comment": "High-yield curriculum focused on predictive forecasting and financial KPIs. The trainer bridged technical dashboards directly to board-level decision making.",
    "avatar": "https://images.unsplash.com/photo-1534528747669?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV028",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Lucas Wong",
    "author_role": "Junior College Year 2 Student (Raffles Institution)",
    "category": "A-Level Preparation",
    "course_name": "A-Level Preparation Professional Course 3",
    "review_date": "5 Jul 2026",
    "verified_student": true,
    "detailed_comment": "Clarissa’s General Paper argumentation drills and H2 essays changed how I approach essay construction. Scored distinction in the prelims. Highly recommend to any JC student aiming for top university offers.",
    "avatar": "https://images.unsplash.com/photo-1534528755588?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV029",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Marcus Fong",
    "author_role": "Software Engineer at Sea Group",
    "category": "Python Programming",
    "course_name": "Python Programming Professional Course 5",
    "review_date": "2 Jul 2026",
    "verified_student": true,
    "detailed_comment": "Trainer David is an absolute machine when it comes to Python internals, concurrency, and FastAPI. The code reviews were as rigorous as production pull requests at top tech companies.",
    "avatar": "https://images.unsplash.com/photo-1534528763507?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV030",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Benjamin Neo",
    "author_role": "BI Developer at SingHealth",
    "category": "Power BI",
    "course_name": "Power BI Professional Course 19",
    "review_date": "29 Jun 2026",
    "verified_student": true,
    "detailed_comment": "Mastered DAX time intelligence and complex tabular modeling. We even connected our capstones to live healthcare mockup data. Absolutely worth every dollar!",
    "avatar": "https://images.unsplash.com/photo-1534528771426?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV031",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Tan Wei Jie",
    "author_role": "Data Analyst at Grab Singapore",
    "category": "Data Analytics",
    "course_name": "Data Analytics Professional Course 6",
    "review_date": "26 Jun 2026",
    "verified_student": true,
    "detailed_comment": "The curriculum was deeply practical. We worked with real Singapore public dataset pipelines and SQL databases. Within 2 months of graduation, I successfully transitioned from operations to full-time data analytics with a 35% pay increment!",
    "avatar": "https://images.unsplash.com/photo-1534528779345?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV032",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Cheryl Lim",
    "author_role": "Parent of Sec 4 Student (CHIJ St. Nicholas)",
    "category": "O-Level Preparation",
    "course_name": "O-Level Preparation Professional Course 2",
    "review_date": "23 Jun 2026",
    "verified_student": true,
    "detailed_comment": "My daughter struggled with A-Math and was hovering at C6. Trainer Marcus made the heuristics so clear and approachable. In her preliminary exams, she scored A1! Truly grateful for the personalized feedback and dedicated after-class support.",
    "avatar": "https://images.unsplash.com/photo-1534528787264?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV033",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Ahmad Farhan",
    "author_role": "Cloud Engineer at Singtel",
    "category": "Cloud Computing",
    "course_name": "Cloud Computing Professional Course 10",
    "review_date": "20 Jun 2026",
    "verified_student": true,
    "detailed_comment": "Trainer Kelvin’s real-world insights from enterprise migrations made all the difference. Passed my AWS Solutions Architect exam on the first try. The modern labs at Jurong East campus are world-class.",
    "avatar": "https://images.unsplash.com/photo-1534528745183?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV034",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Grace Teo",
    "author_role": "Marketing Lead at Shopee",
    "category": "Digital Marketing",
    "course_name": "Digital Marketing Professional Course 11",
    "review_date": "17 Jun 2026",
    "verified_student": true,
    "detailed_comment": "Unlike typical surface-level courses, this course dove deep into programmatic bidding, attribution modeling, and GA4 data structures. SkillsFuture subsidy covered over half the fee!",
    "avatar": "https://images.unsplash.com/photo-1534528753102?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV035",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Mdm. Koh Siew Lan",
    "author_role": "Parent of P6 Student (Tao Nan School)",
    "category": "PSLE Preparation",
    "course_name": "PSLE Preparation Professional Course 1",
    "review_date": "14 Jun 2026",
    "verified_student": true,
    "detailed_comment": "Dr. Lin Chen is simply outstanding. She knows every single nuance of the revised PSLE scoring framework and taught my son systematic answering methods that eliminated careless mistakes.",
    "avatar": "https://images.unsplash.com/photo-1534528761021?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV036",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Kenneth Seah",
    "author_role": "Cyber Security Analyst at DBS Bank",
    "category": "Cyber Security",
    "course_name": "Cyber Security Professional Course 9",
    "review_date": "11 Jun 2026",
    "verified_student": true,
    "detailed_comment": "The hands-on red team and blue team labs at the City campus simulated real enterprise intrusions. It gave me the practical edge needed to pass the technical interview at DBS.",
    "avatar": "https://images.unsplash.com/photo-1534528768940?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV037",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Priya Narayanan",
    "author_role": "Senior Business Analyst at Standard Chartered",
    "category": "Business Analytics",
    "course_name": "Business Analytics Professional Course 12",
    "review_date": "8 Jun 2026",
    "verified_student": true,
    "detailed_comment": "High-yield curriculum focused on predictive forecasting and financial KPIs. The trainer bridged technical dashboards directly to board-level decision making.",
    "avatar": "https://images.unsplash.com/photo-1534528776859?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV038",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Lucas Wong",
    "author_role": "Junior College Year 2 Student (Raffles Institution)",
    "category": "A-Level Preparation",
    "course_name": "A-Level Preparation Professional Course 3",
    "review_date": "5 Jun 2026",
    "verified_student": true,
    "detailed_comment": "Clarissa’s General Paper argumentation drills and H2 essays changed how I approach essay construction. Scored distinction in the prelims. Highly recommend to any JC student aiming for top university offers.",
    "avatar": "https://images.unsplash.com/photo-1534528784778?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV039",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Marcus Fong",
    "author_role": "Software Engineer at Sea Group",
    "category": "Python Programming",
    "course_name": "Python Programming Professional Course 5",
    "review_date": "2 Jun 2026",
    "verified_student": true,
    "detailed_comment": "Trainer David is an absolute machine when it comes to Python internals, concurrency, and FastAPI. The code reviews were as rigorous as production pull requests at top tech companies.",
    "avatar": "https://images.unsplash.com/photo-1534528742697?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV040",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Benjamin Neo",
    "author_role": "BI Developer at SingHealth",
    "category": "Power BI",
    "course_name": "Power BI Professional Course 19",
    "review_date": "30 May 2026",
    "verified_student": true,
    "detailed_comment": "Mastered DAX time intelligence and complex tabular modeling. We even connected our capstones to live healthcare mockup data. Absolutely worth every dollar!",
    "avatar": "https://images.unsplash.com/photo-1534528750616?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV041",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Tan Wei Jie",
    "author_role": "Data Analyst at Grab Singapore",
    "category": "Data Analytics",
    "course_name": "Data Analytics Professional Course 6",
    "review_date": "27 May 2026",
    "verified_student": true,
    "detailed_comment": "The curriculum was deeply practical. We worked with real Singapore public dataset pipelines and SQL databases. Within 2 months of graduation, I successfully transitioned from operations to full-time data analytics with a 35% pay increment!",
    "avatar": "https://images.unsplash.com/photo-1534528758535?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV042",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Cheryl Lim",
    "author_role": "Parent of Sec 4 Student (CHIJ St. Nicholas)",
    "category": "O-Level Preparation",
    "course_name": "O-Level Preparation Professional Course 2",
    "review_date": "24 May 2026",
    "verified_student": true,
    "detailed_comment": "My daughter struggled with A-Math and was hovering at C6. Trainer Marcus made the heuristics so clear and approachable. In her preliminary exams, she scored A1! Truly grateful for the personalized feedback and dedicated after-class support.",
    "avatar": "https://images.unsplash.com/photo-1534528766454?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV043",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Ahmad Farhan",
    "author_role": "Cloud Engineer at Singtel",
    "category": "Cloud Computing",
    "course_name": "Cloud Computing Professional Course 10",
    "review_date": "21 May 2026",
    "verified_student": true,
    "detailed_comment": "Trainer Kelvin’s real-world insights from enterprise migrations made all the difference. Passed my AWS Solutions Architect exam on the first try. The modern labs at Jurong East campus are world-class.",
    "avatar": "https://images.unsplash.com/photo-1534528774373?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV044",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Grace Teo",
    "author_role": "Marketing Lead at Shopee",
    "category": "Digital Marketing",
    "course_name": "Digital Marketing Professional Course 11",
    "review_date": "18 May 2026",
    "verified_student": true,
    "detailed_comment": "Unlike typical surface-level courses, this course dove deep into programmatic bidding, attribution modeling, and GA4 data structures. SkillsFuture subsidy covered over half the fee!",
    "avatar": "https://images.unsplash.com/photo-1534528782292?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV045",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Mdm. Koh Siew Lan",
    "author_role": "Parent of P6 Student (Tao Nan School)",
    "category": "PSLE Preparation",
    "course_name": "PSLE Preparation Professional Course 1",
    "review_date": "15 May 2026",
    "verified_student": true,
    "detailed_comment": "Dr. Lin Chen is simply outstanding. She knows every single nuance of the revised PSLE scoring framework and taught my son systematic answering methods that eliminated careless mistakes.",
    "avatar": "https://images.unsplash.com/photo-1534528790211?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV046",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Kenneth Seah",
    "author_role": "Cyber Security Analyst at DBS Bank",
    "category": "Cyber Security",
    "course_name": "Cyber Security Professional Course 9",
    "review_date": "12 May 2026",
    "verified_student": true,
    "detailed_comment": "The hands-on red team and blue team labs at the City campus simulated real enterprise intrusions. It gave me the practical edge needed to pass the technical interview at DBS.",
    "avatar": "https://images.unsplash.com/photo-1534528748130?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV047",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Priya Narayanan",
    "author_role": "Senior Business Analyst at Standard Chartered",
    "category": "Business Analytics",
    "course_name": "Business Analytics Professional Course 12",
    "review_date": "9 May 2026",
    "verified_student": true,
    "detailed_comment": "High-yield curriculum focused on predictive forecasting and financial KPIs. The trainer bridged technical dashboards directly to board-level decision making.",
    "avatar": "https://images.unsplash.com/photo-1534528756049?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV048",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Lucas Wong",
    "author_role": "Junior College Year 2 Student (Raffles Institution)",
    "category": "A-Level Preparation",
    "course_name": "A-Level Preparation Professional Course 3",
    "review_date": "6 May 2026",
    "verified_student": true,
    "detailed_comment": "Clarissa’s General Paper argumentation drills and H2 essays changed how I approach essay construction. Scored distinction in the prelims. Highly recommend to any JC student aiming for top university offers.",
    "avatar": "https://images.unsplash.com/photo-1534528763968?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV049",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Marcus Fong",
    "author_role": "Software Engineer at Sea Group",
    "category": "Python Programming",
    "course_name": "Python Programming Professional Course 5",
    "review_date": "3 May 2026",
    "verified_student": true,
    "detailed_comment": "Trainer David is an absolute machine when it comes to Python internals, concurrency, and FastAPI. The code reviews were as rigorous as production pull requests at top tech companies.",
    "avatar": "https://images.unsplash.com/photo-1534528771887?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV050",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Benjamin Neo",
    "author_role": "BI Developer at SingHealth",
    "category": "Power BI",
    "course_name": "Power BI Professional Course 19",
    "review_date": "30 Apr 2026",
    "verified_student": true,
    "detailed_comment": "Mastered DAX time intelligence and complex tabular modeling. We even connected our capstones to live healthcare mockup data. Absolutely worth every dollar!",
    "avatar": "https://images.unsplash.com/photo-1534528779806?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV051",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Tan Wei Jie",
    "author_role": "Data Analyst at Grab Singapore",
    "category": "Data Analytics",
    "course_name": "Data Analytics Professional Course 6",
    "review_date": "27 Apr 2026",
    "verified_student": true,
    "detailed_comment": "The curriculum was deeply practical. We worked with real Singapore public dataset pipelines and SQL databases. Within 2 months of graduation, I successfully transitioned from operations to full-time data analytics with a 35% pay increment!",
    "avatar": "https://images.unsplash.com/photo-1534528787725?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV052",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Cheryl Lim",
    "author_role": "Parent of Sec 4 Student (CHIJ St. Nicholas)",
    "category": "O-Level Preparation",
    "course_name": "O-Level Preparation Professional Course 2",
    "review_date": "24 Apr 2026",
    "verified_student": true,
    "detailed_comment": "My daughter struggled with A-Math and was hovering at C6. Trainer Marcus made the heuristics so clear and approachable. In her preliminary exams, she scored A1! Truly grateful for the personalized feedback and dedicated after-class support.",
    "avatar": "https://images.unsplash.com/photo-1534528745644?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV053",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Ahmad Farhan",
    "author_role": "Cloud Engineer at Singtel",
    "category": "Cloud Computing",
    "course_name": "Cloud Computing Professional Course 10",
    "review_date": "21 Apr 2026",
    "verified_student": true,
    "detailed_comment": "Trainer Kelvin’s real-world insights from enterprise migrations made all the difference. Passed my AWS Solutions Architect exam on the first try. The modern labs at Jurong East campus are world-class.",
    "avatar": "https://images.unsplash.com/photo-1534528753563?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV054",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Grace Teo",
    "author_role": "Marketing Lead at Shopee",
    "category": "Digital Marketing",
    "course_name": "Digital Marketing Professional Course 11",
    "review_date": "18 Apr 2026",
    "verified_student": true,
    "detailed_comment": "Unlike typical surface-level courses, this course dove deep into programmatic bidding, attribution modeling, and GA4 data structures. SkillsFuture subsidy covered over half the fee!",
    "avatar": "https://images.unsplash.com/photo-1534528761482?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV055",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Mdm. Koh Siew Lan",
    "author_role": "Parent of P6 Student (Tao Nan School)",
    "category": "PSLE Preparation",
    "course_name": "PSLE Preparation Professional Course 1",
    "review_date": "15 Apr 2026",
    "verified_student": true,
    "detailed_comment": "Dr. Lin Chen is simply outstanding. She knows every single nuance of the revised PSLE scoring framework and taught my son systematic answering methods that eliminated careless mistakes.",
    "avatar": "https://images.unsplash.com/photo-1534528769401?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV056",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Kenneth Seah",
    "author_role": "Cyber Security Analyst at DBS Bank",
    "category": "Cyber Security",
    "course_name": "Cyber Security Professional Course 9",
    "review_date": "12 Apr 2026",
    "verified_student": true,
    "detailed_comment": "The hands-on red team and blue team labs at the City campus simulated real enterprise intrusions. It gave me the practical edge needed to pass the technical interview at DBS.",
    "avatar": "https://images.unsplash.com/photo-1534528777320?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV057",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Priya Narayanan",
    "author_role": "Senior Business Analyst at Standard Chartered",
    "category": "Business Analytics",
    "course_name": "Business Analytics Professional Course 12",
    "review_date": "9 Apr 2026",
    "verified_student": true,
    "detailed_comment": "High-yield curriculum focused on predictive forecasting and financial KPIs. The trainer bridged technical dashboards directly to board-level decision making.",
    "avatar": "https://images.unsplash.com/photo-1534528785239?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV058",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Lucas Wong",
    "author_role": "Junior College Year 2 Student (Raffles Institution)",
    "category": "A-Level Preparation",
    "course_name": "A-Level Preparation Professional Course 3",
    "review_date": "6 Apr 2026",
    "verified_student": true,
    "detailed_comment": "Clarissa’s General Paper argumentation drills and H2 essays changed how I approach essay construction. Scored distinction in the prelims. Highly recommend to any JC student aiming for top university offers.",
    "avatar": "https://images.unsplash.com/photo-1534528743158?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV059",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Marcus Fong",
    "author_role": "Software Engineer at Sea Group",
    "category": "Python Programming",
    "course_name": "Python Programming Professional Course 5",
    "review_date": "3 Apr 2026",
    "verified_student": true,
    "detailed_comment": "Trainer David is an absolute machine when it comes to Python internals, concurrency, and FastAPI. The code reviews were as rigorous as production pull requests at top tech companies.",
    "avatar": "https://images.unsplash.com/photo-1534528751077?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV060",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Benjamin Neo",
    "author_role": "BI Developer at SingHealth",
    "category": "Power BI",
    "course_name": "Power BI Professional Course 19",
    "review_date": "31 Mar 2026",
    "verified_student": true,
    "detailed_comment": "Mastered DAX time intelligence and complex tabular modeling. We even connected our capstones to live healthcare mockup data. Absolutely worth every dollar!",
    "avatar": "https://images.unsplash.com/photo-1534528758996?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV061",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Tan Wei Jie",
    "author_role": "Data Analyst at Grab Singapore",
    "category": "Data Analytics",
    "course_name": "Data Analytics Professional Course 6",
    "review_date": "24 Sept 2026",
    "verified_student": true,
    "detailed_comment": "The curriculum was deeply practical. We worked with real Singapore public dataset pipelines and SQL databases. Within 2 months of graduation, I successfully transitioned from operations to full-time data analytics with a 35% pay increment!",
    "avatar": "https://images.unsplash.com/photo-1534528766915?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV062",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Cheryl Lim",
    "author_role": "Parent of Sec 4 Student (CHIJ St. Nicholas)",
    "category": "O-Level Preparation",
    "course_name": "O-Level Preparation Professional Course 2",
    "review_date": "21 Sept 2026",
    "verified_student": true,
    "detailed_comment": "My daughter struggled with A-Math and was hovering at C6. Trainer Marcus made the heuristics so clear and approachable. In her preliminary exams, she scored A1! Truly grateful for the personalized feedback and dedicated after-class support.",
    "avatar": "https://images.unsplash.com/photo-1534528774834?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV063",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Ahmad Farhan",
    "author_role": "Cloud Engineer at Singtel",
    "category": "Cloud Computing",
    "course_name": "Cloud Computing Professional Course 10",
    "review_date": "18 Sept 2026",
    "verified_student": true,
    "detailed_comment": "Trainer Kelvin’s real-world insights from enterprise migrations made all the difference. Passed my AWS Solutions Architect exam on the first try. The modern labs at Jurong East campus are world-class.",
    "avatar": "https://images.unsplash.com/photo-1534528782753?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV064",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Grace Teo",
    "author_role": "Marketing Lead at Shopee",
    "category": "Digital Marketing",
    "course_name": "Digital Marketing Professional Course 11",
    "review_date": "15 Sept 2026",
    "verified_student": true,
    "detailed_comment": "Unlike typical surface-level courses, this course dove deep into programmatic bidding, attribution modeling, and GA4 data structures. SkillsFuture subsidy covered over half the fee!",
    "avatar": "https://images.unsplash.com/photo-1534528790672?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV065",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Mdm. Koh Siew Lan",
    "author_role": "Parent of P6 Student (Tao Nan School)",
    "category": "PSLE Preparation",
    "course_name": "PSLE Preparation Professional Course 1",
    "review_date": "12 Sept 2026",
    "verified_student": true,
    "detailed_comment": "Dr. Lin Chen is simply outstanding. She knows every single nuance of the revised PSLE scoring framework and taught my son systematic answering methods that eliminated careless mistakes.",
    "avatar": "https://images.unsplash.com/photo-1534528748591?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV066",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Kenneth Seah",
    "author_role": "Cyber Security Analyst at DBS Bank",
    "category": "Cyber Security",
    "course_name": "Cyber Security Professional Course 9",
    "review_date": "9 Sept 2026",
    "verified_student": true,
    "detailed_comment": "The hands-on red team and blue team labs at the City campus simulated real enterprise intrusions. It gave me the practical edge needed to pass the technical interview at DBS.",
    "avatar": "https://images.unsplash.com/photo-1534528756510?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV067",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Priya Narayanan",
    "author_role": "Senior Business Analyst at Standard Chartered",
    "category": "Business Analytics",
    "course_name": "Business Analytics Professional Course 12",
    "review_date": "6 Sept 2026",
    "verified_student": true,
    "detailed_comment": "High-yield curriculum focused on predictive forecasting and financial KPIs. The trainer bridged technical dashboards directly to board-level decision making.",
    "avatar": "https://images.unsplash.com/photo-1534528764429?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV068",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Lucas Wong",
    "author_role": "Junior College Year 2 Student (Raffles Institution)",
    "category": "A-Level Preparation",
    "course_name": "A-Level Preparation Professional Course 3",
    "review_date": "3 Sept 2026",
    "verified_student": true,
    "detailed_comment": "Clarissa’s General Paper argumentation drills and H2 essays changed how I approach essay construction. Scored distinction in the prelims. Highly recommend to any JC student aiming for top university offers.",
    "avatar": "https://images.unsplash.com/photo-1534528772348?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV069",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Marcus Fong",
    "author_role": "Software Engineer at Sea Group",
    "category": "Python Programming",
    "course_name": "Python Programming Professional Course 5",
    "review_date": "31 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Trainer David is an absolute machine when it comes to Python internals, concurrency, and FastAPI. The code reviews were as rigorous as production pull requests at top tech companies.",
    "avatar": "https://images.unsplash.com/photo-1534528780267?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV070",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Benjamin Neo",
    "author_role": "BI Developer at SingHealth",
    "category": "Power BI",
    "course_name": "Power BI Professional Course 19",
    "review_date": "28 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Mastered DAX time intelligence and complex tabular modeling. We even connected our capstones to live healthcare mockup data. Absolutely worth every dollar!",
    "avatar": "https://images.unsplash.com/photo-1534528788186?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV071",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Tan Wei Jie",
    "author_role": "Data Analyst at Grab Singapore",
    "category": "Data Analytics",
    "course_name": "Data Analytics Professional Course 6",
    "review_date": "25 Aug 2026",
    "verified_student": true,
    "detailed_comment": "The curriculum was deeply practical. We worked with real Singapore public dataset pipelines and SQL databases. Within 2 months of graduation, I successfully transitioned from operations to full-time data analytics with a 35% pay increment!",
    "avatar": "https://images.unsplash.com/photo-1534528746105?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV072",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Cheryl Lim",
    "author_role": "Parent of Sec 4 Student (CHIJ St. Nicholas)",
    "category": "O-Level Preparation",
    "course_name": "O-Level Preparation Professional Course 2",
    "review_date": "22 Aug 2026",
    "verified_student": true,
    "detailed_comment": "My daughter struggled with A-Math and was hovering at C6. Trainer Marcus made the heuristics so clear and approachable. In her preliminary exams, she scored A1! Truly grateful for the personalized feedback and dedicated after-class support.",
    "avatar": "https://images.unsplash.com/photo-1534528754024?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV073",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Ahmad Farhan",
    "author_role": "Cloud Engineer at Singtel",
    "category": "Cloud Computing",
    "course_name": "Cloud Computing Professional Course 10",
    "review_date": "19 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Trainer Kelvin’s real-world insights from enterprise migrations made all the difference. Passed my AWS Solutions Architect exam on the first try. The modern labs at Jurong East campus are world-class.",
    "avatar": "https://images.unsplash.com/photo-1534528761943?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV074",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Grace Teo",
    "author_role": "Marketing Lead at Shopee",
    "category": "Digital Marketing",
    "course_name": "Digital Marketing Professional Course 11",
    "review_date": "16 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Unlike typical surface-level courses, this course dove deep into programmatic bidding, attribution modeling, and GA4 data structures. SkillsFuture subsidy covered over half the fee!",
    "avatar": "https://images.unsplash.com/photo-1534528769862?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV075",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Mdm. Koh Siew Lan",
    "author_role": "Parent of P6 Student (Tao Nan School)",
    "category": "PSLE Preparation",
    "course_name": "PSLE Preparation Professional Course 1",
    "review_date": "13 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Dr. Lin Chen is simply outstanding. She knows every single nuance of the revised PSLE scoring framework and taught my son systematic answering methods that eliminated careless mistakes.",
    "avatar": "https://images.unsplash.com/photo-1534528777781?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV076",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Kenneth Seah",
    "author_role": "Cyber Security Analyst at DBS Bank",
    "category": "Cyber Security",
    "course_name": "Cyber Security Professional Course 9",
    "review_date": "10 Aug 2026",
    "verified_student": true,
    "detailed_comment": "The hands-on red team and blue team labs at the City campus simulated real enterprise intrusions. It gave me the practical edge needed to pass the technical interview at DBS.",
    "avatar": "https://images.unsplash.com/photo-1534528785700?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV077",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Priya Narayanan",
    "author_role": "Senior Business Analyst at Standard Chartered",
    "category": "Business Analytics",
    "course_name": "Business Analytics Professional Course 12",
    "review_date": "7 Aug 2026",
    "verified_student": true,
    "detailed_comment": "High-yield curriculum focused on predictive forecasting and financial KPIs. The trainer bridged technical dashboards directly to board-level decision making.",
    "avatar": "https://images.unsplash.com/photo-1534528743619?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV078",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Lucas Wong",
    "author_role": "Junior College Year 2 Student (Raffles Institution)",
    "category": "A-Level Preparation",
    "course_name": "A-Level Preparation Professional Course 3",
    "review_date": "4 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Clarissa’s General Paper argumentation drills and H2 essays changed how I approach essay construction. Scored distinction in the prelims. Highly recommend to any JC student aiming for top university offers.",
    "avatar": "https://images.unsplash.com/photo-1534528751538?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV079",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Marcus Fong",
    "author_role": "Software Engineer at Sea Group",
    "category": "Python Programming",
    "course_name": "Python Programming Professional Course 5",
    "review_date": "1 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Trainer David is an absolute machine when it comes to Python internals, concurrency, and FastAPI. The code reviews were as rigorous as production pull requests at top tech companies.",
    "avatar": "https://images.unsplash.com/photo-1534528759457?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV080",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Benjamin Neo",
    "author_role": "BI Developer at SingHealth",
    "category": "Power BI",
    "course_name": "Power BI Professional Course 19",
    "review_date": "29 Jul 2026",
    "verified_student": true,
    "detailed_comment": "Mastered DAX time intelligence and complex tabular modeling. We even connected our capstones to live healthcare mockup data. Absolutely worth every dollar!",
    "avatar": "https://images.unsplash.com/photo-1534528767376?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV081",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Tan Wei Jie",
    "author_role": "Data Analyst at Grab Singapore",
    "category": "Data Analytics",
    "course_name": "Data Analytics Professional Course 6",
    "review_date": "26 Jul 2026",
    "verified_student": true,
    "detailed_comment": "The curriculum was deeply practical. We worked with real Singapore public dataset pipelines and SQL databases. Within 2 months of graduation, I successfully transitioned from operations to full-time data analytics with a 35% pay increment!",
    "avatar": "https://images.unsplash.com/photo-1534528775295?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV082",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Cheryl Lim",
    "author_role": "Parent of Sec 4 Student (CHIJ St. Nicholas)",
    "category": "O-Level Preparation",
    "course_name": "O-Level Preparation Professional Course 2",
    "review_date": "23 Jul 2026",
    "verified_student": true,
    "detailed_comment": "My daughter struggled with A-Math and was hovering at C6. Trainer Marcus made the heuristics so clear and approachable. In her preliminary exams, she scored A1! Truly grateful for the personalized feedback and dedicated after-class support.",
    "avatar": "https://images.unsplash.com/photo-1534528783214?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV083",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Ahmad Farhan",
    "author_role": "Cloud Engineer at Singtel",
    "category": "Cloud Computing",
    "course_name": "Cloud Computing Professional Course 10",
    "review_date": "20 Jul 2026",
    "verified_student": true,
    "detailed_comment": "Trainer Kelvin’s real-world insights from enterprise migrations made all the difference. Passed my AWS Solutions Architect exam on the first try. The modern labs at Jurong East campus are world-class.",
    "avatar": "https://images.unsplash.com/photo-1534528791133?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV084",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Grace Teo",
    "author_role": "Marketing Lead at Shopee",
    "category": "Digital Marketing",
    "course_name": "Digital Marketing Professional Course 11",
    "review_date": "17 Jul 2026",
    "verified_student": true,
    "detailed_comment": "Unlike typical surface-level courses, this course dove deep into programmatic bidding, attribution modeling, and GA4 data structures. SkillsFuture subsidy covered over half the fee!",
    "avatar": "https://images.unsplash.com/photo-1534528749052?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV085",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Mdm. Koh Siew Lan",
    "author_role": "Parent of P6 Student (Tao Nan School)",
    "category": "PSLE Preparation",
    "course_name": "PSLE Preparation Professional Course 1",
    "review_date": "14 Jul 2026",
    "verified_student": true,
    "detailed_comment": "Dr. Lin Chen is simply outstanding. She knows every single nuance of the revised PSLE scoring framework and taught my son systematic answering methods that eliminated careless mistakes.",
    "avatar": "https://images.unsplash.com/photo-1534528756971?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV086",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Kenneth Seah",
    "author_role": "Cyber Security Analyst at DBS Bank",
    "category": "Cyber Security",
    "course_name": "Cyber Security Professional Course 9",
    "review_date": "11 Jul 2026",
    "verified_student": true,
    "detailed_comment": "The hands-on red team and blue team labs at the City campus simulated real enterprise intrusions. It gave me the practical edge needed to pass the technical interview at DBS.",
    "avatar": "https://images.unsplash.com/photo-1534528764890?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV087",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Priya Narayanan",
    "author_role": "Senior Business Analyst at Standard Chartered",
    "category": "Business Analytics",
    "course_name": "Business Analytics Professional Course 12",
    "review_date": "8 Jul 2026",
    "verified_student": true,
    "detailed_comment": "High-yield curriculum focused on predictive forecasting and financial KPIs. The trainer bridged technical dashboards directly to board-level decision making.",
    "avatar": "https://images.unsplash.com/photo-1534528772809?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV088",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Lucas Wong",
    "author_role": "Junior College Year 2 Student (Raffles Institution)",
    "category": "A-Level Preparation",
    "course_name": "A-Level Preparation Professional Course 3",
    "review_date": "5 Jul 2026",
    "verified_student": true,
    "detailed_comment": "Clarissa’s General Paper argumentation drills and H2 essays changed how I approach essay construction. Scored distinction in the prelims. Highly recommend to any JC student aiming for top university offers.",
    "avatar": "https://images.unsplash.com/photo-1534528780728?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV089",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Marcus Fong",
    "author_role": "Software Engineer at Sea Group",
    "category": "Python Programming",
    "course_name": "Python Programming Professional Course 5",
    "review_date": "2 Jul 2026",
    "verified_student": true,
    "detailed_comment": "Trainer David is an absolute machine when it comes to Python internals, concurrency, and FastAPI. The code reviews were as rigorous as production pull requests at top tech companies.",
    "avatar": "https://images.unsplash.com/photo-1534528788647?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV090",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Benjamin Neo",
    "author_role": "BI Developer at SingHealth",
    "category": "Power BI",
    "course_name": "Power BI Professional Course 19",
    "review_date": "29 Jun 2026",
    "verified_student": true,
    "detailed_comment": "Mastered DAX time intelligence and complex tabular modeling. We even connected our capstones to live healthcare mockup data. Absolutely worth every dollar!",
    "avatar": "https://images.unsplash.com/photo-1534528746566?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV091",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Tan Wei Jie",
    "author_role": "Data Analyst at Grab Singapore",
    "category": "Data Analytics",
    "course_name": "Data Analytics Professional Course 6",
    "review_date": "26 Jun 2026",
    "verified_student": true,
    "detailed_comment": "The curriculum was deeply practical. We worked with real Singapore public dataset pipelines and SQL databases. Within 2 months of graduation, I successfully transitioned from operations to full-time data analytics with a 35% pay increment!",
    "avatar": "https://images.unsplash.com/photo-1534528754485?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV092",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Cheryl Lim",
    "author_role": "Parent of Sec 4 Student (CHIJ St. Nicholas)",
    "category": "O-Level Preparation",
    "course_name": "O-Level Preparation Professional Course 2",
    "review_date": "23 Jun 2026",
    "verified_student": true,
    "detailed_comment": "My daughter struggled with A-Math and was hovering at C6. Trainer Marcus made the heuristics so clear and approachable. In her preliminary exams, she scored A1! Truly grateful for the personalized feedback and dedicated after-class support.",
    "avatar": "https://images.unsplash.com/photo-1534528762404?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV093",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Ahmad Farhan",
    "author_role": "Cloud Engineer at Singtel",
    "category": "Cloud Computing",
    "course_name": "Cloud Computing Professional Course 10",
    "review_date": "20 Jun 2026",
    "verified_student": true,
    "detailed_comment": "Trainer Kelvin’s real-world insights from enterprise migrations made all the difference. Passed my AWS Solutions Architect exam on the first try. The modern labs at Jurong East campus are world-class.",
    "avatar": "https://images.unsplash.com/photo-1534528770323?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV094",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Grace Teo",
    "author_role": "Marketing Lead at Shopee",
    "category": "Digital Marketing",
    "course_name": "Digital Marketing Professional Course 11",
    "review_date": "17 Jun 2026",
    "verified_student": true,
    "detailed_comment": "Unlike typical surface-level courses, this course dove deep into programmatic bidding, attribution modeling, and GA4 data structures. SkillsFuture subsidy covered over half the fee!",
    "avatar": "https://images.unsplash.com/photo-1534528778242?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV095",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Mdm. Koh Siew Lan",
    "author_role": "Parent of P6 Student (Tao Nan School)",
    "category": "PSLE Preparation",
    "course_name": "PSLE Preparation Professional Course 1",
    "review_date": "14 Jun 2026",
    "verified_student": true,
    "detailed_comment": "Dr. Lin Chen is simply outstanding. She knows every single nuance of the revised PSLE scoring framework and taught my son systematic answering methods that eliminated careless mistakes.",
    "avatar": "https://images.unsplash.com/photo-1534528786161?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV096",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Kenneth Seah",
    "author_role": "Cyber Security Analyst at DBS Bank",
    "category": "Cyber Security",
    "course_name": "Cyber Security Professional Course 9",
    "review_date": "11 Jun 2026",
    "verified_student": true,
    "detailed_comment": "The hands-on red team and blue team labs at the City campus simulated real enterprise intrusions. It gave me the practical edge needed to pass the technical interview at DBS.",
    "avatar": "https://images.unsplash.com/photo-1534528744080?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV097",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Priya Narayanan",
    "author_role": "Senior Business Analyst at Standard Chartered",
    "category": "Business Analytics",
    "course_name": "Business Analytics Professional Course 12",
    "review_date": "8 Jun 2026",
    "verified_student": true,
    "detailed_comment": "High-yield curriculum focused on predictive forecasting and financial KPIs. The trainer bridged technical dashboards directly to board-level decision making.",
    "avatar": "https://images.unsplash.com/photo-1534528751999?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV098",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Lucas Wong",
    "author_role": "Junior College Year 2 Student (Raffles Institution)",
    "category": "A-Level Preparation",
    "course_name": "A-Level Preparation Professional Course 3",
    "review_date": "5 Jun 2026",
    "verified_student": true,
    "detailed_comment": "Clarissa’s General Paper argumentation drills and H2 essays changed how I approach essay construction. Scored distinction in the prelims. Highly recommend to any JC student aiming for top university offers.",
    "avatar": "https://images.unsplash.com/photo-1534528759918?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV099",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Marcus Fong",
    "author_role": "Software Engineer at Sea Group",
    "category": "Python Programming",
    "course_name": "Python Programming Professional Course 5",
    "review_date": "2 Jun 2026",
    "verified_student": true,
    "detailed_comment": "Trainer David is an absolute machine when it comes to Python internals, concurrency, and FastAPI. The code reviews were as rigorous as production pull requests at top tech companies.",
    "avatar": "https://images.unsplash.com/photo-1534528767837?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV100",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Benjamin Neo",
    "author_role": "BI Developer at SingHealth",
    "category": "Power BI",
    "course_name": "Power BI Professional Course 19",
    "review_date": "30 May 2026",
    "verified_student": true,
    "detailed_comment": "Mastered DAX time intelligence and complex tabular modeling. We even connected our capstones to live healthcare mockup data. Absolutely worth every dollar!",
    "avatar": "https://images.unsplash.com/photo-1534528775756?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV101",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Tan Wei Jie",
    "author_role": "Data Analyst at Grab Singapore",
    "category": "Data Analytics",
    "course_name": "Data Analytics Professional Course 6",
    "review_date": "27 May 2026",
    "verified_student": true,
    "detailed_comment": "The curriculum was deeply practical. We worked with real Singapore public dataset pipelines and SQL databases. Within 2 months of graduation, I successfully transitioned from operations to full-time data analytics with a 35% pay increment!",
    "avatar": "https://images.unsplash.com/photo-1534528783675?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV102",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Cheryl Lim",
    "author_role": "Parent of Sec 4 Student (CHIJ St. Nicholas)",
    "category": "O-Level Preparation",
    "course_name": "O-Level Preparation Professional Course 2",
    "review_date": "24 May 2026",
    "verified_student": true,
    "detailed_comment": "My daughter struggled with A-Math and was hovering at C6. Trainer Marcus made the heuristics so clear and approachable. In her preliminary exams, she scored A1! Truly grateful for the personalized feedback and dedicated after-class support.",
    "avatar": "https://images.unsplash.com/photo-1534528791594?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV103",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Ahmad Farhan",
    "author_role": "Cloud Engineer at Singtel",
    "category": "Cloud Computing",
    "course_name": "Cloud Computing Professional Course 10",
    "review_date": "21 May 2026",
    "verified_student": true,
    "detailed_comment": "Trainer Kelvin’s real-world insights from enterprise migrations made all the difference. Passed my AWS Solutions Architect exam on the first try. The modern labs at Jurong East campus are world-class.",
    "avatar": "https://images.unsplash.com/photo-1534528749513?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV104",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Grace Teo",
    "author_role": "Marketing Lead at Shopee",
    "category": "Digital Marketing",
    "course_name": "Digital Marketing Professional Course 11",
    "review_date": "18 May 2026",
    "verified_student": true,
    "detailed_comment": "Unlike typical surface-level courses, this course dove deep into programmatic bidding, attribution modeling, and GA4 data structures. SkillsFuture subsidy covered over half the fee!",
    "avatar": "https://images.unsplash.com/photo-1534528757432?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV105",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Mdm. Koh Siew Lan",
    "author_role": "Parent of P6 Student (Tao Nan School)",
    "category": "PSLE Preparation",
    "course_name": "PSLE Preparation Professional Course 1",
    "review_date": "15 May 2026",
    "verified_student": true,
    "detailed_comment": "Dr. Lin Chen is simply outstanding. She knows every single nuance of the revised PSLE scoring framework and taught my son systematic answering methods that eliminated careless mistakes.",
    "avatar": "https://images.unsplash.com/photo-1534528765351?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV106",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Kenneth Seah",
    "author_role": "Cyber Security Analyst at DBS Bank",
    "category": "Cyber Security",
    "course_name": "Cyber Security Professional Course 9",
    "review_date": "12 May 2026",
    "verified_student": true,
    "detailed_comment": "The hands-on red team and blue team labs at the City campus simulated real enterprise intrusions. It gave me the practical edge needed to pass the technical interview at DBS.",
    "avatar": "https://images.unsplash.com/photo-1534528773270?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV107",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Priya Narayanan",
    "author_role": "Senior Business Analyst at Standard Chartered",
    "category": "Business Analytics",
    "course_name": "Business Analytics Professional Course 12",
    "review_date": "9 May 2026",
    "verified_student": true,
    "detailed_comment": "High-yield curriculum focused on predictive forecasting and financial KPIs. The trainer bridged technical dashboards directly to board-level decision making.",
    "avatar": "https://images.unsplash.com/photo-1534528781189?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV108",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Lucas Wong",
    "author_role": "Junior College Year 2 Student (Raffles Institution)",
    "category": "A-Level Preparation",
    "course_name": "A-Level Preparation Professional Course 3",
    "review_date": "6 May 2026",
    "verified_student": true,
    "detailed_comment": "Clarissa’s General Paper argumentation drills and H2 essays changed how I approach essay construction. Scored distinction in the prelims. Highly recommend to any JC student aiming for top university offers.",
    "avatar": "https://images.unsplash.com/photo-1534528789108?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV109",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Marcus Fong",
    "author_role": "Software Engineer at Sea Group",
    "category": "Python Programming",
    "course_name": "Python Programming Professional Course 5",
    "review_date": "3 May 2026",
    "verified_student": true,
    "detailed_comment": "Trainer David is an absolute machine when it comes to Python internals, concurrency, and FastAPI. The code reviews were as rigorous as production pull requests at top tech companies.",
    "avatar": "https://images.unsplash.com/photo-1534528747027?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV110",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Benjamin Neo",
    "author_role": "BI Developer at SingHealth",
    "category": "Power BI",
    "course_name": "Power BI Professional Course 19",
    "review_date": "30 Apr 2026",
    "verified_student": true,
    "detailed_comment": "Mastered DAX time intelligence and complex tabular modeling. We even connected our capstones to live healthcare mockup data. Absolutely worth every dollar!",
    "avatar": "https://images.unsplash.com/photo-1534528754946?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV111",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Tan Wei Jie",
    "author_role": "Data Analyst at Grab Singapore",
    "category": "Data Analytics",
    "course_name": "Data Analytics Professional Course 6",
    "review_date": "27 Apr 2026",
    "verified_student": true,
    "detailed_comment": "The curriculum was deeply practical. We worked with real Singapore public dataset pipelines and SQL databases. Within 2 months of graduation, I successfully transitioned from operations to full-time data analytics with a 35% pay increment!",
    "avatar": "https://images.unsplash.com/photo-1534528762865?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV112",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Cheryl Lim",
    "author_role": "Parent of Sec 4 Student (CHIJ St. Nicholas)",
    "category": "O-Level Preparation",
    "course_name": "O-Level Preparation Professional Course 2",
    "review_date": "24 Apr 2026",
    "verified_student": true,
    "detailed_comment": "My daughter struggled with A-Math and was hovering at C6. Trainer Marcus made the heuristics so clear and approachable. In her preliminary exams, she scored A1! Truly grateful for the personalized feedback and dedicated after-class support.",
    "avatar": "https://images.unsplash.com/photo-1534528770784?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV113",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Ahmad Farhan",
    "author_role": "Cloud Engineer at Singtel",
    "category": "Cloud Computing",
    "course_name": "Cloud Computing Professional Course 10",
    "review_date": "21 Apr 2026",
    "verified_student": true,
    "detailed_comment": "Trainer Kelvin’s real-world insights from enterprise migrations made all the difference. Passed my AWS Solutions Architect exam on the first try. The modern labs at Jurong East campus are world-class.",
    "avatar": "https://images.unsplash.com/photo-1534528778703?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV114",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Grace Teo",
    "author_role": "Marketing Lead at Shopee",
    "category": "Digital Marketing",
    "course_name": "Digital Marketing Professional Course 11",
    "review_date": "18 Apr 2026",
    "verified_student": true,
    "detailed_comment": "Unlike typical surface-level courses, this course dove deep into programmatic bidding, attribution modeling, and GA4 data structures. SkillsFuture subsidy covered over half the fee!",
    "avatar": "https://images.unsplash.com/photo-1534528786622?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV115",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Mdm. Koh Siew Lan",
    "author_role": "Parent of P6 Student (Tao Nan School)",
    "category": "PSLE Preparation",
    "course_name": "PSLE Preparation Professional Course 1",
    "review_date": "15 Apr 2026",
    "verified_student": true,
    "detailed_comment": "Dr. Lin Chen is simply outstanding. She knows every single nuance of the revised PSLE scoring framework and taught my son systematic answering methods that eliminated careless mistakes.",
    "avatar": "https://images.unsplash.com/photo-1534528744541?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV116",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Kenneth Seah",
    "author_role": "Cyber Security Analyst at DBS Bank",
    "category": "Cyber Security",
    "course_name": "Cyber Security Professional Course 9",
    "review_date": "12 Apr 2026",
    "verified_student": true,
    "detailed_comment": "The hands-on red team and blue team labs at the City campus simulated real enterprise intrusions. It gave me the practical edge needed to pass the technical interview at DBS.",
    "avatar": "https://images.unsplash.com/photo-1534528752460?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV117",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Priya Narayanan",
    "author_role": "Senior Business Analyst at Standard Chartered",
    "category": "Business Analytics",
    "course_name": "Business Analytics Professional Course 12",
    "review_date": "9 Apr 2026",
    "verified_student": true,
    "detailed_comment": "High-yield curriculum focused on predictive forecasting and financial KPIs. The trainer bridged technical dashboards directly to board-level decision making.",
    "avatar": "https://images.unsplash.com/photo-1534528760379?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV118",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Lucas Wong",
    "author_role": "Junior College Year 2 Student (Raffles Institution)",
    "category": "A-Level Preparation",
    "course_name": "A-Level Preparation Professional Course 3",
    "review_date": "6 Apr 2026",
    "verified_student": true,
    "detailed_comment": "Clarissa’s General Paper argumentation drills and H2 essays changed how I approach essay construction. Scored distinction in the prelims. Highly recommend to any JC student aiming for top university offers.",
    "avatar": "https://images.unsplash.com/photo-1534528768298?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV119",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Marcus Fong",
    "author_role": "Software Engineer at Sea Group",
    "category": "Python Programming",
    "course_name": "Python Programming Professional Course 5",
    "review_date": "3 Apr 2026",
    "verified_student": true,
    "detailed_comment": "Trainer David is an absolute machine when it comes to Python internals, concurrency, and FastAPI. The code reviews were as rigorous as production pull requests at top tech companies.",
    "avatar": "https://images.unsplash.com/photo-1534528776217?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV120",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Benjamin Neo",
    "author_role": "BI Developer at SingHealth",
    "category": "Power BI",
    "course_name": "Power BI Professional Course 19",
    "review_date": "31 Mar 2026",
    "verified_student": true,
    "detailed_comment": "Mastered DAX time intelligence and complex tabular modeling. We even connected our capstones to live healthcare mockup data. Absolutely worth every dollar!",
    "avatar": "https://images.unsplash.com/photo-1534528784136?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV121",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Tan Wei Jie",
    "author_role": "Data Analyst at Grab Singapore",
    "category": "Data Analytics",
    "course_name": "Data Analytics Professional Course 6",
    "review_date": "24 Sept 2026",
    "verified_student": true,
    "detailed_comment": "The curriculum was deeply practical. We worked with real Singapore public dataset pipelines and SQL databases. Within 2 months of graduation, I successfully transitioned from operations to full-time data analytics with a 35% pay increment!",
    "avatar": "https://images.unsplash.com/photo-1534528742055?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV122",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Cheryl Lim",
    "author_role": "Parent of Sec 4 Student (CHIJ St. Nicholas)",
    "category": "O-Level Preparation",
    "course_name": "O-Level Preparation Professional Course 2",
    "review_date": "21 Sept 2026",
    "verified_student": true,
    "detailed_comment": "My daughter struggled with A-Math and was hovering at C6. Trainer Marcus made the heuristics so clear and approachable. In her preliminary exams, she scored A1! Truly grateful for the personalized feedback and dedicated after-class support.",
    "avatar": "https://images.unsplash.com/photo-1534528749974?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV123",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Ahmad Farhan",
    "author_role": "Cloud Engineer at Singtel",
    "category": "Cloud Computing",
    "course_name": "Cloud Computing Professional Course 10",
    "review_date": "18 Sept 2026",
    "verified_student": true,
    "detailed_comment": "Trainer Kelvin’s real-world insights from enterprise migrations made all the difference. Passed my AWS Solutions Architect exam on the first try. The modern labs at Jurong East campus are world-class.",
    "avatar": "https://images.unsplash.com/photo-1534528757893?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV124",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Grace Teo",
    "author_role": "Marketing Lead at Shopee",
    "category": "Digital Marketing",
    "course_name": "Digital Marketing Professional Course 11",
    "review_date": "15 Sept 2026",
    "verified_student": true,
    "detailed_comment": "Unlike typical surface-level courses, this course dove deep into programmatic bidding, attribution modeling, and GA4 data structures. SkillsFuture subsidy covered over half the fee!",
    "avatar": "https://images.unsplash.com/photo-1534528765812?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV125",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Mdm. Koh Siew Lan",
    "author_role": "Parent of P6 Student (Tao Nan School)",
    "category": "PSLE Preparation",
    "course_name": "PSLE Preparation Professional Course 1",
    "review_date": "12 Sept 2026",
    "verified_student": true,
    "detailed_comment": "Dr. Lin Chen is simply outstanding. She knows every single nuance of the revised PSLE scoring framework and taught my son systematic answering methods that eliminated careless mistakes.",
    "avatar": "https://images.unsplash.com/photo-1534528773731?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV126",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Kenneth Seah",
    "author_role": "Cyber Security Analyst at DBS Bank",
    "category": "Cyber Security",
    "course_name": "Cyber Security Professional Course 9",
    "review_date": "9 Sept 2026",
    "verified_student": true,
    "detailed_comment": "The hands-on red team and blue team labs at the City campus simulated real enterprise intrusions. It gave me the practical edge needed to pass the technical interview at DBS.",
    "avatar": "https://images.unsplash.com/photo-1534528781650?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV127",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Priya Narayanan",
    "author_role": "Senior Business Analyst at Standard Chartered",
    "category": "Business Analytics",
    "course_name": "Business Analytics Professional Course 12",
    "review_date": "6 Sept 2026",
    "verified_student": true,
    "detailed_comment": "High-yield curriculum focused on predictive forecasting and financial KPIs. The trainer bridged technical dashboards directly to board-level decision making.",
    "avatar": "https://images.unsplash.com/photo-1534528789569?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV128",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Lucas Wong",
    "author_role": "Junior College Year 2 Student (Raffles Institution)",
    "category": "A-Level Preparation",
    "course_name": "A-Level Preparation Professional Course 3",
    "review_date": "3 Sept 2026",
    "verified_student": true,
    "detailed_comment": "Clarissa’s General Paper argumentation drills and H2 essays changed how I approach essay construction. Scored distinction in the prelims. Highly recommend to any JC student aiming for top university offers.",
    "avatar": "https://images.unsplash.com/photo-1534528747488?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV129",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Marcus Fong",
    "author_role": "Software Engineer at Sea Group",
    "category": "Python Programming",
    "course_name": "Python Programming Professional Course 5",
    "review_date": "31 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Trainer David is an absolute machine when it comes to Python internals, concurrency, and FastAPI. The code reviews were as rigorous as production pull requests at top tech companies.",
    "avatar": "https://images.unsplash.com/photo-1534528755407?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV130",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Benjamin Neo",
    "author_role": "BI Developer at SingHealth",
    "category": "Power BI",
    "course_name": "Power BI Professional Course 19",
    "review_date": "28 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Mastered DAX time intelligence and complex tabular modeling. We even connected our capstones to live healthcare mockup data. Absolutely worth every dollar!",
    "avatar": "https://images.unsplash.com/photo-1534528763326?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV131",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Tan Wei Jie",
    "author_role": "Data Analyst at Grab Singapore",
    "category": "Data Analytics",
    "course_name": "Data Analytics Professional Course 6",
    "review_date": "25 Aug 2026",
    "verified_student": true,
    "detailed_comment": "The curriculum was deeply practical. We worked with real Singapore public dataset pipelines and SQL databases. Within 2 months of graduation, I successfully transitioned from operations to full-time data analytics with a 35% pay increment!",
    "avatar": "https://images.unsplash.com/photo-1534528771245?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV132",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Cheryl Lim",
    "author_role": "Parent of Sec 4 Student (CHIJ St. Nicholas)",
    "category": "O-Level Preparation",
    "course_name": "O-Level Preparation Professional Course 2",
    "review_date": "22 Aug 2026",
    "verified_student": true,
    "detailed_comment": "My daughter struggled with A-Math and was hovering at C6. Trainer Marcus made the heuristics so clear and approachable. In her preliminary exams, she scored A1! Truly grateful for the personalized feedback and dedicated after-class support.",
    "avatar": "https://images.unsplash.com/photo-1534528779164?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV133",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Ahmad Farhan",
    "author_role": "Cloud Engineer at Singtel",
    "category": "Cloud Computing",
    "course_name": "Cloud Computing Professional Course 10",
    "review_date": "19 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Trainer Kelvin’s real-world insights from enterprise migrations made all the difference. Passed my AWS Solutions Architect exam on the first try. The modern labs at Jurong East campus are world-class.",
    "avatar": "https://images.unsplash.com/photo-1534528787083?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV134",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Grace Teo",
    "author_role": "Marketing Lead at Shopee",
    "category": "Digital Marketing",
    "course_name": "Digital Marketing Professional Course 11",
    "review_date": "16 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Unlike typical surface-level courses, this course dove deep into programmatic bidding, attribution modeling, and GA4 data structures. SkillsFuture subsidy covered over half the fee!",
    "avatar": "https://images.unsplash.com/photo-1534528745002?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV135",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Mdm. Koh Siew Lan",
    "author_role": "Parent of P6 Student (Tao Nan School)",
    "category": "PSLE Preparation",
    "course_name": "PSLE Preparation Professional Course 1",
    "review_date": "13 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Dr. Lin Chen is simply outstanding. She knows every single nuance of the revised PSLE scoring framework and taught my son systematic answering methods that eliminated careless mistakes.",
    "avatar": "https://images.unsplash.com/photo-1534528752921?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV136",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Kenneth Seah",
    "author_role": "Cyber Security Analyst at DBS Bank",
    "category": "Cyber Security",
    "course_name": "Cyber Security Professional Course 9",
    "review_date": "10 Aug 2026",
    "verified_student": true,
    "detailed_comment": "The hands-on red team and blue team labs at the City campus simulated real enterprise intrusions. It gave me the practical edge needed to pass the technical interview at DBS.",
    "avatar": "https://images.unsplash.com/photo-1534528760840?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV137",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Priya Narayanan",
    "author_role": "Senior Business Analyst at Standard Chartered",
    "category": "Business Analytics",
    "course_name": "Business Analytics Professional Course 12",
    "review_date": "7 Aug 2026",
    "verified_student": true,
    "detailed_comment": "High-yield curriculum focused on predictive forecasting and financial KPIs. The trainer bridged technical dashboards directly to board-level decision making.",
    "avatar": "https://images.unsplash.com/photo-1534528768759?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV138",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Lucas Wong",
    "author_role": "Junior College Year 2 Student (Raffles Institution)",
    "category": "A-Level Preparation",
    "course_name": "A-Level Preparation Professional Course 3",
    "review_date": "4 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Clarissa’s General Paper argumentation drills and H2 essays changed how I approach essay construction. Scored distinction in the prelims. Highly recommend to any JC student aiming for top university offers.",
    "avatar": "https://images.unsplash.com/photo-1534528776678?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV139",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Marcus Fong",
    "author_role": "Software Engineer at Sea Group",
    "category": "Python Programming",
    "course_name": "Python Programming Professional Course 5",
    "review_date": "1 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Trainer David is an absolute machine when it comes to Python internals, concurrency, and FastAPI. The code reviews were as rigorous as production pull requests at top tech companies.",
    "avatar": "https://images.unsplash.com/photo-1534528784597?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV140",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Benjamin Neo",
    "author_role": "BI Developer at SingHealth",
    "category": "Power BI",
    "course_name": "Power BI Professional Course 19",
    "review_date": "29 Jul 2026",
    "verified_student": true,
    "detailed_comment": "Mastered DAX time intelligence and complex tabular modeling. We even connected our capstones to live healthcare mockup data. Absolutely worth every dollar!",
    "avatar": "https://images.unsplash.com/photo-1534528742516?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV141",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Tan Wei Jie",
    "author_role": "Data Analyst at Grab Singapore",
    "category": "Data Analytics",
    "course_name": "Data Analytics Professional Course 6",
    "review_date": "26 Jul 2026",
    "verified_student": true,
    "detailed_comment": "The curriculum was deeply practical. We worked with real Singapore public dataset pipelines and SQL databases. Within 2 months of graduation, I successfully transitioned from operations to full-time data analytics with a 35% pay increment!",
    "avatar": "https://images.unsplash.com/photo-1534528750435?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV142",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Cheryl Lim",
    "author_role": "Parent of Sec 4 Student (CHIJ St. Nicholas)",
    "category": "O-Level Preparation",
    "course_name": "O-Level Preparation Professional Course 2",
    "review_date": "23 Jul 2026",
    "verified_student": true,
    "detailed_comment": "My daughter struggled with A-Math and was hovering at C6. Trainer Marcus made the heuristics so clear and approachable. In her preliminary exams, she scored A1! Truly grateful for the personalized feedback and dedicated after-class support.",
    "avatar": "https://images.unsplash.com/photo-1534528758354?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV143",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Ahmad Farhan",
    "author_role": "Cloud Engineer at Singtel",
    "category": "Cloud Computing",
    "course_name": "Cloud Computing Professional Course 10",
    "review_date": "20 Jul 2026",
    "verified_student": true,
    "detailed_comment": "Trainer Kelvin’s real-world insights from enterprise migrations made all the difference. Passed my AWS Solutions Architect exam on the first try. The modern labs at Jurong East campus are world-class.",
    "avatar": "https://images.unsplash.com/photo-1534528766273?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV144",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Grace Teo",
    "author_role": "Marketing Lead at Shopee",
    "category": "Digital Marketing",
    "course_name": "Digital Marketing Professional Course 11",
    "review_date": "17 Jul 2026",
    "verified_student": true,
    "detailed_comment": "Unlike typical surface-level courses, this course dove deep into programmatic bidding, attribution modeling, and GA4 data structures. SkillsFuture subsidy covered over half the fee!",
    "avatar": "https://images.unsplash.com/photo-1534528774192?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV145",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Mdm. Koh Siew Lan",
    "author_role": "Parent of P6 Student (Tao Nan School)",
    "category": "PSLE Preparation",
    "course_name": "PSLE Preparation Professional Course 1",
    "review_date": "14 Jul 2026",
    "verified_student": true,
    "detailed_comment": "Dr. Lin Chen is simply outstanding. She knows every single nuance of the revised PSLE scoring framework and taught my son systematic answering methods that eliminated careless mistakes.",
    "avatar": "https://images.unsplash.com/photo-1534528782111?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV146",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Kenneth Seah",
    "author_role": "Cyber Security Analyst at DBS Bank",
    "category": "Cyber Security",
    "course_name": "Cyber Security Professional Course 9",
    "review_date": "11 Jul 2026",
    "verified_student": true,
    "detailed_comment": "The hands-on red team and blue team labs at the City campus simulated real enterprise intrusions. It gave me the practical edge needed to pass the technical interview at DBS.",
    "avatar": "https://images.unsplash.com/photo-1534528790030?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV147",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Priya Narayanan",
    "author_role": "Senior Business Analyst at Standard Chartered",
    "category": "Business Analytics",
    "course_name": "Business Analytics Professional Course 12",
    "review_date": "8 Jul 2026",
    "verified_student": true,
    "detailed_comment": "High-yield curriculum focused on predictive forecasting and financial KPIs. The trainer bridged technical dashboards directly to board-level decision making.",
    "avatar": "https://images.unsplash.com/photo-1534528747949?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV148",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Lucas Wong",
    "author_role": "Junior College Year 2 Student (Raffles Institution)",
    "category": "A-Level Preparation",
    "course_name": "A-Level Preparation Professional Course 3",
    "review_date": "5 Jul 2026",
    "verified_student": true,
    "detailed_comment": "Clarissa’s General Paper argumentation drills and H2 essays changed how I approach essay construction. Scored distinction in the prelims. Highly recommend to any JC student aiming for top university offers.",
    "avatar": "https://images.unsplash.com/photo-1534528755868?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV149",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Marcus Fong",
    "author_role": "Software Engineer at Sea Group",
    "category": "Python Programming",
    "course_name": "Python Programming Professional Course 5",
    "review_date": "2 Jul 2026",
    "verified_student": true,
    "detailed_comment": "Trainer David is an absolute machine when it comes to Python internals, concurrency, and FastAPI. The code reviews were as rigorous as production pull requests at top tech companies.",
    "avatar": "https://images.unsplash.com/photo-1534528763787?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV150",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Benjamin Neo",
    "author_role": "BI Developer at SingHealth",
    "category": "Power BI",
    "course_name": "Power BI Professional Course 19",
    "review_date": "29 Jun 2026",
    "verified_student": true,
    "detailed_comment": "Mastered DAX time intelligence and complex tabular modeling. We even connected our capstones to live healthcare mockup data. Absolutely worth every dollar!",
    "avatar": "https://images.unsplash.com/photo-1534528771706?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV151",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Tan Wei Jie",
    "author_role": "Data Analyst at Grab Singapore",
    "category": "Data Analytics",
    "course_name": "Data Analytics Professional Course 6",
    "review_date": "26 Jun 2026",
    "verified_student": true,
    "detailed_comment": "The curriculum was deeply practical. We worked with real Singapore public dataset pipelines and SQL databases. Within 2 months of graduation, I successfully transitioned from operations to full-time data analytics with a 35% pay increment!",
    "avatar": "https://images.unsplash.com/photo-1534528779625?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV152",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Cheryl Lim",
    "author_role": "Parent of Sec 4 Student (CHIJ St. Nicholas)",
    "category": "O-Level Preparation",
    "course_name": "O-Level Preparation Professional Course 2",
    "review_date": "23 Jun 2026",
    "verified_student": true,
    "detailed_comment": "My daughter struggled with A-Math and was hovering at C6. Trainer Marcus made the heuristics so clear and approachable. In her preliminary exams, she scored A1! Truly grateful for the personalized feedback and dedicated after-class support.",
    "avatar": "https://images.unsplash.com/photo-1534528787544?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV153",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Ahmad Farhan",
    "author_role": "Cloud Engineer at Singtel",
    "category": "Cloud Computing",
    "course_name": "Cloud Computing Professional Course 10",
    "review_date": "20 Jun 2026",
    "verified_student": true,
    "detailed_comment": "Trainer Kelvin’s real-world insights from enterprise migrations made all the difference. Passed my AWS Solutions Architect exam on the first try. The modern labs at Jurong East campus are world-class.",
    "avatar": "https://images.unsplash.com/photo-1534528745463?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV154",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Grace Teo",
    "author_role": "Marketing Lead at Shopee",
    "category": "Digital Marketing",
    "course_name": "Digital Marketing Professional Course 11",
    "review_date": "17 Jun 2026",
    "verified_student": true,
    "detailed_comment": "Unlike typical surface-level courses, this course dove deep into programmatic bidding, attribution modeling, and GA4 data structures. SkillsFuture subsidy covered over half the fee!",
    "avatar": "https://images.unsplash.com/photo-1534528753382?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV155",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Mdm. Koh Siew Lan",
    "author_role": "Parent of P6 Student (Tao Nan School)",
    "category": "PSLE Preparation",
    "course_name": "PSLE Preparation Professional Course 1",
    "review_date": "14 Jun 2026",
    "verified_student": true,
    "detailed_comment": "Dr. Lin Chen is simply outstanding. She knows every single nuance of the revised PSLE scoring framework and taught my son systematic answering methods that eliminated careless mistakes.",
    "avatar": "https://images.unsplash.com/photo-1534528761301?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV156",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Kenneth Seah",
    "author_role": "Cyber Security Analyst at DBS Bank",
    "category": "Cyber Security",
    "course_name": "Cyber Security Professional Course 9",
    "review_date": "11 Jun 2026",
    "verified_student": true,
    "detailed_comment": "The hands-on red team and blue team labs at the City campus simulated real enterprise intrusions. It gave me the practical edge needed to pass the technical interview at DBS.",
    "avatar": "https://images.unsplash.com/photo-1534528769220?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV157",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Priya Narayanan",
    "author_role": "Senior Business Analyst at Standard Chartered",
    "category": "Business Analytics",
    "course_name": "Business Analytics Professional Course 12",
    "review_date": "8 Jun 2026",
    "verified_student": true,
    "detailed_comment": "High-yield curriculum focused on predictive forecasting and financial KPIs. The trainer bridged technical dashboards directly to board-level decision making.",
    "avatar": "https://images.unsplash.com/photo-1534528777139?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV158",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Lucas Wong",
    "author_role": "Junior College Year 2 Student (Raffles Institution)",
    "category": "A-Level Preparation",
    "course_name": "A-Level Preparation Professional Course 3",
    "review_date": "5 Jun 2026",
    "verified_student": true,
    "detailed_comment": "Clarissa’s General Paper argumentation drills and H2 essays changed how I approach essay construction. Scored distinction in the prelims. Highly recommend to any JC student aiming for top university offers.",
    "avatar": "https://images.unsplash.com/photo-1534528785058?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV159",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Marcus Fong",
    "author_role": "Software Engineer at Sea Group",
    "category": "Python Programming",
    "course_name": "Python Programming Professional Course 5",
    "review_date": "2 Jun 2026",
    "verified_student": true,
    "detailed_comment": "Trainer David is an absolute machine when it comes to Python internals, concurrency, and FastAPI. The code reviews were as rigorous as production pull requests at top tech companies.",
    "avatar": "https://images.unsplash.com/photo-1534528742977?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV160",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Benjamin Neo",
    "author_role": "BI Developer at SingHealth",
    "category": "Power BI",
    "course_name": "Power BI Professional Course 19",
    "review_date": "30 May 2026",
    "verified_student": true,
    "detailed_comment": "Mastered DAX time intelligence and complex tabular modeling. We even connected our capstones to live healthcare mockup data. Absolutely worth every dollar!",
    "avatar": "https://images.unsplash.com/photo-1534528750896?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV161",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Tan Wei Jie",
    "author_role": "Data Analyst at Grab Singapore",
    "category": "Data Analytics",
    "course_name": "Data Analytics Professional Course 6",
    "review_date": "27 May 2026",
    "verified_student": true,
    "detailed_comment": "The curriculum was deeply practical. We worked with real Singapore public dataset pipelines and SQL databases. Within 2 months of graduation, I successfully transitioned from operations to full-time data analytics with a 35% pay increment!",
    "avatar": "https://images.unsplash.com/photo-1534528758815?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV162",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Cheryl Lim",
    "author_role": "Parent of Sec 4 Student (CHIJ St. Nicholas)",
    "category": "O-Level Preparation",
    "course_name": "O-Level Preparation Professional Course 2",
    "review_date": "24 May 2026",
    "verified_student": true,
    "detailed_comment": "My daughter struggled with A-Math and was hovering at C6. Trainer Marcus made the heuristics so clear and approachable. In her preliminary exams, she scored A1! Truly grateful for the personalized feedback and dedicated after-class support.",
    "avatar": "https://images.unsplash.com/photo-1534528766734?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV163",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Ahmad Farhan",
    "author_role": "Cloud Engineer at Singtel",
    "category": "Cloud Computing",
    "course_name": "Cloud Computing Professional Course 10",
    "review_date": "21 May 2026",
    "verified_student": true,
    "detailed_comment": "Trainer Kelvin’s real-world insights from enterprise migrations made all the difference. Passed my AWS Solutions Architect exam on the first try. The modern labs at Jurong East campus are world-class.",
    "avatar": "https://images.unsplash.com/photo-1534528774653?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV164",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Grace Teo",
    "author_role": "Marketing Lead at Shopee",
    "category": "Digital Marketing",
    "course_name": "Digital Marketing Professional Course 11",
    "review_date": "18 May 2026",
    "verified_student": true,
    "detailed_comment": "Unlike typical surface-level courses, this course dove deep into programmatic bidding, attribution modeling, and GA4 data structures. SkillsFuture subsidy covered over half the fee!",
    "avatar": "https://images.unsplash.com/photo-1534528782572?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV165",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Mdm. Koh Siew Lan",
    "author_role": "Parent of P6 Student (Tao Nan School)",
    "category": "PSLE Preparation",
    "course_name": "PSLE Preparation Professional Course 1",
    "review_date": "15 May 2026",
    "verified_student": true,
    "detailed_comment": "Dr. Lin Chen is simply outstanding. She knows every single nuance of the revised PSLE scoring framework and taught my son systematic answering methods that eliminated careless mistakes.",
    "avatar": "https://images.unsplash.com/photo-1534528790491?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV166",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Kenneth Seah",
    "author_role": "Cyber Security Analyst at DBS Bank",
    "category": "Cyber Security",
    "course_name": "Cyber Security Professional Course 9",
    "review_date": "12 May 2026",
    "verified_student": true,
    "detailed_comment": "The hands-on red team and blue team labs at the City campus simulated real enterprise intrusions. It gave me the practical edge needed to pass the technical interview at DBS.",
    "avatar": "https://images.unsplash.com/photo-1534528748410?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV167",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Priya Narayanan",
    "author_role": "Senior Business Analyst at Standard Chartered",
    "category": "Business Analytics",
    "course_name": "Business Analytics Professional Course 12",
    "review_date": "9 May 2026",
    "verified_student": true,
    "detailed_comment": "High-yield curriculum focused on predictive forecasting and financial KPIs. The trainer bridged technical dashboards directly to board-level decision making.",
    "avatar": "https://images.unsplash.com/photo-1534528756329?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV168",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Lucas Wong",
    "author_role": "Junior College Year 2 Student (Raffles Institution)",
    "category": "A-Level Preparation",
    "course_name": "A-Level Preparation Professional Course 3",
    "review_date": "6 May 2026",
    "verified_student": true,
    "detailed_comment": "Clarissa’s General Paper argumentation drills and H2 essays changed how I approach essay construction. Scored distinction in the prelims. Highly recommend to any JC student aiming for top university offers.",
    "avatar": "https://images.unsplash.com/photo-1534528764248?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV169",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Marcus Fong",
    "author_role": "Software Engineer at Sea Group",
    "category": "Python Programming",
    "course_name": "Python Programming Professional Course 5",
    "review_date": "3 May 2026",
    "verified_student": true,
    "detailed_comment": "Trainer David is an absolute machine when it comes to Python internals, concurrency, and FastAPI. The code reviews were as rigorous as production pull requests at top tech companies.",
    "avatar": "https://images.unsplash.com/photo-1534528772167?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV170",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Benjamin Neo",
    "author_role": "BI Developer at SingHealth",
    "category": "Power BI",
    "course_name": "Power BI Professional Course 19",
    "review_date": "30 Apr 2026",
    "verified_student": true,
    "detailed_comment": "Mastered DAX time intelligence and complex tabular modeling. We even connected our capstones to live healthcare mockup data. Absolutely worth every dollar!",
    "avatar": "https://images.unsplash.com/photo-1534528780086?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV171",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Tan Wei Jie",
    "author_role": "Data Analyst at Grab Singapore",
    "category": "Data Analytics",
    "course_name": "Data Analytics Professional Course 6",
    "review_date": "27 Apr 2026",
    "verified_student": true,
    "detailed_comment": "The curriculum was deeply practical. We worked with real Singapore public dataset pipelines and SQL databases. Within 2 months of graduation, I successfully transitioned from operations to full-time data analytics with a 35% pay increment!",
    "avatar": "https://images.unsplash.com/photo-1534528788005?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV172",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Cheryl Lim",
    "author_role": "Parent of Sec 4 Student (CHIJ St. Nicholas)",
    "category": "O-Level Preparation",
    "course_name": "O-Level Preparation Professional Course 2",
    "review_date": "24 Apr 2026",
    "verified_student": true,
    "detailed_comment": "My daughter struggled with A-Math and was hovering at C6. Trainer Marcus made the heuristics so clear and approachable. In her preliminary exams, she scored A1! Truly grateful for the personalized feedback and dedicated after-class support.",
    "avatar": "https://images.unsplash.com/photo-1534528745924?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV173",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Ahmad Farhan",
    "author_role": "Cloud Engineer at Singtel",
    "category": "Cloud Computing",
    "course_name": "Cloud Computing Professional Course 10",
    "review_date": "21 Apr 2026",
    "verified_student": true,
    "detailed_comment": "Trainer Kelvin’s real-world insights from enterprise migrations made all the difference. Passed my AWS Solutions Architect exam on the first try. The modern labs at Jurong East campus are world-class.",
    "avatar": "https://images.unsplash.com/photo-1534528753843?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV174",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Grace Teo",
    "author_role": "Marketing Lead at Shopee",
    "category": "Digital Marketing",
    "course_name": "Digital Marketing Professional Course 11",
    "review_date": "18 Apr 2026",
    "verified_student": true,
    "detailed_comment": "Unlike typical surface-level courses, this course dove deep into programmatic bidding, attribution modeling, and GA4 data structures. SkillsFuture subsidy covered over half the fee!",
    "avatar": "https://images.unsplash.com/photo-1534528761762?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV175",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Mdm. Koh Siew Lan",
    "author_role": "Parent of P6 Student (Tao Nan School)",
    "category": "PSLE Preparation",
    "course_name": "PSLE Preparation Professional Course 1",
    "review_date": "15 Apr 2026",
    "verified_student": true,
    "detailed_comment": "Dr. Lin Chen is simply outstanding. She knows every single nuance of the revised PSLE scoring framework and taught my son systematic answering methods that eliminated careless mistakes.",
    "avatar": "https://images.unsplash.com/photo-1534528769681?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV176",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Kenneth Seah",
    "author_role": "Cyber Security Analyst at DBS Bank",
    "category": "Cyber Security",
    "course_name": "Cyber Security Professional Course 9",
    "review_date": "12 Apr 2026",
    "verified_student": true,
    "detailed_comment": "The hands-on red team and blue team labs at the City campus simulated real enterprise intrusions. It gave me the practical edge needed to pass the technical interview at DBS.",
    "avatar": "https://images.unsplash.com/photo-1534528777600?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV177",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Priya Narayanan",
    "author_role": "Senior Business Analyst at Standard Chartered",
    "category": "Business Analytics",
    "course_name": "Business Analytics Professional Course 12",
    "review_date": "9 Apr 2026",
    "verified_student": true,
    "detailed_comment": "High-yield curriculum focused on predictive forecasting and financial KPIs. The trainer bridged technical dashboards directly to board-level decision making.",
    "avatar": "https://images.unsplash.com/photo-1534528785519?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV178",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Lucas Wong",
    "author_role": "Junior College Year 2 Student (Raffles Institution)",
    "category": "A-Level Preparation",
    "course_name": "A-Level Preparation Professional Course 3",
    "review_date": "6 Apr 2026",
    "verified_student": true,
    "detailed_comment": "Clarissa’s General Paper argumentation drills and H2 essays changed how I approach essay construction. Scored distinction in the prelims. Highly recommend to any JC student aiming for top university offers.",
    "avatar": "https://images.unsplash.com/photo-1534528743438?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV179",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Marcus Fong",
    "author_role": "Software Engineer at Sea Group",
    "category": "Python Programming",
    "course_name": "Python Programming Professional Course 5",
    "review_date": "3 Apr 2026",
    "verified_student": true,
    "detailed_comment": "Trainer David is an absolute machine when it comes to Python internals, concurrency, and FastAPI. The code reviews were as rigorous as production pull requests at top tech companies.",
    "avatar": "https://images.unsplash.com/photo-1534528751357?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV180",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Benjamin Neo",
    "author_role": "BI Developer at SingHealth",
    "category": "Power BI",
    "course_name": "Power BI Professional Course 19",
    "review_date": "31 Mar 2026",
    "verified_student": true,
    "detailed_comment": "Mastered DAX time intelligence and complex tabular modeling. We even connected our capstones to live healthcare mockup data. Absolutely worth every dollar!",
    "avatar": "https://images.unsplash.com/photo-1534528759276?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV181",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Tan Wei Jie",
    "author_role": "Data Analyst at Grab Singapore",
    "category": "Data Analytics",
    "course_name": "Data Analytics Professional Course 6",
    "review_date": "24 Sept 2026",
    "verified_student": true,
    "detailed_comment": "The curriculum was deeply practical. We worked with real Singapore public dataset pipelines and SQL databases. Within 2 months of graduation, I successfully transitioned from operations to full-time data analytics with a 35% pay increment!",
    "avatar": "https://images.unsplash.com/photo-1534528767195?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV182",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Cheryl Lim",
    "author_role": "Parent of Sec 4 Student (CHIJ St. Nicholas)",
    "category": "O-Level Preparation",
    "course_name": "O-Level Preparation Professional Course 2",
    "review_date": "21 Sept 2026",
    "verified_student": true,
    "detailed_comment": "My daughter struggled with A-Math and was hovering at C6. Trainer Marcus made the heuristics so clear and approachable. In her preliminary exams, she scored A1! Truly grateful for the personalized feedback and dedicated after-class support.",
    "avatar": "https://images.unsplash.com/photo-1534528775114?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV183",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Ahmad Farhan",
    "author_role": "Cloud Engineer at Singtel",
    "category": "Cloud Computing",
    "course_name": "Cloud Computing Professional Course 10",
    "review_date": "18 Sept 2026",
    "verified_student": true,
    "detailed_comment": "Trainer Kelvin’s real-world insights from enterprise migrations made all the difference. Passed my AWS Solutions Architect exam on the first try. The modern labs at Jurong East campus are world-class.",
    "avatar": "https://images.unsplash.com/photo-1534528783033?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV184",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Grace Teo",
    "author_role": "Marketing Lead at Shopee",
    "category": "Digital Marketing",
    "course_name": "Digital Marketing Professional Course 11",
    "review_date": "15 Sept 2026",
    "verified_student": true,
    "detailed_comment": "Unlike typical surface-level courses, this course dove deep into programmatic bidding, attribution modeling, and GA4 data structures. SkillsFuture subsidy covered over half the fee!",
    "avatar": "https://images.unsplash.com/photo-1534528790952?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV185",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Mdm. Koh Siew Lan",
    "author_role": "Parent of P6 Student (Tao Nan School)",
    "category": "PSLE Preparation",
    "course_name": "PSLE Preparation Professional Course 1",
    "review_date": "12 Sept 2026",
    "verified_student": true,
    "detailed_comment": "Dr. Lin Chen is simply outstanding. She knows every single nuance of the revised PSLE scoring framework and taught my son systematic answering methods that eliminated careless mistakes.",
    "avatar": "https://images.unsplash.com/photo-1534528748871?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV186",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Kenneth Seah",
    "author_role": "Cyber Security Analyst at DBS Bank",
    "category": "Cyber Security",
    "course_name": "Cyber Security Professional Course 9",
    "review_date": "9 Sept 2026",
    "verified_student": true,
    "detailed_comment": "The hands-on red team and blue team labs at the City campus simulated real enterprise intrusions. It gave me the practical edge needed to pass the technical interview at DBS.",
    "avatar": "https://images.unsplash.com/photo-1534528756790?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV187",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Priya Narayanan",
    "author_role": "Senior Business Analyst at Standard Chartered",
    "category": "Business Analytics",
    "course_name": "Business Analytics Professional Course 12",
    "review_date": "6 Sept 2026",
    "verified_student": true,
    "detailed_comment": "High-yield curriculum focused on predictive forecasting and financial KPIs. The trainer bridged technical dashboards directly to board-level decision making.",
    "avatar": "https://images.unsplash.com/photo-1534528764709?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV188",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Lucas Wong",
    "author_role": "Junior College Year 2 Student (Raffles Institution)",
    "category": "A-Level Preparation",
    "course_name": "A-Level Preparation Professional Course 3",
    "review_date": "3 Sept 2026",
    "verified_student": true,
    "detailed_comment": "Clarissa’s General Paper argumentation drills and H2 essays changed how I approach essay construction. Scored distinction in the prelims. Highly recommend to any JC student aiming for top university offers.",
    "avatar": "https://images.unsplash.com/photo-1534528772628?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV189",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Marcus Fong",
    "author_role": "Software Engineer at Sea Group",
    "category": "Python Programming",
    "course_name": "Python Programming Professional Course 5",
    "review_date": "31 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Trainer David is an absolute machine when it comes to Python internals, concurrency, and FastAPI. The code reviews were as rigorous as production pull requests at top tech companies.",
    "avatar": "https://images.unsplash.com/photo-1534528780547?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV190",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Benjamin Neo",
    "author_role": "BI Developer at SingHealth",
    "category": "Power BI",
    "course_name": "Power BI Professional Course 19",
    "review_date": "28 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Mastered DAX time intelligence and complex tabular modeling. We even connected our capstones to live healthcare mockup data. Absolutely worth every dollar!",
    "avatar": "https://images.unsplash.com/photo-1534528788466?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV191",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Tan Wei Jie",
    "author_role": "Data Analyst at Grab Singapore",
    "category": "Data Analytics",
    "course_name": "Data Analytics Professional Course 6",
    "review_date": "25 Aug 2026",
    "verified_student": true,
    "detailed_comment": "The curriculum was deeply practical. We worked with real Singapore public dataset pipelines and SQL databases. Within 2 months of graduation, I successfully transitioned from operations to full-time data analytics with a 35% pay increment!",
    "avatar": "https://images.unsplash.com/photo-1534528746385?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV192",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Cheryl Lim",
    "author_role": "Parent of Sec 4 Student (CHIJ St. Nicholas)",
    "category": "O-Level Preparation",
    "course_name": "O-Level Preparation Professional Course 2",
    "review_date": "22 Aug 2026",
    "verified_student": true,
    "detailed_comment": "My daughter struggled with A-Math and was hovering at C6. Trainer Marcus made the heuristics so clear and approachable. In her preliminary exams, she scored A1! Truly grateful for the personalized feedback and dedicated after-class support.",
    "avatar": "https://images.unsplash.com/photo-1534528754304?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV193",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Ahmad Farhan",
    "author_role": "Cloud Engineer at Singtel",
    "category": "Cloud Computing",
    "course_name": "Cloud Computing Professional Course 10",
    "review_date": "19 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Trainer Kelvin’s real-world insights from enterprise migrations made all the difference. Passed my AWS Solutions Architect exam on the first try. The modern labs at Jurong East campus are world-class.",
    "avatar": "https://images.unsplash.com/photo-1534528762223?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV194",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Grace Teo",
    "author_role": "Marketing Lead at Shopee",
    "category": "Digital Marketing",
    "course_name": "Digital Marketing Professional Course 11",
    "review_date": "16 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Unlike typical surface-level courses, this course dove deep into programmatic bidding, attribution modeling, and GA4 data structures. SkillsFuture subsidy covered over half the fee!",
    "avatar": "https://images.unsplash.com/photo-1534528770142?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV195",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Mdm. Koh Siew Lan",
    "author_role": "Parent of P6 Student (Tao Nan School)",
    "category": "PSLE Preparation",
    "course_name": "PSLE Preparation Professional Course 1",
    "review_date": "13 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Dr. Lin Chen is simply outstanding. She knows every single nuance of the revised PSLE scoring framework and taught my son systematic answering methods that eliminated careless mistakes.",
    "avatar": "https://images.unsplash.com/photo-1534528778061?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV196",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Kenneth Seah",
    "author_role": "Cyber Security Analyst at DBS Bank",
    "category": "Cyber Security",
    "course_name": "Cyber Security Professional Course 9",
    "review_date": "10 Aug 2026",
    "verified_student": true,
    "detailed_comment": "The hands-on red team and blue team labs at the City campus simulated real enterprise intrusions. It gave me the practical edge needed to pass the technical interview at DBS.",
    "avatar": "https://images.unsplash.com/photo-1534528785980?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV197",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Priya Narayanan",
    "author_role": "Senior Business Analyst at Standard Chartered",
    "category": "Business Analytics",
    "course_name": "Business Analytics Professional Course 12",
    "review_date": "7 Aug 2026",
    "verified_student": true,
    "detailed_comment": "High-yield curriculum focused on predictive forecasting and financial KPIs. The trainer bridged technical dashboards directly to board-level decision making.",
    "avatar": "https://images.unsplash.com/photo-1534528743899?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV198",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Lucas Wong",
    "author_role": "Junior College Year 2 Student (Raffles Institution)",
    "category": "A-Level Preparation",
    "course_name": "A-Level Preparation Professional Course 3",
    "review_date": "4 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Clarissa’s General Paper argumentation drills and H2 essays changed how I approach essay construction. Scored distinction in the prelims. Highly recommend to any JC student aiming for top university offers.",
    "avatar": "https://images.unsplash.com/photo-1534528751818?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV199",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Marcus Fong",
    "author_role": "Software Engineer at Sea Group",
    "category": "Python Programming",
    "course_name": "Python Programming Professional Course 5",
    "review_date": "1 Aug 2026",
    "verified_student": true,
    "detailed_comment": "Trainer David is an absolute machine when it comes to Python internals, concurrency, and FastAPI. The code reviews were as rigorous as production pull requests at top tech companies.",
    "avatar": "https://images.unsplash.com/photo-1534528759737?auto=format&fit=crop&w=150&q=80"
  },
  {
    "review_id": "RV200",
    "rating": 5,
    "comment": "Excellent learning experience",
    "author_name": "Benjamin Neo",
    "author_role": "BI Developer at SingHealth",
    "category": "Power BI",
    "course_name": "Power BI Professional Course 19",
    "review_date": "29 Jul 2026",
    "verified_student": true,
    "detailed_comment": "Mastered DAX time intelligence and complex tabular modeling. We even connected our capstones to live healthcare mockup data. Absolutely worth every dollar!",
    "avatar": "https://images.unsplash.com/photo-1534528767656?auto=format&fit=crop&w=150&q=80"
  }
];
export const analytics = {
  "studentsByCategory": {
    "Data Analytics": 1385,
    "Artificial Intelligence": 1470,
    "Machine Learning": 1555,
    "Cyber Security": 1260,
    "Cloud Computing": 1345,
    "Python Programming": 1680,
    "Digital Marketing": 1050,
    "Business Analytics": 1135,
    "Coding & Robotics": 1595,
    "IELTS Preparation": 0,
    "PSLE Preparation": 1720,
    "O-Level Preparation": 1805,
    "A-Level Preparation": 1890,
    "English": 1220,
    "Mathematics": 1305,
    "Science": 1390,
    "Chinese": 1475,
    "IB Programme": 1560,
    "IGCSE Programme": 1645,
    "Power BI": 1730,
    "Software Testing": 1815
  },
  "coursePopularity": [
    {
      "course_id": "CR068",
      "course_name": "Machine Learning Professional Course 68",
      "category": "Machine Learning",
      "enrolled": 499,
      "fee_sgd": 2020,
      "format": "Weekend"
    },
    {
      "course_id": "CR023",
      "course_name": "A-Level Preparation Professional Course 23",
      "category": "A-Level Preparation",
      "enrolled": 494,
      "fee_sgd": 1345,
      "format": "Weekend"
    },
    {
      "course_id": "CR090",
      "course_name": "Cloud Computing Professional Course 90",
      "category": "Cloud Computing",
      "enrolled": 493,
      "fee_sgd": 2350,
      "format": "Online"
    },
    {
      "course_id": "CR045",
      "course_name": "Python Programming Professional Course 45",
      "category": "Python Programming",
      "enrolled": 488,
      "fee_sgd": 1675,
      "format": "Online"
    },
    {
      "course_id": "CR067",
      "course_name": "Artificial Intelligence Professional Course 67",
      "category": "Artificial Intelligence",
      "enrolled": 482,
      "fee_sgd": 2005,
      "format": "Hybrid"
    },
    {
      "course_id": "CR022",
      "course_name": "O-Level Preparation Professional Course 22",
      "category": "O-Level Preparation",
      "enrolled": 477,
      "fee_sgd": 1330,
      "format": "Hybrid"
    },
    {
      "course_id": "CR089",
      "course_name": "Cyber Security Professional Course 89",
      "category": "Cyber Security",
      "enrolled": 476,
      "fee_sgd": 2335,
      "format": "Evening"
    },
    {
      "course_id": "CR044",
      "course_name": "Coding & Robotics Professional Course 44",
      "category": "Coding & Robotics",
      "enrolled": 471,
      "fee_sgd": 1660,
      "format": "Evening"
    },
    {
      "course_id": "CR066",
      "course_name": "Data Analytics Professional Course 66",
      "category": "Data Analytics",
      "enrolled": 465,
      "fee_sgd": 1990,
      "format": "On-Campus"
    },
    {
      "course_id": "CR021",
      "course_name": "PSLE Preparation Professional Course 21",
      "category": "PSLE Preparation",
      "enrolled": 460,
      "fee_sgd": 1315,
      "format": "On-Campus"
    }
  ],
  "admissionsByMonth": [
    {
      "month": "Oct 2025",
      "count": 185,
      "revenue_sgd": 215000
    },
    {
      "month": "Nov 2025",
      "count": 210,
      "revenue_sgd": 248000
    },
    {
      "month": "Dec 2025",
      "count": 290,
      "revenue_sgd": 342000
    },
    {
      "month": "Jan 2026",
      "count": 340,
      "revenue_sgd": 412000
    },
    {
      "month": "Feb 2026",
      "count": 260,
      "revenue_sgd": 310000
    },
    {
      "month": "Mar 2026",
      "count": 315,
      "revenue_sgd": 382000
    },
    {
      "month": "Apr 2026",
      "count": 330,
      "revenue_sgd": 399000
    },
    {
      "month": "May 2026",
      "count": 350,
      "revenue_sgd": 425000
    },
    {
      "month": "Jun 2026",
      "count": 395,
      "revenue_sgd": 485000
    },
    {
      "month": "Jul 2026",
      "count": 375,
      "revenue_sgd": 456000
    },
    {
      "month": "Aug 2026",
      "count": 410,
      "revenue_sgd": 512000
    },
    {
      "month": "Sep 2026",
      "count": 435,
      "revenue_sgd": 541000
    }
  ],
  "trainerRatings": [
    {
      "name": "Dr. Lin Chen",
      "specialization": "PSLE Preparation",
      "rating": 4.85,
      "students": 350
    },
    {
      "name": "Marcus Goh",
      "specialization": "O-Level Preparation",
      "rating": 4.86,
      "students": 397
    },
    {
      "name": "Clarissa Wong",
      "specialization": "A-Level Preparation",
      "rating": 4.87,
      "students": 444
    },
    {
      "name": "Adrian Lim",
      "specialization": "Coding & Robotics",
      "rating": 4.88,
      "students": 491
    },
    {
      "name": "David Zhang",
      "specialization": "Python Programming",
      "rating": 4.89,
      "students": 538
    },
    {
      "name": "Dr. Valerie Koh",
      "specialization": "Data Analytics",
      "rating": 4.9,
      "students": 585
    },
    {
      "name": "Rajesh Nair",
      "specialization": "Artificial Intelligence",
      "rating": 4.91,
      "students": 632
    },
    {
      "name": "Prof. Kenneth Lee",
      "specialization": "Machine Learning",
      "rating": 4.92,
      "students": 679
    },
    {
      "name": "Bernard Tan",
      "specialization": "Cyber Security",
      "rating": 4.93,
      "students": 726
    },
    {
      "name": "Kelvin Ho",
      "specialization": "Cloud Computing",
      "rating": 4.94,
      "students": 773
    }
  ],
  "completionRatesByFormat": {
    "On-Campus": 96.4,
    "Hybrid": 94.8,
    "Online": 91.2,
    "Weekend": 95.5,
    "Evening": 93.8
  },
  "learningFormatDistribution": {
    "On-Campus": 32,
    "Hybrid": 28,
    "Online": 20,
    "Weekend": 12,
    "Evening": 8
  }
};

export function getCourseById(id: string): Course | undefined {
  return courses.find(c => c.course_id === id);
}

export function getTrainerById(id: string): Trainer | undefined {
  return trainers.find(t => t.trainer_id === id);
}

export function getCampusById(id: string): Campus | undefined {
  return campuses.find(c => c.id === id);
}

export function getCertificationById(id: string): Certification | undefined {
  return certifications.find(c => c.certification_id === id);
}
