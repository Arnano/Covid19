import Search from "../components/Search";

export const Image = ({ onHandleClick, countriesLoading, countriesData }) => (
  <div className="image-container">
    <Search
      onHandleClick={onHandleClick}
      countriesLoading={countriesLoading}
      countriesData={countriesData}
    />
  </div>
);
