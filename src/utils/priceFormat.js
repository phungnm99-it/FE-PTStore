export const priceFormat = (price) => {
  if (price?.toString()) {
    let format =
      price
        .toLocaleString("en-US", {
          style: "currency",
          currency: "VND",
        })
        .slice(1) + "đ";
    return format.replaceAll(",", ".");
  }
};
