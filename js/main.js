const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");
const year = document.querySelector("#currentYear");
const slider = document.querySelector(".facebook-slider");
const sliderTrack = document.querySelector(".slider-track");
const languageToggle = document.querySelector(".language-toggle");

const translations = {
  cs: {
    pageTitle: "Auto Sosnovec s.r.o. | Nezávislý autoservis",
    meta: {
      description:
        "Auto Sosnovec s.r.o. - nezávislý autoservis v Praze 7 se zaměřením na karosářské práce, opravy po nehodách a servis vozidel.",
    },
    nav: {
      label: "Hlavní navigace",
      about: "O nás",
      services: "Služby",
      pricing: "Ceník",
      contact: "Kontakt",
    },
    menu: {
      open: "Otevřít menu",
      close: "Zavřít menu",
    },
    language: {
      toggle: "EN",
      toggleAria: "Přepnout web do angličtiny",
    },
    intro: {
      p1:
        "Jsme nezávislý autoservis s provozovnou v Holešovicích. Zaměřujeme se především na karosářské práce a opravy vozidel po nehodách. Zajišťujeme také mechanické opravy, diagnostiku, autoelektriku a další servisní úkony. Ke každému zákazníkovi přistupujeme individuálně, s důrazem na pečlivě odvedenou práci a dlouholeté zkušenosti.",
      p2:
        "Ať už řešíte pojistnou událost u smluvní nebo nesmluvní pojišťovny, postaráme se za vás o kompletní administrativu i komunikaci s pojišťovnou, aby pro vás byla oprava co nejjednodušší a vaše vozidlo co nejdříve zpět v provozu.",
    },
    insurance: {
      label: "Smluvní partner pojišťoven",
      image: "assets/img/Pojišťovny.png",
    },
    services: {
      heading: "Služby",
      bodywork: {
        title: "Karosářské práce",
        text:
          "Opravujeme vozidla po nehodách, provádíme rovnání karoserií, výměny poškozených dílů a související karosářské práce včetně zajištění lakování.",
      },
      mechanical: {
        title: "Mechanické práce",
        text:
          "Provádíme běžný servis a opravy vozidel, výměny olejů, brzdových komponentů a další mechanické servisní úkony.",
      },
      ac: {
        title: "Klimatizace",
        text:
          "Zajišťujeme servis klimatizací včetně plnění, diagnostiky úniků a oprav klimatizačních systémů.",
      },
      electric: {
        title: "Autoelektrika a diagnostika",
        text:
          "Provádíme diagnostiku vozidel, opravy kabelových svazků, montáže příslušenství a další autoelektrikářské práce.",
      },
    },
    gallery: {
      heading: "Foto naší práce",
      aria: "Otevřít Facebook galerii Auto Sosnovec",
      before: "Předtím",
      after: "Potom",
      beforeAlt: "Oprava {number} před opravou",
      afterAlt: "Oprava {number} po opravě",
      randomAlt: "Z naší dílny",
    },
    pricing: {
      heading: "Ceník služeb",
      text: "Aktuální orientační ceník servisních prací je připravený ke stažení ve formátu PDF.",
      button: "Zobrazit ceník PDF",
    },
    contact: {
      kicker: "Objednávky a dotazy",
      heading: "Kontakt",
      address: "Přístavní 27, Praha 7",
      hoursTitle: "Otevírací doba",
      hoursWeek: "Pondělí–Čtvrtek: 8:00–17:00",
      hoursFriday: "Pátek: 8:00–16:00",
      mapTitle: "Mapa - Přístavní 27, Praha 7",
      facebookAria: "Facebook Auto Sosnovec",
    },
    form: {
      name: "Jméno",
      email: "E-mail",
      phone: "Telefon",
      message: "Zpráva",
      submit: "Odeslat",
      sent: "Děkujeme, zpráva byla odeslána.",
    },
    footer: {
      company: "Auto Sosnovec s.r.o.",
    },
  },
  en: {
    pageTitle: "Auto Sosnovec s.r.o. | Independent Car Service",
    meta: {
      description:
        "Auto Sosnovec s.r.o. - an independent car service in Prague 7 specializing in bodywork, accident repairs and vehicle servicing.",
    },
    nav: {
      label: "Main navigation",
      about: "About us",
      services: "Services",
      pricing: "Price list",
      contact: "Contact",
    },
    menu: {
      open: "Open menu",
      close: "Close menu",
    },
    language: {
      toggle: "CZ",
      toggleAria: "Switch website to Czech",
    },
    intro: {
      p1:
        "We are an independent car service with a workshop in Holešovice. We focus primarily on bodywork and repairs of vehicles after accidents. We also provide mechanical repairs, diagnostics, auto electrics and other service work. We approach every customer individually, with an emphasis on careful workmanship and many years of experience.",
      p2:
        "Whether you are dealing with an insurance claim through a contracted or non-contracted insurer, we will take care of the complete administration and communication with the insurance company for you, making the repair as simple as possible and getting your vehicle back on the road as soon as possible.",
    },
    insurance: {
      label: "Contracted insurance partners",
      image: "assets/img/Pojišťovny_en.png",
    },
    services: {
      heading: "Services",
      bodywork: {
        title: "Bodywork",
        text:
          "We repair vehicles after accidents, straighten bodywork, replace damaged parts and carry out related bodywork repairs, including arranging paintwork.",
      },
      mechanical: {
        title: "Mechanical work",
        text:
          "We provide routine servicing and vehicle repairs, oil changes, brake component replacement and other mechanical service work.",
      },
      ac: {
        title: "Air conditioning",
        text:
          "We service air-conditioning systems, including refrigerant refilling, leak diagnostics and air-conditioning system repairs.",
      },
      electric: {
        title: "Auto electrics and diagnostics",
        text:
          "We perform vehicle diagnostics, wiring harness repairs, accessory installation and other auto electrical work.",
      },
    },
    gallery: {
      heading: "Our Work",
      aria: "Open the Auto Sosnovec Facebook gallery",
      before: "Before",
      after: "After",
      beforeAlt: "Repair {number} before repair",
      afterAlt: "Repair {number} after repair",
      randomAlt: "From our workshop",
    },
    pricing: {
      heading: "Service Price List",
      text: "The current indicative price list for service work is available for download as a PDF.",
      button: "View PDF price list",
    },
    contact: {
      kicker: "Bookings and questions",
      heading: "Contact",
      address: "Přístavní 27, Prague 7",
      hoursTitle: "Opening hours",
      hoursWeek: "Monday-Thursday: 8:00-17:00",
      hoursFriday: "Friday: 8:00-16:00",
      mapTitle: "Map - Přístavní 27, Prague 7",
      facebookAria: "Auto Sosnovec on Facebook",
    },
    form: {
      name: "Name",
      email: "E-mail",
      phone: "Phone",
      message: "Message",
      submit: "Send",
      sent: "Thank you, your message has been sent.",
    },
    footer: {
      company: "Auto Sosnovec s.r.o.",
    },
  },
};

