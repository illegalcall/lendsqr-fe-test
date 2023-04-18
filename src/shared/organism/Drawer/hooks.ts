import { useRouter } from 'next/router';

export const useDrawer = () => {
  const router = useRouter();
  const checkRouteSelected = (path: string) => {
    return router.asPath.endsWith(path);
  };

  const handleClick = (path: string) => {
    router.push(path);
  };

  return { checkRouteSelected, handleClick };
};
