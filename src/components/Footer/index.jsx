import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>
                    &copy; {new Date().getFullYear()} MovieHub. All rights
                    reserved.
                </p>
                <p>
                    Follow us on
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        Facebook
                    </a>
                    ,
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        Twitter
                    </a>
                    , and
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        Instagram
                    </a>
                    .
                </p>
            </div>
        </footer>
    );
}

export default Footer;
