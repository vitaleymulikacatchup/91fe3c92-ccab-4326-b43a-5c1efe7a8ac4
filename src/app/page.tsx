"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import FooterLogo from '@/components/footer/FooterLogo';
import { ArrowRight } from 'lucide-react';

export default function Home() {
    return (
        <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
            <div id="nav" data-section="nav">
                <NavbarBase 
                    logoSrc="/images/logo.svg"
                    logoAlt="MemeCoin"
                    leftButtonText="Menu"
                    rightButtonText="Contact"
                    buttonBgColor="#FF5A5F"
                    buttonHoverBgColor="#FFD166"
                    buttonTextColor="#fff"
                    buttonHoverTextColor="#000"
                    className="sticky top-0"
                />
            </div>

            <div id="hero" data-section="hero" className="scroll-mt-24">
                <SplitHero
                    title="Hey there"
                    subtitle="The future of playful investments."
                    primaryButtonText="Buy Now"
                    secondaryButtonText="Learn More"
                    onPrimaryButtonClick={() => {}}
                    onSecondaryButtonClick={() => {}}
                />
            </div>

            <div id="about" data-section="about" className="scroll-mt-24">
                <SplitAbout
                    description="MemeCoin is a cryptocurrency designed for fun and easy trading, empowering users to engage in the meme economy."
                />
            </div>

            <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
                <HowToBuy3D
                    title="How to Buy MemeCoin"
                    steps={[
                        { title: 'Step 1', description: 'Download a wallet', image: '/images/placeholder1.avif', position: 'left', isCenter: false },
                        { title: 'Step 2', description: 'Purchase Ethereum', image: '/images/placeholder2.avif', position: 'center', isCenter: true },
                        { title: 'Step 3', description: 'Swap for MemeCoin', image: '/images/placeholder3.avif', position: 'right', isCenter: false }
                    ]}
                />
            </div>

            <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
                <BigNumberTokenomics
                    title="Tokenomics"
                    description="Understanding the value behind MemeCoin"
                    kpiItems={[
                        { value: '5M', description: 'Total Supply', longDescription: 'The complete supply of MemeCoin is 5 million.', icon: ArrowRight },
                        { value: '2M', description: 'Circulating Supply', longDescription: 'Currently circulating 2 million MemeCoins.', icon: ArrowRight },
                        { value: '1M', description: 'Market Cap', longDescription: 'The market cap is at 1 million USD.', icon: ArrowRight }
                    ]}
                />
            </div>

            <div id="faq" data-section="faq" className="scroll-mt-24">
                <BentoFAQ
                    items={[
                        { title: 'What is MemeCoin?', content: 'MemeCoin is a new cryptocurrency that leverages community engagement and playful branding.' },
                        { title: 'How do I buy MemeCoin?', content: 'You can purchase MemeCoin through popular exchanges or via a direct swap on Ethereum networks.' },
                        { title: 'Is it safe?', content: 'MemeCoin uses advanced security protocols to ensure the safety of your investments.' },
                        { title: 'What are the benefits of MemeCoin?', content: 'Being part of the meme economy allows for engagement and potential profitability in a fun way.' }
                    ]}
                />
            </div>

            <div id="footer" data-section="footer" className="scroll-mt-24">
                <FooterLogo
                    logoSrc="/images/logo.svg"
                    logoAlt="MemeCoin"
                    logoText="MemeCoin"
                    className="footer"
                    svgClassName="logo"
                />
            </div>
        </SiteThemeProvider>
    );
}