import React from "react";

import UserCreate from "./UserCreate";

import LanguageContext from "./contexts/LanguageContext";

class App extends React.Component {

    state = {
        language: 'english'
    };

    render = () => {
        return (
            <div className={"ui container"}>
                <div>
                    Select a language:
                    <i className={"flag us"} onClick={() => this.onLanguageChange('english')}/>
                    <i className={"flag nl"} onClick={() => this.onLanguageChange('dutch')}/>
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate/>
                    </LanguageContext.Provider>
                </div>
            </div>
        );
    };

    onLanguageChange = language => {
        this.setState({
            language: language
        });
    };
}

export default App;