import React from "react";

const ShoeCard = ({ imgUrl, changeBannerImg, bannerImg }) => {
  const handleClick = () => {
    if (bannerImg != imgUrl.bigShoe) {
      changeBannerImg(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bannerImg === imgUrl.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt="shoe"
          className="object-contain"
          width={127}
          height={103}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