let currentLanguage = localStorage.getItem("siteLanguage") === "en" ? "en" : "cs";
let activeSlide = 0;
let sliderTimer;

const getTranslation = (key) =>
  key.split(".").reduce((value, part) => (value ? value[part] : undefined), translations[currentLanguage]);

const applyLanguage = (language) => {
  currentLanguage = language;
  localStorage.setItem("siteLanguage", currentLanguage);
  document.documentElement.lang = currentLanguage === "en" ? "en" : "cs";
  document.title = translations[currentLanguage].pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getTranslation(element.dataset.i18n);
    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(";").forEach((entry) => {
      const [attribute, key] = entry.split(":");
      const value = getTranslation(key);
      if (attribute && value) {
        element.setAttribute(attribute, value);
      }
    });
  });

  if (languageToggle) {
    languageToggle.textContent = translations[currentLanguage].language.toggle;
  }

  if (menuToggle) {
    const isOpen = mainNav?.classList.contains("is-open");
    menuToggle.setAttribute("aria-label", getTranslation(isOpen ? "menu.close" : "menu.open"));
  }

  renderGallery();
};

const randomGalleryImages = [
  "assets/img/Foto_opravy/random/143504027_3810503952343778_3738808640047981504_n.jpg",
  "assets/img/Foto_opravy/random/480509815_1085308110063682_1710371165100056754_n.jpg",
  "assets/img/Foto_opravy/random/480986661_1096292772298549_1229181519023491942_n.jpg",
  "assets/img/Foto_opravy/random/486604160_1116802236914269_4377926955193154258_n.jpg",
  "assets/img/Foto_opravy/random/514075294_24137056972595177_5520736691376761426_n.jpg",
  "assets/img/Foto_opravy/random/82865456_2819615781432605_6313219694505492480_n.jpg",
  "assets/img/Foto_opravy/random/86806971_2884618274932355_2031269117234774016_n.jpg",
];

