import { useRouter } from 'next/router';

export const useDrawer = () => {
  const router = useRouter();
  const checkRouteSelected = (path: string) => {
    return router.asPath.endsWith(path);
  };

  const handleClick = (path: string) => {
    console.log('🚀 ~ file: hooks.ts:10 ~ handleClick ~ path:', path);
    router.push(path);
  };

  return { checkRouteSelected, handleClick };
};
