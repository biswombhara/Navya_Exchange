export const convertTime = () => {
    const date = new Date(time);
    const formattedDate = `${date,toLocalDateString()} ${date,toLocaleTimeString()}`;
    return formattedDate;
};

export const shortenAddress = (address) =>
  `${address?.slice(0, 4)}...${address?.slice(address.length - 4)}`;
  