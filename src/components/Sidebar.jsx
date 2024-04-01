import { MySidebar } from "../style/MainStyle";
import { X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeSlider } from "../store/GlobalSlice";
import { FetchCategories } from "../store/CategoriesSlice";
import { Spinner } from "./Index";
import { useEffect } from "react";
const Sidebar = () => {
  const { isShow } = useSelector((state) => state.GlobalSlice);
  const { isLoading, categories } = useSelector(
    (state) => state.CategoriesSlice
  );
  const dispatch = useDispatch();
  // Implement the Fetching Function
  useEffect(() => {
    dispatch(FetchCategories());
  }, [dispatch]);
  return (
    <MySidebar
      className={`sidebar position-fixed h-100 bg-white top-0 p-3 ${
        isShow ? "show" : ""
      }`}
    >
      <div className="side_head d-flex align-items-center justify-content-between">
        <div className="title fw-bold text-capitalize">all categories</div>
        <button
          className="bg-transparent border-0"
          onClick={() => dispatch(closeSlider())}
        >
          <X size={20} />
        </button>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className="p-0 mt-5">
          {categories.map((item) => {
            return (
              <li className="mb-3" key={item}>
                <Link to={item} className="text-capitalize p-1">
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </MySidebar>
  );
};

export default Sidebar;
