import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { trackPageview } from '../../lib/mixpanel';

export function useAnalyticsPageviews(): void {
  const location = useLocation();
  useEffect(() => {
    trackPageview(location.pathname + location.search);
  }, [location.pathname, location.search]);
}
