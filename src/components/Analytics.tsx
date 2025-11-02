import { useEffect } from 'react';

// Google Analytics tracking
export const trackEvent = (action: string, category: string, label?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
    });
  }
};

const Analytics = () => {
  useEffect(() => {
    // Track initial page load
    trackPageView(window.location.pathname);
  }, []);

  return null;
};

export default Analytics;