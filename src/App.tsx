import React from 'react';
import { appData } from './data';
import { SocialLinkButton } from './components/SocialLinkButton';
import { BohemianRain } from './components/BohemianRain';

const App: React.FC = () => {
  const { profile, style, socialLinks } = appData;

  const pageStyle: React.CSSProperties = {
    color: style.fontColor,
    fontFamily: "'Inter', sans-serif"
  };

  return (
    <main style={pageStyle} className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 selection:bg-white/30 overflow-hidden">
      <BohemianRain />
      <div className="relative z-10 w-full max-w-md mx-auto text-center flex flex-col items-center bg-black/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
        {/* Profile Section */}
        <div className="mb-8">
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-white/10 shadow-xl mb-4 mx-auto"
          />
          <h1 className="text-4xl font-bold tracking-tight">{profile.name}</h1>
          <div className="mt-4 max-w-sm">
            {profile.bio.split('\n').map((line, index) => {
              const key = `bio-line-${index}`;
              if (index === 0) {
                return <p key={key} className="text-lg text-white/90">{line}</p>;
              }
              if (index === 1) {
                return <p key={key} className="text-xl text-white my-3 italic font-semibold">{line}</p>;
              }
              return <p key={key} className="text-sm text-white/60">{line}</p>;
            })}
          </div>
        </div>

        {/* Social Links Section */}
        <div className="w-full flex flex-col items-center">
          {socialLinks.map((link) => (
            <SocialLinkButton key={link.platform} link={link} borderRadius={style.buttonRadius} />
          ))}
        </div>
        
        <footer className="mt-12 text-center text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} {profile.name}.</p>
        </footer>
      </div>
    </main>
  );
};

export default App;