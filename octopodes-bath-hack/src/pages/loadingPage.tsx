// loadingPage.tsx
import './loadingPage.css';

function LoadingPage() {
    return (
        <>  
            <div className="loading-container">
                <div className="container-border">
                    <div className="bottom-left"></div>
                    <div className="bottom-right"></div>
                </div>

                <h1 className="game-name" >GAME NAME</h1>
                <p className="loading-text">Loading</p>
                <p className="credits">
                    Credits: Nathan Wong, Isaac Au, Oliver Claussnitzer-Brown
                </p>
            </div>
        </>
    );
}

export default LoadingPage;
