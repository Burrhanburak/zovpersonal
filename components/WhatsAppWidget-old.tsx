'use client';

import { useEffect, useState } from 'react';
import { Send, X } from 'lucide-react';
import { messages, getLocale, type Locale } from '@/lib/messages';

const phoneNumber = '+905385969943ß'; // Replace with your actual WhatsApp number

export default function WhatsAppWidget() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [message, setMessage] = useState('');
  const [locale, setLocale] = useState<Locale>('tr');

  useEffect(() => {
    // Get current locale
    const currentLocale = getLocale();
    setLocale(currentLocale);
    
    // Set default message based on locale
    setMessage(messages[currentLocale].defaultMessage);
    
    // Show widget after 12 seconds with notification sound
    const timer = setTimeout(() => {
      setVisible(true);
      setExpanded(true);
      
      // Play notification sound with multiple fallbacks
      playNotificationSound();
    }, 3000); // 3 seconds for testing (change back to 12000 later)
    
    return () => clearTimeout(timer);
  }, []);

  const playNotificationSound = () => {
    console.log('Playing notification sound...');
    
    // Method 1: Try Web Audio API first
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Create two tones for a "ding" effect
      const oscillator1 = audioContext.createOscillator();
      const oscillator2 = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator1.connect(gainNode);
      oscillator2.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Two frequencies for a richer "tink" sound
      oscillator1.frequency.value = 800;
      oscillator2.frequency.value = 1200;
      oscillator1.type = 'sine';
      oscillator2.type = 'sine';
      
      // Quick notification sound
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
      
      oscillator1.start(audioContext.currentTime);
      oscillator1.stop(audioContext.currentTime + 0.2);
      oscillator2.start(audioContext.currentTime);
      oscillator2.stop(audioContext.currentTime + 0.15);
      
      console.log('Web Audio API sound played successfully');
      return;
    } catch (error) {
      console.log('Web Audio API failed:', error);
    }
    
    // Method 2: Try HTML5 Audio with data URI
    try {
      // Create a simple beep sound using data URI
      const beepSound = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmgfCEOa2+23bCEFl2+y7OOJOAcTdLjt5qhRERRJo+PwuGEcCVOg4+3aZx0JhW2v7d+OQQoUZrnq7Z9NEA5Zr+fttm4lDD1Qw+3WZhsGlm6z7t+NOwcUZ7nq7KZUEw5CnuPzsFgUCk2k5e++YBcJhnGx7d6GPwwYYrrv455EDg9SsOXst2kiCzFBxPLSfyMGmGu17+GLOgkTY7jt46JTEwZDo+D0sVsUCUOi4/C8aBsKg3Cs7t6NPA4PYbXr6JJFEAhHq+Tv1VcXCl2k5/DJSBAJcq/k6qRXEQxAo+Lys10cCyN+w/HTfSIHlmy17OOGPAoTYbTo5aJSFQU+m9vt1GUcB3+k4e7BaBsGlnC18e6PIAwbZrjr7axWFAwqXc/rclIZCktXleLvz2EhB35UqeLp1nIjCH1TyOb7xmgicn1PyfT9yG4lc3sxy/fxx3wgdnqy1+L6yHQie3pzwfP+y3klcZ1zrf9/yXhz"';
      const audio = new Audio(beepSound);
      audio.volume = 0.3;
      audio.play().then(() => {
        console.log('Data URI audio played successfully');
      }).catch((e) => {
        console.log('Data URI audio failed:', e);
      });
    } catch (error) {
      console.log('All audio methods failed:', error);
    }
  };

  const t = messages[locale];

  const handleSend = () => {
    if (!message.trim()) return;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setExpanded(false); // Collapse widget after sending, keep visible
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const toggleWidget = () => {
    setExpanded(!expanded);
  };

  if (!visible) return null;

  return (
    <>
      {/* Floating WhatsApp Button */}
      {!expanded && (
        <div 
          onClick={toggleWidget}
          className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl cursor-pointer z-50 flex items-center justify-center animate-slideInFromBottom transition-all duration-300 hover:scale-110 animate-bounce-gentle"
        >
          <svg 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="white"
            className="drop-shadow-lg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
          </svg>
          
          {/* Notification badge */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
            1
          </div>
        </div>
      )}

      {/* Expanded WhatsApp Widget */}
      {expanded && (
        <div className="fixed bottom-6 right-6 w-[320px] bg-white shadow-2xl border rounded-2xl z-50 animate-slideInFromBottom transform transition-all duration-300">
          {/* Header */}
          <div className="bg-green-600 text-white text-center py-3 font-semibold rounded-t-2xl relative">
            {t.header}
            <button 
              onClick={() => setExpanded(false)} 
              className="absolute top-2 right-2 text-white bg-black/20 hover:bg-black/40 p-1 rounded-full transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Customer Representative */}
          <div className="flex items-center gap-3 p-4 bg-gray-50">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-xl">👤</span>
            </div>
            <div>
              <span className="text-gray-700 font-medium">{t.helper}</span>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Online
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4">
            <div className="flex flex-col gap-3">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t.placeholder}
                className="w-full px-3 py-3 border rounded-lg resize-none outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                rows={3}
              />
              
              <div className="flex gap-2">
                <button 
                  onClick={handleSend}
                  disabled={!message.trim()}
                  className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {t.button}
                </button>
              </div>
            </div>
          </div>

          {/* WhatsApp Branding */}
          <div className="px-4 pb-4">
            <div className="text-xs text-gray-500 text-center">
              Powered by WhatsApp
            </div>
          </div>
        </div>
      )}
    </>
  );
}
