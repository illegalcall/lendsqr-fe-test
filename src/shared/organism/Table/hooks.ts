import { useState, useEffect } from 'react';

export const useTable = (data: any[], itemsPerPage: number) => {
  const [isFilterOpen, setIsFilterOpen] = useState<null | Number>(null);
  const [isOptionsOpen, setIsOptionsOpen] = useState<null | Number>(null);

  const [currentItems, setCurrentItems] = useState<any[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const convertDate = (date: string) => {
    const dateObj = new Date(date);

    const dateOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };

    const dateFormatter = new Intl.DateTimeFormat('en-US', dateOptions);
    const timeFormatter = new Intl.DateTimeFormat('en-US', timeOptions);
    const formattedDate = `${dateFormatter.format(
      dateObj
    )} ${timeFormatter.format(dateObj)}`;
    return formattedDate;
  };

  return {
    convertDate,
    currentItems,
    pageCount,
    handlePageClick,
    isFilterOpen,
    setIsFilterOpen,
    isOptionsOpen,
    setIsOptionsOpen,
    itemOffset,
  };
};
