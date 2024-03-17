import '@/styles/search-bar.scss';
import { FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const SearchBar = ({popSearchBar, setPopSearchBar}: any) => {

  return (
    <section className='search-bar'>
        <div className='search-bar-wrapper'>
            <NavLink id="close-btn" onClick={() => setPopSearchBar(!popSearchBar)} to={''} >×</NavLink>
            <form method="get" action="/" role="search">
                <input type="search" placeholder="Search"/>
                <button type="submit" name="btnSubmit"><FaSearch /></button>
            </form>
        </div>
    </section>
  )
}

export default SearchBar;