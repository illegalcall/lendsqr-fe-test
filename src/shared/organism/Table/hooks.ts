export const useTable = () => {
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
  return { convertDate };
};
