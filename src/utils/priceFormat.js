export const priceFormat = (price) => {
  if (price?.toString()) {
    return (
      price
        .toLocaleString("en-US", {
          style: "currency",
          currency: "VND",
        })
        .slice(1) + "đ"
    );
  }
};
