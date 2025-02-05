import React, { useState } from 'react';

function App() {
    // State for the form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [interests, setInterests] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    // Handlers for input changes
    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);

    // Handler for checkbox changes
    const handleInterestChange = (e) => {
        const { value, checked } = e.target;
        setInterests((prevInterests) =>
            checked ? [...prevInterests, value] : prevInterests.filter(interest => interest !== value)
        );
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true); // Mark the form as submitted
    };

    return ( <
        main > { /* Portfolio Section */ } <
        h1 > Hi, I 'm (your name)</h1> <
        img alt = "My profile pic"
        src = "https://via.placeholder.com/350" / >
        <
        h2 > About Me < /h2> <
        p >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <
        /p>

        <
        div >
        <
        a href = "https://github.com" > GitHub < /a> <
        a href = "https://linkedin.com" > LinkedIn < /a> <
        /div>

        { /* Newsletter Signup Form */ } <
        form onSubmit = { handleSubmit } >
        <
        label >
        Name:
        <
        input type = "text"
        value = { name }
        onChange = { handleNameChange }
        aria - label = "name" /
        >
        <
        /label> <
        label >
        Email:
        <
        input type = "email"
        value = { email }
        onChange = { handleEmailChange }
        aria - label = "email" /
        >
        <
        /label>

        <
        fieldset >
        <
        legend > Interests: < /legend> <
        label >
        <
        input type = "checkbox"
        value = "music"
        onChange = { handleInterestChange }
        aria - label = "music" /
        >
        Music <
        /label> <
        label >
        <
        input type = "checkbox"
        value = "sports"
        onChange = { handleInterestChange }
        aria - label = "sports" /
        >
        Sports <
        /label> <
        label >
        <
        input type = "checkbox"
        value = "tech"
        onChange = { handleInterestChange }
        aria - label = "tech" /
        >
        Tech <
        /label> <
        /fieldset>

        <
        button type = "submit" > Submit < /button> <
        /form>

        { /* Display success message after form submission */ } {
            submitted && ( <
                div >
                <
                p > Thank you
                for signing up, { name }! < /p> {
                    interests.length > 0 && ( <
                        p > You are interested in: { interests.join(', ') } < /p>
                    )
                } <
                /div>
            )
        } <
        /main>
    );
}

export default App;