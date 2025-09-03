import React, { useRef, useEffect } from 'react';

const bohemianPhrases = [
  'عش اللحظة', 'كن أنت السلام', 'اتبع روحك الحرة', 'الجمال في البساطة', 'الطبيعة هي ملهمتي',
  'رقصة تحت النجوم', 'قلبي بوهيمي', 'سافر بعيداً، تجد نفسك', 'اصنع فنك الخاص', 'اهتز مع إيقاع الكون',
  'روح برية، قلب لطيف', 'دع إبداعك يزهر', 'تنفس حباً، ازفر سلاماً', 'الأرض هي بيتي', 'اجمع ذكريات لا أشياء',
  'كن ضوءاً في الظلام', 'استمع إلى همس الريح', 'الحرية حالة ذهنية', 'عش بألوانك الخاصة', 'السعادة رحلة لا وجهة',
  'دع روحك تتألق', 'مغامرات تنتظر', 'نمِ ببطء ووعي', 'كن صدى للحب', 'اكتشف السحر في كل يوم',
  'حالم بالنهار، مفكر بالليل', 'الزهور البرية لا تهتم أين تنمو', 'عش ببساطة، احلم بكبر', 'كن شاكراً، كن متوحشاً', 'ثق في توقيت حياتك',
  'دع الموسيقى تحملك', 'الفن يغسل غبار الروح', 'كن جريئاً، كن مختلفاً', 'ابق قريباً مما يجعلك سعيداً', 'روح غجرية',
  'الحب هو البوصلة', 'ابحث عن الشمس في الأيام الغائمة', 'عش بشغف', 'استكشف، احلم، اكتشف', 'كن قوس قزح في سحابة أحدهم',
  'طاقة إيجابية فقط', 'دع الأمور تسير', 'اكتب قصتك الخاصة', 'قلب رحال', 'كن طيباً، كن شجاعاً',
  'عش بتناغم مع الطبيعة', 'كن سبباً لابتسامة أحدهم', 'الحياة قصيرة، اجعلها جميلة', 'اتبع الشمس', 'اجعل روحك سعيدة'
];

interface Phrase {
    text: string;
    x: number;
    y: number;
    speed: number;
    fontSize: number;
}

const getRandomPhrase = () => bohemianPhrases[Math.floor(Math.random() * bohemianPhrases.length)];

export const BohemianRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrameId: number;
    let phrases: Phrase[] = [];

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      phrases = [];
      const phraseCount = 40; 

      for (let i = 0; i < phraseCount; i++) {
        const fontSize = Math.random() * 8 + 12; // 12px to 20px
        phrases.push({
          text: getRandomPhrase(),
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height, // Start at random positions
          speed: Math.random() * 0.4 + 0.2, // Slower speed: 0.2 to 0.6
          fontSize: fontSize,
        });
      }

      const draw = () => {
        // Clear the canvas completely for a crisp, no-trail effect
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Use a less transparent white for clearer text
        context.fillStyle = 'rgba(255, 255, 255, 0.5)'; 

        phrases.forEach(phrase => {
          context.font = `${phrase.fontSize}px Inter, sans-serif`;
          context.fillText(phrase.text, phrase.x, phrase.y);

          phrase.y += phrase.speed;

          // Reset when it goes off screen
          if (phrase.y > canvas.height + phrase.fontSize) {
            phrase.y = -phrase.fontSize;
            phrase.x = Math.random() * canvas.width;
            phrase.speed = Math.random() * 0.4 + 0.2;
            phrase.fontSize = Math.random() * 8 + 12;
            phrase.text = getRandomPhrase();
          }
        });

        animationFrameId = requestAnimationFrame(draw);
      };
      
      draw();
    };

    const handleResize = () => {
        cancelAnimationFrame(animationFrameId);
        setup();
    }
    
    window.addEventListener('resize', handleResize);
    setup();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0" 
      aria-hidden="true"
    />
  );
};