document.addEventListener('DOMContentLoaded', function() {
    // Botão flutuante do WhatsApp
    const floatingWhatsapp = document.createElement('div');
    floatingWhatsapp.className = 'floating-whatsapp';
    floatingWhatsapp.innerHTML = `<a href="https://wa.me/5511999999999" target="_blank"><i class="fab fa-whatsapp"></i></a>`;
    document.body.appendChild(floatingWhatsapp);
    
    // Suaviza rolagem para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Depoimentos (simulados)
    const testimonials = [
        {
            name: "João Silva",
            text: "Ótimo atendimento e qualidade excelente nas esquadrilhas instaladas em meu apartamento.",
            rating: 5
        },
        {
            name: "Maria Oliveira",
            text: "Profissionais qualificados e pontuais. Recomendo!",
            rating: 4
        },
        {
            name: "Carlos Souza",
            text: "Preço justo e serviço impecável. Fiquei muito satisfeito.",
            rating: 5
        }
    ];
    
    // Carrega depoimentos na página
    const testimonialsContainer = document.getElementById('testimonials-container');
    if (testimonialsContainer) {
        testimonialsContainer.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial-card">
                <div class="rating">${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}</div>
                <p>"${testimonial.text}"</p>
                <div class="client-name">- ${testimonial.name}</div>
            </div>
        `).join('');
    }
    
    // Formulário de depoimento
    const testimonialForm = document.getElementById('testimonial-form');
    if (testimonialForm) {
        testimonialForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('client-name').value.trim();
            const text = document.getElementById('client-testimonial').value.trim();
            const rating = parseInt(document.getElementById('client-rating').value);
            
            if (!name || !text || !rating || rating < 1 || rating > 5) {
                alert('Por favor, preencha todos os campos corretamente.');
                return;
            }
            
            // Adiciona o novo depoimento à lista
            const newTestimonial = {
                name,
                text,
                rating
            };
            
            testimonials.unshift(newTestimonial); // Adiciona no início do array
            
            // Atualiza a exibição
            testimonialsContainer.innerHTML = testimonials.map(testimonial => `
                <div class="testimonial-card">
                    <div class="rating">${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}</div>
                    <p>"${testimonial.text}"</p>
                    <div class="client-name">- ${testimonial.name}</div>
                </div>
            `).join('');
            
            // Limpa o formulário
            testimonialForm.reset();
            
            // Feedback ao usuário
            alert('Obrigado pelo seu depoimento!');
        });
    }
    
    // Formulário de contato
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Simulação de envio
            console.log('Mensagem enviada:', { name, email, message });
            
            // Limpa o formulário
            contactForm.reset();
            
            // Feedback ao usuário
            alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
        });
    }
    
    // Efeito de carregamento suave
    const fadeElements = document.querySelectorAll('.hero, .service-card, .testimonial-card');
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});