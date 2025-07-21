// assets/js/auto-translate-complete.js
document.addEventListener('DOMContentLoaded', function() {
    // Objeto completo de traducciones
    const translations = {
        // Navegación
        'Inicio': 'Home',
        'Acerca de': 'About',
        'Resumen': 'Resume',
        'Portafolio': 'Portfolio',
        'Blog': 'Blog',
        'Contacto': 'Contact',
        
        // Header
        'Hola, Soy': 'Hello, I am',
        'Ingeniero de software | Desarrollador Full Stack Java | Ingeniero Biomedico': 
            'Software Engineer | Java Full Stack Developer | Biomedical Engineer',
        'Descargar Resumen': 'Download Resume',
        
        // Sección Acerca de
        '¿Quién soy yo?': 'Who am I?',
        'Ingeniero Biomédico y Desarrollador Full Stack': 'Biomedical Engineer and Full Stack Developer',
        'Soy Ingeniero Biomédico con formación en desarrollo de software, orientado al rol de Desarrollador Full Stack Jr. Tengo experiencia desarrollando soluciones frontend y backend con Java, JavaScript, Spring Boot y MySQL, así como en diseño de interfaces responsivas con HTML y CSS. Me apasiona construir soluciones funcionales y escalables, con enfoque en la experiencia del usuario y buenas prácticas de seguridad.':
            'I am a Biomedical Engineer with training in software development, oriented to the Junior Full Stack Developer role. I have experience developing frontend and backend solutions with Java, JavaScript, Spring Boot and MySQL, as well as designing responsive interfaces with HTML and CSS. I am passionate about building functional and scalable solutions, with a focus on user experience and security best practices.',
        'Informacion Personal': 'Personal Information',
        'Email': 'Email',
        'Telefono': 'Phone',
        'Address': 'Address',
        'Abierto a reubicación': 'Open to relocation',
        'Mi Experiencia': 'My Experience',
        'Desarrollo Full Stack': 'Full Stack Development',
        'Java, JavaScript, Spring Boot, SQL y metodologías ágiles como Scrum.': 'Java, JavaScript, Spring Boot, SQL and agile methodologies like Scrum.',
        'Diseño de Interfaces': 'Interface Design',
        'HTML, CSS y enfoque responsivo para mejorar experiencia del usuario.': 'HTML, CSS and responsive approach to improve user experience.',
        'Seguridad y Autenticación': 'Security and Authentication',
        'Cifrado de contraseñas y control de accesos basado en roles.': 'Password encryption and role-based access control.',
        
        // Sección Resumen
        'Mi':'My', 
        'Resumen': 'Resume',
        'Experiencia': 'Experience',
        'Desarrollador Full Stack Jr - Proyecto FireStack': 'Junior Full Stack Developer - FireStack Project',
        'Desarrollé una plataforma de e-commerce con autenticación, gestión de inventario y carrito de compras usando Java, Spring Boot, JavaScript y MySQL. Trabajé bajo metodología Scrum y diseñé una UI responsiva.':
            'I developed an e-commerce platform with authentication, inventory management and shopping cart using Java, Spring Boot, JavaScript and MySQL. I worked under Scrum methodology and designed a responsive UI.',
        'Ingeniero Biomédico - Vita Ingenii': 'Biomedical Engineer - Vita Ingenii',
        'Automaticé procesos internos mediante Excel y desarrollé una app en MATLAB para gestionar órdenes de servicio. Participé como soporte técnico en eventos.':
            'I automated internal processes using Excel and developed a MATLAB app to manage service orders. I participated as technical support in events.',
        'Ingeniero Biomédico Servicio Social - INR "Luis Guillermo Ibarra Ibarra"': 'Biomedical Engineer Social Service - INR "Luis Guillermo Ibarra Ibarra"',
        'Implementé el Modelo Único de Evaluación de la Calidad, analicé bases de datos y optimicé procesos de mantenimiento de dispositivos médicos.':
            'I implemented the Unique Quality Evaluation Model, analyzed databases and optimized medical device maintenance processes.',
        'Educacion': 'Education',
        'Especialización en Ingeniería de Software - Universidad Da Vinci': 'Software Engineering Specialization - Da Vinci University',
        'Java Full Stack - Generation México': 'Java Full Stack - Generation Mexico',
        'Bioingeniería Médica - UAEMéx': 'Medical Bioengineering - UAEMex',
        'Skills': 'Skills',
        'Idiomas': 'Languages',
        'Español':'Spanish',
        'Ingles': 'English',
        
        // Sección de Servicios
        'Resumen': 'Academic and Professional',
        'Académico y Profesional': 'Summary',
        'Formación Académica': 'Academic Background',
        'Bioingeniería Médica por la UAEMéx': 'Medical Bioengineering from UAEMex',
        'Especialización en Ingeniería de Software (En curso)':'Software Engineering Specialization (In progress)',
        'Bootcamp Full Stack Java - Generation México':'Full Stack Java Bootcamp - Generation Mexico',
        
        'Logros Profesionales': 'Professional Achievements',
        'Desarrollo completo de plataforma e-commerce (FireStack)': 'Complete development of e-commerce platform (FireStack)',
        'Automatización de procesos en el INR y Vita Ingenii': 'Process automation at INR and Vita Ingenii',
        'Desarrollo de aplicación de telemedicina en MATLAB': 'Development of telemedicine application in MATLAB',
        'Implementación de seguridad y roles en backend': 'Implementation of security and roles in backend',
        'Habilidades Técnicas': 'Technical Skills',
        'Java, Spring Boot, JavaScript, HTML, CSS, SQL, MATLAB, Git/GitHub': 'Java, Spring Boot, JavaScript, HTML, CSS, SQL, MATLAB, Git/GitHub',
        'Desarrollo backend y frontend':'Backend and frontend development',
        'Manejo de bases de datos y diseño responsivo': 'Database management and responsive design',
        'Seguridad en aplicaciones y metodología Scrum': 'Application security and Scrum methodology',
        // Barra
        'Estoy disponible para colaborar en proyectos de desarrollo': 'I am available to collaborate on development projects',
        'Contactame': 'Contact me',
        //Portafolio:
        'Mi Portafolio': 'My Portfolio',
        'Todos': 'All',
        'Proyectos': 'Projects',
        //Seccion
        'Últimas': 'Latest',
        'Noticias':'news',
        // Sección de contacto
        'Envia un Mensaje': 'Send a Message',
        'Name *': 'Name *',
        'Email *': 'Email *',
        'Message *': 'Message *',
        'Ponerse en contacto': 'Get in touch',
        'Telefono :' : 'Phone:',
        'Enviar Mensaje' : 'Send Message',
        'Dirección :': 'Adress:',
        'Correo :': 'Email:'

    };

    // Función principal de traducción
    function translatePage(toEnglish) {
        const allTextNodes = getTextNodes(document.body);
        
        allTextNodes.forEach(node => {
            const text = node.nodeValue.trim();
            
            if (toEnglish) {
                // Traducir de español a inglés
                if (translations[text]) {
                    node.nodeValue = node.nodeValue.replace(text, translations[text]);
                }
            } else {
                // Traducir de inglés a español (buscar la clave)
                const spanishText = Object.keys(translations).find(key => translations[key] === text);
                if (spanishText) {
                    node.nodeValue = node.nodeValue.replace(text, spanishText);
                }
            }
        });
        
        // Actualizar el estado del toggle
        if (languageToggle) {
            languageToggle.checked = toEnglish;
        }
        
        // Guardar preferencia y actualizar atributo lang
        localStorage.setItem('language', toEnglish ? 'en' : 'es');
        document.documentElement.lang = toEnglish ? 'en' : 'es';
    }

    // Función auxiliar para obtener todos los nodos de texto
    function getTextNodes(element) {
        const textNodes = [];
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        let node;
        while (node = walker.nextNode()) {
            if (node.nodeValue.trim() !== '') {
                textNodes.push(node);
            }
        }
        
        return textNodes;
    }

    // Configurar el toggle de idioma
    const languageToggle = document.getElementById('languageToggle');
    const savedLang = localStorage.getItem('language') || 'es';
    
    // Aplicar traducción al cargar
    if (savedLang === 'en') {
        translatePage(true);
    }
    
    // Manejar cambios en el toggle
    if (languageToggle) {
        languageToggle.checked = savedLang === 'en';
        languageToggle.addEventListener('change', function() {
            translatePage(this.checked);
        });
    }
});