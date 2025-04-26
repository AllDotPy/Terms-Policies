const PROJECTS = [
    {
        'name': 'AllDotPy',
        'description': 'AllDotPy company Website.',
        'image': '../assets/images/products/dotpy/logo_single.png',
        'link': 'https://example.com/project1',
        'technologies': ['HTML', 'CSS', 'JavaScript'],
        'github': '',
        'demo': 'https://example.com/demo1',
        'tags': ['web', 'frontend'],
        'date': '2023-01-01',
        'status': 'completed',
        'type': 'web',
        'featured': true,
        'privacy_page': 'apps/alldotpy.html',
    },
    {
        'name': 'Kvs Code',
        'description': 'Development studio for kivymd.',
        'image': '../assets/images/products/kvscode/KvStudio.png',
        'link': 'https://example.com/project1',
        'technologies': ['HTML', 'CSS', 'JavaScript'],
        'github': '',
        'demo': 'https://example.com/demo1',
        'tags': ['web', 'frontend'],
        'date': '2023-01-01',
        'status': 'completed',
        'type': 'web',
        'featured': true,
        'privacy_page': 'apps/kvscode.html',
    },
    {
        'name': 'Learnia',
        'description': 'Educative AI assistant App for students.',
        'image': '../assets/icons/logos/ln_tx_bg_alpha_3000.png',
        'link': 'https://learnia.alldotpy.com/',
        'technologies': ['HTML', 'CSS', 'JavaScript'],
        'github': '',
        'demo': 'https://example.com/demo1',
        'tags': ['web', 'frontend'],
        'date': '2023-01-01',
        'status': 'completed',
        'type': 'web',
        'featured': true,
        'privacy_page': 'apps/learnia.html',
    },
    {
        'name': 'CinetPay SDK',
        'description': 'Python SDK for CinetPay Payment API.',
        'image': '../assets/images/products/kvscode/KvStudio.png',
        'link': 'https://learnia.alldotpy.com/',
        'technologies': ['HTML', 'CSS', 'JavaScript'],
        'github': '',
        'demo': 'https://example.com/demo1',
        'tags': ['web', 'frontend'],
        'date': '2023-01-01',
        'status': 'completed',
        'type': 'web',
        'featured': true,
        'privacy_page': 'apps/learnia.html',
    },
]

const projectsContainer = document.querySelector('.projects-container')

function formatProject(project) {
    // FORMAT THE PROJECT DATA WITH A TEMPLATE
    const projectTemplate = `<div class="
                        flex flex-col 
                        items-center 
                        w-full h-full 
                        justify-center 
                        my-6 mx-auto 
                        rounded-md
                        space-y-2 
                        bg-lightGray">
    
                        <!-- IMAGE CONTAINER -->
                        <div class="
                            flex items-center
                            justify-end
                            w-20 h-20 rounded-full
                            overflow-clip
                            bg-secondaryy
                            ">
    
                            <!-- IMAGE -->
                            <img src="${project.image}" alt="hero" class="w-full
                            ">
                        </div>
    
                        <!-- PROJECT NAME -->
                        <h4 class="text-accent text-center justify-center text-lg font-orbitron font-bold">
                            <span class="text-primary"></span>${project.name}
                            <!-- <span class="text-primary">L</span>ibraries -->
                        </h4>
    
                        <!-- DESCRIPTION -->
                        <p class="mx-2 text-center tesxt-sm text-accent md:text-start-">
                            ${project.description}
                        </p>
    
    
                        <!-- BUTTONS -->
                        <div class="flex justify-center md:justify-start mt-4">
                            <!-- BUTTON -->
                            <a href = "${project.privacy_page}" class="py-2 px-6 pt-2
                                    text-dark bg-primary 
                                    rounded-full baseline
                                    hover:bg-opacity-60
                            ">Privacy & Terms</a>
                        </div>
    
                        <!-- VISIT PROECT BUTTON -->
                    </div>`
    return projectTemplate
}

function loadProjects() {
    PROJECTS.forEach((project) => {
        const projectCard = document.createElement('div')
        projectCard.classList.add('h-full', 'w-full', 'flex', 'items-center', 'justify-center')
        projectCard.innerHTML = formatProject(project)
        projectsContainer.appendChild(projectCard)
    })
}

// LOAD PROJECTS
loadProjects()