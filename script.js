document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Planet data
    const planetData = {
        mercury: {
            name: "Mercury",
            description: "Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes only 87.97 days, the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.",
            diameter: "4,880 km",
            distance: "57.9 million km",
            period: "88 days"
        },
        venus: {
            name: "Venus",
            description: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
            diameter: "12,104 km",
            distance: "108.2 million km",
            period: "225 days"
        },
        earth: {
            name: "Earth",
            description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also by lakes, rivers and other fresh water, which together constitute the hydrosphere.",
            diameter: "12,742 km",
            distance: "149.6 million km",
            period: "365.25 days"
        },
        mars: {
            name: "Mars",
            description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet' due to the reddish iron oxide prevalent on its surface.",
            diameter: "6,779 km",
            distance: "227.9 million km",
            period: "687 days"
        },
        jupiter: {
            name: "Jupiter",
            description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky.",
            diameter: "139,820 km",
            distance: "778.3 million km",
            period: "12 years"
        },
        saturn: {
            name: "Saturn",
            description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. It has a prominent ring system that consists of nine continuous main rings and three discontinuous arcs.",
            diameter: "116,460 km",
            distance: "1.427 billion km",
            period: "29.5 years"
        },
        uranus: {
            name: "Uranus",
            description: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn.",
            diameter: "50,724 km",
            distance: "2.871 billion km",
            period: "84 years"
        },
        neptune: {
            name: "Neptune",
            description: "Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.",
            diameter: "49,244 km",
            distance: "4.498 billion km",
            period: "165 years"
        }
    };
    
    // Planet details modal
    const planetElements = document.querySelectorAll('.planet');
    const planetDetails = document.getElementById('planet-details');
    const detailTitle = document.getElementById('detail-title');
    const detailDescription = document.getElementById('detail-description');
    const detailDiameter = document.getElementById('detail-diameter');
    const detailDistance = document.getElementById('detail-distance');
    const detailPeriod = document.getElementById('detail-period');
    const closeBtn = document.querySelector('.close-btn');
    
    planetElements.forEach(planet => {
        planet.addEventListener('click', function() {
            const planetName = this.getAttribute('data-planet');
            const data = planetData[planetName];
            
            detailTitle.textContent = data.name;
            detailDescription.textContent = data.description;
            detailDiameter.textContent = data.diameter;
            detailDistance.textContent = data.distance;
            detailPeriod.textContent = data.period;
            
            planetDetails.classList.add('active');
        });
    });
    
    closeBtn.addEventListener('click', function() {
        planetDetails.classList.remove('active');
    });
    
    // Close modal when clicking outside content
    planetDetails.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
    
    // Hubble images button
    const hubbleImagesBtn = document.getElementById('hubbleImagesBtn');
    
    hubbleImagesBtn.addEventListener('click', function() {
        alert('Redirecting to Hubble Space Telescope image gallery...');
        // In a real implementation, this would redirect to NASA's Hubble gallery
        // window.location.href = 'https://hubblesite.org/images/gallery';
    });
    
    // Animate elements when scrolling
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.planet, .satellite-card, .topic-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.planet, .satellite-card, .topic-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});