const repairSlides = [
  {
    before: "assets/img/Foto_opravy/1/Before.jpg",
    after: "assets/img/Foto_opravy/1/After.jpg",
  },
  {
    before: "assets/img/Foto_opravy/2/before.jpg",
    after: "assets/img/Foto_opravy/2/after.jpg",
  },
  {
    before: "assets/img/Foto_opravy/3/before.jpg",
    after: "assets/img/Foto_opravy/3/after.jpg",
  },
  {
    before: "assets/img/Foto_opravy/4/before.jpg",
    after: "assets/img/Foto_opravy/4/after.jpg",
  },
  {
    before: "assets/img/Foto_opravy/5/before.jpg",
    after: "assets/img/Foto_opravy/5/after.jpg",
  },
  {
    before: "assets/img/Foto_opravy/6/before.jpg",
    after: "assets/img/Foto_opravy/6/after.jpg",
  },
];

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", getTranslation(isOpen ? "menu.close" : "menu.open"));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (mainNav && menuToggle) {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", getTranslation("menu.open"));
    }
  });
});

document.querySelectorAll('.insurance-link[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    applyLanguage(currentLanguage === "cs" ? "en" : "cs");
    if (mainNav && menuToggle) {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", getTranslation("menu.open"));
    }
  });
}

const createGallerySlides = () => {
  const galleryText = translations[currentLanguage].gallery;
  const randomOrder = [...randomGalleryImages].sort(() => Math.random() - 0.5);
  let randomIndex = 0;

  return repairSlides.flatMap((repair, index) => {
    const folderNumber = index + 1;
    const slides = [
      {
        image: repair.before,
        label: galleryText.beforeAlt.replace("{number}", folderNumber),
        type: "before",
      },
      {
        image: repair.after,
        label: galleryText.afterAlt.replace("{number}", folderNumber),
        type: "after",
      },
    ];

    if (index < repairSlides.length - 1) {
      slides.push({
        image: randomOrder[randomIndex % randomOrder.length],
        label: galleryText.randomAlt,
      });
      randomIndex += 1;
    }

    return slides;
  });
};

let gallerySlidesData = [];
let currentSlideWidth = 100;

const setSlide = (index) => {
  if (!sliderTrack || gallerySlidesData.length === 0) {
    return;
  }

  activeSlide = ((index % gallerySlidesData.length) + gallerySlidesData.length) % gallerySlidesData.length;
  sliderTrack.style.transform = `translateX(-${activeSlide * currentSlideWidth}%)`;
  sliderTrack.querySelectorAll(".slide").forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeSlide);
  });
};

function renderGallery() {
  if (!slider || !sliderTrack) {
    return;
  }

  gallerySlidesData = createGallerySlides();
  const galleryText = translations[currentLanguage].gallery;
  activeSlide = Math.min(activeSlide, gallerySlidesData.length - 1);

  sliderTrack.innerHTML = gallerySlidesData
    .map((slide, index) => {
      const badge = slide.type === "before" ? galleryText.before : slide.type === "after" ? galleryText.after : "";

      return `
        <span class="slide${index === activeSlide ? " is-active" : ""}">
          <img src="${slide.image}" alt="${slide.label}" loading="${index === 0 ? "eager" : "lazy"}">
          ${badge ? `<span class="slide-badge">${badge}</span>` : ""}
        </span>
      `;
    })
    .join("");

  const slideCount = gallerySlidesData.length;
  currentSlideWidth = 100 / slideCount;

  sliderTrack.style.width = `${slideCount * 100}%`;
  sliderTrack.querySelectorAll(".slide").forEach((slide) => {
    slide.style.minWidth = `${currentSlideWidth}%`;
  });

  setSlide(activeSlide);
}

if (slider && sliderTrack) {
  renderGallery();

  sliderTimer = window.setInterval(() => {
    setSlide(activeSlide + 1);
  }, 3600);

  slider.addEventListener("mouseenter", () => {
    window.clearInterval(sliderTimer);
  });

  slider.addEventListener("mouseleave", () => {
    sliderTimer = window.setInterval(() => {
      setSlide(activeSlide + 1);
    }, 3600);
  });
}

applyLanguage(currentLanguage);

if (new URLSearchParams(window.location.search).get("zprava") === "odeslana") {
  alert(translations[currentLanguage].form.sent);
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.hash || ""}`);
}
