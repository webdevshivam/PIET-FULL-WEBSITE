
import React, { useState, useEffect } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Wifi, WifiOff } from 'lucide-react';

const ConnectionStatus: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOfflineAlert, setShowOfflineAlert] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineAlert(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineAlert(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Auto-hide offline alert after 5 seconds
    let timeout: NodeJS.Timeout;
    if (!isOnline) {
      timeout = setTimeout(() => {
        setShowOfflineAlert(false);
      }, 10000);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      if (timeout) clearTimeout(timeout);
    };
  }, [isOnline]);

  if (!showOfflineAlert) return null;

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm">
      <Alert variant="destructive">
        <WifiOff className="h-4 w-4" />
        <AlertDescription>
          You're currently offline. Some features may not work properly.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default ConnectionStatus;
