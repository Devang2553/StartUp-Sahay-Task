// utils/useAuth.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useAuth = () => {
  const router = useRouter();

  // Check if the user is authenticated
  const isAuthenticated = typeof window !== 'undefined' && Boolean(localStorage.getItem('token'));

  useEffect(() => {
    // If the user is not authenticated, redirect them to the login page
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return isAuthenticated;
};

export default useAuth;
