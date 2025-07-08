'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Embedded translations to avoid hydration issues
const resources = {
  en: {
    landing: {
      // Hero Section
      hero: {
        title: {
          part1: "Your career.",
          part2: "Our task."
        },
        subtitle: "Connect with top talent and innovative companies through real-world challenges and assessments.",
        cta: {
          primary: "Start Your Journey",
          secondary: "for FREE",
          disclaimer: "No credit card required • Join 10,000+ professionals"
        }
      },

      // Problem Section
      problem: {
        badge: "The Challenge",
        title: "Traditional Hiring is Broken",
        subtitle: "Companies struggle to find the right talent, while candidates can't showcase their real skills.",
        points: [
          {
            title: "Generic CV Screening",
            description: "Resumes don't reflect actual capabilities and problem-solving skills"
          },
          {
            title: "Lengthy Interview Processes",
            description: "Months-long hiring cycles waste time for both companies and candidates"
          },
          {
            title: "Skills Mismatch",
            description: "40% of new hires don't meet expectations due to inadequate assessment methods"
          },
          {
            title: "Limited Learning Opportunities",
            description: "Candidates receive little to no feedback to improve their skills"
          }
        ]
      },

      // Solution Section
      solution: {
        badge: "The Solution",
        title: "Real Projects, Real Assessment, Real Growth",
        subtitle: "SkillBridge connects companies with talent through practical challenges that showcase actual abilities.",
        features: [
          {
            title: "Custom Project Generation",
            description: "AI-powered system creates tailored challenges based on your company's specific needs and tech stack"
          },
          {
            title: "Real-time Assessment",
            description: "Evaluate candidates on actual problem-solving, not just theoretical knowledge"
          },
          {
            title: "Comprehensive Feedback",
            description: "Detailed insights help candidates improve while giving companies deep talent analytics"
          }
        ]
      },

      // Benefits for Companies
      companies: {
        badge: "For Companies",
        title: "Find Your Perfect Match",
        subtitle: "Streamline hiring with data-driven assessments and practical project evaluations.",
        benefits: [
          {
            icon: "clock",
            title: "Save 70% Hiring Time",
            description: "Skip lengthy interviews. Assess candidates through real project work in days, not months."
          },
          {
            icon: "target",
            title: "Objective Assessment",
            description: "Remove bias with standardized, practical evaluations that focus on actual skills and problem-solving abilities."
          },
          {
            icon: "trending-up",
            title: "Higher Success Rate",
            description: "95% of companies report better hires when using project-based assessments vs traditional methods."
          },
          {
            icon: "users",
            title: "Build Talent Pipeline",
            description: "Create ongoing relationships with skilled developers through internship and project programs."
          },
          {
            icon: "code",
            title: "Custom Tech Stacks",
            description: "Generate projects in any programming language or framework your team uses."
          },
          {
            icon: "line-chart",
            title: "Deep Analytics",
            description: "Get detailed insights on candidate performance, strengths, and areas for improvement."
          }
        ]
      },

      // Benefits for Students/Candidates
      students: {
        badge: "For Developers",
        title: "Showcase Your Real Skills",
        subtitle: "Move beyond resumes. Prove your abilities through hands-on projects and receive valuable feedback.",
        benefits: [
          {
            icon: "briefcase",
            title: "Real Business Cases",
            description: "Work on actual projects that companies use, building portfolio-worthy experience."
          },
          {
            icon: "graduation-cap",
            title: "Skill Development",
            description: "Learn new technologies and improve existing skills through guided project challenges."
          },
          {
            icon: "message-circle",
            title: "Expert Feedback",
            description: "Receive detailed code reviews and improvement suggestions from industry professionals."
          },
          {
            icon: "network",
            title: "Direct Opportunities",
            description: "Top performers get connected directly with hiring companies for interviews and positions."
          },
          {
            icon: "trophy",
            title: "Build Your Reputation",
            description: "Create a verified skills profile that showcases your actual programming abilities."
          },
          {
            icon: "book-open",
            title: "Continuous Learning",
            description: "Access learning resources and stay updated with industry best practices."
          }
        ]
      },

      // How It Works
      howItWorks: {
        badge: "How It Works",
        title: "Simple Process, Powerful Results",
        subtitle: "From project creation to candidate assessment in just a few steps.",
        steps: [
          {
            step: "01",
            title: "Companies Create Projects",
            description: "Define requirements, tech stack, and difficulty level. Our AI generates custom challenges."
          },
          {
            step: "02", 
            title: "Candidates Apply & Code",
            description: "Developers choose projects matching their skills and submit their solutions."
          },
          {
            step: "03",
            title: "Automated Assessment",
            description: "Our platform evaluates code quality, performance, and problem-solving approach."
          },
          {
            step: "04",
            title: "Detailed Feedback",
            description: "Both parties receive comprehensive reports with actionable insights."
          },
          {
            step: "05",
            title: "Direct Connection",
            description: "Top candidates are introduced to companies for further discussion."
          }
        ]
      },

      // Features
      features: {
        badge: "Platform Features",
        title: "Everything You Need to Succeed",
        subtitle: "Comprehensive tools for modern hiring and skill assessment.",
        list: [
          {
            title: "AI Project Generator",
            description: "Create unlimited custom projects tailored to your specific requirements and tech stack."
          },
          {
            title: "Real-time Collaboration",
            description: "Enable team assessments and collaborative problem-solving challenges."
          },
          {
            title: "Code Quality Analysis",
            description: "Automated evaluation of code structure, performance, and best practices."
          },
          {
            title: "Video Explanations",
            description: "Candidates can record explanation videos to showcase their thought process."
          },
          {
            title: "Skills Verification",
            description: "Blockchain-based certification system for verified skill achievements."
          },
          {
            title: "Integration Ready",
            description: "Connect with your existing HR tools and applicant tracking systems."
          }
        ]
      },

      // Testimonials
      testimonials: {
        badge: "Success Stories",
        title: "Trusted by Industry Leaders",
        subtitle: "See how companies and developers are transforming their hiring and career growth.",
        items: [
          {
            quote: "SkillBridge helped us reduce our hiring time by 65% while improving the quality of our hires significantly.",
            author: "Sarah Chen",
            role: "Head of Engineering",
            company: "TechFlow Solutions"
          },
          {
            quote: "The practical projects gave me confidence in my abilities and landed me my dream job at a startup.",
            author: "Marcus Rodriguez",
            role: "Full Stack Developer",
            company: "Recently hired at StartupXYZ"
          },
          {
            quote: "Finally, a platform that evaluates real skills instead of just interview performance.",
            author: "Dr. Elena Kowalski",
            role: "CTO",
            company: "InnovateLabs"
          }
        ]
      },

      // Pricing
      pricing: {
        badge: "Pricing Plans",
        title: "Choose Your Plan",
        subtitle: "Flexible pricing for companies of all sizes. Start free, scale as you grow.",
        plans: [
          {
            name: "Free",
            price: "0",
            period: "forever",
            description: "Perfect for individual developers and small teams",
            features: [
              "3 projects per month",
              "Basic assessment tools",
              "Community support",
              "Standard feedback reports"
            ],
            cta: "Start Free",
            popular: false
          },
          {
            name: "Professional", 
            price: "49",
            period: "per month",
            description: "Ideal for growing companies and active hiring",
            features: [
              "Unlimited projects",
              "Advanced AI assessment",
              "Priority support",
              "Detailed analytics",
              "Custom branding",
              "API access"
            ],
            cta: "Start 14-day Trial",
            popular: true
          },
          {
            name: "Enterprise",
            price: "Custom",
            period: "contact us",
            description: "For large organizations with specific needs",
            features: [
              "Everything in Professional",
              "Dedicated account manager",
              "Custom integrations",
              "On-premise deployment",
              "24/7 support",
              "Training sessions"
            ],
            cta: "Contact Sales",
            popular: false
          }
        ]
      },

      // FAQ
      faq: {
        badge: "FAQ",
        title: "Frequently Asked Questions",
        subtitle: "Everything you need to know about SkillBridge.",
        items: [
          {
            question: "How does the AI project generator work?",
            answer: "Our AI analyzes your job requirements, tech stack, and difficulty preferences to create unique, relevant coding challenges that mirror real-world scenarios your team faces."
          },
          {
            question: "What programming languages are supported?",
            answer: "We support all major programming languages including JavaScript, Python, Java, C++, Go, Rust, and many more. Our platform is language-agnostic and can generate projects for any tech stack."
          },
          {
            question: "How is candidate performance evaluated?",
            answer: "We use a combination of automated code analysis, manual review by experts, and behavioral assessment to provide comprehensive evaluation covering technical skills, problem-solving approach, and code quality."
          },
          {
            question: "Can candidates resubmit solutions?",
            answer: "Yes, candidates can iterate on their solutions during the submission window. This encourages learning and allows them to incorporate feedback."
          },
          {
            question: "Is there integration with existing HR tools?",
            answer: "Yes, we offer integrations with popular ATS systems like Greenhouse, Lever, and BambooHR, as well as custom API endpoints for enterprise customers."
          },
          {
            question: "What kind of support do you provide?",
            answer: "We offer comprehensive support including documentation, video tutorials, community forums, and direct support based on your plan level."
          }
        ]
      },

      // Final CTA
      finalCta: {
        title: "Ready to Transform Your Hiring?",
        subtitle: "Join thousands of companies and developers who are already using SkillBridge to build better teams.",
        cta: {
          primary: "Get Started Free",
          secondary: "Book a Demo"
        },
        features: [
          "✓ No credit card required",
          "✓ 14-day free trial",
          "✓ Cancel anytime"
        ]
      }
    },
    
    header: {
      headerComponent: {
        betaBanner: {
          skillbridge: "SkillBridge",
          beta: "BETA",
          message: "- Try now completely free!"
        },
        logo: {
          alt: "SkillBridge Logo"
        },
        navigation: {
          projects: "Projects",
          partners: "Companies", 
          about: "About SkillBridge",
          toggleMenu: "Toggle menu"
        },
        language: {
          english: "EN",
          bulgarian: "БГ"
        }
      }
    },

    layout: {
      layoutPage: {
        footer: {
          appName: "SkillBridge",
          copyright: "All rights reserved",
          socialLinks: {
            github: "GitHub",
            linkedin: "LinkedIn", 
            twitter: "Twitter"
          }
        }
      }
    }
  },
  
  bg: {
    landing: {
      // Hero Section
      hero: {
        title: {
          part1: "Вашата кариера.",
          part2: "Нашата задача."
        },
        subtitle: "Свържете се с топ таланти и иновативни компании чрез реални предизвикателства и оценки.",
        cta: {
          primary: "Започнете Пътуването",
          secondary: "БЕЗПЛАТНО",
          disclaimer: "Без кредитна карта • Присъединете се към 10,000+ професионалисти"
        }
      },

      // Problem Section
      problem: {
        badge: "Предизвикателството",
        title: "Традиционното Наемане е Счупено",
        subtitle: "Компаниите се борят да намерят правилния талант, докато кандидатите не могат да покажат истинските си умения.",
        points: [
          {
            title: "Генерично CV Преглеждане",
            description: "Автобиографиите не отразяват действителните способности и уменията за решаване на проблеми"
          },
          {
            title: "Дълги Интервю Процеси",
            description: "Месечни циклове на наемане губят време както за компаниите, така и за кандидатите"
          },
          {
            title: "Несъответствие на Уменията",
            description: "40% от новите служители не отговарят на очакванията поради неадекватни методи за оценка"
          },
          {
            title: "Ограничени Възможности за Учене",
            description: "Кандидатите получават малко или никаква обратна връзка за подобряване на уменията си"
          }
        ]
      },

      // Solution Section
      solution: {
        badge: "Решението",
        title: "Реални Проекти, Реална Оценка, Реален Растеж",
        subtitle: "SkillBridge свързва компаниите с таланти чрез практически предизвикателства, които показват действителните способности.",
        features: [
          {
            title: "Персонализирано Генериране на Проекти",
            description: "AI система създава предизвикателства според специфичните нужди и технологичен стек на вашата компания"
          },
          {
            title: "Оценка в Реално Време",
            description: "Оценявайте кандидатите върху действително решаване на проблеми, а не само теоретични знания"
          },
          {
            title: "Всеобхватна Обратна Връзка",
            description: "Детайлни прозрения помагат на кандидатите да се подобрят, давайки на компаниите дълбока аналитика за таланти"
          }
        ]
      },

      // Benefits for Companies
      companies: {
        badge: "За Компании",
        title: "Намерете Вашето Перфектно Съответствие",
        subtitle: "Оптимизирайте наемането с оценки базирани на данни и практически проектни оценки.",
        benefits: [
          {
            icon: "clock",
            title: "Спестете 70% от Времето за Наемане",
            description: "Прескочете дългите интервюта. Оценявайте кандидатите чрез реална проектна работа за дни, не месеци."
          },
          {
            icon: "target", 
            title: "Обективна Оценка",
            description: "Премахнете предразсъдъците със стандартизирани, практически оценки фокусирани върху действителните умения."
          },
          {
            icon: "trending-up",
            title: "По-висок Процент на Успех",
            description: "95% от компаниите докладват по-добри назначения при използване на проектни оценки срещу традиционни методи."
          },
          {
            icon: "users",
            title: "Изградете Талантлив Поток",
            description: "Създайте продължаващи отношения с квалифицирани разработчици чрез стажантски и проектни програми."
          },
          {
            icon: "code",
            title: "Персонализирани Технологични Стекове",
            description: "Генерирайте проекти на всеки програмен език или framework който вашият екип използва."
          },
          {
            icon: "line-chart",
            title: "Дълбока Аналитика",
            description: "Получете детайлни прозрения за представянето на кандидатите, силните им страни и области за подобрение."
          }
        ]
      },

      // Benefits for Students/Candidates
      students: {
        badge: "За Разработчици",
        title: "Покажете Вашите Истински Умения",
        subtitle: "Излезте отвъд автобиографиите. Докажете способностите си чрез практически проекти и получете ценна обратна връзка.",
        benefits: [
          {
            icon: "briefcase",
            title: "Реални Бизнес Случаи",
            description: "Работете върху действителни проекти които компаниите използват, изграждайки портфолио-достойно опитност."
          },
          {
            icon: "graduation-cap",
            title: "Развитие на Уменията",
            description: "Научете нови технологии и подобрете съществуващите умения чрез ръководени проектни предизвикателства."
          },
          {
            icon: "message-circle",
            title: "Експертна Обратна Връзка",
            description: "Получете детайлни code review-та и предложения за подобрение от индустриални професионалисти."
          },
          {
            icon: "network",
            title: "Директни Възможности",
            description: "Топ изпълнителите се свързват директно с наемащи компании за интервюта и позиции."
          },
          {
            icon: "trophy",
            title: "Изградете Вашата Репутация",
            description: "Създайте верифициран профил на умения който показва действителните ви програмни способности."
          },
          {
            icon: "book-open",
            title: "Непрекъснато Учене",
            description: "Достъп до учебни ресурси и актуализиране с индустриални най-добри практики."
          }
        ]
      },

      // How It Works
      howItWorks: {
        badge: "Как Работи",
        title: "Прост Процес, Мощни Резултати",
        subtitle: "От създаване на проект до оценка на кандидат само в няколко стъпки.",
        steps: [
          {
            step: "01",
            title: "Компаниите Създават Проекти",
            description: "Определете изисквания, технологичен стек и ниво на трудност. Нашият AI генерира персонализирани предизвикателства."
          },
          {
            step: "02",
            title: "Кандидатите Кандидатстват и Кодират",
            description: "Разработчиците избират проекти съответстващи на уменията им и изпращат решенията си."
          },
          {
            step: "03",
            title: "Автоматизирана Оценка",
            description: "Нашата платформа оценява качеството на кода, производителността и подхода за решаване на проблеми."
          },
          {
            step: "04",
            title: "Детайлна Обратна Връзка",
            description: "И двете страни получават всеобхватни доклади с практически прозрения."
          },
          {
            step: "05",
            title: "Директна Връзка",
            description: "Топ кандидатите се представят на компаниите за по-нататъшно обсъждане."
          }
        ]
      },

      // Features
      features: {
        badge: "Функции на Платформата",
        title: "Всичко Необходимо за Успех",
        subtitle: "Всеобхватни инструменти за модерно наемане и оценка на умения.",
        list: [
          {
            title: "AI Генератор на Проекти",
            description: "Създавайте неограничени персонализирани проекти адаптирани към специфичните ви изисквания и технологичен стек."
          },
          {
            title: "Колаборация в Реално Време",
            description: "Позволете екипни оценки и предизвикателства за сътрудничество при решаване на проблеми."
          },
          {
            title: "Анализ на Качеството на Кода",
            description: "Автоматизирана оценка на структурата на кода, производителността и най-добрите практики."
          },
          {
            title: "Видео Обяснения",
            description: "Кандидатите могат да записват обяснителни видеа за да покажат мисловния си процес."
          },
          {
            title: "Верификация на Уменията",
            description: "Blockchain базирана система за сертифициране за верифицирани постижения в уменията."
          },
          {
            title: "Готов за Интеграция",
            description: "Свържете се с вашите съществуващи HR инструменти и системи за проследяване на кандидати."
          }
        ]
      },

      // Testimonials
      testimonials: {
        badge: "Истории за Успех",
        title: "Доверени от Индустриални Лидери",
        subtitle: "Вижте как компаниите и разработчиците трансформират наемането и кариерното си развитие.",
        items: [
          {
            quote: "SkillBridge ни помогна да намалим времето за наемане с 65% като същевременно значително подобрихме качеството на назначенията.",
            author: "Сара Чен",
            role: "Ръководител Инженерство",
            company: "TechFlow Solutions"
          },
          {
            quote: "Практическите проекти ми дадоха увереност в способностите ми и ми донесоха работата на мечтите в стартъп.",
            author: "Маркус Родригес",
            role: "Full Stack Разработчик",
            company: "Наскоро нает в StartupXYZ"
          },
          {
            quote: "Най-накрая, платформа която оценява истински умения вместо само интервю представяне.",
            author: "Д-р Елена Ковалски",
            role: "CTO",
            company: "InnovateLabs"
          }
        ]
      },

      // Pricing
      pricing: {
        badge: "Ценови Планове",
        title: "Изберете Вашия План",
        subtitle: "Гъвкави цени за компании от всякакъв размер. Започнете безплатно, мащабирайте докато растете.",
        plans: [
          {
            name: "Безплатен",
            price: "0",
            period: "завинаги",
            description: "Перфектен за индивидуални разработчици и малки екипи",
            features: [
              "3 проекта месечно",
              "Основни инструменти за оценка",
              "Поддръжка от общността",
              "Стандартни доклади за обратна връзка"
            ],
            cta: "Започнете Безплатно",
            popular: false
          },
          {
            name: "Професионален",
            price: "49",
            period: "месечно",
            description: "Идеален за растящи компании и активно наемане",
            features: [
              "Неограничени проекти",
              "Напреднала AI оценка",
              "Приоритетна поддръжка",
              "Детайлна аналитика",
              "Персонализиран брандинг",
              "API достъп"
            ],
            cta: "Започнете 14-дневен Пробен Период",
            popular: true
          },
          {
            name: "Корпоративен",
            price: "Персонализиран",
            period: "свържете се с нас",
            description: "За големи организации със специфични нужди",
            features: [
              "Всичко в Професионален",
              "Специализиран мениджър сметка",
              "Персонализирани интеграции",
              "Внедряване на място",
              "24/7 поддръжка",
              "Сесии за обучение"
            ],
            cta: "Свържете се с Продажбите",
            popular: false
          }
        ]
      },

      // FAQ
      faq: {
        badge: "ЧЗВ",
        title: "Често Задавани Въпроси",
        subtitle: "Всичко което трябва да знаете за SkillBridge.",
        items: [
          {
            question: "Как работи AI генераторът на проекти?",
            answer: "Нашият AI анализира вашите изисквания за работа, технологичен стек и предпочитания за трудност за да създаде уникални, релевантни кодови предизвикателства които отразяват реални сценарии пред които е изправен вашият екип."
          },
          {
            question: "Кои програмни езици се поддържат?",
            answer: "Поддържаме всички основни програмни езици включително JavaScript, Python, Java, C++, Go, Rust и много други. Нашата платформа е независима от език и може да генерира проекти за всеки технологичен стек."
          },
          {
            question: "Как се оценява представянето на кандидатите?",
            answer: "Използваме комбинация от автоматизиран анализ на код, ръчен преглед от експерти и поведенческа оценка за да предоставим всеобхватна оценка покриваща технически умения, подход за решаване на проблеми и качество на кода."
          },
          {
            question: "Могат ли кандидатите да изпратят отново решенията си?",
            answer: "Да, кандидатите могат да итерират върху решенията си по време на прозореца за изпращане. Това насърчава ученето и им позволява да включат обратна връзка."
          },
          {
            question: "Има ли интеграция със съществуващи HR инструменти?",
            answer: "Да, предлагаме интеграции с популярни ATS системи като Greenhouse, Lever и BambooHR, както и персонализирани API крайни точки за корпоративни клиенти."
          },
          {
            question: "Какъв вид поддръжка предоставяте?",
            answer: "Предлагаме всеобхватна поддръжка其中包括 документация, видео уроци, общностни форуми и директна поддръжка базирана на нивото на вашия план."
          }
        ]
      },

      // Final CTA
      finalCta: {
        title: "Готови да Трансформирате Наемането си?",
        subtitle: "Присъединете се към хилядите компании и разработчици които вече използват SkillBridge за изграждане на по-добри екипи.",
        cta: {
          primary: "Започнете Безплатно",
          secondary: "Резервирайте Демо"
        },
        features: [
          "✓ Без кредитна карта",
          "✓ 14-дневен безплатен пробен период",
          "✓ Отменете по всяко време"
        ]
      }
    },

    header: {
      headerComponent: {
        betaBanner: {
          skillbridge: "SkillBridge",
          beta: "БЕТА",
          message: "- Опитайте сега напълно безплатно!"
        },
        logo: {
          alt: "SkillBridge Лого"
        },
        navigation: {
          projects: "Проекти",
          partners: "Компании",
          about: "За SkillBridge",
          toggleMenu: "Превключи меню"
        },
        language: {
          english: "EN",
          bulgarian: "БГ"
        }
      }
    },

    layout: {
      layoutPage: {
        footer: {
          appName: "SkillBridge",
          copyright: "Всички права запазени",
          socialLinks: {
            github: "GitHub",
            linkedin: "LinkedIn",
            twitter: "Twitter"
          }
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n; 