// Contact Modal Logic
const modal = document.getElementById('contact-modal');
const backdrop = document.getElementById('modal-backdrop');
const closeBtn = document.getElementById('close-modal');
const openBtnNav = document.getElementById('get-in-touch-nav');
const openBtnHero = document.getElementById('get-in-touch-hero');

const toggleModal = () => {
    modal.classList.toggle('hidden');
    if (!modal.classList.contains('hidden')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
};

openBtnNav.addEventListener('click', toggleModal);
if (openBtnHero) openBtnHero.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
backdrop.addEventListener('click', toggleModal);

// Lightbox Logic
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxBackdrop = document.getElementById('lightbox-backdrop');
const closeLightboxBtn = document.getElementById('close-lightbox');
const projectCards = document.querySelectorAll('.project-card');

const openLightbox = (imgSrc) => {
    lightboxImg.src = imgSrc;
    lightboxModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
    lightboxModal.classList.add('hidden');
    if (modal.classList.contains('hidden')) {
        document.body.style.overflow = 'auto';
    }
};

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const img = card.querySelector('.project-img');
        if (img) openLightbox(img.src);
    });
});

closeLightboxBtn.addEventListener('click', closeLightbox);
lightboxBackdrop.addEventListener('click', closeLightbox);

(function () {
    const experienceData = {
        'sasimon': {
            title: 'Web Developer Intern',
            company: 'S.A Simon Glass & Aluminum • Isabela, Philippines',
            dates: 'Jan 2025 — March 2025',
            desc: 'Assisted in daily operations by organizing files and preparing basic reports for the team.',
            bullets: [
                'Handled the data organization and documentation for an inventory management system.',
                'Focused on creating clear records to help the business maintain accurate inventory.'
            ]
        },
        'isabela': {
            title: 'Admin Assistant Intern',
            company: 'Isabela State University - ICT Faculty • Isabela, Philippines',
            dates: 'March 2025 — May 2025',
            desc: 'Provided daily administrative assistance to keep office operations steady and organized.',
            bullets: [
                'Supported faculty by organizing examinee documents and overseeing exams to ensure everything ran on schedule.',
                'Handled the designing of certificates and checking papers.'
            ]
        }
    };

    const expNavItems = document.querySelectorAll('.exp-nav-item');
    const expContent = document.getElementById('experience-content');

    expNavItems.forEach(item => {
        item.addEventListener('click', () => {
            const key = item.id.replace('exp-nav-', '');
            const data = experienceData[key];
            if (!data) return;

            // Update Nav UI
            expNavItems.forEach(nav => {
                nav.classList.remove('bg-surface-container-low');
                nav.classList.add('hover:bg-surface-container-low');
                const bar = nav.querySelector('div');
                bar.classList.remove('bg-primary');
                bar.classList.add('bg-transparent');
                const text = nav.querySelector('span');
                text.classList.add('text-secondary');
            });

            item.classList.add('bg-surface-container-low');
            item.classList.remove('hover:bg-surface-container-low');
            item.querySelector('div').classList.replace('bg-transparent', 'bg-primary');
            item.querySelector('span').classList.remove('text-secondary');

            // Update Content with Fade Effect
            expContent.style.opacity = '0';

            setTimeout(() => {
                let bulletsHtml = data.bullets.map(bullet => `
                <li class="flex items-start gap-3">
                    <span class="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <span>${bullet}</span>
                </li>`).join('');

                expContent.innerHTML = `
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h3 class="font-headline text-3xl font-bold mb-1">${data.title}</h3>
                        <p class="text-primary font-bold">${data.company}</p>
                    </div>
                    <span class="text-secondary font-medium">${data.dates}</span>
                </div>
                <div class="space-y-6 text-secondary leading-relaxed">
                    <p>${data.desc}</p>
                    <ul class="space-y-4">
                        ${bulletsHtml}
                    </ul>
                </div>
            `;
                expContent.style.opacity = '1';
            }, 300);
        });
    });
})();
