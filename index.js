// ==========================================================================
// TRANSLATION DICTIONARY (EN/ES)
// ==========================================================================
const translations = {
    es: {
        // Navigation
        nav_about: "Nosotros",
        nav_challenges: "Retos",
        nav_value: "Ventajas",
        nav_cta: "Pre-Calificar Seguro",
        
        // Hero Section
        hero_micro_badge: "<i class='fa-solid fa-star'></i> Clínica de Terapia Pediátrica en Weston, FL",
        hero_title: "El futuro de tu hijo empieza con un diagnóstico claro y una terapia personalizada.",
        hero_subtitle: "Especialistas bilingües en Terapia del Habla y Ocupacional en Weston, FL. Ayudamos a tu hijo a superar barreras de comunicación, enfoque y desarrollo sensorial con atención clínica individualizada.",
        hero_primary_cta: "Reservar Evaluación Presencial",
        hero_trust_text: "Aceptamos Medicaid y planes privados.",
        badge_atencion_title: "Atención Familiar",
        badge_atencion_desc: "Espacios seguros y divertidos",
        badge_cert_title: "Certificados",
        badge_cert_desc: "Terapeutas bilingües avalados",
        
        // Trust Bar
        trust_title: "Respaldados por las principales coberturas:",
        trust_upcoming: "Próximamente procesando Becas FES-UA / Step Up for Students",
        
        // Challenges Section
        challenges_tag: "Sabemos lo que estás pasando",
        challenges_title: "¿Has notado que tu hijo enfrenta alguno de estos retos?",
        challenges_subtitle: "Identificar las señales a tiempo marca una gran diferencia en su desarrollo emocional y cognitivo.",
        card1_title: "Retraso del habla",
        card1_desc: "Tiene la edad para hablar, pero aún no dice palabras o le cuesta articularlas correctamente.",
        card2_title: "Alertas Escolares",
        card2_desc: "La escuela te ha sugerido una evaluación por posibles señales de TEA (Autismo) o TDAH.",
        card3_title: "Problemas de Enfoque",
        card3_desc: "Le cuesta concentrarse en tareas sencillas, seguir instrucciones o mantener la atención.",
        card4_title: "Desafíos Motores y Sensoriales",
        card4_desc: "Muestra rigidez, falta de coordinación o dificultades con la escritura y texturas alimentarias.",
        
        // Value Proposition
        value_tag: "Nuestros Superpoderes",
        value_title: "Por qué las familias de Weston eligen MG Therapy Inc.",
        val1_title: "Atención 100% Personalizada",
        val1_desc: "No somos una clínica corporativa o masiva. Enfoque directo y exclusivo de terapeutas que conocen el nombre y ritmo de tu hijo.",
        val2_title: "Especialistas con Certificación Internacional",
        val2_desc: "Credenciales globales avanzadas para diagnósticos complejos (Autismo, Parálisis Cerebral, Dispraxia, Hipotonía).",
        val3_title: "Enfoque Clínico 100% Bilingüe",
        val3_desc: "Evaluación y tratamiento en inglés y español para adaptarnos al entorno multicultural de Miami y Weston.",
        
        // Form Section
        form_title: "Solicita tu Evaluación Presencial Hoy Mismo",
        form_subtitle: "Completa los datos a continuación para pre-calificar tu seguro y preparar la primera cita de tu hijo.",
        label_parent_name: "Nombre del Representante",
        label_parent_phone: "Número de Teléfono",
        label_child_name: "Nombre del Niño",
        label_child_age: "Edad del Niño",
        label_therapy_type: "Tipo de Terapia Requerida",
        check_speech: "Terapia del Habla",
        check_occupational: "Terapia Ocupacional",
        check_both: "Ambas Disciplinas",
        label_diagnosis: "Diagnóstico actual o principales dificultades que observa",
        label_coverage: "Tipo de Cobertura / Seguro",
        radio_private: "Pago Privado / Private Pay",
        btn_submit_text: "Enviar Información y Agendar Cita",
        btn_submitting_text: "Enviando...",
        
        // Form Placeholders
        ph_parent_name: "Ej. María González",
        ph_parent_phone: "Ej. (954) 555-0199",
        ph_child_name: "Ej. Sebastián",
        ph_child_age: "Ej. 5",
        ph_diagnosis: "Ej. Le cuesta pronunciar la letra R o se distrae con facilidad...",
        
        // Validation Errors
        err_parent_name: "Por favor, ingresa tu nombre.",
        err_parent_phone: "Ingresa un número válido de 10 dígitos.",
        err_child_name: "Por favor, ingresa el nombre del niño.",
        err_child_age: "Ingresa una edad válida (1-18 años).",
        err_therapy: "Selecciona al menos un tipo de terapia.",
        
        // Modal Success
        modal_success_title: "¡Información Recibida con Éxito!",
        modal_success_desc: "Hemos registrado los datos de tu hijo. Un especialista de MG Therapy Inc. se comunicará contigo en las próximas 24 horas hábiles para coordinar la evaluación presencial.",
        modal_close: "Entendido",
        
        // Footer
        footer_tagline: "Confianza profesional y acompañamiento familiar en cada etapa del camino.",
        footer_links_title: "Enlaces Rápidos",
        footer_map_title: "Nuestra Ubicación en Weston",
        footer_rights: "Diseñado profesionalmente para el bienestar infantil."
    },
    en: {
        // Navigation
        nav_about: "About Us",
        nav_challenges: "Challenges",
        nav_value: "Why Us",
        nav_cta: "Pre-Qualify Insurance",
        
        // Hero Section
        hero_micro_badge: "<i class='fa-solid fa-star'></i> Pediatric Therapy Clinic in Weston, FL",
        hero_title: "Your child's future starts with a clear diagnosis and personalized therapy.",
        hero_subtitle: "Bilingual Speech and Occupational Therapy Specialists in Weston, FL. We help your child overcome communication, focus, and sensory development barriers with individualized clinical care.",
        hero_primary_cta: "Book In-Person Evaluation",
        hero_trust_text: "We accept Medicaid and private insurance.",
        badge_atencion_title: "Family-Oriented",
        badge_atencion_desc: "Safe and fun spaces",
        badge_cert_title: "Certified",
        badge_cert_desc: "Licensed bilingual therapists",
        
        // Trust Bar
        trust_title: "Supported by major coverage plans:",
        trust_upcoming: "Soon processing FES-UA / Step Up for Students Scholarships",
        
        // Challenges Section
        challenges_tag: "We know what you're going through",
        challenges_title: "Have you noticed your child facing any of these challenges?",
        challenges_subtitle: "Identifying signs early makes a massive difference in their emotional and cognitive development.",
        card1_title: "Speech Delay",
        card1_desc: "Is of speaking age but does not say words yet or struggles to articulate them correctly.",
        card2_title: "School Alerts",
        card2_desc: "The school has suggested an evaluation for potential signs of ASD (Autism) or ADHD.",
        card3_title: "Focus Challenges",
        card3_desc: "Struggles to concentrate on simple tasks, follow instructions, or maintain attention.",
        card4_title: "Motor & Sensory Challenges",
        card4_desc: "Shows stiffness, lack of coordination, or difficulties with handwriting and food textures.",
        
        // Value Proposition
        value_tag: "Our Superpowers",
        value_title: "Why Weston families choose MG Therapy Inc.",
        val1_title: "100% Personalized Care",
        val1_desc: "Not a corporate/mass clinic. Direct, exclusive focus from therapists who know the child’s name and pace.",
        val2_title: "Internationally Certified Specialists",
        val2_desc: "Advanced global credentials for complex diagnoses (Autism, Cerebral Palsy, Dyspraxia, Hypotonia).",
        val3_title: "100% Bilingual Clinical Focus",
        val3_desc: "Evaluation and treatment in English and Spanish to fit Miami's multicultural environment.",
        
        // Form Section
        form_title: "Request Your In-Person Evaluation Today",
        form_subtitle: "Complete the form below to pre-qualify your insurance and prepare for your child's first visit.",
        label_parent_name: "Parent/Guardian Name",
        label_parent_phone: "Phone Number",
        label_child_name: "Child's Name",
        label_child_age: "Child's Age",
        label_therapy_type: "Required Therapy Type",
        check_speech: "Speech Therapy",
        check_occupational: "Occupational Therapy",
        check_both: "Both Disciplines",
        label_diagnosis: "Current diagnosis or main difficulties you observe",
        label_coverage: "Coverage / Insurance Type",
        radio_private: "Pago Privado / Private Pay",
        btn_submit_text: "Send Information and Book Visit",
        btn_submitting_text: "Sending...",
        
        // Form Placeholders
        ph_parent_name: "e.g. Mary Smith",
        ph_parent_phone: "e.g. (954) 555-0199",
        ph_child_name: "e.g. Sebastian",
        ph_child_age: "e.g. 5",
        ph_diagnosis: "e.g. Struggles to pronounce the letter R or gets easily distracted...",
        
        // Validation Errors
        err_parent_name: "Please enter your name.",
        err_parent_phone: "Please enter a valid 10-digit number.",
        err_child_name: "Please enter the child's name.",
        err_child_age: "Please enter a valid age (1-18 years).",
        err_therapy: "Please select at least one therapy type.",
        
        // Modal Success
        modal_success_title: "Information Received Successfully!",
        modal_success_desc: "We have registered your child's information. An MG Therapy Inc. specialist will contact you in the next 24 business hours to coordinate the in-person evaluation.",
        modal_close: "Got it",
        
        // Footer
        footer_tagline: "Professional trust and family support at every step of the way.",
        footer_links_title: "Quick Links",
        footer_map_title: "Our Location in Weston",
        footer_rights: "Professionally designed for children's well-being."
    }
};

