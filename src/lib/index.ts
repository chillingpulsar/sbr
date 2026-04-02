// place files you want to import through the `$lib` alias in this folder.

export * from './blocks-renderer/index.js';


import IconYouTube from '@tabler/icons-svelte/icons/brand-youtube';
import IconFacebook from '@tabler/icons-svelte/icons/brand-facebook';
import IconLinkedin from '@tabler/icons-svelte/icons/brand-linkedin';
import IconGitHub from '@tabler/icons-svelte/icons/brand-github';

export const socials = [
    {
        label: 'YouTube',
        href: 'https://www.youtube.com/@MikeJohnEviota',
        icon: IconYouTube
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/mike.eviota',
        icon: IconFacebook
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/mike-john-eviota-4443a6288',
        icon: IconLinkedin
    },
    {
        label: 'GitHub',
        href: 'https://github.com/chillingpulsar',
        icon: IconGitHub
    }
];