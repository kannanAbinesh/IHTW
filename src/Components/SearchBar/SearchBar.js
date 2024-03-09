/* Plugins */
import { Form } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";

/* Style */
import './searchBar.css';

function SearchBar() {

    const handleChange = ({input, label, placeholder, type, className}) => {
        return (
            <div>
                <Form.Control 
                    {...input}
                    label={label}
                    placeholder={placeholder}
                    type={type}
                    className={className}
                />
            </div>
        )
    }
    return (
        <div>
            <Field
                name="search"
                type="text"
                placeholder="Search for products"
                component={handleChange}
                className="searchBar"
            />
        </div>
    )
};

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

export default SearchBar;