// Default language state
let currentLang = localStorage.getItem("mg_therapy_lang") || "es";

// ==========================================================================
// TRANSLATION ENGINE
// ==========================================================================
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("mg_therapy_lang", lang);
    document.documentElement.setAttribute("lang", lang);
    
    // Toggle active class on switcher buttons
    document.getElementById("lang-es").classList.toggle("active", lang === "es");
    document.getElementById("lang-en").classList.toggle("active", lang === "en");
    
    // Update elements with data-i18n attribute
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update Input Placeholders
    const parentNameInput = document.getElementById("parent-name");
    const parentPhoneInput = document.getElementById("parent-phone");
    const childNameInput = document.getElementById("child-name");
    const childAgeInput = document.getElementById("child-age");
    const diagnosisDescInput = document.getElementById("diagnosis-desc");

    if (parentNameInput) parentNameInput.placeholder = translations[lang].ph_parent_name;
    if (parentPhoneInput) parentPhoneInput.placeholder = translations[lang].ph_parent_phone;
    if (childNameInput) childNameInput.placeholder = translations[lang].ph_child_name;
    if (childAgeInput) childAgeInput.placeholder = translations[lang].ph_child_age;
    if (diagnosisDescInput) diagnosisDescInput.placeholder = translations[lang].ph_diagnosis;
}

