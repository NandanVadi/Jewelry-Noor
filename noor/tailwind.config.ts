import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.tsx','./components/**/*.tsx'], theme: { extend: {
 colors: { ivory:'#F5EFE6', champagne:'#D8C8B4', ink:'#211714', gold:'#B89A62', burgundy:'#3A1018' },
 fontFamily: { serif:['var(--serif)','serif'], sans:['var(--sans)','sans-serif'] } } } } satisfies Config;
