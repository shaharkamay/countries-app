import { useEffect, useState } from "react";

function useCountries(countriesJson) {
  const [countryCard, setCountryCard] = useState("");
  const [countryList, setCountryList] = useState(countriesJson);

  useEffect(() => {
    if (!countryCard.trim()) return; // makes sure empty string doesn't trip out
    const filtered = countriesJson.filter(obj =>
      obj.name.toLowerCase().includes(countryCard.toLowerCase())
    );
    setCountryList(filtered);
  }, [countryCard, countriesJson]); // Watching for changes on countriesJson ?

  return [countryCard, setCountryCard, countryList];
}
export default useCountries;
