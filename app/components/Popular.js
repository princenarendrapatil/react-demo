var React = require('react');

class Popular extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedLang : 'All'
        };
        this.updateSelectedLang = this.updateSelectedLang.bind(this);
    }
    updateSelectedLang(_lang){
        this.setState(function(){
            return {selectedLang: _lang}
        });
    }
    render(){
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        return(
            <ul className="langs">
                {
                    languages.map(function(_lang){
                        return (
                            <li
                                className={_lang === this.state.selectedLang ? "selected-item" : null}
                                onClick={this.updateSelectedLang.bind(null, _lang)}
                                key={_lang}>
                                {_lang}
                            </li>
                        )
                    }, this)
                }
            </ul>
        )
    }
}

module.exports = Popular;