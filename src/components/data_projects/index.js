import p1 from '../../assets/projects_cover/1.png';
import p2 from '../../assets/projects_cover/2.png';
import p3 from '../../assets/projects_cover/3.png';
import p4 from '../../assets/projects_cover/4.png';
import p5 from '../../assets/projects_cover/5.png';
import p6 from '../../assets/projects_cover/6.png';
import p7 from '../../assets/projects_cover/7.png';
import p8 from '../../assets/projects_cover/8.png';
import p9 from '../../assets/projects_cover/9.png';
import p10 from '../../assets/projects_cover/10.png';
import p11 from '../../assets/projects_cover/11.png';

export const projects = [
    {
        id: 1,
        name: 'Reservia',
        localLink: p1,
        description: {
            challenge: [
                `Transformer une maquette en site web avec HTML & CSS.`,
            ],
            solution: [
                `Implémenter une interface responsive`,
                `Intégrer du contenu conformément à une maquette`,
            ],
        },
        tecnologies: ['html', 'css'],
        externalLink: 'https://marinasatsyk.github.io/DardeMarina_02_18032021/',
        gitHub: 'https://github.com/marinasatsyk/DardeMarina_02_18032021.git',
    },
    {
        id: 2,
        name: 'ohmyfood',
        localLink: p2,
        description: {
            challenge: [`Dynamiser une page web avec des animations CSS.`],
            solution: [
                `Utiliser un système de gestion de versions pour le suivi du projet et son hébergement`,
                `Mettre en œuvre des effets CSS graphiques avancés`,
                `Mettre en place son environnement Front-End`,
                `Mettre en place une structure de navigation pour un site web`,
                `Assurer la cohérence graphique d'un site web`,
            ],
        },
        tecnologies: ['html', 'css', 'sass', 'github'],
        externalLink:
            ' https://marinasatsyk.github.io/DardeMarina_03_18032021/',
        gitHub: 'https://github.com/marinasatsyk/DardeMarina_03_18032021.git',
    },
    {
        id: 3,
        name: 'GameOn',
        localLink: p3,
        description: {
            challenge: [`Créer une landing page avec Javascript.`],
            solution: [
                `Programmer en JavaScript`,
                `Mise en place  d'un formulaire et de la vérifictaion des données saisiés par l'utilisateur.`,
            ],
        },
        tecnologies: ['js', 'html', 'css', 'sass', 'eslint'],
        externalLink: '',
        gitHub: 'https://github.com/marinasatsyk/GameOn-website-FR.git',
    },
    {
        id: 4,
        name: 'FishEye',
        localLink: p4,
        description: {
            challenge: [
                `Créer un site accessible pour une plateforme de photographes.`,
            ],
            solution: [
                `Assurer l'accessibilité d'un site web`,
                `Gérer les évènements d'un site avec JavaScript`,
                `Développer une application web modulaire avec Factory design pattern`,
                `Ecrire du code JavaScript maintenable en utilisant la programmation orienté objet`,
            ],
        },
        tecnologies: ['js', 'html', 'css', 'sass', 'eslint', 'github'],
        externalLink: 'https://marinasatsyk.github.io/MarinaDARDE_6_18032021/',
        gitHub: 'https://github.com/marinasatsyk/MarinaDARDE_6_18032021.git',
    },
    {
        id: 5,
        name: 'Les petits plats',
        localLink: p5,
        description: {
            challenge: [`Développer un algorithme de recherche en JavaScript.`],
            solution: [
                `Analyser un problème informatique`,
                `Développer un algorithme pour résoudre un problème`,
                `Le projet a été réalisée  en appliquant Programmation orienté objet`,
            ],
        },
        tecnologies: ['js', 'html', 'css', 'sass', 'eslint', 'github'],
        externalLink: 'https://marinasatsyk.github.io/MarinaDARDE_7_18032021/',
        gitHub: 'https://github.com/marinasatsyk/MarinaDARDE_7_18032021.git',
    },
    {
        id: 6,
        name: 'Billed',
        localLink: p6,
        description: {
            challenge: [`Débugger et testez un SaaS RH`],
            solution: [
                `Ecrire des tests unitaires avec JavaScript`,
                `Débugger une application web avec le Chrome Debugger`,
                `Rédiger un plan de test end-to-end manuel`,
                `Ecrire des tests d'intégration avec JavaScript`,
            ],
        },
        tecnologies: [
            'js',
            'html',
            'css',
            'sass',
            'eslint',
            'jest',
            'istanbul',
            'github',
        ],
        externalLink: '',
        gitHub: 'https://github.com/marinasatsyk/DARDEMarina_9_18.03.2021.git',
    },
    {
        id: 7,
        name: 'Learn@Home',
        localLink: p7,
        description: {
            challenge: [
                `Contribuer à un projet en utilisant une méthodologie agile`,
                `Créer une maquette pour un client`,
                `Identifier les besoins de l'application à partir d'un cahier des charges`,
                `Modéliser une solution technique pour un client`,
            ],
            solution: [
                `Créer des diagrammes de cas d’usage`,
                `Créer des user stories avec critères d’acceptation`,
                `Créer des maquettes du site`,
                `Créer d’un Kanban découpant le projet`,
            ],
        },
        tecnologies: [
            'agile',
            'figma',
            'kanban',
            'uml diagrammes de cas d’usage',
            'notion',
            'github',
        ],
        externalLink: '',
        gitHub: 'https://github.com/marinasatsyk/MarinaDARDE_10_18032022.git',
    },
    {
        id: 8,
        name: 'Kasa',
        localLink: p8,
        description: {
            challenge: [
                `Développer une application Web avec React et React Router sans des librairies externes`,
            ],
            solution: [
                `Initialiser une application web avec un framework`,
                `Développer les routes d'une application web avec React Router`,
                `Créer des composants avec React`,
            ],
        },
        tecnologies: [
            'js',
            'react',
            'react-router-dom',
            'styled-components',
            'html',
            'css',
            'sass',
            'eslint',
            'github',
        ],
        externalLink: '',
        gitHub: 'https://github.com/marinasatsyk/DARDEMarina_11_18.03.2021.git',
    },
    {
        id: 9,
        name: 'SportSee',
        localLink: p9,
        description: {
            challenge: [`Développer un tableau de bord d'analytics avec React`],
            solution: [
                `Assurer la qualité des données d'une application`,
                `Interagir avec un service Web`,
                `Développer des éléments graphiques avancés à l'aide de bibliothèques JavaScript`,
                `Produire de la documentation technique pour une application`,
            ],
        },
        tecnologies: [
            'react',
            'react-router',
            'react-router-dom',
            'recharts',
            'styled-components',
            'js',
            'html',
            'css',
            'sass',
            'eslint',
            'axios',
            'jsdoc',
            'prop-types',
            'github',
            'API',
        ],
        externalLink: '',
        gitHub: 'https://github.com/marinasatsyk/DARDEMarina_P12_18032021.git',
    },
    {
        id: 10,
        name: 'ArgentBank',
        localLink: p10,
        description: {
            challenge: [
                `Utiliser une API pour un compte utilisateur bancaire avec React`,
            ],
            solution: [
                `Implémenter un gestionnaire d'état dans une application React`,
                `Intéragir avec une API`,
                `Modéliser une API`,
                `S'authentifier à une API avec JWT`,
            ],
        },
        tecnologies: [
            'react',
            'react-router',
            'react-router-dom',
            '@reduxjs/toolkit',
            'react-redux',
            'styled-components',
            'js',
            'html',
            'css',
            'sass',
            'eslint',
            'axios',
            'jsdoc',
            'prop-types',
            'swagger',
            'github',
            'API',
        ],
        externalLink: '',
        gitHub: 'https://github.com/marinasatsyk/DARDEMarina_13_18032021.git',
    },
    {
        id: 11,
        name: 'HRnet',
        localLink: p11,
        description: {
            challenge: [
                `Faire passer une librairie jQuery vers React`,
                `Transformer une application en jQuery en application en React`,
            ],
            solution: [
                `Programmer en JavaScript avec la programmation fonctionnelle`,
                `Refondre une application pour réduire la dette technique`,
                `Déployer une application front-end`,
                `Analyser la performance d'une application web`,
            ],
        },
        tecnologies: [
            'react',
            'js',
            'html',
            'css',
            '@reduxjs/toolkit',
            'date-fns',
            'jsdoc',
            'prop-types',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-dom',
            'react-select',
            'react-table',
            'sass',
            'eslint',
            'axios',
            'github',
        ],
        externalLink: 'https://www.npmjs.com/package/darde_p14_modal_lib',
        gitHub: 'https://github.com/marinasatsyk/DARDEMarina_P14_18032021.git',
        gitHub_modal:
            ' https://github.com/marinasatsyk/DARDEMarina_P14_modal_lib.git',
    },
];
