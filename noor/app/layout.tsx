import type {Metadata} from 'next';import {Playfair_Display,DM_Sans} from 'next/font/google';import './globals.css';import Shell from '@/components/Shell';import Navbar from '@/components/Navbar';import {WhatsAppCTA} from '@/components/Sections';
const serif=Playfair_Display({subsets:['latin'],weight:['400','500'],style:['normal','italic'],variable:'--serif'});const sans=DM_Sans({subsets:['latin'],variable:'--sans'});
export const metadata:Metadata={title:'Noor & Co. | Jewellers since 1986',description:'A tradition worth passing on.'};
export default function L({children}:{children:React.ReactNode}){return <html lang="en" className={`${serif.variable} ${sans.variable}`}><body><Shell><Navbar/>{children}<WhatsAppCTA/></Shell></body></html>}