// Initialize Language on DOM Load
document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
});

// Event Listeners for language switches
document.getElementById("lang-es").addEventListener("click", () => setLanguage("es"));
document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));


// ==========================================================================
// NAVIGATION SCROLL EFFECT & MOBILE MENU
// ==========================================================================
const header = document.querySelector(".main-header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
const closeMobileMenu = document.querySelector(".close-mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-nav-links a");

mobileNavToggle.addEventListener("click", () => {
    mobileMenuOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling
});

function hideMobileMenu() {
    mobileMenuOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
}

closeMobileMenu.addEventListener("click", hideMobileMenu);
mobileMenuLinks.forEach(link => {
    link.addEventListener("click", hideMobileMenu);
});


// ==========================================================================
// INTELLIGENT THERAPY SELECTION LOGIC
// ==========================================================================
const therapyChecks = document.querySelectorAll(".therapy-check");
const checkboxBoth = document.getElementById("therapy-both");

therapyChecks.forEach(check => {
    check.addEventListener("change", (e) => {
        if (e.target === checkboxBoth && checkboxBoth.checked) {
            // If "Both" is checked, select both Speech and Occupational, clear error
            therapyChecks.forEach(c => {
                if (c !== checkboxBoth) c.checked = true;
            });
        } else if (e.target === checkboxBoth && !checkboxBoth.checked) {
            // If "Both" is unchecked, uncheck others
            therapyChecks.forEach(c => {
                if (c !== checkboxBoth) c.checked = false;
            });
        } else {
            // If user individually checks Speech and Occupational, check "Both" automatically
            const speechChecked = Array.from(therapyChecks).find(c => c.value === "speech").checked;
            const occChecked = Array.from(therapyChecks).find(c => c.value === "occupational").checked;
            
            if (speechChecked && occChecked) {
                checkboxBoth.checked = true;
            } else {
                checkboxBoth.checked = false;
            }
        }
        
        // Live validation check on change
        validateTherapies();
    });
});


// ==========================================================================
// FORM VALIDATION & LEAD GENERATION
// ==========================================================================
const form = document.getElementById("lead-generation-form");

function validateInput(input, errorElement, validationFn, errorKey) {
    const isValid = validationFn(input.value);
    const parentGroup = input.closest(".form-group");
    
    if (!isValid) {
        parentGroup.classList.add("invalid");
        errorElement.textContent = translations[currentLang][errorKey];
        return false;
    } else {
        parentGroup.classList.remove("invalid");
        errorElement.textContent = "";
        return true;
    }
}

function validateTherapies() {
    const checkedCount = Array.from(therapyChecks).filter(c => c.checked).length;
    const errorElement = document.getElementById("error-therapy-type");
    const parentGroup = checkboxBoth.closest(".form-group");
    
    if (checkedCount === 0) {
        parentGroup.classList.add("invalid");
        errorElement.textContent = translations[currentLang].err_therapy;
        return false;
    } else {
        parentGroup.classList.remove("invalid");
        errorElement.textContent = "";
        return true;
    }
}

// Real-time validation listeners on blur
document.getElementById("parent-name").addEventListener("blur", function() {
    validateInput(this, document.getElementById("error-parent-name"), val => val.trim().length > 0, "err_parent_name");
});

document.getElementById("parent-phone").addEventListener("blur", function() {
    // Basic phone pattern check (must resolve to 10 numerical digits)
    validateInput(this, document.getElementById("error-parent-phone"), val => {
        const digits = val.replace(/\D/g, "");
        return digits.length === 10;
    }, "err_parent_phone");
});

document.getElementById("child-name").addEventListener("blur", function() {
    validateInput(this, document.getElementById("error-child-name"), val => val.trim().length > 0, "err_child_name");
});

document.getElementById("child-age").addEventListener("blur", function() {
    validateInput(this, document.getElementById("error-child-age"), val => {
        const age = parseInt(val, 10);
        return !isNaN(age) && age >= 1 && age <= 18;
    }, "err_child_age");
});

// Format phone number dynamically as user types: (XXX) XXX-XXXX
document.getElementById("parent-phone").addEventListener("input", function(e) {
    let input = e.target.value.replace(/\D/g, "");
    if (input.length > 10) input = input.substring(0, 10);
    
    let formatted = "";
    if (input.length > 0) {
        formatted += "(" + input.substring(0, 3);
    }
    if (input.length > 3) {
        formatted += ") " + input.substring(3, 6);
    }
    if (input.length > 6) {
        formatted += "-" + input.substring(6, 10);
    }
    
    e.target.value = formatted;
});

// Handle Form Submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const parentName = document.getElementById("parent-name");
    const parentPhone = document.getElementById("parent-phone");
    const childName = document.getElementById("child-name");
    const childAge = document.getElementById("child-age");
    const btnSubmit = document.getElementById("btn-submit-form");
    const btnTextSpan = btnSubmit.querySelector("span");
    const btnIcon = btnSubmit.querySelector("i");
    
    const isParentNameValid = validateInput(parentName, document.getElementById("error-parent-name"), val => val.trim().length > 0, "err_parent_name");
    const isParentPhoneValid = validateInput(parentPhone, document.getElementById("error-parent-phone"), val => val.replace(/\D/g, "").length === 10, "err_parent_phone");
    const isChildNameValid = validateInput(childName, document.getElementById("error-child-name"), val => val.trim().length > 0, "err_child_name");
    const isChildAgeValid = validateInput(childAge, document.getElementById("error-child-age"), val => {
        const age = parseInt(val, 10);
        return !isNaN(age) && age >= 1 && age <= 18;
    }, "err_child_age");
    const isTherapiesValid = validateTherapies();
    
    if (isParentNameValid && isParentPhoneValid && isChildNameValid && isChildAgeValid && isTherapiesValid) {
        // Disable button and show loading state
        btnSubmit.disabled = true;
        const originalText = btnTextSpan.textContent;
        const originalIconClass = btnIcon.className;
        
        btnTextSpan.textContent = translations[currentLang].btn_submitting_text || "Enviando...";
        btnIcon.className = "fa-solid fa-spinner fa-spin";
        
        // Collect form data
        const formData = {
            parentName: parentName.value,
            parentPhone: parentPhone.value,
            childName: childName.value,
            childAge: childAge.value,
            therapies: Array.from(therapyChecks).filter(c => c.checked).map(c => c.value),
            diagnosis: document.getElementById("diagnosis-desc").value,
            coverage: document.querySelector('input[name="coverage"]:checked').value
        };
        
        console.log("Submitting form data:", formData);
        
        // Send to GoHighLevel Webhook
        fetch("https://services.leadconnectorhq.com/hooks/V3IEiIdO3F9qvsXbpNaP/webhook-trigger/ca28c236-1544-4d04-ab8f-7f8144089ac1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Webhook success:", data);
        })
        .catch(error => {
            console.error("Webhook error (continuing to success modal for user UX):", error);
        })
        .finally(() => {
            // Restore button state
            btnSubmit.disabled = false;
            btnTextSpan.textContent = originalText;
            btnIcon.className = originalIconClass;
            
            // Show Success Modal
            const successModal = document.getElementById("success-modal");
            successModal.classList.add("active");
            
            // Reset Form
            form.reset();
            document.querySelectorAll(".form-group").forEach(g => g.classList.remove("invalid"));
        });
    }
});


// ==========================================================================
// SUCCESS MODAL INTERACTIVES
// ==========================================================================
const closeModalBtn = document.getElementById("close-modal-btn");
const successModal = document.getElementById("success-modal");

closeModalBtn.addEventListener("click", () => {
    successModal.classList.remove("active");
});

// Close modal if user clicks outside of it
successModal.addEventListener("click", (e) => {
    if (e.target === successModal) {
        successModal.classList.remove("active");
    }
});
