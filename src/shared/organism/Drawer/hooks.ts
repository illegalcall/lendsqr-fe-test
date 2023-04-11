import { useRouter } from 'next/router';

export const useDrawer = () => {
  const router = useRouter();
  const checkRouteSelected = (path: string) => {
    return router.asPath.startsWith(path);
  };

  return { checkRouteSelected };
};
