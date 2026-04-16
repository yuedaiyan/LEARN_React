import Header from "../../components/Header";
import Signature from "../../components/Signature";
import "./NotFoundPage.css";

export default function NotFoundPage() {
    return (
        <>
            <title>404 Page not found</title>
            <link
                rel="icon"
                type="image/svg+xml"
                href="error-favicon.png"
            />

            <Header />
            <div className="not-found-page">
                <div className="not-found-message">Page not found</div>

                <Signature />
            </div>
        </>
    );
}
