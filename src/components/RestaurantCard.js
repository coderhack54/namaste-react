import { CLOUDINARY_URL } from "../utils/constants";

const RestaurantCard = ({resData,handleClick}) => {
    const {data} = resData;
    const {id,name,area,cloudinaryImageId,cuisines,avgRating} = data;
    return (
        <div className="card" onClick={()=>handleClick(id)}>
            <div className="img-container">
            <img src={`${CLOUDINARY_URL}/${cloudinaryImageId}`} alt="recipe_img" />
            </div>
            <div className="desc">
                <h4>{name}</h4>
                <h6><span>✳️</span> {avgRating}</h6>
                <p>{cuisines?.slice(0,3).join(",")}</p>
                <p>{area}</p>

            </div>
        </div>
    )
}

export default RestaurantCard;